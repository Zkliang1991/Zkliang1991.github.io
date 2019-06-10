<template>
    <mt-loadmore  
    :top-method="loadTop" 
    :bottom-all-loaded="allLoaded" 
    ref="loadmore">
    <ul style="marginBottom:1rem;overflow:hidden">
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
    methods:{
        loadTop(){
         
            setTimeout(()=>{
                var goods = this.goods.reverse();
                this.$emit("changegoods",goods)
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
    }
}
</script>

<style scoped>
.item {
    width:48%;
    color:black;
    font-size:12px;
    float: left;
    margin: 1%;
    height: 260px;
     
}
.item img {
    width:100%;
    height:200px;
}
</style>
