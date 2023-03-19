import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FilterList',
  components: {},
  data() {
    return {
      actions: [
        {
          title: 'Template',
          icon: 'bookmark',
          path: '/template'
        },
        {
          title: 'Categories',
          icon: 'apps',
          path: '/categories'
        },
        {
          title: 'Analytics',
          icon: 'graph',
          path: '/analytics'
        },
        {
          title: 'Settings',
          icon: 'gear',
          path: '/settings'
        }
      ]
    }
  }
})
