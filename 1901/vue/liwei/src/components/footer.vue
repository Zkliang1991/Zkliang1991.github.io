<template>
    <div id="footer">
        <van-tabbar v-model="name"
        active-color="#ff464e"
        inactive-color="#000">
            <van-tabbar-item 
            v-for="(value,index) in nameArr" 
            :icon="iconArr[index]" :key="index"
            :name="value"
            :to="{name:value}"
            :info="value=='car'?UserStore.carnumArr:''"
            >{{footerName[index]}}</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>

import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);
import {mapState} from 'vuex'

//引入vuex的辅助函数



export default {
    data(){
        return {
            iconArr:['wap-home','apps-o','shopping-cart-o','user-o'],
            nameArr:['home','class','car','mine'] ,
            footerName:['首页','分类','购物车','我的卷皮']  
        }
    },
    computed:{
        ...mapState([
            'idnexhccm',
            'UserStore'
        ]),
        name:{
            get(){
                return this.idnexhccm.selected  
                //解决双向绑定stroe状态树属性会自动直接修改的小Bug,可以在set中触发commit
            },
            set(){

            }
        }
    },
    
    methods:{
        
    }

}
</script>

