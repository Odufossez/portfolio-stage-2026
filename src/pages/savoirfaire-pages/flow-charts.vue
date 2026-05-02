<script setup>
import BackButton from "@/components/BackButton.vue";
import {ref} from "vue";
const activeRoot = ref('conception');
const showDetails = ref(false)
</script>

<template>
  <div class="page-container">
    <BackButton to="/savoir-faire" label="Retour aux savoir-faire" />
    
    <header class="page-header">
      <h1>Flow charts</h1>
    </header>

    <section class="content">
      <h2>Conception et utilisation de flow-charts</h2>
      <h3>Qu'est ce qu'une flow-chart ?</h3>
      <p>
        Une <strong>flow-chart</strong> (ou organigramme) est une représentation visuelle d'un algorithme
        ou d'un processus logique. Elle utilise des symboles standardisés (rectangles pour les actions,
        losanges pour les décisions) reliés par des flèches pour décrire le cheminement des données
        et les étapes successives d'un programme.
      </p>

      <section class="missions-section">
        <div class="tabs-list">
          <button class="tab-item"
                  :class="{active: activeRoot === 'conception'}"
                  @click="activeRoot='conception'">Conception de flow-charts
          </button>
          <button class="tab-item"
                  :class="{active: activeRoot === 'usage'}"
                  @click="activeRoot='usage'">Utilisation d'une flow-chart
          </button>
        </div>
        <div class="styled-box mission-content">
          <div v-if="activeRoot === 'conception'">
            <div class="box-header-with-tab">
              <h2>Conception de flow-chart</h2>
              <button @click="showDetails = !showDetails" class="details-tab"
                      :class="{ active: showDetails }">
                {{ showDetails ? 'Cacher les détails' : 'Et par rapport à l\'école ?' }}
              </button>
            </div>
            <div class="inner-details" v-if="showDetails">
              <h3>Quelle différence avec l'école ?</h3>
              <p>
                Durant mon cursus de BUT 1 et 2, nous avons étudié la conception et l'analyse de flow-charts dans les deux contextes
                présentés ici : l'algorithmie et la couverture de test. Les organigrammes étaient très souvent assez simple,
                ce qui n'est pas nécessairement le cas dans le cadre de mon stage parce que les traitements que j'effectue
                sur les dataframes sont souvent découpés en de nombreuses étapes plus ou moins lourdes.
              </p>
              <p>
                Aussi, la plupart des organigrammes vus en cours étaient déjà rédigés, nous n'avons pas eu besoin d'en
                faire nous même beaucoup. Donc j'ai beaucoup plus pratiqué en stage. De plus, et c'est une observation
                personnelle, commencer par rédiger des brouillons d'organigrammes me permettaient de ne pas souffrir du
                "syndrome de la page blanche" et d'avoir une idée de par quoi implémenter en premier.
              </p>
            </div>
            <h3>La rigueur de la nomenclature</h3>
            <p>
              Lors de la conception de mes schémas, j'attache une importance particulière à la
              <strong>nomenclature</strong>. Cela consiste à utiliser un langage précis et constant pour :
            </p>
            <ul>
              <li><strong>Les étapes d'action :</strong> Utilisation de verbes à l'infinitif clairs.</li>
              <li><strong>Les conditions :</strong> Formulation de questions fermées (Oui/Non ou True/False) dans les losanges de décision.</li>
              <li><strong>Cohérence avec le code :</strong> Utiliser des noms de variables ou de processus qui seront identiques dans l'implémentation Python finale.</li>
            </ul>
            <p>
              Cette nomenclature rigoureuse permet de transformer sans ambiguïté le schéma visuel en code réel.
            </p>
          </div>

          <div v-if="activeRoot === 'usage'">
            <div class="box-header-with-tab">
              <h2>Utilisation d'une flow-chart</h2>
              <button @click="showDetails = !showDetails" class="details-tab"
                      :class="{ active: showDetails }">
                {{ showDetails ? 'Cacher les détails' : 'Et par rapport à l\'école ?' }}
              </button>
            </div>
            <div class="inner-details" v-if="showDetails">
              <h3>Quelle différence avec l'école ?</h3>
              <p>
                Durant mon cursus de BUT 1 et 2, nous avons étudié la conception et l'analyse de flow-charts dans les deux contextes
                présentés ici : l'algorithmie et la couverture de test. Les organigrammes étaient très souvent assez simple,
                ce qui n'est pas nécessairement le cas dans le cadre de mon stage parce que les traitements que j'effectue
                sur les dataframes sont souvent découpés en de nombreuses étapes plus ou moins lourdes.
              </p>
              <p>
                Aussi, la plupart des organigrammes vus en cours étaient déjà rédigés, nous n'avons pas eu besoin d'en
                faire nous même beaucoup. Donc j'ai beaucoup plus pratiqué en stage. De plus, et c'est une observation
                personnelle, commencer par rédiger des brouillons d'organigrammes me permettaient de ne pas souffrir du
                "syndrome de la page blanche" et d'avoir une idée de par quoi implémenter en premier.
              </p>
            </div>
            <h3>Comment une flow-chart est utilisée dans le cadre de code ?</h3>
            <p>
              La flow-chart sert de <strong>fil conducteur</strong> durant toute la phase de développement :
            </p>
            <ul>
              <li><strong>Guide de codage :</strong> Elle permet de ne pas oublier de cas particuliers (comme la gestion des erreurs ou les conditions limites).</li>
              <li><strong>Support de communication :</strong> Elle facilite l'explication de mon algorithme lors des réunions d'avancement.</li>
              <li><strong>Aide au débogage :</strong> Si le programme ne réagit pas comme prévu, la flow-chart permet de vérifier visuellement où la logique a pu faire défaut.</li>
            </ul>
            <h3>Anticipation des tests et des données</h3>
            <p>
              La flow-chart est aussi mon premier outil de <strong>Qualité Assurance (QA)</strong>.
              En parcourant visuellement chaque branche de décision, je peux déterminer à l'avance
              le genre de données de test dont j'aurai besoin pour valider mon module.
            </p>
            <ul>
              <li><strong>Identification des chemins critiques :</strong> Pour chaque condition, je prévois un jeu de données "positif" et un "négatif".</li>
              <li><strong>Préparation des volumes :</strong> Si le schéma montre des traitements lourds, je prépare des matrices NumPy plus conséquentes pour vérifier la stabilité.</li>
            </ul>
          </div>
        </div>

      </section>

    </section>
  </div>
</template>

<style scoped>

</style>
