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

const labels = computed(()=>{
  return tabs.map((tab, idx)=>{
    if (typeof tab !== "object") {
      return tab
    }
    return tab[label] ? tab[label] : `TAB_${idx}`
  })
})
const values = computed(()=>{
  return tabs.map((tab, idx)=>{
    return getValue(tab, idx);
  })
})

const selectedIndex = ref(values.value.indexOf(modelValue));

watch(() => selectedIndex.value, (newIdx) =>{
  emits( 'update:modelValue', values.value[newIdx]);
})

function getValue(tab, idx) {
  if (value === 'index') return idx
  if (value && typeof tab === 'object' && tab[value]) return tab[value]
  return tab
}

defineExpose({
  moveTab: (value) => {
    selectedIndex.value = values.value.indexOf(value)
  }
})
</script>
<template>
  <div class="tab_set">
    <TabHeader :labels="labels" :value="value" v-model="selectedIndex"/>
    <div class="tab_nested">
      <ClientOnly>
        <template v-for="(one, idx) in tabs" :key="idx">
          <Transition name="nested">
            <slot v-if="selectedIndex === idx" name="nested" :element="one"/>
          </Transition>
        </template>
      </ClientOnly>
    </div>
    <slot/>
  </div>
</template>