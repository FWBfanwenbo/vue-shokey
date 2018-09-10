<template>
    <div class="super-trail">
        <div class="shiyong-title">
            <h2>发布试用营销活动</h2>
        </div>
        <div class="activity-step">
            <div class="prize-title">
                <p>
                    <span>第一步：</span>
                    填写宝贝信息
                </p>
            </div>
            <div class="form-group">
                <label for="" class="label-middle">宝贝标题：</label>
                <input type="text" name="title" placeholder="请输入试用品标题" class="long-text" v-model="babyTitle">
                <span>写明赠品的数量、规格、属性等，不要复制淘宝商品标题</span>
            </div>
            <div class="form-group">
                <label for="class-name" class="label-middle">宝贝类型：</label>
                <select name="cid" id="class-name" v-model="typeid" @change="selectType($event)">
                    <option :value="list.gyid" v-for="list in optionsList">{{list.gyname}}</option>
                </select>
                <span>此分类为新试客的分类</span>
            </div>
            <div class="form-group">
                <label for="">宝贝展示图：</label>
                <div class="upload-pic">
                    <el-upload
                            class="avatar-uploader"
                            action="/api/Upload.ashx?command=RequestImg"
                            ref="upload"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </div>
                <div class="notice">
                    <p>展示图要求：</p>
                    <p>商品清晰图片即可，无需商品主图</p>
                    <p>不能出现图片留白、拼接、水印、logo、及其他文字</p>
                    <p>600*800以内的长方形</p>
                </div>
            </div>
            <div class="form-group">
                <label for="">手机二维码：</label>
                <div class="upload-pic">
                    <el-upload
                            class="avatar-uploader"
                            action="/api/Upload.ashx?command=RequestImgs"
                            ref="upload"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </div>
                <div class="notice">
                    <p>展示图要求：</p>
                    <p>商品清晰图片即可，无需商品主图</p>
                    <p>不能出现图片留白、拼接、水印、logo、及其他文字</p>
                    <p>600*800以内的长方形</p>
                </div>
            </div>
        </div>
        <div class="activity-step">
            <div class="prize-title">
                <p>
                    <span>第二步：</span>
                    选择目标推广宝贝
                </p>
            </div>
            <div class="form-group">
                <label for="" class="label-middle">选择店铺：</label>
                <select name="shop-id" id="" v-model="shopid" @change="selectShop($event)">
                    <option :value="list.shopid" v-for="list in shopList">{{list.shopname}}</option>
                </select>
                <span class="burst_tips Validform_checktip">请选择您的店铺</span>
            </div>
            <div class="form-group">
                <label for="" class="label-middle">商品链接：</label>
                <input type="text" placeholder="请填写需要下单商品的连接" name="item-url" class="long-text" v-model="goodslink">
                <span>平台会根据您填写的商品链接抓取宝贝信息，试客无法看到此链接</span>
            </div>
            <div class="form-group">
                <label for="" class="label-middle">下单规格：</label>
                <input type="text" value="任意拍" name="size" class="llx_text" v-model="ordertype">拍：
                <input type="text" name="quantity" class="small_text" value="1" v-model="ordernum">
                <span>如需拍下指定规格，请务必填写此信息，如不填写默认任意拍一件；</span>
            </div>
            <div class="form-group">
                <label for="" class="label-middle">下单价格：</label>
                <input type="text" value="" name="pay-price" class="llx_text" v-model="orderprice">元
            </div>
            <div class="form-group">
                <label for>商品运费：</label>
                <div class="form-label">
                    <label for="express_1" class="radio-icon">
                        <input type="radio" name="express-type" id="express_1" value="包邮" v-model="yunfeiType" @change="selectYun($event)">包邮
                    </label>
                    &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                    <label for="express_2" class="radio-icon">
                        <input type="radio" name="express-type" id="express_2" value="不包邮" v-model="yunfeiType" @change="selectYun($event)">不包邮
                    </label>
                    <span>
                        试客付邮试用必须同时满足：1、商品价值
                        <strong>超过100</strong>
                        元；2、
                        <strong>拍A发A</strong>
                        ；3、淘宝销售
                        <strong>邮费合理</strong>。
                    </span>
                </div>
            </div>
        </div>
        <div class="activity-step">
            <div class="prize-title">
                <p>
                    <span>第三步：</span>
                    设置试客找到商品入口
                </p>
            </div>
            <div class="keywords">
                <div class="keywords-title type-app add-kword">
                    <input type="checkbox" id="keywords_type_pc" name="keywords-type" v-model="paltType.pc" value="1"  @click="checkSearchPc">
                    <label for="keywords_type_pc">PC关键词：通过淘宝/天猫自然搜索找到商品（勾选后试客可以在
                    <span>电脑端</span>
                    申请该试用宝贝）
                    </label>
                </div>
                <transition name="keyword-move">
                    <div class="pc-keywords" v-show="isPc">
                        <div class="pc-keyword">
                            <div class="keyword-form">
                                <div class="form-group">
                                    <label for="" class="middle-label">PC端关键词：</label>
                                    <select name="pc-search-site" id="" class="search-site">
                                        <option value="1">淘宝搜索</option>
                                        <option value="2">天猫搜索</option>
                                        <option value="3">淘宝直通车</option>
                                    </select>
                                    <select name="pc-search-type" id="" class="search-type">\
                                        <option value="1">综合搜索</option>
                                        <option value="2">人气搜索</option>
                                        <option value="3">销量搜索</option>
                                        <option value="3">信用搜索 </option>
                                    </select>
                                    <input type="text" name="pc_keyword" placeholder="填写搜索关键词">
                                    筛选条件：
                                    <input type="text" name="search-tips" placeholder="如价格区间，销量区间等">
                                </div>
                            </div>
                            <div class="keyword-form">
                                <div class="form-group">
                                    <label for="" class="middle-label">PC端关键词：</label>
                                    <select name="pc-search-site" id="" class="search-site">
                                        <option value="1">淘宝搜索</option>
                                        <option value="2">天猫搜索</option>
                                        <option value="3">淘宝直通车</option>
                                    </select>
                                    <select name="pc-search-type" id="" class="search-type">\
                                        <option value="1">综合搜索</option>
                                        <option value="2">人气搜索</option>
                                        <option value="3">销量搜索</option>
                                        <option value="3">信用搜索 </option>
                                    </select>
                                    <input type="text" name="pc_keyword" placeholder="填写搜索关键词">
                                    筛选条件：
                                    <input type="text" name="search-tips" placeholder="如价格区间，销量区间等">
                                </div>
                            </div>
                        </div>
                        <div class="notice_inline">
                            <P>
                                <span>温馨提示：</span>
                                设置的关键词恤在PC端前15页能搜索到，搜索不到时，建议设置价格、地区等条件
                            </P>
                        </div>
                        <div class="keywords_add">增加一个PC关键词</div>
                    </div>
                </transition>
                <div class="keywords-title type-app add-kword">
                    <input type="checkbox" id="keywords-type-app" name="keywords-type" v-model="paltType.app" value="hhh"  @click="checkSearchApp">
                    <label for="keywords-type-app">APP关键词：通过淘宝/天猫自然搜索找到商品（勾选后试客可以在
                        <span>手机端</span>
                        申请该试用宝贝）
                    </label>
                </div>
                <transition name="keyword-move">
                    <div class="pc-keywords" v-show="isApp">
                        <div class="pc-keyword">
                            <div class="keyword-form">
                                <div class="form-group">
                                    <label for="" class="label-middle">商品淘口令:</label>
                                    <textarea name="share_url" id="" class="app_content"></textarea>
                                </div>
                            </div>
                            <div class="keyword-form">
                                <div class="form-group">
                                    <label for="" class="middle-label">APP端关键词：</label>
                                    <select name="pc-search-site" id="" class="search-site">
                                        <option value="1">淘宝搜索</option>
                                        <option value="2">天猫搜索</option>
                                        <option value="3">淘宝直通车</option>
                                    </select>
                                    <select name="pc-search-type" id="" class="search-type">\
                                        <option value="1">综合搜索</option>
                                        <option value="2">人气搜索</option>
                                        <option value="3">销量搜索</option>
                                        <option value="3">信用搜索 </option>
                                    </select>
                                    <input type="text" name="pc_keyword" placeholder="填写搜索关键词">
                                    筛选条件：
                                    <input type="text" name="search-tips" placeholder="如价格区间，销量区间等">
                                </div>
                            </div>
                        </div>
                        <div class="notice_inline">
                            <P>
                                <span>温馨提示：</span>
                                设置的关键词恤在PC端前15页能搜索到，搜索不到时，建议设置价格、地区等条件
                            </P>
                        </div>
                        <div class="keywords_add">增加一个APP关键词</div>
                    </div>
                </transition>
            </div>
        </div>
        <div class="activity-step">
            <div class="prize-title">
                <p>
                    <span>第四步：</span>
                    设置活动周期
                </p>
            </div>
            <div class="form-group form_inline shelf-time" style="overflow: visible;height: 45px;margin-bottom: 20px;">
                <label for="online_time" class="activity_time">宝贝上架时间：</label>
                <div class="block">
                    <div class="order-list-option start">
                        <VdatePicker @on-change="getShelfDate"></VdatePicker>
                    </div>
                </div>
                <span class="shelf-notice" style="vertical-align: middle;">我们将为您的宝贝推荐最优的提升方案</span>
            </div>
            <div class="calendar">
                <div class="show_time">
                    <p class="l">
                        点击设置每天投放的订单份数（开奖份数），
                        <span class="supercron" style="color: red;">活动上线当天（第一天）不开奖</span>
                    </p>
                    <p class="r">当前时间：2018年09月8日10点57分</p>
                </div>
                <div class="calendar_content">
                    <div class="activity_info" style="overflow: visible;height: 54px;">
                        <div class="activity_time time-box" style="height: 42px;">
                            <label for="" style="margin-top: 10px;">活动时间：</label>
                            <div class="start-time">
                                <div class="order-list-option start">
                                    <VdatePicker @on-change="getStartDate"></VdatePicker>
                                </div>
                            </div>
                            <span class="time-line"></span>
                            <div class="end-time">
                                <div class="order-list-option start">
                                    <VdatePicker @on-change="getEndDate"></VdatePicker>
                                </div>
                            </div>
                        </div>
                        <div class="day_nums">
                            <label for="">设置日均投放量：</label>
                            <select name="try_day_nums" id="try_day_nums" v-model="sum" @chane="selectNum($event)">
                                <option value="1">1单</option>
                                <option value="2">2单</option>
                                <option value="3">3单</option>
                                <option value="4">4单</option>
                                <option value="5">5单</option>
                                <option value="6">6单</option>
                                <option value="7">7单</option>
                                <option value="8">8单</option>
                                <option value="9">9单</option>
                                <option value="10">10单</option>
                            </select>
                        </div>
                    </div>
                    <div class="week_name">
                        <ul>
                            <li>日</li>
                            <li>一</li>
                            <li>二</li>
                            <li>三</li>
                            <li>四</li>
                            <li>五</li>
                            <li class="no_line">六</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="activity-step sum_money">
            <div class="prize-title">
                <p>
                    <span>费用计算：</span>
                </p>
            </div>
            <div class="form-group">
                <label for>商品担保金：</label>
                <p style="margin-bottom: 14px;">
                    <span class="deposit">等到计算</span>
                    元 （商品担保金=下单价格*发放份数*拍的数量，是需要返回给试客的购物垫付款）
                </p>
            </div>
            <div class="form-group">
                <label for>平台福取费：</label>
                <p style="margin-bottom: 14px;">
                    <span class="deposit">等到计算</span>
                    元 （商品担保金*2%）
                </p>
            </div>
            <div class="form-group">
                <label for>费用计算：</label>
                <p style="margin-bottom: 14px;">
                    <span class="service">等到计算</span>
                </p>
            </div>
        </div>
        <div class="statistics">
            <p class="total_fee">等待计算</p>
            <p id="vip_help" style="margin-top: 5px; color: red;"></p>
            <div class="submit_save" @click="submitAct">提交活动报名</div>
        </div>
    </div>
