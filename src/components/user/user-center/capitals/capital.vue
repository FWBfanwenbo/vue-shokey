<template>
    <div class="capital">
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    prop="number"
                    label="编号"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="deal_type"
                    label="交易类型"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="money"
                    label="金额">
            </el-table-column>
            <el-table-column
                    prop="deal_status"
                    label="交易状态">
            </el-table-column>
            <el-table-column
                    prop="fund_remark"
                    label="资金备注">
            </el-table-column>
            <el-table-column
                    prop="operate_time"
                    label="操作时间">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>

    export default {
        name: "capital",
        components:{

        },
        data(){
            return {
                tableData:[]
            }
        }
    }
</script>

<style scoped>
   .capital{
       margin-top: 20px;
   }
</style>