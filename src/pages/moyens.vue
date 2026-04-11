<script setup>
</script>

<template>
  <div class="page-container">
    <router-link to="/contexte-stage" class="back-link">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
      Retour au contexte
    </router-link>

    <header class="page-header">
      <h1>Environnement technique</h1>
    </header>

    <div class="styled-box">
      <p>
        Pour mener à bien ce projet, j'ai eu accès à divers outils et technologies... [Contenu à compléter : Langages, Frameworks, Infrastructure]
      </p>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding: 100px 20px 40px;
  max-width: 900px;
  margin: 0 auto;
}

.page-header h1 {
  font-size: 2.5rem;
  color: #412817;
  margin-bottom: 40px;
  border-left: 5px solid #e8803d;
  padding-left: 20px;
}
</style>