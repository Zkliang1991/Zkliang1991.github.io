<template>
    <div class="goodxiangswiper">
        <van-swipe @change="onChange" class="zu">
            <van-swipe-item 
            v-for="(value , index) in GoodIdStore.goodArtical.goodimgarr"
            :key="index" >
            <img :src="value" alt="">
            </van-swipe-item>
            <div class="custom-indicator" slot="indicator" v-if="GoodIdStore.goodArtical.goodimgarr">
                <van-tag round class="roundx" color="rgba(0,0,0,.4)">{{ current + 1 }}/{{GoodIdStore.goodArtical.goodimgarr.length}}</van-tag>
            </div>
        </van-swipe>
        <div class="more" @click="flagshow=!flagshow">
            <van-icon name="more-o" size=".5rem" />
            <div class="moretwo" v-if="flagshow">
                <p @click="$router.push({name:'home'})"><van-icon name="wap-home" size=".4rem" class="icontwo" />首页</p>
                <p><van-icon name="like-o" size=".4rem" class="icontwo" />我的收藏</p>
                <p><van-icon name="notes-o" size=".4rem" class="icontwo" />我的订单</p>
                <p @click="$router.back()"><van-icon name="arrow-left" size=".4rem" class="icontwo" />返回</p>
                

            </div>
        </div>
    </div>
</template>

<script>

import {mapState,mapActions}  from 'vuex'
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);

export default {
    data(){
        return {
            current:0,
            flagshow:false
        }
    },
    computed:{
        ...mapState([
            'GoodIdStore'
        ]),
        goodid(){
            return window.localStorage.goodid
        }
    },
    methods:{
        ...mapActions([
            'getGoodInfo',
            'getGoodArtical'
        ]),
        onChange(index){
            this.current=index
        }
    },
    mounted(){
        new Swiper('.swiper-container', {
            autoplay: true,
        })
        if(this.GoodIdStore.goodid==""){
            this.getGoodInfo({goodid:localStorage.goodid})
            this.getGoodArtical({goodid:localStorage.goodid})
            this.$router.push({name:'good'})
        }       
    }
}
</script>

<style scoped lang="scss">
    .goodxiangswiper,.swiper-container,.swiper-wrapper,.swiper-slide{
        width: 100%;
        img{
            width: 100%;
        }
    }
    .roundx{
        padding: .05rem .2rem;
    }
    .custom-indicator{
        position: absolute;
        bottom: .30rem;
        right: .20rem;
    }
    .more{
        position: absolute;
        width: .5rem;
        height: .5rem;
        border-radius: 50%;
        top:.30rem;
        right:  .20rem ;
        padding: .1rem;
        line-height: .5rem;
        font-size: .12rem;
        color:white;
        background: rgba(0,0,0,.5);
    }
    .zu{
        position: relative;
    }
    .moretwo{
        width: 2.0rem;
        background:rgba(0,0,0,.5);
        position: absolute;
        right: 0;
        font-size: .14rem;
        border-radius:.1rem; 
        p{height: .8rem;line-height:.8rem}
        .icontwo{float: left;margin: .2rem ;}
    }

</style>


