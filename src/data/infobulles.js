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
  },
  {
    id: 'pymaboss',
    title: 'pyMaboss',
    content: 'Interface python pour MaBoSS permettant de traiter graphiquement les résultats dans un notebook jupyter.'
  },
  {
    id: 'noeuds',
    title: 'Noeuds ou nodes',
    content:'Dans le cadre de la simulation de MaBoSS, un noeud ou un node est un vecteur de booléen dont chaque composant' +
        ' représente l\'activation ou non d\'un gène, d\'une protéine... Ces vecteurs permettent de caractériser par la ' +
        'suite des états.'
  },
  {
    id:'mutate',
    title:'Muter (dans le contexte de MaBoSS)',
    content: 'Ce terme fait référence au fait de modifier l\'état initial d\'un composant pour modifier l\'issue d\'une simulation.'
  },
  {
    id:'repo',
    title:'Repository ou répertoire Github',
    content:'Un repository ou repo Github est l\'endroit où tout le code, les images, les fichiers d\'un projet sont stockés ainsi que leur historique de modification'
  }
];

export const getInfobulle = (id) => {
  if (!id) return null;
  const normalizedId = id.toLowerCase();
  return infobullesData.find(item => item.id.toLowerCase() === normalizedId);
};
