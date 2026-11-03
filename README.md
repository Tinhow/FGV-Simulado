# Plataforma de Estudos — Simulados de Concurso

Simulados, teoria por assunto, trilha de Português e videoaulas, num app
estático (HTML/CSS/JS puro, sem build). O concurso ativo é escolhido no
seletor do cabeçalho; cada um tem banco de questões, teoria, guia, cronômetro,
histórico e progresso próprios.

| Concurso | Banca | Banco |
| --- | --- | --- |
| **DATAPREV** · ATI Desenvolvimento de Software | FGV | As 70 questões oficiais da prova de 17/11/2024, caderno Tipo 4 (Azul) |
| **TJPB** · Analista Judiciário — TI / Desenvolvimento de Sistemas | FGV | Questões reais da FGV (caderno DATAPREV) que caem no edital + inéditas no estilo FGV para os 4 eixos |
| **PF** · Agente Administrativo | Cebraspe | Itens inéditos no estilo Cebraspe: Certo/Errado (um errado anula um certo) e múltipla escolha |

## Como rodar

```powershell
.\server.ps1
```

Depois abra <http://localhost:8080/>. Abrir o `index.html` direto também
funciona, mas o player do YouTube costuma recusar vídeos fora de `http://`.

## Estrutura

| Arquivo | Conteúdo |
| --- | --- |
| `index.html` | Abas (simulado, teoria, português, desempenho, foco, erros, guia) |
| `css/style.css` | Design system, temas claro/escuro |
| `js/questions.js` | DATAPREV: as 70 questões, textos de apoio e o gabarito oficial |
| `js/theory.js` | DATAPREV: teoria, alinhada às áreas das questões |
| `js/portugues.js` | Trilha de Língua Portuguesa: 4 níveis, 21 lições (vale para todo concurso FGV) |
| `js/tjpb/base.js` | TJPB: contrato dos arquivos de eixo (`tq`, disciplinas) |
| `js/tjpb/eixo*.js` | TJPB: teoria + questões inéditas de cada eixo do edital |
| `js/tjpb/concurso.js` | TJPB: junta inéditas e questões reais FGV num banco só |
| `js/pf/base.js` | PF: contrato dos arquivos de disciplina (`ce`, `me`, disciplinas) |
| `js/pf/*.js` | PF: teoria + itens inéditos por bloco de disciplinas |
| `js/pf/concurso.js` | PF: numeração, ordem das disciplinas e guia |
| `js/concursos.js` | Registro dos concursos (metadados, regras de prova, guia) |
| `js/app.js` | Estado, cronômetro, navegação, correção, estatísticas, videoaulas |
| `tools/validar.js` | Validador de conteúdo (rodar antes de cada commit) |

## Validar o conteúdo

```powershell
node tools/validar.js                               # todos os concursos
node tools/validar.js js/tjpb/eixo2-desenvolvimento.js  # um eixo isolado
```

Confere alternativas, gabarito, se toda `area` tem seção de teoria, e avisa
quando o gabarito está desbalanceado ou quando a correta é sempre a mais longa.

## Procedência das questões

Cada questão mostra um selo:

- **🏛️ FGV · DATAPREV 2024 · Qn** — questão de prova real, transcrita
  literalmente do caderno.
- **✍️ Inédita · estilo FGV / Cebraspe** — escrita para treino. Não é questão
  de prova oficial e não deve ser apresentada como tal.

## Videoaulas

Cada seção de teoria e cada lição da trilha abre com um painel de videoaulas
no estilo das plataformas de concurso: player no topo com a próxima aula não
assistida já carregada, playlist com miniatura, canal e duração, e o botão
**✓ Concluí · próxima aula**.

**Busca automática.** Com uma chave gratuita da YouTube Data API v3 (o painel
mostra o passo a passo), o app busca as aulas do assunto sozinho: em
português, só vídeos incorporáveis, sem shorts (menos de 4 minutos). O
resultado fica em cache por 14 dias por assunto, então a cota gratuita
(50 a 100 assuntos novos por dia) sobra. Em **Mais opções** dá para buscar outro termo.

**Aulas próprias.** Também em Mais opções, colar um link (vídeo, playlist do
YouTube ou `.mp4`/`.webm` direto) põe a aula no topo da playlist do assunto.

