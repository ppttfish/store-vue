<template>
  <div class="">
    <nav-header></nav-header>
    <nav-bread class="container"></nav-bread>
    <div class="container">
      <nav-filter></nav-filter>
      <goods-list></goods-list>
    </div>
  </div>
</template>

<script>
import NavHeader from './components/Header'
import NavBread from './components/NavBread'
import NavFilter from './components/NavFilter'
import GoodsList from './components/GoodsList'
export default {
  name: 'home',
  components: {
    NavHeader,
    NavBread,
    NavFilter,
    GoodsList
  }
}
</script>

<style lang="stylus" scoped>
  .container
    max-width 1280px
    margin 0 auto
    padding 0 10px
</style>
