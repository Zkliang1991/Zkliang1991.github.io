<template>
    <section class="aui-flexView">
        <section class="aui-scrollView">
            <div class="aui-flex">
                <div class="aui-flex-box">
                    <p>此订单包含1个物流单</p>
                </div>
            </div>
            <div class="divHeight"></div>
            <div class="aui-flex aui-flex-back">
                <div class="aui-flex-sox">
                    <img :src="require('../assets/box.png')" alt="">
                </div>
                <div class="aui-flex-box">
                    <h3>自行发货 | <em>已签收</em></h3>
                </div>
            </div>
            <div class="aui-flex aui-flex-lag">
                <div class="aui-flex-box">
                    <h2>
                        运单号码：<em>7159899080809666</em>
                    </h2>
                    <h2>
                        物流公司：<em>百世快递</em>
                    </h2>
                    <h2>
                        发货时间：<em>2019-05-28 18:33:18</em>
                    </h2>
                    <h2>
                        物流编号：<em>LP0106698900083</em>
                    </h2>
                </div>
                <div class="aui-text-copy">复制
                </div>
            </div>
            <div class="aui-image-text">
                <a href="javascript:;" class="aui-flex ">
                    <div class="aui-shrink-img">
                        <img :src="require('../assets/shop.png')" alt="">
                    </div>
                    <div class="aui-flex-box" @click="kefu">
                        <h2>联系卖家</h2>
                    </div>
                </a>
                <a href="javascript:;" class="aui-flex ">
                    <div class="aui-shrink-img">
                        <img :src="require('../assets/car.png')" alt="">
                    </div>
                    <div class="aui-flex-box" @click="kefu">
                        <h2>联系物流</h2>
                    </div>
                </a>
            </div>
            <div class="divHeight"></div>
            <div class="aui-flex aui-flex-lag b-line">
                <div class="aui-flex-box">
                    <h2 style="color:#333; margin:0">物流记录</h2>
                </div>
            </div>
            <div class="aui-timeLine">
                <ul class="aui-timeLine-content">
                    <li class="aui-timeLine-content-item">
                        <em class="aui-timeLine-content-icon"><img :src="require('../assets/icon-one.png')" alt=""></em>
                        <em class="aui-timeLine-content-info"></em>
                        <h1>已签收</h1>
                        <h2>2019-05-28 18:22:45</h2>
                        <p><em>【北京市】</em>已签收，签收人是快递以送到，有问题请联系 18801066666您的订单正在配送途中，请您准备签收，感谢您的耐心等待。京东扫码付，单单享立减。感谢您的使用。</p>
                    </li>
                    <li class="aui-timeLine-content-item">
                        <em class="aui-timeLine-content-icon"><img :src="require('../assets/icon-two.png')" alt=""></em>
                        <em class="aui-timeLine-content-info"></em>
                        <h1>已排放</h1>
                        <h2>2019-05-28 18:22:45</h2>
                        <p>【南宁市】您的订单在京东【南宁分拨中心】分拣完成</p>
                        <p style="margin-top: 10px;">2019-05-29 07:25:08</p>
                    </li>
                    <li class="aui-timeLine-content-item">
                        <em class="aui-timeLine-content-icon"><img :src="require('../assets/icon-three.png')" alt=""></em>
                        <em class="aui-timeLine-content-info"></em>
                        <h1>已运输</h1>
                        <h2>2019-05-28 18:22:45</h2>
                        <p>您的订单已经进入京东2号库准备出库</p>
                        <p style="margin-top: 10px;">2019-05-29 07:25:08</p>
                    </li>
                    <li class="aui-timeLine-content-item aui-timeLine-content-item-line">
                        <em class="aui-timeLine-content-info"></em>
                        <h2>2019-05-28 18:22:45</h2>
                        <p>您的订单已经进入京东2号库准备出库</p>
                        <p style="margin-top: 10px;">2019-05-29 07:25:08</p>
                    </li>
                    <li class="aui-timeLine-content-item aui-timeLine-content-item-line">
                        <em class="aui-timeLine-content-info"></em>     
                        <h2>2019-05-28 18:22:45</h2>
                        <p>您的订单已经进入京东2号库准备出库</p>
                        <p style="margin-top: 10px;">2019-05-29 07:25:08</p>
                    </li>
                    <li class="aui-timeLine-content-item aui-timeLine-content-item-line">
                        <em class="aui-timeLine-content-info"></em>
                        <h2>2019-05-28 18:22:45</h2>
                        <p>您的订单已经进入京东2号库准备出库</p>
                        <p style="margin-top: 10px;">2019-05-29 07:25:08</p>
                    </li>
                    <li class="aui-timeLine-content-item aui-timeLine-content-item-line">
                        <em class="aui-timeLine-content-info"></em>
                        <h2>2019-05-28 18:22:45</h2>
                        <p>您的订单已经进入京东2号库准备出库</p>
                        <p style="margin-top: 10px;">2019-05-29 07:25:08</p>
                    </li>
                    <li class="aui-timeLine-content-item aui-timeLine-content-item-line">
                        <em class="aui-timeLine-content-info"></em>
                        <h2>2019-05-28 18:22:45</h2>
                        <p>您的订单已经进入京东2号库准备出库</p>
                        <p style="margin-top: 10px;">2019-05-29 07:25:08</p>
                    </li>
                    <li class="aui-timeLine-content-item">
                        <em class="aui-timeLine-content-icon"><img :src="require('../assets/icon-four.png')" alt=""></em>
                        <em class="aui-timeLine-content-info"></em>
                        <h1>已揽件</h1>
                        <p>您提交了订单，请等待系统确认</p>
                        <p style="margin-top: 10px;">2019-05-29 07:25:08</p>
                    </li>
                    <li class="aui-timeLine-content-item">
                        <em class="aui-timeLine-content-icon"><img :src="require('../assets/icon-six.png')" alt=""></em>
                        <em class="aui-timeLine-content-info"></em>
                        <h1>已揽件</h1>
                        <p>您提交了订单，请等待系统确认</p>
                        <p style="margin-top: 10px;">2019-05-29 07:25:08</p>
                    </li>
                </ul>
                <div class="aui-clear-line"></div> 
            </div>
        </section>

    </section>
