<template>
    <div>
       <van-tabbar v-model="nActive.active" class="foot">
            <van-tabbar-item name="home" icon="wap-home" @click="clickHome">首页</van-tabbar-item>
            <van-tabbar-item name="classify" icon="apps-o" @click="clickClassify">分类</van-tabbar-item>
            <van-tabbar-item name="shopping" icon="cart-o" @click="clickShopping">购物车</van-tabbar-item>
            <van-tabbar-item name="my" icon="contact" @click="clickMy">我的</van-tabbar-item>
       </van-tabbar>
    </div>
</template>

<script>
import store from "@/store";
import {mapState,mapActions,mapMutations} from "vuex"
export default {
    computed:{
        ...mapState([
            "nActive",
            "nHui"
        ])
    },
    methods:{
        clickHome(){
            this.$router.push({name:'home'})          
        },
        clickClassify(){
            this.$router.push({name:'classify'})
        },
        clickShopping(){
            this.nHui.hui="shopping";
            if(sessionStorage.getItem("userInfo")==null){
                this.$router.push({name:'login'});
            }else{
                this.$router.push({name:'shopping'});
            }
        },
        clickMy(){
            this.nHui.hui="my";
            if(sessionStorage.getItem("userInfo")==null){
                this.$router.push({name:'login'});
            }else{
                this.$router.push({name:'my'});
            }
        }
    }
}
</script>

<style scoped>
    .foot{
        position: fixed;
        left: 0;
        bottom: -1px;
    }
</style>


