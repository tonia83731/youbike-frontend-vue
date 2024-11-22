<script lang="ts">
import { youbikeData } from '@/lib/datas/youbikeData'
import { useMapStore } from '@/stores/mapStore'
export default {
  props: {},
  setup() {
    const remainStationName = (name: string) => {
      const parts = name.split('_')
      return parts.length > 1 ? parts[1] : name
    }
    const mapStore = useMapStore()

    const handleLocationClick = (lat: number, lng: number) => {
      const location = { lat, lng }
      mapStore.setLocation(location)
      // console.log('Updated location:', mapStore.location)
    }
    return {
      youbikeData,
      remainStationName,
      handleLocationClick,
    }
  },
}
</script>

<template>
  <div class="w-full overflow-hidden rounded-lg">
    <table class="w-full rounded-lg border border-green-dark-40">
      <thead class="bg-green-light text-green-dark rounded-t-lg">
        <tr
          class="grid grid-cols-4 md:grid-cols-5 h-12 leading-12 text-lg font-bold items-center rounded-t-lg"
        >
          <th class="hidden md:block md:text-center">站點編號</th>
          <th class="col-span-2">站點名稱</th>
          <th class="">可借車輛</th>
          <th class="">可還空位</th>
        </tr>
      </thead>
      <tbody class="text-green-dark rounded-b-lg">
        <tr
          v-for="bike in youbikeData"
          :key="bike.StationUID"
          class="grid grid-cols-4 md:grid-cols-5 py-2"
        >
          <td class="hidden md:block md:text-center">
            {{ bike.StationUID }}
          </td>
          <td class="col-span-2 flex items-center justify-start px-4 gap-2">
            <div class="">{{ remainStationName(bike.StationName.Zh_tw) }}</div>
            <button
              @click="
                handleLocationClick(
                  bike.StationPosition.PositionLat,
                  bike.StationPosition.PositionLon,
                )
              "
              class="text-green-dark-40 hover:text-green-dark"
              title="查看地圖"
            >
              <font-awesome-icon icon="fa-solid fa-map" />
            </button>
          </td>
          <td class="text-lg font-bold text-green-normal text-center">
            {{ bike.AvailableRentBikes }}
          </td>
          <td class="text-lg font-bold text-green-normal text-center">
            {{ bike.AvailableReturnBikes }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
