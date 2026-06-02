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
        <span class="dark-purple">exploiter des modules</span>
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
            <button class="sub-tab-item" :class="{active: subRoot === 1}" @click="subRoot=1">Créer un module en Python</button>
            <button class="sub-tab-item" :class="{active: subRoot === 2}" @click="subRoot=2">Concevoir des logigrammes</button>
            <button class="sub-tab-item" :class="{active: subRoot === 3}" @click="subRoot=3">Utiliser une REGEX</button>
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
                "math" est module de Python.
              </p>
              <p>
                De manière plus précise, <b> le module est le fichier qui permet d'importer les fonctions</b> contenues dans les
                fichiers qui ont l'extension <span class="code-inline">.py</span>.
              </p>
            </div>
            <div class="side-by-side">
              <div class="text-content">
                <p>
                  Diviser un programme Python en plusieurs fichiers permet de mieux le structurer et de faciliter son maintien.
                  Pour mon projet, je préférais éviter de modifier le code de pyMaBoSS, déjà maintenu par
                  <ColleagueHover name="noel">Vincent</ColleagueHover>.
                  <span class="dark-purple">J'ai donc rajouté un dossier dans le code pour y mettre mes
                    fichiers.</span> Ce dossier est encadré en rouge sur la <b>trace 26</b> ci-contre.
                </p>
                <p>

                </p>
              </div>
              <div class="trace-content">
                <Trace traceId="dossier-module"/>
              </div>
            </div>

          </div>

          <div class="sub-inner-details" v-if="subRoot===2">
            <h3>Concevoir des logigrammes</h3>
          </div>

          <div class="sub-inner-details" v-if="subRoot===3">
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
                  normalement nécessaire pour avoir des résultats.</span> La <b>trace 14</b> ci-contre montre l'implémentation
                  de cette classe. Elle implémente 5 fonctions (<i>repères A à E</i>) qui <span class="dark-orange">correspondent aux fonctions
                  utilisées dans mon programme pour récupérer les résultats.</span> La fonction dont la signature est entourée
                  en rouge, <span class="code-inline">load_fake_result</span>, permet de charger rapidement les résultats
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