<template>
    <div class="classnav">
        <van-tabs v-model="active" >
            <van-tab :title="value" v-for="(value,index) in arr" :key="index"></van-tab>
        </van-tabs>
        <GoodsListNew :goodslistnew="GoodStore.search.data.result" v-if="GoodStore.searchZhuang"></GoodsListNew>
    </div>
</template>

<script>
import Vue from 'vue'
import { Tab, Tabs } from 'vant';
import {mapState,mapActions, mapMutations} from 'vuex'
import GoodsListNew from './../good/goodslistnew.vue'
import {CHANGE_CLASS_TITLE} from '@/mutationType/index'


Vue.use(Tab).use(Tabs);

export default {
    data(){
        return {
            active:0,
            arr:['女装','鞋子','包包','母婴','美妆','居家','家纺','文体'], //应该从后台动态获取,我没有做数据,所以手写
        }
    },
    computed:{
        ...mapState([
            'GoodStore',
            'idnexhccm'
        ])
    },
    methods:{
        ...mapActions([
            'searchGo'
        ]),
        ...mapMutations([
            CHANGE_CLASS_TITLE
        ])
    },
    components:{
        GoodsListNew
    },
    watch:{
        active(newstr){
            this.searchGo({
                searchstr:this.arr[newstr],
                routerAcitive:this.idnexhccm.selected
            })
            this[CHANGE_CLASS_TITLE]({
                title:this.arr[newstr],
                num:newstr
            })
        }
    },
    mounted(){
        this.searchGo({
            searchstr:this.arr[0],
            routerAcitive:this.idnexhccm.selected
        })
    }

}
</script>

<style scoped lang="scss">
    .classnav{
        padding-bottom: 1.2rem;
    }

</style>


