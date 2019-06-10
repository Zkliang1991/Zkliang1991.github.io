

<template>
  <mt-loadmore
    :top-method="loadTop"
    :bottom-all-loaded="allLoaded"
    ref="loadmore"
  >
    <ul>
      <li v-for="(good,i) in goodlist" :key="i" class="item " >
        <router-link :to="{name:'gooddetail',params:{id:good._id},query:{title:good.title}}">
                <img :src="good.img" alt class="item-img">
                <h3 class="van-ellipsis">{{good.title}}</h3>
                <van-row type="flex" justify="space-between">
                <van-col span="6" style="color:red;font-size:30px;">￥{{good.price}}</van-col>
                <van-col span="6" style="color:red;font-size:10px;">
                    {{good.pro_country}}
                    <img :src="good.smallimg" alt class="smallimg">
                </van-col>
                </van-row>
                <van-row type="flex" justify="end">
                <van-col style="color:black">{{good.fr}}</van-col>
                </van-row>
        </router-link>
      </li>
    </ul>
  </mt-loadmore>
</template>

<script>
export default {
  name: "list",
  data() {
    return {
      allLoaded: false
    };
  },
  props: {
    goodlist: Array
  },
  mounted() {
    this.$axios.get("/vue/getGoodList").then(res => {
      this.goods = res.data.result;
      console.log(this.goodlist);
    });
  },
  methods: {
    loadTop() {
      console.log("下拉刷新");
      setTimeout(() => {
        var goods = this.goods.reverse();
        this.$emit("change", goods);
        this.$refs.loadmore.onTopLoaded();
        // Toast({
        //   message: "下拉刷新-成功",
        //   duration: 500
        // });
      }, 1500);
    },
  }
};
</script>

<style lang="scss" scoped>
ul {
  overflow: hidden;
  width: 100%;
  margin-top: .5rem;
  margin-bottom: 1rem;
  text-align: left;
  background-color: #fff;
  li {
    width: 44%;
    float: left;
    border: 1px solid red;
    margin: 2%;
    background-color: #fff;
    padding: 2px;
    .item-img {
      width: 100%;
      height: 4rem;
    }
    .smallimg {
      width: 0.8rem;
      height: 0.4rem;
    }
  }
}
</style>
