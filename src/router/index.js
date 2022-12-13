import { createRouter, createWebHashHistory } from 'vue-router'
import loginView from "@/views/loginView";
import mainView from "@/views/mainView";
import contactView from "@/views/contactView";
import signupView from "@/views/signupView";
const routes = [
  {
    path: '/',
    name: 'loginView',
    component: loginView
  },
  {
    path: '/mainView',
    name: 'mainView',
    component: mainView
  },
  {
    path: '/contactView',
    name: 'contactView',
    component: contactView
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
