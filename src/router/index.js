import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/Index'
import UpdatePage from "@/UpdatePage"
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[{
        path:':id',
        component:UpdatePage
      }]
    },

  ]
})
