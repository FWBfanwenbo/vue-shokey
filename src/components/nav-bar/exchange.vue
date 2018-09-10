<template>
    <div class="exchage">
        <div class="wrapper-box">
            <div class="wrapper-left">
                <div class="wrapper-title">
                    <div class="title-text">金币兑换</div>
                    <div class="time">今天14:00开始</div>
                </div>
                <ul class="content">
                    <li class="activity-list">
                        <div class="c-detail">
                            <a href="" class="c-title">小苏打牙膏，亮齿 清新口气</a>
                            <div class="trail-num">
                                <div class="tn-l">今日兑换
                                     <span>1份</span>
                                </div>
                                <div class="tn-r">剩余：
                                    <span>1份</span>
                                </div>
                            </div>
                            <div class="process">
                                <div class="p-l" style="width: 250px"></div>
                            </div>
                            <div class="c-price">
                                <div class="cp-left">
                                    淘宝价：<em>8.00元</em>
                                </div>
                                <div class="cp-right">
                                    节省：<em>7元</em>
                                </div>
                            </div>
                            <div class="button-box">
                                <div class="bt-left">
                                    需：
                                    <span>1.00</span>
                                    金币
                                </div>
                                <div class="bt-right">立即领取</div>
                            </div>
                        </div>
                        <div class="activity-right">
                            <img src="https://img.xinshike.com/member/2018/0905/1809051034063520.png!2310" alt="">
                        </div>
                    </li>
                </ul>
            </div>
            <div class="wrapper-right">
                <div class="trail-title">
                    <div class="t-text">礼多多推荐试用</div>
                    <ul class="try-box">
                        <li class="try-list">
                            <a href="" class="list-link">
                                <div class="free-img">
                                    <img src="https://img.xinshike.com/member/2018/0906/1809061459037454.jpg!2310" alt="">
                                </div>
                                <div class="free-list-title">
                                    <div class="icon-taobao">
                                    </div>
                                    汽车后视镜防雨贴膜
                                </div>
                                <div class="tb-price">
                                    <div class="price-left">￥16.8</div>
                                    <div class="price-right">1677人已关注</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "exchange"
    }
</script>

<style scoped>
    .wrapper-box{
      overflow: hidden;
      margin-top: 10px;
  }
    .wrapper-left{
      float: left;
      width: 930px;
  }
    .wrapper-title{
    }
    .title-text{
        width: 100%;
        overflow: hidden;
        line-height: 30px;
        height: 30px;
        font-weight: 800;
        font-size: 18px;
        text-align: center;
    }
    .time{
        width: 100%;
        overflow: hidden;
        line-height: 30px;
        height: 30px;
        padding-bottom: 10px;
        border-bottom: 1px solid #dedede;
        margin-bottom: 20px;
        text-align: center;
        color: red;
    }
    .activity-list{
        width: 454px;
        padding: 10px;
        box-sizing: border-box;
        border: 1px solid #f2f2f2;
        float: left;
        margin-right: 20px;
        margin-bottom: 20px;
    }
    .c-detail{
        float: left;
        width: 270px;
        padding-right: 20px;
        box-sizing: border-box;
    }
    .c-title{
        font-size: 16px;
        color: #333333;
        line-height: 69px;
        height: 69px;
        width: 250px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: block;
    }
    .trail-num{
        font-size: 14px;
        color: #666666;
        overflow: hidden;
    }
    .tn-l{
        float: left;
    }
    .tn-r{
        float: right;
    }
    .process{
        width: 250px;
        background: #ededf5;
        height: 8px;
        border-radius: 4px;
        margin: 7px 0 17px 0;
        position: relative;
    }
    .p-l{
        position: absolute;
        top: 0;
        left: 0;
        width: 150px;
        height: 8px;
        background: -webkit-linear-gradient(left, #ac36ff,#f878ac);
    }
    .c-price{
        color: #666666;
        font-size: 14px;
        margin-bottom: 18px;
        overflow: hidden;
    }
    em{
        color: red;
    }
    .cp-left{
        float: left;
    }
    .cp-right{
        float: right;
    }
    .button-box{
        height: 32px;
        line-height: 32px;
        color: #333333;
        font-size: 14px;
    }
    .bt-left{
        float: left;
    }
    .bt-left span{
        color: #ff2b76;
    }
    .bt-right{
        width: 100px;
        background: #ff2b76;
        font-size: 14px;
        color: #ffffff;
        text-align: center;
        border-radius: 2px;
        cursor: pointer;
        float: right;
    }
    .activity-right{
        float: left;
        width: 133px;
        height: 200px;
        margin-left: 25px;
    }
    .activity-right img{
        width: 100%;
        height: 100%;
    }
    .wrapper-right{
        float: right;
    }
    .trail-title{
        float: right;
        padding: 0 14px;
        border: 1px solid #ededed;
    }
    .t-text{
        font-size: 16px;
        color: #333333;
        height: 43px;
        line-height: 43px;
    }
    .try-list{
        width: 222px;
        overflow: hidden;
        margin-bottom: 10px;
    }
    .list-link{
        display: block;
    }
    .free-img{
        width: 100%;
        height: 310px;
    }
    .free-img img{
        width: 100%;
        height: 100%;
    }
    .free-list-title{
        margin-top: 12px;
        font-size: 14px;
        height: 40px;
        overflow: hidden;
        color: #333;
        padding: 0 5px;
    }
    .icon-taobao{
        width: 20px;
        height: 20px;
        display: inline-block;
        margin-right: 10px;
        vertical-align: middle;
        background: url(https://www.xinshike.com/static/img/portal.png) -542px -122px no-repeat;
    }
    .tb-price{
        margin: 10px 0 13px 0;
        overflow: hidden;
        padding: 0 5px;
    }
    .price-left{
        text-decoration: line-through;
        color: #666666;
        font-size: 20px;
        float: left;
        line-height: 26px;
    }
    .price-right{
        float: right;
        font-size: 12px;
        color: #666666;
        line-height: 26px;
    }
</style>