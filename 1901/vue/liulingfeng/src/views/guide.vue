<template>
    <div>
        <van-swipe :autoplay="3000" class="swiper" >
            <van-swipe-item v-for="(image, i) in images" :key="i">
                <img :src="image" alt="" class="img"  @click="gotoApp(i)">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
    name:"guide",
     data() {
        return {
            images: [
                require('../assets/1.jpg') ,
                require('../assets/2.jpg') ,
                require('../assets/3.jpg') ,
                require('../assets/4.jpg') 
                ]
            }
        },
        methods:{
        gotoApp(id){
            if(id==this.images.length-1){
                this.$router.push({name:'home'})
                }
            }
        },
    mounted(){
        if(localStorage.pcount){
            localStorage.pcount++;
            if(localStorage.pcount>3){
                this.$router.push({name:'home'})
            }
        }else{
            localStorage.pcount = 1;
        }
    }
}
</script>


<style scoped>
    .swiper,van-swipe-item ,.img {
        width:100%;
        height:100%;
    }
</style>