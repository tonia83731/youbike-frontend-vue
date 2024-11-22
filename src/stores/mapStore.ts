import { defineStore } from 'pinia'

type MapLocationType = {
  lat: number
  lng: number
}

export const useMapStore = defineStore('map', {
  state: () => ({
    location: {
      lat: 0,
      lng: 0,
    },
  }),
  actions: {
    setLocation(location: MapLocationType) {
      this.location = location
    },
  },
})
