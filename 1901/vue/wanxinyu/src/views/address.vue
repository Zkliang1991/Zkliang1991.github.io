<template>
    <div class="yanse">
        <Head title="收货地址" :show="!!1"></Head>
        <div class="top" @click="xuandizhi">
            <i  class="iconfont"  v-html="anquan.icon"></i>
            <span>请填写收货地址：</span>
        </div>
        <dizhi ref="xuandizhi"></dizhi>
        <div class="temai">精选特卖</div>
        <div class="divHeight"></div>
        <div class="tab-item">
            <a class="aui-well-item aui-well-item-clear b-line">
                <div class="aui-well-item-bd">
                    <h3>2019-5-28</h3>
                </div>
                <span class="aui-well-item-fr aui-well-item-fr-clear">待付款</span>
            </a>
            <div class="aui-mail-product b-line">
                <a href="javascript:;" class="aui-mail-product-item">
                    <div class="aui-mail-product-item-hd">
                        <img :src='good.goodimg'>
                    </div>
                    <div class="aui-mail-product-item-bd">
                        <p>{{good.goodname}}</p>
                    </div>
                    <div class="aui-mail-product-right">
                        <h4>{{good.goodprice *1 | money}}</h4>
                        <span>{{good.goodnum}}</span>
                    </div>
                </a>
            </div>
            <a href="javascript:;" class="aui-mail-payment">
                <p>
                    共<em>{{good.goodnum}}</em>
                    件商品 实付款: <i>￥{{good.goodprice*good.goodnum *1 | money}}</i>
                </p>
            </a>
        </div>
        <div class="yunfei">
            <span>运费</span>
            <p>万欣宇国际运费10元，再购10元即可免邮</p>
        </div>
        <div class="divHeight"></div>
        <div class="lijuan">
            <div class="lijuan2">使用礼券</div>
            <span>></span>
        </div>
        <div class="divHeight"></div>
        <div class="lijuan">
            <div class="lijuan2">使用口令</div>
            <span>></span>
        </div>
        <div class="divHeight"></div>
        <div class="jine">
            <div class="jine1">订单金额</div>
            <span>￥{{good.goodprice}}</span>
        </div>
        <div class="divHeight"></div>
        <div class="lijuan">
            <div class="lijuan2">运费</div>
            <span>0.00</span>
        </div>
        <div class="divHeight"></div>
        <div class="fukuan">
            <div class="fukuan1">货到付款</div>
            <div class="fukuan2" @click="fukuan(good.goodid)">在线支付</div>
        </div>
    </div>
</template>

<script>
import { http } from "../utils";
import {mapState,mapMutations,mapActions} from 'vuex';
import dizhi from "../components/dizhi.vue";
import {Toast} from 'mint-ui';
export default {
    data(){
        return{
            anquan:{txt:"首页",icon:"&#xe7c7;"},
            good:{},
        }
    },
    mounted(){
        this.good=this.$route.params.agood;
    },
    components:{
        dizhi
    },
    methods:{
        fukuan(goodid){
            if(document.getElementsByClassName('txtmangth')[0].value){
                http.get("/vue/updategood",{
                    params:{
                        username:this.username,
                        goodid:goodid,
                    }
                }).then(res=>{
                    this.$router.push({name:'fukuan'})
                })
            }else{
                Toast({
                    message: "亲，您忘记填写收货地址了哦",
                    duration: 1000,
                });
            }
        },
        xuandizhi(){
            this.$refs.xuandizhi.choseAdd();
        }
    },
    computed:{
        ...mapState(['username']),
    },
}
</script>

