<template>
  <div>
    <Head title="商品列表"></Head>
    <div class="kong"></div>
    <van-Tabs slot v-model="active">
      <van-tab v-for="(good,i) in fenlei" :key="i" :title="good">
        <List :title="good"></List>
      </van-tab>
    </van-Tabs>
  </div>
</template>


<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      active: 0,
      fenlei: ["男鞋", "女鞋", "男装", "女装", "男裤", "女裤", "童装", "背包"]
    };
  },

  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
  },

  mounted() {
    console.log(1111)
    this.$axios.get("/vue/getGoodList").then(res => {
      //console.log(res);
      this.list = res.data.result;
    });
  }
};
</script>

<style>
.kong {
  height: 46px;
  width: 100%;
}
</style>
