import Msite from '../pages/Msite'
import Search from '../pages/Search'
import Order from '../pages/Order'
import Login from '../pages/Login'
import ProFile from '../pages/ProFile'
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
      path:'/',
      redirect:'/msite'
    }
  ]
}
