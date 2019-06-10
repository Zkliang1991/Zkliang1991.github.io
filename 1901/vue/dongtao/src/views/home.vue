<template>
    <div>
        <Head title="永不止步"></Head>
        <Swipe></Swipe>
        <van-row type="flex" justify="space-around">
            <van-col span="6">男款</van-col>
            <van-col span="6">女款</van-col>
            <van-col span="6">中性</van-col>
        </van-row>
        <van-row type="flex" justify="space-around">
            <van-col span="6">跑鞋</van-col>
            <van-col span="6">休闲</van-col>
            <van-col span="6">经典</van-col>
        </van-row>
       
        
           
       
        

    </div>
</template>

<script>
import Swipe from "../components/swipe.vue";
export default {
    components:{
        Swipe,
    }
}
</script>


<style lang="scss" scoped>
.van-col{
    margin-top: 10px;
    line-height: 50px;
    text-align: center;
    background: rgba(0, 0, 0, 0.05);
    color: #000;
    font-weight: 900;
}
</style>
