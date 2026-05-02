<script setup>
import BackButton from "@/components/BackButton.vue";
import {ref} from "vue";
import DetailsButton from "../../components/DetailsButton.vue";
import InfoHover from "../../components/InfoHover.vue";
const activeRoot = ref('python')
const showDetails = ref(false)
</script>

<template>
  <div class="page-container">
    <BackButton to="/savoir-faire" label="Retour aux savoir-faire"/>

    <header class="page-header">
      <h1>Traitement de données</h1>
    </header>

  <section class="content">
    <section class="missions-section">
      <div class="tabs-list">
        <button class="tab-item"
                :class="{active: activeRoot === 'python'}"
                @click="activeRoot='python'">Logique de traitement avec Python
        </button>
        <button class="tab-item"
                :class="{active: activeRoot === 'pandas'}"
                @click="activeRoot='pandas'">Manipulation avec Pandas
        </button>
        <button class="tab-item"
                :class="{active: activeRoot === 'data-selection'}"
                @click="activeRoot='data-selection'">Sélection des données
        </button>
      </div>
      <div class="styled-box mission-content">
        <div v-if="activeRoot === 'python'">
          <div class="box-header-with-tab">
            <h2>Logique de traitement avec Python</h2>
            <DetailsButton v-model="showDetails" />
          </div>

          <div class="inner-details" v-if="showDetails">
            <h3>Quelle différence avec l'école ?</h3>
            <p>
              En cours, nous manipulons souvent des données prédéfinies. Ici, j'ai dû créer une
              <strong>interface logique</strong> : c'est le code Python qui "comprend" ce que l'utilisateur
              veut filtrer. Cela demande une rigueur algorithmique plus élevée pour anticiper toutes
              les syntaxes possibles d'une requête.
            </p>
            <p>
              Durant mon cursus, je n'ai pas eu à traiter des données avec autant de colonnes ou de lignes.
              Bien que j'ai été introduit à Pandas, j'ai vraiment saisi l'intérêt de son utilisation pendant
              mon stage, où il était absolument indispensable de l'exploiter car les watchdogs de l'exécution
              s'allumeraient systématiquement face à la charge conséquente de données à traiter.
            </p>
          </div>

          <p>
            Avant d'agir sur les données, j'utilise Python pour interpréter l'intention de l'utilisateur. J'ai conçu un
            parser capable d'analyser une 'query' (requête) et de la traduire en instructions logiques. Cette étape est
            cruciale car elle permet de transformer une chaîne de caractères brute en une structure que le programme
            peut comprendre et appliquer systématiquement aux données.
          </p>
        </div>

        <div v-if="activeRoot === 'pandas'">
          <div class="box-header-with-tab">
            <h2>Manipulation avec Pandas</h2>
            <DetailsButton v-model="showDetails" />
          </div>
          <div class="inner-details" v-if="showDetails">
            <h3>Quelle différence avec l'école ?</h3>
            <p>
              En cours, nous manipulons souvent des données prédéfinies. Ici, j'ai dû créer une
              <strong>interface logique</strong> : c'est le code Python qui "comprend" ce que l'utilisateur
              veut filtrer. Cela demande une rigueur algorithmique plus élevée pour anticiper toutes
              les syntaxes possibles d'une requête.
            </p>
            <p>
              Durant mon cursus, je n'ai pas eu à traiter des données avec autant de colonnes ou de lignes.
              Bien que j'ai été introduit à Pandas, j'ai vraiment saisi l'intérêt de son utilisation pendant
              mon stage, où il était absolument indispensable de l'exploiter car les watchdogs de l'exécution
              s'allumeraient systématiquement face à la charge conséquente de données à traiter.
            </p>
          </div>
          <h3>Pourquoi Pandas ici ?</h3>
          <p>
            J'utilise Pandas car il permet d'appliquer les résultats de mon parser de manière
            <InfoHover id="vectorisation">vectorisée</InfoHover>. Plutôt que de parcourir chaque ligne avec une boucle
            Python lente, Pandas traite le DataFrame d'un bloc, ce qui est indispensable pour
            l'analyse de simulations pyMaBoSS dont les résultats peuvent comporter plusieurs centaines
            de millier de colonnes.
          </p>

          <h3>Le DataFrame comme moteur d'exécution</h3>
          <p>
            Une fois la requête analysée par mon script Python, j'utilise <strong>Pandas</strong> pour
            appliquer ces filtres dynamiquement. Le DataFrame ne se contente pas de stocker les
            données ; il sert de moteur d'exécution qui sélectionne, trie et extrait les informations
            en temps réel selon les critères de la query.
          </p>

        </div>

        <div v-if="activeRoot === 'data-selection'">
          <div class="box-header-with-tab">
            <h3>Sélection des données</h3>
            <DetailsButton v-model="showDetails" />
          </div>

          <div class="inner-details" v-if="showDetails">

            <h3>Quelle différence avec l'école ?</h3>
            <p>
              En cours, nous manipulons souvent des données prédéfinies. Ici, j'ai dû créer une
              <strong>interface logique</strong> : c'est le code Python qui "comprend" ce que l'utilisateur
              veut filtrer. Cela demande une rigueur algorithmique plus élevée pour anticiper toutes
              les syntaxes possibles d'une requête.
            </p>
            <p>
              Durant mon cursus, je n'ai pas eu à traiter des données avec autant de colonnes ou de lignes.
              Bien que j'ai été introduit à Pandas, j'ai vraiment saisi l'intérêt de son utilisation pendant
              mon stage, où il était absolument indispensable de l'exploiter car les watchdogs de l'exécution
              s'allumeraient systématiquement face à la charge conséquente de données à traiter.
            </p>
          </div>

          <h3>Lien avec la conception</h3>
          <p>
            Le choix des données ne se fait pas au hasard : il est dicté par la
            <strong>flow-chart</strong> réalisée en amont. Cela permet de s'assurer que
            les jeux de données de test couvrent bien tous les cas de figure logiques.
          </p>

          <h3>Identifier et qualifier la donnée utile</h3>
          <p>
            Ma mission consiste à assurer la correspondance parfaite entre la requête et le résultat.
            Pour cela, je dois :
          </p>
          <ul>
            <li>Identifier les colonnes et types de données critiques à extraire du DataFrame initial.</li>
            <li>Définir des <strong>données de test stratégiques</strong> couvrant les opérateurs
              <code>&</code> et <code>|</code> pour valider que le filtrage est exact.</li>
            <li>Garantir que la sortie est exempte de "bruit" (données non pertinentes) pour faciliter
              l'interprétation finale.</li>
          </ul>
        </div>
      </div>

    </section>
  </section>

  </div>
</template>

<style scoped>

</style>
