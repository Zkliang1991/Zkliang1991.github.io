<template>
    <div class="search">
        <SearchHeader></SearchHeader>
        <div v-if="!GoodStore.searchZhuang">
            <div v-if="GoodStore.searchedFlag">
                <h3>搜素失败,您可以换个关键词重新搜索</h3>
            </div>
            <div v-else>
                <div v-if="arrHistory.length==0">
                    <h3>暂无历史搜索记录</h3>
                </div>
                <div v-else>
                    <h3>历史搜索记录</h3>
                </div>
            </div>
            <div class="tagdiv" >
                <van-tag color="#f2826a" 
                size="large" 
                class="biaoqian" 
                v-for="(value,index) in arrHistory" :key="index" @click="toSearch(value)">{{value}}</van-tag>
                <van-button type="primary" 
                size="mini" class="shanchu" 
                @click="shanchuFn"
                v-if="arrHistory.length>0">删除历史搜索记录</van-button>
            </div>
        </div>
        <!-- 此处需要上面搜索处的值 -->
        <GoodsListNew :goodslistnew="GoodStore.search.data.result" :searchstr="GoodStore.searchZhi" :xuan="xuanNum" v-else></GoodsListNew>
        <!-- <GoodsList :goodslist="GoodStore.search.data.result" v-else></GoodsList> -->
    </div>
</template>

<script>
import SearchHeader from '@/components/header/searchHeader.vue'
import {mapState} from 'vuex'
import GoodsListNew from '@/components/good/goodslistnew.vue'

export default {
    data(){
        return {
            xuanNum:3,
            arrHistory:[]
        }
    },
    components:{
        SearchHeader,
        GoodsListNew
    },
    computed:{
        ...mapState([
            'GoodStore'
        ])
    },
    methods:{
        shanchuFn(){
            localStorage.removeItem('arrHistory')
            this.arrHistory=[]
        },
        toSearch(str){
            this.$store.dispatch('searchGo',{searchstr:str,})
        }
    },
    mounted(){
        if(localStorage.arrHistory){
            this.arrHistory=JSON.parse(localStorage.arrHistory)
        }
    }
    
}

</script>

<style scoped lang="scss">
    .margin{
        margin: .1rem ;
    }

    .biaoqian{
        margin: .20rem;
        font-size: 16px;
    }

    .tagdiv{
        padding: 0 .1rem;
        position: relative;
        .shanchu{
            position: absolute;
            right: .2rem;
            bottom: -.5rem;
            background-color: rgb(252, 245, 245);
            border-color: transparent;
            color:#666
        }
    }

    h3{
        text-align: center;
    }


</style>


