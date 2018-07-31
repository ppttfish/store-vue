<template>
  <div>
    <nav-header></nav-header>
    <nav-bread></nav-bread>
    <nav-filter></nav-filter>
  </div>
</template>

<script>
import NavHeader from './components/Header'
import NavBread from './components/NavBread'
import NavFilter from './components/NavFilter'
export default {
  name: 'home',
  components: {
    NavHeader,
    NavBread,
    NavFilter
  }
}
</script>

<style>

</style>
