<script setup>
import BackButton from "@/components/BackButton.vue";
import {ref} from "vue";
import InfoHover from "@/components/InfoHover.vue";
import SourcesSection from "@/components/SourcesSection.vue";
import Trace from "@/components/Trace.vue";
import DetailsButton from "@/components/DetailsButton.vue";
import ColleagueHover from "@/components/ColleagueHover.vue";

const activeRoot = ref('being-communicant');
const showDetails = ref(false);
</script>

<template>
  <div class="page-container">
    <BackButton to="/savoir-faire" label="Retour aux savoir-faire"/>

    <header class="page-header">
      <h1>Cahier des charges</h1>
    </header>

    <section class="missions-section">
      <div class="tabs-list">
        <button class="tab-item"
                :class="{active: activeRoot === 'being-communicant'}"
                @click="activeRoot='being-communicant'">Communication
        </button>
        <button class="tab-item"
                :class="{active: activeRoot === 'ask-questions'}"
                @click="activeRoot='ask-questions'">Poser des questions
        </button>
        <button class="tab-item"
                :class="{active: activeRoot === 'know-to-synthetize'}"
                @click="activeRoot='know-to-synthetize'">Synthétiser
        </button>
      </div>

      <div class="styled-box mission-content">
        <div v-if="activeRoot === 'being-communicant'">
          <div class="box-header-with-tab">
            <h2>Bien communiquer avec les autres</h2>
            <DetailsButton v-model="showDetails"/>
          </div>
          <div class="inner-details" v-if="showDetails">
            <h3>Quelles différences avec l'école ?</h3>
            <p>
              Au cours de mes études, j'ai eu à respecter des cahiers des charges qui se présentaient sous forme de
              consignes.
              Ils étaient donc souvent très clairs, les limites et les attendus étaient établis. Dans le cadre de mon
              stage,
              c'est à moi de savoir ce qu'attendent
              <ColleagueHover name="calzone">Laurence</ColleagueHover>
              et
              <ColleagueHover name="stoll">Gautier</ColleagueHover>
              en leur posant des questions, en notant ce qu'ils veulent...
            </p>
            <p>
              Bien souvent, cela se présente sous forme de phrase "On aurait besoin que tu fasses [tâche]." mais c'est à
              moi de poser les questions techniques sur les attendus de sortie de cette implémentation.
            </p>
            <div class="exemple">
              <p>"On aimerait pouvoir savoir quelle mutation procure le meilleur taux d'augmentation sur un état."</p>
              <p>Cela implique pour moi de comprendre plusieurs choses :</p>
              <ul>
                <li>Comment se manifeste une mutation dans les simulations ?</li>
                <li>Qu'est ce que cela implique au niveau des simulations ? Faut-il en prévoir plusieurs ? </li>
                <li>Comment j'intègre cette instruction dans mon programme ? </li>
              </ul>
            </div>
          </div>
          <p>
            La communication est le pilier de la réussite du projet pyMaBoSS.
            Tout au long de mon stage, j'ai maintenu un dialogue constant avec mon tuteur et
            l'équipe de recherche. Ces échanges réguliers m'ont permis de :
          </p>
          <ul>
            <li>Valider les étapes clés de la conception du module.</li>
            <li>Partager l'avancement de mon travail et lever les points de blocage rapidement.</li>
            <li>M'assurer que mon code s'intègre harmonieusement dans l'écosystème existant.</li>
          </ul>
        </div>

        <div v-if="activeRoot === 'ask-questions'">
          <div class="box-header-with-tab">
            <h2>Poser des questions et les bonnes</h2>
            <DetailsButton v-model="showDetails"/>
          </div>
          <div class="inner-details" v-if="showDetails">
            <h3>Quelles différences avec l'école ?</h3>
            <p>
              Au cours de mes études, j'ai eu à respecter des cahiers des charges qui se présentaient sous forme de
              consignes.
              Ils étaient donc souvent très clairs, les limites et les attendus étaient établis. Dans le cadre de mon
              stage,
              c'est à moi de savoir ce qu'attendent
              <ColleagueHover name="calzone">Laurence</ColleagueHover>
              et
              <ColleagueHover name="stoll">Gautier</ColleagueHover>
              en leur posant des questions, en notant ce qu'ils veulent...
            </p>
            <p>
              Bien souvent, cela se présente sous forme de phrase "On aurait besoin que tu fasses [tâche]." mais c'est à
              moi de poser les questions techniques sur les attendus de sortie de cette implémentation.
            </p>
            <div class="exemple">
              <p>"On aimerait pouvoir savoir quelle mutation procure le meilleur taux d'augmentation sur un état."</p>
              <p>Cela implique pour moi de comprendre plusieurs choses :</p>
              <ul>
                <li>Comment se manifeste une mutation dans les simulations ?</li>
                <li>Qu'est ce que cela implique au niveau des simulations ? Faut-il en prévoir plusieurs ? </li>
                <li>Comment j'intègre cette instruction dans mon programme ? </li>
              </ul>
            </div>
          </div>
          <p>
            Savoir poser les bonnes questions est crucial pour définir les spécifications techniques.
            Pour le développement du parser et du traitement de données, j'ai dû
            interroger l'équipe sur :
          </p>
          <ul>
            <li><strong>Les cas d'usage réels :</strong> Quel type de requêtes les chercheurs vont-ils saisir ?</li>
            <li><strong>Les contraintes de données :</strong> Quelles sont les limites des DataFrames Pandas à traiter ?
            </li>
            <li><strong>Les priorités :</strong> Quelles fonctionnalités logiques (& vs |) étaient indispensables pour
              la première version ?
            </li>
          </ul>
          <p>Cette démarche m'a permis d'éviter les malentendus et de livrer un outil qui répond vraiment au besoin.</p>
        </div>

        <div v-if="activeRoot === 'know-to-synthetize'">
          <div class="box-header-with-tab">
            <h2>Savoir comment synthétiser</h2>
            <DetailsButton v-model="showDetails"/>
          </div>
          <div class="inner-details" v-if="showDetails">
            <h3>Quelles différences avec l'école ?</h3>
            <p>
              Au cours de mes études, j'ai eu à respecter des cahiers des charges qui se présentaient sous forme de
              consignes.
              Ils étaient donc souvent très clairs, les limites et les attendus étaient établis. Dans le cadre de mon
              stage,
              c'est à moi de savoir ce qu'attendent
              <ColleagueHover name="calzone">Laurence</ColleagueHover>
              et
              <ColleagueHover name="stoll">Gautier</ColleagueHover>
              en leur posant des questions, en notant ce qu'ils veulent...
            </p>
            <p>
              Bien souvent, cela se présente sous forme de phrase "On aurait besoin que tu fasses [tâche]." mais c'est à
              moi de poser les questions techniques sur les attendus de sortie de cette implémentation.
            </p>
            <div class="exemple">
              <p>"On aimerait pouvoir savoir quelle mutation procure le meilleur taux d'augmentation sur un état."</p>
              <p>Cela implique pour moi de comprendre plusieurs choses :</p>
              <ul>
                <li>Comment se manifeste une mutation dans les simulations ?</li>
                <li>Qu'est ce que cela implique au niveau des simulations ? Faut-il en prévoir plusieurs ? </li>
                <li>Comment j'intègre cette instruction dans mon programme ? </li>
              </ul>
            </div>
          </div>
          <p>
            La synthèse est l'étape où les besoins abstraits deviennent des solutions concrètes.
            J'ai traduit les demandes des utilisateurs en :
          </p>
          <ul>
            <li><strong>Flowcharts :</strong> Une traduction visuelle des processus logiques avant le codage.</li>
            <li><strong>Spécifications fonctionnelles :</strong> Déterminer quel genre de données de test utiliser pour
              valider le module.
            </li>
            <li><strong>Nomenclature :</strong> Établir un langage commun entre le besoin métier et le code Python
              (classes, exceptions, noms de variables).
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>
