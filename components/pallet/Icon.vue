<script setup>
const {value} = defineProps({
  value: {
    type: String,
    default: null
  }
})
</script>

<template>
  <div class="pallet_icon" :class="value">
    <nuxt-icon name="PhCheckBold"/>
  </div>
</template>

<style>
.check_icon {
  color: black;
}
.pallet_icon {
  flex: 1;
  max-width: 100px;
  aspect-ratio: 1 / 1;
  border: 1px solid gray;
  border-radius: 4px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .nuxt-icon {
    border: 2px solid #ffffff;
    border-radius: inherit;
    width: 100%;
    height: 100%;

    > svg {
      color: #ffffff;
      visibility: hidden;
    }
  }

  &.checked {
    .nuxt-icon > svg {
      visibility: visible;
    }
  }


  &.checked.nuxt-icon {
    visibility: visible;
  }

  /**
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    border: 2px solid #ffffff;
    border-radius: 4px;
  }
   */

  &.checked {
  }

  &.coral_pink {
    background-color: var(--pallet__coral_pink);
  }

  &.royal_blue {
    background-color: var(--pallet__royal_blue);
  }

  &.sea_green {
    background-color: var(--pallet__sea_green);
  }

  &.orange_gold {
    background-color: var(--pallet__orange_gold);
  }

  &.dark_gray {
    background-color: var(--pallet__dark_gray);
  }
}
</style>