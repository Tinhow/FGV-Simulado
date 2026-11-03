/* PF · Agente Administrativo — Língua Portuguesa (estilo Cebraspe) e Raciocínio Lógico.
   Teoria + itens INÉDITOS no estilo Cebraspe (não são de prova oficial).
   Os textos de apoio são originais. As contas e tabelas-verdade dos itens de
   RLM foram conferidas em Node antes de fixar o gabarito. */
{
  const TEXTO_1 = `Texto 1

1 A expansão do comércio eletrônico e dos serviços bancários digitais
2 trouxe comodidade a milhões de brasileiros, mas também abriu espaço para
3 uma criminalidade que não respeita fronteiras. Um golpe aplicado em uma
4 cidade do interior pode ser planejado em outro continente, com dinheiro
5 que circula por contas abertas em três ou quatro países antes de sumir.

6 **Diante desse cenário**, a investigação isolada mostra-se insuficiente.
7 As polícias dependem de acordos de cooperação que permitam o
8 compartilhamento rápido de informações, **sem os quais** provas digitais
9 se perdem em poucos dias. **Contudo**, a pressa não pode atropelar
10 garantias: a obtenção de registros de conexão exige, em regra, ordem
11 judicial, e a troca de informações deve respeitar a legislação de cada Estado.

12 **Foi** para conciliar essas exigências **que** surgiram as redes de
13 contato permanente, em que cada país mantém um ponto focal disponível
14 vinte e quatro horas por dia. **Esse modelo** reduz a burocracia dos
15 pedidos formais e permite que uma requisição urgente seja atendida em
16 horas, e não em meses.

17 Ainda assim, nenhum acordo substitui a prevenção. **Caso o cidadão desconfie**
18 de mensagens que pedem senhas ou transferências imediatas, boa parte dos
19 golpes perderá a eficácia antes mesmo de chegar à polícia.`;

  const TEXTO_2 = `Texto 2

1 Quem já precisou emitir um passaporte sabe que a qualidade de um serviço
2 público não se mede apenas pelo resultado final. O tempo de espera, a
3 clareza das orientações e a cortesia de quem atende pesam tanto quanto o
4 documento entregue, **porque** é nesse contato que o cidadão forma sua
5 imagem do Estado.

6 Nos últimos anos, o agendamento pela internet e a consulta ao andamento
7 dos pedidos **reduziram filas e deslocamentos**. **Há**, porém, brasileiros
8 que não dispõem de conexão estável nem de familiaridade com aplicativos, e
9 para eles o balcão continua sendo a principal porta de entrada.
10 Digitalizar, **portanto**, não significa abandonar o atendimento presencial,
11 mas reorganizá-lo.

12 O servidor que atende ao **público** exerce, nesse sentido, uma função que
13 vai além da conferência de formulários. Cabe a ele explicar ao requerente
14 os documentos exigidos, **cuja** falta é a causa mais comum de retorno ao
15 posto. Uma orientação mal dada **gera** retrabalho para a administração e
16 frustração para o usuário.

17 Investir em atendimento, assim, não é luxo: é uma forma de eficiência.
18 Quando o cidadão é bem informado, o serviço flui melhor para todos.`;

  const SIT_P = `Considere a proposição P: “Se o agente concluir o relatório, então o processo será arquivado.”`;

  const SIT_EQUIPE = `Um setor administrativo conta com 8 servidores — 5 homens e 3 mulheres. Entre eles, serão escolhidos 3 para compor uma comissão de inventário.`;

  pfModulos.push({
    id: "pf-portugues",
    title: "Língua Portuguesa — estilo Cebraspe",
    icon: "📝",
    description:
      "Como o Cebraspe cobra Português em itens Certo/Errado: reescritura com correção e sentido, coesão e compreensão, e julgamento de correção gramatical sobre um texto.",
    sections: [
      {
        id: "pf-pt-reescrita",
        title: "Reescritura de trechos: correção e sentido",
        content: `
### O que o Cebraspe cobra aqui
Em toda prova de nível médio aparecem itens do tipo "a substituição de X por Y manteria a correção gramatical e o sentido do texto". São dois testes ao mesmo tempo: a versão nova precisa estar gramaticalmente correta **e** dizer o mesmo que o original. Basta falhar em um deles para o item estar errado. Quando o comando pede só a correção, o sentido pode mudar à vontade; quando pede só o sentido, um pequeno desvio gramatical não derruba o item. Leia o comando antes de analisar a troca.

#### Correção x sentido: os dois filtros
| O item diz | O que você verifica | O item fica ERRADO se |
| --- | --- | --- |
| "manteria a correção gramatical" | Só a gramática da versão nova | Houver erro de concordância, regência, crase, pontuação ou colocação |
| "manteria o sentido" | Só o significado | Mudar a relação lógica, o referente, o tempo ou quem pratica a ação |
| "manteria a correção e o sentido" | As duas coisas | Qualquer uma das falhas acima ocorrer |
| "prejudicaria a correção" | Se a versão nova tem erro | A versão nova estiver correta |

> **⚠️ Pegadinha:** manter o sentido não exige palavras idênticas. Mudanças de ênfase, de ordem ou de registro que preservam a informação costumam ser aceitas. O que derruba o item é trocar a relação lógica (causa vira conclusão), o referente de um pronome ou o valor de verdade da frase.

#### Troca de conectivo
A troca só passa quando o novo conectivo tem o **mesmo valor semântico** e **cabe na mesma estrutura sintática**.

| Original | Troca aceita | Troca que falha |
| --- | --- | --- |
| mas, porém | contudo, todavia, no entanto, entretanto | embora (exige outra estrutura e subjuntivo) |
| embora | ainda que, mesmo que, conquanto, se bem que | apesar de (pede infinitivo ou substantivo) |
| porque (causal) | uma vez que, visto que, já que | por isso, portanto (viram conclusão) |
| portanto, logo | por isso, por conseguinte, assim | porquanto (é causal) |
| caso | se (com ajuste do verbo), desde que, contanto que | quando (perde a hipótese) |
| à medida que (proporção) | à proporção que | na medida em que (causa) |

> **⚠️ Pegadinha:** "embora" pede subjuntivo e oração principal. "A meta foi cumprida, mas o prazo estourou" vira "Embora a meta tenha sido cumprida, o prazo estourou", e não "A meta foi cumprida, embora o prazo estourou".

#### Deslocamento de termos e de vírgulas
- **Adjunto adverbial** pode mudar de lugar sem alterar o sentido; curto e anteposto, a vírgula é facultativa; intercalado, vem entre duas vírgulas.
- **Adjetivo** deslocado pode mudar o sentido: "um grande servidor" (notável) x "um servidor grande" (alto); "certos dados" (alguns) x "dados certos" (corretos).
- **Só, apenas, até, também** mudam o alcance conforme a posição: "Só o agente assinou o termo" x "O agente só assinou o termo".
- **Oração adjetiva**: pôr ou tirar vírgulas troca restritiva por explicativa. "Os servidores que fizeram o curso foram promovidos" (só alguns) x "Os servidores, que fizeram o curso, foram promovidos" (todos). A frase segue correta, mas o sentido mudou.

#### Voz ativa x voz passiva
| Forma | Exemplo |
| --- | --- |
| Ativa | A equipe **analisou** os laudos. |
| Passiva analítica | Os laudos **foram analisados** pela equipe. |
| Passiva sintética | **Analisaram-se** os laudos. |

- O verbo **ser** assume o tempo e o modo do verbo original: analisou → foram analisados; analisa → são analisados; analisará → serão analisados; tinha analisado → tinham sido analisados.
- O particípio concorda com o novo sujeito (o antigo objeto direto).
- Só verbo transitivo direto vai para a passiva: "Gostaram do atendimento" não tem passiva.

> **⚠️ Pegadinha:** na passiva sintética, o verbo concorda com o sujeito paciente: "Analisaram-se os laudos", e não "Analisou-se os laudos".

#### Tempo e modo verbal
| Troca | Mantém o sentido? |
| --- | --- |
| "Caso o cidadão desconfie" → "Se o cidadão desconfiar" | Sim: "caso" pede presente do subjuntivo; "se", futuro do subjuntivo |
| "Se desconfiar, perderá" → "Se desconfiasse, perderia" | Muda: hipótese possível vira hipótese irreal |
| "O sistema entra em vigor amanhã" → "entrará" | Sim: presente com valor de futuro |
| "O setor tem revisado os contratos" → "revisou" | Muda: ação repetida até agora vira fato pontual |

> **⚠️ Pegadinha:** a correlação de tempos é um par. Trocar só um dos verbos ("Se o cidadão desconfiasse, o golpe perderá...") quebra a correção.

#### Crase e regência na troca de palavras
Ao trocar uma palavra, confira se a nova exige a mesma preposição e se muda o gênero do termo seguinte.
- "Chegou ao posto" → "Chegou à delegacia": o feminino faz surgir a crase.
- "Os servidores obedecem às normas" → "cumprem as normas": "cumprir" é transitivo direto, então a crase some.
- "Aspira ao cargo" (deseja) x "Aspira o ar" (inspira): mudar a regência muda o sentido.
- "Prefere o presencial ao digital": "preferir" não aceita "mais... do que".

#### Roteiro de checagem em 5 passos
1. Leia o comando: ele pede correção, sentido ou os dois?
2. Monte a frase nova inteira no lugar do original e leia até o fim do período.
3. Teste a gramática: o verbo acompanha o sujeito? A palavra nova pede a mesma preposição? A crase continua cabendo? A pontuação e a colocação do pronome seguem a norma?
4. Compare o sentido: relação lógica, referente dos pronomes, tempo verbal, quem pratica a ação e alcance de "só" e "apenas".
5. Marque CERTO só se os testes pedidos passarem.

#### Exemplo resolvido passo a passo
Trecho: "**Como** o sistema saiu do ar, os agendamentos foram remarcados."
Item: "A substituição de 'Como' por **Conforme** manteria a correção gramatical e o sentido do texto."
1. Comando: pede correção **e** sentido.
2. Frase nova: "Conforme o sistema saiu do ar, os agendamentos foram remarcados."
3. Gramática: a frase é aceitável, sem erro de concordância ou regência.
4. Sentido: "como" anteposto à principal tem valor **causal**; "conforme" é **conformativo** (ou proporcional). A causa desaparece.
5. Item ERRADO. Trocas que passariam: "Já que", "Uma vez que", "Visto que".

#### Revisão relâmpago
- Leia o comando: correção, sentido ou os dois.
- Conectivo novo precisa ter o mesmo valor e caber na mesma estrutura.
- "Embora" e "caso" exigem subjuntivo; "apesar de" exige infinitivo ou substantivo.
- Vírgula na oração adjetiva troca restritiva por explicativa e muda o sentido.
- Na passiva, o verbo ser copia o tempo do verbo original.
- Correlação verbal é um par: troque os dois verbos ou nenhum.
- Trocou a palavra, refaça a regência e a crase.
`,
      },
      {
        id: "pf-pt-coesao",
        title: "Coesão e compreensão: referência, conectivos e inferência",
        content: `
### O que o Cebraspe cobra aqui
Os itens de compreensão giram em torno de quatro perguntas: **a que termo se refere** um pronome ou expressão, **que relação lógica** um conectivo estabelece, **de que tipo** é o texto e **o que o texto autoriza concluir**. A resposta está sempre no texto, e não no seu conhecimento de mundo. Um item pode afirmar algo verdadeiro na vida real e ainda assim estar errado, porque o texto não diz aquilo.

#### Referenciação: a quem o termo se refere
- **Anáfora** retoma o que já foi dito; **catáfora** anuncia o que vem: "A regra é esta: ninguém entra sem crachá."
- Pronomes concordam em gênero e número com o referente. Use isso para eliminar candidatos.
- **O qual, a qual, os quais, as quais** concordam com o antecedente, o que ajuda a identificá-lo.
- **Cujo** indica posse: refere-se ao possuidor (antes) e concorda com o possuído (depois). "O servidor **cujos** documentos sumiram" — o possuidor é "servidor"; "cujos" concorda com "documentos". Nunca vem seguido de artigo ("cujo o" é erro).
- **Onde** só para lugar físico; nos demais casos, use "em que" ou "no qual".

| Pronome | No espaço | No tempo | No texto |
| --- | --- | --- | --- |
| este, esta, isto | Perto de quem fala | Presente | O que ainda vai ser dito |
| esse, essa, isso | Perto de quem ouve | Passado ou futuro próximo | O que já foi dito |
| aquele, aquela | Longe dos dois | Passado distante | Em enumeração, o termo mais distante |

Em enumeração: "A PF e a PRF atuam nas fronteiras; **esta** patrulha as rodovias federais, **aquela** emite passaportes." **Esta** retoma o termo mais próximo (PRF); **aquela**, o mais distante (PF).

> **⚠️ Pegadinha:** o referente nem sempre é o substantivo mais próximo. Troque o pronome pelo candidato e releia: se a frase perde o sentido ou fere a concordância, o candidato está errado.

#### Conectivos e relações semânticas
| Valor | Conectivos | Exemplo |
| --- | --- | --- |
| Adição | e, nem, não só... mas também, além disso | Investigou e prendeu. |
| Oposição | mas, porém, contudo, todavia, entretanto, no entanto | Agiu rápido, mas sem atropelar a lei. |
| Concessão | embora, ainda que, mesmo que, conquanto, apesar de | Embora urgente, o pedido aguardou. |
| Causa | porque, porquanto, já que, visto que, uma vez que, como (anteposto) | Como o sistema caiu, houve fila. |
| Explicação | pois (antes do verbo), porque, que | Volte amanhã, pois o posto fechou. |
| Conclusão | logo, portanto, por isso, por conseguinte, pois (depois do verbo) | O prazo acabou; o pedido, pois, será arquivado. |
| Condição | se, caso, desde que (+ subjuntivo), contanto que | Caso falte documento, volte. |
| Finalidade | para que, a fim de que, para | Treinou para que não errasse. |
| Consequência | tão/tal/tanto... que, de modo que | Era tão claro que ninguém errou. |
| Tempo | quando, enquanto, assim que, logo que, sempre que | Assim que chegou, assinou. |
| Proporção | à medida que, à proporção que, quanto mais... mais | À medida que treina, melhora. |
| Conformidade | conforme, segundo, consoante, como | Agiu conforme a lei determina. |
| Comparação | como, tanto quanto, mais do que | Trabalha mais do que fala. |

> **⚠️ Pegadinha:** a mesma palavra muda de valor. "Como" pode indicar causa, conformidade ou comparação; "desde que" com subjuntivo é condição, com indicativo é tempo; "pois" antes do verbo explica e, depois do verbo, entre vírgulas, conclui.

#### Tipologia e gênero textual
| Tipo | Marcas | Gêneros típicos |
| --- | --- | --- |
| Narrativo | Fatos em sequência, personagens, pretérito | Notícia, relato, crônica |
| Descritivo | Caracterização, verbos de estado, adjetivos | Laudo, retrato, anúncio |
| Expositivo | Informa e explica, sem defender tese | Verbete, aula, reportagem didática |
| Argumentativo | Tese, argumentos, avaliação do autor | Editorial, artigo de opinião |
| Injuntivo | Orienta o leitor, imperativo, passos | Manual, edital, receita |

**Gênero** é a forma social concreta (ofício, edital, notícia, artigo de opinião); **tipo** é o modo de organização. Um gênero mistura tipos, e o item pergunta pelo **predominante**. Expressões avaliativas ("não é luxo", "nenhum acordo substitui") denunciam argumentação.

#### Inferência x extrapolação
"Depreende-se", "infere-se", "conclui-se" e "o texto sugere" pedem algo que **decorra** do texto, ainda que não esteja escrito com as mesmas palavras.

| Vício do item | Como aparece |
| --- | --- |
| Extrapolação | Acrescenta causa, consequência ou opinião que o texto não dá |
| Generalização | O texto diz "em regra" ou "boa parte"; o item diz "sempre" ou "todos" |
| Redução | O texto aponta dois fatores; o item diz que só um importa |
| Contradição | O item afirma o oposto do que o texto sustenta |
| Troca de agente | Atribui ao autor uma opinião que o texto atribui a terceiros |

> **⚠️ Pegadinha:** palavra absoluta não torna o item automaticamente errado. Se o texto afirma "nenhum acordo substitui a prevenção", um item com "nenhum" pode estar certo. Confira no texto, não na palavra.

#### Sentido de palavras no contexto
- Substitua a palavra pelo sinônimo proposto e releia o período inteiro: o sentido se mantém **naquele contexto**?
- Polissemia: "cumpriu o mandado" (executou) x "cumpriu a pena" (terminou de pagar); "o agente **visou** o passaporte" (pôs visto) x "visou o alvo" (mirou).
- Denotação (sentido literal) x conotação (figurado): "porta de entrada" para o balcão de atendimento é uso figurado.
- Prefira o sentido que o texto constrói ao sentido de dicionário mais comum.

#### Revisão relâmpago
- A resposta está no texto, não no conhecimento de mundo.
- Concordância de gênero e número elimina candidatos a referente.
- "Cujo" refere-se ao possuidor e concorda com o possuído.
- "Este" anuncia ou retoma o mais próximo; "esse" retoma; "aquele" retoma o mais distante.
- Conectivo se julga pelo valor no contexto, não pela forma.
- Depreender é decorrer do texto; extrapolar é ir além dele.
- O tipo predominante decide a tipologia de um gênero misto.
`,
      },
      {
        id: "pf-pt-correcao",
        title: "Julgamento de correção gramatical em itens C/E",
        content: `
### O que o Cebraspe cobra aqui
Itens como "a supressão da vírgula prejudicaria a correção", "a forma verbal poderia ser flexionada no plural" ou "o emprego do acento grave é facultativo" testam poucos pontos de gramática, mas sempre os mesmos: pontuação, concordância, regência e crase, colocação pronominal e classificação do "que" e do "se". O caminho é identificar a estrutura sintática (quem é o sujeito, qual o verbo, que termo está deslocado) antes de julgar.

#### Vírgula: obrigatória, facultativa ou proibida
| Situação | Regra | Exemplo |
| --- | --- | --- |
| Entre sujeito e verbo | Proibida | O servidor que atende ao público exerce uma função... |
| Entre verbo e complemento | Proibida | O agente entregou o laudo ao delegado. |
| Aposto explicativo | Obrigatória | A PF, órgão da União, emite passaportes. |
| Vocativo | Obrigatória | Senhor diretor, o relatório está pronto. |
| Adjunto adverbial curto anteposto | Facultativa | Diante desse cenário(,) a equipe agiu. |
| Adjunto adverbial intercalado | Obrigatória (as duas vírgulas) | A equipe, naquela manhã, cumpriu o mandado. |
| Oração adjetiva explicativa | Obrigatória | O passaporte, que vence em maio, será renovado. |
| Oração adjetiva restritiva | Proibida (vira explicativa) | Os pedidos que chegaram ontem foram analisados. |
| Conjunção deslocada (porém, portanto) | Obrigatória (entre vírgulas) | Há, porém, exceções. |
| Expressão explicativa (isto é, ou seja) | Obrigatória | O prazo é peremptório, ou seja, não se prorroga. |
| Omissão do verbo (zeugma) | Usual, marca a elipse | Eu revisei o ofício; ele, o parecer. |
| Orações coordenadas com "e" e mesmo sujeito | Em regra, não se usa | O agente chegou e assinou o termo. |

> **⚠️ Pegadinha:** sujeito longo continua sendo sujeito. "Quem já precisou emitir um passaporte sabe..." não admite vírgula antes de "sabe".
> **⚠️ Pegadinha:** termo intercalado é isolado por um **par** de vírgulas. Retirar só uma delas é erro; retirar as duas pode ser aceito quando o termo é curto.

#### Concordância: os casos clássicos
| Caso | Regra | Certo | Errado |
| --- | --- | --- | --- |
| Haver = existir, ocorrer, tempo decorrido | Impessoal: singular | Houve falhas. Deve haver soluções. | Houveram falhas. Devem haver soluções. |
| Fazer = tempo ou clima | Impessoal: singular | Faz dois anos que... | Fazem dois anos que... |
| Existir, ocorrer, acontecer | Pessoais: concordam | Existem falhas. | Existe falhas. |
| VTD + se (partícula apassivadora) | Concorda com o sujeito paciente | Analisaram-se os laudos. | Analisou-se os laudos. |
| VTI ou VI + se (índice de indeterminação) | Sempre singular | Precisa-se de agentes. | Precisam-se de agentes. |
| Sujeito posposto | Concorda normalmente | Chegaram ao posto os novos servidores. | Chegou ao posto os novos servidores. |
| Relativo "que" | Concorda com o antecedente | Fui eu que assinei. | Fui eu que assinou. |

> **⚠️ Pegadinha:** o auxiliar de um verbo impessoal também fica no singular: "Vai fazer dez anos", "Pode haver atrasos".
> **⚠️ Pegadinha:** com "a maioria de" + plural, o verbo pode ficar no singular ou no plural ("A maioria dos servidores aprovou/aprovaram"). Item que afirme ser obrigatório um dos dois está errado.

#### Regência e crase
Crase = preposição **a** + artigo **a** (ou o "a" de aquele, aquela, a qual). Teste: troque a palavra feminina por uma masculina; se aparecer "ao", há crase.

| Situação | Crase | Exemplo |
| --- | --- | --- |
| Termo regente pede "a" + palavra feminina com artigo | Obrigatória | Chegou à delegacia. Referiu-se às normas. |
| Locuções femininas (às vezes, à noite, à medida que) | Obrigatória | Atendeu à noite. |
| Horas determinadas | Obrigatória | O posto abre às 8h. |
| Antes de palavra masculina, verbo ou pronome pessoal | Proibida | Começou a analisar. Entregou a ele. |
| "a" singular antes de palavra feminina plural | Proibida | Referiu-se a normas internas. |
| Antes de possessivo feminino singular | Facultativa | Entregou à sua equipe / a sua equipe. |
| Antes de nome feminino de pessoa | Facultativa | Enviou o ofício à Ana / a Ana. |
| Depois de "até" | Facultativa | Foi até à sede / até a sede. |

Regências que mais caem: **aspirar a** (desejar), **assistir a** (ver), **obedecer a**, **preferir A a B**, **chegar a** e **ir a** (movimento), **proceder a** (dar início), **responder a**.

#### Colocação pronominal
| Colocação | Quando | Exemplo |
| --- | --- | --- |
| Próclise | Palavra atrativa: negação, pronome relativo, conjunção subordinativa, advérbio sem vírgula, indefinido | Não lhe entregaram. O servidor que me atendeu. |
| Ênclise | Início de período, após pausa, imperativo afirmativo, gerúndio sem atrativo | Informaram-me do prazo. |
| Mesóclise | Futuro do presente ou do pretérito, sem atrativo | Far-se-á a análise. Informar-me-iam. |

> **⚠️ Pegadinha:** a norma-padrão não admite período iniciado por pronome átono ("Me informaram") nem ênclise ao futuro ("Informarão-me"). Com palavra atrativa, a próclise prevalece até no futuro: "Não se fará a análise".

#### Emprego do "que" e do "se"
| "que" | Teste | Exemplo |
| --- | --- | --- |
| Pronome relativo | Troca por "o qual" | Os acordos **que** permitem o compartilhamento... |
| Conjunção integrante | Oração troca por "isso" | Sabe **que** a qualidade importa. |
| Conjunção causal ou explicativa | Troca por "porque" | Saia, **que** vai chover. |
| Conjunção consecutiva | Vem após tão, tal, tanto | Era tão claro **que** ninguém errou. |
| Partícula expletiva | Pode ser retirada | Foi para isso **que** surgiram as redes. |

| "se" | Teste | Exemplo |
| --- | --- | --- |
| Partícula apassivadora | VTD; vira voz passiva analítica | Analisaram-se os laudos (= foram analisados). |
| Índice de indeterminação do sujeito | VTI, VI ou VL; verbo no singular | Precisa-se de agentes. |
| Pronome reflexivo | A ação volta para o sujeito ("a si mesmo") | O agente feriu-se. |
| Pronome recíproco | Ação mútua ("um ao outro") | Os peritos cumprimentaram-se. |
| Parte integrante do verbo | Verbo pronominal | Queixou-se da demora. |
| Conjunção condicional | Troca por "caso" | **Se** houver dúvida, pergunte. |
| Conjunção integrante | Introduz oração objetiva | Perguntou **se** havia vaga. |

#### Revisão relâmpago
- Nunca há vírgula entre sujeito e verbo, por maior que seja o sujeito.
- Termo intercalado: duas vírgulas ou nenhuma, nunca uma só.
- Haver (existir) e fazer (tempo) são impessoais, e o auxiliar acompanha.
- VTD + se concorda com o sujeito; VTI + se fica no singular.
- Crase exige preposição e artigo; "a" antes de plural é só preposição.
- Não se inicia período com pronome átono; futuro não aceita ênclise.
- "Que" expletivo pode ser retirado sem prejuízo da correção.
`,
      },
    ],
  });

  pfModulos.push({
    id: "pf-rlm",
    title: "Raciocínio Lógico",
    icon: "🧮",
    description:
      "Lógica proposicional (tabelas-verdade, equivalências, negações, quantificadores e argumentos) e raciocínio quantitativo (conjuntos, contagem, probabilidade e porcentagem).",
    sections: [
      {
        id: "pf-rlm-proposicional",
        title: "Lógica proposicional, equivalências e argumentos",
        content: `
### O que o Cebraspe cobra aqui
O Cebraspe costuma apresentar uma proposição do cotidiano policial ou administrativo e cobrar, em itens separados, se uma frase é proposição, a negação, a contrapositiva, uma equivalência, o número de linhas da tabela-verdade e a validade de um argumento. Quase tudo se resolve com seis tabelas que precisam estar na ponta da língua: os conectivos, as equivalências, as negações, os quantificadores e as formas de argumento.

#### Proposição: o que é e o que não é
Proposição é uma **sentença declarativa** que pode ser julgada como verdadeira ou falsa, mas não as duas coisas ao mesmo tempo.

| Sentença | É proposição? | Motivo |
| --- | --- | --- |
| A PF é um órgão da União. | Sim | Declarativa (verdadeira) |
| Brasília é a capital da Argentina. | Sim | Declarativa (falsa) |
| Que horas abre o posto? | Não | Pergunta |
| Que operação bem-sucedida! | Não | Exclamação |
| Apresente o documento. | Não | Ordem |
| x + 3 > 10 | Não | Sentença aberta: depende de x |
| Ele é servidor público. | Não | Sentença aberta: "ele" não está determinado |
| Esta frase é falsa. | Não | Paradoxo: não admite valor sem contradição |

> **⚠️ Pegadinha:** não saber o valor lógico não impede que a frase seja proposição. "Existe vida em outro planeta" é proposição.

#### Conectivos e tabela-verdade
| Conectivo | Símbolo | Leitura | Regra |
| --- | --- | --- | --- |
| Negação | ¬p | não p | Inverte o valor |
| Conjunção | p ∧ q | p e q | V só se as duas forem V |
| Disjunção inclusiva | p ∨ q | p ou q | F só se as duas forem F |
| Disjunção exclusiva | p ⊻ q | ou p ou q | V se os valores forem diferentes |
| Condicional | p → q | se p, então q | F só quando V → F |
| Bicondicional | p ↔ q | p se e somente se q | V se os valores forem iguais |

Formas do condicional p → q: "Se p, q"; "q, se p"; "Quando p, q"; "p implica q"; "p é condição **suficiente** para q"; "q é condição **necessária** para p".

A tabela tem **2^n linhas**, em que n é o número de proposições simples **distintas**. Exemplo: (p ∨ q) ∧ (¬p → r) ∧ q tem 3 proposições distintas, logo 8 linhas.

Exemplo resolvido, com p = "o agente conclui o relatório" e q = "o processo é arquivado":

\`\`\`
p | q | p → q | ¬q → ¬p | q → p | ¬p ∨ q | p ∧ ¬q
V | V |   V   |    V    |   V   |   V    |   F
V | F |   F   |    F    |   V   |   F    |   V
F | V |   V   |    V    |   F   |   V    |   F
F | F |   V   |    V    |   V   |   V    |   F
\`\`\`

As colunas p → q, ¬q → ¬p e ¬p ∨ q são idênticas: são equivalentes. A coluna q → p difere: a recíproca não é equivalente. A coluna p ∧ ¬q é o oposto exato de p → q: é a negação.

#### Tautologia, contradição e contingência
| Classificação | Coluna final | Exemplos |
| --- | --- | --- |
| Tautologia | Só V | p ∨ ¬p; (p ∧ q) → p |
| Contradição | Só F | p ∧ ¬p; (p → q) ∧ (p ∧ ¬q) |
| Contingência | V e F | p → q; p ∧ q |

#### Equivalências
| Proposição | Equivalente | Nome |
| --- | --- | --- |
| p → q | ¬q → ¬p | Contrapositiva |
| p → q | ¬p ∨ q | Condicional como disjunção |
| ¬(p ∧ q) | ¬p ∨ ¬q | De Morgan |
| ¬(p ∨ q) | ¬p ∧ ¬q | De Morgan |
| p ↔ q | (p → q) ∧ (q → p) | Bicondicional como dois condicionais |
| ¬¬p | p | Dupla negação |

> **⚠️ Pegadinha:** a recíproca (q → p) e a inversa (¬p → ¬q) **não** equivalem a p → q. Inverta **e** negue os dois lados.

#### Negações
| Proposição | Negação |
| --- | --- |
| p ∧ q | ¬p ∨ ¬q |
| p ∨ q | ¬p ∧ ¬q |
| p → q | p ∧ ¬q |
| p ↔ q | p ⊻ q, ou seja, p ↔ ¬q |
| Todo A é B | Algum A não é B |
| Algum A é B | Nenhum A é B |
| Nenhum A é B | Algum A é B |

> **⚠️ Pegadinha:** a negação de um condicional não é outro condicional. "Se concluir, arquiva" nega-se com "Conclui **e não** arquiva".
> **⚠️ Pegadinha:** "Nenhum servidor é pontual" é o **contrário** de "Todo servidor é pontual", não a negação. A negação é "Algum servidor não é pontual" (ou "Pelo menos um servidor não é pontual").

#### Argumentos válidos e falácias
Um argumento é **válido** quando, sendo as premissas verdadeiras, a conclusão é necessariamente verdadeira. Validade é questão de forma, não de verdade das frases.

| Forma | Estrutura | Válido? |
| --- | --- | --- |
| Modus ponens | p → q; p; logo q | Sim |
| Modus tollens | p → q; ¬q; logo ¬p | Sim |
| Silogismo hipotético | p → q; q → r; logo p → r | Sim |
| Silogismo disjuntivo | p ∨ q; ¬p; logo q | Sim |
| Afirmar o consequente | p → q; q; logo p | Não (falácia) |
| Negar o antecedente | p → q; ¬p; logo ¬q | Não (falácia) |

Para testar: suponha a conclusão **falsa** e todas as premissas **verdadeiras**. Se isso for possível sem contradição, o argumento é inválido.

#### Revisão relâmpago
- Pergunta, exclamação, ordem, sentença aberta e paradoxo não são proposições.
- Condicional só é falso em V → F; bicondicional é V quando os valores coincidem.
- Linhas da tabela: 2^n, com n proposições simples distintas.
- p → q ≡ ¬q → ¬p ≡ ¬p ∨ q; a recíproca não é equivalente.
- ¬(p → q) ≡ p ∧ ¬q; De Morgan troca "e" por "ou" e nega as partes.
- Negação de "todo" é "algum... não"; de "algum" é "nenhum".
- Afirmar o consequente e negar o antecedente são falácias.
`,
      },
      {
        id: "pf-rlm-quantitativo",
        title: "Conjuntos, contagem, probabilidade e porcentagem",
        content: `
### O que o Cebraspe cobra aqui
A parte quantitativa aparece em situações-problema curtas, com vários itens sobre o mesmo enunciado: quantas pessoas estão em apenas um grupo, quantas comissões é possível formar, qual a chance de um evento, qual o valor depois de dois reajustes. As contas são simples; o que derruba o candidato é escolher a ferramenta errada (arranjo no lugar de combinação), esquecer a interseção ou somar porcentagens que deveriam ser multiplicadas.

#### Conjuntos e diagramas
- n(A ∪ B) = n(A) + n(B) − n(A ∩ B)
- n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A ∩ B) − n(A ∩ C) − n(B ∩ C) + n(A ∩ B ∩ C)
- Preencha o diagrama **do centro para fora**: primeiro a interseção tripla, depois as duplas (descontando o centro), por último as regiões "só".

Exemplo com dois conjuntos: de 40 servidores, 25 fizeram o curso de atendimento, 18 o de arquivo e 8 os dois. Só atendimento: 25 − 8 = 17. Só arquivo: 18 − 8 = 10. Pelo menos um: 17 + 10 + 8 = 35. Nenhum: 40 − 35 = 5.

> **⚠️ Pegadinha:** "fizeram o curso de atendimento" inclui quem também fez o de arquivo. "Apenas", "somente" e "exatamente dois" pedem regiões específicas do diagrama.

#### Princípio fundamental da contagem
Se uma tarefa tem etapas independentes com m, n, p possibilidades, o total é m × n × p. Comece pela etapa com restrição.
- Senha de 4 algarismos distintos: 10 × 9 × 8 × 7 = 5.040.
- Senha de 4 algarismos com repetição: 10 × 10 × 10 × 10 = 10.000.
- Número de 3 algarismos distintos (o primeiro não pode ser zero): 9 × 9 × 8 = 648.

#### Arranjo, combinação e permutação
| Ferramenta | A ordem importa? | Fórmula | Exemplo |
| --- | --- | --- | --- |
| Permutação simples | Sim, usa todos | n! | Ordem de 5 processos na fila: 5! = 120 |
| Permutação com repetição | Sim, usa todos, com repetidos | n! / (a! × b! ...) | Anagramas de ARARA: 5! / (3! × 2!) = 10 |
| Arranjo | Sim, escolhe p de n | n! / (n − p)! | Diretor e vice entre 10: 10 × 9 = 90 |
| Combinação | Não, escolhe p de n | n! / (p! × (n − p)!) | Dupla entre 10: 90 / 2 = 45 |

Teste rápido: troque a ordem de dois escolhidos. Se o resultado mudou (cargos diferentes, posições, senhas), é **arranjo**. Se não mudou (comissão, grupo, equipe), é **combinação**.

> **⚠️ Pegadinha:** "pelo menos um" quase sempre se resolve pelo complementar: total menos os casos sem nenhum. Somar caso a caso é lento e convida ao erro.

Exemplo resolvido de contagem:

\`\`\`
Uma equipe tem 6 agentes e 4 escrivães. Quantos grupos de 3 pessoas
têm pelo menos 1 escrivão?

Total de grupos (a ordem não importa):  C(10,3) = (10 × 9 × 8) / (3 × 2 × 1) = 120
Grupos sem escrivão (só agentes):       C(6,3)  = (6 × 5 × 4) / (3 × 2 × 1)  = 20
Pelo menos 1 escrivão:                  120 − 20 = 100

Conferência caso a caso:
1 escrivão:  C(4,1) × C(6,2) = 4 × 15 = 60
2 escrivães: C(4,2) × C(6,1) = 6 × 6  = 36
3 escrivães: C(4,3)          = 4
Soma: 60 + 36 + 4 = 100
\`\`\`

#### Probabilidade
- Com resultados igualmente prováveis: P(A) = casos favoráveis / casos possíveis.
- Complementar: P(não A) = 1 − P(A).
- União: P(A ∪ B) = P(A) + P(B) − P(A ∩ B).
- Independentes: P(A ∩ B) = P(A) × P(B).
- Pelo menos um: 1 − P(nenhum). Três tentativas independentes com 50% de sucesso cada: 1 − 0,5 × 0,5 × 0,5 = 0,875.

| Situação | Conta |
| --- | --- |
| Os dois eventos independentes ocorrem | P(A) × P(B) |
| Nenhum dos dois ocorre | (1 − P(A)) × (1 − P(B)) |
| Pelo menos um ocorre | 1 − (1 − P(A)) × (1 − P(B)) |
| Exatamente um ocorre | P(A) × (1 − P(B)) + (1 − P(A)) × P(B) |

> **⚠️ Pegadinha:** independentes não é o mesmo que mutuamente exclusivos. Eventos exclusivos não ocorrem juntos; independentes podem ocorrer juntos, e um não altera a chance do outro.
> **⚠️ Pegadinha:** sem reposição, o total diminui a cada retirada: 2 sorteios entre 5 pessoas dão 5 × 4, e não 5 × 5.

#### Porcentagem e regra de três
- Aumento de i%: multiplique por (1 + i/100). Desconto de i%: multiplique por (1 − i/100).
- Reajustes sucessivos se **multiplicam**: +10% e +10% = 1,1 × 1,1 = 1,21, ou seja, +21%.
- Variação percentual = (valor novo − valor antigo) / valor antigo.
- Porcentagem de porcentagem: 30% de 40% = 0,3 × 0,4 = 12%.
- Regra de três composta: calcule a **produtividade unitária** (por pessoa, por dia) e multiplique. Exemplo: 4 servidores digitalizam 600 páginas em 3 dias, isto é, 600 / (4 × 3) = 50 páginas por servidor por dia. Então 6 servidores em 5 dias digitalizam 6 × 5 × 50 = 1.500 páginas.

> **⚠️ Pegadinha:** mais servidores fazem o mesmo trabalho em **menos** dias (grandezas inversamente proporcionais). Confira o sentido de cada grandeza antes de montar a proporção.

#### Revisão relâmpago
- União de dois conjuntos: soma menos a interseção.
- Diagrama de três conjuntos: preencha do centro para fora.
- Ordem importa: arranjo; não importa: combinação; todos os elementos: permutação.
- Letras repetidas: divida pelo fatorial de cada repetição.
- "Pelo menos um": total menos nenhum.
- Eventos independentes: multiplique as probabilidades.
- Reajustes sucessivos: multiplique os fatores, nunca some as taxas.
`,
      },
    ],
  });

  pfQuestoes.push(
    // ---------- Português: Texto 1 ----------
    ce(
      PF_PT,
      "Reescritura: troca de conectivo",
      "A substituição de “Contudo” (linha 9) por **No entanto** manteria a correção gramatical e o sentido do texto.",
      true,
      "“Contudo” e “no entanto” são conjunções adversativas de mesmo valor, e ambas podem iniciar o período seguidas de vírgula. A oposição entre a pressa e as garantias é mantida.",
      "pf-pt-reescrita",
      TEXTO_1,
    ),
    ce(
      PF_PT,
      "Referenciação",
      "No texto, a expressão “os quais”, em “sem os quais” (linha 8), refere-se a “acordos de cooperação”.",
      true,
      "“Os quais” é masculino plural e concorda com “acordos de cooperação”; “informações” é feminino e exigiria “as quais”. O sentido confirma: sem os acordos, as provas se perdem.",
      "pf-pt-coesao",
      TEXTO_1,
    ),
    ce(
      PF_PT,
      "Referenciação",
      "A expressão “Esse modelo” (linha 14) retoma “compartilhamento rápido de informações” (linha 8).",
      false,
      "“Esse modelo” retoma o que acabou de ser descrito: as redes de contato permanente, em que cada país mantém um ponto focal disponível vinte e quatro horas por dia.",
      "pf-pt-coesao",
      TEXTO_1,
    ),
    ce(
      PF_PT,
      "Emprego da vírgula",
      "A supressão da vírgula empregada logo após “Diante desse cenário” (linha 6) prejudicaria a correção gramatical do texto.",
      false,
      "“Diante desse cenário” é adjunto adverbial curto anteposto à oração; nesse caso, a vírgula é facultativa, e sua retirada não gera erro.",
      "pf-pt-correcao",
      TEXTO_1,
    ),
    ce(
      PF_PT,
      "Reescritura: tempo e modo verbal",
      "O trecho “Caso o cidadão desconfie” (linha 17) poderia ser substituído por **Se o cidadão desconfiar**, sem prejuízo da correção gramatical e do sentido do texto.",
      true,
      "“Caso” pede o presente do subjuntivo, e “se”, o futuro do subjuntivo; com o ajuste do verbo, a hipótese continua possível e correlacionada a “perderá”.",
      "pf-pt-reescrita",
      TEXTO_1,
    ),
    ce(
      PF_PT,
      "Inferência",
      "Depreende-se do texto que, nas redes de contato permanente, a obtenção de registros de conexão dispensa ordem judicial, o que explica a rapidez no atendimento das requisições urgentes.",
      false,
      "O texto afirma que a obtenção desses registros exige, em regra, ordem judicial e atribui a rapidez à redução da burocracia dos pedidos formais. A dispensa da ordem é extrapolação.",
      "pf-pt-coesao",
      TEXTO_1,
    ),
    ce(
      PF_PT,
      "Reescritura: expressão de realce",
      "Seriam mantidos a correção gramatical e o sentido original do texto caso o período iniciado na linha 12 fosse reescrito da seguinte forma: **Para conciliar essas exigências, surgiram as redes de contato permanente, em que cada país mantém um ponto focal disponível vinte e quatro horas por dia.**",
      true,
      "“Foi... que” é expressão expletiva, de realce, e pode ser retirada sem prejuízo gramatical ou de sentido; a vírgula após “exigências” isola a oração reduzida anteposta.",
      "pf-pt-reescrita",
      TEXTO_1,
    ),
    me(
      PF_PT,
      "Tipologia textual",
      "Quanto à tipologia, o texto 1 classifica-se como predominantemente",
      [
        "narrativo, pois relata a trajetória de um golpe desde o planejamento até a investigação policial.",
        "descritivo, pois caracteriza em detalhe o funcionamento das redes de contato permanente.",
        "argumentativo, pois defende pontos de vista sobre o combate aos crimes digitais.",
        "injuntivo, pois orienta o cidadão sobre como proceder diante de mensagens suspeitas.",
        "dialogal, pois reproduz a troca de mensagens entre polícias de diferentes países.",
      ],
      2,
      "O texto apresenta tese e avaliações (“a investigação isolada mostra-se insuficiente”, “nenhum acordo substitui a prevenção”), marcas do tipo dissertativo-argumentativo. Não há sequência de fatos, imperativos ou diálogo.",
      "pf-pt-coesao",
      TEXTO_1,
    ),

    // ---------- Português: Texto 2 ----------
    ce(
      PF_PT,
      "Reescritura: haver x existir",
      "A forma verbal “Há” (linha 7) poderia ser substituída por **Existem**, sem prejuízo da correção gramatical do texto.",
      true,
      "“Haver” no sentido de existir é impessoal e fica no singular; “existir” é pessoal e concorda com o sujeito “brasileiros”, por isso “Existem”.",
      "pf-pt-reescrita",
      TEXTO_2,
    ),
    ce(
      PF_PT,
      "Reescritura: voz passiva",
      "Sem prejuízo da correção gramatical e do sentido do texto, o trecho “o agendamento pela internet e a consulta ao andamento dos pedidos reduziram filas e deslocamentos” (linhas 6 e 7) poderia ser reescrito como **filas e deslocamentos foram reduzidos pelo agendamento pela internet e pela consulta ao andamento dos pedidos**.",
      true,
      "Na passiva analítica, o objeto direto passa a sujeito, o verbo ser assume o tempo de “reduziram” (pretérito perfeito: “foram”) e o particípio concorda com “filas e deslocamentos” no masculino plural.",
      "pf-pt-reescrita",
      TEXTO_2,
    ),
    ce(
      PF_PT,
      "Conectivos",
      "A substituição de “porque” (linha 4) por **por conseguinte** manteria o sentido original do texto.",
      false,
      "“Porque” introduz a causa de o atendimento pesar tanto quanto o documento; “por conseguinte” é conclusivo e inverteria a relação lógica. Mantêm o sentido “uma vez que”, “visto que” ou “já que”.",
      "pf-pt-coesao",
      TEXTO_2,
    ),
    ce(
      PF_PT,
      "Emprego da vírgula",
      "A inserção de uma vírgula imediatamente após “público” (linha 12) manteria a correção gramatical do texto.",
      false,
      "“O servidor que atende ao público” é o sujeito de “exerce”; a vírgula após “público” separaria sujeito e verbo, o que a norma-padrão não admite.",
      "pf-pt-correcao",
      TEXTO_2,
    ),
    ce(
      PF_PT,
      "Referenciação: cujo",
      "O pronome “cuja” (linha 14) retoma “requerente” e estabelece relação de posse entre esse termo e “falta”.",
      false,
      "“Cuja” refere-se ao possuidor “os documentos exigidos” (a falta dos documentos) e concorda com o possuído, “falta”. Não retoma “requerente”.",
      "pf-pt-coesao",
      TEXTO_2,
    ),
    ce(
      PF_PT,
      "Concordância verbal",
      "A forma verbal “gera” (linha 15) poderia ser flexionada no plural — **geram** —, para concordar com “retrabalho” e “frustração”, sem prejuízo da correção gramatical do texto.",
      false,
      "O sujeito de “gera” é “Uma orientação mal dada”, singular; “retrabalho” e “frustração” são complementos do verbo. O plural provocaria erro de concordância.",
      "pf-pt-correcao",
      TEXTO_2,
    ),
    ce(
      PF_PT,
      "Inferência",
      "Depreende-se do texto que, para o autor, orientar bem o cidadão contribui para a eficiência do serviço público.",
      true,
      "O autor afirma que a orientação mal dada gera retrabalho, que investir em atendimento “é uma forma de eficiência” e que o serviço flui melhor quando o cidadão é bem informado.",
      "pf-pt-coesao",
      TEXTO_2,
    ),
    me(
      PF_PT,
      "Conectivos",
      "No texto 2, sem prejuízo do sentido, o vocábulo “portanto” (linha 10) poderia ser substituído por",
      ["no entanto.", "ademais.", "conquanto.", "porquanto.", "por isso."],
      4,
      "“Portanto” é conclusivo, assim como “por isso”. “No entanto” é adversativo; “ademais”, aditivo; “conquanto”, concessivo; e “porquanto”, causal.",
      "pf-pt-coesao",
      TEXTO_2,
    ),

    // ---------- Português: itens avulsos ----------
    ce(
      PF_PT,
      "Concordância: verbo fazer",
      "A frase “Fazem dois anos que a operação foi deflagrada” está de acordo com a norma-padrão da língua portuguesa.",
      false,
      "“Fazer” indicando tempo decorrido é impessoal e fica no singular: “Faz dois anos que a operação foi deflagrada”.",
      "pf-pt-correcao",
    ),
    ce(
      PF_PT,
      "Colocação pronominal",
      "No período “Me informaram que o prazo de entrega foi prorrogado”, a colocação do pronome átono está de acordo com a norma-padrão.",
      false,
      "A norma-padrão não admite iniciar período com pronome oblíquo átono; o correto é “Informaram-me que o prazo de entrega foi prorrogado”.",
      "pf-pt-correcao",
    ),
    ce(
      PF_PT,
      "Emprego do se",
      "Na oração “Precisa-se de agentes administrativos para o novo posto”, o verbo está corretamente empregado no singular, pois o “se” é índice de indeterminação do sujeito.",
      true,
      "“Precisar de” é transitivo indireto; com “se”, o sujeito fica indeterminado e o verbo permanece obrigatoriamente na 3.ª pessoa do singular.",
      "pf-pt-correcao",
    ),
    me(
      PF_PT,
      "Emprego do se",
      "Assinale a opção em que o vocábulo “se” é partícula apassivadora.",
      [
        "Necessita-se de intérpretes para a operação.",
        "Analisaram-se os laudos apreendidos.",
        "O agente feriu-se durante o treinamento.",
        "Trata-se de um caso de fraude bancária.",
        "Os dois peritos cumprimentaram-se na entrada do prédio.",
      ],
      1,
      "“Analisar” é transitivo direto, e a frase equivale a “Os laudos apreendidos foram analisados”. Nas demais, o “se” é índice de indeterminação (necessitar de, tratar de), reflexivo (feriu-se) e recíproco (cumprimentaram-se).",
      "pf-pt-correcao",
    ),

    // ---------- RLM: lógica proposicional ----------
    ce(
      PF_RLM,
      "Negação do condicional",
      "A negação de P pode ser corretamente expressa por “O agente concluirá o relatório e o processo não será arquivado”.",
      true,
      "¬(p → q) ≡ p ∧ ¬q: mantém-se o antecedente e nega-se o consequente, ligando-os por “e”.",
      "pf-rlm-proposicional",
      SIT_P,
    ),
    ce(
      PF_RLM,
      "Equivalências",
      "A proposição “Se o processo for arquivado, então o agente terá concluído o relatório” é logicamente equivalente a P.",
      false,
      "Essa é a recíproca (q → p), que difere de p → q quando p é falsa e q é verdadeira. A equivalente é a contrapositiva: “Se o processo não for arquivado, então o agente não terá concluído o relatório”.",
      "pf-rlm-proposicional",
      SIT_P,
    ),
    ce(
      PF_RLM,
      "Equivalências",
      "A proposição “O agente não concluirá o relatório ou o processo será arquivado” é logicamente equivalente a P.",
      true,
      "p → q ≡ ¬p ∨ q: as duas só são falsas quando p é verdadeira e q é falsa.",
      "pf-rlm-proposicional",
      SIT_P,
    ),
    ce(
      PF_RLM,
      "Argumentos",
      "Admitindo-se que P seja verdadeira e que o processo tenha sido arquivado, é correto concluir que o agente concluiu o relatório.",
      false,
      "Concluir p a partir de p → q e q é a falácia de afirmar o consequente: com p falsa e q verdadeira, P continua verdadeira. Só seria válido concluir algo sobre p a partir de ¬q (modus tollens).",
      "pf-rlm-proposicional",
      SIT_P,
    ),
    me(
      PF_RLM,
      "Proposições",
      "Assinale a opção que apresenta uma proposição.",
      [
        "Que horas termina o plantão de hoje?",
        "Entregue o relatório até sexta-feira.",
        "Ele é agente administrativo da Polícia Federal.",
        "O Brasil faz fronteira com o Paraguai.",
        "Esta frase é falsa.",
      ],
      3,
      "Só a sentença declarativa com valor lógico definido é proposição. As demais são pergunta, ordem, sentença aberta (“ele” não está determinado) e paradoxo.",
      "pf-rlm-proposicional",
    ),
    ce(
      PF_RLM,
      "Tabela-verdade",
      "A tabela-verdade da proposição (p ∧ q) → (r ∨ ¬p), em que p, q e r são proposições simples, possui 16 linhas.",
      false,
      "Contam-se as proposições simples distintas (p, q e r), e não as ocorrências: 2³ = 8 linhas.",
      "pf-rlm-proposicional",
    ),
    ce(
      PF_RLM,
      "Leis de De Morgan",
      "A negação da proposição “O servidor é pontual e o relatório está completo” é “O servidor não é pontual e o relatório não está completo”.",
      false,
      "Por De Morgan, ¬(p ∧ q) ≡ ¬p ∨ ¬q: “O servidor não é pontual ou o relatório não está completo”.",
      "pf-rlm-proposicional",
    ),
    ce(
      PF_RLM,
      "Quantificadores",
      "A negação da proposição “Todo servidor do setor cumpriu a meta” pode ser expressa por “Pelo menos um servidor do setor não cumpriu a meta”.",
      true,
      "A negação de “todo A é B” é “algum A não é B”, e “pelo menos um” equivale a “algum”. “Nenhum servidor cumpriu a meta” seria o contrário, não a negação.",
      "pf-rlm-proposicional",
    ),

    // ---------- RLM: raciocínio quantitativo ----------
    ce(
      PF_RLM,
      "Combinação",
      "Há 56 maneiras distintas de formar essa comissão.",
      true,
      "A ordem não importa: C(8,3) = (8 × 7 × 6) / (3 × 2 × 1) = 56.",
      "pf-rlm-quantitativo",
      SIT_EQUIPE,
    ),
    ce(
      PF_RLM,
      "Arranjo",
      "Se os 3 escolhidos fossem ocupar os cargos distintos de presidente, relator e secretário da comissão, haveria menos de 300 maneiras de compor a comissão.",
      false,
      "Com cargos distintos, a ordem importa: A(8,3) = 8 × 7 × 6 = 336 maneiras, número superior a 300.",
      "pf-rlm-quantitativo",
      SIT_EQUIPE,
    ),
    ce(
      PF_RLM,
      "Probabilidade",
      "Escolhida a comissão ao acaso, a probabilidade de que ela tenha pelo menos uma mulher é superior a 80%.",
      true,
      "Comissões só de homens: C(5,3) = 10. Pelo menos uma mulher: 56 − 10 = 46, e 46/56 ≈ 82,1%.",
      "pf-rlm-quantitativo",
      SIT_EQUIPE,
    ),
    me(
      PF_RLM,
      "Conjuntos",
      "Em uma turma de 60 candidatos, 35 estudam Português, 28 estudam Raciocínio Lógico e 20 estudam Informática. Sabe-se que 12 estudam Português e Raciocínio Lógico, 10 estudam Português e Informática, 8 estudam Raciocínio Lógico e Informática e 5 estudam as três disciplinas. Nessa turma, o número de candidatos que não estudam nenhuma das três disciplinas é igual a",
      ["2.", "5.", "7.", "12.", "18."],
      0,
      "n(P ∪ R ∪ I) = 35 + 28 + 20 − 12 − 10 − 8 + 5 = 58; logo, 60 − 58 = 2 não estudam nenhuma. Quem esquece de somar a interseção tripla chega a 7.",
      "pf-rlm-quantitativo",
    ),
    me(
      PF_RLM,
      "Permutação com repetição",
      "O número de anagramas distintos que podem ser formados com as letras da palavra POLICIA é igual a",
      ["720.", "1.260.", "2.520.", "5.040.", "10.080."],
      2,
      "São 7 letras com o I repetido duas vezes: 7! / 2! = 5.040 / 2 = 2.520.",
      "pf-rlm-quantitativo",
    ),
    ce(
      PF_RLM,
      "Porcentagem",
      "Se o valor de uma diária for reajustado em 20% e, no mês seguinte, sofrer redução de 20%, o valor final será 4% menor que o inicial.",
      true,
      "Os fatores se multiplicam: 1,2 × 0,8 = 0,96, ou seja, o valor final corresponde a 96% do inicial, 4% a menos.",
      "pf-rlm-quantitativo",
    ),
    ce(
      PF_RLM,
      "Regra de três composta",
      "Se 6 servidores, trabalhando no mesmo ritmo, analisam 90 processos em 5 dias, então 4 servidores, nesse mesmo ritmo, analisarão 72 processos em 6 dias.",
      true,
      "Produtividade: 90 / (6 × 5) = 3 processos por servidor por dia. Assim, 4 × 6 × 3 = 72 processos.",
      "pf-rlm-quantitativo",
    ),
    ce(
      PF_RLM,
      "Probabilidade: eventos independentes",
      "Dois sistemas de monitoramento funcionam de forma independente. Em determinado dia, a probabilidade de o sistema A falhar é de 10%, e a de o sistema B falhar é de 20%. Nesse caso, a probabilidade de que pelo menos um dos sistemas falhe nesse dia é de 30%.",
      false,
      "Pelo menos um = 1 − P(nenhum falha) = 1 − 0,9 × 0,8 = 0,28, isto é, 28%. Somar 10% e 20% ignora a chance de os dois falharem juntos (2%).",
      "pf-rlm-quantitativo",
    ),
  );
}
