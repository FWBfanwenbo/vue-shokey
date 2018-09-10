import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    // 定义状态
    state: {
        getTime:function (int) {
            var date = new Date(int)
            return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
        },
        token:"",
    },

    getters:{
        getToken:state=>{
            return (state.token!=null && state.token != "")? state.token :sessionStorage.getItem("token");
        },
    },

    mutations:{
        clearToken:state=>{
            state.token="";
            sessionStorage.removeItem("token");
        },
        setToken:(state,token)=>{
            state.token = token;
            sessionStorage.setItem("token",token);
        },
    },

})

export default store