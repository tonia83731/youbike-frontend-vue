<script lang="ts">
import { client } from '@/lib/client'
import { computed, ref, watch } from 'vue'
import type { NewsType } from '../home/NewsSection.vue'
import NewsCard from './NewsCard.vue'
import ThePagination from '../common/ThePagination.vue'
export default {
  components: {
    NewsCard,
    ThePagination,
  },
  setup() {
    const loading = ref(true)
    const news = ref<NewsType[]>([])
    const count = ref<number>(0)
    const currPage = ref<number>(1)
    const totalPages = ref<number>(1)
    const itemPerPage = 12

    const startIndex = computed(() => (currPage.value - 1) * itemPerPage)
    const endIndex = computed(() => startIndex.value + itemPerPage)

    const fetchNews = async () => {
      try {
        loading.value = true

        const newsData = await client.fetch(
          `*[_type == "news" && isPublished == true]| order(publishedAt desc)[${startIndex.value}...${endIndex.value}]{
            title,
            "description": short,
            "href": slug.current,
            "image": image.asset->url,
            "date": publishedAt,
          }`,
        )
        const newsCount = await client.fetch(
          `count(*[
            _type == "news" && isPublished == true
          ])`,
        )
        if (newsData.length > 0) loading.value = false
        news.value = newsData
        count.value = newsCount
        totalPages.value = Math.ceil(newsCount / itemPerPage)
      } catch (error) {
        loading.value = false
        console.log(error)
      }
    }

    const handleNumClick = (num: number) => {
      currPage.value = num
    }
    const handleArrowClick = (type: 'next' | 'prev') => {
      if (type === 'prev') currPage.value -= 1
      else currPage.value += 1
    }

    watch(
      [currPage, startIndex, endIndex],
      () => {
        fetchNews()
      },
      { immediate: true },
    )

    return {
      loading,
      news,
      count,
      fetchNews,
      currPage,
      totalPages,
      handleNumClick,
      handleArrowClick,
    }
  },
  async mounted() {
    await this.fetchNews()
  },
}
</script>

<template>
  <div class="">
    <h1 class="hidden md:block font-bold text-3xl text-dark mb-4">最新消息</h1>
    <div class="flex flex-col gap-4 md:grid md:grid-cols-3">
      <div v-for="item in news" :key="item.title">
        <NewsCard
          :image="item.image"
          :title="item.title"
          :description="item.description"
          :href="item.href"
          :date="item.date"
        />
      </div>
    </div>
  </div>
  <div class="flex justify-center items-center">
    <ThePagination
      :totalPage="totalPages"
      :currPage="currPage"
      :onNumClick="handleNumClick"
      :onArrowClick="handleArrowClick"
    />
  </div>
</template>
