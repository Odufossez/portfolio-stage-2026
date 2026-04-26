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
        id:'branches-maboss',
        identification: 8,
        caption: 'Visualisation des branches dans le projet MaBoSS.',
        image: new URL('@/assets/traces/screen_branches_maboss.png', import.meta.url).href,
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
    }
];

export const getTrace = (id) => {
    const normalizedId = id.toLowerCase();
    return tracesData.find(trace => trace.id.toLowerCase() === normalizedId);
};
