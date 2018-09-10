<template>
    <div class="try-all">
        <div>
            <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="activity"
                        label="活动名称"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="wangwang"
                        label="下单旺旺"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="price"
                        label="单价/付款">
                </el-table-column>
                <el-table-column
                        prop="comment"
                        label="评价要求">
                </el-table-column>
                <el-table-column
                        prop="status"
                        label="状态">
                </el-table-column>
                <el-table-column
                        prop="operate"
                        label="操作">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "all-try",
        data(){
            return {
                tableData: [],
                query:"超级试用"
            }
        },
        created(){
            this._selectOrder();
        },
        methods:{
            _selectOrder(){
                var that=this;
                this.$post('/api/UserCenter.ashx?command=selectOrder',
                    JSON.stringify({
                        query:that.query
                    })).then((res)=>{
                       var data=res.data;
                       console.log(data);
                       data.forEach((item)=>{
                           that.tableData.push({
                               activity:item.activity,
                               wangwang:sessionStorage.user_phone,
                               comment:"",
                               price:item.price,
                               status:item.status,
                               operate:""
                           })
                       })
                })
            }
        }
    }
</script>

<style scoped>

</style>