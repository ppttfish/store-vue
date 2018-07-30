<template>
  <div class="nav-bread">
    <router-link to="/">Home</router-link>
    <span>Goods</span>
  </div>
</template>

<script>
export default {
  name: 'navBread'
}
</script>

<style lang="stylus" scoped>
  .nav-bread
    padding 10px
    background-color #f0f0f0
    a
      margin-right 10px
      color #999
      &::after
        content '/'
        position relative
        left 5px
</style>
