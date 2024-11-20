<script lang="ts">
export default {
  props: {
    address: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    working_hour: {
      type: String,
      required: true,
    },
    rest_hour: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <div className="">
    <div className="hidden md:block md:w-full md:h-48">
      <img
        :src="imageUrl"
        :alt="name"
        width="400"
        height="225"
        className="md:object-cover h-full w-full"
      />
    </div>
    <div className="w-full bg-light p-4 md:px-2 drop-shadow-md md:h-52">
      <h4 className="font-bold text-xl text-dark mb-4 md:text-2xl md:min-h-16">{{ name }}</h4>
      <div className="flex flex-col gap-2">
        <div className="flex gap-4 items-center">
          <div className="text-dark text-lg">
            <font-awesome-icon icon="fa-solid fa-location-dot" />
          </div>
          <p className="text-xs text-slate-500 description-lime-clamp">{{ address }}</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="text-dark text-lg">
            <font-awesome-icon icon="fa-solid fa-clock" />
          </div>
          <ul className="text-xs text-slate-500">
            <li>服務時間:{{ working_hour }}</li>
            <li>休息時間: {{ rest_hour }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
