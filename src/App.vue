<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    
  },
  created(){
    this.getDate();
  },
  methods:{
    getDate(){
      // console.log(this.$http)
      this.$http.get('https://www.easy-mock.com/mock/5da03fdacda1720dffee6012/list/')
          .then(res=>{
              console.log(res)
          })
    }
  }
}
</script>

<style>

</style>
