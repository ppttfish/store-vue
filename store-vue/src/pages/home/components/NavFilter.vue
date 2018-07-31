<template>
  <div class="container">
    <div class="nav-filter">
      <span>Sort by:</span>
      <a class="default">Default</a>
      <a>Price
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shang1"></use>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navFilter'
}
</script>

<style lang="stylus" scoped>
  .container
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 10px;
    .nav-filter
      height 55px
      line-height 55px
      margin 60px 0 30px
      padding: 0 20px
      background: #fff
      text-align: right
      overflow: hidden
      a
        margin 0 10px
        &.default
          color #ee7a23
        &:hover
          color #ee7a23
          transition color .3s ease-out
        svg
          position relative
          left -6px
          top -2px
          color black
</style>
