<template>
  <div class="page">
    <Myheader></Myheader>
    <Swipe :imgs="imgs"></Swipe>
    <div class="fl">
      <a href="#javascript:;">
        <img src="../assets/images/f1.png" alt="男表">
        <p>男表</p>
      </a>
      <a href="#javascript:;">
        <img src="../assets/images/f2.png" alt="男表">
        <p>女表</p>
      </a>
      <a href="#javascript:;">
        <img src="../assets/images/f3.png" alt="男表">
        <p>名匠维修</p>
      </a>
      <a href="#javascript:;">
        <img src="../assets/images/f4.png" alt="男表">
        <p>二手拍卖</p>
      </a>
    </div>
    <div class="adv">
      <img src="../assets/images/adv.jpg" alt>
    </div>
    <div class="biao">
      <p class="text">品牌</p>
      <p class="xian"></p>
    </div>
    <Swipe :imgs="imgs2"></Swipe>
    
      <div class="clasify">
        <a href="#javascript:;">
          <img src="../assets/images/fl1.jpg" alt>
        </a>
        <a href="#javascript:;">
          <img src="../assets/images/fl2.jpg" alt>
        </a>
        <a href="#javascript:;">
          <img src="../assets/images/fl3.jpg" alt>
        </a>
      </div>
    
    <div class="baokuan">
      <p class="text">本月爆款</p>
      <p class="xian"></p>
      <div class="con">
        <a @click="godetail('5ce790df7b5ecb5253518e73')">
          <img src="../assets/images/bao1.jpg" alt>
        </a>
        <a @click="godetail('5ce790df7b5ecb5253518e75')">
          <img src="../assets/images/bao2.jpg" alt>
        </a>
        <a @click="godetail('5ce790df7b5ecb5253518e76')">
          <img src="../assets/images/bao3.jpg" alt>
        </a>
      </div>
    </div>
    <div class="bimai">
      <p class="text">必买爆品</p>
      <p class="xian"></p>
      <div class="liebiao">
        
        <Goods :good="goods" class="move"></Goods>
        
      </div>
    </div>
  </div>
</template>

<script>
import Myheader from "../components/my-header.vue";
import Swipe from "../components/swipe.vue";
import Goods from "../components/goods.vue";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      imgs: this.$store.state.imgs,
      imgs2: this.$store.state.imgs2

      //  imgs:[
      //     "http://101.132.73.191/images/b1.jpg",
      //     "http://101.132.73.191/images/b2.jpg",
      //     "http://101.132.73.191/images/b3.jpg",
      //     "http://101.132.73.191/images/b4.jpg",
      // ],
      // imgs2:[
      //     "http://101.132.73.191/images/lun2.jpg",
      //     "http://101.132.73.191/images/lun2.jpg",
      //     "http://101.132.73.191/images/lun2.jpg"
      // ]
    };
  },
  mounted() {
    // this.$axios.get("/vue/getGoodList")
    // .then(res=>{
    //     this.goods = res.data.result;
    //     console.log(this.goods)
    // })
    this.getAllGoods({
      url: "/vue/getGoodList",
      params: { limit: 6 }
    });
  },
  methods: {
    ...mapActions(["getAllGoods"]),
    godetail(_id) {
      this.$router.push({ name: "good_detail", params: { _id } });
    }
  },
  components: {
    Myheader,
    Swipe,
    Goods
  },
  computed: {
    ...mapState(["goods"])
  }
};
</script>
<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
  .fl {
    width: 100%;
    height: 1.5rem;
    width: 100%;
    padding: 0.16rem 0;
    background-image: linear-gradient(90deg, #fff 0, #f5f5f5 100%);
    box-shadow: inset 0 0 0 0 #ddd;
    a {
      display: inline-block;
      width: 25%;
      padding: 7px 0;
      text-decoration: none;
      color: #666;
      border: none;
      text-align: center;
      img {
        display: inline-block;
        width: 50%;
        height: 50%;
      }
      p {
        font-size: 0.3rem;
        font-weight: bold;
      }
    }
  }
  .adv {
    width: 100%;
    height: 3rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .biao {
    margin: 0.15rem 0;
    .text {
      color: #333;
      line-height: 0.3rem;
      text-align: center;
      margin-bottom: 0.3rem;
      font-weight: 700;
    }
    .xian {
      width: 0.5rem;
      height: 2px;
      background: #ccaa7a;
      margin: 0 auto;
    }
  }
  .slide-enter-active {
    animation: bounce 5s;
  }
  .slide-leave-active {
    animation: bounce 5s;
  }
  .clasify {
    width: 100%;
    a {
      display: inline-block;
      width: 33.3%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .baokuan {
    margin: 0.15rem 0;
    .text {
      color: #333;
      line-height: 0.3rem;
      text-align: center;
      margin-bottom: 0.3rem;
      font-weight: 700;
    }
    .xian {
      width: 0.5rem;
      height: 2px;
      background: #ccaa7a;
      margin: 0 auto;
      margin-bottom: 0.2rem;
    }
    .con {
      width: 100%;
      // height: 3.2rem;
      a {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .bimai {
    .text {
      color: #333;
      line-height: 0.3rem;
      text-align: center;
      margin-bottom: 0.3rem;
      font-weight: 700;
    }
    .xian {
      width: 0.5rem;
      height: 2px;
      background: #ccaa7a;
      margin: 0 auto;
      margin-bottom: 0.2rem;
    }
    .liebiao {
      overflow: hidden;
      margin-bottom: 0.9rem;
    }
  }
}
</style>