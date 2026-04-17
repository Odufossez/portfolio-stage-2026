<script setup>
import BackButton from "@/components/BackButton.vue";
import {infobullesData} from "@/data/infobulles.js";

const sortedData = [...infobullesData].sort((a,b)=>
    a.title.localeCompare(b.title))
</script>

<template>
<div class="page-container">
  <BackButton to="/home" />
  <header class="page-header">
    <h1>Lexique complet des notions vues et/ou mentionnées</h1>
  </header>

  <main class="lexical-grid">
    <div v-for="infobulle in sortedData" :key="infobulle.id" class="styled-box">
      <h3>{{ infobulle.title }}</h3>
      <p>{{ infobulle.content }}</p>
    </div>
  </main>
</div>
</template>

<style scoped>
.lexical-grid {
  display: flex;
  flex-direction: column;
  gap: 20px; /* Espace entre les boîtes */
}

.styled-box {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-left: 5px solid #e8803d; /* Rappel de la couleur de ta NavBar */
  transition: transform 0.2s;
}

.styled-box:hover {
  transform: translateY(-3px);
}

.styled-box h3 {
  margin-top: 0;
  color: #412817;
}

.styled-box a {
  color: #e8803d;
  text-decoration: none;
  word-break: break-all; /* Évite que les liens longs ne dépassent sur mobile */
}

.styled-box a:hover {
  text-decoration: underline;
}
</style>