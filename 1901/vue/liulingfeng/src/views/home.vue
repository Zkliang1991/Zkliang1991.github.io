<template>
  <div class="home" >
      <Head title="首页" class="head" :show="false"></Head> 
      <Swipe class="swipe"></Swipe>
      <ul class="list">
        <li>
          <img src="http://image7.wbiao.co/mall/23fb7d5f30d74f9599eab029cdd40711.png?x-oss-process=image/resize,m_pad,w_88,h_88" alt="">
          <p>男表</p>
        </li>
        <li>
          <img src="http://image7.wbiao.co/mall/3db18531812b46f0b968b180348c63a5.png?x-oss-process=image/resize,m_pad,w_88,h_88" alt="">
          <p>女表</p>
        </li>
        <li>
          <img src="http://image7.wbiao.co/mall/57f2817d14964581b7bcf542168bf519.png?x-oss-process=image/resize,m_pad,w_88,h_88" alt="">
          <p>名将维修</p>
        </li>
        <li>
          <img src="http://image7.wbiao.co/mall/5590c7b65d754351af1ed7ee63696fa9.png?x-oss-process=image/resize,m_pad,w_88,h_88" alt="">
          <p>二手拍卖</p>
        </li>
      </ul>
      <div class="guanggao">
        <img src="http://image7.wbiao.co/mall/42da1dd2e4c449aab5e048afcb89f8f5.jpg" alt="">
      </div>
      <div class="guanggao">
          <div class="title">
              <p>品牌</p>
          </div>
           <van-swipe :autoplay="4000" class="swiper1">
              <van-swipe-item v-for="(image, i) in images" :key="i">
                  <img :src="image" alt="" class="img" >
              </van-swipe-item>
          </van-swipe>
      </div>
      <ul class="pingpai">
          <li>
            <img src="http://image7.wbiao.co/mall/1efcc26a9e554a3eb8610e8297f72aa3.jpg" alt="">
          </li>
           <li>
            <img src="http://image7.wbiao.co/mall/18f3c34b86ca456d85937313f122aa89.jpg" alt="">
          </li>
           <li>
            <img src="http://image7.wbiao.co/mall/60c7a298bc2645d9abdb8ce0ab16846f.jpg" alt="">
          </li>

           <li>
            <img src="http://image7.wbiao.co/mall/9eaed93cc0ae4cc1988aaa6cc1842edb.jpg" alt="">
          </li>
           <li>
            <img src="http://image7.wbiao.co/mall/ca8ad57a62bf47d5a9fdfe1d215a07b2.jpg" alt="">
          </li>
           <li>
            <img src="http://image7.wbiao.co/mall/d5bfdb90713f46e7a27e5d340be561ad.jpg" alt="">
          </li>

          <li>
            <img src="http://image7.wbiao.co/mall/9206b68a12f94591a83d5914a4bfe5a1.jpg" alt="">
          </li>
           <li>
            <img src="http://image7.wbiao.co/mall/7a2e44b170c04eb5b71d4461f5e4699c.jpg" alt="">
          </li>
           <li>
            <img src="http://image7.wbiao.co/mall/ce1bac55cbed454c921bbb6f9267d9f2.jpg" alt="">
          </li>
      </ul>
      <div class="pingpai">
          <dir class="titleBao title">
              <p>
                  本月爆款
              </p>
          </dir>
          <ul class="baokuanImg">
            <li>
              <img src="http://image7.wbiao.co/mall/b6833aa5ca324935bfb6a86ac319446e.jpg" alt="">
            </li>
            <li>
              <img src="http://image7.wbiao.co/mall/bff5cacc38534409ad89984912516c0d.jpg" alt="">
            </li>
            <li>
              <img src="http://image7.wbiao.co/mall/c2b6e87cf8394329a77788615ab2e124.jpg" alt="">
            </li>
          </ul>
      </div>
        <div class="pingpainan">
          <dir class="titleBao title">
              <p>
                  男士
              </p>
          </dir>
           <van-swipe :autoplay="4000" class="swiper1">
              <van-swipe-item v-for="(image, i) in imagesone" :key="i" class="nanimg">
                  <img :src="image" alt="" class="nanimg" >
              </van-swipe-item>
          </van-swipe>
          <div class="nandiv">
            <ul class="nanul">
              <li>
                <img src="http://image7.wbiao.co/mall/6a17a85320b845f9a7d6133d1847673f.jpg" alt="" class="nanulimg">
              </li>
              <li>
                <img src="http://image7.wbiao.co/mall/65161974250a40d3a7584ad3b85f833c.jpg" alt="" class="nanulimg">
              </li>
              <li>
                <img src="http://image7.wbiao.co/mall/a660126019954b6abae77e9223f96402.jpg" alt="" class="nanulimg">
              </li>
               <li>
                <img src="http://image7.wbiao.co/mall/f5da95a4a6c945818c18c5f0d87125ee.jpg" alt="" class="nanulimg">
              </li>
              <li>
                <img src="http://image7.wbiao.co/mall/ccc409f4a1ff4ea9b6903bc19696aca2.jpg" alt="" class="nanulimg">
              </li>
              <li>
                <img src="http://image7.wbiao.co/mall/fb537b1350f9481e92d93011da9116de.png" alt="" class="nanulimg">
              </li>
            </ul>
          </div>
        </div>
        <div class="pingpainan">
          <dir class="titleBao title">
              <p>
                  女士
              </p>
          </dir>
           <van-swipe :autoplay="3000" class="swiper1">
              <van-swipe-item v-for="(image, i) in imagestwo" :key="i" class="nanimg">
                  <img :src="image" alt="" class="nanimg" >
              </van-swipe-item>
          </van-swipe>
          <div class="nandiv">
            <ul class="nanul">
              <li>
                <img src="http://image7.wbiao.co/mall/0d6084e4b6514825bbefa71a0639bbc9.jpg" alt="" class="nanulimg">
              </li>
              <li>
                <img src="http://image7.wbiao.co/mall/2bf679addb8d4e16aeedc8cc8db30542.jpg" alt="" class="nanulimg">
              </li>
              <li>
                <img src="http://image7.wbiao.co/mall/34e7f46ce4844d9bb4f0595190030180.jpg" alt="" class="nanulimg">
              </li>
               <li>
                <img src="http://image7.wbiao.co/mall/18c8a9c66c104e87b667acac7c8e487f.png" alt="" class="nanulimg">
              </li>
              <li>
                <img src="http://image7.wbiao.co/mall/4d940b6933ab4d6294d934041feb8a06.jpg" alt="" class="nanulimg">
              </li>
            </ul>
          </div>
        </div>
        <div class="end">

        </div>
     

  </div>
