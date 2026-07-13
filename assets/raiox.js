// ============================================================
// O RAIO-X DA FORMA — lógica do diagnóstico
// Fonte: livro "A FORMA" (Parte II, fechamento) — texto canônico
// ============================================================

const COMPONENTES = [
  {
    id: 'atitude', nome: 'Atitude', cap: 'CAP. 10 — ATITUDE: A POSIÇÃO ANTES DA AÇÃO',
    lamina: '"Atitude é o único cargo que ninguém te dá e ninguém te tira. Você se nomeia — ou se demite — todos os dias."',
    ferramenta: 'Contrato de posse',
    acao: 'Escreva a frase de dono, na primeira pessoa: <b>"O resultado de ___ é meu — inteiro, inclusive as partes que dependem de outros."</b> Quinze minutos, três cláusulas: a posse, o inegociável, a tradução.',
    afirmacoes: [
      'Diante de um resultado ruim, minha primeira pergunta foi "o que EU faço agora?" — antes de qualquer explicação externa.',
      'Trabalhei nas minhas metas sem depender de cobrança, aprovação ou permissão de alguém.',
      'Existe algo importante que eu sustentei mesmo quando teria sido mais fácil (ou mais lucrativo) abrir mão.'
    ]
  },
  {
    id: 'foco', nome: 'Foco', cap: 'CAP. 11 — FOCO: UMA COISA, E O PREÇO DO NÃO',
    lamina: '"Foco não é o que você persegue. É o que você recusa — e o preço pago em nãos é o que compra a travessia."',
    ferramenta: 'Lista dos nãos',
    acao: 'Eleja <b>A coisa do trimestre</b> (critério: qual, resolvida, facilita ou aposenta as outras?) e escreva <b>três nãos com nome próprio</b> — o projeto pausado, o convite recusado, a frente que hiberna.',
    afirmacoes: [
      'Minhas metas ativas cabem nos dedos de uma mão — e eu sei dizer qual é a principal.',
      'Disse "não" a oportunidades, convites ou distrações que competiam com a minha prioridade.',
      'Tive blocos regulares de trabalho profundo, sem celular ao alcance, na minha meta principal.'
    ]
  },
  {
    id: 'plano', nome: 'Plano', cap: 'CAP. 12 — PLANO: A VANTAGEM DESENHADA NO CALENDÁRIO',
    lamina: '"Intenção mora no futuro. Plano mora no calendário. E o calendário é o único pedaço do futuro que obedece a você."',
    ferramenta: 'Plano de uma página',
    acao: 'Escreva <b>o porto</b>: a meta em uma frase com número e data. Depois o marco de 90 dias, o motor semanal, os dois "quando-então" e a revisão fixa. <b>Uma página, na parede.</b>',
    afirmacoes: [
      'Minha meta principal tem o quê, quando e quanto definidos — por escrito, não na cabeça.',
      'Minhas ações importantes têm dia e hora marcados no calendário, como reuniões.',
      'Sei dizer, em números, qual é o próximo marco e para quando.'
    ]
  },
  {
    id: 'execucao', nome: 'Execução', cap: 'CAP. 13 — EXECUÇÃO: COMEÇAR ANTES DE ESTAR PRONTO',
    lamina: '"Ideia guardada não compete com execução malfeita. O mercado não premia quem pensou primeiro — premia quem foi."',
    ferramenta: 'Regra das 48 horas',
    acao: 'Defina a <b>menor versão pública</b> — a ação que sai de você e toca o mundo, com risco de resposta (se não pode gerar um "não", ainda é preparação) — e <b>execute em 48 horas</b>.',
    afirmacoes: [
      'Comecei as coisas importantes antes de me sentir pronto — sem esperar o cenário ideal.',
      'Nos últimos 7 dias, produzi rastros verificáveis na minha meta (algo feito que existe no mundo).',
      'Entre planejar mais e fazer o próximo passo imperfeito, escolhi fazer.'
    ]
  },
  {
    id: 'constancia', nome: 'Constância', cap: 'CAP. 14 — CONSTÂNCIA: A REPETIÇÃO QUE NINGUÉM APLAUDE',
    lamina: '"Intensidade impressiona. Constância transforma. E a plateia sempre aplaude a errada."',
    ferramenta: 'Nunca duas + mínimo inegociável',
    acao: 'Instale a regra <b>"nunca dois dias seguidos"</b> e defina, de véspera, o seu <b>mínimo inegociável</b> para os dias impossíveis: dez minutos, uma página, uma ligação. Encolhida, não cancelada.',
    afirmacoes: [
      'Trabalhei na minha meta nos dias em que estava sem nenhuma vontade.',
      'Minha rotina de trabalho na meta sobreviveu às últimas semanas caóticas (viagem, imprevisto, crise).',
      'Se alguém auditar meus últimos 30 dias, encontra a mesma prática se repetindo em pelo menos 20 deles.'
    ]
  },
  {
    id: 'resiliencia', nome: 'Resiliência', cap: 'CAP. 15 — RESILIÊNCIA: A ARTE DE VOLTAR',
    lamina: '"A queda custa o que custa. O tempo no chão é que você escolhe — e a vida cobra por hora."',
    ferramenta: 'Protocolo do retorno',
    acao: 'Escreva hoje, no dia bom, a regra do preço exato: <b>"Um erro custa um erro. Um dia perdido custa um dia. Nada tem poder de custar a semana."</b> E defina a janela de 24 horas: toda queda tem direito a no máximo um dia sem ação.',
    afirmacoes: [
      'Depois do último erro ou fracasso, voltei à prática em menos de uma semana.',
      'Um dia perdido não virou uma semana perdida: retomei sem esperar a próxima segunda-feira.',
      'Recebi um "não" (ou um resultado ruim) e fiz a tentativa seguinte mesmo assim.'
    ]
  },
  {
    id: 'prestacao', nome: 'Prestação de contas', cap: 'CAP. 16 — PRESTAÇÃO DE CONTAS: A FORMA DIANTE DO OUTRO',
    lamina: '"Meta secreta nasce com a porta dos fundos aberta. Testemunha eleita fecha a porta — e devolve a chave para você."',
    ferramenta: 'Sexta-feira de 15 minutos',
    acao: 'Eleja <b>a testemunha</b> — uma pessoa que você respeite o suficiente para o "não fiz" doer — e <b>envie a mensagem agora</b>, com dia e hora da primeira sexta. Três perguntas fixas, quinze minutos, números na mesa.',
    afirmacoes: [
      'Existe uma pessoa que sabe da minha meta, do prazo — e pergunta.',
      'Tenho um momento fixo (semanal ou quinzenal) em que confiro meus números e ajusto a rota.',
      'Quando não cumpro o que declarei, isso tem algum custo visível — nem que seja uma conversa desconfortável.'
    ]
  }
];

