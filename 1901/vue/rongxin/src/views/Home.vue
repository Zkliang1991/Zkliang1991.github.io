<template>
  <div>
    <!-- <Head title="首页"></Head> -->
    <div class="fixed">FASHION TECH</div>

    <!-- 轮播图 -->
    <van-swipe @change="onChange" class="banner" :autoplay="3000">
      <van-swipe-item v-for="(img,i) in imgs" :key="i">
        <img v-lazy="img" alt="" class="img">
      </van-swipe-item>
      <div class="custom-indicator" slot="indicator">
        {{ current + 1 }} / 4
      </div>
    </van-swipe>

    <!-- 轮播图2 -->
    <van-swipe :width="350" :height="80" :show-indicators=false class="banner1">
      <van-swipe-item class="ban1">
        <img src="../assets/imgs/ban1.png" alt="">
      </van-swipe-item>
      <van-swipe-item class="ban1">
        <img src="../assets/imgs/ban2.png" alt="">
      </van-swipe-item>
      <van-swipe-item class="ban1">
        <img src="../assets/imgs/ban3.png" alt="">
      </van-swipe-item>
    </van-swipe>

    <!-- newgoods -->
    <div class="title">
      <h2>{{newgoods.title}}</h2>
      <p>{{newgoods.entitle}}</p>
    </div>
    <van-tabs title-active-color="#d6b274" color="#d6b274" class="imgbox">
      <van-tab title="【热卖】早春焕新" style="height:120">
        <img src="../assets/imgs/bann1.png" alt="" class="largeimg">
        <div v-for="(good,i) in newgoods.goods1" :key="i">
          <div class="smallimg">
            <img :src="good.img" alt="">
            <h2>{{good.stitle}}</h2>
            <p><span id="disprice">{{good.discountprice}}</span>&nbsp;<span id="price">{{good.price}}</span></p>
          </div>
        </div> 
      </van-tab>
      <van-tab title="【推荐】羊绒大衣">
        <img src="../assets/imgs/bann2.png" alt="" class="largeimg">
        <div v-for="(good,i) in newgoods.goods2" :key="i">
          <div class="smallimg">
            <img :src="good.img" alt="">
            <h2>{{good.stitle}}</h2>
            <p><span id="disprice">{{good.discountprice}}</span>&nbsp;<span id="price">{{good.price}}</span></p>
          </div>
        </div> 
      </van-tab>
    </van-tabs>

    <!-- 优惠券 -->
    <div class="discountcard">
      <img src="../assets/imgs/gift1.png" alt="" id="card1">
      <img src="../assets/imgs/gift2.png" alt="" id="card2">
      <img src="../assets/imgs/gift3.png" alt="" id="card3">
    </div>

    <div class="title1">
      <h2>精选专栏</h2>
      <p>Popular Themes</p>
      <img src="../assets/imgs/theme1.png" alt="" class="theme">
      <img src="../assets/imgs/theme2.png" alt="" class="theme">
      <img src="../assets/imgs/theme3.png" alt="" class="theme">
      <img src="../assets/imgs/theme4.png" alt="" class="theme">
    </div>

    <div class="title2">
      <h2>精品推荐</h2>
      <p>Recommendations</p>
      <div v-for="(t,i) in all_Recommendations" :key="i" class="Recommendbox">
        <div class="Recommend">
        <img :src="t.img" alt="">
        <h2>{{t.title}}</h2>
        <p><span id="price1">￥{{t.price}}</span>&nbsp;&nbsp;<span id="oldprice1">{{t.oldprice}}</span></P>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default{
    data(){
      return {
        current:0,
        all_Recommendations:[],
        show:false,
        imgs:[
          require("@/assets/imgs/banner1.png"),
          require("@/assets/imgs/banner2.png"),
          require("@/assets/imgs/banner3.png"),
          require("@/assets/imgs/banner4.png")
        ],
        newgoods:{
          title:"新品上架",
          entitle:"NewArrivals",
          goods1:[
            {
              stitle:"红色蕾丝连衣裙",
              discountprice:"￥3,199",
              price:"￥3,988",
              img:require("@/assets/imgs/bann11.png")
            },
            {
              stitle:"红色蕾丝连衣裙",
              discountprice:"￥3,199",
              price:"￥3,988",
              img:require("@/assets/imgs/bann12.png")
            },
            {
              stitle:"红色蕾丝连衣裙",
              discountprice:"￥3,199",
              price:"￥3,988",
              img:require("@/assets/imgs/bann13.png")
            }
          ],
          goods2:[
            {
              stitle:"红色蕾丝连衣裙",
              discountprice:"￥3,199",
              price:"￥3,988",
              img:require("@/assets/imgs/bann23.png")
            },
            {
              stitle:"红色蕾丝连衣裙",
              discountprice:"￥3,199",
              price:"￥3,988",
              img:require("@/assets/imgs/bann22.png")
            },
            {
              stitle:"红色蕾丝连衣裙",
              discountprice:"￥3,199",
              price:"￥3,988",
              img:require("@/assets/imgs/bann21.png")
            }
          ]
        }
      }
    },
    methods:{
      onChange(index){
        this.current=index;
      }
    },
    created(){
        this.$axios.get("/vue/getRecommendations")
        .then(res=>{
            this.all_Recommendations = res.data.result;
            console.log(this.all_Recommendations);
        })
    }
  }
