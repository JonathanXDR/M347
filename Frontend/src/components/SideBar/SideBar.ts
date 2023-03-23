import { defineComponent } from 'vue'
import FilterList from '@/components/FilterList/FilterList.vue'
import ActionList from '@/components/ActionList/ActionList.vue'
import { useNavStore } from '@/stores/navState'

export default defineComponent({
  name: 'SideBar',
  components: {
    FilterList,
    ActionList
  },
  data() {
    return {}
  },
  computed: {
    currentNavState(): boolean {
      return useNavStore().navOpen
    }
  }
})
