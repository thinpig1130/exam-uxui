<script setup>
const {label, name, type} = defineProps({
  label: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  type: {
    validator(value) {
      return ['light', 'dark'].includes(value)
    },
    default: "light"
  }
})

const value = computed(() => {
  const rootStyles = getComputedStyle(document.documentElement);
  return rootStyles.getPropertyValue(name).trim();
})
</script>

<template>
  <div class="color_box" :class="type" :style="{backgroundColor: value}">
    <div class="color_info">
      <span>{{ label }}</span>
      <span class="value">{{ value }}</span>
    </div>
    <div>
      AAA
    </div>
  </div>
</template>
<style>
.guide_body.color_pallet {
  .color_box {
    width: 12rem;
    height: 12rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: var(--spacing-2, 0.8rem);

    font-size: 1.2rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.8rem;
    letter-spacing: -0.6px;

    &.dark {
      color: var(--primary-white, #FFF)
    }
    &.light, &.border {
      color: var(--primary-black, #000)
    }
    &.border {
      border: 1px solid var(--gray-300, #E4E7EB);
    }
    .color_info {
      display: flex;
      flex-direction: column;

      .value {
        font-weight: 400;
      }
    }
  }
}
</style>