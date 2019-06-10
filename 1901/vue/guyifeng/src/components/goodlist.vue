<template>
  <mt-loadmore
    :top-method="loadTop"
    :bottom-method="loadBottom"
    :bottom-all-loaded="allLoaded"
    ref="loadmore"
    class="top"
  >
    <ul class="list">
      <li v-for="(good,i) in newGoods" :key="i" class="item move" @click="goGoods(good._id)">
        <img :src="good.img" alt class="item-img">
        <h3>品牌:{{good.type}}</h3>
        <p>价格:¥{{good.price}}</p>
        <h2>
          <span>评论:{{good.punlun}}条</span>
          <span>查看详情</span>
        </h2>
      </li>
    </ul>
  </mt-loadmore>
</template>

<script>
// import Item from "./item.vue";
import { Toast } from "mint-ui";
export default {
  name: "list",
  data() {
    return {
      allLoaded: false
    };
  },
  computed: {
    newGoods: {
      get() {
        return this.goods;
      },
      set(val) {
        console.log(val);
        // this.goods = val;
      }
    }
  },
  methods: {
    loadTop() {
      console.log("下拉刷新");
      setTimeout(() => {
        var goods = this.goods.reverse();
        this.$emit("changegoods", goods);
        this.$refs.loadmore.onTopLoaded();
        Toast({
          message: "下拉刷新-成功",
          duration: 500
        });
      }, 1500);
    },
    loadBottom() {
      console.log("上拉加载更多");
      this.allLoaded = true; // 若数据已全部获取完毕
      setTimeout(() => {
        var length = this.goods.length; // 20     16
        var num = Math.floor(Math.random() * (length - 4));
        console.log(num);
        // 这里的 随机求 值 没有问题
        var arr = this.goods.slice(num, 4);
        var goods = this.goods.concat(arr); // 子组件 修改 props
        this.$emit("changegoods", goods);
        this.allLoaded = false;
        this.$refs.loadmore.onBottomLoaded();
        Toast({
          message: "上拉加载更多-成功",
          duration: 500
        });
      }, 1500);
    },
    goGoods(_id) {
      this.$store.state.goodId=_id;
      this.$router.push({name:'good'});
    }
  },
  props: {
    goods: {
      type: Array,
      required: true
    },
    type: Object,
    all_goods: Array
  }
};
</script>

<style lang="scss" scoped>
.list {
  overflow: hidden;
  .item {
    height: 400px;
    float: left;
    width: 50%;
    margin-bottom: 5px;
    background-color: white;
    img {
      width: 100%;
      height: 300px;
      padding-left: 5px;
    }
    h2 {
      font-size: 16px;
      line-height: 30px;
      overflow: hidden;
      padding-left: 5px;
      span {
        float: left;
      }
      span:last-child {
        float: right;
        background-color: red;
        margin-right: 5px;
        border-radius: 20px;
      }
    }
    h3 {
      font-size: 24px;
      line-height: 32px;
      color: darkolivegreen;
      padding-left: 5px;
    }
    p {
      font-size: 20px;
      line-height: 22px;
      color: red;
      padding-left: 5px;
    }
  }
}
.top {
  margin-top: 0.3rem;
}
</style>

