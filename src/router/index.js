import Vue from 'vue'
import store from '../store/store'
import Router from 'vue-router'
import Home from "@/components/Home"
import Login from "@/components/Login"
import SellerEnter from "@/components/seller/seller-enter"
import SellerLogin from "@/components/seller/seller-login"
import SellerCenter from "@/components/seller/seller-center"
import SuperTrail from "@/components/seller/super-trail"
import FreeTrial from "@/components/seller/free-trial"
import UserRegister from "@/components/user/user-register"
import UserLogin from "@/components/user/user-login"
import UserCenter from "@/components/user/user-center"
import Account from "@/components/user/user-center/Account"
import AManagement from "@/components/user/user-center/account-management"
import UserFreeTry from "@/components/user/user-center/user-freeTry"
import FreeDetail from "@/components/user/user-center/free-try/free-detail"
import SAdmin from "@/components/seller/sAdmin/sAdmin"
import SFreeTry from "@/components/seller/sAdmin/sFreeTry"
import FproductDetail from "@/components/front/product-detail"
import FsuperyTrail from "@/components/front/super-trail"
import FfreeTrail from "@/components/front/free-trail"
import UFundManagement from "@/components/user/user-center/fund-management"
import UPresentRecord from "@/components/user/user-center/capitals/present-record"
import UCapital from "@/components/user/user-center/capitals/capital"
import UBindAccount from "@/components/user/user-center/account-number/bind-account"
import TBIndexPage from "@/components/nav-bar/indexpage"
import TBMoneyTry from "@/components/nav-bar/moneytry"
import TBExchange from "@/components/nav-bar/exchange"
import TBNewPeople from "@/components/nav-bar/newpeople"
import TBBecomeFamous from "@/components/nav-bar/becomefamous"
import TBPopularity from "@/components/nav-bar/popularity"
import TBKbqc from "@/components/nav-bar/kbqc"
import MTAlltry from "@/components/front/moneytry/alltry"
import MTAlltryDetail from "@/components/front/moneytry/alltry-detail"
import AllKbqc from "@/components/front/kbqc/allkbqc"
import KbqcDetail from "@/components/front/kbqc/kbqc-detail"

Vue.use(Router);

const router = new Router({
  routes: [
      {
          path:"/home",
          component:Home,
          children:[
              {
                  path:"moneytry",
                  component:TBMoneyTry,
                  redirect:"/home/moneytry/alltry",
                  children:[{
                      path:"alltry",
                      component:MTAlltry,
                  },{
                      path:":id",
                      component:MTAlltryDetail
                  },]
              },{
                  path:"exchange",
                  component:TBExchange
              },{
                  path:"newpeople",
                  component:TBNewPeople
              },{
                  path:"becomefamous",
                  component:TBBecomeFamous
              },{
                  path:"popularity",
                  component:TBPopularity
              },{
                  path:"kbqc",
                  component:TBKbqc,
                  children:[
                      {
                          path:"allkbqc",
                          component:AllKbqc
                      },{
                          path:":id",
                          component:KbqcDetail
                      }
                  ]
              },
          ]
      },
      {
         path:"/",
         redirect:"/indexpage",
         component: TBIndexPage
      },
      {
          path:"/indexpage",
          component:TBIndexPage
      },
      {
          path:'/supertrail',
          component:FsuperyTrail,
          children:[
              {
                  path:":id",
                  component:FsuperyTrail
              }
          ]
      },
      {
          path:'/freetrail',
          component:FfreeTrail,
          children:[
              {
                  path:":type",
                  component:FsuperyTrail
              }
          ]
      },
      {
          path:"/seller-enter",
          component:SellerEnter,
          children:[{
              path:"seller-login",
              component:SellerLogin
          }]
      },
      {
          path:"/seller-center",
          component:SellerCenter,
          redirect:'/seller-center/sAdmin',
          children:[
              {
                  path:"super-trail",
                  component:SuperTrail
              },{
                  path:"free-trial",
                  component:FreeTrial
              },{
                  path:"sAdmin",
                  component:SAdmin
              },{
                  path:"sFreeTry",
                  component:SFreeTry
              }

          ]
      },
      {
          path:"/user-register",
          component:UserRegister,
      },
      {
          path:"/user-login",
          component:UserLogin,
      },
      {
          path:"/user-center",
          redirect:"/user-center/account-management",
          component:UserCenter,
          children:[
              {
                  path:"account",
                  component:Account
              },{
                   path:"fund-management",
                   redirect:'/user-center/fund-management/capital',
                   component:UFundManagement,
                   children:[
                       {
                           path:"capital",
                           component:UCapital,
                       },{
                           path:"present-record",
                           component:UPresentRecord,
                       }
                   ]
              },{
                  path:"account-management",
                  component:AManagement
              },{
                  path:"bind-account",
                  component:UBindAccount
              },{
                  path:"user-freeTry",
                  component:UserFreeTry,
                  children:[
                      {
                          path:":id",
                          component:FreeDetail
                      }
                  ]
              }
          ]
      },
      {
          path:"/login",
          component:Login
      },
  ]
})
// router.beforeEach((to, from, next) => {
//     // 访问接口获取用户ID
//     if (to.path != "/login") {
//         var token = router.app.$store.getters.getToken;
//         if (!token) {
//             router.app.$router.replace({
//                 path: '/login',
//                 query: { redirect: to.fullPath }
//             });
//         }
//     }
//     next();
// });

export default router;
