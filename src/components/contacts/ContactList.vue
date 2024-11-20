<script lang="ts">
import { useLocationStore } from '@/stores/locationStore'
import ContactCard from './ContactCard.vue'
import { ref, watch } from 'vue'
import { client } from '@/lib/client'

type ContactType = {
  id: string
  name: string
  address: string
  imageUrl: string
  working_hour: string
  rest_hour: string
}

export default {
  components: {
    ContactCard,
  },
  setup() {
    const loading = ref(false)
    const centers = ref<ContactType[]>([])

    const locationStore = useLocationStore()

    const fetchCenter = async () => {
      const city = locationStore.city.value
      try {
        loading.value = true
        const response = await client.fetch(
          `*[_type == "center" && isPublished == true && city == "${city}"] {
          _id, name, address, "imageUrl": image.asset->url, working_hour, rest_hour
        }`,
        )

        if (response.length > 0) {
          loading.value = false
          centers.value = response
        }
      } catch (error) {
        loading.value = false
        console.log(error)
      }
    }

    watch(
      () => locationStore.city.value,
      () => {
        fetchCenter()
      },
      { immediate: true },
    )

    return {
      centers,
      loading,
      fetchCenter,
    }
  },
  // async mounted() {
  //   await this.fetchCenter()
  // },
}
</script>

<template>
  <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
    <div v-for="center in centers" :key="center.id">
      <ContactCard
        :address="center.address"
        :imageUrl="center.imageUrl"
        :name="center.name"
        :working_hour="center.working_hour"
        :rest_hour="center.rest_hour"
      />
    </div>
  </div>
</template>
