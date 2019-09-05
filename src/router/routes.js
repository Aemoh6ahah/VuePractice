import Msite from '../pages/Msite'
import Search from '../pages/Search'
import Order from '../pages/Order'
import Login from '../pages/Login'
import ProFile from '../pages/ProFile'
import Shop from '../pages/Shop/Shop'
import Ratings from '../pages/Shop/Ratings'
import Goods from '../pages/Shop/Goods'
import Info from '../pages/Shop/Info'
export default {
  routes:[
    {
      path:'/msite',
      component:Msite,
      meta:{
        isShowFT:true
      },
    },
    {
      path:'/search',
      component:Search,
      meta:{
        isShowFT:true
      },
    },
    {
      path:'/order',
      component:Order,
      meta:{
        isShowFT:true
      },
    },
    {
      path:'/login',
      component:Login,
      meta:{
        isShowFT:false
      },
    },
    {
      path:'/profile',
      component:ProFile,
      meta:{
        isShowFT:true
      },
    },
    {
      path:'/shop',
      component:Shop,
      children:[
        {
          path:'/shop/goods',
          component:Goods
        },
        {
          path:'/shop/ratings',
          component:Ratings
        },
        {
          path:'/shop/info',
          component:Info
        },
      ],
      redirect:'/shop/goods'
    },
    {
      path:'/',
      redirect:'/msite'
    },

  ]
}
