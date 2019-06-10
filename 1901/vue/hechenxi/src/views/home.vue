<template>
  <div class="home">
    <div class="top">
      <van-row>
        <van-col span="10" class="imgcol">
          <img src="../assets/yanxuan.jpg" alt>
        </van-col>
        <van-col span="14">
          <router-link to="/search">
            <van-search placeholder="请输入搜索关键词"/>
          </router-link>
        </van-col>
      </van-row>
      <van-notice-bar
        text="618终极促销618终极促销618终极促销618终极促销618终极促销"
        left-icon="volume-o"
        color="#1989fa"
      />
    </div>
    <van-swipe :autoplay="1500" indicator-color="white">
      <van-swipe-item>
        <img src="../assets/b1.jpg" alt>
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/b2.jpg" alt>
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/b3.jpg" alt>
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/b4.jpg" alt>
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/b5.jpg" alt>
      </van-swipe-item>
    </van-swipe>
    <div v-if="flag">
      <h2>
        居家必备
        <van-icon name="fire"/>
      </h2>
      <ul>
        <li v-for="(good,index) in bedgoods" :key="index" class="move">
          <router-link :to="{name:'good',params:{goodId:good._id},query:{name:good.name}}">
            <img :src="good.images" alt>
            <h3>{{good.name}}</h3>
            <van-row>
              <van-col span="14">RMB:{{good.price}}</van-col>
              <van-col span="10">{{good.deal}}</van-col>
            </van-row>
          </router-link>
        </li>
      </ul>
      <h2>
        精品服装
        <van-icon name="fire"/>
      </h2>
      <ul>
        <li v-for="(good,index) in clothinggoods" :key="index" class="move">
          <router-link :to="{name:'good',params:{goodId:good._id},query:{name:good.name}}">
            <img :src="good.images" alt>
            <h3>{{good.name}}</h3>
            <van-row>
              <van-col span="14">RMB:{{good.price}}</van-col>
              <van-col span="10">{{good.deal}}</van-col>
            </van-row>
          </router-link>
        </li>
      </ul>
      <h2>
        大牌数码
        <van-icon name="fire"/>
      </h2>
      <ul>
        <li v-for="(good,index) in appliancegoods" :key="index" class="move">
          <router-link :to="{name:'good',params:{goodId:good._id},query:{name:good.name}}">
            <img :src="good.images" alt>
            <h3>{{good.name}}</h3>
            <van-row>
              <van-col span="14">RMB:{{good.price}}</van-col>
              <van-col span="10">{{good.deal}}</van-col>
            </van-row>
          </router-link>
        </li>
      </ul>
      <h2>
        特色零食
        <van-icon name="fire"/>
      </h2>
      <ul>
        <li v-for="(good,index) in foodgoods" :key="index" class="move">
          <router-link :to="{name:'good',params:{goodId:good._id},query:{name:good.name}}">
            <img :src="good.images" alt>
            <h3>{{good.name}}</h3>
            <van-row>
              <van-col span="14">RMB:{{good.price}}</van-col>
              <van-col span="10">{{good.deal}}</van-col>
            </van-row>
          </router-link>
        </li>
      </ul>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
// import { mapActions, mapState } from "vuex";
export default {
  name: "home",
  components: {},
  data() {
    return {
      keyword: "bed",
  
      bedgoods: [],
      clothinggoods: [],
      appliancegoods: [],
      foodgoods: [],
      flag: false
    };
  },
  computed: {
    // ...mapState(["goodInfo"])
  },
  methods: {
    // ...mapActions(["getAllGoods"]),
    // getTypeGood(e) {
    //   if (e == 0) {
    //     this.keyword = "bed";
    //   } else if (e == 1) {
    //     this.keyword = "clothing";
    //   } else if (e == 2) {
    //     this.keyword = "appliance";
    //   } else if (e == 3) {
    //     this.keyword = "food";
    //   } else if (e == 4) {
    //     this.keyword = "wash";
    //   }
    //   this.getAllGoods({
    //     url: "/vue/getGoodList",
    //     params: { keyword: this.keyword }
    //   });
    // }
    // gotoGood() {
    //   this.$router.push({
    //     name: "good",
    //     params: { goodId: this.goodInfo.all_goods._id },
    //     query: { name: this.goodInfo.all_goods.name }
    //   });
    // }
  },
  // mounted() {
  //   console.log(this.type);
  //   this.getAllGoods({
  //     url: "/vue/getGoodList",
  //     params: { keyword: this.$route.query.type }
  //   });
  // },
  created() {
    this.$axios
      .get("/vue/getGoodList", {
        params: {
          limit: 4,
          keyword: "bed"
        }
      })
      .then(res => {
        this.bedgoods = res.data.result;
        this.show = true;
      });
    this.$axios
      .get("/vue/getGoodList", {
        params: {
          limit: 4,
          keyword: "clothing"
        }
      })
      .then(res => {
        this.clothinggoods = res.data.result;
        this.show = true;
      });
    this.$axios
      .get("/vue/getGoodList", {
        params: {
          limit: 4,
          keyword: "appliance"
        }
      })
      .then(res => {
        this.appliancegoods = res.data.result;
        this.show = true;
      });
    this.$axios
      .get("/vue/getGoodList", {
        params: {
          limit: 4,
          keyword: "food"
        }
      })
      .then(res => {
        this.foodgoods = res.data.result;
        this.show = true;
      });
      if(this.bedgoods&&this.clothinggoods&&this.appliancegoods&&this.foodgoods){
        this.flag=true
      }
  }
};
</script>

<style scoped>
/* .tab[data-v-7eb2bc79] {
  overflow: visible;
} */
/* .top {
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: #fff;
}
.imgcol img,
.van-search {
  height: 0.9rem;
  width: 100%;
}
.main {
  margin-top: 2.4rem;
} */
img {
  width: 100%;
}
h2 {
  text-align: center;
  margin-top: 2%;
  margin-bottom: 3%;
}
.van-col {
  font-size: 12px;
  color: red;
}
li {
  width: 48%;
  float: left;
  margin-left: 1%;
  margin-bottom: 2%;
}
h3 {
  color: black;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.low {
  width: 100%;
  height: 50px;
}
</style>
