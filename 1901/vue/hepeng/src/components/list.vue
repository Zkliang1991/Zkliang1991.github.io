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
                // this.goods = val;
            }
        }
    },
    methods:{
        loadTop(){
            console.log("下拉刷新");
            setTimeout(()=>{
                var goods = this.goods.reverse();
                this.$emit("changegoods",goods);
                this.$refs.loadmore.onTopLoaded();
                Toast({
                    message:"下拉刷新-成功",
                    duration:500
                })
            },1500)
        },
        loadBottom(){
            console.log("上拉加载更多");
            this.allLoaded = true;// 若数据已全部获取完毕
            setTimeout(()=>{
                var length = this.goods.length;   // 20     16
                var num = Math.floor(Math.random()* (length-4));
                // console.log(num);
                // 这里的 随机求 值 没有问题 
                var arr = this.goods.slice(num,4);
                var goods = this.goods.concat(arr);   // 子组件 修改 props 
                this.$emit("changegoods",goods);
                this.allLoaded = false;
                this.$refs.loadmore.onBottomLoaded();
                Toast({
                    message:"上拉加载更多-成功",
                    duration:500
                })
            },1500)
        }
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
        // console.log(this.type)
        // var arr  = this.all_goods.filter(item=>item.type.value==this.type.value);
        // console.log(arr);
    }
}
</script>

<style scoped>
ul{
    margin-top:10px;
}
.item {
    width:100%;
    /* color:darkgoldenrod; */
    font-size:24px;
    /* border-bottom:dotted 2px darkorange; */
}
.item img {
    width:48%;
    margin: 0.15rem;
    height:1.5rem;
}
</style>

