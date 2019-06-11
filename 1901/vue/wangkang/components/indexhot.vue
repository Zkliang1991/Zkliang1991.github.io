<template>
  <div class="indexhot">
    <h3>-----热门专题-----</h3>
    <h6>HOT TOPIC</h6>
    <van-notice-bar
      text="-----销量领先的必买精品,这个夏天别错过!-----销量领先的必买精品,这个夏天别错过!-----"
      left-icon="volume-o"
    />
    <p class="hotimage">
      <img :src="hotimage" alt>
    </p>
    <ul class="indexhot-ul">
      <li class="indexhot-li" v-for="(img,i) in indexhot" :key="i">
        <img :src="img.img" class="indnxhot-img">
        <p class="indexnav-text">{{img.text}}</p>
        <p class="indexnav-price">{{img.price}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "indnxhot",
  data() {
    return {
      hotimage: require("../assets/images/indexhot.jpg"),
      indexhot: [
        {
          img: require("../assets/images/coffee.jpg"),
          text: "咖啡",
          price: "¥123"
        },
        {
          img: require("../assets/images/coffee.jpg"),
          text: "咖啡",
          price: "¥123"
        },
        {
          img: require("../assets/images/coffee.jpg"),
          text: "咖啡",
          price: "¥123"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
h3 {
  text-align: center;
}
h6 {
  text-align: center;
  color: #aaa;
  font-size: 0.2rem;
}
.hotimage {
  width: 100%;
  height: 3rem;
  margin-bottom: 2rem;
  img {
    width: 100%;
  }
}
.indexhot-ul {
  overflow: hidden;
  width: 100%;
  .indexhot-li {
    float: left;
    width: 30%;
    margin: 0 1.66%;
    .indnxhot-img {
      width: 100%;
    }
    .indexnav-text {
      font-size: 20px;
      text-align: center;
      color: cadetblue;
    }
    .indexnav-price {
      font-size: 14px;
      text-align: center;
      color: brown;
    }
  }
}
</style>