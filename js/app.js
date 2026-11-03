/**
 * PLATAFORMA DE ESTUDOS - MOTOR DA APLICAÇÃO (APP.JS)
 * Gerencia o concurso ativo (ver js/concursos.js), o banco de questões em
 * modo Treino, os simulados no formato do edital (modo Prova), cronômetro,
 * navegação por abas, persistência no LocalStorage, desempenho, leitor de
 * teoria, trilha de Português e videoaulas.
 */

(function () {
  "use strict";

  // --- CHAVES GLOBAIS (valem para todos os concursos) ---
  // As três primeiras mantêm o prefixo antigo para não perder preferências salvas.
  const THEME_STORAGE_KEY = "dataprev_theme_pref";
  const FONT_STORAGE_KEY = "dataprev_font_scale";
  const PT_PROGRESS_KEY = "dataprev_pt_progress_v1";
  const CONCURSO_STORAGE_KEY = "simulados_concurso_ativo";
  const VIDEOS_STORAGE_KEY = "simulados_videos_v1";
  // v2: busca com curadoria (sequência + agrupamento por professor). Trocar a
  // versão descarta os caches antigos, que eram uma lista solta de vídeos.
  const VIDEO_BUSCA_KEY = "simulados_video_busca_v2";
  const VIDEO_VISTOS_KEY = "simulados_videos_vistos_v1";
  const VIDEO_OCULTOS_KEY = "simulados_videos_ocultos_v1";
  const YOUTUBE_KEY_STORAGE = "simulados_youtube_api_key";

  const state = {
    concursoId: concursos[0].id,
    currentTab: "simulado",
    // 'treino': o banco inteiro, com feedback imediato.
    // 'prova': um simulado montado no formato do edital, corrigido só no fim.
    mode: "treino",
    currentUid: null, // questão aberta no card
    pinnedUid: null, // segue visível mesmo fora do filtro, até o aluno navegar
    focusAfterRender: null, // seletor que recebe o foco depois do render
    // Progresso por concurso, sempre pela chave estável da questão (q.uid):
    respostas: {}, // { [uid]: opção } — treino + simulados já finalizados
    favoritas: new Set(),
    duvidas: new Set(),
    tentativa: null, // simulado em curso ou o último finalizado (ver iniciarSimulado)
    subjectFilter: "all",
    statusFilter: "all",
    areaFilter: null, // id de seção de teoria, vindo de "Praticar questões deste assunto"
    timerInterval: null,
    currentTheoryModuleId: null,
    currentTheorySectionId: null,
    currentPtLessonId: "pt-1-1",
    ptCompleted: new Set(), // ids das lições marcadas como estudadas
    videos: {}, // { [chaveDoAssunto]: [{ kind, ref, title, start }] } — adicionadas pelo aluno
    videoBusca: {}, // { [chaveDoAssunto]: { at, query, curso, items } } — cache da busca automática
    videoVistos: new Set(), // "kind:ref" das aulas assistidas
    videoOcultos: new Set(), // ids do YouTube que o aluno tirou das sugestões
    youtubeKey: "", // chave da YouTube Data API, só neste navegador
    fontScale: 1.0,
  };

  // --- CONCURSO ATIVO ---
  function concurso() {
    return concursos.find((c) => c.id === state.concursoId) || concursos[0];
  }

  function questions() {
    return concurso().questions;
  }

  // O número exibido (q.id) é a posição no banco e muda quando o banco cresce;
  // o progresso é salvo por q.uid, que não muda. Questão real carrega a
  // origem (caderno + número); inédita, a área + um hash do enunciado.
  function hashTexto(text) {
    let h = 0x811c9dc5;
    for (let i = 0; i < text.length; i++) {
      h ^= text.charCodeAt(i);
      h = Math.imul(h, 0x01000193);
    }
    return (h >>> 0).toString(36);
  }

  function atribuirUids() {
    concursos.forEach((c) => {
      c.questions.forEach((q) => {
        if (q.uid) return;
        if (q.origem?.tipo === "fgv") q.uid = `${q.origem.concurso}-${q.origem.id}`;
        else if (!q.origem) q.uid = `${c.id}-${q.id}`; // caderno oficial: numeração fixa
        else q.uid = `${q.area}-${hashTexto(q.statement)}`;
      });
      c.porUid = new Map(c.questions.map((q) => [q.uid, q]));
    });
  }

  // O formato é da questão; o do concurso vale como padrão. Assim um banco
  // Cebraspe pode misturar itens Certo/Errado com múltipla escolha.
  function isCertoErrado(q) {
    return (q.formato || concurso().formato) === "certo-errado";
  }

  // Concurso com itens C/E: a nota é líquida (um errado anula um certo).
  function hasPenalty() {
    return questions().some(isCertoErrado);
  }

  function optionLetters(q) {
    return isCertoErrado(q) ? ["C", "E"] : ["A", "B", "C", "D", "E"];
  }

  function estudoKey() {
    return `${concurso().storagePrefix}_estudo_v2`;
  }

  function historyKey() {
    return `${concurso().storagePrefix}_exam_history_v1`;
  }

  // --- MODOS: TREINO x SIMULADO ---
  function simuladoAtivo() {
    return state.mode === "prova" && state.tentativa && !state.tentativa.finalizada;
  }

  function simuladoEmRevisao() {
    return state.mode === "prova" && Boolean(state.tentativa?.finalizada);
  }

  // Questões do modo atual: o banco inteiro no treino; as do simulado na prova.
  function activeQuestions() {
    if (state.mode !== "prova") return questions();
    if (!state.tentativa) return [];
    return state.tentativa.uids.map((uid) => concurso().porUid.get(uid)).filter(Boolean);
  }

  function respostasAtivas() {
    return state.mode === "prova" ? state.tentativa?.respostas || {} : state.respostas;
  }

  // No treino o gabarito aparece ao responder; no simulado, só depois de finalizar.
  function mostraGabarito(q) {
    if (state.mode === "prova") return simuladoEmRevisao();
    return state.respostas[q.uid] !== undefined;
  }

  // Número que o aluno vê: no treino, o do banco; no simulado, a posição no caderno.
  function numeroDaQuestao(q) {
    if (state.mode !== "prova") return q.id;
    return state.tentativa.uids.indexOf(q.uid) + 1;
  }

  // Nota de um conjunto de questões. No Cebraspe cada item C/E errado anula
  // um certo (o erro em múltipla escolha só deixa de pontuar); a porcentagem
  // usa a nota líquida, nunca abaixo de zero.
  function computeScore(answers = respostasAtivas(), lista = activeQuestions()) {
    let correct = 0;
    let wrong = 0;
    let penalized = 0;
    const breakdown = {};
    lista.forEach((q) => {
      const subj = (breakdown[q.subject] ??= { total: 0, answered: 0, correct: 0, wrong: 0 });
      subj.total++;
      const ans = answers[q.uid];
      if (ans === undefined) return;
      subj.answered++;
      if (ans === q.correctAnswer) {
        correct++;
        subj.correct++;
      } else {
        wrong++;
        subj.wrong++;
        if (isCertoErrado(q)) penalized++;
      }
    });
    const total = lista.length;
    const points = correct - penalized;
    const percent = total ? Math.round((Math.max(points, 0) / total) * 100) : 0;
    return { correct, wrong, penalized, answered: correct + wrong, points, percent, total, breakdown };
  }

  // Carrega preferências globais e o estado do concurso salvo por último.
  function loadPersistedState() {
    try {
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
      } else if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        document.documentElement.setAttribute("data-theme", "dark");
      }

      const savedFont = localStorage.getItem(FONT_STORAGE_KEY);
      if (savedFont) {
        state.fontScale = parseFloat(savedFont);
        document.documentElement.style.setProperty(
          "--user-font-scale",
          `${state.fontScale}rem`,
        );
      }

      const savedPt = localStorage.getItem(PT_PROGRESS_KEY);
      if (savedPt) {
        const parsedPt = JSON.parse(savedPt);
        state.ptCompleted = new Set(parsedPt.completed || []);
        if (parsedPt.currentLessonId) {
          state.currentPtLessonId = parsedPt.currentLessonId;
        }
      }

      state.videos = JSON.parse(localStorage.getItem(VIDEOS_STORAGE_KEY) || "{}");
      state.videoBusca = JSON.parse(localStorage.getItem(VIDEO_BUSCA_KEY) || "{}");
      localStorage.removeItem("simulados_video_busca_v1");
      state.videoVistos = new Set(JSON.parse(localStorage.getItem(VIDEO_VISTOS_KEY) || "[]"));
      state.videoOcultos = new Set(JSON.parse(localStorage.getItem(VIDEO_OCULTOS_KEY) || "[]"));
      state.youtubeKey = localStorage.getItem(YOUTUBE_KEY_STORAGE) || "";
      // Versão anterior guardava `watched` em cada aula; passa para o conjunto.
      Object.values(state.videos).flat().forEach((video) => {
        if (video.watched) state.videoVistos.add(`${video.kind}:${video.ref}`);
        delete video.watched;
      });

      const savedConcurso = localStorage.getItem(CONCURSO_STORAGE_KEY);
      if (savedConcurso && concursos.some((c) => c.id === savedConcurso)) {
        state.concursoId = savedConcurso;
      }
    } catch (e) {
      console.warn("Erro ao carregar dados do localStorage:", e);
    }
    loadExamState();
  }

  // Progresso do concurso ativo: respostas, marcadores e o simulado.
  function loadExamState() {
    state.respostas = {};
    state.favoritas = new Set();
    state.duvidas = new Set();
    state.mode = "treino";
    state.tentativa = null;
    try {
      const saved = localStorage.getItem(estudoKey());
      if (saved) {
        const parsed = JSON.parse(saved);
        const existe = (uid) => concurso().porUid.has(uid);
        Object.entries(parsed.respostas || {}).forEach(([uid, opt]) => {
          if (existe(uid)) state.respostas[uid] = opt;
        });
        state.favoritas = new Set((parsed.favoritas || []).filter(existe));
        state.duvidas = new Set((parsed.duvidas || []).filter(existe));
        state.mode = parsed.mode === "prova" ? "prova" : "treino";
        const t = parsed.tentativa;
        if (t && Array.isArray(t.uids)) {
          t.uids = t.uids.filter(existe);
          // Um simulado nunca volta "correndo": se a página fechou sem pausar,
          // desconta o tempo que passou e deixa pausado até o aluno retomar.
          if (t.deadline) {
            t.restante = Math.max(0, Math.round((t.deadline - Date.now()) / 1000));
            t.deadline = null;
          }
          state.tentativa = t.uids.length ? t : null;
        }
      } else {
        migrarEstadoV1();
      }
    } catch (e) {
      console.warn("Erro ao carregar estado do simulado:", e);
    }

    state.currentUid = null;
    state.pinnedUid = null;
    const firstModule = concurso().theory[0];
    state.currentTheoryModuleId = firstModule.id;
    state.currentTheorySectionId = firstModule.sections[0].id;
  }

  // v1 guardava tudo pelo número da questão (que muda quando o banco cresce)
  // e misturava treino e prova. Converte para chaves estáveis uma única vez.
  function migrarEstadoV1() {
    const oldKey = `${concurso().storagePrefix}_exam_state_v1`;
    const raw = localStorage.getItem(oldKey);
    if (!raw) return;
    const old = JSON.parse(raw);
    const porNumero = new Map(questions().map((q) => [q.id, q.uid]));
    const uidDe = (id) => porNumero.get(Number(id));
    Object.entries(old.answers || {}).forEach(([id, opt]) => {
      const uid = uidDe(id);
      if (uid) state.respostas[uid] = opt;
    });
    (old.bookmarks || []).map(uidDe).filter(Boolean).forEach((uid) => state.favoritas.add(uid));
    (old.markedForReview || []).map(uidDe).filter(Boolean).forEach((uid) => state.duvidas.add(uid));
    saveState();
    localStorage.removeItem(oldKey);
  }

  function saveState() {
    try {
      const payload = {
        respostas: state.respostas,
        favoritas: Array.from(state.favoritas),
        duvidas: Array.from(state.duvidas),
        mode: state.mode,
        tentativa: state.tentativa,
      };
      localStorage.setItem(estudoKey(), JSON.stringify(payload));
    } catch (e) {
      console.warn("Erro ao salvar estado:", e);
    }
  }

  // --- TROCA DE CONCURSO ---
  function switchConcurso(concursoId) {
    if (concursoId === state.concursoId) return;
    pauseTimer();
    saveState();
    closeResultsModal();

    state.concursoId = concursoId;
    try {
      localStorage.setItem(CONCURSO_STORAGE_KEY, concursoId);
    } catch (e) {
      console.warn("Erro ao salvar concurso ativo:", e);
    }
    loadExamState();
    state.subjectFilter = "all";
    state.statusFilter = "all";
    state.areaFilter = null;

    applyConcursoChrome();
    syncModeButtons();
    updateTimerDisplay();
    updateBadges();

    const tab =
      state.currentTab === "portugues" && !concurso().trilhaPortugues
        ? "simulado"
        : state.currentTab;
    switchTab(tab);
  }

  // Cabeçalho, seletor de concurso, filtro de disciplinas e abas opcionais.
  function applyConcursoChrome() {
    const c = concurso();
    document.getElementById("concursoSigla").textContent = c.sigla;
    document.getElementById("concursoTitulo").textContent = c.titulo;
    document.getElementById("concursoSubtitulo").textContent = c.subtitulo;
    document.title = `${c.sigla} · Plataforma de Estudos`;

    const concursoSelect = document.getElementById("concursoSelect");
    if (concursoSelect) {
      concursoSelect.innerHTML = concursos
        .map(
          (item) =>
            `<option value="${item.id}" ${item.id === c.id ? "selected" : ""}>${escapeHtml(item.sigla)} · ${escapeHtml(item.banca)}</option>`,
        )
        .join("");
    }

    renderSubjectOptions();
    const statusSelect = document.getElementById("statusFilterSelect");
    if (statusSelect) statusSelect.value = state.statusFilter;

    const duracao = formatDuration(duracaoDoSimulado());
    const timerBox = document.getElementById("timerBox");
    if (timerBox) timerBox.title = `Tempo do simulado: ${duracao}`;
    const provaBtn = document.getElementById("modeProvaBtn");
    if (provaBtn) {
      provaBtn.title = `Simulado no formato do edital (${tamanhoDoSimulado()} questões, ${duracao}), corrigido só no fim`;
    }

    const ptTab = document.querySelector('.tab-btn[data-tab="portugues"]');
    if (ptTab) ptTab.hidden = !c.trilhaPortugues;
  }

  // Disciplinas do modo atual (o simulado tem menos questões que o banco).
  function renderSubjectOptions() {
    const lista = activeQuestions();
    const counts = {};
    lista.forEach((q) => {
      counts[q.subject] = (counts[q.subject] || 0) + 1;
    });
    if (state.subjectFilter !== "all" && !counts[state.subjectFilter]) state.subjectFilter = "all";
    const subjectSelect = document.getElementById("subjectFilterSelect");
    if (!subjectSelect) return;
    subjectSelect.innerHTML =
      `<option value="all">Todas as Disciplinas (${lista.length} Q)</option>` +
      Object.entries(counts)
        .map(
          ([subject, n]) =>
            `<option value="${escapeHtml(subject)}">${escapeHtml(subject)} (${n} Q)</option>`,
        )
        .join("");
    subjectSelect.value = state.subjectFilter;

    // Durante o simulado o filtro "Incorretas" entregaria o gabarito.
    const wrongOption = document.querySelector('#statusFilterSelect option[value="wrong"]');
    if (wrongOption) wrongOption.disabled = simuladoAtivo();
    if (simuladoAtivo() && state.statusFilter === "wrong") {
      state.statusFilter = "all";
      document.getElementById("statusFilterSelect").value = "all";
    }
  }

  function formatDuration(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.round((seconds % 3600) / 60);
    return m ? `${h}h${String(m).padStart(2, "0")}` : `${h}h`;
  }

  // --- SIMULADO NO FORMATO DO EDITAL ---
  // `concurso.simulado` descreve a prova: { oficial: true } usa o caderno
  // inteiro na ordem; `blocos` sorteia N questões por grupo de disciplinas.
  function configDoSimulado() {
    const c = concurso();
    return c.simulado || { blocos: [{ rotulo: "Questões", subjects: null, n: c.questions.length }] };
  }

  function duracaoDoSimulado() {
    return configDoSimulado().duracaoSegundos || concurso().duracaoSegundos;
  }

  function blocosDisponiveis() {
    const cfg = configDoSimulado();
    if (cfg.oficial) return [{ rotulo: "Caderno oficial", n: questions().length, disponiveis: questions().length }];
    return cfg.blocos.map((b) => ({
      ...b,
      disponiveis: questions().filter((q) => !b.subjects || b.subjects.includes(q.subject)).length,
    }));
  }

  function tamanhoDoSimulado() {
    return blocosDisponiveis().reduce((sum, b) => sum + Math.min(b.n, b.disponiveis), 0);
  }

  const embaralhar = (arr) =>
    arr
      .map((v) => [Math.random(), v])
      .sort((a, b) => a[0] - b[0])
      .map((p) => p[1]);

  // Sorteio que (1) prefere questões nunca respondidas, depois as erradas,
  // e (2) espalha a escolha pelas áreas, para o simulado cobrir o edital.
  function sortearPorArea(pool, n) {
    const prioridade = (q) => {
      const ans = state.respostas[q.uid];
      if (ans === undefined) return 0;
      return ans === q.correctAnswer ? 2 : 1;
    };
    const porArea = new Map();
    embaralhar(pool)
      .sort((a, b) => prioridade(a) - prioridade(b))
      .forEach((q) => {
        if (!porArea.has(q.area)) porArea.set(q.area, []);
        porArea.get(q.area).push(q);
      });
    const filas = embaralhar([...porArea.values()]);
    const escolhidas = [];
    while (escolhidas.length < n && filas.some((f) => f.length)) {
      for (const fila of filas) {
        if (escolhidas.length >= n) break;
        if (fila.length) escolhidas.push(fila.shift());
      }
    }
    return escolhidas;
  }

  function montarSimulado() {
    const cfg = configDoSimulado();
    if (cfg.oficial) return questions().map((q) => q.uid);
    const usadas = new Set();
    return cfg.blocos.flatMap((bloco) => {
      const pool = questions().filter(
        (q) => (!bloco.subjects || bloco.subjects.includes(q.subject)) && !usadas.has(q.uid),
      );
      const escolhidas = sortearPorArea(pool, bloco.n);
      escolhidas.forEach((q) => usadas.add(q.uid));
      // Dentro do bloco, a ordem do banco (agrupada por assunto), como num caderno.
      return escolhidas.sort((a, b) => a.id - b.id).map((q) => q.uid);
    });
  }

  function iniciarSimulado() {
    if (simuladoAtivo()) {
      startTimer();
      renderCurrentQuestion();
      return;
    }
    closeResultsModal();
    state.tentativa = {
      uids: montarSimulado(),
      respostas: {},
      restante: duracaoDoSimulado(),
      deadline: null,
      finalizada: false,
      iniciadaEm: Date.now(),
    };
    state.mode = "prova";
    state.currentUid = state.tentativa.uids[0];
    state.pinnedUid = null;
    resetFilterControls();
    syncModeButtons();
    startTimer();
    saveState();
    renderSubjectOptions();
    renderCurrentQuestion();
    updateBadges();
  }

  // Cartão exibido no modo Prova antes de começar (ou para retomar).
  function renderStartCard(container) {
    const blocos = blocosDisponiveis();
    const faltando = blocos.filter((b) => b.disponiveis < b.n);
    const t = state.tentativa;
    container.innerHTML = `
      <article class="question-card simulado-start">
        <h2>🎯 Simulado ${escapeHtml(concurso().sigla)} no formato do edital</h2>
        <p>Questões sorteadas do banco, na estrutura da prova, com cronômetro e gabarito só no fim. O sorteio prefere as questões que você ainda não respondeu e espalha a escolha pelos assuntos.</p>
        <div style="overflow-x:auto;">
          <table>
            <thead><tr><th>Bloco</th><th>Questões</th></tr></thead>
            <tbody>
              ${blocos
                .map(
                  (b) => `<tr><td>${escapeHtml(b.rotulo)}</td><td>${Math.min(b.n, b.disponiveis)}${b.disponiveis < b.n ? ` <small>(o edital pede ${b.n}; o banco tem ${b.disponiveis})</small>` : ""}</td></tr>`,
                )
                .join("")}
              <tr><td><strong>Total</strong></td><td><strong>${tamanhoDoSimulado()}</strong> · ${formatDuration(duracaoDoSimulado())}</td></tr>
            </tbody>
          </table>
        </div>
        ${configDoSimulado().nota ? `<p class="simulado-nota">${escapeHtml(configDoSimulado().nota)}</p>` : ""}
        ${faltando.length ? `<p class="simulado-nota">⚠️ O banco ainda não tem questões suficientes em ${faltando.map((b) => escapeHtml(b.rotulo)).join(", ")}; o simulado sai com menos questões nesse bloco.</p>` : ""}
        <div class="simulado-start-actions">
          ${
            t && !t.finalizada
              ? `<button class="btn-nav btn-nav-next" onclick="window.estudosApp.iniciarSimulado()">▶ Retomar simulado (restam ${formatDuration(t.restante)})</button>
                 <button class="btn-nav btn-nav-prev" onclick="window.estudosApp.descartarSimulado()">Descartar e começar outro</button>`
              : `<button class="btn-nav btn-nav-next" onclick="window.estudosApp.iniciarSimulado()">▶ Iniciar simulado</button>`
          }
        </div>
      </article>`;
  }

  // --- GERENCIAMENTO DO CRONÔMETRO ---
  // O tempo é um prazo absoluto (deadline), não um contador de ticks: aba em
  // segundo plano ou recarga da página não "devolvem" tempo ao aluno.
  function tempoRestante() {
    const t = state.tentativa;
    if (!t) return duracaoDoSimulado();
    if (t.finalizada) return t.restante || 0;
    if (t.deadline) return Math.max(0, Math.round((t.deadline - Date.now()) / 1000));
    return t.restante;
  }

  function startTimer() {
    const t = state.tentativa;
    if (!t || t.finalizada) return;
    if (!t.deadline) {
      t.deadline = Date.now() + t.restante * 1000;
      saveState();
    }
    if (state.timerInterval) return;
    updateTimerDisplay();
    state.timerInterval = setInterval(() => {
      updateTimerDisplay();
      if (tempoRestante() <= 0) finishExam(true);
    }, 1000);
  }

  // Pausa o simulado (troca de modo, de concurso ou saída da página).
  function pauseTimer() {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
    const t = state.tentativa;
    if (t && !t.finalizada && t.deadline) {
      t.restante = tempoRestante();
      t.deadline = null;
      saveState();
    }
    updateTimerDisplay();
  }

  function updateTimerDisplay() {
    const timerElem = document.getElementById("timerDisplay");
    const timerBox = document.getElementById("timerBox");
    if (!timerElem) return;

    const restante = tempoRestante();
    const hours = Math.floor(restante / 3600);
    const minutes = Math.floor((restante % 3600) / 60);
    const seconds = restante % 60;

    timerElem.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    timerBox?.classList.toggle("warning", simuladoAtivo() && restante < 1800);
    timerBox?.classList.toggle("running", Boolean(state.timerInterval));
  }

  // --- FILTRAGEM DE QUESTÕES ---
  function getFilteredQuestions() {
    const answers = respostasAtivas();
    const escondeGabarito = simuladoAtivo();
    const todas = activeQuestions();
    const list = todas.filter((q) => {
      if (state.subjectFilter !== "all" && q.subject !== state.subjectFilter) return false;
      if (state.areaFilter && q.area !== state.areaFilter) return false;

      const isAnswered = answers[q.uid] !== undefined;
      const isWrong = !escondeGabarito && isAnswered && answers[q.uid] !== q.correctAnswer;

      if (state.statusFilter === "unanswered" && isAnswered) return false;
      if (state.statusFilter === "answered" && !isAnswered) return false;
      if (state.statusFilter === "bookmarked" && !state.favoritas.has(q.uid)) return false;
      if (state.statusFilter === "wrong" && !isWrong) return false;
      return true;
    });

    // A questão aberta continua na lista mesmo que deixe de casar com o
    // filtro (ex.: respondeu uma "Pendente"), para o aluno ver o feedback.
    if (state.pinnedUid && !list.some((q) => q.uid === state.pinnedUid)) {
      const pinned = todas.find((q) => q.uid === state.pinnedUid);
      if (pinned) {
        list.push(pinned);
        list.sort((a, b) => todas.indexOf(a) - todas.indexOf(b));
      }
    }
    return list;
  }

  function currentIndex(list) {
    const idx = list.findIndex((q) => q.uid === state.currentUid);
    return idx === -1 ? 0 : idx;
  }

  function renderAreaFilterChip() {
    const chip = document.getElementById("areaFilterChip");
    if (!chip) return;
    chip.hidden = !state.areaFilter;
    if (!state.areaFilter) return;
    chip.innerHTML = `
      <span>📚 Assunto: <strong>${escapeHtml(areaTitle(state.areaFilter))}</strong></span>
      <button type="button" onclick="window.estudosApp.clearAreaFilter()" title="Mostrar todos os assuntos" aria-label="Remover filtro de assunto">✕</button>
    `;
  }

  // Selo de procedência: questão real da banca ou inédita para treino.
  function origemBadge(q) {
    if (!q.origem) return "";
    if (q.origem.tipo === "fgv") {
      return `<span class="badge badge-origem-real" title="Questão de prova real">🏛️ ${escapeHtml(q.origem.rotulo)}</span>`;
    }
    if (q.origem.tipo === "inedita") {
      return `<span class="badge badge-origem-inedita" title="Questão escrita para treino, no estilo da banca — não é de prova oficial">✍️ Inédita · estilo ${escapeHtml(concurso().banca)}</span>`;
    }
    return "";
  }

  // --- RENDERIZAÇÃO DA QUESTÃO ATUAL ---
  function renderCurrentQuestion() {
    const container = document.getElementById("questionCardContainer");
    renderAreaFilterChip();
    if (!container) return;

    if (state.mode === "prova" && !simuladoAtivo() && !simuladoEmRevisao()) {
      renderStartCard(container);
      renderPalette();
      return;
    }
    if (state.mode === "prova" && state.tentativa && !state.tentativa.finalizada && !state.timerInterval) {
      // Simulado pausado (troca de modo ou recarga): pede para retomar.
      renderStartCard(container);
      renderPalette();
      return;
    }

    const filteredList = getFilteredQuestions();
    if (filteredList.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🔍</div>
          <h3>Nenhuma questão encontrada com estes filtros</h3>
          <p>Tente alterar o filtro de matéria ou status no painel superior.</p>
          <button class="btn-nav btn-nav-next" style="margin-top:1rem;" onclick="window.estudosApp.resetFilters()">Redefinir Filtros</button>
        </div>
      `;
      renderPalette();
      return;
    }

    const idx = currentIndex(filteredList);
    const q = filteredList[idx];
    state.currentUid = q.uid;
    const totalFiltered = filteredList.length;
    const answers = respostasAtivas();
    const selectedOpt = answers[q.uid];
    const isAnswered = selectedOpt !== undefined;
    const isBookmarked = state.favoritas.has(q.uid);
    const isFlaggedReview = state.duvidas.has(q.uid);
    const showFeedback = mostraGabarito(q);
    const locked = simuladoEmRevisao();
    const letters = optionLetters(q);
    const numero = numeroDaQuestao(q);
    const totalModo = activeQuestions().length;

    let statusBadge = "";
    if (showFeedback && isAnswered) {
      statusBadge =
        selectedOpt === q.correctAnswer
          ? `<span class="badge badge-status-correct">✓ Correto</span>`
          : `<span class="badge badge-status-incorrect">✗ Incorreto (Gabarito: ${letters[q.correctAnswer]})</span>`;
    } else if (showFeedback) {
      statusBadge = `<span class="badge badge-subtopic">Em branco (Gabarito: ${letters[q.correctAnswer]})</span>`;
    }

    const optionsHtml = q.options
      .map((optText, optIdx) => {
        let optClass = "option-item";
        if (selectedOpt === optIdx) optClass += " selected";
        if (showFeedback) {
          if (optIdx === q.correctAnswer) optClass += " correct";
          else if (selectedOpt === optIdx) optClass += " incorrect";
        }
        return `
        <button type="button" class="${optClass}" role="radio" aria-checked="${selectedOpt === optIdx}"
          data-option-index="${optIdx}" ${locked ? 'aria-disabled="true"' : ""}
          onclick="window.estudosApp.selectOption('${q.uid}', ${optIdx})">
          <span class="option-letter" aria-hidden="true">${letters[optIdx]}</span>
          <span class="option-text"><span class="visually-hidden">Alternativa ${letters[optIdx]}: </span>${formatInline(optText)}</span>
        </button>
      `;
      })
      .join("");

    // No Cebraspe deixar em branco é estratégia: dá para desfazer a marcação.
    const clearAnswerHtml =
      isCertoErrado(q) && isAnswered && !showFeedback
        ? `<button class="btn-theory-shortcut" onclick="window.estudosApp.clearAnswer('${q.uid}')">↺ Deixar em branco</button>`
        : "";

    const explanationHtml = `
      <div class="explanation-box ${showFeedback ? "visible" : ""}" id="explanationBox">
        <div class="explanation-title">
          <span>💡 Comentário & Justificativa do Gabarito</span>
          <span style="font-size:0.8rem; font-weight:normal; color:var(--text-muted);">Questão ${numero} de ${totalModo}</span>
        </div>
        <div class="explanation-content">${showFeedback ? formatInline(q.explanation) : ""}</div>
        ${
          showFeedback && q.theoryRef
            ? `
          <button class="btn-theory-shortcut" onclick="window.estudosApp.jumpToTheory('${q.theoryRef}')">
            📖 Ver embasamento teórico completo deste assunto
          </button>
        `
            : ""
        }
      </div>
    `;

    const cabecalho =
      state.mode === "prova"
        ? `Questão ${numero} de ${totalModo} do simulado${state.tentativa.finalizada ? " · revisão" : ""}`
        : `Questão ${numero} (Item ${idx + 1} de ${totalFiltered})`;

    container.innerHTML = `
      <article class="question-card">
        <div class="question-meta">
          <div class="question-badges">
            <span class="badge badge-subject">${escapeHtml(q.subject)}</span>
            <span class="badge badge-subtopic">${escapeHtml(q.subtopic)}</span>
            ${origemBadge(q)}
            ${statusBadge}
          </div>
          <div class="question-actions-top">
            <button class="btn-bookmark ${isBookmarked ? "bookmarked" : ""}" aria-pressed="${isBookmarked}" onclick="window.estudosApp.toggleBookmark('${q.uid}')">
              ${isBookmarked ? "★ Salva" : "☆ Salvar"}
            </button>
            <button class="btn-bookmark ${isFlaggedReview ? "bookmarked" : ""}" aria-pressed="${isFlaggedReview}" onclick="window.estudosApp.toggleReview('${q.uid}')" title="Marcar para revisar depois">
              ${isFlaggedReview ? "🚩 Em Dúvida" : "🏳️ Dúvida"}
            </button>
          </div>
        </div>

        <h2 class="question-heading" tabindex="-1">${cabecalho}</h2>

        ${
          q.passage
            ? `<div class="question-passage">
                 <div class="question-passage-label">📄 Texto de apoio</div>
                 <div class="question-passage-body">${formatInline(q.passage)}</div>
               </div>`
            : ""
        }

        <div class="question-statement">${formatInline(q.statement)}</div>

        <div class="options-list ${isCertoErrado(q) ? "options-certo-errado" : ""}" role="radiogroup" aria-label="Alternativas">
          ${optionsHtml}
        </div>
        ${clearAnswerHtml}

        ${explanationHtml}

        <div class="quiz-nav-footer">
          <button class="btn-nav btn-nav-prev" onclick="window.estudosApp.navigateQuestion(-1)" ${idx === 0 ? "disabled" : ""}>
            ← Anterior
          </button>

          <span style="font-size:0.9rem; color:var(--text-muted); font-weight:600;">
            ${idx + 1} / ${totalFiltered}
          </span>

          <div style="display:flex; gap:0.5rem;">
            ${
              simuladoAtivo()
                ? `<button class="btn-nav btn-finish-test" onclick="window.estudosApp.confirmFinishExam()">Finalizar Simulado</button>`
                : ""
            }
            <button class="btn-nav btn-nav-next" onclick="window.estudosApp.navigateQuestion(1)" ${idx >= totalFiltered - 1 ? "disabled" : ""}>
              Próxima →
            </button>
          </div>
        </div>
      </article>
    `;

    renderPalette();
    if (state.focusAfterRender) {
      container.querySelector(state.focusAfterRender)?.focus({ preventScroll: true });
      state.focusAfterRender = null;
    }
  }

  // --- RENDERIZAÇÃO DA PALETA DE QUESTÕES ---
  function renderPalette() {
    const paletteGrid = document.getElementById("paletteGrid");
    const totalAnsweredElem = document.getElementById("paletteAnsweredCount");
    const sidebarAction = document.getElementById("sidebarExamAction");
    if (!paletteGrid) return;

    const lista = state.mode === "prova" && !simuladoAtivo() && !simuladoEmRevisao() ? [] : activeQuestions();
    const answers = respostasAtivas();
    let answeredCount = 0;

    paletteGrid.innerHTML = lista
      .map((q) => {
        const isAnswered = answers[q.uid] !== undefined;
        if (isAnswered) answeredCount++;
        let btnClass = "grid-num-btn";
        if (q.uid === state.currentUid) btnClass += " current";
        if (state.duvidas.has(q.uid)) btnClass += " review";
        if (mostraGabarito(q) && isAnswered) {
          btnClass += answers[q.uid] === q.correctAnswer ? " correct" : " incorrect";
        } else if (isAnswered) {
          btnClass += " answered";
        }
        const numero = numeroDaQuestao(q);
        return `
        <button class="${btnClass}" onclick="window.estudosApp.jumpTo('${q.uid}')" title="Questão ${numero} - ${escapeHtml(q.subject)}" aria-label="Questão ${numero}${isAnswered ? ", respondida" : ""}">
          ${numero}
        </button>
      `;
      })
      .join("");

    if (totalAnsweredElem) {
      totalAnsweredElem.textContent = `${answeredCount} / ${lista.length} respondidas`;
    }

    // Ação da barra lateral: finalizar só durante o simulado; depois, um novo.
    if (sidebarAction) {
      if (simuladoAtivo() && state.timerInterval) {
        sidebarAction.hidden = false;
        sidebarAction.textContent = "🏁 Finalizar Simulado";
        sidebarAction.onclick = confirmFinishExam;
      } else if (simuladoEmRevisao()) {
        sidebarAction.hidden = false;
        sidebarAction.textContent = "🔁 Novo simulado";
        sidebarAction.onclick = iniciarSimulado;
      } else {
        sidebarAction.hidden = true;
      }
    }
  }

  // --- INTERAÇÕES DO QUIZ ---
  function selectOption(uid, optionIndex) {
    if (simuladoEmRevisao()) return; // simulado já corrigido
    if (state.mode === "prova" && !simuladoAtivo()) return;
    respostasAtivas()[uid] = optionIndex;
    state.currentUid = uid;
    state.pinnedUid = uid;
    state.focusAfterRender = `.option-item[data-option-index="${optionIndex}"]`;
    saveState();
    renderCurrentQuestion();
    updateBadges();
  }

  function clearAnswer(uid) {
    if (simuladoEmRevisao()) return;
    delete respostasAtivas()[uid];
    state.pinnedUid = uid;
    saveState();
    renderCurrentQuestion();
    updateBadges();
  }

  function toggleBookmark(uid) {
    if (state.favoritas.has(uid)) state.favoritas.delete(uid);
    else state.favoritas.add(uid);
    state.pinnedUid = uid;
    saveState();
    renderCurrentQuestion();
    updateBadges();
  }

  function toggleReview(uid) {
    if (state.duvidas.has(uid)) state.duvidas.delete(uid);
    else state.duvidas.add(uid);
    saveState();
    renderCurrentQuestion();
  }

  function navigateQuestion(delta) {
    const filtered = getFilteredQuestions();
    const target = filtered[currentIndex(filtered) + delta];
    if (!target) return;
    state.currentUid = target.uid;
    state.pinnedUid = null;
    state.focusAfterRender = ".question-heading";
    renderCurrentQuestion();
    window.scrollTo({ top: 180, behavior: "smooth" });
  }

  // Abre uma questão do modo atual; se o filtro a esconde, limpa os filtros.
  function jumpTo(uid) {
    if (!getFilteredQuestions().some((q) => q.uid === uid)) {
      state.subjectFilter = "all";
      state.statusFilter = "all";
      state.areaFilter = null;
      resetFilterControls();
    }
    state.currentUid = uid;
    state.pinnedUid = null;
    state.focusAfterRender = ".question-heading";
    renderCurrentQuestion();
    window.scrollTo({ top: 180, behavior: "smooth" });
  }

  // Pelo número do banco (usado pela trilha, foco e caderno de erros).
  function jumpToQuestionId(questionId) {
    const q = questions().find((item) => item.id === questionId);
    if (q) jumpTo(q.uid);
  }

  function resetFilterControls() {
    const subjectSelect = document.getElementById("subjectFilterSelect");
    const statusSelect = document.getElementById("statusFilterSelect");
    if (subjectSelect) subjectSelect.value = state.subjectFilter;
    if (statusSelect) statusSelect.value = state.statusFilter;
  }

  // --- FINALIZAÇÃO DO SIMULADO ---
  function confirmFinishExam() {
    if (!simuladoAtivo()) return;
    const lista = activeQuestions();
    const total = lista.length;
    const answeredCount = lista.filter((q) => respostasAtivas()[q.uid] !== undefined).length;
    const unanswered = total - answeredCount;
    let msg = `Você respondeu ${answeredCount} de ${total} questões.`;
    if (unanswered > 0) {
      msg += hasPenalty()
        ? `\n\n${unanswered} itens ficarão em branco (não pontuam nem descontam). Deseja finalizar agora?`
        : `\n\nAinda restam ${unanswered} questões sem resposta! Deseja realmente finalizar o simulado agora?`;
    } else {
      msg += `\n\nDeseja submeter e conferir o gabarito com seu resultado?`;
    }
    if (confirm(msg)) finishExam();
  }

  function finishExam(autoTriggered = false) {
    const t = state.tentativa;
    if (!t || t.finalizada) return; // evita corrigir (e gravar) duas vezes
    clearInterval(state.timerInterval);
    state.timerInterval = null;
    t.restante = tempoRestante();
    t.deadline = null;
    t.finalizada = true;
    t.finalizadaEm = Date.now();
    // O resultado entra no progresso geral (estatísticas, erros, foco).
    Object.assign(state.respostas, t.respostas);
    state.pinnedUid = null;
    saveState();
    saveToHistory(autoTriggered);

    updateTimerDisplay();
    renderSubjectOptions();
    renderCurrentQuestion();
    showResultsModal(autoTriggered);
    updateBadges();
  }

  function descartarSimulado() {
    if (!state.tentativa || state.tentativa.finalizada) return;
    if (!confirm("Descartar o simulado em andamento? As respostas dele serão perdidas.")) return;
    pauseTimer();
    state.tentativa = null;
    saveState();
    renderSubjectOptions();
    renderCurrentQuestion();
    updateTimerDisplay();
    updateBadges();
  }

  function saveToHistory(autoTriggered) {
    try {
      const score = computeScore();
      const t = state.tentativa;
      const record = {
        date: new Date().toLocaleString("pt-BR"),
        score: score.points,
        correct: score.correct,
        wrong: score.wrong,
        total: score.total,
        percentage: score.percent,
        mode: "prova",
        tempoUsado: duracaoDoSimulado() - (t?.restante || 0),
        esgotado: Boolean(autoTriggered),
      };
      const history = JSON.parse(localStorage.getItem(historyKey()) || "[]");
      history.unshift(record);
      if (history.length > 20) history.pop();
      localStorage.setItem(historyKey(), JSON.stringify(history));
    } catch (e) {
      console.warn("Erro ao salvar histórico:", e);
    }
  }

  function showResultsModal(autoTriggered) {
    closeResultsModal();
    const c = concurso();
    const score = computeScore();
    const passed = score.percent >= c.notaCorte;

    const modal = document.createElement("div");
    modal.className = "modal-backdrop";
    modal.id = "resultsModal";
    modal.innerHTML = `
      <div class="modal-dialog" role="dialog" aria-modal="true" aria-labelledby="resultsTitle">
        <div class="modal-icon" aria-hidden="true">${passed ? "🎉" : "📊"}</div>
        <h2 id="resultsTitle">${autoTriggered ? "Tempo Esgotado!" : "Simulado Concluído!"}</h2>
        <p>${passed ? `Parabéns! Você passou de ${c.notaCorte}% (${escapeHtml(c.notaCorteRotulo)}).` : `Bom treino! A referência é ${c.notaCorte}% (${escapeHtml(c.notaCorteRotulo)}). Revise os pontos fracos e repita.`}</p>

        <div class="modal-score-badge">
          ${
            hasPenalty()
              ? `${score.points} pts <span style="font-size:1.2rem; font-weight:normal;">(${score.correct} acertos − ${score.penalized} erros C/E · ${score.percent}%)</span>`
              : `${score.correct} / ${score.total} <span style="font-size:1.2rem; font-weight:normal;">(${score.percent}%)</span>`
          }
        </div>

        <div style="text-align:left; background:var(--bg-secondary); padding:1rem; border-radius:var(--radius-sm); margin:1rem 0; font-size:0.85rem;">
          ${Object.entries(score.breakdown)
            .map(
              ([subj, data]) => `
            <div style="display:flex; justify-content:space-between; margin-bottom:0.35rem;">
              <span>${escapeHtml(subj)}:</span>
              <strong>${data.correct}/${data.total} (${Math.round((data.correct / data.total) * 100)}%)</strong>
            </div>
          `,
            )
            .join("")}
        </div>

        <div class="modal-actions">
          <button class="btn-nav btn-nav-next" onclick="window.estudosApp.closeResultsModal()">Revisar Questões</button>
          <button class="btn-nav btn-nav-prev" onclick="window.estudosApp.closeResultsModal(); window.estudosApp.switchTab('estatisticas')">Ver Estatísticas</button>
        </div>
      </div>
    `;
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeResultsModal();
    });
    document.body.appendChild(modal);
    modal.querySelector("button")?.focus();
  }

  function closeResultsModal() {
    const modal = document.getElementById("resultsModal");
    if (modal) {
      modal.remove();
      document.querySelector(".question-heading")?.focus({ preventScroll: true });
    }
  }

  // 🔄 do cabeçalho: no simulado, descarta a tentativa; no treino, zera as respostas.
  function resetSimulado() {
    if (state.mode === "prova") {
      if (simuladoAtivo()) {
        descartarSimulado();
      } else {
        iniciarSimulado();
      }
      return;
    }
    if (
      confirm(
        `Atenção: isso vai limpar todas as suas respostas do banco ${concurso().sigla} para você refazer do início (favoritas e o histórico de simulados ficam). Confirmar?`,
      )
    ) {
      state.respostas = {};
      state.duvidas.clear();
      state.currentUid = null;
      state.pinnedUid = null;
      saveState();
      renderCurrentQuestion();
      updateBadges();
    }
  }

  // --- RENDERIZAÇÃO DA ABA DE TEORIA ---
  function renderTheoryTab() {
    const sidebar = document.getElementById("theorySidebar");
    const reader = document.getElementById("theoryReader");
    if (!sidebar || !reader) return;
    const theory = concurso().theory;

    // Constrói menu lateral agrupado
    sidebar.innerHTML = theory
      .map(
        (mod) => `
      <div class="theory-nav-group">
        <div class="theory-group-title">${mod.icon} ${escapeHtml(mod.title)}</div>
        ${mod.sections
          .map(
            (sec) => `
          <button
            class="theory-nav-item ${state.currentTheorySectionId === sec.id ? "active" : ""}"
            onclick="window.estudosApp.selectTheorySection('${mod.id}', '${sec.id}')">
            ${escapeHtml(sec.title)}${videoCountBadge(sec.id)}
          </button>
        `,
          )
          .join("")}
      </div>
    `,
      )
      .join("");

    // Localiza módulo e seção atuais
    let currentModule = theory.find((m) => m.id === state.currentTheoryModuleId);
    if (!currentModule) currentModule = theory[0];

    let currentSection = currentModule.sections.find(
      (s) => s.id === state.currentTheorySectionId,
    );
    if (!currentSection) currentSection = currentModule.sections[0];

    const relatedQuestionsCount = questions().filter(
      (q) => q.area === currentSection.id,
    ).length;

    reader.innerHTML = `
      <article class="theory-reader-card">
        <div class="theory-header-box">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:1rem; flex-wrap:wrap;">
            <div>
              <span class="badge badge-subject" style="margin-bottom:0.5rem;">${currentModule.icon} ${escapeHtml(currentModule.title)}</span>
              <h2>${escapeHtml(currentSection.title)}</h2>
              <p>${escapeHtml(currentModule.description)}</p>
            </div>
            ${
              relatedQuestionsCount
                ? `<button class="btn-theory-shortcut" onclick="window.estudosApp.practiceArea('${currentSection.id}')">
                     🎯 Praticar questões deste assunto (${relatedQuestionsCount})
                   </button>`
                : ""
            }
          </div>
        </div>

        ${renderVideoPanel(currentSection.id, `${currentSection.title} aula concurso`)}

        <div class="theory-content-body">
          ${parseMarkdown(currentSection.content)}
        </div>
      </article>
    `;
    mountVideoPanel(currentSection.id);
  }

  function selectTheorySection(moduleId, sectionId) {
    state.currentTheoryModuleId = moduleId;
    state.currentTheorySectionId = sectionId;
    renderTheoryTab();
    window.scrollTo({ top: 120, behavior: "smooth" });
  }

  function jumpToTheory(areaId) {
    // O id da área é o mesmo da seção de teoria, então a busca é direta.
    for (const mod of concurso().theory) {
      const found = mod.sections.find((s) => s.id === areaId);
      if (found) {
        state.currentTheoryModuleId = mod.id;
        state.currentTheorySectionId = found.id;
        switchTab("teoria");
        return;
      }
    }
    console.warn(`[teoria] Nenhuma seção para a área "${areaId}".`);
    switchTab("teoria");
  }

  // Praticar um assunto, abrir uma questão pelos atalhos etc. é treino:
  // se havia um simulado correndo, ele fica pausado para retomar depois.
  function garantirTreino() {
    if (state.mode === "treino") return;
    pauseTimer();
    state.mode = "treino";
    state.pinnedUid = null;
    syncModeButtons();
    renderSubjectOptions();
    saveState();
  }

  // Abre o treino só com as questões de um assunto da teoria.
  function practiceArea(areaId) {
    garantirTreino();
    state.areaFilter = areaId;
    state.subjectFilter = "all";
    state.statusFilter = "all";
    resetFilterControls();
    state.currentUid = null;
    switchTab("simulado");
  }

  function clearAreaFilter() {
    state.areaFilter = null;
    renderCurrentQuestion();
  }

  // --- TRILHA DE PORTUGUÊS ---

  // Lista plana de todas as lições, na ordem do currículo, para navegação.
  function ptAllLessons() {
    return portuguesTrilha.flatMap((nivel) =>
      nivel.lessons.map((lesson) => ({ nivel, lesson })),
    );
  }

  function ptFindLesson(lessonId) {
    return ptAllLessons().find((e) => e.lesson.id === lessonId) || ptAllLessons()[0];
  }

  function ptProgressPercent() {
    const total = ptAllLessons().length;
    if (!total) return 0;
    return Math.round((state.ptCompleted.size / total) * 100);
  }

  function savePtProgress() {
    try {
      localStorage.setItem(
        PT_PROGRESS_KEY,
        JSON.stringify({
          completed: Array.from(state.ptCompleted),
          currentLessonId: state.currentPtLessonId,
        }),
      );
    } catch (e) {
      console.warn("Erro ao salvar progresso de Português:", e);
    }
  }

  function togglePtLesson(lessonId) {
    if (state.ptCompleted.has(lessonId)) {
      state.ptCompleted.delete(lessonId);
    } else {
      state.ptCompleted.add(lessonId);
    }
    savePtProgress();
    renderPtSidebar();
    const isDone = state.ptCompleted.has(lessonId);
    const button = document.getElementById("ptDoneBtn");
    if (button) {
      button.className = `btn-nav ${isDone ? "btn-nav-prev" : "btn-nav-next"}`;
      button.textContent = isDone ? "✓ Estudado" : "Marcar como estudado";
      button.setAttribute("aria-pressed", String(isDone));
    }
    updateBadges();
  }

  function selectPtLesson(lessonId) {
    state.currentPtLessonId = lessonId;
    savePtProgress();
    renderPortuguesTab();
    window.scrollTo({ top: 120, behavior: "smooth" });
  }

  function navigatePtLesson(direction) {
    const all = ptAllLessons();
    const idx = all.findIndex((e) => e.lesson.id === state.currentPtLessonId);
    const next = all[idx + direction];
    if (next) selectPtLesson(next.lesson.id);
  }

  // As lições citam questões do caderno DATAPREV. No concurso ativo, procura a
  // mesma questão reaproveitada; se ele não a tiver, abre o simulado DATAPREV.
  function findDataprevQuestion(dataprevId) {
    if (state.concursoId === "dataprev") {
      return questions().find((q) => q.id === dataprevId);
    }
    return questions().find(
      (q) => q.origem?.concurso === "dataprev" && q.origem.id === dataprevId,
    );
  }

  function ptPraticar(dataprevId) {
    const local = findDataprevQuestion(dataprevId);
    if (local) {
      focusQuestion(local.id);
      return;
    }
    switchConcurso("dataprev");
    focusQuestion(dataprevId);
  }

  // Menu lateral da trilha (progresso por nível). Separado do leitor para
  // que marcar uma lição como estudada não recrie o player de vídeo.
  function renderPtSidebar() {
    const sidebar = document.getElementById("ptSidebar");
    if (!sidebar) return;
    const all = ptAllLessons();
    const overall = ptProgressPercent();
    sidebar.innerHTML = `
      <div class="pt-progress-box">
        <div class="pt-progress-head">
          <strong>Seu progresso</strong>
          <span>${state.ptCompleted.size} de ${all.length}</span>
        </div>
        <div class="focus-topic-bar"><span style="width:${overall}%"></span></div>
      </div>
      ${portuguesTrilha
        .map((nivel) => {
          const done = nivel.lessons.filter((l) =>
            state.ptCompleted.has(l.id),
          ).length;
          return `
        <div class="theory-nav-group">
          <div class="theory-group-title">
            ${nivel.icon} Nível ${nivel.level} · ${escapeHtml(nivel.title)}
            <span class="pt-level-count">${done}/${nivel.lessons.length}</span>
          </div>
          ${nivel.lessons
            .map(
              (lesson) => `
            <button
              class="theory-nav-item ${state.currentPtLessonId === lesson.id ? "active" : ""}"
              onclick="window.estudosApp.selectPtLesson('${lesson.id}')">
              <span class="pt-check ${state.ptCompleted.has(lesson.id) ? "done" : ""}">${state.ptCompleted.has(lesson.id) ? "✓" : "○"}</span>
              ${escapeHtml(lesson.title)}${videoCountBadge(lesson.id)}
            </button>
          `,
            )
            .join("")}
        </div>
      `;
        })
        .join("")}
    `;
  }

  function renderPortuguesTab() {
    const sidebar = document.getElementById("ptSidebar");
    const reader = document.getElementById("ptReader");
    if (!sidebar || !reader) return;

    const all = ptAllLessons();
    renderPtSidebar();

    const { nivel, lesson } = ptFindLesson(state.currentPtLessonId);
    const idx = all.findIndex((e) => e.lesson.id === lesson.id);
    const isDone = state.ptCompleted.has(lesson.id);

    const praticaHtml = (lesson.questions || []).length
      ? `
      <div class="pt-practice">
        <strong>Praticar em questões reais da FGV:</strong>
        ${lesson.questions
          .map((dataprevId) => {
            const local = findDataprevQuestion(dataprevId);
            const label = local ? `Questão ${local.id}` : `DATAPREV Q${dataprevId}`;
            return `<button class="btn-theory-shortcut" onclick="window.estudosApp.ptPraticar(${dataprevId})">${label}</button>`;
          })
          .join("")}
      </div>`
      : `<div class="pt-practice pt-practice-empty">A prova da DATAPREV não trouxe questão deste tópico — mas a FGV cobra o tema com frequência.</div>`;

    reader.innerHTML = `
      <article class="theory-reader-card">
        <div class="theory-header-box">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:1rem; flex-wrap:wrap;">
            <div>
              <span class="badge badge-subject" style="margin-bottom:0.5rem;">${nivel.icon} Nível ${nivel.level} · ${escapeHtml(nivel.title)}</span>
              <h2>${escapeHtml(lesson.title)}</h2>
              <p>${escapeHtml(lesson.summary)}</p>
            </div>
            <button class="btn-nav ${isDone ? "btn-nav-prev" : "btn-nav-next"}" id="ptDoneBtn" aria-pressed="${isDone}"
                    onclick="window.estudosApp.togglePtLesson('${lesson.id}')">
              ${isDone ? "✓ Estudado" : "Marcar como estudado"}
            </button>
          </div>
        </div>

        ${renderVideoPanel(lesson.id, `${lesson.title} português aula concurso`)}

        <div class="theory-content-body">
          ${parseMarkdown(lesson.content)}
        </div>

        ${praticaHtml}

        <div class="quiz-nav-footer">
          <button class="btn-nav btn-nav-prev" onclick="window.estudosApp.navigatePtLesson(-1)" ${idx === 0 ? "disabled" : ""}>
            ← Anterior
          </button>
          <span style="font-size:0.85rem; color:var(--text-muted);">Lição ${idx + 1} de ${all.length}</span>
          <button class="btn-nav btn-nav-next" onclick="window.estudosApp.navigatePtLesson(1)" ${idx >= all.length - 1 ? "disabled" : ""}>
            Próxima →
          </button>
        </div>
      </article>
    `;
    mountVideoPanel(lesson.id);
  }

  // --- VIDEOAULAS ---
  // Cada assunto (seção de teoria ou lição da trilha) tem uma playlist que
  // junta duas fontes:
  // - as aulas que o próprio aluno adicionou por link (state.videos[chave]);
  // - as encontradas pela busca automática na YouTube Data API v3, guardadas
  //   em cache por assunto (state.videoBusca[chave]) para poupar a cota.
  // "Assistida" vale por vídeo (state.videoVistos), em qualquer assunto.
  // Os ids das seções são únicos entre concursos; uma seção compartilhada
  // (ex.: Português) mostra a mesma playlist nos dois.

  const YT_API = "https://www.googleapis.com/youtube/v3";
  const BUSCA_VALIDADE_MS = 14 * 24 * 3600 * 1000;
  const DURACAO_MINIMA_S = 4 * 60; // corta shorts, chamadas e trailers
  const buscasEmAndamento = new Set();
  // { [chave]: "kind:ref" do vídeo no player }. Pelo id, não pelo índice: a
  // playlist muda de ordem quando a busca termina ou um item é removido.
  const tocandoAgora = {};
  // Busca que falhou nesta sessão (chave inválida, sem cota): não repete
  // sozinha a cada visita ao assunto.
  const buscasFalharam = new Set();
  const indiceTocando = (key, list = topicVideos(key)) =>
    list.findIndex((v) => videoId(v) === tocandoAgora[key]);

  // Reconhece YouTube (vídeo, shorts, live, playlist) e arquivo de vídeo direto.
  function parseVideoUrl(raw) {
    const url = raw.trim();
    const yt = url.match(
      /(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{11})/,
    );
    if (yt) {
      const t = url.match(/[?&](?:t|start)=(\d+)s?/);
      return { kind: "youtube", ref: yt[1], start: t ? Number(t[1]) : 0 };
    }
    const list = url.match(/youtube\.com\/.*[?&]list=([\w-]+)/);
    if (list) return { kind: "playlist", ref: list[1] };
    if (/^https?:\/\/[^\s"'<>]+\.(mp4|webm|ogg)(\?[^\s"'<>]*)?$/i.test(url)) {
      return { kind: "file", ref: url };
    }
    return null;
  }

  const videoId = (video) => `${video.kind}:${video.ref}`;

  // Playlist do assunto: primeiro as aulas do aluno, depois as da busca
  // (sem as ocultadas e sem repetir o que já foi adicionado à mão).
  function topicVideos(key) {
    const minhas = (state.videos[key] || []).map((v) => ({ ...v, source: "minha" }));
    const ja = new Set(minhas.map(videoId));
    const busca = (state.videoBusca[key]?.items || [])
      .map((item) => ({ ...item, kind: "youtube", ref: item.id, source: "busca" }))
      .filter((v) => !state.videoOcultos.has(v.ref) && !ja.has(videoId(v)));
    return [...minhas, ...busca];
  }

  function isWatched(video) {
    return state.videoVistos.has(videoId(video));
  }

  function saveVideos() {
    try {
      localStorage.setItem(VIDEOS_STORAGE_KEY, JSON.stringify(state.videos));
      localStorage.setItem(VIDEO_BUSCA_KEY, JSON.stringify(state.videoBusca));
      localStorage.setItem(VIDEO_VISTOS_KEY, JSON.stringify([...state.videoVistos]));
      localStorage.setItem(VIDEO_OCULTOS_KEY, JSON.stringify([...state.videoOcultos]));
    } catch (e) {
      console.warn("Erro ao salvar videoaulas:", e);
    }
  }

  function videoCountBadge(key) {
    const list = topicVideos(key);
    if (!list.length) return "";
    const watched = list.filter(isWatched).length;
    return ` <span class="video-count" title="${watched} de ${list.length} videoaulas assistidas">🎬 ${watched}/${list.length}</span>`;
  }

  function formatSeconds(total) {
    if (!total) return "";
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    return h
      ? `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
      : `${m}:${String(s).padStart(2, "0")}`;
  }

  // O painel guarda a busca padrão do assunto num data-attribute; a busca
  // automática e o "buscar de novo" leem dali.
  function renderVideoPanel(key, searchQuery) {
    const cached = state.videoBusca[key];
    const query = cached?.query || searchQuery;
    const fileWarning =
      location.protocol === "file:"
        ? `<p class="video-hint">⚠️ Aberto como arquivo local, o player do YouTube pode recusar o vídeo. Rode <code>.\\server.ps1</code> e use <code>http://localhost:8080</code>.</p>`
        : "";

    return `
      <section class="video-panel" id="videoPanel-${key}" data-query="${escapeHtml(searchQuery)}">
        <div class="video-panel-head">
          <h3>🎬 Videoaulas</h3>
          <span class="video-panel-count" id="videoCount-${key}"></span>
        </div>
        <div class="video-player-slot" id="videoPlayer-${key}"></div>
        <div class="video-status" id="videoStatus-${key}"></div>
        <ol class="video-list" id="videoList-${key}"></ol>
        <details class="video-tools">
          <summary>Mais opções: buscar outro termo, adicionar link, chave da API</summary>
          <form class="video-add-form" onsubmit="window.estudosApp.searchVideos(event, '${key}')">
            <input type="search" name="q" value="${escapeHtml(query)}" aria-label="Termo da busca de videoaulas" />
            <button type="submit" class="btn-nav btn-nav-next">🔎 Buscar aulas</button>
          </form>
          <form class="video-add-form" onsubmit="window.estudosApp.addVideo(event, '${key}')">
            <input type="url" name="url" required placeholder="Cole o link do YouTube (vídeo ou playlist) ou de um .mp4" aria-label="Link da videoaula" />
            <input type="text" name="title" placeholder="Título (opcional)" aria-label="Título da videoaula" />
            <button type="submit" class="btn-nav btn-nav-prev">Adicionar</button>
          </form>
          <div class="video-panel-actions">
            <a class="btn-theory-shortcut" href="https://www.youtube.com/results?search_query=${encodeURIComponent(query)}" target="_blank" rel="noopener">Abrir a busca no YouTube</a>
            <button type="button" class="btn-theory-shortcut" onclick="window.estudosApp.exportVideos()">⬇ Exportar</button>
            <label class="btn-theory-shortcut">⬆ Importar
              <input type="file" accept="application/json" hidden onchange="window.estudosApp.importVideos(event)" />
            </label>
            <button type="button" class="btn-theory-shortcut" id="videoForget-${key}" onclick="window.estudosApp.forgetYoutubeKey('${key}')" ${state.youtubeKey ? "" : "hidden"}>Remover chave da API</button>
          </div>
          ${fileWarning}
        </details>
      </section>
    `;
  }

  // Chamado depois que o painel entra no DOM: preenche lista e player e,
  // se o assunto nunca foi buscado, dispara a busca automática. Cache
  // vencido NÃO busca sozinho (cada busca custa ~100–200 unidades de cota):
  // o painel oferece "Atualizar aulas".
  function mountVideoPanel(key) {
    const panel = document.getElementById(`videoPanel-${key}`);
    if (!panel) return;
    refreshVideoPanel(key);
    loadFirstVideo(key);
    if (state.youtubeKey && !state.videoBusca[key] && !buscasFalharam.has(key)) {
      fetchVideos(key, panel.dataset.query);
    }
  }

  function atualizarVideos(key) {
    const panel = document.getElementById(`videoPanel-${key}`);
    buscasFalharam.delete(key);
    fetchVideos(key, state.videoBusca[key]?.query || panel?.dataset.query);
  }

  // Carrega (sem tocar) a primeira aula ainda não assistida.
  function loadFirstVideo(key) {
    const slot = document.getElementById(`videoPlayer-${key}`);
    if (!slot || slot.childElementCount) return;
    const list = topicVideos(key);
    if (!list.length) return;
    const next = list.findIndex((v) => !isWatched(v));
    playVideo(key, next === -1 ? 0 : next, false);
  }

  function refreshVideoPanel(key) {
    const list = topicVideos(key);
    const listElem = document.getElementById(`videoList-${key}`);
    const count = document.getElementById(`videoCount-${key}`);
    const status = document.getElementById(`videoStatus-${key}`);
    if (!listElem) return;

    const watched = list.filter(isWatched).length;
    const cached = state.videoBusca[key];
    const vencido = state.youtubeKey && cached && Date.now() - cached.at >= BUSCA_VALIDADE_MS;
    if (count) {
      count.innerHTML =
        (list.length ? `${watched}/${list.length} assistidas` : "") +
        (vencido && !buscasEmAndamento.has(key)
          ? ` <button type="button" class="btn-theory-shortcut video-refresh" onclick="window.estudosApp.atualizarVideos('${key}')">🔄 Atualizar aulas</button>`
          : "");
    }
    const forget = document.getElementById(`videoForget-${key}`);
    if (forget) forget.hidden = !state.youtubeKey;

    if (status && !buscasEmAndamento.has(key) && !status.dataset.error) {
      status.innerHTML = state.youtubeKey ? "" : renderYoutubeSetup(key);
    }

    // Cabeçalho a cada troca de grupo: aulas do aluno, sequência do curso
    // (uma playlist, um professor) e complementares agrupadas por professor.
    const curso = state.videoBusca[key]?.curso;
    const temSequencia = list.some((v) => v.group === "curso");
    const cabecalho = (video) => {
      if (video.source === "minha") return "⭐ Suas aulas";
      if (video.group === "curso") {
        return `📚 Sequência do curso · ${curso?.title || ""}${curso?.channel ? ` · ${curso.channel}` : ""}`;
      }
      return temSequencia ? "➕ Aulas complementares" : "📚 Aulas sugeridas · agrupadas por professor, em ordem";
    };
    let grupoAnterior = null;

    listElem.innerHTML = list
      .map((video, idx) => {
        const grupo = cabecalho(video);
        const header =
          grupo !== grupoAnterior ? `<li class="video-group">${escapeHtml(grupo)}</li>` : "";
        grupoAnterior = grupo;
        const playing = tocandoAgora[key] === videoId(video);
        const meta = [
          video.channel,
          formatSeconds(video.seconds),
          video.source === "minha" ? "adicionada por você" : "",
        ]
          .filter(Boolean)
          .join(" · ");
        const thumb = video.thumb
          ? `<img src="${escapeHtml(video.thumb)}" alt="" loading="lazy" />`
          : `<span class="video-thumb-placeholder">${video.kind === "playlist" ? "☰" : "▶"}</span>`;
        return `${header}
        <li class="video-item ${isWatched(video) ? "watched" : ""} ${playing ? "playing" : ""}">
          <button type="button" class="video-thumb" onclick="window.estudosApp.playVideo('${key}', ${idx})" title="Assistir">${thumb}</button>
          <button type="button" class="video-title" onclick="window.estudosApp.playVideo('${key}', ${idx})">
            <strong>${playing ? "▶ " : ""}${escapeHtml(video.title)}</strong>
            <small>${escapeHtml(meta)}</small>
          </button>
          <label class="video-watched" title="Marcar como assistida">
            <input type="checkbox" ${isWatched(video) ? "checked" : ""} onchange="window.estudosApp.toggleVideoWatched('${key}', ${idx})" /> vista
          </label>
          <button type="button" class="video-remove" onclick="window.estudosApp.removeVideo('${key}', ${idx})"
            title="${video.source === "minha" ? "Remover" : "Ocultar esta sugestão"}">✕</button>
        </li>`;
      })
      .join("");

    refreshSidebarBadges();
  }

  function renderYoutubeSetup(key) {
    return `
      <div class="video-setup">
        <strong>Ative a busca automática de videoaulas</strong>
        <p>Com uma chave gratuita da YouTube Data API, cada assunto abre com as aulas já encontradas e o player pronto. Configuração única, uns 5 minutos:</p>
        <ol>
          <li>Entre em <a href="https://console.cloud.google.com/projectcreate" target="_blank" rel="noopener">console.cloud.google.com</a> com sua conta Google e crie um projeto (qualquer nome).</li>
          <li>Em <a href="https://console.cloud.google.com/apis/library/youtube.googleapis.com" target="_blank" rel="noopener">Biblioteca de APIs → YouTube Data API v3</a>, clique em <em>Ativar</em>.</li>
          <li>Em <a href="https://console.cloud.google.com/apis/credentials" target="_blank" rel="noopener">Credenciais</a>, clique em <em>Criar credenciais → Chave de API</em> e copie a chave.</li>
          <li>Recomendado: edite a chave e, em <em>Restrições de API</em>, deixe só a YouTube Data API v3.</li>
        </ol>
        <form class="video-add-form" onsubmit="window.estudosApp.saveYoutubeKey(event, '${key}')">
          <input type="password" name="apiKey" required autocomplete="off" placeholder="Cole aqui a chave (começa com AIza…)" aria-label="Chave da YouTube Data API" />
          <button type="submit" class="btn-nav btn-nav-next">Ativar</button>
        </form>
        <small>A chave fica só neste navegador. A cota gratuita dá para buscar de 50 a 100 assuntos novos por dia. Cada assunto é buscado uma vez e fica salvo; depois de 14 dias aparece o botão "Atualizar aulas".</small>
      </div>`;
  }

  function setVideoStatus(key, html, isError = false) {
    const status = document.getElementById(`videoStatus-${key}`);
    if (!status) return;
    status.innerHTML = html;
    if (isError) status.dataset.error = "1";
    else delete status.dataset.error;
  }

  // Títulos da API vêm com entidades HTML (&quot;, &#39;).
  function decodeEntities(text) {
    return new DOMParser().parseFromString(text, "text/html").documentElement.textContent;
  }

  // ISO 8601 (PT1H2M3S) → segundos.
  function isoDurationToSeconds(iso) {
    const m = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/.exec(iso || "");
    return m ? Number(m[1] || 0) * 3600 + Number(m[2] || 0) * 60 + Number(m[3] || 0) : 0;
  }

  async function youtubeGet(endpoint, params) {
    const url = `${YT_API}/${endpoint}?${new URLSearchParams({ ...params, key: state.youtubeKey })}`;
    const response = await fetch(url);
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      const reason = data.error?.errors?.[0]?.reason || data.error?.status || String(response.status);
      throw new Error(reason);
    }
    return data;
  }

  const MOTIVOS_ERRO = {
    quotaExceeded: "A cota diária da sua chave acabou. As buscas voltam amanhã; as aulas já encontradas continuam aqui.",
    dailyLimitExceeded: "A cota diária da sua chave acabou. As buscas voltam amanhã.",
    keyInvalid: "A chave da API é inválida. Confira se copiou inteira.",
    API_KEY_INVALID: "A chave da API é inválida. Confira se copiou inteira.",
    accessNotConfigured: "A YouTube Data API v3 não está ativada no projeto da chave. Ative-a na Biblioteca de APIs.",
    SERVICE_DISABLED: "A YouTube Data API v3 não está ativada no projeto da chave. Ative-a na Biblioteca de APIs.",
    ipRefererBlocked: "A chave tem restrição de site que bloqueia este endereço. Libere http://localhost:8080 ou tire a restrição de site.",
    PERMISSION_DENIED: "A chave não tem permissão para a YouTube Data API v3. Confira as restrições da chave.",
  };

  // --- Curadoria: continuidade e público de concurso ---
  // Uma busca simples devolve vídeos soltos de professores e séries
  // diferentes ("Aula 21" de um, "Aula 19" de outro). A curadoria:
  // 1. procura uma PLAYLIST do tema voltada a concurso e usa a ordem dela
  //    como espinha do assunto (um professor, uma sequência);
  // 2. completa com vídeos avulsos, agrupados por professor e em ordem de
  //    episódio dentro do grupo;
  // 3. pontua pelo assunto, por "concurso" e pela banca, e descarta conteúdo
  //    escolar (ENEM, SAEB, "9º ano"...).
  const PALAVRAS_VAZIAS = new Set(
    "a o e de da do das dos em no na nos nas para por com sem que um uma ao aos as os ou sua seu x vs aula aulas concurso concursos curso portugues lingua nocoes".split(" "),
  );
  const FORA_DO_PUBLICO = /\b(enem|saeb|vestibular|bncc|ensino fundamental|fundamental (i|ii|1|2)\b|\d+\s*[oº°]?\s*ano\b|infantil|kids|criancas?)/;
  const MAX_AULAS = 12;

  const normalizar = (text) =>
    text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

  function termosDoAssunto(query) {
    return [...new Set(normalizar(query).split(/[^a-z0-9+#]+/))].filter(
      (w) => w.length >= 3 && !PALAVRAS_VAZIAS.has(w),
    );
  }

  function relevancia(text, termos) {
    const t = normalizar(text);
    let score = termos.filter((w) => t.includes(w)).length * 3;
    if (/concurso/.test(t)) score += 3;
    if (t.includes(normalizar(concurso().banca))) score += 2;
    if (FORA_DO_PUBLICO.test(t)) score -= 8;
    return score;
  }

  // "Aula 19", "Parte 2", "Ep. 3", "#4" → número; sem marcação → null.
  function numeroDoEpisodio(title) {
    const m = normalizar(title).match(
      /\b(?:aula|parte|part|ep|episodio|modulo|capitulo|video)\.?\s*(?:n[o.]?\s*)?(\d{1,3})\b|#(\d{1,3})\b/,
    );
    return m ? Number(m[1] || m[2]) : null;
  }

  // Agrupa por canal (o canal mais relevante primeiro) e ordena cada grupo
  // pelo número do episódio, depois pela data de publicação.
  function ordenarPorProfessor(videos) {
    const porCanal = new Map();
    videos.forEach((v) => {
      if (!porCanal.has(v.channel)) porCanal.set(v.channel, []);
      porCanal.get(v.channel).push(v);
    });
    return [...porCanal.values()]
      .sort(
        (a, b) =>
          Math.max(...b.map((v) => v.score)) + b.length - (Math.max(...a.map((v) => v.score)) + a.length),
      )
      .flatMap((grupo) =>
        grupo.sort(
          (a, b) =>
            (a.ep ?? 999) - (b.ep ?? 999) || String(a.published).localeCompare(String(b.published)),
        ),
      );
  }

  // Duração e "incorporável" vêm de videos.list (1 unidade por chamada de até 50 ids).
  async function detalharVideos(brutos) {
    if (!brutos.length) return [];
    const details = await youtubeGet("videos", {
      part: "contentDetails,status",
      id: brutos.map((v) => v.id).join(","),
    });
    const byId = Object.fromEntries((details.items || []).map((v) => [v.id, v]));
    return brutos
      .map((v) => ({
        ...v,
        seconds: isoDurationToSeconds(byId[v.id]?.contentDetails?.duration),
        ok: Boolean(byId[v.id]) && byId[v.id].status?.embeddable !== false,
      }))
      .filter((v) => v.ok && /^[\w-]{11}$/.test(v.id) && v.seconds >= DURACAO_MINIMA_S)
      .map(({ ok, ...v }) => v);
  }

  const snippetParaVideo = (id, snippet, termos) => {
    const title = decodeEntities(snippet?.title || "");
    return {
      id,
      title,
      channel: decodeEntities(snippet?.videoOwnerChannelTitle || snippet?.channelTitle || ""),
      thumb: snippet?.thumbnails?.medium?.url || snippet?.thumbnails?.default?.url || "",
      published: snippet?.publishedAt || "",
      ep: numeroDoEpisodio(title),
      score: relevancia(`${title} ${snippet?.description || ""}`, termos),
    };
  };

  // Passo 1: a melhor playlist do tema, na ordem dela.
  async function buscarCurso(query, termos) {
    const found = await youtubeGet("search", {
      part: "snippet",
      type: "playlist",
      maxResults: "10",
      q: query.replace(/\baula\b/i, "curso"),
      relevanceLanguage: "pt",
      regionCode: "BR",
    });
    const candidatas = (found.items || [])
      .map((item) => {
        const title = decodeEntities(item.snippet?.title || "");
        const noTitulo = termos.filter((w) => normalizar(title).includes(w)).length;
        return {
          id: item.id?.playlistId,
          title,
          channel: decodeEntities(item.snippet?.channelTitle || ""),
          noTitulo,
          score: relevancia(`${title} ${item.snippet?.description || ""}`, termos) + noTitulo * 2,
        };
      })
      // O assunto tem de estar no título da playlist, não só na descrição.
      .filter((p) => p.id && p.noTitulo > 0 && p.score >= 6)
      .sort((a, b) => b.score - a.score);

    for (const playlist of candidatas.slice(0, 2)) {
      const page = await youtubeGet("playlistItems", {
        part: "snippet",
        maxResults: "50",
        playlistId: playlist.id,
      });
      let aulas = (page.items || []).map((item) =>
        snippetParaVideo(item.snippet?.resourceId?.videoId, item.snippet, termos),
      );
      // Playlist ampla (ex.: "Português completo"): fica só com as aulas do
      // assunto, na ordem original. Playlist do próprio assunto: inteira.
      const focada = playlist.noTitulo >= Math.min(2, termos.length);
      if (!focada || aulas.length > MAX_AULAS) {
        const doAssunto = aulas.filter((v) => termos.some((w) => normalizar(v.title).includes(w)));
        if (doAssunto.length >= 3 || !focada) aulas = doAssunto;
      }
      aulas = (await detalharVideos(aulas.filter((v) => v.score > -5))).slice(0, MAX_AULAS);
      if (aulas.length >= 3) return { playlist, aulas };
    }
    return null;
  }

  // Passo 2: vídeos avulsos para completar.
  async function buscarAvulsos(query, termos) {
    const found = await youtubeGet("search", {
      part: "snippet",
      type: "video",
      maxResults: "20",
      q: query,
      relevanceLanguage: "pt",
      regionCode: "BR",
      videoEmbeddable: "true",
      safeSearch: "moderate",
    });
    const brutos = (found.items || []).map((item) => snippetParaVideo(item.id?.videoId, item.snippet, termos));
    const validos = await detalharVideos(brutos);
    // Fora do público ou sem nada do assunto sai, salvo se sobrar quase nada.
    const bons = validos.filter((v) => v.score > 0);
    return bons.length >= 3 ? bons : validos.sort((a, b) => b.score - a.score);
  }

  async function fetchVideos(key, query) {
    if (!state.youtubeKey || buscasEmAndamento.has(key) || !query) return;
    buscasEmAndamento.add(key);
    setVideoStatus(key, `<p class="video-hint-ok">🔎 Montando a sequência de aulas: “${escapeHtml(query)}”…</p>`);
    try {
      const termos = termosDoAssunto(query);
      const curso = await buscarCurso(query, termos);
      const doCurso = (curso?.aulas || []).map((v) => ({ ...v, group: "curso" }));
      // Com um curso de 6+ aulas, a busca avulsa (100 unidades de cota) é dispensável.
      let extras = [];
      if (doCurso.length < 6) {
        const ja = new Set(doCurso.map((v) => v.id));
        extras = ordenarPorProfessor((await buscarAvulsos(query, termos)).filter((v) => !ja.has(v.id)))
          .map((v) => ({ ...v, group: "extra" }));
      }
      const items = [...doCurso, ...extras]
        .slice(0, MAX_AULAS)
        .map(({ score, ep, published, ...v }) => v);

      state.videoBusca[key] = {
        at: Date.now(),
        query,
        curso: curso ? { id: curso.playlist.id, title: curso.playlist.title, channel: curso.playlist.channel } : null,
        items,
      };
      saveVideos();
      setVideoStatus(
        key,
        items.length
          ? ""
          : `<p class="video-hint">Nenhuma aula com mais de 4 minutos para “${escapeHtml(query)}”. Tente outro termo em “Mais opções”.</p>`,
      );
    } catch (e) {
      buscasFalharam.add(key);
      const reason = e.message;
      const msg = MOTIVOS_ERRO[reason] || `Não foi possível buscar agora (${escapeHtml(reason)}). Verifique a internet e tente de novo.`;
      setVideoStatus(key, `<p class="video-hint">⚠️ ${msg}</p>`, true);
    } finally {
      buscasEmAndamento.delete(key);
    }
    refreshVideoPanel(key);
    loadFirstVideo(key);
  }

  function searchVideos(event, key) {
    event.preventDefault();
    const query = event.target.q.value.trim();
    if (!query) return;
    if (!state.youtubeKey) {
      setVideoStatus(key, renderYoutubeSetup(key));
      return;
    }
    closeVideo(key);
    fetchVideos(key, query);
  }

  function saveYoutubeKey(event, key) {
    event.preventDefault();
    const value = event.target.apiKey.value.trim();
    if (!/^[\w-]{30,60}$/.test(value)) {
      alert("Isso não parece uma chave de API do Google (começa com AIza e tem cerca de 39 caracteres).");
      return;
    }
    state.youtubeKey = value;
    try {
      localStorage.setItem(YOUTUBE_KEY_STORAGE, value);
    } catch (e) {
      console.warn("Erro ao salvar a chave:", e);
    }
    setVideoStatus(key, "");
    const panel = document.getElementById(`videoPanel-${key}`);
    fetchVideos(key, state.videoBusca[key]?.query || panel?.dataset.query);
  }

  function forgetYoutubeKey(key) {
    if (!confirm("Remover a chave da API deste navegador? As aulas já encontradas continuam salvas.")) return;
    state.youtubeKey = "";
    try {
      localStorage.removeItem(YOUTUBE_KEY_STORAGE);
    } catch (e) {
      console.warn("Erro ao remover a chave:", e);
    }
    setVideoStatus(key, "");
    refreshVideoPanel(key);
  }

  function addVideo(event, key) {
    event.preventDefault();
    const form = event.target;
    const parsed = parseVideoUrl(form.url.value);
    if (!parsed) {
      alert(
        "Não reconheci esse link. Use um link do YouTube (vídeo, shorts ou playlist) ou um arquivo .mp4/.webm direto.",
      );
      return;
    }
    const fallbackTitle = {
      youtube: `Vídeo do YouTube (${parsed.ref})`,
      playlist: "Playlist do YouTube",
      file: decodeURIComponent(parsed.ref.split("/").pop().split("?")[0]),
    }[parsed.kind];
    (state.videos[key] ??= []).push({
      ...parsed,
      title: form.title.value.trim() || fallbackTitle,
    });
    saveVideos();
    form.reset();
    // As aulas do aluno vêm primeiro: a recém-adicionada é a última delas.
    playVideo(key, state.videos[key].length - 1);
  }

  function playVideo(key, idx, autoplay = true) {
    const video = topicVideos(key)[idx];
    const slot = document.getElementById(`videoPlayer-${key}`);
    if (!video || !slot) return;
    tocandoAgora[key] = videoId(video);

    let player;
    if (video.kind === "file") {
      player = `<video controls ${autoplay ? "autoplay" : ""} src="${escapeHtml(video.ref)}"></video>`;
    } else {
      // youtube-nocookie: o player não grava cookies até o vídeo tocar.
      const params = new URLSearchParams({ rel: "0" });
      if (autoplay) params.set("autoplay", "1");
      if (video.start) params.set("start", String(video.start));
      const src =
        video.kind === "playlist"
          ? `https://www.youtube-nocookie.com/embed/videoseries?list=${encodeURIComponent(video.ref)}&${params}`
          : `https://www.youtube-nocookie.com/embed/${encodeURIComponent(video.ref)}?${params}`;
      player = `<iframe src="${src}" title="${escapeHtml(video.title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
    }
    const total = topicVideos(key).length;
    slot.innerHTML = `
      <div class="video-frame">${player}</div>
      <div class="video-now-playing">
        <span>Aula ${idx + 1} de ${total} · ${escapeHtml(video.title)}</span>
        <div class="video-now-actions">
          <button type="button" class="btn-nav ${isWatched(video) ? "btn-nav-prev" : "btn-nav-next"}" onclick="window.estudosApp.finishVideo('${key}')">
            ${isWatched(video) ? "Próxima aula →" : "✓ Concluí · próxima aula"}
          </button>
        </div>
      </div>`;
    refreshVideoPanel(key);
    if (autoplay) slot.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  // Marca a aula atual como vista e abre a próxima não assistida.
  function finishVideo(key) {
    const list = topicVideos(key);
    const idx = Math.max(0, indiceTocando(key, list));
    if (tocandoAgora[key]) state.videoVistos.add(tocandoAgora[key]);
    saveVideos();
    const after = list.findIndex((v, i) => i > idx && !isWatched(v));
    const before = list.findIndex((v) => !isWatched(v));
    const next = after !== -1 ? after : before;
    if (next === -1) {
      closeVideo(key);
      setVideoStatus(key, `<p class="video-hint-ok">🎉 Você assistiu todas as aulas deste assunto.</p>`);
      refreshVideoPanel(key);
      return;
    }
    playVideo(key, next);
  }

  function closeVideo(key) {
    const slot = document.getElementById(`videoPlayer-${key}`);
    if (slot) slot.innerHTML = "";
    delete tocandoAgora[key];
  }

  function toggleVideoWatched(key, idx) {
    const video = topicVideos(key)[idx];
    if (!video) return;
    const id = videoId(video);
    if (state.videoVistos.has(id)) state.videoVistos.delete(id);
    else state.videoVistos.add(id);
    saveVideos();
    refreshVideoPanel(key);
  }

  // Aula do aluno: remove. Sugestão da busca: oculta (em qualquer assunto).
  function removeVideo(key, idx) {
    const video = topicVideos(key)[idx];
    if (!video) return;
    if (video.source === "minha") {
      if (!confirm(`Remover "${video.title}"?`)) return;
      const own = state.videos[key];
      own.splice(own.findIndex((v) => videoId(v) === videoId(video)), 1);
      if (!own.length) delete state.videos[key];
    } else {
      state.videoOcultos.add(video.ref);
    }
    saveVideos();
    if (tocandoAgora[key] === videoId(video) && indiceTocando(key) === -1) closeVideo(key);
    refreshVideoPanel(key);
  }

  // Os contadores 🎬 ficam no menu lateral; re-renderizar a aba inteira
  // derrubaria o player, então o menu é refeito à parte.
  function refreshSidebarBadges() {
    document.querySelectorAll(".theory-nav-item").forEach((btn) => {
      const match = btn.getAttribute("onclick")?.match(/'([\w-]+)'\)$/);
      if (!match) return;
      btn.querySelector(".video-count")?.remove();
      btn.insertAdjacentHTML("beforeend", videoCountBadge(match[1]));
    });
  }

  // Exporta o que é do aluno: aulas adicionadas, vistas e ocultadas. O cache
  // da busca fica de fora — refazê-lo custa só cota.
  function exportVideos() {
    const payload = {
      videos: state.videos,
      vistos: [...state.videoVistos],
      ocultos: [...state.videoOcultos],
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "videoaulas.json";
    link.click();
    URL.revokeObjectURL(link.href);
  }

  // Mescla com o que já existe, sem duplicar o mesmo vídeo no mesmo assunto.
  // Aceita também o formato antigo ({ chave: [vídeos] }, com `watched`).
  function importVideos(event) {
    const file = event.target.files[0];
    if (!file) return;
    file.text().then((text) => {
      let added = 0;
      try {
        const data = JSON.parse(text);
        const videos = data.videos && !Array.isArray(data.videos) ? data.videos : data;
        Object.entries(videos).forEach(([key, list]) => {
          // Só chaves de assunto: nada de "__proto__"/"constructor" vindo do arquivo.
          if (!/^[a-z0-9][\w-]*$/i.test(key) || key in Object.prototype || !Array.isArray(list)) return;
          list.forEach((video) => {
            const parsed =
              video.kind === "file"
                ? parseVideoUrl(String(video.ref))
                : video.kind === "playlist"
                  ? parseVideoUrl(`https://www.youtube.com/playlist?list=${video.ref}`)
                  : parseVideoUrl(`https://youtu.be/${video.ref}`);
            if (!parsed) return;
            if (video.watched) state.videoVistos.add(videoId(parsed));
            const target = (state.videos[key] ??= []);
            if (target.some((v) => videoId(v) === videoId(parsed))) return;
            target.push({
              ...parsed,
              start: Number(video.start) || parsed.start || 0,
              title: String(video.title || parsed.ref).slice(0, 200),
            });
            added++;
          });
        });
        (data.vistos || []).forEach((id) => typeof id === "string" && state.videoVistos.add(id));
        (data.ocultos || []).forEach((id) => /^[\w-]{11}$/.test(id) && state.videoOcultos.add(id));
      } catch (e) {
        alert("Arquivo inválido: esperava o JSON exportado pela plataforma.");
        return;
      }
      saveVideos();
      alert(`${added} videoaula(s) importada(s).`);
      switchTab(state.currentTab);
    });
  }

  // --- RENDERIZAÇÃO DA ABA DE ESTATÍSTICAS ---
  function renderStatsTab() {
    const statsContainer = document.getElementById("statsViewContainer");
    if (!statsContainer) return;

    // Progresso consolidado (treino + simulados finalizados) no banco inteiro;
    // um simulado em andamento nunca entra aqui.
    const score = computeScore(state.respostas, questions());
    const total = score.total;
    const overallAccuracy =
      score.answered > 0 ? Math.round((score.correct / score.answered) * 100) : 0;
    const examCoverage = total ? Math.round((score.answered / total) * 100) : 0;

    const history = JSON.parse(localStorage.getItem(historyKey()) || "[]");

    statsContainer.innerHTML = `
      <div class="stats-container">
        <!-- Hero Metrics -->
        <div class="stats-hero-grid">
          <div class="stat-card">
            <div class="stat-icon">🎯</div>
            <div class="stat-val">${overallAccuracy}%</div>
            <div class="stat-label">Aproveitamento Geral</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">✅</div>
            <div class="stat-val">${score.correct} / ${score.answered}</div>
            <div class="stat-label">Acertos nas Respondidas</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">📋</div>
            <div class="stat-val">${score.answered} / ${total}</div>
            <div class="stat-label">Cobertura do Banco (${examCoverage}%)</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">${hasPenalty() ? "⚖️" : "❌"}</div>
            <div class="stat-val">${hasPenalty() ? score.points : score.wrong}</div>
            <div class="stat-label">${hasPenalty() ? "Nota Líquida (acertos − erros C/E)" : "Erros para Revisar"}</div>
          </div>
        </div>

        <!-- Desempenho por Disciplina -->
        <div class="breakdown-card">
          <h3>📊 Aproveitamento por Disciplina · ${escapeHtml(concurso().sigla)}</h3>
          <div class="subject-progress-list">
            ${Object.entries(score.breakdown)
              .map(([subj, data]) => {
                const acc =
                  data.answered > 0
                    ? Math.round((data.correct / data.answered) * 100)
                    : 0;
                let barColor = "var(--primary)";
                if (data.answered > 0) {
                  if (acc >= 70) barColor = "var(--success)";
                  else if (acc >= 50) barColor = "var(--primary)";
                  else barColor = "var(--danger)";
                }

                return `
                <div>
                  <div class="progress-row-header">
                    <span>${escapeHtml(subj)} (${data.correct}/${data.answered} acertadas de ${data.total})</span>
                    <span style="color:${barColor}; font-weight:700;">${acc}%</span>
                  </div>
                  <div class="progress-bar-bg">
                    <div class="progress-bar-fill" style="width: ${acc}%; background-color: ${barColor};"></div>
                  </div>
                </div>
              `;
              })
              .join("")}
          </div>
        </div>

        <!-- Histórico de Tentativas -->
        <div class="breakdown-card">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
            <h3>🕒 Histórico de Simulados Salvos</h3>
            ${
              history.length > 0
                ? `
              <button class="btn-icon" onclick="window.estudosApp.clearHistory()" style="font-size:0.8rem;">
                Limpar Histórico
              </button>
            `
                : ""
            }
          </div>
          ${
            history.length === 0
              ? `
            <p style="color:var(--text-muted); font-size:0.9rem;">Nenhum simulado finalizado ainda. Conclua uma tentativa para gravar suas notas aqui.</p>
          `
              : `
            <div style="overflow-x:auto;">
            <table style="width:100%; border-collapse:collapse; font-size:0.88rem;">
              <thead>
                <tr style="border-bottom:2px solid var(--border-color); text-align:left; color:var(--text-muted);">
                  <th style="padding:0.5rem;">Data e Hora</th>
                  <th style="padding:0.5rem;">Tipo</th>
                  <th style="padding:0.5rem;">${hasPenalty() ? "Nota líquida" : "Acertos"}</th>
                  <th style="padding:0.5rem;">Aproveitamento</th>
                </tr>
              </thead>
              <tbody>
                ${history
                  .map(
                    (item) => `
                  <tr style="border-bottom:1px solid var(--border-subtle);">
                    <td style="padding:0.5rem;">${escapeHtml(item.date)}</td>
                    <td style="padding:0.5rem;"><span class="badge badge-subtopic">Simulado${item.esgotado ? " · tempo esgotado" : ""}</span></td>
                    <td style="padding:0.5rem; font-weight:700;">${item.score} / ${item.total}</td>
                    <td style="padding:0.5rem; color:${item.percentage >= concurso().notaCorte ? "var(--success)" : "var(--danger)"}; font-weight:800;">${item.percentage}%</td>
                  </tr>
                `,
                  )
                  .join("")}
              </tbody>
            </table>
            </div>
          `
          }
        </div>
      </div>
    `;
  }

  function clearHistory() {
    if (confirm(`Deseja limpar todo o histórico de tentativas do ${concurso().sigla}?`)) {
      localStorage.removeItem(historyKey());
      renderStatsTab();
    }
  }

  // --- RENDERIZAÇÃO DA ABA DE CADERNO DE ERROS ---
  function renderErrosTab() {
    const container = document.getElementById("errosViewContainer");
    if (!container) return;

    const wrongQuestions = questions().filter(
      (q) => state.respostas[q.uid] !== undefined && state.respostas[q.uid] !== q.correctAnswer,
    );

    if (wrongQuestions.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🌟</div>
          <h3>Nenhum erro registrado até o momento!</h3>
          <p>Seja porque você ainda não começou a responder ou porque gabaritou todas as questões resolvidas. Continue assim!</p>
          <button class="btn-nav btn-nav-next" style="margin-top:1rem;" onclick="window.estudosApp.switchTab('simulado')">Ir para o Simulado</button>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div style="margin-bottom:1.5rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
        <div>
          <h2>❌ Caderno de Questões Incorretas (${wrongQuestions.length})</h2>
          <p style="color:var(--text-secondary); font-size:0.92rem;">Revise e entenda o motivo do erro para não repetir no dia da prova oficial.</p>
        </div>
        <button class="btn-nav btn-nav-next" onclick="window.estudosApp.filterOnlyErrors()">
          Treinar Somente os Erros
        </button>
      </div>

      <div style="display:flex; flex-direction:column; gap:1.25rem;">
        ${wrongQuestions
          .map((q) => {
            const userChoice = state.respostas[q.uid];
            const letters = optionLetters(q);
            return `
            <div class="question-card" style="border-left: 4px solid var(--danger);">
              <div class="question-meta">
                <div class="question-badges">
                  <span class="badge badge-subject">${escapeHtml(q.subject)}</span>
                  <span class="badge badge-subtopic">${escapeHtml(q.subtopic)}</span>
                  <span class="badge badge-status-incorrect">Sua resposta: ${letters[userChoice]} | Correto: ${letters[q.correctAnswer]}</span>
                </div>
                <button class="btn-nav btn-nav-prev" style="padding:0.3rem 0.75rem; font-size:0.8rem;" onclick="window.estudosApp.focusQuestion(${q.id})">
                  Resolver Novamente
                </button>
              </div>

              <div class="question-statement">${formatInline(q.statement)}</div>

              <div class="explanation-box visible" style="margin-top:1rem;">
                <div class="explanation-title">💡 Comentário e Análise do Erro</div>
                <div class="explanation-content">${formatInline(q.explanation)}</div>
              </div>
            </div>
          `;
          })
          .join("")}
      </div>
    `;
  }

  function filterOnlyErrors() {
    garantirTreino();
    state.statusFilter = "wrong";
    state.subjectFilter = "all";
    state.areaFilter = null;
    resetFilterControls();
    state.currentUid = null;
    switchTab("simulado");
  }

  // --- RENDERIZAÇÃO DA ABA DE FOCO DE ESTUDO ---
  // Título legível de uma área: vem da seção de teoria de mesmo id.
  function areaTitle(areaId) {
    for (const mod of concurso().theory) {
      const section = mod.sections.find((s) => s.id === areaId);
      if (section) return section.title;
    }
    return areaId;
  }

  function renderFocusTab() {
    const container = document.getElementById("focusViewContainer");
    if (!container) return;

    // Agrupa em dois níveis: disciplina -> área -> questões.
    // O ranking é por área porque, numa prova só, quase todo subtópico
    // apareceria uma única vez e o "ranking" viraria ordem alfabética.
    const bySubject = {};
    questions().forEach((question) => {
      const subject = (bySubject[question.subject] ??= {});
      (subject[question.area] ??= []).push(question);
    });

    const subjectCards = Object.entries(bySubject)
      .map(([subject, areas]) => {
        const total = Object.values(areas).reduce((sum, qs) => sum + qs.length, 0);
        const rankedAreas = Object.entries(areas).sort(
          (a, b) => b[1].length - a[1].length || areaTitle(a[0]).localeCompare(areaTitle(b[0])),
        );
        const topCount = rankedAreas[0][1].length;

        const rows = rankedAreas
          .map(([areaId, areaQuestions], index) => {
            const share = Math.round((areaQuestions.length / total) * 100);
            const isTop = areaQuestions.length === topCount;
            const subtopics = [...new Set(areaQuestions.map((q) => q.subtopic))]
              .sort((a, b) => a.localeCompare(b))
              .join(" · ");
            const answered = areaQuestions.filter((q) => state.respostas[q.uid] !== undefined);
            const hits = answered.filter((q) => state.respostas[q.uid] === q.correctAnswer).length;
            const accuracy = answered.length
              ? ` · seu acerto: ${Math.round((hits / answered.length) * 100)}% (${hits}/${answered.length})`
              : "";

            return `
              <div class="focus-topic-row${isTop ? " is-top" : ""}">
                <div class="focus-topic-rank">${index + 1}</div>
                <div class="focus-topic-main">
                  <strong>${escapeHtml(areaTitle(areaId))}</strong>
                  <div class="focus-topic-bar" role="img"
                       aria-label="${areaQuestions.length} de ${total} questões, ${share}%">
                    <span style="width:${share}%"></span>
                  </div>
                  <span>${areaQuestions.length} de ${total} questões · ${share}%${accuracy}</span>
                  <span class="focus-topic-subtopics">${escapeHtml(subtopics)}</span>
                </div>
                <div class="focus-topic-actions">
                  <button class="btn-nav btn-nav-next" onclick="window.estudosApp.practiceArea('${areaId}')">Praticar</button>
                  <button class="btn-theory-shortcut" onclick="window.estudosApp.jumpToTheory('${areaId}')">Teoria</button>
                </div>
              </div>
            `;
          })
          .join("");

        return `
          <article class="focus-subject-card">
            <div class="focus-subject-header">
              <div>
                <span class="badge badge-subject">${escapeHtml(subject)}</span>
                <h2>${escapeHtml(subject)}</h2>
              </div>
              <strong>${total} questões</strong>
            </div>
            <p class="focus-subject-note">Áreas temáticas, da com mais questões para a com menos.</p>
            <div class="focus-topic-list">${rows}</div>
          </article>
        `;
      })
      .join("");

    container.innerHTML = `
      <div class="focus-intro">
        <span class="badge badge-subject">🎯 Estratégia de revisão</span>
        <h1>Foco de Estudo · ${escapeHtml(concurso().sigla)}</h1>
        <p>${escapeHtml(concurso().focoNota)} Cada linha leva à teoria e às questões da área.</p>
      </div>
      <div class="focus-subject-grid">${subjectCards}</div>
    `;
  }

  // Abre uma questão do banco no treino (atalhos da trilha, foco e erros).
  function focusQuestion(questionId) {
    garantirTreino();
    state.subjectFilter = "all";
    state.statusFilter = "all";
    state.areaFilter = null;
    resetFilterControls();
    switchTab("simulado");
    jumpToQuestionId(questionId);
  }

  // --- ABA GUIA DO CONCURSO ---
  function renderGuiaTab() {
    const container = document.getElementById("guiaViewContainer");
    if (!container) return;
    container.innerHTML = `
      <div class="theory-reader-card" style="max-width: 960px; margin: 0 auto">
        <div class="theory-content-body">
          ${parseMarkdown(concurso().guia)}
          <div style="margin-top: 2rem; text-align: center">
            <button class="btn-nav btn-nav-next" onclick="window.estudosApp.abrirSimulado()">
              Fazer um simulado no formato do edital
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // --- NAVEGAÇÃO DE ABAS ---
  function switchTab(tabId) {
    state.currentTab = tabId;

    // Um vídeo de outra aba não pode seguir tocando escondido.
    document.querySelectorAll(".video-player-slot").forEach((slot) => {
      if (slot.childElementCount) slot.innerHTML = "";
    });
    Object.keys(tocandoAgora).forEach((key) => delete tocandoAgora[key]);

    // Atualiza botões de aba
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-tab") === tabId);
    });

    // Atualiza painéis de visão
    document.querySelectorAll(".tab-content-panel").forEach((panel) => {
      panel.style.display = panel.id === `view-${tabId}` ? "block" : "none";
    });

    if (tabId === "simulado") {
      renderCurrentQuestion();
    } else if (tabId === "teoria") {
      renderTheoryTab();
    } else if (tabId === "portugues") {
      renderPortuguesTab();
    } else if (tabId === "estatisticas") {
      renderStatsTab();
    } else if (tabId === "foco") {
      renderFocusTab();
    } else if (tabId === "erros") {
      renderErrosTab();
    } else if (tabId === "sobre") {
      renderGuiaTab();
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updateBadges() {
    // Erros vêm do progresso consolidado: o simulado em andamento não conta.
    const errorCount = questions().filter(
      (q) => state.respostas[q.uid] !== undefined && state.respostas[q.uid] !== q.correctAnswer,
    ).length;
    const errorsBadge = document.getElementById("badgeErrorsCount");
    if (errorsBadge) errorsBadge.textContent = errorCount;

    const ptBadge = document.getElementById("badgePtProgress");
    if (ptBadge) ptBadge.textContent = `${ptProgressPercent()}%`;

    const lista = activeQuestions();
    const answers = respostasAtivas();
    const answeredCount = lista.filter((q) => answers[q.uid] !== undefined).length;
    const answeredBadge = document.getElementById("badgeSimuladoCount");
    if (answeredBadge) answeredBadge.textContent = `${answeredCount}/${lista.length}`;
  }

  // --- CONTROLES DE ACESSIBILIDADE E TEMA ---
  function toggleTheme() {
    const currentTheme =
      document.documentElement.getAttribute("data-theme") || "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);

    const themeIcon = document.getElementById("themeToggleIcon");
    if (themeIcon) themeIcon.textContent = newTheme === "dark" ? "☀️" : "🌙";
  }

  function adjustFontSize(delta) {
    state.fontScale = Math.max(0.85, Math.min(1.35, state.fontScale + delta));
    document.documentElement.style.setProperty(
      "--user-font-scale",
      `${state.fontScale}rem`,
    );
    localStorage.setItem(FONT_STORAGE_KEY, state.fontScale.toString());
  }

  function resetFilters() {
    state.subjectFilter = "all";
    state.statusFilter = "all";
    state.areaFilter = null;
    const subjSelect = document.getElementById("subjectFilterSelect");
    const statSelect = document.getElementById("statusFilterSelect");
    if (subjSelect) subjSelect.value = "all";
    if (statSelect) statSelect.value = "all";
    state.currentUid = null;
    state.pinnedUid = null;
    renderCurrentQuestion();
  }

  // --- PARSER DE MARKDOWN PARA OS LEITORES DE TEORIA E GUIA ---
  // Blocos de código e código inline são separados antes de tudo e voltam
  // literais no fim: `List<String>`, `SELECT *` e `a * b` não viram tag nem
  // itálico. O resto do texto tem `&` e `<` escapados, então o conteúdo é
  // sempre markdown, nunca HTML cru.
  function parseMarkdown(mdText) {
    if (!mdText) return "";

    const stash = [];
    const keep = (html) => `\u0000${stash.push(html) - 1}\u0000`;
    const escapeCode = (code) =>
      code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    let text = mdText
      .replace(/\r\n/g, "\n")
      .replace(/```[\w-]*\n?([\s\S]*?)```/g, (_, code) =>
        `\n\n${keep(`<pre><code>${escapeCode(code.replace(/\n$/, ""))}</code></pre>`)}\n\n`,
      )
      .replace(/`([^`\n]+)`/g, (_, code) => keep(`<code>${escapeCode(code)}</code>`))
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;");

    // A ordem importa: ***x***; depois **x** simples, que resolve o itálico
    // com negrito dentro (*começou **a** estudar*); por último o negrito com
    // itálico dentro (**cuidado com *should* aqui**).
    const inline = (s) =>
      s
        .replace(/\*\*\*([^*]+)\*\*\*/g, "<strong><em>$1</em></strong>")
        .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
        .replace(/\*\*(?!\s)((?:[^*]|\*[^*]+\*)+?)\*\*/g, "<strong>$1</strong>")
        .replace(/(^|[^\w*])\*([^*\n]+)\*(?![\w*])/g, "$1<em>$2</em>");

    const renderTable = (lines) => {
      const rows = lines
        // A linha divisória (| --- | :--- |) só tem pipes, dois-pontos e hífens.
        .filter((line) => /[^\s|:-]/.test(line))
        .map((line) =>
          line
            .trim()
            .replace(/^\||\|$/g, "")
            .split("|")
            .map((cell) => inline(cell.trim())),
        );
      const [head, ...body] = rows;
      return `<div style="overflow-x:auto;"><table><thead><tr>${head
        .map((c) => `<th>${c}</th>`)
        .join("")}</tr></thead><tbody>${body
        .map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`)
        .join("")}</tbody></table></div>`;
    };

    const out = [];
    const lines = text.split("\n");
    let paragraph = [];
    const flushParagraph = () => {
      if (paragraph.length) out.push(`<p>${inline(paragraph.join("<br>"))}</p>`);
      paragraph = [];
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();
      let m;

      if (!trimmed) {
        flushParagraph();
      } else if (/^\u0000\d+\u0000$/.test(trimmed)) {
        flushParagraph();
        out.push(trimmed);
      } else if ((m = trimmed.match(/^(#{2,4})\s+(.*)$/))) {
        flushParagraph();
        const level = m[1].length;
        out.push(`<h${level}>${inline(m[2])}</h${level}>`);
      } else if (trimmed.startsWith("> ") || trimmed === ">") {
        flushParagraph();
        out.push(`<blockquote>${inline(trimmed.replace(/^>\s?/, ""))}</blockquote>`);
      } else if (trimmed.startsWith("|")) {
        flushParagraph();
        const block = [];
        while (i < lines.length && lines[i].trim().startsWith("|")) block.push(lines[i++]);
        i--;
        out.push(renderTable(block));
      } else if (/^[-*]\s+/.test(trimmed) || /^\d+\.\s+/.test(trimmed)) {
        flushParagraph();
        const ordered = /^\d+\./.test(trimmed);
        const pattern = ordered ? /^\d+\.\s+/ : /^[-*]\s+/;
        const items = [];
        while (i < lines.length && pattern.test(lines[i].trim())) {
          items.push(`<li>${inline(lines[i].trim().replace(pattern, ""))}</li>`);
          i++;
        }
        i--;
        out.push(ordered ? `<ol>${items.join("")}</ol>` : `<ul>${items.join("")}</ul>`);
      } else {
        paragraph.push(trimmed);
      }
    }
    flushParagraph();

    return out
      .join("\n")
      .replace(/\u0000(\d+)\u0000/g, (_, n) => stash[Number(n)]);
  }

  function escapeHtml(text) {
    if (!text) return "";
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Escapa o texto e só depois converte **trecho** no destaque que a FGV usa
  // para marcar o "elemento destacado" do enunciado. Escapar antes mantém seguro.
  function formatInline(text) {
    return escapeHtml(text).replace(
      /\*\*([^*]+)\*\*/g,
      '<strong class="destaque">$1</strong>',
    );
  }

  // --- ATALHOS DE TECLADO ---
  function initKeyboardNavigation() {
    window.addEventListener("keydown", (e) => {
      // Ignora atalhos se o foco estiver em inputs de formulário
      if (
        ["INPUT", "SELECT", "TEXTAREA"].includes(document.activeElement.tagName)
      )
        return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      // Com o resultado aberto, só o Esc vale (fecha o diálogo).
      if (document.getElementById("resultsModal")) {
        if (e.key === "Escape") closeResultsModal();
        return;
      }
      // Em botões e links, Enter/Espaço são do próprio elemento.
      if (["Enter", " "].includes(e.key)) return;

      if (state.currentTab === "simulado" && document.querySelector(".question-card .options-list")) {
        const filtered = getFilteredQuestions();
        const currentQ = filtered[currentIndex(filtered)];

        // Múltipla escolha: A–E ou 1–5. Certo/Errado: C ou E (1 ou 2).
        const keyMap = currentQ && isCertoErrado(currentQ)
          ? { c: 0, 1: 0, e: 1, 2: 1 }
          : { a: 0, 1: 0, b: 1, 2: 1, c: 2, 3: 2, d: 3, 4: 3, e: 4, 5: 4 };
        const key = e.key.toLowerCase();

        if (currentQ && keyMap[key] !== undefined) {
          selectOption(currentQ.uid, keyMap[key]);
        } else if (e.key === "ArrowRight") {
          navigateQuestion(1);
        } else if (e.key === "ArrowLeft") {
          navigateQuestion(-1);
        }
      }
    });
  }

  // Modo Prova: abre o cartão do simulado (iniciar, retomar ou revisar o último).
  function abrirSimulado() {
    if (state.mode !== "prova") {
      state.mode = "prova";
      state.pinnedUid = null;
      state.currentUid = state.tentativa?.uids[0] || null;
      saveState();
    }
    syncModeButtons();
    renderSubjectOptions();
    if (state.currentTab !== "simulado") switchTab("simulado");
    else renderCurrentQuestion();
    updateBadges();
  }

  function syncModeButtons() {
    document.getElementById("modeTreinoBtn")?.classList.toggle("active", state.mode === "treino");
    document.getElementById("modeProvaBtn")?.classList.toggle("active", state.mode === "prova");
  }

  // --- INICIALIZAÇÃO DA APLICAÇÃO ---
  function init() {
    atribuirUids();
    loadPersistedState();
    applyConcursoChrome();

    const themeIcon = document.getElementById("themeToggleIcon");
    if (themeIcon && document.documentElement.getAttribute("data-theme") === "dark") {
      themeIcon.textContent = "☀️";
    }

    // Eventos dos botões de Abas
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        switchTab(btn.getAttribute("data-tab"));
      });
    });

    document
      .getElementById("concursoSelect")
      ?.addEventListener("change", (e) => switchConcurso(e.target.value));

    // Seletor de Modo: Treino (banco inteiro) x Simulado (formato do edital)
    document.getElementById("modeTreinoBtn")?.addEventListener("click", () => {
      garantirTreino();
      renderCurrentQuestion();
      updateBadges();
    });
    document.getElementById("modeProvaBtn")?.addEventListener("click", abrirSimulado);
    syncModeButtons();

    // Sair da página pausa o simulado (o tempo não corre com o app fechado).
    window.addEventListener("pagehide", pauseTimer);

    // Filtros de Matéria e Status
    const subjectSelect = document.getElementById("subjectFilterSelect");
    subjectSelect?.addEventListener("change", (e) => {
      state.subjectFilter = e.target.value;
      state.currentUid = null;
      state.pinnedUid = null;
      renderCurrentQuestion();
    });

    const statusSelect = document.getElementById("statusFilterSelect");
    statusSelect?.addEventListener("change", (e) => {
      state.statusFilter = e.target.value;
      state.currentUid = null;
      state.pinnedUid = null;
      renderCurrentQuestion();
    });

    // Botões de Cabeçalho
    document
      .getElementById("themeToggleBtn")
      ?.addEventListener("click", toggleTheme);
    document
      .getElementById("fontIncreaseBtn")
      ?.addEventListener("click", () => adjustFontSize(0.05));
    document
      .getElementById("fontDecreaseBtn")
      ?.addEventListener("click", () => adjustFontSize(-0.05));
    document
      .getElementById("resetTestBtn")
      ?.addEventListener("click", resetSimulado);

    // Renderização inicial
    renderCurrentQuestion();
    updateTimerDisplay();
    updateBadges();
    initKeyboardNavigation();
  }

  // Expõe API para chamadas inline do HTML
  window.estudosApp = {
    selectOption,
    clearAnswer,
    toggleBookmark,
    toggleReview,
    navigateQuestion,
    jumpTo,
    jumpToQuestionId,
    iniciarSimulado,
    abrirSimulado,
    descartarSimulado,
    confirmFinishExam,
    closeResultsModal,
    resetSimulado,
    switchTab,
    switchConcurso,
    selectTheorySection,
    jumpToTheory,
    practiceArea,
    clearAreaFilter,
    focusQuestion,
    selectPtLesson,
    togglePtLesson,
    navigatePtLesson,
    ptPraticar,
    addVideo,
    searchVideos,
    saveYoutubeKey,
    forgetYoutubeKey,
    atualizarVideos,
    playVideo,
    finishVideo,
    closeVideo,
    toggleVideoWatched,
    removeVideo,
    exportVideos,
    importVideos,
    filterOnlyErrors,
    resetFilters,
    clearHistory,
  };

  // Nome antigo, de quando o app era só da DATAPREV: mantido para atalhos salvos.
  window.dataprevApp = window.estudosApp;

  // Exposto para testes em Node (tools/); o navegador ignora.
  window.__parseMarkdown = parseMarkdown;

  document.addEventListener("DOMContentLoaded", init);
})();
