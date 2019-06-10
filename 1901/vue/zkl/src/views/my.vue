<template>
    <div>
         <Head title="个人中心" :show="true"></Head>        
        <h2> 个人中心 - mine </h2>
        <mt-button type="danger" @click="gotoLogin"> 马上登录</mt-button>
        <Swipe 
            id="banner"
            :options="{autoplay:true,speed:1500}"
        >
            <div class="swiper-slide slide" v-for="(img,i) in imgs" :key="i">
                <img :src="img" alt="" class="swiper-img" >
            </div>
        </Swipe> 

        <Swipe
        id="movie"
        :options="{loop:true,autoplay:true}"
        >
            <div class="swiper-slide slide" v-for="(b,i) in newBanner" :key="i">
                <img :src="b.images.large" alt="" class="swiper-img" >
            </div>
        </Swipe>
    </div>
</template>


<script>
import { Indicator ,Toast } from 'mint-ui';

import {mapState,mapActions,mapGetters} from "vuex"
export default {
    computed:{
        ...mapState(['goodInfo']),
        ...mapGetters(['newBanner'])
    },
    data(){
        return {
            imgs:[
                require("@/assets/images/img1.jpg"),
                require("@/assets/images/img2.jpg"),
                require("@/assets/images/img3.jpg"),
                require("@/assets/images/img4.jpg")
            ],
            banner:[]
        }
    },
    mounted(){
        this.getBanner({
            url:"/vue/movie",
            cb(){
                console.log("get movie")
            }
        })
        // Indicator.open({
        //     text: '加载中...',
        //     spinnerType: 'triple-bounce'
        // });
        // this.$axios.get("/vue/movie",{
        //     params:{
        //         limit:6
        //     }
        // }).then(res=>{
        //         console.log(res);
        //         // setTimeout(()=>{
        //         //     Indicator.close();
        //         //     Toast({
        //         //         message: '操作成功',
        //         //         iconClass: 'icon iconfont icon-success',
        //         //         duration:1500
        //         //     });
        //         // },1000)
        //         // 将回调延迟到下次 DOM 更新循环之后执行 延迟 
        //         this.$nextTick(()=>{
        //             this.banner = res.data.result;
        //             Indicator.close();
        //             Toast({
        //                 message: '操作成功',
        //                 iconClass: 'icon iconfont icon-success',
        //                 duration:1500
        //             });
        //         })
        //     })
    },
    methods:{
        ...mapActions(['getBanner']),
        gotoLogin(){
            this.$router.push({name:'login'})
        }
    }
}
</script>


<style scoped>
.slide,  .swiper-img{
    width:100%;
    height:4rem;
}
</style>
