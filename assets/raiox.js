// ============================================================
// O RAIO-X DA FORMA — dois modos
//  · "livro":    as 21 afirmações canônicas (Parte II) ~10 min
//  · "completo": 42 afirmações + drill-down cirúrgico ~25 min
//  Upgrade: quem faz o modo livro pode aprofundar, ao final,
//  apenas os seus dois componentes mais baixos.
//  Estado salvo em localStorage (site real — fora de sandbox).
// ============================================================

const COMPONENTES = [
  {
    id: 'atitude', nome: 'Atitude', cap: 'CAP. 10 — ATITUDE: A POSIÇÃO ANTES DA AÇÃO',
    lamina: '"Atitude é o único cargo que ninguém te dá e ninguém te tira. Você se nomeia — ou se demite — todos os dias."',
    ferramenta: 'Contrato de posse',
    acaoGeral: 'Faça o <b>contrato de posse</b> — quinze minutos, três cláusulas: a frase de dono, os inegociáveis escritos antes da pressão, e a tradução das suas frases de espectador para o idioma do dono.',
    mecs: {
      posse:       { nome: 'A posse', acao: 'Escreva a frase de dono, na primeira pessoa: <b>"O resultado de ___ é meu — inteiro, inclusive as partes que dependem de outros."</b> (Cláusula 1 do contrato de posse.)' },
      inegociavel: { nome: 'O inegociável', acao: 'Liste <b>as duas ou três coisas que não entram em mesa nenhuma</b>, nem nos dias maus — escritas antes da pressão chegar, porque cláusula redigida durante a proposta já nasce vendida. (Cláusula 2.)' },
      traducao:    { nome: 'A tradução', acao: 'Pegue as três frases de espectador que você mais usa ("estou esperando...", "não me deram...", "se acontecer...") e <b>reescreva cada uma no idioma do dono</b>: o que EU faço, até quando, com que rastro. (Cláusula 3.)' }
    },
    base: [
      { t: 'Diante de um resultado ruim, minha primeira pergunta foi "o que EU faço agora?" — antes de qualquer explicação externa.', m: 'posse' },
      { t: 'Trabalhei nas minhas metas sem depender de cobrança, aprovação ou permissão de alguém.', m: 'posse' },
      { t: 'Existe algo importante que eu sustentei mesmo quando teria sido mais fácil (ou mais lucrativo) abrir mão.', m: 'inegociavel' },
      { t: 'Quando algo que dependia de outra pessoa atrasou, eu fiz a minha parte seguinte mesmo assim — em vez de esperar.', m: 'posse' },
      { t: 'Tenho por escrito duas ou três coisas que não entram em negociação nem nos dias maus — e elas sobreviveram aos últimos 90 dias.', m: 'inegociavel' },
      { t: 'Nas conversas sobre minhas metas, falei mais em "o que eu faço" do que em "o que me falta" — sem terceirizar o resultado para chefe, professor, mercado ou contexto.', m: 'traducao' }
    ],
    drill: [
      { t: 'Na última vez que um resultado importante falhou por causa de terceiros, eu soube apontar qual era a MINHA próxima resposta.', m: 'posse' },
      { t: 'Recusei um atalho, um dinheiro ou uma aprovação que custaria um dos meus inegociáveis.', m: 'inegociavel' },
      { t: 'As frases "estou esperando...", "não me deram...", "se acontecer..." praticamente sumiram do meu vocabulário sobre a meta.', m: 'traducao' }
    ]
  },
  {
    id: 'foco', nome: 'Foco', cap: 'CAP. 11 — FOCO: UMA COISA, E O PREÇO DO NÃO',
    lamina: '"Foco não é o que você persegue. É o que você recusa — e o preço pago em nãos é o que compra a travessia."',
    ferramenta: 'Lista dos nãos',
    acaoGeral: 'Faça a <b>lista dos nãos</b>: eleja A coisa do trimestre, escreva três nãos com nome próprio e comunique-os, e blinde um bloco diário com o celular em outra sala.',
    mecs: {
      eleicao: { nome: 'A eleição', acao: 'Eleja <b>A coisa do trimestre</b>, com o critério de desempate frio: <b>qual delas, resolvida, facilita ou aposenta as outras?</b>' },
      nao:     { nome: 'Os nãos nomeados', acao: 'Escreva <b>três coisas que você NÃO vai fazer neste trimestre, com nome próprio</b> — e comunique-as a quem afetam: não que faltou coragem de anunciar ainda é um sim.' },
      bloco:   { nome: 'O bloco blindado', acao: 'Marque um <b>bloco diário na coisa eleita, com o celular em outra sala</b> — silenciar não resolve; virar para baixo não resolve. A ciência mediu a distância entre você e o seu foco: uma porta.' }
    },
    base: [
      { t: 'Minhas metas ativas cabem nos dedos de uma mão — e eu sei dizer qual é a principal.', m: 'eleicao' },
      { t: 'Disse "não" a oportunidades, convites ou distrações que competiam com a minha prioridade.', m: 'nao' },
      { t: 'Tive blocos regulares de trabalho profundo, sem celular ao alcance, na minha meta principal.', m: 'bloco' },
      { t: 'Sei dizer qual meta, resolvida, facilita ou aposenta as outras — e é nela que está a maior parte do meu esforço.', m: 'eleicao' },
      { t: 'Pausei ou encerrei, de forma declarada, pelo menos uma atividade, projeto ou compromisso para proteger a prioridade — e avisei quem era afetado.', m: 'nao' },
      { t: 'Nos meus blocos de trabalho importante, o celular ficou em outro cômodo — não apenas silencioso ou virado para baixo.', m: 'bloco' }
    ],
    drill: [
      { t: 'Se me perguntarem agora, digo em uma frase qual é A coisa do trimestre — sem hesitar entre duas.', m: 'eleicao' },
      { t: 'Meus "nãos" têm nome próprio: sei dizer QUAIS atividades, projetos e convites recusei — não só que "me distraí menos".', m: 'nao' },
      { t: 'Meus blocos têm hora de começar amarrada a algo que já existe na rotina — não ficam "para quando der".', m: 'bloco' }
    ]
  },
  {
    id: 'plano', nome: 'Plano', cap: 'CAP. 12 — PLANO: A VANTAGEM DESENHADA NO CALENDÁRIO',
    lamina: '"Intenção mora no futuro. Plano mora no calendário. E o calendário é o único pedaço do futuro que obedece a você."',
    ferramenta: 'Plano de uma página',
    acaoGeral: 'Faça o <b>plano de uma página</b>: o porto (frase com número e data), o marco de 90 dias, o motor semanal na agenda, os dois "quando-então" e a revisão fixa de quinze minutos.',
    mecs: {
      porto:      { nome: 'O porto', acao: 'Escreva <b>a meta em uma frase com número e data</b>. Não "melhorar o inglês": <i>conversar trinta minutos com um estrangeiro em dezembro</i>.' },
      calendario: { nome: 'O calendário', acao: 'Amarre o <b>motor semanal</b> na agenda como reuniões — e escreva os dois <b>"quando-então"</b> para os momentos que mais matam a sua execução: <i>quando acontecer X, então eu faço Y</i>.' },
      medicao:    { nome: 'A medição', acao: 'Fixe <b>a revisão: dia e hora fixos, quinze minutos</b>, para conferir os números e ajustar a rota — e defina o marco de 90 dias que prova progresso.' }
    },
    base: [
      { t: 'Minha meta principal tem o quê, quando e quanto definidos — por escrito, não na cabeça.', m: 'porto' },
      { t: 'Minhas ações importantes têm dia e hora marcados no calendário, como reuniões.', m: 'calendario' },
      { t: 'Sei dizer, em números, qual é o próximo marco e para quando.', m: 'medicao' },
      { t: 'Minha meta está escrita como frase com número e data — não como intenção ("melhorar", "crescer", "organizar").', m: 'porto' },
      { t: 'Para os meus momentos previsíveis de quebra (viagem, cansaço, semana de pico), existe um "quando acontecer X, então faço Y" decidido de véspera.', m: 'calendario' },
      { t: 'Tenho um horário fixo na semana para conferir os números do plano e ajustar a rota — e ele aconteceu na maioria das semanas.', m: 'medicao' }
    ],
    drill: [
      { t: 'Qualquer pessoa que ler o meu plano entende o quê, quando e quanto — sem eu precisar explicar.', m: 'porto' },
      { t: 'As minhas ações da semana estavam na agenda ANTES de a semana começar — não foram encaixadas conforme sobrou tempo.', m: 'calendario' },
      { t: 'Sei dizer agora, de cabeça, o número do meu último marco e a distância para o próximo.', m: 'medicao' }
    ]
  },
  {
    id: 'execucao', nome: 'Execução', cap: 'CAP. 13 — EXECUÇÃO: COMEÇAR ANTES DE ESTAR PRONTO',
    lamina: '"Ideia guardada não compete com execução malfeita. O mercado não premia quem pensou primeiro — premia quem foi."',
    ferramenta: 'Regra das 48 horas',
    acaoGeral: 'Aplique a <b>regra das 48 horas</b>: defina a menor versão pública da sua meta — a ação que pode receber um "não" — e execute em 48 horas. Depois, instale a regra permanente: toda semana termina com um rastro público.',
    mecs: {
      pronto:    { nome: 'Começar antes de estar pronto', acao: 'Defina a <b>menor versão pública</b> da sua meta e <b>execute em 48 horas</b> — o prazo curto mata a negociação interna: em 48 horas não cabe aperfeiçoar; cabe apenas ir.' },
      rastro:    { nome: 'O rastro semanal', acao: 'Instale a regra permanente: <b>toda semana termina com um rastro público</b> — algo feito que saiu de você e existe no mundo, verificável.' },
      fronteira: { nome: 'A fronteira', acao: 'Faça, ainda esta semana, <b>a ação que pode receber um "não"</b> — o envio, a inscrição, a ligação, a oferta, a publicação. Se não pode gerar um "não", ainda é preparação.' }
    },
    base: [
      { t: 'Comecei as coisas importantes antes de me sentir pronto — sem esperar o cenário ideal.', m: 'pronto' },
      { t: 'Nos últimos 7 dias, produzi rastros verificáveis na minha meta (algo feito que existe no mundo).', m: 'rastro' },
      { t: 'Entre planejar mais e fazer o próximo passo imperfeito, escolhi fazer.', m: 'pronto' },
      { t: 'Lancei, enviei ou mostrei algo em versão imperfeita — em vez de esperar a versão de que eu não teria vergonha.', m: 'pronto' },
      { t: 'Consigo listar, com datas, o que produzi na minha meta nas últimas duas semanas — sem depender da memória.', m: 'rastro' },
      { t: 'Fiz, nos últimos 30 dias, pelo menos uma ação que podia receber um "não" — um envio, uma inscrição, uma apresentação, uma proposta, uma publicação.', m: 'fronteira' }
    ],
    drill: [
      { t: 'Nos últimos 90 dias, o tempo em prática que deixa rastro (exercícios feitos, textos escritos, tentativas reais) foi maior que o tempo só consumindo (assistindo, lendo, grifando).', m: 'pronto' },
      { t: 'Nos últimos 7 dias existe pelo menos um rastro NOVO — não estou vivendo de produção antiga.', m: 'rastro' },
      { t: 'A minha última semana terminou com algo do lado de lá da fronteira — publicado, enviado, oferecido.', m: 'fronteira' }
    ]
  },
  {
    id: 'constancia', nome: 'Constância', cap: 'CAP. 14 — CONSTÂNCIA: A REPETIÇÃO QUE NINGUÉM APLAUDE',
    lamina: '"Intensidade impressiona. Constância transforma. E a plateia sempre aplaude a errada."',
    ferramenta: 'Nunca duas + mínimo inegociável',
    acaoGeral: 'Instale as duas regras: <b>nunca dois dias seguidos</b> (a falha é permitida; a sequência, não) e o <b>mínimo inegociável</b> — a versão encolhida da prática, definida de véspera, para os dias impossíveis.',
    mecs: {
      estrutura: { nome: 'A estrutura', acao: 'Amarre a prática a um <b>gatilho fixo que já existe na rotina</b> ("toda terça e quinta, imediatamente depois do café") — o que tem horário não pede opinião ao humor.' },
      minimo:    { nome: 'O mínimo inegociável', acao: 'Defina de véspera <b>a versão encolhida da prática para os dias impossíveis</b>: dez minutos, uma página, uma ligação. Encolhida, não cancelada — a constância não mede volume; mede presença.' },
      nuncaduas: { nome: 'Nunca duas', acao: 'Instale a regra: <b>nunca dois dias seguidos</b>. Um dia perdido é acidente sem consequência no acumulado; dois seguidos é o começo de uma identidade nova ("parei") — e identidades são caras de reverter.' }
    },
    base: [
      { t: 'Trabalhei na minha meta nos dias em que estava sem nenhuma vontade.', m: 'estrutura' },
      { t: 'Minha rotina de trabalho na meta sobreviveu às últimas semanas caóticas (viagem, imprevisto, crise).', m: 'minimo' },
      { t: 'Se alguém auditar meus últimos 30 dias, encontra a mesma prática se repetindo em pelo menos 20 deles.', m: 'nuncaduas' },
      { t: 'Existe um horário ou gatilho fixo que faz a prática acontecer sem consultar o meu humor.', m: 'estrutura' },
      { t: 'Tenho definida, de véspera, a versão mínima da minha prática para os dias impossíveis — e usei-a em vez de cancelar.', m: 'minimo' },
      { t: 'Quando falhei um dia, o dia seguinte aconteceu — não deixei virar dois seguidos.', m: 'nuncaduas' }
    ],
    drill: [
      { t: 'A decisão de fazer não é tomada de manhã, no pior tribunal possível — foi tomada de véspera, uma vez, e delegada à estrutura.', m: 'estrutura' },
      { t: 'O meu mínimo inegociável é pequeno o bastante para caber no meu pior dia — e mesmo assim aconteceu.', m: 'minimo' },
      { t: 'Olhando os últimos 30 dias, não existe nenhuma quebra de dois dias seguidos sem emenda no dia seguinte.', m: 'nuncaduas' }
    ]
  },
  {
    id: 'resiliencia', nome: 'Resiliência', cap: 'CAP. 15 — RESILIÊNCIA: A ARTE DE VOLTAR',
    lamina: '"A queda custa o que custa. O tempo no chão é que você escolhe — e a vida cobra por hora."',
    ferramenta: 'Protocolo do retorno',
    acaoGeral: 'Escreva o <b>protocolo do retorno</b> hoje, no dia bom: a regra do preço exato ("um erro custa um erro"), a janela de 24 horas de chão, e a autópsia sem julgamento para as quedas grandes.',
    mecs: {
      janela:   { nome: 'A janela de 24 horas', acao: 'Defina de véspera <b>o prazo máximo de chão: toda queda tem direito a no máximo 24 horas sem ação</b>. Na virada da janela, uma ação mínima reabre o jogo.' },
      preco:    { nome: 'A regra do preço exato', acao: 'Escreva hoje, no dia bom: <b>"Um erro custa um erro. Um dia perdido custa um dia. Nada tem poder de custar a semana."</b> Cole ao lado do plano de uma página.' },
      autopsia: { nome: 'A autópsia sem julgamento', acao: 'Para quedas grandes: <b>uma folha, três perguntas, quinze minutos</b> — o que aconteceu (fatos, não adjetivos)? O que estava no meu controle? O que o obstáculo me obriga a construir?' }
    },
    base: [
      { t: 'Depois do último erro ou fracasso, voltei à prática em menos de uma semana.', m: 'janela' },
      { t: 'Um dia perdido não virou uma semana perdida: retomei sem esperar a próxima segunda-feira.', m: 'preco' },
      { t: 'Recebi um "não" (ou um resultado ruim) e fiz a tentativa seguinte mesmo assim.', m: 'janela' },
      { t: 'Um deslize custou um deslize: não o usei como licença para derrubar o resto do dia ou da semana.', m: 'preco' },
      { t: 'Tratei os meus próprios erros como trataria o erro de um amigo — extraindo o dado, sem me flagelar.', m: 'autopsia' },
      { t: 'Da minha última queda grande, sei dizer em fatos o que aconteceu e o que estava no meu controle.', m: 'autopsia' }
    ],
    drill: [
      { t: 'A minha última queda teve hora para acabar: eu sabia, de véspera, quanto tempo de chão eu me permitiria.', m: 'janela' },
      { t: 'O meu último dia perdido está registrado como UM dia — não como o início de um "recomeço na segunda".', m: 'preco' },
      { t: 'Da minha última queda grande existe uma folha escrita: fatos, o que era meu controle, o que ela me obriga a construir.', m: 'autopsia' }
    ]
  },
  {
    id: 'prestacao', nome: 'Prestação de contas', cap: 'CAP. 16 — PRESTAÇÃO DE CONTAS: A FORMA DIANTE DO OUTRO',
    lamina: '"Meta secreta nasce com a porta dos fundos aberta. Testemunha eleita fecha a porta — e devolve a chave para você."',
    ferramenta: 'Sexta-feira de 15 minutos',
    acaoGeral: 'Instale a <b>sexta-feira de quinze minutos</b>: eleja a testemunha, fixe as três perguntas com números na mesa, combine o custo do não-feito — e envie a mensagem da primeira sexta agora.',
    mecs: {
      testemunha: { nome: 'A testemunha', acao: 'Eleja <b>uma pessoa que você respeite o suficiente para o "não fiz" doer</b> — que pergunte de verdade, não aplauda por educação — e <b>envie a mensagem agora</b>, com dia e hora da primeira sexta.' },
      formato:    { nome: 'O formato', acao: 'Fixe as <b>três perguntas, sempre as mesmas</b>: o que eu prometi? O que eu fiz (com rastro)? O que eu prometo? <b>Números na mesa, quinze minutos no relógio.</b> Regularidade vale mais que profundidade.' },
      custo:      { nome: 'O custo do não-feito', acao: 'Combine de véspera <b>o que acontece quando a promessa falha sem motivo defensável</b> — o desconforto de dizer "não fiz" olhando para alguém já é, para a maioria, custo suficiente.' }
    },
    base: [
      { t: 'Existe uma pessoa que sabe da minha meta, do prazo — e pergunta.', m: 'testemunha' },
      { t: 'Tenho um momento fixo (semanal ou quinzenal) em que confiro meus números e ajusto a rota.', m: 'formato' },
      { t: 'Quando não cumpro o que declarei, isso tem algum custo visível — nem que seja uma conversa desconfortável.', m: 'custo' },
      { t: 'A pessoa que sabe da minha meta pergunta de verdade — não aplaude por educação.', m: 'testemunha' },
      { t: 'No meu momento de conferência, o que eu declaro é específico e verificável — conferido contra rastros, não contra memória.', m: 'formato' },
      { t: 'Já paguei, nos últimos 90 dias, o custo combinado de um "não fiz" — a conversa desconfortável aconteceu.', m: 'custo' }
    ],
    drill: [
      { t: 'A minha testemunha tem data marcada para a próxima conferência — não é "a gente se fala".', m: 'testemunha' },
      { t: 'O meu momento de conferência tem as mesmas três perguntas, com números — não vira conversa.', m: 'formato' },
      { t: 'Quando declarei e não fiz, algo aconteceu de verdade — o desconforto teve endereço.', m: 'custo' }
    ]
  }
];

