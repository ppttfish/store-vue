<template>
  <div class="login-modal" v-show="flag">
    <div class="modal-content">
      <span class="modal-label">登录</span>
      <div class="input-wrapper">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-denglu"></use>
        </svg>
        <input class="modal-input" type="text" placeholder="用户名">
      </div>
      <div class="input-wrapper">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-mima"></use>
        </svg>
        <input class="modal-input" type="password" placeholder="密码">
      </div>
      <div class="login-btn">登录</div>
      <div class="modal-close" @click="modalClose">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-guanbi"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginModal',
  props: {
    flag: Boolean
  },
  methods: {
    modalClose () {
      this.$store.commit('modalFlag', false)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .login-modal
    position fixed
    top 0
    right 0
    left 0
    bottom 0
    text-align center
    background-color rgba(0, 0, 0, .3)
    &&:after
      content ''
      display inline-block
      height 90%
      vertical-align middle
    .modal-content
      display inline-block
      position relative
      width 480px
      padding 30px 40px
      font-size 16px
      vertical-align middle
      border-radius 3px
      background-color #fff
      .modal-label
        display block
        text-align left
      .input-wrapper
        position relative
        display flex
        align-items center
        margin-top 15px
        padding 5px 10px
        border 1px solid #ccc
        .icon
          float left
          font-size 16px
        .modal-input
          width 100%
          padding 0 10px
      .login-btn
        margin-top 15px
        padding 10px 0
        color #fff
        box-sizing border-box
        border-radius 2px
        background-color #009de6
        border 1px solid #009de6
        cursor pointer
        &:hover
          opacity .7
      .modal-close
        position absolute
        top 15px
        right 15px
        cursor pointer
</style>
