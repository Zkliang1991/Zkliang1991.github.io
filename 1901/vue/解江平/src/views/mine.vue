<template>
    <div class="pag">
        <div class="myhead">
            <div class="logout">
                <span @click="logout">退出</span>
            </div>
            <div class="touxiang">
                <span>
                   <Upload></Upload>
                </span>
                <div v-if="show">
                    <p @click="goto">登录/注册</p>
                    <p>登录享优惠</p>
                </div>
                <div v-else class="s1">
                    <p>欢迎您{{user}}</p>
                </div>
                
            </div>
            <div class="xuan">
              <a >
                  <i class="icon1"></i>
                  <span>
                    个人资料
                  </span>
              </a>
              <a @click="goaddress">
                  <i class="icon2"></i>
                  <span>
                    收货地址
                  </span>
              </a>
              <a @click="gomycol">
                  <i class="icon3"></i>
                  <span>
                    我的收藏
                  </span>
              </a>
            </div>
            
        </div>
        <div class="order">
                <a href="#javascript:;">我的订单 <i class="icon4"></i></a>
                <div class="list_line">
                    <a href="#javascript:;"><i class="icon-a1"></i>代付款</a>
                    <a href="#javascript:;"><i class="icon-a2"></i>待发货</a>
                    <a href="#javascript:;"><i class="icon-a3"></i>待收货</a>
                    <a href="#javascript:;"><i class="icon-a4"></i>待评价</a>
                </div>
        </div>
        <div class="module_floor">
            <p><span>我的服务</span> <span>联系我们</span></p>
            <ul>
                <li><i></i>我的预售</li>
                <li><i></i>我的礼品单</li>
                <li><i></i>售后服务</li>
                <li><i></i>我的积分</li>
                <li><i></i>发票管理</li>
                <li><i></i>优惠券</li>
                <li><i></i>余额</li>
                <li><i></i>足迹</li>
                <li><i></i>我的评论</li>
                <li><i></i>推荐</li>
                <li><i></i>手表管家</li>
                <li><i></i>维修订单</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Upload from "../components/upload";
export default {
    data(){
        return{
            user:"",
            show:true
        }
    },
    mounted(){
        if(sessionStorage.userInfo){
            this.show = false;
            this.user = sessionStorage.user;
        }
    },
    methods:{
        goto(){
            this.$router.push({name:"login"});
        },
        goaddress(){
             this.$router.push({name:"address"});
        },
        gomycol(){
            this.$router.push({name:"mycol"});
        },
        logout(){
            window.sessionStorage.userInfo = "";
            window.sessionStorage.user = "";
            this.$router.push({name:"login"});
            
        }
    },
    components:{
        Upload
    }

}
</script>

<style lang="scss" scoped>
.pag{
    width: 100%;
    height: 100%;
    margin-bottom: 0.9rem;
    .myhead{
        width: 100%;
        height: 206px;;
        background: url(../assets/images/member-bg.png);
        background-size: cover;
        position: relative;
        .logout{
            overflow: hidden;
            padding: 5px;
            >span{
                float: right;
                color: blue;
            }
        }
        .touxiang{
            width: 100%;
            height: 70px;
            position: absolute;
            top: 44px;
            left: 0;
            overflow: hidden;
            span{
                display: inline-block;
                width: 64px;
                height: 64px;
                float: left;
                margin-left: 24px;
                font-size: 0.3rem;
                >div{
                    width: 100%;
                    height: 100%;
                    img{
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
                }
            }
            div{
                color: white;
                width: 1.8rem;
                height: 64px;
                float: left;
                line-height: 64px;
                // box-sizing: border-box;
                p{
                    // margin: 0.1rem 0 0.1rem 0.2rem;
                    line-height: 19px;
                }
                p:last-child{
                    font-size: 0.2rem;
                }
            }
            .s1{
                padding-top: 13px;
            }
        }
        .xuan{
            width: 100%;
            height: 52px;
            background: rgba(0,0,0,.4);
            position: absolute;
            bottom: 0;
            left: 0;
            a{
                    width: 33.33%;
                    height: 100%;
                    float: left;
                    color: #fff;
                    font-size: 12px;
                    text-align: center;
                    line-height: 17px;
                    box-sizing: border-box;
                    border-right: 1px solid gray;
                    i{
                            margin: 8px auto 4px;
                    }
                    .icon1{
                    display: block;
                    background-image: url(../assets/images/a.png);
                    background-position: -371px -392.5px;
                    background-size: 443px;
                    width: 16px;
                    height: 16px;
                    }
                    .icon2{
                        display: block;
                        background-image: url(../assets/images/a.png);
                        background-position: -202px -368px;
                        background-size: 443px;
                        width: 16px;
                        height: 16px;
                    }
                     .icon3{
                        display: block;
                        background-image: url(../assets/images/a.png);
                        background-position: -42px -417.5px;
                        background-size: 443px;
                        width: 16px;
                        height: 16px;
                    }
            }
            a:last-child{
                border-right:none; 
            }

        }
        
    }
    .order{
            margin-bottom: 8px;
            background: #fff;
            >a{
                display: block;
                 height: 44px;
                line-height: 44px;
                padding-right: 12px;
                margin-left: 12px;
                font-size: 14px;
                color: #333;
                border-bottom: 1px solid #f1f1f1;
                box-sizing: border-box;
                text-align: left;
                 i{
                    display: block;
                    background-image: url(../assets/images/a.png);
                    background-position: -349px -368px;
                    background-size: 443px;
                    width: 16px;
                    height: 16px;
                    float: right;
                    margin-top: 8px;
                }
            }
            .list_line{
                width: 100%;
                height: 80px;
                a{
                    width: 25%;
                    height: 80px;
                    display: block;
                    float: left;
                    text-align: center;
                    font-size: 12px;
                    color: #333;
                    i{
                        position: relative;
                        margin: 20px auto 6px;
                        display: block;
                        background-image: url(../assets/images/a.png);
                        width: 20px;
                        height: 20px;
                    }
                    .icon-a1{
                    background-position: -275px -392.5px;
                    background-size: 443px;
                    }
                    .icon-a2{
                    background-position: -25px -392.5px;
                    background-size: 443px;
                    }
                    .icon-a3{
                    background-position: -300px -392.5px;
                    background-size: 443px;
                    }
                    .icon-a4{
                    background-position: -125px -392.5px;
                    background-size: 443px;
                    }
                }
            }
            }
        .module_floor{
            >p{
                height: 44px;
                line-height: 44px;
                padding-right: 12px;
                padding-left: 12px;
                font-size: 14px;
                color: #333;
                border-bottom: 1px solid #f1f1f1;
                box-sizing: border-box;
                background: white;
                span:first-child{
                    float: left;
                }
                span:last-child{
                    float: right;
                }
            }
            >ul{
                width: 100%;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                background: white;
                margin-bottom: 0.9rem;
                li{
                    width: 25%;
                    height: 80px;
                    font-size: 12px;
                    text-align: center;
                    i{
                    position: relative;
                    margin: 20px auto 6px;
                    display: block;
                    background-image: url(../assets/images/a.png);
                    background-position: -325px -392.5px;
                    background-size: 443px;
                    width: 20px;
                    height: 20px;
                    }
                    
                }
            }
        }
}
</style>
