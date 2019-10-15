<template>
        <div class='item'>

            <div class="header">
                <div class="top">
                    购物车
                </div>
            </div>

            <!-- 内容 -->
            <div class="content">
                <div class="cont-top">
                    <p>100%正品保证</p>
                    <p>所有商品精挑细选</p>
                    <p>售后无忧</p>
                </div>

                 <!-- 购物数量、 -->

                <div class="cont-sl">
                    <p>购物数量 <span> {{ this.list.length }} </span></p>
                    <p @click="qie()">管理</p>
                </div>
                
            <!-- 商品列表 -->
                <div class="cont-sp" v-for="(item,index) in list" :key="index">
                    {{item.id}}
                    <div class="sp-check">
                        <input type="checkbox" name="" id="" v-model="good" :value="item.id">
                    </div>

                    <div class="sp-img">
                        <img :src="item.imgs" alt="">
                    </div>
                    
                    <div class="sp-js">
                                <p>{{ item.name }} </p>

                                <div class="jia">
                                      <p>{{ item.price }}</p>
                                      <p class="aa"> 
                                          <input type="button" value="-" @click="jian(index)">
                                          <span>{{item.number}}</span>
                                          <input type="button" value="+" @click="jia(index)">
                                           </p>
                                </div>
                              
                    </div>


                </div>
                
            </div>

           <!-- 底部按钮 -->
            <div class="di">
                <div class="di-check">
                    <input type="checkbox" name="" id="" v-model="checked" @click="quan()">全选
                </div>

                <div class="di-zj">
                    ￥<span> {{ total }}  </span>   
                </div>

                <div class="del">
                        <div class="di-xd" v-show="!flag">
                              立即下单
                         </div>

                         <div class="di-del" v-show="fls">
                             <p>收藏</p>
                             <p @click="del()">删除</p>
                         </div>
                </div>
                
            </div>
            <footerCom></footerCom>
        </div>
</template>
    
    <script>
    import "../../untils/rem"
    import footerCom from '../../components/footer'
    import headerCom from '../../components/header'
    export default {

        
        components:{
            footerCom,
            headerCom
        },

          created(){
    this.getDate();
  },

  watch: {
    good(){
        if (this.good.length == this.list.length) {
            this.checked = true
        }else{
            this.checked = false
        }
    }  
  },
  methods:{
      //删除  收藏 的切换
      qie(){
          this.flag = !this.flag
          this.fls = !this.fls
      },

      //数量加
      jia(index){
          this.$store.commit('jia',index)
      },

      //数量减
      jian(index){
          this.$store.commit('jian',index)
      },

      //删除
    del(){
        for (var i in this.good){
            for(var j in this.list){
                if(this.good[i] == this.list[j].id){
                    this.list.splice(j,1);
                }
            }
        }
    },

   
    //全选
    quan(){
        if (this.checked) {
            this.good = []
        }else{
            this.list.forEach((item)=>{
                if (this.good.indexOf(item.id == -1)) {
                    this.good.push(item.id)
                }
            })
        }
    },
    getDate(){
      // console.log(this.$http)
    //   this.$http.get('http://www.qulai.com/list')
    //       .then(res=>{
    //         //   console.log(res)

    //           this.list = res.data.data
    //       })
    }

  },

  data () {
      return {
          list:this.$store.state.arr,
          flag:false,
          fls:false,
          checked:false,
          good:[]
      }
  },
  computed: {
    total(){
        var str = 0;
        this.list.forEach((item,index)=>{
            str += item.number * item.price
        })
        return str
    }
},
    }
    </script>
    
    <style>
    .di-del{
        display: flex;
        /* display: none; */

    }
    .di-del p:nth-of-type(1){
        width: 1rem;
        height: .5rem;
        border: 1px solid red;
        color: red;
        border-radius: 35px;
        text-align: center;
        line-height: .5rem;
        margin-right: .2rem;
    }

    .di-del p:nth-of-type(2){
        width: 1rem;
        height: .5rem;
        border: 1px solid gray;
        color: gray;
        border-radius: 35px;
        text-align: center;
        line-height: .5rem;
    }
    .del{
        display: flex;
        height: .8rem;

    }
    .di-xd{
        width: 2.24rem;
        height: .7rem;
        background: #fbcd0c;
        border-radius: 35px;
        text-align: center;
        line-height: .7rem;
    }
    .di-zj{
        margin-right: -0.5rem;
        margin-top: .2rem;
    }
    .di-check{
        margin-top: .2rem;
        margin-left: -0.5rem;
    }
    .di{
        display: flex;
        justify-content: space-around;

    }
    .jia{
        display: flex;

    }

    .sp-js{
        width: 55%;
        
    }

    .aa{
        margin-left: 2.4rem;
        
    }
    .jia p:nth-of-type(2){
        margin-top: .5rem;
    }
     .jia p:nth-of-type(1){
        margin-top: .3rem;
    }

.sp-img{
width: 25%;
}

.sp-img img{
    width: 1.6rem;
    height: 1.6rem;
}
    .sp-check{
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .cont-sp{
        display: flex;
        margin-top: .4rem;
        
    }

    .cont-sl{
        width: 100%;
        height: .8rem;
        justify-content: space-between;
        align-items: center;
        display: flex;
    }

    .cont-sl p:nth-of-type(1){
        margin-left: .3rem;
        font-size: .36rem;
    }

     .cont-sl p:nth-of-type(2){

         width: 1.06rem;
         height: .46rem;
         border: 1px solid gray;
         text-align: center;
         line-height: .46rem;
        margin-right: .3rem;
        font-size: .3rem;
    }

    .cont-top{
        width: 100%;
        height: .78rem;
        background: #f2f2f2;
        display: flex;
        justify-content: space-around;
        color: gray;
        line-height: .78rem;

    }
        .header{
             width: 100%;
            height: .96rem;
             display: flex;
            font-size: 0.36rem;
           font-weight: bold; 

        }
        .header .top{
               justify-content: center;
           
            line-height: .96rem;
            
            
            }
    </style>