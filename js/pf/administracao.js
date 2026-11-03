/* PF · Agente Administrativo — Administração Geral e Pública e Orçamento.
   Teoria + itens INÉDITOS no estilo Cebraspe (não são de prova oficial).
   As contas dos itens de cálculo (ponto de pedido, custo médio x PEPS e
   curva ABC) foram conferidas no Node antes de fixar o gabarito. */
{
  const SITUACAO_EQUIPE = `Um chefe de setor de uma superintendência regional da Polícia Federal coordena quatro servidores. Ana, recém-empossada, demonstra entusiasmo, mas ainda não domina os sistemas do setor. Bruno tem dez anos de experiência e é tecnicamente impecável, mas anda desmotivado e inseguro desde uma reestruturação que mudou suas atribuições. Carla é experiente, competente, comprometida e pede autonomia. Davi chegou removido de outra unidade, não conhece as rotinas e reclama da mudança. Em pesquisa interna, os servidores do setor declararam-se satisfeitos com a remuneração, com as instalações e com o relacionamento entre colegas, mas queixaram-se da falta de reconhecimento pelo trabalho bem feito e da ausência de oportunidades de crescimento.`;

  const SITUACAO_ALMOXARIFADO = `O almoxarifado de uma superintendência regional controla o estoque de cartuchos de toner. O consumo médio é de 40 unidades por mês, o tempo de reposição (do pedido à entrega) é de 2 meses e a política do setor é manter estoque de segurança de 30 unidades. Em março, o estoque inicial era de 50 unidades, adquiridas a R$ 300,00 cada; no dia 10, entraram 150 unidades, a R$ 340,00 cada; no dia 20, saíram 100 unidades para as delegacias da circunscrição.`;

  const TABELA_ABC = `Consumo anual de materiais de uma superintendência regional (valor de consumo = quantidade x preço unitário):

Item                 | Consumo anual | Preço unitário | Valor de consumo
Cartucho de toner    |   400 un.     | R$ 250,00      | R$ 100.000,00
Papel A4 (resma)     | 2.400 un.     | R$  25,00      | R$  60.000,00
Pneu de viatura      |    40 un.     | R$ 500,00      | R$  20.000,00
Bateria de rádio     |    50 un.     | R$ 200,00      | R$  10.000,00
Caneta               | 4.000 un.     | R$   1,00      | R$   4.000,00
Pasta suspensa       | 1.500 un.     | R$   2,00      | R$   3.000,00
Clipe (caixa)        |   500 un.     | R$   4,00      | R$   2.000,00
Lacre numerado       |   200 un.     | R$   5,00      | R$   1.000,00
Total                |               |                | R$ 200.000,00

Critério adotado: classe A até 80% do valor acumulado, classe B dos 80% aos 95% e classe C dos 95% aos 100%.`;

  const SITUACAO_CONTRATO = `Em fevereiro, uma superintendência regional da Polícia Federal celebrou contrato de doze meses para manutenção preventiva da frota, com parcelas mensais fixas de R$ 20.000,00. O órgão também precisa custear, ao longo do ano, as contas de energia elétrica, cujo valor mensal varia conforme o consumo. Em dezembro, o serviço de manutenção daquele mês foi prestado e atestado pelo fiscal do contrato, com base na nota fiscal apresentada, mas o pagamento não foi efetuado até 31 de dezembro.`;

  pfModulos.push({
    id: "pf-administracao",
    title: "Administração Geral e Pública",
    icon: "🏢",
    description:
      "Funções administrativas, planejamento e estruturas; os modelos patrimonialista, burocrático e gerencial; motivação, liderança e avaliação de desempenho; estoques, almoxarifado e patrimônio.",
    sections: [
      {
        id: "pf-adm-geral",
        title: "Administração geral: funções, planejamento e estruturas",
        content: `
### O que o Cebraspe cobra aqui
O Cebraspe raramente pede a definição pura. Ele descreve a conduta de um gestor ("o chefe comparou os resultados com as metas e corrigiu os desvios") e pede que você identifique a função administrativa, o nível de planejamento ou o tipo de estrutura. As trocas mais comuns são entre funções vizinhas (controle x direção), entre níveis de planejamento (tático x operacional), entre ambiente interno e externo na análise SWOT e entre estruturas parecidas (funcional x linha-staff). Leia o verbo da situação e pergunte: o que o gestor está fazendo de fato?

#### Funções administrativas (processo administrativo)
Fayol listou cinco funções: prever, organizar, comandar, coordenar e controlar. A abordagem neoclássica, adotada pelos manuais, condensa o processo em quatro funções, o **PODC**.

| Função | Pergunta-chave | Exemplos numa superintendência |
| --- | --- | --- |
| **Planejamento** | O que fazer e como? | Definir objetivos, metas, planos e cronogramas |
| **Organização** | Com quem e com quais recursos? | Dividir o trabalho, desenhar a estrutura, alocar pessoas e materiais |
| **Direção** | Como conduzir as pessoas? | Liderar, motivar, comunicar, orientar a equipe |
| **Controle** | O resultado saiu como planejado? | Fixar padrões, medir o desempenho, comparar e corrigir desvios |

> **⚠️ Pegadinha:** comparar o realizado com o planejado e propor correções é **controle**, não direção. Direção é a função interpessoal: liderança, motivação e comunicação.

As funções formam um **ciclo**: o controle realimenta o planejamento seguinte. Todas são exercidas em todos os níveis hierárquicos, com pesos diferentes (no topo pesa mais o planejamento; na supervisão, a direção e o controle das tarefas).

#### Níveis de planejamento
| Nível | Quem elabora | Prazo | Abrangência | Natureza |
| --- | --- | --- | --- | --- |
| **Estratégico** | Alta direção (nível institucional) | Longo | Organização como um todo | Genérico, sintético, voltado ao ambiente externo |
| **Tático** | Gerência intermediária | Médio | Cada unidade ou departamento | Traduz a estratégia em planos por área |
| **Operacional** | Supervisão (nível operacional) | Curto | Cada tarefa ou atividade | Detalhado e analítico: rotinas, procedimentos, cronogramas |

> **⚠️ Pegadinha:** o plano de capacitação da área de pessoal ou o plano anual de compras da unidade são **táticos** (por área); o procedimento de conferência de notas no almoxarifado é **operacional**.

#### Planejamento estratégico
- **Missão:** razão de ser da organização (o que faz, para quem e por quê). Tende a ser duradoura.
- **Visão:** situação futura desejada, em geral com horizonte de tempo. É aonde se quer chegar.
- **Valores:** princípios e crenças que orientam decisões e comportamentos.
- **Etapas usuais:** diagnóstico estratégico (análise do ambiente), definição de objetivos, formulação de estratégias, implementação e controle.

A **análise SWOT** cruza o diagnóstico interno com o externo:

| Ambiente | Ajuda | Atrapalha |
| --- | --- | --- |
| **Interno** (a organização controla) | Forças (*Strengths*) | Fraquezas (*Weaknesses*) |
| **Externo** (a organização não controla) | Oportunidades (*Opportunities*) | Ameaças (*Threats*) |

> **⚠️ Pegadinha:** uma lei nova, um corte orçamentário, uma mudança tecnológica ou demográfica vêm **de fora**: são oportunidades ou ameaças, nunca forças ou fraquezas, por mais que favoreçam o órgão. Já a qualificação dos servidores e o estado das viaturas são fatores internos.

O **Balanced Scorecard (BSC)**, de Kaplan e Norton, traduz a estratégia em objetivos e indicadores equilibrados em quatro perspectivas ligadas por relações de causa e efeito (o mapa estratégico): **financeira, clientes, processos internos e aprendizado e crescimento**. Ele combina indicadores financeiros e não financeiros. No setor público, é comum pôr a perspectiva da **sociedade** (ou do cidadão) no topo do mapa e tratar a financeira como base orçamentária.

#### Estruturas organizacionais
| Estrutura | Traço central | Vantagem | Desvantagem |
| --- | --- | --- | --- |
| **Linear** | Autoridade única e direta; unidade de comando (origem militar) | Simplicidade e clareza de responsabilidades | Rigidez, sobrecarga do topo, comunicação lenta |
| **Funcional** | Autoridade dividida por especialidade (Taylor); o subordinado responde a vários especialistas | Especialização | Perda da unidade de comando, conflitos |
| **Linha-staff** | Órgãos de linha executam e mandam; órgãos de staff (assessoria) aconselham | Especialistas sem quebrar a unidade de comando | Atritos entre linha e assessoria |
| **Divisional** | Divisões semiautônomas por produto, região ou cliente | Foco no resultado de cada divisão | Duplicação de recursos |
| **Matricial** | Cruza áreas funcionais e projetos; dupla subordinação | Flexibilidade e compartilhamento de especialistas | Conflitos de autoridade, ambiguidade |
| **Em rede** | Núcleo enxuto que coordena parceiros externos | Agilidade e custo menor | Menor controle, dependência dos parceiros |

> **⚠️ Pegadinha:** o staff **não manda** na linha; ele recomenda. Se a situação disser que o especialista dá ordens diretas a subordinados de outras chefias, a estrutura é funcional.

#### Departamentalização
Critérios para agrupar atividades: **funcional** (por especialidade), **por produto ou serviço**, **geográfica ou territorial**, **por clientela**, **por processo**, **por projeto**, **matricial** e **mista**. Uma superintendência regional é exemplo de departamentalização geográfica; a divisão em setores de pessoal, logística e orçamento é funcional.

#### Centralização, descentralização e delegação
| Critério | Centralização | Descentralização |
| --- | --- | --- |
| Onde se decide | No topo | Perto da execução |
| Ponto forte | Uniformidade e controle | Rapidez e adaptação local |
| Ponto fraco | Lentidão e sobrecarga da cúpula | Risco de falta de uniformidade |

**Delegação** é transferir autoridade a um subordinado para executar tarefas específicas. A responsabilidade pela execução passa ao delegado, mas a **responsabilidade final continua com quem delegou**.

#### Amplitude de controle
É o número de subordinados diretos de um chefe. Com o mesmo efetivo, **amplitude maior significa menos níveis hierárquicos** (estrutura achatada); amplitude menor significa mais níveis (estrutura alta). A amplitude pode crescer quando as tarefas são padronizadas e semelhantes e os subordinados são qualificados.

#### Gestão por processos
Processo é um conjunto de atividades inter-relacionadas que transforma insumos em produtos ou serviços para um cliente. A gestão por processos tem **visão horizontal**: o processo atravessa departamentos e tem um **dono** responsável pelo resultado de ponta a ponta. Os processos se dividem em **finalísticos** (entregam valor ao cidadão), **de apoio** (sustentam os finalísticos) e **gerenciais**. O ciclo usual passa por mapear a situação atual, analisar, redesenhar a situação desejada, implantar e monitorar.

#### Revisão relâmpago
- PODC: planejar, organizar, dirigir e controlar; comparar com metas e corrigir é controle.
- Estratégico: longo prazo e organização inteira; tático: médio prazo e unidade; operacional: curto prazo e tarefa.
- SWOT: forças e fraquezas são internas; oportunidades e ameaças, externas.
- BSC: financeira, clientes, processos internos, aprendizado e crescimento.
- Staff assessora sem autoridade de linha; a matricial tem dupla subordinação.
- Mais amplitude de controle, menos níveis; delegar não livra o chefe da responsabilidade final.
- Gestão por processos é horizontal e orientada ao cliente.
`,
      },
      {
        id: "pf-adm-publica",
        title: "Administração pública: modelos, governança e qualidade",
        content: `
### O que o Cebraspe cobra aqui
Os itens desta parte costumam atribuir a um modelo a característica do vizinho (controle de resultados no modelo burocrático, disfunção tratada como traço weberiano), inverter governança e governabilidade ou classificar errado o tipo de accountability. Também aparecem situações de gestão por resultados que exigem separar eficiência, eficácia e efetividade, e perguntas sobre a etapa do PDCA ou a ferramenta da qualidade descrita. Guarde os marcos (1936/1938, 1967, 1995) e a lógica de cada modelo.

#### Os três modelos de administração pública
| Critério | Patrimonialista | Burocrático | Gerencial |
| --- | --- | --- | --- |
| Período no Brasil | Até 1930 | A partir de 1936-1938 (Vargas, DASP) | Ensaio em 1967; consolidação em 1995 |
| Marca | Estado como extensão do soberano | Impessoalidade, formalismo e profissionalismo | Foco no cidadão e em resultados |
| Controle | Quase inexistente | A priori, sobre procedimentos | A posteriori, sobre resultados |
| Problema típico | Nepotismo, clientelismo, corrupção | Rigidez, lentidão, autorreferência | Risco de enfraquecer controles |

> **⚠️ Pegadinha:** os modelos não se sucedem de forma limpa. Práticas patrimonialistas persistiram sob a burocracia, e o modelo gerencial **conserva** princípios burocráticos, como a admissão por mérito, o sistema de carreiras, a avaliação de desempenho e o treinamento sistemático.

#### A burocracia de Weber
Weber descreve o tipo ideal ligado à **dominação racional-legal** (as outras são a tradicional e a carismática). Características:
- caráter legal das normas e regulamentos;
- caráter formal das comunicações (tudo por escrito);
- racionalidade e divisão do trabalho;
- impessoalidade nas relações;
- hierarquia da autoridade;
- rotinas e procedimentos padronizados;
- competência técnica e meritocracia na escolha e na promoção;
- separação entre a propriedade e a administração;
- profissionalização dos funcionários;
- previsibilidade do funcionamento.

As **disfunções** foram apontadas por Merton: internalização das regras (a norma vira fim em si mesma), excesso de formalismo e papelório, resistência a mudanças, despersonalização do relacionamento, categorização como base das decisões, superconformidade às rotinas, exibição de sinais de autoridade e dificuldade no atendimento ao público.

> **⚠️ Pegadinha:** apego excessivo às regras é **disfunção** (Merton), não característica do tipo ideal weberiano.

#### Marcos da reforma no Brasil
- **1936-1938:** Conselho Federal do Serviço Público Civil e DASP; concurso, carreira e padronização (modelo burocrático).
- **Decreto-Lei 200/1967:** primeira tentativa de reforma gerencial. Expandiu a administração indireta e fixou como princípios fundamentais o **planejamento, a coordenação, a descentralização, a delegação de competência e o controle**.
- **1995, Plano Diretor da Reforma do Aparelho do Estado (PDRAE):** elaborado pelo MARE, sob Bresser-Pereira, propôs a administração gerencial e dividiu o Estado em quatro setores.
- **EC 19/1998:** incluiu a eficiência entre os princípios do art. 37 da CF.

| Setor do PDRAE | Exemplo | Propriedade | Modelo de gestão |
| --- | --- | --- | --- |
| Núcleo estratégico | Formulação de leis e políticas | Estatal | Burocrático e gerencial |
| Atividades exclusivas | Polícia, fiscalização, arrecadação | Estatal | Gerencial (agências) |
| Serviços não exclusivos | Saúde, educação, pesquisa | Pública não estatal (publicização) | Gerencial |
| Produção para o mercado | Empresas estatais | Privada (privatização) | Gerencial |

#### Princípios da administração gerencial
Orientação para o cidadão; controle de resultados a posteriori; descentralização e delegação de autoridade; autonomia do gestor com responsabilização; contratualização de metas (contratos de gestão); competição administrada; transparência.

#### Eficiência, eficácia e efetividade
| Conceito | Foco | Pergunta |
| --- | --- | --- |
| **Eficiência** | Meios: relação entre recursos e produtos | Fez com o menor custo possível? |
| **Eficácia** | Fins: alcance das metas | Entregou o que foi planejado? |
| **Efetividade** | Impacto: mudança na realidade social | O problema público diminuiu? |

> **⚠️ Pegadinha:** cumprir a meta diz respeito à eficácia e nada informa sobre a eficiência. Uma unidade pode ser eficaz e ineficiente, ou eficiente e ineficaz.

#### Governança, governabilidade e accountability
| Conceito | Significado |
| --- | --- |
| **Governabilidade** | Condições políticas para governar: legitimidade, apoio da sociedade e do Legislativo |
| **Governança** | Capacidade de o governo implementar políticas (financeira, gerencial e técnica) |

O Decreto 9.203/2017 define governança pública como o conjunto de mecanismos de **liderança, estratégia e controle** postos em prática para avaliar, direcionar e monitorar a gestão.

**Accountability** é o dever de prestar contas e responder pelos atos. É **vertical** quando a sociedade controla os governantes (eleições, por exemplo), **horizontal** quando órgãos do próprio Estado se controlam mutuamente (Legislativo, TCU, CGU, Judiciário) e **social** quando vem da imprensa, de conselhos e de organizações civis.

#### Qualidade no serviço público
O ciclo **PDCA** (Shewhart, difundido por Deming):

| Etapa | O que se faz |
| --- | --- |
| **P**lan | Identificar o problema, analisar causas, definir metas e plano de ação |
| **D**o | Treinar e executar o plano, coletando dados |
| **C**heck | Comparar o resultado com a meta |
| **A**ct | Padronizar o que deu certo ou agir corretivamente e girar o ciclo de novo |

Ferramentas da qualidade: **Pareto** (poucas causas respondem pela maior parte dos efeitos), **Ishikawa** ou espinha de peixe (causas agrupadas em categorias, como os 6M: método, mão de obra, máquina, material, meio ambiente e medida), **histograma**, **folha de verificação**, **diagrama de dispersão**, **carta de controle** e **fluxograma**. Apoios frequentes: 5W2H, matriz GUT e *brainstorming*.

#### Revisão relâmpago
- Patrimonialismo confunde o público com o privado; burocracia controla processos; gerencialismo controla resultados.
- Apego às regras é disfunção (Merton), não traço weberiano.
- DL 200/1967: planejamento, coordenação, descentralização, delegação de competência e controle.
- PDRAE 1995: quatro setores; polícia está nas atividades exclusivas.
- Governabilidade é política; governança é capacidade de implementar.
- TCU fiscalizando o Executivo é accountability horizontal.
- PDCA: no Check se compara com a meta; no Act se padroniza ou corrige.
`,
      },
      {
        id: "pf-gestao-pessoas",
        title: "Gestão de pessoas: motivação, liderança e desempenho",
        content: `
### O que o Cebraspe cobra aqui
Esta é a parte mais situacional da prova. O Cebraspe descreve uma equipe (o servidor novo e entusiasmado, o veterano desmotivado, o que pede autonomia) e pergunta qual teoria explica o caso ou qual estilo de liderança é o adequado. A troca de autor é a pegadinha clássica: atribuir a Maslow o que é de Herzberg, chamar fator motivacional de higiênico ou confundir efeito halo com tendência central. Aprenda cada teoria pelo **critério** que ela usa.

#### Teorias de conteúdo: o que motiva
**Maslow:** necessidades em hierarquia. Uma necessidade satisfeita deixa de motivar, e a pessoa passa ao nível seguinte.

| Nível (da base ao topo) | Exemplos no trabalho |
| --- | --- |
| Fisiológicas | Remuneração básica, horário, descanso |
| Segurança | Estabilidade, condições seguras, plano de saúde |
| Sociais | Amizade, aceitação pelo grupo |
| Estima | Reconhecimento, status, prestígio |
| Autorrealização | Crescimento, desafios, desenvolvimento do potencial |

**Herzberg (teoria dos dois fatores):** satisfação e insatisfação **não** são extremos de uma mesma escala.

| Critério | Fatores higiênicos | Fatores motivacionais |
| --- | --- | --- |
| Natureza | Extrínsecos (contexto do cargo) | Intrínsecos (conteúdo do cargo) |
| Exemplos | Salário, condições físicas, políticas da organização, supervisão, relações com colegas, segurança | Realização, reconhecimento, o trabalho em si, responsabilidade, crescimento |
| Quando presentes | Evitam a insatisfação, mas **não** motivam | Geram satisfação e motivação |
| Quando ausentes | Geram insatisfação | Geram apenas "não satisfação" |

> **⚠️ Pegadinha:** aumentar salário ou reformar as instalações, para Herzberg, só remove a insatisfação. Motivar exige enriquecer o cargo. Reconhecimento é fator **motivacional** em Herzberg, embora em Maslow corresponda à necessidade de estima.

**McGregor:** a **Teoria X** supõe que as pessoas evitam o trabalho e a responsabilidade e precisam ser controladas e coagidas; a **Teoria Y** supõe que, em condições adequadas, as pessoas gostam de trabalhar, buscam responsabilidade e são capazes de autocontrole.

#### Teoria de processo: como a motivação se forma
**Vroom (expectativa):** a força motivacional depende de três percepções que se multiplicam. Se qualquer uma for nula, a motivação é nula.

\`\`\`
Motivação = Expectância x Instrumentalidade x Valência
Expectância:      meu esforço vai gerar bom desempenho?
Instrumentalidade: o bom desempenho vai gerar a recompensa?
Valência:         eu valorizo essa recompensa?
\`\`\`

#### Liderança
| Estilo (White e Lippitt) | Quem decide | Efeito típico |
| --- | --- | --- |
| **Autocrático** | O líder, sozinho | Volume alto de trabalho, tensão e dependência do líder |
| **Democrático** | O grupo, com orientação do líder | Qualidade, comprometimento e bom clima |
| **Liberal (laissez-faire)** | O grupo, com mínima participação do líder | Desorientação e baixo desempenho |

**Liderança situacional (Hersey e Blanchard):** o estilo depende da **maturidade** (prontidão) do liderado para a tarefa, que combina capacidade e disposição.

| Maturidade do liderado | Estilo | Tarefa | Relacionamento |
| --- | --- | --- | --- |
| M1: não sabe e não quer (ou inseguro) | E1 Determinar (narrar) | Alta | Baixo |
| M2: não sabe, mas quer | E2 Persuadir (vender, guiar) | Alta | Alto |
| M3: sabe, mas não quer ou está inseguro | E3 Compartilhar (participar) | Baixa | Alto |
| M4: sabe e quer | E4 Delegar | Baixa | Baixo |

> **⚠️ Pegadinha:** o veterano competente, mas desmotivado, não precisa de instrução detalhada (E1); precisa de apoio e participação nas decisões (E3).

**Transacional x transformacional:** o líder **transacional** troca recompensas pelo cumprimento de metas e corrige desvios (gestão por exceção). O **transformacional** inspira e eleva as aspirações do grupo por influência idealizada (carisma), motivação inspiradora, estímulo intelectual e consideração individualizada.

#### Comunicação e trabalho em equipe
O processo envolve emissor, codificação, canal, decodificação, receptor e retroação (*feedback*), sujeito a ruídos. **Barreiras** comuns: filtragem, percepção seletiva, sobrecarga de informação, emoções, diferenças de linguagem e defensividade. Quanto à direção, a comunicação pode ser descendente, ascendente, horizontal (lateral) ou diagonal; a rede informal é a "rádio peão".

Segundo Robbins, num **grupo de trabalho** os membros compartilham informações e respondem individualmente; numa **equipe** há sinergia positiva, habilidades complementares e responsabilidade individual e mútua por um objetivo comum.

#### Gestão por competências
Competência é o **CHA**: **conhecimento** (saber), **habilidade** (saber fazer) e **atitude** (querer fazer). O mapeamento compara as competências necessárias com as existentes, e a diferença (lacuna ou *gap*) orienta a capacitação, a seleção e a avaliação.

#### Avaliação de desempenho
Métodos: escalas gráficas, escolha forçada, incidentes críticos, pesquisa de campo, listas de verificação, comparação entre pares, autoavaliação, avaliação 360 graus e administração por objetivos.

| Erro do avaliador | O que acontece |
| --- | --- |
| **Efeito halo** | Uma característica marcante contamina a nota de todos os outros fatores |
| **Tendência central** | O avaliador evita os extremos e põe todos na média |
| **Leniência (complacência)** | Notas sistematicamente benevolentes; o oposto é o rigor |
| **Recência** | Só os fatos mais recentes pesam na avaliação |
| **Estereótipo** | Julgamento baseado no grupo a que o avaliado pertence |

#### Treinamento x desenvolvimento, clima x cultura
| Treinamento | Desenvolvimento |
| --- | --- |
| Foco no cargo atual | Foco em cargos e desafios futuros |
| Curto prazo | Médio e longo prazo |

O ciclo do treinamento é: diagnóstico das necessidades, programação, execução e avaliação.

**Clima** é a percepção, relativamente passageira, que os membros têm do ambiente de trabalho; mede-se por pesquisa de clima. **Cultura** é o conjunto de valores, crenças e pressupostos compartilhados, mais profundo e estável. Schein a descreve em três níveis: artefatos, valores declarados e pressupostos básicos.

#### Gestão de conflitos
Thomas e Kilmann cruzam assertividade (atender aos próprios interesses) e cooperação (atender aos do outro): **competir** (assertivo e não cooperativo), **acomodar** (cooperativo e não assertivo), **evitar** (nenhum dos dois), **colaborar** (ambos altos, ganha-ganha) e **compromisso** (meio-termo, cada parte cede algo). Na visão interacionista, o conflito funcional, em nível moderado, pode melhorar o desempenho.

#### Revisão relâmpago
- Herzberg: higiênicos evitam insatisfação; só os motivacionais motivam.
- Reconhecimento e crescimento são fatores motivacionais em Herzberg.
- Vroom: expectância, instrumentalidade e valência se multiplicam.
- Hersey-Blanchard: M1 determinar, M2 persuadir, M3 compartilhar, M4 delegar.
- Halo: um traço contamina tudo; tendência central: todos na média.
- CHA: conhecimento é saber, habilidade é saber fazer e atitude é querer fazer.
- Clima é percepção passageira; cultura é profunda e estável.
`,
      },
      {
        id: "pf-materiais",
        title: "Recursos materiais: estoques, almoxarifado e patrimônio",
        content: `
### O que o Cebraspe cobra aqui
A prova mistura conceito com conta simples. As contas típicas são ponto de pedido, custo médio ponderado de saída de estoque e enquadramento de itens na curva ABC. Nos conceitos, as pegadinhas trocam PEPS por custo médio, classificam a curva ABC pelo preço unitário (e não pelo valor de consumo), invertem os critérios de arrumação do almoxarifado e embaralham as classes de bens inservíveis. Faça a conta no papel antes de julgar.

#### Classificação de materiais
Uma boa classificação é **abrangente**, **flexível** e **prática**. Critérios usuais: por tipo de demanda (de estoque e não de estoque), por perecibilidade, por periculosidade, por **valor de consumo** (curva ABC) e por **importância operacional** (classificação XYZ, em que Z é o material imprescindível e sem substituto).

No setor público, a distinção central é entre **material de consumo** e **material permanente**. A Lei 4.320/1964 considera permanente o material de duração superior a dois anos; a STN acrescenta critérios (durabilidade, fragilidade, perecibilidade, incorporabilidade e transformabilidade) que levam o item para consumo.

#### Parâmetros de estoque
| Parâmetro | Ideia |
| --- | --- |
| **Estoque de segurança (mínimo)** | Reserva para absorver aumento de consumo ou atraso na entrega; em condições normais, não é consumida |
| **Tempo de reposição** | Prazo entre a emissão do pedido e a chegada do material |
| **Ponto de pedido** | Nível de estoque que dispara a nova compra |
| **Estoque máximo** | Estoque de segurança mais o lote de compra |
| **Giro** | Quantas vezes o estoque se renova no período: consumo dividido pelo estoque médio |
| **Cobertura** | Por quanto tempo o estoque atende ao consumo; é o inverso do giro |

\`\`\`
Ponto de pedido = consumo médio x tempo de reposição + estoque de segurança

Exemplo: consumo de 200 resmas por mês, reposição em 1,5 mês,
estoque de segurança de 100 resmas.
PP = 200 x 1,5 + 100 = 300 + 100 = 400 resmas
Quando o saldo cair a 400, emite-se o pedido. Se tudo correr
como previsto, o lote chega quando restarem 100 (o estoque de segurança).
\`\`\`

O **lote econômico de compra** é a quantidade que minimiza a soma do custo de pedir (que cai com lotes maiores) e do custo de manter estoque (que sobe com lotes maiores). No ponto ótimo, os dois custos se igualam.

> **⚠️ Pegadinha:** giro alto é sinal de estoque enxuto, que se renova rápido. Giro baixo indica capital parado.

#### Curva ABC
Ordena os itens pelo **valor de consumo** (quantidade consumida vezes preço unitário) e acumula os percentuais. As faixas variam conforme o autor; uma referência comum é A até cerca de 80% do valor, B até cerca de 95% e C o restante.

\`\`\`
Item          Consumo   Preço     Valor      %      % acumulado
Combustível    5.000    R$ 6     30.000    60,0%     60,0%   A
Toner            100    R$ 100   10.000    20,0%     80,0%   A
Pneus             10    R$ 500    5.000    10,0%     90,0%   B
Coletes            5    R$ 400    2.000     4,0%     94,0%   B
Papel            100    R$ 20     2.000     4,0%     98,0%   C
Canetas        1.000    R$ 1      1.000     2,0%    100,0%   C
Total                            50.000   100,0%
\`\`\`

A classe A tem poucos itens e a maior parte do valor; exige controle rigoroso e compras frequentes em lotes menores. A classe C tem muitos itens e pouco valor; admite controle simplificado.

> **⚠️ Pegadinha:** o pneu tem o maior preço unitário da tabela e mesmo assim é B. O que define a classe é o valor de consumo, não o preço nem a quantidade.

#### Avaliação das saídas: PEPS, UEPS e custo médio
| Método | Saída avaliada pelo | Estoque final fica com |
| --- | --- | --- |
| **PEPS (FIFO)** | Custo dos lotes mais antigos | Custos mais recentes |
| **UEPS (LIFO)** | Custo dos lotes mais recentes | Custos mais antigos |
| **Custo médio ponderado** | Média recalculada a cada entrada | O mesmo custo médio |

\`\`\`
Saldo: 100 un. a R$ 10. Entrada: 100 un. a R$ 14. Saída: 100 un.
Custo médio = (100 x 10 + 100 x 14) / 200 = 2.400 / 200 = R$ 12
Saída a custo médio = 100 x 12 = R$ 1.200; estoque final = R$ 1.200
Saída por PEPS = 100 x 10 = R$ 1.000; estoque final = R$ 1.400
\`\`\`

A Lei 4.320/1964 (art. 106, III) manda avaliar os bens de almoxarifado pelo **preço médio ponderado das compras**. O UEPS não é aceito pela legislação fiscal brasileira.

#### Recebimento e armazenagem
O recebimento passa pela entrada do material, conferência quantitativa, conferência qualitativa e regularização (aceite ou recusa). Nas contratações, a Lei 14.133/2021 prevê recebimento provisório e definitivo.

Critérios de arrumação do almoxarifado:
- materiais pesados e volumosos nas partes baixas das estantes ou junto ao piso;
- itens de maior movimentação perto da área de expedição;
- **FIFO** físico: o que entrou primeiro sai primeiro, sobretudo para perecíveis;
- inflamáveis e perigosos isolados, com sinalização e proteção;
- endereçamento que permita localizar cada item rapidamente.

#### Gestão patrimonial
**Tombamento** é a incorporação formal do bem permanente ao patrimônio, com número de registro, em geral fixado no bem por plaqueta ou etiqueta. O **inventário** confere a existência física e o estado dos bens com os registros; o anual é obrigatório, e há também o inicial, o de transferência de responsável e o eventual.

No Executivo federal, o Decreto 9.373/2018 classifica o bem móvel inservível:

| Classe | Situação |
| --- | --- |
| **Ocioso** | Em perfeitas condições de uso, mas não aproveitado |
| **Recuperável** | Fora de uso, com recuperação de até 50% do valor de mercado ou justificável |
| **Antieconômico** | Manutenção onerosa ou rendimento precário (uso prolongado, desgaste ou obsolescência) |
| **Irrecuperável** | Perdeu suas características ou recuperar custa mais de 50% do valor de mercado |

O desfazimento ocorre por transferência, cessão, alienação (venda, permuta ou doação) ou, em último caso, inutilização ou abandono. A alienação exige interesse público justificado e avaliação prévia; para móveis, a licitação é na modalidade leilão, salvo as dispensas legais.

#### Revisão relâmpago
- PP = consumo médio vezes tempo de reposição, mais estoque de segurança.
- Curva ABC usa valor de consumo; A tem poucos itens e muito valor.
- PEPS: saída pelo custo antigo; custo médio: média recalculada a cada entrada.
- Almoxarifado público: preço médio ponderado das compras (Lei 4.320, art. 106).
- Pesados embaixo; maior giro perto da saída; FIFO físico.
- Tombamento registra; inventário confere; ocioso está bom, mas parado.
`,
      },
    ],
  });

  pfModulos.push({
    id: "pf-orcamento",
    title: "Orçamento e Finanças Públicas",
    icon: "💰",
    description:
      "PPA, LDO e LOA com prazos federais, princípios orçamentários, créditos adicionais, estágios da receita e da despesa, restos a pagar e noções da LRF.",
    sections: [
      {
        id: "pf-afo-orcamento",
        title: "Instrumentos de planejamento, princípios e créditos adicionais",
        content: `
### O que o Cebraspe cobra aqui
O núcleo é o art. 165 da CF, o art. 35, § 2º, do ADCT e os arts. 40 a 46 da Lei 4.320/1964. Os itens trocam o conteúdo de um instrumento pelo de outro (metas e prioridades são da LDO, não da LOA), trocam os prazos de devolução (LDO volta ao fim do primeiro período da sessão legislativa; PPA e LOA, ao fim da sessão) e invertem regra e exceção nos princípios, sobretudo no da exclusividade e no da não vinculação. Nos créditos adicionais, pergunta-se quem autoriza, como se abre e até quando vale.

#### PPA, LDO e LOA (CF, art. 165)
| Critério | PPA | LDO | LOA |
| --- | --- | --- | --- |
| Conteúdo | De forma regionalizada, diretrizes, objetivos e metas para as despesas de capital e outras delas decorrentes e para os programas de duração continuada | Metas e prioridades, diretrizes de política fiscal e metas, orientação para a LOA, alterações na legislação tributária, política das agências oficiais de fomento | Orçamento fiscal, orçamento de investimento das estatais e orçamento da seguridade social |
| Vigência | 4 anos: do 2º ano do mandato ao 1º ano do mandato seguinte | Anual (orienta o orçamento do ano seguinte) | Anual (exercício = ano civil) |
| Envio do projeto (União) | Até 31 de agosto do 1º ano do mandato | Até 15 de abril | Até 31 de agosto |
| Devolução para sanção | Até o encerramento da sessão legislativa (22/12) | Até o encerramento do 1º período da sessão legislativa (17/7) | Até o encerramento da sessão legislativa (22/12) |

Os prazos acima vêm do ADCT, art. 35, § 2º, e valem enquanto não for editada a lei complementar do art. 165, § 9º. Em termos de antecedência: PPA e LOA saem até **quatro meses** antes do fim do exercício; a LDO, até **oito meses e meio** antes.

\`\`\`
Calendário federal (ano 1 do mandato)
15/abr  Executivo envia o projeto de LDO
17/jul  Congresso devolve a LDO para sanção (fim do 1º período)
31/ago  Executivo envia os projetos de PPA e de LOA
22/dez  Congresso devolve PPA e LOA para sanção (fim da sessão)
Nos anos 2 a 4 do mandato, o ciclo se repete sem o PPA.
\`\`\`

> **⚠️ Pegadinha:** a sessão legislativa não é interrompida sem a aprovação do projeto de LDO (CF, art. 57, § 2º). E a LRF acrescentou à LDO o Anexo de Metas Fiscais e o Anexo de Riscos Fiscais.

A LOA abrange o orçamento **fiscal** (Poderes, fundos, órgãos e entidades da administração direta e indireta, inclusive fundações), o de **investimento** das empresas em que a União detenha a maioria do capital com direito a voto e o da **seguridade social**. Nenhum investimento cuja execução ultrapasse um exercício pode ser iniciado sem prévia inclusão no PPA ou sem lei que autorize a inclusão (CF, art. 167, § 1º).

#### Princípios orçamentários
| Princípio | Regra | Fundamento |
| --- | --- | --- |
| **Unidade (totalidade)** | Um só orçamento por ente, ainda que composto de vários documentos | Lei 4.320, art. 2º |
| **Universalidade** | Todas as receitas e despesas constam da LOA | Lei 4.320, arts. 2º a 4º; CF, art. 165, § 5º |
| **Anualidade** | Vigência de um exercício, que coincide com o ano civil | Lei 4.320, art. 34 |
| **Exclusividade** | A LOA só trata de previsão da receita e fixação da despesa | CF, art. 165, § 8º |
| **Não vinculação (não afetação)** | Receita de impostos não pode ser vinculada a órgão, fundo ou despesa | CF, art. 167, IV |
| **Legalidade** | Orçamento aprovado por lei; nenhuma despesa sem autorização | CF, arts. 165 e 167 |
| **Especificação (especialização)** | Despesa discriminada, no mínimo, por elementos; vedadas dotações globais | Lei 4.320, arts. 5º e 15 |
| **Equilíbrio** | Despesa fixada compatível com a receita prevista | Implícito; reforçado pela LRF (art. 4º, I, "a"). A "regra de ouro" do art. 167, III, da CF é parente próximo, não o mesmo princípio |

> **⚠️ Pegadinha da exclusividade:** a própria CF ressalva a **autorização para abertura de créditos suplementares** e para **contratação de operações de crédito**, ainda que por antecipação de receita. Essas autorizações podem constar da LOA.

> **⚠️ Pegadinha da não vinculação:** a vedação alcança só a receita de **impostos** (taxas e contribuições são vinculáveis) e tem ressalvas na própria CF: repartição com estados e municípios, ações e serviços públicos de saúde, manutenção e desenvolvimento do ensino, atividades da administração tributária e garantias em operações de crédito, entre outras.

#### Ciclo orçamentário
1. **Elaboração:** o Executivo prepara os projetos (na União, sob coordenação do órgão central de orçamento).
2. **Apreciação legislativa:** a Comissão Mista de Planos, Orçamentos Públicos e Fiscalização examina o projeto e as emendas; as duas Casas votam em sessão conjunta. Emendas à LOA precisam ser compatíveis com o PPA e a LDO e indicar recursos vindos de anulação de despesa, sem atingir pessoal, serviço da dívida e transferências constitucionais.
3. **Execução:** até 30 dias após a publicação da LOA, o Executivo fixa a programação financeira e o cronograma de desembolso (LRF, art. 8º).
4. **Controle e avaliação:** interno de cada Poder e externo pelo Congresso, com auxílio do TCU.

#### Créditos adicionais
São autorizações de despesa não computadas ou insuficientemente dotadas na LOA (Lei 4.320, art. 40).

| Tipo | Finalidade | Autorização | Abertura | Recursos | Vigência |
| --- | --- | --- | --- | --- | --- |
| **Suplementar** | Reforçar dotação existente | Lei, que pode ser a própria LOA | Decreto do Executivo | Indicação obrigatória | No exercício |
| **Especial** | Despesa sem dotação específica | Lei específica | Decreto do Executivo | Indicação obrigatória | No exercício; se autorizado nos últimos 4 meses, o saldo é reaberto no seguinte |
| **Extraordinário** | Despesa imprevisível e urgente (guerra, comoção interna, calamidade pública) | Dispensa autorização prévia | Medida provisória na União; decreto onde não houver MP (Lei 4.320, art. 44) | Indicação dispensada | Igual à do especial |

Fontes para suplementares e especiais (Lei 4.320, art. 43, § 1º): superávit financeiro apurado no balanço patrimonial do exercício anterior, excesso de arrecadação, anulação parcial ou total de dotações e operações de crédito autorizadas. A CF (art. 166, § 8º) acrescenta os recursos que ficarem sem despesa correspondente por veto, emenda ou rejeição do projeto de LOA.

> **⚠️ Pegadinha:** a reabertura no exercício seguinte vale para **especiais e extraordinários** autorizados nos **últimos quatro meses** do exercício (setembro a dezembro), e só nos limites do saldo. Crédito suplementar não é reaberto.

#### Vedações do art. 167 que mais caem
- iniciar programas ou projetos não incluídos na LOA (inciso I);
- realizar despesas ou assumir obrigações que excedam os créditos orçamentários ou adicionais (inciso II);
- operações de crédito acima das despesas de capital, ressalvadas as autorizadas por créditos suplementares ou especiais aprovados pelo Legislativo por maioria absoluta (inciso III, a "regra de ouro");
- abrir crédito suplementar ou especial sem prévia autorização legislativa e sem indicação dos recursos correspondentes (inciso V);
- transpor, remanejar ou transferir recursos de uma categoria de programação para outra, ou de um órgão para outro, sem prévia autorização legislativa (inciso VI);
- conceder ou utilizar créditos ilimitados (inciso VII).

#### Revisão relâmpago
- PPA: regionalizado, despesas de capital e programas de duração continuada; vale do 2º ano do mandato ao 1º do seguinte.
- LDO: metas e prioridades, orienta a LOA; envio até 15/4 e devolução até 17/7.
- LOA: orçamentos fiscal, de investimento e da seguridade social; envio até 31/8 e devolução até 22/12.
- Exclusividade admite autorização de suplementares e de operações de crédito na LOA.
- Não vinculação: só impostos, com ressalvas constitucionais.
- Suplementar e especial: lei autoriza, decreto abre, recursos indicados.
- Extraordinário: MP na União, sem indicação de recursos; urgente e imprevisível.
- Especial ou extraordinário autorizado de setembro a dezembro: saldo reaberto no ano seguinte.
`,
      },
      {
        id: "pf-afo-receita-despesa",
        title: "Receita, despesa, restos a pagar e LRF",
        content: `
### O que o Cebraspe cobra aqui
As questões trocam os estágios entre si (lançamento x arrecadação, liquidação x pagamento), classificam errado uma receita (alienação de bens é receita de capital) ou um ingresso extraorçamentário (cauções e consignações) e confundem restos a pagar processados com não processados. O regime da Lei 4.320 (receita arrecadada, despesa empenhada) e as modalidades de empenho também aparecem em situações concretas. Da LRF, basta a lógica geral e os limites mais conhecidos.

#### Ingressos orçamentários e extraorçamentários
| Critério | Receita orçamentária | Ingresso extraorçamentário |
| --- | --- | --- |
| Natureza | Pertence ao ente e financia despesas | Ingresso transitório; o ente é mero depositário |
| Previsão na LOA | Sim (mesmo sem previsão, se arrecadada, é orçamentária) | Não |
| Exemplos | Tributos, alienação de bens, operações de crédito | Cauções, depósitos, consignações em folha, ARO |

#### Receita corrente x receita de capital (Lei 4.320, art. 11)
| Correntes | De capital |
| --- | --- |
| Tributária, de contribuições, patrimonial, agropecuária, industrial, de serviços, transferências correntes e outras | Operações de crédito, alienação de bens, amortização de empréstimos concedidos, transferências de capital e outras |

> **⚠️ Pegadinha:** a venda de viaturas em leilão é **alienação de bens**, logo receita **de capital**, por mais eventual que seja. Aluguel de imóvel do ente é receita patrimonial, corrente.

#### Estágios da receita
| Estágio | O que acontece |
| --- | --- |
| **Previsão** | Estimativa da arrecadação, na LOA (etapa de planejamento) |
| **Lançamento** | Verifica a procedência do crédito, identifica o devedor e inscreve o débito (Lei 4.320, art. 53) |
| **Arrecadação** | O contribuinte entrega os recursos aos agentes arrecadadores (bancos autorizados, por exemplo) |
| **Recolhimento** | Os agentes repassam os valores à conta única do Tesouro (princípio da unidade de tesouraria) |

> **⚠️ Pegadinha:** nem toda receita passa pelo lançamento (doações e muitas receitas não tributárias não passam). Arrecadação é o pagamento pelo contribuinte; recolhimento é o repasse ao Tesouro.

#### Despesa corrente x despesa de capital
| Correntes | De capital |
| --- | --- |
| Pessoal e encargos sociais, juros e encargos da dívida, outras despesas correntes (material de consumo, diárias, serviços) | Investimentos (obras, equipamentos, material permanente), inversões financeiras (aquisição de imóvel em uso, participação em capital), amortização da dívida |

#### Estágios da despesa
| Estágio | Conteúdo | Fundamento |
| --- | --- | --- |
| **Fixação** | Dotação autorizada na LOA | Planejamento |
| **Empenho** | Ato da autoridade competente que cria para o Estado obrigação de pagamento pendente ou não de implemento de condição; é vedada despesa sem prévio empenho | Lei 4.320, arts. 58 e 60 |
| **Liquidação** | Verificação do direito adquirido pelo credor com base nos títulos e documentos comprobatórios | Lei 4.320, art. 63 |
| **Pagamento** | Ordem de pagamento e entrega do numerário ao credor, só após a regular liquidação | Lei 4.320, arts. 62 e 64 |

> **⚠️ Pegadinha:** o direito do credor nasce com a entrega do bem ou serviço e é **verificado na liquidação**, não no empenho nem no pagamento. O empenho reserva a dotação e compromete o crédito orçamentário.

| Modalidade de empenho | Uso | Exemplo |
| --- | --- | --- |
| **Ordinário** | Valor exato conhecido, pagamento de uma só vez | Compra de um lote de cadeiras |
| **Estimativo** | Montante não pode ser determinado previamente | Água, energia elétrica, telefonia |
| **Global** | Despesas contratuais e outras sujeitas a parcelamento | Contrato de manutenção com parcelas mensais |

#### Regime contábil da Lei 4.320 (art. 35)
Pertencem ao exercício financeiro **as receitas nele arrecadadas** e **as despesas nele legalmente empenhadas**. É o chamado regime misto do orçamento: caixa para a receita, competência (empenho) para a despesa.

#### Restos a pagar e despesas de exercícios anteriores
Restos a pagar são despesas **empenhadas e não pagas até 31 de dezembro** (Lei 4.320, art. 36).

| Tipo | Situação em 31/12 |
| --- | --- |
| **Processados** | Empenhados **e liquidados**: o credor já cumpriu sua parte |
| **Não processados** | Empenhados, mas **ainda não liquidados** |

**Despesas de exercícios anteriores** (art. 37) são despesas de exercícios encerrados, com crédito próprio e saldo suficiente, que não se processaram na época própria, além de restos a pagar com prescrição interrompida e compromissos reconhecidos após o encerramento do exercício. São pagas à conta de dotação específica do orçamento vigente, discriminada por elementos.

> **⚠️ Pegadinha:** se não houve empenho no ano da despesa, não há restos a pagar (que pressupõem empenho). O caminho é a despesa de exercícios anteriores.

#### Lei de Responsabilidade Fiscal (LC 101/2000) em linhas gerais
A LRF pressupõe **ação planejada e transparente**, que previne riscos e corrige desvios capazes de afetar o equilíbrio das contas, com cumprimento de metas de resultado e obediência a limites.

\`\`\`
Despesa total com pessoal / receita corrente líquida (RCL)
União: até 50%      Estados: até 60%      Municípios: até 60%
Repartição na União: Legislativo (com TCU) 2,5% | Judiciário 6%
                     MPU 0,6% | Executivo 40,9%
Alerta: 90% do limite   Limite prudencial: 95% do limite
\`\`\`

- **Renúncia de receita** exige estimativa de impacto e medidas de compensação ou demonstração de que foi considerada na previsão (art. 14).
- **Despesa obrigatória de caráter continuado**: despesa corrente que fixa obrigação por mais de dois exercícios; exige estimativa de impacto e compensação (art. 17).
- **Último ano de mandato:** nos dois últimos quadrimestres, é vedado contrair obrigação que não possa ser paga dentro do mandato sem disponibilidade de caixa para as parcelas seguintes (art. 42).
- **Transparência:** RREO a cada bimestre e RGF a cada quadrimestre.

#### Revisão relâmpago
- Receita: previsão, lançamento, arrecadação e recolhimento.
- Despesa: fixação, empenho, liquidação e pagamento; vedada despesa sem prévio empenho.
- Empenho ordinário (valor exato), estimativo (valor incerto), global (contrato parcelado).
- Liquidado e não pago em 31/12: processado. Empenhado e não liquidado: não processado.
- Alienação de bens é receita de capital; cauções e consignações são extraorçamentárias.
- Regime da Lei 4.320: receita arrecadada, despesa empenhada.
- LRF: pessoal até 50% da RCL na União e 60% em estados e municípios.
`,
      },
    ],
  });

  pfQuestoes.push(
    // ===== pf-adm-geral =====
    ce(
      PF_ADM,
      "Funções administrativas",
      "Ao comparar os resultados alcançados no semestre com as metas fixadas para o setor e propor medidas para corrigir os desvios encontrados, o chefe de um setor de uma superintendência regional exerce a função administrativa de direção.",
      false,
      "Medir o desempenho, comparar com o padrão e corrigir desvios é a função de controle. A direção é a função interpessoal: liderar, motivar e comunicar.",
      "pf-adm-geral",
    ),
    ce(
      PF_ADM,
      "Níveis de planejamento",
      "O planejamento tático, elaborado no nível intermediário da organização, desdobra os objetivos estratégicos em planos voltados para cada unidade ou área, com horizonte de médio prazo.",
      true,
      "O nível tático é o da gerência intermediária: traduz a estratégia em planos por departamento (de pessoal, de compras, de TI), com prazo médio.",
      "pf-adm-geral",
    ),
    ce(
      PF_ADM,
      "Análise SWOT",
      "Na análise SWOT de um órgão público, a aprovação de lei que autoriza a ampliação do quadro de servidores e a elevada qualificação técnica do efetivo atual constituem, ambas, forças do ambiente interno.",
      false,
      "A qualificação do efetivo é força (fator interno), mas a lei nova vem do ambiente externo, que o órgão não controla: é uma oportunidade.",
      "pf-adm-geral",
    ),
    ce(
      PF_ADM,
      "Estrutura matricial",
      "A estrutura matricial combina a departamentalização funcional com a departamentalização por projetos, o que submete parte dos empregados a dois chefes e flexibiliza o princípio da unidade de comando.",
      true,
      "A matricial cruza as áreas funcionais com os projetos; a dupla subordinação é sua marca e a fonte de seus conflitos de autoridade.",
      "pf-adm-geral",
    ),
    ce(
      PF_ADM,
      "Amplitude de controle",
      "Mantido o número total de servidores de uma organização, o aumento da amplitude de controle de suas chefias tende a reduzir a quantidade de níveis hierárquicos e a tornar a estrutura mais achatada.",
      true,
      "Se cada chefe passa a supervisionar mais pessoas, são necessárias menos camadas de chefia para o mesmo efetivo, e a estrutura fica mais horizontal.",
      "pf-adm-geral",
    ),
    me(
      PF_ADM,
      "Estruturas organizacionais",
      "Uma superintendência regional mantém uma assessoria jurídica e uma assessoria de comunicação que elaboram pareceres e recomendações para os chefes das unidades operacionais, mas não podem dar ordens a essas unidades nem aos seus servidores. Esse arranjo é característico da estrutura",
      [
        "linear pura, na qual a autoridade flui de forma única e direta do topo à base.",
        "funcional, na qual cada especialista exerce autoridade sobre todos os subordinados em sua área de especialidade.",
        "linha-staff, com órgãos de assessoria sem autoridade de linha.",
        "matricial, na qual os servidores se reportam simultaneamente a dois chefes.",
        "em rede, com terceirização das atividades-meio a parceiros externos.",
      ],
      2,
      "Na linha-staff, os órgãos de linha executam e comandam, e o staff apenas aconselha. Se o especialista desse ordens diretas aos subordinados de outras chefias, a estrutura seria funcional.",
      "pf-adm-geral",
    ),

    // ===== pf-adm-publica =====
    ce(
      PF_ADM,
      "Disfunções da burocracia",
      "O apego excessivo a regulamentos, que leva o servidor a tratar as normas como fins em si mesmas, figura entre as características que Weber atribuiu ao tipo ideal de burocracia.",
      false,
      "A internalização das regras é uma disfunção da burocracia, apontada por Merton. O tipo ideal de Weber prevê o caráter legal das normas, não seu uso como fim em si.",
      "pf-adm-publica",
    ),
    ce(
      PF_ADM,
      "Modelo gerencial",
      "O modelo gerencial proposto pelo Plano Diretor da Reforma do Aparelho do Estado de 1995 não rompeu inteiramente com a burocracia: conservou princípios como a admissão por mérito, o sistema estruturado de carreiras e a avaliação de desempenho, mas deslocou a ênfase do controle de procedimentos para o controle de resultados.",
      true,
      "O próprio Plano Diretor afirma que a administração gerencial se apoia na burocrática, conservando, de forma flexibilizada, alguns de seus princípios fundamentais. A diferença está no controle, que passa a ser a posteriori e voltado aos resultados.",
      "pf-adm-publica",
    ),
    ce(
      PF_ADM,
      "Eficiência, eficácia e efetividade",
      "Se, após a implantação de um programa de atendimento, uma unidade emitir a quantidade de passaportes prevista na meta anual, gastando menos que o orçado, terá demonstrado eficácia e eficiência; a efetividade, por sua vez, exigiria aferir o impacto do programa na sociedade.",
      true,
      "Cumprir a meta é eficácia; fazê-lo com menos recursos é eficiência. A efetividade mede a transformação produzida na realidade social, o que a situação não informa.",
      "pf-adm-publica",
    ),
    ce(
      PF_ADM,
      "Accountability",
      "A fiscalização exercida pelo Tribunal de Contas da União sobre os atos de gestão de um órgão do Poder Executivo é exemplo de accountability vertical.",
      false,
      "O controle de um órgão do Estado por outro órgão do Estado é accountability horizontal. A vertical é exercida pela sociedade sobre os governantes, como nas eleições.",
      "pf-adm-publica",
    ),
    ce(
      PF_ADM,
      "Governança e governabilidade",
      "Governabilidade diz respeito à capacidade técnica, financeira e gerencial de o governo implementar suas políticas, ao passo que governança se refere às condições políticas e à legitimidade conferidas pela sociedade para governar.",
      false,
      "Os conceitos estão invertidos. Governança é a capacidade de implementar políticas (técnica, financeira e gerencial); governabilidade são as condições políticas e a legitimidade para governar.",
      "pf-adm-publica",
    ),
    me(
      PF_ADM,
      "Ferramentas da qualidade",
      "Para investigar o aumento das reclamações sobre o atendimento ao público em uma superintendência, uma equipe reuniu as possíveis causas do problema em categorias como método, mão de obra, máquina, material, meio ambiente e medida, ligadas ao efeito por ramificações semelhantes às de uma espinha de peixe. A ferramenta empregada foi o",
      ["diagrama de Ishikawa.", "gráfico de Pareto.", "diagrama de dispersão.", "folha de verificação.", "gráfico de controle."],
      0,
      "O diagrama de Ishikawa, ou de causa e efeito, organiza as causas em categorias (os 6M). O Pareto ordena causas por frequência, e o diagrama de dispersão relaciona duas variáveis.",
      "pf-adm-publica",
    ),

    // ===== pf-gestao-pessoas =====
    ce(
      PF_ADM,
      "Liderança situacional",
      "Segundo o modelo de liderança situacional de Hersey e Blanchard, o estilo mais adequado para lidar com Carla é o de delegar, com baixo comportamento de tarefa e baixo comportamento de relacionamento.",
      true,
      "Carla é capaz e está disposta (maturidade M4). Para esse perfil, o modelo recomenda delegar, com pouca orientação de tarefa e pouco apoio de relacionamento.",
      "pf-gestao-pessoas",
      SITUACAO_EQUIPE,
    ),
    ce(
      PF_ADM,
      "Liderança situacional",
      "Para Bruno, que tem capacidade técnica mas está inseguro e desmotivado, o modelo de Hersey e Blanchard recomenda o estilo de determinar, com instruções detalhadas e supervisão próxima.",
      false,
      "Bruno tem capacidade, mas lhe falta disposição ou confiança (maturidade M3). O estilo indicado é compartilhar (participar): pouca ênfase na tarefa e muito apoio e envolvimento nas decisões.",
      "pf-gestao-pessoas",
      SITUACAO_EQUIPE,
    ),
    ce(
      PF_ADM,
      "Teoria de Herzberg",
      "À luz da teoria dos dois fatores de Herzberg, a satisfação com a remuneração, com as instalações e com o relacionamento entre colegas indica que os fatores higiênicos estão atendidos, o que evita a insatisfação, mas não basta, por si só, para motivar os servidores.",
      true,
      "Salário, condições físicas e relações interpessoais são fatores higiênicos: presentes, evitam a insatisfação, mas não geram motivação. Motivar depende dos fatores motivacionais, justamente os que faltam no setor.",
      "pf-gestao-pessoas",
      SITUACAO_EQUIPE,
    ),
    ce(
      PF_ADM,
      "Avaliação de desempenho",
      "Ocorre o erro de tendência central quando o avaliador, impressionado por uma única característica marcante do avaliado, como a pontualidade, atribui notas elevadas também a todos os demais fatores da avaliação.",
      false,
      "O item descreve o efeito halo, em que um traço contamina a avaliação dos demais. Tendência central é a atribuição de notas medianas a todos, evitando os extremos.",
      "pf-gestao-pessoas",
    ),
    me(
      PF_ADM,
      "Teorias X e Y",
      "Um chefe de setor de uma superintendência regional acredita que os servidores, em condições adequadas, gostam de trabalhar, buscam assumir responsabilidades e são capazes de autocontrole. Por isso, negocia metas com a equipe e reduz a supervisão direta. Essa concepção corresponde",
      [
        "à hierarquia das necessidades de Maslow, no nível de autorrealização.",
        "aos fatores higiênicos da teoria dos dois fatores de Herzberg.",
        "à Teoria X de McGregor.",
        "à Teoria Y de McGregor.",
        "ao estilo de liderança liberal (laissez-faire).",
      ],
      3,
      "A Teoria Y supõe que o trabalho pode ser fonte de satisfação e que as pessoas exercem autocontrole e buscam responsabilidade. A Teoria X supõe o contrário e prescreve controle rígido.",
      "pf-gestao-pessoas",
    ),

    // ===== pf-materiais =====
    ce(
      PF_ADM,
      "Ponto de pedido",
      "O ponto de pedido dos cartuchos de toner é de 110 unidades, de modo que nova compra deve ser providenciada quando o saldo em estoque atingir esse nível.",
      true,
      "PP = consumo médio vezes tempo de reposição, mais estoque de segurança: 40 x 2 + 30 = 110 unidades.",
      "pf-materiais",
      SITUACAO_ALMOXARIFADO,
    ),
    ce(
      PF_ADM,
      "Custo médio ponderado",
      "Pelo método do custo médio ponderado, as 100 unidades que saíram no dia 20 devem ser valoradas em R$ 32.000,00, e o estoque remanescente, em R$ 34.000,00.",
      false,
      "O custo médio após a entrada é (50 x 300 + 150 x 340) / 200 = R$ 330,00; a saída vale 100 x 330 = R$ 33.000,00, e o saldo, também R$ 33.000,00. Os valores do item correspondem ao PEPS.",
      "pf-materiais",
      SITUACAO_ALMOXARIFADO,
    ),
    ce(
      PF_ADM,
      "Armazenagem",
      "Na arrumação de um almoxarifado, recomenda-se acomodar os materiais mais pesados e volumosos nas prateleiras superiores das estantes, liberando os níveis inferiores para os itens de maior giro.",
      false,
      "Materiais pesados e volumosos ficam nas partes baixas ou junto ao piso, por segurança e para facilitar a movimentação. Os itens de maior giro ficam próximos à área de expedição.",
      "pf-materiais",
    ),
    ce(
      PF_ADM,
      "Avaliação de estoques",
      "Na administração pública, a Lei nº 4.320/1964 determina que os bens de almoxarifado sejam avaliados pelo preço médio ponderado das compras.",
      true,
      "É a regra do art. 106, III, da Lei 4.320/1964. Por isso o custo médio ponderado é o método de referência para os almoxarifados públicos.",
      "pf-materiais",
    ),
    me(
      PF_ADM,
      "Curva ABC",
      "Com base nos dados apresentados e no critério de classificação adotado, assinale a opção correta a respeito da curva ABC desses materiais.",
      [
        "Os pneus de viatura, por terem o maior preço unitário entre os itens, pertencem à classe A.",
        "A classe A reúne 25% dos itens e 80% do valor de consumo anual.",
        "As canetas, por serem o item de maior quantidade consumida, pertencem à classe A.",
        "A classe C reúne metade dos itens e 20% do valor de consumo anual.",
        "As baterias de rádio pertencem à classe C, pois cada uma custa menos que um pneu de viatura.",
      ],
      1,
      "Ordenando pelo valor de consumo, os acumulados são 50%, 80%, 90%, 95%, 97%, 98,5%, 99,5% e 100%. A classe A tem toner e papel (2 de 8 itens, 25%, com 80% do valor); B, pneus e baterias; C, os quatro itens restantes, com 5% do valor.",
      "pf-materiais",
      TABELA_ABC,
    ),

    // ===== pf-afo-orcamento =====
    ce(
      PF_AFO,
      "Prazos do PPA",
      "No âmbito federal, enquanto não for editada a lei complementar prevista no art. 165, § 9º, da Constituição Federal, o projeto do plano plurianual deve ser encaminhado até quatro meses antes do encerramento do primeiro exercício financeiro do mandato presidencial e devolvido para sanção até o encerramento da sessão legislativa.",
      true,
      "É a regra do art. 35, § 2º, I, do ADCT. O PPA assim aprovado vigora até o final do primeiro exercício financeiro do mandato presidencial subsequente.",
      "pf-afo-orcamento",
    ),
    ce(
      PF_AFO,
      "Princípio da exclusividade",
      "Por força do princípio da exclusividade, a LOA não pode conter dispositivo estranho à previsão da receita e à fixação da despesa, o que impede inclusive a autorização, no próprio texto da lei orçamentária, para a abertura de créditos suplementares.",
      false,
      "O art. 165, § 8º, da CF ressalva expressamente a autorização para abertura de créditos suplementares e para contratação de operações de crédito, ainda que por antecipação de receita.",
      "pf-afo-orcamento",
    ),
    ce(
      PF_AFO,
      "Créditos extraordinários",
      "No âmbito federal, os créditos extraordinários são autorizados por lei e abertos por decreto do Poder Executivo, a exemplo do que ocorre com os créditos especiais.",
      false,
      "O crédito extraordinário dispensa autorização legislativa prévia e, na União, é aberto por medida provisória (CF, art. 167, § 3º, c/c art. 62). Lei autoriza e decreto abre os créditos suplementares e especiais.",
      "pf-afo-orcamento",
    ),
    ce(
      PF_AFO,
      "Vigência dos créditos adicionais",
      "Um crédito especial autorizado por lei promulgada em outubro poderá ser reaberto no exercício seguinte, nos limites de seu saldo, e incorporado ao orçamento daquele exercício.",
      true,
      "Pelo art. 167, § 2º, da CF, os créditos especiais e extraordinários autorizados nos últimos quatro meses do exercício (setembro a dezembro) podem ser reabertos no exercício seguinte, nos limites dos saldos.",
      "pf-afo-orcamento",
    ),
    me(
      PF_AFO,
      "PPA, LDO e LOA",
      "Acerca dos instrumentos de planejamento e orçamento previstos no art. 165 da Constituição Federal e dos prazos aplicáveis à União, assinale a opção correta.",
      [
        "A LOA compreende as metas e prioridades da administração pública federal e orienta a elaboração da LDO.",
        "O PPA tem vigência de quatro anos, coincidente com o mandato presidencial, do primeiro ao último ano de governo.",
        "A LOA compreende apenas o orçamento fiscal, pois o orçamento da seguridade social é aprovado em lei própria.",
        "O projeto de LOA da União deve ser encaminhado ao Congresso Nacional até 15 de abril de cada ano.",
        "A LDO dispõe sobre as alterações na legislação tributária e orienta a elaboração da LOA.",
      ],
      4,
      "Cabe à LDO orientar a LOA e dispor sobre alterações na legislação tributária (CF, art. 165, § 2º). Metas e prioridades são da LDO, o PPA vai do 2º ano do mandato ao 1º do seguinte, a LOA abrange também a seguridade social e 15 de abril é o prazo do projeto de LDO.",
      "pf-afo-orcamento",
    ),

    // ===== pf-afo-receita-despesa =====
    ce(
      PF_AFO,
      "Modalidades de empenho",
      "Para o contrato de manutenção da frota, é cabível o empenho global; para as despesas com energia elétrica, o empenho por estimativa.",
      true,
      "O empenho global serve a despesas contratuais sujeitas a parcelamento, e o estimativo, a despesas cujo montante não se pode determinar previamente (Lei 4.320, art. 60, §§ 2º e 3º).",
      "pf-afo-receita-despesa",
      SITUACAO_CONTRATO,
    ),
    ce(
      PF_AFO,
      "Restos a pagar",
      "A parcela de dezembro do contrato de manutenção, cujo serviço foi prestado e atestado mas não foi pago até 31 de dezembro, deverá ser inscrita em restos a pagar não processados.",
      false,
      "Com o serviço prestado e atestado, a despesa foi liquidada; empenhada, liquidada e não paga, ela se inscreve em restos a pagar processados. Os não processados são os empenhados e ainda não liquidados.",
      "pf-afo-receita-despesa",
      SITUACAO_CONTRATO,
    ),
    ce(
      PF_AFO,
      "Regime orçamentário",
      "Nos termos da Lei nº 4.320/1964, pertencem ao exercício financeiro as receitas nele lançadas e as despesas nele efetivamente pagas.",
      false,
      "O art. 35 da Lei 4.320/1964 dispõe que pertencem ao exercício as receitas nele arrecadadas e as despesas nele legalmente empenhadas.",
      "pf-afo-receita-despesa",
    ),
    ce(
      PF_AFO,
      "Ingressos extraorçamentários",
      "As cauções recebidas em garantia de contratos e os valores retidos em folha a título de consignações constituem ingressos extraorçamentários, pois o ente atua como depositário e deverá restituí-los ou repassá-los a terceiros.",
      true,
      "São recursos de terceiros que transitam pelo caixa do ente, sem lhe pertencer. Por isso não constituem receita orçamentária.",
      "pf-afo-receita-despesa",
    ),
    ce(
      PF_AFO,
      "LRF: despesa com pessoal",
      "Segundo a LRF, a despesa total com pessoal da União, em cada período de apuração, não pode exceder 50% da receita corrente líquida, enquanto, para estados e municípios, o limite é de 60%.",
      true,
      "São os limites globais do art. 19 da LC 101/2000. Na União, eles se repartem entre Legislativo (com o TCU), Judiciário, MPU e Executivo (art. 20).",
      "pf-afo-receita-despesa",
    ),
    ce(
      PF_AFO,
      "Estágios da receita",
      "O lançamento é o estágio da receita em que o contribuinte entrega os recursos aos agentes arrecadadores, e o recolhimento corresponde à transferência desses valores à conta do Tesouro.",
      false,
      "A entrega dos recursos aos agentes arrecadadores é a arrecadação. O lançamento verifica a procedência do crédito, identifica o devedor e inscreve o débito (Lei 4.320, art. 53).",
      "pf-afo-receita-despesa",
    ),
    me(
      PF_AFO,
      "Despesas de exercícios anteriores",
      "Em 2026, uma superintendência regional constatou que uma empresa lhe prestara serviço de limpeza em novembro de 2025. O orçamento de 2025 tinha dotação própria com saldo suficiente, mas a despesa não foi empenhada na época. Nos termos da Lei nº 4.320/1964, essa despesa deverá ser paga",
      [
        "como restos a pagar não processados, inscritos de ofício no início de 2026, porque o serviço ainda não havia sido atestado pelo fiscal.",
        "como restos a pagar processados, porque a prestação do serviço já ocorreu em 2025 e gerou direito líquido e certo ao credor.",
        "por meio de crédito extraordinário, por se tratar de despesa que não foi prevista no orçamento aprovado para 2026.",
        "como despesa de exercícios anteriores, à conta de dotação específica do orçamento vigente.",
        "sem emissão de empenho, uma vez que a despesa pertence a exercício já encerrado e dispensa nova autorização.",
      ],
      3,
      "Sem empenho em 2025, não há restos a pagar. A despesa de exercício encerrado, com crédito próprio e saldo suficiente, que não se processou na época própria é paga como despesa de exercícios anteriores, em dotação específica do orçamento vigente (art. 37).",
      "pf-afo-receita-despesa",
    ),
  );
}