const ESCALA = [
  { v: 2, t: 'verdade na maioria dos dias' },
  { v: 1, t: 'às vezes' },
  { v: 0, t: 'raramente ou nunca' }
];

// ---------- PADRÕES COMBINADOS (frações 0–1; máx. 2 exibidos) ----------
function detectarPadroes(fr) {
  // fr: {id -> fração 0..1}, fr._total: fração total
  const alto = id => fr[id] >= 0.75, baixo = id => fr[id] <= 0.45;
  const maisBaixo = Object.keys(fr).filter(k => k !== '_total')
    .sort((a, b) => fr[a] - fr[b])[0];
  const P = [];

  if (fr._total >= 0.8) P.push({
    nome: 'FUNDAÇÃO PRONTA',
    txt: 'O seu gargalo não é mais nenhum componente — é o expoente: a qualidade da forma repetida no tempo. Proteja o que já funciona, resista à tentação de mexer no que sustenta, e deixe o pequeno <b>t</b> fazer o que ele faz: transformar diferença em abismo. <span class="p-src">CAP. 5 — O JURO COMPOSTO DA FORMA</span>'
  });
  if (alto('plano') && baixo('execucao')) P.push({
    nome: 'O CADERNO BONITO',
    txt: 'Uma prateleira de diagnósticos certos e intocados: o seu problema não é saber o que fazer — é mais uma camada de saber sobre a mesma camada de não-fazer. A próxima compra de plano, curso ou método seria o quarto mapa do território que você nunca caminhou. <span class="p-src">CAP. 9 — AS TRÊS PERGUNTAS</span>'
  });
  if (alto('execucao') && baixo('constancia')) P.push({
    nome: 'O INTENSO DE JANEIRO',
    txt: 'Você vai — no dia inspirado. Mas o jogo real se decide na terça-feira qualquer, sem plateia e sem vontade. Você contratou, para um trabalho de doze meses, uma funcionária que pede demissão em seis semanas: a motivação. Estados oscilam; estruturas seguram. <span class="p-src">CAP. 7 — O MITO DA MOTIVAÇÃO</span>'
  });
  if (maisBaixo === 'foco' && baixo('foco')) P.push({
    nome: 'EM TODA PARTE, EM PARTE ALGUMA',
    txt: 'O passeio incessante de frente em frente é sinal de estômago enjoado, não de apetite — quem está em toda parte não está em parte alguma. O que falta não é capacidade: é a eleição de UMA coisa e o preço pago em nãos. <span class="p-src">SÊNECA, CAP. 6 — O CONSUMO DISFARÇADO DE TRABALHO</span>'
  });
  if (baixo('prestacao') && baixo('constancia')) P.push({
    nome: 'A PORTA DOS FUNDOS ABERTA',
    txt: 'Meta secreta nasce com a porta dos fundos aberta: sem testemunha, ficar parado não custa nada — até custar tudo. A alavanca mais barata do arsenal humano é uma mensagem: conte a meta e o prazo para alguém que você respeita, e marque a sexta-feira. <span class="p-src">CAP. 16 — PRESTAÇÃO DE CONTAS</span>'
  });
  if (alto('constancia') && baixo('resiliencia')) P.push({
    nome: 'A REGRA BINÁRIA',
    txt: 'A sua corrente é forte — até o elo falhar. E quando falha, a regra binária ("já que errei...") transforma um erro no fim da semana. Troque-a pela regra do preço exato: um erro custa um erro; um dia perdido custa um dia; nada tem poder de custar a semana. <span class="p-src">CAP. 15 — RESILIÊNCIA</span>'
  });
  if (maisBaixo === 'atitude' && baixo('atitude')) P.push({
    nome: 'A POSIÇÃO DE ESPECTADOR',
    txt: '"Estou esperando... não me deram... se acontecer..." — o vocabulário denuncia o endereço de onde você opera. O resultado só muda quando muda a posição: nem todas as causas são suas, mas a responsabilidade pela próxima resposta é. <span class="p-src">CAP. 10 — ATITUDE / CAP. 3 — A ÚNICA VARIÁVEL QUE É SUA</span>'
  });
  return P.slice(0, 2);
}

