<template>
    <div class="goodslistnew">
        <goodPaiXu class="top"></goodPaiXu>
        <GoodsList :goodslist="arrOne"  :xuan="xuan" ></GoodsList>
        <van-button type="default" size="large" @click="change"  v-if="flag">加载更多</van-button>
        <van-button type="default" size="large"  v-else>没有更多啦</van-button>
    </div>
</template>

<script>

import {mapState} from 'vuex'
import goodPaiXu from '@/components/good/goodpaixu.vue'

export default {
    data(){
        return {
            pageOne:0,
            arrOne:[],
            jiliang:0 ,//计量
            flag:false , //标量
            flagtwo:false 
        }
    },
    props:{
        goodslistnew:Array,
        searchstr:String,
        xuan:Number
    },
    computed:{
        ...mapState([
            'GoodStore'
        ]),
        jiazaicishu(){
            //这个是通过搜索出的数量 计算应不应该有加载更多按钮,当此次输出的值等于18时出现
            //这个18严格对应后台输出的数据
                return Math.floor(this.GoodStore.searchLength/18)
        },
        
    },
    methods:{
            change(){
                this.flagtwo=true
                let pagenumshi = this.pageOne++
                let searchstr = this.searchstr
                let obj = {
                    searchstr,
                    pagenumshi,
                    changFlag:true
                }
                this.$store.dispatch('searchGo',obj)
                this.arrOne=this.arrOne.concat(this.goodslistnew)
            },
            changeTwo(){
                this.arrOne=this.arrOne.concat(this.goodslistnew)
            }
    },
    components:{
        goodPaiXu
    },
    mounted(){

        this.flag=this.jiazaicishu==1?true:false

        this.changeTwo()
    },
    watch:{
        //监听状态树上面的新的值,动态更新列表
        goodslistnew(newArr){
            if(!this.flagtwo){
                this.arrOne=newArr
            }else{
                this.arrOne=this.arrOne.concat(newArr)
                this.flagtwo=false
            }
            this.flag=this.jiazaicishu==1?true:false
        }
    }
}
</script>


<style scoped lang="scss">

    .top{
        
        background: rgba(255,255,255,.7);

    }

</style>


