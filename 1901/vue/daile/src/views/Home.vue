<template>
  <div id="titl">
    <Head title="首页" :show="true" class="fixed"></Head>
        <van-swipe :autoplay="3000" indicator-color="orange">
            <van-swipe-item v-for="(img,i) in imgs" :key="i">
                <img :src="img" alt="" class="move2">
            </van-swipe-item>
        </van-swipe> 
    <h3 id="shopp">推荐商品<span @click="goShopp">所有商品></span></h3>
    

    <div id="bann">
        <img src="../assets/imgs/b1.png" alt="" class="move2">
        <img src="../assets/imgs/b2.png" alt="" class="move2">
        <img src="../assets/imgs/b3.png" alt="" class="move2">
        <img src="../assets/imgs/b4.png" alt="" class="move2">
    </div>
   
   <h2 id="shopp">热销商品<span>更多></span></h2>
      <div v-for="(t,i) in recommend" :key="i" class="recommendbox"
>
          <div class="recommend">
              <img :src="t.img" alt="" class="move3">
              <h3>{{t.name}}</h3>
              <p>售价: <span>{{t.price}}</span></p>
          </div>
      </div>
    </div>

 
</template>
 
<script>
import { Swipe, SwipeItem } from 'vant';
export default {
    data(){
        return {
             props:{
        good:Object
    },
            imgs:[
            require("@/assets/imgs/3.png"),
            require("@/assets/imgs/4.png"),
            require("@/assets/imgs/3.png"),
            require("@/assets/imgs/4.png")
            ],
            banner:[],
            recommend:[]
        }
    },
     created(){
        // this.$axios.get("/vue/getRecommend")
        //     .then(res=>{
        //         this.recommend = res.data.result;
        //         this.show = true;
        //     })
        this.$axios.get("/vue/getRecommend")
            .then(res=>{
                this.recommend = res.data.result;
        })

        // this.$axios.get("/vue/getGoodList")
        // .then(res=>{
        //     this.all_goods = res.data.result;
        //     console.log(this.all_goods);
        //     this.show = true;
        // })

    },
    watch:{
        value(newVal){
            console.log(newVal);
            this.$axios.get("/vue/getGoodList",{
                params:{
                    keyword:newVal
                }
            }).then(res=>{
                this.goods=res.data.result;
                 console.log(this.all_goods);
                 this.show = true;
            })

        }
    }, 
    methods:{
        gotoLogin(){
            this.$router.push({name:'login'})
        },
         goShopp(){
            this.$router.push({name:'allview'})
        }
    }
}
 
</script>


<style scoped>

.move2{
  margin-top:1rem;
  width:100%;
  height:4.2rem;
}
#titl{
    overflow: hidden;
}
#bann{
    width: 100%;
    height: 7.5rem;
}
#bann img{
    width: 47%;
    height: 3.5rem;
    margin-left: 1.4%;
    float: left;
    border:2px solid rgba(255, 255, 255);
    margin-top: 0.2rem;
}

#shopp{
    background-color: #fff;
    width: 98%;
    height: 0.8rem;
    line-height: 0.8rem;
    margin-top: .15rem;
    padding-left: 0.2rem;
    font-size: .24rem;
    color:#222;
}
#shopp span{
    float: right;
    color:#666;
    padding-right: .3rem;
}
#foox{
   position: absolute;;
   top: 7.5rem;
   left: 0;
}

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
    /* padding-left:0.15rem;
    padding-right:0.2rem; */
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
.fixed{
    position:fixed;
    left: 0;
    top: 0;
    width:100%;
    z-index:9999;
}
</style>
