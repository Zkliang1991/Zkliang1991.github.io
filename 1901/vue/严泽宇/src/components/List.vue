<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <van-card
      v-for="(good,i) in goods"
      :key="i"
      :num="(good.discount*100).toFixed(0)"
      tag="限时特惠"
      :price="good.price*100/2"
      :desc="good.type.text"
      :title="good.name"
      :thumb="good.img"
      :origin-price="good.price*100"
      @click="godetail(good._id,good.name)"
    >
      <div slot="footer">
        <van-button size="mini" class="iconfont">&#xe675;</van-button>
      </div>
    </van-card>
  </van-pull-refresh>
</template>

<script>
export default {
  props: {
    goods: {
      type: Array,
      required: true
    },
    type: Object,
    all_goods: Array
  },
  data() {
    return {
      count: 0,
      isLoading: false
    };
  },

  methods: {
    onRefresh() {
      this.goods = this.goods.reverse();
      setTimeout(() => {
        console.log("翻转....");
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    godetail(goodsid, goodsname) {
      this.$router.push({
        name: "shopdetail",
        params: { goodId: goodsid },
        query: { goodsname: goodsname }
      });
    }
  }
};
</script>

