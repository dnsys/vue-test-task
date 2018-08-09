import Vue from 'vue'
import Router from 'vue-router'
import AuthCheck from '@/router/authCheck'

//import layouts
import Main from '@/layouts/Main'
import Cabinet from '@/layouts/Cabinet'

//import views
import Dashboard from '@/views/Dashboard'
import Home from '@/views/Home'


import MainHeader from '@/components/MainHeader'

Vue.use(Router)

let routes = [
  {
    path: '',
    component: Main,
    children: [
      {
        path: '/',
        name: 'home',
        components: {
          default: Home,
          header: MainHeader
        }
      }
    ]
  },
  {
    path: '',
    component: Cabinet,
    children: [
      {
        path: '/cabinet/:id',
        name: 'cabinet',
        component: Dashboard,
        beforeEnter: AuthCheck
      }
    ],
  },
]

export const router = new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
