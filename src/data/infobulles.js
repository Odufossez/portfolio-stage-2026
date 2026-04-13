export const infobullesData = [
  {
    id: 'maboss',
    title: 'MaBoSS',
    content: 'Markovian Boolean Stochastic Logiciel de modélisation booléenne basé sur des simulations stochastiques pour étudier les processus biologiques.'
  },
  {
    id: 'stochastique',
    title: 'Stochastique',
    content: 'Se dit d\'un processus dont l\'évolution est aléatoire dans le temps, par opposition à un processus déterministe.'
  },
  {
    id: 'uml',
    title: 'Diagramme UML',
    content: 'Moyen de visualiser des systèmes et des logiciels à l\'aide du langage UML (Unified Modeling Language).'
  },
  {
    id:'ctl',
    title: 'Computation Tree Logic',
    content: ''
  },
  {
    id: 'pctl',
    title: 'Probabilistic Computation Tree Logic',
    content: ''
  },
  {
    id:'csl',
    title: 'Computational Stochastic Logic',
    content: ''
  },
  {
    id:'ltl',
    title: 'Linear Temporal Logic',
    content: ''
  },
  {
    id:'dtmc',
    title: 'Discrete Time Markov Chain',
    content: ''
  },
  {
    id:'pta',
    title:'Probabilistic Timed Automata',
    content: ''
  },
  {
    id:'mdp',
    title:'Markov Decision Process',
    content: ''
  }
];

export const getInfobulle = (id) => {
  if (!id) return null;
  const normalizedId = id.toLowerCase();
  return infobullesData.find(item => item.id.toLowerCase() === normalizedId);
};
