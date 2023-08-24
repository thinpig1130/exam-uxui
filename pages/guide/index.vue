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

const selectedTab = ref(tabs[1].name)


</script>

<template>
  <TabSet class="guide_layout" :tabs="tabs" v-model="selectedTab" value="name">
    <template #selected="{ element }">
      <div class="tab_description">
        <h1 class="title">{{ element.name }}</h1>
        <div class="description" v-html="element.description"></div>
      </div>
    </template>
    <div>컨텐츠내용</div>
  </TabSet>
</template>
<style>
.guide_layout {
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  padding-top: 6rem;

  .tab_header {
    position: absolute;
    display: flex;
    top: 0;
    width: 100%;
    height: 6rem;
    font-size: 2rem;
    background-color: var(--primary-white, #FFF);
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    z-index: 100;
  }

  .tab_description {
    height: 16rem;
    background-color: var(--primary-black, #000);
    color: var(--primary-white, #FFF);
    display: flex;
    align-items: center;
    gap: 7.6rem;
    padding: 1rem 8rem;

    .title {
      font-size: 4rem;
      font-style: normal;
      font-weight: 700;
      line-height: 4rem;
    }

    .description {
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: 2.4rem;
      letter-spacing: 0.06rem;
    }
  }
}
</style>