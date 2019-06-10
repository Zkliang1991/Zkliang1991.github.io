<template>
    <div>
        <Head title="搜索" :show="!!1"></Head>
        <mt-search  class="mt-search" v-model.lazy="value">
                <ul class="ul">
                    <ul class="listz">
                        <router-link :to="{name:'shopdetail',params:{goodtail:good}}" tag="li" v-for="(good,index) in result" :key="index" :class="'shoplist'" :id="index%2==0?'donghua2':'donghua3'">
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
                </ul>
        </mt-search>
        <div class="zuijin" v-if="show">
            <p class="p1">最近搜索</p>
            <p class="p2">清空</p>
        </div>
        <div class="zuijin1" v-if="show">
            <p @click="value='短袖衬衫'">短袖衬衫</p>
            <p @click="value='潮牌'">潮牌</p>
        </div>
        <div class="remen" v-if="show">
            <div>热门搜索</div>
        </div>
        <div class="remen1" v-if="show">
            <p @click="value='欧时力'">欧时力</p>
            <p @click="value='嘻哈潮牌'">嘻哈潮牌</p>
            <p @click="value='加厚T恤'">加厚T恤</p>
            <p @click="value='自制'">自制</p>
            <p @click="value='海澜之家'">海澜之家</p>
            <p @click="value='经典基础款'">经典基础款</p>
            <p @click="value='长袖T恤'">长袖T恤</p>
            <p @click="value='明星同款'">明星同款</p>
            <p @click="value='婚纱'">婚纱</p>
            <p @click="value='花仙子'">花仙子</p>
            <p @click="value='迪枚阁'">迪枚阁</p>
            <p @click="value='梦幻花朵'">梦幻花朵</p>
            <p @click="value='经典韩版'">经典韩版</p>
            <p @click="value='铅笔西装裤'">铅笔西装裤</p>
            <p @click="value='GXG'">GXG</p>
            <p @click="value='藏青色羊毛'">藏青色羊毛</p>
            <p @click="value='酒店前台'">酒店前台</p>
        </div>
        <img :src="require('../assets/shoucang.png')" class="shoucang" @click="goshopcar">
        <mt-badge size="small" type="error" class="shuzi">{{carnum}}</mt-badge>
    </div>
</template>


<script>
import {http} from "../utils"
import {Toast} from "mint-ui";
import {mapState,mapMutations,mapActions} from 'vuex';
export default {
    data(){
        return{
            value:"",
            result:[],
            show:true,
        }
    },
    watch:{
        value(newVal){
            this.show=true;
            http.get("/vue/search",{
                params:{
                    keyword:newVal
                }
            }).then(res=>{
                this.show=false;
                this.result=res.data.result;
            })
            
        }
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
        goshopcar(){
            this.$router.push({name:"car"})
        }
    },
    computed:{
        ...mapState(['username',"carnum"]),
    },
}
</script>

<style lang="less" scoped>
#donghua2 {
  animation: bounceInLeft 2s;
}
#donghua3 {
  animation: bounceInRight 2s;
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

#moveIn {
  animation: bounceIn 1s;
}
.mt-search{
    margin-top:0.85rem!important;
    a{
        color:black !important;
    }
}

ul{
    margin-top:1.1rem;
}

.zuijin{
    width: 100%;
    position: fixed;
    top:2.2rem;
    color:black;
    .p1{
        float: left;
        margin-left:0.4rem;
    }

    .p2{
        float: right;
        margin-right: 0.4rem;
    }
}

.zuijin1{
    width: 96%;
    position: fixed;
    border-bottom: 1px solid #887e7e;
    top: 2.85rem;
    height: 1.3rem;
    margin-left: 2%;
    
    p{
        color: #858992;
        padding: 0.05rem 0.25rem;
        font-size: .32rem;
        float: left;
        margin-left:0.3rem;
        border:solid 1px #5d78ab;
        border-radius: .10667rem;
    }
}

.remen{
    width: 95%;
    position: fixed;
    top: 4.5rem;
    margin-left: 5%;
    color:black;
}

.remen1{
    width: 96%;
    position: fixed;
    top: 5.05rem;
    margin-left: 2%;

    p{
        color: #858992;
        padding: 0.05rem 0.15rem;
        font-size: .32rem;
        float: left;
        margin-left:0.3rem;
        border:solid 1px #5d78ab;
        border-radius: .10667rem;
        margin-top:0.1rem;
    }
}
</style>

