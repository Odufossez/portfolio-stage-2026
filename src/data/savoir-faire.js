export const savoirFaire = [
    {
        id: 'contribution-opensource',
        classification: 'theme',
        color: '#5d5c5c',
        title: 'Contribution à des projets open source',
        subs: [
            'github-usage'
        ]
    },
    {
        id: 'github-usage',
        classification: 'sub-theme',
        title: 'Utilisation de GitHub',
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
        title: 'Branches',
    },
    {
        id: 'pull-requests',
        classification: 'root',
        title: 'Pull requests',
    },
    {
        id: 'fork',
        classification: 'root',
        title: 'Fork',
    },
    {
        id: 'commits',
        classification: 'root',
        title: 'Commits de qualité',
    },
    {
        id: 'documentation',
        classification: 'theme',
        color: '#b2876a',
        title: 'Documentation',
        subs: [
            'documentation-python',
            'documentation-uml',
            'documentation-c++',
        ]
    },
    {
        id: 'coding-python',
        classification: 'theme',
        color: '#ff6300',
        title: 'Coding en Python',
        subs: [
            'unit-tests',
            'jupyter-notebooks',
            'module-creation',
        ]
    },
    {
        id: 'module-creation',
        classification: 'sub-theme',
        title: 'Création de modules',
        subs: [
            'classes',
            'exceptions'
        ]
    },
    {
        id: 'exceptions',
        classification: 'root',
        title: 'Créations d\'exceptions'
    },
    {
      id: 'classes',
      classification: 'root',
      title: 'Création de classes'
    },
    {
        id: 'algorithme',
        classification: 'theme',
        color: '#8c4d4d',
        title: 'Algorithme',
        subs: [
            'flow-charts',
            'parsing-logical-expression',
            'regex',
            'data-treatment'
        ]
    },
    {
        id: 'flow-charts',
        classification: 'sub-theme',
        title: 'Flow charts',
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
        title: 'Tests unitaires',
        subs: [
            'checking_exceptions',
            'checking_no_exceptions',
            'conceive-test-samples',

        ]
    },
    {
        id: 'jupyter-notebooks',
        classification: 'sub-theme',
        title: 'Jupyter notebooks',
        subs: [
            'jupyter-maboss',
            'jupyter-pymaboss',
            'data-visualization',
        ]
    },
    {
        id: 'documentation-python',
        classification: 'sub-theme',
        title: 'Documentation en Python',
    },
    {
        id: 'documentation-uml',
        classification: 'sub-theme',
        title: 'Documentation UML',
    },
    {
        id: 'documentation-c++',
        classification: 'sub-theme',
        title: 'Documentation C++',
    },
    {
        id: 'parsing-logical-expression',
        classification: 'sub-theme',
        title: 'Parsing d\'expressions logiques',
        subs: [
            'check-validity-logical-expression',
            'compute-logical-expression',
        ]
    },
    {
        id: 'jupyter-maboss',
        classification: 'root',
        title: 'Jupyter notebooks pour MaBoSS',
    },
    {
        id: 'jupyter-pymaboss',
        classification: 'root',
        title: 'Jupyter notebooks pour pyMaboss',
    },
    {
        id: 'data-visualization',
        classification: 'root',
        title: 'Visualisation de données avec pandas et numpy'
    },
    {
        id: 'regex',
        classification: 'sub-theme',
        title: 'Concevoir une expression régulière',
        subs: [
            'check_regex',
            'parsing_regex',
        ]
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
        id: 'check_regex',
        classification: 'root',
        title:'Vérifier la validité d\'une chaine de caractère par rapport à une REGEX'
    },
    {
        id:'parsing_regex',
        classification: 'root',
        title: 'Décomposer une chaine de caractère par rapport à une REGEX'
    },
    {
        id: 'data-treatment',
        classification: 'sub-theme',
        title: 'Traitement de données',
        subs: [
            'data-treatment-python',
            'data-treatment-pandas',
            'know-what-data-use'
        ]
    },
    {
        id: 'check-validity-logical-expression',
        classification: 'root',
        title: 'Vérifier la validité d\'une expression logique',
    },
    {
        id: 'compute-logical-expression',
        classification: 'root',
        title: 'Calculer la sortie d\'une expression logique',
    },
    {
        id: 'data-treatment-python',
        title: 'Traitement de données en Python',
        classification: 'root',
    },
    {
        id: 'data-treatment-pandas',
        title: 'Traitement de données avec pandas',
        classification: 'root',
    },
    {
        id: 'know-what-data-use',
        title: 'Savoir quelles données utiliser',
        classification: 'root',
    }
]