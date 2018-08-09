import * as firebase from 'firebase'

export default {
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    checkAuth({dispatch, commit}){
      return new Promise((resolve) => {
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
            dispatch('autoSignIn', user)
          }
          resolve()
        })
      })
    },
    signUserInGoogle ({commit}) {
      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(
          user => {
            const newUser = {
              id: user.uid,
              name: user.displayName,
              email: user.email,
              photoUrl: user.photoURL
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    autoSignIn ({commit}, payload) {
      commit('setUser', {
        id: payload.uid,
        name: payload.displayName,
        email: payload.email,
        photoUrl: payload.photoURL
      })
    },
    logout ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  }
}