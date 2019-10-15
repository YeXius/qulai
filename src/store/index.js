import Vue from "vue"

import Vuex from "vuex"

// import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

export default new Vuex.Store({
    // plugins: [createPersistedState()],
    //数据
    state:{
        arr: [
            {id:1,imgs:"dadsa",name:'毒奶粉',num:1,price:100,number:1},
            {id:2,imgs:"dadsa",name:'毒奶粉',num:1,price:200,number:1},
            {id:3,imgs:"dadsa",name:'毒奶粉',num:1,price:300,number:1}
        ],
        // num:200
    },
    //定义的方法 同步
    mutations:{
        //数量添加
        jia(state,index){
           
            state.arr[index].number++
        },
        jian(state,index){
           
            if (state.arr[index].number == 0) {
                alert('不能再少了')
            }else{
                state.arr[index].number--
            }
        }
    },
    
    //计算属性
    getters:{

    },

    //异步操作
    actions:{

    }

})