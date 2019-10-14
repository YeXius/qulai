<template>
    <div class="hot">
        <h3>————热门推荐————</h3>

        <div class="hot-content">
                <div class="hot-content-one">
                    <img src="../../../../public/images/images/images/tuijian3.png" alt="">
                    <p>新品上线</p>
                </div>
                  <div class="hot-content-one">
                    <img src="../../../../public/images/images/images/tuijian2.png" alt="">
                    <p>折扣专区</p>
                </div>
                  <div class="hot-content-one">
                    <img src="../../../../public/images/images/images/tuijian1.png" alt="">
                    <p>热门促销</p>
                </div>
               
        </div>
    </div>
</template>

<script>
    export default {
        name:'cateHot',
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