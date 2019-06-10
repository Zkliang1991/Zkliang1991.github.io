
<template>
    <div>
        <mt-loadmore 
        :top-method="loadTop" 
        :bottom-method="loadBottom" 
        :bottom-all-loaded="allLoaded" 
        ref="loadmore">
        <ul>
            <li v-for="(good,i) in newGoods" :key="i" class="item move">
                <Item :good="good"></Item>
            </li>
        </ul>
        </mt-loadmore>
    </div>
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
            // console.log("上拉加载更多");
            // this.allLoaded = true;// 若数据已全部获取完毕
            // setTimeout(()=>{
            //     var length = this.goods.length;   // 20     16
            //     var num = Math.floor(Math.random()* (length-4));
            //     console.log(num);
            //     // 这里的 随机求 值 没有问题 
                
            //     var arr = this.goods.slice(num,4);
            //     this.goods = this.goods.concat(arr);
            //     // this.newGoods = this.goods;
            //     this.allLoaded = false;
            //     this.$refs.loadmore.onBottomLoaded();
            //     Toast({
            //         message:"上拉加载更多-成功",
            //         duration:500
            //     })
            // },1500)
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
    mounted(){
        console.log(this.type)
        var arr=this.all_goods.filter(item=>item.type.value==this.type.value);
        console.log(arr);
    }
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