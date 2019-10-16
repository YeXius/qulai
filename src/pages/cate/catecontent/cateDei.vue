<template>
    <div class="hot">
         <h3>————电子设备————</h3>

        <div class="hot-content">
                <router-link :to="'/Details2?id='+item.detail" tag="div" class="hot-content-one" v-for="(item,key) in list" :key="key">
                    <img :src="item.img" alt="">
                    <p>{{item.p}}</p>
                </router-link>
                  <!-- <div class="hot-content-one">
                    <img src="../../../../public/images/images/images/dianzi2.png" alt="">
                    <p>手机</p>
                </div> -->
                
               
        </div>
    </div>
</template>

<script>
    export default {
        name:'catcateDei',
        data(){
            return{
                list:[]
            }
        },
         created() {
           this.$http.get('http://localhost:8080/json/cate2.json').then((res)=>{
               console.log(res.data.data);
               this.list=res.data.data
           })
        },
    }
</script>

<style scoped>
h3{
    text-align: center;
    margin-top: .5rem;
}
.hot-content{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: .5rem;
}
.hot-content-one{
    width: 33%;
    height: 2rem;
    /* background: red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
.hot-content-one img{
    width: 80%;
    height: 65%;
}
.hot-content-one p{
    color: grey;
}
</style>