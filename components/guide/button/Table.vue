<script setup>
const sizes = ["s", "m", "l"]
const styles = ["solid", "outline", "link"]
const colors = ["primary", "gray", "warning"]
const types = ["default", "square", "before-icon", "after-icon", "vertical-icon"]
</script>

<template>
  <div class="buttons_content">
    <h1></h1>
    <table v-for="color in colors">
      <thead>
      <tr>
        <th :colspan="types.length+2">
          {{ color }}
        </th>
      </tr>
      <tr>
        <th>size</th>
        <th>type/style</th>
        <th v-for="type in types">
          {{ type }}
        </th>
      </tr>
      </thead>
      <tbody>
      <template v-for="style in styles">
        <template v-for="(size, idx) in sizes">
          <tr>
            <th v-if="idx === 0" :rowspan="sizes.length">
              {{ style }}
            </th>
            <th>
              {{ size }}
            </th>
            <td v-for="type in types">
              <div class="buttons" v-if="type === 'square'">
                <button :class="`btn_${size}_${style}_${color}_${type}`">B</button>
                <button :class="`btn_${size}_${style}_${color}_${type}`">
                  <NuxtIcon name="PhCheckBold"/>
                </button>
              </div>
              <div class="buttons" v-else-if="type === 'after-icon'">
                <button :class="`btn_${size}_${style}_${color}_${type}`">
                  button
                  <NuxtIcon name="PhCheckBold"/>
                </button>
              </div>
              <div class="buttons" v-else-if="type.includes('-icon') ">
                <button :class="`btn_${size}_${style}_${color}_${type}`">
                  <NuxtIcon name="PhCheckBold"/>
                  button
                </button>
              </div>
              <div class="buttons" v-else>
                <button :class="`btn_${size}_${style}_${color}_${type}`">
                  button
                </button>
              </div>
            </td>
          </tr>
        </template>
      </template>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
@use '@/assets/styles/guide/buttons';
</style>