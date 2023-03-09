import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      alias: "/student",
      name: "student",
      component: () => import("../components/StudentList.vue")
    },
    {
      path: "/student/:id",
      name: "student-details",
      component: () => import("../components/Student.vue")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("../components/AddStudent.vue")
    }
  ]
})

export default router
