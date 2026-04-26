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
                @click="activeRoot='raising-excp'">Levée d'exceptions
        </button>
        <button class="tab-item"
                :class="{active: activeRoot === 'not-raising-excp'}"
                @click="activeRoot='not-raising-excp'">Non levée d'exceptions
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
            sont justes. Si une assertions est fausse, le programme s'interrompt et renvoie un test échoué, dans le cas
            contraire, le test est considéré réussi.
          </p>

          <Trace trace-id="exemples-assertions"/>

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

            </div>
          </div>
          <h3>Qu'est ce qu'un bouchon ? </h3>

        </div>

        <div v-if="activeRoot === 'raising-excp'">
          <div class="box-header-with-tab">
            <h2>Vérifier la levée d'exception</h2>
            <button @click="showDetails = !showDetails" class="details-tab"
                    :class="{ active: showDetails }">
              {{ showDetails ? 'Cacher les détails' : 'Et par rapport à l\'école ?' }}
            </button>
          </div>

          <div class="details-content" v-if="showDetails">
            <div class="inner-details">

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
            <b>créer des messages d'erreur précis</b> qui facilitent grandement le débogage.
          </p>

          <div class="side-by-side">
            <div class="text-content">
              <h3>Comment vérifier qu'une exception est levée ?</h3>
              <p>
                Les exceptions relevant des évènements précis, il est possible de prévoir les instructions pouvant les appeler.
                Il est possible de poser une assertion qu'une exception sera levée par l'unité testée.
              </p>
            </div>
            <div class="trace-content">
              <Trace trace-id="screen-raise-excp"/>
            </div>
          </div>


        </div>

        <div v-if="activeRoot === 'not-raising-excp'">
          <div class="box-header-with-tab">
            <h2>Vérifier la non levée d'exception</h2>
            <button @click="showDetails = !showDetails" class="details-tab"
                    :class="{ active: showDetails }">
              {{ showDetails ? 'Cacher les détails' : 'Et par rapport à l\'école ?' }}
            </button>
          </div>

          <div class="details-content" v-if="showDetails">
            <div class="inner-details">

            </div>
          </div>

          <h3>En quoi ça consiste ?</h3>
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

            </div>
          </div>

          <h3>A quoi ça sert ? </h3>
        </div>

      </div>
    </section>
  </div>
</template>

<style scoped>

</style>
