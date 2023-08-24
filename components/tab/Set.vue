<script setup>
const {tabs, modelValue, label, value} = defineProps({
  tabs: {
    type: Array,
    default: []
  },
  modelValue: {
    validator: (value) => {
      return typeof value === 'number' || typeof value === 'string' || typeof value === 'object'
    }
  },
  label: {
    validator: (value) => {
      return typeof value === "string"
    },
    default: 'name'
  },
  value: {
    validator: (value) => {
      return ['number', 'string', 'object'].includes(typeof value)
    }
  }
})
const emits = defineEmits(['update:modelValue']);
const selectedIndex = ref(findTabByValue(modelValue));
/* 값으로 선택된 탭 찾기 */
function findTabByValue(value) {
  // 선택한 값이 없을 경우.
  if ( value === undefined || value === null ) return 0
  // 선택된 값 찾음.
  for (let i = 0; i < tabs.length ; i++) {
    if (value === getValue(i)) return i
  }
  return null
}
function selectTab(idx) {
  selectedIndex.value = idx
  emits('update:modelValue', getValue(idx))
}
function getValue(idx) {
  const tab = tabs[idx]
  if( value === 'index' ) return idx
  if( value && typeof tab === 'object' && tab[value] ) return tab[value]
  return tab
}
function getLabel(idx) {
  const tab = tabs[idx]
  if (typeof tab !== "object") {
    return tab
  }
  return tab[label] ? tab[label] : `TAB_${idx}`
}

defineExpose({
  getValue: () => {
    return selectedIndex.value;
  },
  setValue: (value) => {
    selectedIndex.value = value
  }
})

</script>

<template>
  <div class="tab_set">
    <ul class="tab_header">
      <li v-for="(one, idx) in tabs" :key="idx" :class="{ active : selectedIndex === idx }" @click="selectTab(idx)">
        <span>
          {{ getLabel(idx) }}
        </span>
      </li>
    </ul>
    <slot name="selected" :element="tabs[selectedIndex]"/>
<!--    <template v-for="(one, idx) in tabs" :key="idx">-->
<!--      <slot v-if="selectedIndex === idx" name="selected" :element="one"/>-->
<!--    </template>-->
    <slot/>
  </div>
</template>
