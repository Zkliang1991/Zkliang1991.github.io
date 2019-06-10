<template>
  <div>
    <Header title="搜索" :show="true" style="z-index:2"></Header>
    <mt-search v-model.lazy="value" style="marginTop:.8rem">
      <div class="move">
        <mt-loadmore
        :top-method="loadTop"
        :bottom-all-loaded="allLoaded"
        ref="loadmore"
      >
        <div style="marginTop:.3rem">
          <div v-for="(good,i) in goods" :key="i" class="good">
            <router-link :to="{name:'detail',params:{goodId:good._id},query:{title:good.title}}">
              <img :src="good.img" alt class="item-img">
              <p class="van-ellipsis" style="color:#222;">{{good.title}}</p>
              <span class="price">¥{{good.price}}</span>
              <span class="sales">{{good.sales}}</span>
              <i class="iconfont icon-cart"></i>
            </router-link>
          </div>
        </div>
      </mt-loadmore>
      </div>
    </mt-search>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      allLoaded: false,
      value: "",
      goods: []
    };
  },
  watch: {
    value(newVal) {
      // alert("调用搜索");
      this.$axios
        .get("/vue/getAllGoods", {
          params: { keywords: newVal, limit: 20 }
        })
        .then(res => {
          this.goods = res.data.result;
        });
    }
  },
  methods: {
    onCancel() {
      this.$router.go(-1);
    },
    loadTop() {
      setTimeout(() => {
        this.goods = this.goods.reverse();
        this.$refs.loadmore.onTopLoaded();
        Toast({
          message: "刷新成功",
          duration: 500
        });
      }, 1000);
    },
    // loadBottom() {
    //   console.log("上拉加载更多");
    //   this.allLoaded = true; // 若数据已全部获取完毕
    //   setTimeout(() => {
    //     var length = this.goods.length; // 20     16
    //     var num = Math.round(Math.random()*1 * (length - 4));
    //     console.log(num);
    //     // 这里的 随机求 值 没有问题

    //     var arr = this.goods.slice(num, 4);
    //     this.goods = this.goods.concat(arr);
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
.mint-searchbar-cancel {
  color: red;
}
.good {
  width: 46%;
  margin-left: 2%;
  height: 4.3rem;
  float: left;
  font-size: 0.24rem;
  margin-bottom: 0.4rem;
}
.good img {
  width: 100%;
  height: 3.5rem;
}
.good p {
  line-height: 0.5rem;
}
.good i {
  float: right;
  width: 0.37rem;
  height: 0.37rem;
  border-radius: 50%;
  border: 1px solid #ddd;
  text-align: center;
  line-height: 0.4rem;
  font-size: 0.24rem;
  color: #d70057;
  margin-right: 0.1rem;
}
.good .price {
  color: #d70057;
  line-height: 0.4rem;
  float: left;
}
.good .sales {
  color: #999;
  font-size: 0.2rem;
  line-height: 0.4rem;
  float: left;
  margin-left: 0.2rem;
}
</style>

