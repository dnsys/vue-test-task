<template>
  <div class="user-card">
    <v-jumbotron
    :gradient="gradient"
    height="100%"
    dark
    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
  >
    <v-container fill-height>
      <v-layout align-center>
        <v-flex text-xs-center>
          <v-avatar color="grey lighten-4" size="100">
            <img :src=userInfo.avatar alt="avatar">
          </v-avatar>
          <h2>{{ userInfo.name }}</h2>
          <h3>{{ userInfo.email }}</h3>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
  </div>
</template>

<script>

export default {
  data(){
    return{
      gradient: 'to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)'
    }
  },
  computed: {
    userInfo(){
      let userInfo = {}
      if(this.userIsAuthenticated){
        userInfo = {
          id: this.userIsAuthenticated.id,
          name: this.userIsAuthenticated.name,
          avatar: this.userIsAuthenticated.photoUrl,
          email: this.userIsAuthenticated.email
        }
      }
      return userInfo
    },
    userIsAuthenticated () {
      return this.$store.getters.user
    },
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="sass" scoped>
  .user-card
    width: 100%
</style>