<style scoped lang="less">
.yanse{
    background-color: #fff;
}
.fukuan2{
    width: 47%;
    background-color: #a94254;
    color: #fff;
    border: none;
    float: right;
    letter-spacing: .02667rem;
    padding: 0;
    height: 1.2rem;
    line-height: 1.2rem;
    outline: 0;
    box-sizing: border-box;
    text-align: center;
    font-size: .42667rem;
    border-radius: .05333rem;
}
.fukuan1{
    border: 1px solid #caccd2;
    color: #caccd2;
    margin-right: .42667rem;
    float: left;
    width: 47%;
    background-color: #fff;
    letter-spacing: .02667rem;
    padding: 0;
    height: 1.2rem;
    line-height: 1.2rem;
    outline: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
    font-size: .42667rem;
    border-radius: .05333rem;
}
.jine{
    position: relative;
    height: 1.28rem;
    line-height: 1.28rem;
    font-size: .37333rem;
    font-weight: bolder;
    .jine1{
        margin-left: 0.3rem;
    }
    span{
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        right: 0;
        color: #e4007f;
        margin-right: 0.3rem;
    }
}
.lijuan{
    .lijuan2{
        margin-top: .26667rem;
        padding-left: .4rem;
        padding-right: .42667rem;
        background-color: #fff;
        float: left;
        padding-bottom: 0.26rem;
    }
    span{
        float: right;
        margin-top: 0.266rem;
        margin-right: 0.4rem;
        padding-bottom: 0.26rem;
    }
}
.yunfei{
    span{
        float: left;
        width: .93333rem;
        height: .48rem;
        line-height: .42667rem;
        overflow: hidden;
        text-align: center;
        margin-right: .13333rem;
        border: 1px solid rgba(58,89,152,.5);
        border-radius: .05333rem;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: #3a5998;
        font-size: .32rem;
        margin-top: .08rem;
        margin-left: 0.2rem;
    }
    p{
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        float: left;
        font-size: 0.3rem;
        padding: 0.1rem 0;
    }
    i{
        font-size: 0.35rem;
         margin-left: 0.1rem;
    }
}
.top{
    margin-top:0.85rem;
    background-color: #e8eaf4;
    line-height: .64rem;
    padding: .16rem .4rem;

    span{
        margin-left: 0.2rem;
    }
}

.dizhi{
    width: 100%;
    height: 1rem;
    background-color: red;
}

.temai{
    padding: .21333rem 0;
    margin-left: .4rem;
    margin-right: .4rem;
    font: inherit;
    color: black;
}

.good-box{
    margin-top:0.83rem;
}

a, label, button, input, select {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
    background: #fff;
    color: #666;
}

a {
    color: #666;
}

.clearfix::after {
    clear: both;
    content: ".";
    display: block;
    height: 0;
    visibility: hidden;
}


.divHeight {
    width: 100%;
    height: 10px;
    background: #f5f5f5;
    position: relative;
    overflow: hidden;
}

.r-line {
    position: relative;
}

.r-line:after {
    content: '';
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    height: 100%;
    border-right: 1px solid #D9D9D9;
    -webkit-transform: scaleX(0.5);
    transform: scaleX(0.5);
    -webkit-transform-origin: 100% 0;
    transform-origin: 100% 0;
}

.b-line {
    position: relative;
}

.b-line:after {
    content: '';
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #e2e2e2;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
}

.aui-flex {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    padding: 15px;
    position: relative;
}

.aui-flex-box {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    min-width: 0;
    font-size: 14px;
    color: #333;
}

