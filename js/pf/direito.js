/* PF · Agente Administrativo — Noções de Direito Constitucional e Administrativo.
   Teoria + itens INÉDITOS no estilo Cebraspe (não são de prova oficial).
   Redação considerada: CF com as emendas até 2025; Lei 8.112/1990 atualizada;
   Lei 8.429/1992 com a Lei 14.230/2021; Lei 14.133/2021 (a Lei 8.666/1993 foi
   revogada em 30/12/2023). */
{
  const SITUACAO_POSSE = `Pedro, aprovado em concurso público, foi nomeado para cargo efetivo de agente administrativo da Polícia Federal. O ato de nomeação foi publicado no Diário Oficial da União em 2 de março; Pedro tomou posse em 20 de março e entrou em exercício em 10 de abril do mesmo ano.`;

  const SITUACAO_VIATURA = `Durante uma diligência, uma viatura da Polícia Federal, conduzida por um agente em serviço, avançou o sinal vermelho e colidiu com o automóvel de Carla, que atravessava regularmente o cruzamento. Carla sofreu danos materiais e pretende ser indenizada.`;

  const MOD_DC = {
    id: "pf-constitucional",
    title: "Noções de Direito Constitucional",
    icon: "📜",
    description:
      "Princípios fundamentais, aplicabilidade das normas e poder constituinte; art. 5º, remédios, direitos sociais, nacionalidade e direitos políticos; administração pública (arts. 37 a 41) e segurança pública (art. 144), com foco nas atribuições da Polícia Federal.",
    sections: [],
  };
  pfModulos.push(MOD_DC);

  MOD_DC.sections.push({
    id: "pf-dc-fundamentos",
    title: "Princípios fundamentais, aplicabilidade das normas e poder constituinte",
    content: `
### O que o Cebraspe cobra aqui
O Cebraspe adora trocar a "gaveta" da Constituição: põe um **objetivo** (art. 3º) na lista de **fundamentos** (art. 1º), ou um princípio das **relações internacionais** (art. 4º) entre os objetivos. Na aplicabilidade das normas, a banca descreve um dispositivo e pede a classificação, e a confusão clássica é entre eficácia contida e limitada. No poder constituinte, as pegadinhas são numéricas e de competência: quem propõe emenda, quantos turnos, qual quórum (três quintos, não dois terços), quem promulga e quais limites existem. Leia cada verbo e cada número.

#### Os quatro primeiros artigos
| Artigo | Conteúdo | Como lembrar |
| --- | --- | --- |
| Art. 1º | **Fundamentos**: soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e da livre iniciativa, pluralismo político | SO-CI-DI-VA-PLU (substantivos) |
| Art. 1º, parágrafo único | Todo o poder emana do povo, que o exerce por meio de representantes eleitos ou diretamente | Democracia semidireta (plebiscito, referendo e iniciativa popular, art. 14) |
| Art. 2º | Legislativo, Executivo e Judiciário, **independentes e harmônicos** entre si | Separação dos Poderes |
| Art. 3º | **Objetivos**: construir sociedade livre, justa e solidária; garantir o desenvolvimento nacional; erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais; promover o bem de todos, sem preconceitos | Começam com **verbo** no infinitivo |
| Art. 4º | **Relações internacionais**: independência nacional, prevalência dos direitos humanos, autodeterminação dos povos, não intervenção, igualdade entre os Estados, defesa da paz, solução pacífica dos conflitos, repúdio ao terrorismo e ao racismo, cooperação entre os povos para o progresso da humanidade, concessão de asilo político | Olham "para fora" |

> **⚠️ Pegadinha:** "erradicar a pobreza" e "reduzir as desigualdades" são **objetivos** (art. 3º, III), não fundamentos. "Soberania" é fundamento (art. 1º, I); "independência nacional" é princípio das relações internacionais (art. 4º, I).

> **⚠️ Pegadinha:** a CF manda **erradicar** a pobreza e a marginalização e **reduzir** as desigualdades sociais e regionais. Se o item disser "erradicar as desigualdades" ou "reduzir a pobreza", está errado.

O parágrafo único do art. 4º manda buscar a **integração econômica, política, social e cultural dos povos da América Latina**, visando à formação de uma comunidade latino-americana de nações.

#### Forma de Estado, de governo e regime
- Forma de Estado: **Federação**, formada pela união indissolúvel dos Estados, Municípios e DF (art. 1º); não há direito de secessão.
- Forma de governo: **República**; sistema de governo: **presidencialismo** (mantidos no plebiscito de 1993, art. 2º do ADCT).
- Regime: **Estado Democrático de Direito** (art. 1º, caput).
- Art. 18: a organização político-administrativa compreende União, Estados, DF e Municípios, **todos autônomos**. Os Territórios Federais integram a União (§2º) e não são entes federativos.

#### Aplicabilidade das normas constitucionais
Classificação de José Afonso da Silva, a mais cobrada:

| Eficácia | Efeitos desde a promulgação | Papel da lei | Exemplos |
| --- | --- | --- | --- |
| **Plena** | Integrais e imediatos | Não precisa de lei nem pode ser restringida por ela | Art. 2º; art. 5º, III (ninguém será submetido a tortura) |
| **Contida** (restringível) | Integrais e imediatos | A lei pode **restringir** o alcance | Art. 5º, XIII (livre exercício profissional, atendidas as qualificações que a lei estabelecer) |
| **Limitada** | Reduzidos, até vir a lei | A lei é **necessária** para os efeitos plenos | Art. 37, VII (greve do servidor, nos termos de lei específica); art. 7º, XI (participação nos lucros, conforme definido em lei) |

- As limitadas de **princípio institutivo** traçam órgãos ou institutos a serem estruturados por lei (ex.: art. 33, organização dos Territórios); as **programáticas** fixam metas ao Estado (ex.: art. 196, saúde; art. 215, cultura).
- Art. 5º, §1º: as normas definidoras dos direitos e garantias fundamentais têm **aplicação imediata**.
- Enquanto não vem a lei de greve dos servidores, o STF manda aplicar, no que couber, a Lei 7.783/1989 (MI 670, 708 e 712).

> **⚠️ Pegadinha:** contida e limitada falam em lei, mas em sentidos opostos. Na contida, a lei **restringe** um direito que já vale por inteiro; na limitada, a lei **completa** uma norma que, sem ela, não produz todos os efeitos.

#### Poder constituinte
| Espécie | Quem exerce | Características |
| --- | --- | --- |
| **Originário** | Cria a Constituição (Assembleia Nacional Constituinte de 1987–1988) | Inicial, autônomo, juridicamente ilimitado e incondicionado |
| **Derivado reformador** | Congresso Nacional, por emenda (art. 60) | Secundário, limitado e condicionado |
| **Derivado decorrente** | Assembleias Legislativas, nas Constituições estaduais (art. 25; art. 11 do ADCT) | Auto-organização dos Estados, respeitada a CF |
| **Derivado revisor** | Revisão do art. 3º do ADCT: após cinco anos, em sessão unicameral, por maioria absoluta | Exercido em 1993–1994; não se repete |

#### Emenda constitucional (art. 60)
- **Iniciativa** (incisos I a III): um terço, no mínimo, dos membros da Câmara dos Deputados **ou** do Senado Federal; o Presidente da República; mais da metade das Assembleias Legislativas, cada uma pela maioria relativa de seus membros.
- **Votação** (§2º): em cada Casa, em **dois turnos**, aprovada se obtiver, em ambos, **três quintos** dos votos dos respectivos membros.
- **Promulgação** (§3º): pelas **Mesas** da Câmara e do Senado, com o respectivo número de ordem. Não há sanção nem veto presidencial.
- **Limite circunstancial** (§1º): a CF não pode ser emendada na vigência de intervenção federal, estado de defesa ou estado de sítio.
- **Limite formal** (§5º): a matéria de PEC rejeitada ou havida por prejudicada não pode ser objeto de nova proposta **na mesma sessão legislativa**.
- **Cláusulas pétreas** (§4º): não será objeto de deliberação proposta **tendente a abolir** a forma federativa de Estado; o voto direto, secreto, universal e periódico; a separação dos Poderes; e os direitos e garantias individuais.

> **⚠️ Pegadinha:** o cidadão não tem iniciativa de PEC no plano federal. E a vedação do §5º é absoluta, ao contrário do projeto de lei rejeitado, que pode ser reapresentado na mesma sessão mediante proposta da maioria absoluta dos membros de qualquer das Casas (art. 67).

> **⚠️ Pegadinha:** a **obrigatoriedade** do voto não é cláusula pétrea; o protegido é o voto direto, secreto, universal e periódico. A forma republicana também não está no rol expresso do §4º.

#### Classificação da CF de 1988
- Quanto à origem, **promulgada** (democrática, elaborada por assembleia eleita); quanto à forma, **escrita**; quanto à extensão, **analítica**.
- Quanto à estabilidade, **rígida**: exige para a emenda processo mais difícil que o da lei ordinária (art. 60). Há quem a chame de super-rígida por causa das cláusulas pétreas.
- Quanto ao modo de elaboração, **dogmática**; quanto ao conteúdo, **formal**: tudo o que está no texto tem hierarquia constitucional.

#### Revisão relâmpago
- Fundamentos (art. 1º) são substantivos; objetivos (art. 3º) começam com verbo.
- Erradicar a pobreza e reduzir as desigualdades: objetivos, não fundamentos.
- Asilo político, não intervenção e repúdio ao terrorismo: relações internacionais (art. 4º).
- Plena dispensa lei; contida pode ser restringida por lei; limitada depende de lei.
- PEC: um terço da Câmara ou do Senado, Presidente ou mais da metade das Assembleias.
- Dois turnos em cada Casa, três quintos; promulgação pelas Mesas, sem sanção.
- Sem emenda durante intervenção federal, estado de defesa ou estado de sítio.
`,
  });

  MOD_DC.sections.push({
    id: "pf-dc-direitos",
    title: "Direitos e garantias fundamentais, remédios, nacionalidade e direitos políticos",
    content: `
### O que o Cebraspe cobra aqui
O art. 5º é cobrado na literalidade, com uma palavra trocada: "durante o dia" vira "a qualquer hora", "prévio aviso" vira "autorização", "investigação criminal" vira "processo administrativo", "trânsito em julgado" some do texto. Nos remédios, a banca descreve uma situação e pergunta qual ação cabe, ou troca a legitimidade (pessoa jurídica propondo ação popular, associação recém-criada impetrando mandado de segurança coletivo). Em nacionalidade e direitos políticos, caem a lista de cargos privativos de brasileiro nato e as hipóteses de perda e suspensão.

#### Titulares e características
- Art. 5º, caput: brasileiros e estrangeiros residentes no País. O STF estende a proteção ao estrangeiro não residente (o turista pode impetrar habeas corpus) e, no que couber, às pessoas jurídicas.
- Direitos fundamentais **não são absolutos**: quando colidem, são ponderados no caso concreto.
- Art. 5º, §1º: aplicação imediata. §2º: o rol não exclui outros direitos decorrentes do regime, dos princípios ou de tratados. §3º: tratados de direitos humanos aprovados em cada Casa, em dois turnos, por três quintos, equivalem a emendas. §4º: o Brasil se submete ao Tribunal Penal Internacional.

#### Incisos mais cobrados do art. 5º
| Inciso | Regra | Detalhe que a banca troca |
| --- | --- | --- |
| I | Homens e mulheres são iguais em direitos e obrigações, nos termos da CF | A igualdade material admite tratamento desigual justificado (ações afirmativas) |
| II | Ninguém será obrigado a fazer ou deixar de fazer algo senão em virtude de **lei** | O particular faz o que a lei não proíbe; a administração, só o que a lei autoriza |
| IV | Livre manifestação do pensamento, **vedado o anonimato** | |
| XI | A casa é asilo inviolável; sem consentimento, só se entra em **flagrante delito, desastre ou para prestar socorro** (a qualquer hora) ou **por determinação judicial, durante o dia** | Mandado judicial não autoriza o ingresso à noite |
| XII | Sigilo de correspondência e de comunicações telegráficas, de dados e telefônicas; **no último caso**, quebra por **ordem judicial**, na forma da lei, para **investigação criminal ou instrução processual penal** | CPI pode quebrar sigilo de dados telefônicos (registros), mas não decretar interceptação |
| XVI | Reunião pacífica, sem armas, em locais abertos ao público, **independentemente de autorização**, desde que não frustre outra reunião já convocada para o mesmo local, exigido apenas **prévio aviso** | Aviso não é pedido de licença |
| XVII a XXI | Associação para fins lícitos, vedada a paramilitar; criação sem autorização; suspensão das atividades por **decisão judicial** e dissolução compulsória só com **trânsito em julgado**; ninguém é obrigado a associar-se; representação dos filiados quando **expressamente autorizadas** | Suspender exige decisão judicial; dissolver exige trânsito em julgado |
| LIV e LV | Devido processo legal; contraditório e ampla defesa em processo **judicial ou administrativo** | SV 5: a falta de advogado no PAD não ofende a CF |
| LVII | Ninguém será considerado culpado até o **trânsito em julgado** da sentença penal condenatória | |

- "Casa" abrange qualquer compartimento habitado, o aposento ocupado de habitação coletiva e o compartimento não aberto ao público onde alguém exerce profissão (escritório, consultório).

> **⚠️ Pegadinha:** o STF admite o ingresso forçado sem mandado, inclusive à noite, quando houver **fundadas razões**, justificadas depois, de que há flagrante delito no interior da casa (RE 603.616). Sem essas razões, a prova é ilícita.

#### Prisão e garantias do preso
- LXI: ninguém será preso senão em **flagrante delito** ou por **ordem escrita e fundamentada de autoridade judiciária competente**, salvo transgressão militar ou crime propriamente militar.
- LXII: a prisão e o local onde se encontre o preso serão comunicados **imediatamente** ao juiz competente e à família do preso ou à pessoa por ele indicada.
- LXIII e LXIV: o preso será informado de seus direitos, entre eles o de permanecer calado, com assistência da família e de advogado, e tem direito à identificação dos responsáveis pela prisão ou pelo interrogatório policial.
- LXV e LXVI: a prisão ilegal será imediatamente **relaxada** pela autoridade judiciária; ninguém será levado à prisão ou nela mantido quando a lei admitir liberdade provisória, com ou sem fiança.
- LXVII: não há prisão civil por dívida, salvo a do devedor de alimentos (inadimplemento voluntário e inescusável). O texto ainda menciona o depositário infiel, mas a **SV 25** tornou essa prisão ilícita.

| Crime | Inafiançável | Imprescritível | Insuscetível de graça ou anistia |
| --- | --- | --- | --- |
| Racismo (XLII) | Sim | Sim | Não consta |
| Ação de grupos armados contra a ordem constitucional (XLIV) | Sim | Sim | Não consta |
| Tortura, tráfico de drogas, terrorismo e hediondos (XLIII) | Sim | **Não** | Sim |

#### Remédios constitucionais
| Remédio | Protege | Quem propõe | Detalhe |
| --- | --- | --- | --- |
| **Habeas corpus** (LXVIII) | Liberdade de locomoção, contra violência ou coação, atual ou ameaçada, por ilegalidade ou abuso de poder | Qualquer pessoa, em favor próprio ou de terceiro | Gratuito (LXXVII); dispensa advogado |
| **Habeas data** (LXXII) | Conhecer ou retificar informações **relativas à pessoa do impetrante** em registros de entidades governamentais ou de caráter público | O próprio titular dos dados | Gratuito (LXXVII); exige prova da recusa administrativa (Lei 9.507/1997, art. 8º) |
| **Mandado de segurança** (LXIX) | Direito líquido e certo **não amparado por HC ou HD**, contra ato de autoridade pública ou de agente de pessoa jurídica no exercício de atribuições do Poder Público | Titular do direito | Prazo decadencial de 120 dias (Lei 12.016/2009, art. 23) |
| **MS coletivo** (LXX) | O mesmo objeto, em defesa dos membros ou associados | Partido com representação no Congresso; organização sindical, entidade de classe ou associação legalmente constituída e em funcionamento há pelo menos um ano | Dispensa autorização dos associados (Súmula 629 do STF) |
| **Mandado de injunção** (LXXI) | Falta de norma regulamentadora que torne inviável o exercício de direitos e liberdades constitucionais e das prerrogativas de nacionalidade, soberania e cidadania | Titular do direito; há MI coletivo (Lei 13.300/2016) | O STF adota a posição concretista |
| **Ação popular** (LXXIII) | Anular ato lesivo ao patrimônio público, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural | Qualquer **cidadão**; pessoa jurídica não (Súmula 365 do STF) | Autor isento de custas e sucumbência, salvo comprovada má-fé |

> **⚠️ Pegadinha:** o mandado de segurança é **subsidiário**: só cabe quando o direito não for amparado por habeas corpus ou habeas data. E o habeas data protege dados **do próprio impetrante**, não de terceiros.

#### Direitos sociais (arts. 6º e 7º)
- Art. 6º: educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência social, proteção à maternidade e à infância e assistência aos desamparados. Desde a EC 114/2021, o brasileiro em situação de vulnerabilidade social tem direito a uma renda básica familiar (parágrafo único).
- Art. 7º, XXXIII: proibição de trabalho noturno, perigoso ou insalubre a menores de 18 anos e de qualquer trabalho a menores de 16, salvo na condição de aprendiz, a partir de 14.

#### Nacionalidade (art. 12)
| Natos (inciso I) | Naturalizados (inciso II) |
| --- | --- |
| Nascidos no Brasil, ainda que de pais estrangeiros, desde que estes não estejam a serviço de seu país | Originários de países de língua portuguesa: residência por um ano ininterrupto e idoneidade moral |
| Nascidos no estrangeiro, de pai ou mãe brasileiros, estando qualquer deles a serviço do Brasil | Estrangeiros residentes há mais de quinze anos ininterruptos, sem condenação penal, desde que requeiram |
| Nascidos no estrangeiro, de pai ou mãe brasileiros, registrados em repartição competente ou que venham a residir no Brasil e optem, após a maioridade, pela nacionalidade brasileira | Demais casos, na forma da lei |

- Cargos privativos de **nato** (§3º): Presidente e Vice-Presidente da República, Presidente da Câmara, Presidente do Senado, Ministro do STF, carreira diplomática, oficial das Forças Armadas e Ministro de Estado da Defesa.
- A lei não pode distinguir natos e naturalizados, salvo nos casos previstos na própria CF (§2º).
- Perda (§4º, redação da EC 131/2023): cancelamento da naturalização por sentença judicial, por fraude no processo de naturalização ou atentado contra a ordem constitucional e o Estado Democrático; ou pedido expresso de perda perante autoridade brasileira competente, ressalvadas situações que gerem apatridia.

#### Direitos políticos (arts. 14 e 15)
- Alistamento e voto **obrigatórios** para maiores de 18 anos; **facultativos** para analfabetos, maiores de 70 anos e jovens de 16 e 17 anos. Inalistáveis: estrangeiros e, durante o serviço militar obrigatório, os conscritos.
- Idade mínima: 35 anos (Presidente, Vice e Senador), 30 (Governador e Vice), 21 (Deputado, Prefeito, Vice-Prefeito e juiz de paz), 18 (Vereador). Analfabetos e inalistáveis são inelegíveis.
- **Cassação é vedada**. Perda ou suspensão só nos casos do art. 15: cancelamento da naturalização por sentença transitada em julgado; incapacidade civil absoluta; condenação criminal transitada em julgado, enquanto durarem seus efeitos; recusa de cumprir obrigação a todos imposta ou prestação alternativa; improbidade administrativa (art. 37, §4º).

#### Revisão relâmpago
- Casa: flagrante, desastre e socorro a qualquer hora; ordem judicial só durante o dia.
- Interceptação telefônica: ordem judicial e finalidade penal.
- Reunião: sem autorização, com prévio aviso.
- Associação: suspensão por decisão judicial; dissolução só com trânsito em julgado.
- HC e HD são gratuitos; ação popular só por cidadão, isento salvo má-fé.
- MS coletivo: partido com representação no Congresso; associação com um ano de funcionamento.
- Cargos de nato: Presidente e Vice, Presidentes das Casas, Ministro do STF, diplomata, oficial das Forças Armadas, Ministro da Defesa.
`,
  });

  MOD_DC.sections.push({
    id: "pf-dc-administracao",
    title: "Administração pública na CF (arts. 37 a 41) e segurança pública (art. 144)",
    content: `
### O que o Cebraspe cobra aqui
Os arts. 37 a 41 são lidos com lupa: prazo de validade do concurso ("até dois anos, prorrogável uma vez, por igual período"), quem pode ocupar função de confiança ("exclusivamente" servidores efetivos), as três hipóteses de acumulação, o teto e os subtetos e o destino do estável cujo cargo é extinto. No art. 144, a banca acrescenta ou retira órgão da lista e, no §1º, troca as entidades cujos bens a Polícia Federal protege (sociedade de economia mista não está lá) ou tira o "com exclusividade" da polícia judiciária da União.

#### Princípios expressos (art. 37, caput)
| Princípio | Ideia central | Exemplo cobrado |
| --- | --- | --- |
| **Legalidade** | A administração só age quando e como a lei autoriza | SV 44: exame psicotécnico só pode ser exigido se previsto em lei |
| **Impessoalidade** | Finalidade pública, isonomia e vedação de promoção pessoal | Publicidade oficial sem nomes, símbolos ou imagens de promoção pessoal (§1º) |
| **Moralidade** | Ética, boa-fé e probidade | SV 13: vedação ao nepotismo, inclusive por designações recíprocas |
| **Publicidade** | Transparência; condição de eficácia dos atos | É legítima a divulgação nominal da remuneração dos servidores (STF) |
| **Eficiência** | Resultado, qualidade e economicidade (EC 19/1998) | Avaliação periódica de desempenho (art. 41, §1º, III) |

> **⚠️ Pegadinha:** a SV 13 alcança cônjuge, companheiro e parentes até o **terceiro grau**, inclusive, para cargo em comissão, de confiança ou função gratificada. Para cargos de natureza política (Ministro, Secretário), o STF em regra afasta a súmula, salvo fraude ou manifesta falta de qualificação técnica ou de idoneidade moral do nomeado.

#### Acesso e concurso público
- Inciso I: cargos, empregos e funções são acessíveis aos brasileiros que preencham os requisitos da lei e aos estrangeiros, na forma da lei.
- Inciso II: a investidura em cargo ou emprego depende de **concurso de provas ou de provas e títulos**, ressalvados os cargos em comissão declarados em lei de livre nomeação e exoneração.
- Inciso III: validade de **até dois anos**, prorrogável **uma vez, por igual período**. Inciso IV: durante o prazo improrrogável do edital, o aprovado é convocado com **prioridade** sobre novos concursados.
- O aprovado **dentro do número de vagas** tem direito subjetivo à nomeação durante a validade (STF, RE 598.099). SV 43: é inconstitucional investir o servidor, sem concurso, em cargo de outra carreira.
- §2º: desrespeitar os incisos II e III gera **nulidade do ato** e punição da autoridade responsável.
- Inciso V: **funções de confiança**, exclusivamente por servidores ocupantes de cargo efetivo; **cargos em comissão**, por servidores de carreira nos casos, condições e percentuais mínimos da lei (o restante pode ser ocupado por pessoas sem vínculo). Ambos só para **direção, chefia e assessoramento**.
- Inciso VIII: reserva de vagas para pessoas com deficiência. Inciso IX: contratação por tempo determinado para necessidade temporária de excepcional interesse público.
- Inciso VII: greve do servidor nos termos e limites de **lei específica**. O STF veda a greve a policiais e a todos os servidores que atuem diretamente na segurança pública (ARE 654.432).

#### Remuneração e teto
- Inciso XI: o teto geral é o **subsídio dos Ministros do STF**. Subtetos: nos Municípios, o subsídio do Prefeito; nos Estados e no DF, o do Governador (Executivo), o dos Deputados Estaduais ou Distritais (Legislativo) e o dos Desembargadores do TJ, limitado a 90,25% do subsídio dos Ministros do STF (Judiciário, aplicável também a membros do MP, Procuradores e Defensores Públicos).
- §11: parcelas de caráter **indenizatório** previstas em lei não entram no cálculo do teto.
- Nas acumulações lícitas, o teto incide sobre **cada** remuneração isoladamente (STF, Temas 377 e 384).
- Incisos XIII e XV: vedada a vinculação ou equiparação de remunerações; subsídios e vencimentos são irredutíveis.

#### Acumulação de cargos (incisos XVI e XVII)
A regra é a **vedação** da acumulação remunerada. Exceções, sempre com **compatibilidade de horários** e respeito ao teto:

| Hipótese permitida | Exemplo |
| --- | --- |
| Dois cargos de **professor** | Professor em duas universidades públicas |
| Um de **professor** com outro **técnico ou científico** | Professor e analista com formação específica |
| Dois cargos ou empregos privativos de **profissionais de saúde**, com profissões regulamentadas | Enfermeiro em dois hospitais públicos |

- A vedação alcança empregos e funções em autarquias, fundações, empresas públicas, sociedades de economia mista, suas subsidiárias e sociedades controladas pelo poder público (inciso XVII).
- §10: é vedado somar proventos de aposentadoria com remuneração de cargo, ressalvados os cargos acumuláveis, os eletivos e os em comissão.

> **⚠️ Pegadinha:** não existe a hipótese de "dois cargos técnicos". E cargo técnico é o que exige conhecimento específico de uma área profissional; atribuições meramente burocráticas não bastam.

#### Art. 37, §6º, e servidor em mandato eletivo (art. 38)
- §6º: as pessoas jurídicas de **direito público** e as de **direito privado prestadoras de serviço público** respondem **objetivamente** pelos danos que seus agentes, nessa qualidade, causarem a terceiros, com **regresso** contra o agente nos casos de **dolo ou culpa**.

| Mandato | Situação no cargo | Remuneração |
| --- | --- | --- |
| Federal, estadual ou distrital | Afastado | A do mandato |
| Prefeito | Afastado | Pode **optar** |
| Vereador, com compatibilidade de horários | Exerce os dois | Recebe as duas |
| Vereador, sem compatibilidade | Afastado | Pode optar |

- No afastamento, o tempo de serviço conta para todos os efeitos, exceto promoção por merecimento (art. 38, IV).

#### Estabilidade (art. 41)
- É estável, após **três anos de efetivo exercício**, o servidor nomeado para **cargo efetivo** em virtude de **concurso**; é condição obrigatória a **avaliação especial de desempenho** por comissão instituída para essa finalidade (§4º).
- O estável perde o cargo (§1º) por sentença judicial transitada em julgado, por processo administrativo com ampla defesa ou por avaliação periódica de desempenho, na forma de lei complementar. Também pode perdê-lo por excesso de despesa com pessoal (art. 169, §4º).
- §2º: invalidada por sentença a demissão, o servidor é **reintegrado**; o eventual ocupante da vaga, se estável, é reconduzido ao cargo de origem, sem indenização, aproveitado em outro cargo ou posto em disponibilidade.
- §3º: extinto o cargo ou declarada sua desnecessidade, o estável fica em **disponibilidade, com remuneração proporcional ao tempo de serviço**, até seu adequado aproveitamento.

> **⚠️ Pegadinha:** extinção do cargo não gera exoneração nem indenização para o estável: gera disponibilidade remunerada proporcionalmente.

#### Segurança pública (art. 144)
Dever do Estado, direito e responsabilidade de todos, exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio, por meio de: **Polícia Federal**, **Polícia Rodoviária Federal**, **Polícia Ferroviária Federal**, **polícias civis**, **polícias militares e corpos de bombeiros militares** e **polícias penais** federal, estaduais e distrital (EC 104/2019).

A **Polícia Federal**, instituída por lei como órgão permanente, organizado e mantido pela União e estruturado em carreira, destina-se a (§1º):
1. apurar infrações penais contra a ordem política e social ou em detrimento de bens, serviços e interesses da União ou de suas **entidades autárquicas e empresas públicas**, assim como outras infrações com repercussão interestadual ou internacional que exijam repressão uniforme, segundo dispuser a lei;
2. prevenir e reprimir o tráfico ilícito de entorpecentes e drogas afins, o contrabando e o descaminho, sem prejuízo da ação fazendária e de outros órgãos públicos;
3. exercer as funções de polícia marítima, aeroportuária e de fronteiras;
4. exercer, **com exclusividade**, as funções de polícia judiciária da União.

> **⚠️ Pegadinha:** **sociedade de economia mista** não aparece no inciso I. Crime praticado em detrimento do Banco do Brasil, por exemplo, é em regra julgado pela Justiça estadual (Súmula 42 do STJ).

- PRF (§2º): patrulhamento ostensivo das **rodovias** federais. PFF (§3º): patrulhamento ostensivo das **ferrovias** federais.
- Polícias civis (§4º): dirigidas por delegados de polícia de carreira, exercem a polícia judiciária e a apuração de infrações penais, ressalvada a competência da União e exceto as militares.
- Polícias militares (§5º): polícia ostensiva e preservação da ordem pública; com os bombeiros militares, são forças auxiliares e reserva do Exército (§6º).
- Guardas municipais (§8º): proteção de bens, serviços e instalações do Município, conforme dispuser a lei.

#### Revisão relâmpago
- LIMPE: legalidade, impessoalidade, moralidade, publicidade e eficiência.
- Concurso: validade de até dois anos, prorrogável uma vez, por igual período.
- Função de confiança: só servidor efetivo; cargo em comissão: percentual mínimo para servidores de carreira.
- Acumulação: dois de professor; professor com técnico ou científico; dois de saúde regulamentados.
- Estabilidade: três anos de efetivo exercício e avaliação especial de desempenho.
- Cargo extinto: estável em disponibilidade, com remuneração proporcional.
- PF: bens da União, autarquias e empresas públicas (não sociedades de economia mista); polícia judiciária da União com exclusividade.
`,
  });

  const MOD_DA = {
    id: "pf-administrativo",
    title: "Noções de Direito Administrativo",
    icon: "⚖️",
    description:
      "Regime jurídico-administrativo e organização; poderes e atos administrativos; Lei 8.112/1990; processo administrativo, improbidade, responsabilidade civil e controle; licitações pela Lei 14.133/2021.",
    sections: [],
  };
  pfModulos.push(MOD_DA);

  MOD_DA.sections.push({
    id: "pf-da-organizacao",
    title: "Regime jurídico-administrativo, princípios e organização administrativa",
    content: `
### O que o Cebraspe cobra aqui
Aqui a banca testa conceitos: troca desconcentração por descentralização, diz que órgão tem personalidade jurídica, atribui à empresa pública a forma obrigatória de sociedade anônima (quem a exige é a sociedade de economia mista) ou afirma que a lei "cria" empresa estatal, quando ela apenas **autoriza** a instituição. Nos princípios, a cobrança é de definição: o que é autotutela, o que a indisponibilidade impede, e como razoabilidade e proporcionalidade aparecem na Lei 9.784/1999.

#### Regime jurídico-administrativo
É o conjunto de **prerrogativas** (que colocam a administração em posição de superioridade) e **sujeições** (que limitam sua atuação) próprio do direito administrativo. Apoia-se em dois pilares:

| Pilar | Gera | Exemplos |
| --- | --- | --- |
| **Supremacia do interesse público** sobre o privado | Prerrogativas | Desapropriação, requisição, cláusulas exorbitantes nos contratos, autoexecutoriedade, presunção de legitimidade |
| **Indisponibilidade do interesse público** | Sujeições | Concurso, licitação, vedação de renunciar a créditos ou transigir sem lei, dever de agir, prestação de contas |

> **⚠️ Pegadinha:** a supremacia não autoriza arbitrariedade: só existe nos limites da lei e a serviço do interesse público primário. E o administrador não é dono do interesse público; por isso não pode dispor dele por simples liberalidade.

#### Princípios expressos e implícitos
- **Expressos na CF** (art. 37, caput): legalidade, impessoalidade, moralidade, publicidade e eficiência.
- **Expressos na Lei 9.784/1999** (art. 2º): legalidade, finalidade, motivação, razoabilidade, proporcionalidade, moralidade, ampla defesa, contraditório, segurança jurídica, interesse público e eficiência.
- **Autotutela**: a administração revê os próprios atos, anulando os ilegais e revogando os inconvenientes (Súmulas 346 e 473 do STF; art. 53 da Lei 9.784/1999). Não se confunde com **tutela**, que é o controle finalístico da administração direta sobre as entidades da indireta.
- **Razoabilidade e proporcionalidade**: adequação entre meios e fins, vedada a imposição de obrigações, restrições e sanções em medida superior à estritamente necessária ao interesse público (art. 2º, parágrafo único, VI, da Lei 9.784/1999). A proporcionalidade se decompõe em adequação, necessidade e proporcionalidade em sentido estrito.
- **Continuidade do serviço público**: o serviço não pode parar sem justificativa; não caracteriza descontinuidade a interrupção em emergência ou após aviso prévio por razões técnicas ou inadimplemento do usuário (Lei 8.987/1995, art. 6º, §3º).
- **Segurança jurídica**: vedada a aplicação retroativa de nova interpretação (art. 2º, parágrafo único, XIII, da Lei 9.784/1999); decadência de cinco anos para anular atos favoráveis, salvo má-fé (art. 54).
- **Especialidade**: as entidades da indireta ficam vinculadas à finalidade definida na lei que as criou ou autorizou.

#### Centralização, descentralização e desconcentração
| Técnica | O que acontece | Hierarquia? | Exemplo |
| --- | --- | --- | --- |
| **Centralização** | O próprio ente político executa a atividade | Sim, internamente | União prestando o serviço por seus órgãos |
| **Desconcentração** | Distribuição interna de competências **dentro da mesma pessoa jurídica**, criando órgãos | Sim | Ministérios; superintendências regionais da Polícia Federal |
| **Descentralização** | Transferência da atividade **a outra pessoa**, física ou jurídica | Não; há controle finalístico (tutela) | Autarquia criada por lei; concessionária de serviço público |

- **Descentralização por outorga** (por serviços, técnica ou funcional): feita por **lei**, transfere a titularidade e a execução do serviço a uma entidade da administração indireta.
- **Descentralização por delegação** (por colaboração): feita por **contrato** (concessão, permissão) ou ato unilateral (autorização), transfere só a **execução**, normalmente a particulares, por prazo determinado.
- A desconcentração também pode ocorrer **dentro de uma entidade da indireta** (uma autarquia que cria superintendências regionais).

> **⚠️ Pegadinha:** desconcentrar cria **órgão**; descentralizar envolve **outra pessoa**. Entre a União e uma autarquia não há hierarquia, mas vinculação e supervisão ministerial.

#### Órgão x entidade
- Lei 9.784/1999, art. 1º, §2º: **órgão** é a unidade de atuação integrante da estrutura da administração direta e da indireta; **entidade** é a unidade de atuação dotada de **personalidade jurídica**; **autoridade** é o servidor ou agente público dotado de poder de decisão.
- **Teoria do órgão** (imputação): a atuação do agente é atribuída à pessoa jurídica a que ele pertence.
- Órgãos **não têm personalidade jurídica**; alguns de cúpula têm capacidade processual para defender suas prerrogativas (por exemplo, por mandado de segurança).
- Classificação de Hely Lopes Meirelles quanto à posição: independentes (Casas Legislativas, tribunais, Presidência), autônomos (ministérios), superiores e subalternos. Quanto à composição: simples ou compostos; quanto à atuação: singulares ou colegiados.
- A **Polícia Federal** é órgão da estrutura do Ministério da Justiça e Segurança Pública, portanto órgão da administração direta da União, sem personalidade jurídica própria.

#### Administração indireta (DL 200/1967; CF, art. 37, XIX)
| Entidade | Personalidade | Criação | Capital e forma | Pessoal | Foro (entidades federais) |
| --- | --- | --- | --- | --- | --- |
| **Autarquia** | Direito público | **Criada** por lei específica | Patrimônio público; atividades típicas de Estado | Estatutário (Lei 8.112, no âmbito federal) | Justiça Federal (art. 109, I) |
| **Fundação pública** | Direito público (fundação autárquica) ou privado | Criada por lei, se de direito público; lei autoriza, se de direito privado | Patrimônio personalizado com fim social; lei complementar define as áreas | Em regra, o das autarquias, se de direito público | Justiça Federal, se de direito público |
| **Empresa pública** | Direito privado | Lei **autoriza** a instituição | Capital **exclusivamente público**; **qualquer forma** societária | CLT, com concurso | Justiça Federal (art. 109, I) |
| **Sociedade de economia mista** | Direito privado | Lei **autoriza** a instituição | Maioria das ações com direito a voto do ente; **sociedade anônima** | CLT, com concurso | Justiça estadual (Súmula 556 do STF) |

- Lei 13.303/2016: empresa pública tem o capital integralmente detido por entes públicos (art. 3º); sociedade de economia mista adota a forma de sociedade anônima (art. 4º).
- Subsidiárias dependem de autorização legislativa (art. 37, XX); basta autorização genérica na lei que autorizou a estatal (STF, ADI 1.649).
- **Agências reguladoras** são autarquias em regime especial, com dirigentes de mandato fixo (Lei 13.848/2019). O **consórcio público** com personalidade de direito público (associação pública) integra a administração indireta de todos os entes consorciados (Lei 11.107/2005, art. 6º, §1º).

> **⚠️ Pegadinha:** a lei específica **cria** a autarquia, mas apenas **autoriza** a instituição de empresa pública, sociedade de economia mista e fundação (art. 37, XIX). A estatal só nasce com o registro dos atos constitutivos.

#### Supervisão ministerial (tutela)
- As entidades da indireta ficam **vinculadas** ao ministério da área, que exerce a supervisão ministerial (DL 200/1967, arts. 19 e 26): controle **finalístico**, voltado ao cumprimento dos objetivos fixados em lei.
- Por não haver hierarquia, o ministério não revê livremente os atos da entidade. O chamado recurso hierárquico impróprio, dirigido a autoridade de outra pessoa jurídica, só cabe quando a lei o prevê expressamente.
- A tutela não se presume: depende de previsão legal e se exerce nos limites da lei.

#### Revisão relâmpago
- Supremacia gera prerrogativas; indisponibilidade gera sujeições.
- Autotutela: rever os próprios atos; tutela: controle da direta sobre a indireta.
- Desconcentração: órgãos na mesma pessoa, com hierarquia; descentralização: outra pessoa, sem hierarquia.
- Outorga transfere titularidade por lei; delegação transfere só a execução, por contrato ou ato.
- Órgão não tem personalidade jurídica; entidade tem.
- Autarquia é criada por lei; estatais e fundações têm a instituição autorizada por lei.
- Empresa pública: qualquer forma societária; sociedade de economia mista: sociedade anônima.
`,
  });

  MOD_DA.sections.push({
    id: "pf-da-atos-poderes",
    title: "Poderes administrativos e atos administrativos",
    content: `
### O que o Cebraspe cobra aqui
Nos poderes, a banca troca o poder pelo exemplo (multa a comerciante é poder de polícia, não disciplinar), mistura excesso com desvio de poder e diz que decreto regulamentar pode inovar na ordem jurídica. Nos atos, cobra os elementos (qual é sempre vinculado, qual vício se convalida), os atributos (nem todo ato é autoexecutório ou imperativo) e a extinção: anulação x revogação, efeitos ex tunc x ex nunc, quem pode fazer cada uma e a diferença entre o "deve anular" da Lei 9.784/1999 e o "pode anular" da Súmula 473.

#### Poderes administrativos
| Poder | O que permite | Detalhe cobrado |
| --- | --- | --- |
| **Vinculado** | Agir sem margem de escolha: preenchidos os requisitos, o ato é obrigatório | Ex.: concessão de licença para construir |
| **Discricionário** | Escolher, dentro da lei, por **conveniência e oportunidade** (mérito) | Limitado pela lei, pela razoabilidade e pela finalidade |
| **Hierárquico** | Ordenar, fiscalizar, rever, delegar e avocar dentro da mesma estrutura | Não há hierarquia entre a direta e a indireta |
| **Disciplinar** | Apurar infrações e punir servidores e **demais pessoas sujeitas à disciplina administrativa** (como contratados) | A apuração é obrigatória (art. 143 da Lei 8.112) |
| **Regulamentar** | Editar normas para a fiel execução das leis (art. 84, IV) | Decreto não pode inovar nem contrariar a lei |
| **De polícia** | Limitar direitos, liberdade e propriedade em favor do interesse público (CTN, art. 78) | Alcança particulares em geral, sem vínculo especial |

- **Decreto autônomo** (art. 84, VI): dispõe sobre organização e funcionamento da administração federal, quando não implicar aumento de despesa nem criação ou extinção de órgãos, e sobre extinção de funções ou cargos públicos **vagos**. Pode ser delegado a Ministros de Estado, ao PGR e ao AGU (art. 84, parágrafo único).
- O Congresso pode **sustar** atos normativos do Executivo que exorbitem do poder regulamentar (art. 49, V).

#### Poder de polícia
- Atributos: **discricionariedade** (em regra), **autoexecutoriedade** e **coercibilidade**.
- Ciclo: ordem de polícia, consentimento (licença, autorização), fiscalização e sanção.
- O STF admite a **delegação, por lei**, das fases de consentimento, fiscalização e sanção a pessoas jurídicas de direito privado da administração indireta, de capital majoritariamente público, que prestem exclusivamente serviço público próprio do Estado em regime não concorrencial; a **ordem de polícia** é indelegável (Tema 532).
- A ação punitiva federal no exercício do poder de polícia prescreve em cinco anos (Lei 9.873/1999, art. 1º).

| Critério | Polícia administrativa | Polícia judiciária |
| --- | --- | --- |
| Ilícito | Administrativo | Penal |
| Atuação | Predominantemente preventiva | Predominantemente repressiva |
| Incide sobre | Bens, direitos e atividades | Pessoas |
| Quem exerce | Diversos órgãos e entidades | Polícia Federal e polícias civis |

> **⚠️ Pegadinha:** a Polícia Federal exerce as duas: polícia judiciária (inquérito) e polícia administrativa (controle migratório, emissão de passaportes, fiscalização da segurança privada, registro de armas).

#### Abuso de poder
- **Excesso de poder**: o agente vai **além da sua competência**.
- **Desvio de poder (ou de finalidade)**: o agente competente pratica o ato visando **fim diverso** do previsto na regra de competência (Lei 4.717/1965, art. 2º, parágrafo único, "e"). Ex.: remover servidor de ofício para puni-lo.
- A omissão ilegal também pode configurar abuso de poder.

#### Elementos (requisitos) do ato: COMFIFOMOB
| Elemento | O que é | Vinculado? | Vício convalidável? |
| --- | --- | --- | --- |
| **Competência** | Atribuição legal do agente | Sempre | Sim, salvo competência exclusiva ou em razão da matéria |
| **Finalidade** | Interesse público e fim específico da lei | Sempre | Não (desvio de poder) |
| **Forma** | Exteriorização do ato | Em regra | Sim, se a forma não for essencial |
| **Motivo** | Pressupostos de fato e de direito | Pode ser discricionário | Não |
| **Objeto** | Efeito jurídico imediato (conteúdo) | Pode ser discricionário | Não |

- Motivo e objeto formam o **mérito** nos atos discricionários.
- **Motivo** é o fato; **motivação** é a exposição escrita dos motivos.
- **Teoria dos motivos determinantes**: os motivos declarados vinculam a validade do ato; se forem falsos, o ato é nulo, mesmo que a motivação fosse dispensável (como na exoneração de cargo em comissão).

#### Atributos: PATI
| Atributo | Significado | Presente em todos? |
| --- | --- | --- |
| **Presunção** de legitimidade e veracidade | O ato é tido como legal e verdadeiro até prova em contrário (presunção relativa) | Sim |
| **Autoexecutoriedade** | Execução direta, sem ordem judicial | Não: depende de lei ou de urgência; multa não paga exige execução judicial |
| **Tipicidade** | O ato corresponde a figura prevista em lei | Sim, nos atos unilaterais |
| **Imperatividade** | Impõe obrigações independentemente da concordância do destinatário | Não: ausente em atos negociais (licença, autorização) e enunciativos (certidão) |

#### Classificações e espécies
- Vinculados x discricionários; gerais x individuais; internos x externos; simples (uma vontade), complexos (vontades de órgãos diversos formam um só ato) e compostos (um ato principal e outro acessório que o aprova ou ratifica).
- Espécies: **normativos** (decretos, regulamentos, resoluções), **ordinatórios** (portarias, ordens de serviço, circulares), **negociais** (licença, vinculada e definitiva; autorização, discricionária e precária; permissão), **enunciativos** (certidões, atestados, pareceres) e **punitivos** (multas, interdições).

#### Extinção dos atos
| Forma | Causa | Exemplo |
| --- | --- | --- |
| **Anulação** | Ilegalidade | Nomeação sem concurso |
| **Revogação** | Conveniência e oportunidade | Revogar autorização de uso de área pública |
| **Cassação** | Beneficiário descumpre condições que deveria manter | Licença de funcionamento cujas exigências deixaram de ser cumpridas |
| **Caducidade** | Norma superveniente torna o ato incompatível | Lei nova que proíbe a atividade antes permitida |
| **Contraposição** | Ato posterior com efeitos opostos | Exoneração em relação à nomeação |

| Critério | **Anulação** | **Revogação** |
| --- | --- | --- |
| Motivo | Ilegalidade | Conveniência e oportunidade (mérito) |
| Quem faz | Administração (de ofício ou provocada) e Judiciário | Só a administração que praticou o ato |
| Efeitos | Ex tunc (retroativos), ressalvados terceiros de boa-fé | Ex nunc (para o futuro) |
| Alcança | Atos vinculados e discricionários | Só atos discricionários válidos |
| Limite temporal | Decadência de cinco anos para atos favoráveis, salvo má-fé (Lei 9.784/1999, art. 54) | Não revoga atos vinculados, consumados, que geraram direito adquirido ou meramente enunciativos |

- **Súmula 473 do STF**: a administração pode anular seus próprios atos, quando eivados de vícios que os tornam ilegais, ou revogá-los, por conveniência ou oportunidade, respeitados os direitos adquiridos e ressalvada, em todos os casos, a apreciação judicial.
- **Lei 9.784/1999, art. 53**: a administração **deve** anular os atos ilegais e **pode** revogá-los.
- **Convalidação** (art. 55): atos com **defeitos sanáveis** podem ser convalidados pela própria administração quando não acarretarem lesão ao interesse público nem prejuízo a terceiros. Os efeitos retroagem à data do ato.

> **⚠️ Pegadinha:** o Judiciário não revoga atos de outro Poder; ele só revoga os próprios atos administrativos (de gestão interna). Ao julgar, controla a **legalidade**, inclusive a razoabilidade, mas não o mérito.

#### Revisão relâmpago
- Multa a particular sem vínculo especial: poder de polícia; punição de servidor ou contratado: poder disciplinar.
- Excesso: além da competência; desvio: finalidade diversa.
- Competência, finalidade e forma são vinculadas; motivo e objeto podem ser discricionários.
- Presunção de legitimidade está em todo ato; autoexecutoriedade e imperatividade, não.
- Anulação: ilegalidade, ex tunc, administração ou Judiciário; revogação: mérito, ex nunc, só a administração.
- Cassação: descumprimento de condições pelo beneficiário.
- Convalidam-se vícios de competência não exclusiva e de forma não essencial.
`,
  });

  MOD_DA.sections.push({
    id: "pf-da-8112",
    title: "Lei 8.112/1990: regime jurídico dos servidores públicos federais",
    content: `
### O que o Cebraspe cobra aqui
A Lei 8.112/1990 é campo de prazos e de listas. A banca troca os 30 dias da posse pelos 15 do exercício, conta o prazo da posse a partir da nomeação "assinada" (e não da publicação), troca "tornar sem efeito" por "exonerar", inverte remoção e redistribuição, desloca uma proibição do art. 117 para a pena errada e muda o termo inicial da prescrição disciplinar (é a data em que o fato se tornou **conhecido**). Também cobra a divergência entre o texto da lei (estágio de 24 meses) e a CF (estabilidade em três anos).

#### Conceitos e provimento
- Abrangência (art. 1º): servidores civis da União, das autarquias, inclusive as em regime especial, e das fundações públicas federais.
- Cargo (art. 3º): conjunto de atribuições e responsabilidades, criado por lei, com denominação própria e vencimento pago pelos cofres públicos, para provimento em caráter efetivo ou em comissão.
- Requisitos básicos (art. 5º): nacionalidade brasileira, gozo dos direitos políticos, quitação com as obrigações militares e eleitorais, nível de escolaridade exigido, idade mínima de 18 anos e aptidão física e mental. Até 20% das vagas para pessoas com deficiência (§2º).

| Forma de provimento (art. 8º) | O que é |
| --- | --- |
| **Nomeação** (art. 9º) | Única forma originária; em caráter efetivo ou em comissão |
| **Promoção** | Progressão na carreira |
| **Readaptação** (art. 24) | Cargo compatível com limitação física ou mental verificada em inspeção médica |
| **Reversão** (art. 25) | Retorno do aposentado: por invalidez cujos motivos cessaram ou no interesse da administração |
| **Aproveitamento** (art. 30) | Retorno obrigatório do servidor em disponibilidade |
| **Reintegração** (art. 28) | Retorno do estável cuja demissão foi invalidada, com ressarcimento de todas as vantagens |
| **Recondução** (art. 29) | Retorno do estável ao cargo anterior por inabilitação em estágio probatório de outro cargo ou por reintegração do anterior ocupante |

> **⚠️ Pegadinha:** ascensão e transferência foram revogadas (SV 43). Promoção e readaptação são, ao mesmo tempo, formas de provimento e de vacância.

#### Posse e exercício
| Ato | O que é | Prazo | Se perder o prazo |
| --- | --- | --- | --- |
| **Posse** (art. 13) | Assinatura do termo; com ela ocorre a **investidura** (art. 7º) | **30 dias** da **publicação** do ato de provimento (§1º) | O ato de provimento é **tornado sem efeito** (§6º) |
| **Exercício** (art. 15) | Efetivo desempenho das atribuições | **15 dias** da **posse** (§1º) | **Exoneração** do cargo efetivo, ou designação para função de confiança tornada sem efeito (§2º) |

- A posse pode ser por procuração específica (art. 13, §3º); só há posse no provimento por nomeação (§4º); exige declaração de bens (§5º) e prévia inspeção médica oficial (art. 14).
- Cabe à autoridade do órgão ou entidade para onde o servidor foi nomeado dar-lhe exercício (art. 15, §3º).
- Mudança de sede: de 10 a 30 dias para retomar o exercício, incluído o trânsito (art. 18).
- Jornada (art. 19): até 40 horas semanais, com mínimo de 6 e máximo de 8 horas diárias.

#### Estágio probatório e estabilidade
- O art. 20 ainda fala em 24 meses, mas, desde a EC 19/1998 (estabilidade após **três anos**, CF, art. 41), STF e STJ entendem que o estágio probatório também dura **três anos**.
- Fatores avaliados (art. 20): assiduidade, disciplina, capacidade de iniciativa, produtividade e responsabilidade. A avaliação é submetida à homologação **quatro meses antes** do fim do período (§1º).
- Reprovado, o servidor é **exonerado** ou, se estável em cargo anterior, **reconduzido** (§2º).
- Em estágio, só cabem as licenças e afastamentos do art. 20, §4º; não cabem, por exemplo, licença para capacitação, para tratar de interesses particulares ou para mandato classista.

#### Vacância, remoção e redistribuição
- Vacância (art. 33): exoneração, demissão, promoção, readaptação, aposentadoria, posse em outro cargo inacumulável e falecimento.
- **Exoneração não é pena**: a pedido ou de ofício; no cargo efetivo, de ofício quando o servidor não satisfaz o estágio probatório ou, empossado, não entra em exercício no prazo (art. 34). **Demissão** é penalidade.

| Critério | **Remoção** (art. 36) | **Redistribuição** (art. 37) |
| --- | --- | --- |
| O que se desloca | O **servidor** | O **cargo** efetivo, ocupado ou vago |
| Para onde | No âmbito do **mesmo quadro**, com ou sem mudança de sede | Para **outro órgão ou entidade do mesmo Poder** |
| Iniciativa | De ofício ou a pedido | Interesse da administração, com prévia apreciação do órgão central do Sipec |

- Remoção a pedido, **independentemente do interesse da administração** (art. 36, III): para acompanhar cônjuge ou companheiro servidor deslocado no interesse da administração; por motivo de saúde do servidor, cônjuge, companheiro ou dependente, comprovado por junta médica oficial; ou por processo seletivo, quando houver mais interessados que vagas.

#### Direitos e vantagens (linhas gerais)
- Vantagens (art. 49): indenizações (ajuda de custo, diárias, transporte e auxílio-moradia), gratificações e adicionais. As indenizações **não se incorporam** ao vencimento ou provento para qualquer efeito (§1º).
- Férias (art. 77): 30 dias, acumuláveis até o máximo de dois períodos por necessidade do serviço; 12 meses de exercício para o primeiro período; parceláveis em até três etapas, a pedido do servidor e no interesse da administração.
- Licenças (art. 81): doença em pessoa da família, afastamento do cônjuge, serviço militar, atividade política, capacitação (até 3 meses após cada quinquênio, art. 87), interesses particulares (até 3 anos consecutivos, sem remuneração, vedada em estágio probatório, art. 91) e mandato classista.
- Concessões (art. 97): 1 dia para doar sangue; até 2 dias para alistamento ou recadastramento eleitoral; 8 dias consecutivos por casamento ou falecimento de cônjuge, companheiro, pais, filhos, irmãos e outros familiares próximos.

#### Proibições e acumulação
| Proibição do art. 117 | Pena |
| --- | --- |
| Incisos I a VIII e XIX: ausentar-se sem autorização, retirar documento sem anuência, recusar fé a documento público, opor resistência injustificada ao andamento de processo, manifestação de apreço ou desapreço, cometer a pessoa estranha atribuição própria, coagir subordinado a filiar-se, manter cônjuge ou parente até o 2º grau sob chefia imediata em cargo de confiança, recusar-se a atualizar dados cadastrais | **Advertência** (art. 129) |
| Incisos XVII e XVIII: cometer a outro servidor atribuições estranhas ao cargo, salvo emergência e transitoriamente; exercer atividade incompatível com o cargo e o horário | **Suspensão** (art. 130) |
| Incisos IX a XVI: valer-se do cargo para proveito pessoal, gerenciar sociedade privada ou exercer o comércio, atuar como procurador junto a repartições, receber propina, aceitar emprego de Estado estrangeiro, praticar usura, proceder de forma desidiosa, usar recursos da repartição em atividade particular | **Demissão** (art. 132, XIII) |

- Ser acionista, cotista ou comanditário é permitido; e a vedação de gerência não se aplica à participação em conselhos de empresas em que a União tenha participação nem durante licença para interesses particulares, observada a legislação sobre conflito de interesses (art. 117, parágrafo único).
- Acumulação ilegal (arts. 118 e 133): notificação para optar em **10 dias** improrrogáveis; a opção até o último dia do prazo de defesa configura boa-fé e se converte em pedido de exoneração do outro cargo.

#### Responsabilidades (arts. 121 a 126)
- Civil, penal e administrativa, **independentes e cumuláveis** (art. 125).
- Dano a terceiro: o servidor responde perante a Fazenda Pública **em ação regressiva** (art. 122, §2º); a obrigação de reparar passa aos sucessores até o limite da herança (§3º).
- A absolvição criminal que **negue a existência do fato ou a autoria** afasta a responsabilidade administrativa (art. 126); a absolvição por falta de provas não afasta.

#### Penalidades (art. 127) e prescrição (art. 142)
| Penalidade | Hipóteses | Quem aplica (art. 141) | Prescrição |
| --- | --- | --- | --- |
| **Advertência** | Art. 117, I a VIII e XIX; dever funcional sem pena mais grave | Chefe da repartição | 180 dias |
| **Suspensão** (até 90 dias) | Reincidência em falta de advertência; demais proibições que não geram demissão | Até 30 dias: chefe da repartição; acima: autoridade imediatamente inferior às do inciso I | 2 anos |
| **Demissão** | Art. 132 (crime contra a administração, abandono, inassiduidade, improbidade, corrupção, acumulação ilegal etc.) | Presidente da República, Presidentes das Casas e dos Tribunais Federais, PGR | 5 anos |
| **Cassação de aposentadoria ou disponibilidade** | Falta punível com demissão praticada na atividade | As mesmas da demissão | 5 anos |
| **Destituição de cargo em comissão** | Infração sujeita a suspensão ou demissão, por quem não é efetivo | Autoridade que nomeou | 5 anos |

- Suspensão pode ser convertida em multa de 50% por dia de remuneração, com o servidor em serviço (art. 130, §2º). Os registros de advertência e suspensão são cancelados após 3 e 5 anos sem nova infração, sem efeito retroativo (art. 131).
- Prescrição: corre da data em que o fato se tornou **conhecido** (§1º); infração também capitulada como crime segue o prazo penal (§2º); a abertura de sindicância ou PAD **interrompe** a prescrição (§3º). Súmula 635 do STJ: o prazo volta a correr por inteiro 140 dias após a interrupção.
- Demissão ou destituição por art. 117, IX e XI, impede nova investidura em cargo federal por **5 anos** (art. 137). O parágrafo único, que vedava o retorno para sempre, foi declarado inconstitucional pelo STF (ADI 2.975).

#### Sindicância e PAD
| Critério | **Sindicância** | **PAD** |
| --- | --- | --- |
| Prazo | 30 dias, prorrogável por igual período a critério da autoridade superior (art. 145, parágrafo único) | 60 dias da publicação do ato que constitui a comissão, prorrogável por igual prazo (art. 152) |
| Resultado | Arquivamento; advertência ou suspensão de até 30 dias; instauração de PAD (art. 145) | Obrigatório para suspensão acima de 30 dias, demissão, cassação e destituição (art. 146) |

- Comissão do PAD (art. 149): três servidores **estáveis**; o presidente ocupa cargo efetivo superior ou de mesmo nível, ou tem escolaridade igual ou superior à do indiciado.
- Fases (art. 151): instauração, inquérito (instrução, defesa e relatório) e julgamento.
- Defesa escrita: 10 dias; 20 dias, comum, se houver dois ou mais indiciados; prorrogável pelo dobro para diligências (art. 161); 15 dias da última publicação, se a citação for por edital (art. 163).
- Julgamento em 20 dias do recebimento do processo (art. 167), acatando o relatório salvo se contrário às provas (art. 168); julgamento fora do prazo não gera nulidade (art. 169, §1º).
- Afastamento preventivo (art. 147): até 60 dias, prorrogável por igual prazo, **sem prejuízo da remuneração**.
- Rito sumário (arts. 133 e 140): acumulação ilegal, abandono de cargo (mais de 30 dias consecutivos) e inassiduidade habitual (60 dias interpolados em 12 meses); conclusão em 30 dias, prorrogável por até 15.
- SV 5: a falta de advogado no PAD não ofende a CF. Revisão (art. 174): a qualquer tempo, diante de fatos novos, sem agravar a pena (art. 182, parágrafo único).

#### Revisão relâmpago
- Posse: 30 dias da publicação; perdido o prazo, o provimento é tornado sem efeito.
- Exercício: 15 dias da posse; perdido o prazo, exoneração.
- Estágio probatório e estabilidade: três anos.
- Remoção desloca o servidor; redistribuição desloca o cargo.
- Gerência de empresa privada: demissão; parente sob chefia imediata: advertência.
- Prescrição: 5 anos, 2 anos e 180 dias, a contar do conhecimento do fato.
- Sindicância: 30 + 30 dias; PAD: 60 + 60 dias, comissão de três estáveis.
`,
  });

  MOD_DA.sections.push({
    id: "pf-da-controle",
    title: "Processo administrativo, improbidade, responsabilidade civil e controle",
    content: `
### O que o Cebraspe cobra aqui
Na Lei 9.784/1999, a banca troca prazos (recurso em 10 dias, não 15; reconsideração em 5), inverte impedimento e suspeição, diz que o recurso tem efeito suspensivo como regra e afirma que a delegação exige subordinação hierárquica. Na improbidade, o ponto central depois da Lei 14.230/2021 é o **dolo**: não há mais improbidade culposa; e cada espécie tem sanções próprias. Na responsabilidade civil, a pegadinha favorita é a vítima processar diretamente o servidor, o que o STF não admite.

#### Lei 9.784/1999: alcance e princípios
- Aplica-se à administração federal direta e indireta e aos Poderes Legislativo e Judiciário da União no exercício de função administrativa (art. 1º). Processos com lei própria seguem essa lei, e a 9.784 se aplica subsidiariamente (art. 69).
- Princípios (art. 2º): legalidade, finalidade, motivação, razoabilidade, proporcionalidade, moralidade, ampla defesa, contraditório, segurança jurídica, interesse público e eficiência.
- Critérios (parágrafo único): impulso de ofício; gratuidade, salvo previsão legal; formas simples; vedação de aplicação retroativa de nova interpretação.
- O administrado pode fazer-se assistir, **facultativamente**, por advogado, salvo quando a lei exigir (art. 3º, IV).
- O processo começa de ofício ou a pedido (art. 5º); o requerimento é escrito, salvo quando admitida solicitação oral (art. 6º).

#### Competência, delegação e avocação
- A competência é **irrenunciável** e se exerce pelo órgão a que foi atribuída, salvo delegação e avocação legalmente admitidas (art. 11).
- **Delegação** (art. 12): de parte da competência, a outro órgão ou titular, **ainda que não hierarquicamente subordinado**, por circunstâncias de índole técnica, social, econômica, jurídica ou territorial.
- **Indelegáveis** (art. 13): edição de atos de caráter normativo, decisão de recursos administrativos e matérias de competência exclusiva.
- O ato de delegação é publicado, é **revogável a qualquer tempo**, e a decisão tomada por delegação menciona essa qualidade e considera-se editada pelo **delegado** (art. 14). Por isso o mandado de segurança é dirigido contra o delegado (Súmula 510 do STF).
- **Avocação** (art. 15): excepcional e temporária, por motivos relevantes justificados, de competência de órgão **hierarquicamente inferior**.

> **⚠️ Pegadinha:** a delegação dispensa hierarquia; a avocação exige.

#### Impedimento x suspeição
| Critério | **Impedimento** (arts. 18 e 19) | **Suspeição** (arts. 20 e 21) |
| --- | --- | --- |
| Hipóteses | Interesse direto ou indireto na matéria; ter participado ou vir a participar como perito, testemunha ou representante, ou se isso ocorrer com cônjuge, companheiro ou parente e afins até o 3º grau; litigar com o interessado ou seu cônjuge ou companheiro | Amizade íntima ou inimizade notória com interessado ou com seus cônjuges, companheiros, parentes e afins até o 3º grau |
| Natureza | Objetiva | Subjetiva |
| Consequência | Dever de comunicar e abster-se; a omissão é **falta grave** para efeitos disciplinares (art. 19) | Pode ser arguida; o indeferimento admite recurso **sem efeito suspensivo** (art. 21) |

#### Prazos da Lei 9.784/1999
| Situação | Prazo |
| --- | --- |
| Atos sem prazo específico | 5 dias, prorrogável até o dobro com justificativa (art. 24) |
| Intimação para comparecimento | Antecedência mínima de 3 dias úteis (art. 26, §2º) |
| Parecer obrigatório | Até 15 dias, salvo norma especial (art. 42) |
| Manifestação após a instrução | Até 10 dias (art. 44) |
| Decisão após a instrução | Até 30 dias, prorrogável por igual período motivadamente (art. 49) |
| Interposição de recurso | 10 dias da ciência ou divulgação oficial (art. 59) |
| Reconsideração pela autoridade recorrida | 5 dias (art. 56, §1º) |
| Alegações dos demais interessados no recurso | 5 dias úteis (art. 62) |
| Decisão do recurso | Até 30 dias do recebimento dos autos, prorrogável por igual período (art. 59, §§1º e 2º) |
| Anulação de ato favorável ao destinatário | Decadência em 5 anos, salvo má-fé (art. 54) |

- Exclui-se o dia do começo e inclui-se o do vencimento; prazos em dias contam-se de modo **contínuo** (art. 66).

#### Recurso administrativo e motivação
- Cabe por razões de **legalidade e de mérito**; é dirigido a quem decidiu, que, se não reconsiderar em 5 dias, o encaminha à autoridade superior (art. 56).
- Independe de caução, salvo exigência legal (art. 56, §2º); SV 21: é inconstitucional exigir depósito ou arrolamento prévio de bens.
- Tramita por no máximo **três instâncias**, salvo disposição legal diversa (art. 57).
- **Não tem efeito suspensivo**, salvo disposição legal; pode recebê-lo diante de justo receio de prejuízo de difícil ou incerta reparação (art. 61).
- O julgamento do recurso pode agravar a situação do recorrente, desde que ele seja cientificado para alegar antes da decisão (art. 64, parágrafo único). Na **revisão** de processo sancionador não pode haver agravamento (art. 65).
- Motivação obrigatória (art. 50) quando o ato nega, limita ou afeta direitos; impõe ou agrava sanções; decide concurso; dispensa ou declara inexigível licitação; decide recurso; ou anula, revoga, suspende ou convalida ato. Pode consistir em concordância com parecer anterior (motivação aliunde, §1º).

#### Improbidade administrativa (Lei 8.429/1992, com a Lei 14.230/2021)
- Só há improbidade com **dolo** (art. 1º, §§1º a 3º): vontade livre e consciente de alcançar o resultado ilícito, não bastando a voluntariedade do agente. A modalidade culposa de lesão ao erário deixou de existir.

| Espécie | Exemplo | Suspensão dos direitos políticos | Proibição de contratar | Multa civil |
| --- | --- | --- | --- | --- |
| Enriquecimento ilícito (art. 9º) | Receber vantagem para omitir ato de ofício | Até 14 anos | Até 14 anos | Equivalente ao acréscimo patrimonial |
| Lesão ao erário (art. 10) | Permitir aquisição por preço superior ao de mercado | Até 12 anos | Até 12 anos | Equivalente ao dano |
| Violação de princípios (art. 11) | Revelar fato que deva permanecer em segredo | Não há | Até 4 anos | Até 24 vezes a remuneração |

- A **perda da função pública** está prevista para os arts. 9º e 10, não para o art. 11 (art. 12). O rol do art. 11 passou a ser **taxativo**.
- Perda da função e suspensão dos direitos políticos só se efetivam com o **trânsito em julgado** (art. 20).
- Legitimidade: Ministério Público e pessoa jurídica interessada (STF, ADIs 7.042 e 7.043). Prescrição: **8 anos** do fato (art. 23), com prescrição intercorrente de 4 anos.
- STF, Tema 1.199: a revogação da modalidade culposa não atinge a coisa julgada, mas alcança processos sem condenação definitiva; o novo regime prescricional não retroage. Ressarcimento por ato **doloso** de improbidade é imprescritível (Tema 897).

#### Responsabilidade civil do Estado
| Teoria | Ideia |
| --- | --- |
| Irresponsabilidade | O Estado não responde; superada |
| Civilista | Exige culpa do agente, como no direito privado |
| Culpa administrativa (culpa do serviço) | O serviço não funcionou, funcionou mal ou atrasou |
| **Risco administrativo** | Objetiva, **admite excludentes**: regra do art. 37, §6º |
| Risco integral | Objetiva, sem excludentes: dano nuclear (art. 21, XXIII, "d") e, segundo o STJ, dano ambiental |

- Requisitos: conduta do agente **nessa qualidade**, dano e nexo causal; a culpa é dispensada.
- Excludentes: culpa exclusiva da vítima, caso fortuito ou força maior e fato exclusivo de terceiro; a culpa concorrente apenas **atenua** a indenização.
- A prestadora de serviço público responde objetivamente também perante o **não usuário** (STF, RE 591.874). Nas omissões, o STF aplica a responsabilidade objetiva quando havia dever específico de agir (ex.: morte de detento, RE 841.526).
- **Dupla garantia** (STF, Tema 940): a vítima aciona o Estado ou a prestadora, e **não** o agente; este responde em **ação regressiva**, se agiu com **dolo ou culpa**.
- Erro judiciário e prisão além do tempo fixado na sentença geram indenização (art. 5º, LXXV). A pretensão indenizatória contra a Fazenda prescreve em 5 anos (Decreto 20.910/1932).

#### Controle da administração
| Critério | Espécies |
| --- | --- |
| Quem controla | Administrativo (autotutela), legislativo (com auxílio do TCU) e judicial |
| Posição | Interno (art. 74) e externo (arts. 70 e 71) |
| Momento | Prévio, concomitante e posterior |
| Aspecto | De legalidade e de mérito |

- O Judiciário controla a **legalidade** (incluindo razoabilidade e proporcionalidade), não o mérito.
- O Congresso susta atos normativos que exorbitem do poder regulamentar (art. 49, V); o TCU susta a execução de ato ilegal (art. 71, X), mas a sustação de contrato cabe ao Congresso (art. 71, §1º).

#### Revisão relâmpago
- Delegação: sem exigir hierarquia; não se delegam atos normativos, recursos e competência exclusiva.
- Impedimento é objetivo (interesse, participação, litígio); suspeição é subjetiva (amizade ou inimizade).
- Recurso: 10 dias, sem efeito suspensivo, até três instâncias, sem caução.
- Improbidade só dolosa; art. 11 não tem perda da função nem suspensão dos direitos políticos.
- Risco administrativo admite excludentes; culpa concorrente atenua.
- Vítima processa o Estado; o agente só responde em regresso, por dolo ou culpa.
`,
  });

  MOD_DA.sections.push({
    id: "pf-da-licitacoes",
    title: "Licitações e contratações: Lei 14.133/2021",
    content: `
### O que o Cebraspe cobra aqui
A Lei 14.133/2021 é a lei geral de licitações desde 30/12/2023, quando a Lei 8.666/1993, a Lei do Pregão (10.520/2002) e os arts. 1º a 47-A da Lei do RDC deixaram de valer. A banca ainda menciona modalidades extintas (tomada de preços e convite) para ver se você percebe, troca dispensa por inexigibilidade, inverte a ordem das fases (na lei nova, o julgamento vem **antes** da habilitação) e confunde modalidade com critério de julgamento.

#### Alcance, princípios e objetivos
- Abrangência (art. 1º): administrações diretas, autárquicas e fundacionais da União, dos Estados, do DF e dos Municípios, inclusive o Legislativo e o Judiciário no exercício de função administrativa. **Não** abrange empresas públicas e sociedades de economia mista, regidas pela Lei 13.303/2016, salvo quanto aos crimes (art. 178).
- Princípios (art. 5º): legalidade, impessoalidade, moralidade, publicidade, eficiência, interesse público, probidade administrativa, igualdade, **planejamento**, transparência, eficácia, **segregação de funções**, motivação, vinculação ao edital, julgamento objetivo, segurança jurídica, razoabilidade, competitividade, proporcionalidade, celeridade, economicidade e desenvolvimento nacional sustentável, além das disposições da LINDB.
- Objetivos (art. 11): resultado mais vantajoso, inclusive quanto ao ciclo de vida do objeto; tratamento isonômico e justa competição; evitar sobrepreço, preços inexequíveis e superfaturamento; incentivar a inovação e o desenvolvimento nacional sustentável.

#### Agentes públicos
- **Agente de contratação** (art. 8º): designado pela autoridade competente **entre servidores efetivos ou empregados públicos dos quadros permanentes**; conduz o certame até a homologação, auxiliado por equipe de apoio, e responde **individualmente** pelos seus atos, salvo se induzido a erro pela equipe (§1º).
- No **pregão**, o agente responsável pela condução do certame chama-se **pregoeiro** (§5º).
- **Comissão de contratação** (§2º): em licitação de bens ou serviços especiais, o agente pode ser substituído por comissão de no mínimo 3 membros, que respondem solidariamente, salvo quem registrar em ata posição divergente fundamentada.
- **Segregação de funções** (art. 7º, §1º): a mesma pessoa não deve atuar simultaneamente em funções suscetíveis a riscos, para reduzir erros e fraudes.

#### Fases do processo (art. 17)
1. Preparatória: planejamento, estudo técnico preliminar, termo de referência, anteprojeto ou projeto, orçamento estimado, minuta do edital e análise de riscos (art. 18); ao final, controle prévio de legalidade pelo órgão de assessoramento jurídico (art. 53).
2. Divulgação do edital, inclusive no Portal Nacional de Contratações Públicas (art. 54).
3. Apresentação de propostas e lances, quando for o caso.
4. Julgamento.
5. Habilitação.
6. Recursal.
7. Homologação.

- §1º: a habilitação pode **anteceder** a apresentação de propostas e o julgamento, mediante ato motivado com explicitação dos benefícios, desde que **expressamente previsto no edital**.
- §2º: a forma **eletrônica** é preferencial; a presencial exige motivação, e a sessão pública é registrada em ata e gravada em áudio e vídeo.
- Encerradas as fases, a autoridade superior pode determinar o saneamento, **revogar** por conveniência e oportunidade (com base em fato superveniente comprovado), **anular** por ilegalidade insanável ou **adjudicar e homologar** (art. 71).

> **⚠️ Pegadinha:** na Lei 8.666/1993, a habilitação vinha antes do julgamento; na Lei 14.133/2021, a regra é o inverso, e a inversão é que precisa de motivação e previsão no edital.

#### Modalidades (art. 28)
| Modalidade | Objeto | Critério de julgamento |
| --- | --- | --- |
| **Pregão** | Bens e serviços **comuns** (obrigatório) | Menor preço ou maior desconto |
| **Concorrência** | Bens e serviços especiais e obras e serviços comuns e especiais de engenharia | Menor preço, melhor técnica ou conteúdo artístico, técnica e preço, maior retorno econômico ou maior desconto |
| **Concurso** | Trabalho técnico, científico ou artístico | Melhor técnica ou conteúdo artístico, com prêmio ou remuneração ao vencedor |
| **Leilão** | Alienação de bens imóveis ou de bens móveis inservíveis ou legalmente apreendidos | Maior lance |
| **Diálogo competitivo** | Obras, serviços e compras que envolvam inovação tecnológica ou técnica, ou soluções que exijam adaptação, quando a administração não consegue definir a solução com precisão | Proposta final após diálogos com licitantes previamente selecionados por critérios objetivos |

- §2º do art. 28: é **vedada** a criação de outras modalidades ou a combinação das previstas. Tomada de preços e convite **não existem mais**.
- O pregão não se aplica a serviços técnicos especializados de natureza predominantemente intelectual nem a obras e serviços de engenharia, **exceto** os serviços comuns de engenharia (art. 29, parágrafo único).
- Bens e serviços comuns são aqueles cujos padrões de desempenho e qualidade podem ser objetivamente definidos pelo edital, por especificações usuais de mercado (art. 6º, XIII).
- No diálogo competitivo, a condução cabe a comissão de pelo menos 3 servidores efetivos ou empregados públicos dos quadros permanentes (art. 32, §1º, XI).

#### Critérios de julgamento (art. 33)
Menor preço; maior desconto; melhor técnica ou conteúdo artístico; técnica e preço; maior lance, no caso de leilão; e maior retorno econômico, usado no contrato de eficiência (art. 39).

> **⚠️ Pegadinha:** modalidade é o rito; critério é a regra de escolha da proposta. "Técnica e preço" e "maior lance" não são modalidades.

#### Contratação direta
| Critério | **Inexigibilidade** (art. 74) | **Dispensa** (art. 75) | **Licitação dispensada** (art. 76) |
| --- | --- | --- | --- |
| Competição | **Inviável** | Viável, mas a lei permite não licitar | Viável, mas a lei determina não licitar |
| Rol | Exemplificativo ("em especial") | Taxativo | Taxativo |
| Exemplos | Fornecedor exclusivo; artista consagrado pela crítica especializada ou pela opinião pública; serviço técnico especializado de natureza predominantemente intelectual com notória especialização; credenciamento; imóvel cujas características tornem necessária sua escolha | Baixo valor (incisos I e II); emergência ou calamidade pública; licitação deserta ou fracassada há menos de 1 ano | Alienação de bens em hipóteses como dação em pagamento, doação e permuta |

- A inexigibilidade para serviço técnico especializado é **vedada** para serviços de publicidade e divulgação (art. 74, III).
- Art. 75, I e II: valores originais de R$ 100 mil (obras, serviços de engenharia e manutenção de veículos automotores) e R$ 50 mil (compras e outros serviços), **atualizados anualmente por decreto** (art. 182). Confira o valor vigente na época da prova.
- Emergência ou calamidade (art. 75, VIII): parcelas concluídas em até **1 ano** da ocorrência, vedadas a prorrogação do contrato e a recontratação da mesma empresa com base nesse inciso.
- O processo de contratação direta (art. 72) reúne, entre outros, estimativa de despesa, pareceres jurídico e técnicos quando for o caso, demonstração de recursos orçamentários, comprovação de habilitação, razão da escolha do contratado, justificativa de preço e autorização da autoridade competente; o ato ou o extrato do contrato é divulgado em sítio eletrônico oficial.

> **⚠️ Pegadinha:** na dispensa a competição seria possível; na inexigibilidade ela é inviável. Artista consagrado e fornecedor exclusivo são casos de **inexigibilidade**, não de dispensa.

#### Impugnação, recursos e sanções
- Impugnar o edital ou pedir esclarecimento: **qualquer pessoa**, até **3 dias úteis** antes da abertura do certame; resposta em até 3 dias úteis, limitada ao último dia útil anterior à abertura (art. 164).
- Recurso: **3 dias úteis** da intimação ou da lavratura da ata (art. 165); quanto ao julgamento e à habilitação, a intenção de recorrer deve ser manifestada imediatamente.

| Sanção (art. 156) | Alcance e prazo |
| --- | --- |
| Advertência | Só para inexecução parcial do contrato, quando não se justificar pena mais grave |
| Multa | Entre 0,5% e 30% do valor do contrato |
| Impedimento de licitar e contratar | No âmbito do **ente federativo** que aplicou; até 3 anos |
| Declaração de inidoneidade | Em **todos os entes** federativos; de 3 a 6 anos |

#### Revisão relâmpago
- Cinco modalidades: pregão, concorrência, concurso, leilão e diálogo competitivo; vedadas outras e combinações.
- Pregão: bens e serviços comuns; não serve para serviço intelectual nem para obra de engenharia.
- Ordem padrão: julgamento antes da habilitação; inversão só com motivação e previsão no edital.
- Agente de contratação: servidor efetivo ou empregado permanente; no pregão, pregoeiro.
- Inexigibilidade: competição inviável, rol exemplificativo; dispensa: rol taxativo.
- Emergência: até 1 ano, sem prorrogação nem recontratação.
- Impedimento: só o ente que aplicou, até 3 anos; inidoneidade: todos os entes, 3 a 6 anos.
`,
  });

  // ---------- Itens: Direito Constitucional ----------
  pfQuestoes.push(
    ce(
      PF_DCON,
      "Princípios fundamentais",
      "Constituem fundamentos da República Federativa do Brasil, entre outros, a dignidade da pessoa humana, o pluralismo político e a erradicação da pobreza e da marginalização.",
      false,
      "Dignidade da pessoa humana e pluralismo político são fundamentos (art. 1º, III e V), mas erradicar a pobreza e a marginalização é objetivo fundamental (art. 3º, III).",
      "pf-dc-fundamentos",
    ),
    ce(
      PF_DCON,
      "Aplicabilidade das normas",
      "A norma constitucional que assegura o livre exercício de qualquer trabalho, ofício ou profissão, atendidas as qualificações profissionais que a lei estabelecer, é de eficácia contida, pois produz efeitos integrais desde a promulgação da Constituição, mas pode ter seu alcance restringido pelo legislador.",
      true,
      "O art. 5º, XIII, é o exemplo clássico de norma de eficácia contida: o direito já pode ser exercido, e a lei pode restringi-lo ao exigir qualificações profissionais.",
      "pf-dc-fundamentos",
    ),
    ce(
      PF_DCON,
      "Poder constituinte — emenda",
      "Proposta de emenda à Constituição apresentada por um terço, no mínimo, dos membros do Senado Federal será discutida e votada em cada Casa do Congresso Nacional, em dois turnos, e considerada aprovada se obtiver, em ambos, dois terços dos votos dos respectivos membros.",
      false,
      "A iniciativa e os dois turnos estão corretos (art. 60, I e §2º), mas o quórum de aprovação é de três quintos dos votos dos membros de cada Casa, e não de dois terços.",
      "pf-dc-fundamentos",
    ),
    me(
      PF_DCON,
      "Princípios fundamentais",
      "Entre os princípios que regem a República Federativa do Brasil em suas relações internacionais, conforme o art. 4º da Constituição Federal, inclui-se",
      [
        "a garantia do desenvolvimento nacional.",
        "a soberania.",
        "o pluralismo político.",
        "a concessão de asilo político.",
        "a redução das desigualdades sociais e regionais.",
      ],
      3,
      "A concessão de asilo político está no art. 4º, X. Soberania e pluralismo político são fundamentos (art. 1º); garantir o desenvolvimento nacional e reduzir as desigualdades são objetivos (art. 3º).",
      "pf-dc-fundamentos",
    ),
    ce(
      PF_DCON,
      "Inviolabilidade do domicílio",
      "Munido de mandado judicial de busca e apreensão, o agente de polícia pode ingressar na casa do investigado, sem o consentimento do morador, a qualquer hora do dia ou da noite.",
      false,
      "Pelo art. 5º, XI, a determinação judicial só autoriza o ingresso durante o dia. A qualquer hora, sem consentimento, só se entra em caso de flagrante delito, desastre ou para prestar socorro.",
      "pf-dc-direitos",
    ),
    ce(
      PF_DCON,
      "Sigilo das comunicações",
      "Conforme a Constituição Federal, a interceptação de comunicações telefônicas somente pode ser autorizada por ordem judicial, para fins de investigação criminal ou instrução processual penal, de modo que não pode ser decretada com o objetivo exclusivo de instruir processo administrativo disciplinar.",
      true,
      "O art. 5º, XII, restringe a quebra a ordem judicial e a fins penais. A prova obtida em interceptação válida pode ser emprestada ao PAD, com autorização do juízo e contraditório (Súmula 591 do STJ), mas a interceptação não pode ser decretada para o processo disciplinar.",
      "pf-dc-direitos",
    ),
    ce(
      PF_DCON,
      "Direito de reunião",
      "Servidores que pretendam realizar reunião pacífica, sem armas, em praça pública devem obter prévia autorização da autoridade competente, que somente poderá negá-la se outra reunião já tiver sido convocada para o mesmo local.",
      false,
      "O art. 5º, XVI, dispensa autorização: exige-se apenas prévio aviso à autoridade competente, desde que a reunião não frustre outra anteriormente convocada para o mesmo local.",
      "pf-dc-direitos",
    ),
    ce(
      PF_DCON,
      "Mandado de segurança coletivo",
      "O mandado de segurança coletivo pode ser impetrado por partido político com representação no Congresso Nacional e por organização sindical, entidade de classe ou associação legalmente constituída e em funcionamento há pelo menos um ano, em defesa dos interesses de seus membros ou associados, dispensando-se, nesse caso, autorização especial destes.",
      true,
      "É a redação do art. 5º, LXX. A dispensa de autorização dos associados consta da Súmula 629 do STF e do art. 21 da Lei 12.016/2009.",
      "pf-dc-direitos",
    ),
    me(
      PF_DCON,
      "Remédios constitucionais",
      "Mário teve negado, na via administrativa, pedido de acesso a informações relativas à sua pessoa constantes de banco de dados de entidade governamental. Para assegurar o conhecimento dessas informações, o remédio constitucional adequado é o(a)",
      ["mandado de segurança individual.", "habeas data.", "mandado de injunção.", "ação popular.", "habeas corpus."],
      1,
      "O habeas data serve para assegurar o conhecimento de informações relativas à pessoa do impetrante em registros de entidades governamentais ou de caráter público (art. 5º, LXXII, a). O mandado de segurança é subsidiário e não cabe quando o direito é amparado por habeas data (art. 5º, LXIX).",
      "pf-dc-direitos",
    ),
    ce(
      PF_DCON,
      "Segurança pública — Polícia Federal",
      "Compete à Polícia Federal apurar infrações penais praticadas em detrimento de bens, serviços e interesses da União ou de suas entidades autárquicas, empresas públicas e sociedades de economia mista.",
      false,
      "O art. 144, §1º, I, menciona apenas a União, suas entidades autárquicas e empresas públicas. Crimes contra sociedade de economia mista são, em regra, de competência da Justiça estadual (Súmula 42 do STJ).",
      "pf-dc-administracao",
    ),
    ce(
      PF_DCON,
      "Cargos em comissão e funções de confiança",
      "As funções de confiança são exercidas exclusivamente por servidores ocupantes de cargo efetivo, ao passo que os cargos em comissão podem ser providos por pessoas sem vínculo efetivo com a administração, observados os casos, condições e percentuais mínimos reservados por lei a servidores de carreira.",
      true,
      "É o que dispõe o art. 37, V, da CF. Ambos se destinam apenas às atribuições de direção, chefia e assessoramento.",
      "pf-dc-administracao",
    ),
    ce(
      PF_DCON,
      "Estabilidade",
      "Extinto o cargo ocupado por servidor estável, este será exonerado, assegurado o pagamento de indenização proporcional ao tempo de serviço.",
      false,
      "Pelo art. 41, §3º, o servidor estável cujo cargo é extinto ou declarado desnecessário fica em disponibilidade, com remuneração proporcional ao tempo de serviço, até seu adequado aproveitamento em outro cargo.",
      "pf-dc-administracao",
    ),
    me(
      PF_DCON,
      "Acumulação de cargos",
      "De acordo com o art. 37, XVI, da Constituição Federal, havendo compatibilidade de horários e observado o teto remuneratório, é permitida a acumulação remunerada de",
      [
        "dois cargos técnicos ou científicos, desde que em entes federativos distintos.",
        "um cargo de agente administrativo com um emprego em sociedade de economia mista.",
        "dois cargos efetivos quaisquer, se a soma das jornadas não exceder sessenta horas semanais.",
        "dois cargos privativos de profissionais de saúde, ainda que a profissão não seja regulamentada.",
        "um cargo de professor com outro técnico ou científico.",
      ],
      4,
      "As hipóteses são: dois cargos de professor; um de professor com outro técnico ou científico; e dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas (art. 37, XVI). A vedação alcança também empregos em sociedades de economia mista (inciso XVII).",
      "pf-dc-administracao",
    ),
  );

  // ---------- Itens: Direito Administrativo (organização, atos e Lei 8.112) ----------
  pfQuestoes.push(
    ce(
      PF_DADM,
      "Desconcentração x descentralização",
      "A criação de superintendências regionais da Polícia Federal, com distribuição interna de competências dentro da mesma pessoa jurídica, é exemplo de desconcentração, ao passo que a criação, por lei, de uma autarquia para executar determinado serviço público caracteriza descentralização por outorga.",
      true,
      "Desconcentração é a repartição de competências entre órgãos de uma mesma pessoa jurídica; descentralização por outorga transfere, por lei, a titularidade e a execução do serviço a uma entidade da administração indireta.",
      "pf-da-organizacao",
    ),
    ce(
      PF_DADM,
      "Órgão x entidade",
      "A Polícia Federal integra a estrutura do Ministério da Justiça e Segurança Pública e, por isso, é órgão da administração direta da União, desprovido de personalidade jurídica própria.",
      true,
      "Órgão é unidade de atuação integrante da estrutura da Administração (Lei 9.784/1999, art. 1º, §2º, I), ao passo que entidade é a unidade dotada de personalidade jurídica (inciso II). Logo, órgão não tem personalidade jurídica própria: a PF é órgão do MJSP e seus atos são imputados à União.",
      "pf-da-organizacao",
    ),
    ce(
      PF_DADM,
      "Administração indireta",
      "A sociedade de economia mista é pessoa jurídica de direito privado cuja instituição depende de autorização em lei específica e que pode adotar qualquer das formas societárias admitidas em direito, desde que a maioria das ações com direito a voto pertença ao ente público.",
      false,
      "A sociedade de economia mista deve adotar a forma de sociedade anônima (Lei 13.303/2016, art. 4º). Quem pode adotar qualquer forma societária é a empresa pública (art. 3º). A autorização legal está correta (CF, art. 37, XIX).",
      "pf-da-organizacao",
    ),
    ce(
      PF_DADM,
      "Convalidação",
      "Os vícios de competência, quando não se tratar de competência exclusiva, e de forma, quando esta não for essencial à validade do ato, são em regra sanáveis, de modo que o ato pode ser convalidado pela própria administração se não acarretar lesão ao interesse público nem prejuízo a terceiros.",
      true,
      "O art. 55 da Lei 9.784/1999 admite a convalidação de defeitos sanáveis sem lesão ao interesse público nem prejuízo a terceiros; a doutrina identifica como sanáveis os vícios de competência não exclusiva e de forma não essencial.",
      "pf-da-atos-poderes",
    ),
    ce(
      PF_DADM,
      "Revogação",
      "A revogação de ato administrativo discricionário, fundada em razões de conveniência e oportunidade, produz efeitos retroativos e pode ser determinada pelo Poder Judiciário no exercício de sua função jurisdicional.",
      false,
      "A revogação produz efeitos ex nunc e é privativa da administração que praticou o ato (Súmula 473 do STF). O Judiciário, ao julgar, controla apenas a legalidade e pode anular, mas não revogar.",
      "pf-da-atos-poderes",
    ),
    ce(
      PF_DADM,
      "Poder disciplinar x poder de polícia",
      "O poder disciplinar autoriza a administração a apurar infrações e aplicar penalidades aos servidores e às demais pessoas sujeitas à disciplina administrativa, como empresas que com ela mantenham contrato, ao passo que a multa aplicada a comerciante por descumprir norma sanitária decorre do poder de polícia.",
      true,
      "O poder disciplinar pressupõe vínculo especial com a administração (servidores e contratados); a sanção a particulares em geral, sem esse vínculo, é manifestação do poder de polícia (CTN, art. 78).",
      "pf-da-atos-poderes",
    ),
    me(
      PF_DADM,
      "Extinção dos atos administrativos",
      "Determinado ato administrativo foi extinto porque seu beneficiário deixou de cumprir as condições que deveria manter para continuar desfrutando da situação jurídica por ele criada. Essa forma de extinção denomina-se",
      ["cassação.", "caducidade.", "contraposição.", "revogação.", "anulação."],
      0,
      "Cassação é a extinção pelo descumprimento, pelo beneficiário, das condições exigidas para manter o ato. Caducidade decorre de norma superveniente; contraposição, de ato posterior com efeitos opostos; revogação, de conveniência e oportunidade; anulação, de ilegalidade.",
      "pf-da-atos-poderes",
    ),
    ce(
      PF_DADM,
      "Lei 8.112 — exercício",
      "Como tomou posse dentro do prazo legal, Pedro dispunha de trinta dias, contados da posse, para entrar em exercício, de modo que é regular a data em que iniciou suas atividades.",
      false,
      "O prazo para entrar em exercício é de 15 dias contados da posse (art. 15, §1º). Pedro entrou em exercício 21 dias após a posse; fora do prazo, o servidor é exonerado de ofício (arts. 15, §2º, e 34, parágrafo único, II).",
      "pf-da-8112",
      SITUACAO_POSSE,
    ),
    ce(
      PF_DADM,
      "Lei 8.112 — posse",
      "Se Pedro não tivesse tomado posse em até trinta dias contados da publicação do ato de provimento, a consequência seria tornar sem efeito sua nomeação, e não a exoneração, já que a investidura no cargo ocorre com a posse.",
      true,
      "A posse ocorre em 30 dias da publicação do ato de provimento (art. 13, §1º); não ocorrendo, o ato é tornado sem efeito (§6º). Como a investidura se dá com a posse (art. 7º), não há o que exonerar.",
      "pf-da-8112",
      SITUACAO_POSSE,
    ),
    ce(
      PF_DADM,
      "Lei 8.112 — prescrição",
      "A ação disciplinar prescreve em cinco anos quanto às infrações puníveis com demissão, em dois anos quanto à suspensão e em cento e oitenta dias quanto à advertência, contando-se o prazo da data em que a infração foi praticada.",
      false,
      "Os prazos estão corretos (art. 142, I a III), mas o termo inicial é a data em que o fato se tornou conhecido (art. 142, §1º), e não a data da prática da infração.",
      "pf-da-8112",
    ),
    ce(
      PF_DADM,
      "Lei 8.112 — PAD",
      "O prazo para a conclusão do processo administrativo disciplinar não excederá sessenta dias, contados da data de publicação do ato que constituir a comissão, admitida a sua prorrogação por igual prazo, quando as circunstâncias o exigirem.",
      true,
      "É a redação do art. 152 da Lei 8.112/1990. A sindicância, por sua vez, tem prazo de 30 dias, prorrogável por igual período (art. 145, parágrafo único).",
      "pf-da-8112",
    ),
    me(
      PF_DADM,
      "Lei 8.112 — formas de provimento",
      "Segundo a Lei 8.112/1990, o retorno do servidor estável ao cargo anteriormente ocupado, em decorrência de inabilitação em estágio probatório relativo a outro cargo, denomina-se",
      ["reversão.", "reintegração.", "recondução.", "aproveitamento.", "readaptação."],
      2,
      "É a recondução (art. 29, I), que também ocorre na reintegração do anterior ocupante (art. 29, II). Reversão é o retorno do aposentado; reintegração, o do demitido cuja demissão foi invalidada; aproveitamento, o do servidor em disponibilidade; readaptação, a investidura em cargo compatível com limitação física ou mental.",
      "pf-da-8112",
    ),
  );

  // ---------- Itens: Direito Administrativo (controle e licitações) ----------
  pfQuestoes.push(
    ce(
      PF_DADM,
      "Improbidade — dolo",
      "Após a Lei 14.230/2021, somente as condutas dolosas configuram ato de improbidade administrativa, inclusive as que causam lesão ao erário, não bastando para tanto a mera voluntariedade do agente.",
      true,
      "O art. 1º, §§1º e 2º, da Lei 8.429/1992 exige dolo, entendido como vontade livre e consciente de alcançar o resultado ilícito, e afasta a mera voluntariedade. A modalidade culposa do art. 10 deixou de existir.",
      "pf-da-controle",
    ),
    ce(
      PF_DADM,
      "Improbidade — sanções",
      "Os atos de improbidade que atentam contra os princípios da administração pública sujeitam o responsável, entre outras sanções, à perda da função pública e à suspensão dos direitos políticos por até quatorze anos.",
      false,
      "Para o art. 11, o art. 12, III, prevê multa civil de até 24 vezes a remuneração e proibição de contratar com o poder público por até 4 anos, sem perda da função nem suspensão dos direitos políticos. A suspensão de até 14 anos é do enriquecimento ilícito (art. 12, I).",
      "pf-da-controle",
    ),
    ce(
      PF_DADM,
      "Lei 9.784 — recurso",
      "No processo administrativo federal, salvo disposição legal específica, o prazo para interposição de recurso administrativo é de quinze dias, contado da ciência ou divulgação oficial da decisão, e o recurso tem, em regra, efeito suspensivo.",
      false,
      "O prazo é de 10 dias (art. 59) e, salvo disposição legal em contrário, o recurso não tem efeito suspensivo, que pode ser concedido diante de justo receio de prejuízo de difícil ou incerta reparação (art. 61).",
      "pf-da-controle",
    ),
    ce(
      PF_DADM,
      "Responsabilidade civil — legitimidade",
      "Carla pode ajuizar a ação de indenização diretamente e apenas contra o agente que conduzia a viatura, desde que comprove que ele agiu com culpa.",
      false,
      "No Tema 940, o STF fixou que a ação deve ser proposta contra o Estado ou a prestadora de serviço público, sendo o agente parte ilegítima (dupla garantia do art. 37, §6º). O agente responde apenas em ação regressiva.",
      "pf-da-controle",
      SITUACAO_VIATURA,
    ),
    ce(
      PF_DADM,
      "Responsabilidade civil — regresso",
      "A União responde pelos danos sofridos por Carla independentemente da demonstração de culpa do agente e, uma vez condenada, poderá ajuizar ação regressiva contra ele, cabendo-lhe provar que o agente agiu com dolo ou culpa.",
      true,
      "A responsabilidade do Estado é objetiva (art. 37, §6º, teoria do risco administrativo), mas a do agente perante o Estado é subjetiva: o regresso depende de dolo ou culpa (art. 37, §6º; Lei 8.112/1990, art. 122, §2º).",
      "pf-da-controle",
      SITUACAO_VIATURA,
    ),
    ce(
      PF_DADM,
      "Lei 14.133 — modalidades",
      "A Lei 14.133/2021 prevê como modalidades de licitação o pregão, a concorrência, o concurso, o leilão e o diálogo competitivo, sendo vedadas a criação de outras modalidades e a combinação das referidas.",
      true,
      "É o que dispõem o art. 28, caput, e o §2º da Lei 14.133/2021. Tomada de preços e convite deixaram de existir.",
      "pf-da-licitacoes",
    ),
    ce(
      PF_DADM,
      "Lei 14.133 — contratação direta",
      "Por ser inviável a competição, é dispensável a licitação para a contratação de profissional do setor artístico consagrado pela crítica especializada ou pela opinião pública.",
      false,
      "Inviabilidade de competição caracteriza inexigibilidade, e a contratação de artista consagrado está no art. 74, II. Dispensa (art. 75) pressupõe competição possível, que a lei autoriza afastar em rol taxativo.",
      "pf-da-licitacoes",
    ),
    ce(
      PF_DADM,
      "Lei 14.133 — fases",
      "Na Lei 14.133/2021, a habilitação ocorre, em regra, depois do julgamento das propostas, mas pode anteceder as fases de apresentação de propostas e lances e de julgamento, mediante ato motivado com explicitação dos benefícios decorrentes, desde que expressamente previsto no edital.",
      true,
      "O art. 17 coloca o julgamento (inciso IV) antes da habilitação (inciso V), e o §1º admite a inversão nas condições descritas no item.",
      "pf-da-licitacoes",
    ),
    me(
      PF_DADM,
      "Lei 14.133 — modalidades",
      "A modalidade de licitação destinada à alienação de bens imóveis ou de bens móveis inservíveis ou legalmente apreendidos, a quem oferecer o maior lance, denomina-se",
      ["concorrência.", "concurso.", "pregão.", "leilão.", "diálogo competitivo."],
      3,
      "É o leilão (art. 6º, XL, da Lei 14.133/2021), cujo critério de julgamento é o maior lance (art. 33, V).",
      "pf-da-licitacoes",
    ),
  );
}
