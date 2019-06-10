<template>
    <div class="swiperShi">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" 
                v-for="(value,index) in imgArr" 
                :key="index"
                @click="torouter">
                    <img :src="value.imgUrl">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>


<script>

export default {
    data(){
        return {
            imgArr:[
                {imgUrl:'https://goods1.juancdn.com/jas/190531/0/b/5cf0efac33b08946025bf0db_1080x418.jpg'},
                {imgUrl:'https://goods3.juancdn.com/jas/190529/4/0/5cee5954b6f8ea68170f09fb_1080x418.jpg'},
                {imgUrl:'https://goods2.juancdn.com/jas/190529/3/5/5cee342fb6f8ea70bd784db7_1080x418.png'},
                {imgUrl:'https://goods6.juancdn.com/jas/190531/b/6/5cf0f959b6f8ea10792f5b5c_1080x418.jpg'},
                {imgUrl:'https://goods5.juancdn.com/jas/190422/8/2/5cbd6608b6f8ea54ff237631_1080x418.png'}                
            ]
        }
    },
    methods:{
        torouter(){
            this.$router.push({name:'class'})
        }
    },
    mounted(){
        new Swiper('.swiper-container', {
            loop : true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },//可选选项，自动滑动
            speed:500,
            pagination: {
                el: '.swiper-pagination',
            }
        })
    }
}
</script>


<style scoped lang="scss">
  .swiperShi{
      width: 100%;
      height: 2.9rem;
  };
  .swiper-container, .swiper-container , .swiper-slide , img{
      width: 100%;
      height: 100%;
  }
</style>


