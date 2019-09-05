import {getLocation,getFootList,getShops,userLogin,phoneLogin,getGoods} from '../api/index'
import {cutArr} from "../untils/tools"

export default {
  //Miste组件加载后发的一系列请求用来请求展示首页的数据
  async "misteMounted"(context){
        //lajflakjgl
        let result = await getLocation( "116.36867","40.10038" )
        if (result.code===0&&result.data.name) {
            context.commit("changeHeader")
            context.commit("changeAddress",result.data.name)
            let result0 = await getFootList("116.36867","40.10038")
            if (result0.code === 0 && result0.data.length){
                context.commit("setFoodList",cutArr(result0.data))
            }
            let shopsRes = await getShops("116.36867","40.10038")
            if (shopsRes.code === 0&&shopsRes.data.length) {
                context.commit("setShopList",shopsRes.data)
            }
        }
    },
  async "userEnter"(context,{name,pwd,captcha}){
    let res = await userLogin({name,pwd,captcha})
    if (res.code===0){
      // context.commit("setUserInfo",res.data)
      alert('登录成功')
      // that.$route.push('/profile')
    }
  },
  async "phoneEnter"(context,{phone,code}){
    let res = await phoneLogin({phone,code})
    if (res.code===0){
      alert('登录成功')
      // that.$route.push('/profile')
    }
  },
    async "getGoods"(context){
      let res = await getGoods()
        context.commit("setGoods",res)
    }
}
