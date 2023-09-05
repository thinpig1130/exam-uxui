<script setup>
const tabs = [{
  name: 'Typography',
  description: '<p>기본 컬러 가이드입니다. 일관된 브랜드 정체성 및 커뮤니케이션을 위해 색상의 추가 및 변경 없이 기준을 준수해야 합니다.</p> ' +
      '<p>각 컬러는 opacity 100%로 진행하며, 예외의 경우 가이드에 명시된 opacity로만 활용 가능합니다.</p>'
}, {
  name: 'Colors',
  description: '<p>기본 컬러 가이드입니다. 일관된 브랜드 정체성 및 커뮤니케이션을 위해 색상의 추가 및 변경 없이 기준을 준수해야 합니다.</p>' +
      '<p>각 컬러는 opacity 100%로 진행하며, 예외의 경우 가이드에 명시된 opacity로만 활용 가능합니다.</p>'

}, {
  name: 'Buttons',
  description: '<p>버튼 생성기로 만들 수 있는 버튼들의 가지 수 </p>' +
      '<p>실제로 사용되는 버튼 정의</p>'
}, {
  name: 'Icons',
  description: '<p>기본 컬러 가이드입니다. 일관된 브랜드 정체성 및 커뮤니케이션을 위해 색상의 추가 및 변경 없이 기준을 준수해야 합니다.</p>' +
      '<p>각 컬러는 opacity 100%로 진행하며, 예외의 경우 가이드에 명시된 opacity로만 활용 가능합니다.</p>'
}]

const selectedTab = ref(tabs[0].name)

</script>

<template>
  <TabSet class="guide_layout" :tabs="tabs" v-model="selectedTab" value="name">
    <template #nested="{ element, selected }">
      <div class="guid_description" :class="{ selected :selected }">
        <h1 class="title">{{ element.name }}</h1>
        <div class="description" v-html="element.description"></div>
      </div>
    </template>
    <GuideColorPallet class="guide_body" v-if="selectedTab === 'Colors'"/>
    <GuideButtonTable class="guide_body" v-else-if="selectedTab === 'Buttons'"/>
    <GuideTypography class="guide_body" v-else-if="selectedTab === 'Typography'"/>
    <div v-else>
      {{selectedTab}}
    </div>
  </TabSet>
</template>
<style lang="scss">
@use "@/assets/styles/guide/guide";
</style>