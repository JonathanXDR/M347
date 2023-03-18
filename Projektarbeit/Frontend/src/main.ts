import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import OctIcon from 'vue-octicon/components/Octicon.vue'

import 'vue-octicon/icons'
import '@primer/css/index.scss'

const app = createApp(App)

app.use(router)
app.component('OctIcon', OctIcon)

app.mount('#app')
