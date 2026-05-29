export const tracesData = [
    {
        id: 'maboss-branches',
        identification: 1,
        caption: "Capture d'écran des branches du projet MaBoSS. Repère A: banche principale. Repère B: ma branche pour ajouter la documentation.",
        image: new URL('@/assets/traces/branches_maboss.png', import.meta.url).href,
    },
    {
        id: 'maboss-langs',
        identification: 2,
        caption: "Capture d'écran des proportions de langages dans le projet MaBoSS.",
        image: new URL('@/assets/traces/screen_langages_maboss.png', import.meta.url).href,
    },
    {
        id: 'jupyter-maboss',
        identification: 3,
        caption: "Capture d'écran d'un notebook Jupyter avec des exemples d'application de MaBoSS.",
        image: new URL('@/assets/traces/jupyter_metastasis.png', import.meta.url).href,
    },
    {
        id: 'pymaboss-langs',
        identification: 4,
        caption: "Capture d'écran des proportions de langages dans le projet pyMaBoSS.",
        image: new URL('@/assets/traces/screen_langages_pymaboss.png', import.meta.url).href,
    },
    {
        id: 'check_logical_exp_flow_chart',
        identification: 5,
        caption: "Flow chart de l'algorithme permettant de vérifier qu'une expression logique est valide c'est à dire " +
            "que deux symboles logiques ou noms ne s'enchainent pas et qu'elle ne commence ou ne termine pas par un symbole logique.",
        image: new URL('@/assets/traces/check_logical_expression.jpeg', import.meta.url).href,
    },
    {
        id: 'parsing_logical_exp_flow_chart',
        identification: 6,
        caption: "Flow chat de l'algorithme permettant de parser une expression logique en tenant compte des sous-expressions.",
        image: new URL('@/assets/traces/parsing_logical_expression.jpeg', import.meta.url).href,
    },
    {
        id:'branches-github',
        identification: 7,
        caption: 'Les branches se présente comme des extensions parallèles à une branche principale. Il est possible des les fusionner (repère rouge).',
        image: new URL('@/assets/traces/github_branches.jpeg', import.meta.url).href,
    },
    {
        id:'branches-pymaboss',
        identification: 8,
        caption: 'Visualisation des branches dans le projet pyMaBoSS. On peut voir la branche temporal-logic que j\'ai créé pour ce projet.',
        image: new URL('@/assets/traces/pymaboss-branches.png', import.meta.url).href,
    },
    {
        id:'screen-fork-pymaboss',
        identification: 9,
        caption: 'Capture d\'écran qui montre que mon dépôt appelé "pyMaboss" est un fork du déôt de Colomoto du même nom (cercle rouge). '+
        'Le cercle jaune indique le bouton permettant de demander la fusion avec le dépôt originel. ',
        image: new URL('@/assets/traces/screen_fork.png', import.meta.url).href,
    },
    {
        id:'screen_push_fork',
        identification: 10,
        caption: 'Capture d\'écran d\'une commande commit vers la fork et la branche que j\'ai crée pour pyMaboss.',
        image: new URL('@/assets/traces/screen_push_fork_branch.png', import.meta.url).href,
    },
    {
        id: 'screen-no-raise',
        identification: 11,
        caption: '',
        image: new URL('@/assets/traces/screen-no-raise.png', import.meta.url).href,
    },
    {
        id: 'screen-raise-excp',
        identification: 12,
        caption: '',
        image: new URL('@/assets/traces/screen-raise-excp.png', import.meta.url).href,
    },
    {
        id:'custom-exception',
        identification: 13,
        caption: '',
        image: new URL('@/assets/traces/custom-exception.png', import.meta.url).href,
    },
    {
        id:'exemples-assertions',
        identification: 14,
        caption: '',
        image: new URL('@/assets/traces/exemples-assertions.png', import.meta.url).href,
    },
    {
        id: 'screen-bouchon',
        identification: 15,
        caption:'',
        image: new URL('@/assets/traces/screen-bouchons.png', import.meta.url).href,
    },
    {
        id: 'team-meeting',
        identification: 16,
        caption: 'Le programme de passage pour indiquer qui parle lors des teams meeting hebdomadaires. Le 19 Mai, ce n\'est pas Victoria ' +
            'qui a parlé mais moi. Ces meetings permettent de partager son avancement sur son projet en cours et de faire part de ses découvertes, ou de ses problèmes.' +
            ' Un temps est dédié aux questions ou remarques que l\'audience peut apporter. Cela se passe en petit comité, environ 15 personnes.',
        image: new URL('@/assets/traces/schedule_team_meeting.png', import.meta.url).href,
    },
    {
        id:'journal-club',
        identification: 17,
        caption: 'Le mail envoyé par Victoria aux membres de l\'équipe pour informer de quel article elle va parler lors du prochain journal club qui avait lieu le 19 Mai.',
        image: new URL('@/assets/traces/journal-club.png', import.meta.url).href,
    },
    {
        id:'cdc',
        identification: 18,
        caption:'Liste des fonctions désirées par l\'équipe qui doivent pouvoir être effectuées avec mon outil.',
        image: new URL('@/assets/traces/cahier-des-charges.png', import.meta.url).href,
    },
    {
        id:'agile-semaines',
        identification: 19,
        caption: 'Capture d\'écran de mon Notion sur laquelle on peut voir les tâches des semaines 3 et 4. Certaines de ces tâches' +
            'sont colorées pour indiquer une priorité: bleu, jaune ou rouge. En rouge c\'est toujours une fonctionnalité à mettre en place' +
            ' absolument cette semaine. Le bleu ou le jaune sont là pour indiquer une priorité au-dessus du blanc mais ' +
            'pas aussi urgent qu\'en rouge. Une tâche marquée d\'une coche bleue est implémentée et testée. Une crois signifie que le comportement' +
            ' n\'est pas implémenté et a été reporté. Enfin, la petite horloge signifie que ce comportement n\'est pas du' +
            ' requis dans l\'immédiat et il a été mis en suspend sans forcement voir son développement repris.',
        image: new URL('@/assets/traces/semaines-3-4-agile.png', import.meta.url).href,
    },
    {
        id:'decoupage-mcct',
        identification: 20,
        caption: 'Schéma de découpage de l\'outil MaBoSS_CoherencyCheckerTool (MCCT). L\'outil de est découpé en 4 grandes parties:' +
            ' Gérer des simulations, lire une question, renvoyer une réponse et être opensource. Chacune de ces parties regroupe une ou' +
            ' plusieurs fonctions requises pour pouvoir fonctionner. C\'est un découpage très large qui n\'entre pas dans les' +
            ' détails de chaque fonction.',
        image: new URL('@/assets/traces/decoupage_mcct.png', import.meta.url).href,
    },
];

export const getTrace = (id) => {
    const normalizedId = id.toLowerCase();
    return tracesData.find(trace => trace.id.toLowerCase() === normalizedId);
};