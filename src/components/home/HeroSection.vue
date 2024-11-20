<script lang="ts">
import HeroImg from '@/assets/home/Hero.png'
import HeroDesktopImg from '@/assets/home/Hero_Desktop.png'

export default {
  setup() {
    return {
      HeroImg,
      HeroDesktopImg,
    }
  },
}
</script>

<template>
  <div className="w-full">
    <img :src="HeroImg" alt="Home Hero" width="560" height="324" class="w-full md:hidden" />
    <img
      :src="HeroDesktopImg"
      alt="Home Hero"
      width="2400"
      height="1400"
      class="w-full hidden md:block"
    />
  </div>
</template>
