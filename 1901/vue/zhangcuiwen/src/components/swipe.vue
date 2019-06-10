<template>
    <div>
        <!-- <mt-swipe :auto="4000" id="lunbo" class="swiper lunbo" :show-indicators="false">
            <mt-swipe-item class="lunbo" v-for="(img,i) in imgs" :key="i"  >
                    <img :src="img" alt="" class="img" >
            </mt-swipe-item>
        </mt-swipe>
     </div> -->
        <van-swipe @change="onChange" id="lunbo">
            <van-swipe-item  v-for="(img,i) in imgs" :key="i">
                <img :src="img" alt="" class="img" >
            </van-swipe-item>
            <div class="custom-indicator" slot="indicator">
                {{ current + 1 }}/4
            </div>
        </van-swipe>
        </div>
</template>
<script>
export default {
    data(){
        return {
            imgs:[
                    require("@/assets/images/1.jpg"),
                    require("@/assets/images/2.jpg"),
                    require("@/assets/images/3.jpg"),
                ]
            }
    }
      
}
</script>
<style>
  img {
     width:100%;
     height:100%;
  }
  #lunbo{
      height: 200px;
      width: 100%;
      margin:.5rem 0;
  }
</style>
