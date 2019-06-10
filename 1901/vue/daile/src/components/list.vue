
<template>
  
        <div 
        :top-method="loadTop" 
        :bottom-method="loadBottom" 
        :bottom-all-loaded="allLoaded" 
        ref="loadmore">
        <ul>
            <li v-for="(good,i) in newGoods" :key="i" class="item move">
                <Item :good="good"></Item>
            </li>
        </ul>
    </div>
  
</template>

<script>
import Item from "./item.vue";
import { Image } from 'vant';

export default {
    name:"list",
    data(){
        return {
            allLoaded:false ,
        }
    },
    computed:{
        // newGoods(){
        //     return this.goods;
        // }
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
          
        }
    },
    props:{
        goods:{
            type:Array,
            require:true
        },
        type:Object,
        all_goods:Array
    },
    components:{
        Item
    },
    // mounted(){
    //     console.log(this.type)
    //     var arr=this.all_goods.filter(item=>item.type.value==this.type.value);
    //     console.log(arr);
    // }
}
</script>

<style scoped>
    .item{
        width:100%
    }
    .item img{
        width:100%;
        height:2.7rem;
    }
</style>