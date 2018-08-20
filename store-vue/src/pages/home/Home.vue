<template>
  <div class="">
    <nav-header @modalFlag="this.handleModal"></nav-header>
    <nav-bread class="container"></nav-bread>
    <div class="container">
      <nav-filter @sortFlag="this.hanldGoodsSort"></nav-filter>
      <goods-list
        :list="goodsList"
        :scolleParams="infiniteScolle"
        @scolle="this.handleScolle"
      >
      </goods-list>
    </div>
    <login-modal :flag="this.$store.state.showModal"></login-modal>
  </div>
</template>

<script>
import NavHeader from './components/Header'
import NavBread from './components/NavBread'
import NavFilter from './components/NavFilter'
import GoodsList from './components/GoodsList'
import InfiniteLoading from 'vue-infinite-loading'
import LoginModal from './components/LoginModal'
import axios from 'axios'
export default {
  name: 'home',
  components: {
    NavHeader,
    NavBread,
    NavFilter,
    GoodsList,
    InfiniteLoading,
    LoginModal
  },
  data () {
    return {
      goodsList: [],
      pageFlag: false,
      urlParams: {
        page: 1,
        pageSize: 8,
        sort: 1
      },
      infiniteScolle: {
        busy: true,
        distance: 10
      },
      showModal: false
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
        let data = res.data.result
        if (flag) {
          this.goodsList = this.goodsList.concat(data.list)
          if (data.length === 0) {
            this.infiniteScolle.busy = true
          } else {
            this.infiniteScolle.busy = false
          }
        } else {
          this.goodsList = data.list
        }
        if (data.length <= 0) {
          // state.complete()
        } else {
          // state.loaded()
        }
      })
    },
    hanldGoodsSort (sortFlag) {
      this.urlParams.sort = sortFlag
      this.urlParams.page = 1
      this.getGoodList(this.urlParams)
    },
    handleScolle () {
      setTimeout(() => {
        this.infiniteScolle.busy = false
        this.urlParams.page++
        this.pageFlag = true
        console.log(1)
        this.getGoodList(this.urlParams, this.pageFlag)
        // this.infiniteScolle.busy = false
      }, 1000)
    },
    handleModal (flag) {
      console.log(flag)
      this.showModal = flag
      console.log(this.showModal)
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
