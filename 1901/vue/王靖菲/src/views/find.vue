<template>
    <div>
        <div>
            <router-view></router-view>
            <aSearch></aSearch>
        </div>
        <van-row class="classify">
            <van-col span="6">黑胡桃</van-col>
            <van-col span="6">沙发</van-col>
            <van-col span="6">床</van-col>
            <van-col span="6">餐桌</van-col>
            <van-col span="6">锐驰</van-col>
            <van-col span="6">北欧表情</van-col>
            <van-col span="6">harbor house</van-col>
            <van-col span="6">顾家</van-col>
        </van-row>
        <van-tabs v-model="active" sticky color="#be4c4b" title-active-color="#be4c4b"
        @click="cut" >
            <van-tab  v-for="(item,index) in title" :key="index" 
            :title="item.name"  >
            
                <div :class="i==0?'show':'unshow'" class="category">
                    <router-view></router-view>
                    <!-- <keep-alive> -->
                        <category></category>
                    <!-- </keep-alive> -->
                </div>
                <div :class="i==1?'show':'unshow'" class="style"></div>
                <div :class="i==2?'show':'unshow'" class="room"></div>

            </van-tab>
        </van-tabs>
        <p class="kong2"></p>
    </div>
</template>

<script>
//搜索显影需要用到vuex,父组件与子组件之间的数据共享
import category from "@/components/category.vue"
// import Search from "@/components/search.vue"
import aSearch from "@/components/aSearch.vue"
export default {
      data(){
        return {
            active:0,
            title:[
                {name:"品类",classifyName:"category"},
                {name:"风格",classifyName:"style"},
                {name:"空间",classifyName:"room"}
            ],
            i:0,
            value:""
        }
    },
    methods:{
        cut(index){
            this.i=index;
        },
        talk(){
            alert("pp")
        },
    },
    mounted(){
        this.$store.dispatch("changeColor","rgb(162, 138, 125)")
    },
    components:{
        category,aSearch
    }
}
</script>


<style lang="scss" scoped>
.kong2{
    height: 1.8rem;
}
.classify{
    background: #a28a7d;
    padding-bottom:0.2rem; padding-top:0.1rem; text-align: center;
    height: 1.04rem; margin-top:-1px;
    .van-col{
        padding: 0.1rem 0;
        color: #fff;
        font-size: 12px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
    }
}

</style>