| Chave do `localStorage` | Conteúdo |
| --- | --- |
| `simulados_youtube_api_key` | A chave da API (só neste navegador) |
| `simulados_video_busca_v1` | Cache da busca, por assunto |
| `simulados_videos_v1` | Aulas adicionadas por link, por assunto |
| `simulados_videos_vistos_v1` | Aulas assistidas (vale em qualquer assunto) |
| `simulados_videos_ocultos_v1` | Sugestões que o aluno ocultou |

Exportar/Importar leva aulas próprias, vistas e ocultas para outro
computador; a chave e o cache ficam de fora. Use só conteúdo a que você tenha
acesso legítimo.

## Adicionar um concurso

1. Crie os arquivos de dados (questões com `area` = `id` de uma seção de
   teoria).
2. Registre o concurso em `js/concursos.js` — o comentário no topo explica
   cada campo (`formato` aceita `"multipla"` ou `"certo-errado"`, este com a
   regra do Cebraspe: um item errado anula um certo).
3. Inclua os `<script>` no `index.html` antes de `js/concursos.js`.
4. Rode `node tools/validar.js`.

O progresso fica em `localStorage` com o prefixo do concurso
(`<prefixo>_estudo_v2`, `<prefixo>_exam_history_v1`), sempre pela chave
estável da questão (`q.uid`), nunca pelo número exibido — o número muda quando
o banco cresce. O formato antigo (`_exam_state_v1`) é migrado na primeira
carga.

## Treino x Simulado

- **⚡ Treino**: o banco inteiro, com filtros (disciplina, situação, assunto) e
  o gabarito comentado na hora.
- **🎯 Simulado**: uma tentativa separada, montada pelo campo `simulado` do
  concurso. A TJPB sorteia 10 de Português, 10 de RLM e 40 específicas, como
  no edital; a DATAPREV usa o caderno oficial inteiro. O sorteio prefere as
  questões ainda não respondidas e espalha pelos assuntos. O gabarito só
  aparece ao finalizar, quando as respostas entram no progresso geral
  (estatísticas, Caderno de Erros, Foco). Sair da página ou ir para o treino
  pausa o simulado; o cronômetro usa um prazo absoluto.

## Convenções ao editar questões

- DATAPREV: `q(id, subject, subtopic, statement, options, correctAnswer, explanation, area, passage)`.
  Enunciados literais do caderno — não resuma nem corrija a redação da banca.
- TJPB: `tq(subject, subtopic, statement, options, correctAnswer, explanation, area, passage)`,
  sem id (a numeração é feita na montagem). Os arquivos de eixo não declaram
  nada no topo: todos os scripts dividem o escopo global.
- PF: `ce(subject, subtopic, statement, certo, explanation, area, passage)` para
  item Certo/Errado (`certo` booleano) e `me(...)` para múltipla escolha.
  O formato é por questão (`formato`), então um banco pode misturar os dois;
  só os itens C/E descontam na nota líquida.
- `correctAnswer` é índice (0 = A … 4 = E; nos itens C/E, 0 = Certo, 1 = Errado).
- `**trecho**` no enunciado, nas alternativas ou no texto de apoio vira o
  destaque que a FGV usa para marcar o "elemento destacado".

## Distribuição da prova DATAPREV

| Disciplina | Questões |
| --- | --- |
| Língua Portuguesa | 1–12 |
| Língua Inglesa | 13–24 |
| Raciocínio Lógico-Matemático | 25–30 |
| Atualidades | 31–35 |
| Legislação de Segurança da Informação e Proteção de Dados | 36–40 |
| Conhecimentos Específicos | 41–70 |

Tempo oficial: **4 horas**, já incluída a marcação do cartão de respostas.

## Trilha de Português

Currículo progressivo em `js/portugues.js`, do zero ao nível de prova:

| Nível | Tema | Lições |
| --- | --- | --- |
| 1 | Fundamentos — anatomia da frase | 5 |
| 2 | O período composto | 5 |
| 3 | Norma culta (concordância, regência, crase, pontuação) | 6 |
| 4 | Texto e sentido — o estilo FGV | 5 |

Cada lição liga às questões reais da FGV que cobram aquele conteúdo; no
concurso TJPB, o botão abre a mesma questão dentro do banco da TJPB. O
progresso fica em `localStorage`, na chave `dataprev_pt_progress_v1`.
