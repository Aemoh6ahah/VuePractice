import {getLocation,getFootList,getShops} from '../api/index'
import {cutArr} from "../untils/tools"

export default {
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
    }
}
