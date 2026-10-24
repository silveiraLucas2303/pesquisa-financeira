const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const categories = [
  { id: 'housing', label: 'Moradia e contas' },
  { id: 'food', label: 'Alimentação' },
  { id: 'transport', label: 'Transporte' },
  { id: 'education', label: 'Estudos' },
  { id: 'health', label: 'Saúde' },
  { id: 'leisure', label: 'Lazer e assinaturas' },
  { id: 'other', label: 'Outros gastos' }
];
const biblicalVerses = {
  debt: {
    reference: 'Provérbios 22:7',
    url: 'https://www.bible.com/pt/bible/1840/PRO.22.7.NAA',
    quote: 'o que pede emprestado é servo de quem empresta.'
  },
  cost: {
    reference: 'Lucas 14:28',
    url: 'https://www.bible.com/pt/bible/1840/LUK.14.28.NAA',
    quote: 'não se assenta primeiro para calcular a despesa e verificar se tem os meios para a concluir?'
  },
  planning: {
    reference: 'Provérbios 21:5',
    url: 'https://www.bible.com/pt/bible/1840/PRO.21.5.NAA',
    quote: 'Os planos de quem é esforçado conduzem à fartura'
  },
  reserve: {
    reference: 'Provérbios 6:8',
    url: 'https://www.bible.com/pt/bible/1840/PRO.6.8.NAA',
    quote: 'no verão prepara a sua comida, no tempo da colheita ajunta o seu mantimento.'
  },
  priorities: {
    reference: 'Mateus 6:21',
    url: 'https://www.bible.com/pt/bible/1840/MAT.6.21.NAA',
    quote: 'Porque, onde estiver o seu tesouro, aí estará também o seu coração.'
  },
  wisdom: {
    reference: 'Tiago 1:5',
    url: 'https://www.bible.com/pt/bible/1840/JAS.1.5.NAA',
    quote: 'Se, porém, algum de vocês necessita de sabedoria, peça a Deus'
  },
  tracking: {
    reference: 'Provérbios 27:23',
    url: 'https://www.bible.com/pt/bible/1840/PRO.27.23.NAA',
    quote: 'Procure conhecer o estado das suas ovelhas e cuide dos seus rebanhos'
  }
};
const questions = {
  income: {
    title: 'Quanto você ganha, em média, por mês?',
    help: 'Se recebe mesada ou dinheiro só de vez em quando, escolha a opção abaixo. Não precisa inventar uma média.',
    type: 'money', label: 'Renda média mensal'
  },
  moneyReaction: {
    title: 'Quando algum dinheiro chega, qual é sua primeira vontade?',
    help: 'Imagine uma mesada, um presente ou um pequeno trabalho. Não existe resposta certa.',
    type: 'choice', options: [
      ['save', 'Guardar para usar depois'],
      ['spend', 'Comprar algo que quero agora'],
      ['split', 'Usar um pouco e guardar um pouco'],
      ['unsure', 'Ainda não sei o que faria']
    ]
  },
  purchaseStyle: {
    title: 'Como você costuma pensar antes de comprar?',
    help: 'Escolha o jeito que mais se aproxima de você hoje.',
    type: 'choice', options: [
      ['plan', 'Pesquiso e espero um pouco'],
      ['impulse', 'Decido na hora se gostei'],
      ['talk', 'Converso com alguém antes'],
      ['unsure', 'Ainda estou descobrindo']
    ]
  },
  futureWish: {
    title: 'O que você gostaria de conquistar no futuro?',
    help: 'Um desejo ajuda a dar sentido aos hábitos que você começa agora.',
    type: 'choice', options: [
      ['study', 'Estudar algo que gosto'],
      ['independence', 'Ter mais independência'],
      ['experience', 'Viver uma experiência especial'],
      ['project', 'Criar um projeto meu'],
      ['help', 'Ajudar alguém importante'],
      ['discover', 'Ainda quero descobrir']
    ]
  },
  learningInterest: {
    title: 'O que você mais gostaria de aprender sobre dinheiro?',
    help: 'Vamos transformar sua curiosidade em um próximo passo simples.',
    type: 'choice', options: [
      ['habits', 'Como criar bons hábitos'],
      ['planning', 'Como planejar uma meta'],
      ['investing', 'Como investimentos funcionam'],
      ['choices', 'Como fazer escolhas melhores'],
      ['discover', 'Ainda não sei por onde começar']
    ]
  },
  expenses: {
    title: 'Com o que você costuma gastar seu dinheiro?',
    help: 'Informe valores mensais aproximados nas categorias que se aplicam. Inclua contas e parcelas; deixe as outras em branco.',
    type: 'expenses'
  },
  debt: {
    title: 'Como estão suas dívidas ou parcelas?',
    help: 'Escolha a alternativa mais próxima da sua situação.',
    type: 'choice', options: [
      ['none', 'Não tenho dívidas ou parcelas'],
      ['current', 'Tenho, mas estão em dia'],
      ['late', 'Tenho pagamentos em atraso'],
      ['unknown', 'Não sei ao certo']
    ]
  },
  reserve: {
    title: 'Você tem dinheiro separado para imprevistos?',
    help: 'Pense em um valor que poderia usar numa emergência sem depender do orçamento do mês.',
    type: 'choice', options: [
      ['yes', 'Sim, já tenho uma reserva'],
      ['no', 'Ainda não tenho'],
      ['unknown', 'Não sei ao certo']
    ]
  },
  stability: {
    title: 'Sua renda costuma ser previsível?',
    help: 'Isso ajuda a pensar em um plano que funcione também nos meses mais apertados.',
    type: 'choice', options: [
      ['stable', 'Sim, recebo um valor parecido todo mês'],
      ['variable', 'Não, o valor varia bastante'],
      ['none', 'Ainda não tenho renda própria']
    ]
  },
  tracking: {
    title: 'Você sabe para onde seu dinheiro vai?',
    help: 'Responda pensando na sua rotina, não apenas neste mês.',
    type: 'choice', options: [
      ['always', 'Sim, acompanho meus gastos'],
      ['sometimes', 'Mais ou menos'],
      ['never', 'Ainda não acompanho']
    ]
  },
  difficulty: {
    title: 'O que parece mais difícil agora?',
    help: 'Sua resposta ajuda a destacar um próximo passo no relatório.',
    type: 'choice', options: [
      ['understand', 'Entender meus gastos'],
      ['spend', 'Gastar menos do que ganho'],
      ['debt', 'Lidar com dívidas'],
      ['save', 'Guardar dinheiro'],
      ['invest', 'Começar a investir'],
      ['unknown', 'Ainda não sei']
    ]
  },
  goal: {
    title: 'Qual objetivo mais anima você hoje?',
    help: 'Escolha um só para começar. Você pode mudar de ideia depois.',
    type: 'choice', options: [
      ['study', 'Fazer um curso ou estudar'],
      ['trip', 'Fazer uma viagem'],
      ['purchase', 'Comprar algo importante'],
      ['independence', 'Morar por conta própria'],
      ['safety', 'Criar uma reserva de segurança'],
      ['none', 'Ainda não tenho uma meta']
    ]
  },
  goalCost: {
    title: 'Quanto você acha que esse objetivo custa?',
    help: 'Uma estimativa já ajuda. Se ainda não sabe, pode pular esta pergunta.',
    type: 'money', label: 'Custo estimado da meta'
  },
  goalMonths: {
    title: 'Quando você gostaria de chegar lá?',
    help: 'Escolha um prazo inicial. Depois você pode ajustar o plano.',
    type: 'choice', options: [
      [6, 'Em 6 meses'],
      [12, 'Em 1 ano'],
      [24, 'Em 2 anos'],
      [60, 'Em 5 anos'],
      ['unknown', 'Ainda não sei']
    ]
  }
};

