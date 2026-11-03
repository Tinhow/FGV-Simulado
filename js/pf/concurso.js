/* PF · Agente Administrativo — montagem do concurso.

   Junta os arquivos de disciplina (js/pf/*.js) num banco só, numerado de
   1 a N na ordem da teoria, para que praticar um assunto percorra um bloco
   contínuo. Todas as questões são inéditas no estilo Cebraspe. */
const pfConcurso = (() => {
  // Ordem das disciplinas: básicas primeiro, como no caderno do Cebraspe.
  const ORDEM_MODULOS = [
    "pf-portugues",
    "pf-rlm",
    "pf-informatica",
    "pf-constitucional",
    "pf-administrativo",
    "pf-etica",
    "pf-administracao",
    "pf-orcamento",
    "pf-arquivologia",
  ];
  const posicao = (id) => {
    const i = ORDEM_MODULOS.indexOf(id);
    return i === -1 ? ORDEM_MODULOS.length : i;
  };
  const theory = [...pfModulos].sort((a, b) => posicao(a.id) - posicao(b.id));
  const areaOrder = theory.flatMap((mod) => mod.sections.map((sec) => sec.id));

  const questions = pfQuestoes
    .map((question, index) => ({ question, index }))
    .sort(
      (a, b) =>
        areaOrder.indexOf(a.question.area) - areaOrder.indexOf(b.question.area) ||
        a.index - b.index,
    )
    .map(({ question }, index) => ({
      ...question,
      id: index + 1,
      theoryRef: question.area,
      explanation:
        question.formato === "certo-errado"
          ? `Gabarito: ${question.correctAnswer === 0 ? "CERTO" : "ERRADO"}. ${question.explanation}`
          : `Gabarito ${String.fromCharCode(65 + question.correctAnswer)}. ${question.explanation}`,
    }));

  const itensCE = questions.filter((q) => q.formato === "certo-errado").length;
  const itensME = questions.length - itensCE;

  return {
    id: "pf",
    storagePrefix: "pf",
    sigla: "PF",
    titulo: "Agente Administrativo · Polícia Federal",
    subtitulo: `Cebraspe · ${itensCE} itens Certo/Errado + ${itensME} de múltipla escolha (inéditos)`,
    banca: "Cebraspe",
    formato: "certo-errado",
    // Ritmo de treino: ~2 min por item C/E e ~3 min por múltipla escolha.
    duracaoSegundos: (itensCE * 2 + itensME * 3) * 60,
    // Até sair o novo edital: um simulado de 60 itens sorteados de todas as
    // disciplinas (o sorteio espalha pelos assuntos), em 2h.
    simulado: {
      blocos: [{ rotulo: "Itens de todas as disciplinas", subjects: null, n: 60 }],
      duracaoSegundos: 2 * 3600,
      nota: "Formato de treino até sair o novo edital da PF. Quando ele sair, o simulado passa a seguir a estrutura oficial da prova.",
    },
    notaCorte: 60,
    notaCorteRotulo: "meta de estudo de 60% da nota líquida — não é o corte do edital",
    trilhaPortugues: true,
    questions,
    theory,
    focoNota:
      "Quantidade de itens por área no banco de estudo da PF. Todos são inéditos no estilo Cebraspe; o ranking mostra onde há mais material para treinar, não a distribuição oficial da prova.",
    guia: `
## PF · Agente Administrativo

### 📌 Cenário do concurso
- O último concurso da área administrativa da PF (banca **Cebraspe**) foi homologado em **outubro de 2025**, com 192 vagas imediatas e cadastro de reserva. A validade vai até **outubro de 2027**, prorrogável por mais dois anos.
- A PF pediu autorização para convocar **341 excedentes** dessa lista.
- Um **novo concurso** consta do planejamento estratégico, com pedido de autorização previsto para 2027. O edital deve vir depois do vencimento ou do esgotamento do concurso atual, provavelmente a partir do fim de 2027.
- Cargos previstos: **Agente Administrativo** (nível médio) e cargos de nível superior (Administrador, Contador, Psicólogo, Assistente Social).

> **⚠️ Este banco é de treino.** Os itens são **inéditos, no estilo Cebraspe** — não são itens de prova oficial. As disciplinas seguem o perfil do cargo; quando o novo edital sair, confira o conteúdo programático e ajuste o estudo.

### ⚖️ Como o Cebraspe corrige (e por que isso muda a estratégia)
| Situação | Efeito na nota |
| --- | --- |
| Item Certo/Errado acertado | +1 |
| Item Certo/Errado errado | −1 (anula um acerto) |
| Item deixado em branco | 0 |
| Múltipla escolha errada | 0 (só deixa de pontuar) |

Chutar um item C/E sem nenhuma pista tem valor esperado **zero** (50% de +1, 50% de −1). Só marque quando tiver mais de 50% de confiança. No simulado, o botão **↺ Deixar em branco** desfaz uma marcação, e o resultado mostra a **nota líquida**.

### 📚 Disciplinas deste banco
| Bloco | Disciplinas |
| --- | --- |
| Básicas | Língua Portuguesa (estilo Cebraspe), Raciocínio Lógico, Noções de Informática |
| Jurídicas | Direito Constitucional, Direito Administrativo (Lei 8.112, 9.784, 8.429, 14.133), Ética no Serviço Público |
| Administrativas | Administração Geral e Pública, Gestão de Pessoas, Recursos Materiais, Orçamento Público, Arquivologia |

### 🎯 O que o Cebraspe mais faz
- **Troca uma palavra da lei**: prazo, "poderá" por "deverá", a autoridade competente, a exceção virando regra.
- **Reescritura em Português**: "a substituição de X por Y manteria a correção e o sentido do texto". Cheque as duas coisas, nessa ordem.
- **Vários itens sobre a mesma situação**: leia a situação uma vez com atenção e julgue cada item isoladamente.
- **Palavras absolutas** ("sempre", "somente", "nunca") são suspeitas, mas não são prova de erro: o Cebraspe também as usa em itens certos.

### 🗓️ Ciclo de estudo sugerido (semanal)
| Dia | Teoria | Prática |
| --- | --- | --- |
| Seg | Direito Administrativo (Lei 8.112 em primeiro lugar) | Itens da área |
| Ter | Português: reescritura e coesão | Itens sobre texto |
| Qua | Arquivologia | Itens da área + Caderno de Erros |
| Qui | Direito Constitucional e Ética | Itens da área |
| Sex | Administração e Orçamento | Itens da área |
| Sáb | Raciocínio Lógico e Informática | Simulado no Modo Prova Real |
| Dom | Videoaulas dos pontos fracos | Caderno de Erros |

### 💡 Como usar a plataforma
- A **Trilha de Português** cobre a gramática do zero. As seções de Português deste banco tratam de como o Cebraspe cobra a gramática.
- Cada assunto da teoria tem **🎯 Praticar questões deste assunto** e um painel de **🎬 Videoaulas**.
- Treine no **Modo Prova Real** com o cronômetro e acompanhe a **nota líquida** em Desempenho.
`,
  };
})();
