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
    }
}
