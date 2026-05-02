<script setup>
import DetailsButton from "@/components/DetailsButton.vue";
import BackButton from "@/components/BackButton.vue";
import {ref} from "vue";
const activeRoot = ref('maboss')
const showDetails = ref(false)
</script>

<template>
  <div class="page-container">
    <BackButton to="/savoir-faire" label="Retour aux savoir-faire" />
    
    <header class="page-header">
      <h1>Jupyter notebooks</h1>
    </header>

    <section class="content">
      <h2>L'utilisation de Jupyter Notebook</h2>
      <h3>Qu'est ce que Jupyter Notebook ?</h3>
        <p>
          Jupyter Notebook est une application web et desktop open source qui permet au data scientist de créer et partager
          des documents incluant code, équations et autres ressources dans un seul et unique fichier. Ces notebooks sont
          utilisés pour toutes sortes de tâches liées aux traitements de données.
        </p>

      <section class="missions-section">
        <div class="tabs-list">
          <button class="tab-item"
                  :class="{active: activeRoot === 'maboss'}"
                  @click="activeRoot='maboss'">pyMaBoSS dans Jupyter
          </button>
          <button class="tab-item"
                  :class="{active: activeRoot === 'data-treatment'}"
                  @click="activeRoot='data-treatment'">Traitement de données avec Pandas et numpy
          </button>
        </div>
        <div class="styled-box mission-content">
          <div v-if="activeRoot === 'maboss'">
            <div class="box-header-with-tab">
              <h2>pyMaBoSS dans Jupyter</h2>
              <DetailsButton v-model="showDetails" />
            </div>
            <div class="inner-details" v-if="showDetails">
              <h3>Quelle différence avec l'école ?</h3>
              <p>
                L'utilisation de Jupyter Notebook n'a été que survolée pendant mon cursus, mon stage m'a permis d'
                approfondir l'utilisation de cet outil et de mieux comprendre comment il fonctionne.
              </p>
            </div>
            <h3>Qu'est ce que pyMaBoSS ?</h3>
            <p>
              PyMaBoSS est un module python permettant de lancer des simulations dans MaBoSS et de faire du traitement
              de données sur les résultats de ces simulations. Ce module peut s'utiliser dans un Jupyter Notebook afin
              de retrouver ses simulations et ses graphiques dans un unique document.
            </p>

            <h3>Quel est le lien avec mon sujet de stage ?</h3>
            <p>
              Comme je dois coder un module Python supplémentaire à PyMaBoSS, j'ai fait des essais dans un Notebook pour
              pouvoir me rendre compte de comment mon propre module s'intégrait au reste.
            </p>
          </div>

          <div v-if="activeRoot === 'data-treatment'">
            <div class="box-header-with-tab">
              <h2>Traitement de données avec pandas et numpy</h2>
              <DetailsButton v-model="showDetails" />
            </div>

            <div class="inner-details" v-if="showDetails">
              <h3>Quelle différence avec l'école ?</h3>
              <p>
                Bien que nous ayons eu des cours sur l'utilisation de pandas et numpy, j'ai eu à les utiliser dans des
                tableaux bien plus grands et complexes que les exemples que j'ai pu voir en cours. Cela a demandé plus de
                rigueur qu'en cours.
              </p>
            </div>

            <h3>Que sont pandas et numpy ?</h3>
            <p>
              <strong>NumPy</strong> est la bibliothèque fondamentale pour le calcul scientifique en Python.
              Elle permet de manipuler des tableaux de données de grande taille (matrices) et d'effectuer des
              opérations mathématiques complexes avec une rapidité bien supérieure aux listes Python classiques.
            </p>
            <p>
              <strong>Pandas</strong>, de son côté, est construit au-dessus de NumPy. C'est l'outil de référence
              pour l'analyse de données. Il introduit le concept de <em>DataFrame</em> (similaire à un tableau Excel),
              permettant de manipuler, filtrer et nettoyer des données structurées de manière intuitive et puissante.
            </p>

            <h3>Comment sont-ils utilisés dans mon stage ?</h3>
            <p>
              Tous les tableaux de données sont des dataframes <b>pandas</b>, il a donc fallu que j'apprenne à utiliser
              ce module pour effectuer les traitements dont j'avais besoin. Par extension, j'avais parfois besoin de
              manipuler directement <b>numpy</b>.
            </p>

          </div>
        </div>
      </section>

    </section>
  </div>
</template>

<style scoped>

</style>
