import os
import json

subs = [
    ('github-usage', 'Utilisation de GitHub'),
    ('module-creation', 'Création de modules'),
    ('flow-charts', 'Flow charts'),
    ('unit-tests', 'Tests unitaires'),
    ('jupyter-notebooks', 'Jupyter notebooks'),
    ('documentation-python', 'Documentation en Python'),
    ('documentation-uml', 'Documentation UML'),
    ('documentation-c++', 'Documentation C++'),
    ("parsing-logical-expression", "Parsing d'expressions logiques"),
    ('regex', 'Concevoir une expression régulière'),
    ('data-treatment', 'Traitement de données')
]

os.makedirs('src/pages/savoirfaire-pages', exist_ok=True)

template = """<script setup>
import BackButton from "@/components/BackButton.vue";
</script>

<template>
  <div class="page-container">
    <BackButton to="/savoir-faire" label="Retour aux savoir-faire" />
    
    <header class="page-header">
      <h1>{title}</h1>
    </header>

    <section class="content">
      <p>Traces et explications pour les compétences liées à : {title}.</p>
      
      <div class="styled-box">
        <h2>Mes Traces</h2>
        <!-- Ajoutez vos traces et explications pour chaque root ici -->
      </div>
    </section>
  </div>
</template>

<style scoped>
.styled-box {
  margin-top: 2rem;
  padding: 20px;
  border-radius: 8px;
  background-color: var(--surface-card, #ffffff);
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
</style>
"""

for sub_id, sub_title in subs:
    filepath = f"src/pages/savoirfaire-pages/{sub_id}.vue"
    if not os.path.exists(filepath):
        with open(filepath, "w") as f:
            f.write(template.replace("{title}", sub_title))
    print(f"Created {filepath}")
