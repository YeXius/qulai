<template>
        <div class='item'>
            <headerCom></headerCom>
            <div class="content">
                 我的内容
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
    
    <style>
    
    </style>