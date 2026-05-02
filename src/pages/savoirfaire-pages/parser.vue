<script setup>
import BackButton from "@/components/BackButton.vue";
import {ref} from "vue";

const activeRoot = ref('regex');
</script>

<template>
  <div class="page-container">
    <BackButton to="/savoir-faire" label="Retour aux savoir-faire"/>

    <header class="page-header">
      <h1>Parser</h1>
    </header>

    <section class="content">
      <p>
        Traces et explications pour les compétences liées à la création de parseur, incluant l'utilisation de REGEX et
        le parsing d'expressions logiques.
      </p>
    </section>

    <section class="missions-section">
      <div class="tabs-list">
        <button class="tab-item"
                :class="{active: activeRoot === 'regex'}"
                @click="activeRoot='regex'">REGEX
        </button>
        <button class="tab-item"
                :class="{active: activeRoot === 'logical-expression'}"
                @click="activeRoot='logical-expression'">Expressions logiques
        </button>
      </div>

      <div class="styled-box mission-content">
        <div v-if="activeRoot === 'regex'">
          <div class="box-header-with-tab">
            <h2>REGEX</h2>
          </div>

          <h3>Vérifier la validité d'une chaine de caractère par rapport à une REGEX</h3>
          <p>
            Avant de traiter une requête, j'utilise des expressions régulières (REGEX) pour m'assurer que la syntaxe de
            la query est correcte. Cette étape de 'sanitization' permet de vérifier que l'utilisateur n'a pas introduit
            de caractères interdits ou de structures incohérentes qui pourraient faire planter le programme.
          </p>
          <p>
            Python prenant en charge la décomposition de REGEX, j'ai juste eu à apprendre comment cela marchait et
            composer
            moi-même ma REGEX pour que le programme la décompose correctement.
          </p>

          <h3>Décomposer une chaine de caractère par rapport à une REGEX</h3>
          <p>
            Une fois validée, la REGEX me permet de 'tokeniser' la chaîne, c'est-à-dire de séparer les différents
            éléments de la requête (variables, opérateurs logiques). C'est cette décomposition qui permet au parser de
            comprendre l'ordre des opérations à effectuer.
          </p>
        </div>

        <div v-if="activeRoot === 'logical-expression'">
          <div class="box-header-with-tab">
            <h2>Expressions logiques</h2>
          </div>

          <h3>Vérifier la validité d'une expression logique</h3>
          <p>
            <!-- Ajoutez vos traces et explications ici -->
          </p>

          <h3>Calculer la sortie d'une expression logique</h3>
          <p>
            <!-- Ajoutez vos traces et explications ici -->
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>
