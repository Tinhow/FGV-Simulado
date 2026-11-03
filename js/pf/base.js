/* PF · Agente Administrativo (nível médio) — banca Cebraspe.

   Base comum dos arquivos de disciplina (js/pf/*.js). Cada arquivo só
   empurra conteúdo para os dois arrays abaixo; a montagem (numeração,
   metadados do concurso) fica em js/pf/concurso.js.

   As questões daqui são INÉDITAS, escritas no estilo Cebraspe para treino.
   Não são itens de prova oficial e não devem ser rotuladas como tal.

   Formatos:
   - ce(): item Certo/Errado, o formato padrão do Cebraspe. Na correção, cada
     item errado anula um certo; deixar em branco não pontua nem desconta.
   - me(): múltipla escolha com 5 alternativas (A–E), sem desconto.

   Todos os scripts da página compartilham o escopo global (questions.js já
   declara `q`, `P`, `I`, `R`, `A`, `L`, `T`; tjpb/base.js declara `tq`).
   Por isso os arquivos de disciplina não declaram nada no topo: helpers e
   textos de apoio ficam dentro de um bloco `{ … }`. */
const pfModulos = [];
const pfQuestoes = [];

// Disciplinas (aparecem no filtro do simulado e nas estatísticas).
const PF_PT = "Língua Portuguesa",
  PF_RLM = "Raciocínio Lógico",
  PF_INF = "Noções de Informática",
  PF_DCON = "Direito Constitucional",
  PF_DADM = "Direito Administrativo",
  PF_ETI = "Ética no Serviço Público",
  PF_ADM = "Administração Geral e Pública",
  PF_AFO = "Orçamento e Finanças Públicas",
  PF_ARQ = "Arquivologia";

// ce(subject, subtopic, statement, certo, explanation, area, passage)
// - statement: o item a julgar, como afirmação completa. Quando vários itens
//   dividem um texto ou situação, repita a mesma constante em `passage`.
// - certo: true se o gabarito é CERTO, false se é ERRADO.
// - explanation: por que está certo/errado, citando a regra ou o dispositivo.
//   O prefixo "Gabarito: CERTO/ERRADO." é acrescentado na montagem.
const ce = (subject, subtopic, statement, certo, explanation, area, passage) => ({
  subject,
  subtopic,
  statement,
  options: ["Certo", "Errado"],
  correctAnswer: certo ? 0 : 1,
  formato: "certo-errado",
  explanation,
  area,
  passage,
  origem: { tipo: "inedita" },
});

// me(subject, subtopic, statement, options, correctAnswer, explanation, area, passage)
// - options: exatamente 5 alternativas, sem a letra na frente; correctAnswer 0–4.
const me = (subject, subtopic, statement, options, correctAnswer, explanation, area, passage) => ({
  subject,
  subtopic,
  statement,
  options,
  correctAnswer,
  formato: "multipla",
  explanation,
  area,
  passage,
  origem: { tipo: "inedita" },
});
