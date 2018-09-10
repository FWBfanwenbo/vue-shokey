<template>
  <div class="index-page">
      <STopBar></STopBar>
      <FSearchHeader></FSearchHeader>
      <div class="front-nav-headr">
          <div class="top-list">
              <header class="nav-header center iner">
                  <div class="header-left">
                      <span class="iconfont f-icon vertical">A</span>
                      <span class="f-text vertical">热门试用分类</span>
                  </div>
                  <nav class="nav-box">
                      <li @click="onBar(item)" v-for="item in navList">
                          <span >{{item.text}}</span>
                      </li>
                  </nav>
              </header>
          </div>
      </div>
      <div class="index-page">
          <section class="lunbo-wrapper">
              <div class="nav-slider" style="width: 100%;position: relative;z-index: 1000;">
                  <div class="nav-wrapper  center" style="width: 1200px;height: 37px">
                      <div class="nav-box" style="position: absolute;left: 0;top: -37px;">
                          <div class="slider-header">
                              <span class="iconfont f-icon vertical">A</span>
                              <span class="f-text vertical">热门试用分类</span>
                          </div>
                          <ul class="slider" style="padding: 5px 0;">
                              <li v-for="item in sliderList" style="height: 37px;" class="list-text">
                                  <span class="notice vertical">A</span>
                                  <div class="slider-right">
                                      <span class="title">{{item.title}}</span>
                                      <div>
                                          <div>
                                              <a href="" style="display: inline-block;" class="" v-for="list in item.contentList">{{list.lTitle}}</a>
                                          </div>
                                      </div>
                                  </div>
                              </li>
                          </ul>
                      </div>
                      <div class="banner-right">
                          <div class="user-info">
                              <div class="user-login">
                                  <div class="photo"></div>
                              </div>
                              <div class="info">
                                  <p>Hi,新试客平台欢迎您！</p>
                                  <i></i>
                              </div>
                              <div class="user-login-reg">
                                  <div @click="userLogin" class="user-login-enter user-enter vertical">试客登录</div>
                                  <router-link to="/user-register" class="user-reg user-enter vertical">试客注册</router-link>
                              </div>
                              <div class="seller-login-reg">
                                  <router-link to="/seller-enter/seller-login" class="seller-enter vertical">商家注册/登录</router-link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="swiper">
                  <div class="banner">
                      <div class="cast-point">
                          <div class="swiper-container">
                              <swiper :options="swiperOption" ref="mySwiper" class="swiper-wrapper">
                                  <swiper-slide class="swiper-slide" v-for="list in IMgList">
                                      <img :src="list.imgUrl" alt="">
                                  </swiper-slide>
                                  <div class="swiper-pagination"  slot="pagination" v-for="list in IMgList.length"></div>
                              </swiper>
                              </div>
                          </div>
                      </div>
                  </div>
          </section>
          <section style="height: 934px;" class="section free-top">
              <div class="container">
                  <header class="section-header">
                      <div class="title-box">
                          <div class="title-left">
                              <h3>推荐试用</h3>
                              <span>每日精选推荐</span>
                          </div>
                          <div class="title-right">
                              <i class="change-icon"></i>
                              <span>换一批</span>
                          </div>
                      </div>
                  </header>
                  <div class="trail-product-wrapper">
                      <ul class="product">
                          <li v-for="list in freeList">
                              <div class="img-box">
                                  <img :src="list.imgUrl" alt="">
                              </div>
                              <div class="product-title">
                                  <div class="release-icon">
                                      <img :src="list.paltform" alt="">
                                  </div>
                                  {{list.title}}
                              </div>
                              <div class="price-box">
                                  <div class="left-price">￥{{list.price}}</div>
                                  <div class="right-price">3333人已关注</div>
                              </div>
                              <div class="btn-box" @click="enterProduct(list)">
                                  <span>{{list.type}}</span>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
          </section>
      </div>
  </div>
</template>

