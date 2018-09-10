<template>
    <div class="user-supper-try">
        <header class="title">我的超级实用</header>
        <div class="super-try-body">
            <ul class="tab-nav">
                <li>
                    <router-link to="/user-center/user-supperTry/all-try">全部试用</router-link>
                </li>
                <li>
                    <router-link to="/user-center/user-supperTry/continue-apply">待继续申请</router-link>
                </li>
                <li>
                    <router-link to="/user-center/user-supperTry/award">已中奖下单</router-link>
                </li>
                <li>
                    <router-link to="/user-center/user-supperTry/order-trail">待审订单</router-link>
                </li>
                <li>
                    <router-link to="/user-center/user-supperTry/await-report">等待提交试用报告</router-link>
                <li>
                    <router-link to="/user-center/user-supperTry/trail-report">待审试用报告</router-link>
                </li>
                <li>
                    <router-link to="/user-center/user-supperTry/completed">已完成</router-link>
                </li>
            </ul>
            <div class="try-view">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "user-supperTry",
        data(){
            return {
                tryOrderList:[],
                query:"超级试用"
            }
        },
        methods:{
            _selectOrder(){
                var that=this;
                this.$post('/api/FwbServer.ashx?command=selectOrder',
                  JSON.stringify({
                      query:that.query
                  })).then((res)=>{
                      console.log(res)
                  })
            }
        }
    }
</script>

<style scoped>
    .title{
        width: 100%;
        height: 63px;
        line-height: 31px;
        padding: 20px;
        box-sizing: border-box;
        font-size: 18px;
    }
    .tab-nav{
        display: block;
        border-top: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
        line-height: 42px;
        width: 100%;
        height: 42px;
    }
    .tab-nav li{
        display: inline-block;
        height: 41px;
    }
    .tab-nav li a{
        display: inline-block;
        float: left;
        margin: 12px auto;
        padding: 0px 10px;
        font-size: 13px;
        line-height: 16px;
        height: 16px;
    }
</style>