<script setup lang="ts">
</script>

<template>
  <div class="screen-12-grid">
    <div class="grid">
    </div>
    <div class="grid">
    </div>
  </div>
</template>

<style>
.screen-12-grid {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 11fr;
  height: 100vh;
  background: #c9f6f4;
  grid-gap: 4px;

  .grid {
    background: #1c918b;
  }
}
</style>