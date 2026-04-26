<script setup>
import BackButton from "@/components/BackButton.vue";
import {ref} from "vue";
import SourcesSection from "../../components/SourcesSection.vue";
import InfoHover from "../../components/InfoHover.vue";
import Trace from "../../components/Trace.vue";

const activeRoot = ref('assertions');
const showDetails = ref(false);
</script>

<template>
  <div class="page-container">
    <BackButton to="/savoir-faire" label="Retour aux savoir-faire"/>

    <header class="page-header">
      <h1>Tests unitaires</h1>
    </header>

    <section class="content">
      <h2>Qu'est ce que sont les tests unitaires ?</h2>
      <p>
        En programmation informatique, le <b>test unitaire</b> (ou <b>TU</b> voire <b>UT</b> pour <i>Unit Testing</i> en
        anglais)
        est une procédure permettant de vérifier le bon fonctionnement d'une partie précise d'un logiciel ou une portion
        d'un
        programme (appelée "unité" ou "module").
      </p>
      <p>
        Dans le cadre de mons stage j'effectue des <b>tests d'intégrations</b> pour vérifier que ce que j'ajoute au
        module au
        fur et à mesure, ne casse pas le résultat. Cela permet de s'assurer que le module fonctionne correctement
        d'abord
        de manière unitaire en testant chaque fonction de manière indépendante puis tout le module.
      </p>
      <p>
        Effectuer des tests unitaires permet de détecter des bugs dans l'exécution du code tôt et de soulager la tâche de
        débogage.
      </p>
    </section>
    <SourcesSection :ids="['integration-tests' ,'unit-tests']"/>

    <section class="missions-section">
      <div class="tabs-list">
        <button class="tab-item"
                :class="{active: activeRoot === 'assertions'}"
                @click="activeRoot='assertions'">Les assertions
        </button>
        <button class="tab-item"
                :class="{active: activeRoot === 'raising-excp'}"
                @click="activeRoot='raising-excp'">Gestion des exceptions
        </button>
        <button class="tab-item"
                :class="{active: activeRoot === 'bouchons'}"
                @click="activeRoot='bouchons'">Conception de bouchons
        </button>
        <button class="tab-item"
                :class="{active: activeRoot === 'samples'}"
                @click="activeRoot='samples'">Échantillons de test
        </button>
      </div>

      <div class="styled-box mission-content">
        <div v-if="activeRoot === 'assertions'">
          <div class="box-header-with-tab">
            <h2>Les assertions</h2>
            <button @click="showDetails = !showDetails" class="details-tab"
                    :class="{ active: showDetails }">
              {{ showDetails ? 'Cacher les détails' : 'Et par rapport à l\'école ?' }}
            </button>
          </div>
          <div class="details-content" v-if="showDetails">
            <div class="inner-details">
              <p>
                Au cours de mon BUT, j'ai eu des cours sur la conception de tests, l'implémentation d'exceptions, l'écriture d'assertions...
                Ce ne sont pas des notions que j'ai découvertes pendant mon stage mais celui-ci m'a permis de fortement les
                renforcer et de concrétiser leur utilité. En effet, dans la plupart des programmes, il est assez facile de
                voir si la sortie attendue est produite juste en effectuant une exécution, quitte à rencontrer un bug pendant
                ce crash test.
              </p>
              <p>
                Mais dans le contexte dans lequel je suis, de traitements complexes de grands jeux de données, il est vraiment
                important que je m'assure que chaque étape du traitement renvoie le bon résultat de traitement car avec
                tout ce qu'il y a à faire au cours de celui-ci, savoir pourquoi une exécution ne me renvoie pas les bonnes
                données serait très long, très chronophage et sachant qu'il faut refaire cette étape <b>chaque fois</b>
                que j'implémente un nouveau traitement possible... autant dire que c'est mission impossible sans tests unitaires.
              </p>
            </div>
          </div>
          <h3>Qu'est ce qu'une assertion ? </h3>
          <p>
            Une <b>assertion</b> est une affirmation sur le résultat d'une série d'instruction. Elle peut concerner :
          </p>
          <ul>
            <li>la valeur d'une variable,</li>
            <li>le contenu d'un tableau, liste ...,</li>
            <li>la valeur de retour d'une fonction,</li>
            <li>l'appel d'une fonction ou d'une méthode,</li>
            <li>la levée ou non d'une exception</li>
          </ul>

          <h3>Comment s'écrivent-elles en Python ?</h3>
          <p>
            De manière générale les assertions elles-même vont renvoyer un booléen, <b>True</b> si l'assertion est vraie,
            <b>False</b> sinon. Chaque langage de programmation va écrire cette instruction de manière différente, mais
            ici on ne va se concentrer que sur le Python, étant donné que c'est le langage que j'utilise.
          </p>
          <p>
            En Python, une assertion simple, c'est à dire une simple vérification va s'écrire : <span class = "code-inline">assert [assertion]</span>.
            Nous verrons en détails plus de syntaxe à travers les onglets <b>Levée d'exception</b> et <b>Non levée d'exception</b> mais
            la trace ci-dessous montre comment comparer divers éléments de la variable <span class="code-inline">formula6</span> peuvent
            être évalué en une seule fonction. Si l'assertion n est vraie, le programme passe à la suite et continue tant que les assertions
            sont justes. Si une assertion est fausse, le programme s'interrompt et renvoie un test échoué, dans le cas
            contraire, le test est considéré réussi.
          </p>

          <Trace trace-id="exemples-assertions"/>

          <h3>Quel est l'objectif d'une assertion ?</h3>
          <p>
            Le but de la rédaction d'assertion est de s'assurer que le code fait bien ce qu'on attend de lui. En d'autres
            termes, un ordinateur va toujours faire ce qu'on <b>lui dit même si ce n'est pas ce que l'on veut.</b> Une logique
            d'enchainement qui nous échappe, une instruction rajoutée ou modifiée, une erreur d'inattention peuvent résulter
            en un programme qui ne fonctionne pas comme il devrait.
          </p>
          <p>
            Les assertions en elles-mêmes ne font pas tout pour la découverte de bugs, elles sont combinées à des échantillons
            de tests, qui, bien choisis, doivent en théorie couvrir tous les chemins de l'algorithme afin de garantir que
            celui-ci fonctionne comme prévu. Les <b>échantillons de tests</b> sont décrits dans la dernière section de cette
            page.
          </p>

        </div>

        <div v-if="activeRoot === 'bouchons'">
          <div class="box-header-with-tab">
            <h2>Concevoir des bouchons</h2>
            <button @click="showDetails = !showDetails" class="details-tab"
                    :class="{ active: showDetails }">
              {{ showDetails ? 'Cacher les détails' : 'Et par rapport à l\'école ?' }}
            </button>
          </div>

          <div class="details-content" v-if="showDetails">
            <div class="inner-details">
              <p>
                Au cours de mon BUT, j'ai eu des cours sur la conception de tests, l'implémentation d'exceptions, l'écriture d'assertions...
                Ce ne sont pas des notions que j'ai découvertes pendant mon stage mais celui-ci m'a permis de fortement les
                renforcer et de concrétiser leur utilité. En effet, dans la plupart des programmes, il est assez facile de
                voir si la sortie attendue est produite juste en effectuant une exécution, quitte à rencontrer un bug pendant
                ce crash test.
              </p>
              <p>
                Mais dans le contexte dans lequel je suis, de traitements complexes de grands jeux de données, il est vraiment
                important que je m'assure que chaque étape du traitement renvoie le bon résultat de traitement car avec
                tout ce qu'il y a à faire au cours de celui-ci, savoir pourquoi une exécution ne me renvoie pas les bonnes
                données serait très long, très chronophage et sachant qu'il faut refaire cette étape <b>chaque fois</b>
                que j'implémente un nouveau traitement possible... autant dire que c'est mission impossible sans tests unitaires.
              </p>
            </div>
          </div>
          <h3>Qu'est ce qu'un bouchon ? </h3>
          <p>
            En informatique, un <b>bouchon</b> peut désigner deux concepts différents: un dans le contexte d'appel de procédure
            à distance (qui ne nous concerne pas ici) et l'autre dans le cadre de tests notamment. Un bouchon est un code qui
            n'effectue aucun traitement, qui retourne toujours le même résultat. Il n'est là que de manière temporaire, le temps
            que le "vrai" code soit implémenté ou bien pour effectuer des tests en isolement, c'est à dire, que l'unité testée est
            mise à part des autres en appelant uniquement les fonctions et méthodes qui sont propres à sa classe et non les autres.
            Le bouchon fait prend alors la place du reste du programme. Ces méthodes sont aussi appelées <b>mocks</b>.
          </p>

          <h3>Quelle est son utilité ?</h3>
          <p>
            Dans le cadre de test, surtout en isolement, il est très intéressant d'avoir le contrôle total sur ce que l'on
            passe en paramètre dans son programme afin de rendre les retours prévisibles. Ils permettent également de raccourcir
            les exécutions de tests: si le déroulement complet d'un programme demande de nombreuses étapes, les mocks permettent
            de "by-pass" ces étapes avec des données connues et sûres et de tester spécifiquement l'unité qui nous intéresse.
          </p>

          <div class="side-by-side">
           <div class="text-content">
             <h3>Comment j'utilise les bouchons dans le cadre de mon stage ?</h3>
             <p>
               Dans le cadre de mon stage, j'utilise un seul bouchon, une classe de faux résultats de simulation. Ceux-ci sont
               plus courts, je connais toutes les colonnes et leurs valeurs. Cela me permet de prévoir plus aisément quelle sortie
               doit être retournée à chaque étape du programme. La trace ci-contre montre cette classe de faux résultats, je la
               détaille dans la rubrique Technique correspondante.
             </p>
           </div>
            <div class="trace-content">
              <Trace trace-id="screen-bouchon"/>
            </div>
          </div>

        </div>

        <div v-if="activeRoot === 'raising-excp'">
          <div class="box-header-with-tab">
            <h2>Gestion des exceptions</h2>
            <button @click="showDetails = !showDetails" class="details-tab"
                    :class="{ active: showDetails }">
              {{ showDetails ? 'Cacher les détails' : 'Et par rapport à l\'école ?' }}
            </button>
          </div>

          <div class="details-content" v-if="showDetails">
            <div class="inner-details">
              <p>
                Au cours de mon BUT, j'ai eu des cours sur la conception de tests, l'implémentation d'exceptions, l'écriture d'assertions...
                Ce ne sont pas des notions que j'ai découvertes pendant mon stage mais celui-ci m'a permis de fortement les
                renforcer et de concrétiser leur utilité. En effet, dans la plupart des programmes, il est assez facile de
                voir si la sortie attendue est produite juste en effectuant une exécution, quitte à rencontrer un bug pendant
                ce crash test.
              </p>
              <p>
                Mais dans le contexte dans lequel je suis, de traitements complexes de grands jeux de données, il est vraiment
                important que je m'assure que chaque étape du traitement renvoie le bon résultat de traitement car avec
                tout ce qu'il y a à faire au cours de celui-ci, savoir pourquoi une exécution ne me renvoie pas les bonnes
                données serait très long, très chronophage et sachant qu'il faut refaire cette étape <b>chaque fois</b>
                que j'implémente un nouveau traitement possible... autant dire que c'est mission impossible sans tests unitaires.
              </p>
            </div>
          </div>

          <h3>Qu'est ce qu'une exception ?</h3>
          <p>
            Une exception est un évènement qui se produit lors de l'exécution d'un programme et qui perturbe
            le déroulement normal des instructions de ce programme. La plupart des exceptions sont prévues dans
            le langage de programmation telles que :
          </p>
          <ul class="exemple">
            <li>l'utilisation d'une variable qui n'existe pas,</li>
            <li>l'exception de division par 0,</li>
            <li>une erreur de valeur non attendue à un endroit donné,</li>
            <li>ou bien une valeur passée dans un <InfoHover id="enum"> enum </InfoHover> qui n'appartient pas à celui-ci.</li>
          </ul>
          <p>
            Il est tout à fait possible, et très souvent recommandé, de créer ses propres exceptions. Cela permet de
            <b>créer des messages d'erreur précis</b> qui facilitent grandement le débogage et, plus tard, l'utilisation
            par l'utilisateur final qui comprendra facilement l'erreur qu'iel a pu faire en utilisant le programme. C'est
            d'autant plus important dans un contexte comme le mien où l'utilisateur doit utiliser une syntaxe précise
            pour effectuer le traitement de ses données, il faut qu'iel comprenne aisément ce qui a provoquer l'interruption
            de son programme.
          </p>

          <div class="side-by-side">
            <div class="text-content">
              <h3>Comment vérifier le bon déclenchement d'une exception ?</h3>
              <p>
                Les exceptions relevant des évènements précis, il est possible de prévoir les instructions pouvant les appeler.
                Il est possible de poser une assertion qu'une exception sera levée par l'unité testée.
              </p>
            </div>
            <div class="trace-content">
              <Trace trace-id="screen-raise-excp"/>
            </div>
          </div>
          <div class="side-by-side">
            <div class="trace-content">
              <Trace trace-id="screen-no-raise"/>
            </div>
            <div class="text-content">
              <p>
                A l'inverse, il est aussi possible de vérifier qu'une exception, soit le type générale sous qu'un type précis,
                ne soit pas levé. Pour réaliser cela, les instructions seront rédigées comme sur la trace ci-contre.
              </p>
            </div>
          </div>
          <p><b>
            La gestion complète des exceptions dans un programme Python est couverte en détail dans la rubrique Technique
            correspondante.
          </b>
          </p>
        </div>

        <div v-if="activeRoot === 'samples'">
          <div class="box-header-with-tab">
            <h2>Concevoir des échantillons de test</h2>
            <button @click="showDetails = !showDetails" class="details-tab"
                    :class="{ active: showDetails }">
              {{ showDetails ? 'Cacher les détails' : 'Et par rapport à l\'école ?' }}
            </button>
          </div>

          <div class="details-content" v-if="showDetails">
            <div class="inner-details">
              <p>
                Au cours de mon BUT, j'ai eu des cours sur la conception de tests, l'implémentation d'exceptions, l'écriture d'assertions...
                Ce ne sont pas des notions que j'ai découvertes pendant mon stage mais celui-ci m'a permis de fortement les
                renforcer et de concrétiser leur utilité. En effet, dans la plupart des programmes, il est assez facile de
                voir si la sortie attendue est produite juste en effectuant une exécution, quitte à rencontrer un bug pendant
                ce crash test.
              </p>
              <p>
                Mais dans le contexte dans lequel je suis, de traitements complexes de grands jeux de données, il est vraiment
                important que je m'assure que chaque étape du traitement renvoie le bon résultat de traitement car avec
                tout ce qu'il y a à faire au cours de celui-ci, savoir pourquoi une exécution ne me renvoie pas les bonnes
                données serait très long, très chronophage et sachant qu'il faut refaire cette étape <b>chaque fois</b>
                que j'implémente un nouveau traitement possible... autant dire que c'est mission impossible sans tests unitaires.
              </p>
            </div>
          </div>

          <h3>Qu'est ce qu'un échantillon de test ?</h3>
          <p>
            Un échantillon de test, ou <i>test sample</i> en anglais, désigne une donnée, souvent une constante, qui sert
            de sujet lors d'un test. Elle est toujours accompagnée d'une ou plusieurs assertions la concernant, qui prédisent
            le ou les résultats attendus face aux différents traitements par lesquels il passe au travers du programme.
          </p>

          <h3>Comment choisit-on un échantillon de test ?</h3>
          <p>
            Un échantillon de test n'est pas une valeur choisie au hasard. C'est une possibilité parmi les dizaines ou les
            centaines combinaisons (selon le programme), qui va venir couvrir un ou plusieurs chemins du programme. J'en
            parle un peu plus en détail dans la rubrique sur l'algorithmie mais un programme étant une suite d'instructions,
            il est possible de le représenter sous forme de <InfoHover id="flow-chart">flow-chart</InfoHover> et donc
            de prévoir combien d'échantillon il va falloir au minimum pour couvrir l'intégralité du programme avec les tests.
          </p>
        </div>

      </div>
    </section>
  </div>
</template>

<style scoped>

</style>
