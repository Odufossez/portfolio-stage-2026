<script setup>
import BackButton from "@/components/BackButton.vue";
</script>

<template>
  <div class="page-container">
    <BackButton to="/home" label="Retour à l'accueil" />
    
    <header class="page-header">
      <h1>Savoir-faire généraux</h1>
    </header>

    <section class="content">
      <p>Cette page présente mes savoir-faire généraux acquis et mobilisés durant mon cursus et mon stage.</p>
      <p>Il s'agit de compétences transversales telles que la gestion de projet, l'auto-apprentissage, et la communication technique.</p>
    </section>
  </div>
</template>

<style scoped>
.content {
  line-height: 1.8;
  font-size: 1.1rem;
  color: var(--curie-text);
}

.content p, .content li {
  margin-bottom: 20px;
}
</style>
