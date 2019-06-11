<template>
  <div>
    <detailsHead title="我的收藏商品"></detailsHead>
    <div class="lovelylist">
      <van-card
        v-for="(item,i) in lovelyList"
        :key="i"
        :tag="item.body.good.typetext"
        :price="item.body.good.goodsprice"
        :desc="item.body.good.shoptext"
        :title="item.body.good.goodstitle"
        :thumb="item.body.good.goodsimg"
      >
        <div slot="footer">
          <van-button size="mini">更多</van-button>
          <van-button size="mini">删除</van-button>
        </div>
      </van-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lovelyList: []
    };
  },
  mounted() {
    this.$axios.get("/vue/lovely").then(res => {
      console.log(res.data.result);
      this.lovelyList = res.data.result;
    });
  }
};
</script>
<style lang="scss" scpoed>
.lovelylist {
  padding-top: 1rem;
}
</style>