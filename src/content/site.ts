import type { ImageKey } from './images'

/** Dados gerais (FICTÍCIOS — troque pelos dados reais do cliente). */
export const SITE = {
  name: 'Escola de Música Compasso',
  shortName: 'Compasso',
  tagline: 'Aulas de piano, violão, guitarra, canto, bateria e musicalização infantil, para todas as idades.',
  description:
    'Escola de música em Goiânia com aulas individuais e em grupo de piano, violão, guitarra, canto, bateria e musicalização infantil. Agende uma aula experimental.',
  phone: '(62) 3000-0000',
  whatsapp: '(62) 99999-0000',
  whatsappNumber: '5562999990000',
  email: 'contato@exemplo.com.br',
  instagram: '@compasso.musica',
  address: {
    street: 'Rua Exemplo, 555',
    district: 'Setor Bueno',
    city: 'Goiânia — GO',
    mapQuery: 'Setor Bueno, Goiânia - GO',
  },
  hours: 'Segunda a sexta, 8h às 21h · Sábado, 8h às 14h',
} as const

/** Texto obrigatório nos sites de case. */
export const DEMO_NOTICE =
  'Site demonstrativo. Escola, professores, preços, depoimentos e contatos são fictícios.'
export const DEV_CREDIT = {
  name: 'Runa Web',
  text: 'Desenvolvido por',
  url: 'https://runaweb.com.br',
} as const

export type Course = {
  slug: string
  name: string
  ages: string
  format: string
  price: string
  text: string
  learn: string[]
  image: ImageKey
  /** Frequência (Hz) da nota tocada na tecla do topo da página. */
  note: number
  noteName: string
}

/** Cursos e preços FICTÍCIOS para o case. */
export const COURSES: Course[] = [
  {
    slug: 'piano',
    name: 'Piano e teclado',
    ages: 'a partir de 6 anos',
    format: 'Individual, 50 min por semana',
    price: 'R$ 340/mês',
    text: 'Leitura de partitura, técnica e repertório do clássico ao pop. Você escolhe as músicas junto com o professor.',
    learn: [
      'Leitura de partitura e cifra',
      'Técnica de mãos independentes',
      'Acompanhamento de canções',
      'Preparação para provas de conservatório',
    ],
    image: 'piano',
    note: 261.63,
    noteName: 'Dó',
  },
  {
    slug: 'violao',
    name: 'Violão',
    ages: 'a partir de 8 anos',
    format: 'Individual ou dupla, 50 min por semana',
    price: 'R$ 290/mês',
    text: 'Do primeiro acorde ao dedilhado. Repertório de MPB, sertanejo, gospel ou o que você gosta de ouvir.',
    learn: [
      'Acordes e ritmos básicos',
      'Dedilhado e batidas',
      'Cifras e tablaturas',
      'Tocar e cantar ao mesmo tempo',
    ],
    image: 'violao',
    note: 293.66,
    noteName: 'Ré',
  },
  {
    slug: 'guitarra',
    name: 'Guitarra',
    ages: 'a partir de 10 anos',
    format: 'Individual, 50 min por semana',
    price: 'R$ 310/mês',
    text: 'Riffs, solos, timbres e improvisação. Inclui aulas de banda com outros alunos uma vez por mês.',
    learn: ['Escalas e solos', 'Pedais e timbres', 'Improvisação', 'Prática em banda'],
    image: 'guitarra',
    note: 329.63,
    noteName: 'Mi',
  },
  {
    slug: 'canto',
    name: 'Canto',
    ages: 'a partir de 10 anos',
    format: 'Individual, 50 min por semana',
    price: 'R$ 320/mês',
    text: 'Respiração, afinação e cuidado com a voz. Para quem quer cantar melhor, no coral, na igreja ou no palco.',
    learn: ['Respiração e apoio', 'Afinação e percepção', 'Extensão vocal', 'Interpretação'],
    image: 'canto',
    note: 349.23,
    noteName: 'Fá',
  },
  {
    slug: 'bateria',
    name: 'Bateria',
    ages: 'a partir de 7 anos',
    format: 'Individual, 50 min por semana',
    price: 'R$ 310/mês',
    text: 'Coordenação, leitura rítmica e grooves de vários estilos, em sala com isolamento acústico.',
    learn: ['Coordenação motora', 'Leitura rítmica', 'Grooves de rock, pop e samba', 'Viradas e dinâmica'],
    image: 'bateria',
    note: 392.0,
    noteName: 'Sol',
  },
  {
    slug: 'musicalizacao',
    name: 'Musicalização infantil',
    ages: '3 a 6 anos',
    format: 'Turmas de até 8 crianças, 45 min por semana',
    price: 'R$ 220/mês',
    text: 'Brincadeiras com ritmo, canto e pequenos instrumentos que desenvolvem atenção, coordenação e convivência.',
    learn: [
      'Ritmo e pulsação',
      'Canções e brincadeiras',
      'Percussão e flauta doce',
      'Apresentação de fim de semestre',
    ],
    image: 'infantil',
    note: 440.0,
    noteName: 'Lá',
  },
]

