/* Valida o conteúdo dos simulados sem abrir o navegador.

   Uso:
     node tools/validar.js
       Carrega os scripts na ordem do index.html e confere todos os concursos
       registrados (estrutura das questões, gabarito, ids de área x teoria).

     node tools/validar.js js/tjpb/eixo1-engenharia.js [outros arquivos de eixo]
       Carrega só o base.js da mesma pasta + os arquivos indicados e confere
       esse pedaço isolado — útil enquanto um eixo está sendo escrito.

   Sai com código 1 se encontrar erro. Avisos (distribuição do gabarito,
   alternativa correta sempre a mais longa) não reprovam. */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const errors = [];
const warnings = [];

function run(file) {
  try {
    const code = fs.readFileSync(path.join(root, file), "utf8");
    vm.runInThisContext(code, { filename: file });
  } catch (e) {
    errors.push(`${file}: não executou — ${e.message}`);
  }
}

function scriptsFromIndex() {
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  return [...html.matchAll(/<script\s+src="([^"]+)"/g)]
    .map((m) => m[1])
    .filter((src) => !src.endsWith("app.js"));
}

function checkTheory(label, modules) {
  const ids = new Set();
  for (const mod of modules) {
    if (!mod.id || !mod.title || !Array.isArray(mod.sections)) {
      errors.push(`${label}: módulo de teoria sem id/title/sections (${mod.id})`);
      continue;
    }
    for (const sec of mod.sections) {
      if (ids.has(sec.id)) errors.push(`${label}: seção de teoria duplicada "${sec.id}"`);
      ids.add(sec.id);
      if (!sec.title || !sec.content || sec.content.trim().length < 200) {
        errors.push(`${label}: seção "${sec.id}" sem título ou com conteúdo curto demais`);
      }
      // O parser escapa HTML; uma tag crua aqui apareceria como texto.
      if (/<\/?(div|span|br|p|b|strong|table)\b/i.test(sec.content)) {
        warnings.push(`${label}: seção "${sec.id}" tem tag HTML — use markdown`);
      }
    }
  }
  return ids;
}

// O formato é da questão (`q.formato`), com o do concurso como padrão. Cada
// formato é conferido e resumido à parte: o balanceamento esperado é outro.
function checkQuestions(label, questions, areaIds, defaultFormat) {
  const groups = {};
  questions.forEach((q) => (groups[q.formato || defaultFormat] ??= []).push(q));
  const mixed = Object.keys(groups).length > 1;
  for (const [format, group] of Object.entries(groups)) {
    checkGroup(mixed ? `${label} [${format}]` : label, group, areaIds, format);
  }
  const keys = questions.map((q) => q.statement.trim().slice(0, 160));
  questions.forEach((q, i) => {
    if (!q.passage && keys.indexOf(keys[i]) !== i) {
      errors.push(`${label} · questão ${q.id ?? `#${i + 1}`}: enunciado repetido`);
    }
  });
}

function checkGroup(label, questions, areaIds, format) {
  const nOptions = format === "certo-errado" ? 2 : 5;
  const dist = new Array(nOptions).fill(0);
  let longestIsCorrect = 0;

  questions.forEach((q, i) => {
    const where = `${label} · questão ${q.id ?? `#${i + 1}`} (${q.subtopic || "?"})`;
    for (const field of ["subject", "subtopic", "statement", "explanation", "area"]) {
      if (typeof q[field] !== "string" || !q[field].trim()) {
        errors.push(`${where}: campo "${field}" vazio`);
      }
    }
    if (!Array.isArray(q.options) || q.options.length !== nOptions) {
      errors.push(`${where}: precisa de ${nOptions} alternativas, tem ${q.options?.length}`);
      return;
    }
    if (q.options.some((o) => typeof o !== "string" || !o.trim())) {
      errors.push(`${where}: alternativa vazia`);
    }
    if (format !== "certo-errado" && q.options.some((o) => /^\s*\(?[A-E][).]\s/.test(o))) {
      errors.push(`${where}: alternativa começa com a letra — o app já numera`);
    }
    if (!Number.isInteger(q.correctAnswer) || q.correctAnswer < 0 || q.correctAnswer >= nOptions) {
      errors.push(`${where}: correctAnswer inválido (${q.correctAnswer})`);
    } else {
      dist[q.correctAnswer]++;
      if (format !== "certo-errado") {
        const lens = q.options.map((o) => o.length);
        const max = Math.max(...lens);
        if (lens[q.correctAnswer] === max && lens.filter((l) => l === max).length === 1) {
          longestIsCorrect++;
        }
      }
    }
    if (format === "certo-errado" && (q.options[0] !== "Certo" || q.options[1] !== "Errado")) {
      errors.push(`${where}: item Certo/Errado precisa das opções ["Certo", "Errado"]`);
    }
    if (areaIds && !areaIds.has(q.area)) {
      errors.push(`${where}: área "${q.area}" não existe na teoria`);
    }
  });

  const letters = format === "certo-errado" ? ["C", "E"] : ["A", "B", "C", "D", "E"];
  const summary = dist.map((n, i) => `${letters[i]}=${n}`).join(" ");
  console.log(`  ${label}: ${questions.length} questões · gabarito ${summary}`);

  if (questions.length >= 10) {
    const expected = questions.length / nOptions;
    dist.forEach((n, i) => {
      if (n > expected * 1.8 || n < expected * 0.35) {
        warnings.push(`${label}: gabarito desbalanceado na letra ${letters[i]} (${n} de ${questions.length})`);
      }
    });
    if (format !== "certo-errado" && longestIsCorrect / questions.length > 0.45) {
      warnings.push(
        `${label}: a correta é a alternativa mais longa em ${longestIsCorrect} de ${questions.length} — vício que o candidato aprende a explorar`,
      );
    }
  }
}

const args = process.argv.slice(2);

if (args.length) {
  // A pasta do primeiro arquivo nomeia o concurso: js/<pasta>/base.js declara
  // `<pasta>Modulos` e `<pasta>Questoes` (ex.: tjpbModulos, pfQuestoes).
  const folder = path.basename(path.dirname(path.resolve(root, args[0])));
  run(`js/${folder}/base.js`);
  args.forEach(run);
  console.log("Arquivos de eixo:");
  // `const` de script não vira propriedade de globalThis; eval enxerga o escopo.
  const areaIds = checkTheory("teoria", eval(`${folder}Modulos`));
  console.log(`  teoria: ${areaIds.size} seções`);
  checkQuestions("inéditas", eval(`${folder}Questoes`), areaIds, "multipla");
} else {
  scriptsFromIndex().forEach(run);
  const registry = eval("typeof concursos !== 'undefined' ? concursos : null");
  if (!registry) {
    errors.push("registro `concursos` não encontrado (js/concursos.js)");
  } else {
    console.log("Concursos registrados:");
    for (const c of registry) {
      const areaIds = checkTheory(`${c.id}/teoria`, c.theory);
      const ids = c.questions.map((q) => q.id);
      if (new Set(ids).size !== ids.length) errors.push(`${c.id}: ids de questão repetidos`);
      checkQuestions(c.id, c.questions, areaIds, c.formato);
    }
  }
}

warnings.forEach((w) => console.log(`AVISO  ${w}`));
errors.forEach((e) => console.log(`ERRO   ${e}`));
console.log(errors.length ? `\n${errors.length} erro(s).` : "\nOK.");
process.exit(errors.length ? 1 : 0);
