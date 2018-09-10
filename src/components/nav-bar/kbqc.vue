<template>
    <div class="kbqc">
        <div class="sucate">
            <div class="sucate_lists">
                <span class="all-text">商品分类：</span>
                <ul class="tabar-text">
                    <li @click="selectallbbr" class="tabbar-list">
                        <span class="tab-text" v-bind:class="{'active':nowIndex===11}">全部</span>
                    </li>
                    <router-link :to="{path:'/home/moneytry/'+list.gyid,query: {id:list.gyid}}" class="tabbar-list" v-for="list in tabbarList" :key="list.gyid">
                        <span class="tab-text" v-bind:class="{'active':nowIndex===list.gyid}">{{list.gyname}}</span>
                    </router-link>
                </ul>
            </div>
        </div>
        <main>
            <keep-alive>
                <router-view v-if="isRouterAlive" :key="$route.fullPath"></router-view>
            </keep-alive>
        </main>
    </div>
</template>

<script>
    export default {
        name: "kbqc",
        data(){
            return {
                tabbarList:[],
                type:"免费发布",
                nowIndex:11,
                isRouterAlive:true,
            }
        },
        provide(){
            return{
                reload:this.reload
            }
        },
        created(){
            this._processTabbar();
            // this._processMTry();
        },
        methods:{
            reload(){
                this.isRouterAlive = false;
                this.$nextTick(function () {
                    this.isRouterAlive = true
                })
            },
            _processTabbar(){
                this.$post("/api/seller.ashx?command=SelectType").then((res)=>{
                    let data=res.data;
                    let ret=[];
                    data.forEach((item)=>{
                        ret.push({
                            gyid:item.gyid,
                            gyname:item.gyname
                        })
                    });
                    this.tabbarList=ret;
                })
            },
            _processMTry(){
                var that=this;
                this.$post("/api/MoneyTry.ashx?command=AllMoneyTry",
                    JSON.stringify({
                        type:that.type
                    })
                ).then((res)=>{
                    console.log(res)
                })
            },
            selectallbbr(){
                this.nowIndex=11;
                this.$router.push({
                    path:`/home/moneytry/alltry`
                })
            },
        }
    }
</script>

<style scoped>
    .sucate{
        background-color: #fff;
        border: 1px solid #e5e5e5;
        overflow: hidden;
        margin-bottom: 17px;
        height: 46px;
    }
    .sucate_lists{
        display: inline-block;
        border-bottom: 1px solid #e5e5e5;
        height: 46px;
        width: 100%;
    }
    .tab-text,.all-text{
        display: inline-block;
        float: left;
        color: #333333;
        font-size: 16px;
        line-height: 46px;
        width: 123px;
        text-align: center;
        border-right: 1px solid #ededed;
        border-left: 1px solid #ededed;
        background: #f5f5f5;
    }
    .sucate_lists ul{
        display: inline-block;
        float: left;
        line-height: 46px;
        font-size: 14px;
        height: 46px;
        background: #fbfbfb;
        width: 1072px;
    }
    .tabbar-list{
        font-size: 14px;
        display: inline-block;
        width: 110px;
        color: #333333;
        text-align: center;
    }
    .tabbar-list:first-child{
        margin-right: 15px;
    }
    .active{
        color: #ff4285;
    }
</style>