</template>

<script>
export default {
    methods:{
        kefu(){
            this.$router.push({name:"liaotian"})
        }
    }
}
</script>

<style lang="less" scoped>
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

.clearfix {
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
}

.aui-navBar {
    height: 44px;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    z-index: 102;
    background: #fff;
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
    white-space: nowrap;
    overflow: hidden;
    color: #808080;
    position: relative;
}

.aui-navBar-item:first-child {
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    -ms-flex-order: 1;
    order: 1;
    margin-right: -25%;
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
    color: #333;
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

.icon-return{
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAACh0lEQVRoQ+3ZMW8TMRQH8PcOsTBQISExVCIRCwgWFvZ+hZYBpIrEcTYkBsTGlI2VDamL3YEBpWJoR1BJaOlXYEzyDYp0bMRGRjnJoDuWs/1e3EbKeHf55b33vzsb4YJ98IJ54RKce8XZV1gIcQ8AviDiD2vtC631pzZFYQ2WUt611p4CwM0VcqqU2soSXIN1ztdKqTfZgRuw75RSz9tg3bHsWjomlh04NpYVOAWWDbjf7z8oimLipbH7bUopJdvO7L/Hk8+wwyLiCSLe8H6cww4BwGYFTo0lbWkKLBmYCksCrsNaa99rrZ/FmFnS0GrCdrvd3mg0MqEDqu58yVKaAzZZSwshHgLAsX/rcW2csrJVtaNXeIWdIuL16qJU2OgVrsMCwEGn03mSamaThVYTtizLp+PxeJkioJKFFldslJbmjA0O5o4NCm7AHpZluUM5s1FCSwjxCAA++7ceADiczWaPJ5PJL6qAihJaUspdY8w+Il7xLsASG6SlhRA/EfGa91BxNJ/Pd7hVNtiT1mAwOAeADXdCa637Hi0Wi3zBUsptY8wHRLzqwIh/nlbzbWmna0roLEOrmo11QQd9W1oHdFDwOrR3cLCH/uuFn0uQRQE7dMPKJHl6RwNzRUcF/w9N9VIRHVyhazbLDihWP5KAHbphOzQ5OhmYCzopmAM6OZgaTQL20FMAuOUtHESfaTLwCn3HWnuWEk0KpkCTg1OjWYArtDHmKyJu+jMdeh+KDdghh8NhZ7lcfvPRoXcaWYFToNmBY6NZgj20m+nb3pr3W631yzY7GWzBDtXr9TaLojjz0N+VUvezBXvoPQBw0Fda649Zg9vg6o5l3dKhse58l+AY/yqnc/4GvNDoTFOq8FwAAAAASUVORK5CYII=");

}


.m-slider {
    overflow-x: hidden;
    width: 100%;
    position: relative;
}

.slider-wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 100%;
    -webkit-transform: translate3d(0px, 0px, 0px);
    transform: translate3d(0px, 0px, 0px);
    position: relative;
    z-index: 1;
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    transition-property: transform;
    transition-property: transform, -webkit-transform;
}

