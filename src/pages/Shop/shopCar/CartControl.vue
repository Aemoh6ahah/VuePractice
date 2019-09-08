<template>
    <div class="cartcontrol">
        <div class="iconfont icon-remove_circle_outline" @click="removeFood" v-show="count1"></div>
        <div class="cart-count" v-show="count1" >{{count1?count1:''}}</div>
        <div class="iconfont icon-add_circle" @click="addFood"></div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
      name: "CartControl",
      data(){
        return({

        })
      },
      mounted(){

      },
      methods:{
        addFood(){
            console.log('11111')
          let carItem = {}
          carItem.name = this.$store.state.goods[this.goodIndex].foods[this.foodIndex].name
          carItem.price = this.$store.state.goods[this.goodIndex].foods[this.foodIndex].price
          carItem.oldPrice = this.$store.state.goods[this.goodIndex].foods[this.foodIndex].oldPrice
          carItem.goodIndex = this.goodIndex
          carItem.foodIndex = this.foodIndex
          this.$store.commit('addFood',carItem)
          },
        removeFood(){
          this.$store.commit('removeFood',{foodIndex:this.carItemIndex[this.name],foodName:this.name})
        }
      },
      props:['foodIndex','goodIndex','name'],
      computed:{
        ...mapState(['carItemIndex','shopCar']),
        showBtn(){
            let name = this.name
            return   this.$store.state.carItemIndex[name]
        },
          count1(){
              let name = this.name
              return this.shopCar[this.carItemIndex[name]]?this.shopCar[this.carItemIndex[name]].count:''
          },
      },
      watch:{

      }

    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    $green=#02a774
    @import "../../../common/stylus/mixins.styl"
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
