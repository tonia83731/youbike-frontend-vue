<script lang="ts">
import RealtimeHero from '@/assets/realtime/realtime.png'
import StopSearch from '@/components/realtime/StopSearch.vue'
import DistrictsCheckbox from '@/components/realtime/DistrictsCheckbox.vue'
export default {
  components: {
    StopSearch,
    DistrictsCheckbox,
  },
  setup() {
    return {
      RealtimeHero,
    }
  },
}
</script>

<template>
  <main class="flex flex-col gap-8">
    <h1 class="hidden md:block font-bold text-3xl text-dark mb-4">即時動態</h1>
    <div class="">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div class="w-full h-[280px]">
          <!-- <StopMap /> -->
          <DistrictsCheckbox />
        </div>
        <img :src="RealtimeHero" alt="realtime" width="750" height="260" class="hidden lg:block" />
      </div>
      <StopSearch />
      <!-- <StopTable tableData="{tableData}" /> -->
    </div>
  </main>
</template>
