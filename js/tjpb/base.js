/* TJPB 2026/2027 · Analista Judiciário — TI / Desenvolvimento de Sistemas (FGV).

   Base comum dos arquivos de eixo (eixo1-*.js … eixo4-*.js). Cada eixo só
   empurra conteúdo para os dois arrays abaixo; a montagem final (numeração,
   questões reais da FGV reaproveitadas, metadados do concurso) fica em
   js/tjpb/concurso.js.

   IMPORTANTE: as questões criadas aqui são INÉDITAS, escritas no estilo FGV
   para treino. Não são questões de prova oficial e não devem ser rotuladas
   como tal. As questões reais vêm do caderno DATAPREV/FGV 2024 (questions.js)
   e chegam marcadas com `origem`.

   Todos os scripts da página compartilham o mesmo escopo global, e
   questions.js já declara `q`, `P`, `I`, `R`, `A`, `L` e `T`. Por isso os
   arquivos de eixo não declaram nada no topo: helpers e textos de apoio
   ficam dentro de um bloco `{ … }`. */
const tjpbModulos = [];
const tjpbQuestoes = [];

// Disciplinas (aparecem no filtro do simulado e nas estatísticas).
const TJ_ENG = "Engenharia de Software e Ágil",
  TJ_DEV = "Desenvolvimento de Sistemas",
  TJ_BD = "Banco de Dados",
  TJ_GOV = "Fundamentos de TI e Governança";

// tq(subject, subtopic, statement, options, correctAnswer, explanation, area, passage)
// - options: exatamente 5 alternativas (A–E), sem a letra na frente.
// - correctAnswer: índice 0–4.
// - explanation: justifica a correta e derruba os distratores. O prefixo
//   "Gabarito X." é acrescentado na montagem.
// - area: id de uma seção de teoria de algum eixo.
// - passage (opcional): código ou texto de apoio, mostrado acima do enunciado.
const tq = (
  subject,
  subtopic,
  statement,
  options,
  correctAnswer,
  explanation,
  area,
  passage,
) => ({
  subject,
  subtopic,
  statement,
  options,
  correctAnswer,
  explanation,
  area,
  passage,
  origem: { tipo: "inedita" },
});
