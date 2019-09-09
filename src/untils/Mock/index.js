import Mock from 'mockjs'
import resData from './resData'
let obj = {name:'cxk'}

Mock.mock('/shop/goods',resData.goods)
Mock.mock('/shop/ratings',resData.ratings)