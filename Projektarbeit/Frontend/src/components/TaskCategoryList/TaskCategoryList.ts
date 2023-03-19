import { defineComponent } from 'vue'
import TaskItem from '@/components/TaskItem/TaskItem.vue'
import CategoryItem from '@/components/CategoryItem/CategoryItem.vue'

export default defineComponent({
  name: 'TaskList',
  components: {
    TaskItem,
    CategoryItem
  },
  data() {
    return {}
  }
})
