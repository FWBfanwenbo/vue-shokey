<template>
    <div class="update-page">
        <table>
            <tr>
                <th>用户名</th>
                <th>密码</th>
            </tr>
            <tr ref="tr">
                <td>
                    <input type="text" value="">
                </td>
                <td>
                    <input type="text" value="">
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "UpdatePage",
        data(){
            return {
                user:"",
                pass:""
            }
        },
        created(){
            this.user=this.$router.params.user;
            this.pass=this.$router.params.pass;
            this.insertValue()
        },
        methods:{
            insertValue(){
                let tr=this.$refs.tr;
                var input=tr.getElementsByTagName("input");
                input[0].value=this.user;
                input[1].value=this.pass;
            }
        }
    }
</script>

<style scoped>

</style>