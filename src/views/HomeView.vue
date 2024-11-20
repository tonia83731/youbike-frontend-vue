<script lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import NewsSection from '@/components/home/NewsSection.vue'
import PriceIntroSection from '@/components/home/PriceIntroSection.vue'
import StepSection from '@/components/home/StepSection.vue'
export default {
  components: {
    HeroSection,
    NewsSection,
    StepSection,
    PriceIntroSection,
  },
  setup() {},
}
</script>

<template>
  <main class="flex flex-col gap-8">
    <HeroSection />
    <NewsSection />
    <StepSection />
    <PriceIntroSection />
    <form
      class="flex items-center justify-center h-8 md:h-16 drop-shadow-md w-full md:w-2/4 mx-auto"
    >
      <input
        type="email"
        class="h-full bg-light rounded-l-lg w-3/5 md:w-4/5 px-4 text-dark placeholder:text-slate-500"
        placeholder="請輸入Email..."
      />
      <button
        class="h-full bg-yellow text-green-dark px-6 rounded-r-lg w-2/5 md:w-1/5"
        type="submit"
      >
        訂閱
      </button>
    </form>
  </main>
</template>