<script>
    import {mapMutations} from 'vuex';
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import STopBar from "@/view/seller-components/TopBar"
    import FSearchHeader from "@/view/front/SearchHeader"
    export default {
        name: "indexpage",
        components:{
            STopBar,
            FSearchHeader,
            swiper,
            swiperSlide
        },
        data(){
            return {
                sliderList:[
                    {
                        id:0,
                        icon:"",
                        title:"流行女装",
                        contentList:[{
                            lid:"l_0",
                            lTitle:"羽绒服/",
                            url:""
                        },{
                            lid:"l_1",
                            lTitle:"呢外套/",
                            url:""
                        },{
                            lid:"l_2",
                            lTitle:"毛衣",
                            url:""
                        },]
                    },
                    {
                        id:0,
                        icon:"",
                        title:"流行女装",
                        contentList:[{
                            lid:"l_0",
                            lTitle:"羽绒服",
                            url:""
                        },{
                            lid:"l_1",
                            lTitle:"呢外套",
                            url:""
                        },{
                            lid:"l_2",
                            lTitle:"毛衣",
                            url:""
                        },]
                    },
                    {
                        id:0,
                        icon:"",
                        title:"流行女装",
                        contentList:[{
                            lid:"l_0",
                            lTitle:"羽绒服",
                            url:""
                        },{
                            lid:"l_1",
                            lTitle:"呢外套",
                            url:""
                        },{
                            lid:"l_2",
                            lTitle:"毛衣",
                            url:""
                        },]
                    },
                    {
                        id:0,
                        icon:"",
                        title:"流行女装",
                        contentList:[{
                            lid:"l_0",
                            lTitle:"羽绒服",
                            url:""
                        },{
                            lid:"l_1",
                            lTitle:"呢外套",
                            url:""
                        },{
                            lid:"l_2",
                            lTitle:"毛衣",
                            url:""
                        },]
                    },
                    {
                        id:0,
                        icon:"",
                        title:"流行女装",
                        contentList:[{
                            lid:"l_0",
                            lTitle:"羽绒服",
                            url:""
                        },{
                            lid:"l_1",
                            lTitle:"呢外套",
                            url:""
                        },{
                            lid:"l_2",
                            lTitle:"毛衣",
                            url:""
                        },]
                    },
                    {
                        id:0,
                        icon:"",
                        title:"流行女装",
                        contentList:[{
                            lid:"l_0",
                            lTitle:"羽绒服",
                            url:""
                        },{
                            lid:"l_1",
                            lTitle:"呢外套",
                            url:""
                        },{
                            lid:"l_2",
                            lTitle:"毛衣",
                            url:""
                        },]
                    },
                    {
                        id:0,
                        icon:"",
                        title:"流行女装",
                        contentList:[{
                            lid:"l_0",
                            lTitle:"羽绒服",
                            url:""
                        },{
                            lid:"l_1",
                            lTitle:"呢外套",
                            url:""
                        },{
                            lid:"l_2",
                            lTitle:"毛衣",
                            url:""
                        },]
                    },
                    {
                        id:0,
                        icon:"",
                        title:"流行女装",
                        contentList:[{
                            lid:"l_0",
                            lTitle:"羽绒服",
                            url:""
                        },{
                            lid:"l_1",
                            lTitle:"呢外套",
                            url:""
                        },{
                            lid:"l_2",
                            lTitle:"毛衣",
                            url:""
                        },]
                    },
                ],
                navList:[
                    {
                        id:0,
                        text:"首页",
                        url:"/indexpage"
                    },{
                        id:1,
                        text:"免费实用",
                        url:"/home/moneytry"
                    },{
                        id:2,
                        text:"金币兑换",
                        url:"/home/exchange"
                    },{
                        id:3,
                        text:"新人必中",
                        url:"/home/newpeople"
                    },{
                        id:4,
                        text:"一战成名",
                        url:"/home/becomefamous"
                    }, {
                        id: 5,
                        text: "人气赚金币",
                        url:"/home/popularity"
                    },{
                        id:5,
                        text:"亏本清仓",
                        url:"kbqc"
                    }
                ],
                freeList:[],
                searchType:"免费发布",
                IMgList:[
                    {
                        id:0,
                        imgUrl:"https://img.xinshike.com/member/2018/0906/180906164254867.png"
                    },
                    {
                        id:1,
                        imgUrl:"https://img.xinshike.com/member/2018/0907/1809071121029611.png"
                    },
                    {
                        id:2,
                        imgUrl:"https://img.xinshike.com/member/2018/0808/180808173931216.png"
                    },
                ],
                swiperOption:{
                    autoplay: {
                        delay: 3000,
                        stopOnLastSlide: false,
                        disableOnInteraction: true,
                    },
                    loop : true,
                    preventClicks : true,
                    pagination:{
                        el: '.swiper-pagination',
                        clickable :true,
                    },

                    notNextTick: true,
                }
            }
        },
        created(){
            this._chooseProduct()
        },
        methods:{
            userLogin(){
                if(sessionStorage.user_phone){
                    this.$router.push({
                        path:'/user-center'
                    })
                }else{
                    this.$router.push({
                        path:"/user-register"
                    })
                }
            },
            _chooseProduct(){
                var that=this;
                this.$post("/api/HomeServer.ashx?command=FreeProduct",
                    JSON.stringify({
                        search:that.searchType
                    })
                ).then((res)=>{
                    var data=res.data;
                    data.forEach((item)=>{
                        this.freeList.push({
                            imgUrl:item.imgUrl,
                            title:item.name,
                            price:item.price,
                            type:"免费试用",
                            sum:item.sum,
                            paltform:item.paltform,
                            pid:item.pid,
                            integral:item.integral,
                            gold:item.gold
                        })
                    })
                })
            },
            onBar(obj){
                console.log(obj.url)
                this.$router.push({
                    path:`${obj.url}`
                })
            },
            enterProduct(list){
                this.setProList(list);
                this.$router.push({
                    path:`/freetrail/${list.pid}`
                })
            },
            ...mapMutations({
                setProList:'SET_PRODUCT_LIST'
            })
        },
        mounted(){
        },
    }
