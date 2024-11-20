<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './components/common/navigation/TheHeader.vue'
import TheFooter from './components/common/navigation/TheFooter.vue'
</script>

<template>
  <div class="w-4/5 mx-auto py-[30px]">
    <TheHeader />
    <div class="flex flex-col gap-8 mt-[90px] md:mt-[130px] mb-4"><RouterView /></div>
  </div>
  <TheFooter />
</template>
