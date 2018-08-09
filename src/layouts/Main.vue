<template>
  <div>
    <router-view name="header"></router-view>
    <router-view></router-view>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainFooter from '@/components/Footer'
export default {
  components: {MainFooter}
}
</script>

<style>
  @import "../assets/css/main.css";
</style>
