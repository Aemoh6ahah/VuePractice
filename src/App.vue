<template>
  <div>
    <router-view></router-view>
    <FooterGuide v-if="$route.meta.isShowFT"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'
  import {reqUserInfo} from './api/index'
export default {
  name:'App',
  components:{
    FooterGuide,
  },
  async mounted() {
    console.log('App')
    this.$store.dispatch("misteMounted")
    let res = await reqUserInfo()
    if (res.code===0){
      this.$store.commit("setUserInfo",res.data)
    }
  },
}
</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
  .header //头部公共css
    background-color #02a774
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px
    .header_search
      position absolute
      left 15px
      top 50%
      transform translateY(-50%)
      width 10%
      height 50%
      .iconfont
        font-size 22px
        color #fff
    .header_title
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 30%
      color #fff
      font-size 22px
      text-align center
</style>
