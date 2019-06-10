<template>
    <mt-loadmore 
    :top-method="loadTop" 
    :bottom-method="loadBottom" 
    :bottom-all-loaded="allLoaded" 
    ref="loadmore">
    <ul>
        <li v-for="(good,i) in goods" :key="i" class="item move">
            <Item :good="good"></Item>
        </li>
    </ul>
    </mt-loadmore>
</template>

<script>
import Item from "./item.vue"
import { Toast } from 'mint-ui';
import {mapMutations} from "vuex";
export default {
    name:"goods",
    data() {
        return {
            allLoaded:false ,  
        };
    },
    // created(){
    //     Indicator.open({
    //         text: '加载中...',
    //         spinnerType: 'triple-bounce'
    //     });
    //     this.$axios.get("/vue/goodsinfo",{
    //         params:{

    //         }
    //     }).then(res=>{
    //         console.log(res);
    //         this.$nextTick(()=>{
    //             this.banner = res.data.result;
    //             Indicator.close();
    //             Toast({
    //                 message: '操作成功',
    //                 iconClass: 'icon iconfont icon-success',
    //                 duration:1500
    //             });
    //         })

    //     })
    // },
    methods: {
        ...mapMutations(['getReverseGoods']),
        loadTop(){
            console.log("下拉刷新");
            setTimeout(()=>{
                var goods = this.goods.reverse();
                this.$emit("changegoods",goods);
                this.getReverseGoods();
                this.$refs.loadmore.onTopLoaded();
                Toast({
                    message:"正在努力加载中...",
                    duration:500
                })
            },1500)
        },
        loadBottom(){
            console.log("上拉加载更多");
            this.allLoaded = true;// 若数据已全部获取完毕
            setTimeout(()=>{
                var length = this.goods.length;   // 20     16
                var num = Math.floor(Math.random()*(length-4));
                console.log(num);
                // 这里的 随机求 值 没有问题 
                var arr = this.goods.slice(num,4);
                var goods = this.goods.concat(arr);   // 子组件 修改 props 
                this.$emit("changegoods",goods);
                this.allLoaded = false;
                this.$refs.loadmore.onBottomLoaded();
                Toast({
                    message:"正在刷新...",
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
        console.log(this.type)
        var arr  = this.all_goods.filter(item=>item.type.text==this.type.text);
        console.log(arr);
    }
}
</script>

<style lang="scss" scoped>
.item{
    width: 100%;
    font-size: 20px;
    margin:20px 0
}
.item img{
    width: 100%;
    // height: 340px;
}
</style>

