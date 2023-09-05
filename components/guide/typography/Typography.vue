<script setup>
const unit = "px"
const fontFamily = "Pretendard"
const fontStyle = "normal"
const weights = {
  bold : 700,
  medium : 500,
  regular: 400,
  Light: 300
}
const typographies = [
  {name: "Title", subName: null, weight: "Bold", size: 24, lineHeight: 32, letterSpacing: -0.6, example: "인사말/맺음말"},
  {
    name: "Service_Name",
    subName: null,
    weight: "Bold",
    size: 20,
    lineHeight: 24,
    letterSpacing: -0.6,
    applied: ""
  },
  {
    name: "Subtitle01",
    subName: null,
    weight: "Bold",
    size: 20,
    lineHeight: 28,
    letterSpacing: -0.6,
    applied: "설문지미리보기화면"
  },
  {
    name: "Subtitle02",
    subName: null,
    weight: "Medium",
    size: 18,
    lineHeight: 24,
    letterSpacing: -0.6,
    applied: "메인페이지, 설문지미리보기화면 내부"
  },
  {
    name: "Menu/medium",
    subName: null,
    weight: "Medium",
    size: 17,
    lineHeight: 24,
    letterSpacing: -0.6,
    applied: ""
  },
  {
    name: "Menu/regular",
    subName: null,
    weight: "Regular",
    size: 16,
    lineHeight: 20,
    letterSpacing: -0.6,
    applied: ""
  },
  {
    name: "Body01/default",
    subName: null,
    weight: "Regular",
    size: 15,
    lineHeight: 20,
    letterSpacing: -0.6,
    applied: "DropdownBox_medium(default), Primary Button, Primary Button"
  },
  {
    name: "Body01/medium",
    subName: null,
    weight: "Medium",
    size: 15,
    lineHeight: 20,
    letterSpacing: -0.6,
    applied: "Tab"
  },
  {
    name: "Body01/bold",
    subName: null,
    weight: "Bold",
    size: 15,
    lineHeight: 20,
    letterSpacing: -0.6,
    applied: "Tab, 페이지네이션버튼텍스트, Primary Button"
  },
  {
    name: "Body02/default",
    subName: null,
    weight: "Regular",
    size: 15,
    lineHeight: 22,
    letterSpacing: -0.6,
    applied: "(상위) Table_Body"
  },
  {
    name: "Body02/medium",
    subName: null,
    weight: "Medium",
    size: 15,
    lineHeight: 22,
    letterSpacing: -0.6,
    applied: "Tab_Default, (상위) Table_Head"
  },
  {
    name: "Body02/Bold",
    subName: null,
    weight: "Bold",
    size: 15,
    lineHeight: 22,
    letterSpacing: -0.6,
    applied: "Tab_Selected, (상위) Table_Body_Blod"
  },
  {
    name: "Body03/default",
    subName: null,
    weight: "Regular",
    size: 14,
    lineHeight: 20,
    letterSpacing: -0.6,
    applied: "Table_Body, DropdownBox_small"
  },
  {
    name: "Body03/medium",
    subName: null,
    weight: "Medium",
    size: 14,
    lineHeight: 20,
    letterSpacing: -0.6,
    applied: "Table_Head, Secondary Button"
  },
  {
    name: "Body03/blod",
    subName: null,
    weight: "Bold",
    size: 14,
    lineHeight: 20,
    letterSpacing: -0.6,
    applied: "Table_Body_Bold, Secondary Button"
  },
  {
    name: "Caption",
    subName: null,
    weight: "Bold",
    size: 14,
    lineHeight: 18,
    letterSpacing: -0.6,
    applied: "validation check guide"
  },
  {
    name: "Breadcrumb",
    subName: null,
    weight: "Light",
    size: 13,
    lineHeight: 16,
    letterSpacing: -0.6,
    applied: "페이지 location "
  }
]

function getStyle(object) {
  return {
    fontSize: object.size + unit,
    fontWeight: weights[object.weight.toLowerCase()],
    lineHeight: object.lineHeight + unit,
    letterSpacing: object.letterSpacing + unit
  }
}
</script>

<template>
  <div class="typography_content">
    <table>
      <thead>
      <tr>
        <th>{{ fontFamily }}</th>
        <th>Weight</th>
        <th>Size</th>
        <th>Line height</th>
        <th>Letter Spacing</th>
        <th>Example</th>
        <th>적용 요소</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="text in typographies">
        <td :style="getStyle(text)"> {{ text.name }}{{ text.subName ? `/${text.subName}` : '' }}</td>
        <td>{{ text.weight }}</td>
        <td>{{ text.size }}{{unit}}</td>
        <td>{{ text.lineHeight }}{{unit}}</td>
        <td>{{ text.letterSpacing }}{{unit}}</td>
        <td :style="getStyle(text)"> Sample, 샘플 </td>
        <td>
          <div class="">{{text.applied}}</div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<style lang="scss">
@use '@/assets/styles/guide/typography';
</style>