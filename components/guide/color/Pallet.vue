<script setup>
const TYPE = {
  DARK: "dark",
  LIGHT: "light",
  BORDER: "border",
}
const colorVariables = [
  {
    title: "Black & White",
    variables: [
      {label: "Black", name: "primary-black", value: "#101828", type: TYPE.DARK},
      {label: "White", name: "primary-white", value: "#FFFFFF", type: TYPE.BORDER}
    ]
  },
  {
    title: "Grayscale",
    variables: [
      {label: "Gray/900", name: "gray-900", value:"#27303F", accessLevel: "AAA",type: TYPE.DARK},
      {label: "Gray/800", name: "gray-800", value:"#3F4959", accessLevel: "AAA",type: TYPE.DARK},
      {label: "Gray/700", name: "gray-700", value:"#4C5667", accessLevel: "AAA",type: TYPE.DARK},
      {label: "Gray/600", name: "gray-600", value:"#667183", accessLevel: "AA 4.94", type: TYPE.DARK},
      {label: "Gray/500", name: "gray-500", value:"#98A2B2", accessLevel: "AA 6.88"},
      {label: "Gray/400", name: "gray-400", value:"#D0D5DD", accessLevel: "AAA"},
      {label: "Gray/300", name: "gray-300", value:"#E4E7EB", accessLevel: "AAA"},
      {label: "Gray/200", name: "gray-200", value:"#F2F4F7", accessLevel: "AAA"},
      {label: "Gray/100", name: "gray-100", value:"#F6F7FA", accessLevel: "AAA"},
      {label: "Gray/50", name: "gray-50", value:"#F8F9FB", accessLevel: "AAA"}
    ]
  }
]
</script>

<template>
  <div class="color_pallet">
    <div class="color_set" v-for="colors in colorVariables">
      <h2 class="set_header"> {{ colors.title }} </h2>
      <div class="set_content">
        <GuideColorBox v-for="color in colors.variables" :key="color.name" :="color"/>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@use '@/assets/styles/guide/color_pallet';
</style>
