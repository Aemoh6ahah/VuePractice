<template>
    <div >
        <div class="goods">
            <div class="menu-wrapper wrapper">
                <ul class="content good-content">
                    <li class="menu-item" @click="changeFood(index)" v-for="(goods,index) in $store.state.goods" :key="index" :class="{'current':index===nowGoodIndex}">
                        <img class="icon" v-show="goods.icon" :src="goods.icon">
                        <span class="text bottom-border-1px">{{goods.name}}</span>
                    </li>
                </ul>
            </div>
            <div class="foods-wrapper wrapper1" >
                <ul class="content food-content">
                    <li class="food-list-hook " v-for="(goods,goodIndex) in $store.state.goods" :key="goodIndex">
                        <h1 class="title">{{goods.name}}</h1>
                        <ul>
                            <li class="food-item bottom-border-1px" v-for="(foods,foodIndex) in goods.foods" :key="foodIndex">
                                <div class="icon">
                                    <img width="57" height="57"
                                         :src="foods.icon">
                                </div>
                                <div class="content">
                                    <h2 class="name">{{foods.name}}</h2>
                                    <p class="desc">{{foods.description}}</p>
                                    <div class="extra">
                                        <span class="count">{{foods.sellCount}}</span>
                                        <span>好评率{{foods.rating}}%</span></div>
                                    <div class="price">
                                        <span class="now">￥{{foods.price}}</span>
                                        <span class="old" v-show="foods.oldPrice">￥{{foods.oldPrice}}</span>
                                    </div>
                                    <div class="cartcontrol-wrapper">
                                        <CartControl :foodIndex="foodIndex" :goodIndex="nowGoodIndex"/>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <ShopCar/>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import CartControl from './CartControl'
    import ShopCar from './ShopCar'
    export default {
        name: "Goods",
        components:{
            CartControl,
            ShopCar
        },
        data(){
            return ({
                //食物列表的高度
                foodTops:[],
                //nav列表高度
                goodTops:[],
                //当前食物列表的位置
                nowFood:0,
                //当前类列表的位置
                nowGood:0,
                nowGoodIndex:0,
                nowFoodIndex:0,
                //左右最大滚动距离
                maxGood:0,
                maxFood:0,
            })
        },
         mounted() {
             if (!this.scroll){
                 this._initBscroll()
             }
             console.log(this.foodTops.length)
             if (!this.foodTops.length&&!this.goodTops.length){
                 this.fun()
             }
             //将左右的最大滚动距离存入data
             let goodWrapper = document.querySelector('.menu-wrapper')
             let foodWrapper = document.querySelector('.foods-wrapper')
             let goodContent = document.querySelector('.good-content')
             let foodContent = document.querySelector('.food-content')
             this.maxGood = (goodWrapper.clientHeight-goodContent.clientHeight)
             this.maxFood = (foodWrapper.clientHeight-foodContent.clientHeight)
         },
        methods:{
            fun:function () {
                let top = 0
                let top1 = 0
                let goodsList= document.querySelectorAll('.menu-item')
                let foodList = document.querySelectorAll('.food-list-hook')
                Array.prototype.slice.call(foodList).forEach((item,index)=>{
                    top+=item.clientHeight
                    this.foodTops.push(top)
                    if (this.foodTops.length===foodList.length) {
                        this.foodTops.unshift(0)
                    }
                })
                Array.prototype.slice.call(goodsList).forEach((item,index)=>{
                    top1+=item.clientHeight
                    this.goodTops.push(top1)
                    if (this.goodTops.length===goodsList.length) {
                        this.goodTops.unshift(0)
                    }
                })
            },
            async _initBscroll(){
                this.scroll = await new BScroll('.wrapper',{click:true,})
                this.scroll1 = await new BScroll('.wrapper1',{click:true,probeType:2})
                this.scroll1.on('scroll',this.setFoodY)
            },
            changeFood:function (index) {
                this.nowGoodIndex=index*1
                this.scroll1.scrollTo(0,-this.foodTops[index],200)
            },
            setFoodY(pos){
                this.nowFood=pos.y
            }
        },
        watch:{
            goods(){
                this.$nextTick(function () {
                    if (!this.scroll){
                        this._initBscroll()
                    }
                    if (!this.foodTops.length&&!this.goodTops.length){
                        this.fun()
                    }
                })
            },
            nowFood(){
                this.foodTops.forEach((item,index)=>{
                    if ((-this.nowFood)>=item&&(-this.nowFood)<this.foodTops[index+1]){
                        if (-this.goodTops[index]>this.maxGood){
                            this.scroll.scrollTo(0,-this.goodTops[index],200)
                        }else if(-this.goodTops[index]<this.maxGood){
                            this.scroll.scrollTo(0,-this.maxGood,200)
                        }
                        this.nowFoodIndex=index*1
                    }
                })
            }
        },
        computed:{
            goods(){
                return this.$store.state.goods
            },
        }
    }
</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
    @import "../stylus/mixins.styl"
    .goods
        display: flex
        position: absolute
        top: 225px
        bottom: 46px
        width: 100%
        background: #fff;
        overflow: hidden
        .menu-wrapper
            flex: 0 0 80px
            width: 80px
            background: #f3f5f7
            .menu-item
                display: table
                height: 54px
                width: 56px
                padding: 0 12px
                line-height: 14px
                &.current
                    position: relative
                    z-index: 10
                    margin-top: -1px
                    background: #fff
                    color: $green
                    font-weight: 700
                    .text
                        border-none()
                .icon
                    display: inline-block
                    vertical-align: top
                    width: 12px
                    height: 12px
                    margin-right: 2px
                    background-size: 12px 12px
                    background-repeat: no-repeat
                .text
                    display: table-cell
                    width: 56px
                    vertical-align: middle
                    bottom-border-1px(rgba(7, 17, 27, 0.1))
                    font-size: 12px
        .foods-wrapper
            flex: 1
            .title
                padding-left: 14px
                height: 26px
                line-height: 26px
                border-left: 2px solid #d9dde1
                font-size: 12px
                color: rgb(147, 153, 159)
                background: #f3f5f7
            .food-item
                display: flex
                margin: 18px
                padding-bottom: 18px
                bottom-border-1px(rgba(7, 17, 27, 0.1))
                &:last-child
                    border-none()
                    margin-bottom: 0
                .icon
                    flex: 0 0 57px
                    margin-right: 10px
                .content
                    flex: 1
                    .name
                        margin: 2px 0 8px 0
                        height: 14px
                        line-height: 14px
                        font-size: 14px
                        color: rgb(7, 17, 27)
                    .desc, .extra
                        line-height: 10px
                        font-size: 10px
                        color: rgb(147, 153, 159)
                    .desc
                        line-height: 12px
                        margin-bottom: 8px
                    .extra
                        .count
                            margin-right: 12px
                    .price
                        font-weight: 700
                        line-height: 24px
                        .now
                            margin-right: 8px
                            font-size: 14px
                            color: rgb(240, 20, 20)
                        .old
                            text-decoration: line-through
                            font-size: 10px
                            color: rgb(147, 153, 159)
                    .cartcontrol-wrapper
                        position: absolute
                        right: 0
                        bottom: 12px
</style>