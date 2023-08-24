<script setup>

const choicePalletValue = ref('coral_pink');
</script>

<template>
  <div class="mobile-screen">
    <PalletBar label="컬러 테마" v-model="choicePalletValue" />
  </div>

</template>

<style>
.mobile-screen {
  min-width: 320px;
  overflow: auto;
  width: 100%;
  max-width: 480px;
  border: 1px solid #1c918b;
  padding: 1rem;
}
</style>