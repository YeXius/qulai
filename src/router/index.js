import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//引入要跳转的组件   路由懒加载
const shouYe = ()=>import('../pages/shouYe')
const cateCom = ()=>import('../pages/cate')
const cartCom = ()=>import('../pages/cart')
const myCom = ()=>import('../pages/my')

//配置路由
const routes=[
    {path:'/',redirect:'/home'},
    {path:'/home',component:shouYe},
    {path:'/cate',component:cateCom},
    {path:'/cart',component:cartCom},
    {path:'/my',component:myCom},
]

//实例化
const router=new VueRouter({
    routes,
    linkActiveClass:'active',   //高亮
})

//导出router

export default router;