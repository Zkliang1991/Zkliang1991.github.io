<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="精选推荐" fixed="true">
        <Swipe></Swipe>
        <nav v-for="(good,i) in goods" :key="i" :goods="goods">
          <!-- <router-link :to="{name:'fcous',params:{goodId:goods.goods_id}}"> -->
          <van-card
            :num="good.sales"
            :tag="good.goods_id"
            :price="(good.min_price/100).toFixed(2)"
            :desc="good.footnote"
            :title="good.goods_name"
            :thumb="good.thumb_url"
            :origin-price="(good.min_price/80).toFixed(2)"
          >
            <div slot="footer">
              <van-button size="mini" type="danger" @click="chakanxiangqing(good)">查看详情</van-button>
              <van-button size="mini" type="primary">加入购物车</van-button>
            </div>
          </van-card>
          <!-- </router-link> -->
        </nav>
      </van-tab>
      <van-tab title="开发者头条">内容 2</van-tab>
      <van-tab title="学习路径">内容 3</van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Swipe from "@/components/swipe.vue";
export default {
  data() {
    return {
      active: 0,
      goods: []
    };
  },
  components: {
    Swipe
  },
  methods: {
    getGood(data) {
      this.goods = data;
      console.log(this.goods);
    },
    chakanxiangqing(good) {
      this.$router.push({ name: "xiangq", query: { item: good } });
      console.log(this.$route);
    }
  },
  mounted() {
    this.$axios.get("/vue/goodsindex", {}).then(res => {
      this.goods = res.data.result;
      // console.log(this.goods);
    });
  }
};
</script>

