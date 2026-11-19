export interface ChapterMeta {
  id: string;
  n: string;
  title: string;
  bg?: string;
  fg?: string;
  /** Não anima o fundo do body (o capítulo cuida da própria transição). */
  noBg?: boolean;
}

export const chapters = {
  intro: { id: 'c1', n: '01', title: 'O começo', bg: '#101010', fg: '#F4F0E8' },
  history: { id: 'c2', n: '02', title: 'A origem', bg: '#D8CBB5', fg: '#101010' },
  structure: { id: 'c3', n: '03', title: 'A estrutura', bg: '#1c1c1c', fg: '#F4F0E8' },
  present: { id: 'c4', n: '04', title: 'O presente', bg: '#2a2a2a', fg: '#F4F0E8' },
  resistance: { id: 'c5', n: '05', title: 'Resistência', bg: '#356C51', fg: '#F4F0E8' },
  future: { id: 'c6', n: '06', title: 'Transformação', bg: '#F4F0E8', fg: '#101010' },
  futureClose: { id: 'c6b', n: '06', title: 'Transformação', bg: '#101010', fg: '#F4F0E8' },
  epilogue: { id: 'c7', n: '07', title: 'Epílogo', noBg: true },
} satisfies Record<string, ChapterMeta>;

export const timeline = [
  { date: '1500', text: 'Chegada dos portugueses. Começa a colonização e a exploração do território e das pessoas que nele viviam.' },
  { date: 'Séc. XVI–XIX', text: 'O tráfico transatlântico traz quase 5 milhões de africanos escravizados ao Brasil, o maior destino do tráfico nas Américas.' },
  { date: '1888', text: 'A Lei Áurea abole a escravidão. O Brasil foi o último país das Américas a fazê-lo.' },
  { date: 'Depois', text: 'Os libertos ficaram sem terra, sem escola e sem políticas de inclusão. A desigualdade passou de geração em geração.' },
];

export const structureSteps = [
  { title: 'As leis podem mudar. Mas as estruturas não desaparecem automaticamente.' },
  { title: 'Um bloco de cada vez.', text: 'Quem começou com menos acesso à terra, à escola e ao crédito transmitiu menos aos filhos.' },
  { title: 'Ninguém precisa querer discriminar.', text: 'As regras de instituições e relações sociais, mesmo quando parecem neutras, podem reproduzir desvantagens antigas. Isso é racismo estrutural.' },
];
export const blockHeights = [30, 55, 40, 80, 50, 95, 60, 75];

export const stats = [
  { value: 77.1, text: 'das pessoas assassinadas no Brasil em 2021 eram negras (pretas e pardas).', source: 'Fonte: Atlas da Violência 2023, Ipea e FBSP (dados de 2021)' },
  { value: 55.5, text: 'da população se declara preta ou parda, mas a presença negra é bem menor em cargos de poder e renda alta.', source: 'Fonte: Censo Demográfico 2022, IBGE' },
];

export const thinkers = [
  { name: 'Capoeira', role: 'Cultura', text: 'Nascida da resistência de africanos escravizados. Patrimônio Cultural do Brasil (Iphan, 2008) e da Humanidade (Unesco, 2014).' },
  { name: 'Carolina Maria de Jesus', role: 'Escritora', text: 'Catadora de papel e escritora. Quarto de Despejo (1960) mostrou a favela com a voz de quem vive nela.' },
  { name: 'Lélia Gonzalez', role: 'Filósofa e antropóloga', text: 'Pensou o Brasil a partir do feminismo negro e da amefricanidade.' },
  { name: 'Milton Santos', role: 'Geógrafo', text: 'Repensou o espaço e a globalização. Recebeu o Prêmio Vautrin Lud em 1994.' },
  { name: 'Machado de Assis', role: 'Escritor', text: 'Fundador da Academia Brasileira de Letras, filho de pessoas pobres e descendente de pessoas escravizadas.' },
  { name: 'Samba e ancestralidade', role: 'Cultura', text: 'Ritmos, terreiros e saberes que mantiveram viva a memória africana no Brasil.' },
];

export const actions = [
  'Reconheça o racismo quando ele aparece, inclusive nas piadas e nos “elogios”.',
  'Leia, ouça e cite autoras e autores negros.',
  'Questione quem está ausente na sua escola, empresa e reunião.',
  'Apoie negócios, cultura e políticas de inclusão, como as cotas (Lei 12.711/2012).',
  'Denuncie: injúria racial e racismo são crimes (Lei 7.716/1989). Ligue 100 ou 190.',
];

export const djamila = {
  name: 'Djamila Ribeiro',
  question: 'Quem tem direito à voz?',
  intro: 'Djamila Ribeiro é filósofa, escritora e uma das principais intelectuais brasileiras no debate contemporâneo sobre questões raciais, gênero e desigualdade social.',
  more: 'Por meio de suas obras e reflexões, contribui para ampliar o debate sobre lugar de fala, estruturas de poder e a importância de reconhecer as diferentes experiências sociais.',
  books: 'Entre seus livros: O que é lugar de fala? (2017) e Pequeno manual antirracista (2019).',
  closing: 'Compreender é o primeiro passo. Transformar é uma responsabilidade coletiva.',
};