const ESCALA = [
  { v: 2, t: 'verdade na maioria dos dias' },
  { v: 1, t: 'às vezes' },
  { v: 0, t: 'raramente ou nunca' }
];

// ---------- estado ----------
let etapa = -1; // -1 = intro, 0..6 = componentes, 7 = resultado
const respostas = {}; // "cIdx-qIdx" -> 0|1|2

const stage = document.getElementById('stage');
const progress = document.getElementById('progress');
const progressFill = document.getElementById('progress-fill');
const progressLabel = document.getElementById('progress-label');

function render() {
  window.scrollTo({ top: 0 });
  if (etapa === -1) return renderIntro();
  if (etapa >= 0 && etapa < 7) return renderEtapa(etapa);
  return renderResultado();
}

// ---------- INTRO ----------
function renderIntro() {
  progress.style.display = 'none';
  stage.innerHTML = `
    <div class="intro">
      <div class="tag">O EXAME QUE FECHA A PARTE II DO LIVRO</div>
      <h1>O Raio-X <span class="thin">da Forma.</span></h1>
      <p class="lead">Você entendeu a equação, viu a liquidação do conteúdo, conheceu a balança. <b>Antes de construir, meça.</b> Responda às 21 afirmações pensando nos seus <b>últimos 90 dias</b> — não na sua intenção, não no seu melhor momento, não em quem você quer ser. Nos fatos.</p>
      <div class="honesty">
        <b>Uma nota de honestidade antes de começar:</b> isto é um <b>instrumento de autorreflexão</b>, não um teste psicométrico validado — nenhum número aqui te mede por fora. A régua é você, olhando os próprios noventa dias sem advogado de defesa.
      </div>
      <div class="scale-legend">
        <div class="scale-item"><div class="v">2</div><div class="t">verdade na maioria dos dias</div></div>
        <div class="scale-item"><div class="v">1</div><div class="t">às vezes</div></div>
        <div class="scale-item"><div class="v">0</div><div class="t">raramente ou nunca</div></div>
      </div>
      <button class="btn" id="start">&gt;_ COMEÇAR O EXAME</button>
      <div class="mono-note" style="margin-top:18px;">// 7 componentes · 21 afirmações · ~15 minutos · nada é enviado a nenhum servidor</div>
    </div>`;
  document.getElementById('start').addEventListener('click', () => { etapa = 0; render(); });
}