const answers = {
  incomeMode: null,
  income: null,
  moneyReaction: null,
  purchaseStyle: null,
  futureWish: null,
  learningInterest: null,
  expenses: null,
  debt: null,
  reserve: null,
  stability: null,
  tracking: null,
  difficulty: null,
  goal: null,
  goalCost: null,
  goalMonths: null
};
let currentIndex = 0;

function byId(id) { return document.getElementById(id); }
function money(cents) { return currency.format(cents / 100); }
function centsOf(value) { return Math.round(Number(value) * 100); }
function flow() {
  if (answers.incomeMode === 'occasional') return ['income', 'moneyReaction', 'purchaseStyle', 'futureWish', 'learningInterest'];
  const base = ['income', 'expenses', 'debt', 'reserve', 'stability', 'tracking', 'difficulty', 'goal'];
  return answers.goal && answers.goal !== 'none' ? [...base, 'goalCost', 'goalMonths'] : base;
}

function advance() {
  if (currentIndex < flow().length - 1) {
    currentIndex += 1;
    renderQuestion();
  } else {
    renderReport();
  }
}

function button(text, className, onClick, type = 'button') {
  const element = document.createElement('button');
  element.type = type;
  element.className = className;
  element.textContent = text;
  if (onClick) element.addEventListener('click', onClick);
  return element;
}

function moneyField(id, label, value, min) {
  const wrap = document.createElement('div');
  wrap.className = 'number-wrap';
  const caption = document.createElement('label');
  caption.className = 'field-label';
  caption.htmlFor = id;
  caption.textContent = label;
  const field = document.createElement('div');
  field.className = 'money-input';
  const prefix = document.createElement('span');
  prefix.textContent = 'R$';
  const input = document.createElement('input');
  input.id = id;
  input.type = 'number';
  input.min = String(min);
  input.step = '0.01';
  input.inputMode = 'decimal';
  input.placeholder = '0,00';
  if (value !== null && value !== undefined) input.value = String(value / 100);
  field.append(prefix, input);
  wrap.append(caption, field);
  return wrap;
}

