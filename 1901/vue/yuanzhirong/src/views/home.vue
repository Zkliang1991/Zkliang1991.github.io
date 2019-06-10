<template>
  <div class="home">
    <div class="box">
      <van-nav-bar class="bar" fixed>
        <span slot="left">
          <van-icon name="fire-o"/>
        </span>
        <van-search
          slot="right"
          placeholder="请输入搜索关键词"
          show-action
          shape="round"
          right-icon="scan"
          class="search"
          @click="gotosearch"
        >
          <van-icon name="comment" slot="action" size="20" class="icon"/>
        </van-search>
      </van-nav-bar>
    </div>
    <div>
      <van-swipe :autoplay="3000" indicator-color="white" class="slide">
        <van-swipe-item v-for="(img,i) in imgs" :key="i">
          <img :src="img" class="swiper-img">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div>
      <van-notice-bar color="red" background="#ecf9ff" left-icon="volume-o" scrollable>
          所有商品清仓大甩卖,全场55折,现在来一首吴亦凡的大碗宽面 ~~hei~~ 哟~~你看这个碗又大又圆,你看着面又长又宽
      </van-notice-bar>
      <van-row type="flex" justify="center" class="row">
        <van-col span="6">
          <h3>
            <span>----国家馆----</span>
          </h3>
        </van-col>
      </van-row>
      <div class="listdiv">
        <van-tabs sticky animated>
          <van-tab v-for="index in goodstype.length" :title="goodstype[index-1]" :key="index">
            <List :goodlist="goodInfo.all_goods.filter((it)=>it.pro_country==goodstype[index-1])"></List>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "home",
  components: {},
  computed: {
    ...mapState(["goodInfo"])
  },
  methods: {
    gotosearch() {
      this.$router.push({ name: "search" });
    },
    ...mapActions(["getAllGoods"])
  },
  data() {
    return {
      imgs: [
        require("@/assets/images/banner1.jpg"),
        require("@/assets/images/banner2.jpg")
      ],
      goods: [],
      action: -1,
      all_goods: [],
      goodstype: []
    };
  },
  mounted() {
    this.$axios.get("/vue/getGoodType").then(res => {
      console.log(res.data.result);
      this.goodstype = res.data.result;
    });
  },
  created() {
    this.getAllGoods({ url: "/vue/getGoodList", cb: () => {} });
  }
};
</script>


<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.box {
  height: 0.9rem;
  color: red;
}
.icon {
  margin-left: 0.1rem;
}
.slide,
.swiper-img {
  width: 100%;
  height: 3rem;
}
.row {
  line-height: 0.6rem;
  padding: 2px;
  margin-top: 2px;
  background-color: #fff;
  border-bottom: 1px solid #ccddcc;
  color: black;
}
</style>
