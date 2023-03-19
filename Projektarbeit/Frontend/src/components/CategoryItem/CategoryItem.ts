import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CategoryItem',
  components: {},
  data() {
    return {
      categories: [
        {
          id: 1,
          title: 'Kategorie 1',
          color: '#FF0000'
        },
        {
          id: 2,
          title: 'Kategorie 2',
          color: '#00FF00'
        },
        {
          id: 3,
          title: 'Kategorie 3',
          color: '#0000FF'
        }
      ]
    }
  }
})