function renderQuestion() {
  const sequence = flow();
  const id = sequence[currentIndex];
  const question = questions[id];
  byId('quiz').hidden = false;
  byId('report').hidden = true;
  byId('card').classList.remove('report-view');
  const total = answers.incomeMode === 'occasional' ? 5 : answers.goal === 'none' ? 8 : 10;
  byId('question-count').textContent = 'Pergunta ' + (currentIndex + 1) + (answers.incomeMode === 'occasional' || answers.goal ? ' de ' + total : ' de até 10');
  const percent = Math.round((currentIndex + 1) / total * 100);
  byId('progress-percent').textContent = percent + '%';
  byId('progress-fill').style.width = percent + '%';
  byId('question-title').textContent = question.title;
  byId('question-help').textContent = question.help;
  byId('answer-error').textContent = '';
  const content = byId('answer-content');
  const actions = byId('answer-actions');
  content.replaceChildren();
  actions.replaceChildren();

  if (question.type === 'choice') {
    const grid = document.createElement('div');
    grid.className = 'option-grid';
    for (const [value, text] of question.options) {
      const option = button(text, 'option', () => {
        answers[id] = value;
        if (id === 'goal' && value === 'none') {
          answers.goalCost = null;
          answers.goalMonths = null;
        }
        advance();
      });
      if (answers[id] === value) option.classList.add('selected');
      grid.append(option);
    }
    content.append(grid);
  } else if (question.type === 'money') {
    content.append(moneyField('number-answer', question.label, answers[id], id === 'income' ? 0 : 0.01));
  } else {
    const grid = document.createElement('div');
    grid.className = 'expense-grid';
    for (const category of categories) {
      const field = document.createElement('label');
      field.className = 'expense-field';
      const caption = document.createElement('span');
      caption.textContent = category.label;
      const moneyWrap = document.createElement('div');
      moneyWrap.className = 'money-input';
      const prefix = document.createElement('span');
      prefix.textContent = 'R$';
      const input = document.createElement('input');
      input.type = 'number';
      input.min = '0';
      input.step = '0.01';
      input.inputMode = 'decimal';
      input.placeholder = '0,00';
      input.dataset.category = category.id;
      input.setAttribute('aria-label', category.label + ' em reais por mês');
      const saved = answers.expenses?.[category.id] || 0;
      if (saved > 0) input.value = String(saved / 100);
      moneyWrap.append(prefix, input);
      field.append(caption, moneyWrap);
      grid.append(field);
    }
    content.append(grid);
  }

  if (currentIndex > 0) actions.append(button('← Voltar', 'back', () => { currentIndex -= 1; renderQuestion(); }));
  if (id === 'income') {
    actions.append(button('Ainda não recebo um valor por mês', 'text-action no-monthly-action', () => {
      answers.incomeMode = 'occasional';
      answers.income = null;
      advance();
    }));
  }
  if (question.type === 'expenses') {
    actions.append(button('Não tenho gastos próprios', 'text-action', () => {
      answers.expenses = Object.fromEntries(categories.map(category => [category.id, 0]));
      advance();
    }));
  }
  if (id === 'goalCost') actions.append(button('Ainda não sei', 'text-action', () => { answers.goalCost = null; advance(); }));
  if (question.type !== 'choice') actions.append(button('Continuar →', 'primary', null, 'submit'));
  byId('question-title').focus({ preventScroll: true });
  window.scrollTo(0, 0);
}

function setError(message) { byId('answer-error').textContent = message; }

byId('answer-form').addEventListener('submit', event => {
  event.preventDefault();
  const id = flow()[currentIndex];
  if (!event.currentTarget.reportValidity()) return;
  if (id === 'expenses') {
    const values = {};
    let total = 0;
    for (const input of byId('answer-content').querySelectorAll('input[data-category]')) {
      const cents = input.value.trim() === '' ? 0 : centsOf(input.value);
      if (!Number.isSafeInteger(cents) || cents < 0) { setError('Confira os valores informados.'); input.focus(); return; }
      values[input.dataset.category] = cents;
      total += cents;
    }
    if (total === 0) { setError('Informe um gasto ou escolha “Não tenho gastos próprios”.'); return; }
    answers.expenses = values;
  } else {
    const input = byId('number-answer');
    if (input.value.trim() === '') { setError('Informe um valor para continuar.'); input.focus(); return; }
    const cents = centsOf(input.value);
    if (!Number.isSafeInteger(cents) || cents < (id === 'income' ? 0 : 1)) {
      setError('Informe um valor válido.'); input.focus(); return;
    }
    if (id === 'income') {
      answers.incomeMode = cents === 0 ? 'occasional' : 'monthly';
      answers.income = cents === 0 ? null : cents;
    } else {
      answers[id] = cents;
    }
  }
  advance();
});

function fillList(id, items) {
  const list = byId(id);
  list.replaceChildren();
  for (const text of items.slice(0, 3)) {
    const item = document.createElement('li');
    item.textContent = text;
    list.append(item);
  }
}