// ============================================================
// ESTADO + PERSISTÊNCIA
// ============================================================
const STORE_KEY = 'aforma_raiox_v3';
const TTL_DIAS = 7;

let S = {
  modo: null,          // 'livro' | 'completo'
  fase: 'intro',       // intro | base | intersticio | drill | upgrade | resultado
  passo: 0,            // índice dentro da fase
  respostas: {},       // "cIdx-qIdx" (base) -> 0|1|2
  drillResp: {},       // "dIdx-qIdx" -> 0|1|2
  cirurgiaIdx: [],
  upgraded: false,
  ts: Date.now()
};

function salvar() {
  S.ts = Date.now();
  try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) {}
}
function carregar() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return null;
    const s = JSON.parse(raw);
    if (Date.now() - (s.ts || 0) > TTL_DIAS * 86400000) { localStorage.removeItem(STORE_KEY); return null; }
    return s;
  } catch (e) { return null; }
}
function limpar() { try { localStorage.removeItem(STORE_KEY); } catch (e) {} }

// ---------- helpers ----------
const nBase = () => S.modo === 'livro' ? 3 : 6;                 // afirmações-base por componente
const maxComp = () => nBase() * 2;                              // 6 ou 12
const totalAfirm = () => 7 * nBase();                           // 21 ou 42
function respondidas() {
  return Object.keys(S.respostas).length + Object.keys(S.drillResp).length;
}
function planejadas() {
  let t = totalAfirm();
  if (S.fase === 'drill' || S.fase === 'upgrade' || S.upgraded) t += (S.modo === 'livro' ? 12 : 6);
  else if (S.modo === 'completo') t += 6; // drill já anunciado no completo
  return t;
}

