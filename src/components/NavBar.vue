<template>
  <nav class="navbar">
    <div class="navbar-header">
      <span class="user-info">Oscar Dufossez - oscar.dufossez@edu.univ-fcomte.fr</span>
    </div>

    <ul class="navbar-links">
      <li>
        <router-link to="/home">Accueil</router-link>
      </li>
      <li>
        <router-link to="/technique">Technique</router-link>
      </li>
      <li>
        <router-link to="/projet">Suivi de projet</router-link>
      </li>
      <li>
        <router-link to="/social">Intégration en entreprise</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
/* La barre est fixée en haut de l'écran */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #e8803d;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  z-index: 1000; /* S'assure qu'elle passe au dessus du contenu */
  pointer-events: auto;
}

.user-info {
  font-weight: bold;
  font-size: 0.9rem;
}

.navbar-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-links li {
  margin-left: 20px;
}

.navbar-links a {
  color: white;
  text-decoration: none;
  transition: all 0.3s;
  padding: 8px 15px;
  display: block;
  font-size: 1.1rem;
  font-weight: 600;
}

.navbar-links a:hover {
  color: #ff6300;
  background-color: #412817;
  border-radius: 8px;
}
</style>