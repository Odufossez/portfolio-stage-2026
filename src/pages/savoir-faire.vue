<template>
  <div class="page-container">
    <router-link to="/home" class="back-link">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
      Retour à l'accueil
    </router-link>
    
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
.page-container {
  padding: 100px 20px 40px;
  max-width: 900px;
  margin: 0 auto;
}

.back-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #e8803d;
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 30px;
  transition: transform 0.2s ease;
}

.back-link:hover {
  transform: translateX(-5px);
}

.page-header h1 {
  font-size: 2.5rem;
  color: #412817;
  margin-bottom: 40px;
  border-left: 5px solid #e8803d;
  padding-left: 20px;
}

.content {
  line-height: 1.8;
  font-size: 1.1rem;
  color: #5c4033;
}

.content p, .content li {
  margin-bottom: 20px;
}
</style>