const stage = document.getElementById('stage');
const progress = document.getElementById('progress');
const progressFill = document.getElementById('progress-fill');
const progressLabel = document.getElementById('progress-label');

function setProgress(label) {
  progress.style.display = 'block';
  progressLabel.textContent = label;
  progressFill.style.width = Math.min(100, (respondidas() / planejadas()) * 100) + '%';
}

function render() {
  window.scrollTo({ top: 0 });
  pararVidaRadar();
  if (S.fase !== 'intro') salvar(); // a intro nunca sobrescreve uma sessão salva
  if (S.fase === 'intro') return renderIntro();
  if (S.fase === 'base') return renderBase(S.passo);
  if (S.fase === 'intersticio') return renderIntersticio();
  if (S.fase === 'drill') return renderDrill(S.passo);
  if (S.fase === 'upgrade') return renderUpgrade(S.passo);
  return renderResultado();
}

// ============================================================
// INTRO — escolha de modo (+ retomada, se houver sessão salva)
// ============================================================
function renderIntro() {
  progress.style.display = 'none';
  const salvo = carregar();
  const temRetomada = salvo && salvo.fase !== 'intro' && salvo.fase !== 'resultado' && Object.keys(salvo.respostas || {}).length > 0;

  stage.innerHTML = `
    <div class="intro">
      <div class="tag">O EXAME QUE FECHA A PARTE II DO LIVRO</div>
      <h1>O Raio-X <span class="thin">da Forma.</span></h1>
      <p class="lead">Você entendeu a equação, viu a liquidação do conteúdo, conheceu a balança. <b>Antes de construir, meça.</b> Responda pensando nos seus <b>últimos 90 dias</b> — não na sua intenção, não no seu melhor momento, não em quem você quer ser. Nos fatos. E a sua meta pode ser qualquer uma — estudo, corpo, dinheiro, carreira, um projeto: <b>a lente é a mesma.</b></p>
      <div class="honesty">
        <b>Uma nota de honestidade antes de começar:</b> isto é um <b>instrumento de autorreflexão</b>, não um teste psicométrico validado — nenhum número aqui te mede por fora. A régua é você, olhando os próprios noventa dias sem advogado de defesa.
      </div>

      ${temRetomada ? `
      <div class="resume-box">
        <div><b>Você tem um exame em andamento</b> <span class="mono-note" style="display:inline;">// ${Object.keys(salvo.respostas).length + Object.keys(salvo.drillResp || {}).length} afirmações respondidas</span></div>
        <div class="resume-row">
          <button class="btn" id="resume">&gt;_ CONTINUAR DE ONDE PAREI</button>
          <button class="btn ghost" id="restart">COMEÇAR DO ZERO</button>
        </div>
      </div>` : ''}

      <div class="mode-grid">
        <div class="mode-card" id="modo-livro">
          <div class="mode-tag">O EXAME DO LIVRO</div>
          <div class="mode-name">Raio-X <span style="color:var(--dim)">— 21 afirmações</span></div>
          <p>As 21 afirmações originais da Parte II. Resultado completo: o desenho dos sete componentes, a cirurgia e os padrões. Ao final, se quiser, você aprofunda só os seus dois componentes mais baixos.</p>
          <div class="mode-meta">// ~10 MINUTOS</div>
          <button class="btn block">COMEÇAR O EXAME DO LIVRO</button>
        </div>
        <div class="mode-card" id="modo-completo">
          <div class="mode-tag" style="color:var(--accent)">A VERSÃO COMPLETA</div>
          <div class="mode-name">Raio-X profundo <span style="color:var(--dim)">— 42 + cirurgia</span></div>
          <p>Seis afirmações por componente + drill-down cirúrgico nos dois mais baixos. Além do desenho e dos padrões, localiza <b>o mecanismo exato onde a sua forma vaza</b>.</p>
          <div class="mode-meta">// ~25 MINUTOS</div>
          <button class="btn block">COMEÇAR A VERSÃO COMPLETA</button>
        </div>
      </div>

      <div class="scale-legend">
        <div class="scale-item"><div class="v">2</div><div class="t">verdade na maioria dos dias</div></div>
        <div class="scale-item"><div class="v">1</div><div class="t">às vezes</div></div>
        <div class="scale-item"><div class="v">0</div><div class="t">raramente ou nunca</div></div>
      </div>
      <div class="mono-note" style="margin-top:18px;">// seu progresso é salvo neste navegador · as respostas não são enviadas a nenhum servidor</div>
    </div>`;

  if (temRetomada) {
    document.getElementById('resume').addEventListener('click', () => { S = salvo; render(); });
    document.getElementById('restart').addEventListener('click', () => { limpar(); renderIntro(); });
  }
  document.getElementById('modo-livro').addEventListener('click', () => iniciar('livro'));
  document.getElementById('modo-completo').addEventListener('click', () => iniciar('completo'));
}

