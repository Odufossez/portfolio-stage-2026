export const infobullesData = [
  {
    id: 'maboss',
    title: 'MaBoSS',
    content: 'Logiciel de modélisation booléenne basé sur des simulations stochastiques pour étudier les processus biologiques.'
  },
  {
    id: 'stochastique',
    title: 'Stochastique',
    content: 'Se dit d\'un processus dont l\'évolution est aléatoire dans le temps, par opposition à un processus déterministe.'
  }
];

export const getInfobulle = (id) => {
  if (!id) return null;
  const normalizedId = id.toLowerCase();
  return infobullesData.find(item => item.id.toLowerCase() === normalizedId);
};
