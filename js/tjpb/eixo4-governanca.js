/* TJPB 2026/2027 · Eixo 4 — Fundamentos de TI e Governança.
   Teoria + questões INÉDITAS no estilo FGV (não são de prova oficial). */
{
  tjpbModulos.push({
    id: "tj-gov",
    title: "Fundamentos de TI e Governança",
    icon: "🏛️",
    description:
      "Redes, segurança da informação, criptografia e os frameworks COBIT 2019 e ITIL 4 aplicados à gestão pública de TI.",
    sections: [
      // =====================================================================
      {
        id: "tj-redes",
        title: "Redes de computadores",
        content: `
### O que a FGV cobra aqui
Redes aparecem em questões curtas e de detalhe: em que camada está cada protocolo ou equipamento, TCP x UDP, portas bem conhecidas, registros DNS e, quase sempre, um cálculo de sub-rede com CIDR. Nada de configuração de roteador: a banca quer o conceito certo e a conta certa.

#### Modelo OSI x TCP/IP
| Camada OSI | TCP/IP | Protocolos e exemplos | Equipamento | Unidade (PDU) |
| --- | --- | --- | --- | --- |
| 7 Aplicação | Aplicação | HTTP, DNS, SMTP, FTP, SSH, DHCP, SNMP | Proxy, WAF | Dados |
| 6 Apresentação | Aplicação | Codificação, compressão, criptografia (TLS na prática) | — | Dados |
| 5 Sessão | Aplicação | Controle de diálogo, RPC | — | Dados |
| 4 Transporte | Transporte | **TCP, UDP** (QUIC roda sobre UDP) | Firewall de estado | Segmento / datagrama |
| 3 Rede | Internet | **IP, ICMP**, IPsec, OSPF, BGP | **Roteador**, switch L3 | Pacote |
| 2 Enlace | Acesso à rede | Ethernet, Wi-Fi (802.11), PPP, ARP | **Switch**, bridge, access point | Quadro |
| 1 Física | Acesso à rede | Sinais, cabos, fibra | **Hub**, repetidor | Bits |

> **⚠️ Pegadinha:** DNS e DHCP prestam "serviço de rede", mas são protocolos de **aplicação**. ICMP (o do ping) é de **rede**, mesmo viajando dentro do IP.

#### TCP x UDP
| | **TCP** | **UDP** |
| --- | --- | --- |
| Conexão | Orientado a conexão (handshake de 3 vias: SYN, SYN-ACK, ACK) | Sem conexão |
| Confiabilidade | Confirmação (ACK), retransmissão, ordenação | Nenhuma garantia de entrega ou ordem |
| Controle | De fluxo (janela) e de congestionamento | Não tem |
| Overhead | Maior | Menor, baixa latência |
| Usos | HTTP/1.1 e HTTP/2, SMTP, SSH, FTP | DNS (consultas), DHCP, VoIP, streaming, QUIC/HTTP/3 |

#### Portas bem conhecidas
| Porta | Serviço | Porta | Serviço |
| --- | --- | --- | --- |
| 20/21 | FTP (dados/controle) | 110 | POP3 |
| 22 | SSH, SFTP | 143 | IMAP |
| 23 | Telnet (texto claro) | 443 | HTTPS |
| 25 | SMTP (entre servidores) | 587 | SMTP submissão (cliente) |
| 53 | DNS (UDP e TCP) | 993 / 995 | IMAPS / POP3S |
| 67/68 | DHCP (servidor/cliente, UDP) | 389 / 636 | LDAP / LDAPS |
| 80 | HTTP | 3389 | RDP (área de trabalho remota) |

#### IPv4: classes, CIDR e endereços especiais
Endereço de 32 bits. O modelo de **classes** (A: 1–126, máscara /8; B: 128–191, /16; C: 192–223, /24; D: 224–239, multicast; E: 240–255, experimental) foi substituído pelo **CIDR**, em que o prefixo (/n) diz quantos bits são de rede, sem amarração à classe.

| Faixa | Uso |
| --- | --- |
| 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16 | **Privados (RFC 1918)**: não roteáveis na Internet |
| 127.0.0.0/8 | Loopback |
| 169.254.0.0/16 | Link-local (APIPA: o host não obteve DHCP) |

**NAT** traduz endereços privados em público(s) na borda; na forma **PAT/NAT overload**, muitos hosts saem por um único IP público, diferenciados pela porta de origem.

#### Exemplo resolvido: cálculo de sub-rede
\`\`\`
Endereço: 192.168.10.77/27
Máscara:  255.255.255.224  (27 bits de rede, 5 bits de host)
Bloco:    256 - 224 = 32   → sub-redes em .0, .32, .64, .96, .128 ...
Posição:  77 fica entre 64 e 95
Rede:      192.168.10.64
Broadcast: 192.168.10.95
Hosts:     192.168.10.65 a 192.168.10.94
Qtde:      2^5 - 2 = 30 hosts utilizáveis
Divisão:  um /24 fatiado em /27 gera 2^3 = 8 sub-redes
Atalho:   /25 = 126 hosts · /26 = 62 · /27 = 30 · /28 = 14 · /29 = 6 · /30 = 2
\`\`\`

> **⚠️ Pegadinha:** a quantidade de hosts utilizáveis é 2 elevado aos bits de host **menos 2** (rede e broadcast). Um /28 tem 16 endereços, mas só **14** hosts.

#### IPv6 em linhas gerais
- 128 bits, em 8 grupos de 16 bits em hexadecimal; zeros à esquerda podem ser omitidos e **"::" substitui uma única sequência** de grupos zerados.
- **Não existe broadcast**: há unicast, multicast e anycast. O ARP é substituído pelo **NDP** (sobre ICMPv6).
- Autoconfiguração sem estado (**SLAAC**), loopback ::1, link-local fe80::/10. NAT deixa de ser necessário para economizar endereços.

#### DNS e DHCP
| Registro | Função |
| --- | --- |
| **A** | Nome → endereço IPv4 |
| **AAAA** | Nome → endereço IPv6 |
| **CNAME** | Apelido de outro nome (alias) |
| **MX** | Servidor de correio do domínio (com prioridade) |
| **NS** | Servidores autoritativos da zona |
| **PTR** | Resolução **reversa** (IP → nome) |
| **TXT** | Texto livre: SPF, DKIM, DMARC, validação de domínio |

**Resolução:** o cliente faz consulta **recursiva** ao seu resolvedor; o resolvedor faz consultas **iterativas** (raiz → TLD → autoritativo) e guarda a resposta em cache pelo **TTL**.

**DHCP (DORA):** **D**iscover (broadcast do cliente) → **O**ffer (servidor oferece IP) → **R**equest (cliente pede o ofertado) → **A**cknowledge (servidor confirma o empréstimo, o *lease*). Entrega IP, máscara, gateway e DNS. Em outra sub-rede, usa-se um **DHCP relay**.

#### HTTP/1.1 x HTTP/2 x HTTP/3
| Versão | Transporte | Destaques |
| --- | --- | --- |
| HTTP/1.1 | TCP | Texto, conexões persistentes (keep-alive), uma requisição por vez por conexão |
| HTTP/2 | TCP | Binário, **multiplexação** de fluxos em uma conexão, compressão de cabeçalhos (HPACK) |
| HTTP/3 | **QUIC sobre UDP** | TLS 1.3 embutido, evita o bloqueio de cabeça de fila do TCP, conexão mais rápida |

#### Equipamentos, VLAN e intermediários
- **Hub** (camada 1): repete o sinal para todas as portas; um único domínio de colisão.
- **Switch** (camada 2): encaminha pelo **endereço MAC**; cada porta é um domínio de colisão, mas todas ficam no mesmo domínio de broadcast.
- **Roteador** (camada 3): encaminha pelo **endereço IP** e **separa domínios de broadcast**.
- **VLAN** (IEEE 802.1Q): segmenta logicamente um switch em vários domínios de broadcast; a comunicação entre VLANs exige roteamento (roteador ou switch L3).

| | **Proxy (direto)** | **Proxy reverso** | **Balanceador de carga** |
| --- | --- | --- | --- |
| Atua em nome de | Clientes internos | Servidores | Pool de servidores |
| Uso típico | Filtro de navegação, cache, controle de acesso à Internet | Terminação TLS, cache, ocultar a topologia interna | Distribuir requisições (round robin, menos conexões) e checar a saúde dos nós |

> **⚠️ Pegadinha:** o proxy reverso protege e representa o **servidor**; o proxy comum representa o **cliente**. Muitos produtos (Nginx, HAProxy) fazem proxy reverso e balanceamento ao mesmo tempo.

**Intranet** é a rede interna com tecnologias da Internet; **extranet** estende parte dela a parceiros autorizados; **VPN** cria um túnel cifrado sobre rede pública (IPsec ou TLS), seja site a site, seja de acesso remoto.

#### Revisão relâmpago
- Hub = camada 1, switch = 2, roteador = 3; VLAN separa broadcast em switch.
- TCP: handshake, ACK, ordem; UDP: rápido, sem garantia. HTTP/3 usa QUIC sobre UDP.
- DNS 53, SSH 22, RDP 3389, SMTP 25, IMAP 143, POP3 110, HTTPS 443.
- Privados: 10/8, 172.16/12, 192.168/16. Hosts = 2 elevado aos bits de host, menos 2.
- MX = e-mail, PTR = reverso, CNAME = apelido, AAAA = IPv6.
- DHCP = DORA, em UDP 67/68.
- Proxy reverso fica na frente dos servidores; proxy comum, na frente dos clientes.
`,
      },
      // =====================================================================
      {
        id: "tj-seguranca",
        title: "Segurança da informação",
        content: `
### O que a FGV cobra aqui
A banca gosta de cenários: um incidente no tribunal e a pergunta "qual princípio foi violado", "qual ataque é esse" ou "qual controle mitiga". Os pares que mais derrubam candidatos são ameaça x vulnerabilidade, IDS x IPS, XSS x CSRF, incremental x diferencial e DAC x MAC x RBAC.

#### Princípios
| Princípio | Garante que... | Exemplo de violação |
| --- | --- | --- |
| **Confidencialidade** | Só quem tem autorização acessa | Vazamento de processo em segredo de justiça |
| **Integridade** | A informação não é alterada indevidamente | Adulteração de uma sentença no banco |
| **Disponibilidade** | Está acessível quando necessário | Portal fora do ar por DDoS |
| **Autenticidade** | A origem e a identidade são legítimas | E-mail falso em nome do presidente |
| **Irretratabilidade (não repúdio)** | O autor não pode negar a autoria | Advogado nega ter protocolado petição assinada |

**Ameaça** é o agente ou evento que pode causar dano (hacker, incêndio). **Vulnerabilidade** é a fraqueza explorável (sistema sem patch). **Risco** é a combinação da **probabilidade** de a ameaça explorar a vulnerabilidade com o **impacto** resultante.

> **⚠️ Pegadinha:** a organização controla as **vulnerabilidades**, não as ameaças. Aplicar patch reduz vulnerabilidade; não elimina a ameaça.

#### Malware
| Tipo | Característica decisiva |
| --- | --- |
| **Vírus** | Infecta arquivos e depende de **execução** do hospedeiro para se propagar |
| **Worm** | **Autopropaga-se** pela rede, explorando falhas, sem ação do usuário |
| **Cavalo de Troia** | Parece legítimo e esconde função maliciosa |
| **Ransomware** | Cifra dados (ou os vaza) e exige resgate |
| **Spyware / keylogger** | Coleta informações e digitação sem consentimento |
| **Rootkit** | Esconde sua presença e mantém acesso privilegiado |
| **Bot / botnet** | Máquina controlada remotamente; a rede de bots alimenta DDoS e spam |

**Engenharia social** explora a confiança humana. **Phishing** é a isca por e-mail ou site falso; **spear phishing** é direcionado a uma pessoa; **whaling** mira a alta administração.

#### Ataques clássicos
- **DoS / DDoS**: esgota recursos; DDoS parte de muitas origens (botnet). Afeta a **disponibilidade**.
- **MITM** (homem no meio): intercepta e pode alterar a comunicação; mitigado com TLS e validação de certificado.
- **Força bruta**: testa senhas em sequência; mitigado com bloqueio progressivo, CAPTCHA e MFA.
- **Credential stuffing**: reutiliza pares login/senha vazados de outros sites; mitigado com MFA e detecção de senhas vazadas.

#### OWASP Top 10: os riscos e a mitigação
A lista é revisada periodicamente e muda nomes e posições. Decore a **categoria** e a **mitigação**, não o número.

| Risco | O que é | Mitigação |
| --- | --- | --- |
| **Injeção** (SQL, comando, LDAP) | Entrada do usuário interpretada como código | **Consultas parametrizadas**, validação, menor privilégio no banco |
| **Quebra de controle de acesso** | Usuário acessa dado ou função alheia (ex.: trocar o id na URL) | Negar por padrão, checar autorização **no servidor** a cada requisição |
| **Falhas criptográficas** | Dado sensível sem cifra ou com algoritmo fraco | TLS, algoritmos atuais, hash de senha com bcrypt ou Argon2 |
| **XSS** | Script malicioso executa no navegador da vítima, no contexto do site | Codificar a saída conforme o contexto, CSP, cookie HttpOnly |
| **CSRF** | Site malicioso faz o navegador logado enviar requisição não desejada | **Token anti-CSRF**, cookie SameSite, reautenticação em operações críticas |
| **SSRF** | O **servidor** é induzido a buscar URL interna ou de metadados | Lista de permissão de destinos, bloqueio de faixas internas, segmentação |

> **⚠️ Pegadinha:** no XSS o atacante injeta script e explora a confiança do **usuário no site**; no CSRF não há script injetado, e o que se explora é a confiança do **site no navegador** autenticado. No SSRF a vítima é a **rede interna**, alcançada pelo próprio servidor.

#### Controle de acesso, AAA e MFA
| Modelo | Quem decide |
| --- | --- |
| **DAC** (discricionário) | O **dono** do recurso concede permissões (ACLs) |
| **MAC** (mandatório) | Política central compara **rótulos** do objeto com a **habilitação** do sujeito |
| **RBAC** | Permissões ligadas a **papéis** (servidor, magistrado, estagiário) |
| **ABAC** | Regras sobre **atributos** do sujeito, do recurso e do ambiente (horário, local, dispositivo) |

**AAA**: **A**utenticação (quem é você), **A**utorização (o que pode fazer), **A**uditoria/contabilização (*accounting*: o que fez). **MFA** exige fatores de **categorias diferentes**: algo que você sabe, algo que você tem, algo que você é.

> **⚠️ Pegadinha:** senha + PIN não é MFA, porque os dois são "algo que você sabe".

#### Firewall, IDS e IPS
| Controle | Como atua |
| --- | --- |
| **Filtro de pacotes** (sem estado) | Regras por IP, porta e protocolo, pacote a pacote (camadas 3 e 4) |
| **Firewall stateful** | Mantém **tabela de estado** das conexões e aceita respostas de sessões iniciadas legitimamente |
| **WAF** | Camada 7: inspeciona HTTP e bloqueia injeção, XSS e afins |
| **IDS** | **Detecta e alerta**; costuma ficar fora de linha (porta espelhada); passivo |
| **IPS** | Fica **em linha** com o tráfego e **bloqueia** ativamente |

Detecção por **assinatura** reconhece ataques conhecidos; por **anomalia** compara com o comportamento normal e pode flagrar ataques inéditos, com mais falsos positivos. HIDS fica no host; NIDS, na rede.

#### Backup
| Tipo | Copia | Restauração |
| --- | --- | --- |
| **Completo** | Tudo | Só o último completo |
| **Incremental** | O que mudou desde o **último backup de qualquer tipo** | Completo + **todos** os incrementais seguintes, em ordem |
| **Diferencial** | O que mudou desde o **último completo** | Completo + **apenas o último** diferencial |

Incremental: backup rápido, restauração lenta. Diferencial: cresce a cada dia, restauração rápida. Boa prática: regra 3-2-1 (três cópias, duas mídias, uma fora do local) e cópia offline contra ransomware.

#### Normas e LGPD
- **ISO/IEC 27001**: requisitos para estabelecer, implementar, manter e melhorar um **SGSI**; é a norma **certificável**.
- **ISO/IEC 27002**: guia de **boas práticas** para selecionar e implementar os **controles**; não certifica.
- A **LGPD** (Lei 13.709/2018) disciplina o tratamento de dados pessoais e exige medidas de segurança; os tribunais também a observam.

#### Revisão relâmpago
- CID + autenticidade + não repúdio. Risco = probabilidade x impacto.
- Worm se propaga sozinho; vírus precisa de hospedeiro; rootkit se esconde.
- Credential stuffing usa senhas vazadas; MFA é a defesa central.
- Injeção → parametrizar; XSS → codificar saída; CSRF → token; SSRF → lista de permissão.
- MAC = rótulos; RBAC = papéis; ABAC = atributos; DAC = dono decide.
- IDS alerta; IPS bloqueia em linha; WAF olha HTTP.
- Diferencial: completo + último diferencial. Incremental: completo + todos.
- 27001 certifica o SGSI; 27002 orienta controles.
`,
      },
      // =====================================================================
      {
        id: "tj-cripto",
        title: "Criptografia, certificados e HTTPS",
        content: `
### O que a FGV cobra aqui
O ponto mais cobrado é "qual chave usar": assinar e cifrar invertem os papéis das chaves. Em seguida vêm as propriedades do hash, a diferença entre HMAC e assinatura digital, a cadeia de certificação e o funcionamento híbrido do TLS. Associe sempre mecanismo a garantia.

#### Simétrica x assimétrica
| | **Simétrica** | **Assimétrica** |
| --- | --- | --- |
| Chaves | Uma única chave secreta compartilhada | Par: **pública** (divulgada) e **privada** (só do titular) |
| Desempenho | Muito rápida, serve para grandes volumes | Lenta, usada para pouco dado |
| Problema | Distribuir a chave com segurança | Garantir que a chave pública é mesmo de quem diz ser |
| Algoritmos | **AES** (bloco de 128 bits, chaves 128/192/256), ChaCha20; DES e **3DES** obsoletos | **RSA** (fatoração), **ECC** (curvas elípticas, chaves menores para a mesma segurança) |

**Diffie-Hellman** (e sua versão em curvas, ECDH) é um **acordo de chaves**: as partes derivam um segredo comum sem transmiti-lo. Não cifra nem assina; sem autenticação, é vulnerável a MITM.

#### Hash e HMAC
Propriedades de uma função de hash criptográfica:
- **Determinística** e de **tamanho fixo** (SHA-256 sempre gera 256 bits).
- **Unidirecional** (resistência à pré-imagem): não se recupera a mensagem a partir do resumo.
- **Resistência à segunda pré-imagem e a colisões**: é inviável achar duas entradas com o mesmo resumo.
- **Efeito avalanche**: mudar um bit muda o resumo inteiro.

**MD5 e SHA-1** têm colisões práticas e estão **obsoletos** para segurança; usa-se SHA-256 ou superior (família SHA-2 e SHA-3).

**HMAC** = hash + **chave secreta compartilhada**. Garante integridade e autenticidade da origem entre quem conhece a chave.

> **⚠️ Pegadinha:** hash não é cifra (não existe "decifrar o hash") e, sozinho, não garante autenticidade: quem altera a mensagem recalcula o resumo. HMAC **não** dá não repúdio, porque as duas partes têm a mesma chave e qualquer uma poderia ter gerado o código.

#### Assinatura digital x envelope digital
| Objetivo | Quem usa qual chave |
| --- | --- |
| **Assinar** (autoria, integridade, não repúdio) | Emissor calcula o hash e o cifra com a **sua chave privada**; qualquer um verifica com a **chave pública do emissor** |
| **Sigilo para alguém** | Cifra-se com a **chave pública do destinatário**; só a **privada do destinatário** decifra |
| **Envelope digital** | Cifra-se a mensagem com uma **chave simétrica de sessão** e cifra-se essa chave com a **pública do destinatário** |

> **⚠️ Pegadinha:** a chave privada **nunca** é de outra pessoa. Se a alternativa manda usar "a chave privada do destinatário" para cifrar, está errada. E a assinatura digital, sozinha, **não** dá sigilo: o documento assinado continua legível.

#### Mecanismo x garantia
| Mecanismo | Confidencialidade | Integridade | Autenticidade | Não repúdio |
| --- | --- | --- | --- | --- |
| Cifra simétrica (AES) | Sim | Só nos modos AEAD (ex.: AES-GCM) | Não | Não |
| Cifra com pública do destinatário | Sim | Não | Não | Não |
| Hash (SHA-256) | Não | Sim, contra alteração acidental | Não | Não |
| HMAC | Não | Sim | Sim (entre quem tem a chave) | **Não** |
| Assinatura digital | Não | Sim | Sim | **Sim** |
| Certificado digital | Não | — | Vincula chave pública a uma identidade | Base para o não repúdio |

#### Certificado digital e ICP-Brasil
O certificado **X.509** é um documento eletrônico, **assinado por uma Autoridade Certificadora (AC)**, que vincula uma **chave pública** a um titular. Contém, entre outros: titular, chave pública, emissor, número de série, período de validade e a assinatura da AC. **Não contém a chave privada.**

- **ICP-Brasil**: AC Raiz (operada pelo ITI) → ACs intermediárias → certificados de usuário final. A **AR** (Autoridade de Registro) identifica o requerente; quem emite é a AC.
- **Cadeia de confiança**: o navegador valida a assinatura de cada elo até uma AC raiz presente no seu repositório confiável.
- Tipos usuais: **A1** (chave armazenada em software) e **A3** (chave em hardware criptográfico, token ou cartão).
- **Revogação** (chave comprometida, desligamento): **CRL/LCR** é a lista de certificados revogados publicada periodicamente pela AC; **OCSP** é a consulta on-line do status de um certificado específico.
- Documentos assinados com certificado ICP-Brasil têm **presunção de veracidade** em relação ao signatário, o que explica seu uso no processo eletrônico.

> **⚠️ Pegadinha:** certificado **expirado** e certificado **revogado** são situações diferentes. A revogação ocorre antes do fim da validade e é verificada a qualquer tempo, por CRL ou OCSP.

> **⚠️ Pegadinha:** certificado **autoassinado** cifra o tráfego normalmente, mas não prova a identidade do site, porque não há AC confiável na cadeia; por isso o navegador exibe alerta.

#### TLS e HTTPS: criptografia híbrida
\`\`\`
1. ClientHello: versões, suítes de cifra, número aleatório (no 1.3, já envia a chave DH)
2. ServerHello + certificado do servidor
3. Cliente valida a cadeia até uma AC raiz confiável e o nome do site
4. Troca de chaves (ECDHE): ambos derivam o mesmo segredo
5. Segredo → chaves SIMÉTRICAS de sessão (AES-GCM ou ChaCha20)
6. Dados da aplicação trafegam cifrados com essas chaves simétricas
\`\`\`

A assimétrica autentica o servidor e viabiliza o acordo de chaves; a simétrica cifra o volume de dados. **TLS 1.3**: handshake de 1 RTT (o 1.2 usa 2), só suítes AEAD, remove a troca de chaves RSA estática e torna o **sigilo futuro** (*forward secrecy*) obrigatório. SSL e TLS 1.0/1.1 estão obsoletos.

#### Armazenamento de senhas
- Nunca cifrar de forma reversível nem guardar em texto claro: armazena-se um **hash de senha**.
- **Salt** aleatório e único por usuário: senhas iguais geram hashes diferentes e as tabelas pré-computadas (*rainbow tables*) perdem efeito.
- Funções **lentas e ajustáveis**: **bcrypt**, scrypt, **Argon2** (recomendada), PBKDF2. Um SHA-256 simples é rápido demais e favorece força bruta.

#### Revisão relâmpago
- Simétrica: rápida, uma chave (AES). Assimétrica: par de chaves (RSA, ECC).
- Assinar: privada do emissor; verificar: pública do emissor.
- Sigilo: pública do destinatário; decifrar: privada do destinatário.
- HMAC dá integridade e autenticidade, mas não não repúdio.
- MD5 e SHA-1 obsoletos; senha com salt + bcrypt/Argon2.
- Certificado = chave pública + identidade, assinado pela AC; CRL lista, OCSP consulta.
- TLS é híbrido; o 1.3 eliminou a troca de chaves RSA estática e usa DH efêmero no handshake completo (sigilo futuro).
`,
      },
      // =====================================================================
      {
        id: "tj-cobit",
        title: "COBIT 2019",
        content: `
### O que a FGV cobra aqui
COBIT cai em questões conceituais: separar **governança** de **gestão**, reconhecer o domínio de um objetivo (EDM x APO é o par preferido), listar princípios e componentes e entender a cascata de metas. No setor público, o cenário típico é o Comitê de Governança de TIC de um tribunal.

#### Governança x gestão
| | **Governança** | **Gestão** |
| --- | --- | --- |
| Responsável | **Conselho / alta administração** (no tribunal: Presidência e comitê de governança) | **Gestão executiva** (no tribunal: Secretaria de TI e gestores) |
| Verbos | **Avaliar, Dirigir e Monitorar** | Planejar, Construir, Executar e Monitorar |
| Pergunta | Estamos fazendo as coisas certas? | Estamos fazendo as coisas do jeito certo? |
| Domínio | EDM | APO, BAI, DSS, MEA |

> **⚠️ Pegadinha:** os dois lados "monitoram". Monitorar o cumprimento da direção estratégica é **EDM**; monitorar desempenho e controles internos no dia a dia é **MEA**, que é **gestão**.

#### Princípios
**Seis princípios do sistema de governança:**
1. Prover valor às partes interessadas.
2. Abordagem holística.
3. Sistema de governança dinâmico.
4. Governança distinta da gestão.
5. Adaptado às necessidades da organização.
6. Sistema de governança de ponta a ponta.

**Três princípios do framework de governança:** baseado em modelo conceitual; aberto e flexível; alinhado às principais normas e frameworks.

#### Os 40 objetivos em 5 domínios
| Domínio | Natureza | Qtde | Exemplos de objetivos |
| --- | --- | --- | --- |
| **EDM** Avaliar, Dirigir e Monitorar | Governança | 5 | EDM01 estrutura de governança; EDM02 entrega de benefícios; EDM03 otimização de risco; EDM04 otimização de recursos; EDM05 engajamento das partes interessadas |
| **APO** Alinhar, Planejar e Organizar | Gestão | 14 | Estratégia, arquitetura corporativa, portfólio, orçamento, pessoas, fornecedores, risco, **segurança (APO13)**, dados |
| **BAI** Construir, Adquirir e Implementar | Gestão | 11 | Programas, requisitos, construção de soluções, **mudanças de TI (BAI06)**, conhecimento, ativos, configuração, projetos |
| **DSS** Entregar, Servir e Suportar | Gestão | 6 | Operações, **requisições e incidentes (DSS02)**, **problemas (DSS03)**, continuidade, serviços de segurança |
| **MEA** Monitorar, Avaliar e Analisar | Gestão | 4 | Desempenho e conformidade, sistema de controle interno, conformidade com requisitos externos, asseguração |

> **⚠️ Pegadinha:** **APO** gerencia a **estratégia de TI** (gestão); **EDM** garante que a governança está estabelecida e que a direção atende às partes interessadas. Plano diretor de TI, orçamento e gestão de riscos do dia a dia ficam em APO.

#### Os 7 componentes (antigos habilitadores)
1. Processos.
2. Estruturas organizacionais.
3. Princípios, políticas e procedimentos.
4. Informação.
5. Cultura, ética e comportamento.
6. Pessoas, habilidades e competências.
7. Serviços, infraestrutura e aplicações.

Os componentes podem ser **genéricos** ou **variantes** para uma **área de foco** (ex.: segurança da informação, DevOps, pequenas organizações).

#### Fatores de design
São os fatores que influenciam o desenho do sistema de governança sob medida: estratégia da organização, metas corporativas, perfil de risco, questões relativas a I&T, cenário de ameaças, requisitos de conformidade, papel da TI, modelo de contratação (sourcing), métodos de implementação de TI, estratégia de adoção de tecnologia e porte da organização. Eles definem **prioridades** entre os 40 objetivos e o nível de capacidade almejado para cada um.

#### Cascata de metas
\`\`\`
Necessidades e direcionadores das partes interessadas
   → Metas corporativas (13, perspectivas do BSC)
      → Metas de alinhamento (13, ligadas a I&T)
         → Objetivos de governança e gestão (40)
\`\`\`
A cascata traduz o que a sociedade, o CNJ e os jurisdicionados esperam em metas concretas de TI e, daí, nos objetivos a priorizar.

#### Gestão de desempenho: capacidade e maturidade
O COBIT 2019 adota esquema inspirado no **CMMI**:

| Nível | Capacidade do processo |
| --- | --- |
| 0 | Falta de capacidade básica; abordagem incompleta |
| 1 | Processo realizado de modo informal, ainda incompleto |
| 2 | Atividades básicas realizadas de forma completa |
| 3 | Processo definido e organizado em toda a organização |
| 4 | Processo medido e controlado quantitativamente |
| 5 | Melhoria contínua, processo otimizado |

A **capacidade** se mede por processo (de 0 a 5); a **maturidade** é atribuída a uma **área de foco** como um todo.

> **⚠️ Pegadinha:** COBIT não é norma certificável nem metodologia de projeto. É um framework de **governança e gestão de I&T** que se alinha a ITIL, ISO/IEC 27001, PMBOK e TOGAF, sem substituí-los.

#### Aplicação à gestão pública de TI
- No Judiciário, o **CNJ** define a **Estratégia Nacional de TIC do Poder Judiciário (ENTIC-JUD)**, que orienta os tribunais quanto a governança, gestão, segurança e infraestrutura de TIC e acompanha indicadores de maturidade.
- Cada tribunal mantém um **Comitê de Governança de TIC** (papel de EDM: prioriza, direciona e acompanha) e uma área executiva de TI (papel de gestão).
- Instrumentos típicos: Plano Estratégico de TIC, **PDTIC**, gestão de riscos, portfólio de projetos e indicadores; órgãos de controle como o **TCU** avaliam a governança de TI pública com base em referenciais que bebem do COBIT.
- O valor esperado no setor público é o **interesse público**: melhor prestação jurisdicional, transparência e uso eficiente dos recursos.

#### Revisão relâmpago
- Governança = conselho, EDM (avaliar, dirigir, monitorar). Gestão = executivos, APO/BAI/DSS/MEA.
- 40 objetivos: EDM 5, APO 14, BAI 11, DSS 6, MEA 4.
- 6 princípios do sistema + 3 do framework.
- 7 componentes; antes se chamavam habilitadores.
- Fatores de design personalizam o sistema de governança.
- Cascata: partes interessadas → metas corporativas → metas de alinhamento → objetivos.
- Capacidade de processo de 0 a 5, inspirada no CMMI.
`,
      },
      // =====================================================================
      {
        id: "tj-itil",
        title: "ITIL 4",
        content: `
### O que a FGV cobra aqui
ITIL 4 é cobrado pelos conceitos-chave (valor, serviço, utilidade e garantia), pelo Sistema de Valor de Serviço e, sobretudo, pelas práticas operacionais: incidente x problema, requisição, mudança, central de serviço e nível de serviço. Cenários de central de atendimento de tribunal são o formato preferido.

#### Conceitos básicos
- **Valor**: benefícios percebidos, utilidade e importância de algo; é **cocriado** por provedor e consumidor.
- **Produto**: configuração de recursos da organização capaz de gerar valor para o consumidor.
- **Serviço**: meio de **viabilizar a cocriação de valor**, facilitando os resultados que o cliente deseja **sem que ele tenha de gerenciar custos e riscos específicos**.
- **Utilidade** (*fit for purpose*): **o que** o serviço faz; a funcionalidade que atende a uma necessidade.
- **Garantia** (*fit for use*): **como** o serviço se comporta; disponibilidade, capacidade, segurança e continuidade.

> **⚠️ Pegadinha:** um sistema de peticionamento com todas as funções (utilidade) mas que cai toda tarde não entrega valor; falta **garantia**. Valor exige as duas.

#### Sistema de Valor de Serviço (SVS)
Entrada: **oportunidade e demanda**. Saída: **valor**. Componentes:
1. **Princípios orientadores**.
2. **Governança**.
3. **Cadeia de valor de serviço**.
4. **Práticas**.
5. **Melhoria contínua**.

**Cadeia de valor de serviço**, com 6 atividades que se combinam em **fluxos de valor** (não é sequência fixa):

| Atividade | Propósito |
| --- | --- |
| **Planejar** | Entendimento comum da visão, do estado atual e da direção de melhoria |
| **Melhorar** | Melhoria contínua de produtos, serviços e práticas |
| **Engajar** | Relacionamento com as partes interessadas e entendimento de suas necessidades |
| **Desenho e transição** | Atender continuamente às expectativas de qualidade, custo e prazo |
| **Obter/construir** | Disponibilizar componentes de serviço quando e onde necessário |
| **Entregar e suportar** | Entregar e apoiar os serviços conforme as especificações acordadas |

#### As 4 dimensões
1. Organizações e pessoas.
2. Informação e tecnologia.
3. Parceiros e fornecedores.
4. Fluxos de valor e processos.

Fatores externos (políticos, econômicos, sociais, tecnológicos, legais e ambientais) influenciam as quatro.

#### Os 7 princípios orientadores
1. Foco no valor.
2. Comece de onde você está.
3. Progrida iterativamente com feedback.
4. Colabore e promova a visibilidade.
5. Pense e trabalhe de forma holística.
6. Mantenha a simplicidade e seja prático.
7. Otimize e automatize (nessa ordem: primeiro otimizar, depois automatizar).

#### 34 práticas em 3 grupos
| Grupo | Qtde | Exemplos |
| --- | --- | --- |
| **Gerenciamento geral** | 14 | Melhoria contínua, gestão de segurança da informação, gestão de relacionamento, gestão de fornecedores, gestão de riscos, gestão de portfólio, gestão de projetos |
| **Gerenciamento de serviço** | 17 | Central de serviço, gerenciamento de incidente, de problema, de requisição de serviço, habilitação de mudança, nível de serviço, configuração de serviço, gerenciamento de liberação, disponibilidade, capacidade e desempenho, continuidade |
| **Gerenciamento técnico** | 3 | **Gerenciamento de implantação**, gerenciamento de infraestrutura e plataforma, desenvolvimento e gerenciamento de software |

#### Incidente x problema x requisição x mudança
| | Definição | Objetivo | Exemplo no tribunal |
| --- | --- | --- | --- |
| **Incidente** | Interrupção não planejada ou redução da qualidade de um serviço | Restaurar a operação normal **o mais rápido possível** | O PJe ficou fora do ar |
| **Problema** | Causa, ou causa potencial, de um ou mais incidentes | Reduzir probabilidade e impacto, achando a **causa raiz** | Vazamento de memória que derruba o PJe toda semana |
| **Requisição de serviço** | Pedido do usuário por ação **já prevista** como parte normal do serviço | Atender pedidos padronizados | Criar acesso, instalar software homologado, resetar senha |
| **Mudança** | Adição, modificação ou remoção de algo que possa afetar serviços | Maximizar mudanças bem-sucedidas com avaliação de risco | Atualizar a versão do servidor de aplicação |

- **Solução de contorno** (*workaround*): reduz ou elimina o impacto de um incidente ou problema enquanto não há solução definitiva.
- **Erro conhecido**: problema que **já foi analisado**, mas ainda não resolvido.

> **⚠️ Pegadinha:** incidente não "vira" problema. O registro de problema é aberto **à parte** e pode coexistir com incidentes já encerrados por workaround.

#### Habilitação de mudança
| Tipo | Característica |
| --- | --- |
| **Padrão** | Baixo risco, bem compreendida, documentada e **pré-autorizada**; implementada sem nova autorização |
| **Normal** | Precisa ser **programada, avaliada e autorizada** pela autoridade de mudança conforme o processo |
| **Emergencial** | Deve ser implementada **o quanto antes** (ex.: falha grave de segurança); avaliação e autorização aceleradas |

A **autoridade de mudança** (*change authority*) é a pessoa ou grupo que autoriza a mudança; no ITIL 4 ela deve ser **descentralizada** e proporcional ao risco, em vez de um CAB único para tudo.

#### Outras práticas cobradas
- **Central de serviço**: ponto único de contato com os usuários; captura demanda de incidentes e requisições; deve ter empatia e visão do negócio.
- **Nível de serviço**: define metas claras baseadas no negócio. **SLA**: acordo documentado entre provedor e **cliente**. **OLA**: acordo **interno** entre unidades do próprio provedor. **Contrato de apoio** (*underpinning contract*): com **fornecedor externo**, sustenta o SLA.
- **Configuração de serviço**: mantém informação sobre os **itens de configuração (IC)**, como hardware, software, serviços e documentos, e suas relações, em CMDB ou CMS.
- **Liberação x implantação**: **liberação** torna serviços e recursos novos ou alterados **disponíveis para uso** (decisão de negócio); **implantação** **move** hardware, software ou documentação para o ambiente de produção ou outro ambiente (prática técnica). Pode-se implantar sem liberar, com *feature toggle*, por exemplo.

#### ITIL v3 x ITIL 4
| ITIL v3 / 2011 | ITIL 4 |
| --- | --- |
| Ciclo de vida com 5 estágios (estratégia, desenho, transição, operação e melhoria contínua) | Sistema de Valor de Serviço e cadeia de valor flexível |
| 26 processos e 4 funções | 34 **práticas** |
| Gerenciamento de mudança | **Habilitação** de mudança |
| Central de serviço como **função** | Central de serviço como **prática** |
| Provedor entrega valor | Valor **cocriado** com o consumidor; integra Agile, Lean e DevOps |

#### Revisão relâmpago
- Utilidade = o que faz; garantia = como se comporta. Valor exige as duas.
- SVS: princípios, governança, cadeia de valor, práticas, melhoria contínua.
- Cadeia de valor: planejar, melhorar, engajar, desenho e transição, obter/construir, entregar e suportar.
- 4 dimensões e 7 princípios orientadores; 34 práticas em 14 + 17 + 3.
- Incidente restaura rápido; problema busca a causa; erro conhecido = problema analisado e não resolvido.
- Mudança padrão é pré-autorizada; normal passa pela autoridade de mudança; emergencial é acelerada.
- SLA com cliente, OLA interno, contrato de apoio com fornecedor.
- Implantação move componentes; liberação os disponibiliza para uso.
`,
      },
    ],
  });

  tjpbQuestoes.push(
    // ------------------------------------------------------------- tj-redes
    tq(
      TJ_GOV,
      "Cálculo de sub-rede",
      "A Secretaria de Tecnologia da Informação de um Tribunal de Justiça reservou uma pequena sub-rede para os servidores de videoconferência das salas de audiência. Um desses servidores recebeu o endereço IPv4 172.20.13.200/28. O endereço de rede, o endereço de broadcast e a quantidade de hosts utilizáveis dessa sub-rede são, respectivamente:",
      [
        "172.20.13.200, 172.20.13.215 e 16 hosts.",
        "172.20.13.192, 172.20.13.223 e 30 hosts.",
        "172.20.13.192, 172.20.13.207 e 14 hosts.",
        "172.20.13.192, 172.20.13.207 e 16 hosts.",
        "172.20.13.128, 172.20.13.255 e 126 hosts.",
      ],
      2,
      "O prefixo /28 corresponde à máscara 255.255.255.240, com blocos de 16 endereços (.176, .192, .208...); 200 cai no bloco 192–207, de modo que a rede é .192, o broadcast é .207 e há 16 − 2 = 14 hosts utilizáveis. A alternativa com 16 hosts esquece de descontar rede e broadcast; a de 30 hosts e broadcast .223 usa um /27, e a de 126 hosts, um /25.",
      "tj-redes",
    ),
    tq(
      TJ_GOV,
      "TCP, UDP e protocolos",
      "Ao revisar as regras de firewall do datacenter de um Tribunal, um analista anotou as seguintes afirmativas sobre protocolos de transporte e de aplicação.\n\nI. O DNS utiliza predominantemente UDP na porta 53, podendo recorrer ao TCP na mesma porta, por exemplo, em transferências de zona.\nII. Por ser orientado a conexão, o UDP estabelece a sessão por meio do handshake de três vias (SYN, SYN-ACK, ACK) antes de enviar dados.\nIII. O HTTP/3 utiliza o protocolo QUIC, executado sobre UDP e com TLS 1.3 incorporado.\n\nEstá correto o que se afirma em",
      ["I, apenas.", "II, apenas.", "I e II, apenas.", "I e III, apenas.", "I, II e III."],
      3,
      "I está correta: consultas DNS usam UDP 53, e transferências de zona e respostas grandes usam TCP 53. III está correta: o HTTP/3 roda sobre QUIC, que usa UDP e integra o TLS 1.3. II está errada porque o handshake SYN, SYN-ACK, ACK é do TCP; o UDP não é orientado a conexão.",
      "tj-redes",
    ),
    tq(
      TJ_GOV,
      "Registros DNS",
      "Na migração do domínio institucional exemplo.jus.br para um novo provedor de DNS, a equipe de infraestrutura de um Tribunal listou as seguintes necessidades:\n\n1. Indicar o servidor que recebe as mensagens de correio eletrônico do domínio.\n2. Fazer com que portal.exemplo.jus.br seja um apelido de um nome hospedado em nuvem.\n3. Associar um nome a um endereço IPv6.\n4. Permitir a resolução reversa de um endereço IP para um nome.\n\nAssocie cada tipo de registro à necessidade correspondente.\n\n( ) AAAA\n( ) MX\n( ) PTR\n( ) CNAME\n\nA sequência correta, de cima para baixo, é:",
      ["3 – 1 – 4 – 2.", "1 – 3 – 4 – 2.", "3 – 1 – 2 – 4.", "4 – 1 – 3 – 2.", "3 – 4 – 1 – 2."],
      0,
      "AAAA mapeia nome em IPv6 (3), MX aponta o servidor de correio (1), PTR faz a resolução reversa (4) e CNAME cria um apelido (2). A troca entre PTR e CNAME e a confusão de AAAA com o registro de correio são os erros explorados pelos distratores. Lembre que o registro A, sem repetição, é o de IPv4.",
      "tj-redes",
    ),
    // --------------------------------------------------------- tj-seguranca
    tq(
      TJ_GOV,
      "OWASP: SSRF",
      "No sistema de processo eletrônico de um Tribunal, um formulário permite que o advogado informe a URL de um documento hospedado externamente; o servidor da aplicação baixa esse arquivo e o anexa aos autos. Em um teste de intrusão, a equipe informou endereços como http://10.0.0.5/admin e o endereço de metadados da nuvem, e o servidor devolveu o conteúdo desses recursos internos. A vulnerabilidade e a mitigação mais adequada são, respectivamente:",
      [
        "Cross-Site Scripting (XSS) armazenado; codificar a saída HTML conforme o contexto e adotar Content Security Policy.",
        "Cross-Site Request Forgery (CSRF); incluir token anti-CSRF imprevisível em cada formulário e usar cookies SameSite.",
        "Injeção de SQL; usar consultas parametrizadas e conceder ao usuário do banco de dados o menor privilégio necessário.",
        "Negação de serviço distribuída; limitar a taxa de requisições por origem e contratar mitigação de DDoS na borda da rede.",
        "Server-Side Request Forgery (SSRF); validar o destino por lista de permissões e bloquear faixas internas.",
      ],
      4,
      "O próprio servidor foi induzido a requisitar recursos internos a partir de uma URL fornecida pelo usuário, o que caracteriza SSRF; a defesa é restringir os destinos permitidos e bloquear endereços internos e de metadados. XSS executa script no navegador da vítima, CSRF faz o navegador autenticado enviar requisição indesejada e injeção de SQL altera consultas ao banco, nenhum deles descrito no cenário. Não houve esgotamento de recursos, então DDoS também não se aplica.",
      "tj-seguranca",
    ),
    tq(
      TJ_GOV,
      "Firewall, IDS e IPS",
      "A Secretaria de TI de um Tribunal de Justiça está redesenhando a proteção de perímetro do portal de serviços. Sobre os controles de rede considerados no projeto, assinale a opção correta.",
      [
        "O IDS é instalado em linha com o tráfego e descarta automaticamente os pacotes maliciosos, ao passo que o IPS se limita a gerar alertas para a equipe.",
        "O firewall stateful mantém uma tabela de estado das conexões, o que lhe permite aceitar as respostas de sessões iniciadas legitimamente.",
        "O WAF opera apenas nas camadas de rede e de transporte, filtrando endereços IP e portas, razão pela qual não é capaz de bloquear injeção de SQL.",
        "O filtro de pacotes sem estado inspeciona o conteúdo das requisições HTTP e, por isso, é suficiente para conter ataques de Cross-Site Scripting.",
        "O IDS baseado em assinaturas é a melhor opção para detectar ataques inéditos (zero-day), pois dispensa o conhecimento prévio dos padrões de ataque.",
      ],
      1,
      "O firewall com estado registra as conexões em andamento e libera o tráfego de retorno coerente com elas. A primeira alternativa inverte IDS (detecta e alerta) e IPS (em linha, bloqueia). O WAF atua justamente na camada de aplicação, inspecionando HTTP; o filtro de pacotes sem estado só vê cabeçalhos; e a detecção por assinatura depende de padrões já conhecidos, sendo fraca contra zero-day.",
      "tj-seguranca",
    ),
    tq(
      TJ_GOV,
      "Tipos de backup",
      "A política de backup do servidor de arquivos de um Tribunal prevê backup completo aos domingos à noite e backup diferencial nas noites de segunda a sábado. Na quinta-feira pela manhã, antes de qualquer novo backup, o servidor é atingido por ransomware e precisa ser restaurado ao estado mais recente possível. O conjunto mínimo de backups necessário para essa restauração é:",
      [
        "o completo de domingo e o diferencial de quarta-feira.",
        "o completo de domingo e os diferenciais de segunda, terça e quarta-feira, aplicados em ordem.",
        "apenas o diferencial de quarta-feira, que já contém todos os arquivos do servidor.",
        "o completo de domingo e o diferencial de segunda-feira, que serve de base para os seguintes.",
        "apenas o completo de domingo, pois os diferenciais registram somente metadados das alterações.",
      ],
      0,
      "O diferencial copia tudo o que mudou desde o último backup completo, de modo que o de quarta-feira já acumula as alterações de segunda e terça; basta somá-lo ao completo de domingo. Aplicar todos os backups em ordem é a lógica do incremental, não do diferencial. O diferencial, sozinho, não contém os arquivos que não mudaram desde domingo, e restaurar só o completo perderia três dias de trabalho.",
      "tj-seguranca",
    ),
    // ------------------------------------------------------------ tj-cripto
    tq(
      TJ_GOV,
      "Assinatura digital e sigilo",
      "Um magistrado precisa enviar a um perito um despacho de modo que (i) o perito possa comprovar a autoria e a integridade do documento, sem que o magistrado possa negar tê-lo emitido, e (ii) somente o perito consiga ler o conteúdo. Ambos possuem certificados digitais da ICP-Brasil. Para atender a (i) e a (ii), devem ser usadas, respectivamente:",
      [
        "a chave pública do magistrado para assinar e a chave privada do perito para cifrar.",
        "a chave privada do perito para assinar e a chave pública do magistrado para cifrar.",
        "a chave pública do perito para assinar e a chave privada do magistrado para cifrar.",
        "a chave privada do magistrado para assinar e a chave pública do perito para cifrar.",
        "a chave privada do magistrado para assinar e a chave privada do perito para cifrar.",
      ],
      3,
      "A assinatura digital é gerada com a chave privada do emissor, que só ele possui, garantindo autoria, integridade e não repúdio; o perito a verifica com a chave pública do magistrado. O sigilo exige cifrar com a chave pública do destinatário, pois só a privada do perito decifra (na prática, cifra-se uma chave de sessão simétrica, no chamado envelope digital). Nenhuma das partes tem acesso à chave privada da outra, o que elimina as demais opções.",
      "tj-cripto",
    ),
    tq(
      TJ_GOV,
      "Hash, HMAC e senhas",
      "Em uma revisão do módulo de autenticação de um sistema judicial, foram feitas as seguintes afirmativas.\n\nI. Funções de hash como o SHA-256 produzem saída de tamanho fixo e são unidirecionais, mas, sozinhas, não garantem autenticidade, pois quem altera a mensagem pode recalcular o resumo.\nII. O HMAC combina uma função de hash com uma chave secreta compartilhada e, por isso, assegura integridade, autenticidade da origem e não repúdio.\nIII. Para armazenar senhas, recomenda-se um salt aleatório por usuário e uma função deliberadamente lenta, como bcrypt ou Argon2, em vez de uma única aplicação do SHA-256.\n\nEstá correto o que se afirma em",
      ["I, apenas.", "I e III, apenas.", "II e III, apenas.", "I e II, apenas.", "I, II e III."],
      1,
      "I está correta: o hash detecta alteração, mas sem chave qualquer um recalcula o resumo da mensagem adulterada. III está correta: o salt neutraliza tabelas pré-computadas e funções lentas encarecem a força bruta. II está errada porque, como a chave do HMAC é compartilhada, qualquer das partes poderia ter gerado o código; não há não repúdio, que exige assinatura digital.",
      "tj-cripto",
    ),
    tq(
      TJ_GOV,
      "Certificados e TLS",
      "O portal de consulta processual de um Tribunal passou a aceitar apenas HTTPS com TLS 1.3 e certificado emitido por uma autoridade certificadora reconhecida. Sobre esse cenário, assinale a opção correta.",
      [
        "Durante toda a sessão, os dados da aplicação são cifrados com a chave privada do servidor, o que dispensa o uso de algoritmos simétricos.",
        "A revogação de um certificado X.509 só pode ser verificada após o término de sua validade, quando a AC publica a lista de certificados expirados.",
        "A troca de chaves usa Diffie-Hellman efêmero, o que assegura sigilo futuro, e o tráfego é cifrado com chaves simétricas de sessão.",
        "O navegador confia no certificado porque ele é assinado pela própria chave privada do site, o que dispensa a validação da cadeia até uma AC raiz.",
        "O certificado digital do servidor contém a sua chave privada, que é enviada ao navegador para que este consiga decifrar as respostas.",
      ],
      2,
      "O TLS é híbrido: no 1.3, o handshake completo com certificado faz o acordo de chaves por (EC)DHE efêmero, garantindo sigilo futuro, e os dados trafegam com chaves simétricas derivadas desse segredo. A chave privada do servidor não cifra o tráfego e jamais é enviada; o certificado contém apenas a chave pública. A revogação é consultada a qualquer tempo por CRL ou OCSP, e um certificado autoassinado pelo site não estabelece confiança sem a cadeia até uma AC raiz.",
      "tj-cripto",
    ),
    // ------------------------------------------------------------- tj-cobit
    tq(
      TJ_GOV,
      "Governança x gestão",
      "O Comitê de Governança de TIC de um Tribunal de Justiça, composto por desembargadores e membros da alta administração, reúne-se periodicamente para avaliar as necessidades das partes interessadas, estabelecer diretrizes e prioridades para os investimentos em TIC e acompanhar o desempenho e a conformidade em relação a essas diretrizes. À luz do COBIT 2019, essas atividades",
      [
        "correspondem ao domínio APO, pois envolvem planejamento estratégico e orçamento de TI, e cabem à Secretaria de TI.",
        "correspondem ao domínio EDM, de governança, e são responsabilidade do conselho ou da alta administração.",
        "correspondem ao domínio MEA, de gestão, pois monitorar desempenho e conformidade é tarefa exclusiva da auditoria interna.",
        "integram o ciclo de gestão, que no COBIT 2019 abrange os domínios EDM, APO, BAI, DSS e MEA, sob responsabilidade do gestor de TI.",
        "dizem respeito ao domínio DSS, que reúne as decisões estratégicas sobre entrega de valor às partes interessadas.",
      ],
      1,
      "Avaliar, dirigir e monitorar é exatamente o domínio EDM, o único de governança no COBIT 2019, a cargo do conselho ou da alta administração, como o comitê do enunciado. APO é gestão (planejamento e organização da TI), executada pela área de TI. MEA também é gestão e não é exclusivo da auditoria, e DSS trata da entrega e do suporte operacional. EDM não integra o ciclo de gestão.",
      "tj-cobit",
    ),
    tq(
      TJ_GOV,
      "Estrutura do COBIT 2019",
      "Em uma capacitação sobre o COBIT 2019 para servidores de um Tribunal, foram apresentadas as seguintes afirmativas.\n\nI. O framework organiza 40 objetivos de governança e gestão em cinco domínios, dos quais apenas o EDM é de governança.\nII. Os componentes do sistema de governança, antes chamados de habilitadores, incluem processos, estruturas organizacionais, informação e cultura, ética e comportamento, entre outros.\nIII. Fatores de design, como a estratégia da organização, o perfil de risco e os requisitos de conformidade, influenciam a customização do sistema de governança.\nIV. A capacidade dos processos é medida em uma escala de 1 a 6 baseada na ISO/IEC 15504, e o nível 1 indica processo otimizado.\n\nEstá correto o que se afirma em",
      [
        "I e II, apenas.",
        "III e IV, apenas.",
        "I, II e IV, apenas.",
        "II, III e IV, apenas.",
        "I, II e III, apenas.",
      ],
      4,
      "I, II e III reproduzem a estrutura do COBIT 2019: 40 objetivos em EDM, APO, BAI, DSS e MEA (só EDM de governança), sete componentes que substituíram os habilitadores e fatores de design que orientam a personalização. IV está errada: o COBIT 2019 usa níveis de capacidade de 0 a 5 inspirados no CMMI, e o nível mais alto (5) é o de otimização.",
      "tj-cobit",
    ),
    // -------------------------------------------------------------- tj-itil
    tq(
      TJ_GOV,
      "Incidente x problema",
      "Durante uma semana, a central de serviço de um Tribunal registrou dezenas de chamados de lentidão extrema no sistema de peticionamento eletrônico. A cada ocorrência, a equipe restabeleceu o serviço reiniciando o servidor de aplicação e, em paralelo, abriu um registro para investigar a causa raiz. A análise apontou um vazamento de memória em um componente, ainda sem correção definitiva. Segundo o ITIL 4, é correto afirmar que",
      [
        "cada chamado de lentidão constitui um problema, e o vazamento de memória identificado configura um incidente grave.",
        "a reinicialização do servidor é uma mudança emergencial que, uma vez executada, encerra definitivamente o problema.",
        "o vazamento já diagnosticado e não corrigido é um erro conhecido, e o reinício é uma solução de contorno.",
        "existindo solução de contorno, o registro de problema deve ser cancelado, pois o gerenciamento de problemas só atua quando não há workaround.",
        "os chamados devem ser tratados como requisições de serviço, já que reiniciar o servidor é uma ação padronizada e pré-aprovada.",
      ],
      2,
      "Erro conhecido é o problema já analisado e ainda não resolvido, e a reinicialização reduz o impacto sem eliminar a causa, o que a define como workaround. Os distratores invertem incidente (interrupção ou degradação, cada chamado) e problema (a causa). O registro de problema continua aberto mesmo com workaround, e uma falha não planejada nunca é requisição de serviço, que se refere a ações previstas como parte normal do serviço.",
      "tj-itil",
    ),
    tq(
      TJ_GOV,
      "Habilitação de mudança",
      "A equipe de infraestrutura de um Tribunal aplica mensalmente as atualizações de assinatura do antivírus corporativo. A atividade é de baixo risco, bem compreendida, segue procedimento documentado e foi aprovada previamente, uma única vez, pela autoridade de mudança. Na prática de habilitação de mudança do ITIL 4, essa atividade é classificada como mudança",
      [
        "normal, que deve ser avaliada e autorizada pela autoridade de mudança a cada nova ocorrência.",
        "emergencial, porque atualizações de segurança devem ser implementadas o mais rápido possível.",
        "de liberação, cuja autorização cabe à prática de gerenciamento de implantação.",
        "padrão, pré-autorizada e implementada sem nova avaliação a cada execução.",
        "normal de baixo impacto, que dispensa registro e documentação por ser uma atividade rotineira.",
      ],
      3,
      "Mudanças padrão são de baixo risco, bem compreendidas e pré-autorizadas, podendo ser executadas sem nova autorização a cada vez. A mudança normal exige avaliação e autorização da autoridade de mudança em cada ocorrência, e a emergencial é reservada a situações que exigem implementação imediata, como uma falha grave. Não existe 'mudança de liberação', e nenhuma mudança dispensa registro.",
      "tj-itil",
    ),
    tq(
      TJ_GOV,
      "SLA, OLA e contrato de apoio",
      "A Secretaria de TI de um Tribunal formalizou acordos para sustentar o serviço de processo eletrônico:\n\n1. Acordo com as unidades judiciárias (clientes), com metas como disponibilidade mensal de 99,5% e prazo de atendimento.\n2. Acordo interno entre a central de serviço e a equipe de banco de dados da própria Secretaria, fixando prazo para esta tratar chamados escalonados.\n3. Contrato com a empresa fornecedora do link de dados, que sustenta as metas acordadas com os clientes.\n\nAssocie cada instrumento à sua descrição.\n\n( ) Acordo de nível operacional (OLA)\n( ) Contrato de apoio (underpinning contract)\n( ) Acordo de nível de serviço (SLA)\n\nA sequência correta, de cima para baixo, é:",
      ["2 – 3 – 1.", "1 – 3 – 2.", "2 – 1 – 3.", "3 – 2 – 1.", "1 – 2 – 3."],
      0,
      "O SLA é firmado entre o provedor e o cliente (1); o OLA é interno, entre unidades do próprio provedor (2); e o contrato de apoio é celebrado com fornecedor externo para sustentar o SLA (3). Confundir OLA com SLA é o erro mais comum: o critério é se a outra parte é cliente, área interna ou fornecedor externo.",
      "tj-itil",
    ),
  );
}