function iniciar(modo) {
  S = { modo, fase: 'base', passo: 0, respostas: {}, drillResp: {}, cirurgiaIdx: [], upgraded: false, ts: Date.now() };
  render();
}

// ============================================================
// blocos genéricos
// ============================================================
function blocoAfirmacoes(lista, prefixo, store, numeroInicial) {
  return lista.map((a, q) => {
    const key = `${prefixo}-${a._q !== undefined ? a._q : q}`;
    return `
      <div class="q">
        <div class="q-text"><span class="qn">${String(numeroInicial + q).padStart(2, '0')}</span>${a.t}</div>
        <div class="q-opts" data-key="${key}">
          ${ESCALA.map(o => `
            <div class="q-opt ${store[key] === o.v ? 'sel' : ''}" data-v="${o.v}">
              <span class="v">${o.v}</span><span class="t">${o.t}</span>
            </div>`).join('')}
        </div>
      </div>`;
  }).join('');
}

function ligarOpcoes(store, onChange) {
  stage.querySelectorAll('.q-opts').forEach(group => {
    group.addEventListener('click', e => {
      const opt = e.target.closest('.q-opt');
      if (!opt) return;
      store[group.dataset.key] = parseInt(opt.dataset.v, 10);
      group.querySelectorAll('.q-opt').forEach(o => o.classList.remove('sel'));
      opt.classList.add('sel');
      salvar(); onChange();
      progressFill.style.width = Math.min(100, (respondidas() / planejadas()) * 100) + '%';
    });
  });
}

// ============================================================
// FASE 1 — BASE
// ============================================================
function renderBase(i) {
  const c = COMPONENTES[i];
  const lista = c.base.slice(0, nBase());
  const primeiro = i * nBase() + 1;
  setProgress(`${c.nome.toUpperCase()} · AFIRMAÇÕES ${primeiro}–${primeiro + lista.length - 1} DE ${totalAfirm()}`);

  stage.innerHTML = `
    <div class="step-kicker">COMPONENTE ${String(i + 1).padStart(2, '0')} / 07</div>
    <div class="step-title">${c.nome}</div>
    ${blocoAfirmacoes(lista, i, S.respostas, primeiro)}
    <div class="step-nav">
      <button class="btn ghost" id="prev">${i === 0 ? '← INTRODUÇÃO' : '← ANTERIOR'}</button>
      <button class="btn" id="next" disabled>${i === 6 ? (S.modo === 'completo' ? 'FECHAR A FASE 1 →' : 'VER O RESULTADO →') : 'PRÓXIMO →'}</button>
    </div>`;

  const check = () => {
    const done = lista.every((_, q) => S.respostas[`${i}-${q}`] !== undefined);
    document.getElementById('next').disabled = !done;
  };
  ligarOpcoes(S.respostas, check);
  document.getElementById('prev').addEventListener('click', () => {
    if (i === 0) { S.fase = 'intro'; } else { S.passo = i - 1; }
    render();
  });
  document.getElementById('next').addEventListener('click', () => {
    if (i < 6) { S.passo = i + 1; }
    else if (S.modo === 'completo') { S.fase = 'intersticio'; }
    else { definirCirurgia(); S.fase = 'resultado'; }
    render();
  });
  check();
}

// ---------- cálculo ----------
function scoresBase() {
  return COMPONENTES.map((c, i) => {
    const n = nBase();
    let sc = 0;
    for (let q = 0; q < n; q++) sc += (S.respostas[`${i}-${q}`] || 0);
    // componentes aprofundados no upgrade têm as 6 base respondidas
    let max = n * 2, deep = false;
    if (S.modo === 'livro' && S.upgraded && S.cirurgiaIdx.includes(i)) {
      sc = 0; for (let q = 0; q < 6; q++) sc += (S.respostas[`${i}-${q}`] || 0);
      max = 12; deep = true;
    }
    if (S.modo === 'completo') deep = S.cirurgiaIdx.includes(i);
    return { ...c, idx: i, score: sc, max, frac: sc / max, deep };
  });
}
function definirCirurgia() {
  const res = scoresBase();
  S.cirurgiaIdx = [...res].sort((a, b) => a.frac - b.frac).slice(0, 2).map(c => c.idx);
}

