import { createRouter, createWebHashHistory } from 'vue-router'
import loginView from "@/views/loginView";
import mainView from "@/views/mainView";
import contactView from "@/views/contactView";
import signupView from "@/views/signupView";
import auth from "../auth";
import addPostView from "@/views/addPostView";

const routes = [{
  path: "/",
  name: "mainView",
  component: mainView,
  beforeEnter: async(to, from, next) => {
    let authResult = await auth.authenticated();
    if (!authResult) {
      next('/login')
    } else {
      next();
    }
  }
},
  {
    path: "/addpost",
    name: "addPostView",
    component: addPostView,
    beforeEnter: async(to, from, next) => {
      let authResult = await auth.authenticated();
      if (!authResult) {
        next('/login')
      } else {
        next();
      }
    }
  },
  {
    path: "/signup",
    name: "signupView",
    component: signupView,
  },
  {
    path: "/login",
    name: "loginView",
    component: loginView,
  },
  {
    path: "/about",
    name: "contactView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import ( /* webpackChunkName: "about" */ "../views/contactView.vue"),
  },
];

/*
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
*/

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
