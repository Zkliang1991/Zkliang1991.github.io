<template>
  <div class="nav">
    <ul v-for="(img,i) in indexnav" :key="i" class="indexnav">
      <li class="indexnav-li">
        <img :src="img.img" class="indnxnav-img">
        <p class="indexnav-text">{{img.text}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "indnxnav",
  data() {
    return {
      indexnav: [
        {
          img: "https://img3.yesmyimg.com/2015/11/15/20151215121224712.png",
          text: "拿货立减"
        },
        {
          img: "https://img2.yesmyimg.com/2015/11/15/20151215121230660.png",
          text: "分销商"
        },
        {
          img: "https://img1.yesmyimg.com/2015/11/15/20151215121259660.png",
          text: "每日新品"
        },
        {
          img: "https://img1.yesmyimg.com/2018/3/4/20180404165539362.png",
          text: "商品分类"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 100px;
  margin-top: 10px;
  text-align: center;
  background-color: #eee;
}
.indexnav ul {
  width: 100%;
  overflow: hidden;
  height: 100px;
  margin-top: 10px;
}
.indexnav-li {
  float: left;
  width: 25%;
  height: 100px;
}
.indnxnav-img {
  width: 60%;
  padding: 0 20%;
  border-radius: 50%;
  margin-top: 0.2rem;
}
.indexnav-text {
  margin-top: 0.1rem;
  color: purple;
}
</style>
