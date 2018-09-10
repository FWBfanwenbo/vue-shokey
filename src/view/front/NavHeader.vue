<template>
    <div class="front-nav-headr">
        <div class="top-list">
            <header class="nav-header center iner">
                <div class="header-left">
                    <span class="iconfont f-icon vertical">A</span>
                    <span class="f-text vertical">热门试用分类</span>
                </div>
                <nav class="nav-box">
                    <li @click="onBar(item)" v-for="item in navList">
                        <a href="">{{item.text}}</a>
                    </li>
                </nav>
            </header>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavHeader",
        data(){
            return {
                navList:[
                    {
                        id:0,
                        text:"首页",
                        url:"/"
                    },{
                        id:1,
                        text:"免费实用",
                        url:"/moneytry"
                    },{
                        id:2,
                        text:"金币兑换",
                        url:"/exchange"
                    },{
                        id:3,
                        text:"新人必中",
                        url:"/newpeople"
                    },{
                        id:4,
                        text:"一战成名",
                        url:"/becomefamous"
                    }, {
                        id: 5,
                        text: "人气赚金币",
                        url:"/popularity"
                    },{
                        id:5,
                        text:"亏本清仓",
                        url:"/kbqc"
                    }
                ],
            }
        },
        methods:{
            onBar(obj){
                this.$router.push({
                    path:`/${obj.url}`
                })
            }
        }
    }
</script>

<style scoped>
    .top-list{
        width: 100%;
        height: 37px;
        position: relative;
    }
    .nav-header{
        height: 37px;
    }
    .header-left{
        width: 197px;
        height: 37px;
        padding: 0 33px;
        box-sizing: border-box;
        background: red;
        float: left;
        position: relative;
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
    .iner{
        width: 1200px;
    }
    .right{
        float: left;
    }
    .jianlou{
        float: left;
        width: 160px;
        height: 37px;
    }
    .jianlou>img{
        width: 160px;
        height: 37px;
    }
    .seller{
        margin-left: 20px;
        float: left;
        height: 37px;
        font-size: 14px;
    }
    .user{
        float: left;
        height: 37px;
        margin-left: 20px;
        font-size: 14px;
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
    .f-icon{
        height: 37px;
        float: left;
        margin-right: 10px;
        font-size: 18px;
        color:#fff;
    }
    .f-text{
        height: 37px;
        font-size: 18px;
        color:#fff;
        float: left;
    }
    .vertical{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>