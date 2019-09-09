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
    let targetName = good.name
    let hasTarget = true
    if (state.shopCar.length){
      state.shopCar.forEach((item)=>{
        if (item.name===targetName){
          hasTarget = false
          item.count++
        }
      })
    }
    if (hasTarget){
      good.count = 1
      state.shopCar.push(good)
      Array.prototype.indexOf=function(val){
        for(let i=0;i<state.shopCar.length;i++){
          if (state.shopCar[i].name===val){
            return i
          }
        }
        return -1
      }
        state.shopCar.forEach((item)=>{
            state.carItemIndex[item.name] = state.shopCar.indexOf(item.name)
        })
    }
  },
    // "addFood"(state,good){
    //   let targetName = good.name
    //   let hasTarget = true
    //   if (state.shopCar.length){
    //     state.shopCar.forEach((item)=>{
    //       if (item.name===targetName){
    //         hasTarget = false
    //         item.count++
    //       }
    //     })
    //   }
    //   if (hasTarget){
    //     good.count = 1
    //     state.shopCar.push(good)
    //     Array.prototype.indexOf=function(val){
    //       for(let i=0;i<state.shopCar.length;i++){
    //         if (state.shopCar[i].name===val){
    //           return i
    //         }
    //       }
    //       return -1
    //     }
    //     state.shopIndex[targetName] = state.shopCar.indexOf(targetName)
    //   }
    // },
    //减少购物车数组中的食物
    "removeFood"(state,{foodIndex,foodName}){
      state.shopCar[foodIndex].count--
      if (state.shopCar[foodIndex].count===0){
        delete state.carItemIndex[foodName]
          state.shopCar.splice(foodIndex,1)
          Array.prototype.indexOf=function(val){
              for(let i=0;i<state.shopCar.length;i++){
                  if (state.shopCar[i].name===val){
                      return i
                  }
              }
              return -1
          }
          state.shopCar.forEach((item)=>{
              state.carItemIndex[item.name] = state.shopCar.indexOf(item.name)
          })
      }
    },
  //展示商品详情页
  "showFood"(state){
      state.isShowFood = true
  },
  //隐藏商品详情
  "hideFood"(state){
      state.isShowFood = false
  },
  //设置、修改 food对象
  "setFood"(state,{foodIndex:foodIndex,goodIndex:goodIndex,foodName:foodName}){
    state.foodObj = {foodIndex:foodIndex,goodIndex:goodIndex,foodName:foodName}
  },
  "clearFoodCar"(state){
    state.shopCar = []
    state.carItemIndex = {}
  },
    // 将评论数组写入state
    "setRatings"(state,ratings){
        state.ratings = ratings
    }
}

