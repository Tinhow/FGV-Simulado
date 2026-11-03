/* TJPB 2026/2027 · montagem do concurso.

   Junta quatro fontes num só banco:
   1. Língua Portuguesa — as 12 questões REAIS do caderno DATAPREV/FGV 2024.
      A TJPB também é FGV, e a teoria de Português da DATAPREV vem junto.
   2. Raciocínio Lógico-Matemático — as 6 questões REAIS do mesmo caderno,
      com a teoria da DATAPREV, mais o complemento inédito (js/tjpb/rlm.js).
   3. Questões REAIS de TI do mesmo caderno cujo assunto está no edital da
      TJPB, reclassificadas na área de teoria correspondente (mapa abaixo).
   4. As questões INÉDITAS dos arquivos de eixo (eixo1 … eixo4, rlm).

   As questões são renumeradas de 1 a N na ordem disciplina → área, então
   praticar um assunto percorre um bloco contínuo. `origem` guarda de onde
   cada uma veio, e o card mostra isso ao candidato.

   Estrutura da prova (Edital nº 01/2026, item 10.8.3, área de TI): 60
   questões — Língua Portuguesa 10, Raciocínio lógico-matemático 10,
   Conhecimentos Específicos 40 —, aprovação com 60% (item 10.12). */
const tjpbConcurso = (() => {
  const PT = "Língua Portuguesa";
  const RLM = "Raciocínio Lógico-Matemático";

  // id da questão DATAPREV → seção de teoria da TJPB.
  // Fora: blockchain (42), mobile/Flutter (52) e IA (53), que ainda não têm
  // seção de teoria aqui — seguem no simulado DATAPREV.
  const REAIS_TI = {
    41: "tj-arq",
    43: "tj-requisitos",
    44: "tj-api",
    45: "tj-api",
    46: "tj-processos",
    47: "tj-agil",
    48: "tj-java",
    49: "tj-redes",
    50: "tj-js",
    51: "tj-poo",
    54: "tj-cripto",
    55: "tj-arq",
    56: "tj-devops",
    57: "tj-testes",
    58: "tj-api",
    // BI, DW e ETL estão no conteúdo comum de TI do edital ("Business Intelligence").
    59: "tj-modelagem",
    60: "tj-modelagem",
    61: "tj-modelagem",
    62: "tj-seguranca",
    63: "tj-seguranca",
    64: "tj-seguranca",
    65: "tj-modelagem",
    66: "tj-nosql",
    67: "tj-modelagem",
    68: "tj-agil",
    69: "tj-agil",
    70: "tj-agil",
  };

  // Ordem do caderno: básicas primeiro, depois os eixos específicos.
  const ORDEM_MODULOS = ["portugues", "rlm", "tj-rlm", "tj-eng", "tj-dev", "tj-bd", "tj-gov"];
  const subjectByModule = {
    portugues: PT,
    rlm: RLM,
    "tj-rlm": RLM,
    "tj-eng": TJ_ENG,
    "tj-dev": TJ_DEV,
    "tj-bd": TJ_BD,
    "tj-gov": TJ_GOV,
  };
  const theory = [
    ...theoryModules.filter((m) => m.id === "portugues" || m.id === "rlm"),
    ...tjpbModulos,
  ].sort((a, b) => ORDEM_MODULOS.indexOf(a.id) - ORDEM_MODULOS.indexOf(b.id));

  const areaOrder = [];
  const subjectByArea = {};
  theory.forEach((mod) =>
    mod.sections.forEach((sec) => {
      areaOrder.push(sec.id);
      subjectByArea[sec.id] = subjectByModule[mod.id];
    }),
  );

  const fromDataprev = (question, area) => ({
    ...question,
    area,
    theoryRef: area,
    subject: subjectByArea[area],
    origem: {
      tipo: "fgv",
      concurso: "dataprev",
      id: question.id,
      rotulo: `FGV · DATAPREV 2024 · Q${question.id}`,
    },
  });

  const reais = questionsData.flatMap((question) => {
    if (question.subject === PT || question.subject === RLM) {
      return [fromDataprev(question, question.area)];
    }
    const area = REAIS_TI[question.id];
    return area ? [fromDataprev(question, area)] : [];
  });

  const ineditas = tjpbQuestoes.map((question) => ({
    ...question,
    theoryRef: question.area,
    explanation: `Gabarito ${String.fromCharCode(65 + question.correctAnswer)}. ${question.explanation}`,
  }));

  // Ordena por área (na ordem da teoria), reais antes das inéditas.
  const ordered = [...reais, ...ineditas]
    .map((question, index) => ({ question, index }))
    .sort(
      (a, b) =>
        areaOrder.indexOf(a.question.area) - areaOrder.indexOf(b.question.area) ||
        a.index - b.index,
    )
    .map(({ question }, index) => ({ ...question, id: index + 1 }));

  return {
    id: "tjpb",
    storagePrefix: "tjpb",
    sigla: "TJPB",
    titulo: "Analista Judiciário · TI / Desenvolvimento de Sistemas",
    subtitulo: `Edital nº 01/2026 · FGV · prova em 24/01/2027 · banco com ${ordered.length} questões`,
    banca: "FGV",
    formato: "multipla",
    duracaoSegundos: 4 * 3600,
    notaCorte: 60,
    notaCorteRotulo: "mínimo do edital: 60% dos pontos da objetiva, item 10.12",
    simulado: {
      blocos: [
        { rotulo: "Língua Portuguesa", subjects: [PT], n: 10 },
        { rotulo: "Raciocínio lógico-matemático", subjects: [RLM], n: 10 },
        { rotulo: "Conhecimentos Específicos", subjects: [TJ_ENG, TJ_DEV, TJ_BD, TJ_GOV], n: 40 },
      ],
      duracaoSegundos: 4 * 3600,
      nota: "A prova real tem 5h (13h às 18h) para a objetiva e a discursiva juntas. O simulado dá 4h para as 60 objetivas, deixando 1h para a discursiva.",
    },
    trilhaPortugues: true,
    questions: ordered,
    theory,
    focoNota:
      "Peso de cada área no banco de estudo da TJPB: questões reais da FGV (caderno DATAPREV 2024) somadas às inéditas escritas para o edital. Mostra onde há mais material para treinar — a prova real tem 10 de Português, 10 de Raciocínio Lógico e 40 de Específicos.",
    guia: `
## TJPB · Analista Judiciário — TI / Desenvolvimento de Sistemas

### 📅 Datas e números do edital (nº 01/2026, FGV)
| Item | Edital |
| --- | --- |
| Inscrições | até as **16h de 18/11/2026**, em conhecimento.fgv.br/concursos/tjpb26 · taxa R$ 120,00 |
| Prova objetiva + discursiva | **24/01/2027**, das 13h às 18h (5h), em João Pessoa |
| Vagas em Desenvolvimento de Sistemas | 10 (6 ampla concorrência, 1 PcD, 3 negros) + cadastro de reserva |
| Remuneração | R$ 7.526,14 + auxílio-alimentação R$ 2.200,00 + auxílio-saúde R$ 1.800,00 |

> **⚠️ Confira sempre o edital e as retificações** no site da FGV. Esta página resume o edital retificado em 23/10/2026.

### 📋 Estrutura da prova
| Módulo | Disciplina | Questões |
| --- | --- | --- |
| Conhecimentos Gerais | Língua Portuguesa | 10 |
| Conhecimentos Gerais | Raciocínio lógico-matemático | 10 |
| Conhecimentos Específicos | Desenvolvimento de Sistemas | 40 |
| **Total** | 5 alternativas, 1 ponto cada | **60** |

- **Aprovação na objetiva**: 60% do total de pontos (36 de 60), item 10.12. Para PcD, negros, indígenas e quilombolas, a nota mínima é 20% menor (item 10.12.1).
- **Discursiva**: 1 questão de 30 linhas, valendo 40 pontos. Em Desenvolvimento de Sistemas, são corrigidas as discursivas dos aprovados na objetiva até a **100ª colocação**.

### 🎯 Simulado no formato do edital
O modo **🎯 Simulado** sorteia 10 + 10 + 40 questões do banco, com cronômetro, e só corrige no fim. O sorteio prefere as questões que você ainda não fez e espalha a escolha pelos assuntos. O **⚡ Treino** usa o banco inteiro, com filtros e o gabarito comentado na hora.

### 🗺️ O que o edital pede x o que este app já cobre
O conteúdo específico do edital é **bem mais amplo** que o resumo que circulou. Legenda: ✅ coberto (teoria e questões) · 🟡 parcial · ⬜ ainda não.

| Bloco do edital | Cobertura |
| --- | --- |
| Língua Portuguesa (interpretação, coesão, morfossintaxe, pontuação, concordância, regência, crase, reescrita) | ✅ teoria + Trilha + 12 questões reais FGV · ⬜ Redação Oficial |
| Raciocínio lógico-matemático (19 itens: de conjuntos numéricos a juros, funções, matrizes, estatística e lógica) | ✅ teoria + 6 questões reais FGV + inéditas |
| Engenharia de software e práticas ágeis (SDLC, Scrum, Kanban, requisitos, APF) | ✅ · ⬜ SAFe e SDD (desenvolvimento orientado a especificações) |
| Arquitetura e padrões (GoF, SOA, REST/SOAP, microsserviços, Clean Architecture, DDD) | ✅ · 🟡 arquitetura orientada a eventos (Kafka, RabbitMQ), service mesh, serverless |
| Design de sistemas (CAP, PACELC, escalabilidade, cache, Redis, balanceamento, circuit breaker) | 🟡 parte em microsserviços e NoSQL |
| Algoritmos e programação (Big-O, estruturas de dados, ordenação, POO, SOLID, Java moderno, Spring, JS/TS, Node) | ✅ POO, SOLID, Java/Spring, JS/TS · ⬜ Big-O, estruturas de dados, Angular/React, Python, Dart/Flutter |
| Desenvolvimento mobile (ciclo de vida, persistência, segurança, push) | ⬜ |
| Banco de dados (álgebra relacional, normalização, SQL, tuning, NoSQL, bancos vetoriais) | ✅ · ⬜ triggers/procedures, tuning, busca vetorial |
| DevOps, IaC e nuvem (CI/CD, Git, Docker, Kubernetes, Terraform, observabilidade) | ✅ CI/CD, Git, Docker, Kubernetes · ⬜ Terraform, Prometheus/Grafana/ELK |
| Inteligência artificial (NLP, embeddings, Transformers, LLM, RAG, LangChain) | ⬜ |
| Segurança e qualidade (OWASP, criptografia, PKI, OAuth/OIDC/SAML/JWT, SAST/DAST, testes, TDD) | ✅ · 🟡 SAST/DAST/IAST, contract e mutation testing, segurança de IA |
| Governança e regulação do Judiciário (PDPJ-Br, MNI, LGPD, Marco Civil, governança algorítmica, normas CNJ de IA) | ⬜ |
| UI/UX e acessibilidade (design systems, responsivo, eMAG, WCAG 2.1/2.2, ARIA) | ⬜ |
| Fundamentos comuns de TI (redes, ISO 27001/27002/27005, COBIT 2019, ITIL 4, contratações de TIC, BI, PDTI do TJPB) | ✅ redes, COBIT, ITIL, BI · 🟡 ISO 27005, contratações de TIC · ⬜ PDTI TJPB |

### 🗓️ Ciclo de estudo sugerido (semanal)
| Dia | Teoria | Prática |
| --- | --- | --- |
| Seg | Desenvolvimento (POO, Java, padrões) | Treino da área |
| Ter | Engenharia de software e ágil | Treino + Caderno de Erros |
| Qua | Português (Trilha) | Treino de Português |
| Qui | Banco de dados | Treino da área |
| Sex | Raciocínio lógico-matemático | Treino de RLM |
| Sáb | Revisão relâmpago | **Simulado no formato do edital** |
| Dom | Videoaulas dos pontos fracos + 1 discursiva de 30 linhas | Caderno de Erros |

### 💡 Como usar a plataforma
- Na **Teoria**, **Praticar questões deste assunto** abre o treino filtrado naquela área.
- Cada assunto tem **🎬 Videoaulas** com busca automática e player.
- Cada questão mostra se é **🏛️ real da FGV** ou **✍️ inédita** no estilo FGV.
`,
  };
})();
