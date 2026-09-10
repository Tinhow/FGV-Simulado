# Simulado Oficial Dataprev (FGV) + Embasamento Teórico Completo

Mini site interativo desenvolvido para estudo e preparação intensiva para o concurso da **DATAPREV (Empresa de Tecnologia e Informações da Previdência)**, baseado na prova oficial da banca **Fundação Getúlio Vargas (FGV)** para o cargo de **Analista de Tecnologia da Informação**.

---

## 🚀 Como Executar

A aplicação foi construída com tecnologias web puras (HTML5, CSS3 moderno e Vanilla JavaScript), **sem necessidade de nenhuma instalação, biblioteca externa ou processo de compilação**:

1. Basta abrir o arquivo `index.html` diretamente em qualquer navegador moderno (Chrome, Edge, Firefox, Brave, Safari).
2. Opcionalmente, caso queira rodar via servidor local (ex.: Python ou Node):
   ```bash
   # Com Python:
   python -m http.server 8080
   # Em seguida acesse: http://localhost:8080
   ```

---

## 📋 Funcionalidades Principais

### 1. Simulado Completo (70 Questões Cobrindo TODOS os Assuntos da Prova)
O caderno contém exatamente as **70 questões oficiais** com 5 alternativas (A, B, C, D, E) cada, distribuídas nas 6 disciplinas do certame:
- **Língua Portuguesa** (12 questões - Q1 a Q12): Interpretação inferencial estilo FGV, conectivos concessivos/causais, regência e crase, orações adjetivas restritivas vs explicativas, paralelismo e semântica.
- **Língua Inglesa** (12 questões - Q13 a Q24): Inglês instrumental para TI, cloud computing, falsos cognatos (*comprehensive, eventually*), modais na RFC 2119 (*SHALL, MUST, SHOULD*), arquitetura Zero Trust e phrasal verbs.
- **Raciocínio Lógico-Matemático** (6 questões - Q25 a Q30): Negações de De Morgan (MANÉ), equivalências da condicional (Contrapositiva), teoria dos conjuntos e diagramas de Venn, Princípio da Casa dos Pombos, combinatória e probabilidades.
- **Atualidades** (5 questões - Q31 a Q35): Transformação digital do Estado, plataforma Gov.br, inteligência artificial ética e viés algorítmico, inclusão sociodigital e interoperabilidade (CadÚnico/CNIS).
- **Legislação & Proteção de Dados** (5 questões - Q36 a Q40): LGPD (Lei 13.709/18 - 10 princípios do Art. 6º, bases legais e dados sensíveis, DPO/ANPD), Marco Civil da Internet (Lei 12.965/14 - prazos de 1 ano para conexão e 6 meses para aplicação) e Lei de Acesso à Informação (LAI - Lei 12.527/11 - prazos de 25, 15 e 5 anos).
- **Conhecimentos Específicos de TI** (30 questões - Q41 a Q70):
  - Engenharia de Software: Princípios SOLID, Padrões GoF (Singleton, Adapter, Strategy), Pirâmide de Testes e TDD (Red-Green-Refactor).
  - Microsserviços & Cloud: Decomposição por DDD (Bounded Context), Padrão Saga para transações distribuídas, Circuit Breaker e APIs RESTful (Idempotência e HTTP).
  - DevOps & Contêineres: Dockerfile, Multi-Stage Builds, Volumes Nomeados, Kubernetes (Pods, ClusterIP, NodePort, LoadBalancer, Probes de Liveness/Readiness), CI/CD (SAST vs DAST) e Deploys Canary / Blue-Green.
  - Bancos de Dados: Propriedades ACID, Níveis de Isolamento ANSI SQL (Serializable, Repeatable Read, Read Committed), Índices B-Tree vs Hash, NoSQL e Teorema CAP.
  - Segurança Cibernética: Criptografia Simétrica (AES) vs Assimétrica (RSA/ECC), Hashes, OWASP Top 10 (SQLi, XSS, CSRF), tokens JWT e OAuth 2.0.
  - Governança Ágil: Scrum Guide atualizado (Papéis, eventos timebox, DoD), Kanban (WIP limits, Lead Time vs Cycle Time) e ITIL v4 (Incidentes vs Problemas).

---

### 2. Modos de Estudo
- **Modo Treino**: Ao selecionar qualquer alternativa, o sistema exibe instantaneamente se a resposta está correta ou errada, acompanhada do **Gabarito Oficial Comentado** detalhando a fundamentação e a falha de cada uma das opções incorretas.
- **Modo Prova Real**: Simulação realista com **cronômetro regressivo oficial de 4 horas e 30 minutos**. O gabarito e a nota só são revelados após a submissão formal da prova.

---

### 3. Aba de Embasamento Teórico Completo
- Módulos aprofundados para cada assunto do edital, com resumos didáticos, tabelas comparativas, quadros mnemônicos e avisos de *"Pegadinha Clássica da FGV"*.
- Cada seção teórica conta com um botão direto de atalho: **"🎯 Praticar questões deste tema"**, permitindo fixar o conteúdo imediatamente no simulado.

---

### 4. Caderno de Erros & Favoritos
- Todas as questões marcadas incorretamente são catalogadas automaticamente no **Caderno de Erros**, permitindo ao estudante revisar a justificativa do erro e refazer exclusivamente as questões erradas.
- Marcador de **Dúvida (Flag)** e **Salvar/Favoritar** para filtrar questões que exigem revisão antes da prova.

---

### 5. Painel de Desempenho & Estatísticas
- Cálculo de aproveitamento geral e cobertura da prova.
- Gráficos em barra do percentual de acerto por disciplina.
- Histórico de tentativas gravado no navegador via `localStorage`.

---

### 6. Acessibilidade e Conforto
- Alternador de **Tema Escuro (Dark Mode)** e **Tema Claro**.
- Botões de ajuste de tamanho de fonte (**A-** e **A+**) para leitura confortável durante horas de estudo.
- Suporte a navegação por teclado (teclas 1 a 5 ou A a E para marcar opções, setas ← e → para avançar e retroceder).

---

Bons estudos e excelente preparação para a DATAPREV!
