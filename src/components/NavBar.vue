<template>
  <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
    </v-toolbar-items>
    <template v-if="!userIsAuthenticated">
      <v-btn color="info" @click.stop="dialog=true">Sign In</v-btn>
    </template>
    <template v-else>
      <v-btn flat :to="{ name: 'cabinet', params: { id: userInfo.id }}" class="ms-nav__link">
        <v-avatar color="grey lighten-4" size="35">
          <img :src=userInfo.avatar alt="avatar">
        </v-avatar>
        <span class="ml-2">{{ userInfo.email }}</span>
      </v-btn>
      <v-btn color="error" @click.stop="onLogout">Log out</v-btn>
    </template>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-text>
          <v-btn round color="red" dark @click.prevent="onSigninGoogle">Login with Google
            <v-icon right dark>lock_open</v-icon>
            <span slot="loader" class="custom-loader">
                        <v-icon light>cached</v-icon>
                       </span>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-toolbar>
</template>

<script>
export default {
  data(){
    return{
      dialog: false
    }
  },
  computed: {
    userInfo(){
      let userInfo = {}
      if(this.userIsAuthenticated){
        userInfo = {
          id: this.userIsAuthenticated.id,
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
    onSigninGoogle () {
      this.$store.dispatch('signUserInGoogle')
      this.dialog = false
      //this.$router.push('/cabinet/:id')
    },
    onLogout () {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
