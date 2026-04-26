export const sourcesData = [
    {
        id: 'u1331',
        name: "L'unité 1331",
        link: 'https://curie.fr/unite/u1331'
    },
    {
        id: 'sysbio',
        name: "L'équipe SYSBIO",
        link: 'https://curie.fr/equipe/barillot'
    },
    {
        id: 'wikipedia-bioinfo',
        name: 'Wikipédia de la bioinformatique',
        link: 'https://fr.wikipedia.org/wiki/Bio-informatique'
    },
    {
        id: 'github-sysbio',
        name: 'GitHub SysBio-Curie',
        link: 'https://github.com/sysbio-curie'
    },
    {
        id: 'github-maboss',
        name: 'GitHub MaBoSS',
        link: 'https://github.com/sysbio-curie/MaBoSS'
    },
    {
        id:'github-colomoto-pymaboss',
        name: 'GitHub Colomoto-PyMaBoSS',
        link: 'https://github.com/colomoto/pyMaboss'
    },
    {
        id:'branches-github-doc',
        name: 'Branches d\'un répertoire - Site officiel de Github',
        link: 'https://docs.github.com/fr/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches'
    },
    {
        id: 'doxygen',
        name: 'Site de Doxygen',
        link: 'https://www.doxygen.nl/'
    },
    {
        id:'clang-uml',
        name: 'Site de Clang-UML',
        link: 'https://clang-uml.github.io/'
    },
    {
        id:'normes-code',
        name: 'Normes de codage',
        link: 'https://fr.wikipedia.org/wiki/R%C3%A8gles_de_codage'
    }
]

export const getSource = (id) => sourcesData.find(source => source.id === id);