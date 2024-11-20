<script lang="ts">
import LinkIcon from '@/assets/social/line.png'
import YoutubeIcon from '@/assets/social/youtube.png'
import InstagramIcon from '@/assets/social/instagram.png'
import FacebookIcon from '@/assets/social/facebook.png'
export default {
  setup() {
    return {
      socialLink: [
        {
          id: 'line',
          image: LinkIcon,
          href: 'https://page.line.me/122jqmcv?openQrModal=true',
        },
        {
          id: 'youtube',
          image: YoutubeIcon,
          href: 'https://www.youtube.com/channel/UCXRTadM5Rgs_EXtdNREj9KQ?view_as=subscriber',
        },
        {
          id: 'instagram',
          image: InstagramIcon,
          href: 'https://www.instagram.com/youbike_tw/',
        },
        // different from area (change later)
        {
          id: 'facebook',
          image: FacebookIcon,
          href: 'https://www.facebook.com/YouBike.Taipei.tw/',
        },
      ],
    }
  },
  method: {},
}
</script>

<template>
  <footer class="bg-green-light text-green-dark h-[90px] mt-auto">
    <div class="w-4/5 h-full mx-auto px-3.5 flex justify-between items-center">
      <RouterLink
        to="/contact"
        class="md:text-xl font-medium md:pr-4 md:border-r-2 md:border-green-dark"
      >
        聯絡我們
      </RouterLink>
      <div class="flex gap-2">
        <RouterLink v-for="link in socialLink" :to="link.href" :key="link.id">
          <img :src="link.image" :alt="link.id" width="40" height="40" />
        </RouterLink>
      </div>
    </div>
  </footer>
</template>
