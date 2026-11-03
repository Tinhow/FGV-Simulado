/* TJPB 2026/2027 · Eixo 1 — Engenharia de Software & Práticas Ágeis.
   Teoria + questões INÉDITAS no estilo FGV (não são de prova oficial).

   Cuidados com o parser de markdown de js/app.js (que não escapa HTML e
   processa marcação até dentro dos blocos de código):
   - nada de "<" em código ou texto (genéricos Java, placeholders);
   - nada de asterisco solto (multiplicidade UML usa "∗", U+2217);
   - blocos de código sem linha em branco, sem linha iniciada por "- " ou
     "> " e sem pipes (tabelas Gherkin ficam só no `passage` das questões). */
{
  tjpbModulos.push({
    id: "tj-eng",
    title: "Engenharia de Software & Práticas Ágeis",
    icon: "🛠️",
    description:
      "Ciclo de vida e métricas, requisitos, UML, Scrum/Kanban/XP, DevOps e CI/CD e testes (TDD e BDD) — o eixo que a FGV mais explora em cenários de tribunal.",
    sections: [
      // ------------------------------------------------------------------
      {
        id: "tj-processos",
        title: "Ciclo de vida e modelos de processo",
        content: `
### O que a FGV cobra aqui
A banca descreve um cenário (requisitos instáveis, contrato de escopo fechado, projeto de alto risco) e pede o modelo de processo mais adequado, ou cobra as **fases do RUP** e seus marcos. Em métricas, o foco é a **Análise de Pontos de Função** (tipos de função e como classificá-los) e a diferença entre ponto de função, que é medida padronizada de tamanho, e ponto de história, que é estimativa relativa do time.

#### 1. Ciclo de vida: as mesmas atividades, encadeadas de jeitos diferentes
Todo processo de software envolve **especificação**, **projeto e implementação**, **validação** e **evolução** (Sommerville). Os modelos diferem em *como* essas atividades se encadeiam: em sequência, intercaladas ou em ciclos.

#### 2. Modelos clássicos
| Modelo | Ideia central | Quando é adequado | Ponto fraco |
| --- | --- | --- | --- |
| **Cascata** | Fases sequenciais; cada uma termina com um documento aprovado | Requisitos estáveis e bem entendidos, escopo fechado, forte regulação | Mudança tardia é cara; o cliente só vê software no fim |
| **Modelo em V** | Cascata em que cada fase de especificação tem um nível de teste correspondente | Sistemas críticos que exigem rastrear testes até a especificação | Mesma rigidez da cascata |
| **Incremental** | Sistema entregue em partes; cada incremento acrescenta funcionalidade utilizável | Entregar valor cedo; requisitos que mudam | Estrutura degrada sem refatoração; progresso difícil de medir por documentos |
| **Espiral (Boehm)** | Ciclos **orientados a riscos**; cada volta passa por objetivos, análise de riscos, desenvolvimento e teste, planejamento da próxima volta | Projetos grandes, caros e de alto risco | Exige experiência em análise de riscos; pesado para projetos pequenos |
| **Prototipação** | Versão rápida para elicitar e validar requisitos ou testar uma solução | Requisitos vagos, interfaces com o usuário | Protótipo descartável acabar virando produto |
| **RUP / UP** | Iterativo e incremental, guiado por casos de uso e centrado na arquitetura | Projetos médios e grandes, com documentação moderada | Pesado se não for adaptado (tailoring) |

No modelo em V, os pares são: requisitos com **teste de aceitação**, projeto de sistema com **teste de sistema**, projeto de arquitetura com **teste de integração** e projeto detalhado com **teste de unidade**.

> **⚠️ Pegadinha:** espiral **não** é "cascata repetida". O que a define é a **análise de riscos explícita** em cada volta; protótipos são usados justamente nessa etapa para reduzir incertezas.

> **⚠️ Pegadinha:** iterativo e incremental não são sinônimos. **Iterativo** = revisitar e refinar o mesmo produto em ciclos; **incremental** = acrescentar partes novas. RUP e Scrum são as duas coisas.

**Protótipo descartável** serve só para aprender (requisitos, viabilidade) e é jogado fora; **protótipo evolutivo** é refinado até virar o sistema.

#### 3. RUP / Processo Unificado
Três ideias-chave: **dirigido por casos de uso**, **centrado na arquitetura**, **iterativo e incremental** (e orientado a riscos). O ciclo tem **4 fases**, cada uma com várias iterações e um marco no fim.

| Fase | Foco | Marco ao final |
| --- | --- | --- |
| **Concepção** (Iniciação) | Escopo, caso de negócio, riscos críticos, viabilidade | Objetivos do Ciclo de Vida (LCO) |
| **Elaboração** | Maior parte dos requisitos, **arquitetura executável (linha de base)**, mitigação dos riscos técnicos | Arquitetura do Ciclo de Vida (LCA) |
| **Construção** | Construir a maior parte das funcionalidades; versão beta | Capacidade Operacional Inicial (IOC) |
| **Transição** | Entregar à comunidade de usuários: testes beta, treinamento, migração, ajustes | Release do Produto (PR) |

As **disciplinas** atravessam todas as fases com intensidade variável (o famoso gráfico de "baleias"). São 6 de engenharia (modelagem de negócio, requisitos, análise e projeto, implementação, teste, implantação) e 3 de suporte (gerência de configuração e mudança, gerência de projeto, ambiente).

> **⚠️ Pegadinha:** fase não é disciplina. "Teste" e "Requisitos" **não são fases** do RUP; são disciplinas que ocorrem em todas as fases. A arquitetura estável é marca da **Elaboração**, não da Construção.

#### 4. Análise de Pontos de Função (APF)
Método do IFPUG (ISO/IEC 20926) que mede o **tamanho funcional** do software sob a ótica do usuário, **independentemente** de linguagem, tecnologia ou equipe. É muito usado em contratos públicos (o SISP tem roteiro de métricas próprio).

| Grupo | Tipo | O que é |
| --- | --- | --- |
| Dados | **ALI** — Arquivo Lógico Interno | Grupo lógico de dados **mantido** dentro da fronteira da aplicação |
| Dados | **AIE** — Arquivo de Interface Externa | Grupo lógico apenas **referenciado**; mantido por outra aplicação |
| Transação | **EE** — Entrada Externa | Processa dados vindos de fora; em geral mantém ALI ou altera o comportamento do sistema |
| Transação | **SE** — Saída Externa | Envia dados para fora com **lógica**: cálculo, dado derivado, atualização de ALI ou mudança de comportamento |
| Transação | **CE** — Consulta Externa | Envia dados para fora por **recuperação pura**, sem cálculo nem dado derivado |

A complexidade (baixa, média, alta) de cada função vem da quantidade de **tipos de dados** e de **registros lógicos / arquivos referenciados**. O resultado é o tamanho em **PF não ajustados**; o antigo fator de ajuste (14 características gerais do sistema) tornou-se opcional no IFPUG e não integra a norma ISO.

> **⚠️ Pegadinha:** relatório que exibe um total calculado na hora é **SE**, não CE. Basta haver dado derivado para deixar de ser consulta pura.

> **⚠️ Pegadinha:** APF mede **tamanho**, não esforço, prazo nem qualidade. Esforço = tamanho vezes taxa de produtividade (horas por PF) da organização.

#### 5. Pontos de história e velocidade
**Pontos de história** estimam de forma **relativa** o esforço, a complexidade e a incerteza de um item, em geral com Planning Poker e uma escala tipo Fibonacci. **Velocidade** é a soma dos pontos dos itens concluídos (que atendem à Definição de Pronto) por Sprint e serve para o **próprio time** prever entregas.

| | **Pontos de função** | **Pontos de história** |
| --- | --- | --- |
| Natureza | Medida padronizada (norma ISO) | Estimativa relativa, própria do time |
| Comparável entre times/órgãos | Sim | **Não** |
| Uso típico | Contratos, produtividade, benchmarking | Planejamento e previsão de Sprints |
| Faz parte do Scrum Guide? | Não | **Não** (é prática complementar) |

#### Revisão relâmpago
- Espiral = **risco** em cada volta; cascata = requisitos estáveis; prototipação = requisitos vagos.
- Iterativo refina; incremental acrescenta.
- RUP: Concepção, **Elaboração (arquitetura)**, Construção, Transição; teste e requisitos são disciplinas.
- APF: ALI mantido, AIE referenciado; EE entra, SE sai **com** cálculo, CE sai **sem** cálculo.
- APF mede tamanho funcional, independente de tecnologia; esforço vem depois.
- Pontos de história não comparam times; velocidade é ferramenta de previsão do próprio time.
`,
      },
      // ------------------------------------------------------------------
      {
        id: "tj-requisitos",
        title: "Engenharia de requisitos",
        content: `
### O que a FGV cobra aqui
Classificar requisitos de um sistema real (funcional x não funcional e seus subtipos), distinguir **validação** de **verificação**, escolher a técnica de elicitação adequada ao cenário e avaliar histórias de usuário pelo **INVEST**. O enunciado típico lista quatro ou cinco requisitos de um sistema do tribunal e pede a classificação correta.

#### 1. Funcionais x não funcionais
| | **Funcional** | **Não funcional** |
| --- | --- | --- |
| Descreve | O que o sistema **faz**: serviços, reações a entradas, comportamento | **Como** ou **sob quais restrições**: qualidade, desempenho, segurança, normas |
| Exemplo | "Emitir certidão de distribuição" | "Responder à consulta em até 2 s para 95% das requisições" |
| Alcance | Em geral, uma funcionalidade | Frequentemente o sistema inteiro |
| Se falhar | Falta uma funcionalidade | Pode inutilizar o sistema todo |

Classificação de Sommerville para os não funcionais:
- **De produto**: eficiência (desempenho, espaço), confiança (disponibilidade, confiabilidade), segurança da informação, usabilidade.
- **Organizacionais**: ambientais, operacionais, de desenvolvimento (linguagem, processo, padrões internos).
- **Externos**: regulatórios, legais (LGPD, normas do CNJ), éticos.

Há ainda os **requisitos de domínio**, que vêm da área de aplicação (por exemplo, a contagem de prazos processuais em dias úteis), e a distinção entre **requisitos de usuário** (linguagem natural, alto nível) e **requisitos de sistema** (detalhados, base para o projeto).

> **⚠️ Pegadinha:** um requisito não funcional pode **gerar** requisitos funcionais. "O sistema deve proteger dados sigilosos" (não funcional) leva a "o sistema deve exigir autenticação com certificado digital" (funcional).

> **⚠️ Pegadinha:** "o sistema deve ser fácil de usar" é não funcional, mas **não verificável**. Para ser testável, precisa de métrica: tempo de treinamento, número de erros por hora, tempo de resposta, disponibilidade em percentual.

#### 2. O processo de engenharia de requisitos
Elicitação e análise, especificação e validação, em ciclos; o **gerenciamento de requisitos** (mudanças e rastreabilidade) acompanha tudo.

| Técnica de elicitação | Melhor para | Cuidado |
| --- | --- | --- |
| **Entrevista** (fechada ou aberta) | Entender visões individuais | Stakeholder omite o que considera óbvio |
| **Workshop / JAD** | Consenso entre vários stakeholders | Exige facilitação; dominância de alguns |
| **Observação / etnografia** | Descobrir como o trabalho **realmente** é feito (conhecimento tácito) | Demorada; foca o presente, não inovações |
| **Questionário** | Muitos respondentes dispersos | Pouca profundidade |
| **Prototipação** | Requisitos de interface; usuário que não sabe se expressar | Cliente confundir protótipo com produto pronto |
| **Análise de documentos** | Normas, legislação, sistemas legados | Documento desatualizado |
| **Brainstorming** | Gerar ideias e alternativas | Não prioriza nem valida |

#### 3. Validação x verificação
| | **Validação** | **Verificação** |
| --- | --- | --- |
| Pergunta (Boehm) | "Estamos construindo o **produto certo**?" | "Estamos construindo o **produto corretamente**?" |
| Compara com | Necessidades reais do usuário | Especificação / artefato anterior |
| Exemplos | Prototipação, revisão com usuários, testes de aceitação | Inspeções, revisões técnicas, análise estática, testes contra a especificação |

Na **validação de requisitos**, verifica-se validade, consistência, completude, realismo e **verificabilidade** de cada requisito; as técnicas usuais são revisões, prototipação e geração de casos de teste a partir dos requisitos.

> **⚠️ Pegadinha:** a FGV adora inverter as perguntas. Produto **certo** = validação (usuário); produto **corretamente** = verificação (especificação).

#### 4. Rastreabilidade
- **Para trás** (backward): do requisito até sua **origem** (stakeholder, lei, ata, regra de negócio).
- **Para frente** (forward): do requisito até os **artefatos derivados** (projeto, código, casos de teste).
- **Bidirecional**: as duas, normalmente registradas em uma **matriz de rastreabilidade**.

Serve para **análise de impacto** (o que muda se este requisito mudar?) e para provar cobertura (todo requisito tem teste?).

#### 5. Histórias de usuário e critérios de aceitação
Formato: "Como [papel], quero [objetivo], para [benefício]". A história é um **lembrete para uma conversa**, não uma especificação completa. Os **3 Cs** (Ron Jeffries): **Cartão**, **Conversa**, **Confirmação** (os critérios de aceitação).

| Letra | INVEST | Significado |
| --- | --- | --- |
| I | Independente | Pode ser priorizada e entregue sem depender de outra |
| N | **Negociável** | Os detalhes são combinados na conversa; não é contrato fechado |
| V | Valiosa | Entrega valor ao usuário ou ao negócio |
| E | Estimável | O time consegue estimá-la |
| S | Pequena (Small) | Cabe em uma Sprint |
| T | Testável | Há critérios objetivos para dizer se está pronta |

Critérios de aceitação são definidos **antes** da implementação, pelo Product Owner com o time, e podem ser escritos em Dado/Quando/Então, o que os liga diretamente ao BDD. História grande demais é um **épico** e deve ser fatiada.

> **⚠️ Pegadinha:** critério de aceitação **não** é Definição de Pronto. O critério é **específico** de uma história; a Definição de Pronto vale para **todo** o Incremento (código revisado, testes automatizados passando, documentação etc.).

#### Revisão relâmpago
- Funcional = o que faz; não funcional = como/restrições (produto, organizacional, externo).
- Requisito não funcional precisa de métrica para ser verificável.
- Validação = produto certo (usuário); verificação = produto corretamente (especificação).
- Rastreabilidade para trás = origem; para frente = projeto, código e testes.
- Observação/etnografia revela trabalho tácito; JAD busca consenso; protótipo ajuda em interface.
- INVEST: o "N" é **negociável**; o "T" exige critérios de aceitação objetivos.
- Critério de aceitação é por história; Definição de Pronto é para todo o Incremento.
`,
      },
      // ------------------------------------------------------------------
      {
        id: "tj-uml",
        title: "Modelagem UML",
        content: `
### O que a FGV cobra aqui
Três frentes: saber **classificar** os diagramas (estruturais x comportamentais, e quais são de interação), acertar a **semântica e a direção** de «include» e «extend» nos casos de uso, e distinguir **agregação, composição e herança** no diagrama de classes. Sequência, atividades e estados aparecem em questões de leitura de notação.

#### 1. Os 14 diagramas da UML 2.5
| Estruturais (7) | Comportamentais (7) |
| --- | --- |
| Classes | Casos de uso |
| Objetos | Atividades |
| Componentes | Máquina de estados |
| Implantação | Sequência (interação) |
| Pacotes | Comunicação (interação) |
| Estrutura composta | Visão geral de interação (interação) |
| Perfil | Tempo (interação) |

> **⚠️ Pegadinha:** os quatro **diagramas de interação** são um subconjunto dos comportamentais. O diagrama de **comunicação** é o antigo "colaboração" da UML 1.x. O diagrama de **objetos** é estrutural: um retrato das instâncias em um instante.

#### 2. Casos de uso
**Ator** é um papel externo (pessoa, outro sistema, dispositivo); **caso de uso** é um objetivo que entrega valor ao ator; a **fronteira** delimita o sistema.

| Relacionamento | Semântica | Direção da seta (tracejada) | Exemplo no tribunal |
| --- | --- | --- | --- |
| **«include»** | Obrigatório: o comportamento incluído **sempre** ocorre; favorece reuso | Do caso **base** para o **incluído** | Protocolar petição → Autenticar usuário |
| **«extend»** | **Opcional/condicional**, inserido em um ponto de extensão do base | Do caso **extensor** para o **base** | Pedir tutela de urgência → Protocolar petição |
| **Generalização** | Especialização de ator ou de caso de uso; o filho herda do pai | Do filho para o pai (linha sólida, triângulo vazio) | Advogado → Usuário externo |

> **⚠️ Pegadinha:** as setas apontam em sentidos "opostos". No «include» o base **conhece e depende** do incluído; no «extend» o base **não sabe** que é estendido, e quem aponta é o extensor.

> **⚠️ Pegadinha:** diagrama de casos de uso **não** mostra ordem de execução nem sequência de telas. Isso fica na especificação textual (fluxo principal, fluxos alternativos e de exceção, pré e pós-condições) ou em diagramas de atividades/sequência.

#### 3. Diagrama de classes
Visibilidade: \`+\` público, \`-\` privado, \`#\` protegido, \`~\` pacote. Multiplicidade: \`1\`, \`0..1\`, \`1..∗\`, \`0..∗\` (o asterisco significa "muitos").

| Relação | Notação | Semântica |
| --- | --- | --- |
| **Associação** | Linha sólida (com nome e multiplicidades) | Vínculo estrutural entre classes |
| **Agregação** | Losango **vazio** no lado do **todo** | Todo-parte fraco: a parte **existe sem o todo** e pode ser compartilhada |
| **Composição** | Losango **preenchido** no lado do **todo** | Todo-parte forte: a parte pertence a **um único todo** e é destruída com ele |
| **Generalização** | Linha sólida, triângulo vazio na superclasse | Relação "é um" (herança) |
| **Realização** | Linha **tracejada**, triângulo vazio na interface | A classe implementa a interface |
| **Dependência** | Linha tracejada, seta aberta | Uso temporário (parâmetro, variável local) |

\`\`\`
// Composição: o Processo cria e controla a Capa; sem Processo, não há Capa
class Processo {
    private final Capa capa = new Capa();
}
// Agregação: o Magistrado existe por conta própria e só é vinculado à Vara
class Vara {
    private Magistrado titular;
    void designar(Magistrado m) { this.titular = m; }
}
\`\`\`

> **⚠️ Pegadinha:** o losango fica sempre no lado do **todo**, nunca no da parte. Na composição, a multiplicidade do lado do todo é no máximo 1.

#### 4. Diagrama de sequência
Mostra a **ordem temporal** das mensagens entre objetos (linhas de vida, com barras de ativação).

| Elemento | Notação / significado |
| --- | --- |
| Mensagem síncrona | Seta com ponta **cheia**; o emissor aguarda |
| Mensagem assíncrona | Seta com ponta **aberta**; o emissor segue |
| Retorno | Seta **tracejada** |
| Destruição | X no fim da linha de vida |
| Fragmento **alt** | Alternativas com guardas (if/else) |
| Fragmento **opt** | Executa só se a guarda for verdadeira (if sem else) |
| Fragmento **loop** / **par** / **ref** | Repetição / paralelismo / referência a outra interação |

#### 5. Diagrama de atividades
Modela **fluxos de trabalho** e processos de negócio: nó inicial (círculo cheio), **final de atividade** (encerra tudo) x **final de fluxo** (encerra só aquele caminho), **decisão/junção** (losango), **fork/join** (barra grossa, para paralelismo) e **partições** (raias) indicando o responsável.

> **⚠️ Pegadinha:** losango é escolha (um caminho); barra de fork é **paralelismo** (todos os caminhos). O join espera todos os fluxos chegarem.

#### 6. Máquina de estados
Mostra os **estados** de um objeto ao longo da vida e as **transições** no formato \`evento [guarda] / ação\`. Um estado pode ter ações \`entry\`, \`do\` e \`exit\`, e estados compostos agrupam subestados. Exemplo: o Processo passa de "Concluso" para "Arquivado" no evento \`arquivar [trânsito em julgado] / registrarBaixa()\`.

| Diagrama | Pergunta que responde |
| --- | --- |
| Atividades | Qual é o fluxo de passos de um processo? |
| Máquina de estados | Como **um objeto** reage a eventos ao longo da vida? |
| Sequência | Em que **ordem** os objetos trocam mensagens em um cenário? |

#### Revisão relâmpago
- UML 2.5: 7 estruturais + 7 comportamentais; 4 comportamentais são de interação.
- «include» = obrigatório, seta do base para o incluído; «extend» = opcional, seta do extensor para o base.
- Agregação: losango vazio, parte independente; composição: losango cheio, parte morre com o todo.
- Losango sempre no lado do todo; herança = linha sólida + triângulo; realização = tracejada + triângulo.
- Sequência: alt = if/else, opt = if; síncrona = ponta cheia; retorno = tracejada.
- Atividades: losango decide, barra paraleliza; estados: \`evento [guarda] / ação\`.
`,
      },
      // ------------------------------------------------------------------
      {
        id: "tj-agil",
        title: "Scrum, Kanban e XP",
        content: `
### O que a FGV cobra aqui
É o assunto mais cobrado do eixo. A FGV testa a **literalidade do Guia do Scrum 2020**: nomes (responsabilidades, não "papéis"; Developers, não "Time de Desenvolvimento"), **timeboxes**, quem faz o quê e o **compromisso** de cada artefato. Em Kanban, cai a diferença entre **lead time e cycle time**, o papel do **limite de WIP** e cálculos simples com a **Lei de Little**. Em XP, a associação de práticas e valores.

#### 1. Fundamentos do Scrum
Scrum é um **framework leve**, baseado em **empirismo** e **pensamento enxuto (lean)**. Pilares: **transparência, inspeção e adaptação**. Valores: **compromisso, foco, abertura, respeito e coragem**.

#### 2. Scrum Team: três responsabilidades (accountabilities)
Um único time, **sem sub-times nem hierarquia**, multifuncional e **autogerenciado**, tipicamente com **10 pessoas ou menos**.

| Responsabilidade | É responsável por |
| --- | --- |
| **Product Owner** (uma pessoa, não um comitê) | Maximizar o valor do produto; **gerenciar o Product Backlog**: desenvolver e comunicar a Meta do Produto, criar e ordenar itens. Pode delegar o trabalho, mas continua responsável |
| **Scrum Master** | Estabelecer o Scrum e a **eficácia** do time; é um líder que serve ao time, ao PO e à organização; remove impedimentos |
| **Developers** | Criar o plano da Sprint (**Sprint Backlog**), garantir qualidade aderindo à **Definição de Pronto**, adaptar o plano diariamente, responsabilizar-se mutuamente |

> **⚠️ Pegadinha:** o Guia 2020 **não** fala em "Time de Desenvolvimento" nem em "papéis": são três **responsabilidades** dentro de um único Scrum Team, e o termo é **Developers**. Também trocou "auto-organizado" por **autogerenciado**.

#### 3. Eventos e timeboxes
A **Sprint** é o contêiner de todos os eventos: duração fixa de **um mês ou menos**; a próxima começa logo após o fim da anterior.

| Evento | Timebox (Sprint de 1 mês) | Propósito |
| --- | --- | --- |
| **Sprint** | Até 1 mês | Transformar ideias em valor; contém os demais eventos |
| **Sprint Planning** | Máximo **8 horas** | Por que a Sprint é valiosa (**Meta da Sprint**), o que pode ser feito, como será feito |
| **Daily Scrum** | **15 minutos**, qualquer que seja a Sprint | Developers inspecionam o progresso rumo à Meta da Sprint e adaptam o Sprint Backlog |
| **Sprint Review** | Máximo **4 horas** | Inspecionar o resultado com stakeholders e adaptar o Product Backlog |
| **Sprint Retrospective** | Máximo **3 horas** | Planejar formas de aumentar qualidade e eficácia; encerra a Sprint |

Para Sprints mais curtas, os eventos costumam ser mais curtos (exceto a Daily, sempre 15 min).

Regras da Sprint: nenhuma mudança que coloque em risco a Meta da Sprint; a qualidade não diminui; o Product Backlog é refinado conforme necessário; o escopo pode ser **esclarecido e renegociado com o PO**. **Só o Product Owner pode cancelar** a Sprint, quando a Meta da Sprint se torna obsoleta.

> **⚠️ Pegadinha:** **refinamento** do Product Backlog é uma **atividade contínua**, não um evento, e o Guia 2020 não fixa percentual de capacidade para ele. A Sprint **não é estendida**: o timebox é fixo.

> **⚠️ Pegadinha:** a Daily é **dos Developers**; o PO e o SM só participam como Developers se estiverem trabalhando em itens do Sprint Backlog. Não é reunião de status para o gerente.

> **⚠️ Pegadinha:** a Sprint Review **não é um portão de liberação**. Um Incremento pode ser entregue aos stakeholders **antes** do fim da Sprint, e vários Incrementos podem ser criados em uma mesma Sprint.

#### 4. Artefatos e compromissos
Cada artefato tem um **compromisso** que reforça a transparência e o foco.

| Artefato | Compromisso | O que é |
| --- | --- | --- |
| **Product Backlog** | **Meta do Produto** | Lista emergente e ordenada do que é necessário para melhorar o produto; a Meta do Produto é o objetivo de longo prazo |
| **Sprint Backlog** | **Meta da Sprint** | Meta da Sprint (por quê) + itens selecionados (o quê) + plano de ação (como); pertence aos Developers |
| **Incremento** | **Definição de Pronto** | Passo concreto rumo à Meta do Produto; deve ser utilizável |

Se um item **não atende à Definição de Pronto**, não pode ser liberado nem apresentado na Sprint Review: **volta ao Product Backlog** para consideração futura. A Definição de Pronto vem do padrão da organização ou, se não houver, é criada pelo Scrum Team; vários times no mesmo produto compartilham **uma** Meta do Produto, **um** Product Backlog e a **mesma** Definição de Pronto.

#### 5. Kanban
Método de fluxo **puxado** (pull): um item só entra em uma coluna quando há capacidade. Práticas do Método Kanban: **visualizar** o fluxo, **limitar o WIP**, **gerenciar o fluxo**, tornar **políticas explícitas**, implementar **ciclos de feedback** e **melhorar colaborativamente**. Não prescreve iterações, papéis obrigatórios nem estimativas.

| Métrica | Definição usual em prova |
| --- | --- |
| **Lead time** | Do **pedido** (entrada do item no sistema) até a **entrega** ao cliente; é o que o cliente sente |
| **Cycle time** | Do **início do trabalho** até a conclusão; é parte do lead time |
| **Throughput (vazão)** | **Quantidade** de itens concluídos por unidade de tempo |
| **WIP** | Itens iniciados e ainda não concluídos |
| **CFD** | Diagrama de fluxo cumulativo: mostra WIP, gargalos e tendências |

**Lei de Little** (sistema estável): **tempo médio de ciclo = WIP médio ÷ throughput médio**. Com 12 itens em andamento e vazão de 4 itens/semana, cada item leva, em média, 3 semanas. Logo, **reduzir o WIP reduz o tempo de ciclo**.

> **⚠️ Pegadinha:** limite de WIP existe para **expor** o gargalo. Diante de um gargalo, a reação certa é a equipe ajudar a desafogar a etapa (swarming), e não aumentar o limite das colunas anteriores.

> **⚠️ Pegadinha:** lead time ≥ cycle time para o mesmo item. Throughput é **quantidade por tempo**, não tempo por item.

#### 6. Extreme Programming (XP)
Valores: **comunicação, simplicidade, feedback, coragem e respeito**.

| Prática XP | Em uma frase |
| --- | --- |
| Programação em par | Dois desenvolvedores, um computador; revisão contínua |
| TDD | Teste automatizado antes do código |
| Integração contínua | Integrar e testar várias vezes ao dia |
| Refatoração | Melhorar a estrutura sem alterar o comportamento |
| Design simples | O mais simples que funcione hoje (YAGNI) |
| Pequenos releases | Entregas curtas e frequentes |
| Propriedade coletiva | Qualquer um pode alterar qualquer parte do código |
| Ritmo sustentável | Sem horas extras crônicas (a antiga "semana de 40 horas") |
| Cliente presente | Usuário disponível para tirar dúvidas e definir testes de aceitação |
| Jogo do planejamento | Cliente prioriza histórias; time estima |

#### Revisão relâmpago
- Scrum Guide 2020: PO, Scrum Master e **Developers** (responsabilidades), time autogerenciado de até ~10 pessoas.
- Timeboxes (Sprint de 1 mês): Planning 8 h, Daily 15 min, Review 4 h, Retro 3 h; Sprint até 1 mês, sem prorrogação.
- Compromissos: Product Backlog → Meta do Produto; Sprint Backlog → Meta da Sprint; Incremento → Definição de Pronto.
- Só o PO cancela a Sprint; refinamento é atividade, não evento.
- Item fora da Definição de Pronto não vai à Review e volta ao Product Backlog.
- Kanban: puxado, WIP limitado; lead time (pedido→entrega) ≥ cycle time (início→fim); WIP = throughput vezes tempo de ciclo.
- XP: par, TDD, CI, refatoração, design simples, propriedade coletiva, ritmo sustentável.
`,
      },
      // ------------------------------------------------------------------
      {
        id: "tj-devops",
        title: "DevOps e CI/CD",
        content: `
### O que a FGV cobra aqui
A banca cobra a **diferença entre integração contínua, entrega contínua e implantação contínua** (quase sempre em um cenário de pipeline), as **estratégias de implantação** em associação de colunas e os fundamentos culturais (CALMS, três maneiras). Infraestrutura como código, estratégias de branch no Git e métricas DORA completam o quadro.

#### 1. DevOps é cultura antes de ferramenta
DevOps aproxima desenvolvimento e operações para entregar valor com **rapidez e estabilidade**, quebrando silos e compartilhando responsabilidade pelo software em produção.

| CALMS | Significado |
| --- | --- |
| **C**ulture | Colaboração, responsabilidade compartilhada, aprendizado sem culpados (blameless) |
| **A**utomation | Build, testes, implantação e infraestrutura automatizados |
| **L**ean | Lotes pequenos, eliminação de desperdício, fluxo |
| **M**easurement | Medir fluxo, qualidade e operação para decidir com dados |
| **S**haring | Compartilhar conhecimento, ferramentas e resultados |

| As três maneiras (The DevOps Handbook) | Ideia |
| --- | --- |
| **1ª — Fluxo** | Acelerar o fluxo da esquerda (Dev) para a direita (Ops): lotes pequenos, WIP limitado, não passar defeito adiante |
| **2ª — Feedback** | Feedback rápido e constante da direita para a esquerda: telemetria, alertas, testes automatizados |
| **3ª — Aprendizado contínuo** | Cultura de experimentação, tomada de risco e aprendizado com falhas |

#### 2. CI x entrega contínua x implantação contínua
| | **Integração contínua (CI)** | **Entrega contínua** | **Implantação contínua** |
| --- | --- | --- | --- |
| O que garante | Código integrado várias vezes ao dia ao tronco, com build e testes automatizados | Todo build aprovado está **sempre pronto** para ir à produção | Todo build aprovado **vai** à produção |
| Ida à produção | Fora do escopo | **Decisão humana** (um clique) | **Automática**, sem intervenção |
| Pré-requisito | — | CI | Entrega contínua + testes muito confiáveis |

Boas práticas de CI: commits pequenos e frequentes no ramo principal, build e testes automatizados e rápidos, **build quebrado é prioridade** de correção, todos veem o estado do build.

> **⚠️ Pegadinha:** aprovação manual antes da produção **não desqualifica** a entrega contínua; ela é justamente o que a distingue da **implantação** contínua. Ambas abreviam "CD", e a FGV explora essa ambiguidade.

#### 3. Pipeline
Sequência automatizada de estágios (build, testes de unidade, análise estática, testes de integração, implantação em homologação, produção) que funciona como **portões de qualidade**. Princípios: **construir o artefato uma vez** e promover o mesmo binário entre ambientes; falhar cedo (shift-left), incluindo segurança (DevSecOps: SAST, análise de dependências).

\`\`\`
# .gitlab-ci.yml de um sistema do tribunal
stages: [build, test, deploy]
build:
  stage: build
  script: mvn -B package -DskipTests
testes:
  stage: test
  script: mvn -B verify
homologacao:
  stage: deploy
  script: ./implantar.sh homologacao
producao:
  stage: deploy
  script: ./implantar.sh producao
  when: manual
\`\`\`

Com \`when: manual\`, a produção depende de um clique: **entrega contínua**. Sem essa linha, todo commit aprovado iria direto à produção: **implantação contínua**.

#### 4. Estratégias de implantação
| Estratégia | Como funciona | Ponto forte |
| --- | --- | --- |
| **Blue-green** | Dois ambientes de produção idênticos; o tráfego é chaveado **de uma vez** para o que tem a nova versão | Rollback quase instantâneo (volta o chaveamento) |
| **Canary** | Nova versão liberada a uma **pequena parcela** de usuários; exposição ampliada conforme as métricas | Limita o impacto de defeitos; valida com tráfego real |
| **Rolling** | Instâncias substituídas **em lotes**; versões antiga e nova convivem durante a troca | Não exige ambiente duplicado |
| **Feature flags** | Código implantado com a funcionalidade **desligada**; ativação por configuração | **Separa implantação de liberação**; permite dark launch e testes A/B |
| **Recreate** (big bang) | Derruba a versão antiga e sobe a nova | Simples, mas com indisponibilidade |

> **⚠️ Pegadinha:** blue-green troca **todo** o tráfego de uma vez; canary troca **aos poucos, por usuários**; rolling troca **aos poucos, por instâncias**.

#### 5. Infraestrutura como código (IaC)
Servidores, redes e configurações descritos em arquivos **versionados**, revisados e testados como software. Abordagem **declarativa** (descreve o estado desejado: Terraform, CloudFormation, Kubernetes) x **imperativa** (descreve os passos). Propriedades-chave: **idempotência** (aplicar duas vezes dá o mesmo resultado), reprodutibilidade, detecção de **drift** e infraestrutura **imutável** (substitui em vez de alterar). **GitOps** usa o repositório Git como fonte da verdade do estado desejado.

#### 6. Git e estratégias de branch
| Estratégia | Ramos | Perfil |
| --- | --- | --- |
| **GitFlow** | main, develop, feature, release, hotfix | Releases planejadas e versionadas; mais burocrático |
| **GitHub Flow** | main + branches curtos de feature com pull request | Simples; implantação frequente a partir da main |
| **Trunk-based** | Todos integram no tronco ao menos diariamente; branches de vida curtíssima | O que melhor combina com CI/CD; usa feature flags |

- \`git merge\` preserva o histórico e cria commit de merge; \`git rebase\` reescreve commits sobre outra base (não faça rebase de ramo já compartilhado).
- \`git revert\` cria um **novo commit** que desfaz outro (seguro em ramo público); \`git reset\` move o ponteiro do ramo e pode descartar histórico.

#### 7. Métricas DORA
| Métrica | Dimensão |
| --- | --- |
| Frequência de implantação | Vazão (velocidade) |
| Lead time para mudanças (do commit à produção) | Vazão |
| Taxa de falha de mudanças | Estabilidade |
| Tempo para restaurar o serviço (MTTR) | Estabilidade |

Os relatórios recentes renomearam a última para "tempo de recuperação de implantação com falha". A conclusão central da pesquisa: times de alto desempenho são **rápidos e estáveis ao mesmo tempo**; velocidade e estabilidade não são trade-off.

#### Revisão relâmpago
- CALMS: cultura, automação, lean, medição, compartilhamento.
- Três maneiras: fluxo, feedback, aprendizado contínuo.
- CI integra e testa; entrega contínua deixa pronto (produção com clique); implantação contínua publica sozinha.
- Blue-green = troca total e rollback rápido; canary = parcela de usuários; rolling = lotes de instâncias; feature flag = desliga/liga sem novo deploy.
- IaC: versionada, declarativa ou imperativa, idempotente.
- Trunk-based + feature flags é o par natural do CI/CD; revert é seguro em ramo público.
- DORA: frequência e lead time (vazão); taxa de falha e recuperação (estabilidade).
`,
      },
      // ------------------------------------------------------------------
      {
        id: "tj-testes",
        title: "Testes, TDD e BDD",
        content: `
### O que a FGV cobra aqui
É o ponto mais cobrado do eixo. A banca mistura teoria clássica (níveis, caixa-preta x caixa-branca, **partição de equivalência e valor-limite**, **cobertura de comandos x de decisão**) com prática moderna: **dublês de teste** em código JUnit/Mockito, o ciclo **red-green-refactor** do TDD e cenários **Gherkin** do BDD para analisar. Leia o código da questão com calma: em geral a resposta está em um detalhe (um \`verify\`, um if sem else, uma linha da tabela de exemplos).

#### 1. Níveis de teste
| Nível | Objeto | Quem / base |
| --- | --- | --- |
| **Unidade** (componente) | Menor parte testável (método, classe), isolada com dublês | Desenvolvedor; código e projeto detalhado |
| **Integração** | Interfaces e interação entre componentes ou sistemas | Desenvolvedor/testador; arquitetura |
| **Sistema** | Sistema completo, requisitos funcionais e não funcionais | Equipe de testes; especificação |
| **Aceitação** | Adequação ao uso e às necessidades do usuário (alfa, beta, UAT, regulatória) | Usuário/cliente; requisitos de negócio |

Princípios ISTQB que caem: testes mostram a **presença** de defeitos, não a ausência; teste exaustivo é impossível; testar **cedo** economiza; defeitos se agrupam; **paradoxo do pesticida** (testes repetidos perdem eficácia); teste depende do contexto; ausência de erros não garante utilidade.

#### 2. Pirâmide de testes (Mike Cohn)
Base larga de testes de **unidade** (rápidos, baratos, muitos), meio de testes de **integração/serviço**, topo estreito de testes de **interface/ponta a ponta** (lentos, frágeis, poucos). O antipadrão é o "cone de sorvete": muitos testes manuais e de interface, poucos de unidade.

#### 3. Caixa-preta x caixa-branca
| | **Caixa-preta** (funcional) | **Caixa-branca** (estrutural) |
| --- | --- | --- |
| Base | Especificação, sem olhar o código | Estrutura interna do código |
| Técnicas | Partição de equivalência, valor-limite, tabela de decisão, transição de estados | Cobertura de comandos, de decisão, de condição, de caminhos |

**Partição de equivalência**: divide as entradas em classes que o sistema deve tratar igual; basta **um caso por partição** (válidas e inválidas). **Valor-limite**: os defeitos se concentram nas bordas. Para um campo que aceita de 1 a 300 páginas há **3 partições** (menor que 1, de 1 a 300, maior que 300) e, na análise de **dois valores** (limite e vizinho imediato), os valores **0, 1, 300 e 301**. Na variante de três valores, entram também 2 e 299.

#### 4. Cobertura de comandos x cobertura de decisão
- **Comandos (statement)**: percentual de instruções executadas.
- **Decisão (branch)**: percentual de **resultados** de decisões (verdadeiro e falso de cada if/while) exercitados.

\`\`\`
double calcularMulta(int diasAtraso, double valor) {
    double multa = 0;
    if (diasAtraso > 0) {
        multa = valor / 50;   // 2% do valor
    }
    return multa;
}
\`\`\`

Um único teste com \`diasAtraso = 10\` executa **todas** as instruções (100% de comandos), mas só o lado verdadeiro do if (**50% de decisão**). Um segundo caso com \`diasAtraso = 0\` completa a decisão.

> **⚠️ Pegadinha:** 100% de decisão **implica** 100% de comandos; a recíproca é **falsa** (o if sem else é o exemplo clássico). E 100% de cobertura não prova ausência de defeitos.

#### 5. Dublês de teste (Meszaros)
| Dublê | O que faz | Verifica |
| --- | --- | --- |
| **Dummy** | Só preenche parâmetro; nunca é usado | Nada |
| **Stub** | Devolve **respostas pré-programadas** às chamadas | O **estado/resultado** do objeto testado |
| **Spy** | Stub que também **registra** as chamadas recebidas, para checagem posterior | Chamadas registradas |
| **Mock** | Pré-programado com **expectativas** de chamadas | O **comportamento** (interação) |
| **Fake** | Implementação **funcional simplificada** (banco em memória) | Resultado, com lógica real porém simples |

\`\`\`
@Test
void deveNotificarPartesAoArquivar() {
    RepositorioProcessos repo = mock(RepositorioProcessos.class);
    Notificador notificador = mock(Notificador.class);
    when(repo.buscar("0801234")).thenReturn(processo);   // repo atua como STUB
    new ServicoArquivamento(repo, notificador).arquivar("0801234");
    verify(notificador).notificarPartes(processo);       // notificador atua como MOCK
}
\`\`\`

> **⚠️ Pegadinha:** no Mockito, tudo nasce de \`mock()\`, mas o **papel** é definido pelo uso: quem só responde (\`when...thenReturn\`) é stub; quem tem a interação verificada (\`verify\`) é mock.

#### 6. TDD — Test-Driven Development (Kent Beck)
1. **Red**: escreva um teste pequeno que **falha** (às vezes nem compila).
2. **Green**: escreva o **mínimo** de código para o teste passar.
3. **Refactor**: melhore o código (e os testes) **mantendo tudo verde**, eliminando duplicação.

\`\`\`
@Test
void deveIsentarCustasDeBeneficiarioDaJusticaGratuita() {
    CalculadoraCustas calc = new CalculadoraCustas();
    assertEquals(0.0, calc.calcular(1500.0, true), 0.001);
}
@Test
void deveRejeitarValorDaCausaNegativo() {
    assertThrows(IllegalArgumentException.class,
        () -> new CalculadoraCustas().calcular(-1.0, false));
}
\`\`\`

> **⚠️ Pegadinha:** TDD é técnica de **projeto** (design emergente) tanto quanto de teste. Escrever todos os testes depois do código não é TDD, e o refactor **não** acrescenta funcionalidade.

#### 7. BDD e Gherkin
BDD (Dan North) estende o TDD para descrever o **comportamento esperado** em linguagem de negócio, compartilhada por PO, desenvolvedores e testadores. Os cenários viram **especificação executável** (Cucumber, SpecFlow, Behave).

\`\`\`
# language: pt
Funcionalidade: Consulta pública de processos
  Contexto:
    Dado que o portal do tribunal está disponível
  Cenário: Processo em segredo de justiça não é exibido
    Dado um processo marcado como segredo de justiça
    Quando um cidadão não autenticado pesquisa pelo número do processo
    Então o sistema informa que o processo não pode ser exibido
    E nenhum dado das partes é revelado
\`\`\`

| Palavra-chave (pt / en) | Papel |
| --- | --- |
| Dado / Given | **Contexto**, pré-condição |
| Quando / When | **Ação** ou evento |
| Então / Then | **Resultado** esperado (verificação) |
| E, Mas / And, But | Continuam o passo anterior |
| Contexto / Background | Passos comuns a todos os cenários da funcionalidade |
| Esquema do Cenário + Exemplos | Cenário parametrizado, executado **uma vez por linha** da tabela Exemplos |

#### 8. Outros tipos que caem
| Tipo | Objetivo |
| --- | --- |
| **Regressão** | Reexecutar testes após mudança para garantir que nada que funcionava quebrou |
| **Smoke** | Verificação rápida e superficial das funções críticas: o build está estável para seguir testando? |
| **Mutação** | Injetar pequenas alterações no código (**mutantes**); se algum teste falha, o mutante foi **morto**. Escore = mortos ÷ mutantes não equivalentes; mede a **qualidade dos testes** (ferramenta Java: PIT) |

#### Revisão relâmpago
- Níveis: unidade, integração, sistema, aceitação; pirâmide = muitos de unidade, poucos de interface.
- Partição: um caso por classe; valor-limite (2 valores) para 1 a 300: 0, 1, 300, 301.
- 100% de decisão implica 100% de comandos, não o contrário.
- Stub responde; mock verifica interação; spy registra; fake funciona simplificado; dummy só ocupa lugar.
- TDD: red → green → refactor; código mínimo no green; refactor sem mudar comportamento.
- Gherkin: Dado = contexto, Quando = ação, Então = resultado; Esquema roda uma vez por linha de Exemplos.
- Regressão protege o que já funcionava; smoke testa a estabilidade do build; mutação avalia a força dos testes.
`,
      },
    ],
  });

  // Textos de apoio (código/Gherkin) usados nas questões.
  const codigoMulta = `public double calcularMulta(int diasAtraso, double valor) {
  double multa = 0;
  if (diasAtraso > 0) {
    multa = valor * 0.02;
  }
  return multa;
}`;

  const codigoDubles = `@Test
void deveNotificarPartesAoArquivarProcesso() {
  RepositorioProcessos repositorio = mock(RepositorioProcessos.class);
  Notificador notificador = mock(Notificador.class);
  when(repositorio.buscar("0801234-56")).thenReturn(processoAtivo);

  ServicoArquivamento servico = new ServicoArquivamento(repositorio, notificador);
  servico.arquivar("0801234-56");

  verify(notificador).notificarPartes(processoAtivo);
}`;

  const gherkinPaginas = `# language: pt
Funcionalidade: Protocolo de petição
  Esquema do Cenário: Validar a quantidade de páginas
    Dado um advogado autenticado no sistema
    Quando ele anexa uma petição com <paginas> páginas
    Então o sistema deve <resultado> o protocolo
    Exemplos:
      | paginas | resultado |
      | 0       | rejeitar  |
      | 1       | aceitar   |
      | 300     | aceitar   |
      | 301     | rejeitar  |`;

  tjpbQuestoes.push(
    // ---------------------------------------------------------------- processos
    tq(
      TJ_ENG,
      "RUP: fases",
      "Um tribunal contratou o desenvolvimento do novo sistema de distribuição de processos seguindo o Processo Unificado (RUP). Associe cada fase ao seu foco principal.\n\n1. Concepção\n2. Elaboração\n3. Construção\n4. Transição\n\n( ) Desenvolver a maior parte das funcionalidades e chegar à capacidade operacional inicial, em geral uma versão beta.\n( ) Delimitar o escopo, elaborar o caso de negócio e identificar os riscos críticos do projeto.\n( ) Estabelecer uma linha de base da arquitetura executável e mitigar os principais riscos técnicos.\n( ) Disponibilizar o produto aos usuários, com treinamento, migração de dados e ajustes finais.\n\nA sequência correta, de cima para baixo, é",
      ["1 – 3 – 2 – 4.", "3 – 2 – 1 – 4.", "2 – 1 – 3 – 4.", "3 – 1 – 2 – 4.", "3 – 1 – 4 – 2."],
      3,
      "Construção produz a maior parte das funcionalidades (3); Concepção define escopo e caso de negócio (1); Elaboração fixa a arquitetura executável e ataca os riscos técnicos (2); Transição leva o produto aos usuários (4). O erro mais comum, presente em (B) e (C), é atribuir a arquitetura à Construção ou à Concepção, quando a linha de base arquitetural é o marco da Elaboração.",
      "tj-processos",
    ),
    tq(
      TJ_ENG,
      "APF e pontos de história",
      "A área de contratações de TI de um tribunal discute como dimensionar o novo módulo de custas judiciais. Analise as afirmativas a seguir.\n\nI. A Análise de Pontos de Função mede o tamanho funcional do software sob a perspectiva do usuário, de forma independente da linguagem de programação e da tecnologia empregadas.\nII. Uma funcionalidade que apenas recupera dados de um Arquivo Lógico Interno e os exibe acompanhados de um total calculado no momento da exibição deve ser contada como Consulta Externa.\nIII. Por serem uma medida padronizada, os pontos de história permitem comparar a produtividade de diferentes times por meio da velocidade de cada um.\n\nEstá correto o que se afirma em",
      ["I, apenas.", "II, apenas.", "I e II, apenas.", "II e III, apenas.", "I, II e III."],
      0,
      "I está correta: a APF mede a funcionalidade entregue ao usuário, não linhas de código nem tecnologia. II está errada: o total calculado é dado derivado, o que caracteriza Saída Externa; a Consulta Externa é recuperação pura, sem cálculo. III está errada: pontos de história são estimativa relativa e própria de cada time, e comparar velocidades entre times distorce a métrica.",
      "tj-processos",
    ),

    // ---------------------------------------------------------------- requisitos
    tq(
      TJ_ENG,
      "Funcionais x não funcionais",
      "No levantamento de requisitos do sistema de peticionamento eletrônico de um tribunal, foram registrados os itens a seguir.\n\nI. O sistema deve permitir que o advogado protocole petição intermediária vinculada a um processo existente.\nII. A consulta processual deve responder em até 2 segundos para 95% das requisições, com até 5.000 usuários simultâneos.\nIII. O tratamento de dados pessoais das partes deve observar a Lei Geral de Proteção de Dados (LGPD).\nIV. O sistema deve emitir automaticamente o comprovante de protocolo, com data, hora e número do documento.\n\nAssinale a opção que classifica corretamente esses requisitos.",
      [
        "Todos são funcionais, pois descrevem comportamentos que o sistema deve apresentar a seus usuários.",
        "I, II e IV são funcionais; III é não funcional, porque decorre de norma externa ao sistema.",
        "I e IV são funcionais; II e III são não funcionais, sendo II de desempenho e III de natureza externa (legal).",
        "I e IV são funcionais; II é não funcional de desempenho; III não constitui requisito de software, mas apenas restrição jurídica fora do escopo do sistema.",
        "II e III são funcionais, por serem verificáveis; I e IV são não funcionais, por tratarem da interface com o usuário.",
      ],
      2,
      "I e IV descrevem serviços que o sistema presta (funcionais). II impõe restrição mensurável de desempenho e III é requisito não funcional externo, de origem legal, na classificação de Sommerville. (B) erra ao tratar o desempenho como funcional; (D) erra ao excluir a LGPD dos requisitos, quando normas legais são justamente a fonte dos requisitos externos.",
      "tj-requisitos",
    ),
    tq(
      TJ_ENG,
      "Validação, rastreabilidade e INVEST",
      "Durante a revisão dos requisitos de um sistema de gestão de precatórios de um tribunal, a analista responsável registrou as anotações abaixo. Assinale a afirmativa correta.",
      [
        "Verificação responde à pergunta “estamos construindo o produto certo?”, enquanto validação responde a “estamos construindo o produto corretamente?”.",
        "A rastreabilidade para frente liga cada requisito à sua origem, como o stakeholder que o solicitou ou a norma que o motivou.",
        "Na sigla INVEST, o “N” indica que a história, depois de aceita pelo Product Owner, não pode mais ser negociada pela equipe.",
        "Critérios de aceitação devem ser escritos exclusivamente após a implementação, pela equipe de testes, para evitar o viés dos desenvolvedores.",
        "A história “Como servidor, quero filtrar precatórios por ano, para priorizar os pagamentos” se torna testável com critérios de aceitação objetivos.",
      ],
      4,
      "O “T” de INVEST exige que a história seja testável, e isso se obtém com critérios de aceitação objetivos (a “Confirmação” dos 3 Cs). (A) inverte os conceitos de Boehm: produto certo é validação. (B) descreve a rastreabilidade para trás. (C) erra o “N”, que significa negociável. (D) erra porque critérios de aceitação são definidos antes da implementação, com o Product Owner.",
      "tj-requisitos",
    ),

    // ---------------------------------------------------------------- UML
    tq(
      TJ_ENG,
      "Casos de uso: include e extend",
      "Na modelagem do sistema de peticionamento de um tribunal, o analista identificou que: (1) todo protocolo de petição exige, necessariamente, a autenticação do usuário com certificado digital; e (2) durante o protocolo, apenas quando a petição contém documento sigiloso, o usuário pode solicitar a restrição de acesso a esse documento. No diagrama de casos de uso, a modelagem adequada é",
      [
        "«extend» de “Protocolar petição” para “Autenticar usuário” e «include» de “Restringir acesso” para “Protocolar petição”.",
        "«include» de “Protocolar petição” para “Autenticar usuário” e «extend» de “Restringir acesso” para “Protocolar petição”.",
        "«include» de “Autenticar usuário” para “Protocolar petição” e «extend» de “Protocolar petição” para “Restringir acesso”.",
        "generalização de “Autenticar usuário” para “Protocolar petição” e «include» de “Protocolar petição” para “Restringir acesso”.",
        "«extend» nos dois casos, pois tanto a autenticação quanto a restrição de acesso dependem de condições verificadas em tempo de execução.",
      ],
      1,
      "A autenticação ocorre sempre, logo é «include», com a seta partindo do caso base (Protocolar petição) para o incluído. A restrição de acesso é opcional e condicional, logo é «extend», com a seta partindo do extensor (Restringir acesso) para o base. (C) acerta os estereótipos, mas inverte as duas direções; (E) ignora que a autenticação é obrigatória.",
      "tj-uml",
    ),
    tq(
      TJ_ENG,
      "Diagrama de classes",
      "No diagrama de classes do sistema processual de um tribunal, cada Movimentação pertence a um único Processo e deixa de existir quando o Processo é excluído; já um Magistrado pode estar vinculado a uma Vara, mas continua existindo se a Vara for extinta. Assinale a opção correta.",
      [
        "Processo–Movimentação é agregação (losango vazio no lado do Processo) e Vara–Magistrado é composição (losango preenchido no lado da Vara).",
        "Processo–Movimentação é composição, com o losango preenchido desenhado no lado da Movimentação, que é a parte da relação.",
        "Ambas são composições, pois em todo relacionamento todo-parte da UML a parte depende do ciclo de vida do todo.",
        "Processo–Movimentação é composição (losango preenchido no lado do Processo) e Vara–Magistrado é agregação (losango vazio no lado da Vara).",
        "Ambas devem ser modeladas como herança, representada por linha tracejada com triângulo vazio apontando para a superclasse.",
      ],
      3,
      "Composição é o todo-parte forte: a parte pertence a um só todo e é destruída com ele, como a Movimentação em relação ao Processo; agregação é o todo-parte fraco, em que a parte sobrevive ao todo, como o Magistrado. O losango fica sempre no lado do todo. (A) inverte as relações, (B) põe o losango na parte, (C) ignora a agregação e (E) descreve a realização, não a herança, que usa linha sólida.",
      "tj-uml",
    ),

    // ---------------------------------------------------------------- ágil
    tq(
      TJ_ENG,
      "Scrum Guide 2020",
      "Um tribunal adotou o Scrum para evoluir o seu sistema de execução fiscal. Em uma reunião de alinhamento, foram feitas as afirmações abaixo. De acordo com o Guia do Scrum (2020), assinale a afirmativa correta.",
      [
        "Se um item do Product Backlog não atende à Definição de Pronto, ele não pode ser liberado nem apresentado na Sprint Review e retorna ao Product Backlog.",
        "O Scrum define três papéis — Product Owner, Scrum Master e Time de Desenvolvimento —, cabendo a este último a ordenação do Product Backlog.",
        "A Meta da Sprint é o compromisso associado ao Product Backlog e descreve o estado futuro do produto que orienta o planejamento de longo prazo.",
        "Na ausência do Product Owner, o Scrum Master assume a ordenação do Product Backlog e pode cancelar a Sprint se a meta se tornar obsoleta.",
        "O refinamento do Product Backlog é um evento formal do Scrum, com timebox de até 10% da capacidade dos Developers em cada Sprint de um mês de duração.",
      ],
      0,
      "O Guia 2020 é literal: item que não atende à Definição de Pronto não pode ser liberado nem apresentado na Sprint Review e volta ao Product Backlog para consideração futura. (B) usa a nomenclatura antiga e atribui ao time a gestão do Product Backlog, que é do PO. (C) descreve a Meta do Produto, compromisso do Product Backlog. (D) erra porque só o PO cancela a Sprint. (E) erra porque o refinamento é atividade contínua, não evento.",
      "tj-agil",
    ),
    tq(
      TJ_ENG,
      "Eventos e timeboxes do Scrum",
      "A equipe de desenvolvimento do processo judicial eletrônico de um tribunal trabalha com Sprints de um mês. Sobre os eventos do Scrum, segundo o Guia do Scrum (2020), analise as afirmativas a seguir.\n\nI. A Daily Scrum tem timebox de 15 minutos, independentemente da duração da Sprint, e é um evento destinado aos Developers.\nII. Para uma Sprint de um mês, a Sprint Planning tem timebox máximo de oito horas, a Sprint Review de quatro horas e a Sprint Retrospective de três horas.\nIII. Se a Meta da Sprint estiver em risco, o Scrum Master pode estender a Sprint em até uma semana, desde que a duração total não ultrapasse um mês e meio.\n\nEstá correto o que se afirma em",
      ["I, apenas.", "II, apenas.", "I e II, apenas.", "II e III, apenas.", "I, II e III."],
      2,
      "I e II reproduzem os timeboxes do Guia: Daily de 15 minutos para os Developers; Planning de até 8 h, Review de até 4 h e Retrospective de até 3 h para Sprints de um mês. III está errada: a Sprint tem duração fixa de no máximo um mês e não é prorrogada; se a meta perder o sentido, o caminho é renegociar o escopo com o PO ou, no limite, o PO cancelar a Sprint.",
      "tj-agil",
    ),
    tq(
      TJ_ENG,
      "Kanban: métricas e Lei de Little",
      "A equipe de sustentação do sistema judicial eletrônico de um tribunal usa Kanban. Nas últimas semanas, com o fluxo estável, havia em média 12 itens em andamento (entre as colunas “Em análise” e “Em homologação”) e a equipe concluía, em média, 4 itens por semana. Assinale a afirmativa correta.",
      [
        "O lead time é contado do início efetivo do trabalho até a entrega e, por isso, é sempre menor do que o cycle time do mesmo item.",
        "Throughput é o tempo médio que um item leva para atravessar o quadro e, no cenário descrito, vale 4 semanas por item.",
        "O Kanban prescreve iterações de duração fixa e o papel obrigatório de Kanban Master, responsável por definir os limites de WIP.",
        "Sempre que surgir um gargalo, os limites de WIP das colunas anteriores devem ser elevados, para que a equipe não fique ociosa nem acumule demanda.",
        "Pela Lei de Little, o tempo médio de ciclo é de cerca de 3 semanas, e reduzir o WIP, mantida a vazão, tende a reduzir esse tempo.",
      ],
      4,
      "Pela Lei de Little, tempo médio de ciclo = WIP médio ÷ vazão = 12 ÷ 4 = 3 semanas; com vazão constante, menos WIP significa menos tempo de ciclo. (A) inverte os conceitos: o lead time começa no pedido e é maior ou igual ao cycle time. (B) confunde throughput (itens por tempo) com tempo de ciclo. (C) descreve algo que o Kanban não prescreve, e (D) contraria o propósito do limite de WIP, que é expor o gargalo.",
      "tj-agil",
    ),

    // ---------------------------------------------------------------- DevOps
    tq(
      TJ_ENG,
      "CI x entrega x implantação contínua",
      "O pipeline de um tribunal executa, a cada commit integrado ao ramo principal, a compilação e a bateria de testes automatizados. O artefato aprovado é implantado automaticamente no ambiente de homologação; a implantação em produção fica disponível como uma etapa que exige o acionamento manual do gestor do sistema. Esse cenário caracteriza",
      [
        "implantação contínua, porque todas as etapas posteriores à aprovação do gestor são automatizadas e reprodutíveis.",
        "entrega contínua, porque o software permanece sempre em condição de ser liberado, mas a ida à produção depende de decisão humana.",
        "apenas integração contínua, porque a entrega contínua exige que nenhuma etapa do pipeline dependa de aprovação manual.",
        "implantação contínua, desde que os testes automatizados cubram todas as funcionalidades críticas do sistema em produção.",
        "entrega contínua, que se diferencia da integração contínua por dispensar a execução de testes automatizados a cada commit no ramo principal.",
      ],
      1,
      "Na entrega contínua todo artefato aprovado está pronto para produção, mas a publicação depende de uma decisão humana, exatamente o acionamento manual descrito. (A) e (D) descrevem implantação contínua, que exige a ida automática à produção, sem intervenção. (C) inverte a definição: a aprovação manual é o que separa entrega de implantação contínua. (E) erra porque a entrega contínua pressupõe a integração contínua, com testes automatizados.",
      "tj-devops",
    ),
    tq(
      TJ_ENG,
      "Estratégias de implantação",
      "Um tribunal quer reduzir o risco ao publicar novas versões de seu portal de serviços. Associe cada estratégia à sua descrição.\n\n1. Blue-green\n2. Canary\n3. Rolling\n4. Feature flags\n\n( ) A nova versão é liberada para uma pequena parcela dos usuários e, conforme as métricas observadas, a exposição é ampliada gradualmente.\n( ) Mantêm-se dois ambientes de produção idênticos; o tráfego é chaveado de uma só vez para o ambiente com a nova versão, o que permite rollback rápido.\n( ) Uma funcionalidade já implantada permanece desligada no código e é ativada por configuração, separando a implantação da liberação.\n( ) As instâncias são substituídas pela nova versão em lotes, de modo que as versões antiga e nova convivem durante a atualização.\n\nA sequência correta, de cima para baixo, é",
      ["2 – 1 – 4 – 3.", "1 – 2 – 4 – 3.", "2 – 1 – 3 – 4.", "3 – 1 – 4 – 2.", "2 – 3 – 4 – 1."],
      0,
      "Canary expõe a nova versão a uma fração dos usuários (2); blue-green troca todo o tráfego entre dois ambientes idênticos (1); feature flags ativam por configuração código já implantado (4); rolling substitui instâncias em lotes (3). As alternativas erradas trocam justamente os pares que a banca costuma confundir: canary com rolling (gradual por usuários x gradual por instâncias) e blue-green com canary.",
      "tj-devops",
    ),

    // ---------------------------------------------------------------- testes
    tq(
      TJ_ENG,
      "Cobertura de comandos x decisão",
      "Um desenvolvedor do tribunal escreveu um único teste para o método abaixo, chamando calcularMulta(10, 1000.0) e verificando que o retorno é 20.0. Sobre a cobertura obtida por esse teste, assinale a afirmativa correta.",
      [
        "O teste atinge 100% de cobertura de decisão, pois executou a única decisão existente no método.",
        "O teste atinge 50% de cobertura de comandos, já que apenas um dos dois ramos do if foi executado.",
        "O teste atinge 100% de cobertura de comandos e 50% de decisão; um caso com diasAtraso igual a 0 completaria a de decisão.",
        "As coberturas de comandos e de decisão são, neste método, necessariamente equivalentes, porque o if não possui cláusula else a executar.",
        "Para atingir 100% de cobertura de decisão, seria necessário testar todos os valores inteiros possíveis de diasAtraso.",
      ],
      2,
      "Com diasAtraso = 10, todas as instruções rodam (100% de comandos), mas só o resultado verdadeiro do if é exercitado (50% de decisão); um caso com diasAtraso = 0 cobre o resultado falso. (A) confunde executar a decisão com exercitar seus dois resultados. (D) é o oposto da verdade: o if sem else é o exemplo clássico em que as duas coberturas divergem. (E) confunde cobertura de decisão com teste exaustivo.",
      "tj-testes",
      codigoMulta,
    ),
    tq(
      TJ_ENG,
      "Dublês de teste",
      "Considere o teste JUnit 5 com Mockito abaixo, escrito para o serviço de arquivamento de processos de um tribunal. Embora os dois objetos tenham sido criados com o mesmo método mock(), eles cumprem papéis distintos no teste. Na classificação de dublês de teste de Gerard Meszaros, os objetos repositorio e notificador atuam, respectivamente, como",
      ["mock e stub.", "stub e mock.", "fake e spy.", "dummy e mock.", "spy e fake."],
      1,
      "O repositório apenas devolve uma resposta pré-programada (when...thenReturn) para que o teste avance: é um stub. O notificador tem a interação verificada ao final (verify), o que caracteriza um mock, usado para verificação de comportamento. Fake exigiria uma implementação funcional simplificada, e dummy seria um objeto passado sem nunca ser usado, o que não ocorre com nenhum dos dois.",
      "tj-testes",
      codigoDubles,
    ),
    tq(
      TJ_ENG,
      "BDD e Gherkin",
      "Uma equipe de um tribunal adota BDD e escreveu a especificação abaixo antes de implementar a regra que limita a petição a um intervalo de 1 a 300 páginas. Analise as afirmativas a seguir.\n\nI. O esquema do cenário será executado uma vez para cada linha de dados da tabela Exemplos, ou seja, quatro vezes.\nII. O passo iniciado por “Dado” descreve a ação executada pelo usuário, e o passo iniciado por “Quando” descreve o contexto prévio do cenário.\nIII. Os valores escolhidos aplicam a análise de valor-limite à faixa válida, testando cada limite e o seu vizinho imediato fora dela.\n\nEstá correto o que se afirma em",
      ["I, apenas.", "II, apenas.", "III, apenas.", "I e III, apenas.", "I, II e III."],
      3,
      "I está correta: um Esquema do Cenário roda uma vez por linha de Exemplos (a linha de cabeçalho não conta), totalizando quatro execuções. III está correta: 1 e 300 são os limites, e 0 e 301 os vizinhos imediatos fora da faixa (valor-limite de dois valores). II está errada porque inverte os papéis: “Dado” estabelece o contexto, “Quando” descreve a ação e “Então” o resultado esperado.",
      "tj-testes",
      gherkinPaginas,
    ),
  );
}
