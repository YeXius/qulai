import Vue from 'vue'
import App from './App.vue'
import '../public/css/reset.css'
import './untils/rem'

// import { Search } from 'mint-ui';  //按需求引入mint-ui组件
// Vue.component(Search.name, Search);  

import router from './router' //引入路由

import './mock'  //引入mock数据
import Axios from 'axios'
Vue.prototype.$http=Axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
