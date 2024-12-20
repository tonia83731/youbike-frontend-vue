import type { CityType, DistrictType } from '@/components/common/navigation/TheHeader.vue'
import { youbikeCityDistricts } from '@/lib/datas/youbikeCityDistricts'
import { defineStore } from 'pinia'

export const useLocationStore = defineStore('location', {
  state: () => ({
    city: {
      label: '臺北市',
      value: 'Taipei',
    },
    districts: [
      {
        zip: '100',
        name: '中正區',
      },
      {
        zip: '103',
        name: '大同區',
      },
      {
        zip: '104',
        name: '中山區',
      },
      {
        zip: '105',
        name: '松山區',
      },
      {
        zip: '106',
        name: '大安區',
      },
      {
        zip: '108',
        name: '萬華區',
      },
      {
        zip: '110',
        name: '信義區',
      },
      {
        zip: '111',
        name: '士林區',
      },
      {
        zip: '112',
        name: '北投區',
      },
      {
        zip: '114',
        name: '內湖區',
      },
      {
        zip: '115',
        name: '南港區',
      },
      {
        zip: '116',
        name: '文山區',
      },
    ],
  }),
  getters: {
    districtOptions(): DistrictType[] {
      const cityData = youbikeCityDistricts.find((data) => data.value === this.city.value)
      return cityData ? cityData.districts : []
    },
  },
  actions: {
    setCity(city: CityType) {
      this.city = city

      const cityData = youbikeCityDistricts.find((data) => data.value === city.value)
      this.districts = cityData ? cityData.districts : []
    },
  },
})
