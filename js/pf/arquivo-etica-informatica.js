/* PF · Agente Administrativo — Arquivologia, Ética e Informática.
   Teoria + itens INÉDITOS no estilo Cebraspe (não são de prova oficial).
   Os resultados das fórmulas das planilhas foram conferidos no Node. */
{
  const SR_ARQUIVO = `Situação hipotética: a Superintendência Regional da Polícia Federal em determinado estado mantém três espaços de guarda. Nos setores de trabalho ficam os processos em andamento e os consultados com frequência; no depósito do térreo ficam os processos já encerrados que aguardam o prazo previsto na tabela de temporalidade; e os documentos considerados de valor histórico são, ao final, enviados à instituição arquivística pública competente.`;

  const PROTOCOLO_SIT = `Situação hipotética: o Núcleo de Protocolo de uma superintendência regional da PF recebeu, em um mesmo dia, um ofício de uma prefeitura, um requerimento de cidadão que pede certidão e depende de análise, um envelope endereçado nominalmente a um servidor com a indicação "particular" e um envelope lacrado contendo documento sigiloso.`;

  const PLAN_MATERIAL = `A planilha a seguir, elaborada no Microsoft Excel (Microsoft 365, em português), controla a compra de material para o arquivo de uma superintendência regional. As colunas B e C contêm números; as células da coluna D contêm as fórmulas indicadas, cujos resultados aparecem entre colchetes.

     A                B      C        D
1  Material          Qtd   Preço    Total
2  Caixa-arquivo      10   12,00    =B2*C2         [120]
3  Pasta suspensa     40    3,00    =B3*C3         [120]
4  Etiqueta          200    0,40    =B4*C4         [80]
5  Grampo trilho      50    1,60    =B5*C5         [80]
6  Total                            =SOMA(D2:D5)   [400]`;

  const PLAN_PROTOCOLO = `A planilha a seguir, elaborada no Microsoft Excel (Microsoft 365, em português), registra, para cada processo, o número (NUP simplificado), o setor em que ele se encontra e há quantos dias está parado. As colunas A e C contêm números.

     A       B               C
1  NUP     Setor           Dias parado
2  1001    Protocolo          3
3  1002    Arquivo           12
4  1003    Protocolo          8
5  1004    Corregedoria      15
6  1005    Arquivo            5`;

  const BACKUP_SIT = `Situação hipotética: o setor de tecnologia de uma superintendência adota, para a pasta de documentos digitalizados, a seguinte rotina: backup completo aos domingos e backup incremental de segunda-feira a sábado, sempre às 22 h. Em uma sexta-feira, às 15 h, o disco que guardava a pasta falhou.`;

  pfModulos.push({
    id: "pf-arquivologia",
    title: "Arquivologia",
    icon: "🗂️",
    description:
      "Conceitos e princípios, três idades, Lei 8.159/1991, gestão de documentos, protocolo, métodos de arquivamento, temporalidade e eliminação, arranjo e descrição, preservação e documento digital.",
    sections: [
      {
        id: "pf-arq-conceitos",
        title: "Conceitos, princípios, três idades e Lei 8.159/1991",
        content: `
### O que o Cebraspe cobra aqui
Em Arquivologia o Cebraspe raramente pede definição decorada: ele descreve a rotina de um setor (protocolo, arquivo setorial, depósito, arquivo central) e troca um conceito pelo vizinho. As trocas preferidas são **transferência x recolhimento**, **fase intermediária x permanente**, **valor primário x secundário**, **proveniência x organicidade x unicidade** e **espécie x tipo documental**. Leia o item perguntando *o que o documento está fazendo ali* (uso frequente, espera de prazo ou guarda definitiva) e *quem o produziu*.

#### Arquivo, biblioteca e museu
| Critério | Arquivo | Biblioteca | Museu |
| --- | --- | --- | --- |
| Acervo | Documentos produzidos e recebidos no exercício de atividades | Livros, periódicos e outras publicações | Objetos (artefatos, obras, peças) |
| Finalidade | Funcional: prova e informação para quem produziu; depois, pesquisa | Cultural, técnica, científica e educativa | Cultural e educativa (exposição) |
| Formação do acervo | Acumulação natural, orgânica | Seleção: compra, doação ou permuta | Seleção: compra, doação, coleta |
| Unidade de tratamento | Conjuntos (fundo, série, dossiê) | Peça avulsa (o título) | Peça avulsa, reunida em coleções |
| Exemplares | Em regra únicos | Múltiplos | Únicos |

#### Documento de arquivo e Arquivística
- **Documento**: unidade de registro de informações, qualquer que seja o suporte ou o formato.
- **Documento de arquivo**: produzido ou recebido por pessoa física ou jurídica **no exercício de suas atividades**; nasce como instrumento ou resultado de uma ação e serve de prova dela.
- **Arquivo** (Lei 8.159/1991, art. 2º): conjuntos de documentos produzidos e recebidos por órgãos públicos, instituições de caráter público e entidades privadas, em decorrência de atividades específicas, bem como por pessoa física, **qualquer que seja o suporte da informação ou a natureza dos documentos**. A palavra também designa a instituição, o prédio, o móvel e o setor que guardam esses conjuntos.
- **Arquivística (Arquivologia)**: disciplina que estuda as funções do arquivo e os princípios e técnicas a observar na produção, organização, guarda, preservação e utilização dos arquivos.

> **⚠️ Pegadinha:** o que faz um documento ser "de arquivo" é a **origem funcional**, não o suporte. Um e-mail, uma planilha, uma fotografia de perícia ou um vídeo podem ser documentos de arquivo; um livro comprado para a biblioteca da superintendência, não.

#### Princípios arquivísticos
| Princípio | Ideia central |
| --- | --- |
| **Proveniência** (respeito aos fundos) | Documentos de um mesmo produtor formam um fundo e não se misturam aos de outro produtor |
| **Ordem original** | Mantém-se a ordem dada pelo produtor, que reflete suas atividades |
| **Organicidade** | Os documentos guardam relações entre si que espelham as funções e a estrutura de quem os produziu |
| **Unicidade** | Cada documento de arquivo é único no seu contexto de produção, ainda que existam cópias |
| **Indivisibilidade** ou **integridade** | O fundo deve ser preservado sem dispersão, mutilação, alienação, destruição não autorizada ou acréscimo indevido |
| **Cumulatividade** | O arquivo é formação progressiva, natural e orgânica: cresce à medida que as atividades acontecem |

> **⚠️ Pegadinha:** proveniência responde a "**quem** produziu?" (separar produtores); organicidade responde a "**como** os documentos se relacionam?" (espelho das funções). Se o item fala em não misturar acervos de órgãos diferentes, é proveniência.

> **⚠️ Pegadinha:** unicidade não quer dizer que o documento não tenha cópia. A cópia de um ofício arquivada no órgão que o expediu é única **naquele contexto**.

#### Teoria das três idades
A Lei 8.159/1991 (art. 8º) identifica os documentos públicos como correntes, intermediários e permanentes.

| Idade | Situação do documento | Valor | Uso e guarda |
| --- | --- | --- | --- |
| **Corrente** (1ª) | Em curso ou, mesmo sem movimentação, objeto de consultas frequentes | Primário | Uso frequente; fica junto ao setor (arquivo setorial ou central) |
| **Intermediária** (2ª) | Já não é de uso corrente, mas aguarda, **por razões de interesse administrativo**, a eliminação ou o recolhimento | Primário (ainda) | Uso esporádico; costuma ficar em depósito |
| **Permanente** (3ª) | Tem valor histórico, probatório e informativo e deve ser **definitivamente preservado** | Secundário | Pesquisa; guarda definitiva |

- **Transferência**: passagem da fase corrente para a intermediária.
- **Recolhimento**: entrada de documentos no arquivo **permanente**.
- Nem todo documento passa pelas três idades: a maior parte é eliminada ao fim da fase corrente ou da intermediária, conforme a tabela de temporalidade.
- Os documentos de valor permanente são **inalienáveis e imprescritíveis** (art. 10).

> **⚠️ Pegadinha:** a idade é definida pelo **uso e pelo valor**, não pelo endereço. Um processo encerrado que espera o prazo para ser eliminado está na fase intermediária mesmo que a caixa continue na sala do setor.

> **⚠️ Pegadinha:** "arquivo morto" não é termo técnico. O arquivo permanente é justamente o mais procurado pela pesquisa e não admite eliminação.

#### Valores primário e secundário
| Valor | Para quem | Características |
| --- | --- | --- |
| **Primário** | A própria entidade produtora | Administrativo, legal, fiscal; temporário; justifica a guarda nas fases corrente e intermediária |
| **Secundário** | Outras entidades, pesquisadores e a sociedade | Histórico, probatório, informativo; justifica a guarda permanente |

#### Lei 8.159/1991 em pontos que caem
1. É dever do poder público a **gestão documental** e a proteção especial a documentos de arquivo, como apoio à administração, à cultura, ao desenvolvimento científico e como elementos de prova e informação (art. 1º).
2. **Arquivos públicos** (art. 7º): os produzidos e recebidos por órgãos públicos federais, estaduais, distritais e municipais em decorrência de suas funções administrativas, legislativas e judiciárias. **Também são públicos** os de instituições de caráter público e os de **entidades privadas encarregadas da gestão de serviços públicos**, no exercício dessas atividades.
3. A cessação de atividades de instituição pública implica o recolhimento de sua documentação à instituição arquivística pública ou a sua transferência à instituição sucessora.
4. A **eliminação** de documentos de instituições públicas depende de **autorização da instituição arquivística pública** na sua esfera de competência (art. 9º); no Executivo federal, do Arquivo Nacional.
5. **Arquivos privados** (art. 11): de pessoas físicas ou jurídicas, em decorrência de suas atividades. Podem ser identificados como de **interesse público e social**; nesse caso não podem ser alienados com dispersão ou perda da unidade documental nem transferidos para o exterior, e o poder público tem **preferência** na aquisição (arts. 12 e 13).
6. **Acesso**: todos têm direito a receber dos órgãos públicos informações de interesse particular ou coletivo, ressalvadas as sigilosas (art. 4º). Os artigos que tratavam de sigilo e prazos de acesso foram revogados pela **Lei de Acesso à Informação** (Lei 12.527/2011), que hoje rege o tema.
7. **CONARQ** (art. 26): Conselho Nacional de Arquivos, **vinculado ao Arquivo Nacional**, define a política nacional de arquivos como órgão central do **SINAR** (Sistema Nacional de Arquivos).
8. Quem desfigurar ou destruir documentos de valor permanente ou de interesse público e social responde **penal, civil e administrativamente** (art. 25).

> **⚠️ Pegadinha:** entidade **privada** que presta serviço público produz, nessa atividade, arquivo **público**. O critério é a função exercida, não a natureza jurídica de quem produz.

#### Gênero, espécie, tipo, suporte, formato e forma
| Termo | O que indica | Exemplos |
| --- | --- | --- |
| **Gênero** | Configuração conforme o sistema de signos usado | Textual, iconográfico, cartográfico, audiovisual, sonoro, micrográfico, digital |
| **Espécie** | Configuração conforme a disposição e a natureza das informações | Ofício, ata, certidão, requerimento, relatório, despacho |
| **Tipo** | Espécie **+ atividade** que a gerou | Requerimento de emissão de passaporte, certidão de antecedentes criminais, ata de reunião da CPAD |
| **Suporte** | Material em que a informação é registrada | Papel, filme, fita magnética, disco óptico |
| **Formato** | Configuração física do suporte | Folha, caderno, livro, mapa, planta, cartaz, microficha, rolo |
| **Forma** | Estágio de preparação e transmissão | Rascunho ou minuta, original, cópia |

> **⚠️ Pegadinha:** "ofício" é espécie; "ofício de requisição de laudo" é tipo. Papel é suporte; folha A4 é formato; minuta é forma.

#### Revisão relâmpago
- Arquivo nasce da atividade (acumulação natural); biblioteca e museu nascem de seleção.
- Proveniência = não misturar produtores; organicidade = relação entre documentos que espelha funções; unicidade = único no contexto.
- Corrente (uso frequente) → **transferência** → intermediária (espera prazo) → **recolhimento** → permanente (guarda definitiva).
- Valor primário serve ao produtor; secundário, à pesquisa e à sociedade.
- Entidade privada que presta serviço público produz arquivo **público** nessa atividade.
- Eliminação de documento público só com autorização da instituição arquivística; documento permanente é inalienável e imprescritível.
- CONARQ é vinculado ao Arquivo Nacional e é o órgão central do SINAR.
- Tipo = espécie + atividade.
`,
      },
      {
        id: "pf-arq-gestao",
        title: "Gestão de documentos, protocolo, métodos, temporalidade, arranjo e documento digital",
        content: `
### O que o Cebraspe cobra aqui
Aqui a banca mistura rotina de protocolo, escolha de método de arquivamento e o caminho legal até a eliminação. Os itens costumam descrever um setor da superintendência e perguntar se a providência está correta: abrir ou não uma correspondência, anexar ou apensar um processo, qual método dispensa índice, se a tabela de temporalidade basta para eliminar. Guarde o fluxo **produção → utilização → avaliação e destinação** e os termos de cada etapa.

#### Gestão de documentos
A Lei 8.159/1991 (art. 3º) define gestão de documentos como o conjunto de procedimentos e operações técnicas referentes à **produção, tramitação, uso, avaliação e arquivamento** em fase corrente e intermediária, visando à **eliminação ou ao recolhimento** para guarda permanente.

| Fase | O que envolve |
| --- | --- |
| **Produção** | Criar só o necessário; padronizar espécies e formulários; evitar duplicidade |
| **Utilização** | Protocolo, tramitação, expedição, classificação, arquivamento corrente, acesso |
| **Avaliação e destinação** | Definir prazos de guarda e o destino final (eliminação ou guarda permanente) |

> **⚠️ Pegadinha:** a gestão de documentos alcança as fases **corrente e intermediária**. O tratamento do arquivo permanente (arranjo, descrição, difusão) não é objeto da gestão, embora ela prepare o recolhimento.

#### Protocolo
O protocolo controla a entrada, o trâmite e a saída dos documentos. Atividades típicas:
- **Recebimento**: recebe e separa a correspondência oficial da particular; a particular segue ao destinatário **sem ser aberta**; a sigilosa segue lacrada a quem tem credencial para conhecê-la.
- **Classificação**: identifica o assunto e atribui o código do plano de classificação.
- **Registro**: anota os dados de identificação (número, data, procedência, assunto) em sistema.
- **Autuação**: forma o processo a partir de documento que exige análise, informação ou decisão, com **número único de protocolo (NUP)**, capa e folhas numeradas.
- **Distribuição e tramitação**: encaminha às unidades e controla a movimentação.
- **Expedição**: envia a correspondência para fora do órgão.

| Juntada | Como é | Efeito |
| --- | --- | --- |
| **Anexação** | União **definitiva** de um processo a outro, por dependência | O anexado deixa de tramitar sozinho; prevalece o número do principal |
| **Apensação** | União **provisória**, para estudo e uniformidade de tratamento | Cada processo mantém sua identidade e pode ser desapensado depois |

> **⚠️ Pegadinha:** "provisória, mantendo a identidade" é apensação; "definitiva" é anexação. **Desentranhamento** é a retirada de folhas de um processo; **desmembramento** é a separação de parte dele para formar outro.

#### Métodos de arquivamento
| Método | Elemento de busca | Direto ou indireto |
| --- | --- | --- |
| **Alfabético** | Nome (pessoa, órgão, empresa) | Direto |
| **Geográfico** | Local (estado, cidade, país) | Direto |
| **Numérico simples** | Número atribuído ao correspondente ou ao documento | Indireto (exige índice) |
| **Numérico cronológico** | Número + data | Indireto |
| **Dígito-terminal** | Número lido em grupos, da direita para a esquerda | Indireto |
| **Ideográfico alfabético** (enciclopédico ou dicionário) | Assunto, em ordem alfabética | Direto |
| **Ideográfico numérico** (duplex, decimal) | Assunto codificado em números | Indireto |
| **Variadex** | Alfabético com cores como apoio | Direto |

- **Direto**: a busca é feita no próprio arquivo, sem consulta prévia a índice.
- **Indireto**: é preciso consultar um índice para saber o número ou o código e só então localizar o documento.
- O **alfanumérico** (letras + números) costuma ser classificado como **semi-indireto**.

Regras de alfabetação mais cobradas:
1. Nomes de pessoas: entra-se pelo **último sobrenome**, seguido do prenome: Walter Silva → SILVA, Walter.
2. Sobrenomes formados por substantivo e adjetivo ou ligados por hífen não se separam: CASTELO BRANCO, Humberto; VILLA-LOBOS, Heitor.
3. **Filho, Júnior, Neto e Sobrinho** integram o último sobrenome, mas **não** são considerados na ordenação: Fernando Albuquerque Filho → ALBUQUERQUE Filho, Fernando.
4. Artigos e preposições (a, o, de, da, do, e) não são considerados na ordenação.
5. Títulos (doutor, delegado, professor) não são considerados; vão após o nome, entre parênteses.

> **⚠️ Pegadinha:** método **numérico** é indireto; **alfabético**, **geográfico** e **variadex** são diretos. O ideográfico depende: por assunto em ordem alfabética é direto; codificado em números é indireto.

#### Classificação: plano e código
- **Plano (ou código) de classificação**: esquema que distribui os documentos em classes conforme as **funções e atividades** do órgão; aplica-se na fase corrente.
- No Poder Executivo federal há um **código de classificação e uma tabela de temporalidade para as atividades-meio**, aprovados no âmbito do CONARQ e do Arquivo Nacional. Em linhas gerais, as classes **000** (administração geral) e **900** (assuntos diversos) cuidam das atividades-meio, e as classes **100 a 800** ficam para as atividades-fim, que cada órgão define e submete ao Arquivo Nacional.
- **Classificação** organiza documentos correntes; **arranjo** organiza documentos permanentes.

#### Avaliação e tabela de temporalidade
A **avaliação** analisa os documentos para estabelecer prazos de guarda e destinação conforme seus valores. No Executivo federal, é feita pela **Comissão Permanente de Avaliação de Documentos (CPAD)** de cada órgão. O resultado é a **tabela de temporalidade e destinação**, instrumento aprovado por autoridade competente.

\`\`\`
TABELA DE TEMPORALIDADE (exemplo hipotético e simplificado)
Código | Assunto                        | Corrente        | Intermediária | Destinação
xxx.1  | Controle de diárias            | 5 anos          | 5 anos        | Eliminação
xxx.2  | Normas e regulamentos internos | Enquanto vigora | 5 anos        | Guarda permanente
xxx.3  | Solicitação de material        | 2 anos          | -             | Eliminação
\`\`\`

Eliminação (Lei 8.159/1991, art. 9º, e normas do CONARQ):
1. A CPAD elabora a **listagem de eliminação** dos documentos com prazo cumprido e destinação "eliminação".
2. A **instituição arquivística pública** competente autoriza (no Executivo federal, o Arquivo Nacional).
3. Publica-se o **edital de ciência de eliminação** em periódico oficial, para dar publicidade e permitir manifestação de interessados.
4. Elimina-se com **descaracterização irreversível** (fragmentação, pulverização, desmagnetização) e lavra-se o **termo de eliminação**.

> **⚠️ Pegadinha:** a tabela aprovada diz **o que** pode ser eliminado e **quando**, mas não dispensa a listagem, a autorização da instituição arquivística e o edital.

#### Arranjo e descrição
- **Arranjo**: organização dos documentos permanentes segundo um quadro previamente estabelecido, respeitando a proveniência e a ordem original.
- **Fundo**: conjunto de documentos de uma mesma proveniência. **Coleção**: conjunto reunido artificialmente, por critério de quem colecionou.
- **Série**: sequência de documentos relativos a uma mesma função, atividade, tipo documental ou assunto.
- **Descrição**: elaboração de instrumentos de pesquisa — **guia** (visão geral do acervo), **inventário**, **catálogo**, **repertório** e **índice**.

A **NOBRADE** (Norma Brasileira de Descrição Arquivística, do CONARQ) adapta as normas internacionais ISAD(G) e ISAAR(CPF). A descrição é multinível, do geral para o particular:

| Nível | Unidade de descrição |
| --- | --- |
| 0 | Acervo da entidade custodiadora |
| 1 | Fundo ou coleção |
| 2 | Seção |
| 3 | Série |
| 4 | Dossiê ou processo |
| 5 | Item documental |

Admitem-se ainda os níveis intermediários **subseção** (2,5) e **subsérie** (3,5).

Em linhas gerais, a norma reúne 28 elementos de descrição em 8 áreas; poucos são obrigatórios (entre eles código de referência, título, datas, nível de descrição e dimensão e suporte).

#### Preservação e conservação
- **Preservação**: prevenção da deterioração e de danos aos documentos, por controle ambiental e/ou tratamento físico ou químico.
- **Conservação**: medidas para manter a integridade física do acervo (higienização, acondicionamento, controle de temperatura, umidade, luz e pragas).
- **Restauração**: recuperação de documento já danificado, com intervenção direta.
- Boas práticas: evitar clipes e grampos metálicos que oxidam, fitas adesivas, luz solar direta e alimentos no depósito; usar caixas e pastas de material neutro.

#### Documento arquivístico digital
- **e-ARQ Brasil**: modelo de requisitos do CONARQ para o **SIGAD** (Sistema Informatizado de Gestão Arquivística de Documentos). O SIGAD controla classificação, tramitação, temporalidade e destinação, além de metadados e trilhas de auditoria.
- **GED** (gerenciamento eletrônico de documentos): tecnologias para digitalizar, indexar, armazenar e recuperar documentos. Pode compor um SIGAD, mas **sozinho não faz gestão arquivística**.
- **RDC-Arq**: repositório arquivístico digital confiável, que mantém documentos digitais autênticos e acessíveis pelo tempo necessário, sobretudo nas fases intermediária e permanente.
- **Autenticidade** = identidade + integridade: o documento é o que diz ser e não foi adulterado. **Fidedignidade** (confiabilidade): capacidade de sustentar os fatos que atesta, o que depende do rigor do procedimento no momento da **produção**.
- Ameaça principal: **obsolescência tecnológica** de formatos, suportes e programas; respostas: migração, atualização de suporte e uso de formatos abertos.

> **⚠️ Pegadinha:** digitalizar um documento em papel não o torna nato-digital e não transforma um GED em SIGAD.

#### Revisão relâmpago
- Gestão = produção, utilização, avaliação e destinação; alcança as fases corrente e intermediária.
- Correspondência particular vai fechada ao destinatário.
- Anexação é definitiva; apensação é provisória e preserva a identidade de cada processo.
- Alfabético, geográfico, variadex e ideográfico alfabético são diretos; numéricos são indiretos.
- Filho, Júnior, Neto e Sobrinho acompanham o sobrenome, mas não entram na ordenação.
- Eliminação = tabela aprovada + listagem + autorização da instituição arquivística + edital + termo.
- NOBRADE: fundo (1) > seção (2) > série (3) > dossiê ou processo (4) > item (5); subseção (2,5) e subsérie (3,5) são intermediários.
- SIGAD segue o e-ARQ Brasil; GED sozinho não faz gestão arquivística.
`,
      },
    ],
  });

  pfModulos.push({
    id: "pf-etica",
    title: "Ética no Serviço Público",
    icon: "🤝",
    description:
      "Ética, moral e valores; Código de Ética do Decreto 1.171/1994 (regras deontológicas, deveres, vedações, Comissões de Ética e censura); Decreto 6.029/2007; conflito de interesses na Lei 12.813/2013.",
    sections: [
      {
        id: "pf-etica",
        title: "Ética, Decreto 1.171/1994, Decreto 6.029/2007 e Lei 12.813/2013",
        content: `
### O que o Cebraspe cobra aqui
Em Ética o Cebraspe trabalha quase sempre com a **letra do Decreto 1.171/1994**, trocando palavras-chave: dever que vira vedação, ressalva que some, pena que muda de nome. Na Lei 12.813/2013 o alvo é a diferença entre o que vale **durante** e **após** o exercício, o prazo de **seis meses** e a regra de que o conflito existe **mesmo sem dano nem vantagem**. Desconfie de itens que tornam o Código mais brando, ou mais severo, do que ele é.

#### Ética, moral e valores
| Ética | Moral |
| --- | --- |
| Reflexão teórica e crítica sobre o comportamento humano | Conjunto de normas, costumes e valores praticados por um grupo |
| Pretende alcance universal | Varia no tempo e entre culturas |
| Pergunta "por que agir assim?" | Diz "como se deve agir" |

- **Valores** são referências do que se considera desejável (honestidade, justiça, respeito) e orientam as escolhas.
- No serviço público, ética exige mais do que legalidade: o Código manda decidir entre o legal e o ilegal, o justo e o injusto, o conveniente e o inconveniente, o oportuno e o inoportuno, **mas principalmente entre o honesto e o desonesto**.

#### Decreto 1.171/1994: estrutura
O Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal (anexo do decreto) tem: **Seção I — Regras deontológicas** (incisos I a XIII), **Seção II — Principais deveres** (inciso XIV), **Seção III — Vedações** (inciso XV) e o **Capítulo II — Comissões de Ética**.

Regras deontológicas mais cobradas:
- Dignidade, decoro, zelo, eficácia e consciência dos princípios morais são primados maiores.
- A moralidade não se limita à distinção entre o bem e o mal: o fim é sempre o **bem comum**, e o equilíbrio entre **legalidade e finalidade** consolida a moralidade do ato.
- A função pública integra-se à vida particular: atos da **vida privada** podem acrescer ou diminuir o bom conceito na vida funcional.
- Salvo os casos de segurança nacional, **investigações policiais** ou interesse superior do Estado e da Administração, preservados em processo previamente declarado sigiloso, a **publicidade** de qualquer ato administrativo é requisito de eficácia e moralidade.
- Toda pessoa tem **direito à verdade**; o servidor não pode omiti-la ou falseá-la, ainda que contrária aos interesses da própria pessoa ou da Administração.
- Tratar mal quem paga tributos causa **dano moral**; deixar alguém à espera, permitindo longas filas, é atitude antiética e **grave dano moral** aos usuários.
- Toda ausência injustificada do local de trabalho é fator de desmoralização do serviço público.

> **⚠️ Pegadinha:** o sigilo é **exceção** expressa no Código (segurança nacional, investigações policiais, interesse superior do Estado). Item que diga que o Código não admite nenhuma ressalva à publicidade está errado.

| Deveres (XIV) — exemplos | Vedações (XV) — exemplos |
| --- | --- |
| Desempenhar a tempo as atribuições do cargo | Usar o cargo, amizades ou influência para obter favorecimento para si ou para outrem |
| Ser probo, reto, leal e justo, escolhendo a opção mais vantajosa para o bem comum | Prejudicar deliberadamente a reputação de outros servidores ou de cidadãos |
| Respeitar a hierarquia, sem temor de representar contra comprometimento indevido | Ser conivente com erro ou infração por espírito de solidariedade |
| Resistir a pressões que visem vantagens indevidas e denunciá-las | Usar artifícios para procrastinar ou dificultar o exercício de direito |
| Ser assíduo e frequente ao serviço | Deixar de utilizar os avanços técnicos e científicos ao seu alcance |
| Comunicar imediatamente aos superiores ato ou fato contrário ao interesse público | Pleitear ou receber gratificação, prêmio ou vantagem para cumprir sua missão |
| Apresentar-se ao trabalho com vestimentas adequadas | Alterar ou deturpar o teor de documentos que deva encaminhar |
| Facilitar a fiscalização de seus atos por quem de direito | Retirar da repartição, sem autorização, documento, livro ou bem público |
| Manter-se atualizado com instruções, normas e legislação do órgão | Fazer uso de informação privilegiada em benefício próprio, de parentes ou de terceiros |
| Exercer com estrita moderação as prerrogativas funcionais | Apresentar-se embriagado no serviço ou, habitualmente, fora dele |

> **⚠️ Pegadinha:** várias vedações começam com "deixar de" (deixar de utilizar os avanços técnicos). Não confunda a forma negativa com dever.

> **⚠️ Pegadinha:** a embriaguez fora do serviço só é vedada quando **habitual**.

#### Comissões de Ética e a pena de censura
- Todo órgão e entidade da administração federal direta, indireta autárquica e fundacional (ou que exerça atribuição delegada pelo poder público) deve ter uma **Comissão de Ética**, que orienta e aconselha sobre a ética profissional e conhece de imputação ou procedimento suscetível de censura.
- A pena aplicável pela Comissão de Ética é a **censura**, fundamentada em parecer **assinado por todos os integrantes**, com ciência do faltoso.
- A comissão fornece aos órgãos de pessoal os registros sobre a conduta ética do servidor, para instruir promoções e demais procedimentos da carreira.
- Para fins de apuração ética, é **servidor público** todo aquele que, por força de lei, contrato ou qualquer ato jurídico, presta serviço permanente, temporário ou excepcional, **ainda que sem retribuição financeira**, ligado direta ou indiretamente a órgão do poder estatal (inclusive empresas públicas e sociedades de economia mista).

> **⚠️ Pegadinha:** censura **não** é penalidade disciplinar da Lei 8.112/1990 (advertência, suspensão, demissão etc.). A Comissão de Ética não suspende nem demite; a infração disciplinar é apurada pela via própria (sindicância ou processo administrativo disciplinar).

#### Sistema de Gestão da Ética (Decreto 6.029/2007)
- Integram o sistema a **Comissão de Ética Pública (CEP)**, as Comissões de Ética do Decreto 1.171/1994 e as demais comissões de ética e equivalentes do Executivo federal.
- A CEP tem **sete** brasileiros de idoneidade moral, reputação ilibada e notória experiência em administração pública, designados pelo Presidente da República para mandatos de **três anos**, não coincidentes, permitida uma única recondução.
- Cada Comissão de Ética setorial tem **três membros titulares e três suplentes**, do quadro permanente, designados pelo dirigente máximo para mandatos não coincidentes de três anos.
- Qualquer cidadão, agente público, pessoa jurídica de direito privado, associação ou entidade de classe pode provocar a atuação das comissões.
- O procedimento de apuração tramita com a chancela de **reservado** até ser concluído.

#### Conflito de interesses (Lei 12.813/2013)
- **Conflito de interesses**: situação gerada pelo confronto entre interesses públicos e privados que possa comprometer o interesse coletivo ou influenciar, de maneira imprópria, o desempenho da função pública.
- **Informação privilegiada**: a que diz respeito a assuntos sigilosos ou é relevante ao processo de decisão no Executivo federal, com repercussão econômica ou financeira, e não é de amplo conhecimento público.
- O conflito **independe** de lesão ao patrimônio público e do recebimento de vantagem pelo agente ou por terceiro. Em caso de dúvida, o agente consulta a CEP ou a CGU.

| Durante o exercício (art. 5º) — exemplos | Após o exercício (art. 6º) |
| --- | --- |
| Divulgar ou usar informação privilegiada | **A qualquer tempo**: divulgar ou usar informação privilegiada |
| Prestar serviço ou manter negócio com quem tem interesse em decisão sua | **Por 6 meses** após o desligamento, salvo autorização da CEP ou da CGU: prestar serviço a quem teve relacionamento relevante com ele em razão do cargo |
| Atuar, ainda que informalmente, como procurador ou intermediário de interesses privados em órgãos públicos | No mesmo prazo: aceitar cargo de administrador ou conselheiro em pessoa que atue na área de competência do cargo |
| Receber presente de quem tenha interesse em decisão sua, fora dos limites do regulamento | No mesmo prazo: celebrar contratos de serviço ou consultoria com órgãos do Executivo ligados ao antigo órgão |
| Prestar serviço, ainda que eventual, a empresa controlada, fiscalizada ou regulada pelo ente a que está vinculado | No mesmo prazo: intervir em favor de interesse privado perante o órgão em que atuou |

- As situações do art. 5º valem **mesmo em licença ou afastamento**.
- O regime completo, com a quarentena, alcança ministros, cargos de natureza especial, dirigentes de autarquias, fundações, empresas públicas e sociedades de economia mista, cargos em comissão de nível mais elevado e quem tem acesso a informação privilegiada. A prevenção, as situações do art. 5º e o uso de informação privilegiada a qualquer tempo **estendem-se a todos os agentes públicos** do Executivo federal.
- Praticar essas condutas configura **improbidade administrativa** e sujeita o agente à **demissão** ou medida equivalente.

> **⚠️ Pegadinha:** a quarentena de **seis meses** conta da dispensa, exoneração, destituição, demissão ou aposentadoria; o uso de informação privilegiada é vedado **a qualquer tempo**, sem prazo.

#### Lei 8.429/1992 (só menção)
A Lei de Improbidade Administrativa, alterada pela Lei 14.230/2021, prevê atos que importam **enriquecimento ilícito**, que causam **lesão ao erário** e que **atentam contra os princípios** da administração pública, e exige **dolo** para a configuração de qualquer deles.

#### Revisão relâmpago
- Ética é reflexão; moral é a prática de um grupo.
- Decidir principalmente entre o honesto e o desonesto.
- A vida privada pode afetar o conceito funcional.
- Publicidade é a regra; investigações policiais em processo declarado sigiloso são exceção.
- A Comissão de Ética aplica **censura**, em parecer assinado por todos os integrantes.
- Servidor, para fins éticos, inclui quem atua sem remuneração.
- Conflito de interesses independe de dano ou vantagem; quarentena de 6 meses; informação privilegiada, nunca.
`,
      },
    ],
  });
  pfModulos.push({
    id: "pf-informatica",
    title: "Noções de Informática",
    icon: "🖥️",
    description:
      "Windows 10/11, editores de texto e planilhas (Microsoft 365 e LibreOffice), internet e intranet, navegadores, protocolos, correio eletrônico, nuvem, busca e segurança da informação para o usuário.",
    sections: [
      {
        id: "pf-info-sistemas",
        title: "Windows, editores de texto e planilhas",
        content: `
### O que o Cebraspe cobra aqui
Em Noções de Informática para nível médio, o Cebraspe cobra o uso do dia a dia: o que um atalho faz, para onde vai um arquivo excluído, o que acontece quando se arrasta uma pasta e, principalmente, **qual valor uma fórmula retorna** e **como ela fica depois de copiada**. Os itens de planilha trazem uma grade pequena: faça a conta e ajuste as referências com calma. Diferenças entre Microsoft 365 e LibreOffice aparecem em detalhes de sintaxe e de atalho.

#### Windows 10 e 11: arquivos e pastas
- O **Explorador de Arquivos** organiza unidades, pastas e arquivos; **Este Computador** mostra as unidades; o **Acesso rápido** (ou **Início**) reúne pastas fixadas e arquivos recentes.
- Nome de arquivo não pode conter os caracteres \`\\ / : * ? " < > |\`.
- Por padrão, o Windows **oculta as extensões dos tipos de arquivo conhecidos**; isso se altera nas opções de exibição do Explorador.
- Arrastar com o mouse **na mesma unidade move**; **para outra unidade copia**. Com **Ctrl** pressionado, copia; com **Shift**, move; com **Alt**, cria atalho.
- Um **atalho** é só um apontador: apagá-lo não apaga o arquivo original.

#### Lixeira
- **Delete** envia o item de uma unidade local para a Lixeira; **Shift+Delete** exclui definitivamente, sem passar por ela.
- Itens apagados de **pen drive, cartão de memória ou unidade de rede** em regra **não** vão para a Lixeira: são excluídos definitivamente.
- Item maior que o espaço reservado à Lixeira é excluído definitivamente (o Windows avisa antes).
- **Restaurar** devolve o item à pasta de origem; **esvaziar** a Lixeira libera o espaço.

> **⚠️ Pegadinha:** "todo arquivo excluído pode ser recuperado na Lixeira" é falso: Shift+Delete, mídias removíveis e unidades de rede escapam dela.

#### Atalhos mais cobrados
| Atalho | Ação |
| --- | --- |
| Win+E | Abre o Explorador de Arquivos |
| Win+D | Mostra ou oculta a área de trabalho |
| Win+L | Bloqueia a sessão |
| Win+R | Abre a caixa Executar |
| Win+I | Abre as Configurações |
| Win+V | Histórico da área de transferência (se ativado) |
| Win+Shift+S | Captura de parte da tela |
| Win+Tab | Visão de Tarefas (inclui áreas de trabalho virtuais) |
| Alt+Tab | Alterna entre as janelas abertas |
| Ctrl+Shift+Esc | Abre o Gerenciador de Tarefas |
| Alt+F4 | Fecha a janela ativa |
| F2 | Renomeia o item selecionado |
| Ctrl+Shift+N | Cria nova pasta no Explorador |
| Ctrl+A, Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Z | Selecionar tudo, copiar, recortar, colar, desfazer |

#### Extensões comuns
| Extensão | Tipo |
| --- | --- |
| .docx / .odt | Texto (Word / Writer) |
| .xlsx / .ods | Planilha (Excel / Calc) |
| .pptx / .odp | Apresentação (PowerPoint / Impress) |
| .pdf | Documento portátil |
| .txt / .csv | Texto puro / valores separados por delimitador |
| .exe / .msi | Executável / instalador do Windows |
| .zip / .rar | Arquivo compactado |
| .jpg / .png | Imagem |

> **⚠️ Pegadinha:** como as extensões conhecidas ficam ocultas, um anexo chamado \`relatorio.pdf.exe\` aparece como \`relatorio.pdf\` — e é um executável.

#### Planilhas: o essencial
- A fórmula começa com \`=\`; no Brasil, os argumentos são separados por **ponto e vírgula** (\`=SOMA(A1;B1)\`) e o intervalo usa dois-pontos (\`A1:A10\`).
- Operadores: \`+ - * / ^\` e \`&\` (concatena texto). Comparação: \`= <> > < >= <=\`.
- Referência a outra planilha: no Excel, \`Planilha2!A1\`; no Calc, \`Planilha2.A1\` (ou \`$Planilha2.A1\`).
- Para alternar o tipo de referência enquanto edita a fórmula: **F4** no Excel; **Shift+F4** no Calc.

| Referência | Ao copiar a fórmula |
| --- | --- |
| \`A1\` (relativa) | Linha e coluna se ajustam ao deslocamento |
| \`$A$1\` (absoluta) | Nada muda |
| \`$A1\` (mista) | Coluna fixa; a linha se ajusta |
| \`A$1\` (mista) | Linha fixa; a coluna se ajusta |

Ao copiar, cada referência relativa anda **o mesmo número de linhas e colunas** que a célula andou:

\`\`\`
     A          B       C        D
1  Item       Qtd    Preço    Total
2  Papel       10      20     =B2*C2           -> 200
3  Toner        2     150     =B3*C3           -> 300
4  Envelope    50       1     =B4*C4           -> 50
5  Total                      =SOMA(D2:D4)     -> 550
6  Desconto   10%
7  A pagar                    =D5*(1-$B$6)     -> 495

D2 arrastada até D4:          =B2*C2 vira =B3*C3 e =B4*C4
D7 copiada para E8 (+1 col, +1 lin): =E6*(1-$B$6)    ($B$6 não muda)
=$B2*C$1 copiada de E2 para F4 (+1 col, +2 lin): =$B4*D$1
=D2/D5 em E2 copiada para E3: =D3/D6 -> #DIV/0! (D6 vazia); o certo era =D2/$D$5
\`\`\`

#### Funções mais cobradas (sobre a grade acima)
| Função | O que faz | Exemplo e resultado |
| --- | --- | --- |
| SOMA | Soma valores | \`=SOMA(D2:D4)\` → 550 |
| MÉDIA | Média aritmética; ignora células vazias e texto | \`=MÉDIA(C2:C4)\` → 57 |
| MÁXIMO / MÍNIMO | Maior / menor valor | \`=MÁXIMO(C2:C4)\` → 150 |
| SE | Testa uma condição | \`=SE(D2>=250;"Alto";"Normal")\` → Normal |
| CONT.SE | Conta células que atendem a um critério | \`=CONT.SE(B2:B4;">5")\` → 2 |
| SOMASE | Soma conforme um critério | \`=SOMASE(B2:B4;">5";D2:D4)\` → 250 |
| CONT.VALORES / CONT.NÚM | Conta células não vazias / com números | \`=CONT.NÚM(B2:B4)\` → 3 |
| PROCV | Procura na 1ª coluna e devolve a coluna indicada | \`=PROCV("Toner";A2:D4;4;FALSO)\` → 300 |
| PROCX | Procura em uma coluna e devolve outra, em qualquer posição | \`=PROCX("Toner";A2:A4;D2:D4)\` → 300 |

> **⚠️ Pegadinha:** o PROCV procura só na **primeira coluna** do intervalo e devolve valores à direita. Se o 4º argumento for omitido, a busca é **aproximada** (exige a 1ª coluna em ordem crescente); para correspondência exata, use FALSO ou 0. Valor não encontrado gera \`#N/D\`.

> **⚠️ Pegadinha:** o PROCX (Microsoft 365) faz correspondência exata por padrão e pode devolver colunas à esquerda da coluna pesquisada. Versões antigas do Excel não o reconhecem.

- Erros comuns no Excel: \`#DIV/0!\` (divisão por zero ou célula vazia), \`#N/D\` (valor não disponível), \`#REF!\` (referência inválida), \`#NOME?\` (nome de função errado), \`#VALOR!\` (tipo de argumento errado).
- MÉDIA ignora células vazias, mas **considera zeros**.

#### Editores de texto: Word e Writer
| Recurso | Microsoft Word (português) | LibreOffice Writer (português) |
| --- | --- | --- |
| Negrito, itálico, sublinhado | Ctrl+N, Ctrl+I, Ctrl+S | Ctrl+B, Ctrl+I, Ctrl+U |
| Salvar | Ctrl+B | Ctrl+S |
| Formato nativo | .docx | .odt |
| Exportar como PDF | Salvar como / Exportar | Arquivo → Exportar como PDF |

- **Estilos** de título permitem gerar **sumário automático**.
- **Controlar alterações** registra inserções e exclusões para revisão; **comentários** ficam à margem.
- **Mala direta** combina um modelo com uma lista de destinatários (planilha ou banco de dados).
- **Ctrl+Enter** insere quebra de página nos dois editores.

#### Revisão relâmpago
- Arrastar: mesma unidade move; outra unidade copia; Ctrl copia; Shift move.
- Shift+Delete, pen drive e rede não passam pela Lixeira.
- Extensões conhecidas ficam ocultas por padrão: cuidado com \`.pdf.exe\`.
- Copiar fórmula desloca as referências relativas; \`$\` trava coluna ou linha.
- \`$A1\` trava a coluna; \`A$1\` trava a linha; \`$A$1\` trava tudo.
- PROCV: 1ª coluna, índice da coluna, FALSO para exata.
- CONT.SE conta; SOMASE soma; critérios com operador vão entre aspas (\`">5"\`).
`,
      },
      {
        id: "pf-info-redes",
        title: "Internet, navegadores, protocolos, e-mail, nuvem e busca",
        content: `
### O que o Cebraspe cobra aqui
Os itens de redes para nível médio giram em torno de situações de uso: configurar o e-mail no celular e no computador, mandar uma mensagem com cópia oculta, navegar em janela anônima, guardar arquivos na nuvem, pesquisar com operadores. A banca troca **POP3 por IMAP**, **intranet por internet**, **IaaS por SaaS** e exagera o que a navegação anônima ou o HTTPS garantem. Pergunte sempre: *quem guarda a informação* e *quem consegue vê-la*.

#### Internet, intranet e extranet
| Rede | O que é |
| --- | --- |
| **Internet** | Rede mundial e pública de redes, baseada na pilha TCP/IP |
| **Intranet** | Rede privada da organização que usa **os mesmos protocolos e serviços da internet** (TCP/IP, HTTP, e-mail), com acesso restrito a usuários autorizados |
| **Extranet** | Parte da intranet aberta, de forma controlada, a parceiros externos autorizados |

- A intranet pode ser acessada de fora da organização por **VPN**, que cria um túnel criptografado pela internet.

> **⚠️ Pegadinha:** intranet não é "rede sem internet" nem exige protocolos próprios. O que a define é o **acesso restrito**, não a tecnologia.

#### Navegadores
- **Cookies**: pequenos arquivos de texto gravados pelo site no navegador para lembrar sessão, preferências e itens; podem ser de sessão (somem ao fechar) ou persistentes; os **de terceiros** vêm de outros domínios e servem a rastreamento e publicidade.
- **Cache**: cópias locais de páginas, imagens e scripts, para carregar mais rápido.
- **Histórico**: lista das páginas visitadas.
- **Navegação anônima ou privativa** (InPrivate, no Edge): ao fechar a janela, descarta o histórico, os cookies, o cache e os dados de formulário **daquela sessão**.

| Atalho (Chrome e Edge) | Ação |
| --- | --- |
| Ctrl+T / Ctrl+W | Nova aba / fecha a aba |
| Ctrl+Shift+T | Reabre a última aba fechada |
| Ctrl+Shift+N | Janela anônima (no Firefox, Ctrl+Shift+P) |
| Ctrl+H / Ctrl+J | Histórico / downloads |
| Ctrl+D | Adiciona aos favoritos |
| Ctrl+Shift+Delete | Limpar dados de navegação |
| F5 / Ctrl+F5 | Recarrega / recarrega ignorando o cache |

> **⚠️ Pegadinha:** a navegação anônima **não** esconde os sites visitados do provedor de acesso, do administrador da rede ou dos próprios sites, e não protege contra malware. Downloads e favoritos criados nela permanecem.

#### URL e protocolos
\`\`\`
https://www.gov.br:443/pf/pt-br/servicos?tipo=passaporte#prazo
protocolo: https | host: www.gov.br | porta: 443 | caminho: /pf/pt-br/servicos
consulta: ?tipo=passaporte | fragmento: #prazo
\`\`\`

| Protocolo | Para quê | Porta padrão |
| --- | --- | --- |
| HTTP | Transferir páginas web, sem criptografia | 80 |
| HTTPS | HTTP sobre TLS, com criptografia | 443 |
| DNS | Traduzir nomes de domínio em endereços IP | 53 |
| FTP | Transferir arquivos | 20 e 21 |
| SMTP | Enviar e-mail | 25 (587 para envio autenticado) |
| POP3 | Receber e-mail (baixar) | 110 (995 com TLS) |
| IMAP | Receber e-mail (manter no servidor) | 143 (993 com TLS) |
| SSH | Acesso remoto seguro | 22 |

- O **HTTPS** garante confidencialidade e integridade da comunicação e autentica o servidor por certificado digital.

> **⚠️ Pegadinha:** o cadeado do HTTPS indica conexão cifrada com o servidor que apresentou aquele certificado; **não** garante que o site seja honesto. Página de phishing também pode ter cadeado.

#### Correio eletrônico
- **SMTP** envia (do cliente ao servidor e entre servidores); **POP3** e **IMAP** recebem.
- **Webmail**: acesso pelo navegador (HTTP/HTTPS), sem configurar POP3 ou IMAP no computador; o servidor do provedor continua usando SMTP e IMAP por trás.

| Critério | **POP3** | **IMAP** |
| --- | --- | --- |
| Onde ficam as mensagens | São baixadas para o dispositivo; por padrão, saem do servidor | Ficam no servidor; o cliente trabalha sobre elas |
| Vários dispositivos | Ruim: cada um baixa por conta própria | Bom: pastas e marcações sincronizadas |
| Leitura sem conexão | Natural, pois a cópia é local | Possível com cache, mas o original está no servidor |
| Uso típico | Um único computador | Computador + celular + webmail |

| Campo | Quem vê o quê |
| --- | --- |
| **Para** | Destinatário principal; visível a todos |
| **Cc** (com cópia) | Recebe cópia; visível a todos |
| **Cco** (com cópia oculta) | Recebe cópia; **ninguém** vê os endereços em Cco, nem os outros destinatários em Cco |

- Quem está em Cco vê os endereços de Para e Cc.
- **Responder** vai só ao remetente; **Responder a todos** inclui Para e Cc (nunca os Cco, que não aparecem); **Encaminhar** reenvia a mensagem com os anexos a novos destinatários.

> **⚠️ Pegadinha:** POP3 pode ser configurado para "deixar cópia no servidor", mas continua sem sincronizar pastas e marcações de lida entre dispositivos. Para isso, a resposta é IMAP.

#### Computação em nuvem
Características essenciais: autoatendimento sob demanda, amplo acesso pela rede, pool de recursos compartilhados, **elasticidade** rápida e serviço medido (paga-se pelo uso).

| Modelo de serviço | O provedor entrega | O cliente gerencia | Exemplo |
| --- | --- | --- | --- |
| **IaaS** | Máquinas virtuais, armazenamento, rede | Sistema operacional, aplicações, dados | Servidores virtuais alugados |
| **PaaS** | Plataforma pronta (SO, banco, ambiente de execução) | Aplicações que desenvolve e seus dados | Ambiente para publicar sistemas |
| **SaaS** | Aplicação pronta, acessada pela rede | Só o uso e os dados | Webmail, editor de textos online |

| Modelo de implantação | Característica |
| --- | --- |
| **Pública** | Infraestrutura do provedor, compartilhada por vários clientes |
| **Privada** | Exclusiva de uma organização (no local ou em terceiro) |
| **Híbrida** | Combina pública e privada, com portabilidade de dados e aplicações |
| **Comunitária** | Compartilhada por organizações com interesses comuns |

- **Armazenamento e sincronização** (OneDrive, Google Drive e similares): a pasta local espelha a nuvem. Excluir ou alterar o arquivo na pasta sincronizada **replica a mudança** na nuvem e nos demais dispositivos.

> **⚠️ Pegadinha:** sincronização **não** é backup. Arquivo apagado ou criptografado por ransomware na pasta local é apagado ou criptografado também na nuvem (a lixeira e o histórico de versões do serviço ajudam, por tempo limitado).

#### Ferramentas de busca
| Operador | Efeito | Exemplo |
| --- | --- | --- |
| Aspas | Busca a expressão exata | \`"tabela de temporalidade"\` |
| Sinal de menos | Exclui o termo | \`passaporte -emergencial\` |
| site: | Restringe a um site ou domínio | \`site:gov.br\` |
| filetype: | Restringe ao tipo de arquivo | \`filetype:pdf\` |
| OR | Um termo ou outro (em maiúsculas) | \`arquivologia OR arquivística\` |
| intitle: | Termo no título da página | \`intitle:edital\` |

> **⚠️ Pegadinha:** os operadores \`site:\` e \`filetype:\` vão colados ao valor, sem espaço. Combinar operadores restringe ainda mais a busca.

#### Revisão relâmpago
- Intranet usa os protocolos da internet, com acesso restrito; acesso externo por VPN.
- Anônima apaga rastros **locais** da sessão; provedor e rede continuam vendo.
- DNS traduz nome em IP; HTTPS = HTTP + TLS (porta 443).
- SMTP envia; POP3 baixa; IMAP mantém no servidor e sincroniza.
- Cco: ninguém vê; quem está em Cco vê Para e Cc.
- IaaS = infraestrutura; PaaS = plataforma; SaaS = software pronto.
- Sincronizar não é fazer backup.
`,
      },
      {
        id: "pf-info-seguranca",
        title: "Segurança da informação para o usuário",
        content: `
### O que o Cebraspe cobra aqui
Segurança para nível médio é cobrada do ponto de vista do usuário: reconhecer o tipo de código malicioso pela forma como age e se propaga, identificar o golpe pela descrição, saber o que firewall, antivírus e segundo fator **não** fazem, escolher a rotina de backup e entender, sem matemática, o papel das chaves na criptografia. A banca troca **worm por vírus**, **incremental por diferencial**, **phishing por pharming** e atribui à assinatura digital um sigilo que ela não dá.

#### Pilares
- **Confidencialidade**: só quem tem autorização acessa.
- **Integridade**: a informação não foi alterada indevidamente.
- **Disponibilidade**: a informação está acessível quando necessária.
- **Autenticidade** e **não repúdio** (irretratabilidade): comprovar a autoria, sem que o autor possa negá-la.

#### Códigos maliciosos (malware)
| Tipo | Como age | Propagação |
| --- | --- | --- |
| **Vírus** | Insere cópias de si mesmo em outros programas e arquivos; age quando o hospedeiro é executado | Depende da execução do arquivo infectado |
| **Worm** | Propaga-se sozinho pela rede, enviando cópias de si mesmo e explorando vulnerabilidades; consome muitos recursos | Automática, sem hospedeiro |
| **Bot** e **botnet** | Permite controle remoto do computador ("zumbi"); a rede de bots é usada em ataques de negação de serviço (DDoS) e envio de spam | Pode propagar-se como worm |
| **Cavalo de troia** (trojan) | Parece útil, mas executa também funções maliciosas ocultas | Não se replica; o usuário o instala |
| **Spyware** | Monitora as atividades e envia informações a terceiros | Em regra, não se replica |
| **Keylogger** / **screenlogger** | Spyware que captura as teclas digitadas / a tela e os cliques | — |
| **Adware** | Exibe propaganda | — |
| **Backdoor** | Garante o retorno do invasor ao equipamento comprometido | — |
| **Rootkit** | Esconde e mantém a presença do invasor ou de outro malware | — |
| **Ransomware** | Torna os dados inacessíveis (em geral, por criptografia) e exige resgate | Variável |

> **⚠️ Pegadinha:** o worm **não** precisa se anexar a outro arquivo nem que o usuário execute um hospedeiro; o vírus precisa. Cavalo de troia **não** se replica.

> **⚠️ Pegadinha:** o screenlogger foi criado para driblar teclados virtuais, que derrotam o keylogger comum.

#### Golpes
| Golpe | Como funciona |
| --- | --- |
| **Phishing** | Mensagem ou página falsa que se passa por instituição conhecida para obter dados pessoais e financeiros |
| **Spear phishing** | Phishing dirigido a uma pessoa ou a um órgão específico, com dados reais para parecer legítimo |
| **Pharming** | Redireciona a navegação para site falso por alteração no serviço de DNS (ou no arquivo de hosts), mesmo com o endereço digitado corretamente |
| **Engenharia social** | Manipulação psicológica (urgência, autoridade, curiosidade) para obter informação ou acesso |
| **Hoax** (boato) | Mensagem falsa e alarmista que pede para ser repassada |

> **⚠️ Pegadinha:** no phishing a vítima clica no link enganoso; no **pharming** ela digita o endereço **certo** e mesmo assim cai na página falsa.

#### Defesas
- **Firewall**: filtra o tráfego de rede conforme regras, bloqueando conexões não autorizadas. **Não** substitui o antivírus e não impede o usuário de abrir um anexo malicioso.
- **Antivírus**: detecta e remove malware por assinaturas e por análise de comportamento; precisa estar atualizado.
- **Atualizações** do sistema e dos programas corrigem vulnerabilidades exploradas por worms.
- **Autenticação de dois fatores**: combina fatores de **categorias diferentes**.

| Fator | Exemplos |
| --- | --- |
| Algo que você **sabe** | Senha, PIN, resposta secreta |
| Algo que você **tem** | Celular com aplicativo autenticador, token, cartão |
| Algo que você **é** | Impressão digital, reconhecimento facial |

> **⚠️ Pegadinha:** senha + PIN são duas etapas, mas **um só fator** (ambos "algo que você sabe"). Não é autenticação de dois fatores.

- **Senha forte**: longa (uma frase-senha é boa opção), sem dados pessoais, diferente para cada serviço; um **gerenciador de senhas** ajuda a não reutilizar.

#### Backup
| Tipo | O que copia | Tempo e espaço | Para restaurar |
| --- | --- | --- | --- |
| **Completo** | Todos os dados selecionados | O mais lento e o maior | Só o último completo |
| **Incremental** | O que mudou desde o **último backup de qualquer tipo** | O mais rápido e o menor | O completo + **todos** os incrementais seguintes, em ordem |
| **Diferencial** | O que mudou desde o **último backup completo** | Cresce a cada dia | O completo + **só o último** diferencial |

\`\`\`
Rotina: completo no domingo; diários de segunda a sábado. Falha na sexta antes do backup do dia.
Com incrementais:  completo (dom) + seg + ter + qua + qui
Com diferenciais:  completo (dom) + qui
\`\`\`

- **Regra 3-2-1**: três cópias, em dois tipos de mídia, uma delas fora do local.
- Backup que fica sempre conectado ao computador pode ser criptografado junto por ransomware.

#### Criptografia, assinatura e certificado digital
| Critério | **Simétrica** | **Assimétrica** |
| --- | --- | --- |
| Chaves | Uma só, compartilhada | Par: pública (divulgada) e privada (secreta) |
| Desempenho | Rápida | Mais lenta |
| Problema | Distribuir a chave com segurança | Garantir que a chave pública é de quem diz ser |

- **Sigilo**: cifra-se com a **chave pública do destinatário**; só a chave privada dele decifra.
- **Assinatura digital**: o remetente assina com a **própria chave privada** (sobre o resumo, ou hash, da mensagem); qualquer um verifica com a chave pública dele. Garante **autenticidade, integridade e não repúdio**, mas **não** confidencialidade.
- **Hash**: resumo de tamanho fixo; qualquer alteração na mensagem muda o hash.
- **Certificado digital**: documento eletrônico emitido por uma **Autoridade Certificadora (AC)** que vincula uma chave pública a uma pessoa, órgão ou site, com prazo de validade. No Brasil, a **ICP-Brasil** organiza a cadeia de certificação.

> **⚠️ Pegadinha:** mensagem assinada digitalmente pode ser lida por qualquer um. Para sigilo, é preciso cifrá-la também.

#### Revisão relâmpago
- Vírus precisa de hospedeiro; worm se espalha sozinho; trojan não se replica.
- Ransomware sequestra dados; botnet é rede de computadores zumbis.
- Phishing engana com link; pharming adultera o DNS.
- Firewall filtra tráfego; não é antivírus.
- Dois fatores = categorias diferentes (sabe, tem, é).
- Incremental: completo + todos; diferencial: completo + último.
- Assinatura digital: chave privada do remetente; não dá sigilo.
`,
      },
    ],
  });
  pfQuestoes.push(
    // ---------- pf-arq-conceitos ----------
    ce(
      PF_ARQ,
      "Teoria das três idades",
      "Os processos de concessão de diárias já encerrados, guardados no depósito do térreo à espera do fim do prazo de guarda para serem eliminados, encontram-se na fase intermediária, pois são mantidos por razões de interesse administrativo, embora já não sejam de uso corrente.",
      true,
      "A Lei 8.159/1991 (art. 8º, § 2º) chama de intermediários os documentos que, não sendo de uso corrente, aguardam a eliminação ou o recolhimento por razões de interesse administrativo. A espera do prazo da tabela de temporalidade é justamente essa situação.",
      "pf-arq-conceitos",
      SR_ARQUIVO,
    ),
    ce(
      PF_ARQ,
      "Transferência x recolhimento",
      "A remessa dos processos encerrados dos setores de trabalho para o depósito do térreo denomina-se recolhimento, termo que designa também o envio dos documentos de valor histórico à instituição arquivística.",
      false,
      "A passagem da fase corrente para a intermediária chama-se transferência. Recolhimento é apenas a entrada dos documentos no arquivo permanente, como no envio dos documentos históricos à instituição arquivística.",
      "pf-arq-conceitos",
      SR_ARQUIVO,
    ),
    ce(
      PF_ARQ,
      "Princípios arquivísticos",
      "Com a extinção de uma delegacia descentralizada, seus documentos foram enviados ao arquivo da superintendência regional, que já guardava documentos sobre os mesmos assuntos produzidos pela própria superintendência. Nessa situação, o princípio da proveniência impede que os documentos da delegacia extinta sejam intercalados aos da superintendência, ainda que tratem dos mesmos assuntos.",
      true,
      "Pelo princípio da proveniência (respeito aos fundos), os documentos de um produtor formam um conjunto próprio e não se misturam aos de outro produtor. A coincidência de assuntos não autoriza a fusão dos acervos.",
      "pf-arq-conceitos",
    ),
    ce(
      PF_ARQ,
      "Princípios arquivísticos",
      "O princípio da organicidade estabelece que o documento de arquivo conserva caráter único em função do contexto em que foi produzido, ainda que existam outras cópias de igual teor.",
      false,
      "A descrição corresponde ao princípio da unicidade. A organicidade refere-se às relações que os documentos mantêm entre si, espelhando as funções e a estrutura da entidade que os produziu.",
      "pf-arq-conceitos",
    ),
    ce(
      PF_ARQ,
      "Lei 8.159/1991",
      "De acordo com a Lei nº 8.159/1991, os arquivos privados identificados pelo poder público como de interesse público e social não podem ser alienados com dispersão ou perda da unidade documental nem transferidos para o exterior, e, havendo alienação, o poder público tem preferência na aquisição.",
      true,
      "É o que dispõe o art. 13 da Lei 8.159/1991 e seu parágrafo único: vedação de alienação com dispersão ou perda da unidade documental e de transferência para o exterior, com direito de preferência do poder público.",
      "pf-arq-conceitos",
    ),
    me(
      PF_ARQ,
      "Espécie x tipo documental",
      "No núcleo de passaportes de uma superintendência regional da PF, são arquivados diariamente diversos \"requerimentos de emissão de passaporte\". Considerando a terminologia arquivística, a expressão entre aspas identifica",
      [
        "uma espécie documental, por indicar a configuração do documento segundo a disposição e a natureza das informações nele contidas.",
        "um gênero documental, já que se trata de documento textual.",
        "um tipo documental, por associar a espécie à atividade que a gerou.",
        "um formato, pois o requerimento é apresentado em folha avulsa.",
        "um suporte, por se tratar de informação registrada em papel.",
      ],
      2,
      "Tipo documental é a espécie acrescida da atividade que a gerou: \"requerimento\" é a espécie; \"requerimento de emissão de passaporte\" é o tipo. Textual é gênero, folha é formato e papel é suporte.",
      "pf-arq-conceitos",
    ),
    // ---------- pf-arq-gestao ----------
    me(
      PF_ARQ,
      "Métodos de arquivamento",
      "Ao reorganizar o arquivo corrente, o chefe do setor de protocolo de uma superintendência quer adotar apenas métodos de arquivamento que permitam localizar os documentos diretamente nas gavetas, sem consulta prévia a índice. Atendem a esse requisito os métodos",
      [
        "numérico simples e alfabético.",
        "dígito-terminal e geográfico.",
        "numérico cronológico e variadex.",
        "geográfico e ideográfico alfabético.",
        "ideográfico numérico duplex e alfabético.",
      ],
      3,
      "Alfabético, geográfico, variadex e ideográfico em ordem alfabética são métodos diretos. Os métodos numéricos (simples, cronológico, dígito-terminal) e o ideográfico numérico (duplex, decimal) são indiretos, porque exigem consulta a índice; por isso cada uma das demais opções contém um método indireto.",
      "pf-arq-gestao",
    ),
    ce(
      PF_ARQ,
      "Regras de alfabetação",
      "Segundo as regras de alfabetação, o nome do servidor Fernando Albuquerque Filho deve ser ordenado como FILHO, Fernando Albuquerque, uma vez que se toma o último elemento do nome como entrada.",
      false,
      "Filho, Júnior, Neto e Sobrinho integram o último sobrenome, mas não são considerados na ordenação. O registro correto é ALBUQUERQUE Filho, Fernando.",
      "pf-arq-gestao",
    ),
    ce(
      PF_ARQ,
      "Protocolo",
      "O envelope com a indicação \"particular\", endereçado nominalmente ao servidor, deve ser encaminhado ao destinatário sem ser aberto pelo protocolo.",
      true,
      "Na rotina de recebimento, o protocolo separa a correspondência oficial da particular e encaminha a particular ao destinatário sem abri-la; só a oficial ostensiva é aberta para registro e classificação.",
      "pf-arq-gestao",
      PROTOCOLO_SIT,
    ),
    ce(
      PF_ARQ,
      "Anexação x apensação",
      "Depois de autuado, se o processo originado do requerimento do cidadão for juntado a outro processo sobre o mesmo assunto, de forma provisória e apenas para estudo conjunto, mantendo cada um sua identidade, ocorrerá anexação.",
      false,
      "A juntada provisória, para estudo e uniformidade de tratamento, com preservação da identidade de cada processo, é a apensação. A anexação é a união definitiva, por dependência.",
      "pf-arq-gestao",
      PROTOCOLO_SIT,
    ),
    ce(
      PF_ARQ,
      "Eliminação de documentos",
      "A comissão permanente de avaliação de documentos de uma superintendência identificou caixas cujo prazo de guarda, segundo a tabela de temporalidade aprovada, já se esgotou, com destinação final \"eliminação\". Nesse caso, a própria tabela aprovada constitui a autorização de eliminação, razão pela qual os documentos podem ser fragmentados de imediato, dispensadas a listagem de eliminação e a publicação de edital de ciência.",
      false,
      "A tabela indica o que pode ser eliminado e quando, mas a eliminação de documentos públicos depende de autorização da instituição arquivística competente (Lei 8.159/1991, art. 9º), o que no Executivo federal se faz com listagem de eliminação aprovada, edital de ciência e termo de eliminação.",
      "pf-arq-gestao",
    ),
    ce(
      PF_ARQ,
      "Arranjo e descrição",
      "Na NOBRADE, a descrição é multinível: o fundo ou a coleção situa-se em nível superior ao da série, e esta, em nível superior ao do dossiê ou processo, que por sua vez está acima do item documental.",
      true,
      "A NOBRADE prevê os níveis 0 (acervo da entidade custodiadora), 1 (fundo ou coleção), 2 (seção), 3 (série), 4 (dossiê ou processo) e 5 (item documental), do geral para o particular, admitindo os níveis intermediários de subseção (2,5) e subsérie (3,5).",
      "pf-arq-gestao",
    ),
    ce(
      PF_ARQ,
      "Documento digital",
      "Um sistema de gerenciamento eletrônico de documentos (GED) que apenas digitaliza, indexa e armazena documentos, sem controlar classificação, prazos de guarda e destinação, não atende, por si só, aos requisitos do e-ARQ Brasil para ser considerado um SIGAD.",
      true,
      "O e-ARQ Brasil exige que o SIGAD faça gestão arquivística: classificação, tramitação, temporalidade, destinação, metadados e trilhas de auditoria. O GED pode compor um SIGAD, mas sozinho não o substitui.",
      "pf-arq-gestao",
    ),
    // ---------- pf-etica ----------
    ce(
      PF_ETI,
      "Comissões de Ética",
      "Segundo o Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal, a pena aplicável ao servidor pela Comissão de Ética é a de censura, cuja fundamentação deve constar do respectivo parecer, assinado por todos os integrantes da comissão, com ciência do faltoso.",
      true,
      "É a redação do inciso XXII do Código (Decreto 1.171/1994). A censura é a sanção ética própria da comissão e não se confunde com as penalidades disciplinares da Lei 8.112/1990.",
      "pf-etica",
    ),
    ce(
      PF_ETI,
      "Regras deontológicas",
      "De acordo com o Decreto nº 1.171/1994, a função pública integra-se à vida particular do servidor, de modo que os fatos e atos verificados na conduta do dia a dia em sua vida privada poderão acrescer ou diminuir o seu bom conceito na vida funcional.",
      true,
      "O inciso VI do Código afirma que a função pública deve ser tida como exercício profissional que se integra na vida particular de cada servidor, e que a conduta na vida privada pode acrescer ou diminuir seu bom conceito funcional.",
      "pf-etica",
    ),
    ce(
      PF_ETI,
      "Publicidade e sigilo",
      "Segundo o Código de Ética do servidor público civil federal, a publicidade de qualquer ato administrativo constitui requisito de eficácia e moralidade sem exceções, de modo que nem mesmo atos relativos a investigações policiais podem ser preservados em processo declarado sigiloso.",
      false,
      "O inciso VII do Código ressalva expressamente os casos de segurança nacional, investigações policiais ou interesse superior do Estado e da Administração, preservados em processo previamente declarado sigiloso, nos termos da lei.",
      "pf-etica",
    ),
    me(
      PF_ETI,
      "Deveres x vedações",
      "Segundo o Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal, figura entre as vedações ao servidor público a conduta de",
      [
        "ser assíduo e frequente ao serviço.",
        "resistir a todas as pressões de superiores hierárquicos, de contratantes e de interessados que visem obter favores ou vantagens indevidas, e denunciá-las.",
        "apresentar-se ao trabalho com vestimentas adequadas ao exercício da função.",
        "facilitar a fiscalização de todos os atos ou serviços por quem de direito.",
        "deixar de utilizar os avanços técnicos e científicos ao seu alcance para o atendimento do seu mister.",
      ],
      4,
      "Deixar de utilizar os avanços técnicos e científicos ao seu alcance é vedação (inciso XV, alínea e). As demais condutas figuram entre os deveres do servidor (inciso XIV), apesar de algumas estarem redigidas de modo a parecer proibição.",
      "pf-etica",
    ),
    ce(
      PF_ETI,
      "Conflito de interesses",
      "Nos termos da Lei nº 12.813/2013, configura conflito de interesses após o exercício do cargo divulgar ou fazer uso, a qualquer tempo, de informação privilegiada obtida em razão das atividades exercidas; já a prestação de serviço a pessoa jurídica com quem o agente tenha estabelecido relacionamento relevante em razão do cargo é vedada no período de seis meses contado do desligamento, salvo autorização da Comissão de Ética Pública ou da CGU, conforme o caso.",
      true,
      "O art. 6º da Lei 12.813/2013 distingue o uso de informação privilegiada, vedado a qualquer tempo (inciso I), das situações sujeitas à quarentena de seis meses contados da dispensa, exoneração, destituição, demissão ou aposentadoria, ressalvada autorização da CEP ou da CGU (inciso II).",
      "pf-etica",
    ),
    ce(
      PF_ETI,
      "Conflito de interesses",
      "Conforme a Lei nº 12.813/2013, a configuração do conflito de interesses pressupõe a ocorrência de lesão ao patrimônio público ou o recebimento de vantagem pelo agente público ou por terceiro.",
      false,
      "O art. 4º, § 2º, da Lei 12.813/2013 dispõe o contrário: a ocorrência de conflito de interesses independe da existência de lesão ao patrimônio público e do recebimento de qualquer vantagem ou ganho pelo agente ou por terceiro.",
      "pf-etica",
    ),
    // ---------- pf-info-sistemas ----------
    ce(
      PF_INF,
      "Planilhas",
      "Se a fórmula =D2/$D$6 for digitada na célula E2 e, em seguida, copiada para a célula E4, esta exibirá o valor 0,2, considerando-se o formato numérico geral.",
      true,
      "Ao copiar de E2 para E4, a referência relativa D2 desce duas linhas e vira D4, enquanto $D$6 permanece fixa. E4 calcula 80/400 = 0,2.",
      "pf-info-sistemas",
      PLAN_MATERIAL,
    ),
    me(
      PF_INF,
      "Planilhas",
      "Considerando a planilha apresentada, a fórmula =PROCV(1004;A2:C6;3;FALSO) retorna",
      ["15.", "Corregedoria.", "12.", "#N/D, pois a coluna pesquisada contém números, e não texto.", "8."],
      0,
      "O PROCV procura 1004 na primeira coluna do intervalo A2:C6 (linha 5), com correspondência exata (FALSO), e devolve a 3ª coluna do intervalo, a coluna C, que contém 15.",
      "pf-info-sistemas",
      PLAN_PROTOCOLO,
    ),
    ce(
      PF_INF,
      "Planilhas",
      "Se na célula D2 for digitada a fórmula =SE(C2>10;\"Atrasado\";\"No prazo\") e ela for copiada para as células D3 a D6, três processos ficarão marcados como \"Atrasado\".",
      false,
      "A cópia ajusta C2 para C3, C4, C5 e C6. Só os valores 12 (NUP 1002) e 15 (NUP 1004) são maiores que 10, de modo que apenas dois processos ficam marcados como \"Atrasado\"; =CONT.SE(C2:C6;\">10\") também retornaria 2.",
      "pf-info-sistemas",
      PLAN_PROTOCOLO,
    ),
    ce(
      PF_INF,
      "Referências relativas e absolutas",
      "Em uma planilha do Excel, se a célula C2 contém a fórmula =A$1*$B2 e essa célula é copiada para D3, a fórmula em D3 será =B$1*$B3.",
      true,
      "A cópia desloca uma coluna e uma linha. Em A$1, a coluna é relativa e a linha está travada: vira B$1. Em $B2, a coluna está travada e a linha é relativa: vira $B3.",
      "pf-info-sistemas",
    ),
    ce(
      PF_INF,
      "Windows: lixeira",
      "No Windows 10 ou 11, um arquivo excluído de um pen drive com a tecla Delete é enviado para a Lixeira, de onde pode ser restaurado para a pasta de origem enquanto a Lixeira não for esvaziada.",
      false,
      "Itens apagados de mídias removíveis, como pen drives, e de unidades de rede, em regra, não passam pela Lixeira: são excluídos definitivamente, e o Windows pede confirmação antes.",
      "pf-info-sistemas",
    ),
    // ---------- pf-info-redes ----------
    ce(
      PF_INF,
      "Correio eletrônico",
      "Um agente administrativo configurou sua conta de correio institucional em um programa cliente de e-mail no computador da repartição e no celular, e quer que as pastas, as mensagens e a marcação de lidas e não lidas fiquem iguais nos dois dispositivos, permanecendo as mensagens armazenadas no servidor. Para isso, o protocolo de recebimento mais adequado é o POP3.",
      false,
      "O protocolo indicado é o IMAP, que mantém as mensagens no servidor e sincroniza pastas e marcações entre dispositivos. O POP3 baixa as mensagens para cada dispositivo e não sincroniza esse estado.",
      "pf-info-redes",
    ),
    ce(
      PF_INF,
      "Correio eletrônico",
      "Um servidor enviou uma mensagem com o endereço do chefe no campo Para, o de uma colega no campo Cc e o da corregedoria no campo Cco. Nessa situação, a colega não saberá, pelo cabeçalho da mensagem recebida, que a corregedoria também a recebeu, ao passo que a corregedoria verá os endereços do chefe e da colega.",
      true,
      "Os endereços em Cco ficam ocultos para todos os demais destinatários, mas quem está em Cco recebe a mensagem com os campos Para e Cc visíveis.",
      "pf-info-redes",
    ),
    ce(
      PF_INF,
      "Navegadores",
      "A navegação em janela anônima ou InPrivate impede que o provedor de acesso e o administrador da rede da superintendência identifiquem os sites visitados, pois o navegador não guarda histórico nem cookies após o encerramento da sessão.",
      false,
      "A navegação anônima só evita que histórico, cookies, cache e dados de formulário daquela sessão fiquem gravados no próprio computador. O tráfego continua visível para o provedor, para a rede da organização e para os sites acessados.",
      "pf-info-redes",
    ),
    me(
      PF_INF,
      "Computação em nuvem",
      "Um órgão contratou um serviço de computação em nuvem no qual o provedor fornece, sob demanda, máquinas virtuais, armazenamento e rede, cabendo à equipe do órgão instalar, configurar e atualizar o sistema operacional e as aplicações. Esse modelo de serviço é denominado",
      [
        "SaaS (software como serviço).",
        "IaaS (infraestrutura como serviço).",
        "PaaS (plataforma como serviço).",
        "nuvem híbrida.",
        "nuvem comunitária.",
      ],
      1,
      "No IaaS o provedor entrega a infraestrutura (máquinas virtuais, armazenamento, rede) e o cliente gerencia sistema operacional e aplicações. No PaaS o sistema operacional e o ambiente de execução já vêm administrados; no SaaS, a aplicação pronta. Nuvem híbrida e comunitária são modelos de implantação, não de serviço.",
      "pf-info-redes",
    ),
    ce(
      PF_INF,
      "Ferramentas de busca",
      "Em um buscador como o Google, a pesquisa site:gov.br filetype:pdf \"tabela de temporalidade\" restringe os resultados a arquivos PDF hospedados no domínio gov.br que contenham a expressão exata entre aspas.",
      true,
      "O operador site: limita a busca ao domínio indicado (incluindo seus subdomínios), filetype: limita ao tipo de arquivo e as aspas exigem a expressão exata. Os operadores combinados restringem a pesquisa.",
      "pf-info-redes",
    ),
    // ---------- pf-info-seguranca ----------
    ce(
      PF_INF,
      "Códigos maliciosos",
      "Diferentemente do vírus, o worm propaga-se automaticamente pelas redes, enviando cópias de si mesmo de um computador a outro, sem precisar se inserir em outros programas ou arquivos nem depender da execução de um hospedeiro.",
      true,
      "O vírus insere cópias de si em outros arquivos e depende da execução do hospedeiro. O worm se propaga sozinho pela rede, explorando vulnerabilidades e enviando cópias de si mesmo.",
      "pf-info-seguranca",
    ),
    ce(
      PF_INF,
      "Backup",
      "Para recuperar os dados até a situação da última cópia disponível, basta restaurar o backup completo de domingo e, em seguida, o backup incremental de quinta-feira.",
      false,
      "Cada incremental guarda só o que mudou desde o backup anterior de qualquer tipo. A restauração exige o completo de domingo e todos os incrementais seguintes, em ordem: segunda, terça, quarta e quinta. Bastariam o completo e o último backup se a rotina fosse diferencial.",
      "pf-info-seguranca",
      BACKUP_SIT,
    ),
    me(
      PF_INF,
      "Golpes",
      "Um servidor digitou corretamente, na barra de endereços, o endereço do site de seu banco, mas foi levado a uma página falsa, visualmente idêntica à verdadeira, porque o serviço de resolução de nomes usado por seu computador havia sido adulterado. Esse golpe é denominado",
      ["ransomware.", "worm.", "screenlogger.", "pharming.", "botnet."],
      3,
      "Pharming é o golpe que redireciona a navegação para sites falsos por meio de alterações no DNS (ou no arquivo de hosts), mesmo quando o endereço é digitado corretamente. Ransomware sequestra dados, worm é código que se propaga sozinho, screenlogger captura a tela e botnet é rede de computadores controlados remotamente.",
      "pf-info-seguranca",
    ),
    ce(
      PF_INF,
      "Autenticação",
      "No acesso ao sistema de protocolo, exigir que o usuário informe sua senha e, em seguida, um PIN de seis dígitos cadastrado por ele configura autenticação de dois fatores, pois há duas etapas de verificação.",
      false,
      "Senha e PIN são ambos \"algo que o usuário sabe\": há duas etapas, mas um único fator. A autenticação de dois fatores combina categorias diferentes, como senha (sabe) e código gerado no celular (tem) ou biometria (é).",
      "pf-info-seguranca",
    ),
    ce(
      PF_INF,
      "Assinatura digital",
      "Na assinatura digital, o remetente utiliza sua chave privada para assinar a mensagem, e o destinatário utiliza a chave pública do remetente para verificá-la, o que garante a autenticidade e a integridade, mas não a confidencialidade da mensagem.",
      true,
      "A verificação com a chave pública do remetente comprova autoria e integridade (e dá não repúdio), mas qualquer pessoa pode ler a mensagem. Para sigilo, é preciso cifrá-la com a chave pública do destinatário.",
      "pf-info-seguranca",
    ),
  );
}
