<template>
    <div>
        <van-swipe @change="onChange" :show-indicators="true" :loop="true" :autoplay="3000">
            <van-swipe-item v-for="(item,index) in images" :key="index">
                <img :src="item" alt="">
            </van-swipe-item>
            <div class="custom-indicator" slot="indicator">
                {{ current + 1 }}/4
            </div>
            
        </van-swipe>
        <div class="price">
            <h1>$ <span>{{goodsdetail.goodsprice}}</span></h1>
            <div class="time">距离结束</div>
        </div>
        <div class="content">
            <h1>
                <span class="new">{{goodsdetail.tag}}</span>
                <span class="name">{{goodsdetail.goodsname}}</span>
            </h1>
            <div class="share">
                <i></i>
                <p>分享返利</p>
            </div>
        </div>
        <p class="kong"></p>
        <div class="choose">
            <span class="c1">已选</span>
            <span class="c2">{{goodsdetail.goodssize}};{{goodsdetail.goodstexture}};胡桃色</span>
        </div>
        <p class="kong"></p>
        <div class="adress"></div>
        <div class="goodsactive">
            <div class="left">
                <div class="icona">
                    <van-icon name="service-o" class="a" size="0.5rem" color="rgb(190, 76, 75)" />
                    <p>家具顾问</p>
                </div>
                <div class="iconb">
                    <van-icon name="like-o" size="0.5rem" />
                    <p>收藏</p>
                </div>
                <div class="iconc" @click="gotocar">
                    <van-icon name="shopping-cart-o" size="0.5rem"/>
                    <span class="info">2</span>
                    <p>购物车</p>
                </div>
            </div>
            <div class="right">
                <h1 @click="boxout">加入购物车</h1>
                <van-popup v-model="show" get-container="jiedian" position="bottom" :overlay="true" :close-on-click-overlay="true">
                    <div class="box">
                        <div class="top">
                            <span class="img">
                                <img :src="goodsdetail.goodsimg" alt="">
                            </span>
                            <p>$234</p>
                        </div>
                        <div class="bottom">
                            <p >材质</p>
                            <h1 class="caizhi"> <span>进口桃木</span></h1>
                            <p class="num">数量</p>
                            <div>
                                <van-stepper v-model="value" integer />
                            </div>
                            
                        </div>
                        <div class="jiacar" @click="addcar">加入购物车</div>
                    </div>
                </van-popup>
                <h2 @click="buynow">立即购买</h2>
            </div>
            
        </div>
    </div>
</template>


<script>
import { Toast } from 'vant';
export default {
      data() {
            return {
                 current: 0,
                 show:false,
                 value:1,
                 goodsdetail:{},
                 images:[
                     "https://pimg.wzj.com/upload/goods/images/8f5414c37bd17e5cfb6eaaa0ab463c80208db46b.jpg?x-oss-process=style/w800-webp",
                     "https://pimg.wzj.com/upload/goods/images/770cfb7f359938240a29e51166aefb11e5816574.jpg?x-oss-process=style/w800-webp",
                     "https://pimg.wzj.com/upload/goods/images/07c85445f3c26266b1caa2436efefd0f30dcf68c.jpg?x-oss-process=style/w800-webp",
                     "https://pimg.wzj.com/upload/goods/images/94b45635b6f422a36b79395fd63f6442d35f73de.jpg?x-oss-process=style/w800-webp"


                 ]
            }
        },
        methods: {
            onChange(index) {
                 this.current = index;
            },
            boxout(){
                this.show=true
            },
            jiedian(){
                return document.getElementsByClassName("addcar")
            },
            addcar(){
                this.show=false
                var userInfo = window.sessionStorage.userInfo;
                userInfo = JSON.parse(userInfo);
                var usertoken = userInfo.token;
                var goods_id=window.sessionStorage.goods_id
                console.log("传给后台购物车的用户信息")
                console.log([usertoken,goods_id,this.value])
                this.$axios.get("/vue/myshoppingcar",{
                  params:{usertoken,goods_id,goodsnum:this.value}
                }).then(res=>{
                    Toast("res.data.msg")
                })
                
            },
            buynow(){
                this.$router.push({name:"orderconfirm",params:{
                    goodsId:this.goodsdetail.goodsId,goodsnum:this.value
                }})
            },
            gotocar(){
                this.$router.push({name:"cart"})
            }
        },
        mounted(){
            var id=this.$route.query
            window.sessionStorage.goods_id=id.goodsId
            this.$axios.get("/vue/idfind",{params:id}).then(res=>{
                this.goodsdetail=res.data.result
            })
        }
}
</script>

