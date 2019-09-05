<template>
    <div class="footer">
      <div class="footer-item">
        <router-link to="/msite" class="nav-item">
          <i class="iconfont icon-waimai"></i>
           外卖
        </router-link>
      </div>
      <div class="footer-item">
        <router-link to="/search" class="nav-item">
          <i class="iconfont icon-search"></i>
          搜索
        </router-link>
      </div>
      <div class="footer-item">
        <router-link to="/order" class="nav-item">
          <i class="iconfont icon-dingdan"></i>
          订单
        </router-link>
      </div>
      <div class="footer-item">
        <router-link to="/profile" class="nav-item">
          <i class="iconfont icon-geren"></i>
          我的
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.footer
  width 100%
  height 60px
  position fixed
  left 0
  bottom -1px
  display flex
  background-color: #fff
  z-index 210
  .footer-item
    display flex
    justify-content center
    align-items center
    width 25%
    a
      display flex
      flex-direction column
      text-align center
      &.router-link-exact-active
        color #02a774
    .iconfont
      font-size 30px


</style>
