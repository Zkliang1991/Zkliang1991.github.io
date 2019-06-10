<template>
  <div id="app">
    <router-view class="box"></router-view>
    <div class="gouwuche" @click="gotoshop"></div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.gouwuche {
  position: fixed;
  top: 50%;
  right: 0;
  margin: auto;
  font-size: 5rem;
  width: 0.8rem;
  height: 0.8rem;
  background: url(./assets/1.png);
  background-size: 100%;
  color: red;
}
</style>
<script>
import { Dialog } from "vant";

export default {
  methods: {
    gotoshop() {
      var token = window.sessionStorage.userInfo;
      if (token) {
        this.$router.push({ name: "shoppingcar" });
      } else {
        Dialog.confirm({
          title: "提醒",
          message: "亲，您还未登录，是否立即登陆?"
        })
          .then(() => {
            console.log(this.goodId);
            window.sessionStorage.goodId = this.goodId;
            window.sessionStorage.url = this.$route.name;
            window.sessionStorage.goodname = this.goodname;
            this.$router.push({ name: "login" });
          })
          .catch(() => {
            // on cancel
          });
      }
      window.sessionStorage.url = "";
    }
  }
};
</script>

