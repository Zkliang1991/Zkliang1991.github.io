<template>
    <div>
        <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul>
            <li v-for="(good,i) in goods" :key="i"  >
                <router-link :to="{name:'goodDetail',params:{goodId:good._id}}">
                    <img :src="good.img" alt="">
                    <p>
                        {{good.name}} 
                    </p>
                    <strong>{{good.price}}</strong> 
                </router-link>
            </li>
        </ul>
        </mt-loadmore>  
    </div>
</template>

<script>
import {Toast} from "mint-ui";
export default {
    props:["type",'goodList'],
    data(){
        return {
            goods:[],
            allLoaded:false,
            loading:false,
        }
    },
    methods:{
        loadTop(){
            console.log("下拉刷新 --top")
            setTimeout(()=>{
                this.goods.reverse();// 若数据已全部获取完毕
                this.$refs.loadmore.onTopLoaded();
                Toast({
                    message:'刷新成功',
                    duration:500
                });
            },1000)
        },
        loadBottom(){
            
        },
        loadMore(){
            
        }
    },
    computed:{
        
    },
    mounted(){
        this.goods = this.goodList.filter((good)=>good.type.value==this.type.value);
        // console.log(this.goods);
    }
}
</script>

<style scoped>
ul{
   
    padding-bottom: .9rem;
}
ul , img {
    width:100%;
}

li{
    width: 50%;
    float: left;
    padding:10px;
    box-sizing: border-box;
    margin-top: 18px;
    margin-bottom: -18px;
}
img{
    height:4rem;
}
ul li p{
    font-size: 12px;
    color: black;
    text-align: center;
}
ul li strong{
    display: block;
    font-size: 16px;
    color: #FF6600;
    text-align: center;
}
.moveIn{
    animation:rotateIn 1s ; 
}
</style>


