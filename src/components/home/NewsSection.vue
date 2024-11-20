<script lang="ts">
import { client } from '@/lib/client'
import { ref } from 'vue'
import NewsItem from './NewsItem.vue'

export type NewsType = {
  title: string
  description: string
  image: string
  href: string
  date?: string
}
export default {
  components: {
    NewsItem,
  },
  setup() {
    const loading = ref(true)
    const topNews = ref<NewsType[]>([])
    const fetchTopNews = async () => {
      try {
        loading.value = true

        const response = await client.fetch(
          `*[_type == "news" && isPublished == true && isWeight == true]| order(weight desc, publishedAt desc)[0..3]{
              title,
              "description": short,
              "href": slug.current,
              "image": image.asset->url,
            }`,
        )
        if (response.length > 0) {
          loading.value = false
          topNews.value = response
        }
      } catch (error) {
        loading.value = false
        console.log(error)
      }
    }
    return {
      loading,
      topNews,
      fetchTopNews,
    }
  },
  async mounted() {
    await this.fetchTopNews()
  },
}
</script>

<template>
  <div class="greetings">
    <div className="flex flex-col gap-4 md:grid md:grid-cols-3">
      <!-- {topNews.map((item: NewsItemProps) => { return <NewsItem key="{item.title}" {...item} />; })} -->
      <div v-for="item in topNews" :key="item.title">
        <NewsItem
          :image="item.image"
          :title="item.title"
          :description="item.description"
          :href="item.href"
        />
      </div>
    </div>
  </div>
</template>
