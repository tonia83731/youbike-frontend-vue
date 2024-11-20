<script lang="ts">
import dayjs from 'dayjs'
import { ref } from 'vue'

export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      require: true,
    },
  },
  setup(props) {
    const publishedDate = ref(dayjs(props.date).format('YYYY-MM-DD'))

    return {
      publishedDate,
    }
  },
}
</script>

<template>
  <RouterLink :to="`/news/${href}`">
    <div className="flex items-top gap-4 md:flex-col md:gap-0">
      <div className="w-1/4 h-24 md:w-full md:h-48">
        <img
          :src="image"
          :alt="title"
          width="400"
          height="225"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="w-3/4 md:w-full  md:px-2 md:pt-4 md:pb-6">
        <h4
          className="font-bold text-xl text-dark mb-2 md:text-2xl md:truncate hover:underline hover:underline-offset-2"
        >
          {{ title }}
        </h4>
        <p className="text-xs text-slate-500 description-lime-clamp-2 md:text-base my-2">
          {{ description }}
        </p>
        <p className="text-xs text-slate-500 md:text-base">發布日期: {{ publishedDate }}</p>
      </div>
    </div>
  </RouterLink>
</template>
