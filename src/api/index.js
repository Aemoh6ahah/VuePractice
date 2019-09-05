import ajax from './ajax'
const BASE = '/api'
//根据经纬度获取位置
export const getLocation =(longitude, latitude) => ajax(BASE + `/position/${latitude},${longitude}`)
//获取食品列表
export const getFootList = () => ajax(BASE + `/index_category`)
//获取店铺列表
export const getShops = (longitude, latitude)=>(ajax(BASE+`/shops`))
//获取短信验证码
export const getCode = (phone)=>{ajax(BASE+`/sendcode?phone=${phone}`)}
//手机号登录
export const phoneLogin = ({phone,code})=>{return ajax(BASE+`/login_sms`,{phone,code},"POST")}
//用户名登录
export const userLogin = ({name,pwd,captcha})=>{return ajax(BASE+`/login_pwd`,{name,pwd,captcha},'POST')}
//
export const reqUserInfo = ()=>{return ajax(BASE+`/userinfo`)}
//用户登出
export const userLogout = ()=>ajax(BASE+`/logout`)



//测试mock
export const testMock = ()=>ajax('/shop/test')
//mock发请求 获取goods
export const getGoods = ()=>ajax('/shop/goods')
