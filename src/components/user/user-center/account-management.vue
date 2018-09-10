<template>
    <div class="account-management">
         <div class="member-info">
             <div class="photo-box"></div>
             <div class="info-box">
                 <div class="user-identity">
                     <h2 class="welcome">欢迎，{{phone}}</h2>
                     <div class="identity-img"></div>
                     <div class="buy-number">购买会员</div>
                 </div>
                 <div class="user-binding">
                     <ul class="bind-box">
                         <li>
                             账户安全
                             <a href="" class="go-page">[安全中心]</a>
                         </li>
                         <li>
                             微信：未绑定
                             <a href="" class="go-page">[去绑定]</a>
                         </li>
                         <li>手机：{{phone}}</li>
                     </ul>
                 </div>
             </div>
         </div>
    </div>
</template>

<script>
    export default {
        name: "account-management",
        data(){
            return {
                phone:""
            }
        },
        created(){
            this.phone=sessionStorage.user_phone
        }
    }
</script>

<style scoped>
    .member-info{
        margin: 0px 20px;
        padding: 20px 0px;
        border-bottom: 1px solid #f2f2f2;
        height: 100px;
        font-size: 14px;
        color: #333;
    }
    .photo-box{
        vertical-align: middle;
        border-radius: 80px;
        width: 80px;
        height: 80px;
        background: #e5e5e5;
        float: left;
    }
    .info-box{
        float: left;
        line-height: 90px;
        margin-left: 20px;
    }
    .welcome{
        display: inline-block;
        margin: 3px 0px;
        padding: 0px;
        font-size: 14px;
        float: left;
        font-weight: normal;
        color: #333;
        line-height: 20px;
        height: 20px;
    }
    .identity-img{
        width: 80px;
        height: 24px;
        float: left;
        display: block;
        background: url(https://www.xinshike.com/static/images/vip.png) -99px -6px no-repeat;
        margin-left: 10px;
    }
    .buy-number{
        display: block;
        float: left;
        padding: 0 15px;
        line-height: 24px;
        background: #FF4285;
        color: #fff;
        margin-left: 10px;
        border-radius: 2px;
    }
    .user-binding{
        display: inline-block;
        width: 100%;
        height: 20px;
    }
    .user-binding li{
        display: inline-block;
        float: left;
        line-height: 20px;
        color: #666;
        width: 180px;
        height: 20px;
    }
    .go-page{
        color: red;
    }
</style>