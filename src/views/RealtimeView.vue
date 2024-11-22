<script lang="ts">
import { youbikeData } from '@/lib/datas/youbikeData'
import RealtimeHero from '@/assets/realtime/realtime.png'
import StopMap from '@/components/realtime/StopMap.vue'
import StopTable from '@/components/realtime/StopTable.vue'
import StopSearch from '@/components/realtime/StopSearch.vue'
// import DistrictsCheckbox from '@/components/realtime/DistrictsCheckbox.vue'
export default {
  components: {
    StopMap,
    StopTable,
    StopSearch,
    // DistrictsCheckbox,
  },
  setup() {
    const remainStationName = (name: string) => {
      const parts = name.split('_')
      return parts.length > 1 ? parts[1] : name
    }
    return {
      RealtimeHero,
      youbikeData,
      remainStationName,
    }
  },
}
</script>

<template>
  <main class="flex flex-col gap-8">
    <h1 class="hidden md:block font-bold text-3xl text-dark mb-4">即時動態</h1>
    <div class="flex flex-col gap-6">
      <div class="lg:grid lg:grid-cols-[1.5fr_1fr] lg:gap-8 lg:items-center">
        <div class="w-full h-full md:h-[320px]">
          <!-- <DistrictsCheckbox /> -->
          <StopMap />
        </div>
        <img :src="RealtimeHero" alt="realtime" width="750" height="260" class="hidden lg:block" />
      </div>
      <StopSearch />
      <StopTable />
    </div>
  </main>
</template>
