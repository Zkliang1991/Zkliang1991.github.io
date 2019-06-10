<template>
    <div id="car">
        <van-nav-bar
        title="购物车"
        left-text="返回首页"
        left-arrow
        :right-text="anniuText"
        @click-right="onClickRight"
        @click-left="onClickLeft"
        />

 
        <component :is="componentName"></component>

    </div>
</template>

<script>

import carIndex from '@/components/car/carindex.vue'
import dingDanIndex from '@/components/dingdan/dingdanindex.vue'
import Vue from 'vue'
import { NavBar } from 'vant';
Vue.use(NavBar);


export default {
    data(){
        return {
            componentName:'dingDanIndex',
            flag:false,
            anniuText:'编辑'
        }
    },
    components:{
        carIndex,
        dingDanIndex
    },
    methods: {
        onClickRight() {
            if(this.flag){
                //这里是订单的逻辑 
                this.componentName='dingDanIndex'
                this.flag=false
                this.anniuText='编辑'
            }else{
                //这里是购物车的逻辑,点击这里肯定会有异步操作,这两个判断里的数据都有vuex取
                this.componentName='carIndex'
                this.flag=true
                this.anniuText='完成'
            }
        },
        onClickLeft(){
            this.$router.push({name:'home'})
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
