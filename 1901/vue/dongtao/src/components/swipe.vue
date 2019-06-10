<template>
   
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index" >
            <img v-lazy="image" style="height:240px">
        </van-swipe-item>
      </van-swipe>
    
</template>

<script>

export default {
    data(){
        return{
            images: [
                'https://www.newbalance.com.cn/on/demandware.static/-/Sites-newbalance_cn-Library/zh/dw0bda7e9f/hubs/2019/May/liwupu/720.jpg',
                'https://www.newbalance.com.cn/on/demandware.static/-/Sites-newbalance_cn-Library/zh/dw84730155/hubs/2019/2yue/nbrc/wxl1.jpg',
                'https://www.newbalance.com.cn/on/demandware.static/-/Sites-newbalance_cn-Library/zh/dwe0e0d1a6/hubs/2019/4yue/NB1997/wxl1.jpg',
            ]
        }
    }
}
</script>



//  scoped 限定样式的作用范围
<style lang="scss" scoped>
    img {
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 240px;
      // padding: 30px 60px;
      background-color: white;
      pointer-events: none;
    }
    
</style>
