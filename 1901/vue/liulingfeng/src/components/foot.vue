<template>
     <div>
        <van-tabbar v-model ="active" active-color="#07c160">
            <van-tabbar-item  icon="wap-home" to="/index/home" >首页</van-tabbar-item>
            <van-tabbar-item  icon="cluster-o" to="goods" >选表</van-tabbar-item>
            <van-tabbar-item  icon="bag-o" to="shoppingcar" :info="carNum?carNum:''">购物袋</van-tabbar-item>
            <van-tabbar-item  icon="user-o" to="my">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>



<script>

import store from "@/store";
import {mapState,mapActions,mapMutations} from "vuex";


export default {
    data(){
        return{
            active:0,
        }
    },
    methods:{
        ...mapActions([
            "SET_ACCOUNT"
        ]),
        count_num(){
            //进入store 
        }
    },
    computed:{
        carNum(){
            return this.$store.getters.getNum
        }
    },
    created(){
        console.log( this.$store.getters.getNum)
        console.log(1111)
        console.log(this.$store)
        console.log("this is my" + this.count)


    }
}   
</script>


