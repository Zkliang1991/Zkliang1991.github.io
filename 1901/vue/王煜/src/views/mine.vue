<template>
  <div>
    <mt-header title="我的" class="mt_tou">
      <router-link to="/" slot="right">
        <mt-button>
          <van-icon name="envelop-o"/>
        </mt-button>
      </router-link>
    </mt-header>
    <!-- <van-row>
      <van-col span="24" style="font-size:24px;height:2rem;width:100%" v-html="msg"></van-col>
    </van-row>-->

    <van-button plain type="default" size="large" id="login" @click="login">
      <p style="font-size:16px;">点击登录</p>
    </van-button>
    <!-- <div id="photo">
      <img :src="userImg.touxiang" @click.stop="updateimg" class="ohuo">
    </div>
    <input type="file" ref="one" accept="image/*" @change="shangchuan" class="hiddenInput">-->
    <van-notice-bar mode="link">
      <van-icon name="vip-card"/>
      <span style="margin-left:5px;color:#333;">开通VIP会员</span>
    </van-notice-bar>
    <van-row style="text-align:center;background-color:white;margin-top:0.1rem;">
      <van-col span="8">
        <van-button type="primary" icon="send-gift-o">我的教程库</van-button>
      </van-col>
      <van-col span="8">
        <van-button type="warning" icon="star-o">我的课程</van-button>
      </van-col>
      <van-col span="8">
        <van-button icon="star-o" type="primary">我的笔记</van-button>
      </van-col>
    </van-row>
    <!-- <van-cell
      style="margin-top:0.1rem;"
      title="我的账户"
      right-text="充值"
      icon="pending-payment"
      is-link
    />-->
    <!-- 不登录不显示充值 -->
    <van-cell style="margin-top:0.1rem;" value="充值" icon="pending-payment" is-link>
      <template slot="title">
        <span class="custom-text">我的账户</span>
        <!-- <van-tag type="danger">标签</van-tag> -->
      </template>
    </van-cell>
    <van-cell title="我的订单" icon="orders-o" is-link/>
    <van-cell title="兑换中心" icon="idcard" is-link/>
    <van-cell style="margin-top:0.1rem;" title="我的证书" icon="coupon-o" is-link/>
    <van-cell title="我的勋章" icon="medel-o" is-link/>
    <van-cell style="margin-top:0.1rem;" title="我关注的讨论区" icon="idcard" is-link/>
    <van-cell style="margin-top:0.1rem;" title="意见反馈" icon="idcard" is-link/>
    <van-cell title="分享给好友" icon="idcard" is-link/>
    <van-cell title="设置" icon="idcard" is-link/>
  </div>
</template>
<script>
export default {
  // created() {
  //   if (window.sessionStorage.userName) {
  //     this.userImg.touxiang =
  //   }
  // },
  data() {
    return {
      userImg: {
        touxiang: JSON.parse(sessionStorage.userTX).usertx
      },
      url: "",
      msg: `<h2 @click="login">点击登录</h2>`
    };
  },
  methods: {
    login() {
      this.$router.push({ name: "login" });
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
        url: "/vue/upload-avatar",
        method: "POST",
        contentType: false,
        processData: false,
        data: data
      }).then(res => {
        console.log(res);
        this.userImg.touxiang = res.data.imgUrl.replace(
          /public/,
          "http://localhost:1901"
        );
        localStorage.userImg = JSON.stringify({ avatar: res.data.imgUrl });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mt_tou {
  background-color: #fff;
  color: #333;
  font-size: 20px;
  font-weight: bold;
}
#login {
  border: 0;
  background-color: #eee;
  .login-text {
    width: 100%;
    height: 100%;
  }
}
#photo {
  width: 2rem;
  height: 2rem;
  // margin-top: 1rem;
  margin-left: 0.5rem;
  img {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
  }
}
.hiddenInput {
  width: 100px;
  height: 100px;
  display: none;
}
</style>

