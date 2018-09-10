<template>
    <div class="account-management">
        <div class="member-info">
            <div class="photo-box"></div>
            <div class="info-box" >
                <h2 class="welcome">欢迎，{{phone}}</h2>
                <div class="level">会员等级： 普通商家</div>
                <div class="label">会员到期时间：2018-08-20 00:00:00</div>
                <div class="buy-number">购买会员</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sAdmin",
        data(){
            return {
                phone:""
            }
        },
        created(){
            this.phone=sessionStorage.seller_phone
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
        height: 90px;
        line-height: 90px;
        margin-left: 20px;
    }
    .welcome{
        display: block;
        margin: 3px 10px;
        padding: 0px;
        width: 200px;
        font-size: 14px;
        font-weight: normal;
        color: #333;
        line-height: 20px;
        height: 20px;
    }
    .buy-number{
        display: block;
        margin-top: 10px;
        width: 80px;
        padding: 0 15px;
        line-height: 24px;
        background: #FF4285;
        color: #fff;
        margin-left: 10px;
        border-radius: 2px;
    }
    .user-binding li{
        display: inline-block;
        float: left;
        line-height: 20px;
        color: #666;
        width: 180px;
        height: 20px;
    }
    .level{
        height: 20px;
        margin-top: 10px;
        line-height: 20px;
        text-align: left;
        padding-left: 10px;
    }
    .label{
        padding-left: 10px;
        margin-top: 10px;
        color: #999;
        font-size: 12px;
        line-height: 14px;
        width: 100%;
        height: 14px;
    }
</style>