<template>
  <div>
    <header class="header">
      <i class="iconfont icon-search"></i>
      <span v-show="$store.state.headerState===0" class="header-local">正在定位...</span>
      <span v-show="$store.state.headerState===1" class="header-local">{{$store.state.address}}</span>
      <router-link to="/login" class="header-login">登录丨注册 </router-link>
    </header>
    <Swiper/>
    <ShopList/>
  </div>
</template>

<script>
  import ShopList from '../components/ShowpList/ShopList'
  import Swiper from '../components/BannerSwiper/BannerSwiper'
  import {getLocation} from '../api'
    export default {
        name: "Msite",
      components:{
        Swiper,
        ShopList,
      },
      data(){
        return ({
          state:0
        })
      },
      async mounted() {
        this.$store.dispatch("misteMounted")
      }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.header
  width 100%
  position fixed
  z-index 10
  height  50px
  background-color #02a774
  line-height 50px
  display flex
  justify-content space-between
  color white
  .iconfont
    font-size 25px
    margin-left 10px
  .header-local
    display inline-block
    font-size 20px
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    width: 120px;
  .header-login
    color white
    margin-right:10px

</style>
