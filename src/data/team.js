export const teamData = [
  {
    id: 'barillot',
    name: "Emmanuel BARILLOT",
    description: "Directeur d'unité de recherche et co-directeur de mon stage.",
    photo: new URL('@/assets/team/barillot.jpg', import.meta.url).href,
    relationship: ""
  },
  {
    id: 'calzone',
    name: "Laurence CALZONE",
    description: "Ingénieure en recherche et ma co-tutrice pendant ce stage.",
    photo: new URL('@/assets/team/calzone.webp', import.meta.url).href,
    relationship: "tutor"
  },
  {
    id: 'stoll',
    name: "Gautier STOLL",
    description: "Bio-informaticien et mon tuteur pendant ce stage. Il est à l'origine du logiciel MaBoSS, sur lequel j'ai eu à travailler.",
    photo: new URL('@/assets/team/stoll.png', import.meta.url).href,
    relationship: "tutor"
  },
  {
    id: 'noel',
    name: "Vincent NOEL",
    description: "Ingénieur en recherche. Il a fait une refonte de MaBoSS pour rendre le code plus clair et plus optimisé. J'ai eu à travailler avec lui régulièrement.",
    photo: new URL('@/assets/team/noel.jpg', import.meta.url).href,
    relationship: "close"
  },
  {
    id: 'gaspard',
    name: "Lucie GASPARD-BOULINC",
    description: "Doctorante. Elle utilise souvent MaBoSS donc j'ai eu à lui poser des questions. Egalement, elle s'est beaucoup investie pour que je sois bien intégré.",
    photo: new URL('@/assets/team/gaspard-boulinc.jpg', import.meta.url).href,
    relationship: "close"
  },
  {
    id: 'pankaew',
    name: "Saran PANKAEW",
    description: "Chercheur post-doctorant. Il m'a permis de mieux comprendre comment fonctionnait MaBoSS et ce qu'on attendait de ce logiciel. De même que Lucie, il m'a aidé à m'intégrer.",
    photo: new URL('@/assets/team/pankaew.png', import.meta.url).href,
    relationship: "close"
  },
  {
    id: 'kaufmann',
    name: "Emma Kaufmann",
    description: "Assistante administrative. Elle s'est assurée que mon intégration et mon arrivée se passent bien.",
    photo: new URL('@/assets/team/kaufmann.jpg', import.meta.url).href,
    relationship: "close"
  }
];

export const getTeamMember = (id) => {
  const normalizedId = id.toLowerCase();
  return teamData.find(member => member.id.toLowerCase() === normalizedId);
};
