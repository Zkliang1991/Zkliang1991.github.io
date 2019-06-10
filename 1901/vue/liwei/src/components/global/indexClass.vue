<template>
    <div class="indexclass">
        <van-tabs v-model="active" sticky animated swipeable title-active-color="#ff464e">
            <van-tab title="精选单品" class="a">
                <GoodsList :goodslist="arrOne" xuan="1"></GoodsList>
                <van-button type="default" size="large" @click="change">加载更多</van-button>
            </van-tab>
            <van-tab title="推荐单品" class="a">
                <GoodsList :goodslist="arrTwo" xuan="2"></GoodsList>
                <van-button type="default" size="large" @click="changeTwo">加载更多</van-button>
            </van-tab>
        </van-tabs>
        
    </div>
</template>

<script>
import Vue from 'vue'
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);




export default {
    data(){
        return {
            active:0,
            arrOne:[],
            pageOne:0,
            arrTwo:[],
            pageTwo:0
        }
    },
    methods:{
        shujuhuoquOne(){
            let numOne = this.pageOne
            this.$axios.get("/vue/goodslist",{
                params:{
                    page:numOne,
                    leibie:1
                }
            }).then(res=>{
                this.arrOne=this.arrOne.concat(res.data.result)
            })
        },
        shujuhuoquTwo(){
            let numTwo = this.pageTwo
            this.$axios.get("/vue/goodslist",{
                params:{
                    page:numTwo,
                    leibie:2
                }
            }).then(res=>{
                this.arrTwo=this.arrTwo.concat(res.data.result)
            })
        },
        change(){
            this.pageOne++
            this.shujuhuoquOne()
        },
        changeTwo(){
            this.pageTwo++
            this.shujuhuoquTwo()
        }
    },
    components:{

    },
    mounted(){
       this.shujuhuoquOne()
       this.shujuhuoquTwo()
    }

}
</script>

<style scoped lang="scss">
    .indexclass{
        position: relative;
        // 解决首页中 van-tabs 组件会盖住 底部footer的bug
        z-index: 0;
    }
</style>
