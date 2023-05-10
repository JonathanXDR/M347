import ApiService from '@/services/ApiService'
import { defineComponent } from 'vue'
import type { Task } from '@/types/Task'

export default defineComponent({
  name: 'TaskItem',
  components: {},
  data() {
    return {
      tasks: [] as Task[]
    }
  },
  async created() {
    await this.loadTasks()
  },
  methods: {
    async loadTasks() {
      this.tasks = await ApiService.getTasks()
      console.log(this.tasks)
    }
  }
})
