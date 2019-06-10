<template>
  <div>
    <Header title="山脉户外首页" :show="false"></Header>
    <Topkong></Topkong>
    <Swiper :autoplayflag="true" arrowtype="hover" :speed="2000" :imgs="imgs" :istyle="istyle"></Swiper>
    <Nav></Nav>
    <div class="g-header">
      <img src="@/assets/images/sss01.png">
      <span>每日单品推荐</span>
      <img src="@/assets/images/sss01.png">
    </div>
    <Swiper :autoplayflag="true" arrowtype="hover" :speed="3000" :imgs="arcimgs" :istyle="astyle"></Swiper>
    <List></List>
    <Buttonkong></Buttonkong>
  </div>
</template>

<script>
import Swiper from "../components/swiper.vue";
import Nav from "../components/nav.vue";
import List from "../components/list.vue";
import Topkong from "../components/top-kong.vue";
import Buttonkong from "../components/button-kong.vue";

export default {
  components: {
    Swiper,
    Nav,
    List,
    Topkong,
    Buttonkong
  },
  data() {
    return {
      imgs: [
        require("@/assets/images/banner1.jpg"),
        require("@/assets/images/banner2.jpg"),
        require("@/assets/images/banner3.jpg"),
        require("@/assets/images/banner4.jpg"),
        require("@/assets/images/banner5.jpg"),
        require("@/assets/images/banner6.jpg"),
        require("@/assets/images/banner7.jpg"),
        require("@/assets/images/banner8.jpg"),
        require("@/assets/images/banner9.jpg"),
        require("@/assets/images/banner10.jpg")
      ],
      arcimgs: [
        require("@/assets/images/arcImg1.jpg"),
        require("@/assets/images/arcImg2.jpg"),
        require("@/assets/images/arcImg3.jpg"),
        require("@/assets/images/arcImg4.jpg")
      ],
      istyle: { width: "100%", height: "2.2rem" },
      astyle: { width: "100%", height: "4rem" }
    };
  }
};
</script>

<style>
.g-header {
  color: #007130;
  font-size: 0.36rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
}
.g-header img {
  width: 0.56rem;
  display: inline-block;
}
.g-header span {
  padding: 0 0.16rem;
}
</style>


