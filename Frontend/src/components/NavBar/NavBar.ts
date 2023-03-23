import { defineComponent } from 'vue'
import SearchInput from '@/components/SearchInput/SearchInput.vue'
import NotificationIndicator from '@/components/NotificationIndicator/NotificationIndicator.vue'
import { useNavStore } from '@/stores/navState'

export default defineComponent({
  name: 'NavBar',
  components: {
    SearchInput,
    NotificationIndicator
  },
  data() {
    return {
      navOpen: false
    }
  },
  computed: {
    toggleNav() {
      return useNavStore().toggleNav
    }
  }
})