</template>


<script>
import Swipe from "../components/swipe.vue"
export default {
  components:{
    Swipe
   
  },
  data(){
    return{
      images: [
              "http://image7.wbiao.co/mall/6f337202a9404d47a2488c1750e68d00.jpg",
              "http://image7.wbiao.co/mall/abaa3f087eb04dc4afafd09928ebf170.jpg",
              " http://image7.wbiao.co/mall/1fb17fa91e7e4423b47879a8a900e128.jpg",
        ],
      imagesone:[
        " http://image7.wbiao.co/mall/bebb8f4c027043d2bb83e81ab34068ff.jpg",
        " http://image7.wbiao.co/mall/1fb17fa91e7e4423b47879a8a900e128.jpg",
        " http://image7.wbiao.co/mall/1fb17fa91e7e4423b47879a8a900e128.jpg",
      ],
      imagestwo:[
        " http://image7.wbiao.co/mall/733172e0ab8a42e8b8b4ef9ae53326bf.jpg",
        " http://image7.wbiao.co/mall/1fb17fa91e7e4423b47879a8a900e128.jpg",
        " http://image7.wbiao.co/mall/1fb17fa91e7e4423b47879a8a900e128.jpg",
      ]
    }
  }
}
</script>

<style scoped>
    .head{
      position: fixed;
      top: 0; 
      left: 0;
      width: 100%;
      z-index: 2;
    }
    .swipe{
      margin-top: 50px;
    }
    .swiper1{
        margin-top: -15px;
    }
    .list{
      display: flex;
      -webkit-flex-direction: row;
      flex-direction: row;
      -webkit-justify-content: space-around;
      justify-content: space-around;
      flex-wrap: wrap;
    }
    .list li{
     width: 25%;
     text-align: center;
    }
    .list li img{
     width: 4rem;
     height: 4rem;
    }
    .list li p{
      font-size: 1rem;
      height: 1rem;
      margin-top: -0.1rem;
      }
      .guanggao img{
        width: 100%;
        height: 100%;
      }
      .title {
        text-align: center;
        font-size: 1.2rem;
        font-weight: 700;
      
      }
      .title p{
        height: 2rem;
        border-bottom: 2px solid #666;
      }
      .titleBao{
        width: 100%;
        margin-left: -40PX;
        height: 3rem;
      }
      .pingpai{
        display: flex;
        -webkit-flex-direction: row;
        flex-direction: row;
        -webkit-justify-content: space-around;
        justify-content: space-around;
        flex-wrap: wrap;
      }
      .pingpai li{
        width: 33.33%;
        text-align: center;
      }
       .pingpai li img{
         width: 100%;
       }
       .baokuanImg li{
         width: 100%;

       }
        .baokuanImg li img{
          width: 100%;
          height: 100%;
       }
       .nanimg{
         width: 100%;
       }
       .nandiv{
         width: 100%;
         overflow: hidden;
        overflow-x: scroll;  
       }
       .nanul{
          width: 300%;
       } 
       .nanul li{
         float: left;
        
       }  
       .nanulimg{
         width: 10rem;
       }
       .end{
         width: 100%;
         height: 3rem;
       }
  
  
</style>








