<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  labelShow: {
    type: String,
    default: "Et par rapport à l'école ?"
  },
  labelHide: {
    type: String,
    default: "Cacher les détails"
  }
});

defineEmits(['update:modelValue']);
</script>

<template>
  <button 
    @click="$emit('update:modelValue', !modelValue)" 
    class="details-tab"
    :class="{ active: modelValue }"
  >
    {{ modelValue ? labelHide : labelShow }}
  </button>
</template>
