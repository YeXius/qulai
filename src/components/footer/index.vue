<template>
    <div class='footer'>
        <router-link to='/home'>首页</router-link>
        <router-link to='/cate'>分类</router-link>
        <router-link to='/cart'>购物车</router-link>
        <router-link to='/my'>我的</router-link>
    </div>
</template>

<script>
export default {
    
}
</script>


<style>
    .footer{
        width: 100%;
        height: 1.12rem;
        border-top: 1px solid #DFDFDF;
        display:flex;
    }
    .footer a{
        flex:1;
        display:flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color:#9D9D9D;
    }
    .footer .active{
        color:#FEC300;
    }
</style>