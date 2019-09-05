import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './untils/validate'
import  VueAwesomeSwiper from 'vue-awesome-swiper'
import  'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router:router,
  store,
  render: h => h(App)
}).$mount('#app')