/* 必要布局样式css */
.aui-flexView {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

.aui-scrollView {
    width: 100%;
    height: 100%;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    position: relative;
    /* margin-top: -44px; */
}

.aui-navBar {
    height: 44px;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    z-index: 1002;
    background: #ffffff;
}

.aui-navBar:after {
    content: '';
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #ccc;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
}

.aui-navBar-item {
    height: 44px;
    min-width: 25%;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 25%;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    padding: 0 0.9rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    color: #a0a0a0;
    position: relative;
}

.aui-navBar-item:first-child {
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    -ms-flex-order: 1;
    order: 1;
    margin-right: -25%;
    font-size: 16px;
    font-weight: bold;
}

.aui-navBar-item:last-child {
    -webkit-box-ordinal-group: 4;
    -webkit-order: 3;
    -ms-flex-order: 3;
    order: 3;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
}

.aui-center {
    -webkit-box-ordinal-group: 3;
    -webkit-order: 2;
    -ms-flex-order: 2;
    order: 2;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    height: 44px;
    width: 50%;
    margin-left: 25%;
}

.aui-center-title {
    text-align: center;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    display: block;
    text-overflow: ellipsis;
    font-size: 18px;
    color: #3c3c3c;
}

.icon {
    width: 20px;
    height: 20px;
    display: block;
    border: none;
    float: left;
    background-size: 20px;
    background-repeat: no-repeat;
}

.icon-return {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAADWElEQVRoQ+WbTWvUQBjHnye6u/UFqSAIWkQkRiFp8VKEWtsi+CE8148gfgJviidvimdvHkSpUNSq9CzsTLe7xaKFIoVCLx5k0+SRgRSWrZ2dvM1M4p43Ib/9//6TzGQW4T/7YAV4j/u+/wgA7gPAb0R8xhh7kvW6rQZ2Xbc1Njb2BgDuDgEuMsZeZoG2FjiBXQKAhWEwItrgnHu1AZbBJpAhY6wFAJQW2rqEFWCBiD5yzu+khRXftwp4YmLixPj4+Lt/aTwAtxdF0c1Op7NRaeAEdhkAZo4CIaJdIlpYW1vjWWCtSVgVdn9/f7bb7XazwloB7Pv+aUR8PyrZImCNAwtYAPiAiNOS1HbCMJzPm+zB+Y0NWqqwiDjTbrc382g8eKwRYFOwRpR2XfdMq9VaHqVx0ckaUTqBXUHEGxJFtxFxrkiNjSitChtF0a1Op/OzqM4On0dLhycnJ8/GcSxGY2myZcNq6XAC+wURfckT1FYcx3NlJqulw6qwYRjO9Hq97bI01tJhG2FLU9rzvHONRuPTKI11Jlua0gK22Wx+BYBrEkU3+/3+nC6NS1NaFVZMFBhjOzo6W9ptKQiC8wCwMipZk7CFdTiBXQWAK5LUxDx23lSyhXVYFbbf78/2er1dExoX1uGqweZS2vO8i81m87NMYyLiYRgu2JBsLqWnpqZORVH0DRFdyeMidxzndrvd3jOtcW6lgyB4AACPqwabWWnf958joni5dehDRLHjOFfLms/mtSXT9DAIgkUAeCFL2Lbu5uowABwLgoABwHXZfdeWW1HuDosTiFG60WisIuKlKkFnUvoAsIrQuYDTJG3DY2XmUXpYYcWkxWK6sVlS3kHrUG2rAp1b6UHyKkAXCpyi0/VY8UgzehPRVi3WtGyHLlzptJ0WSetahC/stiR7oFccyLZ1vGbRApxiINMCXarSw3qPWiEBgNKhtQELeMU1sHq8Hz5IWxF6pxY7AGyA1qr0YKdNJW0MOEWn67FPK43eYo9lLXbimYA2qnTaTheRtDXAqp0W0FEUTa+vr//IskZtFXAK6Fec83u1AFaBJqI/nPOTtfjPg8pARkS/OOcXapOwAvRDxtiRL/NkP4R1HR6+2GS/11NEvBzH8XfHcV4zxt5mSVcc8xf5NhZbS6EuhQAAAABJRU5ErkJggg==');
}

.icon-more {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAACdElEQVRoQ+1Z3W3bMBA+2n6TgaQTVHmzTQFNJmg7QeQJmg3qTtBmgqYbpBPEnqDJBPGDKPut8gRNAfHN8hVsaUBVZZE0CgSUjq86fb7vR3cEzKBjh3WMLxDhtjtODpPDLVOAIt0yQ/+hQw6Twy1TgCLdMkNpaFGkKdItU4Ai3TJDaUpTpCnSLVPAGOkwDE+DILhkjIWKOyIuhBDLY3UYj8dxv99/pd7f7XbLNE0Xx2Jxzs8ZY5e6r0xKuciy7KkJr5Ew5/yKMfYZAE4rIPd5nk9N4OV3VHMAcLcXbv8METMAmLqIqEwYDod3APCm0tcTIn4QQtweIn2QMOd8psnWvqsalVJe2JDWTjw2KY+IFzakdeIeq8KVsTXpm7rfqyU8Go3CwWDw3RQ1RPwqhLgy1XHOM8bYSwPhTAhxZoF1yxh7Z6rbbrdn6/VapeevU0t4Mpnc9Hq99yZQ9TzP8xdNLutvVsXPeIqimK5Wq/mhQh3lH0agP/PhS5qmMyvCURTdA8BrG2AAeJskiaqvPVEUfQKAj5ZY10mSqPpDWOqb/WaJ9ZAkSfUbr/9vqXOEOxfpZxpaGyHE713fdDjn/39oqR+0WEsbKeX5M62lZdPUd15Le4X1xUPts5OK6g95nsc2ZEtY6uIxrzaKiBsAiG128B5LT2s1zauD9Scizo66eJTBgyCIS1fLuUtz1XjqNaXIQ1EUy6Y1ZBFvdbWMVZ2+CM1NJhjv0qYf9e05EfbNMdd+yWFXxXyrJ4d9c8y1X3LYVTHf6slh3xxz7ZccdlXMt3py2DfHXPslh10V862eHPbNMdd+yWFXxXyrJ4d9c8y13845/AvshSRM3X883wAAAABJRU5ErkJggg==');
}

.tab-nav {
    /* background: #e2e2e2; */
    height: 40px;
    line-height: 40px;
    /* border-radius: 80px; */
    display: block;
    /* margin: 0 auto; */
    position: relative;
    /* width: 185px; */
}

.tab-nav:after {
    content: '';
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #bbbbbb;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
}

.tab-nav-item {
    height: 40px;
    line-height: 40px;
    position: relative;
    text-align: center;
    color: #585858;
    font-size: 16px;
    display: block;
    float: left;
    border-radius: 80px;
    padding: 0 15px;
    width: 20%;
    margin: 0 auto;
}


.tab-nav-item.tab-active a {
    color: #f21b40;
}

.tab-nav-item a {
    display: inherit;
    color: inherit;
    font-size: 14px;
    color: #464646;
}

.tab-panel {
    position: relative;
    overflow: hidden;
}

.tab-panel .tab-panel-item {
    width: 100%;
    position: absolute;
    top: 0;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
}

.tab-nav-item.tab-active:before {
    content: '';
    width: 40%;
    height: 0px;
    position: absolute;
    left: 50%;
    bottom: 0;
    margin-left: -20%;
    z-index: 4;
    background-color: #f23030;
    border-radius: 120px;
    border: 1px solid #f23030;
}

.tab-panel .tab-panel-item.tab-active ~ .tab-panel-item {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
}

.tab-panel .tab-panel-item.tab-active {
    position: relative;
    -webkit-transition: -webkit-transform .15s;
    transition: -webkit-transform .15s;
    transition: transform .15s;
    transition: transform .15s, -webkit-transform .15s;
    -webkit-transform: translateX(0);
    transform: translateX(0);
}

.divHeight {
    background: #efefef;
    width: 100%;
    height: 10px;
}

.aui-well-item {
    padding: 10px 15px 10px 20px;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
}

.aui-well-item-hd {
    margin-right: .4em;
    width: 19px;
    height: 19px;
    line-height: 19px;
    text-align: center;
}

.aui-well-item-hd img {
    width: 100%;
    max-height: 100%;
    vertical-align: top;
    display: block;
    border: none;
    margin-top: 3px;
}

.aui-well-item-bd {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    min-width: 0;
}

.aui-well-item-bd h3 {
    color: #333;
    font-size: 0.25rem;
    position: relative;
    font-weight: normal;
    padding-bottom: 0;
    text-align: left;
}

.aui-well-item-fr {
    font-size: 0.25rem;
    text-align: right;
    color: #222;
    padding-right: 25px;
    position: relative;
}

.aui-well-item-fr:after {
    content: " ";
    display: inline-block;
    height: 18px;
    width: 18px;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAEQ0lEQVRYR+3YbYgVVRgH8Oc/3VX7sLK9sRVpWyCYCiEYvVCylh9cKlx2vefMtiCGUR8KjAyUiloSesMQDEJWsBTTc55h3RJqkcpeJArDEMTdCqEsgwqslDZQd+cfM11lsd17585OYOB8usw5z/P8Zs45M+cO5AI/cIH75CJwsiNU9x201i6HyGIRmSFk1XiKxACOUeQD7/22PNh6gAiNeUuArjyFhNzuVJeLCOuJzww0xqwOgPVJcpIEcEDI4VrFKDIHwFVJv5h8UlVfrRUztj0z0BpzGMAcERkejePboyg6lKVQa2trqbm5eRNEVpIc9Kpzs8Sd7ZMZGFp7dmj2Oe8X1lOkq1y+m0HwYRLjvM9cM+n/r85jIPUYJt13Ivj/EGhMD4GZEHkwXRAi20B+N+lbNCYBRRYBWJguNpHn06FX7RmvxrjzIQzDBUJ+WVl596rqe0UCrTHrAawm+adXbayWe1xgV2fnbJZKQxWgVVUtGLgJwCMkf/aq19QN7OjouG5KQ8OPaSC50qluKRRo7XaIdJM84lVn1Q1sb29vmjZ16u8V4CqnurFg4NsQWUryoFedXzewp6cn+HpoaLQyxE+p6ovJ7zAMWyWOW8+f1GEYtkgcr0gLBcGbzrnvK/3HPW+NeR/AYpKfedU76wYmAdaYUwCmCPmCU306LWhMjwDPnf/ATeHkR2khYJFz7uNzFzTOeWvM5wBuI7nHqy7JCzwO4HIhNzrVVYUCrT0EkXkk+7zqsrzAowBmCrnFqa4sEhhamzxXW4Tc6lT/mRoTHBO+F621gxC5SUS88z4sEmiN+TXZ4ZB83as+mg9ozH4Atwj5rlO9r2DgXwAuJfmKV12TF7gXwCIhP3Gq6cotYpGMfUII+axTXZcXuBvA/UIecKoLigJ2d3dPHx0ZOZGiyCec6oZcwNCYHcn2nuQ3XnV2UcAwDK8V8qcK8GGnujkX0Fq7GSIPCXnMqc4oCvhAZ+esuFT6NkXFcbeLoh35gMZsAPA4yT+86mVFAcPOzvlSKn1VAS51UbQ7FzA0Zp0AzyTX6by/pDBgGN4l5KdJPsTxPTujaG9e4BoBXkqCT5w8OW1gYOBUEavYWtsGkXR/ORrHt0ZRtD8X0Fr7GEReqyS6Ioqi36olytoWlsvLJAii9A6OjMzb2dd3OBcwLJdXSBC8UQFeH0XRD1kR1fqNzRucOdOyY9euo3mB5650NI7nRlE0WARw7MicOn36yv7+/uO5gF3l8hIGwUDWuZIVb61dC5F0f3l2bucCWmtvhsjBdK6QK3aqbs2KqDrE1ibTJtnB/OK8v7pWzgl3M8k7c2hw8AiAG5J/XxA5UCtZrXaKlETkDgAQ8mWnurZWTNXPENbaeRB5R0RurJWornayf3pTk+3t7T1TK67md5K2trapjY2NbQDmgmyolbBaO4FhAF845/ZlzVMTmDXRf9XvInCyd/ZvI9y6Rxr69GgAAAAASUVORK5CYII=");
    background-size: 18px;
    top: -2px;
    position: absolute;
    top: 50%;
    margin-top: -9px;
    right: 0px;
    border-radius: 2px;
}

.aui-well-item-fr-clear {
    position: relative;
    padding-right: 0;
}

.aui-well-item-fr-clear:after {
    background-image: none;
    width: 0;
    height: 0;
}

.aui-mail-product {
    background: #fff;
    padding: 10px 20px;
    position: relative;
    overflow: hidden;
}

.aui-mail-product-item {
    /* padding: 15px; */
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
}

.aui-mail-product-item-hd {
    margin-right: .8em;
    width: 70px;
    height: 70px;
    line-height: 70px;
    text-align: center;
}

.aui-mail-product-item-hd img {
    width: 100%;
    max-height: 100%;
    vertical-align: top;
}

.aui-mail-product-item-bd {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    min-width: 0;
}

.aui-mail-product-item-bd p {
    color: #404040;
    font-size: 13px;
    line-height: 1.4;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}

.aui-mail-payment {
    padding: 10px 15px;
    position: relative;
    text-align: right;
    font-size: 0.28rem;
    color: #333;
    overflow: hidden;
    display: block;
}

.aui-mail-payment p em {
    font-style: normal;
}

.aui-mail-payment p i {
    font-size: 16px;
    font-style: normal;
    color: #f21b40;
}

.aui-mail-button {
    padding: 10px 20px 15px 0;
    overflow: hidden;
}

.aui-mail-button a {
    background: none;
    border: 1px solid #f21b40;
    color: #fff;
    font-size: 0.28rem;
    border-radius: 40px;
    display: block;
    padding: 2px 14px;
    display: inline-block;
    float: right;
    margin-left: 8px;
    background: #f21b40;
}

.aui-mail-button .aui-df-color {
    color: #333;
    border: 1px solid #ddd;
    background: none;
}

.aui-well-wait {
    text-align: right;
    color: #f0250f;
    font-size: 16px;
}

.aui-mail-product-right {
    text-align: right;
    font-size: 0.2rem;
    padding-left: 10px;
}

.badge {
    color: #FFF;
    font-size: 14px;
    display: inline-block;
    border-radius: 1000px;
    line-height: 1;
    padding: 1px 4px;
    white-space: nowrap;
    background-color: #D0D0D0;
    position: absolute;
    top: 4px;
    right: 5px;
    border: 1px solid #f21b40;
}

.badge-hollow {
    background-color: #fff;
    color: #f21b40;
}

.aui-navBar-item .badge-hollow {
    background: #f21b40;
    color: #fff;
}

#aui-mask-box {
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    z-index: 10001;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: none;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}

