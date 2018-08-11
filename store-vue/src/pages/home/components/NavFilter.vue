<template>
  <div class="nav-filter">
    <span>Sort by:</span>
    <a class="default">Default</a>
    <a @click="hanldPriceClick">Price
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="arror"></use>
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  name: 'navFilter',
  data () {
    return {
      arror: '#icon-shang1',
      sortFlag: 1
    }
  },
  methods: {
    hanldPriceClick () {
      if (this.arror === '#icon-shang1') {
        this.arror = '#icon-xia'
        this.sortFlag = -1
      } else {
        this.arror = '#icon-shang1'
        this.sortFlag = 1
      }
      this.$emit('sortFlag', this.sortFlag)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .nav-filter
    height 55px
    line-height 55px
    margin 60px 0 30px
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
