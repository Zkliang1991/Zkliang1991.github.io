<template>
     <div>
        <van-tabbar v-model ="active" active-color="skyblue">
            <van-tabbar-item  icon="wap-home" to="/index/home1" >首页</van-tabbar-item>
            <van-tabbar-item  icon="hot-sale-o" to="classify" >分类</van-tabbar-item>
            <van-tabbar-item  icon="cart-o" to="cart" info="10">购物车</van-tabbar-item>
            <van-tabbar-item  icon="manager-o" to="my">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>



<script>
export default {
    data(){
        return{
            active:0
        }
    }
}   
</script>