/* Registro dos concursos da plataforma.

   Cada entrada é autossuficiente: banco de questões, teoria, guia e regras
   de prova. O app.js só conhece esta lista — para incluir um concurso novo,
   crie os arquivos de dados, registre-o aqui e acrescente os <script> no
   index.html antes deste arquivo.

   Campos:
   - id / storagePrefix: o prefixo nomeia as chaves do localStorage
     (`<prefix>_exam_state_v1`, `<prefix>_exam_history_v1`). O da DATAPREV
     continua "dataprev" para não perder o progresso já salvo.
   - formato: "multipla" (A–E, FGV) ou "certo-errado" (Cebraspe: cada item
     errado anula um certo; deixar em branco não pontua nem desconta).
   - notaCorte / notaCorteRotulo: percentual usado para o "aprovado" do
     resultado, e o texto que explica de onde ele vem.
   - simulado: formato do modo Simulado. `{ oficial: true }` usa o banco
     inteiro, na ordem; `{ blocos: [{ rotulo, subjects, n }], duracaoSegundos,
     nota }` sorteia n questões por grupo de disciplinas (subjects null = todas).
   - questions / theory: `area` de cada questão = `id` de uma seção da teoria.
   - guia: markdown da aba Guia do Concurso.
   - focoNota: explica o que o ranking da aba Foco significa para este banco. */
const concursos = [
  {
    id: "dataprev",
    storagePrefix: "dataprev",
    sigla: "DATAPREV",
    titulo: "ATI · Desenvolvimento de Software",
    subtitulo: "Prova FGV de 17/11/2024 · Tipo 4 (Azul) · 70 questões oficiais",
    banca: "FGV",
    formato: "multipla",
    // Tempo oficial do caderno: 4 horas, já incluída a marcação do cartão.
    duracaoSegundos: 4 * 3600,
    // O simulado é o próprio caderno: as 70 questões, na ordem oficial.
    simulado: { oficial: true },
    notaCorte: 50,
    notaCorteRotulo: "referência típica de 50% de acertos — confira o edital",
    trilhaPortugues: true,
    questions: questionsData,
    theory: theoryModules,
    focoNota:
      "Peso de cada área temática no caderno Tipo 4 de 17/11/2024. Como é uma prova única, o ranking mostra quanto cada área ocupou desta prova — é um retrato do recorte da banca, não uma média histórica de várias edições.",
    guia: `
## DATAPREV · ATI Desenvolvimento de Software

Estrutura da prova aplicada em 17/11/2024 pela **FGV**, caderno **Tipo 4 (Azul)**. As 70 questões e o gabarito deste simulado vêm desse caderno, transcritos literalmente.

### 📌 Sobre o concurso
A **DATAPREV** (Empresa de Tecnologia e Informações da Previdência) é a estatal federal que opera os sistemas da previdência social, do CadÚnico, da carteira de trabalho digital e de outras grandes políticas públicas.

### 📋 Estrutura da prova objetiva
| Módulo | Disciplina | Questões | Perfil cobrado |
| --- | --- | --- | --- |
| Básico | Língua Portuguesa | 12 | Concordância, regência, pontuação, funções sintáticas, variação linguística e interpretação |
| Básico | Língua Inglesa | 12 | Inglês instrumental: compreensão, referência, conectivos, modais e vocabulário |
| Básico | Raciocínio Lógico-Matemático | 6 | Equivalência lógica, porcentagem, média ponderada, proporção e combinatória |
| Básico | Atualidades | 5 | Meio ambiente e tecnologia, geopolítica (G20), proteção de dados, justiça ambiental |
| Básico | Legislação de Segurança e LGPD | 5 | LGPD (Lei 13.709/18), Marco Civil (Lei 12.965/14) e LAI (Lei 12.527/11) |
| Específico | Conhecimentos Específicos de TI | 30 | Arquitetura, requisitos, REST, SOLID, microsserviços, DevOps, testes, NoSQL, OLAP/ETL, OWASP e Scrum |
| **Total** | | **70** | **Tempo de prova: 4 horas** |

### 🎯 Critérios de habilitação (referência)
> Os critérios que valem são os do edital vigente — confira-o antes de usar estes números como meta.

- **Aproveitamento mínimo geral**: concursos da FGV costumam exigir cerca de **50% de acertos** na prova objetiva (35 de 70).
- **Mínimo por módulo**: em regra, não zerar disciplina de conhecimentos básicos e atingir o mínimo em específicos.
- **Desempate**: a nota em Conhecimentos Específicos e a de Língua Portuguesa costumam ser os principais critérios.

### 💡 Recomendações
- Use o **Modo Prova Real** para treinar o ritmo (média de 3,4 minutos por questão) com o cronômetro oficial de 4h.
- Depois, use o **Caderno de Erros** e o botão de teoria de cada questão para estudar o que errou.
`,
  },
  tjpbConcurso,
  pfConcurso,
  // Um banco ainda em construção (sem teoria ou sem questões) fica fora do
  // seletor em vez de quebrar a troca de concurso.
].filter((c) => c.theory.length && c.questions.length);
