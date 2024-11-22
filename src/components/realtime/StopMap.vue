<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts">
import { ref, onMounted, watch } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-routing-machine'
import { useMapStore } from '@/stores/mapStore'

export default {
  setup() {
    const lat = ref(0)
    const lng = ref(0)
    const map = ref<L.Map | null>(null)
    const mapContainer = ref<HTMLDivElement | null>(null)
    const routingControl = ref<L.Routing.Control | null>(null)
    const mapStore = useMapStore()

    // Initialize the map
    const initializeMap = () => {
      if (mapContainer.value) {
        map.value = L.map(mapContainer.value).setView([51.505, -0.09], 13)
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map.value)
      }
    }

    // Get user's current location
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          lat.value = position.coords.latitude
          lng.value = position.coords.longitude

          // Update map view with user location
          if (map.value) {
            map.value.setView([lat.value, lng.value], 13) // Set to user location
            // L.marker([lat.value, lng.value]).addTo(map.value) // Add marker
          }
        })
      } else {
        console.error('Geolocation is not supported by this browser.')
      }
    }

    const updateRoute = () => {
      if (!map.value) return
      if (routingControl.value) map.value.removeControl(routingControl.value)

      routingControl.value = L.Routing.control({
        waypoints: [
          L.latLng(lat.value, lng.value),
          L.latLng(mapStore.location.lat, mapStore.location.lng),
        ],
        routeWhileDragging: true,
      }).addTo(map.value)

      routingControl.value.on('routesfound', (e: any) => {
        const bounds = L.latLngBounds(
          e.routes[0].coordinates.map((coord: any) => L.latLng(coord.lat, coord.lng)),
        )
        map.value?.fitBounds(bounds, {
          padding: [50, 50],
        })
      })
    }

    watch(
      () => mapStore.location,
      () => {
        updateRoute()
      },
      { deep: true },
    )

    // Using onMounted to ensure the map and location are initialized after the component mounts
    onMounted(() => {
      initializeMap()
      getLocation()
    })

    return {
      lat,
      lng,
      mapContainer,
    }
  },
}
</script>

<template>
  <!-- Make sure the map container has width and height -->
  <div ref="mapContainer" class="w-full h-[300px]"></div>
</template>

<style>
.leaflet-routing-alt {
  display: none;
}
</style>
