/**
 * EMBASAMENTO TEÓRICO - DATAPREV / FGV
 * ATI - Desenvolvimento de Software, prova de 17/11/2024, caderno Tipo 4 (Azul).
 *
 * As seções abaixo são espelho das áreas temáticas de questions.js: o `id` de
 * cada seção é o mesmo valor usado no campo `area` das questões. Isso garante
 * que o botão "Teoria" de qualquer questão caia no assunto correspondente e que
 * a aba Foco de Estudo agrupe pelos mesmos rótulos.
 *
 * Ao incluir uma área nova em questions.js, crie aqui a seção de mesmo id.
 */

const theoryModules = [
  // =========================================================================
  // MÓDULO 1: LÍNGUA PORTUGUESA — questões 1 a 12
  // =========================================================================
  {
    id: "portugues",
    title: "Língua Portuguesa",
    icon: "📖",
    description:
      "Interpretação, sintaxe do período, concordância e regência, semântica e pontuação — os cinco eixos cobrados nas questões 1 a 12.",
    sections: [
      {
        id: "portugues-interpretacao",
        title: "Interpretação e efeitos de sentido",
        content: `
### O que a FGV cobra aqui
Questões 3, 7, 8 e 11. A banca raramente pede paráfrase superficial: ela cobra **inferência estrita**, reconhecimento de **paradoxo e ironia**, leitura de **variação linguística** e domínio do **discurso citado**.

#### 1. Inferência x extrapolação
- **Inferência válida**: decorre necessariamente do texto, ainda que não esteja dita com as mesmas palavras.
- **Extrapolação (pegadinha clássica)**: é plausível no mundo real, mas não tem respaldo nas premissas do texto.

> Se o texto afirma que "muitos brasileiros não têm smartphone", NÃO se infere que "os smartphones deveriam ser proibidos".

#### 2. Paradoxo
Paradoxo é a **aproximação de ideias contraditórias que, juntas, produzem sentido**. Não confunda com antítese (simples oposição de termos).

| Figura | Definição | Exemplo |
| :--- | :--- | :--- |
| **Antítese** | Oposição entre dois termos | "Era o melhor e o pior dos tempos." |
| **Paradoxo** | Contradição aparente que revela uma verdade | "A felicidade é tão oposta à vida, que estando nela, a gente esquece que vive." |
| **Ironia** | Diz-se o contrário do que se quer significar | "Que belo trabalho!", diante de um fracasso. |

Na **questão 3**, dizer que a felicidade é *oposta* à vida e ao mesmo tempo que se está *nela* é exatamente a contradição que caracteriza o paradoxo.

#### 3. Variação linguística
Formas como *oiei*, *preguntei*, *uai* e *judiação* marcam uma **variedade regional** (diatópica). O erro recorrente das alternativas é rotular a variedade como "pobre", "com poucos recursos" ou "desprestigiada":

> **⚠️ Princípio da Sociolinguística:** nenhuma variedade é linguisticamente inferior. Ela é *adequada* ou *inadequada* a uma situação, nunca "errada" em si. Alternativa que hierarquiza variedades quase sempre é a errada.

#### 4. O fingimento poético (questão 8)
Em Fernando Pessoa, "fingir" não é mentir: é **transfigurar a experiência em matéria estética**. O poeta elabora a dor real até ela virar dor poética. Alternativas que leem o poema como crítica negativa ao poeta, ou como imunidade à dor, extrapolam.

#### 5. Discurso direto x indireto
| Critério | Discurso **direto** | Discurso **indireto** |
| :--- | :--- | :--- |
| Vozes | Narrador e personagem **separados** | Fala **absorvida** pelo narrador |
| Marcas | Aspas, travessão, dois-pontos, verbo de elocução | Conjunção integrante (*que*, *se*) |
| Pessoa/tempo | Preserva a enunciação original | Transposição de pessoa e tempo |
| Efeito | Realidade, autenticidade, vivacidade | Síntese, interpretação, controle do narrador |

> **⚠️ Pegadinha da questão 11:** "o narrador interpreta a fala, absorvida no fio de seu discurso" descreve o discurso **indireto**. No direto, a soberania é justamente relativizada, porque a voz do outro entra preservada.
        `,
      },
      {
        id: "portugues-sintaxe",
        title: "Sintaxe: termos da oração e período composto",
        content: `
### O que a FGV cobra aqui
Questões 2, 9 e 10. Relações semânticas entre orações, orações reduzidas e a distinção entre funções sintáticas parecidas.

#### 1. Conjunções e locuções por valor semântico
| Relação | Conectivos típicos | Valor |
| :--- | :--- | :--- |
| **Consecutiva** | *de modo que, de sorte que, tão... que, tanto... que* | Efeito, resultado |
| **Final** | *a fim de que, para que, porque (= para que)* | Objetivo, intenção |
| **Causal** | *porque, visto que, já que, uma vez que, como* (inicial) | Motivo que gera |
| **Concessiva** | *embora, conquanto, ainda que, se bem que, malgrado* | Obstáculo que não impede |
| **Condicional** | *se, caso, contanto que, desde que, salvo se* | Hipótese |
| **Proporcional** | *à medida que, à proporção que, quanto mais... mais* | Simultaneidade gradual |

> **⚠️ Alertas de pegadinha:**
> - *Conquanto* é **concessiva** (= embora). *Porquanto* é **causal/explicativa** (= porque).
> - *De modo que* é **consecutiva** quando indica resultado efetivo (questão 2); só é final quando equivale a "para que", com verbo no subjuntivo.
> - *À medida que* = proporção. *Na medida em que* = causa. A forma mista *à medida em que* é considerada incorreta.

#### 2. Orações subordinadas reduzidas
São as que têm o verbo em **infinitivo, gerúndio ou particípio** e **não são introduzidas por conjunção**.

Em *"É preciso estar atento e forte"*:
- *estar atento e forte* é **oração subordinada substantiva subjetiva reduzida de infinitivo**;
- desenvolvida, vira *"É preciso **que se esteja** atento e forte"*;
- ela funciona como **sujeito** de *é preciso*.

> **⚠️ Pegadinha da questão 9:** "delimita a informação da oração principal" descreve a oração **adjetiva restritiva**. Uma substantiva subjetiva não delimita nada — ela *é* o sujeito.

#### 3. Adjunto adnominal x complemento nominal
A distinção mais cobrada da matéria. Ambos vêm depois de um nome, muitas vezes com preposição.

| | Adjunto adnominal | Complemento nominal |
| :--- | :--- | :--- |
| Liga-se a | Só a **substantivo** | Substantivo **abstrato**, **adjetivo** ou **advérbio** |
| Papel | **Restringe/especifica** o nome | **Completa** o sentido do nome |
| Voz | Sentido **ativo** (agente) | Sentido **passivo** (paciente) |

**Teste prático:** se o termo se liga a um **adjetivo**, é sempre complemento nominal — adjetivo não recebe adjunto adnominal.

- *livre **de um sócio*** → *livre* é adjetivo → **complemento nominal** (questão 10, gabarito D)
- *a casa **de Sofia*** → liga-se a substantivo concreto, indica posse → adjunto adnominal
- ***alguns** instantes* → pronome indefinido antes do substantivo → adjunto adnominal
- *motivo **oculto*** → adjetivo caracterizando substantivo → adjunto adnominal
- *homem **que ia devagar*** → oração adjetiva restritiva, equivale a adjunto adnominal
        `,
      },
      {
        id: "portugues-normativa",
        title: "Concordância, regência e crase",
        content: `
### O que a FGV cobra aqui
Questões 1 e 12. Concordância nominal com casos especiais e regência de verbos que mudam de sentido conforme a preposição.

#### 1. Concordância nominal — os casos que sempre caem
| Caso | Regra | Exemplo correto |
| :--- | :--- | :--- |
| **anexo, incluso, próprio, obrigado** | Adjetivo: **concorda** com o substantivo | *As certidões estão **anexas** ao processo.* |
| **em anexo** | Locução adverbial: **invariável** | *Seguem **em anexo** as certidões.* |
| **meio** | Numeral/adjetivo concorda; advérbio (= um pouco) **não varia** | *Ela está **meio** confusa.* (não "meia") |
| **é proibido / é necessário / é bom** | Invariável **sem** determinante; concorda **com** determinante | *É proibido **entrada**.* / *É proibid**a** **a** entrada.* |
| **um e outro** | Substantivo no **singular**, adjetivo no **plural** | *um e outro funcionário **cumpridores*** |
| Predicativo de sujeito | Concorda com o **sujeito** | *A entrada está muito **cara**.* |

> **⚠️ A pegadinha da questão 1:** "É proibido a entrada" está errado porque há o determinante *a*; o correto seria "É proibida a entrada". E "um e outro funcionário cumpridor" falha no adjetivo, que deveria ir ao plural.

#### 2. Regência verbal — os verbos campeões
| Verbo | Regência padrão | Observação |
| :--- | :--- | :--- |
| **obedecer / desobedecer** | Transitivo **indireto**: obedecer **a** algo | *obedecer **a** leis absurdas* ✔ |
| **simpatizar / antipatizar** | Transitivo indireto, **não pronominal** | *simpatizei **com** ela* (nunca "me simpatizei") |
| **residir / morar / situar-se** | Preposição **em** | *residem **na** rua das Laranjeiras* (não "à rua") |
| **pagar / perdoar** | **Coisa**: objeto direto · **Pessoa**: objeto indireto | *paguei a dívida* / *paguei **ao** açougueiro* → *paguei-**lhe*** |
| **lembrar / esquecer** | Sem pronome: **direto** · Com pronome: **indireto** | *lembra **o** aniversário* / *lembra-**se do** aniversário* |
| **assistir** | **a** = ver · sem prep. = ajudar | *assistir **ao** jogo* / *assistir o doente* |
| **visar** | **a** = almejar · sem prep. = mirar/assinar | *visar **ao** cargo* |
| **aspirar** | **a** = almejar · sem prep. = sorver | *aspirar **ao** posto* |

> **⚠️ Questão 12:** *paguei-**o*** exigiria que o objeto fosse coisa; como se refere ao açougueiro (pessoa), o correto é *paguei-lhe*.

#### 3. Crase — quando NÃO ocorre
Crase é a fusão da preposição **a** com o artigo **a(s)** ou com *aquele/aquela/aquilo*.

**Proibida antes de:** palavra masculina · verbo · pronome pessoal · a maioria dos pronomes de tratamento · *uma* · palavra no plural precedida de *a* singular · nomes de cidade sem especificador.

**Obrigatória em:** *à medida que*, *à noite*, *à vista*, *às vezes*, *à moda de*, e nas locuções adverbiais femininas.

**Macete da palavra masculina:** troque por um masculino equivalente. Se aparecer *ao*, há crase. *Vou à escola* → *Vou ao colégio* ✔
        `,
      },
      {
        id: "portugues-semantica",
        title: "Semântica, classes de palavras e formação vocabular",
        content: `
### O que a FGV cobra aqui
Questões 4 e 5. Correspondência entre locução e adjetivo, prefixos de negação e verbos que exprimem estado.

#### 1. Locução adjetiva x adjetivo correspondente
A banca monta pares e pede o **incorreto**. O truque está quase sempre num adjetivo que significa o **oposto** do esperado.

| Locução / paráfrase | Adjetivo | Cuidado |
| :--- | :--- | :--- |
| que não se contenta | descontente | — |
| que não se apaga | indelével | — |
| que não se pode distinguir | indistinguível | — |
| que não se mistura | imiscível | — |
| **que se irrita facilmente** | **irascível** | ⚠️ *Irascível* NÃO é "que não se irrita". É o contrário. (questão 4) |

#### 2. Prefixos de negação: in-, i-, im-, ir-
O prefixo assume forma diferente conforme a letra seguinte: **i-** antes de *l* e *r* com assimilação (*ilegal*, *irregular*), **im-** antes de *p* e *b* (*impossível*), **in-** nos demais casos.

> **⚠️ Nem toda palavra com i-/in- é negativa.** *Irascível* vem do latim *irasci* ("irar-se") — o "ir-" é parte do radical, não prefixo. O mesmo vale para *inflamável* (que se inflama) e *insosso*.

#### 3. Verbos de ligação e a noção de estado
Verbo de ligação não indica ação: ele **liga o sujeito a um predicativo**. O predicado é **nominal**.

| Noção | Verbos típicos |
| :--- | :--- |
| **Estado permanente** | ser, viver |
| **Estado transitório** | estar, andar, achar-se |
| **Mudança de estado** | ficar, tornar-se, virar, fazer-se |
| **Continuidade de estado** | permanecer, continuar, seguir |
| **Estado aparente** | parecer |

> **⚠️ A sutileza da questão 5 (gabarito D):** o mesmo verbo muda de classe conforme o contexto.
> - *Piedade **ficou** à janela* → *à janela* é adjunto adverbial de **lugar**; aqui *ficar* é intransitivo (permanecer num lugar), não de ligação.
> - *Os curiosos **permaneciam** defronte da porta* → idem, permanência de **lugar**.
> - *Devia **viver** bem aborrecida da sorte* → *aborrecida* é **predicativo do sujeito**; *viver* liga sujeito e estado. É o único caso de verbo indicando **estado**.
> - *tornou por onde viera* → *tornar* = voltar, verbo de **ação**.
> - *andar por aí* → deslocamento, verbo de **ação**.

**Teste:** se o termo seguinte ao verbo é **adjetivo que caracteriza o sujeito**, é predicativo → verbo de ligação. Se é **circunstância de lugar/tempo**, é adjunto adverbial → verbo nocional.
        `,
      },
      {
        id: "portugues-pontuacao",
        title: "Pontuação",
        content: `
### O que a FGV cobra aqui
Questão 6. Identificar **por que** a vírgula foi usada e achar outro caso com a mesma justificativa.

#### As justificativas possíveis para a vírgula
| Uso | Quando | Exemplo |
| :--- | :--- | :--- |
| **Adverbial anteposta** | Oração subordinada adverbial **antes** da principal | *Quando este acudiu, já ele mudara de ideia.* |
| **Adjunto adverbial deslocado** | Circunstância no início ou no meio | *No dia seguinte, Maria declarou...* |
| **Intercalação** | Termo ou oração encaixada, isolada por **duas** vírgulas | *Acrescia que, em verdade, o doente melhorava.* |
| **Oração intercalada** | Fala do narrador dentro do discurso | *Verdade é, disse Rubião, que o cachorro...* |
| **Coordenadas com sujeitos diferentes** | Antes de *e* quando os sujeitos não coincidem | *Espreitara uma deixa, e sai-lhe do testamento a massa.* |
| **Enumeração** | Elementos de mesma função | *Comprou pão, leite e café.* |

#### Aplicando à questão 6
O trecho de referência é:

> "**se** as duas tribos dividirem em paz as batatas do campo**,** não chegam a nutrir-se suficientemente"

Trata-se de uma **oração subordinada adverbial condicional anteposta** à principal. A justificativa, portanto, é *"oração adverbial deslocada para antes da principal"*.

A única alternativa com a mesma estrutura é *"**Quando** este acudiu**,** já ele mudara outra vez de ideia"* — adverbial **temporal** anteposta. O valor semântico muda (condição x tempo), mas a **justificativa da vírgula é a mesma**: adverbial anteposta.

> **⚠️ Cuidado:** a alternativa com *"No dia seguinte, Maria Benedita declarou..."* é tentadora, mas ali há um **adjunto adverbial** (locução), não uma **oração**. A FGV distingue os dois.

#### Regras de ouro
1. **Nunca** separe sujeito de predicado por uma só vírgula.
2. **Nunca** separe verbo de seu complemento por uma só vírgula.
3. Termo deslocado ou intercalado pede vírgula — mas se intercalado, use **as duas**.
4. Oração adjetiva **explicativa** vai entre vírgulas; **restritiva**, nunca.
        `,
      },
    ],
  },

  // =========================================================================
  // MÓDULO 2: LÍNGUA INGLESA — questões 13 a 24
  // =========================================================================
  {
    id: "ingles",
    title: "Língua Inglesa",
    icon: "🌐",
    description:
      "Compreensão de textos autênticos, referência e coesão, vocabulário e classes de palavras, e verbos modais — o recorte das questões 13 a 24.",
    sections: [
      {
        id: "ingles-compreensao",
        title: "Compreensão de texto",
        content: `
### O que a FGV cobra aqui
Questões 13, 15, 17 e 19. Os textos são **autênticos**: anúncio de e-book, abstract acadêmico e resenha de produto. A banca pede leitura de detalhe e identificação de gênero.

#### 1. Questões de "true/false combination"
O formato *"only 1 and 4 are true"* (questão 13) exige checar **cada item** no texto. Estratégia:
1. Numere as afirmativas e localize o trecho correspondente antes de olhar as alternativas.
2. Marque V/F item a item.
3. Só então procure a combinação.

**Atenção a quantificadores absolutos** — *only*, *just*, *all*, *never*, *exclusively*. Eles costumam ser o que torna o item falso:
- *"The tips are **only** for fresh graduates"* → falso, o texto diz *"even have 20 years of work experience"*.
- *"It is a printed book"* → falso, é *"eBook Kindle **only**"*.

#### 2. Identificar o gênero textual
| Pistas | Gênero |
| :--- | :--- |
| Título + autores + **Abstract** + DOI/link institucional | **Artigo acadêmico** (questão 19) |
| Chamadas em imperativo, preço, avaliações ★, "get this book now" | Anúncio / material promocional |
| Voz em 1ª pessoa, opinião, veículo de mídia, assinatura do repórter | Resenha jornalística |

#### 3. Atribuir uma fala a quem a disse
Na questão 17, a pergunta parafraseia a citação: *"he should have had the opportunity to study on the guide on the brick of graduating"* remete a *"This is the book I would have needed **on the verge of graduation**"* — **Teijo Kelander**.

> **⚠️ Técnica:** em texto com vários depoimentos assinados, mapeie **nome → ideia central** antes de ler as alternativas. A paráfrase da pergunta nunca repete as palavras do texto.

#### 4. Perguntas de ideia global ("What information is in TEXT?")
A resposta correta costuma ser a mais **abrangente e cautelosa**. As erradas restringem indevidamente:
- *"Challenge **only** beginners"* → o texto atende também experientes.
- *"...to be a successful IT consultant **abroad**"* → o texto não fala de exterior.
- *"...find a dream **internship**"* → é sobre emprego, não estágio.

A correta (questão 15) fala em *"despite your experience"*, captando que o guia serve a qualquer nível.
        `,
      },
      {
        id: "ingles-referencia",
        title: "Referência, pronomes e conectivos",
        content: `
### O que a FGV cobra aqui
Questões 14, 16, 18 e 23. Dois mecanismos de coesão: **referência pronominal** e **conectivos (linking words)**.

#### 1. Referência pronominal
Para achar o antecedente de um pronome:
1. Volte no texto procurando o substantivo mais próximo **que concorde em número e traço semântico**.
2. Teste substituindo o pronome pelo candidato — a frase precisa continuar coerente.

| Pronome | Aponta para |
| :--- | :--- |
| **he / she / her / him** | Pessoa (traço [+humano]) |
| **it** | Coisa, animal ou ideia |
| **they / them** | Plural, pessoas ou coisas |
| **this / these** | Próximo / mencionado adiante |
| **that / those** | Distante / já mencionado |

- **Questão 14:** *"Even my **mom** says you have to read this book, or you have to answer to **her**"* → *her* é [+humano, feminino, singular] → **mom**. *Consultants*, *students* e *professors* são plurais; *book* é [−humano].
- **Questão 23:** *"Brother's new **MPrint MW-260** ... **It** can print up to 20 pages per minute"* → *it* retoma o sujeito recém-apresentado, a impressora. *PC*, *Pocket PC* e *handheld* aparecem como complementos de *from any*, não como sujeito.

#### 2. Conectivos por valor semântico
| Valor | Conectivos |
| :--- | :--- |
| **Adição** | and, moreover, furthermore, besides, in addition |
| **Consequência / efeito** | thus, therefore, hence, consequently, so, as a result |
| **Contraste** | but, however, whereas, while, nevertheless, although, yet |
| **Causa** | because, since, as, due to, owing to |
| **Condição** | if, unless, provided that, as long as |
| **Tempo** | meanwhile, then, afterwards, while |
| **Exemplificação** | for instance, for example, such as |

- **Questão 16:** *"you can find out why your current job is not satisfying... **and** turn your career around"* → *and* soma um segundo benefício → valor **aditivo** → **moreover**. (*Hence* é consequência, *whereas* contraste, *unless* condição, *meanwhile* tempo.)
- **Questão 18:** *"The book gives a strong and realistic description... **Thus**, every IT student should read the book"* → *thus* = *therefore* → introduz **efeito/consequência**.

> **⚠️ Pegadinha frequente:** *since* e *as* são ambíguos (causa **ou** tempo) e *while* também (tempo **ou** contraste). Decida pelo sentido, não pela tradução automática.
        `,
      },
      {
        id: "ingles-vocabulario",
        title: "Vocabulário e classes de palavras",
        content: `
### O que a FGV cobra aqui
Questões 20, 22 e 24. Em inglês a **mesma forma** costuma servir a mais de uma classe gramatical; a banca explora isso.

#### 1. Conversão (a mesma palavra como verbo e substantivo)
Identifique a classe pela **posição na frase**, não pela forma:

| Indício | Classe |
| :--- | :--- |
| Depois de artigo (*a*, *the*) ou adjetivo | **Substantivo** |
| Depois de *to*, ou de auxiliar (*can*, *will*, *do*) | **Verbo** |
| Depois de preposição (*worth a*, *for a*) | **Substantivo** |
| Antes de substantivo, qualificando-o | **Adjetivo** |

**Questão 22 —** *browse* como substantivo:
- *"The brochure is well worth **a browse**"* → precedido do artigo *a* → **substantivo** ✔
- *"stopped in bookstores **to browse**"*, *"I usually **browse** the internet"*, *"for him **to browse** over"*, *"I always **browse** in a shop"* → todos **verbos**.

**Questão 20 —** *rate* em *"adoption **rate**"*:
- vem depois do substantivo *adoption*, que o modifica → *rate* é o núcleo → **substantivo**;
- o sentido é **medida/taxa** (proporção de adoção), não "cobrar" nem "avaliar".
- Resposta: *a measure and it's a noun*.

#### 2. Vocabulário: unidades de medida
**Questão 24 —** *"a 1-pound printer"*:
- *pound* é **libra**, tanto unidade de **peso** (≈ 453 g) quanto **moeda** britânica (£);
- o contexto decide: *"we wouldn't mind adding to our **travel bag**"* fala de carregar → **peso**;
- o texto ainda diz explicitamente *"No word on **pricing**"*, ou seja, o preço não foi informado — o que elimina a alternativa de preço.

> **⚠️ Substantivo composto com número:** em *a 1-pound printer*, *1-pound* está hifenizado e **no singular**, funcionando como adjetivo. Compare: *a five-year-old child*, *a two-hour meeting*. Se o número vier depois, volta ao plural: *the printer weighs two pounds*.

#### 3. Falsos cognatos que costumam aparecer
| Inglês | **Significa** | Não é |
| :--- | :--- | :--- |
| actually | na verdade | atualmente |
| eventually | por fim | eventualmente |
| comprehensive | abrangente | compreensivo |
| support | apoiar, suportar (sustentar) | tolerar |
| pretend | fingir | pretender |
| library | biblioteca | livraria |
| push | empurrar | puxar |
        `,
      },
      {
        id: "ingles-modais",
        title: "Verbos modais",
        content: `
### O que a FGV cobra aqui
Questão 21. Reconhecer qual **valor** o modal assume no contexto.

#### Valores dos principais modais
| Modal | Valores possíveis | Exemplo |
| :--- | :--- | :--- |
| **should** | **Conselho/sugestão**, expectativa, obrigação fraca | *What strategy **should** a developer use?* |
| **must** | Obrigação forte, dedução lógica quase certa | *You **must** submit the form.* |
| **have to** | Obrigação externa, imposta por circunstância | *I **have to** work on Sunday.* |
| **can** | Habilidade, permissão, possibilidade geral | *She **can** code in Dart.* |
| **could** | Possibilidade, habilidade no passado, pedido polido | *This **could** be a bug.* |
| **may / might** | Possibilidade incerta, permissão formal | *It **may** rain.* |
| **shall** | Oferta, sugestão (1ª pessoa), obrigação em norma | ***Shall** I help you?* |
| **would** | Condicional, hábito no passado, pedido polido | *I **would** prefer REST.* |

#### Como distinguir na prova
- **Ausência de obrigação** não é *should*, é ***don't have to*** / ***needn't***.
- **Oferta** costuma vir em pergunta com *shall* ou *would you like*.
- **Possibilidade** é território de *may*, *might*, *could*.
- **Obrigação** forte é *must* / *have to*.

**Questão 21 —** *"what strategy **should** a developer use to be successful? **Should** they innovate, make many similar apps...?"*

O autor não impõe nada nem oferece: está **levantando hipóteses de conduta recomendável**. O valor é de **sugestão/conselho**.

> **⚠️ Cuidado com *should* em normas técnicas.** Em documentos de especificação, *should* significa "recomendado, mas não obrigatório", enquanto *must* / *shall* significam obrigatório e *may* significa opcional. Esse uso é convenção de engenharia e não anula o valor de sugestão em texto corrido — foi o de texto corrido que a FGV cobrou aqui.
        `,
      },
    ],
  },

  // =========================================================================
  // MÓDULO 3: RACIOCÍNIO LÓGICO-MATEMÁTICO — questões 25 a 30
  // =========================================================================
  {
    id: "rlm",
    title: "Raciocínio Lógico-Matemático",
    icon: "🧠",
    description:
      "Equivalências lógicas, porcentagem e taxas médias, médias ponderadas, divisão proporcional, sistemas e contagem — o que caiu nas questões 25 a 30.",
    sections: [
      {
        id: "rlm-logica",
        title: "Lógica proposicional e equivalências",
        content: `
### O que a FGV cobra aqui
Questão 25. A equivalência mais pedida em concurso: a **contrapositiva**.

#### 1. As duas equivalências da condicional
Dada **P → Q** ("se P, então Q"):

| Nome | Fórmula | Em palavras |
| :--- | :--- | :--- |
| **Contrapositiva** | **~Q → ~P** | Se não ocorre Q, então não ocorreu P |
| **Disjuntiva** | **~P ∨ Q** | Ou não P, ou Q |

**Questão 25:** *"Se Cesar é fã de futebol, então ele assiste a muitos jogos."*
- P = é fã de futebol · Q = assiste a muitos jogos
- Contrapositiva: *"Se Cesar **não assiste** a muitos jogos, então ele **não é** fã de futebol."* ✔

#### 2. As armadilhas clássicas
| Construção | Nome | É equivalente? |
| :--- | :--- | :--- |
| ~Q → ~P | Contrapositiva | ✅ **Sim** |
| ~P → ~Q | **Inversa** | ❌ Não |
| Q → P | **Recíproca** | ❌ Não |
| P ∧ Q | Conjunção | ❌ Não |

> **⚠️ A pegadinha da questão 25** é a alternativa *"Se Cesar não é fã de futebol então ele não assiste a muitos jogos"* — essa é a **inversa**, e inversa não equivale à condicional. Ele pode não ser fã e ainda assim assistir a muitos jogos.

#### 3. Negação da condicional
**~(P → Q) ≡ P ∧ ~Q**

Negar "se chove, o chão molha" é afirmar "chove **e** o chão **não** molha". Não é uma nova condicional.

#### 4. Leis de De Morgan
- **~(P ∧ Q) ≡ ~P ∨ ~Q** — nega tudo e troca *e* por *ou*
- **~(P ∨ Q) ≡ ~P ∧ ~Q** — nega tudo e troca *ou* por *e*

#### 5. Condição suficiente e necessária
Em **P → Q**: P é condição **suficiente** para Q; Q é condição **necessária** para P.

> Ser fã de futebol *basta* para assistir a muitos jogos. Assistir a muitos jogos é *necessário* para ser fã — mas não garante que seja.
        `,
      },
      {
        id: "rlm-proporcoes",
        title: "Porcentagem, médias e proporções",
        content: `
### O que a FGV cobra aqui
Questões 27, 28 e 29. Três aplicações clássicas de proporcionalidade.

#### 1. Aumentos sucessivos e taxa média (questão 28)
Aumentos **não se somam**: eles se **multiplicam**.

Dois aumentos de 30% e 10%:

\`\`\`text
fator acumulado = 1,30 × 1,10 = 1,43   →  aumento total de 43%
\`\`\`

A **taxa média** é a que, aplicada duas vezes, produz o mesmo acumulado. É a **média geométrica**, não a aritmética:

\`\`\`text
(1 + i)² = 1,43
1 + i    = √1,43 ≈ 1,1958
i        ≈ 19,58%   →  maior que 19% e menor que 20%
\`\`\`

> **⚠️ A pegadinha:** a média **aritmética** de 30% e 10% daria 20%. A FGV coloca "igual a 20%" entre as alternativas exatamente para pegar quem somou e dividiu por 2. A média geométrica é sempre **menor** que a aritmética.

#### 2. Média ponderada (questão 27)
\`\`\`text
MP = (n₁·p₁ + n₂·p₂ + ... ) / (p₁ + p₂ + ...)
\`\`\`

Notas 4, 6, 8, 8 com pesos 1, 2, 3, 4 (soma 10), precisando de média ≥ 7,0 → soma ponderada ≥ 70.

**Princípio:** para maximizar o resultado, a **menor nota** deve receber o **menor peso**.

| Nota 4 no peso | Soma ponderada | Passa? |
| :--- | :--- | :--- |
| 1 | 4·1 + 6·2 + 8·3 + 8·4 = 72 | ✅ |
| 2 | 4·2 + 6·1 + 8·3 + 8·4 = 70 | ✅ (no limite) |
| 3 | 4·3 + 6·1 + 8·2 + 8·4 = 66 | ❌ |
| 4 | 4·4 + 6·1 + 8·2 + 8·3 = 62 | ❌ |

Logo, a nota 4 tem de estar no **1º ou no 2º bimestre**.

#### 3. Divisão proporcional (questão 29)
Lucro e prejuízo se repartem na razão do capital investido.

\`\`\`text
Capital total = 12.000 + 13.000 = 25.000
Cota de Arnaldo = 12.000 / 25.000 = 0,48
Prejuízo de Arnaldo = 0,48 × 50.000 = R$ 24.000
\`\`\`

**Confira sempre:** 24.000 + 26.000 = 50.000 ✔

> **⚠️ Atenção:** o prejuízo pode superar o capital investido, como aqui (Arnaldo entrou com 12 mil e perdeu 24 mil). Não descarte a alternativa por parecer estranho.
        `,
      },
      {
        id: "rlm-algebra",
        title: "Álgebra e contagem",
        content: `
### O que a FGV cobra aqui
Questões 26 e 30. Sistemas com produtos notáveis e contagem de pares.

#### 1. Sistema com soma e soma dos quadrados (questão 26)
Quando o enunciado dá **x + y** e **x² + y²**, use a identidade:

\`\`\`text
(x + y)² = x² + 2xy + y²    →    xy = [(x+y)² − (x²+y²)] / 2
\`\`\`

Com x + y = 1 e x² + y² = 313:

\`\`\`text
xy = (1² − 313) / 2 = −312 / 2 = −156
\`\`\`

Agora monte a equação do 2º grau cujas raízes são x e y:

\`\`\`text
t² − (soma)·t + (produto) = 0
t² − t − 156 = 0
Δ = 1 + 624 = 625        √Δ = 25
t = (1 ± 25) / 2   →   t₁ = 13,  t₂ = −12
\`\`\`

A diferença entre o maior valor positivo e o menor negativo:

\`\`\`text
13 − (−12) = 25
\`\`\`

> **⚠️ Atalho:** a diferença **x − y** sai direto de (x−y)² = (x+y)² − 4xy = 1 + 624 = 625 → x − y = 25. Não precisa achar as raízes.

#### 2. Contagem de conexões entre pontos (questão 30)
Se **cada par** de vilarejos é ligado por **uma única** estrada, o total de estradas é a combinação de n elementos 2 a 2:

\`\`\`text
C(n,2) = n(n−1)/2
\`\`\`

| Vilarejos | Estradas |
| :--- | :--- |
| 3 | 3 |
| 4 | 6 |
| 5 | 10 |
| n | n(n−1)/2 |

Passando de **x** para **x + 2** vilarejos, as estradas novas são:

\`\`\`text
C(x+2, 2) − C(x, 2)
= [(x+2)(x+1)/2] − [x(x−1)/2]
= [x² + 3x + 2 − x² + x] / 2
= (4x + 2) / 2
= 2x + 1
\`\`\`

Igualando a 17: **2x + 1 = 17 → x = 8**.

> **⚠️ Por que combinação e não arranjo?** Porque a estrada de A para B é a mesma de B para A — a **ordem não importa**. Se importasse (ex.: ruas de mão única), seria arranjo: n(n−1).

#### 3. Fórmulas de contagem para levar na prova
| Situação | Fórmula |
| :--- | :--- |
| **Combinação** (ordem não importa) | C(n,p) = n! / [p!(n−p)!] |
| **Arranjo** (ordem importa) | A(n,p) = n! / (n−p)! |
| **Permutação** de n elementos | P(n) = n! |
| **Permutação com repetição** | n! / (a!·b!·...) |
        `,
      },
    ],
  },

  // =========================================================================
  // MÓDULO 4: ATUALIDADES — questões 31 a 35
  // =========================================================================
  {
    id: "atualidades",
    title: "Atualidades",
    icon: "🌎",
    description:
      "Meio ambiente e tecnologia, adaptação climática urbana, justiça ambiental, G20 e proteção de dados do consumidor — os temas das questões 31 a 35.",
    sections: [
      {
        id: "atualidades-ambiente",
        title: "Meio ambiente e sustentabilidade",
        content: `
### O que a FGV cobra aqui
Questões 31, 34 e 35. Três recortes: pegada ambiental da tecnologia, adaptação climática urbana e justiça ambiental.

#### 1. A pegada ambiental do digital (questão 31)
A digitalização é apresentada como solução ambiental (menos papel), mas tem **custo próprio**:
- **data centers** consomem cerca de **2% de toda a eletricidade do planeta**;
- as emissões de carbono associadas são comparáveis às da **indústria aérea**;
- somam-se o consumo de água para refrigeração e o lixo eletrônico.

> **⚠️ Cuidado com o denominador.** Os 2% referem-se à eletricidade **mundial**. Dizer que os data centers representam cerca de **metade do consumo do ecossistema digital** é outra conta — o ecossistema digital é só a infraestrutura digital, as ferramentas e os usuários. As duas afirmações convivem sem contradição, e foi isso que a questão 31 cobrou.

**Conceito:** *ecossistema digital* designa a relação entre infraestrutura digital, ferramentas e seres humanos.

#### 2. Cidade-esponja (questão 34)
Modelo de **adaptação climática urbana** que busca absorver, reter e reaproveitar a água da chuva em vez de escoá-la rapidamente.

| Infraestrutura **cinza** | Infraestrutura **verde/azul** |
| :--- | :--- |
| Canalização e retificação de rios | Renaturalização de cursos d'água |
| Galerias e piscinões de concreto | Jardins de chuva, biovaletas |
| Impermeabilização | Pavimento permeável, telhados verdes |
| Escoa rápido, transfere o problema | Infiltra, retém e reaproveita |

**Objetivos do modelo:** reduzir a sobrecarga da drenagem tradicional, aproximar-se da autossuficiência hídrica, reabastecer lençóis e redes subterrâneas e diminuir a infraestrutura cinza.

> **⚠️ A pegadinha da questão 34:** jardins de chuva aumentam a **permeabilidade** do solo. Dizer que eles "melhoram a impermeabilização" inverte o conceito — impermeabilizar é justamente o problema que a cidade-esponja combate.

No Rio de Janeiro, o conceito virou o eixo de uma lei municipal sancionada parcialmente em **julho de 2024**.

#### 3. Racismo ambiental e o art. 225 da CF (questão 35)
O **art. 225** da Constituição garante a todos o direito ao meio ambiente ecologicamente equilibrado, impondo ao Poder Público **e à coletividade** o dever de defendê-lo e preservá-lo.

**Racismo ambiental** é a imposição desproporcional de danos ambientais — poluição, aterros, enchentes, falta de saneamento — a comunidades majoritariamente **negras e pobres**. Distribuir a poluição de forma desigual em razão da raça é violação constitucional.

> **⚠️ Pegadinha recorrente:** afirmar que o desenvolvimento sustentável se faz "com inovação tecnológica **mantendo a lógica de consumo** do modelo econômico atual" é falso. Sustentabilidade exige mudança nos padrões de produção e consumo, não apenas substituição tecnológica — esse raciocínio ingênuo é chamado de *solucionismo tecnológico*.
        `,
      },
      {
        id: "atualidades-geopolitica",
        title: "Geopolítica e organismos internacionais",
        content: `
### O que a FGV cobra aqui
Questão 32. Saber o que o **G20 é** e, sobretudo, o que **não é**.

#### O que o G20 é
**Fórum internacional de cooperação econômica** que reúne 19 países, a União Europeia e (desde 2023) a União Africana. Representa cerca de 85% do PIB mundial e dois terços da população.

| O G20 **é** | O G20 **não é** |
| :--- | :--- |
| Fórum de cooperação e concertação | Bloco econômico |
| Espaço de debate e recomendação | Organização supranacional |
| Presidência **rotativa** anual | Estrutura permanente com sede |
| Decisões por consenso, sem força vinculante | Tratado com obrigações jurídicas |
| Agenda ampla: finanças, fome, clima, desigualdade | Área de livre comércio |

> **⚠️ As duas pegadinhas da questão 32:**
> 1. Chamar o G20 de "bloco econômico cujo principal objetivo é o livre comércio, superado apenas pela União Europeia" — confunde fórum com bloco. **Bloco econômico** (Mercosul, UE, Nafta/USMCA) tem tratado, tarifas comuns e regras vinculantes; fórum não.
> 2. Chamar o G20 de "bloco supranacional que alinha políticas macroeconômicas, **éticas e militares**" — o G20 não trata de defesa, e supranacionalidade implica ceder soberania, o que não ocorre.

#### A presidência brasileira (2023–2024)
- Lema: **"Construindo um Mundo Justo e um Planeta Sustentável"**.
- Três prioridades: combate à fome, à pobreza e à desigualdade; desenvolvimento sustentável e transição energética; reforma da governança global.
- Marco: lançamento da **Aliança Global contra a Fome e a Pobreza**.
- Cúpula de líderes no **Rio de Janeiro, em novembro de 2024**.

#### Não confunda as siglas
| Sigla | O que é |
| :--- | :--- |
| **G7** | Grupo das sete economias avançadas |
| **G20** | Fórum de cooperação econômica (economias desenvolvidas + emergentes) |
| **BRICS** | Agrupamento de economias emergentes, com banco próprio (NBD) |
| **OCDE** | Organização com padrões e recomendações de política pública |
| **Mercosul / UE** | **Blocos** econômicos, com tratado e regras vinculantes |
        `,
      },
      {
        id: "atualidades-consumo-dados",
        title: "Consumo e proteção de dados",
        content: `
### O que a FGV cobra aqui
Questão 33. O encontro entre direito do consumidor e proteção de dados pessoais.

#### O caso: dados de saúde em rede de farmácias
A **Secretaria Nacional do Consumidor (Senacon)**, órgão do Ministério da Justiça, notificou uma grande rede de farmácias após denúncia de **coleta inadequada e comercialização** de dados pessoais de clientes.

#### Por que o caso é grave
Dados de saúde são **dados pessoais sensíveis** na LGPD (art. 5º, II), ao lado de origem racial ou étnica, convicção religiosa, opinião política, filiação sindical, dado genético, biométrico e vida sexual.

O tratamento de sensíveis é **mais restrito**: exige consentimento **específico e destacado**, ou uma das hipóteses do art. 11 — e **legítimo interesse não vale** para dados sensíveis.

#### Finalidades legítimas x ilegítimas
| Destino dos dados | Legítimo? |
| :--- | :--- |
| Publicidade direcionada por faixa etária, sexo e **perfil de saúde**, sem base legal | ❌ Ilegítimo |
| Repasse a empresas do grupo e a terceiros, gerando lucro **sem conhecimento do cliente** | ❌ Ilegítimo |
| Pesquisa farmacêutica com dados **anonimizados**, sob salvaguardas | ✅ Pode ser legítimo |

> **⚠️ A pegadinha da questão 33:** a alternativa sobre "pesquisas da indústria farmacêutica para remédios mais baratos via Farmácia Popular" descreve uma finalidade **socialmente desejável**, mas que não tem nada a ver com a denúncia relatada. A pergunta é sobre o destino **indevido** que os dados podem ter tido. Não confunda o que *seria bom* com o que o texto *afirma*.

#### Princípios da LGPD violados em casos assim
| Princípio | Conteúdo |
| :--- | :--- |
| **Finalidade** | Propósito legítimo, específico e informado ao titular |
| **Adequação** | Compatibilidade do tratamento com a finalidade informada |
| **Necessidade** | Mínimo de dados necessário (minimização) |
| **Transparência** | Informação clara e acessível sobre o tratamento |
| **Livre acesso** | Consulta facilitada sobre forma e duração do tratamento |

#### Quem fiscaliza o quê
- **ANPD** — autoridade de proteção de dados, aplica a LGPD.
- **Senacon / Procons** — defesa do consumidor, aplicam o CDC.
- As competências **se somam**: o mesmo fato pode gerar sanção nas duas esferas.
        `,
      },
    ],
  },

  // =========================================================================
  // MÓDULO 5: LEGISLAÇÃO — questões 36 a 40
  // =========================================================================
  {
    id: "legislacao",
    title: "Legislação de Segurança da Informação e Proteção de Dados",
    icon: "⚖️",
    description:
      "LGPD (Lei 13.709/18), Marco Civil da Internet (Lei 12.965/14), crimes informáticos (art. 154-A do CP) e LAI (Lei 12.527/11) — questões 36 a 40.",
    sections: [
      {
        id: "leg-lgpd",
        title: "LGPD: sanções, ANPD e CNPD",
        content: `
### O que a FGV cobra aqui
Questões 37 e 38. O capítulo de fiscalização e o desenho institucional da lei.

#### 1. As sanções administrativas (art. 52)
| Sanção | Detalhe |
| :--- | :--- |
| Advertência | Com prazo para medidas corretivas |
| **Multa simples** | Até **2%** do faturamento no Brasil, limitada a **R$ 50 milhões por infração** |
| Multa diária | Observado o limite total acima |
| Publicização da infração | Após apurada e confirmada |
| Bloqueio / eliminação dos dados | Referentes à infração |
| Suspensão parcial do banco de dados | Até **6 meses**, prorrogáveis por mais 6 |
| Suspensão da atividade de tratamento | Mesmo prazo |
| Proibição parcial ou total da atividade | Sanção mais gravosa |

**Regras de aplicação:**
- Exigem **processo administrativo** que assegure contraditório e ampla defesa — **não há sanção sem processo**.
- Podem ser aplicadas **isolada ou cumulativamente**.
- Multa a órgão público: a lei prevê apenas multa **simples** e **diária** para entes públicos, não as sanções de suspensão ou proibição.

#### 2. Parâmetros de dosimetria (art. 52, §1º)
Gravidade e natureza da infração · boa-fé do infrator · vantagem auferida · condição econômica · reincidência · grau do dano · cooperação do infrator · adoção de mecanismos e procedimentos internos · adoção de política de boas práticas · pronta adoção de medidas corretivas · proporcionalidade.

> **⚠️ Pegadinha da questão 37:** **nacionalidade estrangeira NÃO é parâmetro.** A LGPD se aplica a qualquer agente, nacional ou não, desde que o tratamento ocorra no Brasil, tenha por objetivo ofertar bens/serviços no país ou envolva dados coletados no território nacional (art. 3º).

#### 3. Vazamento individual e conciliação (art. 52, §7º)
Vazamentos individuais e acessos não autorizados **podem ser objeto de conciliação direta entre controlador e titular**. Não havendo acordo, o controlador fica sujeito às penalidades do artigo. Foi este o gabarito da questão 37.

#### 4. ANPD x CNPD — não confunda
| | **ANPD** | **CNPD** |
| :--- | :--- | :--- |
| Nome | Autoridade Nacional de Proteção de Dados | Conselho Nacional de Proteção de Dados Pessoais e da Privacidade |
| Natureza | **Autarquia de natureza especial** (originalmente órgão da administração federal, transformada pela Lei 14.460/2022) | **Órgão consultivo**, sem personalidade jurídica própria |
| Papel | Fiscaliza, regula, sanciona | **Sugere e assessora** |
| Composição | Conselho Diretor de 5 diretores com mandato | 23 representantes de poderes e da sociedade |

**Atribuições do CNPD (art. 58-B):** propor diretrizes estratégicas · elaborar relatórios anuais · **sugerir ações a serem realizadas pela ANPD** · realizar estudos e debates · **disseminar à população o conhecimento sobre proteção de dados e privacidade**. Essas duas últimas foram o gabarito da questão 38.

> **⚠️ Erro plantado:** o **Conselho Diretor** é órgão **da ANPD**, formado por diretores nomeados pelo Presidente da República após aprovação do Senado — não por representantes da Câmara, do CNJ e do CNMP. Esses integram o **CNPD**, que é outra coisa.
        `,
      },
      {
        id: "leg-marco-civil",
        title: "Marco Civil da Internet e crimes informáticos",
        content: `
### O que a FGV cobra aqui
Questões 36 e 40. Sanções do Marco Civil e o crime de invasão de dispositivo informático.

#### 1. Sanções do Marco Civil (Lei 12.965/2014, art. 12)
Aplicáveis à violação das normas de proteção a registros, dados pessoais e comunicações privadas, **isolada ou cumulativamente**:

| Inciso | Sanção |
| :--- | :--- |
| I | **Advertência**, com indicação de prazo para adoção de medidas corretivas |
| II | **Multa de até 10%** do faturamento do grupo econômico no Brasil no **último exercício**, excluídos os tributos |
| III | Suspensão temporária das atividades de coleta, guarda e tratamento |
| IV | Proibição do exercício dessas atividades |

> **⚠️ Três pegadinhas da questão 36:**
> - A advertência tem **dupla face**: repressiva (é sanção) e **corretiva** (fixa prazo de regularização). Este foi o gabarito.
> - A multa é **até** 10% e sobre o **último exercício** — não é fixa em 10%, nem média de três exercícios.
> - **Não há vácuo quanto a empresas estrangeiras**: o parágrafo único do art. 12 prevê responsabilidade **solidária** da filial, sucursal, escritório ou estabelecimento situado no País.
> - A lei **não prevê "censura"** como sanção.

#### 2. Invasão de dispositivo informático (art. 154-A do CP)
Incluído pela **Lei 12.737/2012** (Lei Carolina Dieckmann) e endurecido pela Lei 14.155/2021.

**Tipo penal:** invadir dispositivo informático **alheio**, com o fim de obter, adulterar ou destruir dados ou informações sem autorização, ou instalar vulnerabilidades para obter vantagem ilícita.

| Ponto | Regra |
| :--- | :--- |
| Conexão à rede | **Não é elementar.** O dispositivo pode estar offline. |
| Resultado | **Crime formal**: basta a invasão com a finalidade. Adulteração efetiva não é exigida. |
| Se há obtenção de conteúdo privado | Pena qualificada, maior |
| **Ação penal (art. 154-B)** | Mediante **representação**, salvo se o crime é contra a **administração pública** direta ou indireta — aí é **pública incondicionada** |
| Causa de aumento (§5º) | **1/3 a 2/3** se praticado contra Presidente da República, governadores, prefeitos, Presidente do STF, **Presidentes da Câmara, do Senado, de Assembleia Legislativa ou de Câmara Municipal**, ou dirigente máximo da administração |

> **⚠️ O gabarito da questão 40 é processual, não material.** Como o crime atingiu o funcionamento da Casa Parlamentar — administração pública —, a ação é **pública incondicionada** e deveria ter sido proposta pelo **Ministério Público**, por denúncia. A queixa-crime (ação privada) estava incorreta.

#### 3. Guarda de registros no Marco Civil
| Registro | Quem guarda | Prazo |
| :--- | :--- | :--- |
| **Conexão** | Provedor de conexão | **1 ano** |
| **Acesso a aplicações** | Provedor de aplicações (PJ com fins econômicos) | **6 meses** |

O conteúdo das comunicações privadas só pode ser disponibilizado mediante **ordem judicial** (art. 7º, III).
        `,
      },
      {
        id: "leg-lai",
        title: "Lei de Acesso à Informação (LAI)",
        content: `
### O que a FGV cobra aqui
Questão 39. A regra da publicidade, as exceções e o regime de classificação.

#### 1. O princípio
A LAI (Lei 12.527/2011) parte de que **publicidade é a regra e sigilo é a exceção** (art. 3º, I). Toda restrição precisa de fundamento legal expresso.

#### 2. Graus e prazos de classificação (art. 24)
| Grau | Prazo máximo | Quem pode classificar |
| :--- | :--- | :--- |
| **Ultrassecreta** | **25 anos** (renovável uma vez) | Presidente, Vice, Ministros, Comandantes das Forças, Chefes de Missão diplomática |
| **Secreta** | **15 anos** | Os acima + titulares de autarquias, fundações, empresas públicas e sociedades de economia mista |
| **Reservada** | **5 anos** | Os acima + autoridades com função de direção, comando ou chefia (DAS 101.5 ou superior) |

> **⚠️ Questão 39, alternativa A:** os graus são **ultrassecreta, secreta e reservada** — não "ultrassigilosa, sigilosa ou reservada". E a decisão **não é discricionária**: o art. 23 lista taxativamente as hipóteses (defesa e soberania nacional, negociações internacionais, integridade de autoridades, estabilidade financeira, projetos de pesquisa estratégicos, operações de inteligência).

#### 3. O que a lei determina sobre prazos e desclassificação
- **Fim do prazo → acesso automático.** Transcorrido o prazo ou consumado o evento que define o termo final, a informação torna-se **automaticamente pública** (art. 24, §4º). Não são necessários procedimento próprio nem decisão específica.
- **A decisão de classificar segue o sigilo do que classifica** (art. 28, parágrafo único). Ela não é acessível a qualquer interessado.
- **A reavaliação pode desclassificar OU reduzir o prazo** (art. 29, §2º), de ofício ou mediante provocação, pela autoridade classificadora ou por superior hierárquico.

#### 4. A vedação absoluta — gabarito da questão 39
> **Art. 21, parágrafo único.** *As informações ou documentos que versem sobre condutas que impliquem violação dos direitos humanos praticada por agentes públicos ou a mando de autoridades públicas **não poderão ser objeto de restrição de acesso**.*

Também não pode ser negado o acesso a informação necessária à tutela judicial ou administrativa de direitos fundamentais (art. 21, caput).

#### 5. Informações pessoais (art. 31)
Não se confundem com informação classificada. Informações sobre intimidade, vida privada, honra e imagem:
- têm acesso restrito por **100 anos**, independentemente de classificação;
- salvo consentimento do titular ou as hipóteses legais (tutela judicial, defesa de direitos humanos, apuração de irregularidades, pesquisa com anonimização, entre outras).
        `,
      },
    ],
  },

  // =========================================================================
  // MÓDULO 6: CONHECIMENTOS ESPECÍFICOS — questões 41 a 70
  // =========================================================================
  {
    id: "especificos",
    title: "Conhecimentos Específicos de TI",
    icon: "💻",
    description:
      "Arquitetura e integração, dados e BI, engenharia de software, métodos ágeis, segurança e plataformas — as 30 questões específicas (41 a 70).",
    sections: [
      {
        id: "esp-arquitetura",
        title: "Arquitetura, integração e aplicações web",
        content: `
### O que a FGV cobra aqui
Questões 41, 44, 45, 49, 50, 55 e 58 — a maior área da prova.

#### 1. Design x Arquitetura de software (questão 41)
| | **Arquitetura** | **Design** |
| :--- | :--- | :--- |
| Escopo | Decisões **amplas e estruturais** | Decisões **detalhadas e específicas** |
| Objeto | Módulos, camadas, estilos, integração | Classes, métodos, algoritmos |
| Custo de mudar | Alto | Baixo |
| Também chamado | Design de **alto** nível | Design de **baixo** nível |

> **⚠️ Arquitetura não é privilégio de sistema grande.** Todo sistema tem arquitetura — a diferença é se ela foi decidida ou apenas aconteceu.

#### 2. SOA e Web Services (questão 44)
**Baixo acoplamento** e **alta interoperabilidade** são o objetivo. REST entrega os dois com o menor atrito.

| | **REST** | **SOAP** |
| :--- | :--- | :--- |
| Formato | JSON, XML, texto | Só XML (envelope) |
| Contrato | OpenAPI (opcional) | **WSDL** (obrigatório) |
| Transporte | HTTP/HTTPS | HTTP, SMTP, JMS |
| Peso | Leve | Pesado |
| Pontos fortes | Simplicidade, cache, escala | WS-Security, transações, contrato forte |

> **⚠️ Duas pegadinhas da questão 44:** SOAP **sem contrato formal** não aumenta flexibilidade — quebra a interoperabilidade, que depende do WSDL. E "mudanças em um serviço refletirem diretamente no outro" é a **definição de alto acoplamento**, exatamente o que se quer evitar.

#### 3. Servidor web x servidor de aplicações (questão 45)
| **Servidor web** | **Servidor de aplicações** |
| :--- | :--- |
| Processa requisições **HTTP** | Executa **lógica de negócio** |
| Serve conteúdo estático e dinâmico | Camada intermediária (middleware) |
| Apache, Nginx, IIS | Tomcat, WildFly, JBoss, WebLogic |
| — | Pool de conexões, transações, segurança, integração com bancos |

#### 4. Internet, intranet, extranet e portal (questão 49)
| Termo | Alcance |
| :--- | :--- |
| **Internet** | Rede pública global, acesso irrestrito |
| **Intranet** | Rede **interna**, restrita aos membros da organização |
| **Extranet** | Usa tecnologias da Internet para dar **acesso controlado** a usuários internos **e parceiros externos autorizados** |
| **Portal** | Ponto único de acesso que agrega conteúdos e serviços; pode ser interno ou externo |

#### 5. SPA x PWA (questão 50)
| | **SPA** (Single Page Application) | **PWA** (Progressive Web App) |
| :--- | :--- | :--- |
| Ideia | Uma única página; o conteúdo é trocado via JS, **sem recarregar** | App web com **capacidades nativas** |
| Recursos | Roteamento no cliente, chamadas assíncronas | Service Worker, manifest, offline, push, instalável |
| São excludentes? | **Não** — a maioria das PWAs é também SPA |

> **⚠️ Service Worker é requisito de PWA, não de SPA.** Uma SPA comum não funciona offline.

#### 6. Hexagonal, microsserviços e monolito (questão 55)
- **Arquitetura hexagonal** (Ports & Adapters): isola o **domínio** das interfaces externas. Trocar banco, API ou UI não toca a regra de negócio.
- **Microsserviços**: serviços pequenos, autônomos, com **banco de dados próprio por serviço** e implantação independente.
- **Monolito**: pode até ser distribuído, mas todos os módulos são **implantados em conjunto**.

> **⚠️ Microsserviços compartilhando um mesmo banco é antipadrão** (*shared database*). Isso recria o acoplamento que a arquitetura pretende eliminar. A consistência entre serviços se resolve com **consistência eventual** e padrões como **Saga**, não com banco único.

#### 7. XML, XSLT e JSON (questão 58)
| | **XML** | **JSON** |
| :--- | :--- | :--- |
| Verbosidade | Alta (tags de abertura e fechamento) | Baixa |
| Validação | XSD, DTD | JSON Schema |
| Transformação | **XSLT** | Não há equivalente nativo |
| Uso típico hoje | Integrações legadas, SOAP, documentos | **APIs REST** |

**XSLT transforma XML** em outro formato (HTML, texto, outro XML). Não opera sobre JSON nativamente.
        `,
      },
      {
        id: "esp-dados",
        title: "Dados, BI e Data Warehouse",
        content: `
### O que a FGV cobra aqui
Questões 59, 60, 61, 65, 66 e 67.

#### 1. ETL x ELT (questão 65)
| | **ETL** | **ELT** |
| :--- | :--- | :--- |
| Ordem | Extract → **Transform** → Load | Extract → Load → **Transform** |
| Onde transforma | Servidor intermediário | **No destino** |
| Cenário ideal | DW tradicional, regras complexas, volume moderado | **Grandes volumes** + destino com alto poder de processamento (cloud, data lake) |
| Desempenho | Pode ser gargalo | Aproveita a elasticidade do destino |

> **⚠️ A inversão da questão 65:** dizer que "ELT é mais eficiente quando o volume é pequeno e o processamento é feito **fora** do destino" descreve o ETL. A vantagem do ELT é justamente o oposto — grande volume, transformação **dentro** do destino.

**Objetivo do ETL (questão 60):** extrair de múltiplas fontes, padronizar e tornar consistente, e carregar no Data Warehouse. Não é fazer dashboard, estatística ou machine learning — isso vem **depois**, sobre os dados já integrados.

#### 2. Mapeamento de fontes em projetos de BI (questão 61)
**Boas práticas:** entrevistar usuários e stakeholders · analisar sistemas e documentos existentes · avaliar a **qualidade** e a adequação dos dados · documentar fontes, formatos e relacionamentos.

> **⚠️ Prática condenável:** coletar de **todas** as fontes sem discriminação, incluindo dados inconsistentes e irrelevantes, "para maximizar a quantidade". Isso é *garbage in, garbage out* — aumenta custo, ruído e risco de decisão errada.

#### 3. Relacional (OLTP) x Multidimensional (OLAP) — questão 67
| | **OLTP / Relacional** | **OLAP / Multidimensional** |
| :--- | :--- | :--- |
| Objetivo | Registrar transações | **Analisar** grandes volumes |
| Operações | INSERT, UPDATE, DELETE frequentes | Consultas complexas, agregações |
| Modelagem | Normalizada (3FN) | **Estrela** ou **floco de neve** |
| Organização | Tabelas e relacionamentos | **Cubos**: dimensões e métricas |
| Operações típicas | — | Drill-down, roll-up, slice, dice, pivot |

> **⚠️ Cubo é conceito multidimensional, não relacional.** E o multidimensional é excelente em agregações (somas, médias) — é para isso que existe.

#### 4. NoSQL (questão 66)
Adequado a sistemas que exigem **alta disponibilidade e escalabilidade horizontal**.

| Tipo | Exemplos | Uso |
| :--- | :--- | :--- |
| Chave-valor | Redis, DynamoDB | Cache, sessão |
| Documento | MongoDB, CouchDB | Catálogos, perfis |
| Colunar | Cassandra, HBase | Séries temporais, escrita massiva |
| Grafo | Neo4j | Redes, recomendação |

**Teorema CAP:** em caso de particionamento da rede, escolhe-se entre **consistência** e **disponibilidade**. Muitos NoSQL optam por AP e adotam **BASE** (*Basically Available, Soft state, Eventual consistency*) em vez de ACID estrito.

> **⚠️ Erros plantados:** NoSQL **não** segue ACID estritamente (embora vários já ofereçam transações), **não** usa modelo relacional, **não** armazena sempre grafos, e **não** é a melhor escolha para ERP/CRM — esses pedem integridade transacional forte, terreno do relacional.

#### 5. Sistemas de Suporte à Decisão (questão 59)
SSDs combinam **dados, modelos e julgamento humano**. Aplicam-se a problemas **estruturados, semiestruturados e não estruturados** — a flexibilidade é a característica definidora.

| Tipo de problema | Exemplo |
| :--- | :--- |
| **Estruturado** | Cálculo de folha, ponto de reposição de estoque |
| **Semiestruturado** | Orçamento, análise de crédito |
| **Não estruturado** | Entrada em novo mercado, fusão |

> **⚠️ Restringir SSD a um só tipo de problema é o erro.** A literatura clássica os associa sobretudo aos semiestruturados, mas eles **não se limitam** a esses — e foi a alternativa abrangente que a FGV considerou correta.
        `,
      },
      {
        id: "esp-engenharia",
        title: "Engenharia e qualidade de software",
        content: `
### O que a FGV cobra aqui
Questões 43, 51, 56 e 57.

#### 1. Engenharia de requisitos (questão 43)
| **Requisito funcional** | **Requisito não funcional** |
| :--- | :--- |
| **O que** o sistema faz | **Como** ele se comporta |
| Ação, funcionalidade, regra de negócio | Atributo de qualidade |
| "Emitir extrato", "cadastrar cliente" | Desempenho, segurança, usabilidade, disponibilidade |

> **⚠️ A sutileza da questão 43:** consultar saldo é funcional, mas "saldo **em tempo real**" é **restrição de desempenho** — portanto **não funcional**. A palavra-chave é o *como*, não o *quê*.

**Técnicas de elicitação:** entrevista · questionário · **brainstorming** · workshop · observação · análise de documentos · **prototipação** · casos de uso · etnografia.

> **⚠️ Erros plantados:** brainstorming é técnica **válida** e muito usada. Entrevista **não é** prototipação. E engenharia de requisitos ocorre **antes** e **durante** o desenvolvimento, nunca depois da implementação.

#### 2. SOLID — com foco em Liskov (questão 51)
| Letra | Princípio | Ideia |
| :--- | :--- | :--- |
| **S** | Single Responsibility | Uma classe, uma razão para mudar |
| **O** | Open/Closed | Aberta para extensão, fechada para modificação |
| **L** | **Liskov Substitution** | Subtipo deve poder substituir o tipo base |
| **I** | Interface Segregation | Interfaces pequenas e específicas |
| **D** | Dependency Inversion | Depender de abstrações, não de implementações |

**Liskov na prática:** se \`Cachorro extends Animal\` e \`Cachorro\` sobrescreve \`emitirSom()\` para latir, o princípio **é respeitado** — qualquer código que espere um \`Animal\` continua funcionando.

> **⚠️ Sobrescrever não viola LSP.** Isso é **polimorfismo**, o objetivo da herança. LSP é violado quando o subtipo **quebra o contrato**: lança exceção onde a base não lançava, fortalece pré-condições, enfraquece pós-condições ou muda o comportamento esperado. O exemplo clássico de violação é \`Quadrado extends Retângulo\`.

#### 3. DevOps: CI x CD (questão 56)
| Prática | O que é |
| :--- | :--- |
| **Integração Contínua (CI)** | Integrar código ao repositório com frequência, com build e testes automatizados a cada commit |
| **Entrega Contínua (CD)** | Manter o software **sempre pronto para ir a produção**; disponibilizar novas versões rapidamente e com mínima interrupção |
| **Implantação Contínua** | Todo commit aprovado vai a produção **automaticamente**, sem aprovação manual |

> **⚠️ A questão 56 pede "fornecer rapidamente uma nova versão ao ambiente de produção com o mínimo de interrupções" — isso é Entrega Contínua.** CI para no build e nos testes; não entrega nada ao usuário.

**Estratégias de implantação com baixa interrupção:** blue-green · canary · rolling update · feature flags.

#### 4. Tipos de teste (questão 57)
| Teste | Verifica |
| :--- | :--- |
| **Unitário** | Unidade isolada (função, método) |
| **Integração** | Interação entre módulos/componentes |
| **Sistema** | Aplicação completa contra os requisitos |
| **Aceitação** | Atendimento às necessidades do usuário |
| **Regressão** | Que o que funcionava continua funcionando |
| **Usabilidade** | Experiência do usuário, clareza da interface |

**Pirâmide de testes:** muitos unitários (base, rápidos e baratos) → alguns de integração → poucos de ponta a ponta (topo, lentos e frágeis).

**TDD** — o ciclo **Red → Green → Refactor**: escreve-se o teste **antes** do código funcional, faz-se passar com o mínimo necessário e só então refatora.
        `,
      },
      {
        id: "esp-agil",
        title: "Métodos ágeis e gestão de projetos",
        content: `
### O que a FGV cobra aqui
Questões 46, 47, 68, 69 e 70.

#### 1. Ponto de Função x Story Point (questão 46)
| | **Ponto de Função (APF)** | **Story Point** |
| :--- | :--- | :--- |
| Mede | **Tamanho funcional** entregue ao usuário | **Esforço relativo** percebido |
| Objetividade | Objetiva, norma **ISO/IEC 20926**, **independente do time** | Subjetiva, **específica do time** |
| Comparável entre times? | **Sim** | **Não** |
| Velocidade de estimar | Lenta, exige contagem detalhada | Rápida (planning poker) |
| Uso típico | **Contratos**, escopo fechado, medição formal | Planejamento interno de sprint |

> **⚠️ As alternativas invertem tudo.** Story Points **não** padronizam entre times (10 pontos de um time nada dizem sobre outro) e **não** servem bem a contrato de escopo fechado. Ponto de Função **não** é rápido nem baseado em percepção.

#### 2. Escolher o método ágil (questão 47)
| Método | Marca registrada |
| :--- | :--- |
| **Scrum** | **Sprints de duração fixa**, papéis e eventos definidos, inspeção e adaptação periódicas |
| **Kanban** | **Fluxo contínuo**, limite de WIP, sem iterações fechadas |
| **XP** | Práticas de **engenharia**: pair programming, TDD, integração contínua, refatoração |
| **Lean** | Eliminar desperdício, otimizar o todo |
| **Waterfall** | Sequencial, fases estanques — **não é ágil** |

> **⚠️ Leia o enunciado inteiro.** A questão 47 pede "entregas rápidas em **ciclos incrementais**", "feedback contínuo" e "colaboração da equipe". *Ciclos* elimina Kanban (fluxo contínuo, sem ciclos fechados); *colaboração e feedback* pedem mais que as práticas técnicas do XP. A resposta é **Scrum**.

#### 3. Papéis e eventos do Scrum
| Responsabilidade | Quem |
| :--- | :--- |
| Maximizar valor, gerir o Product Backlog | **Product Owner** |
| Criar o incremento, **estimar** e se auto-organizar | **Developers** |
| Facilitar, **remover impedimentos**, apoiar a autogestão | **Scrum Master** |

| Evento | Objetivo |
| :--- | :--- |
| Sprint Planning | Definir a Meta e selecionar itens |
| **Daily Scrum** | Inspecionar o progresso, adaptar o plano do dia |
| Sprint Review | Inspecionar o incremento com stakeholders |
| Retrospectiva | Melhorar o processo |

#### 4. Como o Scrum Master age (questão 68)
Diante de uma tarefa em risco, o Scrum Master **não** redistribui sozinho, **não** assume a tarefa, **não** escala tudo ao PO e **não** encerra o Sprint. Ele **facilita a discussão, apoia a solução colaborativa e remove impedimentos** — o time é **auto-gerenciável**, e é dele a decisão sobre como fazer o trabalho.

#### 5. Seleção de itens do Sprint (questão 70)
Os Developers selecionam o que **cabe** na Sprint, considerando **capacidade** e **Meta da Sprint**. Colocar tudo "para cobrir todas as frentes", sabendo que não caberá, produz trabalho inacabado e destrói a previsibilidade.

> **⚠️ Quem decide o quanto entra é o time, não o PO sozinho.** O PO **prioriza** o backlog; os Developers **dimensionam** o que conseguem entregar. E não se empurram itens novos no meio da Sprint sem renegociar o escopo com o PO.

#### 6. Abordagem Ágil Híbrida (questão 69)
Combina práticas ágeis com métodos tradicionais conforme a necessidade do projeto e da equipe. Típico em organizações com marcos contratuais rígidos, mas que querem entregas iterativas — por exemplo, planejamento e governança em cascata com execução em sprints.
        `,
      },
      {
        id: "esp-seguranca",
        title: "Segurança da informação",
        content: `
### O que a FGV cobra aqui
Questões 54, 62, 63 e 64.

#### 1. SSL x TLS (questão 54)
**TLS é o sucessor do SSL.** Corrigiu vulnerabilidades das versões anteriores e trouxe melhorias de segurança.

| Versão | Situação |
| :--- | :--- |
| SSL 2.0 / 3.0 | **Obsoletos e proibidos** (POODLE, DROWN) |
| TLS 1.0 / 1.1 | Descontinuados |
| **TLS 1.2** | Amplamente usado |
| **TLS 1.3** | Atual: handshake mais rápido, cifras fracas removidas, sigilo futuro obrigatório |

HTTPS = HTTP sobre TLS. Na prática o termo "SSL" sobrevive por inércia (ex.: "certificado SSL"), mas o protocolo em uso é TLS.

> **⚠️ Erros plantados:** SSL **não** é mais seguro que TLS; eles **não** são intercambiáveis; HTTPS **não** depende de SSL; e não se usam os dois em conjunto dividindo autenticação e criptografia.

#### 2. OWASP Top 10:2021 (questão 62)
| Código | Categoria |
| :--- | :--- |
| A01 | Broken Access Control |
| A02 | Cryptographic Failures |
| A03 | Injection |
| A04 | Insecure Design |
| A05 | Security Misconfiguration |
| A06 | Vulnerable and Outdated Components |
| A07 | Identification and Authentication Failures |
| A08 | Software and Data Integrity Failures |
| A09 | Security Logging and Monitoring Failures |
| **A10** | **Server-Side Request Forgery (SSRF)** |

**SSRF** é a única das alternativas que é categoria da lista de 2021. Novidades daquela edição: A04 (Insecure Design), A08 e A10.

> **⚠️ Não confunda com o OWASP SAMM ou com controles de outras listas.** "Proteção da cadeia de suprimentos", "proteção do ambiente de engenharia" e "treinamento operacional" não são categorias do Top 10 — soam plausíveis, mas pertencem a outros frameworks.

#### 3. Mecanismos de segurança X.800 (questão 63)
A recomendação **X.800** (arquitetura de segurança OSI) separa os mecanismos em dois grupos:

| **Específicos** (ligados a uma camada) | **Disseminados** (não específicos de camada) |
| :--- | :--- |
| Cifração (*encipherment*) | Funcionalidade confiável |
| Assinatura digital | **Rótulo de segurança** |
| Controle de acesso | **Detecção de evento** |
| Integridade de dados | **Trilha de auditoria de segurança** |
| Troca de autenticação | Recuperação de segurança |
| **Preenchimento de tráfego** | |
| Controle de roteamento | |
| Notarização | |

**Preenchimento de tráfego** (*traffic padding*) insere dados espúrios no fluxo para frustrar a **análise de tráfego** — é mecanismo **específico**, e foi o gabarito.

#### 4. Políticas de controle de acesso (questão 64)
| Política | Como decide |
| :--- | :--- |
| **DAC** (discricionário) | O **dono** do recurso concede permissões |
| **MAC** (mandatório) | O **sistema** compara **rótulos de segurança** do objeto com as **autorizações** (*clearances*) do sujeito, segundo política central |
| **RBAC** (por papéis) | Permissões atribuídas a **papéis**, e papéis a usuários |
| **ABAC** (por atributos) | Regras sobre atributos de sujeito, objeto e ambiente |

**Rótulo + autorização = MAC.** É o modelo típico de ambientes militares e governamentais (Bell-LaPadula para confidencialidade, Biba para integridade).

> **⚠️ Privilégio mínimo não é política de controle de acesso** — é um **princípio** que orienta qualquer uma delas: conceder só o necessário para a tarefa.
        `,
      },
      {
        id: "esp-plataformas",
        title: "Plataformas e tecnologias emergentes",
        content: `
### O que a FGV cobra aqui
Questões 42, 48, 52 e 53.

#### 1. Blockchain: o que fica no bloco (questão 42)
Um bloco típico contém:

| Componente | Função |
| :--- | :--- |
| **Hash do bloco anterior** | Encadeia os blocos e garante imutabilidade |
| **Timestamp** | Carimbo de tempo |
| **Dados das transações** | Entradas, saídas, valores |
| **Assinaturas digitais** | Autenticam cada transação |
| Merkle root | Resume as transações do bloco |
| Nonce / dificuldade | Prova de trabalho (Bitcoin) |

> **⚠️ Saldo de carteira NÃO fica no bloco.** No Bitcoin, saldo é **derivado** da soma das UTXOs não gastas; no Ethereum, vive no **estado global** mantido pelos nós, fora do corpo do bloco (o cabeçalho guarda apenas a raiz do state trie). A cadeia registra **transações**, não extratos.

#### 2. Ecossistema Spring (questão 48)
| Projeto | Papel |
| :--- | :--- |
| **Spring Framework** | Núcleo: injeção de dependência, IoC, AOP. Serve a monolitos **e** a microsserviços |
| **Spring Boot** | Autoconfiguração, dependências iniciais, **servidor embarcado** — acelera a criação de serviços |
| **Spring Cloud** | Recursos para **sistemas distribuídos**: configuração centralizada, service discovery, circuit breaker, API gateway |
| **Hibernate** | **ORM** — mapeamento objeto-relacional, implementação de JPA |
| **JUnit** | **Framework de testes** de unidade |

> **⚠️ As trocas plantadas:** Hibernate **não** é framework de teste (é ORM); JUnit **não** é ORM (é teste); Spring **não** se restringe a monolitos; e Spring Boot **embarca** o servidor (Tomcat, Jetty, Undertow) — dispensa deploy em servidor standalone, em vez de exigi-lo.

#### 3. Desenvolvimento mobile multiplataforma (questão 52)
| Framework | Linguagem | Mantenedor |
| :--- | :--- | :--- |
| **Flutter** | **Dart** | Google |
| React Native | JavaScript / TypeScript | Meta |
| Xamarin / .NET MAUI | C# | Microsoft |
| Ionic | HTML, CSS, JS | Ionic |
| **SwiftUI** | Swift | Apple — **nativo iOS, não multiplataforma** |

**Flutter** renderiza com engine própria (Skia/Impeller), o que dá consistência visual entre Android e iOS.

#### 4. Inteligência Artificial (questão 53)
| Abordagem | Como funciona | Aprende com dados? |
| :--- | :--- | :--- |
| **Redes Neurais Artificiais** | Camadas de neurônios que **ajustam pesos** no treinamento (backpropagation) | ✅ **Sim** |
| Algoritmo Genético | Evolui soluções por seleção, cruzamento e mutação | Otimização, não aprendizado a partir de dados |
| Busca Heurística | Explora espaço de estados com função de avaliação | Não |
| Lógica Booleana | Operações lógicas | Não |
| Programação Linear | Otimiza função objetivo sob restrições | Não |

**Redes neurais** são o conceito diretamente ligado a sistemas que **aprendem com os dados e melhoram o desempenho ao longo do tempo** — a definição de aprendizado de máquina.

**Hierarquia:** Inteligência Artificial ⊃ Machine Learning ⊃ Deep Learning (redes neurais profundas).
        `,
      },
    ],
  },
];
