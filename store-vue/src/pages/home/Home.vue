<template>
  <div>
    <nav-header></nav-header>
    <nav-bread></nav-bread>
    <div class="container">
      <nav-filter></nav-filter>
    </div>
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

<style lang="stylus" scoped>
  .container
    max-width 1280px
    margin 0 auto
    padding 0 10px
</style>
