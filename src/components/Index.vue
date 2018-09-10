<template>
  <div class="index">
    <form action="">
      姓名：<input type="text" name="user" id="user" v-model="user"><br>
      密码：<input type="password" name="pass" id="pass" v-model="pass"><br>
      <input type="button" id="btn" value="提交" @click="submitOn">
    </form>
    <table class="data-box">
      <tr>
        <th>用户名</th>
        <th>密码</th>
        <th>操作</th>
      </tr>
      <tr v-for="item in userObj">
          <td>{{item.users}}</td>
          <td>{{item.pass}}</td>
          <td @click="updateMethos(item)">编辑</td>
           <td @click="deleteMethods(item.uid)">删除</td>
      </tr>
    </table>
  </div>

</template>

<script>
  import axios from "axios";
export default {
  name: 'Index',
  data () {
    return {
        user:"",
        pass:"",
        userObj:[]
    }
  },
    created(){
      this._selectUser();
      this.uuid = this.uuidWay(10, 16);
    },
    methods:{
        submitOn:function () {
            var that=this;
            this.userObj.unshift(JSON.stringify({
                user: that.user,
                pass: that.pass,
            }))
            this.$post('http://localhost:8525/FwbServer.ashx?command=InsertMethods',
                JSON.stringify({
                    user: that.user,
                    pass: that.pass,
                    uuid:that.uuid
                }))
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);

                });
        },
         _selectUser(){
            let that=this;
             axios.post('/api/FwbServer.ashx?command=SelectMethods',{}).then(function (res) {
                 that.userObj=res;
             }).catch(function (err) {
                 console.log(err)
             })
         },
        deleteMethods(uid){
            this.$post('http://localhost:8525/FwbServer.ashx?command=DeleteMethods',
                JSON.stringify({
                uid:uid
            })).then(function (res) {
                that.userObj=res.data;
            }).catch(function (err) {
                console.log(err)
            })
        },
        updateMethos(obj){
            this.$router.push({
                path:`/Index/${obj.uid}`,
                params:{
                    user:obj.user,
                    pass:obj.pass
                }
            })
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
    },

  }
</script>

<style scoped>
</style>
