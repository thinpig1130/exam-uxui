<script setup>
const {label, list, modelValue} = defineProps({
  label: {
    type: String
  },
  list: {
    type: Array,
    default: ['coral_pink', 'royal_blue', 'sea_green', 'orange_gold', 'dark_gray']
  },
  modelValue: {
    type: String,
    default: 'coral_pink'
  }
})

const emits = defineEmits(['update:modelValue'])

</script>

<template>
  <div class="pallet_bar">
    <label>{{ label }}</label>
    <div class="pallets">
      <PalletIcon v-for="(one, idx) in list" :value="one" :class="{checked: one === modelValue }"
                  @click="emits('update:modelValue', one)"/>
    </div>
  </div>
</template>

<style>
.pallet_bar {
  .pallets {
    display: flex;
    gap: 8px;
  }
}
</style>