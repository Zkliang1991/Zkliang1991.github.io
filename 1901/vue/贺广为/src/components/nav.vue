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
          text: "一键选酒"
        },
        {
          img: "https://img2.yesmyimg.com/2015/11/15/20151215121230660.png",
          text: "百元专区"
        },
        {
          img: "https://img1.yesmyimg.com/2015/11/15/20151215121259660.png",
          text: "top榜"
        },
        {
          img: "https://img1.yesmyimg.com/2018/3/4/20180404165539362.png",
          text: "超值整箱"
        },
        {
          img: "https://img1.yesmyimg.com/2015/11/15/20151215121259660.png",
          text: "名庄甄选"
        }
      ]
    };
  }
};
</script>

<style scoped>
.nav {
  height: 2rem;
  margin-top: 0.1rem;
  text-align: center;
  background-color: #fff;
}
.indexnav ul {
  overflow: hidden;
  height: 2rem;
  margin-top: 10px;
}
.indexnav-li {
  float: left;
  width: 20%;
  height: 2rem;
}
.indnxnav-img {
  width: 60%;
  padding: 0 20%;
  border-radius: 50%;
  margin-top: 0.2rem;
}
.indexnav-text {
  margin-top: 0.1rem;
  color: rgb(56, 56, 56);
}
</style>