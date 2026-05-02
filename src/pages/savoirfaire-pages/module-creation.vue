<script setup>
import DetailsButton from "@/components/DetailsButton.vue";
import BackButton from "@/components/BackButton.vue";
import {ref} from "vue";

const activeRoot = ref('classes');
const showDetails = ref(false);
</script>

<template>
  <div class="page-container">
    <BackButton to="/savoir-faire" label="Retour aux savoir-faire"/>

    <header class="page-header">
      <h1>Création de modules et programmation orientée objet</h1>
    </header>

    <section class="missions-section">
      <div class="tabs-list">
        <button class="tab-item"
                :class="{active: activeRoot === 'classes'}"
                @click="activeRoot='classes'">Création de classes
        </button>
        <button class="tab-item"
                :class="{active: activeRoot === 'except'}"
                @click="activeRoot='except'">pyMaBoSS dans Jupyter
        </button>
      </div>

      <div class="styled-box mission-content">
        <div v-if="activeRoot === 'classes'">
          <div class="box-header-with-tab">
            <h2>Programmation orientée objet en Python</h2>
            <DetailsButton v-model="showDetails" />
          </div>

          <div class="inner-details" v-if="showDetails">
            <h3>Quelles différences avec l'école ?</h3>
            <p>
              L'école m'a appris les grands principes de la POO en <b>Java</b>. Il a donc fallu que j'apprenne à les appliquer
              en Python qui n'est pas un langage orienté objet à la base. La programmation orientée objet n'est pas un
              domaine avec lequel j'ai des difficultés donc il n'a pas été difficile pour moi de m'adapter à Python
              plutôt que de le faire en Java.
            </p>
          </div>
          <h3>Qu'est ce qu'un module et la POO ?</h3>
          <p>
            Un <strong>module</strong> est un fichier contenant du code Python (fonctions, classes, variables) qui peut
            être réutilisé dans d'autres programmes. La <strong>Programmation Orientée Objet (POO)</strong> est un
            paradigme qui permet de structurer le code en créant des "classes" : des modèles d'objets regroupant à la
            fois des données (attributs) et des comportements (méthodes).
          </p>
          <h3>Application dans mon stage</h3>
          <p>
            Dans mon projet, j'ai conçu des classes pour représenter des composants spécifiques du simulateur. Cela
            permet de manipuler des objets complexes de manière intuitive, tout en isolant la logique de calcul à
            l'intérieur du module pour le rendre plus facile à maintenir et à faire évoluer.
          </p>
          <p>
            Également, il est plus simple de rajouter un module à un programme qui fonctionne déjà, plutôt que de refaire
            le programme entièrement.
          </p>


        </div>

        <div v-if="activeRoot === 'except'">
          <div class="box-header-with-tab">
            <h2>Création d'exceptions personnalisées</h2>
            <DetailsButton v-model="showDetails" />
          </div>

          <div class="inner-details" v-if="showDetails">
            <h3>Quelles différences avec l'école ?</h3>
            <p>
              L'école m'a appris les grands principes de la POO en <b>Java</b>. Il a donc fallu que j'apprenne à les appliquer
              en Python qui n'est pas un langage orienté objet à la base. La programmation orientée objet n'est pas un
              domaine avec lequel j'ai des difficultés donc il n'a pas été difficile pour moi de m'adapter à Python
              plutôt que de le faire en Java.
            </p>
          </div>
          <h3>Qu'est ce qu'une exception ?</h3>
          <p>
            Une <strong>exception</strong> est un événement qui interrompt le flux normal d'un programme lorsqu'une
            erreur survient. Plutôt que de laisser le programme "planter" brutalement, on utilise des exceptions pour
            intercepter l'erreur et la gérer proprement.
          </p>
          <h3>Pourquoi créer des exceptions personnalisées ?</h3>
          <p>
            J'ai créé des classes d'exceptions spécifiques à mon module pour :
          </p>
          <ul>
            <li>Fournir des messages d'erreur clairs et adaptés au domaine (ex: erreur de configuration du modèle
              booléen).
            </li>
            <li>Permettre aux utilisateurs du module de différencier les erreurs de manipulation des erreurs Python
              classiques.
            </li>
            <li>Faciliter le débogage en ciblant précisément l'origine du problème dans la logique métier.</li>
          </ul>

        </div>
      </div>


    </section>
  </div>
</template>

<style scoped>

</style>
