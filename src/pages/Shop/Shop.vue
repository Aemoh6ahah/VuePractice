<template>
  <div>
    <ShopHeader/>
    <div class="tab">
    <router-link :to="`/shop/goods?index=`+$route.query.index*1"><span>点餐</span></router-link>
    <router-link :to="`/shop/ratings?index=`+$route.query.index*1"><span>评价</span></router-link>
    <router-link :to="`/shop/info?index=`+$route.query.index*1"><span>详情</span></router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import ShopHeader from '../../components/ShopHeader/ShopHeader'
  import {testMock} from '../../api'
    export default {
        name: "Shop",
      components:{
        ShopHeader,
      },
      async mounted() {
          console.log('shopMounted')
          await this.$store.dispatch("getGoods")
      }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.tab
  width 100%
  height 40px
  display flex
  justify-content space-between
  a
    display block
    width 25%
    height 100%
    text-align center
    line-height 40px
    &.router-link-active
      color #02a774
      span
        border-bottom #02a774 2px solid
</style>
