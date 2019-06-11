<template>
  <div class="tuijian">
    <h3>-----分类推荐-----</h3>
    <h6>CLASSIFYCATION</h6>
    <ul v-for="(img,i) in indextjimg" :key="i" class="indextj">
      <li class="indextj-li">
        <img :src="img.img" class="indnxtj-img">
        <p class="indexnav-text">{{img.text}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "indextj",
  data() {
    return {
      indextjimg: [
        {
          img: require("../assets/images/coffee.jpg"),
          text: "咖啡"
        },
        {
          img: require("../assets/images/yinliao.jpg"),
          text: "饮料"
        },
        {
          img: require("../assets/images/cook.jpg"),
          text: "饼干"
        },
        {
          img: require("../assets/images/sugar.jpg"),
          text: "甜品"
        },
        {
          img: require("../assets/images/lingshi.jpg"),
          text: "零食"
        },
        {
          img: require("../assets/images/water.jpg"),
          text: "矿泉水"
        },
        {
          img: require("../assets/images/oli.jpg"),
          text: "橄榄油"
        },
        {
          img: require("../assets/images/other.jpg"),
          text: "杂物"
        }
      ]
    };
  }
};
</script>


<style scoped>
h6 {
  color: #aaa;
  font-size: 0.2rem;
}
.tuijian {
  width: 100%;
  text-align: center;
  margin-top: 10px;
  background-color: #eee;
}
.indextj {
  margin-top: 0.1rem;
}
.indextj-li {
  float: left;
  width: 20%;
  margin: 1% 2.5%;
}
.indnxtj-img {
  width: 100%;
}
.indexnav-text {
  margin: 0.2rem;
  font-size: 0.24rem;
}
</style>