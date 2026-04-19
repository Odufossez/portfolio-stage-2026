<script setup>
import BackButton from "@/components/BackButton.vue";
</script>

<template>
  <div class="page-container">
    <BackButton to="/savoir-faire" label="Retour aux savoir-faire" />
    
    <header class="page-header">
      <h1>Traitement de données</h1>
    </header>

    <section class="content">
      <p>Traces et explications pour les compétences liées à : Traitement de données.</p>
      
      <div class="styled-box">
        <h2>Mes Traces</h2>
        <!-- Ajoutez vos traces et explications pour chaque root ici -->
      </div>
    </section>
  </div>
</template>

<style scoped>
.styled-box {
  margin-top: 2rem;
  padding: 20px;
  border-radius: 8px;
  background-color: var(--surface-card, #ffffff);
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
</style>
