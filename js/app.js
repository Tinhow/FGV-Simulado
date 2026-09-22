/**
 * DATAPREV SIMULADO & TEORIA - MOTOR DA APLICAÇÃO (APP.JS)
 * Gerencia o estado do simulado, cronômetro, navegação por abas,
 * persistência no LocalStorage, cálculo de desempenho e leitor de teoria.
 */

(function () {
  "use strict";

  // --- ESTADO GLOBAL DA APLICAÇÃO ---
  const STATE_STORAGE_KEY = "dataprev_exam_state_v1";
  const HISTORY_STORAGE_KEY = "dataprev_exam_history_v1";
  const THEME_STORAGE_KEY = "dataprev_theme_pref";
  const FONT_STORAGE_KEY = "dataprev_font_scale";
  // Tempo oficial do caderno FGV/DATAPREV: 4 horas, já incluída a marcação do cartão.
  const EXAM_TOTAL_SECONDS = 4 * 3600;
  const PT_PROGRESS_KEY = "dataprev_pt_progress_v1";

  const state = {
    currentTab: "simulado",
    mode: "treino", // 'treino' (feedback imediato) ou 'prova' (revelar só no final)
    currentQuestionIndex: 0,
    answers: {}, // { [questionId]: optionIndex }
    bookmarks: new Set(), // Set of question IDs
    markedForReview: new Set(), // Set of question IDs
    subjectFilter: "all",
    statusFilter: "all",
    examFinished: false,
    examSecondsRemaining: EXAM_TOTAL_SECONDS,
    timerRunning: false,
    timerInterval: null,
    currentTheoryModuleId: "portugues",
    currentTheorySectionId: "portugues-interpretacao",
    currentPtLessonId: "pt-1-1",
    ptCompleted: new Set(), // ids das lições marcadas como estudadas
    fontScale: 1.0,
  };

  // Carrega preferências e histórico
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

      const savedData = localStorage.getItem(STATE_STORAGE_KEY);
      if (savedData) {
        const parsed = JSON.parse(savedData);
        state.answers = parsed.answers || {};
        state.bookmarks = new Set(parsed.bookmarks || []);
        state.markedForReview = new Set(parsed.markedForReview || []);
        state.mode = parsed.mode || "treino";
        state.examFinished = parsed.examFinished || false;
        if (typeof parsed.examSecondsRemaining === "number") {
          // Clampa contra o total oficial: estados salvos antes da correção
          // do tempo de prova guardavam 4h30 e ficariam acima do limite.
          state.examSecondsRemaining = Math.min(
            parsed.examSecondsRemaining,
            EXAM_TOTAL_SECONDS,
          );
        }
      }
    } catch (e) {
      console.warn("Erro ao carregar dados do localStorage:", e);
    }
  }

  function saveState() {
    try {
      const payload = {
        answers: state.answers,
        bookmarks: Array.from(state.bookmarks),
        markedForReview: Array.from(state.markedForReview),
        mode: state.mode,
        examFinished: state.examFinished,
        examSecondsRemaining: state.examSecondsRemaining,
      };
      localStorage.setItem(STATE_STORAGE_KEY, JSON.stringify(payload));
    } catch (e) {
      console.warn("Erro ao salvar estado:", e);
    }
  }

  // --- GERENCIAMENTO DO CRONÔMETRO ---
  function startTimer() {
    if (state.timerRunning || state.examFinished) return;
    state.timerRunning = true;
    updateTimerDisplay();

    state.timerInterval = setInterval(() => {
      if (state.examSecondsRemaining > 0) {
        state.examSecondsRemaining--;
        updateTimerDisplay();
        if (state.examSecondsRemaining % 30 === 0) saveState();
      } else {
        clearInterval(state.timerInterval);
        state.timerRunning = false;
        finishExam(true);
      }
    }, 1000);
  }

  function pauseTimer() {
    if (!state.timerRunning) return;
    clearInterval(state.timerInterval);
    state.timerRunning = false;
    saveState();
    updateTimerDisplay();
  }

  function updateTimerDisplay() {
    const timerElem = document.getElementById("timerDisplay");
    const timerBox = document.getElementById("timerBox");
    if (!timerElem) return;

    const hours = Math.floor(state.examSecondsRemaining / 3600);
    const minutes = Math.floor((state.examSecondsRemaining % 3600) / 60);
    const seconds = state.examSecondsRemaining % 60;

    timerElem.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    if (state.examSecondsRemaining < 1800) {
      // menos de 30 min
      timerBox?.classList.add("warning");
    } else {
      timerBox?.classList.remove("warning");
    }
  }

  // --- FILTRAGEM DE QUESTÕES ---
  function getFilteredQuestions() {
    return questionsData.filter((q) => {
      // Filtro de Matéria
      if (state.subjectFilter !== "all" && q.subject !== state.subjectFilter) {
        return false;
      }

      // Filtro de Status
      const isAnswered = state.answers[q.id] !== undefined;
      const isBookmarked = state.bookmarks.has(q.id);
      const isWrong = isAnswered && state.answers[q.id] !== q.correctAnswer;

      if (state.statusFilter === "unanswered" && isAnswered) return false;
      if (state.statusFilter === "answered" && !isAnswered) return false;
      if (state.statusFilter === "bookmarked" && !isBookmarked) return false;
      if (state.statusFilter === "wrong" && !isWrong) return false;

      return true;
    });
  }

  // --- RENDERIZAÇÃO DA QUESTÃO ATUAL ---
  function renderCurrentQuestion() {
    const container = document.getElementById("questionCardContainer");
    const filteredList = getFilteredQuestions();

    if (!container) return;

    if (filteredList.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🔍</div>
          <h3>Nenhuma questão encontrada com estes filtros</h3>
          <p>Tente alterar o filtro de matéria ou status no painel superior.</p>
          <button class="btn-nav btn-nav-next" style="margin-top:1rem;" onclick="window.dataprevApp.resetFilters()">Redefinir Filtros</button>
        </div>
      `;
      renderPalette();
      return;
    }

    if (state.currentQuestionIndex >= filteredList.length) {
      state.currentQuestionIndex = 0;
    }

    const q = filteredList[state.currentQuestionIndex];
    const totalFiltered = filteredList.length;
    const isAnswered = state.answers[q.id] !== undefined;
    const selectedOpt = state.answers[q.id];
    const isBookmarked = state.bookmarks.has(q.id);
    const isFlaggedReview = state.markedForReview.has(q.id);
    const showFeedback =
      state.mode === "treino" ? isAnswered : state.examFinished;
    const letters = ["A", "B", "C", "D", "E"];

    let statusBadge = "";
    if (showFeedback && isAnswered) {
      const isCorrect = selectedOpt === q.correctAnswer;
      statusBadge = isCorrect
        ? `<span class="badge badge-status-correct">✓ Correto</span>`
        : `<span class="badge badge-status-incorrect">✗ Incorreto (Gabarito: ${letters[q.correctAnswer]})</span>`;
    }

    const optionsHtml = q.options
      .map((optText, idx) => {
        let optClass = "option-item";
        if (selectedOpt === idx) optClass += " selected";

        if (showFeedback) {
          if (idx === q.correctAnswer) {
            optClass += " correct";
          } else if (selectedOpt === idx && idx !== q.correctAnswer) {
            optClass += " incorrect";
          }
        }

        return `
        <div class="${optClass}" data-option-index="${idx}" onclick="window.dataprevApp.selectOption(${q.id}, ${idx})">
          <div class="option-letter">${letters[idx]}</div>
          <div class="option-text">${formatInline(optText)}</div>
        </div>
      `;
      })
      .join("");

    const explanationHtml = `
      <div class="explanation-box ${showFeedback ? "visible" : ""}" id="explanationBox">
        <div class="explanation-title">
          <span>💡 Comentário & Justificativa do Gabarito</span>
          <span style="font-size:0.8rem; font-weight:normal; color:var(--text-muted);">Questão ${q.id} de 70</span>
        </div>
        <div class="explanation-content">${formatInline(q.explanation)}</div>
        ${
          q.theoryRef
            ? `
          <button class="btn-theory-shortcut" onclick="window.dataprevApp.jumpToTheory('${q.theoryRef}')">
            📖 Ver embasamento teórico completo deste assunto
          </button>
        `
            : ""
        }
      </div>
    `;

    container.innerHTML = `
      <article class="question-card">
        <div class="question-meta">
          <div class="question-badges">
            <span class="badge badge-subject">${escapeHtml(q.subject)}</span>
            <span class="badge badge-subtopic">${escapeHtml(q.subtopic)}</span>
            ${statusBadge}
          </div>
          <div class="question-actions-top">
            <button class="btn-bookmark ${isBookmarked ? "bookmarked" : ""}" onclick="window.dataprevApp.toggleBookmark(${q.id})">
              ${isBookmarked ? "★ Salva" : "☆ Salvar"}
            </button>
            <button class="btn-bookmark ${isFlaggedReview ? "bookmarked" : ""}" onclick="window.dataprevApp.toggleReview(${q.id})" title="Marcar para revisar depois">
              ${isFlaggedReview ? "🚩 Em Dúvida" : "🏳️ Dúvida"}
            </button>
          </div>
        </div>

        <div style="font-size:0.88rem; font-weight:700; color:var(--text-muted); margin-bottom:0.75rem;">
          Questão ${q.id} (Item ${state.currentQuestionIndex + 1} de ${totalFiltered})
        </div>

        ${
          q.passage
            ? `<div class="question-passage">
                 <div class="question-passage-label">📄 Texto de apoio</div>
                 <div class="question-passage-body">${formatInline(q.passage)}</div>
               </div>`
            : ""
        }

        <div class="question-statement">${formatInline(q.statement)}</div>

        <div class="options-list">
          ${optionsHtml}
        </div>

        ${explanationHtml}

        <div class="quiz-nav-footer">
          <button class="btn-nav btn-nav-prev" onclick="window.dataprevApp.navigateQuestion(-1)" ${state.currentQuestionIndex === 0 ? "disabled" : ""}>
            ← Anterior
          </button>

          <span style="font-size:0.9rem; color:var(--text-muted); font-weight:600;">
            ${state.currentQuestionIndex + 1} / ${totalFiltered}
          </span>

          <div style="display:flex; gap:0.5rem;">
            ${
              state.mode === "prova" && !state.examFinished
                ? `
              <button class="btn-nav btn-finish-test" onclick="window.dataprevApp.confirmFinishExam()">
                Finalizar Prova
              </button>
            `
                : ""
            }
            <button class="btn-nav btn-nav-next" onclick="window.dataprevApp.navigateQuestion(1)" ${state.currentQuestionIndex >= totalFiltered - 1 ? "disabled" : ""}>
              Próxima →
            </button>
          </div>
        </div>
      </article>
    `;

    renderPalette();
  }

  // --- RENDERIZAÇÃO DA PALETA DE QUESTÕES (GRID 1 A 70) ---
  function renderPalette() {
    const paletteGrid = document.getElementById("paletteGrid");
    const totalAnsweredElem = document.getElementById("paletteAnsweredCount");
    if (!paletteGrid) return;

    const filtered = getFilteredQuestions();
    const currentQ = filtered[state.currentQuestionIndex];
    let answeredCount = 0;

    const buttonsHtml = questionsData
      .map((q, idx) => {
        const isAnswered = state.answers[q.id] !== undefined;
        const isCurrent = currentQ && currentQ.id === q.id;
        const isReview = state.markedForReview.has(q.id);
        const isCorrect = isAnswered && state.answers[q.id] === q.correctAnswer;
        const showFeedback =
          state.mode === "treino" ? isAnswered : state.examFinished;

        if (isAnswered) answeredCount++;

        let btnClass = "grid-num-btn";
        if (isCurrent) btnClass += " current";
        if (isReview) btnClass += " review";

        if (showFeedback && isAnswered) {
          btnClass += isCorrect ? " correct" : " incorrect";
        } else if (isAnswered) {
          btnClass += " answered";
        }

        return `
        <button class="${btnClass}" onclick="window.dataprevApp.jumpToQuestionId(${q.id})" title="Questão ${q.id} - ${q.subject}">
          ${q.id}
        </button>
      `;
      })
      .join("");

    paletteGrid.innerHTML = buttonsHtml;
    if (totalAnsweredElem) {
      totalAnsweredElem.textContent = `${answeredCount} / 70 respondidas`;
    }
  }

  // --- INTERAÇÕES DO QUIZ ---
  function selectOption(questionId, optionIndex) {
    if (state.mode === "prova" && state.examFinished) return; // Prova já submetida

    state.answers[questionId] = optionIndex;
    saveState();
    renderCurrentQuestion();
    updateBadges();
  }

  function toggleBookmark(questionId) {
    if (state.bookmarks.has(questionId)) {
      state.bookmarks.delete(questionId);
    } else {
      state.bookmarks.add(questionId);
    }
    saveState();
    renderCurrentQuestion();
    updateBadges();
  }

  function toggleReview(questionId) {
    if (state.markedForReview.has(questionId)) {
      state.markedForReview.delete(questionId);
    } else {
      state.markedForReview.add(questionId);
    }
    saveState();
    renderCurrentQuestion();
  }

  function navigateQuestion(delta) {
    const filtered = getFilteredQuestions();
    const newIdx = state.currentQuestionIndex + delta;
    if (newIdx >= 0 && newIdx < filtered.length) {
      state.currentQuestionIndex = newIdx;
      renderCurrentQuestion();
      window.scrollTo({ top: 180, behavior: "smooth" });
    }
  }

  function jumpToQuestionId(questionId) {
    const filtered = getFilteredQuestions();
    const targetIdx = filtered.findIndex((q) => q.id === questionId);
    if (targetIdx !== -1) {
      state.currentQuestionIndex = targetIdx;
      renderCurrentQuestion();
      window.scrollTo({ top: 180, behavior: "smooth" });
    } else {
      // Se a questão não está visível devido a filtros, limpa os filtros
      state.subjectFilter = "all";
      state.statusFilter = "all";
      const subjectSelect = document.getElementById("subjectFilterSelect");
      const statusSelect = document.getElementById("statusFilterSelect");
      if (subjectSelect) subjectSelect.value = "all";
      if (statusSelect) statusSelect.value = "all";

      const newFiltered = getFilteredQuestions();
      state.currentQuestionIndex = newFiltered.findIndex(
        (q) => q.id === questionId,
      );
      renderCurrentQuestion();
      window.scrollTo({ top: 180, behavior: "smooth" });
    }
  }

  // --- FINALIZAÇÃO DO SIMULADO (MODO PROVA) ---
  function confirmFinishExam() {
    const answeredCount = Object.keys(state.answers).length;
    const unanswered = 70 - answeredCount;
    let msg = `Você respondeu ${answeredCount} de 70 questões.`;
    if (unanswered > 0) {
      msg += `\n\nAinda restam ${unanswered} questões sem resposta! Deseja realmente finalizar o simulado agora?`;
    } else {
      msg += `\n\nDeseja submeter e conferir o gabarito oficial com seu resultado?`;
    }

    if (confirm(msg)) {
      finishExam();
    }
  }

  function finishExam(autoTriggered = false) {
    pauseTimer();
    state.examFinished = true;
    saveState();

    // Registra no histórico
    saveToHistory();

    renderCurrentQuestion();
    showResultsModal(autoTriggered);
    updateBadges();
  }

  function saveToHistory() {
    try {
      let correct = 0;
      questionsData.forEach((q) => {
        if (state.answers[q.id] === q.correctAnswer) correct++;
      });
      const percent = Math.round((correct / 70) * 100);

      const record = {
        date: new Date().toLocaleString("pt-BR"),
        score: correct,
        total: 70,
        percentage: percent,
        mode: state.mode,
      };

      const history = JSON.parse(
        localStorage.getItem(HISTORY_STORAGE_KEY) || "[]",
      );
      history.unshift(record);
      if (history.length > 20) history.pop();
      localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(history));
    } catch (e) {
      console.warn("Erro ao salvar histórico:", e);
    }
  }

  function showResultsModal(autoTriggered) {
    let correct = 0;
    const breakdown = {};

    questionsData.forEach((q) => {
      if (!breakdown[q.subject])
        breakdown[q.subject] = { total: 0, correct: 0 };
      breakdown[q.subject].total++;
      if (state.answers[q.id] === q.correctAnswer) {
        correct++;
        breakdown[q.subject].correct++;
      }
    });

    const percent = Math.round((correct / 70) * 100);
    const passed = percent >= 50; // Critério típico de aprovação (50% de acerto geral)

    const modal = document.createElement("div");
    modal.className = "modal-backdrop";
    modal.id = "resultsModal";
    modal.innerHTML = `
      <div class="modal-dialog">
        <div class="modal-icon">${passed ? "🎉" : "📊"}</div>
        <h2>${autoTriggered ? "Tempo Esgotado!" : "Simulado Concluído!"}</h2>
        <p>${passed ? "Parabéns! Você atingiu o perfil mínimo de classificação da Dataprev." : "Bom treino! Revise os pontos fracos e repita o simulado para alcançar a aprovação."}</p>
        
        <div class="modal-score-badge">
          ${correct} / 70 <span style="font-size:1.2rem; font-weight:normal;">(${percent}%)</span>
        </div>

        <div style="text-align:left; background:var(--bg-secondary); padding:1rem; border-radius:var(--radius-sm); margin:1rem 0; font-size:0.85rem;">
          ${Object.entries(breakdown)
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
          <button class="btn-nav btn-nav-next" onclick="window.dataprevApp.closeResultsModal()">Revisar Questões</button>
          <button class="btn-nav btn-nav-prev" onclick="window.dataprevApp.switchTab('estatisticas')">Ver Estatísticas</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  function closeResultsModal() {
    const modal = document.getElementById("resultsModal");
    if (modal) modal.remove();
  }

  function resetSimulado() {
    if (
      confirm(
        "Atenção: Isso irá limpar todas as respostas atuais para você refazer o simulado do início. Confirmar?",
      )
    ) {
      state.answers = {};
      state.markedForReview.clear();
      state.examFinished = false;
      state.examSecondsRemaining = EXAM_TOTAL_SECONDS;
      pauseTimer();
      saveState();
      renderCurrentQuestion();
      updateBadges();
      alert("Simulado reiniciado com sucesso! Bom estudo.");
    }
  }

  // --- RENDERIZAÇÃO DA ABA DE TEORIA ---
  function renderTheoryTab() {
    const sidebar = document.getElementById("theorySidebar");
    const reader = document.getElementById("theoryReader");
    if (!sidebar || !reader) return;

    // Constrói menu lateral agrupado
    sidebar.innerHTML = theoryModules
      .map(
        (mod) => `
      <div class="theory-nav-group">
        <div class="theory-group-title">${mod.icon} ${escapeHtml(mod.title)}</div>
        ${mod.sections
          .map(
            (sec) => `
          <button 
            class="theory-nav-item ${state.currentTheorySectionId === sec.id ? "active" : ""}" 
            onclick="window.dataprevApp.selectTheorySection('${mod.id}', '${sec.id}')">
            ${escapeHtml(sec.title)}
          </button>
        `,
          )
          .join("")}
      </div>
    `,
      )
      .join("");

    // Localiza módulo e seção atuais
    let currentModule = theoryModules.find(
      (m) => m.id === state.currentTheoryModuleId,
    );
    if (!currentModule) currentModule = theoryModules[0];

    let currentSection = currentModule.sections.find(
      (s) => s.id === state.currentTheorySectionId,
    );
    if (!currentSection) currentSection = currentModule.sections[0];

    // Mapeamento para filtrar questões relacionadas
    const relatedQuestionsCount = questionsData.filter(
      (q) =>
        q.theoryRef === currentSection.id ||
        q.subject.toLowerCase().includes(currentModule.id),
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
            <button class="btn-theory-shortcut" onclick="window.dataprevApp.filterByTheorySubject('${escapeHtml(currentModule.title)}')">
              🎯 Praticar questões deste tema (${relatedQuestionsCount})
            </button>
          </div>
        </div>

        <div class="theory-content-body">
          ${parseMarkdown(currentSection.content)}
        </div>
      </article>
    `;
  }

  function selectTheorySection(moduleId, sectionId) {
    state.currentTheoryModuleId = moduleId;
    state.currentTheorySectionId = sectionId;
    renderTheoryTab();
    window.scrollTo({ top: 120, behavior: "smooth" });
  }

  function jumpToTheory(areaId) {
    // O id da área é o mesmo da seção de teoria (ver questions.js), então a
    // busca é direta — não existe mais mapa de aliases para manter em dia.
    for (const mod of theoryModules) {
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
    renderPortuguesTab();
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

  // Abre o simulado filtrado em uma questão específica citada pela lição.
  function ptPraticar(questionId) {
    focusQuestion(questionId);
  }

  function renderPortuguesTab() {
    const sidebar = document.getElementById("ptSidebar");
    const reader = document.getElementById("ptReader");
    if (!sidebar || !reader) return;

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
              onclick="window.dataprevApp.selectPtLesson('${lesson.id}')">
              <span class="pt-check ${state.ptCompleted.has(lesson.id) ? "done" : ""}">${state.ptCompleted.has(lesson.id) ? "✓" : "○"}</span>
              ${escapeHtml(lesson.title)}
            </button>
          `,
            )
            .join("")}
        </div>
      `;
        })
        .join("")}
    `;

    const { nivel, lesson } = ptFindLesson(state.currentPtLessonId);
    const idx = all.findIndex((e) => e.lesson.id === lesson.id);
    const isDone = state.ptCompleted.has(lesson.id);

    const praticaHtml = (lesson.questions || []).length
      ? `
      <div class="pt-practice">
        <strong>Praticar na prova oficial:</strong>
        ${lesson.questions
          .map(
            (qid) =>
              `<button class="btn-theory-shortcut" onclick="window.dataprevApp.ptPraticar(${qid})">Questão ${qid}</button>`,
          )
          .join("")}
      </div>`
      : `<div class="pt-practice pt-practice-empty">Esta prova não trouxe questão deste tópico — mas a FGV cobra o tema com frequência.</div>`;

    reader.innerHTML = `
      <article class="theory-reader-card">
        <div class="theory-header-box">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:1rem; flex-wrap:wrap;">
            <div>
              <span class="badge badge-subject" style="margin-bottom:0.5rem;">${nivel.icon} Nível ${nivel.level} · ${escapeHtml(nivel.title)}</span>
              <h2>${escapeHtml(lesson.title)}</h2>
              <p>${escapeHtml(lesson.summary)}</p>
            </div>
            <button class="btn-nav ${isDone ? "btn-nav-prev" : "btn-nav-next"}"
                    onclick="window.dataprevApp.togglePtLesson('${lesson.id}')">
              ${isDone ? "✓ Estudado" : "Marcar como estudado"}
            </button>
          </div>
        </div>

        <div class="theory-content-body">
          ${parseMarkdown(lesson.content)}
        </div>

        ${praticaHtml}

        <div class="quiz-nav-footer">
          <button class="btn-nav btn-nav-prev" onclick="window.dataprevApp.navigatePtLesson(-1)" ${idx === 0 ? "disabled" : ""}>
            ← Anterior
          </button>
          <span style="font-size:0.85rem; color:var(--text-muted);">Lição ${idx + 1} de ${all.length}</span>
          <button class="btn-nav btn-nav-next" onclick="window.dataprevApp.navigatePtLesson(1)" ${idx >= all.length - 1 ? "disabled" : ""}>
            Próxima →
          </button>
        </div>
      </article>
    `;
  }

  function filterByTheorySubject(subjectTitle) {
    // Identifica nome da matéria correspondente
    let targetSubject = "all";
    if (subjectTitle.includes("Portuguesa"))
      targetSubject = "Língua Portuguesa";
    else if (subjectTitle.includes("Inglesa")) targetSubject = "Língua Inglesa";
    else if (subjectTitle.includes("Raciocínio"))
      targetSubject = "Raciocínio Lógico-Matemático";
    else if (subjectTitle.includes("Atualidades"))
      targetSubject = "Atualidades";
    else if (subjectTitle.includes("Legislação"))
      targetSubject = "Legislação & Proteção de Dados";
    else if (subjectTitle.includes("Específicos"))
      targetSubject = "Conhecimentos Específicos de TI";

    state.subjectFilter = targetSubject;
    const select = document.getElementById("subjectFilterSelect");
    if (select) select.value = targetSubject;

    state.currentQuestionIndex = 0;
    switchTab("simulado");
  }

  // --- RENDERIZAÇÃO DA ABA DE ESTATÍSTICAS ---
  function renderStatsTab() {
    const statsContainer = document.getElementById("statsViewContainer");
    if (!statsContainer) return;

    let totalAnswered = 0;
    let totalCorrect = 0;
    const subjectStats = {};

    questionsData.forEach((q) => {
      if (!subjectStats[q.subject]) {
        subjectStats[q.subject] = { total: 0, answered: 0, correct: 0 };
      }
      subjectStats[q.subject].total++;

      const ans = state.answers[q.id];
      if (ans !== undefined) {
        totalAnswered++;
        subjectStats[q.subject].answered++;
        if (ans === q.correctAnswer) {
          totalCorrect++;
          subjectStats[q.subject].correct++;
        }
      }
    });

    const overallAccuracy =
      totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
    const examCoverage = Math.round((totalAnswered / 70) * 100);

    const history = JSON.parse(
      localStorage.getItem(HISTORY_STORAGE_KEY) || "[]",
    );

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
            <div class="stat-val">${totalCorrect} / ${totalAnswered}</div>
            <div class="stat-label">Acertos nas Respondidas</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">📋</div>
            <div class="stat-val">${totalAnswered} / 70</div>
            <div class="stat-label">Cobertura da Prova (${examCoverage}%)</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">❌</div>
            <div class="stat-val">${totalAnswered - totalCorrect}</div>
            <div class="stat-label">Erros para Revisar</div>
          </div>
        </div>

        <!-- Desempenho por Disciplina -->
        <div class="breakdown-card">
          <h3>📊 Aproveitamento por Disciplina da Prova</h3>
          <div class="subject-progress-list">
            ${Object.entries(subjectStats)
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
              <button class="btn-icon" onclick="window.dataprevApp.clearHistory()" style="font-size:0.8rem;">
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
            <table style="width:100%; border-collapse:collapse; font-size:0.88rem;">
              <thead>
                <tr style="border-bottom:2px solid var(--border-color); text-align:left; color:var(--text-muted);">
                  <th style="padding:0.5rem;">Data e Hora</th>
                  <th style="padding:0.5rem;">Modo</th>
                  <th style="padding:0.5rem;">Acertos</th>
                  <th style="padding:0.5rem;">Aproveitamento</th>
                </tr>
              </thead>
              <tbody>
                ${history
                  .map(
                    (item) => `
                  <tr style="border-bottom:1px solid var(--border-subtle);">
                    <td style="padding:0.5rem;">${escapeHtml(item.date)}</td>
                    <td style="padding:0.5rem;"><span class="badge badge-subtopic">${item.mode === "prova" ? "Prova Real" : "Treino"}</span></td>
                    <td style="padding:0.5rem; font-weight:700;">${item.score} / ${item.total}</td>
                    <td style="padding:0.5rem; color:${item.percentage >= 50 ? "var(--success)" : "var(--danger)"}; font-weight:800;">${item.percentage}%</td>
                  </tr>
                `,
                  )
                  .join("")}
              </tbody>
            </table>
          `
          }
        </div>
      </div>
    `;
  }

  function clearHistory() {
    if (confirm("Deseja limpar todo o histórico de tentativas?")) {
      localStorage.removeItem(HISTORY_STORAGE_KEY);
      renderStatsTab();
    }
  }

  // --- RENDERIZAÇÃO DA ABA DE CADERNO DE ERROS ---
  function renderErrosTab() {
    const container = document.getElementById("errosViewContainer");
    if (!container) return;

    const wrongQuestions = questionsData.filter((q) => {
      return (
        state.answers[q.id] !== undefined &&
        state.answers[q.id] !== q.correctAnswer
      );
    });

    if (wrongQuestions.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🌟</div>
          <h3>Nenhum erro registrado até o momento!</h3>
          <p>Seja porque você ainda não começou a responder ou porque gabaritou todas as questões resolvidas. Continue assim!</p>
          <button class="btn-nav btn-nav-next" style="margin-top:1rem;" onclick="window.dataprevApp.switchTab('simulado')">Ir para o Simulado</button>
        </div>
      `;
      return;
    }

    const letters = ["A", "B", "C", "D", "E"];

    container.innerHTML = `
      <div style="margin-bottom:1.5rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
        <div>
          <h2>❌ Caderno de Questões Incorretas (${wrongQuestions.length})</h2>
          <p style="color:var(--text-secondary); font-size:0.92rem;">Revise e entenda o motivo do erro para não repetir no dia da prova oficial.</p>
        </div>
        <button class="btn-nav btn-nav-next" onclick="window.dataprevApp.filterOnlyErrors()">
          Treinar Somente Erros no Simulado
        </button>
      </div>

      <div style="display:flex; flex-direction:column; gap:1.25rem;">
        ${wrongQuestions
          .map((q) => {
            const userChoice = state.answers[q.id];
            return `
            <div class="question-card" style="border-left: 4px solid var(--danger);">
              <div class="question-meta">
                <div class="question-badges">
                  <span class="badge badge-subject">${escapeHtml(q.subject)}</span>
                  <span class="badge badge-subtopic">${escapeHtml(q.subtopic)}</span>
                  <span class="badge badge-status-incorrect">Sua resposta: ${letters[userChoice]} | Correto: ${letters[q.correctAnswer]}</span>
                </div>
                <button class="btn-nav btn-nav-prev" style="padding:0.3rem 0.75rem; font-size:0.8rem;" onclick="window.dataprevApp.jumpToQuestionId(${q.id}); window.dataprevApp.switchTab('simulado');">
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
    state.statusFilter = "wrong";
    const statusSelect = document.getElementById("statusFilterSelect");
    if (statusSelect) statusSelect.value = "wrong";
    state.currentQuestionIndex = 0;
    switchTab("simulado");
  }

  // --- RENDERIZAÇÃO DA ABA DE FOCO DE ESTUDO ---
  // Título legível de uma área: vem da seção de teoria de mesmo id.
  function areaTitle(areaId) {
    for (const mod of theoryModules) {
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
    questionsData.forEach((question) => {
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
            const ids = areaQuestions.map((q) => q.id).join(", ");

            return `
              <div class="focus-topic-row${isTop ? " is-top" : ""}">
                <div class="focus-topic-rank">${index + 1}</div>
                <div class="focus-topic-main">
                  <strong>${escapeHtml(areaTitle(areaId))}</strong>
                  <div class="focus-topic-bar" role="img"
                       aria-label="${areaQuestions.length} de ${total} questões, ${share}%">
                    <span style="width:${share}%"></span>
                  </div>
                  <span>${areaQuestions.length} de ${total} questões · ${share}% · Nº ${ids}</span>
                  <span class="focus-topic-subtopics">${escapeHtml(subtopics)}</span>
                </div>
                <div class="focus-topic-actions">
                  <button class="btn-nav btn-nav-next" onclick="window.dataprevApp.focusQuestion(${areaQuestions[0].id})">Praticar</button>
                  <button class="btn-theory-shortcut" onclick="window.dataprevApp.jumpToTheory('${areaId}')">Teoria</button>
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
            <p class="focus-subject-note">Áreas temáticas desta prova, da mais cobrada para a menos cobrada.</p>
            <div class="focus-topic-list">${rows}</div>
          </article>
        `;
      })
      .join("");

    container.innerHTML = `
      <div class="focus-intro">
        <span class="badge badge-subject">🎯 Estratégia de revisão</span>
        <h1>Foco de Estudo</h1>
        <p>Peso de cada área temática no caderno Tipo 4 de 17/11/2024. Como é uma prova única, o ranking mostra
        quanto cada área ocupou <em>desta</em> prova — é um retrato do recorte da banca, não uma média histórica
        de várias edições. Cada linha leva à teoria correspondente.</p>
      </div>
      <div class="focus-subject-grid">${subjectCards}</div>
    `;
  }

  function focusQuestion(questionId) {
    state.subjectFilter = "all";
    state.statusFilter = "all";
    const subjectSelect = document.getElementById("subjectFilterSelect");
    const statusSelect = document.getElementById("statusFilterSelect");
    if (subjectSelect) subjectSelect.value = "all";
    if (statusSelect) statusSelect.value = "all";
    switchTab("simulado");
    jumpToQuestionId(questionId);
  }

  // --- NAVEGAÇÃO DE ABAS ---
  function switchTab(tabId) {
    state.currentTab = tabId;

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
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updateBadges() {
    const errorCount = questionsData.filter(
      (q) =>
        state.answers[q.id] !== undefined &&
        state.answers[q.id] !== q.correctAnswer,
    ).length;
    const errorsBadge = document.getElementById("badgeErrorsCount");
    if (errorsBadge) errorsBadge.textContent = errorCount;

    const ptBadge = document.getElementById("badgePtProgress");
    if (ptBadge) ptBadge.textContent = `${ptProgressPercent()}%`;

    const answeredCount = Object.keys(state.answers).length;
    const answeredBadge = document.getElementById("badgeSimuladoCount");
    if (answeredBadge) answeredBadge.textContent = `${answeredCount}/70`;
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
    const subjSelect = document.getElementById("subjectFilterSelect");
    const statSelect = document.getElementById("statusFilterSelect");
    if (subjSelect) subjSelect.value = "all";
    if (statSelect) statSelect.value = "all";
    state.currentQuestionIndex = 0;
    renderCurrentQuestion();
  }

  // --- PARSER BÁSICO DE MARKDOWN PARA O LEITOR DE TEORIA ---
  function parseMarkdown(mdText) {
    if (!mdText) return "";

    let html = mdText
      // Headers
      .replace(/^### (.*$)/gim, "<h3>$1</h3>")
      .replace(/^#### (.*$)/gim, "<h4>$1</h4>")
      .replace(/^## (.*$)/gim, "<h2>$1</h2>")
      // Code blocks
      .replace(/```text([\s\S]*?)```/gim, "<pre><code>$1</code></pre>")
      .replace(/```([\s\S]*?)```/gim, "<pre><code>$1</code></pre>")
      .replace(/`([^`]+)`/gim, "<code>$1</code>")
      // Bold and Italic
      .replace(/\*\*([^*]+)\*\*/gim, "<strong>$1</strong>")
      .replace(/\*([^*]+)\*/gim, "<em>$1</em>")
      // Blockquotes
      .replace(/^> (.*$)/gim, "<blockquote>$1</blockquote>")
      // Lists
      .replace(/^\s*-\s+(.*$)/gim, "<li>$1</li>");

    // Tabela simples em Markdown
    html = html.replace(/\|(.+)\|/gim, function (match) {
      if (match.includes("---")) return ""; // divisor de cabeçalho
      const cells = match.split("|").filter((c) => c.trim().length > 0);
      const row = cells.map((c) => `<td>${c.trim()}</td>`).join("");
      return `<tr>${row}</tr>`;
    });

    // Envolve linhas de tabelas em <table>
    html = html.replace(
      /(<tr>[\s\S]*?<\/tr>)/gim,
      '<div style="overflow-x:auto;"><table>$1</table></div>',
    );

    // Converte parágrafos simples
    html = html
      .split("\n\n")
      .map((chunk) => {
        chunk = chunk.trim();
        if (!chunk) return "";
        if (
          chunk.startsWith("<h") ||
          chunk.startsWith("<table") ||
          chunk.startsWith("<div") ||
          chunk.startsWith("<pre") ||
          chunk.startsWith("<blockquote") ||
          chunk.startsWith("<li")
        ) {
          return chunk;
        }
        return `<p>${chunk.replace(/\n/g, "<br>")}</p>`;
      })
      .join("\n");

    return html;
  }

  function escapeHtml(text) {
    if (!text) return "";
    return text
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

      if (state.currentTab === "simulado") {
        const filtered = getFilteredQuestions();
        const currentQ = filtered[state.currentQuestionIndex];

        // Letras A, B, C, D, E ou Números 1, 2, 3, 4, 5
        const keyMap = {
          a: 0,
          1: 0,
          b: 1,
          2: 1,
          c: 2,
          3: 2,
          d: 3,
          4: 3,
          e: 4,
          5: 4,
        };
        const key = e.key.toLowerCase();

        if (currentQ && keyMap[key] !== undefined) {
          selectOption(currentQ.id, keyMap[key]);
        } else if (e.key === "ArrowRight") {
          navigateQuestion(1);
        } else if (e.key === "ArrowLeft") {
          navigateQuestion(-1);
        }
      }
    });
  }

  // --- INICIALIZAÇÃO DA APLICAÇÃO ---
  function init() {
    loadPersistedState();

    // Eventos dos botões de Abas
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        switchTab(btn.getAttribute("data-tab"));
      });
    });

    // Seletor de Modo (Treino vs Prova Real)
    const modeTreinoBtn = document.getElementById("modeTreinoBtn");
    const modeProvaBtn = document.getElementById("modeProvaBtn");

    modeTreinoBtn?.addEventListener("click", () => {
      state.mode = "treino";
      modeTreinoBtn.classList.add("active");
      modeProvaBtn?.classList.remove("active");
      pauseTimer();
      saveState();
      renderCurrentQuestion();
    });

    modeProvaBtn?.addEventListener("click", () => {
      state.mode = "prova";
      modeProvaBtn.classList.add("active");
      modeTreinoBtn?.classList.remove("active");
      startTimer();
      saveState();
      renderCurrentQuestion();
    });

    if (state.mode === "prova") {
      modeProvaBtn?.classList.add("active");
      modeTreinoBtn?.classList.remove("active");
      startTimer();
    } else {
      modeTreinoBtn?.classList.add("active");
      modeProvaBtn?.classList.remove("active");
    }

    // Filtros de Matéria e Status
    const subjectSelect = document.getElementById("subjectFilterSelect");
    subjectSelect?.addEventListener("change", (e) => {
      state.subjectFilter = e.target.value;
      state.currentQuestionIndex = 0;
      renderCurrentQuestion();
    });

    const statusSelect = document.getElementById("statusFilterSelect");
    statusSelect?.addEventListener("change", (e) => {
      state.statusFilter = e.target.value;
      state.currentQuestionIndex = 0;
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
  window.dataprevApp = {
    selectOption,
    toggleBookmark,
    toggleReview,
    navigateQuestion,
    jumpToQuestionId,
    confirmFinishExam,
    closeResultsModal,
    resetSimulado,
    switchTab,
    selectTheorySection,
    jumpToTheory,
    focusQuestion,
    selectPtLesson,
    togglePtLesson,
    navigatePtLesson,
    ptPraticar,
    filterByTheorySubject,
    filterOnlyErrors,
    resetFilters,
    clearHistory,
  };

  document.addEventListener("DOMContentLoaded", init);
})();
