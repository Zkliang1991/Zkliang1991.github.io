<template>
    <div class="tupianxiang">
        <van-tabs type="card" class="card">
            <van-tab title="图文详情" >
                <p 
                v-for="(value ,index) in GoodIdStore.goodArtical.articalacticalarr"
                :key="index" class="cardone">
                <img :src="value" alt="">
                </p>
            </van-tab>
            <van-tab title="商品参数" disabled></van-tab>
            <van-tab title="资讯与售后" disabled></van-tab>
        </van-tabs>
    </div>
</template>

<script>
import Vue from 'vue'
import { Tab, Tabs } from 'vant';
import {mapState}  from 'vuex'

Vue.use(Tab).use(Tabs);

export default {
    computed:{
        ...mapState([
            'GoodIdStore'
        ])
    }
}
</script>


<style lang="scss" scoped>
    .tupianxiang{
        margin-top: .2rem;
    }
    .cardone{
        margin-top:.5rem;
        width: 100%;
        img{
            width: 100%;
        }
    }
</style>


