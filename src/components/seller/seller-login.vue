<template>
    <div class="seller-login">
        <section class="reg-center">
            <div class="form-wrapper inner">
                <h2>
                    商家账号登录
                    <small>
                        没有账号？
                        <span @click="OnRegister">立即注册</span>
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
                    <input class="reg-submit" @click="SellerLogin" value="登录">
                </form>
            </div>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </section>
    </div>
</template>

<script>
    export default {
        name: "seller-login",
        data(){
            return {
                phone:'手机',
                pass:'密码',
                msgphone:"",
                msgpassword:"",
            }
        },
        methods:{
            checkphone:function(){
                var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
                if(this.phone==""){
                    this.msgphone="手机号不能为空";
                }else if(!myreg.test(this.phone)){
                    this.msgphone="请输入有效的手机号码";
                }else{
                    this.msgphone="输入正确"
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
                }
            },
            OnRegister(){
                this.$router.push({
                    path:"/seller-enter"
                })
            },
            SellerLogin(){
                var that=this;
                this.$post("/api/Seller.ashx?command=SellerCheckLogin",
                    JSON.stringify({
                        phone:that.phone,
                        pass:that.pass
                    })
                ).then((res)=>{
                    console.log(res)
                    if(res.data[0].msg=="ok"){
                        that.$message({
                            showClose: true,
                            message: '登录成功',
                            type: 'success'
                        });
                        sessionStorage.seller_phone=res.data[0].phone;
                        setTimeout(()=>{
                            this.$router.push({
                                path:"/seller-center"
                            })
                        },1000)
                    }else{
                        that.$message({
                            showClose: true,
                            message: '登录失败',
                            type: 'fail'
                        });
                        setTimeout(()=>{
                            this.$router.push({
                                path:"/seller-enter/seller-login"
                            })
                        },1000)
                    }
                })

            }
        }
    }
</script>

<style scoped>
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
        line-height: 35px;
        text-align: center;
        font-weight: bold;
    }
</style>