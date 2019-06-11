<template>
    <div>
        <van-tabbar v-model="active" active-color="rgb(190, 76, 75)" route>
            <van-tabbar-item name="home" icon="home-o" to="/home">首页</van-tabbar-item>
            <van-tabbar-item name="lives" icon="orders-o" to="/lives">生活家</van-tabbar-item>
            <van-tabbar-item name="find" icon="apps-o" to="/find">找家居</van-tabbar-item>
            <van-tabbar-item name="car" icon="cart-o" to="/cart">购物车</van-tabbar-item>
            <van-tabbar-item name="mine" icon="user-circle-o" to="/mine">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    data(){
        return {
            active:0
        }
    }
}
</script>

<style lang="scss" scoped>
div{
    background-color: white;
}
// .van-rabbar{
//     position: fixed;
//     bottom: 0; left: 0;
// }
</style>





