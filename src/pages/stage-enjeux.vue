<script setup>
import {ref} from 'vue';
import BackButton from "@/components/BackButton.vue";
import DetailsButton from "@/components/DetailsButton.vue";
import InfoHover from "@/components/InfoHover.vue";
import Trace from "@/components/Trace.vue";

const addCont = ref(false)
</script>

<template>
<div class="page-container">
  <BackButton to="/contexte-sujet" />

  <header class="page-header">
    <h1>Présentation des enjeux</h1>
  </header>

  <div class="styled-box">
    <div class="box-header-with-tab">
      <h2>Enjeux dans le contexte d'inférence de modèle</h2>
      <DetailsButton v-model="addCont" label="Voir plus sur le contexte"/>
    </div>
    <div v-if="addCont" class="inner-details">
      <h2>Inférence de modèle</h2>
      <p>
        L'inférence de modèle est un processus complexe. En effet, bien que des outils existent, il faut déduire de
        la littérature scientifique et des recherches actuelles, quelles sont les règles qui régissent le modèle:
        condition d'activation d'un noeud, quels noeuds composent un état, probabilités de bascule...
      </p>
      <p>
        Les noeuds pouvant prendre chacun 2 états, actif ou non, le nombre d'état dans un modèle est de
        <math>
          <msup>
            <mi>2</mi>
            <mn>n</mn>
          </msup>
        </math>
        n étant le nombre de noeuds et ce calcul étant le nombre de combinaisons possibles.
        Lorsqu'un modèle est inféré, il est alors difficile de savoir si c'est <b>la</b>
        solution ou si c'est <b>une</b> solution qui existe.
      </p>
      <p>
        Ce processus long se fait rarement seul. Des outils existent déjà pour faciliter l'établissement des règles qui
        régissent un modèle mais il est possible de le faire "à la main", c'est à dire, lire la documentation scientifique
        et déduire des articles les règles. On peut résumé très grossièrement l'inférence des modèles au schéma de la
        trace ci-dessous.
      </p>
      <Trace traceId="schema-pipeline"/>
    </div>
    <p>
      Dans un contexte d'inférence de modèle comme celui de mon stage, avoir un outil tel que celui que j'ai décrit dans
      <router-link to="/stage-sujet"> la section précédente,</router-link> permet d'inscrire une étape supplémentaire en tant que
      <b>checkup de routine</b> dans la <a @click="addCont=!addCont">pipeline</a> de <b>création, validation et optimisation des modèles
      cellulaires.</b> Également, l'objectif à très long terme serait <b>d'automatiser cette pipeline</b>. Il faut donc que mon outil
      puisse <b>être automatiser le plus simplement possible.</b>
    </p>

    <p>
      Sur un second niveau, bien que cet outil existe de manière similaire mais beaucoup moins intuitive, l'outil que j'ai
      eu à développer, devait être <b>plus intuitif et rapide</b> que <InfoHover id="maboss_test">MaBoSS_test</InfoHover>,
      alors utilisé <i>uniquement en interne dans l'équipe SYSBIO</i>.
    </p>
    <p>
      Enfin, dans un contexte de développement <b>opensource et international</b>, l'objectif est de faire profiter d'autres
      équipes de modélisation en pouvant publier un outil <b>efficace, fiable, précis et intuitif</b>.
    </p>
  </div>


</div>
</template>

<style scoped>

</style>