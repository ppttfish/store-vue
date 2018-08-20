<template>
  <div class="goods-list">
    <filter-slide></filter-slide>
    <div class="goods">
      <ul>
        <li
          v-for="good in list"
          :key="good._id"
        >
          <div class="pic">
            <a>
              <img :src="'static/pic/' + good.productImage" alt="">
            </a>
          </div>
          <div class="main">
            <div class="name">{{ good.productName }}</div>
            <div class="price">{{ '￥' + good.salePrice }}</div>
            <a class="buyBtn" @click="addCart">加入购物车</a>
          </div>
        </li>
      </ul>
      <div v-infinite-scroll="loadMore" infinite-scroll-distance="10">
         加载中...
      </div>
    </div>
  </div>
</template>

<script>
import FilterSlide from './FilterSlide'
import axios from 'axios'
// import InfiniteLoading from 'vue-infinite-loading'
export default {
  name: 'goodList',
  props: {
    list: Array,
    scolleParams: Object
  },
  data () {
    return {
      goodsList: []
    }
  },
  components: {
    FilterSlide
  },
  methods: {
    // infiniteHandler ($state) {
    //   this.$emit('infinite', $state)
    // }
    loadMore () {
      console.log(`i am here`)
      this.$emit('scolle')
    },
    addCart () {
      axios.post('/goods/addCart')
      alert('添加成功')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .goods-list
    display flex
    .goods
      flex 1
      ul
        overflow auto
        padding 10px 0
        li
          float left
          width 23%
          margin-right 1.5%
          margin-bottom 1.5%
          border 2px solid #e9e9e9
          background-color #fff
          transition transform .5s ease-out
          &:hover
            border-color #ee7a23
            transform translateY(-5px)
            box-shadow 0 0 10px #999
          .pic
            overflow hidden
            height 0
            padding-bottom 100%
            background-color #ddd
            a
              display block
              img
                width 100%
          .main
            padding 20px 10px 10px
            .name
              height 4em
              line-height 1.25em
              padding-bottom 10px
              font-family moderat,sans-serif
              font-weight 700
            .price
              line-height 30px
              color #d1434a
              font-size 1.25em
            .buyBtn
              display block
              margin-top 10px
              height 40px
              line-height 40px
              border 1px solid #d1434a
              font-size 14px
              font-family moderat,sans-serif
              font-weight 700
              color #d1434a
              text-align center
              letter-spacing .25em
              &:hover
                  background-color #ffe5e6
</style>
