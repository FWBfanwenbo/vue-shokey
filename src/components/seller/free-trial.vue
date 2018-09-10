<template>
    <div class="free-trial">
        <div class="shiyong-title">
            <h2>发布免费试用</h2>
        </div>
        <div class="try-activity">
            <div class="activity-title">
                <div class="try-logo"></div>
                <div class="title-detail">
                    <h2>免费试用</h2>
                    <p>快速提升店铺和宝贝转化率</p>
                </div>
            </div>
            <div class="activity-detail">
                <div class="td-list" v-for="list in tryActivity">
                    <p class="td_title">{{list.title}}</p>
                    <p class="td_content">{{list.text}}</p>
                </div>
                <router-link to="/seller-center/release-trial" class="reset_btn">重选活动</router-link>
            </div>
        </div>
        <form action="" class="form-free">
            <div class="activity-step">
                <div class="prize-title">
                    <p>
                        <span>第二步：</span>
                        填写宝贝展示信息
                    </p>
                </div>
                <div class="form-group">
                    <label for="" class="label-middle">宝贝标题：</label>
                    <input type="text" name="title" placeholder="请输入宝贝展示标题" class="long-text">
                    <span>不要复制淘宝商品标题</span>
                </div>
                <div class="form-group">
                    <label for="class-name" class="label-middle">试用品类型：</label>
                    <select name="cid" id="class-name">
                        <!--<option value="{{list.id}}" v-for="list in optionsList">{{list.text}}</option>-->
                    </select>
                    <span>此分类为新试客的分类</span>
                </div>
                <div class="form-group">
                    <label for="">试用品展示图：</label>
                    <div class="upload-pic">
                        <a href="width: 120px;height: 120px;display: block;position: relative;background: url('https://img.xinshike.com/member/2017/0815/1708151146197756.png')" id="js_pic_url">
                            <span style="width: 120px;height: 120px;"></span>
                            <input type="hidden" name="pic-url">
                        </a>
                    </div>
                    <div class="notice">
                        <p>展示图要求：</p>
                        <p>商品清晰图片即可，无需商品主图</p>
                        <p>不能出现图片留白、拼接、水印、logo、及其他文字</p>
                        <p>600*800以内的长方形</p>
                    </div>
                </div>
                <div class="form-group">
                    <label for="" class="middle-label">宝贝链接：</label>
                    <input type="text" placeholder="请填写需要下单商品的连接" name="item_url" class="long-text">
                    <span class="burst_tips Validform_checktip">
                        请填写正确的宝贝链接，用户不会直接看到此链接
                    </span>
                </div>
                <div class="form-group">
                    <label for="class_name" class="middle-label">店铺：</label>
                    <select name="" id="shop_id" class="sell_cate_t">
                        <option value="32815">淑女妆名品</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="" class="middle-label">商家QQ：</label>
                    <input type="text" placeholder="请填写联系QQ" datatype="/^\d{4,}$/i" name="qq" style="width: 100px;" class="long-text">
                </div>
                <div class="form-group">
                    <div class="notice_inline" style="margin-bottom: 15px;width: 720px;">
                        <p>
                            <span>温馨提示：</span>
                            为避免用户在旺旺上直接联系商家，请填写一个可及时与店铺联系的QQ方便用户联系（通过审核用户才能看到）
                        </p>
                    </div>
                </div>
                <div class="form-group">
                    <label for="" class="middle-label">下单价格：</label>
                    <input type="hidden" name="try_serv_fee" value="3">
                    <input type="text" placeholder="请填写宝贝下单价格" name="pay_price" class="llx_text" datatype="/^[\d\.]{1,7}$/i">元
                    <input type="hidden" name="try_serv_fee" value="3">
                </div>
                <div class="form-group">
                    <label for="">商品运费：</label>
                    <div class="form-label">
                        <label for="express_1" class="radio_icon">
                            <input type="radio" name="express_type" id="express_1" value="1" checked>
                            包邮
                        </label>
                        &nbsp;&nbsp;&nbsp;
                        <span>所有免费试用统一包邮，请合理配合“返款金额”计算试用营销成本。</span>
                    </div>
                </div>
                <div class="form-group">
                    <label for="" class="middle-label">自动通过：</label>
                    <div class="form-label">
                        <label for class="radio_icon">
                            <input type="radio" id="auto_1" value="1" name="auto"  checked>
                            开启
                        </label>
                        &nbsp;&nbsp;&nbsp;
                        <input type="text" name="auto_hour" value="3" style="width: 80px;">
                        小时，通过
                        <input type="text" name="auto_speed" value="2" style="width: 80px;">
                        份
                    </div>
                </div>
                <div class="form-group">
                    <label for=""></label>
                    <div class="form-label">
                        <label for="" class="radio_icon">
                            <input type="radio" id="auto_0" value="0" name="auto">
                            关闭
                        </label>
                        &nbsp;&nbsp;&nbsp;
                    </div>
                </div>
            </div>
            <div class="activity-step">
                <div class="prize-title">
                    <p>
                        <span>第二步：</span>
                        设置试客找到商品入口
                    </p>
                </div>
                <div class="form-group">
                    <label>投放渠道：</label>
                    <div class="form-label">
                        <label for="express_1" class="radio_icon">
                            <input type="radio" name="sell_type" value="1" checked class="js_sell_type">
                            电脑端（搜索）
                        </label>
                        &nbsp;&nbsp;&nbsp;
                        <label for="express_1" class="radio_icon">
                            <input type="radio" name="sell_type" value="2" class="js_sell_type">
                            手机端（搜索）
                        </label>
                        &nbsp;&nbsp;&nbsp;
                        <label for="express_1" class="radio_icon">
                            <input type="radio" name="sell_type" value="4" class="js_sell_type">
                            手机端（二维码）
                        </label>
                        &nbsp;&nbsp;&nbsp;
                        <label for="express_1" class="radio_icon">
                            <input type="radio" name="sell_type" value="5" class="js_sell_type">
                            链接试用（淘客）
                        </label>
                        &nbsp;&nbsp;&nbsp;
                        <label for="express_1" class="radio_icon">
                            <input type="radio" name="sell_type" value="6" class="js_sell_type">
                            手机端（淘口令）
                        </label>
                    </div>
                </div>
                <div class="form-group">
                    <label class="long-text"></label>
                    <span class="selltypetips js_tip_1" style="display: inline-block;">
                        试客通过
                        <strong>PC电脑浏览器，访问淘宝首页</strong>
                        搜索关键词找到宝贝
                    </span>
                </div>
                <div class="form-group">
                    <label for="">搜索结果提示图：</label>
                    <div class="upload-pic">
                        <a href="width: 120px;height: 120px;display: block;position: relative;background: url('https://img.xinshike.com/member/2017/0815/1708151146197756.png')" id="js_pic_url">
                            <span style="width: 120px;height: 120px;"></span>
                            <input type="hidden" name="pic-url">
                        </a>
                    </div>
                    <div class="notice">
                        <p>搜索结果提示图:</p>
                        <p>请上传宝贝搜索结果图，清晰可以识别便于试客确认宝贝并付款</p>
                    </div>
                </div>
                <div class="form-group">
                    <label for="" class="label-middle">搜索关键词：</label>
                    <div class="select_block">
                        <div class="burst_block_line js_keyword">
                            <select name="search_site" id="sell_bu_num_1" class="sell_day_t">
                                <option value="1" selected="selected">淘宝</option>
                                <option value="2">天猫</option>
                                <option value="3">淘宝直通车</option>
                            </select>
                            <select name="search_type" id="sell_bu_num_1" class="sell_day_t">
                                <option value="1" selected="selected">综合</option>
                                <option value="2">人气</option>
                                <option value="3">销量</option>
                                <option value="4">最新</option>
                                <option value="5">信用</option>
                                <option value="6">价格</option>
                            </select>
                            <input type="text" value name="keywords" class="sell_cp_key Validform_error" placeholder="填写关键词" style="width: 140px;">
                            <input type="text" name="search_tips" class="sell_cp_key" value placeholder="如：卡价格69-100，商品所在地：杭州" style="width: 230px;">
                        </div>
                        <a href="" class="option_sub_btn js_add_keyword" style="margin-left: 10px;">+ 增加一个关键词</a>
                    </div>
                </div>
                <div class="form-group">
                    <div class="notice_inline" style="margin-bottom: 15px;width: 720px;">
                        <p>
                            <span>温馨提示：</span>
                            建议设置类目核心词，大词，精准词，设置
                            <span>3个以上</span>
                            关键词。
                        </p>
                    </div>
                </div>
                <div class="form-group">
                    <label for="" class="label-middle">下单要求：</label>
                </div>
            </div>
            <div class="activity-step">
                <div class="prize-title">
                    <p>
                        <span>第三步：</span>
                        设置活动周期
                    </p>
                </div>
                <div class="form-group" style="margin-bottom: 10px;">
                    <label class="label-middle">增值服务：</label>
                    <label for="alike" class="checkbox_label" style="width: 200px;line-height: 32px;">
                        <input type="checkbox" class="gold-add" style="margin-bottom: 5px" id="alike" value="1" name="gold_add">
                        提升试客积极性：20 金币/期
                    </label>
                    <span style="line-height: 40px;overflow: visible">
                    奖励给申请和下单的试客，提升试客积极性
                </span>
                </div>
                <div class="form-group">
                    <label class="label-middle">活动开始时间：</label>
                    <input type="text" value="2018-09-04 14:28:53" name="start_time" style="width: 150px;">
                    <span>
                        设置活动开始时间
                    </span>
                </div>
                <div class="form-group">
                    <label class="label-middle">活动天数：</label>
                    <input type="text" value name="days" style="width: 100px;">
                    <span>
                        请填写活动天数
                    </span>
                </div>
                <div class="form-group">
                    <label class="label-middle">发布分数：</label>
                    <input type="text" value name="try_nums" style="width: 100px;" class="long-text">
                    <span>
                        最少5份
                    </span>
                </div>
            </div>
            <div class="statistics">
                <p class="total_fee">等待计算</p>
                <p id="vip_help" style="margin-top: 5px; color: red;"></p>
                <div class="submit_save">提交活动报名</div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "free-trial",
        data(){
            return {
                tryActivity:[
                    {
                        id:0,
                        title:"合宝贝类型：",
                        text:"转化率不稳定的商品"
                    },{
                        id:1,
                        title:"试用特点：",
                        text:"用户真实购买，平台担保返款"
                    },{
                        id:2,
                        title:"流程简介：",
                        text:"用户申请后，获得资格，并且按照流程直接下单购买，收货后获得返款。"
                    },
                ],
                optionsList:[
                    {
                        id:0,
                        text:"请选择商品类型"
                    },{
                        id:1,
                        text:"潮流女装"
                    },{
                        id:2,
                        text:"精品男装"
                    },{
                        id:3,
                        text:"鞋子箱包"
                    },{
                        id:4,
                        text:"时尚配饰"
                    },{
                        id:5,
                        text:"美食/特产"
                    },{
                        id:6,
                        text:"数码家电"
                    },{
                        id:7,
                        text:"家居日用"
                    },{
                        id:8,
                        text:"美容护肤"
                    },,{
                        id:9,
                        text:"综合试用"
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .free-trial{
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
    .try-activity{
        box-sizing: border-box;
        padding: 26px 0 0 32px;
        width: 981px;
        background: #FFFFFF;
        border: 1px solid #E5E5E5;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,0.3);
        margin-top: 20px;
    }
    .activity-title{
        overflow: hidden;
    }
    .try-logo{
        width: 60px;
        height: 60px;
        background: url(https://seller.xinshike.com/static/images/try_add.png) -244px -6px no-repeat;
        float: left;
        margin-right: 12px;
    }
    .title-detail{
        float: left;
    }
    .title-detail h2{
        color: #ff4285;
        margin-bottom: 7px;
    }
    .title-detail p{
        color: #ff4285;
        font-size: 14px;
    }
    .try-activity{
        overflow: hidden;
    }
    .td-list{
        padding-top: 14px;
        float: left;
        margin-right: 42px;
    }
    .td_title{
        font-size: 13px;
        color: #666666;
        margin-bottom: 10px;
    }
    .td_content{
        width: 200px;
        color: #333333;
        margin-bottom: 26px;
    }
    .reset_btn {
        margin-left: 60px;
        display: block;
        float: left;
        width: 100px;
        color: #4A90E2;
        border: 1px solid #4A90E2;
        line-height: 32px;
        font-size: 14px;
        text-align: center;
        border-radius: 2px;
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
    input[type='checkbox']:checked {
        background: url(https://seller.xinshike.com/static/images/burst_add.png) -42px -6px no-repeat;
    }
    .keywords-title>label span {
        color: #ff4285;
    }
    .middle-label{
        line-height: 32px;
    }
    .notice_inline {
        padding-left: 186px;
        margin-left: 5px;
        width: 700px;
    }
    .notice_inline p{
        display: inline-block;
        color: #151515;
        padding: 10px 30px;
        border: 1px dashed #FFB0CB;
    }
    .notice_inline p span {
        color: #FF4686;
    }
    .form-label{
        display: inline-block;
        float: left;
        padding-left: 6px;
    }
    .form-group input[type='radio'] {
        appearance: none;
        width: 12px;
        height: 12px;
        background: url(https://seller.xinshike.com/static/images/try_add.png) -24px -6px no-repeat;
        outline: none;
        vertical-align: middle;
        margin-bottom: 4px;
    }
    input, select, textarea {
         box-sizing: border-box;
        margin-right: 6px;
    }
     .form-group > label {
        font-size: 12px;
        width: 186px;
        text-align: right;
        display: inline-block;
        float: left;
        min-height: 30px;
    }
    .form-label > span:before {
        content: "";
        display: inline-block;
        width: 16px;
        height: 16px;
        background: url(https://seller.xinshike.com/static/images/try_add.png) -4px -24px no-repeat;
        vertical-align: middle;
        margin: -4px 7px 0 7px;
    }
    .form-group input[type='radio']:checked {
        appearance: none;
        width: 12px;
        height: 12px;
        outline: none;
        vertical-align: middle;
        margin-bottom: 4px;
        background: url(https://seller.xinshike.com/static/images/try_add.png) -6px -6px no-repeat;
    }
    .select_block{
        display: inline-block;
        position: relative;
        margin: 0px 5px 15px;
        padding: 20px 10px;
        border: 1px solid #E5E5E5;
        width: 680px;
        height: auto;
    }
    .burst_block_line{
        display: block;
        margin: 0px 10px;
        line-height: 36px;
    }
    .option_sub_btn {
        margin: 0px 0px 0px 79px;
        display: inline-block;
        padding: 7px 14px;
        color: #ff4285;
        background: #fff;
        border: 1px solid #E5E5E5;
        border-radius: 2px;
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
    .show_time p {
        font-size: 12px;
        color: #333333;
        margin-bottom: 10px;
    }
    .activity_time label {
        font-size: 12px;
        color: #333;
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
    .form-group > label {
        font-size: 12px;
        width: 186px;
        text-align: right;
        display: inline-block;
        float: left;
        min-height: 30px;
    }
    .form-group > span {
        display: inline-block;
        color: #666666;
        vertical-align: middle
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
</style>