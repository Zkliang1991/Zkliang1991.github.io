<template>
    <div class="home">
        <router-view></router-view>
        <aSearch></aSearch>
        <div class="banner"></div>
        <router-link to="/assurance">
        <div class="little">
            <img src="../assets/images/little.webp" alt="">
        </div>
        </router-link>
        <div class="img"></div>
        <div class="img2">
            <img src="../assets/images/home3.gif" alt="">
        </div>
        <div class="img3">
            <img src="../assets/images/home4.webp" alt="">
        </div>
        <div class="top">
        <van-icon name="upgrade" size="1rem"  color="#5a5a5a" @click="refresh" />
        </div>
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" :src="image" />
            </van-swipe-item>
        </van-swipe>

        <hotsale></hotsale>
    </div>
</template>


<script>
import aSearch from "@/components/aSearch.vue"
import hotsale from "@/components/hotSale.vue"
export default {
    data(){
        return {
            images:[
                'https://img.wzj.com/modules/PIC6051816181497.jpg?x-oss-process=style/w800-webp',
                'https://img.wzj.com/modules/PIC5291153020137.jpg?x-oss-process=style/w800-webp'
            ]
        }
    },
    components:{
        aSearch,hotsale
    },
    methods:{
        refresh() {
            const { fullPath } = this.$route
            this.$router.replace({
            path: '/redirect' + fullPath
            })
        },
    },
    mounted(){
        this.$store.dispatch("changeColor","rgb(132, 72, 82)")
    }
    
}
</script>

<style lang="scss" scoped>
.banner{
    height: 6.9rem;
    background-image: url("../assets/images/home1.webp");
    background-size: contain;
}
.little{
    height: 0.6rem; width: 100%;
    img{
        height: 0.6rem; width: 100%;
    }
}
.img{
    height: 5.37rem; width: 100%;
    background-image: url("../assets/images/home2.webp");
    background-size: 100% 5.37rem;
}
.img2{
    height: 2.12rem; width: 100%;
    img{
        width: 100%; height: 100%;
    }
}
.img3{
    height: 3.46rem; width: 100%;
    img{
        width: 100%; height: 100%;
    }
}

   
.top{
    width: 1rem; height: 1rem; 
    position: fixed; border-radius: 50%; right:0.4rem;
    box-shadow: 0 1px 5px 0 hsla(0,0%,49%,.3); bottom: 1.8rem;
    background: hsla(0,0%,100%,.7); z-index:10000000000;
}
.van-swipe{
    height: 3rem;
    .van-swipe-item{
        img{
            height: 3rem;
        }
    }
}


</style>


