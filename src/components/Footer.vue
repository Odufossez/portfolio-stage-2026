<template>
  <footer class="footer">
    <div class="footer-section acknowledgments">
      <h3>Remerciements à</h3>
      <p class="names">Mes professeurs et l'équipe pédagogique de l'IUT Nord Franche-Comté.</p>
      <p class="names">Gautier STOLL, Laurence CALZONE, Vincent NOEL et Juliette REVEILLES.</p>
    </div>

    <div class="footer-section info">
      <p>© 2026 - Portfolio de stage - Oscar Dufossez</p>
      <a href="https://github.com/odufossez" target="_blank" class="github-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="github-icon"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        GitHub
      </a>
    </div>

    <div class="footer-section logo-container">
      <div class="logo-group">
        <img src="../assets/Paris_Curie.png" alt="Logo Institut Curie" class="logo-box">
        <div class="uni-logos-stack">
          <img src="../assets/INFO_Logo.png" alt="Logo BUT informatique de Belfort" class="uni-logo-box">
          <img src="../assets/Logo_Universite_Marie-et-Louis-Pasteur.png" alt="Logo Université Marie-et-Louis Pasteur" class="uni-logo-box">
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background-color: #fff5e6;
  border-top: 1px solid #ffe6cc;
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #5c4033;
  margin-top: 50px;
}

.footer-section {
  flex: 1;
}

.acknowledgments h3 {
  font-size: 1.1rem;
  margin-bottom: 5px;
  font-weight: 700;
}

.acknowledgments .names {
  font-size: 0.85rem;
  color: #8b5e3c;
}

.info {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.github-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #412817;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: transform 0.2s, background-color 0.2s;
}

.github-btn:hover {
  background-color: #e8803d;
  transform: translateY(-2px);
}

.logo-container {
  display: flex;
  justify-content: flex-end;
}

.logo-group {
  display: flex;
  align-items: center;
  gap: 20px;
}

.logo-box {
  max-width: 250px;
  max-height: 120px;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 4px;
}

.uni-logos-stack {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.uni-logo-box {
  max-width: 120px;
  max-height: 50px;
  width: 120px;
  height: 50px;
  object-fit: contain;
  border-radius: 4px;
}

.uni-logo-box.placeholder {
  background-color: #ffe6cc;
  border: 1px dashed #e8803d;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.65rem;
  font-weight: bold;
  color: #e8803d;
  text-align: center;
}

@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }
  
  .logo-container {
    justify-content: center;
  }
  
  .logo-group {
    flex-direction: row;
    justify-content: center;
  }
}
</style>
