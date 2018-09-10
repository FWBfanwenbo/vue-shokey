<template>
    <div class="fund-management">
        <div class="management-title">
           <h2>我的资金明细</h2>
            <div class="time-selection">
                <form>
                    <span class="selected-time">时间选择：</span>
                    <div class="order-list-option start">
                        <VdatePicker @on-change="getStartDate"></VdatePicker>
                    </div>
                       <span class="line"></span>
                    <div class="order-list-option end">
                        <VdatePicker @on-change="getEndDate"></VdatePicker>
                    </div>
                    <input type="button" value="确定" class="time-btn">
                </form>
            </div>
        </div>
        <div class="details">
            <ul class="detail">
               <router-link tag="li" to="/user-center/fund-management/capital">
                   <span class="active-text">资金明细</span>
               </router-link>
               <router-link tag="li" to="/user-center/fund-management/present-record">
                   <span class="active-text">提现记录</span>
               </router-link>
            </ul>
        </div>
        <div class="capital">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    import VdatePicker from "@/components/user/user-center/capitals/datepicker"
    export default {
        name: "fund-management",
        components:{
            VdatePicker
        },
        data(){
            return {
                startDate:"",
                endDate:"",
            }
        },
        methods:{
            getStartDate(date){
                this.startDate=date
            },
            getEndDate(date){
                this.endDate=date
            },
        }
    }
</script>

<style scoped>
    .fund-management{
        padding: 6px 15px;
        box-sizing: border-box;
    }
   .management-title{
       display: inline-block;
       font-weight: normal;
       margin: 20px 0;
       line-height: 32px;
       width: 100%;
       height: 60px;
   }
    .management-title h2{
        width: 200px;
        float: left;
    }
    .time-selection{
        float: right;
        position: relative;
    }
    .detail{
        display: block;
        border-top: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
        line-height: 42px;
        width: 100%;
        height: 42px;
    }
   .detail li{
       height: 41px;
       float: left;
   }
    .router-link-active{
        height: 41px;
        border-bottom: 2px solid #FF4285;
        color: #FF4285;
    }
    .active-text{
        display: inline-block;
        float: left;
        margin: 12px auto;
        padding: 0 10px;
        font-size: 13px;
        line-height: 16px;
        height: 16px;
    }
    .start{
        position: absolute;
        right: 65px;
        top: 10px;
    }
    .end{
        position: absolute;
        right: -44px;
        top: 10px;
    }
    .line{
        width: 10px;
        height: 1px;
        background: #000;
        position: absolute;
        right: 200px;
        top: 27px;
    }
    .selected-time{
        position: absolute;
        left: -365px;
        top: 12px;
        width: 65px;
    }
    .time-btn{
        position: absolute;
        right: 28px;
        top: 20px;
        width: 30px;
    }
</style>