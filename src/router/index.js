import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// const Xiang = ()=>import('@/pages/cate/catecontent/Xiang')

//引入要跳转的组件   路由懒加载
const shouYe = ()=>import('../pages/shouYe')
const cateCom = ()=>import('../pages/cate')
const cartCom = ()=>import('../pages/cart')
const myCom = ()=>import('../pages/my')
//分类页面的具体四个
const cateHot = ()=>import('@/pages/cate/catecontent/cateHot')
const cateDei = ()=>import('@/pages/cate/catecontent/cateDei')
const cateLive = ()=>import('@/pages/cate/catecontent/cateLive')
const cateClothing = ()=>import('@/pages/cate/catecontent/cateClothing')
//分类页面跳转详情页的路由
const Details1 =() => import('@/pages/cate/catecontent/cateDetails/Details1')
const Details2 =() => import('@/pages/cate/catecontent/cateDetails/Details2')
const Details3 =() => import('@/pages/cate/catecontent/cateDetails/Details3')
const Details4 =() => import('@/pages/cate/catecontent/cateDetails/Details4')




//配置路由
const routes=[
   
    {path:'/',redirect:'/home'},
    {path:'/home',component:shouYe},
            //分类页面跳转详情页的路由
            {
                path:'/Details1',
                name:'/Details1',
                component:Details1
            },
            {
                path:'/Details2',
                name:'/Details2',
                component:Details2
            },
            {
                path:'/Details3',
                name:'/Details3',
                component:Details3
            },
            {
                path:'/Details4',
                name:'/Details4',
                component:Details4
            },
    {path:'/cate',component:cateCom,
    //分类页面的具体四个
        children:[
            {
                path:'/cateHot',
                name:"cateHot",
                component:cateHot,
                // children:[
                //     {
                //         path:'/Details1',
                //         name:'/Details1',
                //         component:Details1
                //     }
                // ]
            },
           {
                path:'/cateDei',
                name:"cateDei",
                component:cateDei
            },
            {
                path:'/cateLive',
                name:"cateLive",
                component:cateLive
            },
            {
                path:'/cateClothing',
                name:"cateClothing",
                component:cateClothing
            },
            {
                path:"/",
                redirect:"/cateHot"
            }
            
        ]
    },
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