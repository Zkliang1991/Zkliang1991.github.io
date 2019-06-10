<template>
  <div class="home_nav">
    <a v-for="(l,i) in lists" :key="i">
      <img :src="l.img" :alt="l.name">
      <h3>{{l.name}}</h3>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        { img: require("@/assets/images/nav_1.png"), name: "登山馆" },
        { img: require("@/assets/images/nav_2.png"), name: "跑步馆" },
        { img: require("@/assets/images/nav_3.png"), name: "滑雪馆" },
        { img: require("@/assets/images/nav_4.png"), name: "户二代" },
        { img: require("@/assets/images/nav_5.png"), name: "品牌馆" },
        { img: require("@/assets/images/nav_6.png"), name: "户外旅游" },
        { img: require("@/assets/images/nav_7.png"), name: "户外知识" },
        { img: require("@/assets/images/nav_8.png"), name: "场景装备" }
      ]
    };
  }
};
</script>

<style scoped>
.home_nav {
  background: #fff;
  box-shadow: 0 0.06rem 0.12rem rgba(0, 0, 0, 0.1);
  padding: 1% 0;
  /* margin-top:0.8rem; */
  overflow: hidden;
}
.home_nav a {
  color: #777;
  display: block;
  float: left;
  margin-top: 2%;
  width: 25%;
}
.home_nav a img {
  display: block;
  margin: 0 auto;
  width: 49.5%;
}
.home_nav a h3 {
  font-size: 0.26rem;
  line-height: 1.8;
  text-align: center;
}
</style>


