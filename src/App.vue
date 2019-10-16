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
      this.$http.get('http://www.qulai.com/list').then(res=>{
              // console.log(res)
          })
    }
  }
}
</script>

<style>

</style>
