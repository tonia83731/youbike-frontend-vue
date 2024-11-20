<script lang="ts">
import ContactHero from '@/assets/contact/contact_hero.png'
import ContactFeedback from '@/assets/contact/feedback.png'
import ContactList from '@/components/contacts/ContactList.vue'
import Contact24Hrs from '@/components/contacts/Contact24Hrs.vue'

export default {
  components: {
    ContactList,
    Contact24Hrs,
  },
  setup() {
    return {
      ContactHero,
      ContactFeedback,
    }
  },
}
</script>

<template>
  <main className="flex flex-col gap-8">
    <div className="h-[200px] md:h-[300px] relative md:hidden">
      <img
        :src="ContactHero"
        alt="contact-hero"
        width="1920"
        height="1280"
        className="w-full h-full object-cover object-center"
      />
      <div
        className="w-full h-[60px] flex items-center px-6 bg-light-40 text-light absolute bottom-0 left-0"
      >
        <h1 className="font-bold text-2xl">服務中心</h1>
      </div>
    </div>
    <div className="">
      <h1 className="hidden md:block font-bold text-3xl text-dark mb-4">服務中心</h1>
      <ContactList />
    </div>
    <div className="">
      <h1 className="hidden md:block font-bold text-3xl text-dark mb-4">非常感謝您與我們聯絡</h1>
      <div className="md:grid md:grid-cols-2 md:gap-4">
        <img
          :src="ContactFeedback"
          alt="feedback"
          width="600"
          height="415"
          className="hidden md:block md:w-full md:h-full md:object-cover"
        />
        <Contact24Hrs />
      </div>
    </div>
  </main>
</template>
