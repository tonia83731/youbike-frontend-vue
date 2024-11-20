<script lang="ts">
import { client } from '@/lib/client'
import { useLocationStore } from '@/stores/locationStore'
import { ref, watch } from 'vue'

type Contact24Type = {
  _id: string
  phone: string
  email: string
}
export default {
  setup() {
    const loading = ref(false)
    const contacts = ref<Contact24Type[]>([])
    const locationStore = useLocationStore()
    const fetchContact = async () => {
      try {
        loading.value = true
        const city = locationStore.city.value
        const contactData = await client.fetch(
          `*[_type == "contact" && isPublished == true && city == "${city}"]`,
        )
        if (contactData.length > 0) {
          loading.value = false
          contacts.value = contactData
        }
      } catch (error) {
        loading.value = false
        console.log(error)
      }
    }

    watch(
      () => locationStore.city.value,
      () => {
        fetchContact()
      },
      { immediate: true },
    )

    return {
      loading,
      contacts,
      fetchContact,
    }
  },
}
</script>

<template>
  <div className="bg-yellow px-8 py-6 flex flex-col gap-8 text-lg md:text-xl justify-center">
    <div className="">如有任何服務使用上的問題與回饋，可撥打各地區服務電話告知我們，謝謝。</div>
    <ul v-if="loading" className="flex flex-col gap-4">
      <li className="h-4 bg-green-dark-20"></li>
      <li className="h-4 bg-green-dark-20"></li>
    </ul>
    <ul v-else>
      <li v-for="contact in contacts" :key="contact._id" className="flex flex-col gap-2">
        <div v-if="contact.phone" className="flex gap-2 items-center">
          <FaPhoneVolume />
          <a
            :href="'tel:' + `${contact.phone}`"
            className="hover:text-green-normal hover:underline"
          >
            {{ contact.phone }}
          </a>
        </div>
        <div v-if="contact.email" className="flex gap-2 items-center">
          <MdEmail />
          <a
            :href="'mailto:' + `${contact.email}`"
            className="hover:text-green-normal hover:underline"
          >
            {{ contact.email }}
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>
