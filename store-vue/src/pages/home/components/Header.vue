<template>
  <div class="navbar">
    <router-link to="/" class="navbar-left-container" tag="div">
      <img src="../../../assets/pic/logo.png" alt="">
    </router-link>
    <div class="navbar-right-container">
      <router-link to="/" class="navbar-login-link nav-link">login</router-link>
      <router-link to="/" class="navbar-cart-link nav-link">
        <svg class="icon cart-link" aria-hidden="true">
          <use xlink:href="#icon-gouwuche"></use>
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navHeader'
}
</script>

<style lang="stylus" scoped>
  .navbar
    display flex
    justify-content space-between
    align-items center
    height 70px
    padding 0 20px
    background-color #fff
    .navbar-left-container
      display block
      width 50px
      height 50px
      img
        width 100%
    .navbar-right-container
      display flex
      align-items center
      .nav-link
        padding-left 15px
      .navbar-login-link
        color #666
        font-size 16px
      .navbar-cart-link
        .cart-link
          width 25px
          height 25px
          color black
</style>
