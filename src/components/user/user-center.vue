<template>
    <div class="home">
        <STopBar></STopBar>
        <section class="logo-serach">
            <div class="iner center float">
                <div class="left">
                </div>
                <div class="serach-wrapper">
                    <div class="sereach-box">
                        <form action="">
                            <input type="text" placeholder="搜索商品" id="search-val">
                            <button type="submit" id="search-btn">搜索</button>
                        </form>
                        <div class="select-box">超级试用</div>
                    </div>
                    <ul class="option-wrapper">
                        <li v-for="item in topBar" class="option">
                            <a href="">{{item.text}}</a>
                        </li>
                    </ul>
                </div>
                <div href="" class="enter" @click="sellerEnter">商家报名入口>></div>
            </div>
        </section>
        <section class="main">
            <div class="center-wrapper clearfix">
                <div class="center-left">
                    <div class="center-group">
                        <div class="top">
                            <i class="icon-user person"></i>
                            <a href="javascript:void(0)" class="user-title">个人中心</a>
                            <span></span>
                        </div>
                        <ul>
                            <li>
                                <router-link to="/user-center/account-management" class="info-list">账号信息</router-link>
                            </li>
                            <li>
                                <a href="" class="info-list">邀请好友</a>
                            </li>
                            <li>
                                <a href="" class="info-list">分享专属二维码</a>
                            </li>
                        </ul>
                    </div>
                    <div class="center-group">
                        <div class="top">
                            <i class="icon-user try"></i>
                            <a href="javascript:void(0)" class="user-title">试用管理</a>
                            <span></span>
                        </div>
                        <ul>
                            <li>
                                <router-link to="/user-center/user-freeTry" class="info-list" >我的试用</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="center-group">
                        <div class="top">
                            <i class="icon-user try"></i>
                            <a href="javascript:void(0)" class="user-title">账号信息</a>
                            <span></span>
                        </div>
                        <ul>
                            <li>
                                <router-link to="/user-center/user-freeTry" class="info-list" >绑定淘宝账号</router-link>
                            </li>
                            <li>
                                <router-link to="/user-center/bind-account" class="info-list" >绑定体现账号</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="center-group">
                        <div class="top">
                            <i class="icon-user bankroll"></i>
                            <a href="" class="user-title">资金管理</a>
                            <span></span>
                        </div>
                        <ul>
                            <li>
                                <router-link to="/user-center/fund-management" class="info-list">资金明细</router-link>
                            </li>
                            <li>
                                <a href="" class="info-list">积分明细</a>
                            </li>
                            <li>
                                <a href="" class="info-list">提现</a>
                            </li>
                        </ul>
                    </div>
                    <div class="center-group">
                        <div class="top">
                            <i class="icon-user account"></i>
                            <a href="javascript:void(0)" class="user-title">账户信息</a>
                            <span></span>
                        </div>
                        <ul>
                            <li>
                                <router-link to="/user-center/account" class="info-list">资料设置</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="center-view">
                    <div class="view-wrapper">
                        <keep-alive>
                            <router-view></router-view>
                        </keep-alive>
                    </div>
                </div>
                <div class="center-right"></div>
            </div>
        </section>
    </div>
</template>

<script>
    import LeftSlider from  "@/view/left/Slider";
    import STopBar from "@/view/seller-components/TopBar"
    export default {
        name: "Home",
        components:{
            LeftSlider,
            STopBar
        },
        data(){
            return {
                topBar:[
                    {
                        id:0,
                        text:"锅",
                        url:""
                    },{
                        id:1,
                        text:"内衣",
                        url:""
                    },{
                        id:2,
                        text:"内裤",
                        url:""
                    },{
                        id:3,
                        text:"灯",
                        url:""
                    },{
                        id:4,
                        text:"连衣裙",
                        url:""
                    },{
                        id:0,
                        text:"睡衣",
                        url:""
                    }
                ],
                navList:[
                    {
                        id:0,
                        text:"首页",
                        url:""
                    },{
                        id:1,
                        text:"超级实用",
                        url:""
                    },{
                        id:2,
                        text:"免费实用",
                        url:""
                    },{
                        id:3,
                        text:"金币兑换",
                        url:""
                    },{
                        id:4,
                        text:"新人专享",
                        url:""
                    },{
                        id:5,
                        text:"折买卖",
                        url:""
                    },
                ],
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
                ]
            }
        },
        methods:{
            sellerEnter(){
                this.$router.push({
                    path:"/seller-enter"
                })
            }
        }
    }
</script>

