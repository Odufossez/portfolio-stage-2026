<script setup>
import BackButton from "@/components/BackButton.vue";
import {tracesData} from "@/data/traces.js";
import Trace from "@/components/Trace.vue";

</script>

<template>
  <div class="page-container">
    <BackButton to="/home" label="Retour à l'accueil"/>
    <header class="page-header">
      <h1>Toutes les traces utilisées sur ce site</h1>
    </header>
    <main class="traces-grid">
      <div v-for="trace in tracesData" :key="trace.id" class="styled-box">
        <Trace :traceId="trace.id" />
      </div>
    </main>
  </div>
</template>

<style scoped>
.traces-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}
</style>