<template>
    <div class='header'>
        <div class='top'>
            <img src="../../../public/images/h1.jpg" alt="">
        </div>
        <div class="bot">
            <span></span>
            <div class='search'>
                <span></span>
                <input type="text" placeholder="搜索商品">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .header .top{
        width: 100%;
        height: 0.48rem;
        /* border-bottom: 1px solid #000; */
        display:flex;
    }
    .header .top img{
        width: 100%;
        height: 100%;
    }
    .header .bot{
        width: 100%;
        height: 0.96rem;
        /* border-bottom: 1px solid #000; */
        display:flex;
        align-items: center;
    }
    .header .search{
        /* border: 1px solid #000; */
        position: relative;
    }
    .header .search span{
        width: 0.38rem;
        height: 0.38rem;
        /* border: 1px solid #000; */
        display:flex;
        position: absolute;
        top:.1rem;
        left:.26rem;
        background: url('../../../public/images/h3.jpg') no-repeat scroll center;
        background-size: 100%;
    }
    .header .bot>span{
        display:flex;
        width: 1.36rem;
        height: 0.46rem;
        /* border: 1px solid #000; */
        background: url('../../../public/images/h2.jpg') no-repeat scroll center;
        background-size: 100%;
        margin: 0 .28rem;
    }
    .header input{
        width: 3.5rem;
        height: 0.6rem;
        background: #F7F7F7;
        border-radius: 50px;
        box-sizing: border-box;
        padding-left: .74rem;
        border:none;
        outline-style:none;
    }
    .header input::-webkit-input-placeholder{
        color:#BDBDBD;
    }


</style>