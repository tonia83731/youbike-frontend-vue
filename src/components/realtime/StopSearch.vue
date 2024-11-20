<script lang="ts">
export default {
  props: {},
  setup() {},
}
</script>

<template>
  <div class="flex gap-2 w-full">
    <div class="relative w-2/3 md:w-1/3">
      <input
        type="text"
        class="w-full h-10 leading-10 px-4 rounded-md bg-green-light text-green-dark placeholder:text-green-dark-40"
        placeholder="搜尋站點"
      />
      <button class="absolute right-4 top-1/2 -translate-y-1/2 text-green-dark">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </button>
    </div>
  </div>
</template>
