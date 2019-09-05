import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import  VueAwesomeSwiper from 'vue-awesome-swiper'

import './untils/validate'
import './untils/mintUi'
import  'swiper/dist/css/swiper.css'
import  './untils/Mock/index'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router:router,
  store,
  render: h => h(App)
}).$mount('#app')
