<script lang="ts">
import { useLocationStore } from '@/stores/locationStore'
import { computed } from 'vue'
export default {
  props: {},
  setup() {
    const locationStore = useLocationStore()
    const districts = computed(() => locationStore.districts)
    return {
      districts,
    }
  },
}
</script>

<template>
  <div class="flex flex-col gap-2 md:gap-4">
    <div className="flex gap-2">
      <input type="checkbox" id="all" className="accent-green-light" />
      <label htmlFor="all" className="w-16"> 全部勾選 </label>
    </div>
    <div className="grid grid-cols-4 gap-x-4 gap-y-2 md:gap-4 md:grid-cols-6">
      <div v-for="district in districts" :key="district.zip" class="flex gap-2">
        <input type="checkbox" id="{zip}" className="accent-green-light" />
        <label htmlFor="{zip}" className="w-16"> {{ district.name }} </label>
      </div>
    </div>
  </div>
</template>
