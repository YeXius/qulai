<template>
    <div class='item'>
        <headerCom></headerCom>
        <div class="content">
            <div class='lunbo1'>

                <wc-swiper v-if ='lunbo1.length' class='swp'>
                <wc-slide v-for='(item,index) in lunbo1' :key='index'>
                        <img :src="item.img" alt="">
                </wc-slide>
                </wc-swiper>
            </div>
            <div class="type">
                <div v-for='(i,n) in fenlei' :key='n'>
                    <img :src="i.img" alt="">
                    <p>{{i.txt}}</p>
                </div>
            </div>
            <div class="news" v-for='(i,n) in xinwenjianbao' :key='n'>
                <div class='news-left'> <img :src="i.img" alt=""></div>
                <div class='news-right'>{{i.txt}}</div>
            </div>
            <div class="con">
                <div  v-for='(i) in content1'  class='con-left' :key='i.id'><img :src="i.img" alt=""></div>
                <div   class='con-right'>
                    
                    <img v-for='(i)  in content2' :key='i.id' :src="i.img" alt="">
                    
                </div>
            </div>
            <div class="fastcheck">
                <div class='fast-top'>
                    <div class='ftop1'>精品推荐</div>
                    <div class='ftop2'>老李诚意推荐品质商品</div>
                </div>
                <div class='fast-bottom'>更多  ></div>
            </div>
            <div class="lunbo2">
                <wc-swiper v-if ='lunbo2.length' class='swp'>
                <wc-slide v-for='(item,index) in lunbo2' :key='index'>
                        <img :src="item.img" alt="">
                </wc-slide>
                </wc-swiper>
            </div>
            <div class="shangpin1">
                <div class='shangpin1-div' v-for='(i,n) in shangpin1' :key='n'>
                    <div class='shangpin1-img'><img :src="i.img" alt=""></div>
                    <div class='shangpin1-txt'>
                        <p class='sp1-p1'>{{i.name}}</p>
                        <p class='sp1-p2'>{{i.price1 | currency}}</p>
                        <p class='sp1-p3'><span>{{i.price2 | currency}}</span><span>{{i.sales}}</span></p>
                    </div>
                </div>
            </div>
              <div class="fastcheck">
                <div class='fast-top'>
                    <div class='ftop1'>首发新品</div>
                    <div class='ftop2'>多个优质商品最新上架</div>
                </div>
                <div class='fast-bottom'>更多  ></div>
            </div>
            <div class="shangpin2">
                <div class='shangpin2-div' v-for='(i,n) in shangpin3' :key='n'>
                    <div>
                        <div class='shangpin3-img'><img :src="i.img" alt=""></div>
                        <div class='shangpin3-txt'>
                            <p class='shangpin3-p1'>{{i.name}}</p>
                            <p class='shangpin3-p2'>{{i.price1}}</p>
                        </div>
                    </div>
                </div>
            </div>
              <div class="fastcheck">
                <div class='fast-top'>
                    <div class='ftop1'>促销单品</div>
                    <div class='ftop2'>库存商品优惠促销活动</div>
                </div>
                <div class='fast-bottom'>更多  ></div>
            </div>
              <div class="shangpin3">
                <div class='shangpin1-div' v-for='(i,n) in shangpin4' :key='n'>
                    <div class='shangpin1-img'><img :src="i.img" alt=""></div>
                    <div class='shangpin1-txt'>
                        <p class='sp1-p1'>{{i.name}}</p>
                        <p class='sp3-p2'><span class='p2-span1'>{{i.pricename1}}</span><span class='p2-span2'>{{i.price1 | currency}}</span></p>
                        <p class='sp3-p3'>
                            <s><span class='p3-span1'>{{i.pricename2}}</span><span class='p3-span2'>{{i.price2 | currency}}</span></s>
                            <span class='p3-span3'>{{i.jinsheng}} ： {{i.num}}</span></p>
                    </div>
                </div>
            </div>
        </div> 
        
        
        <footerCom></footerCom>
    </div>
</template>

