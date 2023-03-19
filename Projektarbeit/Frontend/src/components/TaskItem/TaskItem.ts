import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TaskItem',
  components: {},
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: 'Task 1',
          description: 'Description 1',
          category: 'Category 1',
          dueDate: '2021-05-01',
          priority: 'low',
          completed: false
        },
        {
          id: 2,
          title: 'Task 2',
          description: 'Description 2',
          category: 'Category 2',
          dueDate: '2021-05-02',
          priority: 'medium',
          completed: false
        },
        {
          id: 3,
          title: 'Task 3',
          description: 'Description 3',
          category: 'Category 3',
          dueDate: '2021-05-03',
          priority: 'high',
          completed: false
        }
      ]
    }
  }
})
