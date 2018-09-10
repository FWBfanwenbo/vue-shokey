<template>
    <div class="alltry-detail">
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
                        <li v-for="list in singleTrylist">
                            <div class="img-box">
                                <img :src="list.imgUrl" alt="">
                            </div>
                            <div class="bottom">
                                <div class="product-title">
                                    <div class="release-icon">
                                        <img :src="list.paltform" alt="">
                                    </div>
                                    {{list.title}}
                                </div>
                                <div class="price-box">
                                    <div class="left-price">下单价￥{{list.price}}</div>
                                    <div class="right-price">返还￥{{list.price}}</div>
                                </div>
                                <div class="bottom-bottom">
                                    <span class="b-price">￥0.00</span>
                                    <div class="btn-box" @click="enterProduct(list)">
                                        <span>{{list.type}}</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "alltry-detail",
        data(){
            return {
                typeid:this.$route.query.id,
                singleTrylist:[]
            }
        },
        created(){
            this._processSingle();
        },
        methods:{
            _processSingle(){
                var that=this;
                this.$post("/api/MoneyTry.ashx?command=SingleType",
                  JSON.stringify({
                      typeid:that.typeid
                  })
                ).then((res)=>{
                    var data=res.data;
                    var ret=[];
                    data.forEach((item)=>{
                        ret.push({
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
                    that.singleTrylist=ret;
                })
            }
        }
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
    option:nth-child(1){
        color: red;
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
        position: relative;
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
    .bottom{
        width: 232px;
        padding: 8px;
        box-sizing: border-box;
        position: absolute;
        left: 0;
        bottom: 10px;
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
    .left-price,.right-price{
        color: #666666;
        font-size: 12px;
        float: left;
        line-height: 26px;
    }
    .right-price{
        float: right;
    }
    .b-price{
        float: left;
        float: left;
        font-size: 20px;
        color: #ff4285;
    }
    .btn-box{
        float: right;
        padding: 0 5px;
        cursor: pointer;
    }
    .btn-box span{
        float: right;
        font-size: 14px;
        width: 111px;
        height: 26px;
        text-align: center;
        line-height: 26px;
        color: #ff4285;
        border: 1px solid #ff4285;
        border-radius: 4px;
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
    .jianlou>img{
        width: 160px;
        height: 37px;
    }
</style>