<script setup>
const {label, name, value, type, accessLevel} = defineProps({
  label: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  type: {
    validator(value) {
      return ['light', 'dark'].includes(value)
    },
    required: false,
    default: "light"
  },
  accessLevel: {
    validator(value) {
      return value.includes("AA")
    },
    required: false
  }
})
</script>

<template>
  <div class="color_box" :class="type" :style="{ backgroundColor: value }">
    <div class="color_info">
      <span>{{ label }}</span>
      <span class="value">{{ value }}</span>
    </div>
    <div>
      {{ accessLevel }}
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/styles/guide/color_box";
</style>