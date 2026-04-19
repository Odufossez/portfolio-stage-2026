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
  },
  {
    id:'rebase',
    title: 'La commande Rebase',
    content: 'Un rebase va récupérer l\'historique de la branche cible pour le fusionner avec celui de la branche courante. ' +
        'Cette commande applique dans l\'ordre ' +
        'chronologique les changements de la branche cible sur la branche courante.'
  },
  {
    id:'stash',
    title: 'La commande Stash',
    content: 'Cette commande va stocker les changements de la branche courante dans un stash. ' +
        'Ce serait comme mettre dans une pile "à appliquer plus tard" les changements. Ceux-ci n\'apparaissent donc plus dans la branche courante. ' +
        'Ils peuvent être rétabli à tout moment en utilisant la commande "git stash apply".'
  },
  {
    id: 'push',
    title: 'La commande Push',
    content: 'La commande "push" va permettre d\'envoyer les modifications dans le git. Celles-ci doivent avoir été commit au préalable.' +
        'On parle de modifications "poussées" pour dire qu\'elles ont été mise en ligne.'
  },
  {
    id: 'commit',
    title: 'La commande Commit',
    content: 'Commit permet de préparer les modifications à être envoyées dans le git. Il est accompagné d\'un message explicatif.'
  },
  {
    id: 'pull',
    title: 'La commande Pull',
    content: 'Pull d\'intégrer les modifications d\'un dépot distant dans la branche actuelle'
  },
  {
    id:'fork',
    title:'La commande Fork',
    content:'Faire un "fork" d\'un dépôt va permettre de le copier dans nos propre repository afin que les modifications que l\'on va y faire n\'affecte pas le projet originel.'
  }
];

export const getInfobulle = (id) => {
  if (!id) return null;
  const normalizedId = id.toLowerCase();
  return infobullesData.find(item => item.id.toLowerCase() === normalizedId);
};
