<template>
    <div>
        <mt-swipe :speed="300" :auto="3000" id="lunbo" class="swiper lunbo" :default-index="1"  :show-indicators="true">
            <mt-swipe-item class="lunbo" v-for="(img,i) in imgs" :key="i"  >
                 <img :src="img" alt="" class="img" >
            </mt-swipe-item>
        </mt-swipe>
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
                    require("@/assets/images/4.jpg"),
                    require("@/assets/images/5.jpg")
                ]
            }
    }   
}
</script>
<style>
  .lunbo img {
     width:100%;
     height:100%;
  }
  #lunbo{
      height: 200px;
  }
</style>



