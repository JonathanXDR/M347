import ApiService from '@/services/ApiService'
import { defineComponent } from 'vue'
import type { Category } from '@/types/Category'

export default defineComponent({
  name: 'CategoryItem',
  components: {},
  data() {
    return {
      categories: [] as Category[]
    }
  },
  async created() {
    await this.loadCategories()
  },
  methods: {
    async loadCategories() {
      this.categories = await ApiService.getCategories()
      console.log(this.categories)
    }
  }
})