</template>

<script>
    import VdatePicker from "@/components/user/user-center/capitals/datepicker"
    export default {
        name: "super-trail",
        components:{
            VdatePicker
        },
        data(){
            return {
                optionsList:[],
                shopList:[],
                releasetype:"免费发布",
                typeid:1,
                shopid:1,
                goodslink:"",
                ordertype:"",
                orderprice:"",
                ordernum:1,
                yunfeiType:"",
                shelftime:"",
                starttime:"",
                endtime:"",
                sum:"",
                imageUrl: '',
                falt:[],
                paltType:{pc:false,app:false},
                isPc:false,
                isApp:false,
                babyTitle:"",
                imgBa641:""
            }
        },
        created(){
            this._processGType();
            this._processShop();
        },
        methods:{
            _processGType(){
                this.$post("/api/seller.ashx?command=SelectType").then((res)=>{
                    let data=res.data;
                    let ret=[];
                    data.forEach((item)=>{
                        ret.push({
                            gyid:item.gyid,
                            gyname:item.gyname
                        })
                    });
                    ret.unshift({
                        gyid:0,
                        gyname:"请选择商品类型"
                    })
                    this.optionsList=ret;
                })
            },
            _processShop(){
                this.$post("/api/seller.ashx?command=SelectShop").then((res)=>{
                    let data=res.data;
                    console.log(res)
                    let ret=[];
                    data.forEach((item)=>{
                        ret.push({
                            shopid:item.shopid,
                            shopname:item.shopname
                        })
                    });
                    ret.unshift({
                        shopid:0,
                        shopname:"请选择店铺"
                    })
                    this.shopList=ret;
                })
            },
            handleAvatarSuccess(res, file) {
                this.imgBa641=res;
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                let reg = /\.(jpg|jpeg|png)$/i;
                if (!reg.test(file.name)) {
                    this.$message({
                        showClose: true,
                        message: '上传支持格式（.jpg/.jpeg/.png）',
                        type: 'error'
                    });
                    return false;
                }
                else if (file.size > 500 * 1024) {
                    this.$message({
                        showClose: true,
                        message: '文件大小上限为500K',
                        type: 'error'
                    });
                    return false;
                }

            },
            getShelfDate(date){
                this.shelftime=date
            },
            getStartDate(date){
                this.starttime=date
            },
            getEndDate(date){
                this.endtime=date
            },
            checkSearchPc(){
                this.isPc=!this.isPc
                this.paltType.pc=!this.paltType.pc;
            },
            checkSearchApp(){
                this.isApp=!this.isApp
                this.paltType.app=!this.paltType.app;
                console.log(this.paltType.app)
            },
            selectType(e){
                this.typeid=e.target.value;
            },
            selectShop(e){
                this.shopid=e.target.value;
            },
            selectNum(e){
               this.sum=e.target.value;
            },
            selectYun(e){
                this.yunfeiType=e.target.value
            },
            submitAct(){
                var that=this;
                this.$post("/api/Seller.ashx?command=SubmitActivity",
                   JSON.stringify({
                       releaseytype:that.releasetype,
                       babyTitle:that.babyTitle,
                       typeid:that.typeid,
                       imgBa641:that.imgBa641,
                       shopid:that.shopid,
                       goodslink:that.goodslink,
                       ordertype:that.ordertype,
                       orderprice:that.orderprice,
                       ordernum:that.ordernum,
                       yunfeiType:that.yunfeiType,
                       shelftime:that.shelftime,
                       starttime:that.starttime,
                       endtime:that.endtime,
                       sum:that.sum
                   })
                ).then((res)=>{

                })
            }
        }
    }