// ---------- ETAPA ----------
function renderEtapa(i) {
  const c = COMPONENTES[i];
  progress.style.display = 'block';
  progressLabel.textContent = `ETAPA ${i + 1}/7 — ${c.nome.toUpperCase()}`;
  progressFill.style.width = `${((i) / 7) * 100}%`;

  let html = `
    <div class="step-kicker">COMPONENTE ${String(i + 1).padStart(2, '0')} / 07</div>
    <div class="step-title">${c.nome}</div>`;

  c.afirmacoes.forEach((a, q) => {
    const key = `${i}-${q}`;
    html += `
      <div class="q">
        <div class="q-text"><span class="qn">${String(i * 3 + q + 1).padStart(2, '0')}</span>${a}</div>
        <div class="q-opts" data-key="${key}">
          ${ESCALA.map(o => `
            <div class="q-opt ${respostas[key] === o.v ? 'sel' : ''}" data-v="${o.v}">
              <span class="v">${o.v}</span>
              <span class="t">${o.t}</span>
            </div>`).join('')}
        </div>
      </div>`;
  });

  html += `
    <div class="step-nav">
      <button class="btn ghost" id="prev">${i === 0 ? '← INTRODUÇÃO' : '← ANTERIOR'}</button>
      <button class="btn" id="next" disabled>${i === 6 ? 'VER O RESULTADO →' : 'PRÓXIMO →'}</button>
    </div>`;

  stage.innerHTML = html;

  stage.querySelectorAll('.q-opts').forEach(group => {
    group.addEventListener('click', e => {
      const opt = e.target.closest('.q-opt');
      if (!opt) return;
      respostas[group.dataset.key] = parseInt(opt.dataset.v, 10);
      group.querySelectorAll('.q-opt').forEach(o => o.classList.remove('sel'));
      opt.classList.add('sel');
      checkComplete(i);
    });
  });

  document.getElementById('prev').addEventListener('click', () => { etapa = i === 0 ? -1 : i - 1; render(); });
  document.getElementById('next').addEventListener('click', () => { etapa = i + 1; render(); });
  checkComplete(i);
}

function checkComplete(i) {
  const done = [0, 1, 2].every(q => respostas[`${i}-${q}`] !== undefined);
  document.getElementById('next').disabled = !done;
}

// ---------- RESULTADO ----------
function calcular() {
  return COMPONENTES.map((c, i) => ({
    ...c,
    score: [0, 1, 2].reduce((s, q) => s + (respostas[`${i}-${q}`] || 0), 0)
  }));
}

function renderResultado() {
  progress.style.display = 'block';
  progressLabel.textContent = 'RESULTADO';
  progressFill.style.width = '100%';

  const res = calcular();
  const total = res.reduce((s, c) => s + c.score, 0);
  const ordenado = [...res].sort((a, b) => a.score - b.score);
  const cirurgia = ordenado.slice(0, 2);
  const fundacao = res.filter(c => c.score >= 5);
  const tudoBaixo = total <= 14;

  let html = `
    <div class="tag">SEU RAIO-X — ÚLTIMOS 90 DIAS</div>
    <h1 style="margin-top:22px;">O desenho <span class="thin">da sua forma.</span></h1>
    <div class="res-total">TOTAL: <b>${total}/42</b> — mas o número total importa menos do que o desenho.</div>

    <div class="panel res-panel">
      <div class="panel-label">FIG. 02 — SEUS 7 COMPONENTES</div>
      <div class="res-bars">
        ${res.map(c => {
          const isCir = cirurgia.some(x => x.id === c.id);
          const cls = isCir ? 'low' : (c.score >= 5 ? 'high' : '');
          return `
          <div class="bar-row">
            <span class="bar-name">${c.nome}</span>
            <div class="bar-track"><div class="bar-fill ${cls}" data-w="${(c.score / 6) * 100}"></div></div>
            <span class="bar-score">${c.score}/6</span>
          </div>`;
        }).join('')}
      </div>
      <div class="mono-note res-note">// procure os seus dois componentes mais baixos: eles são o seu fator fraco —<br>// o denominador que está limitando o produto inteiro da sua equação.</div>
    </div>

    <div class="diag">
      <div class="diag-h cir">▸ CIRURGIA — LEIA COM A FERRAMENTA NA MÃO E A AGENDA ABERTA</div>
      ${cirurgia.map(c => `
        <div class="card cir">
          <span class="c-score">${c.score}/6</span>
          <div class="c-name">${c.nome}</div>
          <div class="c-blade">${c.lamina}</div>
          <div class="c-cap">${c.cap} · FERRAMENTA: ${c.ferramenta.toUpperCase()}</div>
          <div class="c-act"><b>Primeira ação:</b> ${c.acao}</div>
        </div>`).join('')}
    </div>`;

  if (fundacao.length > 0) {
    html += `
    <div class="diag">
      <div class="diag-h fun">▸ FUNDAÇÃO — USE COMO ALAVANCA PARA ERGUER OS OUTROS</div>
      ${fundacao.map(c => `
        <div class="card fun">
          <span class="c-score">${c.score}/6</span>
          <div class="c-name">${c.nome}</div>
          <div class="c-act">Componente com 5 ou 6 pontos é a sua fundação. Ele já sustenta — agora trabalha a favor dos que faltam.</div>
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
      <div class="panel-label">A VERSÃO COMPLETA</div>
      <h3>O plano de 90 dias, componente por componente.</h3>
      <p>A versão completa do Raio-X — com o plano de 90 dias para cada um dos sete componentes, derivado das ferramentas do livro — está disponível para download. Deixe seu e-mail para receber o material e ser avisado no lançamento do livro:</p>
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

  // animar barras
  requestAnimationFrame(() => {
    setTimeout(() => {
      stage.querySelectorAll('.bar-fill').forEach(b => { b.style.width = b.dataset.w + '%'; });
    }, 80);
  });

  document.getElementById('redo').addEventListener('click', () => {
    Object.keys(respostas).forEach(k => delete respostas[k]);
    etapa = -1; render();
  });

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

render();
