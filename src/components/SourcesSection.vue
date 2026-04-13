<script setup>
import { computed } from 'vue'
import { sourcesData } from '@/data/sources.js'

const props = defineProps({
  ids: {
    type: [String, Array],
    required: true
  }
})

const selectedSources = computed(() => {
  const idsArray = Array.isArray(props.ids) ? props.ids : [props.ids]
  return sourcesData.filter(source => idsArray.includes(source.id))
})

const label = computed(() => {
  return selectedSources.value.length > 1 ? 'Sources :' : 'Source :'
})
</script>

<template>
  <div v-if="selectedSources.length > 0" class="sources-box">
    <p>
      {{ label }}
      <template v-for="(source, index) in selectedSources" :key="source.id">
        <a :href="source.link" target="_blank" rel="noopener noreferrer">
          {{ source.name }}
        </a>
        <span v-if="index < selectedSources.length - 1">, </span>
      </template>
    </p>
  </div>
</template>

<style scoped>

.sources-box a {
  transition: all 0.2s ease;
}

.sources-box a:hover {
  filter: brightness(1.2);
}
</style>