</script>

<style scoped>
    .super-trail{
        height: 1000px;
        padding: 0 12px;
        box-sizing: border-box;
    }
    .shiyong-title h2{
        padding: 0px 20px;
        box-sizing: border-box;
        color: #333333;
        font-size: 18px;
        line-height: 59px;
        font-weight: normal;
        border-bottom: 1px solid #E5E5E5;
    }
    .title-detail h2{
        color: #ff4285;
        margin-bottom: 7px;
    }
    .title-detail p{
        color: #ff4285;
        font-size: 14px;
    }
    .prize-title{
        padding-left: 30px;
        padding-top: 20px;
        margin-bottom: 14px;
    }
    .prize-title p{
        font-size: 14px;
    }
    .prize-title p span{
        color: #ff4285;
    }
    .form-group{
        overflow: hidden
    }
    .form-group label:first-of-type{
        font-size: 12px;
        width: 166px;
        text-align: right;
        display: block;
        float: left;
    }
    .form-group input[type='radio']:checked{
       background:url(https://seller.xinshike.com/static/images/burst_add.png) -24px -6px no-repeat
    }
    .form-group input[type='radio']{
        appearance: none;
        width: 12px;
        height: 12px;
        background: url(https://seller.xinshike.com/static/images/burst_add.png) -6px -6px no-repeat;
        outline: none;
        vertical-align: middle;
        margin-bottom: 4px;
    }
    .form-group input[type='text']{
        padding: 7px 0;
        text-indent: 10px;
        outline: none;
        margin-bottom: 14px;
        border: 1px solid #E5E5E5;
        border-radius: 2px;
    }
    .long-text {
        width: 340px;
    }
    .form-group .label-middle{
        line-height: 32px;
    }
    .form-group span{
        display: inline-block;
        color: #666666;
        vertical-align: middle;
        margin-top: -4px;

    }
    .form-group>span:before{
        content: "";
        display: inline-block;
        width: 16px;
        height: 16px;
        background: url(https://seller.xinshike.com/static/images/burst_add.png) -4px -24px no-repeat;
        vertical-align: middle;
        margin: -4px 7px 0 7px;
    }
    select {
        border: 1px solid #E5E5E5;
        height: 30px;
        border-radius: 2px;
        margin-left: 5px;
        margin-bottom: 14px;
    }
    .form-group .notice{
        display: inline-block;
        vertical-align: top;
        margin-left: 10px;
    }
    .form-group .upload-pic {
        display: inline-block;
        border: 2px dashed #999;
        border-radius: 4px;
        width: 120px;
        height: 120px;
        margin-bottom: 21px;
        position: relative;
    }
    .notice p span{
        color: #ff4285
    }
    .form-group .llx_text {
        width: 140px;
        margin-right: 10px;
    }
    .form-group .form-label label {
        width: auto;
    }
    .form-group .form-label>span strong {
        color: #ff4285;
    }
    .keyword-move-enter-active{
        transition:all 0.5s ease;
        opacity: 1;
    }
    .keyword-move-enter,.keyword-move-leave-to{
        transition:all 0.5s ease;
        opacity: 0;
    }
    .keywords-title {
        padding: 15px 0 15px 14px;
        background: #F5F5F5;
        margin-left: 84px;
        margin-bottom: 14px;
    }
    .add-kword input[type='checkbox']:checked {
        background: url(https://seller.xinshike.com/static/images/burst_add.png) -42px -6px no-repeat;
    }
    .app_content{
        padding: 10px;
        width: 340px;
        height: 80px;
        overflow: visible;
        outline: none;
        border: 1px solid #E5E5E5;
        border-radius: 2px;
        resize: none;
        margin-bottom: 20px;
    }
    .keywords-title>label span {
        color: #ff4285;
    }
    .middle-label{
        line-height: 32px;
    }
    .notice_inline {
        padding-left: 186px;
    }
    .notice_inline p {
        display: inline-block;
        color: #151515;
        padding: 10px 30px;
        border: 1px dashed #FFB0CB;
    }
    .notice_inline p span {
        color: #FF4686;
    }
    .keywords_add {
        margin: 20px 0 20px 186px;
        display: block;
        padding: 9px 0;
        color: #ff4285;
        background: #FFF1F5;
        font-weight: bold;
        border: 1px solid #ff4285;
        border-radius: 2px;
        width: 200px;
        text-align: center;
        cursor: pointer;
    }
    .form-group>span strong {
        color: #ff4285;
        font-weight: inherit;
    }
    .form-group .instruction p {
        margin-bottom: 14px;
        color: #666666;
    }
    .form_inline label {
        line-height: 32px;
    }
    .calendar {
        padding: 0 114px 0 164px;
    }
    .show_time{
        overflow: hidden;
    }
    .show_time p {
        font-size: 12px;
        color: #333333;
        margin-bottom: 10px;
    }
    .l{
        float: left;
    }
    .r{
        float: right;
    }
    .calendar_content {
        border: 1px solid #E5E5E5;
        border-bottom: 0;
    }
    .activity_info {
        overflow: hidden;
    }
    .activity_time {
        padding: 10px 14px 0;
        float: left;
    }
    .activity_time label {
        font-size: 12px;
        color: #333;
    }
    .day_nums {
        float: right;
        padding: 10px 14px 0;
    }
    .week_name ul {
        overflow: hidden;
    }
    .week_name ul li {
        float: left;
        width: 100px;
        line-height: 32px;
        text-align: center;
        background: #F8F8F8;
        border-right: 1px solid #E5E5E5;
        border-bottom: 1px solid #E5E5E5;
        box-sizing: border-box;
    }
    .no_line {
        border-right: 0 !important;
    }
    .statistics {
        margin-top: 23px;
        text-align: center;
    }
    .statistics P {
        font-size: 14px;
    }
    .submit_save {
        display: inline-block;
        padding: 8px 41px;
        font-size: 16px;
        color: #fff;
        background: #ff4285;
        font-weight: inherit;
        border-radius: 3px;
        margin-top: 23px;
        cursor: pointer;
    }
    .sum_money{
        border-bottom: 1px solid #E5E5E5
    }
    .form-group p span{
        color: #ff4285;
    }
    .shelf-time{
        position: relative;
    }
    .block{
        position: absolute;
        left: 192px;
        top: 10px;
    }
    .shelf-notice{
        position: absolute;
        left: 300px;
        top: 23px;
    }
    .time-box{
        position: relative;
    }
    .start-time{
        position: absolute;
        left: 79px;
        top: 10px;
    }
    .time-line{
        width: 10px;
        height: 1px;
        position: absolute;
        left: 182px;
        top: 25px;
        background: #333;
    }
    .end-time{
        position: absolute;
        left: 204px;
        top: 10px;
    }
    .el-input__inner{
        width: 80px;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 120px;
        height: 120px;
        line-height: 120px;
        text-align: center;
    }
    .avatar {
        width: 120px;
        height: 120px;
        display: block;
    }
</style>