<style scoped>
    .topbar{
        width: 100%;
        height: 30px;
        background: #f5f5f5;
        position: relative;
    }
    .top-nav{
        width: 1200px;
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50%,0);
        display: inline-flex;
        justify-content: space-between;
    }
    .top-nav li{
        font-size: 12px;
        line-height: 30px;
    }
    .top-nav li a{
        display: block;
        float: left;
        padding: 0 15px;
    }
    .logo-serach{
        width: 100%;
        height: 140px;
        position: relative;
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
    .float{
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
    }
    .left{
        width: 160px;
        height: 102px;
        margin: 24px 0 11px 21px;
        display: block;
        background: url(https://www.xinshike.com/static/img/logo.png) no-repeat;
        background-size: 160px 102px;
    }
    .serach-wrapper{
        width: 500px;
        height: 80px;
    }
    .sereach-box{
        position: relative;
        border: 1px solid #ff4285;
        width: 489px;
        height: 37px;
    }
    #search-val{
        border: none;
        font-size: 14px;
        line-height: 35px;
        vertical-align: middle;
        padding: 0px;
        color: #999;
        text-indent: 12px;
        width: 289px;
        height: 37px;
    }
    #search-btn{
        position: absolute;
        top: 0px;
        right: 0px;
        background-color: #ff4285;
        color: #fff;
        cursor: pointer;
        overflow: hidden;
        width: 98px;
        height: 38px;
        font-size: 14px;
        text-align: center;
    }
    .select-box{
        font-size: 14px;
        color: #333;
        position: absolute;
        top: 0;
        right: 111px;
        line-height: 37px;
        height: 37px;
        cursor: pointer;
    }
    .enter{
        border: 1px solid #ff4285;
        text-align: center;
        font-size: 16px;
        font-weight: bold;
        line-height: 54px;
        color: #ff4285;
        width: 200px;
        height: 54px;
        border-radius: 4px;
    }
    .option-wrapper{
        width: 300px;
        padding: 0 12px;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
    }
    .option{
        line-height: 40px;
        font-size: 14px;
    }
    option:nth-child(1){
        color: red;
    }
    .nav-header nav{
        float: left;
        margin-right: 300px;
    }
    .nav-header nav li{
        position: relative;
        display: inline-block;
        background-color: transparent;
        color: #e3e3e3;
        font-size: 14px;
        margin-left: 15px;
    }
    .nav-header nav li a{
        display: block;
        line-height: 37px;
    }
    .jianlou>img{
        width: 160px;
        height: 37px;
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
    .main{
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
        background: #e5e5e5;
        min-height: 748px;
        display:flex;
        flex-direction:column;
    }
    .clearfix:after {
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }
    .center-wrapper{
        position: absolute;
        width: 1200px;
        align-self:center;
    }
    .center-left{
        float: left;
        background-color: #fff;
        text-align: left;
        margin-bottom: 20px;
        border-right: 1px solid #e5e5e5;
        color: #333;
        width: 180px;
        min-height: 748px;
    }
    .center-view{
        width: 780px;
        float: left;
        background: #000;
    }
    .view-wrapper{
        background-color: #fff;
        min-height: 760px;
        width: 780px;
        z-index: 10;
    }
    .center-group{
        line-height: 24px;
        font-size: 12px;
        padding: 20px 0px;
        cursor: pointer;
        overflow: hidden;
    }
    .top{
        position: relative;
        padding-left: 20px;
        font-weight: bold;
        color: #020202;
        line-height: 20px;
    }
    .icon-user{
        display: inline-block;
        vertical-align: middle;
        margin-right: 5px;
        width: 20px;
        height: 20px;
    }
    .person{
        background: url(https://www.xinshike.com/static/images/icon-member.png) no-repeat;
    }
    .try{
        background: url(https://www.xinshike.com/static/images/icon-try.png) no-repeat;
    }
    .bankroll{
        background: url(https://www.xinshike.com/static/images/icon-money.png) no-repeat;
    }
    .account{
        background: url(https://www.xinshike.com/static/images/icon-account.png) no-repeat;
    }
    .top span{
        display: inline-block;
        float: right;
        margin-right: 16px;
        background: url(https://www.xinshike.com/static/images/dt-swoll.png) no-repeat 5px 8px;
        vertical-align: middle;
        width: 20px;
        height: 20px;
    }
    .info-list{
        position: relative;
        display: inline-block;
        margin-right: -1px;
        text-indent: 50px;
        line-height: 30px;
        width: 180px;
        height: 30px;
    }
</style>