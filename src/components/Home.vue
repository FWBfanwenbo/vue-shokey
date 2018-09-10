<template>
    <div class="home">
        <STopBar></STopBar>
        <FSearchHeader></FSearchHeader>
        <div class="front-nav-headr">
            <div class="top-list">
                <header class="nav-header center iner">
                    <div class="header-left">
                        <span class="iconfont f-icon vertical">A</span>
                        <span class="f-text vertical">热门试用分类</span>
                    </div>
                    <nav class="nav-box">
                        <li @click="onBar(item)" v-for="item in navList">
                            <span >{{item.text}}</span>
                        </li>
                    </nav>
                </header>
            </div>
        </div>
        <main class="outer">
           <div class="inner">
               <keep-alive>
                   <router-view></router-view>
               </keep-alive>
           </div>
        </main>
      </div>
</template>

<script>
    import LeftSlider from  "@/view/left/Slider";
    import STopBar from "@/view/seller-components/TopBar"
    import FSearchHeader from "@/view/front/SearchHeader"
    import FNavHeader from "@/view/front/NavHeader"

    export default {
        name: "Home",
        components:{
            LeftSlider,
            STopBar,
            FSearchHeader,
            FNavHeader
        },
        data(){
            return {
                sliderList:[
                    {
                        id:0,
                        icon:"",
                        title:"流行女装",
                        contentList:[{
                            lid:"l_0",
                            lTitle:"羽绒服/",
                            url:""
                        },{
                            lid:"l_1",
                            lTitle:"呢外套/",
                            url:""
                        },{
                            lid:"l_2",
                            lTitle:"毛衣",
                            url:""
                        },]
                    },
                    {
                        id:0,
                        icon:"",
                        title:"流行女装",
                        contentList:[{
                            lid:"l_0",
                            lTitle:"羽绒服",
                            url:""
                        },{
                            lid:"l_1",
                            lTitle:"呢外套",
                            url:""
                        },{
                            lid:"l_2",
                            lTitle:"毛衣",
                            url:""
                        },]
                    },
                    {
                        id:0,
                        icon:"",
                        title:"流行女装",
                        contentList:[{
                            lid:"l_0",
                            lTitle:"羽绒服",
                            url:""
                        },{
                            lid:"l_1",
                            lTitle:"呢外套",
                            url:""
                        },{
                            lid:"l_2",
                            lTitle:"毛衣",
                            url:""
                        },]
                    },
                    {
                        id:0,
                        icon:"",
                        title:"流行女装",
                        contentList:[{
                            lid:"l_0",
                            lTitle:"羽绒服",
                            url:""
                        },{
                            lid:"l_1",
                            lTitle:"呢外套",
                            url:""
                        },{
                            lid:"l_2",
                            lTitle:"毛衣",
                            url:""
                        },]
                    },
                    {
                        id:0,
                        icon:"",
                        title:"流行女装",
                        contentList:[{
                            lid:"l_0",
                            lTitle:"羽绒服",
                            url:""
                        },{
                            lid:"l_1",
                            lTitle:"呢外套",
                            url:""
                        },{
                            lid:"l_2",
                            lTitle:"毛衣",
                            url:""
                        },]
                    },
                    {
                        id:0,
                        icon:"",
                        title:"流行女装",
                        contentList:[{
                            lid:"l_0",
                            lTitle:"羽绒服",
                            url:""
                        },{
                            lid:"l_1",
                            lTitle:"呢外套",
                            url:""
                        },{
                            lid:"l_2",
                            lTitle:"毛衣",
                            url:""
                        },]
                    },
                    {
                        id:0,
                        icon:"",
                        title:"流行女装",
                        contentList:[{
                            lid:"l_0",
                            lTitle:"羽绒服",
                            url:""
                        },{
                            lid:"l_1",
                            lTitle:"呢外套",
                            url:""
                        },{
                            lid:"l_2",
                            lTitle:"毛衣",
                            url:""
                        },]
                    },
                    {
                        id:0,
                        icon:"",
                        title:"流行女装",
                        contentList:[{
                            lid:"l_0",
                            lTitle:"羽绒服",
                            url:""
                        },{
                            lid:"l_1",
                            lTitle:"呢外套",
                            url:""
                        },{
                            lid:"l_2",
                            lTitle:"毛衣",
                            url:""
                        },]
                    },
                ],
                freeList:[],
                searchType:"免费试用",
                navList:[
                    {
                        id:0,
                        text:"首页",
                        url:"/indexpage"
                    },{
                        id:1,
                        text:"免费实用",
                        url:"/home/moneytry"
                    },{
                        id:2,
                        text:"金币兑换",
                        url:"/home/exchange"
                    },{
                        id:3,
                        text:"新人必中",
                        url:"/home/newpeople"
                    },{
                        id:4,
                        text:"一战成名",
                        url:"/home/becomefamous"
                    }, {
                        id: 5,
                        text: "人气赚金币",
                        url:"/home/popularity"
                    },{
                        id:5,
                        text:"亏本清仓",
                        url:"kbqc"
                    }
                ],
            }
        },
        methods:{
            onBar(obj){
                console.log(obj.url)
                this.$router.push({
                    path:`${obj.url}`
                })
            }
        }
    }