<style lang="scss" scoped>
.kong{
      height: 0.2rem;
    background-color: rgb(246, 246, 246);
}
    .van-swipe{
        height:7.5rem; position: relative;
        .van-swipe-item{
            background-color: pink;  
            img{
                height: 7.5rem; 
            }   
        }
        .custom-indicator{
            position: absolute;
            bottom: 0.2rem; right:0.2rem;
            width:0.68rem;
            height:0.36rem;
            line-height:0.36rem;
            background-color: rgba(0,0,0,.3);
            color: #fff;
            border-radius:0.2rem;
            font-size: 10px;
            text-align: center;
        }
    }
    .price{
        padding-left: 0.2rem;
        padding-right: 0.4rem;
        height: 1rem;  position: relative;
        background-image:linear-gradient(270deg, rgb(180, 152, 102), rgb(210, 174, 118));
        h1{
            line-height: 1rem;  color: #fff;
            span{
                font-size: 32px;
                font-weight: 400;
                margin-right:0.01rem;
            }
        }
        .time{
            position: absolute;
            bottom: 0; right: 0; color:white;
            height: 1rem; font-size: 12px;
        }
    }
    .content{
        padding:0.3rem; position: relative;
        h1{
            margin-bottom: 0.2rem; height: 0.4rem;
            position: relative;
            .new{
                color: rgb(255, 255, 255);
                background-color: rgb(213, 167, 96);
                padding:0.06rem 0.1rem;
                border-radius:0.06rem;
                font-size: 14px;
                margin-right:0.1rem;

            }
            .name{
                color: #222121;
                font-size: 20px;
                font-weight: 500;
                font-family: PingFangSC-Medium;
            }
        }
        .share{
            position: absolute;
            top:0.12rem; 
            right: 0.3rem;
            text-align: center;
            display: -webkit-box;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            flex-direction: column;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;
            width: 0.96rem; height: 0.95rem;
            i{
                background-image: url("https://img.wzj.com/h5-static/img/icon_red.png");
                background-size: contain;
                width:0.56rem; height: 0.5rem; margin-bottom: 0.1rem;
            }
            p{
                color: #be4c4b;
                font-size: 12px;
                font-weight: 300;
            }
        }
    }
    .choose{
        padding:0 0.32rem; line-height: 0.96rem;
        overflow: hidden;
        .c1{

            font-size: 13px;
            color: #b1b1b1;
            margin-right:0.3rem;
            float:left;

        }
        .c2{
            display:inline-block;
            overflow: hidden;
            white-space: nowrap;
            max-width: 100%;
            font-size: 13px;
            color: #222121;
          font-weight:700;
          float:left;
        }
    }
    .goodsactive{ 
        position: fixed; left: 0; bottom: 0; overflow: hidden;
        height: 1rem; width: 100%; background-color: white;
        .left div{
                float:left; width: 1rem; text-align: center;
                margin-top: 0.15rem;
               p{
                    line-height: 1;
                    font-size: 10px;
                    color: #5a5a5a;
                    font-weight: 400;
                    // margin-top:0.08rem;
               }
        }
        .iconc{
            position: relative;
            .info{   
                    width: 0.36rem;
                    height: 0.36rem;
                    line-height: 0.38rem;
                    text-align: center;
                    font-size: 11px;
                    background-color: #be4c4b;
                    border-radius:50%;
                    color: #fff;
                    border: 1px solid #fff;
                    position: absolute;
                    top:-0.07rem; right:0.04rem;
                    transform: scale(.9);
               }
        }
        .right{
            overflow: hidden; text-align: center; line-height: 1rem;
            // background-image:linear-gradient(270deg, rgb(241, 105, 105), rgb(190,76,75));
            h1{
                float:left;
                width: 50%;
                font-size: 18px;
                font-family: PingFangSC-Medium;
                font-weight: 500;
                color: #fff;
                background-color: rgb(231, 131, 84);
            }
            h2{
                float:left;
                width: 50%;
                font-size: 18px;
                font-family: PingFangSC-Medium;
                font-weight: 500;
                color: #fff;
                background-color: rgb(190,76,75);
            }
            .box{
                background-color: #fff;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
                height: 10.28rem; position: relative;
                .top{
                        height: 2.2rem;
                        position: relative;
                        padding: 0 15px 0 115px;
                    .img{
                        position: absolute; top: 0; left:0; border-top-left-radius: 5px;
                        width: 1.8rem; height: 1.8rem; background-color: black;
                        img{
                            width: 100%; height: 100%;
                        }
                    }
                }
                .bottom{
                    
                    p{
                            color: #1a1a1a;
                            font-size: 14px;
                            margin-bottom: 0.2rem;
                            font-weight: 400; text-align:left;
                            line-height: 1; margin-top:0.5rem;
                            margin-left:0.4rem;
                    }
                    .caizhi{
                            margin-top: -10px;
                            margin-left: -10px; text-align: left;
                            background-color: #fff;
                            span{
                                border:1px solid  #be4c4b;
                                background-color: #fff;
                                color: #be4c4b;
                                font-size:13px; margin-left:0.6rem;
                                font-family: PingFangSC-Medium;
                                font-weight: 500; padding:0.2rem 0.4rem;
                            }
                    }
                    .num{
                        margin-top:1.28rem;
                    }
                    .van-stepper{
                        text-align: left; margin-left:0.4rem;
                    }
                    
                }
                .jiacar{
                        position: absolute;
                        bottom: 0; left: 0;
                        font-size: 18px;
                        font-family: PingFangSC-Medium;
                        font-weight: 500;
                        background-color: #be4c4b;
                        color: #fff; width: 100%;
                        
                    }
            }
        }
    }
</style>
