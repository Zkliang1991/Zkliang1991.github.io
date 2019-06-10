<template>
    <div>
        <div class="pinglun1">
            <div class="dangqian">
                <div>
                    <i class="iconfont xuanzhong"  v-html="weixuanzhong.icon" @click="xuanzhongla" :style="xuanzhongflag==true?'color:red':''"> </i>
                    <p class="zhikan">只看我的商品</p>
                    <p class="haopinglv">好评率99%</p>
                </div>
            </div>
        </div>
        <div class="pinglun2">
            <div class="pingjiakuang">
                <span class="quanbu">全部(27万+)</span>
                <span>更新</span>
                <span>好评(25万+)</span>
                <span>更新</span>
                <span>中评(400+)</span>
                <span>差评(200+)</span>
                <span>视频晒单(300+)</span>
                <span>有图(1.1万+)</span>
                <span>清香怡人(136)</span>
                <span>滋润丝滑(56)</span>
            </div>
        </div>
        <div class="divHeight"></div>
        <div class="pinglun3">
            <ul>
                <li class="yonghu" v-for="(pinglun,i) in pinglunlist" :key=i>
                    <div class="yonghu1">
                        <img :src="require('../assets/images/photo.jpg')">
                        <span>{{pinglun.username}}</span>
                        <i class="iconfont shoucangle"  v-html="shoucangle.icon" :style="pinglun.pingfen>0?'color:red':''"> </i>
                        <i class="iconfont shoucangle"  v-html="shoucangle.icon" :style="pinglun.pingfen>2?'color:red':''"> </i>
                        <i class="iconfont shoucangle"  v-html="shoucangle.icon" :style="pinglun.pingfen>4?'color:red':''"> </i>
                        <i class="iconfont shoucangle"  v-html="shoucangle.icon" :style="pinglun.pingfen>6?'color:red':''"> </i>
                        <i class="iconfont shoucangle"  v-html="shoucangle.icon" :style="pinglun.pingfen>8?'color:red':''"> </i>
                        <span class="shijian">{{pinglun.pingluntime}}</span>
                    </div>
                    <div class="yonghu2">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{pinglun.neirong}}
                    </div>
                    <div class="yonghu3">
                        <img :src="pinglun.img">
                    </div>
                    <div class="yonghu4">
                        <span>评分：</span>
                        <span>{{pinglun.pingfen*1 | money}}</span>
                        <p class="huifu">
                            <span class="jirendianzan">{{pinglun.dianzan}}人点赞</span>
                            <span style="marginRight:3px;color:#aaa" @click="dianzana(pinglun)" :style="dianzanflag?'color:#26a2ff':''">点赞</span>
                            <i class="iconfont dianzan"  v-html="dianzan.icon" style="marginRight:8px;color:#aaa" :style="dianzanflag?'color:#26a2ff':''" @click="dianzanicon(pinglun)"> </i>
                            <span class="huifu1">回复</span>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {http} from "../utils/index"
