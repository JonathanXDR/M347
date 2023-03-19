import { defineComponent } from 'vue'
import SearchInput from '@/components/SearchInput/SearchInput.vue'
import NotificationIndicator from '@/components/NotificationIndicator/NotificationIndicator.vue'

export default defineComponent({
  name: 'NavBar',
  components: {
    SearchInput,
    NotificationIndicator
  },
  data() {
    return {}
  }
})
