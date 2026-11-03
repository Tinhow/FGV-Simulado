/* TJPB 2026/2027 · Eixo 3 — Bancos de Dados.
   Teoria + questões INÉDITAS no estilo FGV (não são de prova oficial).
   As consultas das questões de SQL foram executadas em SQLite sobre os
   dados de ESQUEMA_PROCESSOS antes de fixar o gabarito. */
{
  const ESQUEMA_PROCESSOS = `VARA (id, nome, comarca)
1 | 1ª Vara Cível | João Pessoa
2 | 2ª Vara Cível | João Pessoa
3 | Vara Única | Sousa
4 | Vara de Execuções Fiscais | Campina Grande

PROCESSO (id, numero, classe, vara_id, valor_causa)
1 | 0001/2026 | Procedimento Comum | 1 | 50000
2 | 0002/2026 | Execução Fiscal | 4 | 12000
3 | 0003/2026 | Procedimento Comum | 1 | NULL
4 | 0004/2026 | Mandado de Segurança | 2 | 8000
5 | 0005/2026 | Procedimento Comum | 2 | 30000
6 | 0006/2026 | Execução Fiscal | 4 | 12000
7 | 0007/2026 | Procedimento Comum | NULL | 20000
8 | 0008/2026 | Procedimento Comum | 1 | 50000

PROCESSO.vara_id referencia VARA.id (NULL = processo ainda não distribuído).`;

  tjpbModulos.push({
    id: "tj-bd",
    title: "Bancos de Dados",
    icon: "🗄️",
    description:
      "SQL lido na ordem de execução, transações e isolamento, modelagem ER e normalização, e NoSQL com CAP — tudo com o esquema de um tribunal como fio condutor.",
    sections: [
      {
        id: "tj-sql",
        title: "SQL: consultas, junções, NULL e recursos avançados",
        content: `
### O que a FGV cobra aqui
A FGV costuma dar um esquema pequeno, com meia dúzia de linhas de dados, e perguntar **o que a consulta devolve**: quantas linhas, qual valor agregado, qual grupo sobra. As armadilhas se repetem: NULL em agregações e comparações, WHERE x HAVING, LEFT JOIN que vira INNER sem querer, \`NOT IN\` com NULL na subconsulta, UNION que elimina duplicatas e RANK x DENSE_RANK em caso de empate. Rastreie a consulta **na ordem lógica de execução**, não na ordem em que ela está escrita.

#### Esquema do tribunal usado nos exemplos

\`\`\`
VARA        (id, nome, comarca)
PROCESSO    (id, numero, classe, vara_id, valor_causa)   -- vara_id referencia VARA
MAGISTRADO  (id, nome, vara_id, substituto_id)           -- substituto_id referencia MAGISTRADO
MOVIMENTACAO (id, processo_id, data, descricao)          -- processo_id referencia PROCESSO
\`\`\`

| id | numero | classe | vara_id | valor_causa |
| --- | --- | --- | --- | --- |
| 1 | 0001/2026 | Procedimento Comum | 1 | 50000 |
| 2 | 0002/2026 | Execução Fiscal | 4 | 12000 |
| 3 | 0003/2026 | Procedimento Comum | 1 | NULL |
| 4 | 0004/2026 | Mandado de Segurança | 2 | 8000 |
| 5 | 0005/2026 | Procedimento Comum | 2 | 30000 |
| 6 | 0006/2026 | Execução Fiscal | 4 | 12000 |
| 7 | 0007/2026 | Procedimento Comum | NULL | 20000 |
| 8 | 0008/2026 | Procedimento Comum | 1 | 50000 |

VARA tem 4 linhas: 1 (1ª Vara Cível), 2 (2ª Vara Cível), 3 (Vara Única de Sousa, **sem processos**) e 4 (Vara de Execuções Fiscais). O processo 7 ainda aguarda distribuição (\`vara_id\` nulo).

#### Sublinguagens
| Grupo | Comandos | Atua sobre |
| --- | --- | --- |
| **DDL** | CREATE, ALTER, DROP, TRUNCATE | Estrutura (esquema) |
| **DML** | SELECT, INSERT, UPDATE, DELETE, MERGE | Dados |
| **DCL** | GRANT, REVOKE | Permissões |
| **TCL** | COMMIT, ROLLBACK, SAVEPOINT | Transações |

> **⚠️ Pegadinha:** TRUNCATE é **DDL**: remove todas as linhas, não aceita WHERE e, em vários SGBDs, faz commit implícito. DELETE é DML, aceita WHERE e pode ser desfeito com ROLLBACK. Alguns autores separam o SELECT numa "DQL" — se a alternativa disser isso, não está errada.

#### Ordem lógica de execução
**FROM/JOIN → WHERE → GROUP BY → HAVING → SELECT (inclusive funções de janela) → DISTINCT → ORDER BY → LIMIT/FETCH.** Por isso o alias criado no SELECT **não** existe no WHERE, mas pode ser usado no ORDER BY; função de agregação **não** pode aparecer no WHERE; e toda coluna do SELECT que não está agregada precisa estar no GROUP BY.

| Critério | **WHERE** | **HAVING** |
| --- | --- | --- |
| Filtra | Linhas, antes do agrupamento | Grupos, depois do agrupamento |
| Aceita agregação | Não | Sim |
| Exemplo | \`classe = 'Execução Fiscal'\` | \`COUNT(*) >= 2\` |

\`\`\`
SELECT classe, COUNT(*) AS qtd, SUM(valor_causa) AS total
FROM PROCESSO
GROUP BY classe
HAVING COUNT(*) >= 2;
-- Resultado: (Procedimento Comum, 5, 150000) e (Execução Fiscal, 2, 24000)
-- Mandado de Segurança tem 1 processo só e é eliminado pelo HAVING.
\`\`\`

#### NULL e a lógica de três valores
Qualquer comparação com NULL (\`=\`, \`<>\`, \`>\`) dá **UNKNOWN**, e o WHERE só deixa passar o que for TRUE. Para testar ausência de valor use \`IS NULL\` / \`IS NOT NULL\`.

| Expressão sobre PROCESSO | Linhas |
| --- | --- |
| \`WHERE valor_causa = NULL\` | 0 (sempre UNKNOWN); com \`IS NULL\`, 1 |
| \`WHERE valor_causa > 10000\` | 6 |
| \`WHERE NOT (valor_causa > 10000)\` | 1 — o processo 3 não aparece em nenhuma das duas |

Agregações **ignoram NULL**, exceto \`COUNT(*)\`, que conta linhas:

\`\`\`
SELECT COUNT(*), COUNT(valor_causa), COUNT(DISTINCT vara_id), AVG(valor_causa)
FROM PROCESSO;
-- 8, 7, 3 e 26000   (AVG = 182000 / 7, e não / 8)
\`\`\`

> **⚠️ Pegadinha do NOT IN:** \`WHERE id NOT IN (SELECT vara_id FROM PROCESSO)\` deveria listar a Vara Única, mas retorna **zero linhas**: como a subconsulta contém um NULL, \`3 <> NULL\` é UNKNOWN e contamina o AND implícito. \`NOT EXISTS\` e \`LEFT JOIN ... IS NULL\` não sofrem disso.

#### Junções
| Tipo | O que devolve |
| --- | --- |
| INNER JOIN | Só os pares que satisfazem o ON |
| LEFT [OUTER] JOIN | Todas as linhas da esquerda; sem par, colunas da direita vêm NULL |
| RIGHT [OUTER] JOIN | Espelho do LEFT |
| FULL [OUTER] JOIN | Tudo dos dois lados, completando com NULL |
| CROSS JOIN | Produto cartesiano: 4 varas x 8 processos = 32 linhas |
| Self join | A tabela com ela mesma, via aliases: \`MAGISTRADO m JOIN MAGISTRADO s ON s.id = m.substituto_id\` |

\`\`\`
SELECT v.nome, COUNT(p.id) AS qtd
FROM VARA v LEFT JOIN PROCESSO p ON p.vara_id = v.id
GROUP BY v.nome;
-- 1ª Vara Cível: 3; 2ª Vara Cível: 2; Vara Única: 0; Vara de Execuções Fiscais: 2
-- Com COUNT(*) a Vara Única apareceria com 1. Já o INNER JOIN devolve 7 linhas (somem o processo 7 e a Vara Única).
\`\`\`

> **⚠️ Pegadinha:** num LEFT JOIN, um filtro sobre a tabela da direita colocado no **WHERE** (\`WHERE p.classe = 'Execução Fiscal'\`) descarta as linhas completadas com NULL e transforma o resultado num INNER JOIN. Para preservar as varas sem par, o filtro vai no **ON**.

#### Subconsultas: IN x EXISTS
- **Não correlacionada** roda uma vez (\`WHERE vara_id IN (SELECT id FROM VARA WHERE comarca = 'Sousa')\`); **correlacionada** referencia a consulta externa e é avaliada, logicamente, para cada linha dela.
- \`EXISTS\` só testa se há ao menos uma linha (o que vai no SELECT interno é irrelevante); \`IN\` compara valores. \`WHERE NOT EXISTS (SELECT 1 FROM PROCESSO p WHERE p.vara_id = v.id)\` devolve corretamente a Vara Única.

#### Operadores de conjunto e DISTINCT
| Operador | Efeito | Duplicatas |
| --- | --- | --- |
| UNION | Une os resultados | **Elimina** |
| UNION ALL | Une os resultados | Mantém (e é mais barato) |
| INTERSECT | Linhas presentes nos dois | Elimina |
| EXCEPT (MINUS no Oracle) | Do primeiro, menos as do segundo | Elimina |

As consultas precisam ter o mesmo número de colunas, com tipos compatíveis. Exemplo: as varas com Execução Fiscal ({4, 4}) unidas às varas com causa de 30000 ou mais ({1, 2, 1}) dão 3 linhas com UNION e 5 com UNION ALL. \`DISTINCT\` atua sobre a linha inteira do SELECT, não sobre uma coluna isolada.

#### Views, índices e constraints
- **View**: consulta armazenada com nome; não guarda dados (a view materializada guarda e precisa ser atualizada). Serve para simplificar e para restringir acesso a colunas e linhas.
- **Índice B-tree**: árvore balanceada que acelera igualdade, faixa (\`BETWEEN\`, \`>\`), ORDER BY e junções. Atrapalha em tabelas com muita escrita (todo INSERT/UPDATE mantém o índice), em colunas de baixa seletividade e quando a consulta aplica função sobre a coluna (\`UPPER(nome)\`) ou usa \`LIKE '%texto'\`.
- **Constraints**: PRIMARY KEY (única e não nula), UNIQUE (em geral admite NULL; o SQL Server aceita um só), NOT NULL, CHECK (\`valor_causa >= 0\`) e FOREIGN KEY, com ações \`ON DELETE CASCADE\`, \`SET NULL\`, \`RESTRICT\` / \`NO ACTION\`.
- **DCL**: \`GRANT SELECT, UPDATE ON PROCESSO TO analista WITH GRANT OPTION;\` concede e permite repassar; \`REVOKE UPDATE ON PROCESSO FROM analista CASCADE;\` retira também o que foi repassado.

\`\`\`
CREATE TABLE MOVIMENTACAO (
  id          INTEGER PRIMARY KEY,
  processo_id INTEGER NOT NULL REFERENCES PROCESSO (id) ON DELETE CASCADE,
  data        DATE NOT NULL,  descricao VARCHAR(200) CHECK (descricao <> '')
);
-- Excluir o processo 1 apaga, junto, todas as movimentações dele.
\`\`\`

#### Funções de janela e CTE
Funções de janela calculam sobre um conjunto de linhas **sem colapsar** o resultado, como o GROUP BY faria. \`PARTITION BY\` reinicia a contagem em cada grupo; \`ORDER BY\` dentro do OVER define a ordem do ranking.

| valor_causa | ROW_NUMBER | RANK | DENSE_RANK |
| --- | --- | --- | --- |
| 50000 | 1 | 1 | 1 |
| 50000 | 2 | 1 | 1 |
| 30000 | 3 | 3 | 2 |

ROW_NUMBER nunca repete; RANK repete no empate e **pula** posições; DENSE_RANK repete e **não pula**. Como o WHERE roda antes das funções de janela, filtrar pelo ranking exige subconsulta ou CTE:

\`\`\`
WITH ranking AS (
  SELECT numero, vara_id,
         RANK() OVER (PARTITION BY vara_id ORDER BY valor_causa DESC) AS pos
  FROM PROCESSO
  WHERE valor_causa IS NOT NULL   -- no PostgreSQL e no Oracle, NULL vem primeiro em DESC
)
SELECT numero, vara_id FROM ranking WHERE pos = 1;
\`\`\`

#### Revisão relâmpago
- Ordem lógica: FROM, WHERE, GROUP BY, HAVING, SELECT, DISTINCT, ORDER BY.
- WHERE filtra linhas e não aceita agregação; HAVING filtra grupos.
- \`COUNT(*)\` conta linhas; \`COUNT(coluna)\`, SUM e AVG ignoram NULL.
- Comparar com NULL dá UNKNOWN; \`NOT IN\` com NULL na lista retorna vazio.
- Filtro da tabela da direita no WHERE anula o LEFT JOIN.
- UNION elimina duplicatas; UNION ALL não.
- RANK pula posições após empate; DENSE_RANK não; ROW_NUMBER nunca empata.
`,
      },
      {
        id: "tj-transacoes",
        title: "Transações, ACID e isolamento",
        content: `
### O que a FGV cobra aqui
O tema aparece de dois jeitos: definições das propriedades **ACID** (com troca proposital entre elas) e um **escalonamento** de duas transações, T1 e T2, em que é preciso nomear a anomalia e o nível de isolamento que a evita. Completam o pacote: bloqueios compartilhado e exclusivo, two-phase locking, deadlock, MVCC e o papel do log na recuperação. Decore a tabela clássica de níveis x anomalias e saiba que ela é o **mínimo exigido pelo padrão** — cada SGBD pode proteger mais.

#### ACID
| Propriedade | Garante que... | Quem assegura |
| --- | --- | --- |
| **Atomicidade** | a transação ocorre inteira ou não ocorre ("tudo ou nada") | Log (UNDO), ROLLBACK |
| **Consistência** | o banco sai de um estado válido para outro, respeitando PK, FK, CHECK e regras de negócio | Constraints, triggers e a lógica da aplicação |
| **Isolamento** | transações concorrentes não enxergam os estados intermediários umas das outras | Bloqueios, MVCC, nível de isolamento |
| **Durabilidade** | o que recebeu COMMIT sobrevive a quedas de energia e falhas | Log gravado em disco (WAL), REDO |

> **⚠️ Pegadinha:** a FGV troca as definições. "Impedir que um processo fique ligado a uma vara inexistente" é **consistência**, não isolamento. "Movimentação confirmada não se perde após queda do servidor" é **durabilidade**, não atomicidade.

#### COMMIT, ROLLBACK e SAVEPOINT

\`\`\`
BEGIN;
UPDATE PROCESSO SET vara_id = 2 WHERE id = 7;            -- distribui o processo
SAVEPOINT distribuido;
INSERT INTO MOVIMENTACAO (processo_id, data, descricao)
  VALUES (7, CURRENT_DATE, 'Distribuído por sorteio');
ROLLBACK TO SAVEPOINT distribuido;                       -- desfaz só o INSERT
COMMIT;                                                  -- o UPDATE é gravado
\`\`\`

\`ROLLBACK TO SAVEPOINT\` desfaz o trabalho posterior ao ponto de salvamento **sem encerrar** a transação; o \`ROLLBACK\` simples desfaz tudo e encerra.

> **⚠️ Pegadinha:** em Oracle e MySQL, comandos DDL (CREATE, ALTER, DROP, TRUNCATE) fazem **commit implícito** do que estava pendente. O PostgreSQL, ao contrário, aceita DDL dentro da transação e permite desfazê-lo.

#### As anomalias de concorrência
| Anomalia | O que acontece | Exemplo no tribunal |
| --- | --- | --- |
| **Leitura suja** (dirty read) | T2 lê um dado que T1 alterou e **ainda não confirmou**; T1 faz ROLLBACK | T2 emite certidão com saldo de depósito judicial que nunca existiu |
| **Leitura não repetível** | T1 lê a mesma linha duas vezes e obtém valores diferentes, porque T2 a **alterou** e confirmou no meio | O valor da causa muda entre duas leituras do mesmo relatório |
| **Leitura fantasma** (phantom) | T1 repete uma consulta com o mesmo filtro e surgem ou somem **linhas**, porque T2 inseriu ou excluiu | A contagem de processos da vara muda entre o início e o fim do fechamento mensal |
| **Atualização perdida** (lost update) | T1 e T2 leem o mesmo valor, ambas calculam e gravam; a última sobrescreve a primeira | Dois servidores somam custas sobre o mesmo saldo e uma soma desaparece |

> **⚠️ Diferença que mais cai:** não repetível = **a mesma linha mudou de valor** (UPDATE). Fantasma = **o conjunto de linhas mudou** (INSERT ou DELETE que satisfaz o WHERE).

#### Níveis de isolamento do SQL padrão

| Nível | Leitura suja | Não repetível | Fantasma |
| --- | --- | --- | --- |
| READ UNCOMMITTED | Possível | Possível | Possível |
| READ COMMITTED | **Evitada** | Possível | Possível |
| REPEATABLE READ | Evitada | **Evitada** | Possível |
| SERIALIZABLE | Evitada | Evitada | **Evitada** |

Quanto mais alto o nível, menos anomalias e **menos concorrência** (mais bloqueio, espera ou abortos por conflito). SERIALIZABLE garante que o resultado equivale a alguma execução em série das transações.

\`\`\`
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
\`\`\`

| SGBD | Nível padrão | Observação |
| --- | --- | --- |
| PostgreSQL | READ COMMITTED | READ UNCOMMITTED se comporta como READ COMMITTED; REPEATABLE READ usa snapshot e também impede fantasmas |
| SQL Server | READ COMMITTED | Com bloqueios por padrão; a opção RCSI troca por versões |
| Oracle | READ COMMITTED | Só oferece READ COMMITTED e SERIALIZABLE (este, na prática, snapshot) |
| MySQL (InnoDB) | **REPEATABLE READ** | Usa next-key locks nas leituras com bloqueio para conter fantasmas |

> **⚠️ Pegadinha:** a tabela indica o que cada nível **pode permitir** pelo padrão, não o que obrigatoriamente acontece. Dizer que "o PostgreSQL em REPEATABLE READ sempre exibe leitura fantasma" é falso. Também é falso dizer que o padrão de todos os SGBDs é SERIALIZABLE.

A atualização perdida não aparece na tabela original do padrão, mas é evitada com \`SELECT ... FOR UPDATE\` (bloqueio pessimista), com coluna de versão (bloqueio otimista) ou, em SGBDs com snapshot, pelo erro de serialização que aborta a segunda transação.

#### Bloqueios e two-phase locking (2PL)
| Pedido / Bloqueio existente | Compartilhado (S) | Exclusivo (X) |
| --- | --- | --- |
| **Compartilhado (S)**, leitura | Compatível | Espera |
| **Exclusivo (X)**, escrita | Espera | Espera |

- **2PL básico**: fase de **crescimento** (só adquire bloqueios) seguida da fase de **encolhimento** (só libera). Garante serializabilidade por conflito.
- **2PL estrito**: mantém os bloqueios **exclusivos** até o COMMIT ou ROLLBACK, o que evita leitura suja e rollback em cascata.
- **2PL rigoroso**: mantém **todos** os bloqueios até o fim.

> **⚠️ Pegadinha:** 2PL **não impede deadlock**. Ele garante serializabilidade; o deadlock continua possível e precisa ser tratado à parte.

#### Deadlock
T1 bloqueia o processo 10 e pede o processo 20; T2 bloqueou o 20 e pede o 10. Nenhuma avança.
- **Detecção**: o SGBD monta o grafo de espera (wait-for); um ciclo indica deadlock, e uma transação é escolhida como **vítima** e sofre ROLLBACK.
- **Prevenção**: ordenar sempre a aquisição de recursos, usar timeout ou esquemas por timestamp (*wait-die* e *wound-wait*).

#### MVCC e snapshot isolation
No controle por múltiplas versões, cada escrita cria uma **nova versão** da linha e cada leitura enxerga a versão adequada ao seu instante. Resultado: **leitores não bloqueiam escritores e escritores não bloqueiam leitores** (dois escritores na mesma linha ainda conflitam). É o modelo do PostgreSQL, do Oracle e do InnoDB.
- No **snapshot isolation**, a transação vê o banco como estava no seu início; leitura suja, não repetível e fantasma não ocorrem.
- Mesmo assim, ele **não é serializável**: admite a anomalia de **write skew** (duas transações leem o mesmo conjunto, gravam linhas diferentes e, juntas, violam uma regra, como "ao menos um juiz de plantão").

#### Log de transações, WAL e recuperação
- **WAL (write-ahead logging)**: o registro de log de uma alteração vai para armazenamento estável **antes** da página de dados correspondente; o COMMIT só é confirmado depois que o log do commit está em disco.
- Na recuperação após falha: **REDO** do que foi confirmado e não chegou às páginas de dados; **UNDO** do que não foi confirmado. O algoritmo ARIES organiza isso em análise, redo e undo.
- **Checkpoint** grava periodicamente as páginas alteradas e marca o log, reduzindo o trecho a ser reprocessado.
- O log também alimenta backup incremental, recuperação até um instante (*point-in-time*) e replicação.

#### Revisão relâmpago
- ACID: atomicidade = tudo ou nada; consistência = regras respeitadas; isolamento = concorrência invisível; durabilidade = commit sobrevive a falha.
- Leitura suja: dado não confirmado; não repetível: linha alterada; fantasma: linhas novas ou excluídas.
- READ COMMITTED impede só a leitura suja; REPEATABLE READ impede também a não repetível; SERIALIZABLE impede as três.
- Padrão do PostgreSQL, SQL Server e Oracle: READ COMMITTED; do MySQL InnoDB: REPEATABLE READ.
- S é compatível com S; X é incompatível com tudo.
- 2PL garante serializabilidade, não evita deadlock; o estrito evita rollback em cascata.
- MVCC: leitor não bloqueia escritor; snapshot isolation ainda permite write skew.
- WAL: log primeiro, dados depois; recuperação faz REDO dos confirmados e UNDO dos pendentes.
`,
      },
      {
        id: "tj-modelagem",
        title: "Modelagem conceitual, lógica e física",
        content: `
### O que a FGV cobra aqui
Três frentes: (1) **níveis de modelagem** e independência de dados; (2) **modelo ER** e seu mapeamento para tabelas, com foco em entidade fraca, relacionamento N:N e atributo multivalorado; (3) **normalização** a partir de uma relação com dependências funcionais dadas, perguntando em que forma normal ela está. A confusão preferida é entre **2FN** (dependência parcial) e **3FN** (dependência transitiva). Fecha o tema o modelo **dimensional** de Data Warehouse.

#### Níveis de modelagem
| Nível | Produto | Depende de | Exemplo no tribunal |
| --- | --- | --- | --- |
| **Conceitual** | Diagrama ER | Nada técnico; fala a língua do negócio | "Processo tramita em uma Vara e tem Partes" |
| **Lógico** | Tabelas, colunas, chaves, FKs | Do modelo de dados (relacional), não do SGBD | PROCESSO (id, numero, vara_id) |
| **Físico** | Scripts DDL, tipos, índices, partições, tablespaces | Do SGBD escolhido | \`VARCHAR2(25)\` no Oracle, índice em \`numero\` |

A arquitetura ANSI/SPARC separa três esquemas: **externo** (visões dos usuários), **conceitual** (estrutura lógica do banco inteiro) e **interno** (armazenamento).
- **Independência física**: mudar o esquema interno (criar índice, mover arquivo) sem alterar o conceitual nem as aplicações.
- **Independência lógica**: mudar o esquema conceitual (incluir coluna, dividir tabela) sem alterar os esquemas externos. É **mais difícil** de obter que a física.

#### Modelo Entidade-Relacionamento
- **Entidade forte**: existe por si e tem identificador próprio (PROCESSO, VARA).
- **Entidade fraca**: só existe ligada a uma entidade **proprietária** e é identificada pela chave dela mais um **discriminador** (chave parcial). Ex.: AUDIENCIA identificada por (processo, sequencial). Participa do relacionamento identificador com participação **total**.
- **Entidade associativa**: um relacionamento tratado como entidade, para poder se relacionar com outras (ex.: a participação de uma PARTE num PROCESSO, ligada ao ADVOGADO que a representa).

| Atributo | Definição | Exemplo |
| --- | --- | --- |
| Simples | Indivisível | cpf |
| Composto | Formado por partes | endereço (rua, número, cidade) |
| Multivalorado | Vários valores para a mesma instância | telefones da parte |
| Derivado | Calculado a partir de outro | idade, a partir da data de nascimento |
| Identificador | Distingue as instâncias | numero do processo |

**Cardinalidade** (máxima): 1:1, 1:N, N:N. **Participação** (mínima): **total** (toda instância participa; obrigatória, linha dupla no diagrama de Chen) ou **parcial** (opcional). Ex.: todo PROCESSO distribuído pertence a uma VARA (total do lado do processo), mas pode haver VARA sem processo (parcial).

**Especialização/generalização**: SERVIDOR especializado em ANALISTA e TECNICO. Classifica-se em **total x parcial** (todo servidor precisa ser de um subtipo?) e **disjunta x sobreposta** (pode ser de dois subtipos ao mesmo tempo?).

#### Mapeamento ER → relacional
| Elemento do ER | Vira |
| --- | --- |
| Entidade forte | Tabela com sua chave primária |
| Entidade fraca | Tabela cuja PK = PK da proprietária (como FK) + discriminador |
| 1:1 | FK em um dos lados, de preferência o de participação total, com UNIQUE |
| 1:N | FK no lado **N** |
| N:N | **Nova tabela** com as duas FKs, normalmente formando a PK; atributos do relacionamento ficam nela |
| Atributo multivalorado | **Nova tabela** (FK + valor) |
| Atributo composto | Uma coluna por componente |
| Atributo derivado | Em regra não é armazenado (calcula-se na consulta ou numa view) |
| Especialização | Tabela única com coluna de tipo, uma tabela por subtipo, ou superclasse + subclasses ligadas pela mesma PK |

\`\`\`
PROCESSO_PARTE (processo_id, parte_id, polo)      -- N:N com atributo do relacionamento
  PK (processo_id, parte_id)
  FK processo_id REFERENCES PROCESSO, FK parte_id REFERENCES PARTE
AUDIENCIA (processo_id, sequencial, data, sala)   -- entidade fraca
  PK (processo_id, sequencial)
\`\`\`

> **⚠️ Pegadinha:** criar colunas telefone1, telefone2, telefone3 para um atributo multivalorado não é mapeamento correto: limita a quantidade, gera NULLs e caracteriza grupo repetitivo.

#### Chaves
- **Superchave**: qualquer conjunto de atributos que identifica a linha.
- **Chave candidata**: superchave **mínima** (sem atributo sobrando). Pode haver várias.
- **Chave primária**: a candidata escolhida; as demais são chaves **alternativas** (implementadas com UNIQUE).
- **Chave estrangeira**: referencia a PK (ou UNIQUE) de outra tabela, garantindo integridade referencial.
- **Natural x surrogate**: natural vem do negócio (numero CNJ do processo); surrogate (substituta) é artificial, sem significado (id sequencial), estável e compacta.

#### Dependência funcional e normalização
\`X → Y\` (X determina Y): duas linhas com o mesmo X têm obrigatoriamente o mesmo Y. Ex.: \`cpf → nome\`.

| Forma normal | Exige | Viola quando... |
| --- | --- | --- |
| **1FN** | Valores atômicos, sem grupos repetitivos nem atributos multivalorados | Coluna "telefones" com "8399-1111, 8399-2222" |
| **2FN** | 1FN + nenhum atributo não chave depende de **parte** de uma chave candidata composta | \`numero_processo → classe\` numa tabela com PK (numero_processo, cpf_parte) |
| **3FN** | 2FN + nenhum atributo não chave depende de **outro atributo não chave** (sem dependência transitiva) | \`vara_id → nome_vara\` numa tabela de processos |
| **FNBC** | Todo **determinante** é superchave | Dependência em que um atributo não superchave determina parte da chave |
| **4FN** | FNBC + sem dependências multivaloradas não triviais | Magistrado com especialidades e com comarcas independentes na mesma tabela |

> **⚠️ 2FN x 3FN:** parcial = atributo depende de **pedaço da chave** (só ocorre com chave composta). Transitiva = atributo depende de **atributo não chave**. Tabela em 1FN cujas chaves candidatas são todas simples já está em 2FN, mas pode violar a 3FN.

Exemplo: \`PROCESSO_PARTE (numero, cpf, nome_parte, polo, classe, vara_id, nome_vara)\` com PK (numero, cpf).
1. Viola a 2FN: \`cpf → nome_parte\` e \`numero → classe, vara_id\` são parciais.
2. Decompondo: PARTE (cpf, nome_parte); PROCESSO (numero, classe, vara_id, nome_vara); PROCESSO_PARTE (numero, cpf, polo).
3. PROCESSO ainda viola a 3FN: \`numero → vara_id → nome_vara\`. Separa-se VARA (vara_id, nome_vara).

A decomposição deve ser **sem perda de junção** e, de preferência, **preservar as dependências** (a FNBC nem sempre consegue as duas coisas; a 3FN consegue).

**Desnormalização** é a reintrodução deliberada de redundância (coluna calculada, tabela pré-agregada, nome da vara copiado no processo) para acelerar leitura. O custo: mais espaço, risco de anomalias de atualização e necessidade de manter as cópias sincronizadas.

#### Modelo dimensional
| Elemento | Conteúdo | Exemplo |
| --- | --- | --- |
| **Fato** | Medidas numéricas e aditivas + FKs para as dimensões; muitas linhas | qtd_sentencas, dias_tramitacao |
| **Dimensão** | Atributos descritivos usados para filtrar e agrupar; hierarquias | TEMPO (dia, mês, ano), VARA (vara, comarca, região), CLASSE |
| **Grão** | Nível de detalhe de uma linha da fato; definido antes das medidas | "um processo baixado por dia" |

| Critério | **Estrela** | **Floco de neve** |
| --- | --- | --- |
| Dimensões | Uma tabela por dimensão, desnormalizada | Normalizadas em várias tabelas (VARA → COMARCA → REGIAO) |
| Junções | Poucas, consultas mais simples e rápidas | Mais junções |
| Redundância | Maior | Menor |

| Critério | **OLTP** | **OLAP** |
| --- | --- | --- |
| Finalidade | Operação do dia a dia (PJe, protocolo) | Análise e decisão (painel de produtividade) |
| Operações | Muitas transações curtas: INSERT, UPDATE, DELETE | Consultas longas de leitura e agregação |
| Modelagem | Normalizada (3FN) | Dimensional (estrela ou floco) |
| Dados | Atuais | Históricos, integrados por ETL |

> **⚠️ Pegadinha:** a tabela fato não guarda descrições textuais (essas ficam nas dimensões), e o floco de neve **não** é mais desnormalizado que a estrela — é o contrário.

#### Revisão relâmpago
- Conceitual independe de tecnologia; lógico depende do modelo de dados; físico depende do SGBD.
- Independência lógica é mais difícil que a física.
- Entidade fraca: PK = chave da proprietária + discriminador; participação total.
- 1:N → FK no lado N; N:N e multivalorado → nova tabela.
- 2FN elimina dependência parcial; 3FN elimina transitiva; FNBC exige que todo determinante seja superchave.
- Em 1FN e com todas as chaves candidatas simples, a tabela já está em 2FN.
- Fato = medidas + FKs; dimensão = descrição. Estrela desnormaliza dimensões; floco normaliza.
`,
      },
      {
        id: "tj-nosql",
        title: "NoSQL: tipos, CAP e arquitetura distribuída",
        content: `
### O que a FGV cobra aqui
As questões de NoSQL são conceituais e quase sempre trazem um **cenário**: qual tipo de banco atende a uma necessidade, qual lado do **teorema CAP** uma arquitetura escolheu, ou o que diferencia **BASE** de ACID. Os erros plantados são absolutos ("NoSQL não tem transação", "NoSQL não tem esquema nenhum", "CAP permite as três propriedades") e trocas entre os tipos (Cassandra como banco de grafo, Neo4j como chave-valor). Saiba também quando o relacional continua sendo a melhor escolha.

#### Por que NoSQL
*NoSQL* significa **Not only SQL**. A motivação veio de sistemas com grande volume, alta taxa de escrita e dados de estrutura variável, em que escalar um único servidor relacional (escala **vertical**) ficou caro ou inviável.
- Escala **horizontal**: acrescentar nós comuns ao cluster.
- **Esquema flexível**: registros da mesma coleção podem ter campos diferentes.
- Modelos de dados próximos do uso da aplicação (documento JSON, grafo, chave-valor).
- Alta disponibilidade por replicação entre nós e datacenters.

#### Teorema CAP
Num sistema distribuído, diante de uma **partição de rede** (P), é preciso escolher entre:
- **C (consistência)**: toda leitura vê a escrita mais recente, como se houvesse uma só cópia;
- **A (disponibilidade)**: todo nó que não falhou responde a toda requisição, mesmo que com dado antigo.

| Escolha | Durante a partição | Exemplos típicos |
| --- | --- | --- |
| **CP** | Recusa ou atrasa respostas para não divergir | HBase, MongoDB (com escrita e leitura por maioria), ZooKeeper |
| **AP** | Continua respondendo; réplicas podem divergir e convergem depois | Cassandra, DynamoDB, CouchDB |
| **CA** | Só existe sem partição, ou seja, num único nó | SGBD relacional centralizado |

> **⚠️ Pegadinha:** CAP **não** diz "escolha duas das três a qualquer momento". Em rede distribuída a partição é inevitável; a escolha real é entre C e A **quando** ela acontece. Também não se pode ter as três simultaneamente.

**PACELC** estende o CAP: se há **P**artição, escolhe-se entre **A** e **C**; **E**lse (sem partição), escolhe-se entre **L**atência e **C**onsistência. Cassandra e DynamoDB são PA/EL (priorizam disponibilidade e baixa latência); HBase é PC/EC.

> **⚠️ Pegadinha:** o "EL" ou "EC" do PACELC vale para a operação **normal**, sem partição. Usar "latência x consistência" para descrever o comportamento durante a partição está errado.

#### BASE x ACID
| Critério | **ACID** | **BASE** |
| --- | --- | --- |
| Sigla | Atomicidade, Consistência, Isolamento, Durabilidade | *Basically Available, Soft state, Eventual consistency* |
| Prioridade | Correção imediata | Disponibilidade e escala |
| Consistência | Forte, a cada transação | **Eventual**: sem novas escritas, as réplicas convergem |
| Típico de | Relacional | Muitos NoSQL distribuídos (AP) |

Consistência eventual não é "inconsistência permanente": é uma janela em que leituras podem ver dado antigo. Bancos como o Cassandra permitem **consistência ajustável** por operação: com N réplicas, lendo de R e escrevendo em W nós, \`R + W > N\` garante que a leitura alcance a escrita mais recente (quórum).

> **⚠️ Absolutos a desconfiar:** vários NoSQL oferecem transações ACID (o MongoDB tem transações multidocumento desde a versão 4.0; o Redis tem MULTI/EXEC). "NoSQL nunca garante ACID" é falso; "NoSQL em geral relaxa a consistência para escalar" é verdadeiro.

#### Os quatro tipos
| Tipo | Modelo | Exemplos | Bom para | Fraco em |
| --- | --- | --- | --- | --- |
| **Chave-valor** | Mapa chave → valor opaco | Redis, DynamoDB, Memcached | Cache, sessão, contadores, filas, dados com expiração (TTL) | Consultar pelo conteúdo do valor |
| **Documento** | Documentos JSON/BSON com estrutura própria, consultáveis por campo | MongoDB, CouchDB | Petições e formulários de estrutura variável, catálogos, perfis | Muitas junções entre coleções |
| **Família de colunas** | Linhas com chave de partição e colunas agrupadas em famílias, esparsas | Cassandra, HBase | Escrita massiva, logs, séries temporais, consultas por chave e intervalo | Consultas ad hoc fora das chaves |
| **Grafo** | Nós, arestas e propriedades | Neo4j, Amazon Neptune | Vínculos entre partes, advogados e processos; fraudes; recomendação | Agregações sobre o conjunto inteiro |

\`\`\`
// Documento (MongoDB): petição com campos que variam conforme a classe
{ "processo": "0001/2026", "tipo": "contestacao",
  "partes": [ { "nome": "Maria", "polo": "ativo" } ], "anexos": 3 }
// Grafo (Cypher, Neo4j): advogados que atuam para as duas partes de algum processo
MATCH (a:Advogado)-[:REPRESENTA]->(p1:Parte)-[:PARTICIPA]->(pr:Processo),
      (a)-[:REPRESENTA]->(p2:Parte)-[:PARTICIPA]->(pr)
WHERE p1 <> p2 RETURN a.nome, pr.numero
\`\`\`

> **⚠️ Pegadinha:** "colunar" pode se referir a dois conceitos. O **banco de família de colunas** (Cassandra, HBase) é NoSQL orientado a escrita distribuída. O **armazenamento colunar analítico** (Redshift, BigQuery, ClickHouse) guarda cada coluna em separado para acelerar agregações de BI. Não são a mesma coisa.

No Cassandra a modelagem é **orientada à consulta**: primeiro se definem as consultas e depois se cria uma tabela desnormalizada para cada uma, escolhendo a **chave de partição** (distribui os dados entre os nós) e as **colunas de agrupamento** (ordenam dentro da partição).

#### Sharding x replicação
| Critério | **Sharding (particionamento horizontal)** | **Replicação** |
| --- | --- | --- |
| O que faz | Divide os dados: cada nó guarda um **subconjunto** | Copia os dados: vários nós guardam **os mesmos** dados |
| Ganho principal | Escala de escrita e de armazenamento | Disponibilidade, tolerância a falhas e escala de leitura |
| Ponto de atenção | Escolha da chave de shard (evitar pontos quentes) | Atraso de replicação e leituras desatualizadas |

Os dois se combinam: cada shard costuma ser um conjunto de réplicas.
- **Primária/secundária** (líder/seguidor; MongoDB replica set): escritas vão para a **primária**; as secundárias copiam o log de operações. Ler de uma secundária pode devolver dado desatualizado, sem as escritas ainda não replicadas. Se a primária cai, as secundárias **elegem** uma nova.
- **Sem líder** (Cassandra, Dynamo): qualquer réplica aceita escrita, e a consistência é tratada por quórum e reparo.

#### Schema-on-write x schema-on-read
| Critério | **Schema-on-write** | **Schema-on-read** |
| --- | --- | --- |
| Quando o esquema é aplicado | Na gravação; dado fora do formato é rejeitado | Na leitura; a aplicação interpreta o que encontra |
| Típico de | Relacional, Data Warehouse | Bancos de documentos, data lake |
| Vantagem | Qualidade e integridade garantidas | Agilidade para dados variados e evolução rápida |

> **⚠️ Pegadinha:** esquema flexível não é ausência de modelagem. Em NoSQL a modelagem muda de foco (padrões de acesso, embutir x referenciar documentos), mas continua indispensável. MongoDB, inclusive, permite validação de esquema na coleção.

#### Quando NÃO usar NoSQL
- Transações envolvendo várias entidades com integridade forte (custas, depósitos judiciais, folha de pagamento).
- Consultas ad hoc com muitas junções e relatórios imprevisíveis.
- Dados intrinsecamente relacionais e volume que um servidor relacional comporta.
- Equipe e ecossistema já baseados em SQL, sem um problema de escala que justifique a troca.

#### Persistência poliglota
Em **microsserviços**, cada serviço é dono do seu banco (*database per service*) e escolhe a tecnologia que melhor atende: o serviço de processos em PostgreSQL, a sessão do portal em Redis, a busca textual em Elasticsearch, a análise de vínculos em Neo4j. O preço é a consistência entre serviços, que passa a ser **eventual**, coordenada por eventos e sagas, em vez de uma transação distribuída única.

#### Revisão relâmpago
- CAP: com partição, escolhe-se C ou A; CA só sem distribuição.
- PACELC: sem partição, escolhe-se entre latência e consistência.
- BASE = disponível, estado flexível, consistência eventual.
- Chave-valor = Redis; documento = MongoDB; família de colunas = Cassandra e HBase; grafo = Neo4j.
- Sharding divide os dados; replicação copia.
- Ler da secundária pode trazer dado antigo; escrita vai para a primária.
- NoSQL não é sempre sem transação nem sem esquema; integridade transacional forte continua sendo terreno do relacional.
`,
      },
    ],
  });

  tjpbQuestoes.push(
    // ---------- tj-sql ----------
    tq(
      TJ_BD,
      "Agregação e NULL",
      `O setor de distribuição de um Tribunal de Justiça mantém as tabelas VARA e PROCESSO reproduzidas no texto de apoio. Um analista executou a consulta:

SELECT COUNT(*), COUNT(valor_causa), COUNT(DISTINCT vara_id), AVG(valor_causa)
FROM PROCESSO;

Os quatro valores retornados são, respectivamente:`,
      [
        "8, 8, 4 e 22750.",
        "8, 7, 4 e 26000.",
        "8, 7, 3 e 26000.",
        "7, 7, 3 e 26000.",
        "8, 7, 3 e 22750.",
      ],
      2,
      "COUNT(*) conta as 8 linhas, inclusive as que têm NULL. COUNT(valor_causa) ignora o NULL do processo 3 e dá 7; COUNT(DISTINCT vara_id) ignora o NULL do processo 7 e conta só {1, 2, 4}, ou seja, 3. AVG também ignora NULL: soma os 7 valores informados (182.000) e divide por 7, resultando em 26.000; dividir por 8 (22.750) é o erro de tratar NULL como zero.",
      "tj-sql",
      ESQUEMA_PROCESSOS,
    ),
    tq(
      TJ_BD,
      "NOT IN x NOT EXISTS",
      `A Corregedoria pediu a relação das varas que não possuem nenhum processo cadastrado. Considere as consultas a seguir, executadas sobre os dados do texto de apoio.

I. SELECT v.nome FROM VARA v WHERE v.id NOT IN (SELECT p.vara_id FROM PROCESSO p);

II. SELECT v.nome FROM VARA v LEFT JOIN PROCESSO p ON p.vara_id = v.id WHERE p.id IS NULL;

III. SELECT v.nome FROM VARA v WHERE NOT EXISTS (SELECT 1 FROM PROCESSO p WHERE p.vara_id = v.id);

Retorna(m) exatamente uma linha, com o nome Vara Única, a(s) consulta(s)`,
      ["I, apenas.", "II, apenas.", "I e II, apenas.", "II e III, apenas.", "I, II e III."],
      3,
      "A subconsulta de I devolve os vara_id de todos os processos, inclusive o NULL do processo 7. Para a vara 3, a condição equivale a 3 <> 1 AND 3 <> 4 AND ... AND 3 <> NULL; a última comparação é UNKNOWN, e o WHERE descarta a linha, de modo que I não retorna nada. Em II, o LEFT JOIN preserva a Vara Única com as colunas de PROCESSO nulas, e o filtro IS NULL a seleciona; em III, a subconsulta correlacionada não encontra linha para a vara 3, e o NULL não interfere.",
      "tj-sql",
      ESQUEMA_PROCESSOS,
    ),
    tq(
      TJ_BD,
      "WHERE, GROUP BY e HAVING",
      `Com base nos dados do texto de apoio, considere a consulta:

SELECT vara_id, COUNT(*) AS qtd
FROM PROCESSO
WHERE classe <> 'Mandado de Segurança'
GROUP BY vara_id
HAVING COUNT(valor_causa) >= 2;

Desconsiderada a ordem das linhas, o resultado, no formato (vara_id, qtd), é:`,
      [
        "(1, 3) e (4, 2).",
        "(1, 2) e (4, 2).",
        "(1, 3), (2, 2) e (4, 2).",
        "(1, 3), (4, 2) e (NULL, 1).",
        "(1, 3), (2, 1), (4, 2) e (NULL, 1).",
      ],
      0,
      "O WHERE age antes do agrupamento e remove o processo 4. Restam os grupos: vara 1 (processos 1, 3 e 8), com COUNT(*) = 3 e COUNT(valor_causa) = 2, que passa no HAVING; vara 2 (só o processo 5), com contagem 1, eliminada; vara 4 (processos 2 e 6), com contagem 2, mantida; e o grupo NULL (processo 7), que o GROUP BY forma normalmente, mas o HAVING elimina. A opção (1, 3), (2, 2) e (4, 2) seria o resultado sem o WHERE.",
      "tj-sql",
      ESQUEMA_PROCESSOS,
    ),
    tq(
      TJ_BD,
      "Funções de janela e CTE",
      `Para destacar as causas de maior valor em cada vara, um analista escreveu, sobre os dados do texto de apoio:

WITH ranking AS (
  SELECT numero, vara_id,
    DENSE_RANK() OVER (PARTITION BY vara_id ORDER BY valor_causa DESC) AS pos
  FROM PROCESSO
  WHERE valor_causa IS NOT NULL
)
SELECT numero FROM ranking WHERE pos = 1;

Essa consulta retorna X linhas. Se DENSE_RANK fosse substituída por ROW_NUMBER, sem nenhuma outra alteração, a consulta retornaria Y linhas. Os valores de X e Y são, respectivamente,`,
      ["4 e 4.", "6 e 4.", "6 e 6.", "5 e 3.", "3 e 3."],
      1,
      "O WHERE retira o processo 3 e o PARTITION BY forma quatro partições: vara 1 (0001 e 0008, empatados em 50.000), vara 2 (0005 em 1º), vara 4 (0002 e 0006, empatados em 12.000) e a partição de vara_id nulo (0007). DENSE_RANK atribui posição 1 a todos os empatados: 2 + 1 + 2 + 1 = 6 linhas. ROW_NUMBER nunca repete posição, então só uma linha por partição tem pos = 1, o que dá 4; esquecer a partição NULL leva às respostas 5 e 3.",
      "tj-sql",
      ESQUEMA_PROCESSOS,
    ),

    // ---------- tj-transacoes ----------
    tq(
      TJ_BD,
      "Anomalias e níveis de isolamento",
      "No sistema de depósitos judiciais de um tribunal, as transações T1 e T2 foram executadas concorrentemente na ordem descrita no texto de apoio. A anomalia ocorrida e o nível de isolamento mais baixo do padrão SQL capaz de impedi-la são, respectivamente,",
      [
        "leitura não repetível; REPEATABLE READ.",
        "leitura suja; READ COMMITTED.",
        "leitura fantasma; SERIALIZABLE.",
        "leitura suja; REPEATABLE READ.",
        "atualização perdida; READ UNCOMMITTED.",
      ],
      1,
      "T2 leu um valor gravado por T1 que ainda não tinha sido confirmado e que depois foi desfeito pelo ROLLBACK: é a leitura suja. O nível READ COMMITTED já impede essa anomalia, pois só permite ler dados confirmados; REPEATABLE READ também a impede, mas não é o nível mais baixo. Leitura não repetível e fantasma exigiriam duas leituras na mesma transação, o que não ocorreu.",
      "tj-transacoes",
      `t1 · T1: UPDATE DEPOSITO SET saldo = saldo - 5000 WHERE conta = 77;
(saldo passa de 20000 para 15000; T1 ainda não fez COMMIT)
t2 · T2: SELECT saldo FROM DEPOSITO WHERE conta = 77; → lê 15000
t3 · T1: ROLLBACK; (saldo volta a 20000)
t4 · T2: emite certidão informando saldo de 15000 e faz COMMIT.`,
    ),
    tq(
      TJ_BD,
      "Propriedades ACID",
      `Sobre as propriedades ACID no sistema de tramitação processual de um tribunal, analise as afirmativas a seguir.

I. Se o servidor de banco de dados desligar logo após o COMMIT de uma transação que registrou uma movimentação, essa movimentação deve constar do banco quando ele for reiniciado; essa garantia é a durabilidade, normalmente apoiada no log de transações gravado antes das páginas de dados.

II. Se uma transação que redistribui um processo e registra a movimentação correspondente falhar depois de executar apenas a primeira operação, a atomicidade exige que essa operação seja desfeita.

III. O isolamento é a propriedade que impede que uma transação termine deixando um processo vinculado a uma vara inexistente, em violação à chave estrangeira.

Está correto o que se afirma em`,
      ["I, apenas.", "III, apenas.", "I e III, apenas.", "II e III, apenas.", "I e II, apenas."],
      4,
      "I descreve a durabilidade, assegurada pelo write-ahead logging: o commit só é confirmado depois que o log está em disco. II descreve a atomicidade, o \"tudo ou nada\" da transação. III está errada porque manter o banco válido segundo as restrições de integridade, como a FK, é a consistência; o isolamento trata da interferência entre transações concorrentes.",
      "tj-transacoes",
    ),
    tq(
      TJ_BD,
      "Bloqueios, 2PL e MVCC",
      "Em relação ao controle de concorrência em sistemas gerenciadores de bancos de dados relacionais, assinale a afirmativa correta.",
      [
        "No bloqueio em duas fases estrito, os bloqueios exclusivos só são liberados ao término da transação, o que evita rollbacks em cascata.",
        "O bloqueio em duas fases garante a serializabilidade e, por separar as fases de crescimento e de encolhimento, elimina a ocorrência de deadlocks.",
        "Um bloqueio compartilhado sobre um registro é incompatível com outro bloqueio compartilhado, de modo que duas leituras simultâneas se bloqueiam.",
        "No controle por múltiplas versões (MVCC), os leitores bloqueiam os escritores, pois cada leitura precisa travar a versão mais recente da linha.",
        "O isolamento por snapshot equivale ao nível SERIALIZABLE, pois cada transação enxerga um retrato consistente e nenhuma anomalia é possível.",
      ],
      0,
      "No 2PL estrito, os bloqueios exclusivos permanecem até o COMMIT ou ROLLBACK, e nenhuma transação lê dado não confirmado de outra, o que impede o rollback em cascata. O 2PL garante serializabilidade, mas não evita deadlock; bloqueios compartilhados são compatíveis entre si; no MVCC leitores e escritores não se bloqueiam; e o snapshot isolation ainda admite a anomalia de write skew, por isso não é serializável.",
      "tj-transacoes",
    ),

    // ---------- tj-modelagem ----------
    tq(
      TJ_BD,
      "Normalização: 2FN x 3FN",
      "Um analista recebeu a relação descrita no texto de apoio, usada na autuação de processos de um tribunal. Considerando que todos os atributos são atômicos, assinale a opção correta.",
      [
        "A relação está na 3FN, pois todos os atributos não chave dependem da chave primária.",
        "A relação está na 2FN, mas não na 3FN, pois nome_parte depende transitivamente da chave por meio de cpf_parte.",
        "A relação está na 1FN, mas não na 2FN, pois há atributos não chave que dependem de apenas parte da chave composta.",
        "A relação viola a 1FN, pois a chave primária composta impede que os valores dos atributos sejam atômicos.",
        "A relação está na FNBC, pois toda dependência funcional tem como determinante algum atributo da chave primária.",
      ],
      2,
      "classe_processo e data_autuacao dependem só de numero_processo, e nome_parte depende só de cpf_parte: são dependências parciais de parte da chave composta, o que viola a 2FN (a 1FN está atendida, pois os valores são atômicos). A opção que fala em dependência transitiva erra porque cpf_parte integra a chave e não é atributo não chave. A FNBC exige que todo determinante seja superchave, e numero_processo sozinho não é.",
      "tj-modelagem",
      `AUTUACAO (numero_processo, cpf_parte, nome_parte, polo, classe_processo, data_autuacao)
Chave primária: (numero_processo, cpf_parte)

Dependências funcionais:
numero_processo → classe_processo, data_autuacao
cpf_parte → nome_parte
numero_processo, cpf_parte → polo`,
    ),
    tq(
      TJ_BD,
      "Mapeamento ER → relacional",
      `O modelo conceitual do sistema de audiências de um tribunal contém:
- a entidade forte PROCESSO, identificada por numero;
- a entidade fraca AUDIENCIA, identificada pelo atributo sequencial dentro de cada processo;
- o relacionamento N:N entre PROCESSO e PARTE, com o atributo polo (ativo ou passivo);
- o atributo multivalorado telefone, na entidade PARTE.

Ao mapear esse modelo para o modelo relacional, assinale a opção correta.`,
      [
        "AUDIENCIA terá chave primária formada só pelo atributo sequencial, já que entidades fracas não herdam chaves de outras entidades.",
        "O relacionamento N:N é resolvido com uma chave estrangeira em PARTE que aponta para PROCESSO, e o atributo polo passa a PROCESSO.",
        "O atributo telefone pode ser mapeado numa única coluna telefones de PARTE, com os números separados por vírgula, o que preserva a primeira forma normal.",
        "AUDIENCIA terá chave primária (numero, sequencial); o N:N gera a tabela PROCESSO_PARTE, que também guarda o atributo polo.",
        "Atributos derivados, como a idade da parte, devem ser obrigatoriamente armazenados em colunas para manter o modelo físico normalizado.",
      ],
      3,
      "A entidade fraca recebe como chave a chave da proprietária (numero) somada ao seu discriminador (sequencial). O relacionamento N:N exige uma nova tabela com as duas chaves estrangeiras, e os atributos do relacionamento, como polo, ficam nela. Telefone multivalorado vira tabela própria (guardar a lista de números numa só coluna fere a atomicidade exigida pela 1FN), e o atributo derivado, em regra, é calculado em vez de armazenado.",
      "tj-modelagem",
    ),
    tq(
      TJ_BD,
      "Modelo dimensional",
      `O tribunal vai construir um Data Warehouse para o painel de produtividade das varas. Analise as afirmativas a seguir.

I. A tabela fato deve conter medidas numéricas, como a quantidade de sentenças proferidas e os dias de tramitação, além das chaves estrangeiras para as dimensões.

II. No esquema floco de neve, as dimensões são normalizadas em várias tabelas, como VARA, COMARCA e REGIAO, o que reduz a redundância, mas aumenta o número de junções nas consultas.

III. A granularidade da tabela fato, isto é, o que representa cada uma de suas linhas, deve ser definida antes da escolha das medidas e das dimensões.

Está correto o que se afirma em`,
      ["I, apenas.", "II, apenas.", "I e III, apenas.", "II e III, apenas.", "I, II e III."],
      4,
      "As três estão corretas. A fato guarda medidas e as chaves das dimensões, deixando os atributos descritivos para as dimensões. O floco de neve normaliza as dimensões, trocando redundância por mais junções, ao contrário da estrela. E a declaração do grão é o passo que orienta quais medidas e dimensões são coerentes com cada linha da fato.",
      "tj-modelagem",
    ),

    // ---------- tj-nosql ----------
    tq(
      TJ_BD,
      "Teorema CAP",
      "O tribunal replica o serviço de consulta pública processual em dois datacenters. Numa falha de rede que isolou os dois sites, a equipe optou por manter ambos respondendo, ainda que um deles exibisse, por alguns minutos, a última movimentação desatualizada; quando a rede voltou, as réplicas convergiram. À luz do teorema CAP, essa arquitetura priorizou",
      [
        "disponibilidade e tolerância a partição (AP), com consistência eventual.",
        "consistência e tolerância a partição (CP), com consistência eventual.",
        "consistência e disponibilidade (CA), já que a partição foi temporária.",
        "consistência forte, pois as réplicas convergiram quando a rede voltou.",
        "latência sobre consistência, que no PACELC rege o período da partição.",
      ],
      0,
      "Durante a partição, os dois sites continuaram atendendo, mesmo sob o risco de dado desatualizado: a escolha foi disponibilidade em vez de consistência, o perfil AP, e a convergência posterior é a consistência eventual. Um sistema CP recusaria ou atrasaria respostas; CA não é opção quando há partição. No PACELC, o par latência x consistência vale para a operação sem partição (o \"Else\").",
      "tj-nosql",
    ),
    tq(
      TJ_BD,
      "Tipos de banco NoSQL",
      `Relacione cada tipo de banco NoSQL à necessidade de um tribunal que ele atende melhor.

1. Chave-valor
2. Documento
3. Família de colunas
4. Grafo

( ) Investigar vínculos entre partes, advogados e processos para identificar possíveis conflitos de interesse.
( ) Armazenar as sessões dos usuários do portal, com expiração automática e leitura em submilissegundos.
( ) Guardar petições em JSON, com campos que variam conforme a classe processual.
( ) Registrar bilhões de eventos de log de acesso, com escrita massiva distribuída e consulta por intervalo de tempo.

A sequência correta, de cima para baixo, é`,
      ["4 – 2 – 1 – 3.", "4 – 1 – 2 – 3.", "3 – 1 – 2 – 4.", "4 – 1 – 3 – 2.", "2 – 1 – 4 – 3."],
      1,
      "Relações entre entidades, percorridas por vários saltos, são o caso típico de grafo (Neo4j). Sessão com TTL e acesso pela chave é o uso clássico de chave-valor (Redis). Documentos JSON de estrutura variável cabem num banco de documentos (MongoDB), e escrita massiva com consulta por chave de partição e intervalo é o forte da família de colunas (Cassandra, HBase).",
      "tj-nosql",
    ),
    tq(
      TJ_BD,
      "Sharding, replicação e esquema",
      `Sobre a arquitetura de bancos NoSQL, analise as afirmativas a seguir.

I. O sharding distribui subconjuntos diferentes dos dados entre os nós, para escalar escrita e armazenamento, enquanto a replicação mantém cópias dos mesmos dados, para ganhar disponibilidade e escala de leitura.

II. Num conjunto de réplicas com uma réplica primária e réplicas secundárias, uma leitura feita numa secundária pode retornar dados desatualizados, sem escritas já feitas na primária e ainda não replicadas.

III. Por adotarem schema-on-read, os bancos de documentos dispensam modelagem e são a escolha recomendada para o módulo de custas, que exige transações sobre várias entidades e consultas ad hoc com muitas junções.

Está correto o que se afirma em`,
      ["I, apenas.", "II, apenas.", "I e II, apenas.", "I e III, apenas.", "I, II e III."],
      2,
      "I distingue corretamente particionamento e replicação, que costumam ser combinados. II está correta: as secundárias copiam o log de operações da primária com algum atraso, e a leitura nelas pode ser desatualizada. III erra duas vezes: esquema flexível não elimina a modelagem (ela passa a ser orientada aos padrões de acesso), e transações sobre várias entidades com consultas ad hoc e muitas junções são justamente o cenário em que o relacional continua mais adequado.",
      "tj-nosql",
    ),
  );
}
