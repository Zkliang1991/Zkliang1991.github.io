<template>
    <mt-loadmore 
    :top-method="loadTop" 
    :bottom-method="loadBottom" 
    :bottom-all-loaded="allLoaded" 
    ref="loadmore">
    <ul>
        <li v-for="(good,i) in goods" :key="i" class="item move"  >
            <Item :good="good"></Item>
        </li>
    </ul>
    </mt-loadmore>
</template>

<script>
import Item from "./item.vue";
import {Toast} from "mint-ui";
import {mapMutations} from "vuex";
export default {
    name:"list",
    data(){
        return {
            allLoaded:false ,  
        }
    },
    computed:{
        newGoods:{
            get(){
                 return this.goods;
            },
            set(val){
                console.log(val)
            }
        }
    },
    methods:{
        ...mapMutations(['getReverseGoods']),
        loadTop(){
            console.log("下拉刷新");
            setTimeout(()=>{
                var goods = this.goods.reverse();
                this.$emit("changegoods",goods);
                this.getReverseGoods();
                this.$refs.loadmore.onTopLoaded();
                Toast({
                    message:"下拉刷新-成功",
                    duration:500
                })
            },1500)
        },
    },
    props:{
        goods:{
            type:Array,
            required:true
        },
        type:Object,
        all_goods:Array
    },
    components:{
        Item
    },
    mounted(){
        
    }
}
</script>

<style scoped>
ul{
    margin-top:10px;
}
.item {
    width:100%;
    color:darkgoldenrod;
    font-size:24px;
    border-bottom:dotted 2px darkorange;
}
.item img {
    width:100%;
    height:300px;
}
</style>