function renderExpenses() {
  const list = byId('expense-list');
  list.replaceChildren();
  const nonZero = categories.filter(category => answers.expenses[category.id] > 0);
  if (!nonZero.length) {
    const item = document.createElement('li');
    item.textContent = 'Nenhum gasto próprio informado';
    list.append(item);
    return;
  }
  for (const category of nonZero) {
    const item = document.createElement('li');
    const name = document.createElement('span');
    const value = document.createElement('span');
    name.textContent = category.label;
    value.textContent = money(answers.expenses[category.id]);
    item.append(name, value);
    list.append(item);
  }
}

function renderSteps(items) {
  const list = byId('recommendations-list');
  list.replaceChildren();
  for (const [index, step] of items.slice(0, 3).entries()) {
    const item = document.createElement('li');
    const number = document.createElement('span');
    number.className = 'number';
    number.setAttribute('aria-hidden', 'true');
    number.textContent = String(index + 1);
    const title = document.createElement('strong');
    title.textContent = step.title;
    const detail = document.createElement('p');
    detail.textContent = step.detail;
    const verse = biblicalVerses[step.verse];
    const quote = document.createElement('blockquote');
    quote.textContent = '“' + verse.quote + '”';
    const citation = document.createElement('cite');
    const link = document.createElement('a');
    link.href = verse.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = verse.reference + ' · NAA';
    citation.append(link);
    item.append(number, title, detail, quote, citation);
    list.append(item);
  }
}

function showReport() {
  byId('quiz').hidden = true;
  byId('report').hidden = false;
  byId('card').classList.add('report-view');
  byId('report-title').focus({ preventScroll: true });
  window.scrollTo(0, 0);
}

function renderOccasionalReport() {
  byId('report-title').textContent = 'Seu ponto de partida financeiro';
  byId('report-subtitle').textContent = 'Conheça seu jeito de decidir e comece a construir bons hábitos, no seu ritmo.';
  byId('steps-intro').textContent = 'Três ações possíveis mesmo sem receber um valor fixo por mês.';
  byId('numbers-panel').hidden = true;
  byId('report-footnote').textContent = 'Este retrato é uma reflexão educativa sobre suas respostas. A página não salva nem envia seus dados para um servidor.';

  const reactions = {
    save: 'Você se imagina guardando o que recebe para decidir depois.',
    spend: 'Sua primeira vontade é aproveitar o dinheiro quando ele chega.',
    split: 'Você pensa em usar uma parte e guardar outra.',
    unsure: 'Você ainda está descobrindo como reage quando recebe dinheiro.'
  };
  const decisions = {
    plan: 'Antes de comprar, você prefere pesquisar e esperar.',
    impulse: 'Uma compra interessante pode chamar sua atenção na hora.',
    talk: 'Conversar com alguém ajuda você a decidir.',
    unsure: 'Seu jeito de escolher ainda está se formando.'
  };
  byId('portrait-text').textContent = 'Você ainda não recebe um valor mensal previsível. Seu começo pode ser observar escolhas, sem precisar calcular um saldo. ' + reactions[answers.moneyReaction] + ' ' + decisions[answers.purchaseStyle];

  const strengths = [];
  if (['save', 'split'].includes(answers.moneyReaction)) strengths.push('Você já considera guardar parte do dinheiro que receber.');
  if (answers.purchaseStyle === 'plan') strengths.push('Pesquisar antes de comprar ajuda você a fazer escolhas mais conscientes.');
  if (answers.purchaseStyle === 'talk') strengths.push('Você valoriza ouvir alguém de confiança antes de decidir.');
  if (answers.futureWish !== 'discover') strengths.push('Você já reconhece algo que gostaria de conquistar.');
  if (answers.learningInterest !== 'discover') strengths.push('Você já sabe qual assunto financeiro gostaria de explorar primeiro.');
  if (!strengths.length) strengths.push('Você começou a refletir sobre seu jeito de lidar com dinheiro.');
  fillList('strengths-list', strengths);

  const attention = [];
  if (answers.moneyReaction === 'spend') attention.push('A vontade de gastar logo pode afastar um objetivo que importa para você.');
  if (answers.purchaseStyle === 'impulse') attention.push('Uma pequena pausa antes da compra ajuda a separar vontade passageira de prioridade.');
  if (answers.moneyReaction === 'unsure' || answers.purchaseStyle === 'unsure') attention.push('Observar suas escolhas por algumas semanas pode revelar seus hábitos.');
  if (answers.futureWish === 'discover') attention.push('Experimentar uma primeira meta simples pode dar direção ao que você aprender.');
  if (!attention.length) attention.push('Vale continuar observando o que muda quando você recebe dinheiro de vez em quando.');
  fillList('attention-list', attention);

  const wishes = {
    study: 'estudar algo de que gosta',
    independence: 'conquistar mais independência',
    experience: 'viver uma experiência especial',
    project: 'criar um projeto seu',
    help: 'ajudar alguém importante'
  };
  byId('goal-text').textContent = answers.futureWish === 'discover'
    ? 'Você ainda está descobrindo o que deseja. Pense em algo pequeno que gostaria de realizar ou aprender nos próximos meses.'
    : 'Você gostaria de ' + wishes[answers.futureWish] + '. Esse desejo pode orientar suas escolhas, mesmo antes de receber dinheiro regularmente.';

  const next = [];
  if (answers.moneyReaction === 'spend' || answers.purchaseStyle === 'impulse') {
    next.push({ title: 'Faça uma pausa antes de comprar', detail: 'Quando receber algum dinheiro, anote o que deseja e espere um dia antes de decidir. Depois, observe se a vontade continua.', verse: 'cost' });
  } else if (answers.moneyReaction === 'save') {
    next.push({ title: 'Perceba o que consegue guardar', detail: 'Quando receber mesada ou um presente, experimente separar uma pequena parte e anote como se sentiu com essa escolha.', verse: 'reserve' });
  } else {
    next.push({ title: 'Conheça seu jeito de usar dinheiro', detail: 'Por algumas semanas, registre quando recebe algo, o que escolhe fazer e o motivo. O padrão vale mais que o valor.', verse: 'tracking' });
  }
  next.push({ title: 'Dê forma a um desejo', detail: answers.futureWish === 'discover'
    ? 'Escolha uma experiência, habilidade ou compra que gostaria de explorar. Pesquise o que seria necessário para chegar lá.'
    : 'Escreva o que significa ' + wishes[answers.futureWish] + ' para você e uma ação pequena que pode começar agora.', verse: 'priorities' });
  const learningStarts = {
    habits: 'Sua curiosidade por hábitos é um bom começo: observe escolhas repetidas antes de pensar em aplicações.',
    planning: 'Como você quer planejar uma meta, descubra primeiro para quando precisaria do dinheiro.',
    investing: 'Como investimentos despertam sua curiosidade, comece pelos conceitos de risco, prazo e liquidez.',
    choices: 'Para decidir melhor, compare o que você espera alcançar com o risco que aceitaria correr.',
    discover: 'Você pode começar com uma pergunta simples: para que gostaria de usar o dinheiro no futuro?'
  };
  next.push({ title: 'Aprenda antes de investir', detail: learningStarts[answers.learningInterest] + ' Investir pode ajudar objetivos futuros, mas não exige pressa. Se for menor de idade, converse com um adulto de confiança antes de qualquer decisão.', verse: 'wisdom' });
  renderSteps(next);

  byId('education-title').textContent = 'Investimentos e autoconhecimento';
  byId('education-text').textContent = 'Investir é uma ferramenta para objetivos futuros, não uma obrigação imediata. Primeiro descubra o que você valoriza, como decide e para quando precisaria do dinheiro. Depois aprenda sobre riscos, prazo e possibilidade de resgate antes de escolher qualquer aplicação.';
  showReport();
}

