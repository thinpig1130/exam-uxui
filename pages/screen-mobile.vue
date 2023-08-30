<script setup>

const choicePalletValue = ref('coral_pink');
</script>

<template>
  <div class="mobile-screen">
<!--    <PalletBar label="컬러 테마" v-model="choicePalletValue" /> -->
    <div>
      <h1> disabled </h1>
      <button class="btn_default" disabled>Button</button>
    </div>
    <div :style="{ display: 'flex', gap: '0.8rem' }" >
      <h1>size</h1>
      <button class="btn_s">Button</button>
      <button class="btn_m">Button</button>
      <button class="btn_l">Button</button>
    </div>
    <div :style="{ display: 'flex', gap: '0.8rem' }">
      <h1>color</h1>
      <button class="btn_primary">Button</button>
      <button class="btn_gray">Button</button>
      <button class="btn_warning">Button</button>
    </div>
    <div :style="{ display: 'flex', gap: '0.8rem' }">
      <h1>style</h1>
      <button class="btn_solid">Button</button>
      <button class="btn_outline">Button</button>
      <button class="btn_link">Button</button>
    </div>
    <div :style="{ display: 'flex', gap: '0.8rem' }">
      <h1>type</h1>
      <button class="btn_type__default">Button</button>
      <button class="btn_type__square"><NuxtIcon name="PhCheckBold"/></button>
      <button class="btn_type__before_icon"><NuxtIcon name="PhCheckBold"/>Button</button>
      <button class="btn_type__after_icon">Button<NuxtIcon name="PhCheckBold"/></button>
      <button class="btn_type__vertical_icon"><NuxtIcon name="PhCheckBold"/>Button</button>
    </div>
  </div>
</template>

<style lang="scss">
@use '@/assets/styles/ui/input';
.mobile-screen {
  min-width: 320px;
  overflow: auto;
  width: 100%;
  max-width: 480px;
  border: 1px solid #1c918b;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>