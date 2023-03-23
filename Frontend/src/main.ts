import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import OctIcon from '@/components/Icons/OctIcon.vue'

import '@primer/octicons'
import '@primer/css/index.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('OctIcon', OctIcon)

app.mount('#app')
