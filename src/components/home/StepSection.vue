<script lang="ts">
import StepImg1 from '@/assets/home/step-01.png'
import StepImg2 from '@/assets/home/step-02.png'
import StepImg3 from '@/assets/home/step-03.png'
import StepImg4 from '@/assets/home/step-04.png'
export default {
  setup() {
    return {
      steps: [
        {
          id: 'step1',
          name: '註冊/登入',
          image: StepImg1,
        },
        {
          id: 'step2',
          name: '租借',
          image: StepImg2,
        },
        {
          id: 'step3',
          name: '騎乘',
          image: StepImg3,
        },
        {
          id: 'step4',
          name: '還車',
          image: StepImg4,
        },
      ],
    }
  },
}
</script>

<template>
  <div class="bg-light drop-shadow-md p-6">
    <h4 class="font-bold text-2xl mb-4 text-dark">使用方式</h4>
    <div
      class="grid grid-cols-2 grid-rows-2 gap-4 md:grid-cols-4 md:grid-rows-1 md:gap-2 md:w-full items-center justify-center"
    >
      <div v-for="(step, index) in steps" :key="step.id" class="flex items-center gap-2 md:gap-4">
        <!-- Step content -->
        <div class="flex flex-col gap-2 justify-center items-center w-full">
          <img :src="step.image" width="300" height="300" :alt="step.name" class="w-28 h-28" />
          <h4 class="font-bold text-dark">
            <span class="md:hidden">{{ index + 1 }}.</span>
            {{ step.name }}
          </h4>
        </div>

        <!-- Arrow Icon (only on desktop) -->
        <div v-if="index < 3" class="hidden md:block text-green-dark text-2xl">
          <font-awesome-icon icon="fa-solid fa-arrow-right" />
        </div>
      </div>
    </div>
  </div>
</template>
