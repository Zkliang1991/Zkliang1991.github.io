<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <van-tabs v-model="active" v-show="show" @click="toggle">
      <van-tab title="综合排序"></van-tab>
      <van-tab title="销量优先"></van-tab>
      <van-tab title="价格排序"></van-tab>
    </van-tabs>
    <div class="hotsearch" v-show="hotwords">
      <p>热门搜索</p>
      <div>
        <a @click="gosearch('欧米茄')">欧米茄</a>
        <a @click="gosearch('石英表')">石英表</a>
        <a @click="gosearch('机械')">机械</a>
      </div>
    </div>
    <div class="yip" v-show="nogoods">没有搜索到该商品</div>
    <div class="list">
      <Goods :good="goods"></Goods>
    </div>
  </div>
</template>


<script>
import Goods from "../components/goods.vue";
export default {
  data() {
    return {
      value: "",
      goods: [],
      active: 0,
      val: "",
      show: false,
      nogoods: false,
      hotwords:true
    };
  },
  methods: {
    //   this.$axios.get("/vue/getGoodOne", { params: { _id } }).then(res => {
    //   this.good = res.data.result;
    // });
    onSearch(val) {
      this.active = 0;

      this.val = val;
      this.$axios.get("/vue/search", { params: { keyword: val } }).then(res => {
        this.goods = res.data.result;
        if (this.goods.length == 0) {
          this.nogoods = true;
          this.show = false;
          this.hotwords = true;
        } else {
          this.show = true;
          this.nogoods = false;
          this.hotwords = false;
        }
      });
    },
    onCancel() {},
    toggle(index, title) {
      switch (index) {
        case 0:
          this.$axios
            .get("/vue/search", { params: { keyword: this.val } })
            .then(res => {
              this.goods = res.data.result;
              this.nogoods = false;
            });
          break;
        case 1:
          this.$axios
            .get("/vue/saleNum", { params: { keyword: this.val } })
            .then(res => {
              this.goods = res.data.result;
              this.nogoods = false;
            });
          break;
        case 2:
          this.$axios
            .get("/vue/jiage", { params: { keyword: this.val } })
            .then(res => {
              this.goods = res.data.result;
              this.nogoods = false;
            });
          break;
      }
    },
    gosearch(word){
        this.$axios
            .get("/vue/search", { params: { keyword: word } })
            .then(res => {
              this.goods = res.data.result;
              
            });
    }
  },
  components: {
    Goods
  }
};
</script>

<style lang="scss" scoped>
.yip {
  height: 100px;
  line-height: 100px;
  font-size: 20px;
}
.hotsearch {
  > p {
    font-size: 12px;
    color: #999;
    margin-top: 14px;
    padding: 0 12px;
    margin-bottom: 12px;
    text-align: left;
  }
  > div {
    padding: 0 12px;
  overflow: hidden;

    a {
      display: block;
      max-width: 25%;
      margin-right: 10px;
      margin-bottom: 10px;
      padding: 0 9px;
      height: 28px;
      line-height: 28px;
      border-radius: 100px;
      border: 1px solid #ddd;
      box-sizing: border-box;
      font-size: 12px;
      border-color: #cc3d3d;
      color: #cc3d3d;
      float: left;
    }
  }
}
</style>
