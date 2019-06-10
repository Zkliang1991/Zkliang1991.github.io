<template>
    <div class="classheader">
         <van-nav-bar 
         :title="ClassStore.classHeaderTitle" 
         left-text="返回" 
         left-arrow 
         :style="{background:arr[ClassStore.flgaIndexNum]}"
         @click-left="onClickLeft">
            <van-icon name="search" slot="right" @click="$router.push({name:'search'})" class="sousuo"/>
        </van-nav-bar>
    </div>
</template>

<script>

import Vue from 'vue'
import { NavBar } from 'vant';
Vue.use(NavBar);

import {mapState} from 'vuex'

export default {
    data(){
        return {
            
            arr:[
                'linear-gradient(to bottom right, white , #ffc8c8)',
                'linear-gradient(to bottom right, white , #f9dfb7)',
                'linear-gradient(to bottom right, white , #e4e0e0)',
                'linear-gradient(to bottom right, white , #beead2)',
                'linear-gradient(to bottom right, white , #ffc4df)',
                'linear-gradient(to bottom right, white , #f5f3b6)',
                'linear-gradient(to bottom right, white , #8ed4d4)',
                'linear-gradient(to bottom right, white , #c2ffae)',
            ] //只兼容标准浏览器, 渐进增强, 低版本就是白色
        }
    },
    methods:{
       onClickLeft(){
           this.$router.back()
       }
    },
    computed:{
        ...mapState([
            'ClassStore'
        ])
    }
}
</script>

<style scoped lang="scss">
    .sousuo{
        font-size: .4rem;
    }
    .classheader{
        position: sticky;
        top: 0;
        z-index: 100;
    }
    
</style>




