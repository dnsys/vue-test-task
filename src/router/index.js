import Vue from 'vue'
import Router from 'vue-router'
import AuthCheck from '@/router/authCheck'
import {store} from '../store'

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
    path: '/',
    component: {
      template: '<router-view></router-view>'
    },
    beforeEnter: (to, from, next) => {
      store.dispatch('checkAuth').then(next)
    },
    children: [
      {
        path: '/cabinet',
        component: Cabinet, // cabinet layout
        beforeEnter: AuthCheck,
        children: [
          {
            path: ':id',
            name: 'cabinet',
            component: Dashboard,
          },
          {path: '/', redirect: { name: 'home' }}
        ],
      },
      {
        path: '',
        component: Main,
        children: [
          {
            path: '',
            name: 'home',
            components: {
              default: Home,
              header: MainHeader
            }
          }
        ]
      }
    ]
  },
]

export const router = new Router({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
