<template>
  <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <ul>
      <li v-for="(good,i) in goods " :key="i" @click="goDetail">
          <router-link :to="{name:'good',params:{good:JSON.stringify(good)}}">
            <van-card :price="good.price" :desc="good.title" :title="good.feilei" :thumb="good.img"/>
        </router-link>
      </li>
    </ul>
  </van-list>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
    };
  },
  props: ["title","goods"],
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
    },
    goDetail(){

    }
  },
  mounted() {
    this.$axios.get("/vue/getGoodList").then(res => {
    //   console.log(res.data.result);
     // console.log(this.title);
        this.goods = res.data.result.filter(good=>good.feilei==this.title)
      //this.goods = res.data.result.filter(good=>this.title==this.good.feilei);
     // console.log(this.goods)
    });
  }
};
</script>

<style>
ul {
  width: 100%;
}
li {
  width: 50%;
  height: 100%;
  float: left;
}
</style>
