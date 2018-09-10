<template>
    <div class="set-account">
        <header class="title">设置基本资料</header>
        <div class="data-wrapper">
            <ul class="data-box">
                <li>
                    <label>昵称:</label>
                    <span>{{userInfo.phone}}</span>
                </li>
                <li>
                    <label>邮箱:</label>
                    <span style="color: red;">未验证</span>
                </li>
                <li>
                    <label>手机:</label>
                    <span>{{userInfo.phone}}</span>
                </li>
                <li>
                    <label>绑定微信</label>
                    <span style="color: red;">立即绑定</span>
                </li>
                <li>
                    <label>绑定QQ</label>
                    <span style="color: red;">立即绑定</span>
                </li>
                <li style="border-top: solid 1px #dcdcdc; margin: 30px 0px 0px 0px;"></li>
                <li class="sub-info">
                    <label>QQ号：</label>
                    <label for="qq">
                        <input type="text" name="qq" id="qq" class="long-text" v-model="qq">
                    </label>
                </li>
                <li class="sub-info">
                    <label>性别：</label>
                    <label for="sex">
                        <input type="radio" name="sex" id="sex" value="男" v-model="sex">男
                    </label>
                    <label for="sex">
                        <input type="radio" name="sex" id="sex" value="女" v-model="sex">女
                    </label>
                </li>
            </ul>
            <div class="form">
                <label></label>
                <button class="data-btn" @click="saveUserInfo">保存</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Account",
        data(){
            return {
                userInfo:{
                    nickname:"",
                    phone:"",
                    email:"",
                    QQ:"",
                    sex:""
                },
                sex:"",
                qq:""
            }
        },
        created(){
            this.userInfo.phone=sessionStorage.user_phone;
        },
        methods:{
            saveUserInfo(){
                var that=this;
                this.$post("/api/UserCenter.ashx?command=saveUserInfo",
                    JSON.stringify({
                        qq:that.qq,
                        sex:that.sex,
                        phone:that.userInfo.phone
                    })
                ).then((res)=>{
                    console.log(res)
                })
            }
        }
    }
</script>

<style scoped>
    .title{
       width: 100%;
       height: 40px;
       padding: 12px;
       box-sizing: border-box;
       font-size: 18px;
    }
    .data-wrapper{
        margin: 20px;
    }
    .data-box li{
        height: 40px;
    }
    .data-box li label{
        display: block;
        float: left;
        width: 60px;
        font-size: 14px;
        line-height: 40px;
        text-align: left;
    }
    .data-box li span{
        display: block;
        float: left;
        margin-left: 20px;
        height: 40px;
        text-align: left;
        line-height: 40px;
    }
    .sub-info{
        width: 100%;
        height: 50px;
        padding: 6px;
        box-sizing: border-box;
        margin-bottom: 20px;
    }
    .long-text{
        padding: 7px 0;
        text-indent: 10px;
        outline: none;
        margin-bottom: 14px;
        border: 1px solid #E5E5E5;
        border-radius: 2px;
        width: 200px;
    }
    .form{
        float: left;
        display: inline-block;
        padding: 0px 10px;
        line-height: 35px;
        width: 580px;
    }
    .form label{
        display: block;
        float: left;
        width: 60px;
        height: 100%;
        font-size: 14px;
        height: 40px;
        text-align: left;
    }
    .data-btn{
        display: inline-block;
        background: #3DC054;
        color: #fff;
        font-size: 12px;
        text-align: center;
        padding: 0px 20px;
        height: 32px;
        line-height: 32px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        float: left;
    }
</style>