// ============================================================
// INTERSTÍCIO (modo completo)
// ============================================================
function renderIntersticio() {
  definirCirurgia();
  const c1 = COMPONENTES[S.cirurgiaIdx[0]], c2 = COMPONENTES[S.cirurgiaIdx[1]];
  setProgress('DRILL-DOWN — A CIRURGIA');

  stage.innerHTML = `
    <div class="tag">FASE 2 — APROFUNDAMENTO CIRÚRGICO</div>
    <h1 style="margin-top:22px;">Encontrado. <span class="thin">Agora, o bisturi.</span></h1>
    <p class="lead" style="margin-top:22px;">Os seus dois componentes mais baixos são <b>${c1.nome}</b> e <b>${c2.nome}</b> — o fator fraco que está limitando o produto inteiro da sua equação. Antes do resultado, mais <b>três afirmações sobre cada um</b>, para localizar <b>onde exatamente</b> a forma vaza — porque "melhorar a forma" é vago demais para virar segunda-feira.</p>
    <div class="step-nav" style="justify-content:flex-start;">
      <button class="btn" id="go">&gt;_ APROFUNDAR ${c1.nome.toUpperCase()} E ${c2.nome.toUpperCase()}</button>
    </div>`;
  document.getElementById('go').addEventListener('click', () => { S.fase = 'drill'; S.passo = 0; render(); });
}

// ============================================================
// FASE 2 — DRILL (modo completo)
// ============================================================
function renderDrill(d) {
  const idx = S.cirurgiaIdx[d];
  const c = COMPONENTES[idx];
  setProgress(`CIRURGIA ${d + 1}/2 — ${c.nome.toUpperCase()}`);

  stage.innerHTML = `
    <div class="step-kicker">CIRURGIA ${d + 1} / 2 — ONDE VAZA</div>
    <div class="step-title">${c.nome}</div>
    ${blocoAfirmacoes(c.drill, 'd' + idx, S.drillResp, totalAfirm() + d * 3 + 1)}
    <div class="step-nav">
      <button class="btn ghost" id="prev">← ANTERIOR</button>
      <button class="btn" id="next" disabled>${d === 1 ? 'VER O RESULTADO →' : 'PRÓXIMA CIRURGIA →'}</button>
    </div>`;

  const check = () => {
    const done = c.drill.every((_, q) => S.drillResp[`d${idx}-${q}`] !== undefined);
    document.getElementById('next').disabled = !done;
  };
  ligarOpcoes(S.drillResp, check);
  document.getElementById('prev').addEventListener('click', () => {
    if (d === 0) { S.fase = 'intersticio'; } else { S.passo = 0; }
    render();
  });
  document.getElementById('next').addEventListener('click', () => {
    if (d === 0) { S.passo = 1; } else { S.fase = 'resultado'; }
    render();
  });
  check();
}

// ============================================================
// UPGRADE (modo livro): base 4–6 + drill dos 2 componentes críticos
// ============================================================
function renderUpgrade(u) {
  const idx = S.cirurgiaIdx[u];
  const c = COMPONENTES[idx];
  // 3 afirmações-base restantes (com chave correta 3..5) + 3 drill
  const restantes = c.base.slice(3, 6).map((a, k) => ({ ...a, _q: 3 + k }));
  const inicio = 22 + u * 6;
  setProgress(`CIRURGIA ${u + 1}/2 — ${c.nome.toUpperCase()}`);

  stage.innerHTML = `
    <div class="step-kicker">CIRURGIA ${u + 1} / 2 — ONDE VAZA</div>
    <div class="step-title">${c.nome}</div>
    <p class="lead" style="margin-top:14px;font-size:15px;">Seis afirmações — as três restantes da versão completa e três de aprofundamento — para localizar o mecanismo exato.</p>
    ${blocoAfirmacoes(restantes, idx, S.respostas, inicio)}
    ${blocoAfirmacoes(c.drill, 'd' + idx, S.drillResp, inicio + 3)}
    <div class="step-nav">
      <button class="btn ghost" id="prev">← ${u === 0 ? 'RESULTADO' : 'ANTERIOR'}</button>
      <button class="btn" id="next" disabled>${u === 1 ? 'VER O RESULTADO REFINADO →' : 'PRÓXIMA CIRURGIA →'}</button>
    </div>`;

  const check = () => {
    const okBase = [3, 4, 5].every(q => S.respostas[`${idx}-${q}`] !== undefined);
    const okDrill = c.drill.every((_, q) => S.drillResp[`d${idx}-${q}`] !== undefined);
    document.getElementById('next').disabled = !(okBase && okDrill);
  };
  ligarOpcoes(S.respostas, check);
  ligarOpcoes(S.drillResp, check);
  document.getElementById('prev').addEventListener('click', () => {
    if (u === 0) { S.fase = 'resultado'; } else { S.passo = 0; }
    render();
  });
  document.getElementById('next').addEventListener('click', () => {
    if (u === 0) { S.passo = 1; }
    else { S.upgraded = true; S.fase = 'resultado'; }
    render();
  });
  check();
}

// ---------- vazamento por mecanismo ----------
function vazamento(c) {
  const acc = {};
  Object.keys(c.mecs).forEach(m => acc[m] = { soma: 0, n: 0 });
  c.base.forEach((a, q) => {
    const v = S.respostas[`${c.idx}-${q}`];
    if (v !== undefined) { acc[a.m].soma += v; acc[a.m].n++; }
  });
  c.drill.forEach((a, q) => {
    const v = S.drillResp[`d${c.idx}-${q}`];
    if (v !== undefined) { acc[a.m].soma += v; acc[a.m].n++; }
  });
  let pior = null, menor = Infinity;
  Object.keys(acc).forEach(m => {
    const media = acc[m].n ? acc[m].soma / acc[m].n : 2;
    if (media < menor) { menor = media; pior = m; }
  });
  return c.mecs[pior];
}
function temDrill(idx) {
  return COMPONENTES[idx].drill.some((_, q) => S.drillResp[`d${idx}-${q}`] !== undefined);
}