.slider-item {
    width: 100%;
    height: 100%;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    background: #f6f6f6;
}

.slider-item img {
    width: 100%;
    height: auto;
    display: block;
    border: none;
}

.slider-pagination {
    text-align: right;
    position: absolute;
    width: 100%;
    z-index: 2;
    right: 0;
    bottom: 10px;
    pointer-events: none;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: end;
    -webkit-align-items: flex-end;
    -ms-flex-align: end;
    align-items: flex-end;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.slider-pagination > .slider-pagination-item {
    margin: 0 .25rem;
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background-color: rgba(255,255,255,0.4);
}

.slider-pagination > .slider-pagination-item.slider-pagination-item-active {
    background-color: #fff;
    border-radius: 100%;
}


.aui-palace {
    padding: 0.5rem 0;
    position: relative;
    overflow: hidden;
}

.aui-palace-grid {
    position: relative;
    float: left;
    padding: 1px;
    width: 20%;
    box-sizing: border-box;
    margin: 5px 0;
}

.aui-palace-grid-icon {
    width: 30px;
    height: 30px;
    margin: 0 auto;
}

.aui-palace-grid-icon img {
    display: block;
    width: 100%;
    height: 100%;
    border: none;
}

.aui-palace-grid-text {
    display: block;
    text-align: center;
    color: #333;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding-top: 0.2rem;
}

.aui-palace-grid-text h2 {
    font-weight: normal;
    color: #666666;
}


.m-actionsheet {
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: #EFEFF4;
    -webkit-transform: translate(0, 100%);
    transform: translate(0, 100%);
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s, -webkit-transform .3s;
}

.mask-black {
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    z-index: 500;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
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
    z-index: 998;
}

.actionsheet-action {
    display: block;
    margin-top: .15rem;
    font-size: 0.28rem;
    color: #555;
    height: 1rem;
    line-height: 1rem;
    background-color: #FFF;
}

.m-actionsheet {
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 10005;
    background-color: #ffffff;
    -webkit-transform: translate(0, 100%);
    transform: translate(0, 100%);
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s, -webkit-transform .3s;
}

.actionsheet-toggle {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
}

.actionsheet-item {
    display: block;
    position: relative;
    color: #555;
    height: 2rem;
    line-height: 2rem;
    background-color: #FFF;
}

.actionsheet-item {
    display: block;
    position: relative;
    color: #555;
    height: 2rem;
    line-height: 2rem;
    background-color: #FFF;
}

.aui-coll-cancel a {
    height: 45px;
    line-height: 45px;
    font-size: 12px;
    background: #f9f9f9;
    display: block;
    text-align: center;
    width: 100%;
}

.aui-coll-share-img {
    width: 38px;
    height: 38px;
    margin: 0 auto;
}

.aui-coll-share-img img {
    width: 100%;
    height: auto;
    display: block;
    border: none;
}

.aui-coll-share-box {
    position: relative;
    overflow: hidden;
    padding: 10px 0;
}

.aui-coll-cancel a {
    height: 45px;
    line-height: 45px;
    font-size: 12px;
    background: #f9f9f9;
    display: block;
    text-align: center;
    width: 100%;
}

.aui-coll-share-item {
    position: relative;
    float: left;
    padding: 8px 10px;
    width: 33.333%;
    box-sizing: border-box;
    font-size: 12px;
    height: 85px;
}

.aui-rule {
    position: absolute;
    right: 0;
    top: 1rem;
    background: #54ca9a;
    border-radius: 50px 0 0 50px;
    padding: 0.2rem 0.6rem;
    color: #fff;
}


/* 0------*/
.aui-aircraft-img {
    margin-right: .8em;
    width: 45px;
    height: 45px;
    line-height: 45px;
    text-align: center;
}

.aui-aircraft-img img {
    width: 100%;
    max-height: 100%;
    vertical-align: top;
}

.aui-flex-lag .aui-flex-box h2 {
    color: #999999;
    font-weight:normal;
    margin:0.4rem 0;
}

.aui-flex-lag .aui-flex-box h2 em {
    font-style: normal;
    color: #333;
}

.aui-text-copy {
    color: #333;
    border: 1px solid #e5e5e5;
    font-size: 12px;
    padding: 2px 15px;
    top:15px;
    right:15px;
    position:absolute;
}

.aui-footer {
    width: 100%;
    position: relative;
    z-index: 100;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    /* padding: 7px 5px 7px 5px; */
    background: #ffffff;
    height: 55px;
}

.aui-footer:after {
    content: '';
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    border-top: 1px solid #bbbbbb;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
}

.aui-tabBar-item {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    color: #979797;
}

.aui-artificial {
    position: absolute;
    right: 20px;
    background: #e31436;
    border-radius: 30px;
    color: #fff;
    font-size: 12px;
    padding: 4px 10px;
}

.icon-air {
    margin-right: 5px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAFd0lEQVRoQ+2aeahVVRTGf19FM0b5V2lFmQ0mpVlRFqQ0F5lZpFRU/xRFSVZgWdloZgmVDTQQSRIWEg00QAqm0SBoUYgNWjQXFc1ZNPnFeu77OD7fffecOxzf07vg/nPP3mutb09rrW9vsYmJNjG8tAFv7DPenuH2DG9kI1DKkra9JbA3MCT9hgIGVgDvpd+Hkv5p9fi2FLDtAHkZcD6wbQ0wq4HHgLskfdQq4C0BbPsY4HLgRFgv9P0CfJoA7QH06wIuZv7FBHxhs4E3FbDtHYEngeMyjn4PPAA8B3wi6acsiNRnT2AMcAnQP/N9PjCha59GBqFpgG0fBjwN7Jwcej9mCZgj6a88TtreGjgXuALYJ/X5BhgnaUkeHbXaNAzY9mbA1cDNwObAf8CNwK2SYnkWlqTzWuCGpPNfYCpwe706K040A/AM4KpWzIbtkcA8YEDSP0PSlMIjmOnQEGDbJwMvJH1N32+h1/ZOwOPpAIy/xkh6vl7QdQO2PQh4B9geiP01stHlVg2E7fDztbAB/A4Mrzd01QXYdsTUt9PB8iswVNIX9Y56nn62d0sJynbAB8CwvIdhVn+9gCPG3pkUnSdpTh6nG21jOxKY2UnPJEmziuqsF/BbwEEx0pL2K2q0kfa2PwYibi+VdGhRXYUB2w5jYTRkiqQ4pUsT29dEyEsGBxfdy/UADmNhNGLsQElfl4Z27ak9EPg8paw3SYqYn1vqARz57WhglaQoDkoX26uAvYCFko4u4kA9gFcCg4H5ko4vYqxZbW1HzD8WiJJy3yJ66wEcNesWwIOSLi5irFltbT8MXACslhR5QG4pBDhlPT8k7ZMlzcxtqYkNbUd6OT2p7Cfpt7zqiwIOpmJ5Uj5eUuS5pYvtCcATyfAQSVGZ5ZKigEcAy5LmhnLaXN5VaWQ7aueor0NGSIqsL5fkAmz7yMRFDQcuSprnAvc2q07N5e3asHQ4cClwVuoT5ELk9CskvV5LT4+AU0F+TzogutO1BhgkqULZ1LLX0PeU9ATfVc3vOMwmSvq7mqFagJ8FTq3h5WhJixpCkrOz7VHAKzWaz5V0dmHAtk9LlE30jZo3GIjlUQJ2MbyhAHfYtR0sy0mJhDgiAR0rqbLH18FedYZtx1KeCPyYUsg/Kz17E+CMT7sCn6XlfrekqOjWk54ALwCCbn1DUmXkOhT0RsDJr6XAwT1lgT0Bjn15FLBYUuydTunFgKv6XHG+DTizJ9oz3JsPrbSHG1rSlRJsmaRD+sgerhxaCyRlr3s63c8TloLZ2D3LSvbGQ8v2LsCXKSzNkjSpaFjKJh6vAlEKviRpTW8CnBKPuKWMkjF465DiiUfaE08Bp9dI5TZUplXNrXmSxhdOLRPguLmfDFwHbFVFSRDi79YYlKZ8th2UcLwY6E4iEwyCcWbdxUPmVI5L60g+hgFxW1iRbyVFeVaa2D4HOAU4MxmNC4E4nRflYT5y1cOloclpyPZDwIWp+YAiVHGfA2x7fyC2UFRJsbzjXiv3PXQpgG3HlpiWnkIEnxzOZiXCSbAVUyUF59yt2D4DeATYITUYJWlxzoXR0awswLelVwK1fFsiKSicTklPnsYBV6ZKqPLtfklB9RSSsgAHLRP3yd8BjwLZNx/hw1jggMwhFM8m4g4rCP9469E1Qtwi6fpCSFPjsgDHG41YxndIqjyPyM5ikOrBR9WSeM40rRHisCzAfwDbAPdJChZlHbEdHFQ8a+gqXwFvBgkBvCypWgyuNVCd38sCHDTqgTm8Cha0v6Sfc7Stq0lZgCNReKab07mr09MlBVnYMikFcHifHq6d0AOSlZKC3G+plAa4pSgKKG8DLjBYfbJpe4b75LQVcLo9wwUGq082/R/dkTtbcJtBQAAAAABJRU5ErkJggg==');
}

/* time seed */
.aui-timeLine {
    background-color: #fff;
    font-size: 13px;
    color: #6e6e6e;
    overflow: hidden;
    position: relative;
    z-index: 1;
}

.aui-timeLine-content {
    margin-left: 35px;
    border-left: 1px solid #e4e5e9;
    margin-top:1rem;
}

.aui-timeLine-content-item {
    padding: 1px 12px 16px 0;
    margin-left: 25px;
    position: relative;
    margin-bottom:10px;
}

.aui-timeLine-content .aui-timeLine-content-item:first-child p{
    margin-top: 4px;
    padding-top: 0;
    color: #fe6000;
}
.aui-timeLine-content .aui-timeLine-content-item:first-child p em{
    color:#333333;
    font-style:normal;
}
.aui-timeLine-content .aui-timeLine-content-item:first-child:before {
    content: "";
    width: 16px;
    height: 16px;
    position: absolute;
    z-index: 0;
    top: 0;
    left: -30px;
    background-color: #fbbfbf;
    border-radius: 99px;
}

.aui-timeLine-content-icon {
    width: 32px;
    height: 32px;
    border-radius: 99px;
    background-color: #e5e5e5;
    content: "";
    position: absolute;
    z-index: 1;
    left: -25px;
    display: block;
    top: -1px;
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
}

.aui-timeLine-content-item:first-child>.aui-timeLine-content-icon {
    top: -4px;
}

.aui-timeLine-content-item:first-child>.aui-timeLine-content-icon {
    background-color: #ffceb0;
    width: 32px;
    height: 32px;
}

.yd-timeline-custom-item:not(:last-child):after, .aui-timeLine-content-item:not(:last-child):after {
    height: 1px;
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: 0;
    content: "";
    width: 100%;
    background-image: -webkit-linear-gradient(bottom,#ececec 50%,transparent 0);
    background-image: linear-gradient(0deg,#ececec 50%,transparent 0);
}

.yd-timeline-custom-item:last-child:before, .aui-timeLine-content-item:last-child:before {
    content: "";
    width: 1px;
    height: 100%;
    background-color: #fff;
    position: absolute;
    left: -17px;
    top: 19px;
}

.aui-shop-news {
    text-align: center;
    padding: 20px;
}

.aui-shop-news h2 {
    position: relative;
    background: #fff;
    width: 102px;
    margin: 0 auto;
    color: #333333;
    font-weight: normal;
}

.aui-shop-news h2:before {
    content: '';
    position: absolute;
    z-index: 0;
    top: 10px;
    left: -100%;
    width: 100%;
    height: 1px;
    border-top: 1px solid #bbbbbb;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
}

.aui-shop-news h2:after {
    content: '';
    position: absolute;
    z-index: 0;
    top: 10px;
    right: -100%;
    width: 100%;
    height: 1px;
    border-top: 1px solid #bbbbbb;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
}

.icon-more{
    background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAACQklEQVRoQ+2WvYsTURTF75kkg52mt7DRFVkQFMGPStILImnXkORNCItgu512YpMuJm8ewSWkEz9gS7HTFSSwKBYq/gFqJ4YEGeZKlhVCdrRY7sJj9qafc849v/suAR2xH47YvKQD5524ElbCOWtAVzpnQPeNo4SVcM4a0JXOGVA9WrrSutI5a0BXOmdA9UrrSutK56wBXemcAdUrvbvS9Xp9pVgs3iGiU2ma7oRh+KDb7f6Spl2r1U6EYWiY+QqA30T0djqdxsPhcHIYXqVSaYOIzhHRZ2Z+6Jz7hkajsRoEwTsAxxZMv04mkwuj0einVJBqtVool8s7RLS6qMnMb+I4viblM9dpt9vlJEneAzj5V5eZfwA4D2PMJoC1DMP71tp7UkGazeblIAi2s/SSJDk7GAw+SXlFUdQhorvLesz8eD7wawBXM8yeW2tvSoUwxtwC8CRLL03TinPulZRXFEUviaiSMfB4PvBTAPsGY+ZuHMfrUiH+RxjAmX6//0XKyxjjADQy9DbnA98A8GLpXTEzX3LOjaVC7L3hj0S0sqS5ba3N2rADW+/dpTGAcPENJ0lycfdKt1qtSpqmERFdB7BFRB1r7YcDO/7jwyiKjhPROjPfJqIZEQ1ns9mjw7jSxph5iR0Ap5n5WaFQ2Oj1et/1n5Y0Vd/0lLBvRKTzKGHpRn3TU8K+EZHOo4SlG/VNTwn7RkQ6jxKWbtQ3PSXsGxHpPEpYulHf9JSwb0Sk8yhh6UZ901PCvhGRzqOEpRv1Te8P/7OoY1VySrUAAAAASUVORK5CYII=');
}

.aui-flex-sox{
    width:22px;
    height:22px;
}

.aui-flex-sox img{
    width:22px;
    height:22px;
    display:block;
    border:none;
}

.aui-flex-box h3{
    color:#333333;
    font-weight:normal;
    padding-left:0.5rem;
}

.aui-flex-box h3 em{
    color: #25bf13;
    font-style:normal;
}

.aui-flex-back{
    background:#f3faf2;
    padding-top:20px;
    padding-bottom:20px;
}

.aui-image-text {
    position: relative;
    overflow: hidden;
    padding: 0 0 25px 0;
    width: 69%;
    margin: 0 auto;
}

.aui-image-text .aui-flex {
    width: 45%;
    float: left;
    border: 1px solid #e6e6e6;
    border-radius: 2px;
    padding: 8px 5px;
}

.aui-shrink-img {
    width: 18px;
    height: 18px;
    margin-left:0.5rem;
}

.aui-shrink-img img {
    width: 18px;
    height: 18px;
    border: none;
    display: block;
    border-radius: 3px;
}

.aui-image-text .aui-flex-box h2 {
    font-weight: normal;
    color: #2d2d2d;
    text-align:center;
}

.aui-timeLine-content .aui-timeLine-content-item:first-child h1{
    color:#27bf14;
    font-weight:bold;
    margin-bottom:1rem;
}

.aui-timeLine-content .aui-timeLine-content-item:first-child h2{
    color:#999999;
    font-weight:normal;
}

.aui-timeLine-content-item .aui-timeLine-content-info{
    width: 8px;
    height: 8px;
    border-radius: 99px;
    background-color: #e5e5e5;
    content: "";
    position: absolute;
    z-index: 1;
    left: -25px;
    display: block;
    top: 43px;
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
}

.aui-timeLine-content-icon img{
    width:18px;
    height:18px;
    display:block;
    border:none;
    margin:6px  auto;
}

.aui-timeLine-content-item h1{
    color: #333333;
    font-weight: bold;
    margin-bottom: 1rem;
}

.aui-timeLine-content-item h2{
    color: #999999;
    font-weight: normal;
}

.aui-timeLine-content-item p{
    color:#333333;
    margin-top:2px;
}

.aui-timeLine-content-item-line .aui-timeLine-content-info{
    top:3px;
}

.aui-text-color{
    background:#ffeee6;
    color:#656766;
    padding:15px ;
    margin:0 15px 20px 15px;
    border-radius:2px;
}

.aui-clear-line{
    position: absolute;
    left: 34px;
    background: #fefefe;
    width: 2px;
    height: 56px;
    bottom: 0;
}
</style>
