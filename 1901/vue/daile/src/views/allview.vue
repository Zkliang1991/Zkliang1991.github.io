<template>
    <div>
        <Head title="推荐商品" :show="true"></Head>
      <div v-for="(u,i) in userinfo" :key="i" class="recommendbox">
          <div class="recommend">
              <img :src="u.img" alt="">
              <h3>{{u.name}}</h3>
              <p>售价: <span>{{u.price}}</span></p>
          </div>
      </div>
    </div>
</template>

<script>
// import Item from "./item.vue";
// import Allview from "allview";
import {Toast} from "mint-ui";
export default {
    name:"allview",
    data(){
        return {
            allLoaded:false ,
            userinfo:[]
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
    created(){
        this.$axios.get("/vue/getSopping")
            .then(res=>{
                this.userinfo = res.data.result;
                this.show = true;
            })
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
      
    },
    mounted(){
        console.log(this.type)
        var arr=this.all_goods.filter(item=>item.type.value==this.type.value);
        console.log(arr);
    }
}
</script>

<style lang="scss" scoped>
    .recommend{
    width: 100px;
    height:5.5rem;
    
}
.recommend{
    width: 47.4%;
    height: 5.3rem;
    margin-left: 1.4%;
    float: left;
    border:1px solid rgb(110, 177, 194);
    margin-top: 0.2rem;
}
.recommend img {
    width:100%;
    height:3.8rem;
}
.recommend h3{
     width: 100%;
    margin-top: 0.1rem;
    font-size: .16rem;
    color:#666;
    display: -webkit-box;    
    -webkit-box-orient: vertical;    
    -webkit-line-clamp: 2;    
    overflow: hidden;
    padding-left:0.15rem;
    padding-right:1rem;
}
.recommend p{
    font-size: .24rem;
    color:#555;
    line-height: 30px;
     padding:0  0.2rem;
   
}
.recommend p span{
     font-size: .26rem;
    color:red;
}
</style>