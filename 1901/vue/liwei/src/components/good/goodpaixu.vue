<template>
    <div class="goodpaixu">
        <van-popup v-model="show"  position="top" :overlay="false">
            <div>
            <van-button type="primary" 
            size="small" 
            class="paixu" 
            @click="oneFn" 
            v-if="oneTwoFlag">价格升序</van-button>

            <van-button type="primary" 
            size="small" 
            class="paixu jiang"  
            @click="twoFn"
            v-else>价格降序</van-button>


            <van-button type="primary" 
            size="small" 
            class="paixu"  
            @click="threeFn"
            v-if="threeFourFlag">上架升序</van-button>

            <van-button type="primary" 
            size="small" 
            class="paixu jiang"  
            @click="fourFn"
            v-else>上架降序</van-button>

            <van-button type="primary" 
            size="small" 
            class="paixu"  
            @click="fiveFn"
            v-if="fiveSix">销量升序</van-button>

            <van-button type="primary" 
            size="small" 
            class="paixu jiang"  
            @click="sixFn"
            v-else>销量升序</van-button>
            </div>
        </van-popup>
        <van-button type="large" plain hairline class="paixuer" @click="show=!show">
            <span v-if="!show">
                点击选择排序方式
            </span>
            <span v-else>
                您需要点击消失顶部弹窗才能继续操作哦
            </span>
        </van-button>
    </div>
</template>

<script>
import Vue from 'vue'
import {mapState} from 'vuex'
import { Popup } from 'vant';
Vue.use(Popup);

export default {
    data(){
        return {
            oneTwoFlag:true,
            threeFourFlag:true,
            fiveSix:true,
            show:false
        }
    },
    computed:{
        ...mapState([
            'GoodStore'
        ])
    },
    methods:{
        oneFn(){
            let str = this.GoodStore.searchZhi
            let obj = {
                searchstr:str,
                paixu:'goodprice',
                guize:'1'
            }
            this.$store.dispatch('searchGo',obj)
            this.oneTwoFlag=false
        },
        twoFn(){
            let str = this.GoodStore.searchZhi
            let obj = {
                searchstr:str,
                paixu:'goodprice',
                guize:'-1'
            }
            this.$store.dispatch('searchGo',obj)
            this.oneTwoFlag=true
        },
        threeFn(){
            let str = this.GoodStore.searchZhi
            let obj = {
                searchstr:str,
                paixu:'goodtitleartical',
                guize:'1'
            }
            this.$store.dispatch('searchGo',obj)
            this.threeFourFlag=false
        },
        fourFn(){
            let str = this.GoodStore.searchZhi
            let obj = {
                searchstr:str,
                paixu:'goodtitleartical',
                guize:'-1'
            }
            this.$store.dispatch('searchGo',obj)
            this.threeFourFlag=true
        },
        fiveFn(){
           let str = this.GoodStore.searchZhi
            let obj = {
                searchstr:str,
                paixu:'goodtitle',
                guize:'1'
            }
            this.$store.dispatch('searchGo',obj)
            this.fiveSix=false 
        },
        sixFn(){
            let str = this.GoodStore.searchZhi
            let obj = {
                searchstr:str,
                paixu:'goodtitle',
                guize:'-1'
            }
            this.$store.dispatch('searchGo',obj)
            this.fiveSix=true
        }
    }
}
</script>


<style scoped lang="scss">
.paixuer{
    height: .5rem;
    line-height: .5rem;
    text-align: center;
    font-size: .18rem;
    color:#ced0d0;
    
}
    .paixu{
        margin: .1rem;
        padding: 0 .1rem;
    }
    .jiang{
        background: #ff464e;
        border-color: #ff464e;
    }

</style>

