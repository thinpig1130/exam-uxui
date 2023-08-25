<script setup>
const {modelValue, labels} = defineProps({
  labels: {
    type: Array,
    default: []
  },
  modelValue: {
    type: Number,
    default: 0
  }
})
const emits = defineEmits(['update:modelValue']);
</script>

<template>
  <ul class="tab_header">
    <li class="tab" v-for="(one, idx) in labels" :key="idx" :class="{ active : modelValue === idx }"
        @click="emits('update:modelValue', idx)">
      <span>
        {{one}}
      </span>
    </li>
  </ul>
</template>