<template>
    <div class="login">
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="user">
                <el-input type="user" v-model="ruleForm2.user" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "login",
        data() {
            var validateUser = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('姓名不能为空'));
                } else if(!/[\u0391-\uFFE5|A-Za-z]/gi.test(value)) {
                    callback(new Error('用户名只能是英文或者中文'));
                } else if (value.length<=1 | value.length>=6){
                    callback(new Error('用户名是3-16位'));
                } else {
                    callback();
                }
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                }else if(!/^([\d]|[\w]){6,16}$/.test(value)){
                    callback(new Error('密码只能是字母、数字、下划线'));
                }else{
                    callback()
                }
            };
            return {
                ruleForm2: {
                    user: '',
                    pass: '',
                },
                rules2: {
                    user: [
                        { validator: validateUser, trigger: 'blur' }
                    ],
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ]
                }
            };
        },
        created(){
            this.uuid = this.uuidWay(10, 16);
        },
        methods: {
            submitForm(formName) {
                var that=this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        var name=(this.ruleForm2.user).trim();
                        var pass=this.ruleForm2.pass;
                        axios.post('/api/FwbServer.ashx?command=CheckLogin',
                            JSON.stringify({
                                user:name,
                                pass:pass,
                                uuid:that.uuid
                            })).then(function (e) {
                                console.log(e)
                                var arr=e;
                             if(arr[0].msg=="ok"){
                                 that.$store.commit("setToken",arr[0].Token);
                                 that.$router.push({
                                     path:"/"
                                 })
                             }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            uuidWay(len, radix) {
                var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZChengDuZendom".split(
                    ""
                );
                var uuid = [],
                    i;
                radix = radix || chars.length;

                if (len) {
                    // Compact form
                    for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)];
                } else {
                    // rfc4122, version 4 form
                    var r;

                    // rfc4122 requires these characters
                    uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
                    uuid[14] = "4";

                    // Fill in random data. At i==19 set the high bits of clock sequence as
                    // per rfc4122, sec. 4.1.5
                    for (i = 0; i < 36; i++) {
                        if (!uuid[i]) {
                            r = 0 | (Math.random() * 16);
                            uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r];
                        }
                    }
                }

                return uuid.join("");
            },
        }
    }
</script>

<style scoped>
    .login{
        width: 500px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
</style>