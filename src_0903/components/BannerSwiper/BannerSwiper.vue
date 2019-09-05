<template>
  <div id="container">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiper-slide"  v-for="(page,index) in $store.state.foodList" :key="index">
        <div class="banner-item" v-for="(item,keyNum) in page" :key = "keyNum">
          <img :src="`https://fuss10.elemecdn.com`+item.image_url" :alt="item.title">
          <span>{{item.title}}</span>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import {mapState} from 'vuex'
  export default {
    name: 'carrousel',
    data() {
      return ({
        swiperOption: {
          loop: true, //循环切换
          pagination: {
            el: '.swiper-pagination',
          },
        },
        foodList: this.$store.state.foodList,
        computed: {
          swiper() {
            return this.$refs.mySwiper.swiper
          }
        },
      })
    },
    mounted() {

    },
    computed:{

    }

  }
</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
  .swiper-container
    width 100%
    height 200px
    position relative
    left 0
    top 50px
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        width 100%
        height 200px
        .banner-item
          width 25%
          height 50%
          float left
          display flex
          justify-content center
          align-items center
          flex-direction column
          img
            width 60px
            height 60px
           span
            font-size 12px


</style>
