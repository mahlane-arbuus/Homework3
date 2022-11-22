import { createRouter, createWebHashHistory } from 'vue-router'
import mainView from "@/views/mainView";
import signupView from "@/views/signupView";
const routes = [
  {
    path: '/',
    name: 'mainView',
    component: mainView
  },
  {
    path: '/signupView',
    name: 'signupView',
    component: signupView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
