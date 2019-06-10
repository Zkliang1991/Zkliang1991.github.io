<template>
<ul class="content">
    <li v-for="(contenti,i) in content" :key="i" :class="{active:i==ins}">
        <div class="img">
            <img :src="contenti.img" alt="">
        </div>
        <p>{{contenti.text}}</p>
        <dl class="contenticon">
            <router-link :to="{name:contenti.value}" tag="dd" v-for="(icons,i) in contenti.icon" :key="i" class="donghuaDD">
                <div class="iimg">
                    <img :src="icons.img" alt="">
                </div>
                <p>{{icons.text}}</p>
            </router-link>
        </dl>
    </li>
    </ul>  
</template>

<script>
import {mapState} from 'vuex'
export default {
     data(){
         return {
           content:[
               {img:require("../assets/images/11.jpg"),text:"春夏热销",value:"fenlei", icon:[{img:require("../assets/images/100.png"),text:"印花T恤"},{img:require("../assets/images/101.png"),text:"格子衬衣"},{img:require("../assets/images/102.png"),text:"夹克"},{img:require("../assets/images/103.png"),text:"休闲西装"},{img:require("../assets/images/104.png"),text:"套头卫衣"},{img:require("../assets/images/105.png"),text:"长袖T恤"},{img:require("../assets/images/106.jpg"),text:"短袖衬衫"},{img:require("../assets/images/107.png"),text:"Polo衫"},{img:require("../assets/images/108.png"),text:"短袖T恤"},{img:require("../assets/images/110.png"),text:"皮衣/皮夹"},{img:require("../assets/images/111.png"),text:"防晒/皮肤..."},{img:require("../assets/images/112.png"),text:"棒球服"},{img:require("../assets/images/113.png"),text:"风衣"},{img:require("../assets/images/114.png"),text:"牛仔外套"}]},

               {img:require("../assets/images/10.jpg"),text:"春夏热销",value:"fenlei", icon:[{img:require("../assets/images/110.png"),text:"皮衣/皮夹"},{img:require("../assets/images/111.png"),text:"防晒/皮肤..."},{img:require("../assets/images/112.png"),text:"棒球服"},{img:require("../assets/images/113.png"),text:"风衣"},{img:require("../assets/images/114.png"),text:"牛仔外套"},{img:require("../assets/images/115.png"),text:"中长款外套"},{img:require("../assets/images/116.png"),text:"短款外套"},{img:require("../assets/images/117.png"),text:"皮衣/皮革"},{img:require("../assets/images/118.png"),text:"夹克"},{img:require("../assets/images/120.png"),text:"迷彩风"},{img:require("../assets/images/121.png"),text:"潮流个性"},{img:require("../assets/images/122.png"),text:"国际大牌"},{img:require("../assets/images/123.png"),text:"中国风"},{img:require("../assets/images/124.png"),text:"大码"}]},

               {img:require("../assets/images/9.jpg"),text:"春夏热销",value:"fenlei", icon:[{img:require("../assets/images/120.png"),text:"迷彩风"},{img:require("../assets/images/121.png"),text:"潮流个性"},{img:require("../assets/images/122.png"),text:"国际大牌"},{img:require("../assets/images/123.png"),text:"中国风"},{img:require("../assets/images/124.png"),text:"大码"},{img:require("../assets/images/125.png"),text:"西装套装"},{img:require("../assets/images/126.png"),text:"运动着装"},{img:require("../assets/images/127.png"),text:"情侣/中性"},{img:require("../assets/images/128.png"),text:"父子装"},{img:require("../assets/images/130.png"),text:"防晒衣"},{img:require("../assets/images/131.jpg"),text:"休闲裤"},{img:require("../assets/images/132.jpg"),text:"大衣"},{img:require("../assets/images/133.jpg"),text:"卫衣"},{img:require("../assets/images/134.jpg"),text:"风衣"},{img:require("../assets/images/135.jpg"),text:"针织衫"},{img:require("../assets/images/136.png"),text:"外套"}]},

               {img:require("../assets/images/12.jpg"),text:"春夏热销",value:"fenlei", icon:[{img:require("../assets/images/130.png"),text:"防晒衣"},{img:require("../assets/images/131.jpg"),text:"休闲裤"},{img:require("../assets/images/132.jpg"),text:"大衣"},{img:require("../assets/images/133.jpg"),text:"卫衣"},{img:require("../assets/images/134.jpg"),text:"风衣"},{img:require("../assets/images/135.jpg"),text:"针织衫"},{img:require("../assets/images/136.png"),text:"外套"},{img:require("../assets/images/137.jpg"),text:"半身裙"},{img:require("../assets/images/138.jpg"),text:"套装"},{img:require("../assets/images/140.png"),text:"短裤"},{img:require("../assets/images/141.png"),text:"束脚裤"},{img:require("../assets/images/142.png"),text:"西裤"},{img:require("../assets/images/143.png"),text:"运动裤"},{img:require("../assets/images/144.png"),text:"小脚裤"}]},
            
               {img:require("../assets/images/13.jpg"),text:"春夏热销",value:"fenlei", icon:[{img:require("../assets/images/140.png"),text:"短裤"},{img:require("../assets/images/141.png"),text:"束脚裤"},{img:require("../assets/images/142.png"),text:"西裤"},{img:require("../assets/images/143.png"),text:"运动裤"},{img:require("../assets/images/144.png"),text:"小脚裤"},{img:require("../assets/images/145.png"),text:"九分裤"},{img:require("../assets/images/146.png"),text:"牛仔裤"},{img:require("../assets/images/147.png"),text:"休闲裤"},{img:require("../assets/images/148.png"),text:"工装裤"},{img:require("../assets/images/100.png"),text:"印花T恤"},{img:require("../assets/images/101.png"),text:"格子衬衣"},{img:require("../assets/images/102.png"),text:"夹克"},{img:require("../assets/images/103.png"),text:"休闲西装"},{img:require("../assets/images/104.png"),text:"套头卫衣"},{img:require("../assets/images/105.png"),text:"长袖T恤"},{img:require("../assets/images/106.jpg"),text:"短袖衬衫"}]},
            
               {img:require("../assets/images/14.jpg"),text:"品牌推荐",value:"fenlei", icon:[{img:require("../assets/images/155.png"),text:"七匹狼"},{img:require("../assets/images/156.png"),text:"海澜之家"},{img:require("../assets/images/157.png"),text:"金利来"},{img:require("../assets/images/158.png"),text:"森马"}]},
           ]
         }
     },
    computed:{
        ...mapState(['ins'])
    }
}
</script>

<style>
.donghuaDD {
  animation: zoomIn 2s;
}
.content{
    width: 79%;
    float: right;
    margin-left: 1px;
}
.content li{
    display: none;

}
.content li.active{
    display: block;
    
}
.content .img{
    width: 100%;
    height: 2.5rem;
}
.content .img img{
   width: 100%;
   height: 100%;
}
.content p{
    font-size: .32rem;
    color: #222222 ;
    text-align: center;
    
   margin:.2rem 0;

}
.content span{
    font-size: .28rem;
    color: #222222;
}
.contenticon {
    width: 100%;
    float: left;
}
.contenticon dd{
     width: 33.3%;
     float: left;
}
.contenticon dd p{
    font-size: .28rem;
}
.contenticon .iimg{
    width: 100%;
    height: 100%;
}
.contenticon .iimg img{
    width: 83%;
    height: 100%;
    margin-left: 8%;
}
</style>
