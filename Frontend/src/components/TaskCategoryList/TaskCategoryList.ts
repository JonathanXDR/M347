import { defineComponent } from 'vue'
import TaskItem from '@/components/TaskItem/TaskItem.vue'
import CategoryItem from '@/components/CategoryItem/CategoryItem.vue'
import BoxOverlay from '@/components/BoxOverlay/BoxOverlay.vue'
import UnderlineNav from '@/components/UnderlineNav/UnderlineNav.vue'

export default defineComponent({
  name: 'TaskList',
  components: {
    TaskItem,
    CategoryItem,
    BoxOverlay,
    UnderlineNav
  },
  data() {
    return {}
  }
})
