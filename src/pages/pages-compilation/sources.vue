<script setup>
import BackButton from "../../components/BackButton.vue";
import {sourcesData} from "../../data/sources.js";
const sortedSources = [...sourcesData].sort((a,b) =>
a.name.localeCompare(b.name));
</script>

<template>
<div class="page-container">
  <BackButton to="/home" />
  <header class="page-header">
    <h1>Sources présentes dans ce portfolio</h1>

    <main class="sources-grid">
      <div v-for="source in sortedSources" :key="source.id" class="styled-box">
        <h3>{{ source.name }}</h3>
        <p>
          Lien :
          <a :href="source.link" target="_blank" rel="noopener noreferrer">
            {{ source.link }}
          </a>
        </p>
      </div>
    </main>
  </header>
</div>
</template>

<style scoped>
.sources-grid {
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