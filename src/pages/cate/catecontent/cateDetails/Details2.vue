<template>
    <div class="details1">
        <div class="header">
            <h3>商品列表</h3>
            <img src="../../../../../public/images/h3.jpg" alt="">
            <input type="text" placeholder="搜索商品名称">
        </div>


        <div class="content">
            <keep-alive>
                <div class="content-one">
                    <div>
                        新品上线
                    </div>
                    <div>
                        价格
                    </div>
                    <div>
                        销量
                    </div>
                    <div>
                        新品
                    </div>
            </div>
            </keep-alive>
           
            <div class="content-two" >
                <div class="content-two-i" v-for="(item,key) in arr" :key="key">
                    <div class="content-two-i-ii">
                        <img :src="item.img" alt="">
                    </div>

                    <div class="content-two-i-uu">
                        <p >{{item.name}}</p>
                        <p class="content-two-i-uu-p1">￥{{item.price}}</p>
                        <p class="content-two-i-uu-p2">￥{{item.pricenum}}<span>已售{{item.a}}件</span></p>
                    </div>
                </div>

                 <!-- <div class="content-two-i">
                    <div class="content-two-i-ii">
                        <img src="../../../../../public/images/images/detail1.png" alt="">
                    </div>

                    <div class="content-two-i-uu">
                        <p >风衣女中长款2019秋...</p>
                        <p class="content-two-i-uu-p1">￥589.00</p>
                        <p class="content-two-i-uu-p2">￥577.22<span>已售65件</span></p>
                    </div>
                </div>


                 <div class="content-two-i s">
                    <div class="content-two-i-ii">
                        <img src="../../../../../public/images/images/detail1.png" alt="">
                    </div>

                    <div class="content-two-i-uu ">
                        <p >风衣女中长款2019秋...</p>
                        <p class="content-two-i-uu-p1">￥589.00</p>
                        <p class="content-two-i-uu-p2">￥577.22<span>已售65件</span></p>
                    </div>
                </div> -->

            </div>


            <div class="content-s">已全部加载</div>

        </div>


    </div>
</template>

<script>
    export default {
        data(){
            return{
                arr:[]
            }
        },
        created() {
            var id= this.$route.query.id;
            this.$http.get('http://localhost:8080/json/cate2.json').then((res)=>{
                 var str = res.data;
                // console.log(res.data.detail2)
                 Object.keys(str).map(item=>{
                    console.log(item)
                    if(item==id){
                        this.arr=str[item]
                    }
                })
            })
        },
    }
</script>

<style  scoped>
.header{
    width: 100%;
    height: 1.8rem;
    background: #fccb0c;
}
.content-s{
    text-align: center;
    margin-top: .4rem;
}
.header h3{
    font-size: .37rem;
    font-weight: 600;
    text-align: center;
    padding-top: .24rem;
    color: white;
}
.header input{
    width: 70%;
    height: .6rem;
    margin-top:.5rem;
    margin-left: 1.3rem;
    border: none;
    border-radius: .5rem;
    padding-left: .7rem;
    margin-left: .8rem;
}
.header img{
    width: .4rem;
    height: .4rem;
    position: absolute;
    top: 1.2rem;
    left: 1.1rem;
}
.content{
    width: 100%;
    height: auto;
}
.content .content-one{
    width: 100%;
    height: .6rem;
    /* background: aqua; */
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.content .content-one div:hover{
    color: yellow;
}
.content-two{
    width: 100%;
    height: auto;
    /* background: teal; */
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    
}
.content-two-i{
    width: 47%;
    height: 5.4rem;
    /* background: rosybrown; */
}
.content-two-i .content-two-i-ii{
    width: 100%;
    height: 3.7rem;
    /* background: chartreuse; */
}
.content-two-i .content-two-i-ii img{
    width: 100%;
    height: 100%;
}
.content-two-i-uu{
    font-size: .32rem;
    padding-left: .2rem;
    padding-top: .2rem;
}
.content-two-i-uu-p1{
    color: orange;
    margin-top: .2rem;
    font-weight: 600;
}
.content-two-i-uu-p2{
    font-size: .27rem;
    padding-top: .2rem;
}
.content-two-i-uu-p2 span{
    margin-left: .6rem;
    color: #afafaf;
}
.content-two-i:nth-of-type(3){
  margin-right: 3.75rem;
  margin-top: .5rem;
}
/* .content-two-i:nth-of-type(1){
  margin-right: 3.75rem;
  margin-top: .5rem;
} */
</style>