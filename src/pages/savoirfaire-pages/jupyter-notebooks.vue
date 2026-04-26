<script setup>
import BackButton from "@/components/BackButton.vue";
import {ref} from "vue";
const activeRoot = ref('')
</script>

<template>
  <div class="page-container">
    <BackButton to="/savoir-faire" label="Retour aux savoir-faire" />
    
    <header class="page-header">
      <h1>Jupyter notebooks</h1>
    </header>

    <section class="content">
      <h2>L'utilisation de Jupyter Notebook</h2>

      <section class="missions-section">
        <div class="tabs-list">

        </div>
      </section>

    </section>
  </div>
</template>

<style scoped>

</style>
