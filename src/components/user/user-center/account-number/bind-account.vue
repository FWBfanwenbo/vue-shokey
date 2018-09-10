<template>
    <div class="fund-management">
        <div class="management-title">
            <h2>绑定提现银行卡</h2>
            <div class="time-selection">
            </div>
        </div>
        <div class="details">
            <ul class="detail">
                <router-link tag="li" to="/user-center/fund-management/capital">
                    <span class="active-text">资金明细</span>
                </router-link>
                <router-link to="/user-center/fund-management/present-record">
                    <span class="active-text">提现记录</span>
                </router-link>
            </ul>
        </div>
        <div class="bind-account">
            <div class="content show-netbank-form" style="margin: 50px auto;">
                <form class="form netbank-form"  id="J_bindbank_form">
                    <div class="form-line bank-form-line" id="bank_wrap_drop">
                        <label for="select_bank" id="label_select" class="label" style="height: 40px;line-height: 40px;display: block;">选择银行：</label>
                        <span class="bank-drop-ico"></span>
                        <div class="element">
                            <div class="bank show-bank-label show-bank-layer" id="bank_layer_wrap">
                                <div class="bank-label" id="sel_bank" @click="openBank">
                                    <span class="bank-wrap">
                                        <label class="bank-logo-wrap">
                                            <span class="bank-logo bank-BOCB2C" id="select_bank"></span>
                                        </label>
                                    </span>
                                    <a href="javascript:;" class="bank-drop">
                                        <span class="bank-drop-wrap">选择银行</span>
                                        <span class="bank-drop-ico"></span>
                                    </a>
                                </div>
                                <input type="hidden" name="bank_name" id="bank_name" value="中国银行">
                                <div class="bank-layer" id="bank_layer" v-show="isBank">
                                    <div class="bank-layer-main scroll-bank-layer-main" style="height: 250px;">
                                        <div class="bank-btn-close-wrap">
                                            <a href="javascript:;" class="bank-btn-close js-close" id="bank_layer_close" @click="close">关闭银行列表</a>
                                        </div>
                                        <div class="bank-list-wrap">
                                            <div class="bank-list-title">
                                                <h3 id="bank_other" style="line-height: 30px;margin: 10px auto;">请选择储蓄卡银行（仅支持储蓄卡，不支持信用卡）</h3>
                                            </div>
                                            <div class="bank-list" id="commbank_list_hz">
                                                <label class="bank-logo-wrap js-bank">
                                                    <input type="radio" name="bank_code" value="1040000" data-addr="BOCB2C" checked v-model="vbank">
                                                    <span class="bank-logo bank-BOCB2C" title="中国银行">
                                                        <span class="bank-logo-name">中国农业银行</span>
                                                    </span>
                                                    <span class="bank-ico-selected" style="display: none"></span>
                                                </label>
                                                <label class="bank-logo-wrap js-bank">
                                                    <input type="radio" name="bank_code" value="1030000" data-addr="ABC" v-model="vbank">
                                                    <span class="bank-logo bank-ABC" title="中国农业银行">
                                                        <span class="bank-logo-name">中国农业银行</span>
                                                    </span>
                                                    <span class="bank-ico-selected"  style="display: none"></span>
                                                </label>
                                                <label class="bank-logo-wrap js-bank">
                                                    <input type="radio" name="bank_code" value="1020000" data-addr="ICBCB2C" v-model="vbank">
                                                    <span class="bank-logo bank-ICBCB2C" title="中国工商银行">
                                                        <span class="bank-logo-name">中国工商银行</span>
                                                    </span>
                                                    <span class="bank-ico-selected" style="display: none"></span>
                                                </label>
                                                <label class="bank-logo-wrap js-bank">
                                                    <input type="radio" name="bank_code" value="1050000" data-addr="CCB" v-model="vbank">
                                                    <span class="bank-logo bank-CCB" title="中国建设银行">
                                                        <span class="bank-logo-name">中国建设银行</span>
                                                    </span>
                                                    <span class="bank-ico-selected" style="display: none"></span>
                                                </label>
                                                <label class="bank-logo-wrap js-bank">
                                                    <input type="radio" name="bank_code" value="1000000" data-addr="POSTGC" v-model="vbank">
                                                    <span class="bank-logo bank-POSTGC" title="中国邮政储蓄银行">
                                                        <span class="bank-logo-name">邮政储蓄</span>
                                                    </span>
                                                    <span class="bank-ico-selected" style="display: none"></span>
                                                </label>
                                                <label class="bank-logo-wrap js-bank">
                                                    <input type="radio" name="bank_code" value="3080000" data-addr="CMB" v-model="vbank">
                                                    <span class="bank-logo bank-CMB" title="招商银行">
                                                        <span class="bank-logo-name">招商银行</span>
                                                    </span>
                                                    <span class="bank-ico-selected" style="display: none"></span>
                                                </label>
                                                <label class="bank-logo-wrap js-bank">
                                                    <input type="radio" name="bank_code" value="3090000" data-addr="CIB" v-model="vbank">
                                                    <span class="bank-logo bank-CIB" title="兴业银行">
                                                        <span class="bank-logo-name">兴业银行</span>
                                                    </span>
                                                    <span class="bank-ico-selected" style="display: none"></span>
                                                </label>
                                                <label class="bank-logo-wrap js-bank">
                                                    <input type="radio" name="bank_code" value="3070000" data-addr="SPABANK" v-model="vbank">
                                                    <span class="bank-logo bank-SPABANK" title="平安银行">
                                                        <span class="bank-logo-name">平安银行</span>
                                                    </span>
                                                    <span class="bank-ico-selected" style="display: none"></span>
                                                </label>
                                                <label class="bank-logo-wrap js-bank">
                                                    <input type="radio" name="bank_code" value="3010000" data-addr="COMM_D" v-model="vbank">
                                                    <span class="bank-logo bank-COMM_D" title="交通银行">
                                                        <span class="bank-logo-name">交通银行</span>
                                                    </span>
                                                    <span class="bank-ico-selected" style="display: none"></span>
                                                </label>
                                                <label class="bank-logo-wrap js-bank">
                                                    <input type="radio" name="bank_code" value="3050000" data-addr="CMBC" v-model="vbank">
                                                    <span class="bank-logo bank-CMBC" title="民生银行">
                                                        <span class="bank-logo-name">民生银行</span>
                                                    </span>
                                                    <span class="bank-ico-selected" style="display: none"></span>
                                                </label>
                                                <label class="bank-logo-wrap js-bank">
                                                    <input type="radio" name="bank_code" value="3020000" data-addr="CITIC" v-model="vbank">
                                                    <span class="bank-logo bank-CITIC" title="中信银行">
                                                        <span class="bank-logo-name">中信银行</span>
                                                    </span>
                                                    <span class="bank-ico-selected" style="display: none"></span>
                                                </label>
                                                <label class="bank-logo-wrap js-bank">
                                                    <input type="radio" name="bank_code" value="3030000" data-addr="CEBBANK" v-model="vbank">
                                                    <span class="bank-logo bank-CEBBANK" title="光大银行">
                                                        <span class="bank-logo-name">光大银行</span>
                                                    </span>
                                                    <span class="bank-ico-selected" style="display: none"></span>
                                                </label>
                                                <label class="bank-logo-wrap js-bank">
                                                    <input type="radio" name="bank_code" value="3060000" data-addr="GDB" v-model="vbank">
                                                    <span class="bank-logo bank-GDB" title="广东发展银行">
                                                        <span class="bank-logo-name">广东发展银行</span>
                                                    </span>
                                                    <span class="bank-ico-selected" style="display: none"></span>
                                                </label>
                                                <label class="bank-logo-wrap js-bank">
                                                    <input type="radio" name="bank_code" value="4031000" data-addr="BJRCB" v-model="vbank">
                                                    <span class="bank-logo bank-BJRCB" title="北京银行">
                                                        <span class="bank-logo-name">北京银行</span>
                                                    </span>
                                                    <span class="bank-ico-selected" style="display: none"></span>
                                                </label>
                                                <label class="bank-logo-wrap js-bank">
                                                    <input type="radio" name="bank_code" value="4083320" data-addr="NBBANK" v-model="vbank">
                                                    <span class="bank-logo bank-NBBANK" title="宁波银行">
                                                        <span class="bank-logo-name">宁波银行</span>
                                                    </span>
                                                    <span class="bank-ico-selected" style="display: none"></span>
                                                </label>
                                                <label class="bank-logo-wrap js-bank">
                                                    <input type="radio" name="bank_code" value="4233310" data-addr="HZCBB2C" v-model="vbank">
                                                    <span class="bank-logo bank-HZCBB2C" title="杭州银行">
                                                        <span class="bank-logo-name">杭州银行</span>
                                                    </span>
                                                    <span class="bank-ico-selected" style="display: none"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-line high-text" style="margin-top: 20px;">
                        <label class="label">银行卡账号：</label>
                        <div class="element">
                            <input type="text" style="width: 280px;" class="ipt_inform Validform_error">
                        </div>
                    </div>
                    <div class="form-line high-text" style="margin-top: 20px;">
                        <label class="label">银行卡姓名：</label>
                        <div class="element">
                            <input type="text" style="width: 150px;" class="ipt_inform Validform_error" >
                        </div>
                    </div>
                    <div class="sub-box">
                        <input type="button" class="account-btn" id="submit" value="提交">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bind-account",
        components:{
        },
        data(){
            return {
                vbank:"",
                isBank:false,
            }
        },
        methods:{
            openBank(){
                this.isBank=!this.isBank;
            },
            close(){
                this.isBank=false
            }
        }
    }
