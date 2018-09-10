<template>
    <div class="seller-enter">
        <STopBar></STopBar>
        <header class="header-top">
            <div class="inner inner-box">
                <a class="logo-box vertical">
                    <img src="https://img.xinshike.com/member/2017/0719/1707191457408143.png" alt="" width="266" height="41">
                </a>
                <div class="seller-text vertical">
                    <div class="text">用户中心</div>
                </div>
                <a href="" class="enter-for">
                    商家报名 >>
                </a>
            </div>
        </header>
        <section class="reg-center">
            <div class="form-wrapper inner">
                <h2>
                    用户注册
                    <small>
                        已有账号？
                        <span @click="Onlogin">立即登录</span>
                    </small>
                </h2>
                <form action="" id="reg-form">
                    <div class="form-group">
                        <input type="text" placeholder="请输入手机号" name="mobile" v-model="phone" @change ="checkphone">
                        <span class="Validform_checktip" :class="{'Validform_error':msgphone}">{{msgphone}}</span>
                    </div>
                    <div class="form-group">
                        <input @change="checkpassword" type="text" placeholder="请输入密码" name="pass" v-model="pass">
                        <span class="Validform_checktip" :class="{'Validform_error':msgpassword}">{{msgpassword}}</span>
                    </div>
                    <input  type="button" class="reg-submit" @click="RegsiterBtn" value="同意注册协议并提交">
                </form>
            </div>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </section>
    </div>
</template>

<script>
    import STopBar from "@/view/seller-components/TopBar"
    export default {
        name: "seller-enter",
        components:{
            STopBar
        },
        data(){
            return {
                phone:'手机',
                pass:'密码',
                msgphone:"",
                identity:"普通会员",
                msgpassword:"",
                isPhone:false,
                isPass:false
            }
        },
        methods:{
            checkphone:function(){
                var that=this;
                var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
                if(this.phone==""){
                    this.msgphone="手机号不能为空";
                }else if(!myreg.test(this.phone)){
                    this.msgphone="请输入有效的手机号码";
                }else{
                    this.$post('/api/FwbServer.ashx?command=CheckPhone',                        JSON.stringify({
                        phone: that.phone
                    })).then((res)=>{
                        if(res.data=='ok'){
                            this.msgphone="该手机号已被注册";
                        }else{
                            this.msgphone="输入正确";
                            that.isPhone=true;
                        }
                    })
                }
            },
            checkpassword:function(){
                var pwdReg = /^[0-9A-Za-z]{8,16}$/;//
                var value = this.pass;
                if(this.pass==""){
                    this.msgpassword = "密码不能为空"
                }else if(!pwdReg.test(value)){
                    this.msgpassword = "密码不合法";
                }else{
                    this.msgpassword = "密码合法";
                    this.isPass=true;
                }
            },
            Onlogin(){
                this.$router.push({
                    path:"/user-login"
                })
            },
            RegsiterBtn(){
                var that=this;
                if(this.isPhone&&this.isPass){
                    this.$post('/api/FwbServer.ashx?command=UserRegister',
                        JSON.stringify({
                            phone: that.phone,
                            pass: that.pass,
                            identity:that.identity,
                            uuid:that.uuid
                        }))
                        .then(function (res) {
                            if(res.data=="ok"){
                                that.$message({
                                    showClose: true,
                                    message: '注册成功',
                                    type: 'success'
                                });
                            }else{
                                that.$message({
                                    showClose: true,
                                    message: '注册失败',
                                    type: 'success'
                                });
                            }
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                }
            }
        }
    }
</script>

<style scoped>
    .seller-enter{
        padding: 0px;
        margin: 0px;
        height: 100%;
        font-size: 12px;
        background-color: #e5e5e5;
    }
    .header-top{
        width: 100%;
        height: 90px;
        background: #fff;
        position: relative;
    }
    .logo-box{
        display: block;
        width: 266px;
        height: 90px;
        float: left;
    }
    .inner-box{
        width: 1200px;
        height: 90px;
    }
    a{
        display: block;
    }
    .seller-text{
        height: 90px;
        width: 250px;
    }
    .text{
        border-left: 1px solid #e5e5e5;
        text-indent: 25px;
        font-size: 20px;
        color: #333;
        height: 20px;
        float: left;
    }
    .enter-for{
        position: absolute;
        top: 28px;
        right: 0px;
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        background: url(https://seller.xinshike.com/static/images/header-baoming.png) no-repeat 16px 10px;
        text-indent: 50px;
        font-size: 14px;
        line-height: 38px;
        width: 145px;
        height: 38px;
    }
    .vertical{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .reg-center{
        width: 100%;
        height: 700px;
        margin: 20px;
        position: relative;
        background-color: #e5e5e5
    }
    .form-wrapper{
        width: 520px;
        height: 600px;
        padding: 40px 80px 0 80px;
        box-sizing: border-box;
        background: #fff;
    }
    .form-wrapper h2{
        position: relative;
        display: inline-block;
        margin-bottom: 20px;
        line-height: 36px;
        font-size: 20px;
        color: #333;
        width: 100%;
        height: 36px;
    }
    .form-wrapper h2 small{
        float: right;
        display: flex;
        font-size: 14px;
        font-style: normal;
        color: #666;
    }
    .form-wrapper h2 small span{
        color: #ff4285;
    }
    .form-group{
        display: inline-block;
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        font-size: 16px;
        line-height: 45px;
        width: 360px;
        height: 45px;
    }
    input[type=text]:focus, input[type=password]:focus {
        box-sizing: border-box;
        padding-left: 10px;
        width: 100%;
        height: 45px;
    }
    .Validform_checktip{
        display: inline-block;
        line-height: 20px;
        width: 350px;
        height: 20px;
    }
    .Validform_error {
        background-color: #ffe7e7;
        font-size: 12px;
        color: #ff0000;
    }
    .reg-submit{
        display: inline-block;
        background: #ff4285;
        color: #fff;
        font-size: 20px;
        width: 100%;
        height: 50px;
        margin-top: 50px;
        border-radius: 20px;
        line-height: 35px;
        text-align: center;
        font-weight: bold;
    }
</style>