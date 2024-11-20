/* eslint-disable vue/multi-word-component-names */

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faBars,
  faXmark,
  faArrowRight,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faClock,
  faLocationDot,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
// Add the icons to the library
library.add(
  faBars,
  faXmark,
  faArrowRight,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faLocationDot,
  faClock,
  faMagnifyingGlass,
)

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
// app.component('Multiselect', Multiselect)

app.mount('#app')
