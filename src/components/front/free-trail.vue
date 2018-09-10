<template>
    <div class="free-trail">
        <STopBar></STopBar>
        <FSearchHeader></FSearchHeader>
        <FNavHeader></FNavHeader>
        <section-template>
            <header class="router-header">
                当前位置：
                <router-link class="router-link" to="/home">首页</router-link>
                <span>></span>
                <router-link class="router-link" to="">免费试用</router-link>
                <span>{{productList.title}}</span>
            </header>
            <div class="detail">
                <div class="detail-img">
                    <img :src="productList.imgUrl">
                </div>
                <div class="content">
                    <h1>
                        <div class="icon-img">
                            <img :src="productList.paltform" alt="">
                        </div>
                        {{productList.title}}
                    </h1>
                    <div class="seller-info">
                        试用提供
                        <span>27</span>
                        份，兑换提供
                        <span>6</span>
                        份   |   已有
                        <span>5</span>
                        人获得试用，剩余兑换
                        <span>6</span>
                        份
                    </div>
                    <div class="price-detail">
                        <div class="price">
                            活动价：&nbsp;
                            <span>￥{{productList.price}}</span>
                            &nbsp;
                            <a href="javascript:viod(0)" class="baoyou">包邮试用</a>
                        </div>
                        <div class="service">
                            <p>
                                <i></i>
                                连续
                                <span>3</span>
                                天完成申请并未中奖者，将获得
                                <em>金币奖励</em>
                            </p>
                            <p>
                                <i></i>
                                前
                                <span>10</span>
                                人从“猜你喜欢”找到宝贝，将额外获得
                                <span>0.5金币</span>
                                奖励
                            </p>
                            <p>只需9.00金币即可兑换该商品</p>
                        </div>
                    </div>
                    <div class="spec-num">
                        <span>规&nbsp;&nbsp;格:双杆60cm（免钉）</span>
                        <span>数&nbsp;&nbsp;量：{{productList.sum}}件</span>
                    </div>
                    <div class="ensure-money">
                        <i></i>
                        商家已存入总试用担保金 1323.00元，请放心试用
                    </div>
                    <div class="free-apply">
                        <a href="javascript:void(0)">免费申请</a>
                    </div>
                </div>
            </div>
        </section-template>
    </div>
</template>

<script>
    import FSearchHeader from "@/view/front/SearchHeader"
    import STopBar from "@/view/seller-components/TopBar"
    import FNavHeader from "@/view/front/NavHeader"
    import SectionTemplate from "@/view/front/SectionTem"
    import { mapGetters } from 'vuex'
    export default {
        name: "free-trail",
        components:{
            STopBar,
            FSearchHeader,
            FNavHeader,
            SectionTemplate
        },
        computed:{
            ...mapGetters([
                'productList'
            ])
        }
    }
</script>

<style scoped>
   .router-header{
       margin: 0 auto;
       line-height: 44px;
       font-size: 14px;
       width: 1200px;
       height: 44px;
       color: #666666;
   }
    .router-link{
        display: inline-block;
        line-height: 36px;
        font-size: 13px;
    }
   .router-header span{
       display: inline-block;
       margin: 0 3px;
       font-size: 13px;
       color: #333333;
   }
    .detail{
        position: relative;
        height: 438px;
    }
    .detail-img{
        float: left;
        width: 292px;
        height: 438px;
        margin-right: 40px;
    }
    .detail-img img{
        width: 100%;
        height: 100%;
    }
    .content{
        float: left;
    }
   .content h1{
       font-size: 22px;
       color: #333;
       width: 490px;
       overflow: hidden;
       text-overflow: ellipsis;
       white-space: nowrap;
       font-weight: 400;
   }
    .icon-img{
        display: inline-block;
        width: 28px;
        height: 28px;
        vertical-align: middle;
        margin-right: 8px;
    }
   .icon-img img{
       width: 28px;
       height: 28px;
   }
    .seller-info{
        height: 63px;
        line-height: 63px;
        font-size: 14px;
        color: #333333;
    }
    .seller-info span{
        color: #ff4285;
    }
    .price-detail{
        padding: 10px 0 0 10px;
        background: #fff9fc;
    }
    .price{
        font-size: 12px;
        color: #333333;
        margin-bottom: 20px;
    }
    .price span{
        font-size: 30px;
        color: #ff3b78;
    }
    .baoyou {
       font-size: 12px;
       color: #3086ff;
       width: 64px;
       height: 24px;
       line-height: 24px;
       text-align: center;
       display: inline-block;
       border: 1px solid #3086ff;
       border-radius: 2px;
       vertical-align: super;
   }
    .service{
        font-size: 14px;
    }
    .service p{
        padding-bottom: 14px;
    }
    .service p i{
        width: 18px;
        height: 18px;
        display: inline-block;
        vertical-align: middle;
        background: url(https://www.xinshike.com/static/img/portal.png) -581px -120px;
        margin-right: 10px;
    }
    .spec-num{
        font-size: 14px;
        color: #333333;
        line-height: 50px;
    }
    .spec-num span{
        margin-right: 46px;
    }
    .ensure-money{
        height: 22px;
        line-height: 22px;
        font-size: 14px;
    }
   .ensure-money i{
       display: inline-block;
       width: 20px;
       height: 27px;
       vertical-align: middle;
       background: url(https://www.xinshike.com/static/img/portal.png) -614px -117px;
       margin-right: 10px;
   }
   .free-apply{
       display: block;
       margin-top: 20px;
   }
   .free-apply a{
       display: inline-block;
       width: 130px;
       height: 34px;
       text-align: center;
       background: #ff4285;
       border: 1px solid #ff4285;
       color: #fff;
       font-size: 16px;
       line-height: 34px;
       border-radius: 2px;
       margin-left: 16px;
   }
</style>