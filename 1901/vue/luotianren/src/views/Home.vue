<template>
  <div>
    <Head title="优衣库掌上旗舰店"></Head>
    <van-swipe :autoplay="3000" class="swipe">
      <van-swipe-item v-for="(img,i) in imgs" :key="i">
        <img :src="img" alt class="img" @click="gotoApp(i)">
      </van-swipe-item>
    </van-swipe>
    <van-notice-bar
  text="因为本次活动非常优惠,因此每一位用户每一件商品,只能购买一件,不能多买,谢谢各位顾客的购买"
  left-icon="volume-o"
/>
    <van-nav-bar left-text="人气推荐" class="tag"/>
    <Search></Search>
    <div><img src="../assets/images/C8}6THLN3V])]L1F0N3C2RB.png" alt=""></div>
    <Foot></Foot>
  </div>
</template>



<script>
import Foot from "@/components/foot.vue";
import Search from "@/components/search.vue";

export default {
  components: {
    Foot,
    Search,
  },
  name: "carousel",
  data() {
    return {
      imgs: [
        require("@/assets/images/childpc1280.jpg"),
        require("@/assets/images/KAWS-1280.jpg"),
        require("@/assets/images/T2-T.jpg"),
        require("@/assets/images/PC_L1.jpg")
      ],
       list: [],
      all_goods:[]
    };
  },
  created() {
    this.$axios.get("/vue/getGoodList").then(res => {
      this.all_goods = res.data.result;
    });
  }

};
</script>
<style lang="scss">
.img {
  width: 100%;
  height: 100%;
}
.van-nav-bar__left {
  font-size: 18px !important;
}
</style>
