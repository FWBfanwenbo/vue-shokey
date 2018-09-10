<template>
    <div class="new-people">
       <div class="np-wrapper">
           <div class="np-title">
               <h3 class="title-bold">新人专享好礼</h3>
           </div>
           <div class="np-box">
               <ul>
                   <li class="np-list">
                       <div class="npl-pic">
                           <div class="npl-link">
                               <img src="https://img.xinshike.com/member/2018/0903/1809031229062063.png!200" alt="">
                           </div>
                       </div>
                       <div class="npl-title">
                           <div class="icon-taobao"></div>
                           植护抽纸12包
                       </div>
                       <div class="npl-price">
                           ￥18.99
                           <span>已申请225次</span>
                       </div>
                       <div class="progbox">
                           <label>剩余57份</label>
                           <div class="progress">
                               <div class="progbar" style="width: 47.50px;"></div>
                           </div>
                           <a href="" class="try-btn">立即申请</a>
                       </div>
                   </li>
               </ul>
           </div>
       </div>
    </div>
</template>

<script>
    export default {
        name: "newpeople"
    }
</script>

<style scoped>
    .new-people{
      background: #e5e5e5;
      padding: 40px 0 30px 0;
  }
    .np-wrapper{
        overflow: hidden;
    }
    .np-title:before{
        content: "";
        display: inline-block;
        border-bottom: 2px solid #F37B3F;
        width: 400px;
        margin-bottom: 11px;
    }
    .np-title:after{
        content: "";
        display: inline-block;
        border-bottom: 2px solid #F37B3F;
        width: 400px;
        margin-bottom: 11px;
    }
    .title-bold{
        width: 308px;
        display: inline-block;
        background: #F37B3F;
        border-radius: 100px;
        font-size: 36px;
        color: #fff;
        line-height: 51px;
        text-align: center;
        margin: 0 40px;
    }
    .title-bold:before{
        content: "";
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #fff;
        margin: 0 16px 10px 0;
    }
    .title-bold:after{
        content: "";
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #fff;
        margin: 0 0 10px 16px;
    }
    .np-box{
        margin-top: 30px;
    }
    .np-box:before{
        display: table;
        content: '';
    }
    .np-list{
        float: left;
        position: relative;
        display: block;
        border: 1px solid #e5e5e5;
        margin-right: 20px;
        margin-bottom: 30px;
        background: #fff;
        width: 221px;
        height: 330px;
    }
    .npl-link{
        color: #666666;
    }
    .npl-link img{
        width: 221px;
        height: 221px;
    }
    .npl-title{
        display: block;
        margin: 12px auto;
        line-height: 16px;
        color: #333;
        width: 200px;
        height: 16px;
        overflow: hidden;
    }
    .icon-taobao{
        display: inline-block;
        margin-right: 4px;
        vertical-align: middle;
        width: 16px;
        height: 16px;
        background: url(https://www.xinshike.com/static/images/icon-taobao.jpg) no-repeat;
    }
    .npl-price{
        position: relative;
        margin: 0px auto;
        width: 100%;
        color: #ff4285;
        font-size: 16px;
        line-height: 20px;
        width: 200px;
        height: 20px;
    }
    .npl-price span{
        float: right;
        font-size: 12px;
        color: #666;
    }
    .progbox{
        display: block;
        margin: 10px 0px 0px 10px;
        height: 30px;
        width: 90px;
    }
    .progbox label{
        display: inline-block;
        line-height: 14px;
        margin-bottom: 4px;
        color: #999;
        width: 100%;
        height: 14px;
    }
    .progress{
        border: 1px solid #ff70a0;
        background-color: #ffecf3;
        border-radius: 8px;
        width: 90px;
        height: 8px;
    }
    .progbar{
        float: left;
        background-color: #ff80aa;
        height: 8px;
    }
    .try-btn{
        position: absolute;
        bottom: 10px;
        right: 10px;
        border: 1px solid #ff4285;
        font-size: 12px;
        text-align: center;
        border-radius: 2px;
        line-height: 22px;
        color: #ff4285;
        width: 66px;
        height: 22px;
    }
</style>