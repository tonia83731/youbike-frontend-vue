<script lang="ts">
import NewsHero from '@/assets/news/news_hero.jpg'
import NewsList from '@/components/news/NewsList.vue'

export default {
  components: {
    NewsList,
  },
  setup() {
    return {
      NewsHero,
    }
  },
}
</script>

<template>
  <main className="flex flex-col gap-8">
    <div className="h-[200px] md:h-[300px] relative">
      <img
        :src="NewsHero"
        alt="news-hero"
        width="1920"
        height="1280"
        className="w-full h-full object-cover object-center"
      />
      <div
        className="w-full h-[60px] flex items-center px-6 bg-light-40 text-light absolute bottom-0 left-0 md:hidden"
      >
        <h1 className="font-bold text-2xl">最新消息</h1>
      </div>
    </div>
    <NewsList />
  </main>
</template>
