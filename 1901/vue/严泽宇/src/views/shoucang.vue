<template>
  <div class="box">
    <Head headTitle="收藏夹" :flag="true"></Head>
    <div class="userbgc">
      <img class="userimg" src="../assets/images/Pikachu.jpg" alt>
      <!-- <p>{{username}}</p> -->
    </div>
    <div v-for="(item,index) in shops" :key="index">
      <van-card
        v-if="item.good"
        :title="item.good.name"
        :desc="item.good.price*59+'人以收藏'"
        :price="formatPrice(item.good.price)"
        :thumb="item.good.img"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shops: []
    };
  },
  methods: {
    formatPrice(price) {
      return price.toFixed(2);
    }
  },
  mounted() {
    this.$axios.get("/vue/shoucang").then(res => {
      var resultArr = res.data.result;
      this.shops = resultArr;
      console.log(this.shops);
    });
  }
};
</script>


<style lang="scss" scoped>
.userbgc {
  width: 100%;
  height: 4rem;
  background-image: url(../assets/images/bgc1.jpg);
  background-size: 100% 100%;
  position: relative;
}
.userbgc p {
  width: 50%;
  text-align: center;
  font-size: 26px;
  position: absolute;
  top: 60%;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
}
.userimg {
  border-radius: 50%;
  position: absolute;
  top: -30%;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
}
.box {
  position: relative;
}
.van-card {
  padding: 10px 5%;
  margin-bottom: 10px;
}
.van-card__title {
  width: 88%;
}
.van-card__desc {
  margin: 10px 0;
}
.van-uploader {
  width: 100%;
  height: 100%;
}
</style>
