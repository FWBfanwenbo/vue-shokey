<template>
    <header class="topbar" ref="topbar">
        <ul class="top-nav" ref="libox">
            <li>
                <div @click="toHome" class="home">新试客首页</div>
                <div class="router-seller" @click="gotoSeller">商家中心</div>
            </li>
            <li style="float: left;margin-left: 200px;"  class="helpbox">
                <div class="help-center" style="float: left;">
                    <a href="" style="padding-right: 10px;">帮主中心</a>
                    <a href="" style="padding-right: 10px;">邀请好友 <em class="i">奖励3000元</em></a>
                </div>
                <div class="help-center" style="float: right;" v-show="noseller">
                    <a href="" style="padding-left: 10px;border-left: 1px solid #f5f5f5">
                        注册商家
                        <span style="color: #ff4285">注册即送会员（免费发活动）！！</span>
                    </a>
                </div>
            </li>
            <li style="float: right;" class="try_user" v-show="nouser">
                <router-link to="/user-login">试客登录</router-link>
                <router-link to="/user-register" >试客注册</router-link>
            </li>
            <li class="userphone" style="float: right;width: 520px;" v-show="yesuser">
                <div class="user-left" style="float: left;">
                    <router-link to="/user-center" class="username">
                        <span class="user-text"><b>{{username}}</b></span>
                        <i class="icon-sanjiao"></i>
                    </router-link>
                    <div class="out-box">
                        <div class="out-user" @click="outUser">
                            <span class="out-text">退&nbsp;&nbsp;出</span>
                        </div>
                        <div class="out-user">
                            <span class="out-text">中&nbsp;&nbsp;奖</span>
                        </div>
                    </div>
                </div>
                <div class="user-right" style="float: right;">
                    <a href="">
                        消息提醒
                    <b style="color: red;">(0)</b>
                    </a>
                </div>
            </li>
            <li class="topbar-right" v-show="yesseller">
                <span>您好，18990828699</span>
                <i></i>
                <a>普通商家</a>
                <span @click="outseller">退出</span>
            </li>
        </ul>
    </header>
</template>

<script>
    export default {
        name: "top-bar",
        data(){
             return {
                 nouser:true,
                 username:"",
                 yesuser:false,
                 noseller:false,
                 yesseller:false
             }
        },
        created(){

        },
        methods:{
            gotoSeller(){
                if(sessionStorage.seller_phone){
                    this.$router.push({
                        path:"/seller-center"
                    })
                }else{
                    this.$router.push({
                        path:"/seller-enter/seller-login"
                    })
                }
            },
            toHome(){
                this.$router.push({
                    path:"/indexpage"
                })
            },
            _ProcessingPath(){
                let path=this.$route.path;
                let seller=this.$refs.topbar.getElementsByClassName("router-seller")[0];
                let li=this.$refs.libox.getElementsByClassName("helpbox")[0];
                console.log(li)
                let home=this.$refs.topbar.getElementsByClassName("home")[0];
                if(/seller-/.test(path)){
                    seller.style.background="#FF4285";
                    seller.style.color="#fff";
                    home.style.background="#e5e5e5";
                }
                if(sessionStorage.user_phone && /user-center/.test(path)){
                    seller.style.background="#e5e5e5";
                    home.style.background="#FF4285";
                    home.style.color="#fff";
                    this.yesuser=true;
                    this.noseller=false
                    this.nouser=false
                }
                if(/seller-enter/.test(path)){
                    this.noseller=true;
                }
                if(sessionStorage.seller_phone && /seller-center/.test(path)){
                    this.yesseller=true;
                    this.yesuser=false;
                    this.nouser=false
                }
            },
            outUser(){
                sessionStorage.removeItem("user_phone");
                this.$router.push({
                    path:"/indexpage"
                })
            },
            outseller(){
                sessionStorage.removeItem("seller_phone");
                this.$router.push({
                    path:"/seller-enter/seller-login"
                })
            }
        },
        mounted(){
            this.username=sessionStorage.user_phone;
            this._ProcessingPath()
        }
    }
</script>

<style scoped>
    .topbar{
        width: 100%;
        height: 30px;
        background: #e5e5e5;
        position: relative;
        z-index: 9999;
    }
    .top-nav{
        width: 1200px;
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50%,0);
    }
    .top-nav li{
        font-size: 12px;
        line-height: 30px;
        cursor: pointer;
    }
    .home{
        display: block;
        float: left;
        padding: 0 15px;
    }
    .router-seller{
        display: block;
        float: left;
        padding: 0 15px;
    }
    .try_user a{
        padding: 0px 5px;
        color: #ff4285;
    }
    .user-text{
        color: #ff4285;
        font-size: 12px;
        font-weight: bold;
        padding: 0 5px;
    }
    .icon-sanjiao{
        display: inline-block;
        height: 0;
        line-height: 0;
        width: 0;
        vertical-align: middle;
        border-width: 4px;
        border-style: solid;
        margin-left: 4px;
        border-color: #999 #e5e5e5 #e5e5e5 #e5e5e5;
    }
    .user-left{
        position: relative;
    }
    .username{
        height: 30px;
        display: block;
        padding: 0 10px;
        transition: all 0.5s ease;
    }
    .username:hover{
        transition: all 0.5s ease;
        background: #fff;
    }
    .username:hover .icon-sanjiao{
        transform:rotate(180deg);
        transition: all 0.5s ease;
        border-color: #999 #fff #fff #fff;
    }
    .user-left:hover .out-box{
        display: block;
    }
    user-right a{
        padding: 0 5px;
    }
    .out-box{
        position: absolute;
        left: 0;
        top: 30px;
        width: 140px;
        height: 100px;
        padding: 12px 6px;
        box-sizing: border-box;
        border:1px solid #f5f5f5;
        background: #fff;
        display: none;
        z-index: 100;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,0.3);
    }
    .out-user{
        height: 30px;
        width: 73px;
        padding: 2px 2px 2px 2px;
        border-top: 1px dashed #e5e5e5;
        border-bottom: 1px dashed #e5e5e5;
        text-align: left;
    }
    .out-text{
        padding: 5px 20px;
        border-radius: 2px;
    }
    .out-user:hover .out-text{
        background: red;
        color: #fff;
    }
    .out-user:nth-child(2n){
        border-top: 0;
    }
    .topbar-right{
        float: right;
        width: 320px;
    }
    .topbar-right a{
        padding: 0px 5px;
        color: #666;
    }
    .topbar-right i{
        width: 20px;
        height: 20px;
        display: inline-block;
        background: url(https://seller.xinshike.com/static/images/vip-normal-small.png) no-repeat;
        vertical-align: middle;
    }
</style>