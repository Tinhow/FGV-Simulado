/* TJPB 2026/2027 · Raciocínio Lógico-Matemático (complemento).
   Teoria + questões INÉDITAS no estilo FGV (não são de prova oficial). */
{
  const RLM = "Raciocínio Lógico-Matemático";

  tjpbModulos.push({
    id: "tj-rlm",
    title: "Raciocínio Lógico-Matemático (complemento)",
    icon: "🧮",
    description:
      "O que falta do edital de RLM: conjuntos numéricos, regra de três composta, juros, álgebra, funções, sequências, matrizes, combinatória, probabilidade, estatística e silogismos.",
    sections: [
      // =====================================================================
      {
        id: "tj-rlm-financeira",
        title: "Conjuntos numéricos, regra de três composta, porcentagem e juros",
        content: `
### O que a FGV cobra aqui
A FGV gosta de problemas curtos com contexto de repartição pública: prazos, reajustes, produtividade de equipes. O cálculo quase nunca é longo; a dificuldade está em escolher o modelo certo (direta ou inversa, simples ou composto, somar ou multiplicar percentuais). As alternativas erradas costumam ser exatamente o resultado do modelo errado.

#### 1. Conjuntos numéricos
| Conjunto | O que contém | Exemplos |
| --- | --- | --- |
| **ℕ** naturais | 0, 1, 2, 3, ... | 0, 7, 100 |
| **ℤ** inteiros | naturais e seus opostos | −5, 0, 12 |
| **ℚ** racionais | tudo que se escreve como a/b, com b ≠ 0 | 3/4, −2, 0,25, 0,333... |
| **𝕀** irracionais | decimais infinitos **não periódicos** | √2, π, e |
| **ℝ** reais | ℚ ∪ 𝕀 | todos os anteriores |

\`\`\`text
ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ        𝕀 ⊂ ℝ        ℚ ∩ 𝕀 = ∅
\`\`\`

> **⚠️ Pegadinha:** a soma ou o produto de dois irracionais **pode** ser racional: √2 · √2 = 2 e (1 + √2) + (1 − √2) = 2. Já racional (não nulo) vezes irracional é sempre irracional.

> **⚠️ Pegadinha:** 0,999... **é igual a 1** (fração geratriz 9/9). E √(−4) não é real.

#### 2. Dízimas periódicas e fração geratriz
\`\`\`text
Dízima simples:    0,ababab... = ab / 99
Dízima composta:   numerador   = (parte até o 1º período) − (parte não periódica)
                   denominador = um 9 por algarismo do período,
                                 seguido de um 0 por algarismo do anteperíodo
\`\`\`

**Exemplo resolvido 1.** Fração geratriz de 1,2333...
1. Parte inteira 1, anteperíodo 2, período 3.
2. Numerador: 123 − 12 = 111.
3. Denominador: um 9 (período de 1 algarismo) e um 0 (anteperíodo de 1 algarismo) = 90.
4. 111/90 = **37/30**. Conferência: 37 ÷ 30 = 1,2333... ✔

Outros: 0,4545... = 45/99 = 5/11; 0,41666... = (416 − 41)/900 = 375/900 = 5/12.

#### 3. MMC e MDC
- **MMC** responde "quando os eventos coincidem de novo?" (ciclos, escalas, revisões periódicas).
- **MDC** responde "qual o maior tamanho de lote igual, sem sobra?" (dividir em grupos, cortar em pedaços iguais).

\`\`\`text
12 = 2² · 3        18 = 2 · 3²
MMC = maiores expoentes = 2² · 3² = 36
MDC = menores expoentes = 2 · 3   = 6
Propriedade (para dois números): MMC · MDC = a · b  →  36 · 6 = 216 = 12 · 18
\`\`\`

#### 4. Regra de três composta
Método da proporcionalidade: isole a grandeza procurada e compare cada uma das outras com ela, **uma de cada vez**, supondo as demais fixas.
- Diretamente proporcional: a fração entra **como está** (novo/antigo).
- Inversamente proporcional: a fração entra **invertida** (antigo/novo).

\`\`\`text
x = valor antigo · (razões das diretas) · (razões invertidas das inversas)
\`\`\`

**Exemplo resolvido 2.** 5 scanners, operando 8 h por dia, digitalizam 1.200 processos em 6 dias. Quantos dias 4 scanners, operando 10 h por dia, levam para 1.800 processos?
1. Processos x dias: mais processos, mais dias → **direta**: 1.800/1.200.
2. Scanners x dias: menos scanners, mais dias → **inversa**: 5/4.
3. Horas x dias: mais horas, menos dias → **inversa**: 8/10.
4. x = 6 · 1,5 · 1,25 · 0,8 = **9 dias**.

> **⚠️ Pegadinha:** a pergunta "direta ou inversa" é sempre feita **em relação à grandeza procurada**, nunca entre as outras grandezas.

#### 5. Porcentagem encadeada: fator multiplicativo
\`\`\`text
aumento de i%   →  multiplica por (1 + i)
desconto de i%  →  multiplica por (1 − i)
variações sucessivas: fator total = (1 ± i₁) · (1 ± i₂) · ...
\`\`\`

- Aumento de 20% seguido de desconto de 20%: 1,2 · 0,8 = 0,96 → **perda de 4%**, não "volta ao preço".
- Problema reverso: após aumento de 25%, o valor é R$ 500. Original = 500 ÷ 1,25 = **R$ 400** (e não 500 − 25% = 375).

> **⚠️ Pegadinha:** percentuais sucessivos não se somam. Somar 20% + 15% − 10% e responder 25% é o distrator clássico.

#### 6. Juros simples e compostos
\`\`\`text
Juros simples:    J = C · i · t          M = C · (1 + i·t)
Juros compostos:  M = C · (1 + i)^t      J = M − C
Taxa proporcional (simples):   i_anual = 12 · i_mensal
Taxa equivalente (composta):   (1 + i_anual) = (1 + i_mensal)^12
\`\`\`

| Critério | Juros simples | Juros compostos |
| --- | --- | --- |
| Base do cálculo | sempre o capital inicial | o montante do período anterior |
| Crescimento | linear (PA) | exponencial (PG) |
| Conversão de taxa | proporcional (divide ou multiplica) | equivalente (potência ou raiz) |
| t < 1 período | rende **mais** | rende menos |
| t = 1 período | igual | igual |
| t > 1 período | rende menos | rende **mais** |

**Exemplo resolvido 3.** R$ 10.000 a 10% ao mês durante 3 meses.
1. Simples: M = 10.000 · (1 + 0,3) = R$ 13.000.
2. Composto: M = 10.000 · 1,1³ = 10.000 · 1,331 = R$ 13.310.
3. A diferença (R$ 310) é o "juro sobre juro".

**Exemplo resolvido 4.** Taxas.
- 1% ao mês composto equivale a 1,01 elevado a 12 − 1 ≈ **12,68% ao ano** (não 12%).
- 21% ao bimestre composto equivale a √1,21 − 1 = **10% ao mês** (não 10,5%).

> **⚠️ Pegadinha:** em juros simples, taxa e prazo precisam estar na **mesma unidade**: 18% ao ano por 5 meses é 1,5% ao mês · 5 = 7,5%, e não 18% · 5.

#### Revisão relâmpago
- Dízima = racional; decimal infinito não periódico = irracional.
- MMC para coincidência de ciclos; MDC para lotes iguais máximos.
- Regra de três composta: compare cada grandeza só com a procurada.
- Variações sucessivas: multiplique os fatores.
- Simples: taxa proporcional, crescimento linear. Composto: taxa equivalente, crescimento exponencial.
- Para mais de um período, composto rende mais; para menos de um período, simples rende mais.
        `,
      },
      // =====================================================================
      {
        id: "tj-rlm-algebra",
        title: "Equações, sistemas, funções, sequências e matrizes",
        content: `
### O que a FGV cobra aqui
Álgebra na FGV vem disfarçada de problema: "o número de processos de um tipo excede o dobro do outro em 4", "o lucro é dado por uma função quadrática", "a cada dia a equipe analisa 3 processos a mais". O trabalho é traduzir o texto em equação e resolver sem tropeçar em sinal. Matrizes e determinantes aparecem mais como **propriedades** do que como contas longas.

#### 1. Equações e inequações
\`\`\`text
1º grau:  ax + b = 0            →  x = −b/a
2º grau:  ax² + bx + c = 0      →  Δ = b² − 4ac,   x = (−b ± √Δ) / 2a
Soma das raízes = −b/a          Produto das raízes = c/a
Δ > 0: duas raízes reais distintas;  Δ = 0: uma raiz dupla;  Δ < 0: nenhuma raiz real
\`\`\`

**Exemplo resolvido 1.** x² − 5x + 6 = 0: soma 5 e produto 6 → raízes **2 e 3** (sem Bhaskara).

Inequação do 1º grau: resolve-se como equação, mas **ao multiplicar ou dividir por número negativo, inverte-se o sinal**: −2x + 6 > 0 → −2x > −6 → x < 3.

Inequação do 2º grau: ache as raízes e use o sinal da parábola. Em x² − 5x + 6 ≤ 0 (a > 0, concavidade para cima), a expressão é negativa **entre** as raízes: 2 ≤ x ≤ 3.

> **⚠️ Pegadinha:** esquecer de inverter o sinal da desigualdade ao dividir por negativo. A FGV coloca "x > 3" entre as alternativas.

#### 2. Sistemas lineares
- 2x2: substituição ou adição (multiplique as equações para cancelar uma incógnita).
- 3x3: **escalonamento**, zerando a primeira incógnita nas linhas 2 e 3 e depois a segunda na linha 3.

**Exemplo resolvido 2.** Resolva x + y + z = 6; 2x − y + z = 3; x + 2y − z = 2.
1. L2 − 2·L1: −3y − z = −9.
2. L3 − L1: y − 2z = −4 → y = 2z − 4.
3. Substituindo: −3(2z − 4) − z = −9 → −7z = −21 → **z = 3**.
4. y = 2·3 − 4 = **2** e x = 6 − 2 − 3 = **1**.

| Classificação | Escalonado mostra | Determinante (sistema quadrado) |
| --- | --- | --- |
| Possível e determinado (SPD) | solução única | det ≠ 0 |
| Possível e indeterminado (SPI) | linha 0 = 0 | det = 0 |
| Impossível (SI) | linha 0 = k, com k ≠ 0 | det = 0 |

#### 3. Funções
\`\`\`text
Afim:        f(x) = ax + b     a = taxa de variação, b = valor inicial, raiz x = −b/a
Quadrática:  f(x) = ax² + bx + c
             vértice: xv = −b/2a,   yv = −Δ/4a
             a > 0 → mínimo em yv;  a < 0 → máximo em yv
Exponencial: f(x) = a^x  (a > 0, a ≠ 1)  crescente se a > 1, decrescente se 0 < a < 1
Logaritmo:   log_a(b) = x  ⇔  a^x = b
             log(m·n) = log m + log n;  log(m/n) = log m − log n;  log(m^k) = k·log m
\`\`\`

**Exemplo resolvido 3.** f(x) = x² − 6x + 5.
1. Raízes: soma 6, produto 5 → x = 1 e x = 5.
2. Vértice: xv = 6/2 = 3; yv = f(3) = 9 − 18 + 5 = −4 (ou −Δ/4a = −16/4).
3. Como a > 0, o **mínimo** é −4, atingido em x = 3; f é negativa para 1 < x < 5.

> **⚠️ Pegadinha:** a pergunta "qual o lucro máximo?" pede **yv**; "quantas unidades maximizam o lucro?" pede **xv**. A FGV sempre põe os dois nas alternativas.

Logaritmo em linhas gerais: a exponencial e a logarítmica são inversas. Use logaritmo para "em quanto tempo" nos juros compostos: 1,1 elevado a t = 2 → t = log 2 / log 1,1.

#### 4. Sequências: PA e PG
\`\`\`text
PA:  an = a1 + (n − 1)·r          Sn = (a1 + an)·n / 2
PG:  an = a1 · q^(n − 1)          Sn = a1·(q^n − 1) / (q − 1),  q ≠ 1
PG infinita (|q| < 1):            S = a1 / (1 − q)
\`\`\`

**Exemplo resolvido 4.**
- PA 5, 9, 13, ...: a10 = 5 + 9·4 = 41; S10 = (5 + 41)·10/2 = **230**.
- PG 3, 6, 12, ...: a6 = 3 · 2⁵ = 96; S6 = 3·(64 − 1)/1 = **189**.
- PG infinita 8 + 4 + 2 + ...: S = 8 / (1 − 1/2) = **16**.

Sequências lógicas: teste, nesta ordem, diferenças constantes (PA), razões constantes (PG), diferenças que formam outra sequência (2ª ordem), regra "×2 + 1", alternância de duas sequências intercaladas e, em figuras, o ciclo (rotação, número de lados). Em ciclos, o termo de posição n é o da posição igual ao **resto** de n pelo tamanho do ciclo.

> **⚠️ Pegadinha:** na PA, o número de termos entre a1 e an é n, mas o número de "saltos" é n − 1. Errar isso dá an = a1 + n·r.

#### 5. Matrizes e determinantes
- Soma: elemento a elemento (mesma ordem). Produto A·B: exige colunas de A = linhas de B; em geral **A·B ≠ B·A**.
- Transposta Aᵀ: linhas viram colunas.
- Inversa: A·A⁻¹ = I; existe só se det A ≠ 0.

\`\`\`text
2x2:  A = | a  b |     det A = ad − bc      A⁻¹ = (1/det A) · |  d  −b |
          | c  d |                                            | −c   a |

Sarrus (3x3): repita as duas primeiras colunas;
det = (soma dos produtos das 3 diagonais principais) − (soma dos produtos das 3 secundárias)
\`\`\`

**Exemplo resolvido 5.** A = [[2, 1], [5, 3]]: det = 6 − 5 = 1, logo A⁻¹ = [[3, −1], [−5, 2]].

**Exemplo resolvido 6.** B = [[1, 2, 3], [0, 1, 4], [5, 6, 0]].
1. Principais: 1·1·0 + 2·4·5 + 3·0·6 = 40.
2. Secundárias: 3·1·5 + 1·4·6 + 2·0·0 = 39.
3. det B = 40 − 39 = **1**.

| Propriedade (A de ordem n) | Efeito no determinante |
| --- | --- |
| det(Aᵀ) | igual a det A |
| Multiplicar **uma** fila por k | det fica multiplicado por k |
| det(k·A) | kⁿ · det A |
| Trocar duas filas paralelas | troca o sinal |
| Fila nula ou filas proporcionais | det = 0 |
| det(A·B) | det A · det B |
| det(A⁻¹) | 1 / det A |
| Somar a uma fila múltiplo de outra | não muda (é o que o escalonamento faz) |

> **⚠️ Pegadinha:** det(2A) para matriz 3x3 é 2³ · det A = 8 · det A, e não 2 · det A.

#### Revisão relâmpago
- Soma das raízes −b/a, produto c/a; Δ decide quantas raízes reais.
- Dividiu inequação por negativo, inverte o sinal.
- Vértice: xv = −b/2a responde "quando"; yv = −Δ/4a responde "quanto".
- PA soma; PG multiplica; PG infinita só converge com |q| < 1.
- Sistema quadrado com det ≠ 0 tem solução única.
- det(kA) = kⁿ · det A; trocar filas troca o sinal; transpor não muda nada.
        `,
      },
      // =====================================================================
      {
        id: "tj-rlm-dados",
        title: "Combinatória, probabilidade, estatística e argumentação",
        content: `
### O que a FGV cobra aqui
Contagem e probabilidade são os temas mais frequentes de RLM na FGV: sorteio de comissões, distribuição de processos entre varas, escolha de cargos. A banca premia quem identifica se a **ordem importa** e quem usa o complementar ("pelo menos um"). Em estatística, cai média, mediana, moda e o efeito de transformações nos dados. Em argumentação, silogismos resolvidos com diagramas.

#### 1. Princípio fundamental da contagem (PFC)
Se uma decisão tem m modos e a seguinte tem n modos, as duas juntas têm **m · n** modos. Senha de 4 dígitos distintos: 10 · 9 · 8 · 7 = 5.040.

\`\`\`text
Permutação simples:          Pn = n!
Permutação com repetição:    n! / (a! · b! · ...)
Permutação circular:         PCn = (n − 1)!
Arranjo (ordem importa):     A(n,p) = n! / (n − p)!
Combinação (ordem não):      C(n,p) = n! / [p! · (n − p)!]
\`\`\`

| Pergunta-chave | Arranjo | Combinação |
| --- | --- | --- |
| Trocar a ordem gera outro resultado? | **sim** | **não** |
| Exemplos | presidente e vice; senha; pódio; ordem de pauta | comissão; equipe; grupo de processos; aperto de mãos |
| 5 servidores, escolher 2 | A(5,2) = 20 | C(5,2) = 10 |
| Relação | A(n,p) = C(n,p) · p! | C(n,p) = A(n,p) / p! |

> **⚠️ Pegadinha:** "comissão de 3 membros" é combinação; "comissão com presidente, relator e secretário" é arranjo.

**Exemplo resolvido 1.** Anagramas de TRIBUNAL (8 letras distintas).
1. Total: 8! = 40.320.
2. Começando por vogal (I, U, A): 3 · 7! = **15.120**.
3. Com T e R juntos, em qualquer ordem: trate TR como um bloco (7 elementos) e multiplique pelas 2 ordens do bloco: 2 · 7! = **10.080**.
4. Com letras repetidas: ARARA tem 5! / (3! · 2!) = **10** anagramas.

**Exemplo resolvido 2.** 5 juízes em mesa redonda: (5 − 1)! = **24** disposições (giros da mesa não geram disposição nova).

> **⚠️ Pegadinha:** "pelo menos um técnico" se resolve por complementar: total − (nenhum técnico). Escolher "um técnico garantido" e depois "os outros livremente" conta grupos repetidos.

#### 2. Probabilidade
\`\`\`text
Clássica:          P(A) = casos favoráveis / casos possíveis
Complementar:      P(não A) = 1 − P(A)
União:             P(A ∪ B) = P(A) + P(B) − P(A ∩ B)
Condicional:       P(A | B) = P(A ∩ B) / P(B)
Independentes:     P(A ∩ B) = P(A) · P(B)
Pelo menos um:     1 − P(nenhum)
Binomial:          P(k sucessos em n) = C(n,k) · p^k · (1 − p)^(n − k)
\`\`\`

**Exemplo resolvido 3.** Urna com 5 fichas brancas e 3 pretas; retiram-se 2 **sem reposição**. P(ambas pretas) = 3/8 · 2/7 = 6/56 = **3/28**.

**Exemplo resolvido 4.** Lança-se um dado 3 vezes. P(pelo menos um 6) = 1 − (5/6)³ = 1 − 125/216 = **91/216**.

**Exemplo resolvido 5.** Binomial: 4 lançamentos de moeda, exatamente 2 caras: C(4,2) · (1/2)⁴ = 6/16 = **3/8**.

Probabilidade condicional com "tabela de dupla entrada" ou árvore: na árvore, multiplique ao longo do ramo e some os ramos que levam ao evento observado; depois divida o ramo de interesse por essa soma (é o teorema de Bayes sem fórmula).

> **⚠️ Pegadinha:** mutuamente exclusivos (não ocorrem juntos) **não** é o mesmo que independentes. Somar probabilidades de eventos que podem ocorrer juntos superestima a união.

#### 3. Estatística descritiva
- **Média**: soma ÷ quantidade. **Média ponderada**: Σ(valor · peso) ÷ Σ pesos.
- **Mediana**: valor central do rol **ordenado** (com n par, média dos dois centrais).
- **Moda**: valor mais frequente (pode haver mais de uma ou nenhuma).
- **Amplitude**: maior − menor.
- **Quartis** (linhas gerais): Q1, Q2 = mediana e Q3 dividem o rol em quatro partes; amplitude interquartil = Q3 − Q1.

\`\`\`text
Variância populacional:  σ² = Σ(xi − μ)² / N
Variância amostral:      s² = Σ(xi − x̄)² / (n − 1)
Desvio-padrão = raiz quadrada da variância
\`\`\`

| | População | Amostra |
| --- | --- | --- |
| Média | μ | x̄ |
| Divisor da variância | **N** | **n − 1** |
| Símbolos | σ², σ | s², s |
| Quando usar | todos os elementos de interesse | parte usada para estimar o todo |

**Exemplo resolvido 6.** Dados 3, 5, 5, 6, 11.
1. Média = 30/5 = 6; mediana = 5; moda = 5; amplitude = 11 − 3 = 8.
2. Desvios ao quadrado: 9, 1, 1, 0, 25 → soma 36.
3. Variância populacional = 36/5 = 7,2; amostral = 36/4 = 9 e s = 3.

| Transformação em todos os dados | Média, mediana, moda | Amplitude e desvio-padrão | Variância |
| --- | --- | --- | --- |
| Somar k | somam k | não mudam | não muda |
| Multiplicar por k | multiplicam por k | multiplicam por k | multiplica por k² |

> **⚠️ Pegadinha:** somar uma constante a todos os salários **não altera** o desvio-padrão. E a média é sensível a valores extremos; a mediana não.

#### 4. Argumentação e diagramas lógicos
| Proposição | Diagrama | Negação |
| --- | --- | --- |
| Todo A é B | A dentro de B | Algum A não é B |
| Nenhum A é B | A e B disjuntos | Algum A é B |
| Algum A é B | A e B com interseção não vazia | Nenhum A é B |
| Algum A não é B | parte de A fora de B | Todo A é B |

Um argumento é **válido** quando é impossível as premissas serem verdadeiras e a conclusão falsa. Validade é questão de **forma**, não de conteúdo: um argumento válido pode ter conclusão falsa (se alguma premissa for falsa), e um argumento inválido pode ter conclusão verdadeira por acaso.

Método: desenhe as premissas de todos os modos possíveis; a conclusão só é necessária se valer em **todos** os desenhos.
- "Todo A é B" e "Todo B é C" → Todo A é C (válido).
- "Todo A é B" e "Nenhum B é C" → Nenhum A é C (válido).
- "Todo A é B" e "Algum B é C" → **nada se conclui** sobre A e C (a interseção pode ficar fora de A).

> **⚠️ Pegadinha:** de "Todo A é B" não se conclui "Todo B é A". E "Algum A não é B" não implica "Algum B não é A".

#### Revisão relâmpago
- Ordem importa: arranjo; não importa: combinação; mesa redonda: (n − 1)!.
- Letras repetidas: divida pelos fatoriais das repetições; letras juntas: bloco vezes ordens internas.
- "Pelo menos um": 1 − P(nenhum). Independentes: multiplique.
- Condicional: restrinja o universo ao que foi observado.
- Somar constante não muda dispersão; multiplicar por k multiplica o desvio por k.
- População divide por N; amostra divide por n − 1.
- Válido é forma; verdadeiro é conteúdo.
        `,
      },
    ],
  });

  tjpbQuestoes.push(
    // ===================================================================
    // tj-rlm-financeira
    tq(
      RLM,
      "Juros compostos",
      "Um servidor aplicou R$ 20.000,00 a juros compostos, à taxa de 10% ao mês, durante 3 meses, sem retiradas. Use 1,1³ = 1,331. Os juros obtidos ao final do período foram de",
      ["R$ 6.000,00", "R$ 6.300,00", "R$ 6.620,00", "R$ 6.930,00", "R$ 26.620,00"],
      2,
      "Montante: M = 20.000 · 1,1³ = 20.000 · 1,331 = R$ 26.620,00; juros J = 26.620 − 20.000 = R$ 6.620,00. R$ 6.000,00 seria o resultado em juros simples (20.000 · 0,10 · 3), e R$ 26.620,00 é o montante, não os juros.",
      "tj-rlm-financeira",
    ),
    tq(
      RLM,
      "Porcentagem encadeada",
      "O valor de um contrato de manutenção de sistemas foi reajustado em 20% no primeiro ano e em 15% no segundo. No terceiro ano, após renegociação, sofreu redução de 10%. Em relação ao valor inicial, o valor ao final do terceiro ano é",
      ["24,2% maior", "25,0% maior", "23,0% maior", "28,0% maior", "38,0% maior"],
      0,
      "Variações sucessivas se multiplicam: 1,20 · 1,15 · 0,90 = 1,38 · 0,90 = 1,242, isto é, 24,2% maior. Somar 20 + 15 − 10 dá o distrator de 25%; 38% ignora a redução; 28% subtrai 10 pontos percentuais em vez de aplicar o fator 0,90.",
      "tj-rlm-financeira",
    ),
    tq(
      RLM,
      "Regra de três composta",
      "Em uma central de digitalização, 6 servidores, trabalhando 8 horas por dia, analisam 480 processos em 10 dias. Mantido o mesmo ritmo individual de trabalho, 9 servidores, trabalhando 5 horas por dia, analisarão 720 processos em",
      ["12 dias", "14 dias", "15 dias", "16 dias", "18 dias"],
      3,
      "Compare cada grandeza com os dias: processos é direta (720/480), servidores é inversa (6/9) e horas por dia é inversa (8/5). Dias = 10 · 1,5 · (6/9) · (8/5) = 10 · 1,5 · 0,666... · 1,6 = 16.",
      "tj-rlm-financeira",
    ),
    tq(
      RLM,
      "Taxa equivalente",
      "Uma aplicação financeira rende 44% ao ano, no regime de juros compostos. A taxa semestral equivalente a essa taxa anual é de",
      ["18%", "20%", "21%", "22%", "24%"],
      1,
      "Em juros compostos, (1 + i)² = 1,44, logo 1 + i = √1,44 = 1,2 e i = 20% ao semestre. A alternativa 22% é a taxa proporcional (44% ÷ 2), válida apenas em juros simples.",
      "tj-rlm-financeira",
    ),
    tq(
      RLM,
      "Conjuntos numéricos",
      "Sobre os conjuntos numéricos, assinale a afirmativa correta.",
      [
        "A soma de dois números irracionais é sempre um número irracional.",
        "Todo número com infinitas casas decimais é irracional.",
        "O conjunto dos números inteiros está contido no dos naturais.",
        "O produto de um número racional por um irracional é sempre irracional.",
        "O número 0,999... é racional e igual a 1.",
      ],
      4,
      "0,999... tem fração geratriz 9/9 = 1, logo é racional e igual a 1. A soma de irracionais pode ser racional: (1 + √2) + (1 − √2) = 2. Dízimas periódicas têm infinitas casas e são racionais. É ℕ ⊂ ℤ, e não o contrário. E 0 · √2 = 0 é racional, o que derruba o \"sempre\" da alternativa sobre o produto.",
      "tj-rlm-financeira",
    ),
    tq(
      RLM,
      "MDC",
      "Um cartório precisa organizar 84 processos de família, 126 cíveis e 210 criminais em lotes, todos com a mesma quantidade de processos, sem misturar matérias em um mesmo lote e usando o maior tamanho de lote possível. O número total de lotes formados será",
      ["10", "12", "14", "21", "42"],
      0,
      "O maior lote que divide 84, 126 e 210 sem sobra é o MDC: 84 = 2²·3·7, 126 = 2·3²·7 e 210 = 2·3·5·7, logo MDC = 2·3·7 = 42. São 84/42 + 126/42 + 210/42 = 2 + 3 + 5 = 10 lotes. O valor 42 é o tamanho do lote, não a quantidade.",
      "tj-rlm-financeira",
    ),
    tq(
      RLM,
      "Juros simples",
      "Um capital de R$ 12.000,00 foi aplicado a juros simples, à taxa de 18% ao ano, durante 5 meses. Os juros produzidos nesse período foram de",
      ["R$ 720,00", "R$ 810,00", "R$ 900,00", "R$ 1.080,00", "R$ 10.800,00"],
      2,
      "Em juros simples a taxa é proporcional: 18% ao ano = 1,5% ao mês. J = 12.000 · 0,015 · 5 = R$ 900,00. R$ 1.080,00 corresponde a 6 meses e R$ 10.800,00 resulta de multiplicar a taxa anual por 5, misturando as unidades.",
      "tj-rlm-financeira",
    ),

    // ===================================================================
    // tj-rlm-algebra
    tq(
      RLM,
      "Sistemas lineares",
      "Para equipar uma sala, um tribunal comprou 3 monitores e 2 teclados por R$ 2.450,00. Em outra compra, com os mesmos preços unitários, adquiriu 2 monitores e 5 teclados por R$ 2.000,00. O preço de um monitor somado ao de um teclado é",
      ["R$ 800,00", "R$ 815,00", "R$ 825,00", "R$ 840,00", "R$ 850,00"],
      4,
      "Sistema: 3m + 2t = 2.450 e 2m + 5t = 2.000. Multiplicando a 1ª por 5 e a 2ª por 2: 15m + 10t = 12.250 e 4m + 10t = 4.000; subtraindo, 11m = 8.250, m = 750. Então 2t = 2.450 − 2.250 = 200, t = 100, e m + t = R$ 850,00.",
      "tj-rlm-algebra",
    ),
    tq(
      RLM,
      "Sistemas lineares",
      "Três varas receberam, juntas, 120 processos novos em uma semana. A 1ª vara recebeu 10 processos a mais que a 2ª, e a 3ª recebeu 10 processos a menos que o dobro do que recebeu a 2ª. O número de processos recebidos pela 3ª vara foi",
      ["40", "50", "55", "60", "70"],
      1,
      "Sejam x, y e z as quantidades: x + y + z = 120, x = y + 10 e z = 2y − 10. Substituindo: (y + 10) + y + (2y − 10) = 120, logo 4y = 120 e y = 30. Assim x = 40 e z = 2·30 − 10 = 50 (conferência: 40 + 30 + 50 = 120).",
      "tj-rlm-algebra",
    ),
    tq(
      RLM,
      "Função quadrática",
      "O lucro mensal L, em milhares de reais, de uma lanchonete que atende o fórum é dado por L(x) = −x² + 40x − 300, em que x é o número de centenas de refeições vendidas no mês. O lucro mensal máximo, em milhares de reais, é",
      ["20", "50", "80", "100", "400"],
      3,
      "Como a < 0, o máximo está no vértice: xv = −40/(2·(−1)) = 20 e L(20) = −400 + 800 − 300 = 100. O valor 20 é a abscissa do vértice (quantidade que maximiza), não o lucro; 400 resulta de esquecer o termo −300.",
      "tj-rlm-algebra",
    ),
    tq(
      RLM,
      "Progressão aritmética",
      "No primeiro dia de um mutirão, uma equipe analisou 12 processos e, a cada dia seguinte, analisou 3 processos a mais que no dia anterior. Ao final do 20º dia, o total de processos analisados no mutirão foi",
      ["780", "810", "840", "870", "1.380"],
      1,
      "PA com a1 = 12 e r = 3: a20 = 12 + 19·3 = 69. Soma: S20 = (12 + 69)·20/2 = 81·10 = 810. Quem usa a20 = 12 + 20·3 = 72 chega a 840; 1.380 é 69 · 20, sem dividir por 2.",
      "tj-rlm-algebra",
    ),
    tq(
      RLM,
      "Progressão geométrica",
      "Em um projeto de digitalização, foram digitalizadas 600 páginas na primeira semana e, em cada semana seguinte, 3/4 do número de páginas digitalizadas na semana anterior. Mantido indefinidamente esse padrão, o número total de páginas digitalizadas se aproxima cada vez mais de",
      ["1.800", "2.000", "2.400", "3.000", "4.800"],
      2,
      "As quantidades semanais formam uma PG infinita com a1 = 600 e q = 3/4 (|q| < 1). A soma tende a S = a1/(1 − q) = 600/(1/4) = 2.400 páginas.",
      "tj-rlm-algebra",
    ),
    tq(
      RLM,
      "Determinantes",
      "Seja A uma matriz quadrada de ordem 3 cujo determinante vale 5. Sendo Aᵀ a transposta de A, o determinante da matriz 2·Aᵀ é",
      ["40", "10", "20", "80", "125"],
      0,
      "A transposta tem o mesmo determinante: det(Aᵀ) = 5. Multiplicar uma matriz de ordem 3 por 2 multiplica as 3 linhas, logo o determinante fica multiplicado por 2³ = 8: 8 · 5 = 40. A alternativa 10 multiplica por 2 uma única vez.",
      "tj-rlm-algebra",
    ),
    tq(
      RLM,
      "Sequências",
      "Considere a sequência 3, 7, 15, 31, 63, ..., em que cada termo, a partir do segundo, é obtido do anterior sempre pela mesma regra. O 10º termo dessa sequência é",
      ["1.023", "1.025", "2.045", "2.049", "2.047"],
      4,
      "Cada termo é o dobro do anterior mais 1 (3 → 7 → 15 → ...), o que dá o termo geral 2 elevado a (n + 1), menos 1. Para n = 10: 2.048 − 1 = 2.047. Continuando a sequência: 127, 255, 511, 1.023 (9º termo) e 2.047 (10º termo).",
      "tj-rlm-algebra",
    ),

    // ===================================================================
    // tj-rlm-dados
    tq(
      RLM,
      "Combinação",
      "Uma comissão de 3 membros será formada a partir de um grupo de 6 analistas e 4 técnicos judiciários. O número de comissões distintas que possuem pelo menos um técnico é",
      ["96", "100", "120", "144", "720"],
      1,
      "Use o complementar: total C(10,3) = 120 menos as comissões sem técnico, C(6,3) = 20, resulta 100. O valor 144 (4 · C(9,2)) conta a mesma comissão várias vezes, e 720 é o arranjo A(10,3), que trata a ordem como relevante.",
      "tj-rlm-dados",
    ),
    tq(
      RLM,
      "Média, mediana e moda",
      "Os tempos de tramitação, em dias, de nove processos de uma vara foram: 10, 12, 12, 14, 15, 17, 18, 22 e 60. A média, a mediana e a moda desses tempos são, respectivamente,",
      ["20, 14 e 12", "18, 15 e 12", "20, 15 e 12", "20, 15 e 13", "15, 20 e 12"],
      2,
      "Soma = 180, logo média = 180/9 = 20. Com os 9 valores já ordenados, a mediana é o 5º, 15; a moda é 12, único valor repetido. A média supera a mediana por causa do valor extremo 60.",
      "tj-rlm-dados",
    ),
    tq(
      RLM,
      "Permutação com repetição",
      "Considere os anagramas da palavra PROCESSO. Quantos deles apresentam as duas letras S juntas?",
      ["630", "1.260", "5.040", "2.520", "10.080"],
      3,
      "Tratando SS como um bloco, permutam-se 7 elementos (SS, P, R, O, C, E, O), com a letra O repetida duas vezes: 7!/2! = 5.040/2 = 2.520. O bloco SS não tem ordem interna distinta. 5.040 esquece a repetição do O e 10.080 = 8!/(2!·2!) é o total de anagramas, sem a restrição.",
      "tj-rlm-dados",
    ),
    tq(
      RLM,
      "Permutação circular",
      "Seis desembargadores sentarão em torno de uma mesa redonda para uma sessão. Se dois deles, Ana e Bruno, devem ficar lado a lado, o número de disposições distintas é",
      ["48", "24", "96", "120", "240"],
      0,
      "Junte Ana e Bruno em um bloco: são 5 elementos em círculo, (5 − 1)! = 24 disposições, e o bloco tem 2 ordens internas: 24 · 2 = 48. O valor 24 esquece a troca entre Ana e Bruno; 120 = 5! é a mesa sem restrição; 240 trata a mesa como fila.",
      "tj-rlm-dados",
    ),
    tq(
      RLM,
      "Probabilidade condicional",
      "Em um tribunal, 60% dos processos em tramitação são eletrônicos e 40% são físicos. Entre os eletrônicos, 25% têm prioridade legal; entre os físicos, 10% têm prioridade legal. Sorteia-se um processo ao acaso e verifica-se que ele tem prioridade legal. A probabilidade de esse processo ser eletrônico é",
      ["3/20", "1/4", "3/5", "4/19", "15/19"],
      4,
      "P(eletrônico e prioritário) = 0,60 · 0,25 = 0,15; P(físico e prioritário) = 0,40 · 0,10 = 0,04; P(prioritário) = 0,19. Logo P(eletrônico | prioritário) = 0,15/0,19 = 15/19. A alternativa 3/20 é a interseção (não condicionada) e 4/19 é a probabilidade de ser físico.",
      "tj-rlm-dados",
    ),
    tq(
      RLM,
      "Probabilidade de pelo menos um",
      "Três sistemas de um tribunal funcionam de forma independente. As probabilidades de cada um apresentar falha em determinado dia são 10%, 20% e 50%. A probabilidade de que pelo menos um deles falhe nesse dia é",
      ["1%", "36%", "50%", "64%", "80%"],
      3,
      "P(nenhum falha) = 0,9 · 0,8 · 0,5 = 0,36; logo P(pelo menos uma falha) = 1 − 0,36 = 0,64 = 64%. Somar as probabilidades (80%) ignora as falhas simultâneas; 1% é a chance de os três falharem; 36% é a de nenhum falhar.",
      "tj-rlm-dados",
    ),
    tq(
      RLM,
      "Desvio-padrão",
      "Os prazos, em dias, de oito diligências concluídas em um mês foram 2, 4, 4, 4, 5, 5, 7 e 9, e esses oito valores constituem toda a população de interesse. Se cada prazo for multiplicado por 3 e, em seguida, acrescido de 4 dias, o novo desvio-padrão populacional será",
      ["6", "aproximadamente 6,4", "10", "2", "36"],
      0,
      "Média = 40/8 = 5; desvios ao quadrado: 9, 1, 1, 1, 0, 0, 4, 16, soma 32; variância populacional = 32/8 = 4 e desvio = 2. Somar 4 não altera a dispersão e multiplicar por 3 triplica o desvio: 3 · 2 = 6. Aproximadamente 6,4 vem do desvio amostral (divisor 7); 10 soma 4 ao desvio; 36 é a nova variância.",
      "tj-rlm-dados",
    ),
    tq(
      RLM,
      "Silogismos",
      "Considere as premissas: \"Todo processo eletrônico é digitalizado\" e \"Nenhum processo arquivado é digitalizado\". A partir delas, conclui-se necessariamente que",
      [
        "algum processo digitalizado é arquivado.",
        "todo processo digitalizado é eletrônico.",
        "algum processo arquivado é eletrônico.",
        "nenhum processo digitalizado é eletrônico.",
        "nenhum processo eletrônico é arquivado.",
      ],
      4,
      "No diagrama, o conjunto dos eletrônicos fica dentro do dos digitalizados, e o dos arquivados fica totalmente fora dos digitalizados; logo eletrônicos e arquivados não têm elemento comum: nenhum processo eletrônico é arquivado. \"Todo digitalizado é eletrônico\" é a recíproca, que não decorre das premissas; \"nenhum digitalizado é eletrônico\" contradiz a primeira premissa; as alternativas com interseção entre arquivados e digitalizados (ou eletrônicos) contradizem a segunda.",
      "tj-rlm-dados",
    ),
  );
}
