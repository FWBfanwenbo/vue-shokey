<template>
    <div class="free-detail">
        <div>
            <el-table
                    :data="trylist"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="activity"
                        label="活动名称"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="price"
                        label="下单价"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="return_money"
                        label="单价/付款">
                </el-table-column>
                <el-table-column
                        prop="status"
                        label="流程状态">
                </el-table-column>
                <el-table-column
                        prop="wangwang"
                        label="淘宝账号">
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
    import {mapGetters} from 'vuex'
    export default {
        name: "free-detail",
        data(){
            return {
                tableData: [],
                query:"免费试用"
            }
        },
        created(){
        },
        computed:{
            ...mapGetters([
                "trylist"
            ])
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>