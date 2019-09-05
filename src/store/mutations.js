export default {
    "changeHeader"(state){
        state.headerState=1
    },
    "changeAddress"(state,name){
        state.address = name
    },
    "setFoodList"(state,foodList){
        state.foodList = foodList
    },
    "setShopList" (state,shopList){
        state.shopList = shopList
    },
  "setUserInfo"(state,userInfo){
    state.userInfo = userInfo
  },
    //退出登录
    "userOut"(state){
        state.userInfo = {}
    },
    //shopIndex点击时修改
    "setShopIndex"(state,index){
        state.shopIndex = index
    },
    //添加goods
    "setGoods"(state,goods){
        state.goods = goods
    },
    //往购物车数组添加食物
    "addFood"(state,good){
        state.shopCar.push(good)
    },
    //减少购物车数组中的食物
    "removeFood"(state,foodId){
        state.shopCar.forEach((food,index)=>{
            if (food.foodID){
                if (food.count===1){//如果food的数量为1 从购物车数组中移除
                    state.shopCar.splice(index,1)
                }
                food.count--
            }
        })
    },
}