<script>
import footerCom from '../../components/footer'
    import headerCom from '../../components/header'
    export default {
        data() {
    return {
      lunbo1:[
        {img:'./images/lunbo.png'},
        {img:'./images/lunbo2.png'}


      ],


      fenlei:[
        {img:'./images/fenlei1.png',txt:'商品分类'},
        {img:'./images/fenlei2.png',txt:'领优惠券'},
        {img:'./images/fenlei3.png',txt:'行业资讯'},
        {img:'./images/fenlei4.png',txt:'我要签到'},
        {img:'./images/fenlei5.png',txt:'我的收藏'},
        {img:'./images/fenlei6.png',txt:'拼团活动'},
        {img:'./images/fenlei7.png',txt:'秒杀活动'},
        {img:'./images/fenlei8.png',txt:'砍价活动'},


      ],
      xinwenjianbao:[
        {img:'./images/xinwen.png',txt:'壹脉智能名片营销系统秒杀活动火热  ···'}

      ],
      content1:[
        {img:'./images/cont1.png'},
       
      ],
      content2:[
        {img:'./images/cont2.png'},
        {img:'./images/cont3.png'},
      ],
      kuaisuxuanze:[
        {img:'./images/xuanze1.png',txt:'租用服务'},
        {img:'./images/xuanze2.png',txt:'源码服务'},
        {img:'./images/xuanze3.png',txt:'加盟代理'},
        {img:'./images/xuanze4.png',txt:'定制服务'},
        {img:'./images/xuanze5.png',txt:'热门促销'},
        {img:'./images/xuanze6.png',txt:'折扣专区'},
        {img:'./images/xuanze7.png',txt:'新品上线'},
        {img:'./images/xuanze8.png',txt:'手机'},
        {img:'./images/xuanze9.png',txt:'家用'},
        {img:'./images/xuanze10.png',txt:'帽子'},


      ],
      lunbo2:[
        {img:'./images/lunbo3.png'},
        {img:'./images/lunbo4.png'},
      ],
      shangpin1:[
        {img:'./images/jingxuan1.png',name:'无线吸尘器F8 玫瑰金礼盒版',price1:'0.02',price2:'0.02',sales:'已售374件'},
        {img:'./images/jingxuan2.png',name:'智米加湿器 白色 ',price1:'249.00',price2:'246.51',sales:'已售50件'},


      ],
      shangpin2:[
          {img:'./images/jingxuan1.png',name:'无线吸尘器F8···',price1:'0.02'},
          {img:'./images/jingxuan4.png',name:'风衣女中长款2···',price1:'598.00'},
          {img:'./images/jingxuan2.png',name:'智米加湿器 白色 ',price1:'249.00'},
      ],
      shangpin3:[
          {img:'./images/jingxuan1.png',name:'无线吸尘器F8···',price1:'0.02'},
          {img:'./images/jingxuan4.png',name:'风衣女中长款2···',price1:'598.00'},
          {img:'./images/jingxuan2.png',name:'智米加湿器 白色 ',price1:'249.00'},
      ],
      shangpin4:[
        {img:'./images/jingxuan4.png',name:'风衣女中长款2019秋装新款韩版···',pricename1:'促销价',price1:589.00,pricename2:'日常价',price2:689.00,jinsheng:'仅剩',num:'88件'},
        {img:'./images/jingxuan2.png',name:'智米加湿器 白色',pricename1:'促销价',price1:249.00,pricename2:'日常价',price2:299.00,jinsheng:'仅剩',num:'3953件'},


      ]
        
      
    }
  },
        components:{
            footerCom,
            headerCom
        },
        filters:{
            currency(i){
                return '￥'+i
            }
        }
    }
</script>

<style>
   
    .lunbo1 .swp{
        width:100%;
        height:100%;
    }
    .swp img{
        width:100%;
    }
    .type{
        display:flex;
        box-sizing: border-box;
        padding:.4rem .3rem;
        flex-wrap: wrap;

    }
    .type>div{
        margin-top:.1rem;
        width:25%;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .type>div img{
        width:40%;
    }
    .type>div p {
        margin-top:.25rem;
    }
    .news{
        /* height:.74rem;   */
          box-sizing: border-box;
          padding:.2rem .3rem;
          display:flex;
          align-items: center;
    }
    .news-left{
        width:25%;
    }
    .news-left img{
        width:90%;
    }
    .news-right{
        margin-left:.1rem;
        border-left: .03rem solid #ccc;
        padding-left:.3rem;
        font-size:.27rem;
        color: #5d5d5f;
    }
     .con{
         width:92%;
         margin:.3rem auto;
        box-sizing: border-box;
        padding-bottom:.3rem;
        display:flex;
        justify-content: space-between;
        border-bottom: 1px solid #ddd;

    }
    .con img{
        width:100%;
    }
   
    .con-right{
        width:60%;
        display:flex;
        flex-direction: column;
        justify-content: space-between
    }
    .con-right img{
        height:48%;
    }
    .con-left{
        width:35%;
    }
    .fastcheck{
        width:92%;
        margin:.3rem auto;
        box-sizing: border-box;
        padding-bottom:.3rem;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .fast-top{
        display:flex;
        flex-direction:column;
        justify-content: space-between

    }
    .ftop1{
        color: #000;
        font-weight:bold;
        font-size:.32rem;
    }
    .ftop2{
        margin-top:.2rem;
        color: #5d5d5f;
    }
    .shangpin1-div{
        display:flex;
        box-sizing: border-box;
        padding:.3rem;

    }
   .shangpin1-img{
      width:24%;
   }
   .shangpin1-img>img{
       width:100%;
   }
    .shangpin1-txt{
        margin-left:.2rem;
      width:70%;
      /* padding:.2rem; */
      display:flex;
      flex-direction:column;
      justify-content: space-between;
    }
    .sp1-p1{
        font-size:.32rem;
        font-weight:500;
        color: #004;
    }
    .sp1-p2{
        margin-top:.5rem;
        margin-bottom:.15rem;
        color: #f00;
        font-weight:bold;
        font-size:.32rem;
    }
    .sp1-p3>span:nth-of-type(1){
        color: #000;
        font-size:.26rem;
        font-weight:bold;
    }
     .sp1-p3>span:nth-of-type(2){
        color: #aaa;
        font-size:.26rem;
        margin-left:2rem;
    }
    .shangpin2{
        width:92%;
        margin:.3rem auto;
        display:flex;
        justify-content: space-between;
    }
    .shangpin2-div{
       width:31%;
       border: 0.01rem solid #ddd;
       border-radius:5px;
    }
    .shangpin2-div img{
        width:100%;
    }
    .shangpin3-txt{
        text-align:center;
        padding-bottom:.2rem;

    }
    .shangpin3-p1{
        margin-top:.1rem;
        font-size:.28rem;

    }
    .shangpin3-p2{
        margin-top:.1rem;
        color: #f00;
        font-size:.28rem;
        font-weight:600;
    }
    .sp3-p2{
        width:50%;
        background:red;
        border-radius:.3rem;
        color: #fff;
        padding:.1rem .15rem;
        font-size:.22rem;
    }
    .sp3-p3{
        font-size:.25rem;
        color: #aaa;
        display:flex;
        justify-content: space-between;
    }
</style>