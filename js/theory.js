/**
 * EMBASAMENTO TEÓRICO COMPLETO - CONCURSO DATAPREV (FGV)
 * Conteúdo programático aprofundado, esquematizado e com dicas/pegadinhas de prova da FGV.
 */

const theoryModules = [
  // =========================================================================
  // MÓDULO 1: LÍNGUA PORTUGUESA (FGV)
  // =========================================================================
  {
    id: "portugues",
    title: "Língua Portuguesa (Estilo FGV)",
    icon: "📖",
    description: "Interpretação inferencial, conectivos semânticos, sintaxe de regência, crase, paralelismo e pontuação.",
    sections: [
      {
        id: "portugues-interpretacao",
        title: "1. Interpretação e Inferência Textual (O 'Estilo FGV')",
        content: `
### Como a FGV elabora questões de interpretação
A banca FGV é célebre por formular questões que fogem da mera paráfrase superficial. Ela cobra **inferência textual estrita**, **polifonia** e **pressupostos/subentendidos**.

#### Diretrizes essenciais para acertar na FGV:
1. **Diferença entre Extrapolação e Inferência**:
   - **Inferência válida**: Aquilo que decorre necessariamente do texto, mesmo que não dito com as exatas palavras.
   - **Extrapolação (Pegadinha clássica)**: Ideia plausível no mundo real, mas que NÃO encontra respaldo nas premissas do texto. Se o texto diz que "muitos brasileiros não têm smartphone", NÃO infira que "os smartphones deveriam ser proibidos" ou que "a tecnologia é inútil".
2. **Pressupostos Linguísticos**:
   - Palavras como *ainda*, *já*, *voltou a*, *deixou de* carregam informações implícitas. Exemplo: *"A conectividade ainda é precária"* pressupõe que se esperava que já não fosse precária ou que há uma expectativa futura de melhora.
3. **Ironia e Polifonia**:
   - Atenção ao uso de aspas e adjetivações subjetivas (*"a aparente onipresença da tecnologia"* -> o vocábulo *aparente* relativiza a certeza do fato).
        `
      },
      {
        id: "portugues-conectivos",
        title: "2. Conectivos e Relações Semânticas (Concessão, Causa e Condição)",
        content: `
### As Conjunções Mais Cobradas pela FGV
A FGV tem predileção por orações subordinadas adverbiais, especialmente as **concessivas** e **causais**.

| Tipo de Relação | Conjunções e Locuções Típicas | Significado / Valor Semântico |
| :--- | :--- | :--- |
| **Concessiva** | *embora, conquanto, ainda que, se bem que, posto que, apesar de que, malgrado, a despeito de* | Ideia de oposição/obstáculo que NÃO impede a realização da oração principal. |
| **Causal** | *porque, visto que, já que, uma vez que, como (no início), porquanto* | O motivo ou fato gerador que provocou a consequência na oração principal. |
| **Consecutiva** | *tão... que, tanto... que, de modo que, de sorte que* | O efeito ou resultado do que foi intensificado anteriormente. |
| **Proporcional** | *à medida que, ao passo que, à proporção que* | Simultaneidade gradual e proporcional entre dois fatos. |
| **Condicional** | *se, caso, contanto que, desde que (com subjuntivo)* | Hipótese necessária para que o fato se realize. |

> **⚠️ Alerta de Pegadinha FGV:**
> - *"Conquanto"* é concessiva (= embora). Não confunda com *"Porquanto"* (que é causal/explicativa = porque).
> - *"À medida que"* indica proporção. A expressão *"na medida em que"* indica causa (= já que). A forma mista *"à medida em que"* é considerada **incorreta** pelo padrão culto.
        `
      },
      {
        id: "portugues-regencia-crase",
        title: "3. Regência Verbal, Nominal e Emprego da Crase",
        content: `
### Crase: Condições de Ocorrência
A crase é a fusão da preposição **a** (exigida por termo regente) com o artigo definido feminino **a(s)** ou pronomes demonstrativos (*aquele, aquela, aquilo*).

#### ❌ Casos em que a Crase é PROIBIDA:
- Antes de palavras masculinas (*a pé, a prazo, a bordo*).
- Antes de verbos no infinitivo (*a partir de, disposto a cooperar, visa a otimizar*).
- Antes de pronomes que repelem artigo: pronomes de tratamento (*Vossa Excelência*), pronomes indefinidos (*a qualquer cidadão, a toda pessoa*) e pronomes pessoais (*a ela, a mim*).
- Diante de palavras repetidas (*cara a cara, dia a dia, gota a gota*).
- Diante de substantivo feminino em sentido genérico ou indeterminado no plural (*não me refiro a leis antigas* -> preposição 'a' sem artigo).

#### ✅ Casos Obrigatórios:
- Expressões adverbiais e prepositivas femininas (*à noite, à tarde, às pressas, à medida que, à proporção que, à espera de*).
- Antes de nomes de lugares que admitem artigo feminino (*Vou à Bahia* - volto DA Bahia, crase para que? Sim!).

#### 🔄 Casos Facultativos:
1. Antes de nomes próprios femininos sem título (*Entreguei o relatório a / à Maria*).
2. Antes de pronomes possessivos femininos singulares (*Fez referência a / à sua equipe*).
3. Após a preposição *até* (*Fui até a / até à sala de servidores*).
        `
      },
      {
        id: "portugues-pontuacao",
        title: "4. Pontuação e Orações Adjetivas (Explicativa vs Restritiva)",
        content: `
### O Impacto Semântico da Vírgula nas Orações Adjetivas
Esta é uma das questões mais clássicas da banca FGV:

- **Oração Subordinada Adjetiva EXPLICATIVA (COM vírgulas)**:
  - *Exemplo*: "Os servidores do datacenter, que operavam sem nobreak, queimaram com o pico de energia."
  - *Sentido*: **TODOS** os servidores do datacenter operavam sem nobreak e todos queimaram. A oração introduz uma característica generalizada de todo o conjunto.
- **Oração Subordinada Adjetiva RESTRITIVA (SEM vírgulas)**:
  - *Exemplo*: "Os servidores do datacenter que operavam sem nobreak queimaram com o pico de energia."
  - *Sentido*: **APENAS ALGUNS** servidores operavam sem nobreak (aqueles específicos sem proteção) e só eles queimaram. Os demais, que tinham proteção, não foram afetados.
        `
      }
    ]
  },

  // =========================================================================
  // MÓDULO 2: LÍNGUA INGLESA PARA TI
  // =========================================================================
  {
    id: "ingles",
    title: "Língua Inglesa (Technical English)",
    icon: "🌐",
    description: "Vocabulário técnico de TI, falsos cognatos, modais na RFC 2119, conectivos e arquitetura Zero Trust.",
    sections: [
      {
        id: "ingles-vocabulary",
        title: "1. Technical Vocabulary & Key Verbs in Computing",
        content: `
### Essential Tech Verbs and Nouns
Na prova da Dataprev, os textos de inglês cobram engenharia de software, nuvem, microsserviços e segurança.

| Termo em Inglês | Tradução Técnica | Contexto de Uso |
| :--- | :--- | :--- |
| **To mitigate** | Atenuar, mitigar, diminuir | *"Mitigate vulnerability risks"* |
| **To deploy** | Implantar, disponibilizar | *"Deploy artifacts to production"* |
| **To leverage** | Potencializar, tirar proveito, usar | *"Leverage container orchestration"* |
| **Throughput** | Vazão, taxa de transferência | *"High throughput message pipeline"* |
| **Latency** | Latência, atraso temporal | *"Sub-millisecond network latency"* |
| **Overhead** | Sobrecarga operacional | *"Protocol encryption overhead"* |
| **Failover** | Redundância / Comutação por falha | *"Automatic database failover"* |
| **Bottleneck** | Gargalo de desempenho | *"I/O disk read bottleneck"* |
        `
      },
      {
        id: "ingles-false-cognates",
        title: "2. Falsos Cognatos Críticos em Tecnologia",
        content: `
### Não caia no falso amigo na prova da FGV:
- **Comprehensive**: NÃO é compreensivo. Significa **abrangente, minucioso, completo** (*"a comprehensive security audit"* = uma auditoria de segurança completa/exaustiva).
- **Eventually**: NÃO é eventualmente (às vezes). Significa **ao final, com o tempo, finalmente** (*"Eventually consistent"* = consistente ao final do tempo).
- **Actually**: NÃO é atualmente. Significa **na verdade, de fato, realmente** (*"It actually improves performance"*).
- **Notice**: NÃO é notícia. Significa **notar, perceber, aviso prévio**.
- **Presume**: Supor, presumir (embora cognato, requer cuidado sintático).
        `
      },
      {
        id: "ingles-modals",
        title: "3. Modal Verbs na RFC 2119 (Especificações de Requisitos)",
        content: `
### Padrão Internacional de Engenharia de Software (RFC 2119):
Quando documentações de protocolos e requisitos de sistemas são redigidas:
- **MUST / SHALL**: Requisito **absolutamente mandatório e obrigatório**. O sistema DEVE implementar.
- **SHOULD / RECOMMENDED**: Forte **recomendação**. Existem razões válidas para não adotar, mas o impacto deve ser conhecido e aceito.
- **MAY / OPTIONAL**: Recurso puramente **opcional**. Permissivo.
        `
      },
      {
        id: "ingles-zerotrust",
        title: "4. Conceitos de Zero Trust Architecture (ZTA)",
        content: `
### Core Principles of Zero Trust (NIST SP 800-207):
1. **"Never trust, always verify"**: Elimina a presunção de confiança apenas porque um usuário ou máquina está fisicamente dentro da rede corporativa ou atrás do firewall.
2. **Least-privilege access**: Acesso restrito apenas ao estritamente necessário para aquela transação ou tarefa (JIT - Just-In-Time access).
3. **Continuous verification**: Autenticação contínua e dinâmica baseada em contexto (dispositivo, localização, postura de segurança e telemetria).
        `
      }
    ]
  },

  // =========================================================================
  // MÓDULO 3: RACIOCÍNIO LÓGICO-MATEMÁTICO (RLM)
  // =========================================================================
  {
    id: "rlm",
    title: "Raciocínio Lógico-Matemático",
    icon: "🧠",
    description: "Lógica proposicional, Leis de De Morgan, equivalências lógicas, conjuntos, combinatória e probabilidade.",
    sections: [
      {
        id: "rlm-de-morgan",
        title: "1. Negação de Proposições Compostas (Leis de De Morgan & Condicional)",
        content: `
### As Regras de Ouro da Negação Lógica:

#### 1. Negação da Conjunção (E):
\`\`\`text
~(P ∧ Q) ≡ ~P ∨ ~Q
Regra: Nega a primeira, nega a segunda e troca E por OU.
\`\`\`

#### 2. Negação da Disjunção (OU):
\`\`\`text
~(P ∨ Q) ≡ ~P ∧ ~Q
Regra: Nega a primeira, nega a segunda e troca OU por E.
\`\`\`

#### 3. Negação da Condicional (Se P, então Q) -> Regra do MANÉ:
\`\`\`text
~(P → Q) ≡ P ∧ ~Q
Regra: MA-NÉ -> MAntém a primeira E NEga a segunda.
Exemplo: "Se compilar, então testo."
Negação: "Compila E NÃO testo."
\`\`\`
> **⚠️ Cuidado:** A negação de uma condicional NUNCA é outra condicional! Não caia no erro de dizer "Se não compilar, então não testo".
        `
      },
      {
        id: "rlm-equivalencias",
        title: "2. Equivalências Lógicas da Condicional (P → Q)",
        content: `
### As Duas Equivalências Fundamentais:

1. **Contrapositiva (Inverte e Nega Ambas)**:
   \`\`\`text
   (P → Q) ≡ (~Q → ~P)
   \`\`\`
   - *Exemplo*: "Se o servidor cair, o alarme toca" equivale logicamente a: "Se o alarme NÃO tocar, então o servidor NÃO caiu".

2. **Equivalência da Disjunção (Regra do NEYMAR / NeOUmar)**:
   \`\`\`text
   (P → Q) ≡ (~P ∨ Q)
   \`\`\`
   - *Regra*: NEga a primeira OU MAntém a segunda.
   - *Exemplo*: "Se estudo, passo" ≡ "NÃO estudo OU passo".
        `
      },
      {
        id: "rlm-conjuntos",
        title: "3. Diagramas de Venn e Conjuntos",
        content: `
### Fórmula da União de Dois Conjuntos:
\`\`\`text
n(A ∪ B) = n(A) + n(B) - n(A ∩ B)
\`\`\`
- Para encontrar a interseção quando sabemos a união e os totais:
\`\`\`text
n(A ∩ B) = [n(A) + n(B)] - n(A ∪ B)
\`\`\`

### Princípio da Casa dos Pombos (Gavetas de Dirichlet):
Se você tem $N$ objetos (pombos) para distribuir em $K$ compartimentos (casas), e $N > K$, então pelo menos um compartimento terá no mínimo $\\lceil N / K \\rceil$ objetos.
- *Exemplo clássico*: Com 26 servidores e 5 racks, como $26/5 = 5{,}2$, ao menos um rack receberá no mínimo 6 servidores.
        `
      },
      {
        id: "rlm-combinatoria-probabilidade",
        title: "4. Análise Combinatória e Probabilidade",
        content: `
### Combinação vs Arranjo:
- **Combinação Simples (A ordem NÃO importa - grupos, comissões, equipes)**:
  $$C(n, k) = \\frac{n!}{k!(n - k)!}$$
- **Arranjo Simples (A ordem IMPORTA - senhas, pódios, cargos diferenciados)**:
  $$A(n, k) = \\frac{n!}{(n - k)!}$$

### Probabilidade Clássica e Sucessiva Sem Reposição:
- Probabilidade básica: $P(A) = \\frac{\\text{Casos Favoráveis}}{\\text{Casos Possíveis}}$.
- Eventos sucessivos dependentes (sem reposição):
  $$P(A \\cap B) = P(A) \\times P(B \\mid A)$$
  *Lembre-se sempre de subtrair 1 do numerador e 1 do denominador na segunda retirada!*
        `
      }
    ]
  },

  // =========================================================================
  // MÓDULO 4: ATUALIDADES E GOVERNO DIGITAL
  // =========================================================================
  {
    id: "atualidades",
    title: "Atualidades & Governo Digital",
    icon: "🌐",
    description: "Transformação digital do Estado, Gov.br, CadÚnico/CNIS, Ética em IA e Soberania de Dados.",
    sections: [
      {
        id: "atualidades-governo-digital",
        title: "1. Estratégia de Governo Digital e Plataforma Gov.br",
        content: `
### Pilares do Governo Digital no Brasil (Lei nº 14.129/2021)
A Dataprev é o braço tecnológico que viabiliza as políticas sociais e previdenciárias brasileiras.

#### Principais Diretrizes:
1. **Identidade Digital Cidadã Única (Gov.br)**:
   - Níveis de confiabilidade da conta:
     - **Bronze**: Cadastro básico validado pela Receita Federal ou Previdência.
     - **Prata**: Validação por internet banking conveniado ou bases de servidores públicos federais.
     - **Ouro**: Validação biométrica facial pelo TSE / Carteira Digital de Trânsito ou certificado digital ICP-Brasil.
2. **Princípio do "Once-Only" (Apenas Uma Vez)**: O cidadão não deve ser obrigado a fornecer repetidamente ao Estado dados ou certidões que o próprio governo já possui.
3. **Interoperabilidade**: Integração segura entre bases cadastrais (ConectaGov, Barramento de Serviços).
        `
      },
      {
        id: "atualidades-ia-etica",
        title: "2. Inteligência Artificial e Viés Algorítmico no Serviço Público",
        content: `
### Riscos Éticos em Algoritmos Governamentais
- **Algorithmic Bias (Viés Algorítmico)**: Quando modelos preditivos treinados com dados históricos reproduzem ou amplificam desigualdades sociais, raciais ou de gênero.
- **Princípio da Explicabilidade (XAI - Explainable AI)**: Toda decisão automatizada que indefira ou modifique um direito do cidadão (como um benefício do INSS) deve conter justificativa compreensível e passível de revisão humana.
- **Soberania de Dados**: A garantia de que bases estratégicas da nação permaneçam sob controle nacional e sob a égide das leis brasileiras.
        `
      }
    ]
  },

  // =========================================================================
  // MÓDULO 5: LEGISLAÇÃO DE PROTEÇÃO DE DADOS (LGPD, MARCO CIVIL, LAI)
  // =========================================================================
  {
    id: "legislacao",
    title: "Legislação & Proteção de Dados (LGPD, Marco Civil, LAI)",
    icon: "⚖️",
    description: "Lei 13.709/2018 (LGPD), Marco Civil da Internet (Lei 12.965/14) e Lei de Acesso à Informação (Lei 12.527/11).",
    sections: [
      {
        id: "leg-lgpd-principios",
        title: "1. LGPD - Os 10 Princípios do Artigo 6º",
        content: `
### Tabela Esquematizada dos Princípios da LGPD (Art. 6º):

| Princípio | Definição / Significado Legal |
| :--- | :--- |
| **Finalidade** | Realização do tratamento para propósitos legítimos, específicos e explícitos. |
| **Adequação** | Compatibilidade do tratamento com as finalidades informadas ao titular. |
| **Necessidade (Minimização)** | Limitação do tratamento ao **mínimo estritamente necessário** para a finalidade. |
| **Livre Acesso** | Consulta facilitada e **gratuita** aos titulares sobre forma e duração do tratamento. |
| **Qualidade dos Dados** | Garantia de exatidão, clareza e atualização periódica das informações. |
| **Transparência** | Informações claras, precisas e acessíveis sobre os critérios do tratamento. |
| **Segurança** | Medidas técnicas e administrativas para proteger dados contra acessos não autorizados. |
| **Prevenção** | Adoção de medidas prévias para evitar ocorrência de danos. |
| **Não Discriminação** | Impossibilidade de tratamento para fins discriminatórios ilícitos ou abusivos. |
| **Responsabilização** | Demonstração eficaz da observância das normas de proteção de dados. |
        `
      },
      {
        id: "leg-lgpd-bases",
        title: "2. Dados Pessoais Comuns vs Dados Pessoais Sensíveis",
        content: `
### Distinção Crucial (Art. 5º da LGPD):
- **Dado Pessoal Comum**: Informação relacionada a pessoa natural identificada ou identificável (Nome, CPF, RG, E-mail, Endereço IP).
- **Dado Pessoal Sensível (Rol Taxativo do Art. 5º, II)**:
  - Origem racial ou étnica;
  - Convicção religiosa;
  - Opinião política;
  - Filiação a sindicato ou a organização religiosa, filosófica ou política;
  - Dado referente à saúde ou à vida sexual;
  - Dado genético ou biométrico (quando vinculado a pessoa física).

> **Atenção:** CPF e dados financeiros/salariais NÃO são classificados juridicamente como dados sensíveis na LGPD, embora exijam proteção e sigilo bancário/fiscal.
        `
      },
      {
        id: "leg-lgpd-agentes",
        title: "3. Agentes de Tratamento e o Encarregado (DPO)",
        content: `
### Papéis na LGPD:
1. **Controlador**: Pessoa natural ou jurídica a quem competem as **decisões** sobre o tratamento dos dados pessoais.
2. **Operador**: Pessoa natural ou jurídica que realiza o tratamento de dados pessoais **em nome do controlador**.
3. **Encarregado de Dados (DPO - Data Protection Officer)**:
   - Canal de comunicação entre o Controlador, os Titulares e a ANPD (Autoridade Nacional de Proteção de Dados).
   - Orienta os funcionários da instituição sobre práticas de privacidade.
   - Os órgãos públicos são OBRIGADOS a nomear um encarregado.
        `
      },
      {
        id: "leg-marco-civil-lai",
        title: "4. Prazos Críticos: Marco Civil da Internet e LAI",
        content: `
### Marco Civil da Internet (Lei nº 12.965/2014) - Guarda de Registros:
- **Registros de Conexão** (IP de origem, data e hora de conexão à rede): Provedores de acesso devem guardar por **1 ANO** em sigilo (Art. 13).
- **Registros de Aplicação** (logs de acesso a sites, apps, logins): Provedores de aplicação comerciais devem guardar por **6 MESES** (Art. 15).

---

### Lei de Acesso à Informação (LAI - Lei nº 12.527/2011) - Graus de Sigilo:
Mnemônico: **25 - 15 - 5**
- **Ultrassecreta**: Prazo máximo de até **25 anos**.
- **Secreta**: Prazo máximo de até **15 anos**.
- **Reservada**: Prazo máximo de até **5 anos**.
        `
      }
    ]
  },

  // =========================================================================
  // MÓDULO 6: CONHECIMENTOS ESPECÍFICOS DE TI
  // =========================================================================
  {
    id: "especificos",
    title: "Conhecimentos Específicos de TI (Arquitetura, DevOps, DB e Ágil)",
    icon: "💻",
    description: "SOLID, Padrões GoF, Microsserviços, Docker, Kubernetes, CI/CD, ACID, NoSQL, OWASP, Scrum, ITIL v4.",
    sections: [
      {
        id: "esp-solid",
        title: "1. Princípios SOLID de Design Orientado a Objetos",
        content: `
### Acrônimo SOLID (Uncle Bob):
- **S - Single Responsibility Principle (SRP)**: Uma classe deve ter uma única razão para mudar. Evita classes infladas ("God Classes").
- **O - Open/Closed Principle (OCP)**: Entidades de software devem estar abertas para extensão, mas fechadas para modificação. Consiga isso através de herança polimórfica e interfaces.
- **L - Liskov Substitution Principle (LSP)**: Subclasses devem poder substituir suas classes base sem quebrar o comportamento do sistema.
- **I - Interface Segregation Principle (ISP)**: Muitas interfaces específicas são melhores que uma única interface genérica gorda. Clientes não devem ser forçados a depender de métodos que não utilizam.
- **D - Dependency Inversion Principle (DIP)**: Módulos de alto nível não devem depender de módulos de baixo nível; ambos devem depender de abstrações.
        `
      },
      {
        id: "esp-gof",
        title: "2. Padrões de Projeto GoF (Gang of Four)",
        content: `
### Divisão Clássica dos 23 Padrões GoF:

#### A. Criacionais (Creation):
- **Singleton**: Garante apenas 1 instância da classe com ponto global de acesso.
- **Factory Method**: Define interface para criar objetos, delegando a instanciação para as subclasses.
- **Abstract Factory**: Cria famílias de objetos relacionados sem especificar suas classes concretas.
- **Builder**: Separa a construção de um objeto complexo da sua representação, permitindo passos graduais.

#### B. Estruturais (Structural):
- **Adapter**: Converte a interface de uma classe na interface esperada pelos clientes (Wrapper).
- **Decorator**: Adiciona responsabilidades a um objeto dinamicamente sem usar herança.
- **Facade**: Fornece uma interface simplificada unificada para um subsistema complexo.
- **Proxy**: Fornece um substituto ou marcador de localização para controlar o acesso a outro objeto.

#### C. Comportamentais (Behavioral):
- **Strategy**: Define uma família de algoritmos, encapsula cada um e os torna intercambiáveis em tempo de execução.
- **Observer**: Notifica automaticamente dependentes quando o estado do sujeito observado muda (Pub/Sub).
- **Command**: Encapsula uma requisição como um objeto, permitindo parametrizar clientes com filas ou operações de desfazer (undo).
        `
      },
      {
        id: "esp-microsservicos-resiliencia",
        title: "3. Microsserviços, DDD, Padrão Saga e Resiliência",
        content: `
### Arquitetura de Microsserviços Moderna:
- **Domain-Driven Design (DDD)**: O **Bounded Context** (Contexto Delimitado) define a fronteira conceitual e linguística ideal para modelar cada microsserviço.
- **Padrão Saga**: Gerencia transações distribuídas entre múltiplos microsserviços sem travas globais (Two-Phase Commit).
  - Cada microsserviço executa sua transação local.
  - Em caso de erro, executam-se **transações compensatórias** que desfazem os passos anteriores.
  - Modos: **Orquestrada** (um maestro central coordena) ou **Coreografada** (eventos reativos entre serviços).
- **Circuit Breaker (Disjuntor de Resiliência)**:
  - **Closed**: Funcionamento normal.
  - **Open**: Falhas ultrapassam o limite; chamadas são rejeitadas imediatamente (Fast Fail / Fallback).
  - **Half-Open**: Permite algumas requisições de teste para validar a recuperação do serviço.
        `
      },
      {
        id: "esp-docker-k8s",
        title: "4. Contêineres (Docker) e Orquestração (Kubernetes)",
        content: `
### Docker Essentials:
- **Multi-Stage Build**: Prática indispensável em produção. Usa uma imagem rica para compilar e copia apenas o binário final para uma imagem leve (Alpine/Distroless), reduzindo o tamanho e vulnerabilidades.
- **Volumes**:
  - **Named Volumes**: Totalmente gerenciados pelo Docker em \`/var/lib/docker/volumes/\`. Recomendados para bancos de dados e produção.
  - **Bind Mounts**: Mapeamento direto de uma pasta do host. Dependem do caminho da máquina física.

---

### Kubernetes (K8s) Core Objects:
- **Pod**: A menor unidade executável no K8s. Compartilha IP, portas e volumes entre seus contêineres.
- **Service Types**:
  - **ClusterIP** (Padrão): IP virtual interno, visível apenas dentro do cluster.
  - **NodePort**: Abre uma porta estática (30000-32767) em cada nó do cluster.
  - **LoadBalancer**: Cria um balanceador de carga externo gerenciado pela nuvem pública.
- **Probes (Sondas de Saúde)**:
  - **Liveness**: Se falhar, o Kubelet **mata e reinicia** o contêiner.
  - **Readiness**: Se falhar, o Pod **não recebe tráfego** do Service (não é reiniciado).
  - **Startup**: Protege contêineres que demoram para iniciar, adiando as outras probes.
        `
      },
      {
        id: "esp-banco-dados",
        title: "5. Bancos de Dados: ACID, Isolamento ANSI e NoSQL",
        content: `
### Propriedades ACID (Relacional):
- **A - Atomicidade**: Tudo ou nada.
- **C - Consistência**: Respeita todas as restrições e regras de integridade.
- **I - Isolamento**: Transações concorrentes não sofrem interferência.
- **D - Durabilidade**: O commit é gravado em disco de forma persistente.

#### Níveis de Isolamento ANSI SQL:
1. **Read Uncommitted**: Menor isolamento. Permite *Dirty Read* (ler dados não commitados).
2. **Read Committed**: Impede *Dirty Read*. Permite *Non-repeatable Read* e *Phantom Read*.
3. **Repeatable Read**: Impede *Dirty Read* e *Non-repeatable Read*. Permite *Phantom Read*.
4. **Serializable**: Maior isolamento. Impede **TODAS** as anomalias.

---

### Teorema CAP (Sistemas Distribuídos):
Em um ambiente distribuído com partições de rede inevitáveis (**P**), você deve escolher:
- **CP (Consistência + Tolerância a Partição)**: Bloqueia leituras até sincronizar (ex.: HBase, MongoDB primário).
- **AP (Disponibilidade + Tolerância a Partição)**: Sempre responde, aceitando dados desatualizados temporariamente - Consistência Eventual (ex.: Cassandra, DynamoDB).
        `
      },
      {
        id: "esp-seguranca-owasp",
        title: "6. Segurança da Informação, OWASP e Criptografia",
        content: `
### Criptografia:
- **Simétrica (Chave Secreta Compartilhada)**: Rápida, eficiente para grandes volumes. Exemplo: **AES**.
- **Assimétrica (Chave Pública + Chave Privada)**: Chave pública cifra; chave privada decifra (e vice-versa para assinatura digital). Exemplos: **RSA, ECC**.
- **Hash Criptográfico**: Função matemática unidirecional. Exemplos seguros: **SHA-256, bcrypt, Argon2**.

---

### Principais Falhas do OWASP Top 10:
1. **SQL Injection (SQLi)**: Entrada maliciosa altera a consulta SQL. Mitigação: **Prepared Statements / Consultas Parametrizadas**.
2. **Cross-Site Scripting (XSS)**: Injeção de scripts maliciosos no navegador de outros usuários. Mitigação: Sanitização de tags e codificação de caracteres de saída (Output Encoding).
3. **Cross-Site Request Forgery (CSRF)**: Força o navegador da vítima a executar ações não desejadas em uma aplicação na qual está autenticada. Mitigação: Tokens CSRF sincronizados (*SameSite cookies*).
4. **Broken Access Control**: Falhas na autorização permitindo acesso a recursos alheios.
        `
      },
      {
        id: "esp-agil-itil",
        title: "7. Governança Ágil (Scrum, Kanban) e ITIL v4",
        content: `
### Scrum Guide Essencial:
- **Papéis (Scrum Team)**:
  - **Product Owner (PO)**: Maximiza o valor do produto e gerencia o Product Backlog.
  - **Scrum Master**: Garante que o Scrum seja compreendido e remove impedimentos.
  - **Developers**: Desenvolvem o Incremento utilizável que atenda à Definição de Pronto (**DoD**).
- **Eventos Timebox**:
  - Sprint Planning (Planejamento da Sprint)
  - Daily Scrum (15 minutos para os Desenvolvedores)
  - Sprint Review (Demonstração e feedback com stakeholders)
  - Sprint Retrospective (Melhoria contínua do processo)

---

### Kanban & Métricas de Fluxo:
- **WIP Limits (Limites de Trabalho em Andamento)**: Reduzem o tempo de ciclo, impedem sobrecarga e revelam gargalos (*"Pare de começar e comece a terminar"*).
- **Lead Time**: Tempo desde o pedido do cliente até a entrega final.
- **Cycle Time**: Tempo desde o início real do desenvolvimento até a conclusão.

---

### ITIL v4:
- **Gerenciamento de Incidentes**: Foco em **restaurar a operação normal do serviço o mais rápido possível**, aplicando soluções de contorno (*workaround*).
- **Gerenciamento de Problemas**: Foco em **descobrir a causa-raiz (root cause)** para prevenir a recorrência de incidentes.
        `
      }
    ]
  }
];