</script>

<style lang="scss" scoped>
  .fixed{
    background-color: rgba(0,0,0,.5);
    z-index:2;
    height:0.9rem;
    width: 100%;
    text-align: center;
    line-height:0.9rem;
    color:#d6b274;
    font-size:0.36rem;
    position:fixed;
    left: 0;
    top: 0;
  }
  .banner{
    width: 100%;
    height:5rem;
    position:relative;
  }
  .banner img{
    width: 100%;
    height:5rem;
  }
  .custom-indicator{
    color:#fff;
    position:absolute;
    right:0.3rem;
    bottom:0.3rem;
  }

  .banner1{
    margin-left:0.2rem;
    margin-bottom:0.2rem;
  }
  .banner1 img{
    width:6.8rem;
    height:1.4rem;
    margin:0.2rem 0;
  }

  .title{
    background-color: #fff;
    padding:0.2rem;
  }
  .title h2{
    font-weight: bold;
    color:#000;
    font-size:0.32rem;
  }
  .title p{
    color:#666;
    font-size:0.24rem;
  }

  .largeimg{
    width:100%;
    height:4rem;
  }
  .imgbox{
    width:100%;
    height:8.2rem;
    background:#fff;
  }
  .smallimg{
    width:29.33%;
    height:4rem;
    padding:3% 0 3% 3%;
    float:left;
  }
  .smallimg img{
    width: 100%;
    height:3rem;
    color:#333;
  }
  .smallimg h2{
    font-size:0.28rem;
  }
  .smallimg #disprice{
    font-size:0.24rem;
  }
  .smallimg #price{
    font-size:0.24rem;
    text-decoration: line-through;
    color:#999;
  }
  
  .discountcard{
    width: 100%;
    height: 3.7rem;
    background-color: #fff;
    margin-top:0.24rem;
  }
  #card1,#card2{
    width: 47%;
    height:1.6rem;
    float:left;
    margin-left:2%;
    margin-top:2%;
    margin-bottom:2%;
  }
  #card3{
    width: 96%;
    margin-left:2%;
    height:1.6rem;
    float:left;
  }

  .title1{
    margin-top:0.2rem;
    width:100%;
    height:8.5rem;
    background-color: #fff;
  }
  .title1 h2{
    padding-left:0.2rem;
    padding-top:0.2rem;
    font-weight:bold;
    color:#000;
  }
  .title1 p{
    padding-left:0.2rem;
    color:#666;
  }
  .theme{
    width: 47%;
    height:3.5rem;
    float:left;
    margin-left:2%;
    margin-top:2%;
  }

  .title2{
    margin-top:0.2rem;
    width:100%;
    height:36rem;
    background-color: #fff;
  }
  .title2 h2{
    padding-left:0.2rem;
    padding-top:0.2rem;
    font-weight:bold;
    color:#000;
  }
  .title2 p{
    padding-left:0.2rem;
    color:#666;
  }
  .Recommendbox{
    width:100%;
    background-color: #fff;
  }
  .Recommend{
    width:50%;
    float:left;
  }
  .Recommend img{
    width:100%;
    height:4rem;
    margin-top:0.2rem;
  }
  .Recommend h2{
    // height:1.6rem;
    display: -webkit-box;    
    -webkit-box-orient: vertical;    
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-weight:normal;
    font-size:0.28rem;
  }
  .Recommend #price1{
    color:red;
  }
  .Recommend #oldprice1{
    color:#999;
    text-decoration: line-through;
  }
</style>
