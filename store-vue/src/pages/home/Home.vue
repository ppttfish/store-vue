<template>
  <div>
    <nav-header></nav-header>
    <nav-bread></nav-bread>
  </div>
</template>

<script>
import NavHeader from './components/Header'
import NavBread from './components/NavBread'
export default {
  name: 'home',
  components: {
    NavHeader,
    NavBread
  }
}
</script>

<style>

</style>
