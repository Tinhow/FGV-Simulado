/* TJPB 2026/2027 · Eixo 2 — Desenvolvimento e Linguagens de Programação.
   Teoria + questões INÉDITAS no estilo FGV (não são de prova oficial). */
{
  tjpbModulos.push({
    id: "tj-dev",
    title: "Desenvolvimento e Linguagens de Programação",
    icon: "💻",
    description:
      "POO e SOLID, Java/Spring, JavaScript/TypeScript, padrões de projeto, APIs REST, microsserviços e containers — o maior eixo do edital.",
    sections: [
      // ------------------------------------------------------------------
      {
        id: "tj-poo",
        title: "POO avançada e SOLID",
        content: `
### O que a FGV cobra aqui
A banca raramente pede a definição de livro: ela descreve uma classe, um trecho de código ou uma decisão de projeto e pergunta qual pilar, relação ou princípio está em jogo. Os campeões de cobrança são **sobrecarga x sobrescrita**, **classe abstrata x interface**, **herança x composição** e os **princípios SOLID** — quase sempre com um exemplo de violação para você identificar.

#### 1. Os pilares e o que a banca troca
| Pilar | Ideia central | Troca típica da banca |
| --- | --- | --- |
| **Abstração** | Modelar só o que importa ao problema | Confundir com a palavra-chave \`abstract\` |
| **Encapsulamento** | Esconder o estado e expor comportamento | Achar que getter e setter para tudo já é encapsular |
| **Herança** | Relação **é-um**: especializa um tipo | Herdar só para reaproveitar código |
| **Polimorfismo** | Mesma mensagem, comportamentos diferentes | Trocar sobrecarga (compilação) por sobrescrita (execução) |

#### 2. Encapsulamento de verdade
Encapsular é proteger **invariantes**: o próprio objeto decide como seu estado pode mudar.

\`\`\`java
public class Prazo {
    private final LocalDate inicio;
    private int dias;

    public Prazo(LocalDate inicio, int dias) {
        if (dias <= 0) throw new IllegalArgumentException("dias inválidos");
        this.inicio = inicio;
        this.dias = dias;
    }
    public void prorrogar(int extra) { this.dias += extra; } // regra fica no objeto
    public LocalDate fim() { return inicio.plusDays(dias); }
}
\`\`\`

> **⚠️ Pegadinha:** uma classe com todos os atributos \`private\` e um \`setX\` público para cada um está "encapsulada" só no papel. O modificador de acesso, sozinho, não protege invariante nenhuma.

Visibilidade em Java: \`private\` (só a classe) · package-private, sem modificador (mesmo pacote) · \`protected\` (pacote + subclasses) · \`public\` (todos).

#### 3. Polimorfismo: sobrecarga x sobrescrita
| | **Sobrecarga** (overloading) | **Sobrescrita** (overriding) |
| --- | --- | --- |
| Onde | Mesma classe (ou herdada) | Subclasse redefine método da superclasse |
| Assinatura | **Muda** a lista de parâmetros | **Igual** (retorno igual ou covariante) |
| Resolução | **Compilação** (ligação estática) | **Execução** (ligação dinâmica) |
| Mudar só o retorno | Não compila | — |
| Visibilidade | Livre | Não pode ficar **mais restrita** |

\`\`\`java
class Notificacao {
    void enviar(String msg) { }                  // sobrecarga: mesmo nome,
    void enviar(String msg, int prioridade) { }  // parâmetros diferentes
}
class NotificacaoEmail extends Notificacao {
    @Override
    void enviar(String msg) { }                  // sobrescrita
}
\`\`\`

> **⚠️ Pegadinha:** métodos \`static\` não são sobrescritos, são **ocultados** (hiding); \`private\` e \`final\` também não participam da sobrescrita. A anotação \`@Override\` é opcional, mas faz o compilador acusar erro se nada estiver sendo sobrescrito.

#### 4. Classe abstrata x interface (Java 8+)
| | **Classe abstrata** | **Interface** |
| --- | --- | --- |
| Herança | Uma só (\`extends\`) | Várias (\`implements\`) |
| Estado | Atributos de instância e construtor | Só constantes (\`public static final\` implícito) |
| Métodos concretos | Sim | \`default\` e \`static\` (Java 8), \`private\` (Java 9) |
| Quando usar | Base comum com estado compartilhado | Contrato ou capacidade (\`Comparable\`, \`Runnable\`) |
| Pode ser instanciada | Não | Não |

> **⚠️ Pegadinha:** métodos \`default\` não transformam interface em classe abstrata: ela continua **sem estado de instância** e sem construtor. Se duas interfaces trazem o mesmo método \`default\`, a classe que implementa ambas é obrigada a sobrescrevê-lo.

#### 5. Herança x composição
- **Herança** = é-um, acoplamento forte e fixado em compilação. Mudanças internas na superclasse quebram subclasses: é o problema da **classe base frágil**.
- **Composição** = tem-um: o objeto delega a outro, e a peça pode ser trocada em tempo de execução.
- Máxima do GoF: **"prefira composição a herança"** — o que não significa "nunca herde".

\`\`\`java
class ServicoPeticao {
    private final PeticaoRepository repo;      // TEM um repositório
    ServicoPeticao(PeticaoRepository repo) { this.repo = repo; }
    void protocolar(Peticao p) { repo.salvar(p); } // delega
}
\`\`\`

#### 6. Acoplamento e coesão
| Métrica | Desejável | Mede |
| --- | --- | --- |
| **Acoplamento** | **Baixo** | Quanto um módulo depende dos detalhes de outro |
| **Coesão** | **Alta** | Quanto as responsabilidades de um módulo se relacionam entre si |

#### 7. SOLID
| Letra | Princípio | Em uma frase | Violação típica |
| --- | --- | --- | --- |
| **S** | Responsabilidade Única (SRP) | Um único **motivo para mudar** | \`Processo\` que calcula custas, gera PDF e envia e-mail |
| **O** | Aberto/Fechado (OCP) | Aberto para extensão, fechado para modificação | \`switch\` por tipo que cresce a cada novo caso |
| **L** | Substituição de Liskov (LSP) | O subtipo substitui o tipo base **sem quebrar o comportamento esperado** | Subclasse que lança exceção num método herdado |
| **I** | Segregação de Interfaces (ISP) | Cliente não depende de método que não usa | Interface gorda com \`imprimir\`, \`digitalizar\` e \`enviarFax\` |
| **D** | Inversão de Dependência (DIP) | Alto nível depende de **abstrações**, não de implementações | \`new OracleProcessoDao()\` dentro da regra de negócio |

O exemplo clássico de violação de Liskov:

\`\`\`java
class Retangulo {
    protected int largura, altura;
    void setLargura(int l) { largura = l; }
    void setAltura(int a) { altura = a; }
    int area() { return largura * altura; }
}
class Quadrado extends Retangulo {
    @Override void setLargura(int l) { largura = l; altura = l; }
    @Override void setAltura(int a) { largura = a; altura = a; }
}
// cliente: r.setLargura(5); r.setAltura(4); espera 20, com Quadrado obtém 16
\`\`\`

> **⚠️ Pegadinha:** SRP não é "a classe deve ter um só método"; é um só **motivo de mudança** (um só ator interessado).

> **⚠️ Pegadinha:** DIP (princípio), injeção de dependência (técnica) e IoC (mecanismo do framework) não são sinônimos. A injeção é um **meio** de cumprir o DIP.

#### 8. Lei de Demeter (menor conhecimento)
"Fale só com seus amigos imediatos": um método chama métodos do próprio objeto, dos parâmetros, dos objetos que cria e dos seus atributos — não dos objetos devolvidos por eles.

\`\`\`java
// Viola: navega pela estrutura interna de outros objetos
String juiz = processo.getVara().getComarca().getJuizDiretor().getNome();
// Respeita: pede ao objeto o que precisa
String juiz = processo.nomeDoJuizDiretor();
\`\`\`

Interfaces fluentes (builders, streams) costumam não ser tratadas como violação: cada chamada devolve o mesmo objeto ou um novo do mesmo tipo, sem expor estrutura interna.

#### Revisão relâmpago
- Sobrecarga: parâmetros diferentes, resolvida na compilação. Sobrescrita: mesma assinatura, resolvida na execução.
- Interface com \`default\` continua sem estado de instância; classe abstrata pode ter construtor e atributos.
- Prefira composição: herança traz acoplamento forte e classe base frágil.
- Baixo acoplamento, alta coesão — nunca o contrário.
- \`switch\` por tipo que cresce → OCP; \`Quadrado extends Retangulo\` → LSP; interface gorda → ISP; \`new\` de classe concreta na regra → DIP.
- DIP é princípio; DI é técnica; IoC é mecanismo.
- Lei de Demeter: desconfie de \`a.getB().getC().fazer()\`.
`,
      },
      // ------------------------------------------------------------------
      {
        id: "tj-java",
        title: "Java e Spring",
        content: `
### O que a FGV cobra aqui
Java aparece de dois jeitos: **trechos de código** cuja saída você precisa prever (String, \`==\` x \`equals\`, coleções, exceções, streams) e **afirmativas sobre o ecossistema** — Spring (IoC/DI, estereótipos, escopos), Spring Boot (starters, autoconfiguração, profiles) e JPA/Hibernate (lazy x eager, N+1, \`@Transactional\`). Pense sempre em Java 17/21 e Spring Boot 3, que já usa os pacotes \`jakarta\`.

#### 1. Plataforma: JVM, JRE e JDK
| Sigla | O que é | Contém |
| --- | --- | --- |
| **JVM** | Máquina virtual que executa **bytecode** (\`.class\`) | Class loader, interpretador, compilador **JIT**, garbage collector |
| **JRE** | Ambiente de execução | JVM + bibliotecas padrão |
| **JDK** | Kit de desenvolvimento | Ferramentas (\`javac\`, \`jar\`, \`jshell\`) + ambiente de execução |

Fluxo: \`.java\` → \`javac\` → bytecode → JVM. A portabilidade ("write once, run anywhere") está no **bytecode**, não em um binário nativo. Versões LTS recentes: 17, 21 e 25.

#### 2. Primitivos x wrappers
Oito primitivos (\`byte\`, \`short\`, \`int\`, \`long\`, \`float\`, \`double\`, \`char\`, \`boolean\`), cada um com seu wrapper (\`Integer\`, \`Double\`...). A conversão automática é o **autoboxing/unboxing**.

| | **Primitivo** | **Wrapper** |
| --- | --- | --- |
| Valor padrão em atributo | \`0\`, \`false\` | \`null\` |
| Pode ser \`null\` | Não | Sim |
| Uso em coleções | Não (\`List<int>\` não compila) | Sim (\`List<Integer>\`) |
| Comparação | \`==\` compara valor | \`==\` compara **referência**; use \`equals\` |

> **⚠️ Pegadinha:** fazer unboxing de um wrapper \`null\` lança \`NullPointerException\`. E \`Integer\` pequeno comparado com \`==\` às vezes "funciona" por causa do cache de valores entre -128 e 127 — não conte com isso.

#### 3. String imutável, \`==\` x \`equals\`
\`\`\`java
String s = "tj";
s.concat("pb");          // gera nova String, descartada; s continua "tj"
s = s.concat("pb");      // agora s referencia "tjpb"
String a = "tj", b = "tj", c = new String("tj");
a == b;       // true  (mesmo literal no String pool)
a == c;       // false (new cria outro objeto)
a.equals(c);  // true  (mesmo conteúdo)
\`\`\`

Para montar texto em laço, use \`StringBuilder\` (mutável, não sincronizado); \`StringBuffer\` é a versão sincronizada e legada.

#### 4. equals e hashCode
- Objetos iguais por \`equals\` **devem** ter o mesmo \`hashCode\`; o contrário não vale (colisão é permitida). Sobrescrever \`equals\` sem \`hashCode\` quebra \`HashSet\` e \`HashMap\`: dois objetos "iguais" vão para baldes diferentes.

#### 5. Collections
| Interface | Implementação | Ordem | Duplicatas | Observação |
| --- | --- | --- | --- | --- |
| \`List\` | \`ArrayList\` | Inserção (índice) | Sim | Acesso por índice rápido |
| \`List\` | \`LinkedList\` | Inserção | Sim | Também é \`Deque\` |
| \`Set\` | \`HashSet\` | Nenhuma garantida | Não | Usa \`hashCode\`/\`equals\` |
| \`Set\` | \`LinkedHashSet\` | Inserção | Não | — |
| \`Set\` | \`TreeSet\` | Ordenada | Não | Elementos comparáveis |
| \`Map\` | \`HashMap\` | Nenhuma garantida | Chave única | Aceita uma chave \`null\` |
| \`Map\` | \`TreeMap\` | Ordenada pela chave | Chave única | Não aceita chave \`null\` |

> **⚠️ Pegadinha:** \`Map\` **não** estende \`Collection\`. E \`List.of(...)\` devolve lista **imutável**: \`add\` lança \`UnsupportedOperationException\`.

#### 6. Exceções
Hierarquia: \`Throwable\` → \`Error\` (falhas da JVM, como \`OutOfMemoryError\`) e \`Exception\` → \`RuntimeException\`. O \`try-with-resources\` fecha sozinho qualquer \`AutoCloseable\`; \`finally\` roda com ou sem exceção.

| | **Checked** | **Unchecked** |
| --- | --- | --- |
| Quem são | \`Exception\` fora de \`RuntimeException\` | \`RuntimeException\` e subclasses, além de \`Error\` |
| Exemplos | \`IOException\`, \`SQLException\` | \`NullPointerException\`, \`IllegalArgumentException\` |
| Compilador exige tratar ou declarar | Sim (\`try/catch\` ou \`throws\`) | Não |

#### 7. Generics, lambdas e streams
- Generics garantem tipo em compilação e são apagados em execução (**type erasure**). \`List<String>\` não é subtipo de \`List<Object>\`; para flexibilizar, use \`List<? extends Number>\` (leitura) ou \`List<? super Integer>\` (escrita).
- Lambdas implementam **interfaces funcionais** (um único método abstrato): \`Predicate\`, \`Function\`, \`Consumer\`, \`Supplier\`.

\`\`\`java
List<String> urgentes = processos.stream()
    .filter(p -> p.getPrazo() <= 5)       // intermediária (lazy)
    .map(Processo::getNumero)              // intermediária
    .sorted()
    .toList();                             // terminal: só aqui tudo executa
\`\`\`

> **⚠️ Pegadinha:** operações intermediárias são **preguiçosas** — sem operação terminal, nada roda. E um stream só pode ser consumido **uma vez**.

#### 8. Records (Java 16+)
\`record ParteDTO(String nome, String cpf) { }\` gera construtor, campos \`private final\`, acessores \`nome()\` e \`cpf()\`, \`equals\`, \`hashCode\` e \`toString\`. Records são \`final\`, não estendem outra classe (podem implementar interfaces) e os acessores **não** têm prefixo \`get\`.

#### 9. Spring: IoC, DI e beans
**IoC** (inversão de controle): o contêiner, não o seu código, cria e liga os objetos. **DI** é a forma como ele faz isso — entregando as dependências prontas. Os objetos gerenciados são **beans**.

| Anotação | Camada | Detalhe |
| --- | --- | --- |
| \`@Component\` | Genérica | Estereótipo base, detectado pelo component scan |
| \`@Service\` | Negócio | Semântica; mesmo comportamento de \`@Component\` |
| \`@Repository\` | Persistência | Traduz exceções de persistência em \`DataAccessException\` |
| \`@Controller\` | Web (MVC) | Retorna nome de view |
| \`@RestController\` | Web (API) | \`@Controller\` + \`@ResponseBody\`: retorna o corpo (JSON) |

\`\`\`java
@Service
public class PeticaoService {
    private final PeticaoRepository repo;            // pode ser final
    public PeticaoService(PeticaoRepository repo) {  // injeção por construtor;
        this.repo = repo;                            // com um só construtor,
    }                                                // @Autowired é dispensável
}
\`\`\`

Injeção **por construtor** é a recomendada: dependências obrigatórias, campos \`final\` e testes sem contêiner. \`@Autowired\` em campo funciona, mas esconde dependências e impede \`final\`. Escopos: **singleton** (padrão, uma instância por contêiner), **prototype** (nova a cada injeção), e na web \`request\`, \`session\` e \`application\`.

#### 10. Spring Boot
- **Starters**: dependências agregadas (\`spring-boot-starter-web\`, \`-data-jpa\`, \`-security\`).
- **Autoconfiguração**: configura beans conforme o que está no classpath, e recua se você definir o seu.
- **Servidor embarcado**: Tomcat por padrão; a aplicação vira um \`.jar\` executável.
- **Configuração externa** em \`application.properties\` ou \`application.yml\` (aceita variáveis de ambiente, como \`\${DB_URL}\`); **profiles** em \`application-prod.yml\`, ativados por \`spring.profiles.active\`.

#### 11. Spring Data JPA e Hibernate
Uma entidade é uma classe anotada com \`@Entity\`, com chave marcada por \`@Id\` (geralmente com \`@GeneratedValue\`). Spring Data gera a implementação de interfaces como \`JpaRepository<Processo, Long>\`, inclusive consultas derivadas do nome do método (\`findByNumero\`).

| Associação | Fetch padrão |
| --- | --- |
| \`@ManyToOne\`, \`@OneToOne\` | **EAGER** |
| \`@OneToMany\`, \`@ManyToMany\` | **LAZY** |

**Problema N+1**: uma consulta traz N entidades e, ao percorrê-las, cada acesso a uma associação lazy dispara mais uma consulta (1 + N). Soluções: \`JOIN FETCH\` em JPQL, \`@EntityGraph\` ou carregamento em lote. Trocar tudo para EAGER **não** resolve e costuma piorar.

**\`@Transactional\`**: abre a transação via **proxy**. Por padrão faz rollback em \`RuntimeException\` e \`Error\`, **não** em checked (configure \`rollbackFor\`). Chamada interna na mesma classe (self-invocation) não passa pelo proxy e ignora a anotação.

#### 12. Jakarta EE
Em 2017 o Java EE foi transferido da Oracle para a Eclipse Foundation e virou **Jakarta EE**. A partir do Jakarta EE 9 os pacotes mudaram de \`javax\` para **\`jakarta\`** (\`javax.persistence.Entity\` virou \`jakarta.persistence.Entity\`). Spring Boot 3 exige Java 17+ e só aceita os pacotes \`jakarta\`.

#### Revisão relâmpago
- \`==\` compara referência em objetos; \`equals\`, conteúdo. String é imutável.
- Sobrescreveu \`equals\`? Sobrescreva \`hashCode\`.
- Checked: compilador obriga tratar; unchecked: \`RuntimeException\` e \`Error\`.
- Stream: intermediárias lazy, terminal dispara, consumo único.
- Bean é singleton por padrão; injeção por construtor é a recomendada.
- \`@RestController\` = \`@Controller\` + \`@ResponseBody\`.
- \`@OneToMany\` é LAZY; N+1 se resolve com \`JOIN FETCH\`/\`@EntityGraph\`.
- \`@Transactional\`: rollback só em unchecked por padrão; self-invocation não aplica.
`,
      },
      // ------------------------------------------------------------------
      {
        id: "tj-js",
        title: "JavaScript e TypeScript",
        content: `
### O que a FGV cobra aqui
No JavaScript a banca adora **prever a saída**: escopo de \`var\` x \`let\` em laços, hoisting, coerção com \`==\`, valor de \`this\` e a ordem de execução no **event loop**. No TypeScript, cobra o sistema de tipos: tipagem **estrutural**, \`any\` x \`unknown\` x \`never\`, utility types e narrowing. Fecha com SPA x PWA x SSR.

#### 1. var, let e const
| | \`var\` | \`let\` | \`const\` |
| --- | --- | --- | --- |
| Escopo | **Função** | **Bloco** | **Bloco** |
| Hoisting | Sim, inicializada com \`undefined\` | Sim, mas na **TDZ** | Sim, mas na **TDZ** |
| Declaração de função | Sobe inteira: pode ser chamada antes | — | — |
| Redeclarar no mesmo escopo | Pode | Erro | Erro |
| Reatribuir | Pode | Pode | Erro |

\`\`\`js
console.log(a);  // undefined (var içada)
var a = 1;
console.log(b);  // ReferenceError: b está na zona morta temporal (TDZ)
let b = 2;
const lista = [1];
lista.push(2);   // permitido: const impede reatribuir, não mutar
\`\`\`

#### 2. == x ===
\`===\` compara tipo e valor; \`==\` converte antes de comparar.

| Expressão | Resultado |
| --- | --- |
| \`"1" == 1\` / \`"1" === 1\` | \`true\` / \`false\` |
| \`null == undefined\` / \`null === undefined\` | \`true\` / \`false\` |
| \`NaN === NaN\` | \`false\` (use \`Number.isNaN\`) |
| \`typeof null\` | \`"object"\` |

#### 3. Closures
Uma função "lembra" as variáveis do escopo em que foi criada, mesmo depois que esse escopo terminou (é assim que se cria estado privado em JS).

\`\`\`js
for (var i = 0; i < 3; i++) setTimeout(() => console.log(i)); // 3 3 3
for (let j = 0; j < 3; j++) setTimeout(() => console.log(j)); // 0 1 2
\`\`\`

> **⚠️ Pegadinha:** com \`var\` existe **uma** variável para o laço inteiro; com \`let\` cada iteração ganha a **sua** cópia. Por isso a mesma closure imprime valores diferentes.

#### 4. this, arrow functions e protótipos
| | **Função comum** | **Arrow function** |
| --- | --- | --- |
| \`this\` | Definido **na chamada** (objeto antes do ponto, \`call\`/\`apply\`/\`bind\`) | **Léxico**: herda do escopo onde foi criada |
| Pode ser construtor (\`new\`) | Sim | Não |

Herança em JS é **prototípica**: cada objeto aponta para um protótipo, e a busca de propriedades sobe essa cadeia até \`Object.prototype\`. \`class\` e \`extends\` são açúcar sintático sobre protótipos.

#### 5. Event loop: microtasks x macrotasks
JavaScript tem **uma** pilha de execução. Terminado o código síncrono, o motor esvazia **toda** a fila de microtasks e só então executa **uma** macrotask; e repete.

| Microtasks (prioridade) | Macrotasks |
| --- | --- |
| \`Promise.then/catch/finally\`, continuação após \`await\`, \`queueMicrotask\` | \`setTimeout\`, \`setInterval\`, eventos de I/O e de UI |

Exemplo: \`log(1)\`, um \`setTimeout\` que loga 2, um \`Promise.resolve().then\` que loga 3 e \`log(4)\`, nessa ordem, imprimem **1 4 3 2**.

> **⚠️ Pegadinha:** \`setTimeout(fn, 0)\` não executa "imediatamente": vai para a fila de macrotasks e espera o fim do código síncrono **e** de todas as microtasks. O corpo de uma função \`async\` roda síncrono até o primeiro \`await\`.

#### 6. Promises e async/await
| Combinador | Resolve quando | Rejeita quando |
| --- | --- | --- |
| \`Promise.all\` | **Todas** cumprem (array de valores) | A **primeira** rejeitar |
| \`Promise.allSettled\` | Todas terminam, com sucesso ou falha | Nunca rejeita |
| \`Promise.race\` | A primeira a **terminar** (cumprir ou rejeitar) | Idem, se a primeira rejeitar |
| \`Promise.any\` | A primeira a **cumprir** | Todas rejeitarem (\`AggregateError\`) |

Com \`async/await\`, a rejeição de uma Promise aguardada vira exceção, tratada com \`try/catch\`. Dois \`await\` em sequência rodam **em série**; para paralelizar, aguarde um \`Promise.all\`.

#### 7. Desestruturação, spread/rest e módulos ES
\`\`\`js
const [processo, partes] = await Promise.all([api.processo(id), api.partes(id)]);
const { numero, classe = "Procedimento Comum" } = processo; // valor padrão
const [primeiro, ...demais] = partes;    // rest
const copia = { ...processo, sigiloso: true }; // spread: cópia RASA
import { calcularPrazo } from "./prazos.js";   // export nomeado
export default class Agenda { }
\`\`\`
Módulos ES são estáticos, rodam em **strict mode** e cada arquivo tem escopo próprio.

#### 8. TypeScript: sistema de tipos
Os tipos são verificados em compilação e **apagados** no JavaScript gerado: uma \`interface\` não existe em execução (não dá para usar \`instanceof\` com ela). A tipagem é **estrutural**: se tem o formato, é compatível, sem precisar declarar \`implements\`.

| | \`interface\` | \`type\` |
| --- | --- | --- |
| Descreve | Só formato de objeto | Objeto, união, tupla, primitivo |
| Extensão | \`extends\` | Interseção \`&\` |
| Declaration merging | Sim | Não |

| Tipo | Significado |
| --- | --- |
| \`any\` | Desliga a verificação; aceita tudo e permite tudo |
| \`unknown\` | Aceita tudo, mas **exige narrowing** antes de usar |
| \`never\` | Nenhum valor possível: função que sempre lança, caso impossível |

\`\`\`ts
type Situacao = "ativo" | "baixado" | "suspenso";        // union de literais
type Auditavel = Processo & { criadoEm: Date };           // intersection
function exibir(v: unknown) {
  if (typeof v === "string") return v.toUpperCase();       // narrowing
  if (v instanceof Date) return v.toISOString();
  return String(v);
}
function primeiro<T>(itens: T[]): T | undefined { return itens[0]; } // generic
\`\`\`

| Utility type | Resultado |
| --- | --- |
| \`Partial<T>\` / \`Required<T>\` | Todas opcionais / todas obrigatórias |
| \`Readonly<T>\` | Todas somente leitura |
| \`Pick<T, K>\` | Só as chaves \`K\` escolhidas |
| \`Omit<T, K>\` | Todas, menos as chaves \`K\` |
| \`Record<K, V>\` | Objeto com chaves \`K\` e valores \`V\` |

**Enums**: os numéricos geram objeto com mapeamento reverso; os de string, não. **Type guards**: \`typeof\`, \`instanceof\`, \`in\` e funções com retorno \`v is Tipo\`. No \`tsconfig.json\`, \`"strict": true\` liga \`strictNullChecks\`, \`noImplicitAny\` e outras verificações.

> **⚠️ Pegadinha:** a verificação de propriedades excedentes só vale para **literal de objeto** atribuído diretamente. Uma variável com propriedades a mais é aceita, porque a tipagem é estrutural.

#### 9. SPA x PWA x SSR
| | **SPA** | **PWA** | **SSR** |
| --- | --- | --- | --- |
| Ideia | Uma página; o JS troca o conteúdo sem recarregar | App web com recursos de app nativo | HTML gerado **no servidor** a cada requisição |
| Peça-chave | Roteamento no cliente | **Service Worker** + manifest (offline, instalável, push) | Servidor Node/Java renderizando |
| Ponto forte | Fluidez | Offline e instalação | Primeira carga e SEO |

Não são excludentes: uma PWA costuma ser SPA, e frameworks como Next.js ou Angular SSR combinam SSR com hidratação no cliente.

#### Revisão relâmpago
- \`var\`: escopo de função e içada como \`undefined\`; \`let\`/\`const\`: bloco e TDZ; \`const\` impede reatribuir, não mutar.
- Ordem do event loop: síncrono → todas as microtasks → uma macrotask.
- \`all\` falha na primeira rejeição; \`allSettled\` nunca rejeita; \`any\` quer o primeiro sucesso; \`race\`, o primeiro a terminar.
- Arrow function tem \`this\` léxico e não serve de construtor.
- TS é estrutural e os tipos somem em execução.
- \`unknown\` exige narrowing; \`any\` desliga a checagem; \`never\` é o impossível.
- \`Partial\`, \`Pick\`, \`Omit\`, \`Readonly\` e \`Record\` derivam tipos sem reescrevê-los.
`,
      },
      // ------------------------------------------------------------------
      {
        id: "tj-patterns",
        title: "Padrões de projeto",
        content: `
### O que a FGV cobra aqui
Três formatos dominam: **identificar o padrão** num trecho de código, **associar** problemas a padrões e **classificar** padrões em criacionais, estruturais e comportamentais. As confusões mais exploradas são entre os padrões que "embrulham" objetos (Adapter, Decorator, Proxy, Facade) e entre Strategy, State e Template Method. MVC/MVVM, Repository e DTO completam o pacote.

#### 1. O catálogo GoF (23 padrões)
| Família | Resolve | Padrões |
| --- | --- | --- |
| **Criacionais** (5) | Como criar objetos | Singleton, Factory Method, Abstract Factory, Builder, Prototype |
| **Estruturais** (7) | Como compor classes e objetos | Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy |
| **Comportamentais** (11) | Como objetos interagem e dividem responsabilidades | Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor |

#### 2. Criacionais
| Padrão | Intenção | Sinal no enunciado |
| --- | --- | --- |
| **Singleton** | Uma única instância com ponto de acesso global | "uma só instância", configuração, pool |
| **Factory Method** | Subclasse decide qual classe concreta instanciar | Método de criação sobrescrito |
| **Abstract Factory** | Cria **famílias** de objetos relacionados | "kit" de componentes compatíveis |
| **Builder** | Monta objeto complexo passo a passo | Muitos parâmetros opcionais |
| **Prototype** | Cria por **clonagem** de um modelo | \`clone()\` |

\`\`\`java
public final class Configuracao {                 // Singleton thread-safe
    private Configuracao() { }                    // construtor privado
    private static class Holder {
        static final Configuracao INSTANCIA = new Configuracao();
    }
    public static Configuracao get() { return Holder.INSTANCIA; }
}

Peticao p = Peticao.builder()                      // Builder
    .numero("0801234-56.2025.8.15.0001")
    .classe("Apelação Cível")
    .urgente(true)
    .build();
\`\`\`

> **⚠️ Pegadinha:** o Singleton "preguiçoso" com \`if (instancia == null) instancia = new ...\` sem sincronização **não** é thread-safe. Alternativas seguras: classe holder, \`enum\` ou inicialização estática.

> **⚠️ Pegadinha:** Factory Method usa **herança** (um método que a subclasse sobrescreve) e cria **um** produto; Abstract Factory usa **composição** (um objeto fábrica) e cria **famílias** de produtos.

#### 3. Estruturais
| Padrão | Intenção | Sinal no enunciado |
| --- | --- | --- |
| **Adapter** | Converte uma interface **incompatível** na esperada | Sistema legado, API de terceiro |
| **Decorator** | Acrescenta responsabilidades dinamicamente, **mesma interface** | Empilhar comportamentos (log, compressão, criptografia) |
| **Facade** | Interface **simplificada** para um subsistema | "um ponto de entrada" para várias classes |
| **Proxy** | Substituto que **controla o acesso** ao objeto real | Lazy loading, cache, controle de acesso, objeto remoto |
| **Composite** | Trata parte e todo de forma uniforme (árvore) | Pastas e arquivos, menus e itens |
| **Bridge** | Separa abstração de implementação | Duas hierarquias variando juntas |
| **Flyweight** | Compartilha estado intrínseco | Milhares de objetos parecidos |

Os quatro que "embrulham" e mais caem juntos:

| | Muda a interface? | Objetivo |
| --- | --- | --- |
| **Adapter** | **Sim**, para a esperada | Compatibilizar |
| **Facade** | Cria uma **nova e mais simples** | Simplificar um subsistema inteiro |
| **Decorator** | Não | **Acrescentar** comportamento, empilhável |
| **Proxy** | Não | **Controlar** acesso ao objeto real |

#### 4. Comportamentais
| Padrão | Intenção | Sinal no enunciado |
| --- | --- | --- |
| **Strategy** | Família de algoritmos intercambiáveis, escolhidos pelo cliente | Trocar o cálculo sem \`if\` |
| **State** | O objeto muda de comportamento quando muda o **estado interno** | Máquina de estados (distribuído, concluso, arquivado) |
| **Observer** | Um-para-muitos: mudança notifica os inscritos | Eventos, listeners, publish/subscribe |
| **Template Method** | Esqueleto do algoritmo na superclasse; passos nas subclasses | Método \`final\` que chama métodos abstratos |
| **Command** | Encapsula uma requisição como objeto | Desfazer, fila, log de operações |
| **Chain of Responsibility** | Passa a requisição por uma cadeia de handlers | Filtros, middlewares, validações em sequência |
| **Iterator** | Percorre coleção sem expor a estrutura | \`hasNext\`/\`next\` |
| **Mediator** | Centraliza a comunicação entre objetos | Torre de controle |

\`\`\`java
interface RegraCustas { double calcular(Peticao p); }         // Strategy
class CustasCiveis implements RegraCustas {
    public double calcular(Peticao p) { return p.valorCausa() * 0.01; }
}
class CalculadoraCustas {
    private final RegraCustas regra;
    CalculadoraCustas(RegraCustas regra) { this.regra = regra; }
    double calcular(Peticao p) { return regra.calcular(p); }
}
\`\`\`

> **⚠️ Pegadinha:** Strategy e State têm o mesmo diagrama. No **Strategy** o cliente escolhe o algoritmo e as estratégias não se conhecem; no **State** o próprio objeto troca de estado e os estados costumam conhecer o próximo.

> **⚠️ Pegadinha:** Template Method varia passos por **herança**; Strategy varia o algoritmo inteiro por **composição**.

#### 5. MVC, MVP e MVVM
| | **MVC** | **MVP** | **MVVM** |
| --- | --- | --- | --- |
| Intermediário | Controller | Presenter | ViewModel |
| Quem recebe a ação do usuário | Controller | View repassa ao Presenter | View, via binding de comandos |
| Atualização da View | View consulta o Model ou o Controller escolhe a view | Presenter atualiza a View por uma interface | **Data binding** automático |
| Intermediário conhece a View? | Escolhe qual renderizar | Sim, por interface | **Não** |
| Exemplos | Spring MVC, Rails | Android clássico, WinForms | Angular, WPF, Vue |

#### 6. Padrões de aplicação corporativa
- **Repository**: abstrai a persistência como uma **coleção de objetos de domínio** (\`salvar\`, \`buscarPorId\`); a regra de negócio não vê SQL. Spring Data gera a implementação a partir da interface.
- **DAO**: mais próximo da tabela e das operações CRUD; Repository é mais próximo do domínio.
- **DTO**: objeto só com dados, para **transferir** entre camadas ou pela rede, sem expor a entidade (evita vazar campos e ciclos de serialização). Em Java moderno, um \`record\` é um DTO natural.
- **Injeção de dependência**: o objeto recebe as dependências de fora (construtor, setter); viabiliza o DIP e os testes com dublês.

#### 7. Anti-padrões
- **God Object / Blob**: uma classe que sabe e faz tudo (viola SRP).
- **Spaghetti code**: fluxo emaranhado, sem estrutura.
- **Big Ball of Mud**: sistema sem arquitetura reconhecível.
- **Golden Hammer**: usar a mesma solução para todo problema.
- **Lava Flow**: código morto que ninguém ousa remover.
- **Copy-and-paste programming**: duplicação em vez de abstração.
- **Singletonite**: Singleton como variável global disfarçada, dificultando testes.
- **Modelo anêmico** (Fowler): entidades só com getters/setters e toda a regra em serviços.

#### Revisão relâmpago
- 5 criacionais, 7 estruturais, 11 comportamentais.
- Adapter converte; Facade simplifica; Decorator acrescenta; Proxy controla.
- Singleton preguiçoso sem sincronização não é thread-safe.
- Factory Method: herança e um produto; Abstract Factory: composição e famílias.
- Strategy: cliente escolhe; State: o objeto muda sozinho.
- MVVM: ViewModel não conhece a View, liga-se por data binding.
- Repository fala a língua do domínio; DTO só transporta dados.
`,
      },
      // ------------------------------------------------------------------
      {
        id: "tj-api",
        title: "APIs RESTful e integração web",
        content: `
### O que a FGV cobra aqui
É o tema de integração mais previsível: **métodos HTTP** (seguro x idempotente, PUT x PATCH), **códigos de status** (401 x 403, 400 x 422, 502 x 503), cabeçalhos de cache e negociação de conteúdo, **restrições REST** e o modelo de maturidade de Richardson. Em seguida vêm comparações (REST x SOAP x GraphQL x gRPC), CORS e o uso de OAuth 2.0, OIDC e JWT.

#### 1. As restrições REST (Fielding, 2000)
| Restrição | O que exige |
| --- | --- |
| **Cliente-servidor** | Separação de responsabilidades entre interface e dados |
| **Stateless** | Cada requisição traz tudo o que precisa; o servidor não guarda sessão do cliente |
| **Cache** | Respostas se declaram cacheáveis ou não |
| **Interface uniforme** | Recursos identificados por URI, manipulados por representações, mensagens autodescritivas, **HATEOAS** |
| **Sistema em camadas** | O cliente não sabe se fala com o servidor final ou com um intermediário (proxy, gateway) |
| **Código sob demanda** | **Opcional**: servidor envia código executável ao cliente |

> **⚠️ Pegadinha:** REST é um **estilo arquitetural**, não um protocolo nem um formato. JSON não é obrigatório, e HTTP é o meio mais comum, não um requisito da definição.

#### 2. Recursos e URIs
URIs nomeiam **recursos** (substantivos, em geral no plural); a ação fica no método HTTP.

\`\`\`text
GET    /api/v1/processos?classe=apelacao&page=2&size=20   lista filtrada e paginada
GET    /api/v1/processos/123                              um processo
POST   /api/v1/processos/123/peticoes                     cria petição no processo
DELETE /api/v1/peticoes/987                               remove
Evite: POST /api/v1/criarPeticao   GET /api/v1/excluirProcesso?id=123
\`\`\`

#### 3. Métodos HTTP
| Método | Uso | Seguro | Idempotente |
| --- | --- | --- | --- |
| **GET** | Ler | Sim | Sim |
| **HEAD** | Como GET, só cabeçalhos | Sim | Sim |
| **OPTIONS** | Métodos suportados, preflight CORS | Sim | Sim |
| **POST** | Criar ou processar | Não | **Não** |
| **PUT** | Substituir o recurso **inteiro** (ou criar em URI conhecida) | Não | **Sim** |
| **PATCH** | Alterar **parcialmente** | Não | Não garantido |
| **DELETE** | Remover | Não | **Sim** |

**Seguro** = não altera estado no servidor. **Idempotente** = repetir N vezes deixa o servidor no mesmo estado que uma vez. Todo seguro é idempotente; o inverso não vale (PUT e DELETE).

> **⚠️ Pegadinha:** idempotência é sobre o **estado do servidor**, não sobre a resposta. O segundo DELETE pode devolver 404 e continua idempotente.

#### 4. Códigos de status
| Código | Significado | Quando |
| --- | --- | --- |
| **200** OK | Sucesso com corpo | GET, PUT, PATCH |
| **201** Created | Recurso criado | POST (ou PUT), com cabeçalho \`Location\` |
| **204** No Content | Sucesso sem corpo | DELETE, PUT sem retorno |
| **301** / **302** | Redirecionamento permanente / temporário | URI mudou |
| **304** Not Modified | Cache ainda válido, sem corpo | GET condicional com \`If-None-Match\` |
| **400** Bad Request | Requisição malformada | JSON inválido, parâmetro com tipo errado |
| **401** Unauthorized | **Não autenticado** | Sem token, token inválido ou expirado |
| **403** Forbidden | Autenticado, **sem permissão** | Servidor de vara acessando processo sigiloso alheio |
| **404** Not Found | Recurso inexistente | — |
| **405** Method Not Allowed | Método não suportado no recurso | Responde com cabeçalho \`Allow\` |
| **409** Conflict | Conflito com o estado atual | Número de protocolo duplicado, versão concorrente |
| **422** Unprocessable Content | Sintaxe ok, **regra de validação** violada | Data de distribuição no futuro |
| **429** Too Many Requests | Limite de taxa excedido | Com \`Retry-After\` |
| **500** Internal Server Error | Falha não tratada no servidor | — |
| **502** Bad Gateway | Gateway recebeu resposta **inválida** do servidor de origem | — |
| **503** Service Unavailable | Serviço temporariamente indisponível | Manutenção, sobrecarga |

> **⚠️ Pegadinha:** apesar do nome, **401 é falta de autenticação**; **403 é falta de autorização**. Reautenticar resolve o 401, não o 403.

#### 5. Cabeçalhos que mais caem
| Cabeçalho | Papel |
| --- | --- |
| \`Content-Type\` | Formato do corpo **enviado** (\`application/json\`) |
| \`Accept\` | Formato que o cliente **aceita** receber (negociação de conteúdo; senão 406) |
| \`Authorization\` | Credencial: \`Bearer\` + token |
| \`ETag\` / \`If-None-Match\` | Versão da representação / GET condicional → 304 |
| \`If-Match\` | Atualização condicional (controle otimista) → 412 se a versão mudou |
| \`Cache-Control\` | \`max-age\`, \`no-cache\` (revalide antes de usar), \`no-store\` (não armazene) |

\`\`\`http
GET /api/v1/processos/123 HTTP/1.1
Accept: application/json
If-None-Match: "v42"

HTTP/1.1 304 Not Modified
ETag: "v42"
\`\`\`

#### 6. HATEOAS e modelo de maturidade de Richardson
| Nível | Característica |
| --- | --- |
| **0** | Um único endpoint, tudo via POST (RPC/POX) |
| **1** | **Recursos** com URIs próprias |
| **2** | **Verbos HTTP** e códigos de status usados corretamente |
| **3** | **Hipermídia** (HATEOAS): a resposta traz links para as próximas ações |

\`\`\`json
{ "numero": "0801234-56.2025.8.15.0001", "situacao": "concluso",
  "_links": { "self":     { "href": "/api/v1/processos/123" },
              "peticoes": { "href": "/api/v1/processos/123/peticoes" } } }
\`\`\`

#### 7. Versionamento, paginação e documentação
- **Versionamento**: na URI (\`/api/v1\`), em cabeçalho ou parâmetro. Mudança que quebra contrato pede nova versão.
- **Paginação**: \`page\`/\`size\`, \`offset\`/\`limit\` ou **cursor** (melhor para grandes volumes e inserções concorrentes); metadados no corpo ou no cabeçalho \`Link\`.
- **OpenAPI** é a **especificação** (YAML/JSON) que descreve a API; **Swagger** é o conjunto de ferramentas (UI, editor, geradores). Pode ser escrita antes do código (design-first) ou gerada dele (code-first, como no springdoc).

#### 8. REST x SOAP x GraphQL x gRPC
| | **REST** | **SOAP** | **GraphQL** | **gRPC** |
| --- | --- | --- | --- | --- |
| Estilo | Recursos + verbos HTTP | Protocolo de mensagens | Linguagem de consulta | RPC |
| Formato | JSON, XML, outros | **Só XML** (envelope) | JSON | **Protocol Buffers** (binário) |
| Contrato | OpenAPI (opcional) | **WSDL** | Schema tipado | Arquivo \`.proto\` |
| Endpoints | Vários | Um por serviço | **Um só** | Métodos de serviço |
| Destaque | Simples, cacheável | WS-Security, transações | Cliente escolhe os campos (evita over/under-fetching) | HTTP/2, streaming, alto desempenho entre serviços |

JSON é mais leve e nativo no JavaScript; XML é mais verboso, mas tem namespaces, XSD e XSLT.

#### 9. CORS
O navegador bloqueia por padrão leituras de respostas vindas de **outra origem** (esquema + host + porta). O servidor autoriza com \`Access-Control-Allow-Origin\`; requisições "não simples" (PUT, DELETE, \`Content-Type: application/json\`, cabeçalho \`Authorization\`) disparam antes um **preflight** \`OPTIONS\`.

> **⚠️ Pegadinha:** CORS é aplicado **pelo navegador**. Não protege a API de chamadas feitas por curl ou por outro servidor — não é mecanismo de autenticação.

#### 10. OAuth 2.0, OIDC e JWT
| | Para quê |
| --- | --- |
| **OAuth 2.0** | **Autorização delegada**: o cliente obtém um *access token* para agir em nome do usuário |
| **OpenID Connect** | Camada de **autenticação** sobre o OAuth 2.0; acrescenta o *ID token* (um JWT) com a identidade |
| **JWT** | Formato de token: \`header.payload.signature\` em Base64URL, **assinado** |

Papéis do OAuth: dono do recurso, cliente, servidor de autorização e servidor de recursos. Fluxos: **Authorization Code + PKCE** (apps web e SPA), **Client Credentials** (serviço a serviço, sem usuário). Implicit e Password estão desaconselhados.

> **⚠️ Pegadinha:** JWT assinado **não é criptografado** — qualquer um decodifica o payload. A assinatura garante **integridade**, não sigilo; nunca coloque dado sensível nele.

#### Revisão relâmpago
- Seguros: GET, HEAD, OPTIONS. Idempotentes: esses + PUT e DELETE. POST não é idempotente.
- PUT substitui inteiro; PATCH altera parte.
- 401 = não autenticado; 403 = autenticado sem permissão.
- 201 + \`Location\` ao criar; 204 sem corpo; 304 com \`If-None-Match\`; 422 para regra de validação.
- Richardson: 0 POX, 1 recursos, 2 verbos, 3 hipermídia. Stateless: o servidor não guarda sessão do cliente.
- CORS é regra do navegador; OAuth autoriza, OIDC autentica, JWT é só o formato.
`,
      },
      // ------------------------------------------------------------------
      {
        id: "tj-arq",
        title: "Microsserviços, containers e arquitetura",
        content: `
### O que a FGV cobra aqui
A banca descreve a modernização de um sistema (por exemplo, quebrar o monólito do processo eletrônico) e pergunta qual padrão resolve cada problema: **API Gateway**, **circuit breaker**, **saga**, **database per service**. Na parte de infraestrutura, cobra a leitura de **Dockerfile** (CMD x ENTRYPOINT, EXPOSE, cache de camadas) e de **manifestos Kubernetes** (Deployment x Pod, tipos de Service, liveness x readiness). Arquitetura hexagonal/clean e os 12 fatores fecham o tema.

#### 1. Monólito x microsserviços
| | **Monólito** | **Microsserviços** |
| --- | --- | --- |
| Implantação | Uma unidade, tudo junto | **Independente** por serviço |
| Banco de dados | Em geral um só | **Um por serviço** |
| Escala | O sistema inteiro | Só o serviço que precisa |
| Falhas | Podem derrubar tudo | Isoladas (se bem projetadas) |
| Complexidade | Concentrada no código | Distribuída: rede, consistência, observabilidade |
| Consistência | Transação ACID local | **Eventual** entre serviços |

> **⚠️ Pegadinha:** microsserviço não é "serviço pequeno em linhas de código"; é serviço **autônomo**, implantável sozinho e alinhado a uma capacidade de negócio. Microsserviços que compartilham o mesmo banco formam um **monólito distribuído**.

#### 2. Decomposição por domínio (DDD)
O **bounded context** delimita onde um modelo e sua linguagem ubíqua valem. "Processo" em Distribuição não é o mesmo que "Processo" em Custas — cada contexto é candidato a microsserviço. O padrão **Strangler Fig** migra o monólito aos poucos, desviando funcionalidade por funcionalidade para os serviços novos.

#### 3. Padrões de microsserviços
| Padrão | Problema que resolve |
| --- | --- |
| **API Gateway** | Ponto único de entrada: roteamento, autenticação, rate limiting, agregação |
| **Service discovery** | Localizar instâncias que sobem e descem com IPs dinâmicos (registro + consulta) |
| **Circuit breaker** | Parar de chamar um serviço que está falhando (estados fechado → aberto → semiaberto) e responder com fallback |
| **Saga** | Transação de negócio entre serviços: sequência de transações **locais** com **ações compensatórias** |
| **Database per service** | Autonomia de dados; ninguém acessa o banco do outro, só a API |
| **CQRS** | Separar modelo de escrita e de leitura |
| **BFF** | Um backend sob medida para cada tipo de cliente (web, app) |

Saga por **orquestração** (um coordenador manda cada passo) ou **coreografia** (cada serviço reage a eventos dos outros). Em microsserviços, evite o commit em duas fases (2PC), que acopla e bloqueia.

#### 4. Comunicação síncrona x assíncrona
| | **Síncrona** (REST, gRPC) | **Assíncrona** (mensageria: Kafka, RabbitMQ) |
| --- | --- | --- |
| Quem chama espera? | Sim | Não |
| Acoplamento temporal | Alto: o outro precisa estar no ar | Baixo: a fila guarda a mensagem |
| Bom para | Consultas com resposta imediata | Eventos, integrações, picos de carga |
| Risco | Falhas em cascata | Consistência eventual, mensagens duplicadas (consumidor idempotente) |

**Observabilidade** = **logs** (eventos), **métricas** (números ao longo do tempo) e **traces distribuídos** (o caminho de uma requisição entre serviços, ligado por um id de correlação). OpenTelemetry é o padrão aberto de coleta.

#### 5. Camadas, hexagonal e clean architecture
| | **Em camadas** | **Hexagonal** (Ports & Adapters) | **Clean Architecture** |
| --- | --- | --- | --- |
| Ideia | Apresentação → negócio → dados | Domínio no centro; o mundo externo conecta por **portas** (interfaces) e **adaptadores** | Círculos concêntricos: entidades, casos de uso, adaptadores, frameworks |
| Dependências | De cima para baixo (negócio pode depender do banco) | Sempre **para dentro**, rumo ao domínio | **Regra da dependência**: só para dentro |
| Trocar banco ou UI | Pode afetar o negócio | Troca só o adaptador | Troca só o anel externo |

#### 6. Docker
| **Imagem** | **Container** |
| --- | --- |
| Modelo **imutável**, em camadas somente leitura | **Instância em execução** de uma imagem, com camada gravável |
| Criada por \`docker build\` | Criado por \`docker run\` |
| Versionada por tag e enviada a um registry | Efêmero: o que grava some ao ser removido (salvo em volume) |

\`\`\`dockerfile
# comentário só em linha própria: "#" no fim da instrução vira argumento
FROM eclipse-temurin:21-jre
WORKDIR /app
COPY target/peticionamento.jar app.jar
RUN useradd -r appuser
USER appuser
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
CMD ["--spring.profiles.active=prod"]
\`\`\`

| Instrução | Detalhe que cai |
| --- | --- |
| \`RUN\` | Roda no **build** e gera camada |
| \`CMD\` | Comando/argumentos padrão; **substituído** pelos argumentos do \`docker run\` |
| \`ENTRYPOINT\` | Executável fixo; argumentos do \`docker run\` são **acrescentados** a ele (troca só com \`--entrypoint\`) |
| \`EXPOSE\` | Documenta; **não publica** a porta (isso é \`-p 8080:8080\`) |
| \`COPY\` x \`ADD\` | \`ADD\` também baixa URL e extrai \`.tar\`; prefira \`COPY\` |

**Cache de camadas**: cada instrução gera uma camada; se uma muda, todas as seguintes são refeitas. Por isso copie primeiro o que muda pouco (\`pom.xml\`, \`package.json\`), baixe as dependências e só depois copie o código. **Multi-stage build** compila numa imagem e copia só o artefato para uma imagem final enxuta. **Volumes** persistem dados fora do container. **Docker Compose** declara num \`compose.yaml\` vários serviços (API, banco, fila), com portas, variáveis, volumes e \`depends_on\`, e sobe tudo com \`docker compose up\`.

#### 7. Kubernetes
| Objeto | Função |
| --- | --- |
| **Pod** | Menor unidade implantável: um ou mais containers com mesma rede e volumes |
| **ReplicaSet** | Mantém N réplicas de um Pod |
| **Deployment** | Gerencia ReplicaSets: **rolling update** e **rollback** declarativos |
| **Service** | IP e nome DNS estáveis + balanceamento para Pods selecionados por **labels** |
| **Ingress** | Roteamento HTTP/HTTPS (host, caminho, TLS) para Services; exige um ingress controller |
| **ConfigMap** / **Secret** | Configuração / dado sensível (Secret é Base64, **não** criptografado por padrão) |
| **Namespace** | Isolamento lógico de recursos (por equipe ou ambiente) |
| **HPA** | Ajusta o número de réplicas conforme métricas (CPU, memória) |

| Tipo de Service | Alcance |
| --- | --- |
| **ClusterIP** (padrão) | Só dentro do cluster |
| **NodePort** | Porta fixa (30000–32767) em cada nó |
| **LoadBalancer** | Balanceador externo do provedor de nuvem |

| Probe | Se falhar |
| --- | --- |
| **Liveness** | O kubelet **reinicia** o container |
| **Readiness** | O Pod **sai dos endpoints** do Service (para de receber tráfego), sem reiniciar |
| **Startup** | Adia as outras probes até a aplicação subir |

\`\`\`yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: peticionamento
spec:
  scaleTargetRef: { apiVersion: apps/v1, kind: Deployment, name: peticionamento }
  minReplicas: 2
  maxReplicas: 10
  metrics:
    - type: Resource
      resource: { name: cpu, target: { type: Utilization, averageUtilization: 70 } }
\`\`\`

> **⚠️ Pegadinha:** Pod criado "solto" não volta se morrer; quem recria é o ReplicaSet gerenciado pelo Deployment. Em produção, declara-se um **Deployment**, não Pods avulsos.

#### 8. The Twelve-Factor App
- **1 a 4**: uma base de código versionada para vários deploys · dependências declaradas e isoladas · **configuração em variáveis de ambiente**, fora do código · serviços de apoio (banco, fila) como recursos anexados.
- **5 a 8**: separar **build, release e run** · processos **stateless** (estado fica em serviço de apoio) · **port binding** (o app exporta o serviço pela porta) · concorrência escalando processos.
- **9 a 12**: **descartabilidade** (subir rápido, desligar com elegância) · paridade entre desenvolvimento e produção · **logs como fluxo de eventos** na saída padrão · tarefas administrativas como processos pontuais.

#### Revisão relâmpago
- Microsserviços: implantação independente, banco por serviço, consistência eventual.
- Gateway = entrada única; circuit breaker = parar de insistir; saga = transações locais + compensação.
- Hexagonal e clean: dependências apontam para o domínio.
- Imagem é modelo imutável; container é a instância em execução.
- \`RUN\` no build; \`CMD\` substituível; \`ENTRYPOINT\` fixo; \`EXPOSE\` não publica.
- Deployment → ReplicaSet → Pods; Service é ClusterIP por padrão.
- Liveness reinicia; readiness tira do balanceamento.
- 12 fatores: config no ambiente, processos stateless, logs como fluxo.
`,
      },
    ],
  });

  // ----------------------------------------------------------------------
  // Trechos de apoio (passage) das questões
  // ----------------------------------------------------------------------
  const COD_CUSTAS = `public class CalculadoraCustas {
    public double calcular(Peticao p) {
        if (p.getTipo().equals("CIVEL")) {
            return p.getValorCausa() * 0.01;
        } else if (p.getTipo().equals("CRIMINAL")) {
            return 0;
        } else if (p.getTipo().equals("TRABALHISTA")) {
            return 50.0;
        }
        throw new IllegalArgumentException("Tipo desconhecido");
    }
}`;

  const COD_STRING = `String s = "tribunal";
s.toUpperCase();
s = s.concat("-pb");

StringBuilder sb = new StringBuilder("tj");
sb.append("pb").reverse();

String a = "tj";
String b = new String("tj");

System.out.println(s + " " + sb + " " + (a == b) + " " + a.equals(b));`;

  const COD_JPA = `@Entity
public class Processo {
    @Id @GeneratedValue
    private Long id;
    private String numero;

    @OneToMany(mappedBy = "processo")
    private List<Parte> partes;
    // getters omitidos
}

// Trecho do serviço de relatório
List<Processo> lista = processoRepository.findAll();
int totalPartes = 0;
for (Processo p : lista) {
    totalPartes += p.getPartes().size();
}`;

  const COD_EVENT_LOOP = `console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
(async () => {
  console.log("D");
  await null;
  console.log("E");
})();
console.log("F");`;

  const COD_CLOSURE = `const fns = [];
for (var i = 0; i < 3; i++) {
  fns.push(() => i);
}
for (let j = 0; j < 3; j++) {
  fns.push(() => j * 10);
}
console.log(fns.map(f => f()).join(","));`;

  const COD_TS = `interface Processo {
  numero: string;
  classe: string;
  sigiloso: boolean;
}
type Rascunho = Partial<Processo>;
type Publico = Omit<Processo, "sigiloso">;

const dados = { numero: "0801", classe: "Apelação", sigiloso: false, vara: "1ª Vara" };
const p: Processo = dados;

function exibir(valor: unknown) {
  // ...
}`;

  const COD_DECORATOR = `interface Notificador {
    void enviar(String msg);
}

class NotificadorEmail implements Notificador {
    public void enviar(String msg) { System.out.println("e-mail: " + msg); }
}

class NotificadorSms implements Notificador {
    private final Notificador interno;
    NotificadorSms(Notificador interno) { this.interno = interno; }
    public void enviar(String msg) {
        interno.enviar(msg);
        System.out.println("sms: " + msg);
    }
}

// uso
Notificador n = new NotificadorSms(new NotificadorEmail());
n.enviar("Intimação expedida");`;

  const HTTP_ETAG = `# 1ª requisição
GET /api/v1/processos/0801234-56.2025.8.15.0001 HTTP/1.1
Accept: application/json

HTTP/1.1 200 OK
Content-Type: application/json
ETag: "v42"
Cache-Control: no-cache

{ "numero": "0801234-56.2025.8.15.0001", "classe": "Apelação Cível" }

# 2ª requisição, minutos depois
GET /api/v1/processos/0801234-56.2025.8.15.0001 HTTP/1.1
Accept: application/json
If-None-Match: "v42"`;

  const DOCKERFILE = `FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn -q dependency:go-offline
COPY src ./src
RUN mvn -q package -DskipTests

FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=build /app/target/peticionamento.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
CMD ["--spring.profiles.active=prod"]`;

  const K8S_YAML = `apiVersion: apps/v1
kind: Deployment
metadata:
  name: peticionamento
  namespace: tjpb-prod
spec:
  replicas: 3
  selector:
    matchLabels:
      app: peticionamento
  template:
    metadata:
      labels:
        app: peticionamento
    spec:
      containers:
        - name: api
          image: registry.tjpb.exemplo/peticionamento:2.4.1
          ports:
            - containerPort: 8080
          readinessProbe:
            httpGet: { path: /actuator/health/readiness, port: 8080 }
          livenessProbe:
            httpGet: { path: /actuator/health/liveness, port: 8080 }
---
apiVersion: v1
kind: Service
metadata:
  name: peticionamento
  namespace: tjpb-prod
spec:
  selector:
    app: peticionamento
  ports:
    - port: 80
      targetPort: 8080`;

  tjpbQuestoes.push(
    // ---------------------------------------------------------------- tj-poo
    tq(
      TJ_DEV,
      "SOLID",
      "A equipe de TI de um tribunal mantém o módulo de custas do sistema de peticionamento eletrônico. A cada nova classe processual criada por resolução, um desenvolvedor precisa abrir o método calcular, mostrado acima, e acrescentar mais um ramo condicional. O princípio SOLID mais diretamente violado e a refatoração adequada são, respectivamente,",
      [
        "Responsabilidade Única (SRP); dividir o método calcular em três métodos privados dentro da própria CalculadoraCustas.",
        "Substituição de Liskov (LSP); fazer CalculadoraCustas herdar de Peticao para reaproveitar o atributo tipo.",
        "Segregação de Interfaces (ISP); criar uma única interface com os três cálculos, implementada por todos os clientes.",
        "Aberto/Fechado (OCP); criar uma abstração RegraCustas com uma implementação por tipo, injetada na calculadora.",
        "Inversão de Dependência (DIP); substituir os literais de texto por constantes públicas e estáticas da classe Peticao.",
      ],
      3,
      "O código precisa ser modificado a cada novo tipo, quando deveria ser estendido: é a violação clássica do OCP, resolvida com polimorfismo (uma estratégia por tipo), de modo que novos tipos sejam novas classes. Quebrar o método em privados não elimina a edição da classe; não há hierarquia em jogo para falar de LSP; uma interface com todos os cálculos é justamente o que o ISP condena; e trocar literais por constantes não inverte dependência alguma.",
      "tj-poo",
      COD_CUSTAS,
    ),
    tq(
      TJ_DEV,
      "Polimorfismo, interfaces e composição",
      "Durante a revisão de código do sistema de distribuição processual de um tribunal, foram feitas as afirmativas a seguir sobre orientação a objetos em Java.\n\nI. A sobrecarga de métodos é resolvida em tempo de compilação, com base na lista de parâmetros; a sobrescrita é resolvida em tempo de execução, com base no tipo real do objeto.\nII. Desde o Java 8, por admitirem métodos default com implementação, as interfaces tornaram-se equivalentes às classes abstratas, podendo inclusive declarar atributos de instância e construtores.\nIII. Preferir composição a herança reduz a dependência dos detalhes internos da superclasse, mitigando o problema conhecido como classe base frágil.\n\nEstá correto o que se afirma em",
      ["I, apenas.", "I e III, apenas.", "II e III, apenas.", "II, apenas.", "I, II e III."],
      1,
      "I descreve corretamente ligação estática (sobrecarga) e dinâmica (sobrescrita), e III resume o motivo da máxima 'prefira composição a herança'. II é falsa: métodos default não dão estado às interfaces, que continuam sem atributos de instância (só constantes public static final) e sem construtores.",
      "tj-poo",
    ),

    // ---------------------------------------------------------------- tj-java
    tq(
      TJ_DEV,
      "String e StringBuilder",
      "Um analista do tribunal escreveu o trecho de código Java acima para testar o tratamento de textos no módulo de cadastro de partes. Ao ser executado, o trecho imprime:",
      [
        "TRIBUNAL-pb bpjt false true",
        "tribunal-pb tjpb false true",
        "tribunal tjpb true true",
        "TRIBUNAL-PB tjpb true false",
        "tribunal-pb bpjt false true",
      ],
      4,
      "String é imutável: toUpperCase() gera outra String, descartada, e só a reatribuição s = s.concat('-pb') muda a referência, resultando em 'tribunal-pb'. StringBuilder é mutável, e append seguido de reverse altera o próprio objeto ('tjpb' vira 'bpjt'). Por fim, new String cria outro objeto, logo a == b é false, enquanto equals compara conteúdo e dá true.",
      "tj-java",
      COD_STRING,
    ),
    tq(
      TJ_DEV,
      "Spring e Spring Boot",
      "O sistema de peticionamento de um tribunal está sendo migrado para Spring Boot 3 com Java 21. Sobre o comportamento padrão do Spring nesse cenário, assinale a afirmativa correta.",
      [
        "Se um método anotado com @Transactional for chamado por outro método da mesma classe, a transação não é aplicada, porque a chamada interna não passa pelo proxy criado pelo Spring.",
        "Os beans têm escopo prototype por padrão, de forma que cada ponto de injeção recebe uma instância nova do serviço, o que dispensa preocupação com estado compartilhado.",
        "A injeção por campo com @Autowired é a forma recomendada pela documentação, pois permite declarar as dependências como final e testar a classe sem o contêiner.",
        "As entidades continuam importando javax.persistence.Entity, já que no Spring Boot 3 a adoção dos pacotes jakarta.* é opcional e depende de configuração.",
        "Um método anotado com @Transactional faz rollback de qualquer exceção lançada, inclusive das checked, como IOException, sem necessidade de configuração adicional.",
      ],
      0,
      "O Spring aplica @Transactional por meio de um proxy; a auto-invocação (this.metodo()) chama o objeto real e ignora a anotação. O escopo padrão é singleton, não prototype; a injeção recomendada é por construtor, a única que permite campos final; o Spring Boot 3 exige jakarta.*; e o rollback padrão ocorre só para RuntimeException e Error, sendo necessário rollbackFor para exceções checked.",
      "tj-java",
    ),
    tq(
      TJ_DEV,
      "JPA e problema N+1",
      "Um relatório do sistema processual de um tribunal usa o mapeamento e o trecho de serviço acima. Ao listar 200 processos, o log do Hibernate registrou 201 comandos SELECT. A causa e uma solução adequada são, respectivamente,",
      [
        "o fetch EAGER, padrão de @OneToMany; trocar a associação para FetchType.LAZY, o que reduz tudo a uma única consulta.",
        "a ausência de índice na chave estrangeira de Parte; criar o índice, o que faz o Hibernate agrupar as 200 consultas adicionais.",
        "o problema N+1, pois a coleção LAZY é carregada uma vez por processo no laço; buscar processos e partes com JOIN FETCH ou @EntityGraph.",
        "a falta de @Transactional no repositório; anotar a interface com @Transactional(readOnly = true), que funde as consultas em uma só.",
        "o uso de Spring Data JPA; substituir o repositório por JDBC puro, única forma de evitar consultas extras na leitura de associações.",
      ],
      2,
      "@OneToMany é LAZY por padrão: findAll faz 1 consulta e cada getPartes() no laço dispara mais uma, totalizando 1 + N = 201. JOIN FETCH ou @EntityGraph trazem tudo de uma vez. A associação já é LAZY (e EAGER também não resolveria), índice acelera cada consulta mas não reduz sua quantidade, readOnly não une consultas, e não é preciso abandonar o JPA.",
      "tj-java",
      COD_JPA,
    ),

    // ---------------------------------------------------------------- tj-js
    tq(
      TJ_DEV,
      "Event loop",
      "No front-end do processo eletrônico de um tribunal, um desenvolvedor executou o trecho JavaScript acima no navegador para entender a ordem de atualização da tela. A sequência impressa no console é:",
      ["A D F B C E", "A D F C E B", "A F D C E B", "A D C E F B", "A F C D E B"],
      1,
      "O código síncrono roda primeiro: A, depois D (o corpo da função async executa de forma síncrona até o primeiro await) e F. Em seguida a fila de microtasks é esvaziada na ordem de enfileiramento: o then (C) e a continuação após o await (E). Só então roda a macrotask do setTimeout (B), mesmo com atraso 0.",
      "tj-js",
      COD_EVENT_LOOP,
    ),
    tq(
      TJ_DEV,
      "Escopo e closures",
      "Considere o trecho JavaScript acima, usado em um teste do módulo de agendamento de audiências. O valor exibido no console é:",
      [
        "0,1,2,0,10,20",
        "2,2,2,20,20,20",
        "3,3,3,30,30,30",
        "3,3,3,0,10,20",
        "undefined,undefined,undefined,0,10,20",
      ],
      3,
      "Com var existe uma única variável i, de escopo de função; as três closures leem seu valor final, 3, porque só são executadas depois do laço. Com let, cada iteração cria uma nova ligação de j, e cada closure guarda o seu valor (0, 1, 2), multiplicado por 10. Não há undefined, pois i já foi atribuída quando as funções rodam.",
      "tj-js",
      COD_CLOSURE,
    ),
    tq(
      TJ_DEV,
      "TypeScript",
      "Em um projeto TypeScript 5 com a opção strict habilitada, a equipe de um tribunal escreveu o código acima. Analise as afirmativas.\n\nI. A atribuição const p: Processo = dados compila, porque a tipagem do TypeScript é estrutural e a verificação de propriedades excedentes só se aplica a literais de objeto atribuídos diretamente.\nII. Um objeto vazio é um valor válido do tipo Rascunho, e o tipo Publico não possui a propriedade sigiloso.\nIII. Dentro da função exibir, é possível chamar valor.toUpperCase() diretamente, sem verificação de tipo, já que unknown se comporta como any.\n\nEstá correto o que se afirma em",
      ["I, apenas.", "III, apenas.", "I e III, apenas.", "II e III, apenas.", "I e II, apenas."],
      4,
      "I é verdadeira: dados é uma variável, não um literal fresco, e tem todas as propriedades exigidas por Processo, então a propriedade extra vara é aceita. II é verdadeira: Partial torna tudo opcional e Omit remove sigiloso. III é falsa: unknown aceita qualquer valor, mas exige narrowing (por exemplo, typeof valor === 'string') antes de qualquer uso; quem dispensa a verificação é any.",
      "tj-js",
      COD_TS,
    ),

    // ---------------------------------------------------------------- tj-patterns
    tq(
      TJ_DEV,
      "Identificação de padrão",
      "O módulo de comunicações de um tribunal envia intimações por diversos canais. O trecho Java acima mostra parte da solução adotada. O padrão de projeto implementado pela classe NotificadorSms é o",
      [
        "Decorator, que acrescenta comportamento a um objeto envolvendo-o em outro de mesma interface.",
        "Adapter, que converte a interface de NotificadorEmail em outra, incompatível, esperada pelo cliente.",
        "Proxy, que controla o acesso ao objeto real, adiando sua criação até o primeiro uso efetivo.",
        "Facade, que oferece uma interface simplificada para um conjunto de classes de notificação.",
        "Composite, que permite tratar um grupo de notificadores e um notificador isolado de forma uniforme.",
      ],
      0,
      "NotificadorSms implementa a mesma interface que o objeto que envolve, delega a ele e acrescenta uma responsabilidade (o envio por SMS); os decoradores podem ser empilhados em tempo de execução. Não há conversão de interface (Adapter), nem controle de acesso ou criação adiada (Proxy), nem simplificação de subsistema (Facade), nem coleção de filhos tratada como um único nó (Composite).",
      "tj-patterns",
      COD_DECORATOR,
    ),
    tq(
      TJ_DEV,
      "Associação de padrões GoF",
      "Na reestruturação do sistema judicial eletrônico de um tribunal, a equipe identificou as seguintes necessidades:\n\n1. Garantir que exista uma única instância do gerenciador de configurações em toda a aplicação.\n2. Oferecer um ponto de entrada simples para o subsistema de assinatura digital, que envolve classes de certificado, carimbo de tempo e validação de cadeia.\n3. Permitir que o código novo use o serviço legado de consulta de CPF, cuja interface é incompatível com a esperada.\n4. Avisar automaticamente os módulos de intimação, estatística e notificação push sempre que o andamento de um processo mudar.\n\nOs padrões que atendem às necessidades 1, 2, 3 e 4 são, respectivamente,",
      [
        "Singleton, Adapter, Facade e Observer.",
        "Prototype, Facade, Adapter e Mediator.",
        "Singleton, Facade, Adapter e Observer.",
        "Singleton, Facade, Proxy e Chain of Responsibility.",
        "Factory Method, Decorator, Adapter e Observer.",
      ],
      2,
      "Instância única é Singleton; interface simplificada para um subsistema é Facade; compatibilizar interface incompatível é Adapter; notificar vários interessados sobre uma mudança é Observer. A primeira alternativa inverte Facade e Adapter; Prototype cria por clonagem; Proxy controla acesso sem converter interface; e Chain of Responsibility passa a requisição adiante até alguém tratá-la, em vez de avisar todos.",
      "tj-patterns",
    ),
    tq(
      TJ_DEV,
      "MVVM, Singleton e Repository",
      "Sobre padrões de projeto e de arquitetura de aplicação usados no desenvolvimento dos sistemas de um tribunal, analise as afirmativas.\n\nI. No MVVM, a ViewModel expõe estado e comandos aos quais a View se liga por data binding, sem que a ViewModel mantenha referência à View.\nII. Um Singleton com inicialização preguiçosa, que testa se a instância é nula e a cria quando necessário, sem nenhuma sincronização, é seguro em ambiente multithread porque o construtor é privado.\nIII. O padrão Repository abstrai o acesso a dados como uma coleção de objetos de domínio, isolando a regra de negócio dos detalhes de persistência.\n\nEstá correto o que se afirma em",
      ["I, apenas.", "III, apenas.", "I e II, apenas.", "II e III, apenas.", "I e III, apenas."],
      4,
      "I descreve corretamente o MVVM, em que o vínculo é feito por data binding e a ViewModel desconhece a View. III é a definição do Repository. II é falsa: o construtor privado impede instanciação externa, mas não impede que duas threads passem pelo teste de nulo ao mesmo tempo e criem duas instâncias; é preciso sincronizar ou usar holder, enum ou inicialização estática.",
      "tj-patterns",
    ),

    // ---------------------------------------------------------------- tj-api
    tq(
      TJ_DEV,
      "Métodos e status HTTP",
      "A equipe de um tribunal expõe a API REST do sistema de peticionamento eletrônico para escritórios de advocacia. Sobre o uso correto de métodos e códigos de status HTTP nessa API, assinale a afirmativa correta.",
      [
        "Um cliente sem token, ou com token expirado, que tenta consultar um processo deve receber 403 Forbidden, reservando-se o 401 para usuários autenticados sem permissão.",
        "O método PATCH é idempotente por definição; por isso, reenviar várias vezes uma requisição PATCH que incrementa um contador produz sempre o mesmo estado final.",
        "A criação de uma petição via POST deve responder 200 OK com corpo vazio, pois o status 201 Created é de uso exclusivo do método PUT na especificação HTTP.",
        "Um PUT com a representação completa do recurso é idempotente: repetir a mesma requisição deixa o recurso no mesmo estado que uma única execução deixaria.",
        "O método DELETE é seguro (safe), pois repeti-lo não altera o estado do servidor além do que já foi alterado pela primeira chamada bem-sucedida.",
      ],
      3,
      "PUT substitui o recurso pela representação enviada; repeti-la produz o mesmo estado, o que o torna idempotente. A primeira alternativa inverte 401 (não autenticado) e 403 (sem permissão); PATCH não é idempotente por definição, e um incremento é o contraexemplo típico; 201 Created é a resposta usual de um POST que cria recurso, com o cabeçalho Location; e DELETE é idempotente, mas não seguro, já que altera estado.",
      "tj-api",
    ),
    tq(
      TJ_DEV,
      "Cache e requisição condicional",
      "Um aplicativo cliente consulta a API do tribunal conforme a troca de mensagens HTTP acima. Sabendo que o processo não foi alterado entre a primeira e a segunda requisição, a resposta esperada para a segunda requisição é",
      [
        "304 Not Modified, sem corpo, indicando que o cliente pode reutilizar a representação que já armazenou.",
        "200 OK com o mesmo corpo e o mesmo ETag, pois o cabeçalho If-None-Match só tem efeito em requisições PUT e PATCH.",
        "412 Precondition Failed, porque o ETag enviado pelo cliente coincide com a versão atual do recurso no servidor.",
        "204 No Content, que sinaliza que o recurso existe, mas não há dados novos a enviar desde a última consulta.",
        "409 Conflict, já que duas requisições ao mesmo recurso com o mesmo ETag caracterizam conflito de versão.",
      ],
      0,
      "If-None-Match torna o GET condicional: se o ETag informado ainda corresponde à versão atual, o servidor responde 304 sem corpo e o cliente reaproveita sua cópia (o no-cache da primeira resposta exige justamente essa revalidação). 412 é a resposta típica de If-Match que não confere, em atualizações condicionais; 204 indica sucesso sem conteúdo, não validação de cache; e 409 trata de conflito com o estado do recurso, não de leitura.",
      "tj-api",
      HTTP_ETAG,
    ),

    // ---------------------------------------------------------------- tj-arq
    tq(
      TJ_DEV,
      "Dockerfile",
      "A equipe de infraestrutura de um tribunal usa o Dockerfile acima para empacotar a API de peticionamento, desenvolvida em Spring Boot. Sobre esse arquivo, assinale a afirmativa correta.",
      [
        "A instrução EXPOSE 8080 publica a porta no host, de modo que a API fica acessível de fora sem que seja preciso informar a opção -p ao executar docker run.",
        "Como há uma instrução ENTRYPOINT, a instrução CMD é ignorada pelo Docker, e o perfil prod nunca chega a ser aplicado à aplicação em execução.",
        "A imagem final não contém Maven nem código-fonte, e docker run imagem --spring.profiles.active=hml troca só o CMD, subindo com o perfil hml.",
        "Copiar o pom.xml antes do src não traz ganho, já que qualquer alteração em um arquivo .java invalida também a camada gerada por dependency:go-offline.",
        "As instruções RUN são executadas a cada inicialização do container, o que torna o build rápido, mas a subida da aplicação mais lenta em produção.",
      ],
      2,
      "É um multi-stage build: só o .jar é copiado do estágio build para a imagem final baseada no JRE. Com ENTRYPOINT em forma exec, o CMD fornece argumentos padrão, que os argumentos do docker run substituem. EXPOSE apenas documenta (publicar exige -p); a camada do go-offline depende só do pom.xml e continua em cache quando muda o src; e RUN executa durante o build, não na inicialização.",
      "tj-arq",
      DOCKERFILE,
    ),
    tq(
      TJ_DEV,
      "Kubernetes",
      "Os manifestos acima implantam a API de peticionamento de um tribunal em um cluster Kubernetes. Com base neles, assinale a afirmativa correta.",
      [
        "O Service, por não declarar o campo type, é do tipo NodePort e fica acessível em uma porta entre 30000 e 32767 de cada nó do cluster.",
        "Um Pod cuja readinessProbe falhe é retirado dos endpoints do Service sem ser reiniciado; já a falha na livenessProbe leva o container a ser reiniciado.",
        "Se um dos três Pods for excluído manualmente, ele não será recriado, pois o Deployment só atua no momento em que o manifesto é aplicado.",
        "O Service escolhe os Pods de destino pelo campo name do Deployment, e não pelos labels, o que dispensa o bloco selector no manifesto.",
        "Para escalar de 3 para até 10 réplicas conforme o uso de CPU, basta alterar replicas para 10, pois esse campo é o limite máximo usado pelo HPA.",
      ],
      1,
      "A readiness indica se o Pod pode receber tráfego: falhando, ele sai do balanceamento, mas continua rodando; a liveness indica se o container está saudável, e sua falha leva o kubelet a reiniciá-lo. Sem type, o Service é ClusterIP; o ReplicaSet gerenciado pelo Deployment recria Pods para manter três réplicas; o Service seleciona Pods por labels; e o autoescalonamento exige um HorizontalPodAutoscaler com minReplicas e maxReplicas — replicas fixa um número.",
      "tj-arq",
      K8S_YAML,
    ),
    tq(
      TJ_DEV,
      "Padrões de microsserviços",
      "Um tribunal está decompondo o monólito do seu sistema judicial em microsserviços (distribuição, custas, intimações e peticionamento). Sobre os padrões adotados nessa migração, assinale a afirmativa correta.",
      [
        "Para garantir consistência, todos os microsserviços devem compartilhar o mesmo esquema de banco de dados, usando commit em duas fases sempre que uma operação envolver mais de um serviço.",
        "O API Gateway substitui o service discovery, já que mantém fixos em sua configuração os endereços IP de todas as instâncias de cada serviço, inclusive das criadas pelo autoescalonamento.",
        "O circuit breaker aumenta progressivamente o número de novas tentativas contra um serviço que está falhando, até que ele volte a responder e o circuito possa ser fechado.",
        "A comunicação assíncrona por mensageria aumenta o acoplamento temporal, pois o serviço produtor fica bloqueado até que o consumidor termine de processar cada mensagem.",
        "Uma saga coordena uma operação que atravessa vários serviços por meio de transações locais, desfazendo passos já concluídos com ações compensatórias quando algum falha.",
      ],
      4,
      "A saga substitui a transação distribuída por uma sequência de transações locais, com compensações em caso de falha, orquestradas ou coreografadas. Banco compartilhado e 2PC recriam o acoplamento que se quer eliminar; o gateway roteia, mas depende de discovery para localizar instâncias dinâmicas; o circuit breaker faz o oposto de insistir, abrindo o circuito e falhando rápido; e a mensageria reduz o acoplamento temporal, pois o produtor não espera o consumidor.",
      "tj-arq",
    ),
  );
}
