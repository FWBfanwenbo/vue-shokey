<template>
    <div class="seller-center">
        <STopBar></STopBar>
        <header class="header-top">
            <div class="inner inner-box">
                <a class="logo-box vertical">
                    <img src="https://img.xinshike.com/member/2017/0719/1707191457408143.png" alt="" width="266" height="41">
                </a>
                <div class="seller-text vertical">
                    <i>AA</i>
                    <div class="text">商家中心首页</div>
                </div>
            </div>
        </header>
        <main class="main">
            <section class="advert">
                <ul class="advert-box inner">
                    <li>
                        <a href="">
                            <img src="https://img.xinshike.com/member/2018/0830/1808300952117027.png" alt="">
                        </a>
                    </li>
                </ul>
            </section>
            <section class="center-view ">
                <div class="center-wrapper inner">
                    <div class="left-slider">
                        <div class="left">
                            <div class="shi-yong">
                                <router-link to="/seller-center/super-trail" class="release-trail">发布产品</router-link>
                                <span></span>
                            </div>
                            <div class="form-group">
                                <i class="icon-bind"></i>
                                <label>商家中心</label>
                                <ul>
                                    <li>
                                        <router-link to="/seller-center/sAdmin" class="a">商家首页</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/seller-center" class="a">绑定店铺</router-link>
                                    </li>

                                </ul>
                            </div>
                            <div class="form-group">
                                <i class="icon-bind"></i>
                                <label>试用管理</label>
                                <ul>
                                    <li>
                                        <router-link to="/seller-center/sFreeTry" class="a">免费试用</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/seller-center" class="a">全部订单</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/seller-center" class="a">待审订单</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/seller-center" class="a">审核通过</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/seller-center" class="a">审核未通过</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/seller-center" class="a">已上架</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/seller-center" class="a">已下架</router-link>
                                    </li>
                                    <li>
                                    <router-link to="/seller-center" class="a">已结算</router-link>
                                </li>
                                    <li>
                                        <router-link to="/seller-center" class="a">结算中</router-link>
                                    </li>
                                </ul>
                            </div>
                            <div class="form-group">
                                <i class="icon-bind"></i>
                                <label>资金管理</label>
                                <ul>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="view-wrapper">
                          <keep-alive>
                              <router-view></router-view>
                          </keep-alive>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
    import STopBar from "@/view/seller-components/TopBar"
    export default {
        name: "seller-center",
        components:{
            STopBar
        },

    }
</script>

<style scoped>
    .header-top{
        width: 100%;
        height: 90px;
        background: #fff;
        position: relative;
    }
    .logo-box{
        display: block;
        width: 266px;
        height: 90px;
        float: left;
    }
    .inner-box{
        width: 1200px;
        height: 90px;
    }
    a{
        display: block;
    }
    .seller-text{
        height: 90px;
        width: 250px;
    }
    .text{
        border-left: 1px solid #e5e5e5;
        text-indent: 25px;
        font-size: 20px;
        color: #333;
        height: 20px;
        float: left;
    }
    .main{
        width: 100%;
        height: 100%;
        background: #e5e5e5;
        padding: 12px 0;
    }
    .advert{
        width: 100%;
        height: 90px;
        position: relative;
    }
    .advert-box li a img{
        width: 1200px;
        height: 90px;
    }
    .center-view{
        width: 100%;
        margin-top: 12px;
        height: 1500px;
        background: #e5e5e5;
        position: relative;
    }
    .center-wrapper{
        width: 1200px;
    }
    .left-slider{
        float: left;
        padding-bottom: 20px;
        background-color: #fff;
        text-align: left;
        border-right: 1px solid #e5e5e5;
        color: #333;
        width: 180px;
        min-height: 1000px;
        box-sizing: border-box;
    }
    .shi-yong{
        line-height: 24px;
        font-size: 12px;
        padding: 20px 0px 0px;
    }
    .release-trail{
        display: block;
        margin: 0px auto;
        border-radius: 3px;
        border: 1px solid #FF4285;
        background-color: #FDE3ED;
        text-align: center;
        font-size: 18px;
        color: #FF4285;
        cursor: pointer;
        line-height: 46px;
        width: 140px;
        height: 46px;
        font-weight: bold;
    }
    .view-wrapper{
        float: left;
        margin-left: 15px;
        width: 1005px;
        min-height: 1600px;
        background: #fff;
    }
    .vertical{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .shi-yong span{
        display: block;
        background-color: #e5e5e5;
        margin: 20px auto 0px;
        width: 160px;
        height: 1px;
    }
    .icon-bind{
        display: inline-block;
        position: absolute;
        vertical-align: middle;
        left: 29px;
        width: 20px;
        height: 20px;
    }
    .form-group{
        line-height: 24px;
        font-size: 12px;
        padding: 20px 0px 0px;
    }
    .form-group label{
        display: inline-block;
        margin-left: 36px;
        font-size: 15px;
        font-weight: normal;
        vertical-align: middle;
        cursor: text;
    }
    .a{
        position: relative;
        display: inline-block;
        margin-right: -1px;
        font-size: 13px;
        text-indent: 58px;
        line-height: 30px;
        color: #999;
        width: 180px;
        height: 30px;
    }
</style>