</script>

<style scoped>
    .top-nav li{
        font-size: 12px;
        line-height: 30px;
    }
    .top-nav li a{
        display: block;
        float: left;
        padding: 0 15px;
    }
    .center{
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50%,0);
    }
    option:nth-child(1){
        color: red;
    }
    .lunbo-wrapper{
        width: 100%;
        height: 469px;
        position: relative;
    }
    .swiper{
        width: 919px;
        height: 469px;
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50%,0);
    }
    .slider-header{
        width: 197px;
        padding: 0 33px;
        z-index: 100;
        height: 37px;
    }
    .swiper-slide{
        cursor: pointer;
    }
    .f-icon{
        height: 37px;
        float: left;
        margin-right: 10px;
        font-size: 18px;
        color:#fff;
    }
    .f-text{
        height: 37px;
        font-size: 18px;
        color:#fff;
        float: left;
    }
    .notice{
        width: 52px;
        float: left;
    }
    .slider{
        background: #fff;
        width: 196px;
    }
    .slider-right{
        width: 143px;
        float: right;
    }
    .list-text{
        padding: 3px 0;
        font-size: 13px;
        color: #666666;
    }
    .banner{

    }
    .img-box{

    }
    .img-list a{
        display: inline-block;
        z-index: 2;
        background-size: 100%;
        margin-left: 200px;
        margin-top: 1px;
    }
    .img-list a img{
        width: 100%;
        display: block;
        margin: 0 auto;
        transform: scaleX(1) scaleY(1);
    }
    .banner-right{
        position: absolute;
        left: 50%;
        top: 1px;
        width: 250px;
        background: #fff;
        padding: 0 10px;
        box-sizing: border-box;
        margin-left: 350px;
    }
    .user-info{
        display: block;
    }
    .user-login{
        width: 100%;
        height: 93px;
        padding: 18px 0;
        font-size: 12px;
        color: #333333;
        box-sizing: border-box;
        position: relative;
    }
    .photo{
        width: 60px;
        height: 60px;
        background: #f5f5f5;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    .info{
        text-align: center;
        margin-bottom: 15px;
    }
    .user-login-reg{
        height: 30px;
    }
    .user-login-enter{
        float: left;
        color: #ff4285;
        margin-left: 10px;
        border: 1px solid #ff4285;
    }
    .user-enter{
        width: 95px;
        height: 28px;
        display: block;
        line-height: 28px;
        border-radius: 2px;
        text-align: center;
    }
    .user-reg{
        float: right;
        background: #fff;
        color: #ff4285;
        border: 1px solid #ff4285;
        margin-right: 10px;
    }
    .seller-enter{
        display: block;
        width: 210px;
        height: 28px;
        line-height: 28px;
        text-align: center;
        font-size: 14px;
        color: #ff4285;
        border: 1px solid #ff4285;
        margin: 15px auto 15px;
        border-radius: 2px;
    }
    .section{
        width: 100%;
        position: relative;
        background: #e5e5e5;
    }
    .container{
        width: 1200px;
        position: absolute;
        background: #fff;
        left: 50%;
        top: 0;
        transform: translate(-50%,0);
    }
    .section-header{
        height: 40px;
        width: 100%;
        overflow: hidden;
    }
    .free-top{
        padding-top: 40px;
    }
    .title-box{
    }
    .title-left{
        float: left;
    }
    .title-left h3{
        font-size: 22px;
        display: inline-block;
        margin-right: 12px;
    }
    .title-left span{
        font-size: 14px;
        font-weight: 400;
    }
    .title-right{
        float: right;
    }
    .change-icon{
        display: inline-block;
        width: 26px;
        height: 26px;
        background: url(https://www.xinshike.com/static/img/portal.png) -161px -57px no-repeat;
        vertical-align: middle;
    }
    .trail-product-wrapper{
        overflow: hidden;
    }
    .product li{
        width: 232px;
        height: 457px;
        overflow: hidden;
        padding: 4px;
        box-sizing: border-box;
        border: 1px solid #f2f2f2;
        float: left;
        margin-right: 10px;
        margin-bottom: 10px;
    }
    .product li:nth-child(5n){
        margin-right: 0;
    }
    .img-box{
        display: block;
        position: relative;
    }
    .img-box img{
        width: 100%;
        height: 100%;
    }
    .product-title{
        margin-top: 12px;
        font-size: 14px;
        color: #333;
        padding: 0 5px;
        height: 39px;
        box-sizing: border-box;
        overflow: hidden;
    }
    .release-icon{
        width: 20px;
        height: 20px;
        display: inline-block;
        margin-right: 10px;
        vertical-align: middle;
    }
    .release-icon img{
        width: 18px;
        height: 18px;
    }
    .price-box{
        margin: 10px 0 13px 0;
        overflow: hidden;
        padding: 0 5px;
    }
    .left-price{
        text-decoration: line-through;
        color: #666666;
        font-size: 20px;
        float: left;
        line-height: 26px;
    }
    .right-price{
        float: right;
        font-size: 12px;
        color: #666666;
        line-height: 26px;
    }
    .btn-box{
        padding: 0 5px;
        cursor: pointer;
    }
    .btn-box span{
        text-align: center;
        display: block;
        width: 100%;
        line-height: 26px;
        height: 26px;
        font-size: 14px;
        color: #ff4285;
        border: 1px solid #ff4285;
        border-radius: 4px;
    }
    .top-list{
        width: 100%;
        height: 37px;
        position: relative;
    }
    .nav-header{
        height: 37px;
    }
    .header-left{
        width: 197px;
        height: 37px;
        padding: 0 33px;
        box-sizing: border-box;
        background: red;
        float: left;
        position: relative;
    }
    .nav-header nav{
        float: left;
        margin-right: 300px;
    }
    .nav-header nav li{
        position: relative;
        display: inline-block;
        background-color: transparent;
        font-size: 14px;
        margin-left: 15px;
    }
    .nav-header nav li span{
        display: block;
        line-height: 37px;
    }
    .iner{
        width: 1200px;
    }
    .right{
        float: right;
    }
    .jianlou{
        float: left;
        width: 160px;
        height: 37px;
    }
    .jianlou>img{
        width: 160px;
        height: 37px;
    }
    .seller{
        margin-left: 20px;
        float: left;
        height: 37px;
        font-size: 14px;
    }
    .user{
        float: left;
        height: 37px;
        margin-left: 20px;
        font-size: 14px;
    }
    .center{
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50%,0);
    }
    .iner{
        width: 1200px;
    }
    .f-icon{
        height: 37px;
        float: left;
        margin-right: 10px;
        font-size: 18px;
        color:#fff;
    }
    .f-text{
        height: 37px;
        font-size: 18px;
        color:#fff;
        float: left;
    }
    .vertical{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>