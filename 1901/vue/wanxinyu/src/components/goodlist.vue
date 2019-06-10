<template>
    <mt-loadmore 
    :top-method="loadTop" 
    :bottom-method="loadBottom"
    :bottom-all-loaded="allLoaded" 
    ref="loadmore"
    >
        <ul class="listz">
            <router-link :to="{name:'shopdetail',params:{goodtail:good}}" tag="li" v-for="(good,index) in goods" :key="index" :class="'shoplist'" :id="index%2==0?'donghua2':'donghua3'">
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
    </mt-loadmore> 
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex';
import {http} from "../utils/index.js";
import {Toast} from "mint-ui";
export default {
    props:["type",'goodLists'],
    data(){
        return{
            goods:[],
            allLoaded:false,
            loading:false,
        }
    },
    mounted(){
        this.goods = this.goodLists.filter((good)=>good.type.value==this.type.value);
    },
    methods:{
        jiaru(a,b,c,d,e){
            if(this.username){
                http.get("/vue/shoucang",{params:{goodid:a,goodimg:b,goodname:c,goodprice:d,username:this.username,goodnum:1,goodtype:1,goodvalue:e}})
                .then(res=>{
                    this.$store.commit("changecaunum"),
                    Toast({
                        message: "亲，收藏成功",
                        duration: 1000,
                    });
                })
            }else{
                this.$router.push({name:'login'})
            }
        },
        loadTop(){
            console.log("下拉刷新 --top")
            setTimeout(()=>{
                this.goods.reverse();// 若数据已全部获取完毕
                this.$refs.loadmore.onBottomLoaded();
                Toast({
                    message:'刷新成功',
                    duration:500
                });
            },1000)
        },
        loadBottom(){
            
        },
        loadMore(){
            
        }
    },
    computed:{
        ...mapState(['username',"carnum"]),
    },
}
</script>

<style lang="less">
#donghua2 {
  animation: bounceInLeft 2s;
}
#donghua3 {
  animation: bounceInRight 2s;
}
.shoplist{
    width: 49%;
    float:left;
    margin-left: 1%;
    margin-top: 1%;
    .img{
        width: 100%;
        height:3.75rem;
        position: relative;

        img{
            width: 100%;
            height: 100%;
        }

        i{
            img{
                width: 0.8rem;
                height: 0.8rem;
                position: absolute;
                bottom: 0.15rem;
                right: 0.15rem;
            }
        }
    }

    .listtext{
        margin-top:0.1rem;
        p{
            font-size: .28rem;
            color: #222;
            line-height: .34rem;
            display:-webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
        }

        span{
            display: block;
            color: #9e9e9e;
            font-size: .24rem;
            line-height: .24rem;
            margin: .1rem 0
        }

        em{
            font-style: normal;
            font-size: .28rem;
            color: #be141c;
            line-height: .34rem;
        }

        i{
            font-size: .24rem;
            color: #9e9e9e;
            line-height: .28rem;
            font-style: normal;
            margin-left: .1rem;
            text-decoration: line-through;
        }
    }
}
</style>
