<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  label: {
    type: String,
    default: ""
  },
  labelHide: {
    type: String,
    default: "Cacher les détails"
  }
});

defineEmits(['update:modelValue']);

const displayLabel = computed(() => {
  return props.label && props.label.trim() !== ""
      ? props.label
      : "Et par rapport à l'école ?";
});
</script>

<template>
  <button
      @click="$emit('update:modelValue', !modelValue)"
      class="details-tab"
      :class="{ active: modelValue }"
  >
    {{ modelValue ? labelHide : displayLabel }}
  </button>
</template>