// ---------- gráfico de teia (SVG puro) ----------
const RADAR_LABELS = { atitude:'ATITUDE', foco:'FOCO', plano:'PLANO', execucao:'EXECUÇÃO', constancia:'CONSTÂNCIA', resiliencia:'RESILIÊNCIA', prestacao:'P. DE CONTAS' };
function renderRadar(res) {
  const W = 460, H = 400, cx = W/2, cy = H/2 + 6, R = 138;
  const N = res.length;
  const ang = i => -Math.PI/2 + (i * 2*Math.PI / N);
  const pt = (i, f) => [cx + Math.cos(ang(i)) * R * f, cy + Math.sin(ang(i)) * R * f];
  const poly = f => res.map((_, i) => pt(i, f).map(v => v.toFixed(1)).join(',')).join(' ');

  // anéis de grade (1/3, 2/3, 3/3) + eixos
  let grid = [1/3, 2/3, 1].map(f =>
    `<polygon points="${poly(f)}" fill="none" stroke="var(--line-2)" stroke-width="1"/>`).join('');
  grid += res.map((_, i) => {
    const [x, y] = pt(i, 1);
    return `<line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="var(--line-2)" stroke-width="1"/>`;
  }).join('');

  // polígono do resultado
  const shape = res.map((c, i) => pt(i, Math.max(c.frac, 0.02)).map(v => v.toFixed(1)).join(',')).join(' ');

  // vértices coloridos pelo diagnóstico
  const dots = res.map((c, i) => {
    const [x, y] = pt(i, Math.max(c.frac, 0.02));
    const cor = S.cirurgiaIdx.includes(c.idx) ? 'var(--danger)' : (c.frac >= 0.83 ? 'var(--ok)' : 'var(--accent)');
    return `<circle data-i="${i}" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4.5" fill="${cor}" stroke="var(--panel)" stroke-width="1.5"/>`;
  }).join('');

  // rótulos externos
  const labels = res.map((c, i) => {
    const [x, y] = pt(i, 1.19);
    const a = ang(i);
    const anchor = Math.abs(Math.cos(a)) < 0.25 ? 'middle' : (Math.cos(a) > 0 ? 'start' : 'end');
    const cor = S.cirurgiaIdx.includes(c.idx) ? 'var(--danger)' : (c.frac >= 0.83 ? 'var(--ok)' : 'var(--dim)');
    return `<text x="${x.toFixed(1)}" y="${(y + 4).toFixed(1)}" text-anchor="${anchor}"
      font-family="var(--mono)" font-size="10.5" letter-spacing="1.5" fill="${cor}">${RADAR_LABELS[c.id]}</text>
      <text x="${x.toFixed(1)}" y="${(y + 18).toFixed(1)}" text-anchor="${anchor}"
      font-family="var(--mono)" font-size="9.5" fill="var(--faint)">${c.score}/${c.max}</text>`;
  }).join('');

  // anéis de pulso nos vértices de cirurgia (batimento)
  const pulses = res.map((c, i) => {
    if (!S.cirurgiaIdx.includes(c.idx)) return '';
    const [x, y] = pt(i, Math.max(c.frac, 0.02));
    return `<circle class="pulse" data-i="${i}" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5" fill="none" stroke="var(--danger)" stroke-width="1.5"/>`;
  }).join('');

  return `<svg class="radar" viewBox="0 0 ${W} ${H}" role="img" aria-label="Gráfico de teia dos sete componentes da forma">
    <defs><filter id="radar-glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="7" result="b"/>
    </filter></defs>
    ${grid}
    <g class="radar-shape" data-cx="${cx}" data-cy="${cy}" data-r="${R}">
      <polygon class="radar-halo" points="${shape}" fill="none" stroke="var(--accent)" stroke-width="5" stroke-linejoin="round" filter="url(#radar-glow)" opacity=".22"/>
      <polygon class="radar-poly" points="${shape}" fill="rgba(242,163,60,.16)" stroke="var(--accent)" stroke-width="2" stroke-linejoin="round"/>
      ${pulses}
      ${dots.replace(/<circle /g, '<circle class="radar-dot" ')}
    </g>
    ${labels}
  </svg>`;
}


// ---------- a teia viva: respiração orgânica ----------
let radarLifeId = null;
function pararVidaRadar() { if (radarLifeId) { cancelAnimationFrame(radarLifeId); radarLifeId = null; } }
function iniciarVidaRadar(res) {
  const svg = stage.querySelector('svg.radar');
  if (!svg) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const g = svg.querySelector('.radar-shape');
  const cx = parseFloat(g.dataset.cx), cy = parseFloat(g.dataset.cy), R = parseFloat(g.dataset.r);
  const N = res.length;
  const ang = i => -Math.PI/2 + (i * 2*Math.PI / N);
  const fracs = res.map(c => Math.max(c.frac, 0.02));
  const vel = fracs.map((_, i) => 0.45 + (i % 3) * 0.14);   // ritmos próprios
  const fase = fracs.map((_, i) => i * 2.39);                // fases distribuídas
  const AMP = 0.02;                                          // ~2% do raio — vivo, não mentiroso

  const poly = g.querySelector('.radar-poly');
  const halo = g.querySelector('.radar-halo');
  const dots = [...g.querySelectorAll('.radar-dot')];
  const pulses = [...g.querySelectorAll('.pulse')];

  const t0 = performance.now();
  function frame(now) {
    const t = (now - t0) / 1000;
    const pts = fracs.map((f, i) => {
      const ff = f + AMP * Math.sin(vel[i] * t + fase[i]);
      return [cx + Math.cos(ang(i)) * R * ff, cy + Math.sin(ang(i)) * R * ff];
    });
    const str = pts.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ');
    poly.setAttribute('points', str);
    halo.setAttribute('points', str);
    halo.setAttribute('opacity', (0.16 + 0.10 * (0.5 + 0.5 * Math.sin(t * 0.6))).toFixed(3));
    dots.forEach(d => {
      const i = parseInt(d.dataset.i, 10);
      d.setAttribute('cx', pts[i][0].toFixed(1)); d.setAttribute('cy', pts[i][1].toFixed(1));
    });
    pulses.forEach(p => {
      const i = parseInt(p.dataset.i, 10);
      p.setAttribute('cx', pts[i][0].toFixed(1)); p.setAttribute('cy', pts[i][1].toFixed(1));
      const fase2 = (t / 2.6 + i * 0.5) % 1;                 // batimento: expande e some
      p.setAttribute('r', (5 + fase2 * 13).toFixed(1));
      p.setAttribute('opacity', (0.55 * (1 - fase2)).toFixed(3));
    });
    radarLifeId = requestAnimationFrame(frame);
  }
  radarLifeId = requestAnimationFrame(frame);
}

