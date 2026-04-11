<script setup>
import { ref } from 'vue';

const activeMission = ref('overview');
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
      <h1>L'Institut Curie</h1>
    </header>

    <div class="styled-box">
      <img src="../assets/Paris_Curie.png" alt="Logo de l'Institut Curie" class="logo-placeholder">
      <h2>Présentation générale</h2>
      <p>
        Fondé en 1909 par Marie Curie, l'Institut Curie est aujourd'hui le premier centre français de lutte contre le cancer. 
        C'est une fondation reconnue d'utilité publique qui associe l'un des plus grands centres de recherche européens en cancérologie 
        et un ensemble hospitalier de pointe.
      </p>
    </div>

    <section class="missions-section">
      <div class="tabs-list">
        <button 
          class="tab-item" 
          :class="{ active: activeMission === 'overview' }"
          @click="activeMission = 'overview'"
        >
          Les 3 missions
        </button>
        <button 
          class="tab-item" 
          :class="{ active: activeMission === 'recherche' }"
          @click="activeMission = 'recherche'"
        >
          Recherche
        </button>
        <button 
          class="tab-item" 
          :class="{ active: activeMission === 'soin' }"
          @click="activeMission = 'soin'"
        >
          Soin
        </button>
        <button 
          class="tab-item" 
          :class="{ active: activeMission === 'enseignement' }"
          @click="activeMission = 'enseignement'"
        >
          Enseignement
        </button>
      </div>

      <div class="styled-box mission-content">
        <div v-if="activeMission === 'overview'">
          <h2>Les trois missions</h2>
          <p>L'Institut Curie remplit trois missions complémentaires pour relever les défis de la lutte contre le cancer :</p>
          <ul>
            <li><strong>La recherche</strong> : Comprendre les mécanismes du cancer pour mieux le soigner.</li>
            <li><strong>Le soin</strong> : Proposer les meilleurs traitements et un accompagnement global aux patients.</li>
            <li><strong>L'enseignement</strong> : Transmettre les connaissances aux chercheurs et soignants de demain.</li>
          </ul>
        </div>
        <div v-if="activeMission === 'recherche'">
          <h2>La Recherche</h2>
          <p>
            Le Centre de Recherche de l'Institut Curie regroupe plus de 80 équipes de recherche de renommée mondiale. 
            Ces chercheurs explorent les frontières de la biologie et de la physique pour comprendre les mécanismes du vivant et l'origine des cancers. 
            C'est ici que l'expertise en bio-informatique intervient massivement pour analyser de grandes quantités de données génomiques et moléculaires.
          </p>
        </div>
        <div v-if="activeMission === 'soin'">
          <h2>Le Soin</h2>
          <p>
            L'ensemble hospitalier de l'Institut Curie prend en charge les patients atteints de tous types de cancers, notamment les cancers du sein, de l'oeil et les cancers pédiatriques. 
            Grâce à son expertise, il propose les traitements les plus innovants comme la radiothérapie, l'immunothérapie ou la protonthérapie. 
            La pluridisciplinarité est au cœur du soin pour offrir une prise en charge personnalisée.
          </p>
        </div>
        <div v-if="activeMission === 'enseignement'">
          <h2>L'Enseignement</h2>
          <p>
            Fidèle à l'esprit de transmission de Marie Curie, l'Institut forme chaque année des centaines d'étudiants, 
            doctorants et post-doctorants venus du monde entier. Des séminaires, congrès et formations spécialisées 
            assurent la diffusion des dernières avancées scientifiques vers la nouvelle génération de chercheurs.
          </p>
        </div>
      </div>
    </section>

    <div class="styled-box">
      <h2>Un modèle unique</h2>
      <p>
        Ce qui fait la force de l'Institut Curie est son <strong>modèle Curie</strong> : la proximité immédiate entre les chercheurs et les médecins. 
        Cela permet d'accélérer le passage des découvertes scientifiques vers les soins apportés aux patients, c'est ce qu'on appelle la recherche translationnelle.
      </p>
    </div>

    <section class="external-resources">
      <hr class="separator minimal">
      <p>Pour en savoir plus, consultez les ressources officielles :</p>
      <a href="https://curie.fr/linstitut-curie" target="_blank" rel="noopener noreferrer" class="external-link">
        Site officiel de l'Institut Curie
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
      </a>
    </section>
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

.logo-placeholder {
  float: right;
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e8803d;
  font-weight: 600;
  margin-left: 20px;
  margin-bottom: 10px;
}

h2 {
  margin-bottom: 20px;
  color: #e8803d;
}

ul {
  padding-left: 20px;
}

li {
  margin-bottom: 15px;
  line-height: 1.6;
}

/* Styles pour les onglets */
.missions-section {
  margin-bottom: 30px;
}

.tabs-list {
  display: flex;
  gap: 5px;
  padding-left: 10px;
}

.tab-item {
  background-color: #ffe6cc;
  border: 1px solid #ffe6cc;
  border-bottom: none;
  padding: 10px 20px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  cursor: pointer;
  color: #8b5e3c;
  font-weight: 600;
  font-family: 'Nunito Sans', sans-serif;
  transition: all 0.3s ease;
}

.tab-item:hover {
  background-color: #ffd8b3;
}

.tab-item.active {
  background-color: #fff5e6;
  color: #e8803d;
  height: 45px; /* Légèrement plus haut pour l'effet classeur */
  margin-top: -5px;
  border-color: #ffe6cc;
}

.mission-content {
  margin-top: -1px; /* Colle les onglets à la boîte */
  border-top-left-radius: 0; /* Aligne avec l'onglet si c'est le premier */
  min-height: 250px;
}

/* Ressources externes */
.external-resources {
  margin-top: 50px;
  text-align: center;
}

.separator.minimal {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(232, 128, 61, 0.4), rgba(0, 0, 0, 0));
  margin-bottom: 25px;
}

.external-resources p {
  font-size: 0.95rem;
  color: #8b5e3c;
  margin-bottom: 15px;
  text-align: center;
}

.external-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: #e8803d;
  color: white;
  padding: 12px 25px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(232, 128, 61, 0.2);
}

.external-link:hover {
  background-color: #412817;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(65, 40, 23, 0.25);
}

.external-link svg {
  transition: transform 0.3s ease;
}

.external-link:hover svg {
  transform: translate(2px, -2px);
}
</style>