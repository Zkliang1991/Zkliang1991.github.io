<template >
    <div>
        <Head title="首页"></Head>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(img,i) in imgs" :key="i">
                <img :src="img" alt="" class="img" @click="tiaozhuan">
            </mt-swipe-item>
        </mt-swipe>
        <ul class="leibie">
            <li v-for="(img,i) in tenimg" :key="i" @click="tiaozhuan">
                <img :src="img">
            </li>
        </ul>
        <div>
            <img :src="require('../assets/images/170.jpg')" class="img1">
            <img :src="require('../assets/images/171.jpg')" class="img2">
            <img :src="require('../assets/images/172.jpg')" class="img2">
            <img :src="require('../assets/images/173.jpg')" class="img2">
        </div>
        <div class="kuaiqiang" @click="tiaozhuan">
            <img :src="require('../assets/images/180.jpg')" class="img3">
            <div>
                <ul>
                    <li>
                        <img :src="require('../assets/images/181.jpg')" class="img4">
                        <img :src="require('../assets/images/185.png')" class="img5">
                        <p>
                            <span class="span1">快抢价</span>
                            <span class="span2">￥105</span>
                        </p>
                    </li>
                    <li>
                        <img :src="require('../assets/images/182.jpg')" class="img4">
                        <img :src="require('../assets/images/186.png')" class="img5">
                        <p>
                            <span class="span1">快抢价</span>
                            <span class="span2">￥3099</span>
                        </p>
                    </li>
                    <li>
                        <img :src="require('../assets/images/183.jpg')" class="img4">
                        <img :src="require('../assets/images/187.png')" class="img5">
                        <p>
                            <span class="span1">快抢价</span>
                            <span class="span2">￥195</span>
                        </p>
                    </li>
                    <li>
                        <img :src="require('../assets/images/184.jpg')" class="img4">
                        <img :src="require('../assets/images/188.png')" class="img5">
                        <p>
                            <span class="span1">快抢价</span>
                            <span class="span2">￥599</span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="temai">
            今日特卖·十点上新
        </div>
        <ul class="listz" v-if="show">
            <router-link :to="{name:'shopdetail',params:{goodtail:good}}" tag="li" v-for="(good,index) in goodLists" :key="index" :class="'shoplist'">
                <div class="img">
                    <img :src="good.img" alt="" class="goodimg">
                    <i><img :src="require('../assets/gocar.png')" @click.stop.prevent="jiaru(good._id,good.img,good.name,good.price,good.type.value)"></i>
                    </div>
                <div class="listtext">
                    <p>{{good.name}}</p>
                    <span>还剩 {{good.discount}}件</span>
                    <h6><em>￥{{good.price}}</em><i>￥9999</i></h6>
                </div>
            </router-link>
        </ul>
        <img :src="require('../assets/shoucang.png')" class="shoucang" @click="goshopcar">
        <mt-badge size="small" type="error" class="shuzi">{{carnum}}</mt-badge>
    </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex';
import {http} from "../utils/index.js";
import {Toast} from 'mint-ui';
    export default{
        data(){
        return{
            imgs:[
                require("../assets/images/5.jpg"),  
                require("../assets/images/6.jpg"),
                require("../assets/images/7.jpg"),
                require("../assets/images/8.jpg"),
            ],
            tenimg:[
                require("../assets/images/160.png"),  
                require("../assets/images/161.png"),
                require("../assets/images/162.png"),
                require("../assets/images/163.png"),
                require("../assets/images/164.png"),  
                require("../assets/images/165.png"),
                require("../assets/images/166.png"),
                require("../assets/images/167.png"),
                require("../assets/images/168.png"),
                require("../assets/images/169.png"),
            ],
            show:false
        }
    },
    methods:{
        ...mapActions(['getGoodlistsAJAX']),
        tiaozhuan(){
            this.$router.push({name:"classify"})
        },
        jiaru(a,b,c,d,e){
            if(this.username){
                http.get("/vue/shoucang",{params:{goodid:a,goodimg:b,goodname:c,goodprice:d,username:this.username,goodnum:1,goodtype:1,goodvalue:e}})
                .then(res=>{
                    this.$store.commit("changecaunum")
                    Toast({
                        message: "亲，收藏成功",
                        duration: 1000,
                    });
                })
            }else{
                this.$router.push({name:'login'})
            }
        },
        goshopcar(){
            this.$router.push({name:"car"})
        }
     
    },
    computed:{
        ...mapState(['goodLists','username',"carnum"]),
    },
    components:{
    
    },
    mounted(){
        this.getGoodlistsAJAX({
            url:"/vue/getGoodlists",
            cb:()=>{
                this.show=true;
            }
        })
    },
}
</script>

<style lang="less" scoped>
.img{
    width:100%;
    height:5rem;
}
.mint-swipe{
    height: 5rem;
}
.leibie{
    width: 100%;
    li{
        width: 20%;
        float: left;
        img{
            width: 100%;
        }
    }
}
.img1{
    width: 100%;
}
.img2{
    width: 33%;
    float: left;
}

.kuaiqiang{
    position: relative;
    .img3{
        width: 100%;
    }

    ul{
        width: 98%;
        margin-left: 1%;
        position: absolute;
        top:4.8rem;
        li{
            width:23%;
            margin-left: 2%;
            float: left;

            .img4{
                width: 100%;
            }
            .img5{
                width: 60%;
                margin-top: 0.15rem;
                margin-left: 0.28rem;
            }

            p{
                margin-top:0.1rem;
                span{
                    float: left;
                    font-size: 0.1rem;
                }

                .span1{
                    background-color: rgb(222, 61, 150);
                    color: rgb(255, 255, 255);
                    text-align: center;
                }

                .span2{
                    color: rgb(222, 61, 150);
                    margin-left: 0.1rem;                }
            }
        }
    }
}

.temai{
    background-color: #dddddd2e;
    height: 1.23333rem;
    font-size: 0.4rem;
    color: rgb(34, 34, 34);
    font-weight: bold;
    text-align: center;
    line-height: 1.23333rem;
}

.shoucang{
    position: fixed;
    top: 10.8rem;
    left: -0.4rem;
}

.shuzi{
    position: fixed;
    top: 10.8rem;
    left: 0.25rem;
}

</style>