</script>

<style scoped>
.top-nav li{
    font-size: 12px;
    line-height: 30px;
}
.top-nav li a{
    display: block;
    float: left;
    padding: 0 15px;
}
    .center{
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50%,0);
    }
    option:nth-child(1){
        color: red;
    }
    .f-icon{
        height: 37px;
        float: left;
        margin-right: 10px;
        font-size: 18px;
        color:#fff;
    }
    .f-text{
        height: 37px;
        font-size: 18px;
        color:#fff;
        float: left;
    }
    .img-list a{
        display: inline-block;
        z-index: 2;
        background-size: 100%;
        margin-left: 200px;
        margin-top: 1px;
    }
    .img-list a img{
        width: 100%;
        display: block;
        margin: 0 auto;
        transform: scaleX(1) scaleY(1);
    }
    .title-left h3{
        font-size: 22px;
        display: inline-block;
        margin-right: 12px;
    }
    .title-left span{
        font-size: 14px;
        font-weight: 400;
    }
    .product li{
        width: 232px;
        height: 457px;
        overflow: hidden;
        padding: 4px;
        box-sizing: border-box;
        border: 1px solid #f2f2f2;
        float: left;
        margin-right: 10px;
        margin-bottom: 10px;
    }
    .product li:nth-child(5n){
        margin-right: 0;
    }
    .img-box img{
        width: 100%;
        height: 100%;
    }
    .release-icon img{
        width: 18px;
        height: 18px;
    }
    .btn-box span{
        text-align: center;
        display: block;
        width: 100%;
        line-height: 26px;
        height: 26px;
        font-size: 14px;
        color: #ff4285;
        border: 1px solid #ff4285;
        border-radius: 4px;
   }
.top-list{
    width: 100%;
    height: 37px;
    position: relative;
}
.nav-header{
    height: 37px;
}
.header-left{
    width: 197px;
    height: 37px;
    padding: 0 33px;
    box-sizing: border-box;
    background: red;
    float: left;
    position: relative;
}
.nav-header nav{
    float: left;
    margin-right: 300px;
}
.nav-header nav li{
    position: relative;
    display: inline-block;
    background-color: transparent;
    font-size: 14px;
    margin-left: 15px;
}
.nav-header nav li span{
    display: block;
    line-height: 37px;
}
.iner{
    width: 1200px;
}
.jianlou>img{
    width: 160px;
    height: 37px;
}
.center{
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%,0);
}
.iner{
    width: 1200px;
}
.f-icon{
    height: 37px;
    float: left;
    margin-right: 10px;
    font-size: 18px;
    color:#fff;
}
.f-text{
    height: 37px;
    font-size: 18px;
    color:#fff;
    float: left;
}
.vertical{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.outer{
    width: 100%;
    position: relative;
}
    .inner{
        width: 1200px;
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50%,0);
    }
</style>