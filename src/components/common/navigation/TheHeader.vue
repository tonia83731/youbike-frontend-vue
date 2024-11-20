<script lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import Logo from '@/assets/Logo.png'
import { useLocationStore } from '@/stores/locationStore'
import { youbikeCityDistricts } from '../../../lib/datas/youbikeCityDistricts'

export type CityType = {
  label: string
  value: string
}
export type DistrictType = {
  zip: string
  name: string
}

export type CityDistrictType = {
  city: string
  value: string
  districts: DistrictType[]
}

export default {
  setup() {
    const router = useRoute()

    // console.log(city_options)

    const isToggle = ref(false)
    const handleNavToggle = () => {
      isToggle.value = !isToggle.value
    }

    const locationStore = useLocationStore()
    const currSelectCity = locationStore.city
    const city_options = youbikeCityDistricts.map((item: CityDistrictType) => ({
      label: item.city,
      value: item.value,
    }))
    const isCityToggle = ref(false)
    const handleCityToggle = () => {
      isCityToggle.value = !isCityToggle.value
    }
    const handleCitySelect = (city: CityType) => {
      locationStore.setCity(city)
      isCityToggle.value = false
    }

    return {
      router,
      Logo,
      navlinks: [
        {
          id: 'home',
          name: '首頁',
          href: '/',
        },
        {
          id: 'realtime',
          name: '即時動態',
          href: '/realtime',
        },
        {
          id: 'news',
          name: '最新消息',
          href: '/news',
        },
      ],
      isToggle,
      handleNavToggle,
      city_options,
      locationStore,
      currSelectCity,
      isCityToggle,
      handleCityToggle,
      handleCitySelect,
    }
  },
  method: {},
}
</script>

<template>
  <header
    class="bg-light drop-shadow-md h-[60px] md:h-[100px] px-3.5 py-2.5 w-4/5 fixed top-[30px] left-1/2 -translate-x-1/2 z-[999]"
  >
    <!-- {{ city_options }} -->
    <div class="flex justify-between items-center h-full">
      <RouterLink to="/">
        <img
          :src="Logo"
          alt="youbike logo"
          width="210"
          height="74"
          class="w-[105px] h-auto md:w-[160px]"
        />
      </RouterLink>
      <nav
        v-if="isToggle"
        class="w-full fixed top-[80px] left-1/2 -translate-x-1/2 bg-green-light md:hidden"
      >
        <div class="flex flex-col">
          <RouterLink
            v-for="link in navlinks"
            :to="link.href"
            :key="link.id"
            class="text-green-dark leading-8 px-4 py-2 hover:bg-green-normal"
            :class="router.path === link.href ? 'text-light bg-green-dark' : 'text-green-dark'"
          >
            {{ link.name }}
          </RouterLink>
        </div>
      </nav>
      <div class="md:flex md:gap-8 md:items-center">
        <nav class="hidden text-xl md:flex md:gap-4">
          <RouterLink
            v-for="link in navlinks"
            :key="link.id"
            :to="link.href"
            class="text-green-dark font-medium hover:text-green-normal"
            :class="
              router.path === link.href &&
              'underline underline-offset-4 font-bold text-green-normal'
            "
          >
            <div class="flex gap-2 items-center">
              <div>{{ link.name }}</div>
            </div>
          </RouterLink>
        </nav>
        <div class="flex gap-4 items-center w-[124px]">
          <!-- <v-select
            :options="city_options"
            v-model="locationStore.city"
            @input="locationStore.setCity"
            :clearable="false"
            :searchable="false"
            class="w-[100px] text-xs md:w-[124px] md:text-base"
            id="custom-select"
          ></v-select> -->
          <div class="relative">
            <button
              class="flex justify-between items-center border px-2 py-0.5 rounded-md w-[90px] md:w-[108px]"
              :class="isCityToggle ? 'border-green-dark' : 'border-green-dark-40'"
              @click="handleCityToggle"
            >
              <div class="">{{ locationStore.city.label }}</div>
              <div class="transition" :class="isCityToggle && 'rotate-180 text-green-dark'">
                <font-awesome-icon icon="fa-solid fa-chevron-down" />
              </div>
            </button>
            <ul
              v-if="isCityToggle"
              class="absolute mt-2 bg-white w-[90px] md:w-[108px] h-[150px] overflow-y-auto"
            >
              <li
                v-for="city in city_options"
                @click="handleCitySelect(city)"
                :key="city.value"
                :class="locationStore.city.value === city.value && 'bg-green-normal text-white'"
                class="px-4 py-1 cursor-pointer hover:bg-green-light"
              >
                {{ city.label }}
              </li>
            </ul>
          </div>
          <button class="text-lg text-green-dark md:hidden" @click="handleNavToggle">
            <font-awesome-icon icon="fa-solid fa-bars" v-if="!isToggle" />
            <font-awesome-icon icon="fa-solid fa-xmark" v-else />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
<style></style>
