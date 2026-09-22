/**
 * TRILHA DE LÍNGUA PORTUGUESA — DATAPREV / FGV
 *
 * Currículo progressivo, do zero ao nível de prova. Quatro níveis, cada um
 * com lições independentes. O campo `questions` lista as questões da prova
 * de 17/11/2024 que cobram aquele conteúdo, para praticar na sequência.
 *
 * Ao editar: mantenha o markdown compatível com parseMarkdown() em app.js
 * (##, ###, ####, **negrito**, `código`, > citação, - lista, | tabela |).
 */

const portuguesTrilha = [
  // =========================================================================
  // NÍVEL 1 — FUNDAMENTOS
  // =========================================================================
  {
    id: "pt-nivel-1",
    level: 1,
    title: "Fundamentos",
    icon: "🧱",
    subtitle: "A anatomia da frase",
    description:
      "Sem isto, nada do resto encaixa. Aqui você aprende a enxergar as peças de uma frase e o cargo que cada uma ocupa.",
    lessons: [
      {
        id: "pt-1-1",
        title: "1.1 Frase, oração e período",
        summary: "Conte os verbos e você saberá com o que está lidando.",
        questions: [9],
        content: `
### Três palavras que não são sinônimos

| Termo | Definição | Exemplo |
| :--- | :--- | :--- |
| **Frase** | Qualquer enunciado com sentido completo. Pode **não ter verbo**. | *Fogo!* / *Que susto!* |
| **Oração** | Enunciado organizado **em torno de um verbo**. | *O sistema caiu.* |
| **Período** | Frase formada por uma ou mais orações, fechada por ponto. | *O sistema caiu e os dados sumiram.* |

#### A regra de ouro
> **Conte os verbos.** Cada verbo (ou locução verbal) = uma oração.

- *O analista **corrigiu** o bug.* → 1 verbo → 1 oração → **período simples**
- *O analista **corrigiu** o bug que **travava** o sistema.* → 2 verbos → 2 orações → **período composto**

Locução verbal conta como **um só** verbo:
- *Ele **vai corrigir** o bug.* → 1 oração (vai corrigir = uma locução)
- *Ele **devia viver** aborrecido.* → 1 oração — é a questão 5 da prova

### Período simples x composto

**Período simples** tem uma oração só. Ela é chamada de **oração absoluta**.

**Período composto** tem duas ou mais. E aí elas se relacionam de dois modos:

| Modo | O que é | Exemplo |
| :--- | :--- | :--- |
| **Coordenação** | Orações **independentes**, lado a lado | *Cheguei, sentei e trabalhei.* |
| **Subordinação** | Uma oração é **peça interna** da outra | *É preciso **estar atento**.* |

A diferença prática: na coordenação você pode separar as orações e cada uma continua fazendo sentido. Na subordinação, não — a subordinada ficaria solta no ar.

> *Cheguei.* / *Sentei.* → as duas se sustentam. **Coordenação.**
> *É preciso.* / *Estar atento.* → a segunda não se sustenta sozinha. **Subordinação.**

### Como isso caiu na prova

A **questão 9** dá a frase *"É preciso estar atento e forte"* e pede a alternativa **incorreta** sobre sua estrutura. Antes de qualquer análise, conte os verbos: **é** e **estar**. Dois verbos, período composto, subordinação. Só depois disso a questão fica resolvível.

> **⚠️ Pegadinha comum:** verbos no infinitivo, gerúndio e particípio **também contam**. *Ao chegar, vi que era tarde* tem três orações (chegar, vi, era).
        `,
      },
      {
        id: "pt-1-2",
        title: "1.2 As dez classes de palavras",
        summary: "O que cada palavra é, antes de saber o que ela faz.",
        questions: [4, 5],
        content: `
### Classe é o que a palavra É. Função é o que ela FAZ.

Essa distinção resolve metade das confusões. *Casa* é **substantivo** (classe) e pode ser **sujeito** ou **objeto** (função), dependendo da frase.

### As dez classes

| Classe | Para que serve | Varia? |
| :--- | :--- | :--- |
| **Substantivo** | Nomeia seres, coisas, ideias | gênero, número, grau |
| **Artigo** | Define ou indefine o substantivo | gênero, número |
| **Adjetivo** | Caracteriza o substantivo | gênero, número, grau |
| **Numeral** | Quantifica ou ordena | gênero, número |
| **Pronome** | Substitui ou acompanha o nome | gênero, número, pessoa |
| **Verbo** | Ação, estado, fenômeno | tempo, modo, pessoa, número, voz |
| **Advérbio** | Circunstancia verbo, adjetivo ou outro advérbio | **invariável** (só grau) |
| **Preposição** | Liga termos, cria subordinação | **invariável** |
| **Conjunção** | Liga orações ou termos de mesma função | **invariável** |
| **Interjeição** | Expressa emoção | **invariável** |

### As três que mais confundem

#### Adjetivo x advérbio
O adjetivo caracteriza **nome**; o advérbio circunstancia **verbo**.

- *Ele é **rápido**.* → caracteriza *ele* → **adjetivo**
- *Ele anda **rápido**.* → circunstancia *anda* → **advérbio**

Mesma palavra, classes diferentes. É por isso que *meio* varia quando é numeral/adjetivo e **não varia** quando é advérbio:

- *Comi **meia** laranja.* → numeral, concorda
- *Ela está **meio** confusa.* → advérbio (= um pouco), invariável

Esse é o erro da alternativa (A) da **questão 1**: *"A candidata parece **meia** confusa"* deveria ser *meio*.

#### Pronome adjetivo x pronome substantivo
- *__Alguns__ instantes* → acompanha o substantivo → **pronome adjetivo**
- *__Alguns__ chegaram* → substitui o substantivo → **pronome substantivo**

Na **questão 10**, *alguns* em *"Após alguns instantes"* é pronome adjetivo, e por isso funciona como adjunto adnominal.

#### Locução adjetiva
É um grupo de palavras com valor de adjetivo, quase sempre **preposição + substantivo**:

| Locução adjetiva | Adjetivo |
| :--- | :--- |
| amor **de mãe** | materno |
| dor **de cabeça** | cefálica |
| homem **do campo** | rural |

A **questão 4** trabalha com isso ao pedir o par incorreto entre paráfrase e adjetivo. *Irascível* não é "quem não se irrita" — é o contrário, quem se irrita com facilidade. O *ir-* ali é radical latino (*irasci*), não prefixo de negação.

> **⚠️ Cuidado com falsos prefixos de negação:** *inflamável* (que se inflama), *insosso* (sem sal), *irascível* (que se irrita).
        `,
      },
      {
        id: "pt-1-3",
        title: "1.3 Sujeito e predicado",
        summary: "Quem faz e o que se diz. Inclui os verbos de ligação.",
        questions: [5],
        content: `
### Os dois termos essenciais

**Sujeito** = o ser sobre o qual se declara algo.
**Predicado** = tudo o que se declara sobre o sujeito.

Para achar o sujeito, pergunte ao verbo: **"quem?"** ou **"o quê?"**

> *Os curiosos permaneciam defronte da porta.*
> Quem permanecia? **Os curiosos** → sujeito.

### Tipos de sujeito

| Tipo | Como é | Exemplo |
| :--- | :--- | :--- |
| **Simples** | Um só núcleo | ***O sistema*** *caiu.* |
| **Composto** | Dois ou mais núcleos | ***Arnaldo e Bernaldo*** *associaram-se.* |
| **Oculto / desinencial** | Identificável pela desinência | *(Nós) **Chegamos** cedo.* |
| **Indeterminado** | Não se quer ou não se pode identificar | *Falaram mal de você.* |
| **Oração sem sujeito** | Não existe sujeito | *Há erros no código.* / *Choveu.* |

> **⚠️ Os casos de oração sem sujeito que mais caem:** verbo *haver* no sentido de **existir**, verbos de fenômeno da natureza (*chover*, *nevar*), e *fazer* indicando **tempo** (*Faz dez anos*). Nesses casos o verbo fica **sempre na 3ª pessoa do singular**.

### Tipos de predicado

Aqui está o que a FGV realmente cobra. Tudo depende de **que tipo de verbo** está no centro.

| Predicado | Núcleo | Verbo |
| :--- | :--- | :--- |
| **Verbal** | o **verbo** | nocional (ação/fenômeno) |
| **Nominal** | o **predicativo** | de ligação |
| **Verbo-nominal** | verbo **e** predicativo | nocional + predicativo |

#### Verbo de ligação
Não indica ação: **liga** o sujeito a uma característica. Os principais:

| Noção | Verbos |
| :--- | :--- |
| Estado permanente | ser, viver |
| Estado transitório | estar, andar, achar-se |
| Mudança de estado | ficar, tornar-se, virar, fazer-se |
| Continuidade de estado | permanecer, continuar, seguir |
| Estado aparente | parecer |

**Mas atenção:** esses verbos **só são de ligação quando vem um predicativo depois**. O mesmo verbo muda de classe conforme o contexto — e é exatamente aí que mora a **questão 5**:

| Frase | O que vem depois | Verbo |
| :--- | :--- | :--- |
| *Piedade **ficou** à janela* | *à janela* = **lugar** | intransitivo, não é ligação |
| *Os curiosos **permaneciam** defronte* | *defronte* = **lugar** | intransitivo, não é ligação |
| *Devia **viver** bem **aborrecida*** | *aborrecida* = **adjetivo do sujeito** | **de ligação → estado** ✔ |

#### O teste definitivo
> Vem **adjetivo caracterizando o sujeito** → **predicativo** → verbo de ligação → indica **estado**.
> Vem **circunstância** (lugar, tempo, modo) → **adjunto adverbial** → verbo nocional → indica **ação**.

*Ficar* e *permanecer* podem, sim, ser de ligação — *ficou triste*, *permaneceu calado*. Na questão 5 eles não estão. Por isso o gabarito é **D**, e não B ou C.
        `,
      },
      {
        id: "pt-1-4",
        title: "1.4 Complementos do verbo e do nome",
        summary: "Objeto direto, objeto indireto e complemento nominal.",
        questions: [10, 12],
        content: `
### Termos integrantes: sem eles a frase fica pela metade

Diferente dos adjuntos (que são acessórios), os complementos **integram** o sentido. Tire e a frase trunca.

### Complementos do verbo

| Complemento | Preposição? | Pergunta | Exemplo |
| :--- | :--- | :--- | :--- |
| **Objeto direto** | **Não** | o quê? quem? | *Paguei **a dívida**.* |
| **Objeto indireto** | **Sim** (obrigatória) | a quem? de quê? | *Paguei **ao açougueiro**.* |

A preposição do objeto indireto é **exigida pelo verbo** — é isso que se chama **regência**.

#### Pronomes que substituem cada um
Este é o atalho mais útil da matéria:

| Pronome | Substitui | Exemplo |
| :--- | :--- | :--- |
| **o, a, os, as** | objeto **direto** | *Paguei a dívida* → *Paguei-**a*** |
| **lhe, lhes** | objeto **indireto** | *Paguei ao açougueiro* → *Paguei-**lhe*** |

É a chave da **questão 12**. A alternativa (D) diz:

> *"Possuía uma dívida **com o açougueiro**, paguei-**o** assim que pude."*

O pronome *o* é de objeto **direto**, mas ali ele retoma o **açougueiro**, que é pessoa — objeto **indireto**. O correto seria *paguei-**lhe***. Sem a menção ao açougueiro, a alternativa nem teria defeito: *paguei-o* poderia retomar *a dívida* e estaria certo. É por isso que a redação literal do caderno importa.

### Complemento nominal

O nome também pede complemento. **Complemento nominal** é o termo preposicionado que completa o sentido de um **substantivo abstrato**, **adjetivo** ou **advérbio**.

- *Tenho **necessidade de ajuda**.* → completa o substantivo abstrato *necessidade*
- *Ele está **livre de um sócio**.* → completa o adjetivo *livre*
- *Agiu **favoravelmente ao réu**.* → completa o advérbio *favoravelmente*

> **⚠️ O complemento nominal é SEMPRE preposicionado.** Se não há preposição, não é complemento nominal.

### Agente da passiva

Na voz passiva, quem pratica a ação vira **agente da passiva**, introduzido por **por** (ou **de**):

> *O bug foi corrigido **pelo analista**.*

Converta para a ativa e o agente vira sujeito: *O analista corrigiu o bug.*
        `,
      },
      {
        id: "pt-1-5",
        title: "1.5 Adjuntos, aposto e vocativo",
        summary: "Os acessórios — e a distinção que mais derruba candidato.",
        questions: [10],
        content: `
### Adjunto: o termo que se agrega

*Adjunto* vem de **adjungir** = agregar. É **acessório**: você retira e a frase continua de pé. Existem dois, e a diferença é **a quem ele se gruda**.

| | Gruda-se a | Indica | Exemplo |
| :--- | :--- | :--- | :--- |
| **Adjunto adnominal** | um **nome** | qualidade, posse, quantidade | *a casa **de Sofia*** |
| **Adjunto adverbial** | o **verbo**, adjetivo ou advérbio | circunstância | *Piedade ficou **à janela*** |

> **Macete:** ad**nominal** gruda em **nome**. Ad**verbial** gruda em **verbo**.

O adjunto adnominal pode ser: **artigo**, **pronome adjetivo**, **numeral**, **adjetivo** ou **locução adjetiva**.

### A distinção decisiva: adjunto adnominal x complemento nominal

Os dois vêm depois de um nome, muitas vezes com preposição. Parecem iguais. Não são. Rode esta escada **na ordem**:

\`\`\`text
1. NÃO tem preposição?
   (artigo, pronome, numeral, adjetivo)     -> ADJUNTO ADNOMINAL, sempre

2. Liga-se a ADJETIVO ou ADVÉRBIO?          -> COMPLEMENTO NOMINAL, sempre
   (adjetivo nao recebe adjunto adnominal)

3. Liga-se a substantivo CONCRETO?          -> ADJUNTO ADNOMINAL

4. Liga-se a substantivo ABSTRATO?          -> depende do papel:
      quem PRATICA a acao = adjunto adnominal
      quem SOFRE  a acao  = complemento nominal
\`\`\`

#### Aplicando à questão 10

| Trecho destacado | Passo da escada | Resultado |
| :--- | :--- | :--- |
| *Após **alguns** instantes* | 1 — pronome, sem preposição | adjunto adnominal |
| *motivo **oculto*** | 1 — adjetivo, sem preposição | adjunto adnominal |
| *a casa **de Sofia*** | 3 — *casa* é concreto | adjunto adnominal |
| *homem **que ia devagar*** | oração adjetiva = adjunto adnominal | adjunto adnominal |
| *livre **de um sócio*** | 2 — ***livre* é adjetivo** | **complemento nominal** ✔ |

#### O passo 4, que é o mais fino
Com substantivo abstrato, pergunte **quem pratica e quem sofre**:

> *a construção **do pedreiro*** → o pedreiro **construiu** (pratica) → **adjunto adnominal**
> *a construção **da casa*** → a casa **foi construída** (sofre) → **complemento nominal**

> *o amor **de mãe*** → a mãe **ama** (pratica) → adjunto adnominal
> *o amor **à pátria*** → a pátria **é amada** (sofre) → complemento nominal

### Aposto e vocativo

| Termo | O que faz | Marca | Exemplo |
| :--- | :--- | :--- | :--- |
| **Aposto** | **Explica** ou especifica um termo anterior | vírgula, dois-pontos, travessão | *Brasília, **capital do país**, cresceu.* |
| **Vocativo** | **Chama** o interlocutor | vírgula, entonação | ***Analista**, revise o código.* |

> **⚠️ Não confunda:** o aposto se refere a um termo **dentro** da oração e pode substituí-lo. O vocativo está **fora** da estrutura sintática — não é sujeito, nem objeto, nem nada. É só o chamamento.
        `,
      },
    ],
  },

  // =========================================================================
  // NÍVEL 2 — O PERÍODO COMPOSTO
  // =========================================================================
  {
    id: "pt-nivel-2",
    level: 2,
    title: "O período composto",
    icon: "🔗",
    subtitle: "Orações dentro de orações",
    description:
      "Como as orações se encaixam. É aqui que a FGV constrói suas questões mais técnicas de sintaxe.",
    lessons: [
      {
        id: "pt-2-1",
        title: "2.1 Coordenação",
        summary: "Orações independentes e as cinco relações entre elas.",
        questions: [6],
        content: `
### Orações que convivem sem hierarquia

Na coordenação, cada oração **se sustenta sozinha**. Elas se somam, se opõem, se alternam — mas nenhuma é peça interna da outra.

> *Espreitara uma deixa, **e** sai-lhe do testamento a massa toda dos bens.*

As duas têm sentido próprio. É coordenação.

### Os cinco tipos

| Tipo | Conjunções | Ideia |
| :--- | :--- | :--- |
| **Aditiva** | e, nem, não só... mas também | soma |
| **Adversativa** | mas, porém, contudo, todavia, entretanto, no entanto | oposição |
| **Alternativa** | ou, ora... ora, já... já, quer... quer | alternância |
| **Conclusiva** | logo, portanto, pois (**depois** do verbo), por isso | conclusão |
| **Explicativa** | pois (**antes** do verbo), porque, que | justificativa |

#### A pegadinha do "pois"
A posição muda tudo:

> *Estude, **pois** a prova é amanhã.* → **explicativa** (pois antes do verbo)
> *A prova é amanhã; estude, **pois**.* → **conclusiva** (pois depois do verbo, entre vírgulas)

#### Assindética x sindética
- **Assindética**: sem conjunção, só vírgula. *Cheguei, sentei, trabalhei.*
- **Sindética**: com conjunção. *Cheguei **e** sentei.*

### Vírgula na coordenação

Regra geral: **não** se usa vírgula antes de *e* quando o sujeito é o mesmo.

> *Cheguei e sentei.* (sem vírgula)

**Mas usa-se** quando os sujeitos são diferentes — e foi assim na alternativa (D) da **questão 6**:

> *Espreitara uma deixa**,** e sai-lhe do testamento a massa toda dos bens.*

Sujeitos distintos (ele / a massa dos bens), então a vírgula se justifica. Note que essa **não** é a justificativa do enunciado da questão, que trata de adverbial anteposta — por isso (D) é alternativa errada ali.

> **⚠️ Também se usa vírgula antes de *e*** quando ele se repete em enumeração (*e chorou, e gritou, e saiu*) ou quando tem valor adversativo (*Estudou muito, e não passou*).
        `,
      },
      {
        id: "pt-2-2",
        title: "2.2 Subordinadas substantivas",
        summary: "A oração que faz o papel de um substantivo. Teste: troque por “isso”.",
        questions: [9],
        content: `
### O princípio que organiza tudo

Uma oração subordinada **assume o papel de uma classe de palavra**. Só isso. Se ela faz papel de substantivo, é **substantiva**.

### O teste: troque por "isso"

> *É preciso **estar atento e forte**.*
> → *É preciso **isso**.* ✔

Funcionou. É **substantiva**.

E que cargo ela ocupa? Pergunte: *isso* é o quê na frase? É **quem** "é preciso" → é o **sujeito** → **substantiva subjetiva**.

### Os seis tipos

Cada tipo corresponde a uma função de substantivo:

| Tipo | Função que exerce | Exemplo |
| :--- | :--- | :--- |
| **Subjetiva** | sujeito | *É preciso **que estudes**.* |
| **Objetiva direta** | objeto direto | *Quero **que estudes**.* |
| **Objetiva indireta** | objeto indireto | *Preciso **de que estudes**.* |
| **Completiva nominal** | complemento nominal | *Tenho necessidade **de que estudes**.* |
| **Predicativa** | predicativo | *Meu desejo é **que estudes**.* |
| **Apositiva** | aposto | *Só quero isto: **que estudes**.* |

#### Como distinguir subjetiva de objetiva direta
As duas são as mais cobradas. Use o "isso":

> *É preciso isso* → *isso* é o **sujeito** de *é preciso* → **subjetiva**
> *Quero isso* → *isso* é o **objeto** de *quero* → **objetiva direta**

Verbos e expressões que pedem **subjetiva**: *é preciso, é necessário, convém, importa, consta, parece, acontece, é bom, é claro*.

> **⚠️ Regra prática:** se o verbo da principal está na **3ª pessoa do singular** e vem numa expressão impessoal (*é + adjetivo*, *convém*, *parece*), a substantiva é quase sempre **subjetiva**.

### A questão 9 destrinchada

A prova dá *"É preciso estar atento e forte"* e pede a alternativa **incorreta**:

| Alternativa | Está correta? Por quê |
| :--- | :--- |
| (A) subordinada com função de **sujeito** | ✔ é subjetiva |
| (B) subordinada **substantiva** | ✔ faz papel de substantivo |
| (C) **reduzida de infinitivo** | ✔ verbo em infinitivo, sem conjunção |
| (D) desenvolve em *"que se esteja atento e forte"* | ✔ é a versão desenvolvida |
| (E) **delimita a informação** da principal | ✗ delimitar é papel de **adjetiva restritiva** |

O gabarito é **E**. A substantiva subjetiva não delimita nada — ela **é** o sujeito.
        `,
      },
      {
        id: "pt-2-3",
        title: "2.3 Subordinadas adjetivas",
        summary: "A oração que vira adjetivo. E a vírgula que muda o sentido.",
        questions: [10],
        content: `
### O teste: troque por um adjetivo

> *...certo homem **que ia devagar***
> → *...certo homem **lento*** ✔

Funcionou. É **adjetiva**, e ela exerce a função de **adjunto adnominal** do substantivo anterior.

### Sempre começa com pronome relativo

**que, qual/o qual, quem, cujo, onde, quanto**

O pronome relativo tem um papel duplo: ele **retoma** um termo anterior (o antecedente) **e** exerce uma função sintática dentro da própria oração adjetiva.

> *O bug **que** travou o sistema foi corrigido.*
> *que* retoma *bug* e é **sujeito** de *travou*.

### Restritiva x explicativa: a vírgula muda tudo

| | Vírgula? | O que faz | Alcance |
| :--- | :--- | :--- | :--- |
| **Restritiva** | **Não** | **Limita** o antecedente | Só uma parte |
| **Explicativa** | **Sim**, entre vírgulas | **Comenta** o antecedente | O todo |

Compare com atenção:

> *Os alunos **que estudaram** passaram.*
> → **só** os que estudaram passaram. Houve alunos que não passaram.

> *Os alunos**,** que estudaram**,** passaram.*
> → **todos** estudaram e **todos** passaram.

> **⚠️ Esta é uma das questões favoritas da FGV.** Ela troca a pontuação e pergunta o que muda no sentido. A resposta é sempre: sem vírgula **restringe**, com vírgula **generaliza e comenta**.

#### Um teste rápido
A explicativa aceita ser trocada por um comentário entre parênteses:

> *Os alunos (aliás, todos estudaram) passaram.* ✔ → era explicativa

Se a troca destrói o sentido, era restritiva.

### O "cujo" — sempre cai, sempre erram

*Cujo* indica **posse** e concorda com o termo **posterior**, nunca com o anterior. E **nunca** vem seguido de artigo.

> *O sistema **cujos** dados sumiram...* (os dados são do sistema)
> ❌ *O sistema cujo os dados sumiram* — nunca use artigo depois de *cujo*.

### Adjetiva reduzida

Sem pronome relativo, com verbo em particípio, gerúndio ou infinitivo:

> *Os dados **armazenados** no servidor* = *os dados **que estão armazenados** no servidor*
        `,
      },
      {
        id: "pt-2-4",
        title: "2.4 Subordinadas adverbiais",
        summary: "As nove circunstâncias. É onde a FGV mais cobra semântica.",
        questions: [2, 6],
        content: `
### O teste: troque por "assim", "então", "lá"

> *"**Se as duas tribos dividirem em paz as batatas**, não chegam a nutrir-se"*
> → *"**Nesse caso**, não chegam a nutrir-se"* ✔

É **adverbial**. Exerce a função de **adjunto adverbial** e indica uma **circunstância**.

### As nove, com as conjunções que as denunciam

| Tipo | Conjunções típicas | Ideia |
| :--- | :--- | :--- |
| **Causal** | porque, já que, uma vez que, como (inicial), visto que | o **motivo** |
| **Consecutiva** | de modo que, de sorte que, tão/tanto/tal... que | o **resultado** |
| **Condicional** | se, caso, contanto que, desde que, salvo se | a **hipótese** |
| **Concessiva** | embora, ainda que, conquanto, se bem que, malgrado | obstáculo que **não impede** |
| **Comparativa** | como, (tão) quanto, assim como | a **comparação** |
| **Conformativa** | conforme, segundo, consoante, como (= conforme) | a **conformidade** |
| **Final** | para que, a fim de que, porque (= para que) | o **objetivo** |
| **Proporcional** | à medida que, à proporção que, quanto mais... mais | a **gradação** |
| **Temporal** | quando, enquanto, assim que, mal, logo que | o **momento** |

### As distinções que derrubam

#### Causa x consequência
A **causa** vem antes no tempo; a **consequência**, depois.

> *Chovia muito* (causa) *, de modo que a rua alagou* (consequência).

Na **questão 2**, *"de modo que seu gracioso vulto imergia-se na plena luz"* descreve o **resultado efetivo** da posição da moça → **consecutiva** → gabarito **A, consequência**.

> **⚠️ *De modo que* só é final** quando equivale a *para que*, com verbo no **subjuntivo**: *Falou devagar, de modo que **todos entendessem*** (objetivo). Com indicativo, é consecutiva.

#### Concessiva x adversativa
Ambas exprimem oposição, mas a classe é diferente:

> *__Embora__ chovesse, saí.* → **concessiva** (subordinada adverbial)
> *Chovia, __mas__ saí.* → **adversativa** (coordenada)

#### Os pares traiçoeiros

| Parece igual | Mas é |
| :--- | :--- |
| **Conquanto** | concessiva (= embora) |
| **Porquanto** | causal/explicativa (= porque) |
| **À medida que** | proporcional |
| **Na medida em que** | causal (= já que) |
| *À medida em que* | **forma incorreta**, não existe no padrão culto |

### Vírgula na adverbial

> **Adverbial ANTEPOSTA à principal → vírgula obrigatória.**

É a justificativa cobrada na **questão 6**. O trecho de referência traz uma condicional anteposta:

> *"**Se** as duas tribos dividirem em paz as batatas do campo**,** não chegam a nutrir-se..."*

A única alternativa com a mesma estrutura é *"**Quando** este acudiu**,** já ele mudara outra vez de ideia"* — temporal anteposta. O **valor semântico muda** (condição x tempo), mas a **justificativa da vírgula é a mesma**.

> **⚠️ Não caia na alternativa (E)** — *"No dia seguinte, Maria Benedita declarou..."*. Ali há um **adjunto adverbial** (locução, sem verbo), não uma **oração** adverbial. A FGV distingue os dois.
        `,
      },
      {
        id: "pt-2-5",
        title: "2.5 Orações reduzidas",
        summary: "Mesma oração, forma enxuta. Saber converter é meio caminho.",
        questions: [9],
        content: `
### O que define uma reduzida

Duas condições, as duas obrigatórias:

1. Verbo em **infinitivo**, **gerúndio** ou **particípio**
2. **Sem conjunção** nem pronome relativo

> *É preciso **estar** atento.* → reduzida de infinitivo
> *É preciso **que se esteja** atento.* → desenvolvida

Mesmo conteúdo, formas diferentes. A banca adora pedir a conversão.

### As três formas

| Forma | Verbo termina em | Exemplo |
| :--- | :--- | :--- |
| **Infinitivo** | -ar, -er, -ir | *Ao **chegar**, vi que era tarde.* |
| **Gerúndio** | -ndo | ***Chegando** cedo, pegaremos lugar.* |
| **Particípio** | -ado, -ido (e irregulares) | ***Terminada** a prova, saímos.* |

### Como desenvolver uma reduzida

1. Identifique o **tipo** (substantiva, adjetiva ou adverbial) pelo teste de substituição
2. Escolha o **conectivo** adequado ao sentido
3. Conjugue o verbo no modo e tempo apropriados

> *Ao **chegar**, vi que era tarde.*
> → **Quando cheguei**, vi que era tarde. (temporal)

> *Os dados **armazenados** no servidor sumiram.*
> → Os dados **que estavam armazenados** no servidor sumiram. (adjetiva)

> *É preciso **estar** atento.*
> → É preciso **que se esteja** atento. (substantiva subjetiva)

Esta última é exatamente a alternativa (D) da **questão 9** — e ela está **correta**.

### O gerúndio ambíguo

Reduzida de gerúndio pode ter vários valores. O contexto decide:

| Frase | Valor |
| :--- | :--- |
| ***Estudando** muito, passarás.* | condicional (= se estudares) |
| ***Chegando** cedo, pegamos lugar.* | temporal (= quando chegamos) |
| ***Sendo** tarde, não saímos.* | causal (= porque era tarde) |

> **⚠️ Gerúndio posposto indicando consequência** é considerado inadequado no padrão culto: *"O sistema caiu, **causando** prejuízo"*. Prefira *"...**o que causou** prejuízo"*. A FGV já cobrou isso como erro de construção.
        `,
      },
    ],
  },

  // =========================================================================
  // NÍVEL 3 — NORMA CULTA
  // =========================================================================
  {
    id: "pt-nivel-3",
    level: 3,
    title: "Norma culta",
    icon: "⚖️",
    subtitle: "Concordância, regência, crase e pontuação",
    description:
      "O coração da prova objetiva. São regras fechadas, com lista finita de exceções — e a banca cobra justamente as exceções.",
    lessons: [
      {
        id: "pt-3-1",
        title: "3.1 Concordância nominal",
        summary: "O adjetivo acompanha o substantivo. As exceções é que caem.",
        questions: [1],
        content: `
### A regra geral

O **adjetivo**, o **artigo**, o **numeral** e o **pronome** concordam em **gênero** e **número** com o substantivo a que se referem.

> *As certidões estão **anexas** ao processo.* ✔

### Os casos especiais — a lista que cai

| Palavra | Regra | Exemplo correto |
| :--- | :--- | :--- |
| **anexo, incluso, próprio, obrigado, mesmo** | Adjetivos: **concordam** | *As certidões estão **anexas***. / *Muito **obrigada***, disse ela. |
| **em anexo** | Locução adverbial: **invariável** | *Seguem **em anexo** as certidões.* |
| **meio** | Numeral concorda; advérbio (= um pouco) **não varia** | *Comi **meia** laranja.* / *Ela está **meio** confusa.* |
| **bastante** | Pronome concorda; advérbio não varia | ***Bastantes** alunos.* / *Eles estudaram **bastante**.* |
| **menos** | **Sempre invariável** | ***Menos** pessoas.* (nunca "menas") |
| **alerta** | Advérbio, invariável | *Ficaram **alerta**.* |
| **só** | = sozinho: concorda. = somente: invariável | *Ficaram **sós**.* / *Ficaram **só** dois.* |

### É proibido / é necessário / é bom

Depende do **determinante**:

> **Sem** artigo → **invariável**: *É proibido **entrada**.* / *É necessário **paciência**.*
> **Com** artigo → **concorda**: *É proibid**a** **a** entrada.* / *É necessári**a** **a** paciência.*

### Um e outro

Construção clássica de prova:

> *um e outro* + substantivo no **singular** + adjetivo no **plural**
> *um e outro funcionário **cumpridores***

### Adjetivo antes x depois de vários substantivos

| Posição | Regra | Exemplo |
| :--- | :--- | :--- |
| **Depois** | Concorda com o mais próximo **ou** com todos | *Comprei livro e revista **nova*** / ***novos*** |
| **Antes** | Concorda **com o mais próximo** | ***Nova** revista e livro* |

### A questão 1 destrinchada

| Alternativa | Erro |
| :--- | :--- |
| (A) *A candidata parece **meia** confusa* | *meio* é advérbio aqui → invariável |
| (B) *É proibido **a** entrada* | tem determinante → *É proibid**a*** |
| (C) *um e outro funcionário **cumpridor*** | adjetivo deveria ir ao **plural** |
| (D) *A entrada... está muito **caro*** | predicativo concorda com *entrada* → **cara** |
| (E) *As certidões estão **anexas*** | ✔ **gabarito** |
        `,
      },
      {
        id: "pt-3-2",
        title: "3.2 Concordância verbal",
        summary: "O verbo acompanha o sujeito — quando você consegue achá-lo.",
        questions: [],
        content: `
### A regra geral

O verbo concorda em **número** e **pessoa** com o **sujeito**.

> **90% dos erros vêm de não achar o sujeito.** Antes de conjugar, pergunte ao verbo: quem? o quê?

### Os casos que caem

#### Sujeito composto
| Posição | Regra |
| :--- | :--- |
| **Antes** do verbo | plural obrigatório: *Arnaldo e Bernaldo **associaram-se***. |
| **Depois** do verbo | plural **ou** concordância com o mais próximo |

#### Verbo HAVER = existir
**Impessoal**: fica **sempre** na 3ª pessoa do singular. E contamina o auxiliar.

> ***Havia** erros no código.* (nunca "haviam")
> ***Deve haver** erros.* (nunca "devem haver")

Mas com **existir** o verbo concorda normalmente: ***Existiam** erros.*

#### Verbo FAZER indicando tempo
Também impessoal:

> ***Faz** dez anos que estudo.* / ***Deve fazer** dez anos.*

#### Partícula SE
Aqui está a pegadinha mais frequente:

| Construção | Análise | Exemplo |
| :--- | :--- | :--- |
| **Pronome apassivador** (verbo transitivo direto) | **Concorda** | *Vende**m**-se **casas**.* |
| **Índice de indeterminação** (verbo transitivo indireto ou intransitivo) | **Singular** sempre | *Precisa-se **de** funcionários.* |

O teste: passe para a voz passiva analítica. Se couber, é apassivador e concorda.
> *Vendem-se casas* → *Casas **são vendidas*** ✔ → concorda

#### Expressões partitivas
*a maioria de, grande parte de, um dos que...*

> *A maioria dos alunos **passou*** (ou ***passaram***) — as duas são aceitas.

#### Porcentagens e quantidades
O verbo concorda com o **numeral** ou com o **substantivo** que o segue:

> *20% dos servidores **caíram**.* / *1% dos dados **foi** perdido.*

> **⚠️ Esta prova não trouxe questão de concordância verbal**, mas a FGV cobra o tema com frequência em outros certames. Vale saber, especialmente a partícula *se* e o *haver* impessoal.
        `,
      },
      {
        id: "pt-3-3",
        title: "3.3 Regência verbal e nominal",
        summary: "Que preposição cada verbo exige — e como o sentido muda.",
        questions: [12],
        content: `
### O que é regência

**Regência** é a relação entre um termo regente (verbo ou nome) e o complemento que ele exige, com ou sem preposição.

> *obedecer* exige **a** → *obedecer **a** leis*

### Os verbos campeões de prova

| Verbo | Regência | Observação |
| :--- | :--- | :--- |
| **obedecer / desobedecer** | transitivo **indireto**: a | *obedecer **a** leis absurdas* ✔ |
| **simpatizar / antipatizar** | transitivo indireto, **não pronominal** | *simpatizei **com** ela* — nunca "me simpatizei" |
| **residir / morar / situar-se** | preposição **em** | *residem **na** rua* — nunca "à rua" |
| **pagar / perdoar** | **coisa**: direto · **pessoa**: indireto | *paguei a dívida* / *paguei **ao** açougueiro* → *paguei-**lhe*** |
| **lembrar / esquecer** | sem pronome: direto · com pronome: indireto | *lembrei o nome* / *lembrei-**me do** nome* |
| **preferir** | A **a** B, sem "do que" | *prefiro café **a** chá* |
| **chegar / ir** | preposição **a** | *cheguei **ao** trabalho* — não "no trabalho" |
| **namorar** | transitivo **direto** | *namora **Maria*** — não "com Maria" |

### Verbos que mudam de sentido com a preposição

| Verbo | Sem preposição | Com preposição |
| :--- | :--- | :--- |
| **assistir** | ajudar: *assistir o doente* | ver: *assistir **ao** filme* |
| **aspirar** | sorver: *aspirar o pó* | almejar: *aspirar **ao** cargo* |
| **visar** | mirar, assinar: *visar o cheque* | almejar: *visar **ao** lucro* |
| **proceder** | ter fundamento: *o argumento procede* | originar-se: *proceder **de*** |
| **implicar** | acarretar: *implicar demissão* | antipatizar: *implicar **com*** |

> **⚠️ Macete:** nos quatro primeiros, o sentido **figurado/abstrato** pede preposição; o **concreto**, não.

### A questão 12

| Alternativa | Análise |
| :--- | :--- |
| (A) *obedecer **a** leis absurdas* | ✔ **gabarito** |
| (B) *me simpatizei com* | ✗ não é pronominal → *simpatizei com* |
| (C) *residem **à** rua* | ✗ residir pede **em** → *na rua* |
| (D) *paguei-**o*** (o açougueiro) | ✗ pessoa é indireto → *paguei-**lhe*** |
| (E) *lembra **do** aniversário* | ✗ sem pronome é direto → *lembra o aniversário* |

### Regência nominal

Nomes também exigem preposição. Os mais cobrados:

| Nome | Preposição |
| :--- | :--- |
| acesso, atentado, obediência | **a** |
| capaz, certo, digno, passível | **de** |
| ansioso, apto, propenso, disposto | **a** ou **para** |
| compatível, paralelo, semelhante | **a** ou **com** |
| respeito, referência, alusão | **a** |
        `,
      },
      {
        id: "pt-3-4",
        title: "3.4 Crase",
        summary: "Dois “a” que viraram um. Regra fechada, decorável em 10 minutos.",
        questions: [12],
        content: `
### O que é

**Crase** é a fusão de dois "a":

> preposição **a** + artigo **a(s)** = **à(s)**
> preposição **a** + pronome **aquele/aquela/aquilo** = **àquele/àquela/àquilo**

Precisa dos **dois**. Falta um, não há crase.

### O método em dois passos

\`\`\`text
1. O termo REGENTE exige a preposição "a"?
   (vou A, refiro-me A, obediencia A...)

2. O termo REGIDO aceita o artigo "a"?
   (palavra feminina que admite "a")

Os dois SIM -> tem crase.  Qualquer NAO -> nao tem.
\`\`\`

### O macete do masculino

Troque a palavra feminina por um **masculino equivalente**. Se aparecer **ao**, há crase.

> *Vou **à** escola* → *Vou **ao** colégio* ✔ tem crase
> *Vou **a** Brasília* → *Vou **a** Londres... a Paris* → *Vou **para o** Rio*? Teste: *Refiro-me **a** Brasília / **ao** Rio*

### Crase PROIBIDA — decore esta lista

| Antes de | Exemplo |
| :--- | :--- |
| palavra **masculina** | *andar **a** pé, **a** cavalo* |
| **verbo** no infinitivo | *começou **a** estudar* |
| **pronome pessoal** | *entreguei **a** ela* |
| pronomes de tratamento (exceto senhora, senhorita, madame) | *disse **a** Vossa Senhoria* |
| a palavra **uma** | *fui **a** uma festa* |
| plural com **a** no singular | *refiro-me **a** pessoas honestas* |
| nomes de cidade **sem** especificador | *cheguei **a** Brasília* |
| expressões com palavras **repetidas** | *cara **a** cara, gota **a** gota* |

### Crase OBRIGATÓRIA

| Caso | Exemplo |
| :--- | :--- |
| Locuções adverbiais **femininas** | ***à** noite, **à** vista, **às** pressas, **às** vezes* |
| Locuções prepositivas femininas | ***à** procura de, **à** espera de* |
| Locuções conjuntivas femininas | ***à** medida que, **à** proporção que* |
| ***à** moda de* / ***à** maneira de* (mesmo oculto) | *bife **à** milanesa* |
| Indicação de **horas** determinadas | *chegou **às** 14h* |

### Os casos facultativos

Nestes três, tanto faz:

1. Antes de **nome próprio feminino**: *Refiro-me **a**/**à** Maria.*
2. Antes de **pronome possessivo feminino**: *Vou **a**/**à** minha casa.*
3. Depois de **até**: *Fui até **a**/**à** praia.*

### A cidade com especificador

> *Cheguei **a** Brasília.* (sem crase)
> *Cheguei **à** Brasília **dos meus sonhos**.* (com crase — o especificador exige o artigo)

> **⚠️ Macete da cidade:** se você diz *"venho **da** cidade"*, a cidade aceita artigo → tem crase. Se diz *"venho **de** cidade"*, não aceita → sem crase.
        `,
      },
      {
        id: "pt-3-5",
        title: "3.5 Pontuação",
        summary: "A vírgula tem motivos. Saber qual é o motivo resolve a questão.",
        questions: [6],
        content: `
### As três proibições absolutas

Comece por aqui. **Nunca** separe com uma vírgula só:

1. **Sujeito** de **predicado** — ❌ *O analista, corrigiu o bug.*
2. **Verbo** de seu **complemento** — ❌ *Ele corrigiu, o bug.*
3. **Nome** de seu **complemento** — ❌ *Tenho necessidade, de ajuda.*

> **⚠️ A exceção:** pode-se **intercalar** um termo entre eles, mas aí vão **duas** vírgulas. *O analista, muito atento, corrigiu o bug.* ✔

### Os motivos que justificam a vírgula

| Motivo | Quando | Exemplo |
| :--- | :--- | :--- |
| **Adverbial anteposta** | Oração adverbial **antes** da principal | *Quando este acudiu, já ele mudara de ideia.* |
| **Adjunto adverbial deslocado** | Circunstância no início ou meio | *No dia seguinte, Maria declarou...* |
| **Intercalação** | Termo ou oração encaixada | *Acrescia que, em verdade, o doente melhorava.* |
| **Oração intercalada** | Fala do narrador no meio do discurso | *Verdade é, disse Rubião, que...* |
| **Enumeração** | Elementos de mesma função | *Comprou pão, leite e café.* |
| **Aposto** | Explicação de termo anterior | *Brasília, capital do país, cresceu.* |
| **Vocativo** | Chamamento | *Analista, revise o código.* |
| **Adjetiva explicativa** | Sempre entre vírgulas | *Os alunos, que estudaram, passaram.* |
| **Coordenadas com sujeitos diferentes** | Antes de *e* | *Espreitara uma deixa, e sai-lhe a massa dos bens.* |
| **Elipse do verbo** | Verbo omitido | *Ele prefere café; eu, chá.* |

### A questão 6 destrinchada

O enunciado pede a alternativa com a **mesma justificativa** do trecho:

> *"**se** as duas tribos dividirem em paz as batatas do campo**,** não chegam a nutrir-se"*

Isso é **oração subordinada adverbial condicional anteposta**.

| Alternativa | Motivo da vírgula ali | Bate? |
| :--- | :--- | :--- |
| (A) *Acrescia que, em verdade, o doente...* | intercalação | ✗ |
| (B) *Verdade é, disse Rubião, verdade é...* | oração intercalada | ✗ |
| (C) *Quando este acudiu, já ele mudara...* | **adverbial anteposta** | ✔ **gabarito** |
| (D) *Espreitara uma deixa, e sai-lhe...* | coordenadas, sujeitos diferentes | ✗ |
| (E) *No dia seguinte, Maria declarou...* | adjunto adverbial (**locução**, não oração) | ✗ |

> **⚠️ O detalhe que separa (C) de (E):** em (C) há uma **oração** (tem verbo: *acudiu*). Em (E) há apenas um **adjunto adverbial** — *no dia seguinte* não tem verbo. A FGV distingue os dois, e é exatamente aí que a maioria erra.

### Ponto e vírgula, dois-pontos, travessão

| Sinal | Usos |
| :--- | :--- |
| **Ponto e vírgula** | separa itens de enumeração longa; separa orações coordenadas extensas |
| **Dois-pontos** | anuncia enumeração, citação ou esclarecimento |
| **Travessão** | marca fala no diálogo; isola termo com mais ênfase que a vírgula |
        `,
      },
      {
        id: "pt-3-6",
        title: "3.6 Colocação pronominal",
        summary: "Próclise, mesóclise e ênclise — e as palavras que atraem.",
        questions: [],
        content: `
### As três posições

| Posição | Onde fica o pronome | Exemplo |
| :--- | :--- | :--- |
| **Próclise** | **antes** do verbo | *Não **me** diga.* |
| **Mesóclise** | **no meio** do verbo | *Dir-**me**-ia.* |
| **Ênclise** | **depois** do verbo | *Diga-**me**.* |

No Brasil a próclise é a mais natural na fala. Na norma culta escrita, ela depende de **palavras atrativas**.

### Próclise: as palavras que atraem o pronome

| Categoria | Exemplos |
| :--- | :--- |
| **Negação** | não, nunca, jamais, ninguém, nada, nem |
| **Advérbio** | aqui, ali, sempre, talvez, ainda, já |
| **Pronome relativo** | que, quem, onde, cujo, o qual |
| **Pronome indefinido** | alguém, tudo, poucos, ambos |
| **Pronome demonstrativo** | isto, isso, aquilo |
| **Conjunção subordinativa** | quando, se, embora, porque, conforme |
| **Em + gerúndio** | *Em **se** tratando de...* |
| **Orações exclamativas e optativas** | *Deus **o** abençoe!* |

> *Não **me** diga.* / *Talvez **se** resolva.* / *Quando **me** viu, sorriu.*

> **⚠️ Advérbio seguido de vírgula perde a força atrativa:** *Aqui, diz-**se** a verdade.*

### Mesóclise

Só com verbo no **futuro do presente** ou **futuro do pretérito**, e **sem** palavra atrativa:

> *Dir-**se**-á que...* / *Far-**lhe**-ia um favor.*

Havendo palavra atrativa, vira próclise: *Não **se** dirá...*

### Ênclise

É o padrão quando **nada atrai** o pronome:

> *Diga-**me** a verdade.* / *Piedade colocou-**se** à janela.*

### As proibições

1. **Nunca** comece frase com pronome átono: ❌ *Me diga.* (tolerado na fala, errado na norma culta)
2. **Nunca** use ênclise com verbo no **futuro**: ❌ *Dirá-me.* → *Dir-me-á.*
3. **Nunca** use ênclise com **particípio**: ❌ *Tinha dito-me.* → *Tinha **me** dito.*

### Locuções verbais

Com auxiliar + infinitivo/gerúndio, há mais liberdade:

> *Quero **lhe** dizer.* / *Quero dizer-**lhe**.* / *Quero-**lhe** dizer.* — todas aceitas
        `,
      },
    ],
  },

  // =========================================================================
  // NÍVEL 4 — TEXTO E SENTIDO
  // =========================================================================
  {
    id: "pt-nivel-4",
    level: 4,
    title: "Texto e sentido",
    icon: "🔍",
    subtitle: "O estilo FGV de cobrar interpretação",
    description:
      "Onde a banca deixa de perguntar regra e passa a perguntar leitura. É o bloco mais difícil de treinar — e o mais decisivo.",
    lessons: [
      {
        id: "pt-4-1",
        title: "4.1 Coesão: conectivos e referência",
        summary: "Como o texto se amarra. Trocar o conectivo muda o sentido.",
        questions: [2],
        content: `
### Dois mecanismos de coesão

| Mecanismo | O que faz | Exemplo |
| :--- | :--- | :--- |
| **Coesão referencial** | retoma ou antecipa termos | pronomes, sinônimos, elipse |
| **Coesão sequencial** | encadeia as ideias | conjunções, advérbios, locuções |

### Referência: anáfora e catáfora

| Tipo | Direção | Exemplo |
| :--- | :--- | :--- |
| **Anáfora** | retoma o que **já** foi dito | *Comprei o livro. **Ele** é ótimo.* |
| **Catáfora** | antecipa o que **virá** | *Digo-lhe **isto**: estude.* |

Regra prática dos demonstrativos:

> **este/isto** → o que está **perto** ou vem **adiante**
> **esse/isso** → o que está **próximo do interlocutor** ou **já foi** dito
> **aquele/aquilo** → o que está **distante** dos dois

Em enumerações de dois elementos:
> ***Este*** retoma o **último** citado; ***aquele***, o **primeiro**.

### Conectivos por valor semântico

| Valor | Conectivos |
| :--- | :--- |
| **Adição** | e, também, além disso, ademais, outrossim |
| **Oposição** | mas, porém, contudo, todavia, entretanto, no entanto |
| **Concessão** | embora, ainda que, conquanto, se bem que, apesar de |
| **Causa** | porque, já que, uma vez que, visto que, pois |
| **Consequência** | de modo que, logo, portanto, por conseguinte, assim |
| **Condição** | se, caso, desde que, contanto que, salvo se |
| **Finalidade** | para que, a fim de que, com o intuito de |
| **Conclusão** | portanto, logo, pois (posposto), então |
| **Explicação** | isto é, ou seja, a saber, em outras palavras |

### A questão que a FGV constrói com isso

Ela dá um trecho, destaca o conectivo e pergunta o **valor semântico**. Na **questão 2**, *"de modo que"* introduz o **resultado** → consequência.

O erro clássico é confundir **finalidade** com **consequência**:

> *Falou devagar, de modo que todos **entendessem**.* → subjuntivo → **finalidade** (era o objetivo)
> *Falou devagar, de modo que todos **entenderam**.* → indicativo → **consequência** (foi o resultado)

> **⚠️ Técnica de prova:** substitua o conectivo por um equivalente inequívoco e veja se o sentido se mantém. Se *de modo que* puder virar *por isso*, é consecutivo. Se puder virar *para que*, é final.
        `,
      },
      {
        id: "pt-4-2",
        title: "4.2 Semântica: sentido, ambiguidade e pressuposto",
        summary: "O que o texto diz sem dizer.",
        questions: [3, 4],
        content: `
### Denotação x conotação

| | O que é | Exemplo |
| :--- | :--- | :--- |
| **Denotação** | sentido literal, de dicionário | *A **raposa** correu.* |
| **Conotação** | sentido figurado, construído | *Aquele político é uma **raposa**.* |

### Pressuposto x subentendido

Esta distinção é fina e cai muito:

| | Marcado por | Pode ser negado? |
| :--- | :--- | :--- |
| **Pressuposto** | **palavra na frase** (ainda, já, deixou de, voltou a) | Não — está na língua |
| **Subentendido** | **contexto**, insinuação | Sim — o falante pode recuar |

> *A conectividade **ainda** é precária.*
> Pressuposto: espera-se que **deixe** de ser. Está em *ainda*, não dá para negar.

> *Está calor aqui.* (querendo que abram a janela)
> Subentendido: é insinuação. O falante pode dizer "eu só comentei".

**Palavras que carregam pressuposto:** ainda, já, agora, deixou de, voltou a, continua, outra vez, também, até, apenas.

### Figuras que a FGV cobra

| Figura | Definição | Exemplo |
| :--- | :--- | :--- |
| **Antítese** | oposição de termos | *Era o melhor e o pior dos tempos.* |
| **Paradoxo** | contradição aparente que revela verdade | *A felicidade é tão oposta à vida, que estando nela, a gente esquece que vive.* |
| **Ironia** | diz-se o contrário do que se quer | *Que belo trabalho!*, diante do fracasso |
| **Eufemismo** | suaviza | *Ele nos deixou.* |
| **Hipérbole** | exagera | *Morri de rir.* |
| **Metonímia** | troca por relação de proximidade | *Li **Machado**.* (a obra dele) |
| **Prosopopeia** | atribui vida ao inanimado | *O vento **sussurrava**.* |

> **⚠️ Antítese x paradoxo:** a antítese apenas **opõe** dois termos. O paradoxo **une** ideias contraditórias numa afirmação que, examinada, faz sentido. A **questão 3** é paradoxo: dizer que a felicidade é *oposta* à vida e ao mesmo tempo que se está *nela* é a contradição que produz o sentido.

### Ambiguidade

Defeito quando não é intencional. As fontes mais comuns:

| Fonte | Frase ambígua | Correção |
| :--- | :--- | :--- |
| **Pronome possessivo** | *João disse a Pedro que **seu** carro quebrou.* | *...que o carro **dele próprio** quebrou.* |
| **Pronome relativo distante** | *O filho da vizinha **que** viajou...* | reordenar a frase |
| **Adjunto mal posicionado** | *Vi o homem **com o binóculo**.* | *Com o binóculo, vi o homem.* |
| **Elipse do sujeito** | *Encontrou o chefe quando **saía**.* | explicitar quem saía |
        `,
      },
      {
        id: "pt-4-3",
        title: "4.3 Interpretação inferencial",
        summary: "A diferença entre o que decorre do texto e o que você acha.",
        questions: [3, 8],
        content: `
### A distinção que define o estilo FGV

| | O que é | Vale? |
| :--- | :--- | :--- |
| **Inferência** | decorre **necessariamente** do texto, mesmo sem estar dito com as mesmas palavras | ✔ |
| **Extrapolação** | é plausível no mundo real, mas **não tem respaldo** nas premissas do texto | ✗ |

> Se o texto diz *"muitos brasileiros não têm smartphone"*, **não** se infere que *"os smartphones deveriam ser proibidos"* nem que *"a tecnologia é inútil"*. São extrapolações.

### O método de quatro passos

1. **Leia o enunciado primeiro.** Saiba o que procurar antes de ler o texto.
2. **Localize o trecho** que responde. A resposta está no texto, não na sua bagagem.
3. **Confronte cada alternativa** com o trecho, palavra por palavra.
4. **Elimine pelo excesso**, não pela falta. Alternativa correta costuma ser cautelosa.

### Os quantificadores que denunciam alternativa errada

> **apenas, somente, exclusivamente, sempre, nunca, todos, nenhum, invariavelmente, obrigatoriamente**

Sempre que aparecer um desses, volte ao texto e verifique se o absoluto se sustenta. Na maioria das vezes, não.

Compare duas alternativas da **questão 8**:

| Alternativa | Problema |
| :--- | :--- |
| (D) *O exercício de fazer poesia torna o poeta **imune** à dor.* | absoluto sem respaldo |
| (E) *Há ironia que se sustenta, **sobretudo**, em fingir a dor que de fato se sente.* | o texto não trata de ironia |
| (C) *O fingimento é matéria de poesia, é a ferramenta da criação literária.* | ✔ cauteloso e ancorado |

### Cuidado com a alternativa "bonita"

A FGV planta alternativas moralmente simpáticas, socialmente corretas ou tecnicamente elegantes — mas **estranhas ao texto**. É o caso da alternativa (B) da **questão 33**: pesquisa farmacêutica para baratear remédios é desejável, mas não é o que a denúncia relatava.

> **⚠️ Pergunte sempre:** "isso está **no texto**, ou eu estou concordando com a ideia?"

### Polifonia e modalização

Atenção às marcas que relativizam:

| Marca | Efeito |
| :--- | :--- |
| aspas | ironia, distanciamento, citação |
| *aparente, suposto, pretenso* | relativiza a certeza |
| *pode, deve, talvez* | modaliza — não afirma |
| *segundo X, para Y* | atribui a voz a outro, não ao autor |

Se o texto diz *"segundo o psicólogo, o problema está no excesso"*, o autor **não** afirmou isso — ele **atribuiu** a afirmação a alguém.
        `,
      },
      {
        id: "pt-4-4",
        title: "4.4 Discurso citado e vozes verbais",
        summary: "Quem fala no texto, e quem pratica a ação.",
        questions: [11],
        content: `
### Os três discursos

| | Vozes | Marcas | Efeito |
| :--- | :--- | :--- | :--- |
| **Direto** | narrador e personagem **separados** | aspas, travessão, dois-pontos, verbo de elocução | realidade, autenticidade |
| **Indireto** | fala **absorvida** pelo narrador | conjunção integrante (*que*, *se*) | síntese, controle do narrador |
| **Indireto livre** | as duas vozes **fundidas** | sem marca gráfica | intimidade, fluxo de consciência |

> **Direto:** *Ele disse: — Estou cansado.*
> **Indireto:** *Ele disse **que** estava cansado.*
> **Indireto livre:** *Ele olhou o relógio. Estava cansado, precisava parar.*

### O que muda do direto para o indireto

| | Direto | Indireto |
| :--- | :--- | :--- |
| Pessoa | 1ª | 3ª |
| Tempo | presente | pretérito imperfeito |
| Demonstrativo | este, isto | aquele, aquilo |
| Advérbio | aqui, agora | ali, então |

### A questão 11

Ela pede o que é **incorreto** sobre o discurso **direto**. O gabarito é (D):

> *"demarca a soberania do narrador, pois ele **interpreta a fala citada, absorvida no fio de seu discurso**."*

Isso descreve o discurso **indireto**. No direto acontece o oposto: a voz do outro entra **preservada** e **separada** — a soberania do narrador é justamente relativizada.

### Vozes verbais

| Voz | O sujeito | Exemplo |
| :--- | :--- | :--- |
| **Ativa** | **pratica** a ação | *O analista corrigiu o bug.* |
| **Passiva** | **sofre** a ação | *O bug foi corrigido pelo analista.* |
| **Reflexiva** | pratica **e** sofre | *O analista feriu-se.* |

#### Passiva analítica x sintética

| | Forma | Exemplo |
| :--- | :--- | :--- |
| **Analítica** | ser + particípio | *Casas **são vendidas**.* |
| **Sintética** | verbo + **se** | ***Vendem-se** casas.* |

O teste que resolve a concordância: se a sintética converte para a analítica, o *se* é **apassivador** e o verbo **concorda**.

> *Vendem-se casas* → *Casas são vendidas* ✔ → concorda no plural
> *Precisa-se de funcionários* → *Funcionários são precisados* ✗ → não converte → *se* é índice de indeterminação → verbo no **singular**

> **⚠️ Conversão ativa → passiva:** o objeto direto vira sujeito, o sujeito vira agente da passiva. Se o verbo não tem objeto direto, **não existe** voz passiva.
        `,
      },
      {
        id: "pt-4-5",
        title: "4.5 Variação linguística e adequação",
        summary: "Não existe variedade errada — existe variedade inadequada.",
        questions: [7],
        content: `
### O princípio da Sociolinguística

> **Nenhuma variedade linguística é inferior a outra.** Todas são sistemas completos, com regras próprias. O que existe é **adequação** ou **inadequação** à situação.

Esse é o princípio que a FGV cobra — e as alternativas erradas quase sempre o violam, tratando a variedade popular como "pobre", "deficiente" ou "desprestigiada".

### Os tipos de variação

| Tipo | Varia conforme | Exemplo |
| :--- | :--- | :--- |
| **Diatópica** (regional) | o **lugar** | *mandioca / macaxeira / aipim* |
| **Diastrática** (social) | o **grupo social** | gírias, jargão profissional |
| **Diafásica** (situacional) | a **situação** | conversa com amigo x audiência |
| **Diacrônica** (histórica) | o **tempo** | *vossa mercê → você → cê* |
| **Diamésica** | o **meio** | fala x escrita x mensagem digital |

### Norma-padrão x norma culta x variedade popular

| | O que é |
| :--- | :--- |
| **Norma-padrão** | modelo idealizado, descrito nas gramáticas normativas |
| **Norma culta** | uso real de falantes escolarizados em situação monitorada |
| **Variedades populares** | usos de comunidades com menor escolarização — **sistemáticos**, não caóticos |

> **⚠️ Preconceito linguístico** é justamente confundir *variedade diferente* com *erro*. A FGV pune isso nas alternativas.

### A questão 7

Os versos de Luiz Gonzaga trazem *oiei*, *preguntei*, *uai*, *judiação*. São marcas de **variedade regional** (diatópica), usadas para caracterizar a cultura e o modo de vida do interior — **gabarito A**.

Por que as outras falham:

| Alternativa | Problema |
| :--- | :--- |
| (B) o comparativo *qual* | é verdade que há comparação, mas isso não é a construção **própria** que caracteriza o eu poético |
| (C) *poucos recursos comunicativos* | viola o princípio: a modalidade oral não é pobre |
| (D) *judiação reitera a tristeza* | a palavra não é o traço linguístico em foco |
| (E) *norma desprestigiada* | hierarquiza variedades — inaceitável |

### Marcas típicas da variedade popular

| Fenômeno | Exemplo |
| :--- | :--- |
| Monotongação | *pexe* (peixe), *bejo* (beijo) |
| Rotacismo | *pranta* (planta), *frô* (flor) |
| Metátese (troca de sons) | *preguntar* (perguntar) |
| Redução do gerúndio | *falano* (falando) |
| Concordância só no determinante | *os menino chegou* |

Todos são **sistemáticos** — seguem regra, não são aleatórios. É essa sistematicidade que prova que são variedades, e não erros.
        `,
      },
    ],
  },
];
