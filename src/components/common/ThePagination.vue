<script lang="ts">
import type { PropType } from 'vue'

export default {
  props: {
    currPage: {
      type: Number,
      required: true,
    },
    totalPage: {
      type: Number,
      required: true,
    },
    onArrowClick: {
      type: Function as PropType<(type: 'next' | 'prev') => void>,
      required: true,
    },
    onNumClick: {
      type: Function as PropType<(num: number) => void>,
      required: true,
    },
  },
  setup() {},
  method: {},
}
</script>

<template>
  <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
    <button
      @click="onArrowClick('prev')"
      :disabled="currPage === 1"
      class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-300 ring-1 ring-inset ring-gray-300 hover:bg-gray-300 hover:text-white focus:z-20 focus:outline-offset-0 disabled:hover:bg-transparent disabled:hover:text-gray-300"
    >
      <font-awesome-icon icon="fa-solid fa-chevron-left" />
    </button>
    <button
      v-for="page in totalPage"
      :key="`page-${page}`"
      @click="onNumClick(page)"
      class="relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20"
      :class="
        currPage === page
          ? 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-1 bg-green-normal text-white z-10'
          : 'focus:outline-offset-0 text-green-dark ring-1 ring-inset ring-gray-300 hover:bg-gray-300 hover:text-white'
      "
    >
      {{ page }}
    </button>
    <button
      @click="onArrowClick('next')"
      :disabled="currPage === totalPage"
      class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-300 ring-1 ring-inset ring-gray-3 hover:bg-gray-300 hover:text-white focus:z-20 focus:outline-offset-0 disabled:hover:bg-transparent disabled:hover:text-gray-300"
    >
      <font-awesome-icon icon="fa-solid fa-chevron-right" />
    </button>
  </nav>
</template>
