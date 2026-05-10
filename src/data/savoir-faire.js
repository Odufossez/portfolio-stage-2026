export const savoirFaire = [
    {
        id: 'contribution-opensource',
        classification: 'theme',
        color: '#5d5c5c',
        title: 'Contribuer à des projets open source',
        subs: [
            'github-usage'
        ]
    },
    {
        id: 'github-usage',
        classification: 'sub-theme',
        title: 'Utiliser GitHub',
        subs: [
            'branches',
            'pull-requests',
            'fork',
            'commits'
        ]
    },
    {
        id: 'branches',
        classification: 'root',
        title: 'Gérer des branches',
    },
    {
        id: 'pull-requests',
        classification: 'root',
        title: 'Créer une pull-request',
    },
    {
        id: 'fork',
        classification: 'root',
        title: 'Gérer une fork',
    },
    {
        id: 'commits',
        classification: 'root',
        title: 'Faire des commits de qualité',
    },
    {
        id: 'documentation',
        classification: 'theme',
        color: '#b2876a',
        title: 'Écrire de la documentation',
        subs: [
            'generalities-on-doc',
        ]
    },
    {
        id: 'coding-python',
        classification: 'theme',
        color: '#ff6300',
        title: 'Coder en Python',
        subs: [
            'unit-tests',
            'jupyter-notebooks',
            'module-creation',
            'respect-normes'
        ]
    },
    {
        id: 'respect-normes',
        classification: 'sub-theme',
        title: 'Respecter des normes',
        subs: [
            'know-standards-python'
        ]
    },
    {
        id: 'module-creation',
        classification: 'sub-theme',
        title: 'Créer des modules Python',
        subs: [
            'classes',
            'exceptions'
        ]
    },
    {
        id: 'exceptions',
        classification: 'root',
        title: 'Créer des exceptions'
    },
    {
      id: 'classes',
      classification: 'root',
      title: 'Programmer Orienté Objet en Python'
    },
    {
        id: 'algorithme',
        classification: 'theme',
        color: '#8c4d4d',
        title: 'Réaliser des algorithmes',
        subs: [
            'flow-charts',
            'parser',
            'data-treatment'
        ]
    },
    {
        id: 'flow-charts',
        classification: 'sub-theme',
        title: 'Utiliser des flow charts',
        subs: [
            'conceive-flowchart',
            'code-flowchart',
        ]
    },
    {
        id: 'conceive-flowchart',
        classification: 'root',
        title: 'Concevoir un flowchart',
    },
    {
        id: 'code-flowchart',
        classification: 'root',
        title: 'Coder depuis un flowchart',
    },
    {
        id: 'unit-tests',
        classification: 'sub-theme',
        title: 'Réaliser des tests unitaires',
        subs: [
            'checking_exceptions',
            'checking_no_exceptions',
            'conceive-test-samples',
            'conception-bouchons',
            'writing-assertions'
        ]
    },
    {
      id:'writing-assertions',
      classification: 'root',
      title: 'Rédiger des assertions',
    },
    {
        id: 'conception-bouchons',
        classification: 'root',
        title: 'Concevoir des bouchons',
    },
    {
        id: 'jupyter-notebooks',
        classification: 'sub-theme',
        title: 'Utiliser Jupyter notebooks',
        subs: [
            'jupyter-pymaboss',
            'data-visualization',
        ]
    },
    {
      id: 'know-standards-python',
      classification: 'root',
      title: 'Connaitre les standards Python',
    },
    {
        id: 'generalities-on-doc',
        classification: 'sub-theme',
        title: 'Généralités sur la documentation',
        subs: [
            'tools-for-doc',
            'being-communicant'
        ]
    },
    {
        id: 'tools-for-doc',
        classification: 'root',
        title: 'Utiliser des outils pour la documentation',
    },
    {
        id: 'being-communicant',
        classification: 'root',
        title: 'Bien communiquer avec les autres'
    },
    {
        id: 'parser',
        classification: 'sub-theme',
        title: 'Concevoir un parser',
        subs: [
            'regex',
            'parsing-logical-expression',
        ]
    },
    {
        id: 'parsing-logical-expression',
        classification: 'root',
        title: 'Gérer des expressions logiques',
    },
    {
        id: 'jupyter-pymaboss',
        classification: 'root',
        title: 'Utiliser Jupyter notebooks pour pyMaboss',
    },
    {
        id: 'data-visualization',
        classification: 'root',
        title: 'Visualiser et traiter des données avec pandas et numpy'
    },
    {
        id: 'checking_exceptions',
        classification: 'root',
        title: 'Vérifier la levée d\'exceptions'
    },
    {
        id: 'conceive-test-samples',
        classification: 'root',
        title: 'Concevoir des échantillons de tests'
    },
    {
        id: 'checking_no_exceptions',
        classification: 'root',
        title: 'Vérifier qu\'un échantillon ne lève pas d\'exception'
    },
    {
        id: 'regex',
        classification: 'root',
        title: 'REGEX',
    },
    {
        id: 'data-treatment',
        classification: 'sub-theme',
        title: 'Traiter des données',
        subs: [
            'data-treatment-python',
            'data-treatment-pandas',
            'know-what-data-use'
        ]
    },

    {
        id: 'data-treatment-python',
        title: 'Traiter des données en Python',
        classification: 'root',
    },
    {
        id: 'data-treatment-pandas',
        title: 'Traiter des données avec pandas',
        classification: 'root',
    },
    {
        id: 'know-what-data-use',
        title: 'Savoir quelles données utiliser',
        classification: 'root',
    },
    {
        id: 'answer-needs',
        title: 'Répondre aux besoins',
        classification: 'theme',
        subs: [
            'cahier-des-charges',
            'recherche-projet',
        ],
        color: '#4fb1ec',
    },
    {
        id: 'cahier-des-charges',
        title: 'Concevoir un cahier des charges',
        classification: 'sub-theme',
        subs: [
            'being-communicant',
            'ask-questions',
            'know-to-synthetize'
        ]
    },
    {
        id: 'ask-questions',
        title: 'Poser des questions pertinentes',
        classification: 'root',
    },
    {
        id: 'know-to-synthetize',
        title: 'Savoir comment synthétiser',
        classification: 'root',
    },
    {
        id: 'recherche-projet',
        title: 'Se documenter',
        classification: 'sub-theme',
        subs: [
            'looking-for-existant',
            'browse-sources',
        ]
    },
    {
        id: 'looking-for-existant',
        title: 'Rechercher l\'existant',
        classification: 'root',
    },
    {
        id: 'browse-sources',
        title: 'Parcourir les sources',
        classification: 'root',
    },
]