// ============================================================
// RESULTADO
// ============================================================
function renderResultado() {
  if (S.cirurgiaIdx.length === 0) definirCirurgia();
  setProgress('RESULTADO');
  progressFill.style.width = '100%';

  const res = scoresBase();
  const total = res.reduce((s, c) => s + c.score, 0);
  const maxTotal = res.reduce((s, c) => s + c.max, 0);
  const fracTotal = total / maxTotal;
  const cirurgia = S.cirurgiaIdx.map(i => res.find(c => c.idx === i));
  const fundacao = res.filter(c => c.frac >= 0.83);
  const fr = { _total: fracTotal }; res.forEach(c => fr[c.id] = c.frac);
  const padroes = detectarPadroes(fr);
  const tudoBaixo = fracTotal <= 0.34;
  const podeUpgrade = S.modo === 'livro' && !S.upgraded;

  let html = `
    <div class="tag">SEU RAIO-X — ÚLTIMOS 90 DIAS ${S.upgraded ? '· REFINADO' : ''}</div>
    <h1 style="margin-top:22px;">O desenho <span class="thin">da sua forma.</span></h1>
    <div class="res-total">TOTAL: <b>${total}/${maxTotal}</b> — mas o número total importa menos do que o desenho.</div>

    <div class="panel res-panel">
      <div class="panel-label">FIG. 02 — O DESENHO DOS SEUS 7 COMPONENTES</div>
      <div class="fig-grid">
      <div class="radar-wrap">${renderRadar(res)}</div>
      <div class="res-bars">
        ${res.map(c => {
          const isCir = S.cirurgiaIdx.includes(c.idx);
          const cls = isCir ? 'low' : (c.frac >= 0.83 ? 'high' : '');
          return `
          <div class="bar-row">
            <span class="bar-name">${c.nome}</span>
            <div class="bar-track"><div class="bar-fill ${cls}" data-w="${c.frac * 100}"></div></div>
            <span class="bar-score">${c.score}/${c.max}</span>
          </div>`;
        }).join('')}
      </div>
      </div>
      <div class="mono-note res-note">// os dois componentes mais baixos são o seu fator fraco —<br>// o denominador que está limitando o produto inteiro da sua equação.</div>
    </div>`;

  if (padroes.length > 0) {
    html += `
    <div class="diag">
      <div class="diag-h" style="color:var(--accent)">▸ O DESENHO RECONHECIDO — PADRÕES DO SEU RAIO-X</div>
      ${padroes.map(p => `
        <div class="card" style="border-left:3px solid var(--accent)">
          <div class="c-name" style="font-family:var(--mono);font-size:14px;letter-spacing:.14em;">${p.nome}</div>
          <div class="c-act" style="margin-top:12px;">${p.txt}</div>
        </div>`).join('')}
    </div>`;
  }

  html += `
    <div class="diag">
      <div class="diag-h cir">▸ CIRURGIA — LEIA COM A FERRAMENTA NA MÃO E A AGENDA ABERTA</div>
      ${cirurgia.map(c => {
        const refinado = temDrill(c.idx);
        const vaz = refinado ? vazamento(c) : null;
        return `
        <div class="card cir">
          <span class="c-score">${c.score}/${c.max}</span>
          <div class="c-name">${c.nome}</div>
          <div class="c-blade">${c.lamina}</div>
          <div class="c-cap">${c.cap} · FERRAMENTA: ${c.ferramenta.toUpperCase()}</div>
          ${refinado ? `
          <div class="c-act" style="margin-top:14px;"><span style="font-family:var(--mono);font-size:11px;letter-spacing:.14em;color:var(--danger);">VAZAMENTO PRINCIPAL: ${vaz.nome.toUpperCase()}</span></div>
          <div class="c-act"><b>Primeira ação:</b> ${vaz.acao}</div>` : `
          <div class="c-act" style="margin-top:14px;"><b>Primeira ação:</b> ${c.acaoGeral}</div>`}
        </div>`;
      }).join('')}
    </div>`;

  if (podeUpgrade) {
    const c1 = COMPONENTES[S.cirurgiaIdx[0]], c2 = COMPONENTES[S.cirurgiaIdx[1]];
    html += `
    <div class="upgrade-box">
      <div class="panel-label" style="color:var(--accent)">O BISTURI</div>
      <h3>Quer localizar onde exatamente vaza?</h3>
      <p>Aprofunde apenas <b>${c1.nome}</b> e <b>${c2.nome}</b> — 12 afirmações extras (~5 minutos) — e o resultado passa a apontar o <b>mecanismo exato</b> de cada vazamento, com a primeira ação cirúrgica correspondente.</p>
      <button class="btn" id="upgrade">&gt;_ APROFUNDAR OS DOIS COMPONENTES</button>
    </div>`;
  }

  if (fundacao.length > 0) {
    html += `
    <div class="diag">
      <div class="diag-h fun">▸ FUNDAÇÃO — USE COMO ALAVANCA PARA ERGUER OS OUTROS</div>
      ${fundacao.map(c => `
        <div class="card fun">
          <span class="c-score">${c.score}/${c.max}</span>
          <div class="c-name">${c.nome}</div>
          <div class="c-act">Componente de fundação: ele já sustenta — agora trabalha a favor dos que faltam. Os componentes cobram uns aos outros; foi desenhado assim.</div>
        </div>`).join('')}
    </div>`;
  }

  if (tudoBaixo) {
    html += `
    <div class="low-note">
      <b style="color:var(--text)">Se você pontuou baixo em quase tudo, resista à conclusão de sempre ("estou quebrado").</b>
      A sua forma foi instalada, não escolhida; e ela é mantida por uma balança, não por um defeito.
      O Raio-X não mede o seu valor. Mede o seu ponto de partida. E pontos de partida existem para ficar para trás.
    </div>`;
  }

  html += `
    <div class="gate">
      <div class="panel-label">A VERSÃO PARA IMPRIMIR</div>
      <h3>O plano de 90 dias, componente por componente.</h3>
      <p>O plano completo — instalar, rodar e auditar cada um dos sete componentes, derivado das ferramentas do livro — está disponível para download e impressão. Deixe seu e-mail para receber o material e ser avisado no lançamento do livro:</p>
      <div class="gate-row">
        <input type="email" id="gate-email" placeholder="seu@email.com" autocomplete="email">
        <button class="btn" id="gate-btn">LIBERAR O PLANO DE 90 DIAS</button>
      </div>
      <div class="form-msg" id="gate-msg"></div>
    </div>

    <div class="redo">
      <button class="btn ghost" id="redo">↻ REFAZER O EXAME</button>
    </div>`;

  stage.innerHTML = html;

  requestAnimationFrame(() => {
    setTimeout(() => {
      stage.querySelectorAll('.bar-fill').forEach(b => { b.style.width = b.dataset.w + '%'; });
      const rs = stage.querySelector('.radar-shape'); if (rs) rs.classList.add('in');
      setTimeout(() => iniciarVidaRadar(res), 1050); // a respiração assume após a entrada
    }, 80);
  });

  if (podeUpgrade) {
    document.getElementById('upgrade').addEventListener('click', () => { S.fase = 'upgrade'; S.passo = 0; render(); });
  }
  document.getElementById('redo').addEventListener('click', () => { limpar(); iniciarZero(); });

  document.getElementById('gate-btn').addEventListener('click', async () => {
    const input = document.getElementById('gate-email');
    const msg = document.getElementById('gate-msg');
    const btn = document.getElementById('gate-btn');
    const email = input.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      msg.textContent = '// e-mail inválido.'; msg.className = 'form-msg err'; return;
    }
    btn.disabled = true; msg.textContent = '// registrando...'; msg.className = 'form-msg';
    const ok = await window.registrarLead(email, 'raiox');
    if (ok) {
      msg.innerHTML = '// liberado. <a href="/downloads/A_FORMA_Plano_90_Dias.pdf" download style="color:var(--accent);text-decoration:underline;">baixar o plano de 90 dias (PDF)</a> — você também será avisado no lançamento.';
      msg.className = 'form-msg ok';
    } else {
      msg.textContent = '// falha ao registrar. tente novamente.'; msg.className = 'form-msg err';
      btn.disabled = false;
    }
  });
}

function iniciarZero() {
  S = { modo: null, fase: 'intro', passo: 0, respostas: {}, drillResp: {}, cirurgiaIdx: [], upgraded: false, ts: Date.now() };
  render();
}

render();
