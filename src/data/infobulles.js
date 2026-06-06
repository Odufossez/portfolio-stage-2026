export const infobullesData = [
    {
        id: 'maboss',
        title: 'MaBoSS',
        content: 'Markovian Boolean Stochastic Simulator. Logiciel de modélisation booléenne basé sur des simulations stochastiques pour étudier la dynamique des processus biologiques.'
    },
    {
        id: 'maboss_test',
        title: 'MaBoSS_test',
        content: 'Outil codé en Python permettant de tester des assertions sur un modèle simulé avec MaBoSS. Il se base sur des tests unitaires pour réaliser ses évaluations.'
    },
    {
        id: 'stochastique',
        title: 'Stochastique',
        content: 'Se dit d\'un processus dont l\'évolution intègre une part d\'aléatoire au cours du temps, par opposition à un processus purement déterministe.'
    },
    {
        id: 'uml',
        title: 'Diagramme UML',
        content: 'Moyen de visualiser, de spécifier et de documenter la structure et le comportement des systèmes logiciels à l\'aide du langage UML (Unified Modeling Language).'
    },
    {
        id: 'ctl',
        title: 'Computation Tree Logic',
        content: 'Logique temporelle branching-time (à temps arborescent) utilisée en vérification de modèles (Model Checking). Elle permet d\'exprimer des propriétés sur l\'ensemble des chemins futurs possibles à partir d\'un état donné, en utilisant des quantificateurs de chemins (comme "sur au moins un chemin" ou "sur tous les chemins").'
    },
    {
        id: 'pctl',
        title: 'Probabilistic Computation Tree Logic',
        content: 'Extension de la logique CTL intégrant des contraintes de probabilités. Elle permet de formuler des requêtes quantitatives sur le comportement d\'un système, par exemple pour vérifier si la probabilité qu\'un événement indésirable se produise reste inférieure à un certain seuil.'
    },
    {
        id: 'csl',
        title: 'Continuous Stochastic Logic',
        content: 'Logique temporelle spécifiquement conçue pour spécifier des propriétés sur des modèles stochastiques à temps continu, tels que les chaînes de Markov à temps continu (CTMC). Elle permet d\'évaluer la probabilité qu\'une formule soit vérifiée au cours d\'un intervalle de temps réel.'
    },
    {
        id: 'ltl',
        title: 'Linear Temporal Logic',
        content: 'Logique temporelle linear-time (à temps linéaire) où le temps est vu comme une succession d\'états uniques. Elle permet de définir des propriétés sur un chemin d\'exécution précis en utilisant des opérateurs temporels comme "Toujours" (Always), "Éventuellement" (Eventually) ou "Suivant" (Next).'
    },
    {
        id: 'dtmc',
        title: 'Discrete Time Markov Chain',
        content: 'Chaîne de Markov à temps discret. Modèle stochastique où le système passe d\'un état à un autre de manière discrète (par étapes) à des intervalles de temps fixes, selon des probabilités de transition qui dépendent uniquement de l\'état actuel (propriété de Markov).'
    },
    {
        id: 'pta',
        title: 'Probabilistic Timed Automata',
        content: 'Automates temporisés probabilistes. Modèles formels qui étendent les automates finis en y ajoutant des horloges (pour mesurer le temps continu) et des choix probabilistes lors des transitions d\'états, idéaux pour modéliser des systèmes avec des délais aléatoires.'
    },
    {
        id: 'mdp',
        title: 'Markov Decision Process',
        content: 'Processus de décision de Markov. Extension des chaînes de Markov qui intègre des actions (choix d\'un agent ou d\'un environnement) et des récompenses. C\'est un cadre mathématique utilisé pour modéliser la prise de décision dans des situations où les résultats sont partiellement aléatoires.'
    },
    {
        id: 'pymaboss',
        title: 'pyMaboss',
        content: 'Interface Python pour MaBoSS permettant de configurer des simulations, de lancer les calculs et de traiter graphiquement les trajectoires de probabilités, notamment au sein de notebooks Jupyter.'
    },
    {
        id: 'noeuds',
        title: 'Nœuds ou nodes',
        content: "Dans le cadre d’une simulation MaBoSS, un nœud (ou node) est une entité représentant l’état d'un gène ou d'une protéine. Il est caractérisé par une valeur booléenne : 1 pour actif (ON) et 0 pour inactif (OFF). Un vecteur contenant l’état de tous les nœuds définit la configuration globale du système, appelée \"state\"."
    },
    {
        id: 'mutate',
        title: 'Muter (dans le contexte de MaBoSS)',
        content: "Action consistant à forcer l'état d'un nœud à rester actif (mutation Gain de Fonction / ON) ou inactif (mutation Perte de Fonction / OFF) tout au long de la simulation, afin de mimer une altération génétique et d'observer son impact sur le réseau."
    },
    {
        id: 'repo',
        title: 'Repository ou répertoire GitHub',
        content: 'Un repository (ou "repo") GitHub est l\'espace de stockage distant où sont centralisés tout le code, les images et les fichiers d\'un projet, ainsi que l\'historique complet de leurs modifications.'
    },
    {
        id: 'rebase',
        title: 'La commande Rebase',
        content: 'Commande Git qui permet de déplacer ou de réappliquer une suite de commits de la branche courante par-dessus le dernier commit d\'une branche cible. Cela permet de maintenir un historique de projet linéaire et propre sans créer de commit de fusion (merge commit).'
    },
    {
        id: 'stash',
        title: 'La commande Stash',
        content: 'Commande Git permettant de mettre temporairement de côté (remiser) les modifications non validées de la branche courante. Cela permet de retrouver un espace de travail propre pour changer de branche rapidement, avant de pouvoir réappliquer ces changements plus tard via "git stash apply".'
    },
    {
        id: 'push',
        title: 'La commande Push',
        content: 'La commande "push" permet d\'envoyer les commits locaux de la branche courante vers un dépôt distant (comme GitHub) afin de mettre en ligne les modifications.'
    },
    {
        id: 'commit',
        title: 'La commande Commit',
        content: 'Un commit enregistre l\'état actuel des fichiers modifiés dans l\'historique local du dépôt. Il s\'apparente à un instantané (snapshot) du projet et est impérativement accompagné d\'un message explicatif.'
    },
    {
        id: 'pull',
        title: 'La commande Pull',
        content: 'La commande "pull" permet de récupérer et d\'intégrer directement les modifications d\'un dépôt distant dans la branche locale actuelle (équivalent à un git fetch suivi d\'un git merge).'
    },
    {
        id: 'fork',
        title: 'La commande Fork',
        content: 'Action de créer une copie indépendante d\'un dépôt GitHub de tiers dans son propre compte. Cela permet d\'expérimenter et d\'y faire des modifications sans impacter le projet d\'origine.'
    },
    {
        id: 'pandas',
        title: 'Bibliothèque Python pandas',
        content: 'Bibliothèque Python incontournable pour l\'analyse de données, permettant notamment la création, le filtrage et la manipulation efficace de DataFrames (tableaux de données bidimensionnels).'
    },
    {
        id: 'enum',
        title: 'Énumération ou enum',
        content: 'Une énumération (ou "enum") est un type de données spécialisé qui regroupe un ensemble de constantes nommées, facilitant la clarté et la maintenance du code en remplaçant les valeurs magiques ou arbitraires.'
    },
    {
        id: 'flow-chart',
        title: 'Flow chart ou diagramme de flux',
        content: 'Schéma graphique représentant l\'enchaînement séquentiel des instructions, des conditions et des structures logiques décrivant le déroulement de l\'algorithme d\'un programme.'
    },
    {
        id: 'vectorisation',
        title: 'Vectorisation',
        content: 'Méthode d\'optimisation consistant à appliquer une opération sur l\'ensemble d\'un tableau ou d\'une colonne en une seule instruction CPU, éliminant le besoin de boucles itératives (comme les boucles "for" en Python). En déléguant ces calculs à des bibliothèques compilées sous-jacentes (souvent en C), les performances sont drastiquement maximisées.'
    },
    {
        id: 'watchdog',
        title: 'Watchdog ou chien de garde',
        content: 'Mécanisme de sécurité logiciel ou matériel conçu pour surveiller le temps d\'exécution d\'un programme. Si le script ou la simulation reste bloqué ou dépasse un temps imparti, le watchdog l\'interrompt automatiquement pour éviter la saturation des ressources.'
    },
    {
        id: 'cohort',
        title: 'Cohorte',
        content: 'En bioinformatique et médecine, une cohorte désigne un groupe de patients ou de profils tumoraux partageant des caractéristiques cliniques ou moléculaires similaires, étudiés conjointement pour analyser la réponse à un modèle biologique.'
    },
    {
        id: 'ref-card',
        title: 'Ref card',
        content: 'Fiche de référence rapide (Quick Reference Card). Document synthétique destiné aux utilisateurs qui résume les commandes essentielles, la syntaxe des requêtes ou l\'utilisation globale d\'un outil sans entrer dans les détails complexes du code source.'
    },
    {
        id: 'merge',
        title: 'La commande Merge',
        content: 'Commande Git permettant de fusionner l\'historique et les modifications d\'une branche distincte au sein de la branche courante.'
    },
    {
        id: 'tdd',
        title: 'Test-Driven Development',
        content: 'Méthode de développement (Développement Piloté par les Tests) où le développeur écrit le test unitaire avant d\'implémenter le code fonctionnel. Le code est ensuite écrit pour valider le test, puis refactorisé pour être nettoyé.'
    },
    {
        id: 'ci',
        title: 'Intégration Continue',
        content: 'Pratique de développement logiciel (Continuous Integration) consistant à automatiser la vérification, la compilation et l\'exécution des suites de tests à chaque fois qu\'un développeur fusionne du code dans le dépôt partagé, garantissant ainsi la stabilité continue de l\'application.'
    },
    {
        id: 'colomoto',
        title: 'CoLoMoTo',
        content: 'Consortium for Logical Models and Tools. Collectif international de chercheurs axé sur le développement, la standardisation (comme le format SBML-qual) et l\'interopérabilité des outils de modélisation logique et qualitative appliqués aux systèmes biologiques.'
    },
    {
        id: 'mcct',
        title: "MaBoSS-Coherency Checker Tool",
        content: "Nom du logiciel développé pour automatiser et évaluer la cohérence des simulations stochastiques MaBoSS via la vérification d'assertions et de logiques temporelles. Il est abrégé sous le sigle MCCT."
    },
    {
        id: 'recursion',
        title: "Principe de récursivité",
        content: "Concept algorithmique où une fonction résout un problème en s'appelant elle-même sur des sous-problèmes plus petits, jusqu'à atteindre une condition d'arrêt (cas de base)."
    },
    {
        id: 'fp',
        title: 'Fixpoints',
        content: "États stables (points fixes) ou attracteurs asymptotiques d'un modèle logique vers lesquels la simulation converge à long terme, caractérisés par le fait que les probabilités de transition de configurations n'évoluent plus."
    }
];

export const getInfobulle = (id) => {
    if (!id) return null;
    const normalizedId = id.toLowerCase();
    return infobullesData.find(item => item.id.toLowerCase() === normalizedId);
};