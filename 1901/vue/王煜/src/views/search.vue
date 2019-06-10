<template>
  <div>
    <van-nav-bar title="搜索" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <mt-search v-model.lazy="value">
      <nav v-for="(good,i) in goods" :key="i" :goods="goods" class="nav">
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
      </nav>
    </mt-search>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    chakanxiangqing(good) {
      this.$router.push({ name: "xiangq", query: { item: good } });
      console.log(this.$route);
    },
    getGood(data) {
      this.goods = data;
    }
  },
  watch: {
    value(newVal) {
      // console.log(newVal);
      this.newVal = newVal;
      this.$axios
        .get("/vue/getGoodList", {
          params: {
            keyword: newVal
          }
        })
        .then(res => {
          this.goods = res.data.result;
          console.log(this.goods);
        });
    }
  },
  data() {
    return {
      value: "",
      goods: [],
    };
  }
};
</script>
<style lang="scss" scoped>
.nav {
  margin-top: 1rem;
}
</style>


