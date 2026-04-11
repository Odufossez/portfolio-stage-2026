<template>
  <div class="graph-bg">
    <svg width="100%" height="100%" :viewBox="`0 0 ${width} ${height}`" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <!-- Edges -->
      <g class="edges">
        <line v-for="(edge, index) in edges" :key="'e-'+index"
          :x1="nodes[edge.from].x" :y1="nodes[edge.from].y"
          :x2="nodes[edge.to].x" :y2="nodes[edge.to].y" />
      </g>

      <!-- Nodes -->
      <g class="nodes">
        <circle v-for="(node, index) in nodes" :key="'n-'+index"
          :cx="node.x" :cy="node.y" :r="node.r" class="node" />
      </g>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive } from 'vue';

const width = 1000;
const height = 1000;

// Configuration des nœuds
const nodes = reactive([
  { x: 100, y: 200, r: 8, vx: 0.2, vy: 0.3 },
  { x: 300, y: 400, r: 12, vx: -0.3, vy: 0.2 },
  { x: 250, y: 650, r: 10, vx: 0.25, vy: -0.2 },
  { x: 500, y: 350, r: 15, vx: -0.15, vy: 0.35 },
  { x: 700, y: 500, r: 12, vx: 0.3, vy: -0.25 },
  { x: 850, y: 300, r: 9, vx: -0.2, vy: -0.3 },
  { x: 600, y: 750, r: 11, vx: 0.1, vy: 0.4 },
  { x: 450, y: 800, r: 10, vx: -0.35, vy: -0.15 },
  { x: 550, y: 100, r: 8, vx: 0.4, vy: 0.2 }
]);

// Configuration des liens (index des nœuds)
const edges = [
  { from: 0, to: 1 }, { from: 0, to: 8 }, { from: 1, to: 2 },
  { from: 1, to: 3 }, { from: 2, to: 6 }, { from: 2, to: 7 },
  { from: 3, to: 4 }, { from: 3, to: 8 }, { from: 3, to: 6 },
  { from: 4, to: 5 }, { from: 4, to: 6 }, { from: 4, to: 8 },
  { from: 6, to: 7 }, { from: 5, to: 8 }, { from: 0, to: 2 }
];

let animationFrame;

const animate = () => {
  nodes.forEach(node => {
    // Mise à jour de la position
    node.x += node.vx;
    node.y += node.vy;

    // Rebond sur les bords (optionnel, ou on peut les laisser dériver et réapparaître)
    if (node.x < 0 || node.x > width) node.vx *= -1;
    if (node.y < 0 || node.y > height) node.vy *= -1;
  });

  animationFrame = requestAnimationFrame(animate);
};

onMounted(() => {
  animate();
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrame);
});
</script>

<style scoped>
.graph-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  pointer-events: none;
  opacity: 0.15;
}

.edges line {
  stroke: #e8803d;
  stroke-width: 1.5;
  stroke-opacity: 0.3;
}

.node {
  fill: #e8803d;
}

svg {
  width: 100vw;
  height: 100vh;
}
</style>
