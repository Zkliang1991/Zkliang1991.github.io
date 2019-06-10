<template>
  <div class="home">
   <Head title="首页"></Head>
    <van-button type="default">默认按钮</van-button>
<van-button type="primary">主要按钮</van-button>
<van-button type="info">信息按钮</van-button>
<van-button type="warning">警告按钮</van-button>
<van-button type="danger">危险按钮</van-button>

 

      <van-notice-bar :scrollable="true"
        :text="text"
        color="#1989fa"
        background="#ecf9ff"
        left-icon="info-o"
      >
      </van-notice-bar>
    
   <van-swipe :autoplay="3000" class="banner">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image">
  </van-swipe-item>
</van-swipe>



  </div>
</template>

<script>





export default {
  name: 'home',
  components: {
  
  },
  data(){
    return{
      unscrollable: '禁用滚动',
      mode: '通知栏模式',
      wrapable: '多行展示',
      text: '足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。',
      customStyle: '自定义样式',
      images:[
        require("@/assets/lunbo1.png"),
       require("@/assets/lunbo2.png"),
       require("@/assets/lunbo3.png"),
       require("@/assets/lunbo4.png"),
      ]
    }
  }
}
</script>
<style scoped>
.demo-swipe--vertical{
   height: 2.5rem;
}
.demo-swipe--vertical .van-swipe-item{
   line-height: 2.5rem;
   background-color: blueviolet;
   text-align: center;
}
.banner{
  height: 2.5rem;
}
.banner img{
  width: 100%;
  height: 2.5rem;
}
</style>





