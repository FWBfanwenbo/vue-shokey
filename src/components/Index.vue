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
      this._selectUser()
    },
    methods:{
        submitOn:function () {
            var that=this;
            this.userObj.unshift(JSON.stringify({
                user: that.user,
                pass: that.pass,
            }))
            axios.post('/api/FwbServer.ashx?command=InsertMethods',
                JSON.stringify({
                    user: that.user,
                    pass: that.pass,
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
                 that.userObj=res.data;
             }).catch(function (err) {
                 console.log(err)
             })
         },
        deleteMethods(uid){
            axios.post('/api/FwbServer.ashx?command=DeleteMethods',
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
        }
    }

  }
</script>

<style scoped>
</style>
