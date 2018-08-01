<template>
  <div class="fliter-slide">
    <span>price:</span>
    <ul
      v-for="(price, index) in priceList"
      :key="index"
    >
      <li>{{ index === 0 ? 'All' : price.min + ' - ' + price.max }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'filterSlide',
  data () {
    return {
      priceList: [
        {
          min: 'all',
          max: 'all'
        },
        {
          min: '0.00',
          max: '100.00'
        },
        {
          min: '100.00',
          max: '500.00'
        },
        {
          min: '500.00',
          max: '1000.00'
        },
        {
          min: '1000.00',
          max: '2000.00'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .fliter-slide
    width 230px
    padding 0 20px
    color #605f5f
    transition: right .5s ease-out
    span
      display block
      margin-bottom 30px
      font-family moderat,sans-serif
      letter-spacing .25em
      text-transform uppercase
      font-weight 700
    ul
      li
        display block
        margin 20px 0
        padding 5px 0
        line-height 1.2em
        transition padding-left .3s ease-out
        &:hover
          padding-left 15px
          cursor pointer
          border-left 2px solid #ee7a23
          color #ee7a23
          transition  padding-left .3s ease-out
        &.cur
          padding-left 15px
          cursor pointer
          border-left 2px solid #ee7a23
          transition  padding-left .3s ease-out
</style>
