<template>
        <div class='item'>
              
            <headerCom></headerCom>
            <div class="content">
               
               <transition>
                     <keep-alive>
                <div class="content-left">
                 
                            <router-link tag="p" to="/cateHot" >

                                热门推荐
                            </router-link>
                     
                     
                       <router-link tag="p" to="/cateDei">
                          电子设备
                     </router-link>
                       <router-link tag="p" to="/cateLive">
                          生活用品
                     </router-link>
                       <router-link tag="p" to="/cateClothing">
                            服饰用品
                     </router-link>
                     
                </div>
                 </keep-alive>
                </transition>
                
                <div class="content-right">
                    <router-view></router-view>
                    
                </div>
               
            </div>
          
            <footerCom></footerCom>
        </div>
    </template>
    
    <script>
    import footerCom from '../../components/footer'
    import headerCom from '../../components/header'
    export default {
        components:{
            footerCom,
            headerCom
        }
    }
    </script>
    
<style  scoped>
.content{
    /* width: 100%;
    height: auto; */
    display: flex;
}
     .content-left{
         width: 25%;
         height: 4.32rem;
         /* background: aqua; */
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: space-around;
     }   
     .content-right{
         width: 75%;
         height: auto;
         /* background: seagreen; */
     }
    .content-left p{
        font-size: .30rem;
        font-weight: 600;
     }
     /* p:hover{
         color: yellow;
     } */
    .active{
         color: yellow;
     }
</style>