function renderReport() {
  if (answers.incomeMode === 'occasional') { renderOccasionalReport(); return; }
  const income = answers.income;
  const expenses = Object.values(answers.expenses).reduce((sum, value) => sum + value, 0);
  const balance = income - expenses;
  const goalLabel = questions.goal.options.find(([value]) => value === answers.goal)?.[1] || '';
  const monthlyGoal = typeof answers.goalMonths === 'number' && answers.goalCost !== null
    ? Math.ceil(answers.goalCost / answers.goalMonths) : null;

  byId('report-title').textContent = 'Seu retrato financeiro';
  byId('report-subtitle').textContent = 'Mais do que números: veja por onde começar e o que pode melhorar aos poucos.';
  byId('steps-intro').textContent = 'Prioridades práticas a partir das suas respostas. Comece pela primeira e avance no seu ritmo.';
  byId('numbers-panel').hidden = false;
  byId('report-footnote').textContent = 'Os valores são estimativas. A página não salva suas respostas nem envia informações para um servidor.';
  byId('education-title').textContent = 'Sobre investimentos';
  byId('education-text').textContent = 'Este resultado é educativo e não indica produtos financeiros. Antes de investir, considere seu objetivo, prazo, possibilidade de resgate e tolerância a riscos.';

  byId('income-total').textContent = money(income);
  byId('expense-total').textContent = money(expenses);
  byId('balance-total').textContent = money(balance);
  byId('balance-card').classList.toggle('negative', balance < 0);
  renderExpenses();

  let portrait;
  if (income === 0 && expenses === 0) portrait = 'Você ainda não informou renda nem gastos próprios. Este é um ponto de partida para observar como o dinheiro entra e sai da sua rotina.';
  else if (balance > 0) portrait = 'Sua renda média é de ' + money(income) + ' e seus gastos estimados somam ' + money(expenses) + '. A sobra estimada é de ' + money(balance) + ' por mês.';
  else if (balance < 0) portrait = 'Seus gastos estimados superam a renda média em ' + money(-balance) + ' por mês. O primeiro foco é entender e reduzir essa diferença.';
  else portrait = 'Sua renda média e seus gastos estimados estão no mesmo nível. Ainda não aparece uma sobra mensal para imprevistos ou metas.';
  if (answers.debt === 'late') portrait += ' Você também informou pagamentos em atraso.';
  if (answers.reserve === 'no') portrait += ' Você ainda não tem uma reserva para imprevistos.';
  if (answers.reserve === 'yes') portrait += ' Você já tem algum dinheiro separado para imprevistos.';
  const largest = categories.reduce((best, category) => answers.expenses[category.id] > answers.expenses[best.id] ? category : best, categories[0]);
  if (expenses > 0) portrait += ' Entre as categorias, ' + largest.label.toLowerCase() + ' recebeu o maior valor informado.';
  byId('portrait-text').textContent = portrait;

  const strengths = [];
  if (balance > 0) strengths.push('Sua renda média supera os gastos informados.');
  if (answers.debt === 'none') strengths.push('Você não informou dívidas ou parcelas.');
  if (answers.reserve === 'yes') strengths.push('Você já separa algum dinheiro para imprevistos.');
  if (answers.tracking === 'always') strengths.push('Você acompanha seus gastos.');
  if (answers.goal !== 'none') strengths.push('Você já escolheu uma meta para orientar suas decisões.');
  if (!strengths.length) strengths.push('Você começou a olhar para seus números e prioridades.');
  fillList('strengths-list', strengths);

  const attention = [];
  if (balance < 0) attention.push('Os gastos estimados passam da renda média em ' + money(-balance) + '.');
  else if (balance === 0 && income > 0) attention.push('A estimativa não mostra sobra mensal.');
  if (answers.debt === 'late') attention.push('Há pagamentos em atraso para organizar.');
  else if (answers.debt === 'unknown') attention.push('A situação das dívidas ainda precisa ser conferida.');
  if (answers.reserve === 'no') attention.push('Você ainda não tem uma reserva para imprevistos.');
  else if (answers.reserve === 'unknown') attention.push('Você ainda não sabe se tem uma reserva disponível.');
  if (answers.tracking !== 'always') attention.push('Acompanhar gastos com mais frequência pode melhorar essa estimativa.');
  if (answers.stability === 'variable') attention.push('Sua renda varia; a sobra estimada pode mudar de um mês para outro.');
  if (monthlyGoal !== null && monthlyGoal > Math.max(0, balance)) attention.push('O valor mensal da meta supera a sobra estimada.');
  if (!attention.length) attention.push('Revise os valores de tempos em tempos: eles são aproximados.');
  fillList('attention-list', attention);

  if (answers.goal === 'none') {
    byId('goal-text').textContent = 'Você ainda não escolheu uma meta. Comece por algo concreto que gostaria de conquistar e descubra quanto custaria.';
  } else if (answers.goalCost === null) {
    byId('goal-text').textContent = 'Você escolheu “' + goalLabel + '”. O próximo passo é estimar o custo; com esse valor, ficará mais fácil definir quanto separar.';
  } else if (monthlyGoal === null) {
    byId('goal-text').textContent = 'Você escolheu “' + goalLabel + '” e estimou ' + money(answers.goalCost) + '. Defina um prazo para transformar essa ideia em uma meta mensal.';
  } else {
    let detail = 'Para “' + goalLabel + '”, você estimou ' + money(answers.goalCost) + '. Começando do zero, seria preciso separar cerca de ' + money(monthlyGoal) + ' por mês durante ' + answers.goalMonths + ' meses.';
    detail += balance > 0 && monthlyGoal <= balance
      ? ' Esse valor cabe na sobra informada, se ela se mantiver.'
      : ' Essa contribuição ainda não cabe na sobra estimada; considere ajustar o prazo, o valor ou o orçamento.';
    byId('goal-text').textContent = detail;
  }
  const next = [];
  if (balance < 0) next.push({ title: 'Abra espaço no orçamento', detail: 'Revise as categorias de gastos e busque reduzir ou compensar pelo menos ' + money(-balance) + ' por mês para chegar ao equilíbrio.', verse: 'cost' });
  if (answers.debt === 'late') next.push({ title: 'Organize os pagamentos em atraso', detail: 'Liste valores e vencimentos e procure entender opções de regularização que caibam no seu orçamento.', verse: 'debt' });
  else if (answers.debt === 'unknown') next.push({ title: 'Confira suas dívidas', detail: 'Reúna faturas e parcelas para saber o que já compromete sua renda.', verse: 'debt' });
  if (answers.tracking !== 'always') next.push({ title: 'Acompanhe os gastos por 30 dias', detail: 'Registre o que gastar e revise as categorias uma vez por semana. Isso torna os próximos ajustes mais claros.', verse: 'tracking' });
  if (answers.reserve === 'no') next.push({ title: 'Comece uma reserva para imprevistos', detail: balance > 0 ? 'Escolha um valor que caiba na sobra e separe-o regularmente.' : 'Depois de equilibrar o orçamento, comece com um valor possível e repita o hábito.', verse: 'reserve' });
  else if (answers.reserve === 'unknown') next.push({ title: 'Confira sua reserva', detail: 'Descubra quanto está realmente disponível para emergências e mantenha esse dinheiro separado de metas planejadas.', verse: 'reserve' });
  if (answers.difficulty === 'invest') next.push({ title: 'Aprenda antes de investir', detail: 'Estude liquidez, riscos e prazos. Compare as opções com seu objetivo e seu perfil antes de decidir.', verse: 'wisdom' });
  if (answers.goal === 'none') next.push({ title: 'Defina uma primeira meta', detail: 'Escolha algo com valor e prazo aproximados, mesmo que seja pequeno.', verse: 'priorities' });
  else if (monthlyGoal !== null && monthlyGoal <= Math.max(0, balance) && balance > 0) next.push({ title: 'Separe um valor para sua meta', detail: 'Use ' + money(monthlyGoal) + ' por mês como referência para “' + goalLabel + '” e revise o plano periodicamente.', verse: 'priorities' });
  else next.push({ title: 'Dê forma à sua meta', detail: 'Pesquise o custo ou ajuste o prazo até encontrar um valor mensal possível.', verse: 'priorities' });
  if (next.length < 3) next.push({ title: 'Revise seus números todo mês', detail: 'Atualize a estimativa quando a renda ou os gastos mudarem.', verse: 'planning' });
  if (next.length < 3) next.push({ title: 'Continue aprendendo', detail: 'Explore como objetivos, prazo, risco e liquidez se relacionam antes de escolher um investimento.', verse: 'wisdom' });
  renderSteps(next);
  showReport();
}

