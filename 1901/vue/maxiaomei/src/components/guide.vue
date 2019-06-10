
<template>
    <div>
       <mt-swipe :auto="2000" class="swiper" :show-indicators="false">
        <mt-swipe-item v-for="(img,i) in imgs" :key="i">
            <img :src="img" alt="" class="img">
        </mt-swipe-item> 
        </mt-swipe>
    </div>
</template>
<script>
export default {
    name:"guide",
    methods:{
    
    },
    data(){
        // return{
        //     imgs:[
        //         require("@/assets/images/banner1.jpg"),
        //          require("@/assets/images/banner2.jpg"),
        //          require("@/assets/images/banner3.jpg"),
        //         require("@/assets/images/banner4.jpg"),
        //          require("@/assets/images/banner5.jpg"),
        //           require("@/assets/images/banner6.jpg"),

        //     ]
        // }
    }
}
</script>
<style>

    .swiper.mt-swipe-item,.img{
        width: 100%;
        height: 100%;
    }
</style> 