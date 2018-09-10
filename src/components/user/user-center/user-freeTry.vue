<template>
    <div class="user-free-try">
        <header class="title">我的试用</header>
        <div class="super-try-body">
            <ul class="tab-nav">
                <li v-for="list in routerList">
                    <span @click="selectRouter(list)">{{list.text}}</span>
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
    import {mapMutations} from 'vuex'
    export default {
        name: "user-freeTry",
        data(){
            return {
                routerList:[
                    {
                        id:0,
                        text:"全部试用",
                        status:"全部"
                    },{
                        id:1,
                        text:"待通过",
                        status:"待通过"
                    },{
                        id:2,
                        text:"待填订单号",
                        status:"待填订单号"
                    },{
                        id:3,
                        text:"订单号错误",
                        status:"订单号错误"
                    },{
                        id:4,
                        text:"待收货",
                        status:"待收货"
                    },{
                        id:5,
                        text:"已收货评价待确认",
                        status:"已收货评价待确认"
                    },{
                        id:6,
                        text:"已完成",
                        status:"已完成"
                    },
                ],
                tableData:[]
            }
        },
        methods:{
            selectRouter(item){
                var that=this;
                var ret=[];
                this.$post("/api/UserCenter.ashx?command=SelectFree",
                 JSON.stringify({
                     status:item.status,
                     query:"免费试用"
                 })
                ).then((res)=>{
                    var data=res.data;
                    data.forEach((item)=>{
                        ret.push({
                            activity:item.activity,
                            price:item.price,
                            return_money:"",
                            status:item.status,
                            wangwang:sessionStorage.user_phone,
                            operate:""
                        })
                    })
                })
                this.setTrylist(ret);
                this.$router.push({
                    path:`/user-center/user-freeTry/${item.id}`
                });
            },
            ...mapMutations({
                setTrylist:'SET_TRYLIST'
            })
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
    .tab-nav li span{
        display: inline-block;
        float: left;
        margin: 12px auto;
        padding: 0px 10px;
        font-size: 13px;
        line-height: 16px;
        height: 16px;
    }
</style>