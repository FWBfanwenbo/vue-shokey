<template>
    <div class="search-header">
        <section class="logo-serach">
            <div class="iner center float">
                <div class="left">
                </div>
                <div class="serach-wrapper">
                    <div class="sereach-box">
                        <form action="">
                            <input type="text" placeholder="搜索商品" id="search-val">
                            <button type="submit" id="search-btn">搜索</button>
                        </form>
                        <div class="select-box">超级试用</div>
                    </div>
                </div>
                <div href="" class="enter" @click="sellerEnter">商家报名入口>></div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "SearchHeader",
        data(){
            return {
            }
        },
        methods:{
            sellerEnter(){
                this.$router.push({
                    path:"/seller-enter"
                })
            },
        }
    }
</script>

<style scoped>
    .logo-serach{
        width: 100%;
        height: 140px;
        position: relative;
    }
    .float{
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
    }
    .left{
        width: 160px;
        height: 102px;
        margin: 24px 0 11px 21px;
        display: block;
        background: url(https://www.xinshike.com/static/img/logo.png) no-repeat;
        background-size: 160px 102px;
    }
    .serach-wrapper{
        width: 500px;
        height: 80px;
    }
    .sereach-box{
        position: relative;
        border: 1px solid #ff4285;
        width: 489px;
        height: 37px;
    }
    #search-val{
        border: none;
        font-size: 14px;
        line-height: 35px;
        vertical-align: middle;
        padding: 0px;
        color: #999;
        text-indent: 12px;
        width: 289px;
        height: 37px;
    }
    #search-btn{
        position: absolute;
        top: 0px;
        right: 0px;
        background-color: #ff4285;
        color: #fff;
        cursor: pointer;
        overflow: hidden;
        width: 98px;
        height: 38px;
        font-size: 14px;
        text-align: center;
    }
    .select-box{
        font-size: 14px;
        color: #333;
        position: absolute;
        top: 0;
        right: 111px;
        line-height: 37px;
        height: 37px;
        cursor: pointer;
    }
    .enter{
        border: 1px solid #ff4285;
        text-align: center;
        font-size: 16px;
        font-weight: bold;
        line-height: 54px;
        color: #ff4285;
        width: 200px;
        height: 54px;
        border-radius: 4px;
    }
    .option-wrapper{
        width: 300px;
        padding: 0 12px;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
    }
    .option{
        line-height: 40px;
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
</style>