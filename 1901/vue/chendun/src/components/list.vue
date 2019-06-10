<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <ul>
        <li v-for="(good,i) in goods" :key="i" class="item move">
          <Item :good="good"></Item>
        </li>
      </ul>
    </van-pull-refresh>
  </div>
</template>
<script>
import Item from "./item.vue";

export default {
  data() {
    return {
      isLoading: false
    };
  },
  props: {
    goods: {
      type: Array,
      required: true
    },
    type: Object,
    allGood: Array
  },
  components: {
    Item
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        var goods = this.goods.reverse();
        this.$emit("changegoods", goods);
        this.$refs.refresh.onRefresh();
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 1500);
    }

    // loadTop() {
    //   console.log("下拉刷新");
    //   setTimeout(() => {
    //     var goods = this.goods.reverse();
    //     this.$emit("changegoods", goods);
    //     this.$refs.loadmore.onTopLoaded();
    //     Toast({
    //       message: "下拉刷新-成功",
    //       duration: 500
    //     });
    //   }, 1500);
    // },
    // loadBottom() {
    //   console.log("上拉加载更多");
    //   this.allLoaded = true; // 若数据已全部获取完毕
    //   setTimeout(() => {
    //     var length = this.goods.length; // 20     16
    //     var num = Math.floor(Math.random() * (length - 4));
    //     console.log(num);
    //     var arr = this.goods.slice(num, 4);
    //     var goods = this.goods.concat(arr);
    //     this.$emit("changegoods", goods);

    //     // this.newGoods = this.goods;
    //     this.allLoaded = false;
    //     this.$refs.loadmore.onBottomLoaded();
    //     Toast({
    //       message: "上拉加载更多-成功",
    //       duration: 500
    //     });
    //   }, 1500);
    // }
  }
};
</script>
<style scoped>
.item {
  width: 48%;
  color: red;
  font-size: 16px;
  float: left;
  border: 2px solid #ccddcc;
  margin: 1px;
}
.item img {
  width: 100%;
  height: 3.7rem;
}
</style>

