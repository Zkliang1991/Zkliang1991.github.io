<template>
  <div>
    <Head title="搜索" :show="true"></Head>
    <form action="/">
      <van-search placeholder="请输入搜索关键词" v-model="value"/>
    </form>

    <!-- <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-card
        v-for="(good,index) in goods"
        :key="index"
        num="1"
        :price="good.price"
        :desc="good.deal"
        :title="good.name"
        :thumb="good.images"
        tag="爆款"
      />
    </van-list>-->
    <div v-for="(good,index) in goods" :key="index">
      <router-link :to="{name:'good',params:{goodId:good._id},query:{name:good.name}}">
        <van-card
          num="1"
          :price="good.price"
          :desc="good.deal"
          :title="good.name"
          :thumb="good.images"
          tag="爆款"
        />
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      goods: [],
      loading: false,
      finished: false
    };
  },

  methods: {
    onLoad() {
      // 异步更新数据

      for (let i = 0; i < 1; i++) {
        this.goods.push(this.goods.length + 1);
      }
      // 加载状态结束
      this.loading = false;

      // 数据全部加载完成
      if (this.goods.length >= 100) {
        this.finished = true;
      }
    }
  },
  watch: {
    value(newVal) {
      console.log(newVal);

      this.$axios
        .get("/vue/getGoodList", {
          params: {
            keyword: newVal
          }
        })
        .then(res => {
          console.log(res);
          this.goods = res.data.result;
        });
    }
  }
};
</script>
<style scoped>
.top {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
}
</style>


