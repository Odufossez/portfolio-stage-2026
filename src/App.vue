<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import BackgroundGraph from "./components/BackgroundGraph.vue";
</script>

<template>
  <BackgroundGraph />
  <header>
    <NavBar />
  </header>

  <main>
    <router-view />
  </main>

  <Footer />
</template>

<style scoped>
header {
  line-height: 1.5;
  width: 100%;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    pointer-events: none; /* Empeche le header de bloquer les clics sur le reste de la page */
  }

  main {
    margin-top: 60px;
    position: relative;
    z-index: 1;
    width: 100%;
  }

}
</style>