</script>

<style scoped>
    .fund-management{
        padding: 6px 15px;
        box-sizing: border-box;
    }
    .management-title{
        display: inline-block;
        font-weight: normal;
        margin: 20px 0;
        line-height: 32px;
        width: 100%;
        height: 30px;
    }
    .management-title h2{
        width: 200px;
        float: left;
    }
    .time-selection{
        float: right;
        position: relative;
    }
    .detail{
        display: block;
        border-top: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
        line-height: 42px;
        width: 100%;
        height: 42px;
    }
    .detail li{
        height: 41px;
        float: left;
    }
    .router-link-active{
        height: 41px;
        border-bottom: 2px solid #FF4285;
        color: #FF4285;
    }
    .active-text{
        display: inline-block;
        float: left;
        margin: 12px auto;
        padding: 0 10px;
        font-size: 13px;
        line-height: 16px;
        height: 16px;
    }
    .show-netbank-form {
        height: 273px;
    }
    .form {
        width: 100%;
        padding-top: 1px;
    }
    .form:after {
        content: ".";
        clear: both;
        display: block;
        height: 0;
        visibility: hidden;
    }
    div {
        display: block;
    }
    fieldset {
        display: block;
        margin-inline-start: 2px;
        margin-inline-end: 2px;
        padding-block-start: 0.35em;
        padding-inline-start: 0.75em;
        padding-inline-end: 0.75em;
        padding-block-end: 0.625em;
        min-width: -webkit-min-content;
        border-width: 2px;
        border-style: groove;
        border-color: threedface;
        border-image: initial;
    }
    .form, .form-font {
        font-size: 14px;
    }
   .label {
        float: left;
        width: 26%;
        margin-left: -5px;
        font-size: 12px;
        padding-right: 5px;
        padding-top: 1px;
        _padding-top: 0;
        line-height: 22px;
        text-align: right;
    }
    .bank-label .bank-drop-wrap {
        background-position: right 0;
        vertical-align: top;
        min-width: 60px;
        _width: 60px;
        padding-right: 22px;
        margin-left: 11px;
        text-align: center;
        cursor: pointer;
        text-decoration: none;
    }
    .bank-label .bank-drop {
        position: relative;
        background-position: -123px 0;
        height: 40px;
        line-height: 40px;
        line-height: 44px\9;
        _line-height: 40px;
        overflow: hidden;
        margin-left: -2px;
    }
    .form-line, .form-guide, .form-line-btn, .form-error {
        zoom: 1;
    }
    .netbank-form .bank-form-line .label {
        height: 40px;
        line-height: 40px;
    }
    .netbank-form .label, .fastbank-form .label {
        width: 18%;
    }
    .form .label {
        float: left;
        width: 26%;
        margin-left: -5px;
        font-size: 12px;
        padding-right: 5px;
        padding-top: 1px\9;
        _padding-top: 0;
        line-height: 22px;
        text-align: right;
    }
    .netbank-form .label, .fastbank-form .label {
        width: 18%;
    }
    .netbank-form .element, .fastbank-form .element {
        width: 82%;
    }
    .bank-label .bank-drop-ico {
        background-position: 0 -35px;
        position: absolute;
        right: 14px;
        top: 18px;
        width: 8px;
        height: 5px;
    }
    .form .element {
        float: right;
        min-height: 22px;
        _height: 22px;
        width: 74%;
        padding-bottom: 15px;
    }
    .form-line:after, .form-guide:after, .form-line-btn:after, .form-error:after {
        content: ".";
        clear: both;
        display: block;
        height: 0;
        visibility: hidden;
    }
    .bank {
        zoom: 1;
        position: relative;
        font-size: 12px;
        z-index: 100;
    }
    .bank-label {
        float: left;
    }
    .bank-label .bank-wrap {
        z-index: 11;
        position: relative;
        float: left;
        background-color: #FFFFFF;
        line-height: 38px;
        height: 38px;
        _width: 165px;
        min-width: 165px;
        white-space: nowrap;
        padding-right: 5px;
        border: 1px solid #CDCDCD;
        cursor: pointer;
    }
    .show-bank-label .bank-label {
        display: block;
    }
    .form input, .form select, .form textarea {
        font-size: 12px;
    }
    input, select, textarea {
        box-sizing: border-box;
        margin-right: 6px;
    }
    .bank-layer {
        zoom: 1;
        clear: both;
        padding-top: 5px;
        position: absolute;
        z-index: 2;
        left: 0;
        top: 40px;
    }
    .bank-layer-main {
        float: left;
        width: 601px;
        padding: 0 20px 20px;
        border: 1px solid #CDCDCD;
        background-color: #FFFFFF;
        clear: both;
        overflow: hidden;
        -webkit-box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.3);
        -moz-box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.3);
        -khtml-box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.3);
        box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.3);
    }
    .bank .scroll-bank-layer-main {
        overflow-y: auto;
        position: relative;
    }
    .bank-layer .bank-btn-close-wrap {
        z-index: 10;
        position: relative;
        _zoom: 1;
    }
    .form a {
        _display: inline-block;
        font-size: 12px;
        vertical-align: middle;
    }
    .bank-btn-close {
        background-position: 0 0;
        position: absolute;
        right: -18px;
        top: 2px;
        width: 18px;
        height: 18px;
        overflow: hidden;
        text-indent: -9999px;
    }
    .bank-layer .bank-list-wrap {
        zoom: 1;
        padding-top: 20px;
    }
    .bank-layer .bank-list-title {
        padding-bottom: 6px;
        margin-top: -6px;
        font-family: simsun;
        overflow: hidden;
        zoom: 1;
    }
    .bank-layer .bank-list-title h3 {
        float: left;
        margin-right: 10px;
        color: #333333;
        font-size: 12px;
        font-weight: 700;
    }
    .bank-layer .bank-list {
        float: left;
        width: 600px;
        position: relative;
        border-right: 1px dotted #C9C9C9;
        border-bottom: 1px dotted #C9C9C9;
    }
    .bank-layer .bank-list .bank-logo-wrap {
        z-index: 2;
        float: left;
        height: 33px;
        width: 149px;
        padding: 6px 0;
        border: 1px dotted #C9C9C9;
        background-color: #FFFFFF;
        border-right: 0 none;
        border-bottom: 0 none;
        cursor: pointer;
        overflow: hidden;
        position: relative;
    }
    .bank .bank-logo-wrap input {
        position: absolute;
        top: -9999px;
        left: -9999px;
    }
    .bank-layer .bank-list .bank-logo-wrap .bank-logo {
        width: 100%;
    }
    .bank .bank-logo {
        overflow: visible;
        line-height: 0;
    }
    .tid-bank-logo, .bank-ICBCB2C, .bank-CMB, .bank-CCB, .bank-ABC, .bank-BOCB2C, .bank-SPDB, .bank-sdb, .bank-CIB, .bank-BJRCB, .bank-CEBBANK, .bank-COMM_D, .bank-CMBC, .bank-CITIC, .bank-GDB, .bank-SPABANK, .bank-POSTGC, .bank-jsb, .ico-cop, .ico-ydt, .bank-srcb, .bank-bosh, .bank-hxb, .bank-BEA_D, .bank-ordos, .bank-cbhb, .bank-jzb, .bank-njcb, .bank-NBBANK, .bank-gdrcu, .bank-nccb, .bank-glccb, .bank-bsb, .bank-ynrcc, .bank-gzcb, .bank-cqrcb, .bank-zjcb, .bank-sdrcu, .bank-jshbank, .bank-klb, .bank-hrbcb, .bank-crb, .bank-cqcb, .bank-shbank, .bank-HZCBB2C, .bank-hkb, .bank-sdebank, .bank-qlb, .bank-hangseng, .bank-sznsh, .bank-zsxlc, .bank-hdcb, .bank-xxssh, .bank-nycbank, .bank-jjccb, .bank-bankofjdz, .bank-bek, .bank-zjtlcb, .bank-bocd, .bank-zjnx, .bank-zfb, .bank-cft {
        background: url(../../../../assets/img/bank.png) no-repeat;
        display: inline-block;
        position: relative;
        height: 33px;
        width: 141px;
        overflow: hidden;
        line-height: 999px;
        vertical-align: top;
    }
    .bank-BOCB2C {
        background-position: 0 -165px;
    }
    .bank .bank-logo-name {
        visibility: hidden;
    }
    .bank-ico-selected {
        display: none;
        position: absolute;
        bottom: 0;
        _bottom: -1px;
        right: 0;
        _right: -1px;
        width: 15px;
        height: 13px;
        background-position: 0 -21px;
    }
    .bank-drop, .bank-drop-wrap, .bank-drop-ico, .bank-ico-arrow, .bank-btn-close, .bank .btn-change-bank,   .bank-ico-selected, .bank-ico-fast {
        background: url(https://www.xinshike.com/static/images/bank_ctrl.png) no-repeat;
        display: inline-block;
        overflow: hidden;
    }
    .bank-ABC {
        background-position: 0 -132px;
    }
    .bank-ICBCB2C {
        background-position: 0 -35px;
    }
    .bank-CCB {
        background-position: 0 -99px;
    }
    .bank-POSTGC {
        background-position: 0 -528px;
    }
    .bank-CMB {
        background-position: 0 -66px;
    }
    .bank-CIB {
        background-position: 0 -264px;
    }
    .bank-SPABANK {
        background-position: 0 -495px;
    }
    .bank-COMM_D {
        background-position: 0 -363px;
    }
    .bank-CMBC {
        background-position: 0 -396px;
    }
    .bank-CITIC {
        background-position: 0 -429px;
    }
    .bank-CEBBANK {
        background-position: 0 -330px;
    }
    .bank-GDB {
        background-position: 0 -462px;
    }
    .bank-BJRCB {
        background-position: 0 -297px;
    }
    .bank-NBBANK {
        background-position: 0 -792px;
    }
    .bank-HZCBB2C {
        background-position: 0 -1351px;
    }
    .bank:after {
        content: ".";
        clear: both;
        display: block;
        height: 0;
        visibility: hidden;
    }
    .ipt_inform {
        border: 1px solid #d0d2d4;
        width: 240px;
        height: 35px;
        line-height: 17px;
        _line-height: 13px;
        padding: 8px;
        color: #888;
        background-color: #FFF;
    }
    .sub-box{
        margin-top: 50px;
        width: 100%;
        height: 45px;
        position: relative;
    }
    #submit{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 250px;
        height: 45px;
        background:#5E62A2;
        line-height: 45px;
        text-align: center;
        color: #fff;
        font-size: 18px;
        border-radius :20px;
    }
</style>