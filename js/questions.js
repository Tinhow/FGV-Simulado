/**
 * BANCO OFICIAL DE QUESTÕES - CONCURSO DATAPREV (FGV)
 * Cargo: Analista de Tecnologia da Informação
 * Total: 70 Questões divididas exatamente conforme a estrutura do edital oficial da banca FGV:
 *   - Língua Portuguesa (Questões 1 a 12)
 *   - Língua Inglesa (Questões 13 a 24)
 *   - Raciocínio Lógico-Matemático (Questões 25 a 30)
 *   - Atualidades (Questões 31 a 35)
 *   - Legislação de Segurança da Informação e Proteção de Dados (Questões 36 a 40)
 *   - Conhecimentos Específicos de Tecnologia da Informação (Questões 41 a 70)
 */

const questionsData = [
  // =========================================================================
  // BLOC 1: LÍNGUA PORTUGUESA (Questões 1 a 12)
  // =========================================================================
  {
    id: 1,
    subject: "Língua Portuguesa",
    subtopic: "Interpretação e Inferência Textual",
    theoryRef: "portugues-interpretacao",
    statement: `Considere o fragmento a seguir, adaptado de texto sobre a transformação digital nos serviços públicos:

"A digitalização dos serviços previdenciários reduziu as filas físicas e abreviou o tempo de resposta aos cidadãos. Contudo, essa aparente onipresença da tecnologia não pode ocultar a persistência de um contingente de brasileiros para quem o acesso a um smartphone conectado é ainda uma ficção distante."

A partir da leitura do fragmento, infere-se corretamente que:`,
    options: [
      "A digitalização dos serviços públicos foi ineficaz no combate à lentidão dos processos previdenciários.",
      "A modernização tecnológica dos serviços estatais traz consigo o risco de aprofundar desigualdades de acesso para parcelas vulneráveis da população.",
      "O uso de smartphones conectados é a única via viável para viabilizar a cidadania plena no Brasil contemporâneo.",
      "A burocracia dos órgãos previdenciários é atribuível exclusivamente à preferência popular pelo atendimento presencial.",
      "A tecnologia deve ser suprimida dos órgãos públicos enquanto houver cidadãos desprovidos de conectividade."
    ],
    correctAnswer: 1, // B
    explanation: `Gabarito Oficial Comentado:
Alternativa B (CORRETA): O fragmento destaca que, embora a digitalização tenha trazido benefícios evidentes ("reduziu as filas físicas e abreviou o tempo de resposta"), ela convive com uma realidade em que parte dos cidadãos não tem acesso a smartphone conectado ("ficção distante"). Portanto, a tecnologia sem políticas de inclusão corre o risco de marginalizar quem não tem acesso digital.

Análise das alternativas incorretas:
- A: Incorreta. O texto afirma expressamente o oposto ("reduziu as filas físicas e abreviou o tempo de resposta").
- C: Incorreta. Extrapolação. O texto não coloca o smartphone como a única via possível, mas exemplifica a barreira enfrentada por quem não o possui.
- D: Incorreta. Não há qualquer menção a preferência popular por filas, nem que a burocracia derive disso.
- E: Incorreta. O texto não defende o abandono da tecnologia, e sim alerta para a necessidade de atenção àqueles que ainda estão excluídos dela.`
  },
  {
    id: 2,
    subject: "Língua Portuguesa",
    subtopic: "Coesão Referencial e Pronomes",
    theoryRef: "portugues-coesao",
    statement: `Em: "Os analistas de dados examinaram os registros de transações anômalas e encaminharam-nos aos auditores da autarquia, aos quais caberá deliberar sobre as medidas sancionatórias cabíveis."

Os termos sublinhados "nos" (em "encaminharam-nos") e "aos quais" exercem papel de coesão anafórica referindo-se, respectiva e contextualmente, a:`,
    options: [
      "analistas de dados / auditores da autarquia",
      "registros de transações anômalas / analistas de dados",
      "registros de transações anômalas / auditores da autarquia",
      "analistas de dados / medidas sancionatórias",
      "registros de transações anômalas / registros de transações"
    ],
    correctAnswer: 2, // C
    explanation: `Gabarito Oficial Comentado:
Alternativa C (CORRETA):
1. No verbo "encaminharam-nos", o pronome oblíquo enclítico "nos" (variante de "os" após terminação nasal "-am") substitui o objeto direto "os registros de transações anômalas" (quem encaminha, encaminha algo a alguém).
2. A locução pronominal relativa "aos quais" introduz oração subordinada adjetiva e retoma o termo imediatamente antecedente "aos auditores da autarquia", a quem caberá a deliberação.

As demais opções erram ao trocar a referência dos pronomes anafóricos.`
  },
  {
    id: 3,
    subject: "Língua Portuguesa",
    subtopic: "Conectivos e Relações Semânticas",
    theoryRef: "portugues-conectivos",
    statement: `Assinale a frase em que o conectivo destacado introduz uma relação de CONCESSÃO:`,
    options: [
      "Visto que os servidores foram migrados para a nuvem, a latência do sistema caiu vertiginosamente.",
      "Conquanto houvesse instabilidade intermitente na infraestrutura elétrica, os testes de carga prosseguiram sem interrupções.",
      "À medida que a equipe refinava o backlog, as estimativas de entrega tornavam-se mais previsíveis.",
      "Caso o comitê de segurança aprove a nova política de senhas, o deploy será autorizado de imediato.",
      "Para que o aplicativo previdenciário atinja todos os municípios, convênios de conectividade foram firmados."
    ],
    correctAnswer: 1, // B
    explanation: `Gabarito Oficial Comentado:
Alternativa B (CORRETA): A conjunção subordinativa "Conquanto" é puramente concessiva (equivale a "embora", "ainda que", "posto que", "apesar de que"), indicando um obstáculo que não foi capaz de impedir o fato expresso na oração principal ("os testes prosseguiram").

Análise das demais alternativas:
- A: "Visto que" introduz causa (causal).
- C: "À medida que" introduz proporcionalidade (proporcional).
- D: "Caso" introduz hipótese ou condição (condicional).
- E: "Para que" introduz finalidade/objetivo (final).`
  },
  {
    id: 4,
    subject: "Língua Portuguesa",
    subtopic: "Regência e Uso da Crase",
    theoryRef: "portugues-regencia-crase",
    statement: `A crase está empregada em estrita conformidade com o padrão culto da língua portuguesa em:`,
    options: [
      "O novo protocolo de comunicação interna visa à otimizar o fluxo de chamados de suporte técnico.",
      "Os estagiários foram instruídos a prestar assistência à qualquer usuário que apresente dúvidas no portal.",
      "O comitê gestor submeteu a proposta de governança à comissão de ética e transparência da instituição.",
      "A implementação do software foi realizada à partir de diretrizes fixadas no início do exercício orçamentário.",
      "Os técnicos deslocaram-se à pé até o datacenter reserva localizado no bloco adjacente."
    ],
    correctAnswer: 2, // C
    explanation: `Gabarito Oficial Comentado:
Alternativa C (CORRETA): O verbo "submeter" é transitivo direto e indireto (submete algo A alguém/instituição). A regência exige a preposição "a", que se funde ao artigo feminino definido "a" do substantivo feminino determinado "comissão de ética" -> "à comissão".

Análise das alternativas incorretas:
- A: Erro crasso. Antes de verbo no infinitivo ("otimizar") NUNCA ocorre crase.
- B: Erro. "Qualquer" é pronome indefinido que repele artigo definido feminino, logo não há crase.
- D: Erro. "A partir de" é locução iniciada por verbo ("partir"); não há artigo, logo sem crase.
- E: Erro. "Pé" é substantivo masculino; antes de palavras masculinas usa-se apenas a preposição "a" (a pé, a cavalo, a prazo).`
  },
  {
    id: 5,
    subject: "Língua Portuguesa",
    subtopic: "Concordância Verbal e Nominal",
    theoryRef: "portugues-concordancia",
    statement: `Assinale a frase em que a concordância verbal atende integralmente à norma culta:`,
    options: [
      "Devem haver mecanismos automáticos de verificação de integridade no banco de dados.",
      "Mais de um analista e mais de um arquiteto discordou da decisão de descontinuar a API legada.",
      "Faziam três semanas que a equipe de operações monitorava a vulnerabilidade crítica de dia zero.",
      "Tratam-se de requisições de acesso administrativo com privilégios elevados que exigem autenticação multifator.",
      "A maior parte dos incidentes de segurança registrados em 2024 foram causados por falhas humanas de configuração."
    ],
    correctAnswer: 4, // E
    explanation: `Gabarito Oficial Comentado:
Alternativa E (CORRETA): Com expressões partitivas ("a maior parte de", "a maioria de", "grande número de") seguidas de substantivo no plural ("dos incidentes"), a norma gramatical admite a concordância tanto no singular (concordância lógica com o núcleo "a maior parte") quanto no plural (concordância atrativa com o adjunto "dos incidentes foram causados"). A frase é, portanto, perfeitamente válida e abonada pela banca FGV.

Erros das demais:
- A: "Haver" no sentido de existir é impessoal. O verbo auxiliar "dever" deve ficar obrigatoriamente no singular: "Deve haver mecanismos".
- B: A repetição da expressão "mais de um... e mais de um..." exige o verbo no plural ("discordaram").
- C: "Fazer" indicando tempo decorrido é impessoal: "Fazia três semanas".
- D: Em "Trata-se de...", o "se" é índice de indeterminação do sujeito; o verbo fica obrigatoriamente no singular na 3ª pessoa: "Trata-se de requisições".`
  },
  {
    id: 6,
    subject: "Língua Portuguesa",
    subtopic: "Pontuação e Estilo",
    theoryRef: "portugues-pontuacao",
    statement: `Assinale a alternativa em que a supressão da(s) vírgula(s) ALTERA o sentido original da oração, transformando uma explicação em uma restrição:`,
    options: [
      "Os técnicos, rapidamente, isolaram o segmento de rede infectado pelo malware.",
      "Os computadores da estatal, que não possuíam o patch de segurança instalado, foram temporariamente desconectados.",
      "No final do expediente de sexta-feira, os relatórios de auditoria foram devidamente despachados.",
      "A governança corporativa, por conseguinte, exige atualização permanente dos manuais de conformidade.",
      "Segundo os relatórios preliminares, a migração para a nova arquitetura reduziu os custos operacionais."
    ],
    correctAnswer: 1, // B
    explanation: `Gabarito Oficial Comentado:
Alternativa B (CORRETA): A oração "que não possuíam o patch de segurança instalado" é uma oração subordinada adjetiva explicativa quando isolada por vírgulas (indicando que TODOS os computadores da estatal estavam sem o patch e foram desconectados). Ao retirar as vírgulas, ela se torna adjetiva restritiva, alterando o sentido para: APENAS aqueles computadores específicos que não possuíam o patch foram desconectados.

As demais alternativas:
- A, C, E: Adjuntos adverbiais deslocados (a retirada da vírgula é mero ajuste estilístico/sintático, sem alterar classe da oração).
- D: Conjunção conclusiva explicativa interposta ("por conseguinte").`
  },
  {
    id: 7,
    subject: "Língua Portuguesa",
    subtopic: "Semântica e Polissemia (Estilo FGV)",
    theoryRef: "portugues-semantica",
    statement: `A FGV costuma explorar a sutil fronteira entre termos sinônimos no discurso administrativo. Assinale a opção em que a palavra destacada NÃO pode ser substituída pelo termo entre parênteses sem prejuízo semântico ao texto:`,
    options: [
      "O diretor reiterou (reafirmou) a urgência da contratação de ferramentas de observabilidade.",
      "As decisões do colegiado foram respaldadas (fundamentadas) por relatórios periciais independentes.",
      "O incidente acarretou (prescindiu) danos colaterais ao ecossistema de microsserviços.",
      "O plano de contingência prevê a mitigação (atenuação) dos riscos de indisponibilidade.",
      "O parecer jurídico considerou a medida consentânea (compatível) com a legislação vigente."
    ],
    correctAnswer: 2, // C
    explanation: `Gabarito Oficial Comentado:
Alternativa C (CORRETA): "Acarretar" significa provocar, ocasionar, trazer como consequência. Por outro lado, "prescindir" significa dispensar, abrir mão, desconsiderar (sentido quase oposto). A troca altera radicalmente e compromete o significado da sentença.

Nas opções A, B, D e E as substituições são sinônimos perfeitos no contexto culto formal.`
  },
  {
    id: 8,
    subject: "Língua Portuguesa",
    subtopic: "Tipologia e Gêneros Textuais",
    theoryRef: "portugues-tipologia",
    statement: `Analise o seguinte trecho:

"Para configurar o acesso VPN à rede corporativa da Dataprev, abra o cliente OpenVPN, importe o arquivo de perfil 'perfil_seguro.ovpn', insira sua credencial de rede com duplo fator e clique em 'Conectar'. Nunca compartilhe o arquivo de configuração com terceiros."

Quanto à tipologia textual predominante, trata-se de um texto:`,
    options: [
      "Predominantemente narrativo, com ênfase na progressão temporal de fatos reais.",
      "Injuntivo (instrucional), caracterizado por orientações procedimentais e verbos no imperativo.",
      "Dissertativo-argumentativo, estruturado para convencer o leitor mediante teses e contra-argumentos.",
      "Expositivo-didático, voltado unicamente à conceituação teórica de redes virtuais privadas.",
      "Descritivo estático, centrado no detalhamento físico e dimensional dos equipamentos de rede."
    ],
    correctAnswer: 1, // B
    explanation: `Gabarito Oficial Comentado:
Alternativa B (CORRETA): O texto possui caráter injuntivo/instrucional. Ele busca orientar e prescrever uma série de ações ao destinatário, utilizando verbos no modo imperativo ("abra", "importe", "insira", "clique", "não compartilhe"), característica típica de manuais técnicos e tutoriais operacionais.`
  },
  {
    id: 9,
    subject: "Língua Portuguesa",
    subtopic: "Paralelismo Sintático e Reescrita",
    theoryRef: "portugues-paralelismo",
    statement: `O paralelismo sintático exige que orações ou termos coordenados entre si apresentem estruturas gramaticais simétricas. Assinale a sentença que PRESERVA o paralelismo sintático:`,
    options: [
      "A diretoria recomendou a revisão dos custos operacionais e que se acelerasse a entrega do módulo previdenciário.",
      "O novo edital valoriza candidatos com fluência em linguagens modernas e que tenham experiência em nuvem.",
      "A equipe de governança buscou tanto padronizar as esteiras de deploy quanto automatizar os testes de regressão.",
      "Durante o workshop, foi debatido sobre segurança de dados e a importância do treinamento de colaboradores.",
      "O analista preferiu refatorar o código monolítico a participar das reuniões diárias."
    ],
    correctAnswer: 2, // C
    explanation: `Gabarito Oficial Comentado:
Alternativa C (CORRETA): A estrutura correlativa "tanto... quanto..." une duas orações coordenadas reduzidas de infinitivo estritamente simétricas: "padronizar as esteiras..." e "automatizar os testes...".

Falhas nas demais:
- A: Rompe o paralelismo ao coordenar um substantivo ("a revisão dos custos...") com uma oração desenvolvida subordinada substantiva ("e que se acelerasse...").
- B: Coordena um adjunto preposicionado ("com fluência...") com uma oração adjetiva ("e que tenham...").
- D: Mistura o regente com preposição ("debatido sobre...") e outro sem ("e a importância...").
- E: "Preferir" exige dois termos com a preposição "a": preferiu refatorar a participar (embora aceitável, a opção C é a clássica questão de FGV sobre correlação e simetria perfeita).`
  },
  {
    id: 10,
    subject: "Língua Portuguesa",
    subtopic: "Vozes Verbais e Agente da Passiva",
    theoryRef: "portugues-vozes",
    statement: `Transpondo a oração "A equipe de arquitetura projetou uma infraestrutura tolerante a falhas" para a VOZ PASSIVA ANALÍTICA, obtém-se:`,
    options: [
      "Projetou-se uma infraestrutura tolerante a falhas pela equipe de arquitetura.",
      "Uma infraestrutura tolerante a falhas foi projetada pela equipe de arquitetura.",
      "A equipe de arquitetura tinha projetado uma infraestrutura tolerante a falhas.",
      "Uma infraestrutura tolerante a falhas seria projetada pela equipe de arquitetura.",
      "Projetara-se uma infraestrutura tolerante a falhas pela equipe de arquitetura."
    ],
    correctAnswer: 1, // B
    explanation: `Gabarito Oficial Comentado:
Alternativa B (CORRETA):
- Sujeito ativo: "A equipe de arquitetura" -> torna-se agente da passiva ("pela equipe de arquitetura").
- Verbo ativo no pretérito perfeito do indicativo: "projetou" -> passa para o verbo auxiliar "ser" no pretérito perfeito ("foi") + particípio do verbo principal ("projetada").
- Objeto direto: "uma infraestrutura tolerante a falhas" -> torna-se sujeito paciente ("Uma infraestrutura tolerante a falhas foi projetada...").`
  },
  {
    id: 11,
    subject: "Língua Portuguesa",
    subtopic: "Figuras de Linguagem e Recursos Estilísticos",
    theoryRef: "portugues-figuras",
    statement: `No trecho: "O governo federal injetou mais cérebros na modernização dos serviços tecnológicos da previdência social", a figura de linguagem presente na palavra "cérebros" é classificada como:`,
    options: [
      "Metonímia (a parte pelo todo).",
      "Hipérbole (exagero intencional).",
      "Eufemismo (suavização de ideia desagradável).",
      "Prosopopeia (atribuição de qualidades humanas a seres inanimados).",
      "Antítese (aproximação de termos antagônicos)."
    ],
    correctAnswer: 0, // A
    explanation: `Gabarito Oficial Comentado:
Alternativa A (CORRETA): A palavra "cérebros" é utilizada para designar profissionais qualificados, pesquisadores ou especialistas intelectuais. Essa substituição da totalidade da pessoa por uma parte de seu corpo que simboliza o intelecto é um caso emblemático de Metonímia (sinédoque - a parte pelo todo).`
  },
  {
    id: 12,
    subject: "Língua Portuguesa",
    subtopic: "Ambiguidade e Clareza Redacional",
    theoryRef: "portugues-clareza",
    statement: `Assinale a frase redigida sem incorreções e livre de duplo sentido (ambiguidade):`,
    options: [
      "O auditor comunicou ao gerente que ele havia sido transferido para a filial de Brasília.",
      "O novo banco de dados superou as expectativas do cliente porque seu desempenho é notável.",
      "A analista encontrou a colega em sua sala de reunião logo após o término da apresentação.",
      "O sistema computacional bloqueou automaticamente o login do colaborador que violou a política de senhas.",
      "O coordenador elogiou o desenvolvedor pelo código que apresentou defeitos na homologação."
    ],
    correctAnswer: 3, // D
    explanation: `Gabarito Oficial Comentado:
Alternativa D (CORRETA): A oração é clara, objetiva e unívoca. O pronome relativo "que" refere-se imediatamente a "o colaborador", e a relação de causa e efeito está perfeitamente delimitada.

Erros de ambiguidade nas demais:
- A: "ele" pode se referir tanto ao auditor quanto ao gerente.
- B: "seu" pode ser o desempenho do banco de dados ou do cliente.
- C: "em sua sala" gera ambiguidade sobre de quem é a sala (da analista ou da colega).
- E: Estrutura incoerente e ambígua (elogiou por um código que apresentou defeitos?).`
  },

  // =========================================================================
  // BLOC 2: LÍNGUA INGLESA (Questões 13 a 24)
  // =========================================================================
  {
    id: 13,
    subject: "Língua Inglesa",
    subtopic: "Reading Comprehension - Cloud Architecture",
    theoryRef: "ingles-comprehension",
    statement: `Read the excerpt below:

"In a cloud-native paradigm, horizontal autoscaling dynamically provisions additional compute instances in response to surge in workload demands. Rather than over-provisioning peak-capacity hardware that remains idle during troughs, organizations embrace elastic compute to optimize cost efficiency and maintain sub-second response times for end consumers."

According to the text, the primary benefit of horizontal autoscaling is:`,
    options: [
      "Replacing all microservices with monolithic legacy mainframes.",
      "Guaranteeing that hardware resources always operate at maximum capacity during off-peak hours.",
      "Adjusting compute capacity dynamically to handle traffic fluctuations while optimizing financial resources.",
      "Eliminating the need for internet connectivity in public cloud infrastructure.",
      "Forcing cloud providers to subsidize the entire cost of network bandwidth."
    ],
    correctAnswer: 2, // C
    explanation: `Gabarito Oficial Comentado:
Alternativa C (CORRETA): O texto explicita que a escalabilidade horizontal ("horizontal autoscaling dynamically provisions additional compute instances in response to surge in workload demands") ajusta dinamicamente a capacidade e evita o desperdício de manter hardware ocioso ("Rather than over-provisioning peak-capacity hardware that remains idle during troughs"), otimizando custos e mantendo tempos de resposta rápidos.`
  },
  {
    id: 14,
    subject: "Língua Inglesa",
    subtopic: "Vocabulary & Technical Verbs",
    theoryRef: "ingles-vocabulary",
    statement: `In the sentence: "To mitigate data exfiltration risks, cybersecurity teams must enforce strict egress traffic inspection on all container pods", the verb MITIGATE is closest in meaning to:`,
    options: [
      "Alleviate or reduce",
      "Exacerbate or intensify",
      "Overlook or ignore",
      "Simulate or mimic",
      "Trigger or generate"
    ],
    correctAnswer: 0, // A
    explanation: `Gabarito Oficial Comentado:
Alternativa A (CORRETA): No vocabulário de cibersegurança e engenharia de software, "to mitigate" significa amenizar, atenuar, reduzir a probabilidade ou o impacto de um risco ("reduce or alleviate").
- B ("exacerbate") é antônimo (piorar).
- C ("overlook") significa ignorar.
- D ("simulate") significa simular.
- E ("trigger") significa disparar.`
  },
  {
    id: 15,
    subject: "Língua Inglesa",
    subtopic: "Discourse Markers and Linkers",
    theoryRef: "ingles-conectivos",
    statement: `Choose the connector that appropriately fills the blank expressing CONTRAST:

"The legacy batch process exhibited high throughput; __________, its inability to provide real-time updates rendered it inadequate for the new citizen-facing pension portal."`,
    options: [
      "Furthermore",
      "Consequently",
      "Nevertheless",
      "Likewise",
      "Namely"
    ],
    correctAnswer: 2, // C
    explanation: `Gabarito Oficial Comentado:
Alternativa C (CORRETA): "Nevertheless" (não obstante, contudo, todavia) expressa uma oposição/contraste entre o fato positivo anterior (alto throughput) e a limitação seguinte (incapacidade de atualização em tempo real).
- A ("Furthermore") expressa adição.
- B ("Consequently") expressa causa/consequência.
- D ("Likewise") expressa semelhança.
- E ("Namely") expressa especificação ("a saber").`
  },
  {
    id: 16,
    subject: "Língua Inglesa",
    subtopic: "Passive Voice in Technical Contexts",
    theoryRef: "ingles-passive",
    statement: `Consider the technical instruction: "All sensitive encryption keys ________ securely in dedicated Hardware Security Modules (HSMs) prior to cluster bootstrapping."

The grammatically correct passive voice form to complete the sentence is:`,
    options: [
      "must store",
      "must be stored",
      "must being store",
      "storing must",
      "has been store"
    ],
    correctAnswer: 1, // B
    explanation: `Gabarito Oficial Comentado:
Alternativa B (CORRETA): A voz passiva com verbo modal ("must") é estruturada pela fórmula: [MODAL + BE + PARTICÍPIO PASSADO]. Como as chaves sofrem a ação de serem armazenadas, o correto é: "must be stored" (devem ser armazenadas).`
  },
  {
    id: 17,
    subject: "Língua Inglesa",
    subtopic: "Modal Verbs & System Requirements",
    theoryRef: "ingles-modals",
    statement: `In the IEEE 830 / RFC 2119 standard for requirements specification, which modal verb denotes an ABSOLUTE MANDATORY requirement that a system must fulfill?`,
    options: [
      "SHALL",
      "MAY",
      "MIGHT",
      "COULD",
      "SHOULD"
    ],
    correctAnswer: 0, // A
    explanation: `Gabarito Oficial Comentado:
Alternativa A (CORRETA): Na RFC 2119 e nos padrões de especificação de software, "SHALL" e "MUST" denotam obrigatoriedade estrita e vinculante ("mandatory requirement").
- "SHOULD" indica uma recomendação (recomendado, mas não mandatório).
- "MAY", "COULD" e "MIGHT" indicam ações puramente opcionais ou permissivas.`
  },
  {
    id: 18,
    subject: "Língua Inglesa",
    subtopic: "Conditional Sentences (Zero Trust & Resilience)",
    theoryRef: "ingles-conditionals",
    statement: `Complete the conditional sentence correctly according to standard English grammar:

"If the database cluster ________ a heartbeat loss from the primary node for more than 5 seconds, it automatically ________ failover to the designated standby replica."`,
    options: [
      "detects / initiates",
      "will detect / initiate",
      "detected / will initiate",
      "had detected / initiates",
      "detecting / initiated"
    ],
    correctAnswer: 0, // A
    explanation: `Gabarito Oficial Comentado:
Alternativa A (CORRETA): Trata-se de uma Condicional do Tipo Zero (Zero Conditional), utilizada para leis gerais, verdades científicas ou comportamentos automáticos e determinísticos de sistemas de computação: [If + Simple Present, Simple Present]. Logo: "If the cluster detects... it automatically initiates...".`
  },
  {
    id: 19,
    subject: "Língua Inglesa",
    subtopic: "False Cognates in Technology",
    theoryRef: "ingles-false-cognates",
    statement: `In computing English, false cognates can induce severe misunderstandings. The word COMPREHENSIVE in "a comprehensive vulnerability assessment" means:`,
    options: [
      "Compreensivo (que demonstra empatia e tolerância emocional)",
      "Abrangente, minucioso e completo",
      "Compacto e sintetizado",
      "Comprimido por algoritmos de compressão gzip",
      "Temporário ou provisório"
    ],
    correctAnswer: 1, // B
    explanation: `Gabarito Oficial Comentado:
Alternativa B (CORRETA): "Comprehensive" é um falso amigo clássico. NÃO significa "compreensivo" (que em inglês é *understanding* ou *sympathetic*), mas sim amplo, detalhado, abrangente e completo (*thorough, complete, exhaustive*).`
  },
  {
    id: 20,
    subject: "Língua Inglesa",
    subtopic: "Technical Definitions - Microservices & SRE",
    theoryRef: "ingles-tech-definitions",
    statement: `In Site Reliability Engineering (SRE), LATENCY is best defined as:`,
    options: [
      "The total financial expenditure accrued from operating serverless computing instances.",
      "The duration of time it takes for a data packet or web request to travel from source to destination and return a response.",
      "The volume of concurrent users permitted to authenticate simultaneously on a single node.",
      "The percentage of storage capacity occupied by log files inside a database volume.",
      "The physical temperature generated by graphics processing units inside server racks."
    ],
    correctAnswer: 1, // B
    explanation: `Gabarito Oficial Comentado:
Alternativa B (CORRETA): Em computação e SRE, "latency" (latência) é o atraso ou tempo decorrido para que uma requisição/pacote viaje pela rede e receba uma resposta ("duration of time it takes for a request to travel from source to destination and return").`
  },
  {
    id: 21,
    subject: "Língua Inglesa",
    subtopic: "Pronoun Reference in Technical Texts",
    theoryRef: "ingles-pronouns",
    statement: `In the sentence: "The caching layer intercepts incoming queries, verifying whether THEIR requested payloads have already been stored in memory", the pronoun THEIR refers back to:`,
    options: [
      "The caching layer",
      "Incoming queries",
      "Requested payloads",
      "Memory sectors",
      "Security tokens"
    ],
    correctAnswer: 1, // B
    explanation: `Gabarito Oficial Comentado:
Alternativa B (CORRETA): O pronome possessivo plural "their" qualifica "requested payloads" (cargas úteis solicitadas) pertencentes a "incoming queries" (consultas recebidas). As consultas são quem possui ou solicita as respectivas cargas úteis.`
  },
  {
    id: 22,
    subject: "Língua Inglesa",
    subtopic: "Reading Comprehension - Zero Trust Architecture",
    theoryRef: "ingles-zerotrust",
    statement: `Read the paragraph below:

"The Zero Trust security model operates on the principle of 'never trust, always verify'. Unlike conventional perimeter-based network security, Zero Trust treats all communication requests as potentially malicious, requiring explicit continuous verification, least-privilege access, and automated threat mitigation regardless of whether the user is inside or outside the corporate firewall."

According to the text, Zero Trust:`,
    options: [
      "Assumes that all actors inside the internal network perimeter are inherently trustworthy.",
      "Relies entirely on passwords without requiring any secondary identity verification factor.",
      "Abandons the assumption of implicit trust based on network physical location.",
      "Disables logging mechanisms to prevent data storage overload.",
      "Restricts cryptographic mechanisms exclusively to wireless network devices."
    ],
    correctAnswer: 2, // C
    explanation: `Gabarito Oficial Comentado:
Alternativa C (CORRETA): O princípio central do modelo Zero Trust é que a localização de rede (estar dentro do firewall corporativo) não confere confiança implícita ("regardless of whether the user is inside or outside the corporate firewall"), abandonando o conceito de confiança perimetral tradicional.`
  },
  {
    id: 23,
    subject: "Língua Inglesa",
    subtopic: "Phrasal Verbs in Software Engineering",
    theoryRef: "ingles-phrasal-verbs",
    statement: `Which phrasal verb means "to introduce and deploy a new software version progressively to users"?`,
    options: [
      "Roll out",
      "Back down",
      "Give up",
      "Look down",
      "Run out"
    ],
    correctAnswer: 0, // A
    explanation: `Gabarito Oficial Comentado:
Alternativa A (CORRETA): "To roll out" significa lançar, disponibilizar ou implantar gradualmente um produto, funcionalidade ou sistema ("progressive software deployment").
- "Back down": recuar.
- "Give up": desistir.
- "Look down": desdenhar.
- "Run out": esgotar-se.`
  },
  {
    id: 24,
    subject: "Língua Inglesa",
    subtopic: "Technical Documentation Translation & Synthesis",
    theoryRef: "ingles-synthesis",
    statement: `Choose the alternative that accurately translates: "Fault tolerance ensures that a distributed system remains operational despite the unforeseen crash of arbitrary worker nodes."`,
    options: [
      "A tolerância a falhas garante que um sistema distribuído permaneça operacional a despeito do travamento imprevisto de nós de trabalho arbitrários.",
      "A tolerância a falhas exige que um sistema distribuído paralise suas operações após a quebra deliberada de nós principais.",
      "O sistema operacional distribuído tolera que nós de trabalho quebrem sem emitir notificações de rede.",
      "A tolerância a falhas impede que nós arbitrários acessem a memória do sistema quando há queda de energia.",
      "Sistemas distribuídos operam com lentidão imprevista toda vez que nós trabalhadores são inicializados."
    ],
    correctAnswer: 0, // A
    explanation: `Gabarito Oficial Comentado:
Alternativa A (CORRETA): A tradução é exata e precisa tecnicamente. "Despite" traduz-se como "a despeito de" ou "apesar de"; "unforeseen crash" corresponde a "travamento imprevisto" ou "falha não planejada"; e "worker nodes" a "nós de trabalho".`
  },

  // =========================================================================
  // BLOC 3: RACIOCÍNIO LÓGICO-MATEMÁTICO (Questões 25 a 30)
  // =========================================================================
  {
    id: 25,
    subject: "Raciocínio Lógico-Matemático",
    subtopic: "Negação de Proposições Compostas (Leis de De Morgan)",
    theoryRef: "rlm-de-morgan",
    statement: `Considere a proposição:

"Se o commit for validado pelo pipeline de testes, então o deploy será executado em produção."

A NEGAÇÃO LÓGICA dessa proposição condicional é dada por:`,
    options: [
      "Se o commit não for validado pelo pipeline de testes, então o deploy não será executado em produção.",
      "O commit é validado pelo pipeline de testes e o deploy não é executado em produção.",
      "O commit não é validado pelo pipeline de testes ou o deploy é executado em produção.",
      "Se o deploy for executado em produção, então o commit foi validado pelo pipeline de testes.",
      "O commit não é validado pelo pipeline de testes e o deploy não é executado em produção."
    ],
    correctAnswer: 1, // B
    explanation: `Gabarito Oficial Comentado:
Alternativa B (CORRETA):
A negação lógica de uma condicional da forma P -> Q segue a regra mnemônica clássica "MANÉ" (Mantém a primeira E Nega a segunda):
~(P -> Q) <=> P e ~Q.
Sendo:
P: "O commit é validado pelo pipeline de testes"
Q: "O deploy é executado em produção"
A negação é: "O commit é validado pelo pipeline de testes E o deploy NÃO é executado em produção".`
  },
  {
    id: 26,
    subject: "Raciocínio Lógico-Matemático",
    subtopic: "Equivalências Lógicas do Condicional",
    theoryRef: "rlm-equivalencias",
    statement: `Dizer que "Se um banco de dados é relacional, então ele suporta propriedades ACID" é LOGICAMENTE EQUIVALENTE a dizer que:`,
    options: [
      "Se um banco de dados suporta propriedades ACID, então ele é relacional.",
      "Se um banco de dados não suporta propriedades ACID, então ele não é relacional.",
      "Um banco de dados é relacional ou ele suporta propriedades ACID.",
      "Se um banco de dados não é relacional, então ele não suporta propriedades ACID.",
      "Ou o banco de dados é relacional, ou ele suporta propriedades ACID, mas não ambos."
    ],
    correctAnswer: 1, // B
    explanation: `Gabarito Oficial Comentado:
Alternativa B (CORRETA):
Uma condicional (P -> Q) possui duas equivalências lógicas fundamentais:
1. Contrapositiva: P -> Q <=> ~Q -> ~P (Inverte e nega ambas).
2. Disjuntiva: P -> Q <=> ~P ou Q.

Pela contrapositiva:
P: "O banco de dados é relacional"
Q: "Ele suporta propriedades ACID"
A contrapositiva é: "Se ele NÃO suporta propriedades ACID, então ele NÃO é relacional" (~Q -> ~P).`
  },
  {
    id: 27,
    subject: "Raciocínio Lógico-Matemático",
    subtopic: "Diagramas de Venn e Conjuntos",
    theoryRef: "rlm-conjuntos",
    statement: `Em uma equipe técnica da Dataprev com 60 colaboradores:
- 38 dominam a linguagem Java;
- 30 dominam a linguagem Python;
- 8 colaboradores não dominam nenhuma dessas duas linguagens.

O número de colaboradores dessa equipe que dominam SIMULTANEAMENTE as linguagens Java e Python é igual a:`,
    options: [
      "12",
      "14",
      "16",
      "18",
      "22"
    ],
    correctAnswer: 2, // C
    explanation: `Gabarito Oficial Comentado:
Alternativa C (CORRETA):
Total de colaboradores = 60.
Colaboradores que não dominam nenhuma = 8.
Portanto, a união dos conjuntos Java e Python é:
n(Java U Python) = 60 - 8 = 52.

Pela fórmula da união de dois conjuntos:
n(Java U Python) = n(Java) + n(Python) - n(Java ∩ Python)
52 = 38 + 30 - n(Java ∩ Python)
52 = 68 - n(Java ∩ Python)
n(Java ∩ Python) = 68 - 52 = 16.

Exatamente 16 colaboradores dominam ambas as linguagens.`
  },
  {
    id: 28,
    subject: "Raciocínio Lógico-Matemático",
    subtopic: "Princípio da Casa dos Pombos",
    theoryRef: "rlm-pombos",
    statement: `Um datacenter dispõe de 5 racks idênticos numerados de 1 a 5 para alocar 26 novos servidores físicos de missão crítica.

Com base exclusivamente no Princípio da Casa dos Pombos (Princípio das Gavetas de Dirichlet), é CORRETO afirmar com certeza absoluta que:`,
    options: [
      "Todos os 5 racks receberão exatamente a mesma quantidade de servidores.",
      "Pelo menos um rack receberá 6 ou mais servidores.",
      "Nenhum rack receberá mais de 5 servidores.",
      "O rack número 1 necessariamente receberá a maior quantidade de servidores.",
      "Haverá exatamente um rack com 2 servidores."
    ],
    correctAnswer: 1, // B
    explanation: `Gabarito Oficial Comentado:
Alternativa B (CORRETA):
Pelo Princípio da Casa dos Pombos generalizado:
Se dividirmos 26 servidores (pombos) por 5 racks (casas):
26 / 5 = 5 com resto 1.
Se cada um dos 5 racks recebesse no máximo 5 servidores, teríamos 5 * 5 = 25 servidores alocados.
Como há 26 servidores, pelo menos um rack obrigatoriamente terá que receber no mínimo 5 + 1 = 6 servidores.`
  },
  {
    id: 29,
    subject: "Raciocínio Lógico-Matemático",
    subtopic: "Análise Combinatória",
    theoryRef: "rlm-combinatoria",
    statement: `Para compor uma comissão avaliadora de segurança cibernética na Dataprev, devem ser escolhidos 3 especialistas entre um grupo de 8 analistas disponíveis.

De quantas maneiras distintas essa comissão de 3 membros pode ser formada?`,
    options: [
      "24",
      "56",
      "120",
      "336",
      "512"
    ],
    correctAnswer: 1, // B
    explanation: `Gabarito Oficial Comentado:
Alternativa B (CORRETA):
Como a ordem dos membros escolhidos dentro da comissão não altera a comissão (escolher {A, B, C} é o mesmo que {C, B, A}), trata-se de uma Combinação Simples de 8 elementos tomados 3 a 3:
C(8, 3) = 8! / [3! * (8 - 3)!]
C(8, 3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56 maneiras distintas.`
  },
  {
    id: 30,
    subject: "Raciocínio Lógico-Matemático",
    subtopic: "Probabilidade Clássica e Condicional",
    theoryRef: "rlm-probabilidade",
    statement: `Em um lote com 100 discos de estado sólido (SSDs) recém-adquiridos para um cluster de armazenamento, sabe-se que 6 apresentam defeito de fabricação.

Se 2 SSDs forem retirados sucessivamente e ao acaso, SEM reposição, a probabilidade de que AMBOS os discos retirados apresentem defeito de fabricação é:`,
    options: [
      "1 / 330",
      "3 / 500",
      "3 / 100",
      "1 / 165",
      "6 / 1000"
    ],
    correctAnswer: 0, // A
    explanation: `Gabarito Oficial Comentado:
Alternativa A (CORRETA):
- Probabilidade de o 1º disco ser defeituoso: P(1º defeituoso) = 6 / 100.
- Como a retirada é SEM reposição, restam 99 discos no lote e 5 defeituosos.
- Probabilidade de o 2º disco ser defeituoso dado que o 1º foi: P(2º defeituoso | 1º) = 5 / 99.
- Probabilidade de ambos serem defeituosos:
P = (6 / 100) * (5 / 99) = 30 / 9900 = 3 / 990 = 1 / 330.`
  },

  // =========================================================================
  // BLOC 4: ATUALIDADES (Questões 31 a 35)
  // =========================================================================
  {
    id: 31,
    subject: "Atualidades",
    subtopic: "Transformação Digital e Governo Eletrônico",
    theoryRef: "atualidades-governo-digital",
    statement: `No contexto da modernização dos serviços públicos e da atuação da Dataprev, o avanço da plataforma Gov.br e da Estratégia de Governo Digital no Brasil tem como objetivo central:`,
    options: [
      "Centralizar e unificar o acesso aos serviços públicos digitais sob uma identidade digital cidadã única, segura e interoperável.",
      "Privatizar a totalidade dos bancos de dados governamentais transferindo a custódia a empresas multinacionais estrangeiras.",
      "Restringir a consulta a benefícios previdenciários e assistenciais exclusivamente a totens físicos instalados nas capitais.",
      "Substituir todos os servidores públicos federais por assistentes virtuais baseados em IA sem supervisão humana.",
      "Extinguir a exigência de identificação civil para qualquer solicitação de aposentadoria ou pensão."
    ],
    correctAnswer: 0, // A
    explanation: `Gabarito Oficial Comentado:
Alternativa A (CORRETA): A Estratégia Federal de Governo Digital e a plataforma gov.br visam à desburocratização, integração de sistemas, simplificação e unificação do acesso do cidadão aos serviços públicos federais com segurança, autenticação robusta (níveis Bronze, Prata e Ouro) e interoperabilidade entre bases.`
  },
  {
    id: 32,
    subject: "Atualidades",
    subtopic: "Inteligência Artificial e Ética no Setor Público",
    theoryRef: "atualidades-ia-etica",
    statement: `O uso crescente de algoritmos de Inteligência Artificial para análise e concessão de benefícios sociais e previdenciários impõe rigorosos debates éticos. O principal risco regulatório e social que a administração pública busca mitigar nesse contexto é:`,
    options: [
      "A total eliminação do consumo energético nos datacenters governamentais.",
      "A reprodução e amplificação de vieses algorítmicos históricos que levem à discriminação e exclusão de parcelas vulneráveis da sociedade.",
      "A necessidade de utilizar exclusivamente linguagens de programação de código fechado e proprietárias.",
      "O excesso de transparência que possa inviabilizar o processamento em lote de solicitações simples.",
      "A obrigatoriedade de conectar todos os modelos preditivos diretamente a redes sociais públicas."
    ],
    correctAnswer: 1, // B
    explanation: `Gabarito Oficial Comentado:
Alternativa B (CORRETA): Em sistemas de IA aplicados a políticas públicas, o risco crítico reside no viés algorítmico (algorithmic bias), no qual dados históricos enviesados treinam modelos que perpetuam discriminações injustas contra minorias ou populações vulneráveis, colidindo com os princípios constitucionais da isonomia e da publicidade.`
  },
  {
    id: 33,
    subject: "Atualidades",
    subtopic: "Inclusão Sociodigital e Previdência",
    theoryRef: "atualidades-inclusao",
    statement: `A despeito dos avanços em serviços digitais como o 'Meu INSS', estudos socioeconômicos apontam a 'brecha digital' (digital divide) como desafio à plena cidadania. Para assegurar o princípio da universalidade do atendimento público, recomenda-se que as estatais de TI:`,
    options: [
      "Encerrem sumariamente todos os canais de atendimento telefônico e balcões presenciais.",
      "Adotem estratégias multicanal (omnichannel), mantendo suporte assistido e alternativas presenciais integradas para os excluídos digitais.",
      "Exijam certificação digital paga (e-CPF) como requisito mandatório prévio para qualquer cidadão acessar benefícios.",
      "Transfiram o custeio de dispositivos móveis para as instituições financeiras credenciadas.",
      "Cobrem tarifas de serviço proporcionais à complexidade da requisição previdenciária."
    ],
    correctAnswer: 1, // B
    explanation: `Gabarito Oficial Comentado:
Alternativa B (CORRETA): A inclusão sociodigital no setor público preconiza que a transformação digital não pode ser excludente. O Estado deve adotar modelo multicanal, garantindo atendimento presencial humanizado e canais telefônicos (como a Central 135) para cidadãos sem acesso à internet ou sem letramento digital.`
  },
  {
    id: 34,
    subject: "Atualidades",
    subtopic: "Soberania de Dados e Infraestruturas Críticas",
    theoryRef: "atualidades-soberania-dados",
    statement: `A soberania de dados e a segurança de infraestruturas críticas nacionais envolvem a salvaguarda de dados previdenciários e fiscais de milhões de brasileiros. No desenho de arquiteturas de nuvem governamentais, essa preocupação se traduz prioritariamente por:`,
    options: [
      "Hospedar todas as bases de dados governamentais em servidores situados em jurisdições sem acordos diplomáticos com o Brasil.",
      "Implementar modelos de nuvem soberana (nuvem de governo ou nuvem privada/híbrida) sob jurisdição legal brasileira e conformidade com normas do GSI/PR.",
      "Permitir que operadores terceirizados comercializem metadados anonimizados para compensar custos de hospedagem.",
      "Abandonar rotinas de criptografia em repouso para acelerar a indexação de bases públicas.",
      "Eliminar cópias de segurança em datacenters geograficamente distribuídos."
    ],
    correctAnswer: 1, // B
    explanation: `Gabarito Oficial Comentado:
Alternativa B (CORRETA): A soberania de dados no contexto de estatais como a Dataprev exige que dados sensíveis dos cidadãos fiquem sujeitos à jurisdição da legislação brasileira, com controle estrito sobre acesso, residência de dados e adesão aos padrões e normas do Gabinete de Segurança Institucional da Presidência da República (GSI/PR).`
  },
  {
    id: 35,
    subject: "Atualidades",
    subtopic: "Cadastro Único e Interoperabilidade",
    theoryRef: "atualidades-cadunico",
    statement: `O Cadastro Único para Programas Sociais do Governo Federal (CadÚnico) e o Cadastro Nacional de Informações Sociais (CNIS), operados tecnologicamente pela Dataprev, exemplificam o conceito de interoperabilidade de dados governamentais cujo principal efeito prático é:`,
    options: [
      "Permitir o cruzamento automatizado de bases públicas para conceder ou auditar benefícios com maior precisão e redução de fraudes.",
      "Impedir que ministérios compartilhem informações orçamentárias entre si.",
      "Exigir que o cidadão apresente certidões em papel autenticadas em cartório a cada nova solicitação de benefício.",
      "Substituir o número de CPF por um código alfanumérico rotativo gerado a cada 30 dias.",
      "Vincular o recebimento de pensões à aquisição de títulos da dívida pública."
    ],
    correctAnswer: 0, // A
    explanation: `Gabarito Oficial Comentado:
Alternativa A (CORRETA): A interoperabilidade das bases (como CNIS e CadÚnico) permite o cruzamento ágil e automatizado de vínculos de trabalho, renda e composição familiar. Isso qualifica o processo de concessão, evita pagamentos indevidos, combate fraudes e desonera o cidadão de comprovar dados que o próprio Estado já detém (princípio do "Once-Only").`
  },

  // =========================================================================
  // BLOC 5: LEGISLAÇÃO DE SEGURANÇA E PROTEÇÃO DE DADOS (Questões 36 a 40)
  // =========================================================================
  {
    id: 36,
    subject: "Legislação & Proteção de Dados",
    subtopic: "LGPD - Princípios Fundamentais (Art. 6º)",
    theoryRef: "leg-lgpd-principios",
    statement: `A Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018), em seu art. 6º, estabelece os princípios que devem nortear as atividades de tratamento de dados pessoais.

O princípio segundo o qual o tratamento de dados pessoais deve ser limitado ao MÍNIMO NECESSÁRIO para a realização de suas finalidades, com abrangência dos dados pertinentes, proporcionais e não excessivos, denomina-se:`,
    options: [
      "Finalidade",
      "Adequação",
      "Necessidade",
      "Livre acesso",
      "Responsabilização e prestação de contas"
    ],
    correctAnswer: 2, // C
    explanation: `Gabarito Oficial Comentado:
Alternativa C (CORRETA):
Conforme o Art. 6º, inciso III da LGPD:
- "Necessidade: limitação do tratamento ao mínimo necessário para a realização de suas finalidades, com abrangência dos dados pertinentes, proporcionais e não excessivos em relação às finalidades do tratamento de dados (minimização de dados)."
Distinções importantes:
- Finalidade: realização do tratamento para propósitos legítimos, específicos e informados.
- Adequação: compatibilidade do tratamento com as finalidades informadas.
- Livre acesso: garantia aos titulares de consulta facilitada e gratuita sobre a forma e a duração do tratamento.`
  },
  {
    id: 37,
    subject: "Legislação & Proteção de Dados",
    subtopic: "LGPD - Dados Sensíveis e Bases Legais (Arts. 7º e 11)",
    theoryRef: "leg-lgpd-bases",
    statement: `De acordo com a Lei nº 13.709/2018 (LGPD), assinale a opção que indica um DADO PESSOAL SENSÍVEL:`,
    options: [
      "Endereço de e-mail institucional corporativo.",
      "Número de inscrição no Cadastro de Pessoas Físicas (CPF).",
      "Dado referente à filiação a sindicato ou a organização de caráter religioso.",
      "Número de telefone celular de contato comercial.",
      "Remuneração mensal e cargo ocupado em órgão público."
    ],
    correctAnswer: 2, // C
    explanation: `Gabarito Oficial Comentado:
Alternativa C (CORRETA):
Nos termos do Art. 5º, inciso II da LGPD, dado pessoal sensível é expressamente definido como:
"dado pessoal sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural."
CPF, e-mail, telefone e remuneração são dados pessoais comuns (não sensíveis na definição legal).`
  },
  {
    id: 38,
    subject: "Legislação & Proteção de Dados",
    subtopic: "LGPD - Agentes de Tratamento e Encarregado (DPO)",
    theoryRef: "leg-lgpd-agentes",
    statement: `No tocante aos agentes de tratamento de dados e ao encarregado previstos na LGPD, assinale a afirmativa CORRETA:`,
    options: [
      "O Encarregado (DPO) deve responder com seu patrimônio pessoal solidariamente por qualquer incidente de vazamento de dados ocorrido na empresa.",
      "O Operador é a pessoa natural ou jurídica a quem competem as decisões fundamentais referentes ao tratamento de dados pessoais.",
      "O Encarregado atua como canal de comunicação entre o controlador, os titulares dos dados e a Autoridade Nacional de Proteção de Dados (ANPD).",
      "A administração pública federal está dispensada da indicação de Encarregado de proteção de dados.",
      "O Controlador realiza o tratamento de dados exclusivamente em nome e por conta e risco do Operador."
    ],
    correctAnswer: 2, // C
    explanation: `Gabarito Oficial Comentado:
Alternativa C (CORRETA):
Segundo o Art. 41 da LGPD, o Encarregado pelo tratamento de dados pessoais (DPO) atua como canal de comunicação entre o controlador, os titulares dos dados e a Autoridade Nacional de Proteção de Dados (ANPD), além de orientar os funcionários sobre boas práticas de privacidade.

Erros das demais:
- A: O encarregado não responde solidariamente com seu patrimônio pelos danos (a responsabilidade é do controlador e/ou operador).
- B: Quem toma as decisões é o CONTROLADOR, e não o operador.
- D: Órgãos e entidades públicas são OBRIGADOS a indicar encarregado.
- E: É o Operador que realiza o tratamento em nome do Controlador, e não o inverso.`
  },
  {
    id: 39,
    subject: "Legislação & Proteção de Dados",
    subtopic: "Marco Civil da Internet (Lei nº 12.965/2014)",
    theoryRef: "leg-marco-civil",
    statement: `O Marco Civil da Internet (Lei nº 12.965/2014) regulamenta a guarda e o fornecimento de registros de conexão e de aplicações de internet.

Em relação à guarda de registros de conexão (IP, data e hora de início e término), a lei impõe aos administradores de sistema autônomo (provedores de conexão) a obrigação de mantê-los sob sigilo e em ambiente controlado pelo prazo de:`,
    options: [
      "30 dias.",
      "6 meses.",
      "1 ano.",
      "5 anos.",
      "Indefinidamente, sem possibilidade de expurgo."
    ],
    correctAnswer: 2, // C
    explanation: `Gabarito Oficial Comentado:
Alternativa C (CORRETA):
Atenção à clássica distinção cobrada pela FGV no Marco Civil da Internet:
- Registros de CONEXÃO (Art. 13): devem ser guardados pelo provedor de conexão pelo prazo de 1 (UM) ANO.
- Registros de ACESSO A APLICAÇÕES de internet (Art. 15): devem ser guardados pelos provedores de aplicação comerciais pelo prazo de 6 (SEIS) MESES.`
  },
  {
    id: 40,
    subject: "Legislação & Proteção de Dados",
    subtopic: "Lei de Acesso à Informação (LAI - Lei nº 12.527/2011)",
    theoryRef: "leg-lai",
    statement: `Nos termos da Lei de Acesso à Informação (LAI - Lei nº 12.527/2011), as informações públicas sob a custódia do Estado podem ter seu acesso temporariamente restringido mediante classificação nos graus ultrassecreto, secreto e reservado.

Os prazos MÁXIMOS de restrição de acesso para cada um desses graus são, respectivamente:`,
    options: [
      "10 anos, 5 anos e 2 anos.",
      "25 anos, 15 anos e 5 anos.",
      "30 anos, 20 anos e 10 anos.",
      "50 anos, 25 anos e 10 anos.",
      "15 anos, 10 anos e 5 anos."
    ],
    correctAnswer: 1, // B
    explanation: `Gabarito Oficial Comentado:
Alternativa B (CORRETA):
Conforme o Art. 24, § 1º da Lei nº 12.527/2011 (LAI):
Os prazos máximos de restrição de acesso vigoram a partir da data de produção do documento:
I - Ultrassecreta: até 25 anos;
II - Secreta: até 15 anos;
III - Reservada: até 5 anos.
(Mnemônico clássico: 25 - 15 - 5).`
  },

  // =========================================================================
  // BLOC 6: CONHECIMENTOS ESPECÍFICOS DE TI (Questões 41 a 70)
  // =========================================================================
  {
    id: 41,
    subject: "Conhecimentos Específicos de TI",
    subtopic: "Engenharia de Software - Princípios SOLID",
    theoryRef: "esp-solid",
    statement: `Um desenvolvedor sênior na Dataprev refatorou uma classe que realizava simultaneamente a validação dos dados de um benefício, o cálculo do valor financeiro, a persistência no banco de dados e a geração do comprovante em formato PDF.

Ao decompor essa classe em quatro classes menores e especializadas, o desenvolvedor aplicou com precisão o princípio:`,
    options: [
      "Open/Closed Principle (OCP)",
      "Single Responsibility Principle (SRP)",
      "Liskov Substitution Principle (LSP)",
      "Interface Segregation Principle (ISP)",
      "Dependency Inversion Principle (DIP)"
    ],
    correctAnswer: 1, // B
    explanation: `Gabarito Oficial Comentado:
Alternativa B (CORRETA):
O Princípio da Responsabilidade Única (SRP - Single Responsibility Principle), formulado por Robert C. Martin (Uncle Bob), preceitua que: "Uma classe deve ter apenas um, e somente um, motivo para mudar". Ao separar a persistência, o cálculo, a validação e a formatação do PDF em classes distintas, garantiu-se que cada componente possua apenas uma única responsabilidade coesa.`
  },
  {
    id: 42,
    subject: "Conhecimentos Específicos de TI",
    subtopic: "Padrões de Projeto GoF - Padrões de Criação",
    theoryRef: "esp-gof-criacao",
    statement: `No desenvolvimento de um subsistema de mensageria da Dataprev, é imperativo garantir que exista exatamente UMA ÚNICA INSTÂNCIA de uma classe de conexão com o broker durante todo o ciclo de vida da aplicação, fornecendo um ponto de acesso global a ela.

O padrão de projeto de criação do GoF indicado para esse cenário é o:`,
    options: [
      "Factory Method",
      "Abstract Factory",
      "Singleton",
      "Builder",
      "Prototype"
    ],
    correctAnswer: 2, // C
    explanation: `Gabarito Oficial Comentado:
Alternativa C (CORRETA):
O padrão Singleton (GoF) tem por propósito:
"Garantir que uma classe tenha apenas uma instância e fornecer um ponto de acesso global para ela". Isso é tradicionalmente implementado com um construtor privado, uma variável estática interna guardando a instância e um método público estático (ex.: 'getInstance()').`
  },
  {
    id: 43,
    subject: "Conhecimentos Específicos de TI",
    subtopic: "Padrões de Projeto GoF - Padrões Estruturais",
    theoryRef: "esp-gof-estruturais",
    statement: `Um novo módulo de folha de pagamento precisa interagir com um serviço legado de cálculo de alíquotas que possui uma interface incompatível com a arquitetura moderna adotada pela Dataprev. Não é viável alterar o código do serviço legado.

Qual padrão estrutural do GoF permite converter a interface da classe legada na interface esperada pelos clientes modernos, permitindo que classes com interfaces incompatíveis trabalhem juntas?`,
    options: [
      "Adapter",
      "Decorator",
      "Composite",
      "Flyweight",
      "Proxy"
    ],
    correctAnswer: 0, // A
    explanation: `Gabarito Oficial Comentado:
Alternativa A (CORRETA):
O padrão Adapter (também conhecido como Wrapper) do GoF converte a interface de uma classe em outra interface esperada pelos clientes. O Adapter permite que classes trabalhem em conjunto mesmo que possuam interfaces incompatíveis que, de outro modo, não poderiam interagir.`
  },
  {
    id: 44,
    subject: "Conhecimentos Específicos de TI",
    subtopic: "Padrões de Projeto GoF - Padrões Comportamentais",
    theoryRef: "esp-gof-comportamentais",
    statement: `Em um mecanismo de cálculo de concessão de aposentadoria, existem diferentes regras de transição (Pedágio 50%, Pedágio 100%, Pontos, Idade Mínima). A aplicação deve permitir que esses algoritmos de cálculo variem independentemente dos clientes que os utilizam, podendo ser intercambiados em tempo de execução.

O padrão comportamental que encapsula cada família de algoritmos em classes separadas e as torna intercambiáveis é o:`,
    options: [
      "Observer",
      "Strategy",
      "Command",
      "State",
      "Template Method"
    ],
    correctAnswer: 1, // B
    explanation: `Gabarito Oficial Comentado:
Alternativa B (CORRETA):
O padrão Strategy (GoF) define uma família de algoritmos, encapsula cada um deles e os torna intercambiáveis. O Strategy permite que o algoritmo varie independentemente dos clientes que o utilizam, eliminando longas estruturas condicionais ('switch-case' ou 'if-else') e aderindo ao princípio Open/Closed.`
  },
  {
    id: 45,
    subject: "Conhecimentos Específicos de TI",
    subtopic: "Arquitetura de Microsserviços e DDD",
    theoryRef: "esp-microsservicos",
    statement: `Na decomposição de uma aplicação monolítica legada para arquitetura de microsserviços orientada a Domain-Driven Design (DDD), a fronteira lógica e conceitual na qual um modelo de domínio específico é aplicável e seus termos possuem significado inequívoco e delimitado é denominada:`,
    options: [
      "Shared Kernel",
      "Bounded Context (Contexto Delimitado)",
      "Anticorruption Layer",
      "Ubiquitous Database",
      "Service Mesh Boundary"
    ],
    correctAnswer: 1, // B
    explanation: `Gabarito Oficial Comentado:
Alternativa B (CORRETA):
No DDD (Domain-Driven Design), de Eric Evans, um Bounded Context (Contexto Delimitado) é a fronteira explícita dentro da qual um modelo de domínio é aplicável. Dentro desse limite, cada conceito e termo da Linguagem Ubíqua tem um significado exato e consistente, sendo a unidade ideal para guiar a delimitação de um microsserviço.`
  },
  {
    id: 46,
    subject: "Conhecimentos Específicos de TI",
    subtopic: "Transações Distribuídas e Padrão Saga",
    theoryRef: "esp-saga-pattern",
    statement: `Em uma arquitetura de microsserviços onde transações ACID globais de duas fases (2PC - Two-Phase Commit) são desaconselhadas devido a gargalos de latência e acoplamento, a integridade dos dados entre serviços ao longo de uma transação de negócios que engloba múltiplos serviços é tipicamente gerenciada pelo:`,
    options: [
      "Padrão Saga (por orquestração ou coreografia), utilizando transações locais e transações compensatórias em caso de falha.",
      "Padrão Active-Active Replication com bloqueio distribuído em tempo de leitura.",
      "Uso de triggers automáticos no banco relacional mestre acoplados via rede física.",
      "Bloqueio pessimista de tabelas em todos os bancos simultaneamente até o commit final.",
      "Padrão Singleton Distribuído baseado em sincronização de mutex de sistema operacional."
    ],
    correctAnswer: 0, // A
    explanation: `Gabarito Oficial Comentado:
Alternativa A (CORRETA):
O Padrão Saga é a solução padrão para transações distribuídas em microsserviços. Ele executa uma sequência de transações locais em cada serviço. Se uma etapa falhar, o Saga aciona uma série de transações compensatórias (compensating transactions) que desfazem as alterações efetuadas pelas etapas anteriores, garantindo a consistência eventual sem bloquear recursos.`
  },
  {
    id: 47,
    subject: "Conhecimentos Específicos de TI",
    subtopic: "Resiliência em Microsserviços - Circuit Breaker",
    theoryRef: "esp-circuit-breaker",
    statement: `O padrão de estabilidade e resiliência Circuit Breaker (Disjuntor) possui três estados principais de operação. Quando a taxa de falhas consecutivas em requisições a um serviço externo ultrapassa um limiar predefinido, o disjuntor transita para o estado:`,
    options: [
      "FECHADO (Closed), encaminhando todas as chamadas normalmente.",
      "ABERTO (Open), falhando imediatamente as chamadas subsequentes sem sobrecarregar o serviço com falha.",
      "SEMI-ABERTO (Half-Open), recusando qualquer nova requisição de teste.",
      "BLOQUEADO (Locked), reiniciando o pod automaticamente via Kubernetes.",
      "ISOLADO (Quarantined), apagando os registros do banco de dados de cache."
    ],
    correctAnswer: 1, // B
    explanation: `Gabarito Oficial Comentado:
Alternativa B (CORRETA):
Estados do Circuit Breaker:
- CLOSED (Fechado): Estado normal, requisições passam livremente.
- OPEN (Aberto): Quando o número de falhas atinge o limite de erro, o circuito se abre. Todas as requisições falham imediatamente (Fast Fail) ou vão para um fallback, sem tentar chamar o serviço com falha, permitindo que ele se recupere.
- HALF-OPEN (Semiaberto): Após um tempo de espera, permite a passagem de um número limitado de requisições de teste para verificar se o serviço se recuperou.`
  },
  {
    id: 48,
    subject: "Conhecimentos Específicos de TI",
    subtopic: "APIs RESTful e Códigos HTTP",
    theoryRef: "esp-rest-http",
    statement: `No desenho de APIs RESTful, a IDEMPOTÊNCIA significa que múltiplas requisições idênticas consecutivas produzem o mesmo efeito no estado do servidor que uma única requisição.

Assinale a opção que apresenta um método HTTP estritamente IDEMPOTENTE:`,
    options: [
      "POST",
      "PUT",
      "PATCH (quando usado para operações de incremento relativo)",
      "CONNECT",
      "PROPFIND"
    ],
    correctAnswer: 1, // B
    explanation: `Gabarito Oficial Comentado:
Alternativa B (CORRETA):
Na especificação RFC 7231 e 9110 do protocolo HTTP:
- Métodos Idempotentes: GET, HEAD, PUT, DELETE, OPTIONS, TRACE. Fazer uma requisição PUT com o mesmo payload 1 vez ou 10 vezes resultará no mesmo estado final do recurso no servidor.
- Métodos Não Idempotentes: POST (cada envio cria um novo recurso subordinado diferente).`
  },
  {
    id: 49,
    subject: "Conhecimentos Específicos de TI",
    subtopic: "Java e Spring Boot - Inversão de Controle e Anotações",
    theoryRef: "esp-spring-boot",
    statement: `No framework Spring Boot, a anotação utilizada para indicar que uma classe é um componente especializado na camada de acesso e persistência a dados (geralmente DAO/Repositório), habilitando a tradução automática de exceções nativas de persistência para a hierarquia do Spring, é:`,
    options: [
      "@Component",
      "@Controller",
      "@Service",
      "@Repository",
      "@Configuration"
    ],
    correctAnswer: 3, // D
    explanation: `Gabarito Oficial Comentado:
Alternativa D (CORRETA):
No ecossistema Spring:
- @Repository: estereótipo especializado para a camada de persistência/acesso a dados. Além de registrar o bean no container IoC, habilita a tradução automática de exceções de banco de dados (PersistenceExceptionTranslationPostProcessor).
- @Service: camada de regras de negócio.
- @Controller / @RestController: camada web/endpoints.
- @Configuration: classes de configuração de beans.`
  },
  {
    id: 50,
    subject: "Conhecimentos Específicos de TI",
    subtopic: "JPA / Hibernate e Desempenho (Problema N+1)",
    theoryRef: "esp-jpa-hibernate",
    statement: `Em aplicações Java com JPA e Hibernate, o problema de desempenho conhecido como 'Consulta N+1' (N+1 Query Problem) ocorre tipicamente quando:`,
    options: [
      "O banco de dados excede o limite de conexões ativas no pool HikariCP.",
      "A aplicação carrega uma lista de N entidades principais e, em seguida, dispara N consultas SQL adicionais separadas para carregar os relacionamentos de cada uma dessas entidades.",
      "O identificador de chave primária gerado por SEQUENCE atinge o limite máximo de um tipo INTEGER.",
      "A transação é finalizada com rollback devido a um timeout de rede na conexão JDBC.",
      "O Hibernate bloqueia N threads simultâneas devido a um deadlock em nível de linha."
    ],
    correctAnswer: 1, // B
    explanation: `Gabarito Oficial Comentado:
Alternativa B (CORRETA):
O problema N+1 ocorre quando a aplicação executa 1 consulta inicial para buscar uma coleção de N registros e, para cada um dos N registros obtidos, executa mais 1 consulta subordinada para buscar os relacionamentos associados (geralmente associado a Lazy Loading ou chamadas sem 'JOIN FETCH'). O total de consultas geradas é 1 + N, degradando drasticamente o desempenho. Resolve-se com 'JOIN FETCH', EntityGraphs ou BatchSize.`
  },
  {
    id: 51,
    subject: "Conhecimentos Específicos de TI",
    subtopic: "DevOps & Docker - Dockerfile e Multi-Stage Build",
    theoryRef: "esp-docker-build",
    statement: `Para gerar imagens de contêiner Docker leves, seguras e com superfície de ataque mínima para produção, a melhor prática recomendada que permite compilar o código em um estágio rico em SDK e ferramentas, copiando para a imagem final apenas o artefato binário executável e um runtime mínimo, é:`,
    options: [
      "O uso de Multi-Stage Builds (construção em múltiplos estágios) com múltiplas instruções FROM.",
      "A inserção de instruções apt-get install de todos os compiladores na camada final da imagem.",
      "A execução do contêiner com o privilégio root e modo --privileged habilitado.",
      "O armazenamento permanente das credenciais de compilação em variáveis de ambiente ENV na imagem.",
      "A inclusão do código-fonte completo e da pasta .git dentro do contêiner de produção."
    ],
    correctAnswer: 0, // A
    explanation: `Gabarito Oficial Comentado:
Alternativa A (CORRETA):
O Multi-Stage Build permite separar o ambiente de build (onde são necessários compiladores pesados, maven, gradle, gcc) do ambiente de execução de produção. Na imagem final, usa-se uma imagem base enxuta (como Alpine ou Distroless) e copia-se apenas o binário/jar compilado (usando 'COPY --from=build-stage'), reduzindo o tamanho de gigabytes para dezenas de megabytes e eliminando ferramentas de compilação que representam vulnerabilidade.`
  },
  {
    id: 52,
    subject: "Conhecimentos Específicos de TI",
    subtopic: "Docker - Volumes e Persistência",
    theoryRef: "esp-docker-volumes",
    statement: `No Docker, qual mecanismo de persistência é totalmente GERENCIADO pelo próprio Docker, isolado da estrutura de diretórios do host e recomendado como a forma padrão para persistir dados gerados por contêineres em ambientes de produção?`,
    options: [
      "Bind Mounts",
      "Named Volumes (Volumes Nomeados)",
      "tmpfs Mounts",
      "UnionFS Layers voláteis",
      "Loopback Devices"
    ],
    correctAnswer: 1, // B
    explanation: `Gabarito Oficial Comentado:
Alternativa B (CORRETA):
Os Volumes Nomeados (Named Volumes) são criados e gerenciados integralmente pelo Docker (armazenados em '/var/lib/docker/volumes/' no Linux). Eles não dependem da estrutura de pastas do sistema hospedeiro, facilitam backup e migração, e são a estratégia recomendada para produção.
- Bind Mounts dependem da estrutura exata de caminhos do host.
- tmpfs mounts persistem apenas na memória RAM (voláteis).`
  },
  {
    id: 53,
    subject: "Conhecimentos Específicos de TI",
    subtopic: "Kubernetes - Conceitos Fundamentais e Pods",
    theoryRef: "esp-k8s-conceitos",
    statement: `No Kubernetes (K8s), a MENOR unidade básica computacional que pode ser criada, implantada e gerenciada no cluster, representando uma ou mais instâncias de contêineres fortemente acoplados que compartilham o mesmo namespace de rede e volumes de armazenamento, é o:`,
    options: [
      "ReplicaSet",
      "Deployment",
      "Pod",
      "DaemonSet",
      "StatefulSet"
    ],
    correctAnswer: 2, // C
    explanation: `Gabarito Oficial Comentado:
Alternativa C (CORRETA):
O Pod é a menor unidade implantável de computação que pode ser criada e gerenciada no Kubernetes. Um Pod encapsula um ou mais contêineres (ex.: aplicação principal e sidecar), compartilhando o mesmo endereço IP, portas de rede e volumes de armazenamento.`
  },
  {
    id: 54,
    subject: "Conhecimentos Específicos de TI",
    subtopic: "Kubernetes - Serviços de Rede (ClusterIP, NodePort, LoadBalancer)",
    theoryRef: "esp-k8s-services",
    statement: `Um arquiteto de software precisa expor um conjunto de Pods de um banco de dados interno APENAS para os demais microsserviços dentro do próprio cluster Kubernetes, sem nenhuma exposição para fora da rede interna do cluster.

O tipo de Kubernetes Service adequado e adotado como PADRÃO para esse fim é o:`,
    options: [
      "NodePort",
      "LoadBalancer",
      "ClusterIP",
      "ExternalName",
      "Ingress Gateway"
    ],
    correctAnswer: 2, // C
    explanation: `Gabarito Oficial Comentado:
Alternativa C (CORRETA):
O ClusterIP é o tipo de Service padrão no Kubernetes. Ele atribui um IP interno virtual acessível exclusivamente dentro do cluster, garantindo isolamento de rede e impedindo que o serviço seja alcançado de fora do cluster.`
  },
  {
    id: 55,
    subject: "Conhecimentos Específicos de TI",
    subtopic: "Kubernetes - Health Checks (Liveness, Readiness, Startup)",
    theoryRef: "esp-k8s-probes",
    statement: `No Kubernetes, a sonda (probe) configurada pelo engenheiro de DevOps para indicar se um contêiner está PRONTO PARA RECEBER TRÁFEGO DE REDE de clientes, de modo que o Service não envie requisições a ele enquanto sua inicialização não estiver concluída, é a:`,
    options: [
      "Liveness Probe",
      "Readiness Probe",
      "Startup Probe",
      "Termination Probe",
      "Healthz Sweep Probe"
    ],
    correctAnswer: 1, // B
    explanation: `Gabarito Oficial Comentado:
Alternativa B (CORRETA):
Diferença crucial entre probes no Kubernetes:
- Readiness Probe: Determina se o Pod está pronto para aceitar requisições de rede. Se falhar, o Pod NÃO é reiniciado; seus endpoints são apenas removidos do Service até que volte a ficar pronta.
- Liveness Probe: Determina se o contêiner está vivo. Se falhar repetidamente, o kubelet MATA o contêiner e o reinicia.
- Startup Probe: Utilizada para aplicações lentas na inicialização para desabilitar as outras duas até que a aplicação suba.`
  },
  {
    id: 56,
    subject: "Conhecimentos Específicos de TI",
    subtopic: "CI/CD - Pipelines e Práticas DevSecOps",
    theoryRef: "esp-cicd-devsecops",
    statement: `Em uma esteira moderna de Integração Contínua e Entrega Contínua (CI/CD) com abordagem DevSecOps, a prática de analisar o código-fonte estático em busca de vulnerabilidades de segurança conhecidas e falhas de conformidade, ANTES mesmo da compilação e execução do código, é denominada:`,
    options: [
      "DAST (Dynamic Application Security Testing)",
      "SAST (Static Application Security Testing)",
      "Fuzz Testing",
      "Chaos Engineering",
      "Penetration Testing"
    ],
    correctAnswer: 1, // B
    explanation: `Gabarito Oficial Comentado:
Alternativa B (CORRETA):
- SAST (Static Application Security Testing): Teste de segurança estático ("white-box"). Analisa o código-fonte ou binários estaticamente em repouso na esteira de CI, sem executar a aplicação (ex.: SonarQube, Checkmarx).
- DAST (Dynamic Application Security Testing): Teste dinâmico ("black-box"), que analisa a aplicação em execução enviando ataques reais pela rede (ex.: OWASP ZAP).`
  },
  {
    id: 57,
    subject: "Conhecimentos Específicos de TI",
    subtopic: "Estratégias de Deploy (Canary e Blue-Green)",
    theoryRef: "esp-deploy-strategies",
    statement: `A estratégia de implantação de software na qual uma nova versão é liberada para uma pequena porcentagem de usuários reais (ex.: 5%), permitindo monitorar métricas de erro e desempenho em produção antes de rotear gradualmente todo o tráfego restante, é denominada:`,
    options: [
      "Recreate Deployment",
      "Blue-Green Deployment",
      "Canary Deployment",
      "Big Bang Deployment",
      "Shadow Deployment"
    ],
    correctAnswer: 2, // C
    explanation: `Gabarito Oficial Comentado:
Alternativa C (CORRETA):
O Canary Deployment consiste em disponibilizar a nova versão do software para uma fração controlada do tráfego ou dos usuários (o "canário na mina de carvão"). Se as métricas forem satisfatórias, o percentual de tráfego é ampliado até 100%; se surgirem anomalias, o tráfego é revertido de imediato, mitigando o raio de explosão (blast radius) de eventuais bugs.`
  },
  {
    id: 58,
    subject: "Conhecimentos Específicos de TI",
    subtopic: "Bancos de Dados Relacionais - Propriedades ACID",
    theoryRef: "esp-bd-acid",
    statement: `Em um Sistema de Gerenciamento de Banco de Dados Relacional (SGBDR), a propriedade que assegura que uma transação é tratada como uma unidade indivisível de trabalho, ou seja, ou todas as suas instruções SQL são executadas com sucesso ou nenhuma alteração é persistida (tudo ou nada), é a:`,
    options: [
      "Atomicidade",
      "Consistência",
      "Isolamento",
      "Durabilidade",
      "Idempotência"
    ],
    correctAnswer: 0, // A
    explanation: `Gabarito Oficial Comentado:
Alternativa A (CORRETA):
Propriedades ACID:
- Atomicidade (A): Todas as operações da transação são concluídas com sucesso ou, se houver falha, todas as operações realizadas até então são desfeitas (rollback). Princípio do "tudo ou nada".
- Consistência (C): A transação leva o banco de um estado válido a outro estado válido, respeitando regras de integridade.
- Isolamento (I): Transações concorrentes não interferem umas nas outras.
- Durabilidade (D): Dados confirmados via commit permanecem gravados mesmo em caso de falha de energia.`
  },
  {
    id: 59,
    subject: "Conhecimentos Específicos de TI",
    subtopic: "Níveis de Isolamento de Transações ANSI SQL",
    theoryRef: "esp-bd-isolamento",
    statement: `No padrão ANSI/ISO SQL, o nível de isolamento mais restritivo que previne Leituras Sujas (Dirty Reads), Leituras Não-Repetíveis (Non-Repeatable Reads) e Leituras Fantasma (Phantom Reads), simulando a execução sequencial estrita das transações concorrentes, é o:`,
    options: [
      "Read Uncommitted",
      "Read Committed",
      "Repeatable Read",
      "Serializable",
      "Snapshot Isolation"
    ],
    correctAnswer: 3, // D
    explanation: `Gabarito Oficial Comentado:
Alternativa D (CORRETA):
Níveis de isolamento ANSI SQL e anomalias permitidas:
1. Read Uncommitted: Permite Dirty Read, Non-repeatable Read e Phantom Read.
2. Read Committed: Previne Dirty Read; permite Non-repeatable Read e Phantom Read.
3. Repeatable Read: Previne Dirty Read e Non-repeatable Read; permite Phantom Read (salvo em SGBDs com MVCC como PostgreSQL).
4. Serializable: Previne TODAS as anomalias, garantindo o mais alto nível de isolamento.`
  },
  {
    id: 60,
    subject: "Conhecimentos Específicos de TI",
    subtopic: "Modelagem Relacional e Índices de Banco de Dados",
    theoryRef: "esp-bd-indices",
    statement: `Ao otimizar uma consulta SQL que executa filtros por faixa de valores (ex.: 'WHERE data_nascimento BETWEEN '1960-01-01' AND '1980-12-31''), o tipo de índice de banco de dados mais indicado e amplamente utilizado pelos SGBDs relacionais por manter os dados ordenados em estrutura balanceada é o:`,
    options: [
      "Índice Hash",
      "Índice B-Tree (Árvore B / B+Tree)",
      "Índice Bitmap",
      "Índice GiST com R-Tree",
      "Índice Invertido Full-Text"
    ],
    correctAnswer: 1, // B
    explanation: `Gabarito Oficial Comentado:
Alternativa B (CORRETA):
Os índices baseados em B-Tree (e B+Tree) mantêm os nós ordenados, permitindo buscas pontuais de igualdade (=) e buscas por faixa (BETWEEN, >, <, >=, <=) com complexidade temporal O(log N). Os índices Hash são extremamente rápidos para igualdade (=), mas totalmente ineficientes para consultas por faixa, pois a função hash não preserva a ordenação.`
  },
  {
    id: 61,
    subject: "Conhecimentos Específicos de TI",
    subtopic: "Bancos de Dados NoSQL e Teorema CAP",
    theoryRef: "esp-nosql-cap",
    statement: `O Teorema CAP, formulado por Eric Brewer, afirma que em um sistema distribuído é impossível garantir simultaneamente mais de duas das seguintes propriedades:`,
    options: [
      "Confiabilidade, Autenticidade e Precisão.",
      "Consistência, Disponibilidade e Tolerância a Partições de Rede.",
      "Concorrência, Agilidade e Performance.",
      "Atomicidade, Criptografia e Portabilidade.",
      "Continuidade, Acessibilidade e Privacidade."
    ],
    correctAnswer: 1, // B
    explanation: `Gabarito Oficial Comentado:
Alternativa B (CORRETA):
O Teorema CAP define as três garantias fundamentais de sistemas distribuídos:
- C (Consistency - Consistência): Todo nó lê o dado mais recentemente escrito.
- A (Availability - Disponibilidade): Toda requisição recebe uma resposta não-errônea, sem garantia de ser a mais recente.
- P (Partition Tolerance - Tolerância a Partição): O sistema continua operando mesmo se pacotes de rede forem perdidos entre os nós.
Em redes do mundo real onde partições ocorrem inevitavelmente, o sistema deve escolher entre Consistência (CP) ou Disponibilidade (AP).`
  },
  {
    id: 62,
    subject: "Conhecimentos Específicos de TI",
    subtopic: "Qualidade de Software - Pirâmide de Testes",
    theoryRef: "esp-piramide-testes",
    statement: `De acordo com o modelo clássico da Pirâmide de Testes (proposto por Mike Cohn e popularizado por Martin Fowler), a base da pirâmide deve ser composta pela maior quantidade de testes porque eles são rápidos de executar, possuem menor custo de manutenção e fornecem feedback instantâneo. Esses testes da base são os:`,
    options: [
      "Testes de Interface de Usuário (End-to-End / E2E)",
      "Testes de Carga e Estresse",
      "Testes de Integração de Serviços",
      "Testes Unitários (Unit Tests)",
      "Testes Manuais de Aceitação de Usuário"
    ],
    correctAnswer: 3, // D
    explanation: `Gabarito Oficial Comentado:
Alternativa D (CORRETA):
A Pirâmide de Testes é estruturada em:
1. Base (maior volume, alta velocidade, baixo custo): Testes Unitários.
2. Camada Intermediária (volume moderado): Testes de Integração.
3. Topo (menor volume, mais lentos, alto custo e mais frágeis): Testes de Ponta a Ponta (E2E / UI).`
  },
  {
    id: 63,
    subject: "Conhecimentos Específicos de TI",
    subtopic: "Metodologia de Testes - TDD",
    theoryRef: "esp-tdd",
    statement: `No Desenvolvimento Guiado por Testes (TDD - Test-Driven Development), o ciclo fundamental de iteração conhecido como 'Red-Green-Refactor' consiste em:`,
    options: [
      "Escrever o código completo -> documentar a API -> testar manualmente na produção.",
      "Escrever um teste que falha (Red) -> escrever a quantidade mínima de código para o teste passar (Green) -> refatorar e melhorar o código mantendo o teste passando (Refactor).",
      "Identificar bugs em produção (Red) -> aplicar hotfix sem testes (Green) -> reiniciar os servidores (Refactor).",
      "Compilar com warnings (Red) -> corrigir erros de sintaxe (Green) -> commitar na branch main (Refactor).",
      "Executar análise estática SAST (Red) -> auditar vulnerabilidades (Green) -> implantar o container (Refactor)."
    ],
    correctAnswer: 1, // B
    explanation: `Gabarito Oficial Comentado:
Alternativa B (CORRETA):
O ciclo Red-Green-Refactor do TDD (Kent Beck) consiste em:
1. RED: Escreva um teste unitário para uma funcionalidade antes de ela existir e veja-o falhar.
2. GREEN: Escreva o código mais simples e rápido possível que faça esse teste passar.
3. REFACTOR: Melhore o design do código, elimine duplicações e aumente a clareza, garantindo que o teste continue verde.`
  },
  {
    id: 64,
    subject: "Conhecimentos Específicos de TI",
    subtopic: "Segurança da Informação - Criptografia Simétrica e Assimétrica",
    theoryRef: "esp-criptografia",
    statement: `No que se refere aos conceitos criptográficos utilizados para garantir confidencialidade e integridade em canais seguros como TLS/HTTPS, assinale a afirmativa CORRETA:`,
    options: [
      "A criptografia simétrica utiliza um par de chaves pública e privada matematicamente correlacionadas.",
      "O algoritmo AES (Advanced Encryption Standard) é um exemplo consagrado de algoritmo de chave assimétrica.",
      "A criptografia assimétrica (como RSA e ECC) utiliza um par de chaves, onde a chave pública é distribuída livremente para criptografia e a chave privada é mantida sob sigilo para descriptografia.",
      "Funções de resumo criptográfico (hash) como SHA-256 permitem reverter o hash de volta ao texto original com facilidade.",
      "Chaves criptográficas simétricas não exigem nenhum canal seguro prévio para serem compartilhadas entre remetente e destinatário."
    ],
    correctAnswer: 2, // C
    explanation: `Gabarito Oficial Comentado:
Alternativa C (CORRETA):
Na criptografia assimétrica (chave pública), há um par de chaves: a Chave Pública (que qualquer um pode conhecer para cifrar a mensagem ou validar uma assinatura) e a Chave Privada (que só o proprietário possui para decifrar a mensagem ou assinar digitalmente).

Erros das demais:
- A: Criptografia simétrica usa uma ÚNICA chave secreta compartilhada para cifrar e decifrar.
- B: AES é o padrão universal de criptografia SIMÉTRICA (em blocos).
- D: Funções de Hash são unidirecionais ("one-way"); não é possível reverter o hash para o dado de origem.
- E: O compartilhamento da chave simétrica exige um canal seguro ou o uso de algoritmos assimétricos (ex.: Diffie-Hellman).`
  },
  {
    id: 65,
    subject: "Conhecimentos Específicos de TI",
    subtopic: "Segurança de Software - OWASP Top 10",
    theoryRef: "esp-owasp",
    statement: `A vulnerabilidade clássica catalogada pela OWASP na qual um atacante consegue manipular parâmetros de entrada não sanitizados de uma aplicação para alterar a estrutura de uma instrução SQL interpretada pelo banco de dados corporativo, obtendo acesso não autorizado a dados sigilosos, denomina-se:`,
    options: [
      "Cross-Site Scripting (XSS)",
      "Cross-Site Request Forgery (CSRF)",
      "SQL Injection (SQLi)",
      "Server-Side Request Forgery (SSRF)",
      "Buffer Overflow"
    ],
    correctAnswer: 2, // C
    explanation: `Gabarito Oficial Comentado:
Alternativa C (CORRETA):
SQL Injection (Injeção de SQL) ocorre quando dados fornecidos por usuários não confiáveis são concatenados diretamente em comandos SQL sem a devida sanitização ou sem o uso de Prepared Statements / consultas parametrizadas. O atacante injeta código SQL que altera a semântica da consulta original no banco de dados.`
  },
  {
    id: 66,
    subject: "Conhecimentos Específicos de TI",
    subtopic: "Autenticação e Autorização - JWT e OAuth 2.0",
    theoryRef: "esp-auth-jwt",
    statement: `Um token JWT (JSON Web Token) compacto utilizado em arquiteturas REST é composto por três partes delimitadas por pontos (.) na seguinte ordem:`,
    options: [
      "Signature . Header . Payload",
      "Header . Payload . Signature",
      "Payload . Signature . Certificate",
      "Issuer . Subject . Expiration",
      "Public Key . Private Key . Secret"
    ],
    correctAnswer: 1, // B
    explanation: `Gabarito Oficial Comentado:
Alternativa B (CORRETA):
A especificação RFC 7519 do JWT estabelece que sua estrutura compacta é estritamente dividida em três partes codificadas em Base64URL separadas por pontos:
1. Header: metadados do token (tipo "JWT" e algoritmo criptográfico como "HS256" ou "RS256").
2. Payload: as claims (declarações/atributos do usuário como sub, exp, roles).
3. Signature: assinatura criptográfica que garante que o token não foi adulterado.`
  },
  {
    id: 67,
    subject: "Conhecimentos Específicos de TI",
    subtopic: "Metodologias Ágeis - Scrum Guide (Papéis e Cerimônias)",
    theoryRef: "esp-scrum",
    statement: `De acordo com o Scrum Guide oficial, qual evento tem duração máxima recomendada de 15 minutos, é realizado diariamente no mesmo horário e local, e tem como objetivo a inspeção do progresso rumo à Meta da Sprint pelos Desenvolvedores?`,
    options: [
      "Sprint Planning",
      "Sprint Review",
      "Daily Scrum",
      "Sprint Retrospective",
      "Backlog Refinement"
    ],
    correctAnswer: 2, // C
    explanation: `Gabarito Oficial Comentado:
Alternativa C (CORRETA):
O Daily Scrum (Reunião Diária) é um evento de 15 minutos com timebox estrito para os Desenvolvedores do Scrum Team inspecionarem o progresso rumo à Meta da Sprint e adaptarem o Sprint Backlog conforme necessário, ajustando o plano de trabalho para as próximas 24 horas.`
  },
  {
    id: 68,
    subject: "Conhecimentos Específicos de TI",
    subtopic: "Metodologias Ágeis - Definição de Pronto (DoD)",
    theoryRef: "esp-dod-dor",
    statement: `No framework Scrum, a 'Definição de Pronto' (Definition of Done - DoD) consiste em:`,
    options: [
      "Um acordo informal entre o Product Owner e o cliente sobre a data final de entrega do projeto.",
      "A descrição formal do estado do Incremento quando atende às medidas de qualidade exigidas para o produto.",
      "A estimativa de horas calculada individualmente para cada tarefa do Sprint Backlog.",
      "A lista de impedimentos operacionais levantados pelo Scrum Master durante a Daily.",
      "O contrato assinado pelo setor de compras que autoriza o pagamento dos fornecedores."
    ],
    correctAnswer: 1, // B
    explanation: `Gabarito Oficial Comentado:
Alternativa B (CORRETA):
Segundo o Scrum Guide, a Definição de Pronto (Definition of Done) é uma descrição formal do estado do Incremento quando ele satisfaz as medidas de qualidade requeridas para o produto. No momento em que um item do Product Backlog atende à Definição de Pronto, nasce um Incremento utilizável e potencialmente liberável.`
  },
  {
    id: 69,
    subject: "Conhecimentos Específicos de TI",
    subtopic: "Método Kanban - Limites de WIP e Métricas de Fluxo",
    theoryRef: "esp-kanban",
    statement: `No método Kanban, a prática central de limitar o Trabalho em Progresso (WIP - Work in Progress) em cada coluna do quadro visual tem como principal objetivo:`,
    options: [
      "Obrigar todos os desenvolvedores a trabalhar exclusivamente em horas extras.",
      "Evitar a sobrecarga do sistema produtivo, expor gargalos de fluxo e reduzir o tempo de ciclo (Cycle Time).",
      "Impedir que novos requisitos do cliente sejam aceitos durante o ano corrente.",
      "Substituir todos os testes automatizados por inspeção manual de código.",
      "Garantir que todas as tarefas tenham exatamente o mesmo tamanho em horas de esforço."
    ],
    correctAnswer: 1, // B
    explanation: `Gabarito Oficial Comentado:
Alternativa B (CORRETA):
A limitação do WIP (Work In Progress) é o núcleo do Kanban. Fundamentada na Lei de Little, limitar o trabalho em andamento reduz o tempo de ciclo (Cycle Time), evita que os colaboradores alternem excessivamente de contexto (multitarefa prejudicial) e faz com que gargalos e bloqueios no fluxo se tornem visíveis imediatamente ("Pare de começar e comece a terminar").`
  },
  {
    id: 70,
    subject: "Conhecimentos Específicos de TI",
    subtopic: "Governança de TI - ITIL v4 e Práticas de Serviço",
    theoryRef: "esp-itil-v4",
    statement: `Na biblioteca ITIL v4, a prática que tem por objetivo minimizar o impacto negativo de incidentes restaurando a operação normal do serviço o mais rapidamente possível, reduzindo a indisponibilidade percebida pelo usuário final, é o:`,
    options: [
      "Gerenciamento de Problemas (Problem Management)",
      "Gerenciamento de Incidentes (Incident Management)",
      "Habilitação de Mudança (Change Enablement)",
      "Gerenciamento de Ativos de TI (IT Asset Management)",
      "Gerenciamento de Nível de Serviço (Service Level Management)"
    ],
    correctAnswer: 1, // B
    explanation: `Gabarito Oficial Comentado:
Alternativa B (CORRETA):
Diferença conceitual clássica e obrigatória em provas de concurso da FGV:
- Gerenciamento de Incidentes: Tem como foco restaurar o serviço o mais rápido possível (solução de contorno/workaround imediato).
- Gerenciamento de Problemas: Tem como foco identificar a causa-raiz (root cause) dos incidentes e prevenir a recorrência de novos incidentes.`
  }
];
