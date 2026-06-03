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
      <p>Cette partie met en valeur les savoir-faire technique que j'ai mobilisé pendant mon stage. Cette partie ne se
        concentre que sur le développement du
        <InfoHover id="mcct">MCCT</InfoHover>
        . Tous les savoir-faire suivant sont
        répartis sur toutes les sections et sous sections de cette page et sont utilisés en <b>Python</b>.
      </p>
    </header>
    <div class="encadre-gris">
      <h3>Savoir-faire mobilisés</h3>
      <p>
        <span class="blue">Vérifier les exceptions</span>,
        <span class="purple">programmer orienté objet</span>,
        <span class="green">utiliser un Jupyter Notebook</span>,
        <span class="orange">respecter les standards</span>,
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
              Dans cette rubrique, je vais vous présenter 3 savoir-faire que j'ai largement mobilisés pendant ce stage
              dans le cadre de la conception d'algorithmes.
            </p>
          </div>
          <div class="sub-tabs-bar">
            <button class="sub-tab-item" :class="{active: subRoot === 1}" @click="subRoot=1">Créer un module en Python
            </button>
            <button class="sub-tab-item" :class="{active: subRoot === 2}" @click="subRoot=2">Utiliser des logigrammes
            </button>
            <button class="sub-tab-item" :class="{active: subRoot === 3}" @click="subRoot=3">Fusionner des dataframes
            </button>
            <button class="sub-tab-item" :class="{active: subRoot === 4}" @click="subRoot=4">Utiliser une REGEX</button>
          </div>
          <div class="sub-inner-details" v-if="subRoot === 1">
            <h3>Créer un module python</h3>
            <div class="encadre-gris">
              <h4>Définition d'un module</h4>
              <p>
                Les modules sont des programmes Python qui contiennent des fonctions souvent utilisées, aussi appelés
                <i>libraries</i> ou bibliothèque, ce sont des boîtes à outils.
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
                  <span class="dark-purple">J'ai donc rajouté un dossier dans le code pour y mettre mes
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
                  <span class="dark-purple">L'exporter depuis le fichier init de MaBoSS permet à l'utilisateur de récupérer
                  mon programme depuis MaBoSS sans manipulation supplémentaire.</span>
                </p>
                <p>
                  Grâce à ces fichiers, mon module est accessible depuis des <span
                    class="green">Jupyter Notebooks</span>
                  ou d'autres programmes. Comme sur la <b>trace 28</b> ci-dessous, sur laquelle on importe maboss
                  (pour avoir accès à certaines autres fonctions) puis mon programme, appelé temporal_logic, en lui
                  donnant un alias "tl". <b class="dark-purple">Il n'est pas nécessaire d'importer maboss avant
                  d'importer temporal_logic grâce
                  à l'export depuis le fichier init de maboss</b>.
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
              Je le mentionnerais à nouveau mais quand je travaille sur un code, je suis souvent confronté au syndrome
              de la
              page blanche. Je sais ce que je veux, mais je ne sais pas par où commencer. <b>Dessiner mes programmes</b>
              me permet d'avoir un point de départ et de mieux visualiser le chemin que je dois emprunter pour écrire ce
              que je veux.
            </p>
            <div class="side-by-side">
              <div class="text-content">
                <p>
                  <span class="green-blue">Pendant mon stage, j'ai dû rédiger de nombreuses fonctions, plus ou moins complexes.</span>
                  Un exemple d'entre
                  elles, c'est par exemple la computation de l'expression logique (celle qui est passée dans la query).
                  Sa flow-chart est visible sur la <b>trace 5</b> ci-contre.
                  <span class="green-blue">Cette fonction est utilisée pour filtrer les dataframes en fonction de
                    l'expression logique qui a été passée.</span>

                </p>
                <p>
                  Pour élaborer cet algorithme, il a fallu découper la computation en plusieurs étapes :
                </p>
                <ul>
                  <li><p><b>Étape 1 : </b>vérifier que l'expression logique est correcte (ne commence pas ou ne termine
                    pas par un
                    symbole logique <span class="exemple">& ou |</span> et deux noms ou deux symboles ne s'enchainent
                    pas
                    <span class="exemple">"& &" ou "nom1 nom2"</span>);</p></li>
                  <li><p><b>Étape 2 : </b>une itération sur les membres de l'expression pour extraire les colonnes et/ou
                    les lignes
                    qui correspondent et pour savoir comment fusionner le dataframe temporaire <span
                        class="code-inline">temp</span>
                    avec le dataframe de travail <span class="code-inline">work_df</span>;</p></li>
                  <li><p><b>Étape 3 : </b>à la fin de la boucle, on supprime les lignes qui contiennent des cellules
                    vides
                    (valeur <span class="code-inline">na</span>) et on retourne le dataframe de travail.</p></li>
                </ul>
                <p>
                  Deux points de cette fonction étaient intéressants algorithmiquement à traiter : la fusion des
                  dataframes et
                  le support des conditions imbriquées (<span class="exemple">A & (B | (C & D))</span>). Je détaille
                  <span class="green-blue">la fusion de dataframes</span> dans la <a @click="subRoot=3">sous section
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
                  Sur la <b>trace 6</b> ci-contre on peut voir la flow-chart de la fonction qui permet de parser l'expression
                  logique. En input de la fonction, on passe l'expression sous type de liste de string <span class="code-inline">list[str]</span>.
                  En output de la fonction, on renvoie une liste de string aussi, mais nettoyée de caractères vides, d'espaces et
                  des parenthèses. Également, les membres qui étaient entourés par des parenthèses sont regroupés en sous-listes.
                  <span class="exemple">
                    L'expression "A & ( B | ( C & D ) )" va être découpée : ['A', '&', ['B', '|', ['C', '&', 'D']]]
                  </span>
                </p>
              </div>
            </div>
            <p>
              Comme on va <span class="green-blue">itérer sur les caractères de l'expression</span>
              il faut prendre en compte qu'un membre puisse faire partie d'une sous-expression, et donc créer une liste.
              Ainsi, tant que l'expression a des membres, on teste le membre :
            </p>
            <ul>
              <li><p>
                Si c'est un symbole vide (un espace par exemple), on l'ignore et on passe au suivant (instruction
                <span class="code-inline">continue</span>),
              </p></li>
              <li><p>
                Si c'est une parenthèse ouvrante : on appelle en <InfoHover id="recursion">récursion</InfoHover> la fonction,
              </p></li>
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
                Grâce à ce formatage, je vais pouvoir traiter les membres un à un et récupérer les colonnes au fur et à mesure
                pour appliquer l'expression morceau par morceau.
              </b>
            </p>

          </div>

          <div class="sub-inner-details" v-if="subRoot===3">
            <h3>Fusion de dataframes</h3>
            <div class="side-by-side">
              <div class="trace-content">
                <Trace traceId="tableaux-log-exp"/>
              </div>
              <div class="text-content">
                <h4>Fusion des dataframes</h4>
                <p>
                  Une fusion de tableau sur une logique de &-logique n'est pas la même qu'une fusion sur un |-logique.
                  En effet, la règle logique pour qu'un &-logique soit VRAI est que les DEUX membres doivent être VRAIS.
                  C'est ce qui est illustré par les deux premiers tableaux de la <b>trace 29</b> ci-contre. Dans un premier
                  temps on voit que les valeurs <span class="code-inline">float</span> des lignes ont été remplacées
                  par des valeurs <span class="code-inline">boolean</span> pour comprendre la mécanique.
                </p>
                <p>
                  On a donc deux expressions : <b>A | !B</b> ("A ou pas B") et <b>A & !B</b> ("A et pas B").

                </p>
              </div>
            </div>
          </div>

          <div class="sub-inner-details" v-if="subRoot===4">
            <h3>Utiliser une REGEX</h3>
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
              Dans des processus de fonctionnement complexe comme c'est mon cas, <span class="blue">il est important de vérifier que les
              exceptions se lèvent correctement</span>, c'est à dire, quand il faut mais aussi, que les erreurs gérées
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
                  avec d'autres fonctions comme c'est le cas dans le trace où je vérifier toutes les expressions
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
                  <span class="purple">Pour gérer les queries, j'ai crée
                    un type Formula, que vous pouvez voir sur la trace ci-contre, et qui a pour membre</span> :
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
                vrai.".</span> Dans le cas d'évaluer la décomposition du query, on peut établir une assertion pour
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
                  diagrammes d'exécutions
                  de certaines fonctions de mon programme. La couverture d'une branche revient à couvrir un chemin
                  possible
                  de ce graphe. La <b>trace 23</b> ci-contre illustre cette couverture. Un échantillon test va couvrir
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
              que j'ai présenté <a @click="subRoot=1">précédemment</a> montre les fonctions de tests dans lesquelles
              j'emploie les échantillons. La
              <TraceHover id="diagramme-formula-checker">Trace 25</TraceHover>
              consultable
              <router-link to="/traces-compilation#diagramme-formula-checker">ici</router-link>
              pour ne pas provoquer de décalage
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
                programme. Il simule soit le comportement d'un code existant (un <i>mock</i>) ou être un substitut
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
                  en ayant juste à donné les chemins vers les fichiers csv.
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


      </div>


    </section>


  </div>
</template>

<style scoped>
</style>