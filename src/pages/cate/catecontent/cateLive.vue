<template>
    <div class="hot">
           <h3>————生活用品————</h3>

        <div class="hot-content">
                <div class="hot-content-one">
                    <img src="../../../../public/images/images/images/shenghuo1.png" alt="">
                    <p>抽纸</p>
                </div>
                  <div class="hot-content-one">
                    <img src="../../../../public/images/images/images/shenghuo2.png" alt="">
                    <p>卫生纸</p>
                </div>
                
               
        </div>
    </div>
</template>

<script>
    export default {
        name:'cateLive',
        data(){
            return{

            }
        }
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