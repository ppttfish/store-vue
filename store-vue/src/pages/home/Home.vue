<template>
  <div class="">
    <nav-header></nav-header>
    <nav-bread class="container"></nav-bread>
    <div class="container">
      <nav-filter @sortFlag="this.hanldGoodsSort"></nav-filter>
      <goods-list :list="goodsList" @infinite="this.handleInfinite"></goods-list>
      <!-- <infinite-loading @infinite="infiniteHandler"></infinite-loading> -->
    </div>
  </div>
</template>

<script>
import NavHeader from './components/Header'
import NavBread from './components/NavBread'
import NavFilter from './components/NavFilter'
import GoodsList from './components/GoodsList'
import InfiniteLoading from 'vue-infinite-loading'
import axios from 'axios'
export default {
  name: 'home',
  components: {
    NavHeader,
    NavBread,
    NavFilter,
    GoodsList,
    InfiniteLoading
  },
  data () {
    return {
      goodsList: [],
      pageFlag: false,
      urlParams: {
        page: 1,
        pageSize: 8,
        sort: 1
      }
    }
  },
  mounted () {
    this.getGoodList(this.urlParams, this.pageFlag)
  },
  methods: {
    getGoodList (urlParams, flag) {
      axios.get('/goods', {
        params: urlParams
      }).then((res) => {
        let data = res.data.result.list
        if (flag) {
          this.goodsList = this.goodsList.concat(data)
        } else {
          this.goodsList = data
        }
      })
    },
    hanldGoodsSort (sortFlag) {
      this.urlParams.sort = sortFlag
      this.getGoodList(this.urlParams)
    },
    handleInfinite ($state) {
      setTimeout(() => {
        this.urlParams.page++
        this.pageFlag = true
        this.getGoodList(this.urlParams, this.pageFlag)
        $state.loaded()
      }, 1000)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    max-width 1280px
    margin 0 auto
    padding 0 10px
</style>
