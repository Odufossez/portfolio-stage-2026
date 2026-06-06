<template>
  <nav class="navbar">
    <div class="navbar-header">
      <span class="user-info">Oscar Dufossez - oscar.dufossez@edu.univ-fcomte.fr</span>
      <button class="burger-menu" @click="toggleMenu" aria-label="Ouvrir le menu">
        <span class="line" :class="{ 'line-1-open': isMenuOpen }"></span>
        <span class="line" :class="{ 'line-2-open': isMenuOpen }"></span>
        <span class="line" :class="{ 'line-3-open': isMenuOpen }"></span>
      </button>
    </div>

    <ul class="navbar-links" :class="{ 'is-open': isMenuOpen }">
      <li>
        <router-link to="/traces-compilation" class="icon-link" title="Traces" style="display: flex; align-items: center;" @click="closeMenu">
          <img src="@/assets/galerie-dimages.png" alt="Traces" style="height: 24px; width: 24px; object-fit: contain; filter: brightness(0) invert(1);">
        </router-link>
      </li>
      <li>
        <router-link to="/lexical" class="icon-link" title="Lexique" @click="closeMenu">
          <img src="@/assets/book.png" alt="Lexique" style="height: 24px; width: 24px; object-fit: contain; filter: brightness(0) invert(1);">
        </router-link>
      </li>
      <li class="separator">
        <router-link to="/sources" class="icon-link" title="Sources" @click="closeMenu">
          @
        </router-link>
      </li>

      <li>
        <router-link to="/home" @click="closeMenu">Accueil</router-link>
      </li>
      <li>
        <router-link to="/technique" @click="closeMenu">Technique</router-link>
      </li>
      <li>
        <router-link to="/projet" @click="closeMenu">Suivi de projet</router-link>
      </li>
      <li>
        <router-link to="/social" @click="closeMenu">Intégration en entreprise</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
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
  align-items: center;
}

.navbar-links li {
  margin-left: 15px;
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

.navbar-links li a[title] {
  font-size: 1.3rem;
}

.navbar-links a:hover {
  color: #ff6300;
  background-color: #412817;
  border-radius: 8px;
}

.separator {
  /* On crée la barre orange foncée à droite du logo @ */
  border-right: 2px solid #a34d1a; /* Orange foncé */
  padding-right: 15px;
  margin-right: 10px;
  height: 30px; /* Hauteur de la barre */
  display: flex;
  align-items: center;
}

/* Burger Menu Styles */
.burger-menu {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.line {
  width: 100%;
  height: 3px;
  background-color: white;
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
}

.line-1-open {
  transform: rotate(45deg);
}

.line-2-open {
  opacity: 0;
}

.line-3-open {
  transform: rotate(-45deg);
}

@media (max-width: 1000px) {
  .burger-menu {
    display: flex;
  }

  .navbar-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .user-info {
    font-size: 0.85rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 250px;
  }

  .navbar-links {
    position: absolute;
    top: 60px;
    right: 0;
    height: calc(100vh - 60px);
    width: 250px;
    background-color: #e8803d;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    box-shadow: -2px 0 5px rgba(0,0,0,0.1);
    overflow-y: auto;
  }

  .navbar-links.is-open {
    transform: translateX(0);
  }

  .navbar-links li {
    margin: 15px 0;
    width: 100%;
  }
  
  .navbar-links li a {
    width: 100%;
  }

  .separator {
    border-right: none;
    border-bottom: 2px solid #a34d1a;
    padding-right: 0;
    padding-bottom: 15px;
    margin-right: 0;
    margin-bottom: 0;
    height: auto;
    width: 100%;
  }
}
</style>