import {mapState,mapMutations,mapActions} from 'vuex';
export default {
    data(){
        return{
            weixuanzhong:{txt:"",icon:"&#xe655;"},
            shoucangle:{txt:"",icon:"&#xe60d;"},
            dianzan:{txt:"",icon:"&#xe664;"},
            xuanzhongflag:false,
            dianzanflag:false,
            h6value:1,
        }
    },
    methods:{
        ...mapActions(['getmypinglun','getallpinglun']),
        xuanzhongla(){
            this.xuanzhongflag=!this.xuanzhongflag;
            if(this.xuanzhongflag){
                this.getmypinglun({
                    url:"/vue/getmypinglun",
                    cb:()=>{

                    }
                })
            }else{
                this.getallpinglun({
                    url:"/vue/getpinglun",
                    cb:()=>{
            
                    }
                })
            }
        },
        dianzana(pinglun,e){
            var e=window.event||e;
            console.log(pinglun);
            if(e.target.style.color=="rgb(170, 170, 170)"){
                e.target.style.color="rgb(38, 162, 255)";
                e.target.nextSibling.style.color=e.target.style.color;
                console.log("点赞+1")
                http.get("/vue/addzan",{
                    params:{
                        pinglun
                    }
                }).then(res=>{
                    this.getallpinglun({url:"/vue/getpinglun",
                    cb:()=>{
                           
                        }
                    })
                })
            }else{
                e.target.style.color="rgb(170, 170, 170)"
                e.target.nextSibling.style.color=e.target.style.color;
                console.log("点赞-1")
                http.get("/vue/deszan",{
                    params:{
                        pinglun
                    }
                }).then(res=>{
                    this.getallpinglun({url:"/vue/getpinglun",
                    cb:()=>{
                           
                        }
                    })
                })
            }
        },
        dianzanicon(pinglun,e){
            var e=window.event||e;

            if(e.target.style.color=="rgb(170, 170, 170)"){
                e.target.style.color="rgb(38, 162, 255)";
                e.target.previousSibling.style.color="rgb(38, 162, 255)"
                console.log("点赞+1")
                http.get("/vue/addzan",{
                    params:{
                        pinglun
                    }
                }).then(res=>{
                    this.getallpinglun({url:"/vue/getpinglun",
                    cb:()=>{
                           
                        }
                    })
                })
            }else{
                e.target.previousSibling.style.color="rgb(170, 170, 170)"
                e.target.style.color="rgb(170, 170, 170)"
                console.log("点赞-1")
                http.get("/vue/deszan",{
                    params:{
                        pinglun
                    }
                }).then(res=>{
                    this.getallpinglun({url:"/vue/getpinglun",
                    cb:()=>{
                           
                        }
                    })
                })
            }
        }
    }, 
    computed:{
        ...mapState(['pinglunlist']),
    },
}
</script>

<style scoped lang="less">
.jirendianzan{
    margin-right: 0.2rem;
    color: #26a2ff;
}
.pinglun1{
    padding: 0 10px;
    border-top:1px solid #d9d9d9;
    border-bottom:1px solid #d9d9d9;
    height: 0.8rem;
    line-height: 0.8rem;
    .xuanzhong{
        font-size: 0.5rem;
        float: left;
    }

    .zhikan{
        padding-left: 0.3rem;
        float: left;
    }

    .haopinglv{
        float:right;
        margin-right: 0.1rem;
        color: #999;
    }
}

.pinglun2{
    padding: 0 0.1rem;
    .pingjiakuang{
        padding: 0.14rem 0.3rem 0 0.3rem;
        span{
            margin: 0 0.2rem 0.2rem 0;
            background: #fdf0f0;
            padding: 0 0.2rem;
            height: 0.5rem;
            border-radius: 3px;
            line-height: 0.48rem;
            font-size: 13px;
            color: #666;
            display: inline-block;
        }
        .quanbu{
            color: #fff;
            background: #e93b3d
        }
    }
}

.pinglun3{
    padding: 0 0.18rem;
    .yonghu{
        margin-top:0.2rem;
        border-bottom: 1px solid #e2e2e2;
        padding-bottom: 0.3rem;
        .yonghu1{
            height: 0.7rem;
            img{
                width: 0.7rem;
                height: 0.7rem;
                border-radius: 50%;
                vertical-align: middle;
                float: left;
            }
            span{
                line-height: 0.7rem;
                margin-left: 0.15rem;
                margin-right: 0.15rem;
            }
            .shijian{
                float: right;
                font-size: 0.12rem;
            }
        }
        .yonghu2{
            position: relative;
            line-height: 1.5;
            font-size: 14px;
            margin: 5px 0;
            word-break: break-all;
            overflow: hidden;
            max-height: 126px;
        }
        .yonghu3{
            width: 70%;
            height: 70%;
            margin: auto;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .yonghu4{
            color:black;
            font-size: 0.12rem;
            margin-top:0.2rem;
            padding: 0 0.1rem;
            .huifu{
                float: right;

                .huifu1{
                    color: #3985ff
                }
            }
        }
    }
}
</style>
