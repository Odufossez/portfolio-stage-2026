<script setup>

import BackButton from "../components/BackButton.vue";
import {ref} from "vue";
import InfoHover from "../components/InfoHover.vue";
import Trace from "../components/Trace.vue";
import TraceHover from "../components/TraceHover.vue";
import ColleagueHover from "../components/ColleagueHover.vue";

const activeRoot = ref("algo");
const subRoot = ref(1)
</script>

<template>
  <div class="page-container">
    <header class="page-header">
      <BackButton to="/home" label="Retour à l'accueil"/>
      <h1>Technique</h1>
      <p>Cette partie met en valeur les savoir-faire techniques que j'ai mobilisés pendant mon stage. Cette partie ne se
        concentre que sur le développement du
        <InfoHover id="mcct">MCCT</InfoHover>
        . Tous les savoir-faire suivants sont
        répartis sur toutes les sections et sous-sections de cette page et sont utilisés en <b>Python</b>.
      </p>
    </header>
    <div class="encadre-gris">
      <h3>Savoir-faire mobilisés</h3>
      <p>
        <span class="blue">Gérer les exceptions</span>,
        <span class="purple">programmer en orienté objet</span>,
        <span class="orange">faire des choix d'implémentation</span>,
        <span class="pink">concevoir des échantillons de tests</span>,
        <span class="light-blue">exploiter des données avec Pandas</span>,
        <span class="dark-green">rédiger des assertions</span>,
        <span class="dark-yellow">rédiger des tests</span>,
        <span class="dark-orange">utiliser des bouchons et/ou des mocks</span>,
        <span class="dark-purple">exploiter des modules</span>,
        <span class="green-blue">gérer des algorithmes complexes</span>
      </p>
    </div>
    <section class="missions-section">
      <div class="tabs-list">
        <button class="tab-item" :class="{active: activeRoot === 'algo'}" @click="activeRoot='algo'; subRoot=1">
          Algorithmie
        </button>
        <button class="tab-item" :class="{active: activeRoot === 'unit-test'}"
                @click="activeRoot='unit-test'; subRoot=1">
          Tests unitaires
        </button>
        <button class="tab-item" :class="{active: activeRoot === 'data-ttt'}" @click="activeRoot='data-ttt'; subRoot=1">
          Traitement de données
        </button>
        <button class="tab-item" :class="{active: activeRoot === 'bilan'}" @click="activeRoot='bilan'; subRoot=1">
          Bilan et évaluation
        </button>
      </div>

      <div class="styled-box mission-content">
        <div v-if="activeRoot === 'algo'">
          <div>
            <h2>Application de l'algorithmie</h2>
            <p>
              Dans cette rubrique, je vais vous présenter 5 savoir-faire que j'ai largement mobilisés pendant ce stage
              dans le cadre de la conception d'algorithmes.
            </p>
          </div>
          <div class="sub-tabs-bar">
            <button class="sub-tab-item" :class="{active: subRoot === 1}" @click="subRoot=1">Créer un module en Python
            </button>
            <button class="sub-tab-item" :class="{active: subRoot === 2}" @click="subRoot=2">Utiliser des logigrammes
            </button>
            <button class="sub-tab-item" :class="{active: subRoot === 3}" @click="subRoot=3">Fusionner des dataframes -
              Concept
            </button>
            <button class="sub-tab-item" :class="{active: subRoot === 4}" @click="subRoot=4">Fusionner des dataframes -
              Application
            </button>
            <button class="sub-tab-item" :class="{active: subRoot === 5}" @click="subRoot=5">Manipuler une REGEX
            </button>

          </div>
          <div class="sub-inner-details" v-if="subRoot === 1">
            <h3>Créer un module python</h3>
            <div class="encadre-gris">
              <h4>Définition d'un module</h4>
              <p>
                Les modules sont des programmes Python qui contiennent des fonctions souvent utilisées, aussi appelés
                "<i>libraries</i>" ou bibliothèques, ce sont des boîtes à outils.
              </p>
              <p class="exemple">
                "math" est un module de Python.
              </p>
              <p>
                De manière plus précise, <b> le module est le fichier qui permet d'importer les fonctions</b> contenues
                dans les
                fichiers qui ont l'extension <span class="code-inline">.py</span>.
              </p>
            </div>
            <div class="side-by-side">
              <div class="text-content">
                <p>
                  Diviser un programme Python en plusieurs fichiers permet de mieux le structurer et de faciliter son
                  maintien.
                  Pour mon projet, je préférais éviter de modifier le code de pyMaBoSS, déjà maintenu par
                  <ColleagueHover name="noel">Vincent</ColleagueHover>
                  .
                  <span class="dark-purple">J'ai donc ajouté un dossier dans le code pour y mettre mes
                    fichiers.</span> Ce dossier est encadré en rouge sur la <b>trace 26</b> ci-contre.
                </p>
                <p>
                  Mais créer le dossier ne suffit pas à faire du programme un module exploitable par d'autres. Il faut
                  <span
                      class="dark-purple">exporter la classe ou les fonctions que l'on souhaite mettre à disposition.</span>
                  Pour cela, on crée un fichier nommé <span class="code-inline">__init__.py</span> dans lequel on va
                  mettre
                  les noms de ce que l'on souhaite exporter. Sur la <b>trace 27</b> ci-dessous, on peut voir que
                  j'exporte
                  deux classes : <span class="code-inline">MaBoSSEvaluator</span> et <span class="code-inline">Visualiser</span>.
                  Je n'oublie pas de l'exporter depuis MaBoSS aussi, maintenant qu'il y a accès (partie basse de la
                  <b>trace 27</b>).
                  <span class="dark-purple">Son exportation depuis le fichier init de MaBoSS permet à l'utilisateur de récupérer
                  mon programme depuis MaBoSS sans manipulations supplémentaires.</span>
                </p>
                <p>
                  Grâce à ces fichiers, mon module est accessible depuis des <span
                    class="green">Jupyter Notebooks</span>
                  ou d'autres programmes. Comme sur la <b>trace 28</b> ci-dessous, sur laquelle on importe maboss
                  (pour avoir accès à certaines autres fonctions) puis mon programme, appelé temporal_logic, en lui
                  donnant un alias "tl". <b class="dark-purple">Il n'est pas nécessaire d'importer maboss avant
                  d'importer temporal_logic grâce
                  à l'exportation depuis le fichier init de maboss</b>.
                </p>

              </div>
              <div class="trace-content">
                <Trace traceId="dossier-module"/>
              </div>
            </div>
            <div class="side-by-side">
              <div class="trace-content">
                <Trace traceId="import-module"/>
              </div>
              <div class="trace-content">
                <Trace traceId="import-in-prog"/>
              </div>
            </div>


          </div>

          <div class="sub-inner-details" v-if="subRoot===2">
            <h3>Concevoir des logigrammes</h3>
            <p>
              Je le mentionnerai à nouveau mais quand je travaille sur un code, je suis souvent confronté au syndrome
              de la
              page blanche. Je sais ce que je veux, mais je ne sais pas par où commencer. <b>Dessiner mes programmes</b>
              me permet d'avoir un point de départ et de mieux visualiser le chemin que je dois emprunter pour écrire ce
              que je veux.
            </p>
            <div class="side-by-side">
              <div class="text-content">
                <p>
                  <span class="green-blue">Pendant mon stage, j'ai dû rédiger de nombreuses fonctions, plus ou moins complexes.</span>
                  L'une d'entre elles est la computation de l'expression logique (celle qui est passée dans la query).
                  Son diagramme de flux est visible sur la <b>trace 5</b> ci-contre.
                  <span class="green-blue">Cette fonction est utilisée pour filtrer les dataframes en fonction de
                    l'expression logique qui a été passée.</span>

                </p>
                <p>
                  Pour élaborer cet algorithme, il a fallu découper la computation en plusieurs étapes :
                </p>
                <ul>
                  <li><p><b>Étape 1 : </b>vérifier que l'expression logique est correcte (ne commence pas ou ne se
                    termine
                    pas par un
                    symbole logique <span class="exemple">& ou |</span> et deux noms ou deux symboles ne s'enchaînent
                    pas
                    <span class="exemple">"& &" ou "nom1 nom2"</span>);</p></li>
                  <li><p><b>Étape 2 : </b>une itération sur les membres de l'expression pour extraire les colonnes et/ou
                    les lignes
                    qui correspondent et pour savoir comment fusionner le dataframe temporaire <span
                        class="code-inline">temp</span>
                    avec le dataframe de travail <span class="code-inline">work_df</span>;</p></li>
                  <li><p><b>Étape 3 : </b>à la fin de la boucle, on supprime les lignes qui contiennent des cellules
                    vides
                    (valeur <span class="code-inline">NaN</span>) et on retourne le dataframe de travail.</p></li>
                </ul>
                <p>
                  Deux points de cette fonction étaient intéressants algorithmiquement à traiter : la fusion des
                  dataframes et
                  le support des conditions imbriquées (<span class="exemple">A & (B | (C & D))</span>). Je détaille
                  <span class="green-blue">la fusion de dataframes</span> dans la <a @click="subRoot=3">sous-section
                  suivante.</a>
                </p>
              </div>
              <div class="trace-content">
                <Trace traceId="compute-logical-expression-diagramme"/>
              </div>
            </div>
            <div class="side-by-side">
              <div class="trace-content">
                <Trace traceId="parsing_logical_exp_flow_chart"/>
              </div>
              <div class="text-content">
                <p>
                  Concernant <span class="green-blue">le support des conditions imbriquées</span>, j'utilise la présence
                  de parenthèses ouvrantes et fermantes pour <span class="green-blue">créer des sous-listes de l'expression.</span>
                  Sur la <b>trace 6</b> ci-contre on peut voir la flow-chart de la fonction qui permet de parser
                  l'expression
                  logique. En input de la fonction, on passe l'expression sous forme d'une liste de chaînes de
                  caractères (<span class="code-inline">strings</span>)
                  <span class="code-inline">list[str]</span>.
                  En output de la fonction, on renvoie une liste de string aussi, mais nettoyée des caractères vides,
                  d'espaces et
                  des parenthèses. Également, les membres qui étaient entourés par des parenthèses sont regroupés en
                  sous-listes.
                </p>
                <span class="exemple">
                    L'expression "A & ( B | ( C & D ) )" va être découpée : ['A', '&', ['B', '|', ['C', '&', 'D']]]
                  </span>
              </div>
            </div>
            <p>
              Puisque l'algorithme va <span class="green-blue">itérer sur les caractères de l'expression</span>
              il faut prendre en compte qu'un membre puisse faire partie d'une sous-expression, et donc créer une liste.
              Ainsi, tant que l'expression a des membres, on teste le membre :
            </p>
            <ul>
              <li><p>
                Si c'est un symbole vide (un espace par exemple), on l'ignore et on passe au suivant (instruction
                <span class="code-inline">continue</span>),
              </p></li>
              <li>
                <p>
                  Si c'est une parenthèse ouvrante : on appelle en
                  <InfoHover id="recursion">récursion</InfoHover>
                  la fonction,
                </p>
              </li>
              <li><p>
                Si c'est une parenthèse fermante : on retourne la liste <span class="code-inline">parsed_exp</span>
                contenant la sous-expression qui sera ajoutée à la variable <span class="code-inline">parsed_exp</span>
                (instruction <span class="code-inline">parsed_exp.append(parse_logical_expression(it))</span> "it" étant
                le membre actuel de l'itération),
              </p></li>
              <li><p>
                Sinon, on ajoute ce symbole à <span class="code-inline">parsed_exp</span>.
              </p></li>
            </ul>
            <p class="green-blue">
              <b>
                Grâce à ce formatage, je vais pouvoir traiter les membres un à un et récupérer les colonnes au fur et à
                mesure
                pour appliquer l'expression morceau par morceau.
              </b>
            </p>

          </div>

          <div class="sub-inner-details" v-if="subRoot===3">
            <h3>Fusion de dataframes : présentation du concept</h3>
            <p>
              Une fusion de tableau sur une logique de ET logique (&) n'est pas la même qu'une fusion sur un OU logique (|).
              En effet, la règle logique pour qu'un ET logique (&) soit VRAI est que les DEUX membres doivent être VRAIS.
              C'est ce qui est illustré par les deux premiers tableaux de la <b>trace 29</b> ci-dessous. Dans un premier
              temps on voit que les valeurs <span class="code-inline">float</span> des lignes ont été remplacées
              par des valeurs <span class="code-inline">boolean</span> pour comprendre la mécanique.
            </p>
            <p>
              Dans la seconde partie de cette même trace, on voit deux tableaux verts, que l'on va fusionner en suivant
              une
              logique ET logique (&) et une logique OU logique (|) pour voir la différence.
            </p>
            <p>
              Dans la <a @click="subRoot=4">section suivante</a>, je vous parlerai plus en détail des fonctions
              <span class="code-inline">merge_or</span>
              et <span class="code-inline">merge_and</span>, applications directes des concepts présentés ici.
            </p>
            <div class="side-by-side">
              <div class="trace-content">
                <Trace traceId="tableaux-log-exp"/>
              </div>

              <div class="text-content">
                <div>
                  <h4>Fusions simples</h4>
                  <p>
                    On a donc deux expressions : <b>A | !B</b> ("A ou pas B") et <b>A & !B</b> ("A et pas B"). Le
                    principe
                    de l'exemple, c'est de voir physiquement la différence entre les données à récupérer en fonction de
                    l'expression. Dans cet exemple, la logique des lignes a été simplifiée : les valeurs sont des
                    booléens.
                    Cependant, cet exemple n'est pas que théorique puisque cette configuration correspond à
                    <span class="light-blue">l'application d'un masque conditionnel</span> pour récupérer les bonnes
                    lignes
                    d'un dataframe. Je parle de cette fonctionnalité dans la section sur
                    <a @click="subRoot=1; activeRoot='data-ttt'">le traitement de données</a>.
                  </p>
                  <p>
                    Ainsi, pour récupérer les lignes qui remplissent les conditions, il n'y a qu'à appliquer la formule
                    logique : <b>A | !B on garde là où la valeur de A est à 1 ou que celle de B à 0.</b> De même pour la
                    formule de ET logique (&) sauf que <b>l'on garde seulement si A est à 1 ET que B est à 0.</b> On voit
                    très clairement que les lignes à garder (en jaune fluo) sont différentes. Il est donc
                    <b>primordial</b>
                    <span class="green-blue"> d'adapter le comportement du programme en fonction des symboles.</span>
                  </p>
                </div>
              </div>

            </div>
            <div>
              <h4>Fusion de tableau</h4>
              <p>
                Pour ce second exemple, on part de deux tableaux de départ, ceux en vert sur la trace. On va les
                fusionner en suivant des logiques différentes, et voir les différences. Au préalable, j'établis l'impact
                d'une logique sur les tableaux :
              </p>
              <ul>
                <li>
                  <p>
                    <b>Dans une logique de OU </b>: on garde ce qui est <b>commun aux deux membres sans le dédoubler</b>
                    et
                    ce qu'il y a en plus;
                  </p>
                </li>
                <li>
                  <p>
                    <b>Dans une logique de ET </b>: on garde <b>seulement</b> ce qui est commun aux <b>deux membres</b>.
                  </p>
                </li>
              </ul>
              <p>
                Ainsi, pour le ET logique (&), on ne va garder que <b>la colonne A</b>. Pour le
                OU logique (|),
                on garde les trois colonnes. Mais il faut noter une chose importante : dans le cas du OU logique (|) on se
                retrouve
                avec une ligne contenant une valeur vide car dans un des tableaux, il n'y avait de valeur pour B à cet
                endroit. <span class="green-blue">C'est pour cette raison que l'on va retirer les lignes contenant
                une valeur <span class="code-inline">NaN</span>.</span> J'ai prévu un second cas, qui permet de
                <span class="green-blue">garder les temps d'un des deux dataframes pour pouvoir récupérer les valeurs
                manquantes</span>.
              </p>
            </div>
          </div>

          <div class="sub-inner-details" v-if="subRoot===4">
            <h3>Concevoir les fonctions de fusion</h3>
            <div class="encadre-gris">
              <i>J'explique le concept derrière les fonctions présentées dans cette sous-section dans la
                <a @click="subRoot=3">sous-section précédente</a></i>
            </div>
            <p>
              L'utilisation de dataframes de Pandas permet d'accéder à un grand nombre de fonctions très utiles pour
              manipuler
              ces objets. Cependant, elles ont des limitations qui m'ont obligé à écrire mes propres fonctions de fusion
              de dataframes. C'est d'elles que je parle dans cette section.
            </p>
            <div class="side-by-side text-only">
              <div class="text-content">
                <h4>Logique de OU</h4>
                <p>
                  Dans cette section, je vais parler de la conception et de l'intérêt de la <b>fonction de merge
                  personnalisée</b>
                  que j'ai implémentée. La
                  <TraceHover id="merge-or-fct">trace 30</TraceHover>
                  est visionnable dans
                  <router-link to="/traces-compilation">l'espace des traces</router-link>
                  et présente le logigramme
                  de la fonction <span class="code-inline">merge_or</span>.
                </p>
                <h5>Intérêt</h5>
                <p>
                  Pour rappel, la fonction <span class="code-inline">merge_or</span> permet de fusionner deux tableaux
                  en
                  suivant une logique de OU <b>en gardant toutes les colonnes</b>. La fonction Pandas qui s'en
                  rapproche est <span class="code-inline">merge(how='outer')</span>. Celle-ci aurait créé des colonnes
                  dupliquées, ce que je cherche à éviter. J'ai privilégié une fusion par <b>complétion</b> :
                  <span class="green-blue">
                    si la donnée est dans df1 alors on la garde, si elle n'y est pas (<span
                      class="code-inline">NaN</span>),
                    on va la chercher dans df2.
                  </span>
                </p>
                <h5>Réalisation</h5>
                <p>
                  Bien que la
                  <TraceHover id="merge-or-fct">trace 30</TraceHover>
                  montre les différentes étapes de la
                  fonction, je vais présenter ici certaines étapes clés. Elles porteront le même nom que dans le
                  logigramme.
                </p>
                <p>
                  Un point intéressant de cette fonction est</p>
                <span class="code-block">result=df1_idx.combine_first(df2_idx).reset_index()</span>
                <p><span class="light-blue">qui suit la
                  transformation de la colonne <b>Time</b> en index pour que l'on puisse superposer les valeurs dessus.</span>
                  En effet, il est possible que les valeurs de l'index 0 ne soient pas les mêmes pour les deux tableaux.
                  Si on superposait par index sans avoir mis la colonne <b>Time</b> à la place, on aurait de grosses
                  incohérences et de la perte d'informations. Cette ligne se décompose en deux parties :
                  <span class="code-inline">combine_first</span> et <span class="code-inline">reset_index</span>.
                </p>
                <ul>
                  <li><p><b class="green-blue">combine_first</b> réalise une fusion par alignement des index (le temps
                    en l'occurrence).
                    C'est
                    elle qui agit comme une opération de <b>complétion</b>.</p></li>
                  <li><p>
                    <b class="green-blue">reset_index</b> extrait à nouveau le temps pour le remettre sous forme de
                    colonne
                    <span class="code-inline">Time</span>
                  </p></li>
                </ul>

                <p>
                  La seconde partie intéressante de cette fonction est la boucle qui suit. A noter que bien que
                  sur la
                  <TraceHover id="boucle-merge-or">trace 32</TraceHover>
                  ci-dessous on ne puisse voir que la boucle,
                  celle-ci n'est exécutée <span class="blue"> que si le dataframe contenant les noeuds passés à la fonction n'est pas vide
                      pour éviter des exceptions.</span>
                </p>
                <Trace traceId="boucle-merge-or"/>
                <p>
                  <span class="green-blue">La boucle se décompose en 4 grandes étapes</span> :
                </p>
                <ul>
                  <li>
                    <p><b>Filtrage</b> en ignorant la colonne du temps <span class="code-inline">Time</span></p>
                  </li>
                  <li><p><b>Tri</b> des colonnes, via la fonction <span class="code-inline">check_is_node</span>
                    pour mettre les nodes dans une liste et les states dans une autre afin de les séparer</p></li>
                  <li><p>
                    <b>Reconstruction</b> du dataframe avec les nouvelles listes dans l'ordre et triées par ordre
                    alphabétique grâce à la méthode <span class="code-inline">sorted</span> sur l'avant-dernière ligne
                  </p>
                    <span
                        class="code-block">ordered_cols = ['Time'] + sorted(node_cols) + <br> sorted(state_cols)</span>
                  </li>
                  <li><p>
                    <b>Application</b> du tri sur le dataframe <span class="code-inline">results</span> sur la dernière
                    ligne, <span class="code-inline">result = result[ordered_cols]</span>
                  </p></li>
                </ul>
                <h5>Conclusion</h5>
                <p>
                  Mécaniquement, cette boucle va <b>contourner</b> <span class="light-blue">la logique de fusion aveugle de Pandas qui ne fait pas
                  la différence entre deux colonnes qui ont le même nom</span>. <span class="green-blue">Sans cette logique, une colonne d'état qui n'a
                  qu'un seul node, écraserait la colonne propre au node ou inversement.</span>
                  <span class="green-blue">De plus, la logique de tri permet d'avoir une sortie standardisée des tableaux,</span>
                  rendant plus simple la documentation et les tests.
                </p>
              </div>
              <hr class="separator-v"/>
              <div class="text-content">
                <h4>Logique de ET</h4>
                <p>
                  Dans cette section, je vais parler de la conception et de l'intérêt de la fonction de merge
                  personnalisée
                  que j'ai implémentée. La
                  <TraceHover id="merge-and-fct">trace 31</TraceHover>
                  est visionnable dans
                  <router-link to="/traces-compilation">l'espace des traces</router-link>
                  et présente le logigramme de la
                  fonction <span class="code-inline">merge_and</span>.
                </p>
                <h5>Intérêt</h5>
                <p>
                  Pour rappel, la fonction <span class="code-inline">merge_and</span> permet de fusionner deux tableaux
                  en
                  suivant une logique de ET, <b>ne gardant que les colonnes communes aux deux dataframes passés en
                  paramètres</b>.
                  La fonction Pandas qui s'en rapproche est <span class="code-inline">merge(how='inner')</span>. Bien
                  que
                  celle-ci aurait pu suffire, j'applique une asymétrie de traitement aux noeuds et aux états. <span
                    class="light-blue"> Utiliser
                  la
                  fonction merge de Pandas ne m'aurait pas permis de mettre en place cette asymétrie.</span>
                </p>
                <h5>Asymétrie du ET</h5>
                <p>
                  <span class="green-blue">En effet, la logique ne s'applique pas de manière uniforme sur toutes les colonnes des dataframes.</span>
                  Les colonnes de nodes sont <b>toujours</b> gardées, qu'elles soient présentes dans les deux dataframes
                  ou non. A contrario, si la colonne est un state, celle-ci ne sera gardée que si elle est présente dans
                  les deux dataframes.
                </p>
                <h5>Réalisation</h5>
                <p>
                  Bien que la
                  <TraceHover id="merge-and-fct">trace 31</TraceHover>
                  montre les différentes étapes de la
                  fonction, je vais présenter ici certaines étapes clés. Elles porteront le même nom que dans le
                  logigramme.
                </p>
                <p>
                  Un point intéressant de cette fonction est
                </p>
                <span class="code-block">
                  all_source_cols = <br> set(df1.columns).union(set(df2.columns))
                  <br>
                  all_source_cols.remove('Time')
                </span>
                <p>
                  elle crée un ensemble, un <span class="code-inline">set</span>, contenant tous les noms des colonnes
                  présentes dans df1 <b>ou</b> dans df2 grâce à une <span class="code-inline">union</span> :
                  <b class="light-blue">j'élimine directement les doublons de noms de colonnes.</b>
                  Je retire la colonne <span class="code-inline">Time</span> car servant de clé de jointure, elle ne
                  doit
                  pas être traitée comme une variable dans la boucle qui suit.
                </p>
                <p>
                  La boucle, seconde partie intéressante de cette fonction, est visible sur la
                  <TraceHover id="boucle-merge-and">trace 33</TraceHover>
                  ci-dessous. Celle-ci est toujours exécutée
                  (contrairement à celle de la fonction <span class="code-inline">merge_or</span>)
                </p>
                <Trace traceId="boucle-merge-and"/>
                <p class="green-blue">et elle se décompose
                  en 3 grandes étapes :</p>
                <ul>
                  <li>
                    <p>
                      <b>La gestion des suffixes </b>: au début de la fonction, j'effectue un <span class="code-inline">merge</span>
                      entre les deux dataframes :
                      <Trace traceId="merge-and-suffixes" :showLegend="false"/>
                      le programme vérifie ce suffixe pour savoir quelle source de données manipuler.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Le tri entre nodes et states </b>: comme pour la fonction <span
                        class="code-inline">merge_or</span>,
                      on trie les colonnes pour "ranger" les nodes ensemble et les states ensemble. Ce que l'on fait en
                      plus,
                      que j'ai mentionné précédemment, c'est la logique asymétrique. Celle-ci s'applique via la
                      condition
                      <span class="code-inline">if-else</span> :
                    </p>
                    <span class="code-block">if col in df1.columns and col in df2.columns:</span>
                    <p>
                      appliquée uniquement sur les colonnes states (partie <span class="code-inline">else</span> du
                      <span class="code-inline">if is_node</span>.
                    </p>
                  </li>
                  <li><p>
                    <b>Le nettoyage final </b>: à chaque fois qu'une colonne est effectivement dans les deux dataframes,
                    on enlève le suffixe de son nom pour avoir un tableau dont les noms de colonne sont homogènes.
                  </p>
                    <span class="code-block">merged = merged.rename(columns={m_name: col})</span>
                  </li>
                </ul>
                <h5>Conclusion</h5>
                <p>
                  Ainsi la fonction <span class="code-inline">merge_and</span> permet de fusionner deux tableaux <span
                    class="green-blue">en ajoutant
                  des logiques supplémentaires plus avancées que le simple <span
                      class="code-inline">merge(how='inner')</span></span>.
                  <span class="green-blue">On évite les colonnes polluées par des suffixes, on permet une conservation différenciée avec la logique
                  asymétrique et on ne perd pas d'information.</span>
                </p>
              </div>
            </div>
          </div>

          <div class="sub-inner-details" v-if="subRoot===5">
            <h3>Manipuler une REGEX</h3>
            <div class="side-by-side text-only">
              <div class="text-content">
                <h4>Contexte</h4>
                <p>
                  Lors de la création de cet outil, j'ai dû choisir une méthode pour permettre à l'utilisateur de "poser
                  sa
                  question" vis-à-vis de la simulation. Je devais mettre en relation l'utilisateur, la simulation et
                  l'outil
                  qui traite les données (
                  <router-link to="/stage-enjeux">sic enjeux du stage</router-link>
                  ).
                  Il y avait plusieurs pistes, je pouvais reprendre le principe de
                  <InfoHover id="maboss_test">MaBoSS_test</InfoHover>
                  qui utilise des tests unitaires pour faire ses évaluations
                  ou utiliser une autre logique. C'est la seconde option que j'ai choisie, pour plusieurs raisons :
                </p>
                <ul>
                  <li>
                    <p class="orange">
                      <b>La contrainte d'automatisation</b> : En plus d'offrir aux chercheurs et chercheuses un outil
                      pour
                      tester leurs modèles, la projection d'insertion de cet outil dans un pipeline de construction,
                      validation
                      et optimisation de modèle apportait la contrainte de pouvoir automatiser d'une manière ou d'une
                      autre
                      l'interrogation du modèle, notamment possiblement par l'utilisation d'IA. MaBoSS_test ne répondant
                      que
                      très difficilement voire pas à cette contrainte, je risquais de perdre beaucoup de temps à créer de
                      nouvelles couches plutôt que
                      <span class="green-blue">d'intégrer une logique d'autonomie au programme.</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>La complexité d'usage de MaBoSS_test</b> : Pour effectuer une évaluation avec MaBoSS_test, le
                      chercheur
                      doit effectuer ses propres simulations pour les évaluer en appelant une fonction dans laquelle il
                      passe
                      ses modifications (une mutation par exemple). Une assertion d'exemple ci-dessous, sur la <b>trace
                      35</b> :
                    </p>
                    <Trace traceId="maboss_test-assertion"/>
                  </li>
                </ul>
              </div>
              <div class="text-content">
                <h4>Solution</h4>
                <p>
                  Pour répondre à ce cahier des charges, j'ai donc entrepris de refaire un outil qui utilisera une autre
                  méthodologie que MaBoSS_test. <span class="orange">Je voulais rendre l'outil le plus intuitif possible pour l'utilisateur</span>
                  et aussi, j'avais remarqué que dans MaBoSS_test, on avait tendance à perdre des informations
                  concernant
                  l'assertion que l'on teste, en grande partie parce que l'on doit simuler avant.
                  <span class="orange">Je voulais donc aussi
                    limiter cette perte d'information.</span>
                </p>
                <p>
                  J'ai donc décidé de permettre à l'utilisateur de poser une question au sens propre du terme.
                  Évidemment,
                  le laisser poser une question en langage courant aurait été vraiment trop complexe, donc il fallait
                  que
                  j'établisse un langage à mi-chemin entre la machine et l'utilisateur. <span class="orange">Les informations pouvant être
                  quantifiées et codifiées, l'utilisation d'une expression régulière (REGEX) est appropriée.</span>
                </p>
                <p>
                  Le processus peut ainsi être défini comme sur la <b>trace 36 ci-dessous.</b> On part d'une phrase,
                  une affirmation scientifique (issue d'un papier ou d'un expert), on la transforme en query (dans le
                  langage
                  normalisé), on la passe à l'évaluateur avec un model, le programme se charge de tout : simulations,
                  traitements
                  et renvoie des résultats.
                </p>
                <Trace traceId="processus-query" :showLegend="false"/>
              </div>

            </div>
            <h4>Intérêt de la REGEX</h4>
            <p>
              <span class="orange">L'intérêt d'établir une expression régulière pour un tel outil est de rendre plus prédictible le traitement
              des simulations d'une part mais aussi, elle permet de répondre à la contrainte d'automatisation puisque
                on peut envisager qu'une IA de type LLM fasse la transition entre le langage courant et la query.</span>
              J'ai d'ailleurs eu le temps de mener cette expérience et les essais n'ont été que peu concluants
              (mai 2026).
              Une conversation avec un ancien doctorant de
              <ColleagueHover name="calzone">Laurence</ColleagueHover>
              qui
              travaille beaucoup avec des modèles d'IA non pas larges mais soit spécialisés soit réentraînés.
              <span class="orange">On est
                arrivé à la conclusion qu'il faudrait avoir un serveur MCP avec une IA spécialisée pour cette transition</span>
              et ce n'est pas un objectif qui était atteignable pendant mon stage.
            </p>
            <h3>Plus de détails sur l'expression régulière</h3>
            <h4>Définition de l'expression régulière</h4>
            <div class="encadre-gris">
              <h5>Définition de REGEX</h5>
              <p>Une expression régulière (ou regular expression, REGEX) décrit un motif, un pattern que nous souhaitons
                rechercher et localiser dans du texte, incluant des chiffres.</p>
            </div>
            <p>
              La REGEX que j'ai établie est longue :
            </p>
            <span class="code-block">
              ^(Pmax|Pmin|P|T|Tmin|Tmax|Inc|Dec)\((node|state|fp)\:(.+?)\)(?:\s*(<=|>=|<|>|=|==|!=|/)\s*(0(?:\.\d+)?|1(?:\.0+)?|\?|))?(?:\s*\[(.*?)\])?(?:\s*\[(.*?)\])?(?:\s*\[(.*?)\])?
            </span>
            <p>Elle peut cependant être résumée comme sur le schéma suivant : </p>
            <Trace traceId="schema-query" :showLegend="false"/>
            <p>
              À expliquer génériquement, serait compliqué. Donc je vais la décrire morceau par morceau et expliquer
              comment le morceau extrait est vérifié et validé. D'abord, pour découper et associer les informations
              j'utilise le parser intégré de Python qui permet de passer une REGEX et une chaine de caractères pour
              faire un <span class="code-inline">match</span> :
              <span class="code-inline">match = re.match(Parser.QUERY_PATTERN, input.strip())</span>. QUERY_PATTERN
              c'est
              la REGEX et input.strip() c'est la phrase passée de laquelle on supprime les espaces au début et à la fin. La
              variable
              "match" est de type <span class="code-inline">Match</span> et va avoir ses propres fonctions notamment
              <span class="code-inline">match.group(n)</span> qui permet de récupérer le n-ième groupe qui a été
              associé.
              <span class="blue">
                Si aucun groupe n'a été trouvé, une exception est levée pour signaler que la query ne respecte pas
                la REGEX.
              </span>
            </p>
            <div class="side-by-side text-only">
              <div class="text-content">
                <h5>Type de Query (Query type)</h5>
                <div class="side-by-side">
                  <div class="text-content">
                    <p>
                      Le <b>type du query</b> (Query type sur la
                      <TraceHover id="schema-query">trace 37</TraceHover>
                      ) extrait
                      du query sous forme de <span class="code-inline">str</span>, sera associé au type
                      <span class="code-inline">QueryType</span>, un
                      <InfoHover id="enum">enum</InfoHover>
                      qui liste le nom et la chaine de caractères
                      associée.
                      <span class="blue">Ainsi, si la chaine de caractère ne correspond à aucun type, cela lève une erreur
                      et le programme s'arrête.</span>
                    </p>
                  </div>
                  <div class="trace-content">
                    <Trace traceId="querytype-enum"/>
                  </div>
                </div>
                <h5>Type de cible (Target type)</h5>
                <div class="side-by-side">
                  <div class="trace-content">
                    <Trace traceId="targettype-enum"/>
                  </div>
                  <div class="text-content">
                    Le <b>type de cible</b> (Target type sur la
                    <TraceHover id="schema-query">trace 37</TraceHover>
                    )
                    extrait sous forme de chaine de caractère du query, sera associé au type
                    <span class="code-inline">TargetType</span>, un enum qui liste les noms et la chaine de caractères
                    associée à chacun de ces noms. <span class="blue">Si la chaine de caractère extraite ne correspond à aucun de ces noms,
                    une erreur est levée.</span>
                  </div>
                </div>
                <h5>Noms de cible (Target name(s))</h5>
                <p>
                  Les noms de cibles doivent chacun être séparés par une virgule. Cette séparation permet d'appliquer
                  la fonction <span class="code-inline">split(",")</span> pour séparer les noms dans une liste. Ceux-ci
                  sont vérifiés lors des computations dans le programme.
                </p>
                <h5>Opérateur et valeur (Operator and value)</h5>
                <p>
                  Pour vérifier la validité de l'opérateur, celui-ci est associé à un enum de la même forme que ceux des
                  traces
                  <TraceHover id="querytype-enum">38</TraceHover>
                  et
                  <TraceHover id="targettype-enum">39</TraceHover>
                  ci-dessus. <span class="green-blue">La valeur passée est, elle, vérifiée dans la fonction du FormulaChecker</span>
                  pour établir si elle
                  <span class="blue">respecte l'intervalle autorisé (entre 0 et 1) et adaptée au type de query.</span>
                </p>
              </div>
              <hr class="separator-v">
              <div class="text-content">
                <h5>Contraintes logiques (Logical constraint)</h5>
                <p>
                  La "dissection" de la chaine de caractère qui est associée aux contraintes logiques se fait de la
                  même manière que pour la séparation des noms de cible mais avec un autre caractère en paramètres :
                  <span class="code-inline">split(" ")</span>. <span class="green-blue">Puis cette liste passe dans une fonction qui va
                  permettre d'enlever les parenthèses de l'équation et qui fait des sous-tableaux avec les conditions
                  imbriquées </span>(voir <a @click="subRoot=2">Utiliser des logigrammes, deuxième paragraphe</a>).
                </p>
                <h5>Mutations</h5>
                <p>
                  Les
                  <InfoHover id="mutate">mutations</InfoHover>
                  permettent de faire varier la simulation de manière
                  contrôlée et de comparer ces résultats avec une autre simulation <span class="green-blue">(soit une autre mutation soit la
                  mutation du "wild-type", une simulation sans mutation).</span> Ce paramètre est obligatoire dans le
                  cadre des
                  opérations qui comparent deux mutations. Les mutations sont composées d'un couple
                  <span class="code-inline">node_name:state</span> et state est soit <b>ON</b> pour une activation soit
                  <b>OFF</b> pour une
                  désactivation.
                </p>
                <h5>Options</h5>
                <p>
                  <span class="orange">Les options sont des contraintes ou des indications de simulation supplémentaire permettant de raffiner
                  le traitement des résultat.</span>
                  Elles sont au nombre de 4 :
                </p>
                <ul>
                  <li><p>
                    Introduire un pourcentage minimum de différence, elle est passée en passant simplement :
                    <span class="code-inline"><i>val</i>%</span> avec <i>val</i> un entier.
                  </p></li>
                  <li><p>
                    Restreindre le nombre de digits après la virgule qui doivent être utilisés.
                  </p></li>
                  <li><p>
                    Indiquer que la liste de noeuds passée est une combinaison (ils doivent tous être actifs en même
                    temps).
                  </p></li>
                  <li><p>
                    Évaluer une évolution non linéaire survenue pendant la simulation. Elle est sous-divisée en 4
                    paramètres
                    qui sont chacun séparé par une virgule : <span class="code-inline">param:val,param2:val</span>.
                  </p></li>
                </ul>
                <p>
                  <span class="orange">Les options sont séparées par des espaces et la valeur qui est associée à celle-ci,
                    sont accolées à l'option avec deux points</span> : <span class="code-inline">digits:3</span>.
                </p>
              </div>
            </div>
            <h4>Détection des options</h4>
            <p>
              Quand le programme détecte que les crochets des options ne sont pas vides, la classe qui découpe la query
              se contente de découper la chaine de caractères des options de la même manière que les mutations
              (<span class="code-inline">split(" ")</span>).
              Les
              options seront ensuite traitées juste avant que les computations commencent.
              <span class="green-blue">Elles sont rangées dans des dictionnaires,
              associées à la simulation qu'elles doivent influencer.</span>
            </p>
          </div>
        </div>

        <div v-if="activeRoot === 'unit-test'">
          <div>
            <h2>Tests unitaires</h2>
            <p>
              Dans cette rubrique, je vais vous présenter 4 savoir-faire que j'ai largement mobilisés pendant ce stage
              qui ont pour thème commun les tests unitaires.
            </p>
          </div>
          <div class="sub-tabs-bar">
            <button class="sub-tab-item" :class="{active: subRoot === 1}" @click="subRoot=1">
              Exceptions
            </button>
            <button class="sub-tab-item" :class="{active: subRoot === 2}" @click="subRoot=2">
              Déroulement
            </button>
            <button class="sub-tab-item" :class="{active: subRoot === 3}" @click="subRoot=3">
              Échantillons de test
            </button>
            <button class="sub-tab-item" :class="{active: subRoot === 4}" @click="subRoot=4">
              Bouchons de test
            </button>
          </div>

          <div class="sub-inner-details" v-if="subRoot === 1">
            <h3>Gérer les exceptions</h3>
            <p>
              Une exception est un problème que le code rencontre. Elle est levée soit par le langage
              (<span class="exemple">ValueError</span>), <span class="purple">soit c'est une exception personnalisée, levée dans certaines
              circonstances par le développeur.</span> J'aborde l'implémentation d'exception personnalisée dans
              <a @click="activeRoot='algo'; subRoot=1">l'onglet précédent</a>.
              Dans le cadre de processus complexes comme celui de mon projet, <span class="blue">il est important de vérifier que les
              exceptions se lèvent correctement</span>, c'est-à-dire, quand il faut mais aussi, que les erreurs gérées
              soient
              bien prises en charges par le programme pour ne pas lever d'exception afin d'assurer le bon déroulement
              du programme.
            </p>
            <p>
              Ainsi, il y a deux types de tests unitaires à faire pour couvrir ces deux cas de figure, tous deux
              présentés
              dans la trace ci-dessous.
            </p>
            <div class="side-by-side">
              <div class="text-content">
                <p>
                  La <b>trace 11</b> ci-contre peut être scindée en deux. La partie haute avec la fonction de test
                  <span class="code-inline">test_expression_no_error</span> et la partie basse avec la fonction de test
                  <span class="code-inline">test_expression_error</span>.
                </p>
                <p>
                  La première fonction de test permet de vérifier que la fonction appelée, en l'occurrence,
                  <span class="code-inline">check_logical_expression</span> ne lève pas d'erreur avec l'échantillon
                  stocké dans la variable "LOGICAL_EXPRESSION_SIMPLE_NO_ERROR". <span class="blue">Pour vérifier que celui-ci ne lève pas
                  d'exception, j'appelle la fonction dans un <b>try-except</b> qui permet "d'attraper" l'exception si elle
                  est levée.</span> Dans le cas d'une levée, le test est marqué comme <b>failed</b>, échoué, grâce à la
                  fonction
                  <span class="code-inline">self.fail</span>.
                </p>
                <p>
                  La seconde fonction de test permet de vérifier au contraire, qu'une exception est effectivement levée.
                  <span class="blue">Il faut savoir qu'un test levant une exception est normalement marqué comme échoué, mais lorsque l'on
                    veut justement vérifier une levée,</span> il faut utiliser <span class="code-inline">self.assertRaises</span>.
                  Grâce à cette fonction, <span class="blue">le test ne s'arrêtera pas à la levée de l'exception,</span>
                  ce qui permet d'enchainer
                  avec d'autres fonctions comme c'est le cas dans le trace où je vérifie toutes les expressions
                  logiques
                  contenant des erreurs dans un seul test plutôt qu'un seul.
                </p>

              </div>
              <div class="trace-content">
                <Trace traceId="test-exception"/>
              </div>
            </div>
          </div>

          <div class="sub-inner-details" v-if="subRoot === 2">
            <h3>Vérifier le bon déroulement du programme</h3>
            <p>
              Les tests unitaires servent surtout à s'assurer que le programme a le comportement attendu. Bien que
              parfois
              lourds à écrire, les tests unitaires sont un bon moyen de vérifier que les fonctions du programme se
              déroulent
              correctement. <b>Dans mon cas, j'ai fait tous mes <span class="dark-yellow">tests unitaires du MCCT en isolement</span>
              pour m'assurer que mon
              module fonctionnait correctement.</b>
            </p>

            <div class="side-by-side">
              <div class="text-content">
                <h4>Rédiger une assertion simple</h4>
                <p>
                  <span class="purple">Pour gérer les queries, j'ai créé
                    un type Formula, que vous pouvez voir sur la trace ci-contre, et qui possède les membres suivants</span> :
                </p>
                <ul>
                  <li>un Type (P, Inc ...) de type <span class="code-inline">QueryType</span> <span class="purple">que j'ai implémenté.</span>
                  </li>
                  <li>une Target (node, state ...) de type <span class="code-inline">TargetType</span><span
                      class="purple">que j'ai implémenté.</span></li>
                  <li>une <i>liste</i> (<span class="code-inline">list</span>) contenant les noms des cibles</li>
                  <li>un Opérateur de type <span class="code-inline">Operator</span> <span class="purple">que j'ai implémenté.</span>
                  </li>
                  <li>une valeur sous forme de chaîne de caractère (<span class="code-inline">str</span>) pour prendre
                    en charge le "?".
                  </li>
                  <li>une équation logique en <i>liste</i>.</li>
                  <li>une <i>liste</i> pour les mutations.</li>
                  <li>une <i>liste</i> pour les options.</li>
                  <li>une chaine de caractère (<span class="code-inline">str</span>) pour stocker l'expression passée.
                  </li>
                </ul>
              </div>
              <div class="trace-content">
                <Trace traceId="formula"/>
              </div>
            </div>
            <div class="side-by-side">
              <div class="trace-content">
                <Trace traceId="exemples-assertions"/>
              </div>
              <div class="text-content">
               <span class="dark-yellow"> Ainsi définie, il est possible de vérifier que le parsing de la Formula se passe correctement en vérifiant
                chaque membre de l'objet parsé.</span><span class="dark-green"> Une assertion, c'est un mot clé qui permet de dire "ce qui vient, doit être
                vrai.".</span> Pour évaluer la décomposition du query, on peut établir une assertion pour
                chaque membre
                individuellement comme sur la trace ci-contre.
              </div>
            </div>
          </div>

          <div class="sub-inner-details" v-if="subRoot === 3">
            <h3>Concevoir des échantillons de test</h3>
            <div class="side-by-side">
              <div class="text-content">
                <p>
                  Le but d'un test, comme dit précédemment, c'est de vérifier que le programme s'exécute correctement.
                  Pour
                  cela, il faut fournir aux fonctions que l'on teste, un <span
                    class="pink"><b>échantillon de test</b></span>
                  qui va <span class="dark-yellow">permettre de couvrir une branche du programme.</span>
                  Dans l'article <a @click="activeRoot='algo'; subRoot=1">Algorithmie</a>, je vous ai présenté des
                  diagrammes d'exécution
                  de certaines fonctions de mon programme. La couverture d'une branche revient à couvrir un chemin
                  possible
                  de ce graphe. La <b>trace 23</b> ci-contre illustre cette couverture. Un échantillon de test va couvrir
                  le
                  chemin en jaune, la sortie attendue est l'output 2.
                </p>
              </div>
              <div class="trace-content">
                <Trace traceId="exemple-couverture"/>
              </div>
            </div>
            <p>
              La conception d'échantillon de test n'est pas toujours simple. En effet, plus le programme est complexe,
              plus il y a de possibilités. Il faut choisir des échantillons qui vont couvrir l'intégralité du programme
              mais lorsqu'il y a beaucoup de possibilités, le nombre d'échantillons nécessaires augmente de manière
              considérable. <b class="pink">Il n'est pas nécessaire de tester toutes les possibilités ! L'objectif va
              plutôt être de
              couvrir les chemins. </b> C'est ce que je cherche à faire grâce aux échantillons de la trace 24
              ci-dessous.
            </p>
            <Trace traceId="test-sample"/>
            <p>
              J'ai conçu ma fonction de vérification de Formula de telle sorte qu'elle ne renvoie rien si aucune erreur
              n'est
              détectée. Sinon, la fonction lève une exception appropriée. La
              <TraceHover id="test-exception">trace 11</TraceHover>
              que j'ai présentée <a @click="subRoot=1">précédemment</a> montre les fonctions de tests dans lesquelles
              j'emploie les échantillons. La
              <TraceHover id="diagramme-formula-checker">Trace 25</TraceHover>
              consultable
              <router-link to="/traces-compilation#diagramme-formula-checker">ici</router-link>
              afin de ne pas provoquer de décalage
              sur cette page. Chaque <span class="pink">échantillon de test va tester une levée d'exception</span>.
              Par exemple, la variable <span class="code-inline">ERROR_DECREASE_NO_MUTATION</span>, va vérifier que
              l'exception
              <span class="code-inline">ErrorInIncreaseDecreaseEvaluation</span> est bien levée.
            </p>

          </div>

          <div class="sub-inner-details" v-if="subRoot === 4">
            <h3>Utiliser des bouchons de tests</h3>
            <div class="encadre-gris">
              <h4>Définition de bouchon</h4>
              <p>
                En informatique, <b>un bouchon</b> (<i>stub</i> en anglais) correspond à un code qui ne fait <b>
                aucun traitement et retourne toujours le même résultat</b>, utilisé pour remplacer une autre fonction du
                programme. Il simule soit le comportement d'un code existant (un <i>mock</i>) ou faire office de substitut
                temporaire d'un code non-implémenté.
                <b>Dans mon cas, le bouchon fait office de mock de la classe <span class="code-inline">Result</span></b>.
              </p>
            </div>
            <p>
              Dans le cadre de test, surtout en isolement,<span class="dark-yellow"> il est très intéressant d'avoir le contrôle total sur ce que
              l'on passe en paramètre dans son programme afin de rendre les retours prévisibles.</span> Ils permettent
              également de raccourcir les exécutions de tests: si le déroulement complet d'un programme demande de
              nombreuses étapes,<span class="dark-orange"> les mocks permettent de "by-pass" ces étapes avec des données connues et sûres et de
              tester spécifiquement l'unité qui nous intéresse.</span>
            </p>
            <div class="side-by-side">
              <div class="text-content">
                <p>
                  La classe mock des <span class="code-inline">Result</span> de MaBoSS, <span class="code-inline">FakeResult</span>,
                  <span class="dark-orange">permet de contrôler les résultats que je passe dans mon évaluateur et me soustrait à la simulation,
                  normalement nécessaire pour avoir des résultats.</span> La <b>trace 14</b> ci-contre montre
                  l'implémentation
                  de cette classe. Elle implémente 5 fonctions (<i>repères A à E</i>) qui <span class="dark-orange">correspondent aux fonctions
                  utilisées dans mon programme pour récupérer les résultats.</span> La fonction dont la signature est
                  entourée
                  en rouge, <span class="code-inline">load_fake_result</span>, permet de charger rapidement les
                  résultats
                  en ayant juste à donner les chemins vers les fichiers csv.
                </p>
                <p>
                  Lorsque je lance mon test et que la fonction que je teste appelle <span class="code-inline">get_fptable()</span>,
                  c'est la classe <span class="code-inline">FakeResult</span> qui intercepte l'appel et qui renvoie la
                  table de points fixes que j'ai initialisé.
                </p>
              </div>
              <div class="trace-content">
                <Trace traceId="screen-bouchon"/>
              </div>
            </div>

          </div>
        </div>

        <div v-if="activeRoot==='data-ttt'">
          <h2>Traitement de données</h2>
          <p>
            Dans cette section, je vais vous parler de la manipulation de données que j'ai pu effectuer pendant mon
            stage.
            J'ai conçu une classe dédiée à l'extraction de colonnes et de lignes en fonction de conditions, je vais vous
            en parler afin de mettre en contexte les savoir-faire que j'ai eu à mobiliser.
          </p>
          <div class="sub-tabs-bar">
            <button class="sub-tab-item" :class="{active: subRoot === 1}" @click="subRoot=1">Extraire des colonnes
            </button>
            <button class="sub-tab-item" :class="{active: subRoot === 2}" @click="subRoot=2">Extraire des lignes
            </button>
            <button class="sub-tab-item" :class="{active: subRoot === 3}" @click="subRoot=3">Utiliser des masques
            </button>
          </div>

          <div class="sub-inner-details" v-if="subRoot === 1">
            <h3>Extraire des colonnes</h3>
            <p>
              Dans le cadre du traitement de données dans un dataframe Pandas, que j'ai eu à faire, il fallait que je
              puisse extraire des colonnes en fonction de critères précis. Pour cette
              sous-section,
              les dataframes ont le format ci-dessous.
            </p>
            <Trace traceId="format-nodes-table"/>
            <p>
              Dans ce dataframe, les index sont les marqueurs de temps. <span class="orange">Ceux-ci sont transformés en une colonne à part
              entière au début du traitement. C'est un choix d'implémentation pour mes computations. </span>
              Chaque colonne est un node avec ses probabilités d'être actif à l'instant-T. Une extraction de colonne va
              consister en la récupération de la ou les colonnes qui sont nécessaires à la computation demandée par
              la query.
            </p>
            <hr class="separator"/>
            <div class="side-by-side">
              <div class="text-content">
                <p>Ci-contre, la <b>trace 40</b> qui montre la fonction qui me permet d'extraire les colonnes dont j'ai
                  besoin dans un dataframe. Elle prend 4 paramètres :</p>
                <ul>
                  <li><p>
                    <span class="code-inline">df</span> : le dataframe (dont le format est similaire à celui ci-dessus)
                    duquel on doit extraire les colonnes.
                  </p></li>
                  <li><p>
                    <span class="code-inline">column_name</span> : une chaine de caractères contenant le nom de la
                    colonne
                    à récupérer.
                  </p></li>
                  <li><p>
                    <span class="code-inline">exclusion</span> : un booléen par défaut <span
                      class="code-inline">false</span>
                    qui permet de signaler si on enlève ou si on garde la colonne portant le nom
                    <span class="code-inline">column_name</span>.
                  </p></li>
                  <li><p>
                    <span class="code-inline">is_state</span> : un booléen par défaut <span
                      class="code-inline">false</span>
                    qui permet de signaler que la colonne recherchée est un nom de state. <span class="orange">Avant ces opérations, le
                    dataframe des states est modifié pour que les colonnes accolent <i>_state</i> aux noms de colonnes
                    (hors 'Time') afin de faciliter certaines computations.</span>
                  </p></li>
                </ul>
                <h4>Comment marche cette fonction ?</h4>
                <p>
                  <span
                      class="orange">Le principe de cette fonction est de construire une <b>liste de nom de colonnes</b> que l'on souhaite
                    garder.</span> Le gros avantage des <span class="light-blue">dataframes Pandas est de pouvoir effectuer des opérations sur plusieurs
                  lignes et colonnes en une seule fois.</span> Cela a pour effet de réduire considérablement les temps
                  d'exécution
                  puisque l'on a <b>pas besoin de faire de boucle.</b>
                </p>
                <p class="orange">
                  Dans mon cas, je fais une boucle pour récupérer les noms et je retourne un dataframe ne contenant
                  <b>que</b> les colonnes que nous souhaitions conserver.
                </p>
              </div>
              <div class="trace-content">
                <Trace traceId="extract-column-fct"/>
              </div>
            </div>
          </div>

          <div class="sub-inner-details" v-if="subRoot===2">
            <h3>Extraire des lignes</h3>
            <p>
              Dans le cadre du traitement de données dans un dataframe Pandas, que j'ai eu à faire pour concevoir mon
              outil, il fallait que je puisse extraire des lignes en fonction de critères précis. Pour cette
              sous-section,
              les dataframes ont le format ci-dessous et concernent les points fixes de la simulation.
            </p>
            <Trace traceId="format-fp-table"/>
            <p>
              Ce format de dataframe peut être découpé en trois parties :
            </p>
            <ul>
              <li>
                <p>
                  <b>La colonne des probabilités</b> : <span class="code-inline">Proba</span> qui contient les
                  probabilités
                  pour le state de la ligne d'être actif sur ce
                  <InfoHover id="fp">point fixe</InfoHover>
                  .
                </p>
              </li>
              <li><p>
                <b>La colonne des noms de state</b> : <span class="code-inline">State</span> qui contient les noms des
                états susceptibles d'être un point fixe.
              </p></li>
              <li><p>
                <b>Les colonnes des nodes</b> : ces colonnes dont les noms sont liés aux nodes du modèle, voient leur
                valeur varier d'une ligne à l'autre. Si le node est actif dans le state du point fixe de la ligne, alors
                la valeur vaut 1, sinon 0.
              </p></li>
            </ul>
            <hr class="separator"/>
            <div class="side-by-side">
              <div class="text-content">
                <p>La <b>trace 41</b> ci-contre montre la fonction d'extraction de ligne de dataframes dont le format
                  est celui vu juste au-dessus. Elle prend 3 paramètres :</p>
                <ul>
                  <li><p>
                    <span class="code-inline">fp_df</span> : le dataframe des points fixes à traiter.
                  </p></li>
                  <li><p>
                    <span class="code-inline">exclusion</span> : un booléen qui permet d'indiquer si la colonne passée,
                    <span class="code-inline">name</span>, doit avoir pour valeur 0 (<span
                      class="code-inline">true</span>) ou
                    1 (<span class="code-inline">false</span>).
                  </p></li>
                  <li><p>
                    <span class="code-inline">name</span> : une chaine de caractère stockant le nom de la colonne.
                  </p></li>
                </ul>
                <h4>Comment marche cette fonction ?</h4>
                <p>
                  Comme dit précédemment, les dataframes peuvent voir leurs lignes et colonnes traitées en une seule
                  instruction. C'est ce que les lignes
                </p>
                <p class="code-block">fp_df[fp_df[name] == 0].reset_index(drop=True)</p>
                <p>et</p>
                <p class="code-block">fp_df[fp_df[name] == 1].reset_index(drop=True)</p>

              </div>
              <div class="trace-content">
                <Trace traceId="extract-line-fct"/>
              </div>
            </div>
            <p>font. La première retourne un dataframe de toutes les lignes dont la colonne
              <span class="code-inline">name</span> a pour valeur 0. La seconde fait la même chose mais lorsque la
              valeur vaut 1. C'est le bloc <span class="code-inline">if-else</span> qui permet de déterminer quelle
              instruction est exécutée en fonction de la valeur de <span class="code-inline">exclusion</span>. Si
              <span class="code-inline">exclusion</span> vaut <span class="code-inline">true</span> alors ce sera 0,
              sinon
              1.
            </p>
            <p>
              La fonction <span class="code-inline">reset_index(drop=True)</span> permet de refaire les index du nouveau
              dataframe
              formé, afin de ne pas avoir de trous à cause des anciens index.
            </p>
          </div>

          <div class="sub-inner-details" v-if="subRoot===3">
            <h3>Utiliser des masques</h3>
            <div class="encadre-gris">
              <h4>Définition d'un masque</h4>
              <p>
                En programmation, notamment dans le cadre de traitement de données avec Pandas ou Numpy, un
                <b>masque</b>
                est une structure de données composée de valeurs booléennes. Il résulte de l'application d'une condition
                logique
                sur l'ensemble d'un jeu de données. Il agit comme un filtre sélectif : une fois appliqué au jeu de
                données
                de base, seules les lignes/colonnes correspondant à la valeur <span class="code-inline">True</span>
                sont conservées, les autres sont ignorées.
              </p>
            </div>
            <div class="side-by-side text-only">
              <div class="text-content">
                <h4>Intérêt de l'emploi d'un masque</h4>
                <p>
                  Le but de cet outil est de pouvoir traiter de grands jeux de données le plus rapidement possible. Pour
                  de
                  grands modèles, les boucles <span class="code-inline">for</span> et <span
                    class="code-inline">while</span>
                  auraient été trop lentes. <span class="light-blue">À la place, j'exploite la vectorisation de la
                  bibliothèque Pandas en construisant
                  des masques booléens.</span> L'extrait du code de la classe <span
                    class="code-inline">MaBoSSEvaluator</span>
                  de la <b>trace 42</b> ci-dessous illustre bien cette approche avec cet extrait de fonction dans
                  laquelle
                  <span class="green-blue">on construit le masque en fonction des opérateurs</span>, ici, l'opérateur
                  <span class="code-inline">Operators.LT</span>
                  ("inférieur à"). En appliquant directement des conditions logiques sur l'ensemble des colonnes
                  d'intérêt
                  (<span class="code-inline">df[cols_to_check] < value</span>), Python délègue les calculs de routine à
                  Pandas.
                  <span class="light-blue">Cette approche permet de traiter simultanément toutes les lignes de toutes
                    les colonnes en une seule instruction.</span>
                </p>
              </div>
              <div class="text-content">
                <h4>Flexibilité du filtrage</h4>
                <p>
                  De plus, les masques peuvent être combinés aux fonctions d'agrégation :
                  <span class="code-inline">.any(axis=1)</span> et <span class="code-inline">.all(axis=1)</span>.
                  <span class="orange">Selon les
                  noms de cible, soit une liste de noms, soit le symbole <b>*</b>, qui permet de signaler que l'on veut traiter
                    <b>toutes les colonnes</b></span>, l'algorithme ne traite pas le filtre de la même manière.
                  L'instruction
                  <span class="code-inline">.any(axis=1)</span> <span class="light-blue">permet de conserver une ligne
                  dès qu'au moins une colonne valide
                  la condition, tandis que l'instruction <span class="code-inline">.all(axis=1)</span> ne conserve que les
                  lignes dont toutes les colonnes valident la condition.</span>
                </p>
              </div>
            </div>

            <div class="side-by-side">
              <div class="text-content">
                <h4>Application du masque</h4>
                <p>
                  Enfin, pour appliquer le masque à un dataframe, il suffit d'écrire l'instruction suivante (non visible
                  sur la trace) :
                </p>
                <p class="code-block">df = df[mask].copy()</p>
                <p class="light-blue">
                  Celle-ci applique le masque sur l'intégralité des données, créant au passage une copie conforme et
                  allégée
                  du tableau de données.
                </p>
              </div>
              <div class="trace-content">
                <Trace traceId="construction-mask"/>
              </div>
            </div>
          </div>

        </div>

        <div v-if="activeRoot==='bilan'">
          <h2>Bilan et évaluation</h2>
          <div class="inner-details">
            <h3>Concevoir des architectures logicielles robustes et orientées objet</h3>
            <h4>Synthèse</h4>
            <p>
              <b>Durant mon stage, j'ai donc eu à réaliser un outil qui doit pouvoir être utilisé par un grand nombre de
                personnes de la communauté de modélisation booléenne</b>. Cela implique que celui-ci soit robuste et
              efficace.
              <span class="dark-purple">Une bonne solution de réalisation a été d'en faire
                un module Python</span> qui <span class="orange">vient se greffer à pyMaBoSS, déjà
              existant et hébergé.</span>
            </p>
            <p>
              La mise en place de ce module a donc nécessité <span class="purple">l'implémentation de classes</span>
              et la gestion d'erreurs nouvelles,
              donc <span class="blue">la mise en place d'une gestion des exceptions appropriées pour traiter proprement les erreurs utilisateurs.</span>
            </p>
            <h4>Évaluation</h4>
            <p>
              Dans le cadre de ma formation en BUT Informatique, j'ai eu de nombreuses occasions de réaliser des
              programmes
              orientés objets, <b>mais surtout en Java et pas du tout en Python</b>.
              <span class="dark-purple">La réalisation d'un module Python</span> et <span class="purple">coder
              orienté objet</span> dans ce langage ont donc été nouveaux pour moi. <b>Cependant, je suis très à l'aise
              en POO, je
              n'ai donc pas éprouvé de difficulté à transposer mes connaissances du Java au Python.</b>
            </p>
          </div>
          <hr class="separator"/>
          <div class="inner-details">
            <h3>Optimiser un algorithme</h3>
            <h4>Synthèse</h4>
            <p>
              <b>L'optimisation dans un contexte où les jeux de données peuvent être colossaux était au coeur de la
                réalisation
                de mon module</b>. Il fallait que l'utilisateur puisse analyser de grands modèles sans que la
              consommation de RAM
              ne fasse planter son ordinateur (problème auquel j'ai été confronté). <span class="light-blue">J'ai donc entrepris la mise en place
              de manipulation avancée de données structurée par Pandas,</span> en prenant <span class="orange">avantage au maximum de la vectorisation
              de cette structure plutôt que la multiplication des boucles itératives</span>. Enfin, <b>l'idée d'une
              couverture large
              de modèles,</b> demandait une implémentation de <span class="light-blue">traducteurs logiques dynamiques,
              tels que les filtres any et all.</span>
            </p>
            <h4>Évaluation</h4>
            <p>
              Durant ma seconde année de BUT, j'ai eu des cours d'introduction au traitement de données. Cependant,
              comme dans n'importe quel cours, les jeux de données sur lesquels nous devions effectuer des traitements
              avaient une taille très raisonnable. L'intérêt d'outils comme Pandas n'était donc pas évident. À
              contrario,
              dans le cadre de mon stage, <span class="light-blue">le traitement de tableau de centaines de colonnes sur un millier de lignes
              peut être très courant</span> et <span class="orange">l'usage de Pandas est bien plus cohérent que des
              traitements en boucle itératives.</span>
              <b> J'ai donc pu énormément progressé pendant ce stage, c'était complexe parce qu'il y a quelques
                subtilités, mais
                il existe de nombreux tutos en ligne qui m'ont permis de concevoir mon module.</b>
            </p>
          </div>
          <hr class="separator"/>
          <div class="inner-details">
            <h3>Fiabiliser du code</h3>
            <h4>Synthèse</h4>
            <p>
              <b>L'enjeu d'un outil qui doit valider des modèles complexes est qu'il doit être fiable et ne pas faire
                d'erreurs.</b>
              La démarche qui m'a permis de m'assurer que mon code s'exécutait correctement a été de <span
                class="dark-yellow">rédiger des tests unitaires,
              soit en amont, soit en parallèle, du développement</span>. Pour garantir l'intégrité des données
              manipulées <span class="dark-green">j'ai rédigé
              des assertions au coeur des fonctions critiques, entre chaque étape</span>. Qui dit tests, dit
              <span class="pink">échantillons de tests et
                j'ai dû concevoir des échantillons qui me permettent de valider mes fonctions de manière efficace.</span>
            </p>
            <h4>Évaluation</h4>
            <p>
              Pendant mon cursus, j'ai eu à rédiger des tests au cours de plusieurs projets mais de même que pour
              l'utilisation
              de la bibliothèque Pandas, la taille des applications ne permettait pas de se rendre compte de l'intérêt
              véritable
              de la réalisation de tests unitaires. Mais dans le cadre de mon application,
              <span class="dark-yellow">la réalisation de tests unitaires
              est non seulement intéressante mais en plus essentielle</span>. Avoir pu réaliser des tests dans cet
              environnement,
              m'a permis de progresser fortement dans ce domaine qui restait globalement théorique pour moi notamment la
              <span class="dark-orange">conception de bouchons et de mocks pour faire mes tests en isolement.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>