function pdfFilenameFor(name) {
  const slug = name.normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60)
    .replace(/-+$/g, '');
  return 'relatorio-financeiro-' + (slug || 'participante') + '.pdf';
}

async function downloadPdf(participantName) {
  const status = byId('download-status');
  const downloadButton = byId('download-pdf');
  status.textContent = '';
  downloadButton.disabled = true;
  downloadButton.textContent = 'Gerando PDF...';
  try {
    if (!window.PDFLib) throw new Error('Biblioteca de PDF indisponível');
    const { PDFDocument, StandardFonts, rgb } = window.PDFLib;
    const pdf = await PDFDocument.create();
    pdf.setTitle('Relatório financeiro de ' + participantName);
    pdf.setSubject('Resumo financeiro pessoal e próximos passos');
    const regular = await pdf.embedFont(StandardFonts.Helvetica);
    const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
    const pageWidth = 595.28;
    const pageHeight = 841.89;
    const margin = 48;
    const bodyWidth = pageWidth - margin * 2;
    const ink = rgb(0.11, 0.23, 0.17);
    const muted = rgb(0.37, 0.48, 0.39);
    const green = rgb(0.09, 0.43, 0.31);
    const lineColor = rgb(0.84, 0.89, 0.85);
    let page;
    let y;

    function pdfText(value) {
      return String(value).normalize('NFC')
        .replace(/\u00a0/g, ' ')
        .replace(/[“”]/g, '"')
        .replace(/[‘’]/g, "'")
        .replace(/[–—−]/g, '-')
        .replace(/…/g, '...')
        .replace(/[^\x20-\x7E\xA0-\xFF]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    }

    function wrap(value, font, size, width) {
      const words = pdfText(value).split(' ').filter(Boolean);
      const lines = [];
      let current = '';
      for (const word of words) {
        const candidate = current ? current + ' ' + word : word;
        if (font.widthOfTextAtSize(candidate, size) <= width) {
          current = candidate;
          continue;
        }
        if (current) lines.push(current);
        current = '';
        for (const character of word) {
          if (font.widthOfTextAtSize(current + character, size) > width && current) {
            lines.push(current);
            current = '';
          }
          current += character;
        }
      }
      if (current) lines.push(current);
      return lines;
    }

    function addPage() {
      page = pdf.addPage([pageWidth, pageHeight]);
      y = pageHeight - margin;
      page.drawText('RELATÓRIO FINANCEIRO PESSOAL', { x: margin, y, size: 9, font: bold, color: green });
      y -= 17;
      page.drawLine({ start: { x: margin, y }, end: { x: pageWidth - margin, y }, thickness: 1, color: lineColor });
      y -= 25;
    }

    function ensureSpace(height) {
      if (y - height < 62) addPage();
    }

    function paragraph(value, options = {}) {
      const font = options.font || regular;
      const size = options.size || 10;
      const lineHeight = options.lineHeight || 13;
      const x = options.x || margin;
      const width = options.width || bodyWidth;
      const color = options.color || ink;
      for (const line of wrap(value, font, size, width)) {
        ensureSpace(lineHeight);
        page.drawText(line, { x, y, size, font, color });
        y -= lineHeight;
      }
      y -= options.after === undefined ? 4 : options.after;
    }

    function heading(value) {
      ensureSpace(32);
      y -= 3;
      page.drawText(pdfText(value), { x: margin, y, size: 12, font: bold, color: green });
      y -= 17;
    }

    function bulletList(id) {
      for (const item of byId(id).querySelectorAll('li')) paragraph('- ' + item.textContent, { x: margin + 8, width: bodyWidth - 8, after: 3 });
      y -= 4;
    }

    addPage();
    page.drawText(pdfText(byId('report-title').textContent), { x: margin, y, size: 20, font: bold, color: ink });
    y -= 23;
    paragraph('Preparado para: ' + participantName, { font: bold, size: 10, color: green, after: 3 });
    paragraph(byId('report-subtitle').textContent, { size: 9, color: muted, after: 8 });

    heading('Seus próximos passos');
    for (const [index, item] of [...byId('recommendations-list').querySelectorAll('li')].entries()) {
      const title = (index + 1) + '. ' + item.querySelector('strong').textContent;
      const detail = item.querySelector('p').textContent;
      const quote = item.querySelector('blockquote').textContent;
      const reference = item.querySelector('cite').textContent;
      const blockHeight = 17 + wrap(detail, regular, 10, bodyWidth - 13).length * 13
        + wrap(quote, regular, 9, bodyWidth - 13).length * 12 + 25;
      ensureSpace(blockHeight);
      paragraph(title, { font: bold, size: 10.5, after: 2 });
      paragraph(detail, { x: margin + 13, width: bodyWidth - 13, after: 4 });
      paragraph(quote, { x: margin + 13, width: bodyWidth - 13, size: 9, lineHeight: 12, color: muted, after: 1 });
      paragraph(reference, { x: margin + 13, width: bodyWidth - 13, size: 8.5, font: bold, color: green, after: 9 });
    }

    heading('Onde você está hoje');
    paragraph(byId('portrait-text').textContent);
    heading('Pontos fortes');
    bulletList('strengths-list');
    heading('Pontos de atenção');
    bulletList('attention-list');
    heading('Seu objetivo');
    paragraph(byId('goal-text').textContent);
    if (answers.incomeMode === 'monthly') {
      const totals = 'Renda média: ' + byId('income-total').textContent
        + '  |  Gastos médios: ' + byId('expense-total').textContent
        + '  |  Saldo estimado: ' + byId('balance-total').textContent;
      const expenseLines = categories.filter(category => answers.expenses[category.id] > 0)
        .map(category => category.label + ': ' + money(answers.expenses[category.id]));
      const categorySummary = expenseLines.length ? expenseLines.join('  |  ') : 'Nenhum gasto próprio informado';
      ensureSpace(28 + wrap(totals, bold, 9.5, bodyWidth).length * 13
        + wrap(categorySummary, regular, 9, bodyWidth).length * 12);
      heading('Seu panorama em números');
      paragraph(totals, { font: bold, size: 9.5, after: 3 });
      paragraph('Categorias: ' + categorySummary, { size: 9, lineHeight: 12, color: muted, after: 5 });
    }
    ensureSpace(25 + wrap(byId('education-text').textContent, regular, 10, bodyWidth).length * 13);
    heading(byId('education-title').textContent);
    paragraph(byId('education-text').textContent);
    ensureSpace(28);
    paragraph('Este resultado é educativo e não indica produtos financeiros. Os trechos bíblicos são da NAA; as sugestões práticas são reflexões inspiradas nessas passagens.', { size: 8.5, color: muted });

    const pages = pdf.getPages();
    for (const [index, item] of pages.entries()) {
      item.drawLine({ start: { x: margin, y: 47 }, end: { x: pageWidth - margin, y: 47 }, thickness: 0.8, color: lineColor });
      item.drawText('Página ' + (index + 1) + ' de ' + pages.length, { x: pageWidth - margin - 71, y: 32, size: 8, font: regular, color: muted });
    }
    const bytes = await pdf.save();
    const url = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = pdfFilenameFor(participantName);
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 60000);
  } catch (error) {
    console.error('Falha ao gerar PDF:', error);
    status.textContent = 'Não foi possível gerar o PDF. Tente novamente.';
  } finally {
    downloadButton.disabled = false;
    downloadButton.textContent = 'Baixar relatório em PDF';
  }
}

byId('review').addEventListener('click', () => { currentIndex = 0; renderQuestion(); });
byId('download-pdf').addEventListener('click', () => {
  byId('download-status').textContent = '';
  byId('name-dialog').showModal();
  byId('participant-name').focus();
});
byId('cancel-download').addEventListener('click', () => byId('name-dialog').close());
byId('participant-name').addEventListener('input', event => event.currentTarget.setCustomValidity(''));
byId('name-dialog').addEventListener('close', () => byId('name-form').reset());
byId('name-form').addEventListener('submit', event => {
  event.preventDefault();
  const field = byId('participant-name');
  const name = field.value.trim().replace(/\s+/g, ' ');
  if (!name) {
    field.setCustomValidity('Digite um nome para continuar.');
    field.reportValidity();
    return;
  }
  byId('name-dialog').close();
  downloadPdf(name);
});
renderQuestion();
