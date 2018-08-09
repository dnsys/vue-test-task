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
    firebase.initializeApp({
      apiKey: "AIzaSyB9yH4xMET3AfJVVH__oMqn7-b0pNAseqE",
      authDomain: "msp4-anton-test-task.firebaseapp.com",
      databaseURL: "https://msp4-anton-test-task.firebaseio.com",
      projectId: "msp4-anton-test-task",
      storageBucket: "msp4-anton-test-task.appspot.com",
      messagingSenderId: "1074179235956"
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
  },
  components: { App },
  template: '<App/>'
})
