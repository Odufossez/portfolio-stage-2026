<template>
  <router-link :to="to" class="nav-card">
    <div class="nav-card-content">
      <h3 class="nav-card-title">{{ title }}</h3>
      <div class="nav-card-footer">
        <span>En savoir plus</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="arrow-icon">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.nav-card {
  display: block;
  text-decoration: none;
  background-color: white;
  border: 3px solid var(--curie-box-border);
  border-radius: 12px;
  padding: 25px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.nav-card:hover {
  transform: translateY(-5px);
  border-color: var(--curie-orange);
  box-shadow: 0 10px 25px rgba(232, 128, 61, 0.1);
}

.nav-card:hover .nav-card-title {
  color: var(--curie-orange);
}

.nav-card-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--curie-brown);
  margin: 0 0 15px 0;
  transition: color 0.3s ease;
  line-height: 1.3;
}

.nav-card-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--curie-brown-soft);
  transition: gap 0.3s ease;
}

.nav-card:hover .nav-card-footer {
  gap: 12px;
  color: var(--curie-orange);
}

.arrow-icon {
  stroke: currentColor;
}
</style>
