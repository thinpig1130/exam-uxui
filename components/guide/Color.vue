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
      {label: "Black", name: "--primary-black", type: TYPE.DARK},
      {label: "White", name: "--primary-white", type: TYPE.BORDER}
    ]
  },
  {
    title: "Grayscale",
    variables: [
      {label: "Gray/900", name: "--gray-900", accessLevel: "AAA",type: TYPE.DARK},
      {label: "Gray/800", name: "--gray-800", accessLevel: "AAA",type: TYPE.DARK},
      {label: "Gray/700", name: "--gray-700", accessLevel: "AAA",type: TYPE.DARK},
      {label: "Gray/600", name: "--gray-600", accessLevel: "AA 4.94", type: TYPE.DARK},
      {label: "Gray/500", name: "--gray-500", accessLevel: "AA 6.88"},
      {label: "Gray/400", name: "--gray-400", accessLevel: "AAA"},
      {label: "Gray/300", name: "--gray-300", accessLevel: "AAA"},
      {label: "Gray/200", name: "--gray-200", accessLevel: "AAA"},
      {label: "Gray/100", name: "--gray-100", accessLevel: "AAA"},
      {label: "Gray/50", name: "--gray-50", accessLevel: "AAA"}
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
<!--                       :label="color.label" :name="color.name" :type="color.type" :access-level="color.accessLevel"/>-->
      </div>
    </div>
  </div>
</template>
<style>
.guide_body.color_pallet {
  --pallet__default-spacing: var(--spacing-3, 1.2rem);
  padding: var(--spacing-15, 6rem) var(--spacing-30, 12rem);

  display: flex;
  flex-wrap: wrap;
  gap: var(--pallet__default-spacing);

  .color_set {
    padding-bottom: calc(var(--spacing-8, 3.2rem) - var(--pallet__default-spacing));
    display: flex;
    flex-direction: column;
    gap: var(--pallet__default-spacing);

    .set_header {
      color: #333;
      font-size: 2rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: -0.6px;
    }

    .set_content {
      display: flex;
      flex-wrap: wrap;
      gap: var(--pallet__default-spacing);
    }
  }
}
</style>