import { defineComponent } from 'vue'
import SideBar from '@/components/SideBar/SideBar.vue'
import TaskCategoryList from '@/components/TaskCategoryList/TaskCategoryList.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    SideBar,
    TaskCategoryList
  },
  data() {
    return {}
  }
})
