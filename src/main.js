// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router'
import {store} from '@/store'

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'


import * as firebase from 'firebase'


Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  created () {

  },
  components: { App },
  template: '<App/>'
})
