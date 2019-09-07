<template>
    <div class="cartcontrol">
        <div class="iconfont icon-remove_circle_outline" @click="removeFood" v-show="hasName"></div>
        <div class="cart-count" v-show="hasName" >{{count}}</div>
        <div class="iconfont icon-add_circle" @click.stop="addFood"></div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
      name: "CartControl",
      data(){
        return({
          count:'',
          hasName:false
        })
      },
      mounted(){
        console.log()
      },
      
      methods:{
        addFood(){
          this.$store.commit('addFood', this.$store.state.goods[this.goodIndex].foods[this.foodIndex])
          this.count = this.shopCar[this.shopIndex[this.name]]?this.shopCar[this.shopIndex[this.name]].count:''
          this.hasName = !!this.shopCar[this.shopIndex[this.name]]
          },
        removeFood(){
          console.log(this.shopIndex[this.name])
          this.$store.commit('removeFood',this.shopIndex[this.name])
          this.count = this.shopCar[this.shopIndex[this.name]]?this.shopCar[this.shopIndex[this.name]].count:''
          this.hasName = !!this.shopCar[this.shopIndex[this.name]]
        }
      },
      props:['foodIndex','goodIndex','name'],
      computed:{
        ...mapState(['shopIndex','shopCar']),
        count1(){
          return this.shopCar[this.shopIndex[this.name]]?this.shopCar[this.shopIndex[this.name]].count:''
        }
      },
      watch:{
        count1:function () {
          console.log('count1 changed')
        }
      }

    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    $green=#02a774
    @import "../../common/stylus/mixins.styl"
    .cartcontrol
        font-size: 0
        .cart-decrease
            display: inline-block
            padding: 6px
            line-height: 24px
            font-size: 24px
            color: rgb(0, 160, 220)

        .icon-remove_circle_outline
            display: inline-block
            padding 6px
            line-height 24px
            font-size 24px
            color $green
        .cart-count
            display: inline-block
            vertical-align: top
            width: 12px
            padding-top: 6px
            line-height: 24px
            text-align: center
            font-size: 10px
            color: rgb(147, 153, 159)
        .icon-add_circle
            display: inline-block
            padding: 6px
            line-height: 24px
            font-size: 24px
            color $green
</style>
