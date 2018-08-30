<template>
  <div class="index">
    <form action="">
      姓名：<input type="text" name="user" id="user" v-model="user"><br>
      密码：<input type="password" name="pass" id="pass" v-model="pass"><br>
      <input type="button" id="btn" value="提交" @click="submitOn">
    </form>
  </div>
</template>

<script>
  import axios from "axios";
export default {
  name: 'Index',
  data () {
    return {
        user:"",
        pass:""
    }
  },
    methods:{
        submitOn:function () {
            var that=this;
            axios.post('/api/FwbServer.ashx',
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
        }
    }
}
</script>

<style scoped>
</style>
