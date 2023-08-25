<script setup>
const tabs = [{
  name: 'Typography',
  description: '<p>기본 컬러 가이드입니다. 일관된 브랜드 정체성 및 커뮤니케이션을 위해 색상의 추가 및 변경 없이 기준을 준수해야 합니다.</p> ' +
      '<p>각 컬러는 opacity 100%로 진행하며, 예외의 경우 가이드에 명시된 opacity로만 활용 가능합니다.</p>'
}, {
  name: 'Colors',
  description: '<p>기본 컬러 가이드입니다. 일관된 브랜드 정체성 및 커뮤니케이션을 위해 색상의 추가 및 변경 없이 기준을 준수해야 합니다.</p>' +
      '<p> 각 컬러는 opacity 100%로 진행하며, 예외의 경우 가이드에 명시된 opacity로만 활용 가능합니다.</p>'
}]

const selectedTab = ref(tabs[0].name)

</script>

<template>
  <TabSet class="guide_layout" :tabs="tabs" v-model="selectedTab" value="name">
    <template #nested="{ element }">
      <div class="guid_description">
        <h1 class="title">{{ element.name }}</h1>
        <div class="description" v-html="element.description"></div>
      </div>
    </template>
    <GuideColor class="guide_body" v-if="selectedTab === 'Colors'"/>
    <div v-else>
      {{selectedTab}}
    </div>
  </TabSet>
</template>
<style>
@import '@/assets/styles/layout/guide.scss';
</style>