#aui-dialog-box {
    width: 80%;
    background-color: #fff;
    border-radius: 2px;
    font-size: 15px;
    position: absolute;
    display: none;
    left: 5%;
    z-index: 10003;
    padding:15px;
    margin-left:-10px;
}

.close1 {
    width: 100%;
    text-align:right;
    font-size:16px;
}
.close1 a{
    padding-left:20px;
}

.cell-right {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    width: 100%;
    min-height: 1rem;
    color: #525252;
    text-align: right;
    font-size: 0.26rem;
    padding-right: 1rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
}

.cell-right input[type="radio"], .cell-right input[type="checkbox"]:not(.m-switch) {
    -webkit-appearance: none;
    -moz-appearance: none;
    position: absolute;
    left: -9999em;
}

.cell-right input[type="radio"] + .cell-radio-icon:after, .cell-right input[type="checkbox"]:not(.m-switch) + .cell-radio-icon:after, .cell-right input[type="radio"] + .cell-checkbox-icon:after, .cell-right input[type="checkbox"]:not(.m-switch) + .cell-checkbox-icon:after {
    font-size: .44rem;
    content: '';
    width:18px;
    height:18px;
    display:block;
    border-radius:100%;
    background-image:url('data:image/png;base64,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');
    background-size:18px;
}

.cell-right input[type="radio"] + .cell-checkbox-icon:after, .cell-right input[type="checkbox"]:not(.m-switch) + .cell-checkbox-icon:after {
    content: '';
    color: #D9D9D9;
}

.cell-right input[type="radio"]:checked + .cell-checkbox-icon:after, .cell-right input[type="checkbox"]:not(.m-switch):checked + .cell-checkbox-icon:after {
    font-size: .44rem;
    content: '';
    width:18px;
    height:18px;
    display:block;
    border-radius:100%;
    background-image:url('data:image/png;base64,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');
    background-size:18px;
}



.cell-item {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    overflow: hidden;
    padding:10px 0;
    font-size:0.95rem;
    color:#333;
}

.cell-left {
    width: 100%;
    color: #404040;
    font-size: 0.85rem;
    white-space: nowrap;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}


.aui-dialog-title{
    padding:10px 0;
    color:#212121;
    font-size:0.85rem;
    font-weight:normal;
}
</style>
