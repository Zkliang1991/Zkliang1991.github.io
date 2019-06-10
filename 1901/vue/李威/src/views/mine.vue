<template>
  <div>
    <Header title="个人中心" :show="true"></Header>
    <Topkong></Topkong>
    <!-- ********************************** -->

    <div class="user-login" v-if="loginName">
      <!-- 图像上传 -->
      <div class="uploadimg">
        <div class="content">
          <div id="photo" class="fl">
            <img :src="userInfo.touxiang" @click.stop="updateimg" class="ohuo">
          </div>
          <input type="file" ref="one" accept="image/*" @change="shangchuan" class="hiddenInput fl">
          <button class="fl hiddenInput" @click="seen">预览</button>
          <img class="fl hiddenInput" :src="url" alt>
        </div>
      </div>
      <!-- 图像上传 -->
      <h3>欢迎{{loginName}}</h3>
    </div>
    <div class="user-login" v-else>
      <a @click="goRegister">注册</a>
      <i class="line"></i>
      <a @click="goLogin">登录</a>
    </div>
    <button
      v-if="loginName"
      class="mint-button mint-button--default mint-button--large is-plain"
      @click="loginout"
    >
      <label class="mint-button-text">注销</label>
    </button>
    <div class="user-box">
      <a class="user-item-horizontal">
        <span>我的订单</span>
        <span class="label">全部订单</span>
      </a>
    </div>
    <div class="userItem">
      <a>
        <em class="iconfont icon-daifukuan"></em>
        <span class="text">待付款</span>
      </a>
      <a>
        <em class="iconfont icon-daichengtuan"></em>
        <span class="text">待成团</span>
      </a>
      <a>
        <em class="iconfont icon-daishouhuo"></em>
        <span class="text">待收货</span>
      </a>
      <a>
        <em class="iconfont icon-tuikuan"></em>
        <span class="text">退款/售后</span>
      </a>
    </div>
    <div class="userItems">
      <a class="user-item-horizontal">
        <span>我的优惠券</span>
      </a>
      <a class="user-item-horizontal">
        <span>我的收藏</span>
      </a>
      <a class="user-item-horizontal">
        <span>我的拼团</span>
      </a>
      <a class="user-item-horizontal">
        <span>我的免单券</span>
        <span class="label">0张</span>
      </a>
      <a class="user-item-horizontal">
        <span>借钱</span>
        <span class="label">新用户免费领1000元</span>
      </a>
    </div>
    <div class="userItems">
      <a class="user-item-horizontal">
        <span>客服中心</span>
      </a>
      <a class="user-item-horizontal">
        <span>关于山脉户外</span>
      </a>
    </div>
    <!-- ********************************** -->

    <Buttonkong></Buttonkong>
  </div>
</template>

<script>
import Topkong from "../components/top-kong.vue";
import Buttonkong from "../components/button-kong.vue";
export default {
  components: {
    Topkong,
    Buttonkong
  },
  data() {
    return {
      loginName: localStorage.username || "",
      userInfo: {
        touxiang: require("../assets/images/photo.png")
      },
      url: "",
    };
  },
  methods: {
    goLogin() {
      this.$router.push({ name: "login" });
    },
    goRegister() {
      this.$router.push({ name: "register" });
    },
    loginout() {
      delete localStorage["username"];
      this.$router.push({ name: "login" });
    },
    seen() {
      var userInfo = JSON.parse(localStorage.userInfo);
      this.url = userInfo.icon.replace(/public/, "http://localhost:1901");
    },
    updateimg() {
      console.log("上传图片");
      // this.$el.querySelector('.hiddenInput').click() // 执行 input change
      this.$refs.one.click();
    },
    // 将头像显示
    shangchuan(e) {
      let $target = e.target || e.srcElement;
      let file = $target.files[0];
      console.log(file);
      console.log(this.$refs.one.files[0]);
      let data = new FormData(); // 构建表单数据对象
      data.append("avatar", file); // 需要上传到 服务器 的数据
      data.append("like", "wh1901");


      this.$axios({
        url: "vue/upload-avatar",
        method: "POST",
        contentType: false,
        processData: false,
        data: data,
      }).then(res => {
        console.log(res);
        this.userInfo.touxiang = res.data.imgUrl.replace(
          /public/,
          "http://localhost:1901"
        );
        localStorage.userInfo = JSON.stringify({ avatar: res.data.imgUrl });
      });
    }
  },
};
</script>

<style scoped>
.fl {
  float: left;
}
.content {
  width: 80%;
  margin: auto;
}
.uploadimg img {
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
}
.uploadimg .hiddenInput {
  display: none;
}
h3 {
  font-size: 0.5rem;
  color: #fff;
  width: 60%;
  float: left;
}
.user-login {
  position: relative;
  font-size: 0;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  background: #0e7c5b;
}
.user-login a {
  display: inline-block;
  font-size: 0.4rem;
  padding-left: 0.96rem;
  padding-right: 0.96rem;
  color: #fff;
}
.line {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 0.4rem;
  width: 0.04rem;
  background-color: #fff;
  transform: translate(-50%, -50%);
}
.user-box a {
  display: block;
  position: relative;
  height: 0.96rem;
  line-height: 0.96rem;
  padding: 0 0.59733rem 0 0.768rem;
  font-size: 0.3rem;
  background-color: #fff;
  color: #333;
  box-sizing: border-box;
  overflow: hidden;
}
.label {
  margin-right: 0.16rem;
  float: right;
  color: #999;
}
.userItem {
  padding-top: 0.3rem;
  padding-bottom: 0.24rem;
  font-size: 0;
  background-color: #fff;
}
.userItem a {
  position: relative;
  display: inline-block;
  width: 25%;
  font-size: 0.24rem;
  color: #666;
  text-align: center;
  vertical-align: top;
}
.userItem .iconfont {
  display: block;
  margin: 0 auto;
  margin-bottom: 0.12rem;
  font-size: 0.56rem;
}
.userItems {
  margin-top: 0.2rem;
}
.userItems a {
  position: relative;
}
.user-item-horizontal {
  display: block;
  height: 0.96rem;
  line-height: 0.96rem;
  padding: 0 0.59733rem 0 0.768rem;
  font-size: 0.3rem;
  background-color: #fff;
  color: #333;
  box-sizing: border-box;
  overflow: hidden;
}
.user-item-horizontal:after {
  content: "";
  position: absolute;
  left: 0.59733rem;
  right: 0.59733rem;
  bottom: 0;
  height: 0.04rem;
  background-color: #ebebeb;
  transform: scaleY(0.5);
}
</style>

