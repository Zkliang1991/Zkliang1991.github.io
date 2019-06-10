<template>
  <div>
    <div class="spaceBox"></div>
    <van-tabbar v-model="active" route fixed>
      <van-tabbar-item name="home" to="/index/home">
        <i slot="icon" class="iconfont">&#xe601;</i>
        <p>首页</p>
      </van-tabbar-item>
      <van-tabbar-item name="shoplist" dot to="/index/shoplist">
        <i slot="icon" class="iconfont">&#xe674;</i>
        <p>分类</p>
      </van-tabbar-item>
      <van-tabbar-item name="shopcar" :info="num" @click="gogogo2">
        <i slot="icon" class="iconfont">&#xe676;</i>
        <p>购物袋</p>
      </van-tabbar-item>
      <van-tabbar-item name="mine" dot @click="gogogo">
        <i slot="icon" class="iconfont">&#xe604;</i>
        <p>个人中心</p>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      num: 0,
      flag: 0,
      username: ""
    };
  },
  methods: {
    gogogo() {
      if (this.flag == 1) {
        this.$router.push({
          name: "mine",
          params: { username: this.username }
        });
      }
      if (this.flag == 2) {
        this.$router.push({ name: "login" });
      }
    },
    gogogo2() {
      if (this.flag == 1) {
        this.$router.push({ name: "shopcar" });
      }
      if (this.flag == 2) {
        this.$router.push({ name: "login" });
      }
    }
  },
  mounted() {
    if (sessionStorage.userInfo) {
      this.flag = 1;
      this.$axios.get("/vue/shopcarnum").then(res => {
        var resultArr = res.data.result;
        this.num = resultArr.length;
        this.username = res.data.username;

        console.log(this.username);
      });
    } else {
      this.flag = 2;
      this.num = 0;
    }
    console.log(this.$route);
    if (this.$route.name == "home") {
      this.active = 0;
    }
    if (this.$route.name == "shoplist") {
      this.active = 1;
    }
    if (this.$route.name == "shopcar") {
      this.active = 2;
    }
    if (this.$route.name == "mine") {
      this.active = 3;
    }
  }
};
</script>


<style lang="scss" scoped>
.spaceBox {
  height: 50px;
}
</style>

