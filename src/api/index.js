import ajax from './ajax'
const BASE = '/api'
//根据经纬度获取位置
export const getLocation =(longitude, latitude) => ajax(BASE + `/position/${latitude},${longitude}`)
//获取食品列表
export const getFootList = () => ajax(BASE + `/index_category`)
//获取店铺列表
export const getShops = (longitude, latitude)=>(ajax(BASE+`/shops`))
//获取短信验证码
export const getCode = (phone)=>{ajax(BASE+`http://localhost:5000/sendcode?phone=${phone}`)}