/** `course` é o slug do curso principal: define a cor do cartão do professor. */
export const TEACHERS = [
  {
    name: 'Ana Ribeiro',
    role: 'Piano e musicalização',
    course: 'piano',
    bio: 'Bacharel em piano pela UFG, 12 anos de sala de aula.',
  },
  {
    name: 'Diego Prado',
    role: 'Violão e guitarra',
    course: 'violao',
    bio: 'Guitarrista de estúdio, toca em bandas da cena goiana.',
  },
  {
    name: 'Lara Menezes',
    role: 'Canto',
    course: 'canto',
    bio: 'Cantora e fonoaudióloga, especialista em saúde vocal.',
  },
  {
    name: 'Tiago Alves',
    role: 'Bateria',
    course: 'bateria',
    bio: 'Licenciado em música, foi baterista de musicais em São Paulo.',
  },
]

/** Textos da página inicial. */
export const HOME = {
  eyebrow: 'Escola de música · Setor Bueno, Goiânia',
  title: 'Escolha uma tecla.',
  lead: 'Aulas de música para crianças a partir de 3 anos, adolescentes e adultos. Cada tecla é um curso, e a primeira aula é grátis.',
  keysHint: 'Toque para ouvir a nota e conhecer o curso',
  coursesTitle: 'Seis cursos, uma escala',
  coursesLead: 'Mensalidade com uma aula por semana. Matrícula gratuita e sem fidelidade.',
  stepsTitle: 'Como começar, em quatro tempos',
  teachersTitle: 'Quem dá aula',
  teachersLead:
    'Todos formados em música e com experiência de palco. Cada aluno tem o mesmo professor do começo ao fim.',
  recitalTitle: 'Recitais duas vezes por ano',
  recitalLead:
    'Em junho e dezembro, alunos de todas as idades sobem ao palco do teatro do bairro. A participação é opcional e gratuita para a família.',
  recitalDates: [
    { month: 'Jun', label: 'Recital de inverno' },
    { month: 'Dez', label: 'Recital de fim de ano' },
  ],
  ctaTitle: 'A primeira aula é por nossa conta.',
  ctaText:
    '30 minutos com o professor, no instrumento que você escolher. Você preenche, a mensagem abre pronta no WhatsApp.',
} as const

/** Posição do curso na escala (0 = Dó). Define a cor do curso em todo o site (classes .tone-0 a .tone-6). */
export const toneOf = (slug: string) =>
  Math.max(
    0,
    COURSES.findIndex((c) => c.slug === slug),
  )

export const STEPS = [
  {
    title: 'Agende a aula experimental',
    text: 'Gratuita, com 30 minutos, no instrumento que você quer aprender.',
  },
  { title: 'Conheça o professor', text: 'Ele avalia seu nível, entende seus objetivos e sugere um plano.' },
  { title: 'Escolha o horário fixo', text: 'Uma vez por semana, no dia e hora que couberem na sua rotina.' },
  { title: 'Toque no recital', text: 'Duas apresentações por ano, opcionais, para família e amigos.' },
]

/** Depoimentos ILUSTRATIVOS para o case. Substitua por avaliações reais (com autorização). */
export const TESTIMONIALS = [
  {
    text: 'Comecei o piano aos 52 anos. Em seis meses já tocava as músicas que eu ouvia com a minha mãe.',
    name: 'Regina F.',
    detail: 'aluna de piano',
  },
  {
    text: 'Minha filha entrou na musicalização com 4 anos e hoje, com 8, estuda violão. Ela ama a escola.',
    name: 'Marcos T.',
    detail: 'pai de aluna',
  },
]

export const FAQ: [string, string][] = [
  [
    'Preciso ter instrumento em casa?',
    'Para começar, não. Você pode usar a escola para estudar em horários livres. Depois, ajudamos a escolher um instrumento dentro do seu orçamento.',
  ],
  [
    'Qual a idade mínima?',
    'A musicalização infantil começa aos 3 anos. Os cursos de instrumento começam entre 6 e 10 anos, conforme o instrumento.',
  ],
  [
    'Tem contrato de fidelidade?',
    'Não. A matrícula é mensal; basta avisar com 30 dias de antecedência para cancelar.',
  ],
  [
    'Posso repor uma aula que perdi?',
    'Sim. Avisando com 24 horas de antecedência, você remarca a aula dentro do mesmo mês.',
  ],
]
