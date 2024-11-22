<script lang="ts">
import { client } from '@/lib/client'
import { PortableText, type PortableTextComponents } from '@portabletext/vue'
import imageUrlBuilder from '@sanity/image-url'
import { h, ref } from 'vue'
import { useRoute } from 'vue-router'
import dayjs from 'dayjs'
// https://www.sanity.io/plugins/portabletext-vue
export default {
  components: {
    PortableText,
  },
  setup() {
    const route = useRoute()
    const slug = route.params.newsId

    const news_data = ref({
      title: '',
      body: [],
      duration: { start: '', end: '' },
      isActivity: false,
      publishedAt: '',
    })
    const builder = imageUrlBuilder(client)
    const customComponents: PortableTextComponents = {
      types: {
        youtube: ({ value }) => {
          try {
            const { url } = value
            const id = new URL(url).searchParams.get('v')
            return h(
              'div',
              { class: 'flex justify-center max-w-[760px] h-60 md:h-96 lg:h-[480px] mx-auto my-8' },
              h('iframe', {
                width: 560,
                height: 315,
                src: `https://www.youtube.com/embed/${id}`,
                allow: 'encrypted-media;',
                allowFullscreen: true,
                title: `Youtube影片${id}`,
                class: 'w-full h-full',
              }),
            )
          } catch {
            return null
          }
        },
        image: ({ value }) => {
          try {
            const image = builder.image(value)
            const url = image.url()
            return h(
              'div',
              { class: 'flex justify-center max-w-[760px] h-60 md:h-96 lg:h-[480px] mx-auto my-8' },
              h('img', {
                alt: '',
                width: 1000,
                height: 800,
                src: url,
                class: 'w-full h-full object-cover object-center',
              }),
            )
          } catch {
            return null
          }
        },
        button: ({ value }) => {
          try {
            const { label, url } = value
            return h(
              'a',
              { class: 'mt-6 inline-block', href: url, target: '_blank' },
              h(
                'button',
                {
                  class:
                    'rounded-lg py-2.5 px-6 leading-5 font-medium min-w-36 bg-blue-1 text-white cursor-pointer hover:bg-transparent hover:border hover:border-blue-1 hover:text-blue-1',
                },
                label,
              ),
            )
          } catch {
            return null
          }
        },
      },
      marks: {
        textColor: ({ value }, { slots }) => {
          return h('span', { style: { color: value.value } }, slots.default?.())
        },
        highlightColor: ({ value }, { slots }) => {
          return h('span', { style: { backgroundColor: value.value } }, slots.default?.())
        },
        externalLink: ({ value }, { slots }) => {
          const { blank, href } = value
          const target = blank ? '_blank' : undefined
          const rel = blank ? 'noopener' : undefined
          return h('a', { href, target, rel }, slots.default?.())
        },
      },
    }

    const fetchNewsItem = async () => {
      try {
        const news = await client.fetch(
          `*[_type == "news" && slug.current == '${slug}' && isPublished == true]{
                    title,
                    body,
                    duration,
                    isActivity,
                    publishedAt,
                }`,
        )
        const { title, body, duration, isActivity, publishedAt } = news[0]
        const durationTime = duration
          ? {
              start: dayjs(duration.start).format('YYYY-MM-DD HH:mm:ss'),
              end: dayjs(duration.end).format('YYYY-MM-DD HH:mm:ss'),
            }
          : {
              start: '',
              end: '',
            }
        news_data.value = {
          title,
          body: body || [],
          duration: durationTime,
          isActivity,
          publishedAt: dayjs(publishedAt).format('YYYY-MM-DD'),
        }
      } catch (error) {
        console.log(error)
      }
    }

    return {
      news_data,
      fetchNewsItem,
      customComponents,
    }
  },
  async mounted() {
    await this.fetchNewsItem()
  },
}
</script>

<template>
  <main className="flex flex-col gap-8">
    <h1 className="font-bold text-3xl text-dark mb-4">{{ news_data.title }}</h1>
    <div className="text-green-dark md:text-lg">
      <div className="flex gap-2 items-center">
        <div className="text-xl">
          <font-awesome-icon icon="far-regular fa-newspaper" />
        </div>
        <div className="flex gap-1 items-center text-xs md:text-base">
          <span className="hidden md:block">發布時間:</span>
          <span>{{ news_data.publishedAt }}</span>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div className="text-xl">
          <font-awesome-icon icon="far-regular fa-calendar-days" />
        </div>
        <div className="flex gap-1 items-center text-xs md:text-base">
          <span className="hidden md:block">活動時間:</span>
          <span> {{ news_data.duration.start }} ~ {{ news_data.duration.end }} </span>
          <span v-if="news_data.isActivity" className="bg-yellow text-green-dark px-2 rounded-md">
            活動
          </span>
        </div>
      </div>
    </div>
    <div
      className="
                        mt-8
                        mb-24
                        md:mb-0
                        text-sm
                        sm:text-[18px]
                        leading-[30px]
                        sm:flex-1
                        [&_h1]:mt-[30px]
                        [&_h1]:mb-[8px]
                        [&_h1]:font-bold
                        [&_h1]:text-4xl
                        [&_h2]:mt-[20px]
                        [&_h2]:mb-[8px]
                        [&_h2]:font-bold
                        [&_h2]:text-3xl
                        [&_h3]:mt-[10px]
                        [&_h3]:mb-[8px]
                        [&_h3]:font-bold
                        [&_h3]:text-2xl
                        [&_h4]:mt-[10px]
                        [&_h4]:mb-[8px]
                        [&_h4]:font-bold
                        [&_h4]:text-xl
                        [&_h5]:mt-[10px]
                        [&_h5]:mb-[8px]
                        [&_h5]:font-bold
                        [&_h5]:text-lg
                        [&>ol]:ml-[30px]
                        [&>ol]:bold
                        [&>ol]:list-decimal
                        [&_ul]:ml-[30px]
                        [&_ul]:list-disc
                        [&_a]:underline
                        [&_a]:underline-offset-2
                        [&_a]:font-bold
                        [&_p]:mb-6
                        max-w-full
                        break-words
                        "
    >
      <PortableText :value="news_data.body" :components="customComponents" />
    </div>
  </main>
</template>
