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
        id: 'compute-logical-expression-diagramme',
        identification: 5,
        caption: "Flow chart de l'algorithme permettant de computer l'expression qui a été passée. Elle commence par une étape " +
            "de vérification de l'expression logique puis le programme itère sur les membres pour fusionner les lignes et colonnes " +
            "extraites des résultats.",
        image: new URL('@/assets/traces/compute-logical-expression-diagramme.png', import.meta.url).href,
    },
    {
        id: 'parsing_logical_exp_flow_chart',
        identification: 6,
        caption: "Flow chat de l'algorithme permettant de parser une expression logique en tenant compte des sous-expressions.",
        image: new URL('@/assets/traces/parsing_logical_expression.jpeg', import.meta.url).href,
    },
    {
        id: 'branches-github',
        identification: 7,
        caption: 'Les branches se présente comme des extensions parallèles à une branche principale. Il est possible des les fusionner (repère rouge).',
        image: new URL('@/assets/traces/github_branches.jpeg', import.meta.url).href,
    },
    {
        id: 'branches-pymaboss',
        identification: 8,
        caption: 'Visualisation des branches dans le projet pyMaBoSS. On peut voir la branche temporal-logic que j\'ai créé pour ce projet.',
        image: new URL('@/assets/traces/pymaboss-branches.png', import.meta.url).href,
    },
    {
        id: 'screen-fork-pymaboss',
        identification: 9,
        caption: 'Capture d\'écran qui montre que mon dépôt appelé "pyMaboss" est un fork du déôt de Colomoto du même nom (cercle rouge). ' +
            'Le cercle jaune indique le bouton permettant de demander la fusion avec le dépôt originel. ',
        image: new URL('@/assets/traces/screen_fork.png', import.meta.url).href,
    },
    {
        id: 'screen_push_fork',
        identification: 10,
        caption: 'Capture d\'écran d\'une commande commit vers la fork et la branche que j\'ai crée pour pyMaboss.',
        image: new URL('@/assets/traces/screen_push_fork_branch.png', import.meta.url).href,
    },
    {
        id: 'test-exception',
        identification: 11,
        caption: "Pour vérifier qu'un échantillon de test ne lève pas d'exceptions, on peut écrire le test ainsi : faire un" +
            " appel de la fonction à tester dans un try-except et si une exception est détectée, alors le test a échoué." +
            " De même, " + "pour vérifier qu'un échantillon lève une exception, il faut écrire le test avec un assertRaises pour que " +
            "celui-ci ne s'arrête pas après la levée de l'exception. C'est pour lui indiquer que cette exception est voulue. Il est " +
            "donc possible d'enchainer plusieurs vérification dans le même test.",
        image: new URL('@/assets/traces/tests-exceptions.png', import.meta.url).href,
    },
    {
        id: 'custom-exception',
        identification: 12,
        caption: "En programmation orientée objet, il est possible de créer des exceptions personnalisées par le biais de " +
            "l'héritage. Il suffit de faire hériter la ou les classes de 'Exception'. En Python, une classe mère est passée " +
            "entre parenthèses de la classe fille, comme ici, Exception est passée entre parenthèses de FormulaException. Une " +
            "mère peut avoir plusieurs filles, on voit d'ailleurs ici que EmptyTargetException et EmptyNameException héritent de " +
            "la même classe.",
        image: new URL('@/assets/traces/custom-exception.png', import.meta.url).href,
    },
    {
        id: 'exemples-assertions',
        identification: 13,
        caption: "En test unitaire, il est possible de vérifier qu'une équation logique est vraie. Le mot clé 'assert' permet de dire " +
            "que la logique qui va suivre doit être vraie. On peut donc vérifier que les membres de 'formula6' sont bien ceux que l'on " +
            "attend un à un avec une série de 'assert'.",
        image: new URL('@/assets/traces/exemples-assertions.png', import.meta.url).href,
    },
    {
        id: 'screen-bouchon',
        identification: 14,
        caption: "La classe FakeResult sert de bouchon (stub) pour simuler le comportement de la classe Result originale. " +
            "Au lieu de lancer de vraies simulations lourdes, elle fournit instantanément des données fixes et maîtrisées. " +
            "Les méthodes de A à E calquent exactement l'interface de la vraie classe. La fonction encadrée en rouge automatise " +
            "le chargement de ces faux résultats à partir de fichiers CSV pour faciliter l'écriture des tests.",
        image: new URL('@/assets/traces/screen-bouchons.png', import.meta.url).href,
    },
    {
        id: 'team-meeting',
        identification: 15,
        caption: 'Le programme de passage pour indiquer qui parle lors des teams meeting hebdomadaires. Le 19 Mai, ce n\'est pas Victoria ' +
            'qui a parlé mais moi. Ces meetings permettent de partager son avancement sur son projet en cours et de faire part de ses découvertes, ou de ses problèmes.' +
            ' Un temps est dédié aux questions ou remarques que l\'audience peut apporter. Cela se passe en petit comité, environ 15 personnes.',
        image: new URL('@/assets/traces/schedule_team_meeting.png', import.meta.url).href,
    },
    {
        id: 'journal-club',
        identification: 16,
        caption: 'Le mail envoyé par Victoria aux membres de l\'équipe pour informer de quel article elle va parler lors du prochain journal club qui avait lieu le 19 Mai.',
        image: new URL('@/assets/traces/journal-club.png', import.meta.url).href,
    },
    {
        id: 'cdc',
        identification: 17,
        caption: 'Liste des fonctions désirées par l\'équipe qui doivent pouvoir être effectuées avec mon outil.',
        image: new URL('@/assets/traces/cahier-des-charges.png', import.meta.url).href,
    },
    {
        id: 'agile-semaines',
        identification: 18,
        caption: 'Capture d\'écran de mon Notion sur laquelle on peut voir les tâches des semaines 3 et 4. Certaines de ces tâches' +
            'sont colorées pour indiquer une priorité: bleu, jaune ou rouge. En rouge c\'est toujours une fonctionnalité à mettre en place' +
            ' absolument cette semaine. Le bleu ou le jaune sont là pour indiquer une priorité au-dessus du blanc mais ' +
            'pas aussi urgent qu\'en rouge. Une tâche marquée d\'une coche bleue est implémentée et testée. Une crois signifie que le comportement' +
            ' n\'est pas implémenté et a été reporté. Enfin, la petite horloge signifie que ce comportement n\'est pas du' +
            ' requis dans l\'immédiat et il a été mis en suspend sans forcement voir son développement repris.',
        image: new URL('@/assets/traces/semaines-3-4-agile.png', import.meta.url).href,
    },
    {
        id: 'decoupage-mcct',
        identification: 19,
        caption: 'Schéma de découpage de l\'outil MaBoSS_CoherencyCheckerTool (MCCT). L\'outil de est découpé en 4 grandes parties:' +
            ' Gérer des simulations, lire une question, renvoyer une réponse et être opensource. Chacune de ces parties regroupe une ou' +
            ' plusieurs fonctions requises pour pouvoir fonctionner. C\'est un découpage très large qui n\'entre pas dans les' +
            ' détails de chaque fonction.',
        image: new URL('@/assets/traces/decoupage_mcct.png', import.meta.url).href,
    },
    {
        id: 'schema-pipeline',
        identification: 20,
        caption: "Schéma de la pipeline d'inférence de modèles booléens. Plusieurs outils peuvent être utilisés pour inférer " +
            "les règles du modèle. Celui-ci peut ensuite être simulé dans MaBoSS et MaBoSS_test permet de valider son fonctionnement.",
        image: new URL('@/assets/traces/schema-pipeline.jpg', import.meta.url).href,
    },
    {
        id: 'test-deroulement',
        identification: 21,
        caption: "Fonction de test qui effectue des assertions au fur et à mesure du déroulement de l'algorithme de traitement." +
            " Les fonctions sont appelées manuellement pour que je puisse tester l'état des dataframes entre deux étapes afin " +
            "de m'assurer que le déroulement se passe bien. Cela me permet de valider une seconde fois les fonctions, puisqu'elles " +
            "ont été testées en isolement une première fois. En violet j'ai mis en évidence les étapes de l'algorithme et en rouge ce" +
            " sont les assertions.",
        image: new URL('@/assets/traces/test-deroulement.png', import.meta.url).href,
    },
    {
        id: 'formula',
        identification: 22,
        caption: "Déclaration de la classe Formula qui permet de stocker les membre d'une query après l'avoir parsé. On peut" +
            " y voir les membres et leur type.",
        image: new URL('@/assets/traces/formula.png', import.meta.url).href,
    },
    {
        id: 'exemple-couverture',
        identification: 23,
        caption: "Diagramme d'exécution exemple. Un chemin possible est mis en surbrillance jaune, en suivant celui-ci, " +
            "le programme a comme sortie l'output 2.",
        image: new URL('@/assets/traces/exemple-couverture.jpg', import.meta.url).href
    },
    {
        id: 'test-sample',
        identification: 24,
        caption: "Capture d'écran d'une partie des échantillons de test utilisés pour tester le FormulaChecker. Ces échantillons " +
            "sont stockés dans des variables pour les utiliser plus facilement dans les tests. Les cinq premières sont là " +
            "pour couvrir des cas où il n'y a pas d'erreur, les suivantes doivent déclencher des erreurs.",
        image: new URL('@/assets/traces/test-sample.png', import.meta.url).href,
    },
    {
        id: 'diagramme-formula-checker',
        identification: 25,
        caption: "Diagramme d'exécution du FormulaChecker. La phrase parsée et transformée en Formula est passée à la " +
            "fonction qui évalue ses membres pour vérifier que toutes les conditions sont respectées. Si la Formula est " +
            "correcte, la fonction ne renvoie rien et lève une erreur dans le cas contraire.",
        image: new URL('@/assets/traces/formula-checker-diagramme.png', import.meta.url).href,
    },
    {
        id: 'dossier-module',
        identification: 26,
        caption: "Capture d'écran de l'arborescence des fichiers de pyMaBoSS. Encadré en rouge, le dossier que j'ai créé " +
            "qui contient tout le programme que j'ai écrit pour le MaBoSS_CoherencyCheckerTool.",
        image: new URL('@/assets/traces/dossier-module.png', import.meta.url).href,
    },
    {
        id: 'import-module',
        identification: 27,
        caption: "Lignes d'exportation des classes auxquelles d'autres programmes pourront accéder. Dans mon cas, je donne " +
            "accès au MaBoSSEvaluator et au Visualiser. Dans le code du bas, le fichier __init__.py de MaBoSS exporte également " +
            "mon programme pour que l'on puisse y avoir accès juste en téléchargeant pyMaBoSS.",
        image: new URL('@/assets/traces/import-module.png', import.meta.url).href
    },
    {
        id: 'import-in-prog',
        identification: 28,
        caption: "Lignes d'importation d'un module dans un programme. Pour importer le module temporal_logic, il n'est pas " +
            "nécessaire d'importer maboss au préalable, ici je l'importe pour d'autres opérations. Importer temporal_logic " +
            "en utilisant le mot clé 'as' permet de faire un alias.",
        image: new URL('@/assets/traces/import-in-prog.png', import.meta.url).href
    },
    {
        id: 'tableaux-log-exp',
        identification: 29,
        caption: "Pour savoir quelles lignes garder dans un dataframe, on applique un masque qui vient transformer les valeurs " +
            "des cellules en boolean. La ligne à garder est celle qui respecte la condition passée. Pour la fusion de deux dataframes," +
            " c'est le même principe, on ne va pas garder les mêmes colonnes que ce soit pour un &-logique ou un |-logique. " +
            "Pour un &-logique, on garde les colonnes qui sont dans les deux dataframes. Pour un |-logique, on garde les colonnes des deux " +
            "dataframes sans créer de doublons.",
        image: new URL('@/assets/traces/tableaux-log-exp.png', import.meta.url).href
    },
    {
        id: 'merge-or-fct',
        identification: 30,
        caption: "Logigramme de la fonction pour fusionner deux tableaux sur une logique de OU. " +
            "La fonction reçoit en entrée deux tableaux qui sont nettoyés (on enlève les espaces dans les noms de colonnes). " +
            "Une première fusion est faite et si keep_time_df1 est vrai, alors on ne garde que les temps présents dans df1. " +
            "Si le dataframes des noeuds n'est pas vide, on trie les colonnes par noeuds et state puis par ordre alphabétique. " +
            "On termine par le retour du dataframe final, sans doublon et avec les bons temps.",
        image: new URL('@/assets/traces/merge-or-fct.png', import.meta.url).href
    },
    {
        id: 'merge-and-fct',
        identification: 31,
        caption: "Logigramme de la fonction pour fusionner deux tableaux sur une logique de ET. La fonction reçoit en " +
            "entrée deux tableaux dont les temps sont arrondis et les espaces dans les noms de colonnes nettoyés. " +
            "Une fusion interne (inner merge) est réalisée sur la colonne 'Time' pour ne conserver que les lignes ayant " +
            "des temps communs. On parcourt ensuite l'ensemble des colonnes sources : tous les nœuds (nodes) identifiés " +
            "sont conservés, tandis que les états (states) ne sont gardés que s'ils apparaissent dans les deux tableaux " +
            "d'origine (logique ET). Après avoir renommé les colonnes filtrées, on trie le résultat par type d'entité " +
            "(nodes puis states) et par ordre alphabétique. On termine par le retour du tableau final, dupliqué nettoyé " +
            "et correctement ordonné.",
        image: new URL('@/assets/traces/merge-and-fct.png', import.meta.url).href
    },
    {
        id: 'boucle-merge-or',
        identification: 32,
        caption: "La boucle qui permet le tri des colonnes fusionnées dans la fonction merge_or. Elle filtre les colonnes " +
            "en ignorant celle du temps, puis elle sépare les nodes des states et reconstruit le tout en ayant rangé les groupes " +
            "par ordre alphabétique.",
        image: new URL('@/assets/traces/boucle-merge-or.png', import.meta.url).href
    },
    {
        id: 'boucle-merge-and',
        identification: 33,
        caption: "La boucle qui permet d'appliquer la logique sélective pour décider quelles données doivent être gardées. " +
            "D'abord, la boucle vérifie si la colonne a été suffixée précédemment. Un suffixe signifie que cette colonne était en double, " +
            "donc présente dans les deux dataframes. Ensuite, on sépare les nodes des states. Les nodes sont toujours gardés, les states ne sont " +
            "gardés que si celui-ci était présent dans les deux dataframes. Enfin on nettoie les noms des suffixes.",
        image: new URL('@/assets/traces/boucle-merge-and.png', import.meta.url).href
    },
    {
        id: 'merge-and-suffixes',
        identification: 34,
        caption: "Capture d'écran de la fonction merge_and. Cette ligne fusionne les deux dataframes passés en paramètres " +
            "en renommant les colonnes en ajoutant un suffixe lorsque celle-ci est dans les deux dataframes.",
        image: new URL('@/assets/traces/merge-and-suffixes.png', import.meta.url).href
    },
    {
        id: 'maboss_test-assertion',
        identification: 35,
        caption: "Exemple de rédaction pour une assertion dans MaBoSS_test. test_BRAF_ON est une simulation, " +
            "BRAF_inhibition est une mutation, IC_CRC est un état initial, EGFR actif est l'état à évaluer et " +
            "on regarde s'il y a une augmentation (increase) d'au moins 1 digit. L'assertion testée est : '" +
            "L'inhibition de BRAF provoque une activation de EGFR dans le cancer colorectal mais pas dans le mélanome.'",
        image: new URL('@/assets/traces/maboss_test-assertion.png', import.meta.url).href
    },
    {
        id: 'processus-query',
        identification: 36,
        caption: "On part d'une phrase, " +
            "une affirmation scientifique (issue d'un papier ou d'un expert), on la transforme en query (dans le langage " +
            "normalisé), on la passe à l'évaluateur avec un model, le programme se charge de tout : simulation et traitement " +
            "et renvoie des résultats.",
        image: new URL('@/assets/traces/processus-query.png', import.meta.url).href
    },
    {
        id: 'schema-query',
        identification: 37,
        caption: "Le query peut-être décomposé comme sur le schéma de cette trace. Chaque bloc va avoir ses propres règles, " +
            "ses propres contraintes et vont influer sur la façon dont se fait l'évaluation.",
        image: new URL('@/assets/traces/schema-query.png', import.meta.url).href
    },
    {
        id: 'querytype-enum',
        identification: 38,
        caption: "Capture d'écran de la classe QueryType, qui est une enum associant le type du query avec une chaine de caractère. " +
            "Lorsque le query est parsé, la chaine de caractère en résultant est associé avec le QueryType et lève une erreur si " +
            "aucune concordance n'est trouvée.",
        image: new URL('@/assets/traces/querytype-enum.png', import.meta.url).href
    },
    {
        id: 'targettype-enum',
        identification: 39,
        caption: "Capture d'écran de la classe TargetType, qui est une enum associant le type de cible avec une chaine de caractère. " +
            "Lorsque le query est parsé, la chaine de caractère en résultant est associé avec le TargetType et lève une erreur si " +
            "aucune concordance n'est trouvée.",
        image: new URL('@/assets/traces/targettype-enum.png', import.meta.url).href
    },
    {
        id: 'extract-column-fct',
        identification: 40,
        caption: "Fonction permettant d'extraire la ou les colonnes cibles du dataframe df passé en paramètres. column_name est " +
            "une chaine de caractère qui est le nom de la colonne à chercher ou à exclure si exclusion est true. Le paramètre " +
            "is_state permet d'indiquer que la colonne est une colonne de state et donc le nom est adapté pour éviter de soulever " +
            "d'erreur.",
        image: new URL('@/assets/traces/extract-column-fct.png', import.meta.url).href
    },
    {
        id: 'extract-line-fct',
        identification: 41,
        caption: "Fonction permettant d'extraire une ligne en fonction de son nom et du statut d'exclusion. Cette fonction " +
            "n'est utilisée que dans le cas de computation sur des points fixes. Ce dataframe est composé d'une colonne 'State' " +
            "avec un nom et toutes les autres colonnes sont des nodes dont la valeur pour cette ligne est 1 ou 0 (actif ou inactif)." +
            " Ainsi, l'instruction permet de récupérer toutes les lignes où le nom du node respecte la condition de statut.",
        image: new URL('@/assets/traces/extract-line-fct.png', import.meta.url).href
    },
    {
        id: 'construction-mask',
        identification: 42,
        caption: "La construction d'un masque permet d'appliquer la condition de conservation à toutes les lignes et toutes les " +
            "colonnes du dataframe en une seule instruction, sans avoir à faire de boucle. Deux mots-clés sont importants dans la construction " +
            "du masque sur cette trace : 'any' et 'all'. Avec 'any', on garde la ligne si au moins une colonne répond au critère. Avec 'all', toutes " +
            "les colonnes doivent valider la condition pour que la ligne soit gardée. " +
            "Pour appliquer le masque : df = df[mask].copy()",
        image: new URL('@/assets/traces/construction-mask.png', import.meta.url).href
    },
    {
        id: 'format-nodes-table',
        identification: 43,
        caption: "Un dataframe utilisé pour le calcul des probabilités d'un node ou d'un state d'être actif a le format de cette trace. " +
            "Ici, les noms sont des nodes, si c'était une table de state, elle aurait le même format avec d'autres noms. L'index ce sont " +
            "des timecodes, celui-ci est transformé en colonne 'Time' au début du traitement.",
        image: new URL('@/assets/traces/format-nodes-table.png', import.meta.url).href
    },
    {
        id: 'format-fp-table',
        identification: 44,
        caption: "Un dataframe utilisé pour le calcul de probabilités sur un point fixe a le format de cette trace. " +
            "La colonne 'Proba' est la probabilité de ce state d'être actif. La colonne 'state' c'est le state correspondant. " +
            "Toutes les autres colonnes ce sont les nodes du model dont la valeur varie d'une ligne à l'autre en fonction de si " +
            "ce node est actif ou non dans le state.",
        image: new URL('@/assets/traces/format-fp-table.png', import.meta.url).href
    }
];

export const getTrace = (id) => {
    const normalizedId = id.toLowerCase();
    return tracesData.find(trace => trace.id.toLowerCase() === normalizedId);
};