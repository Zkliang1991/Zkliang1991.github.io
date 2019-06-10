

<template>
  <div>
    <div>
      <ul class="box">
        <li class="photo">
          <div id="photo">
            <img :src="userInfo.touxiang" @click.stop="updateimg" class="ohuo">
          </div>
          <input type="file" ref="one" accept="image/*" @change="shangchuan" class="hiddenInput">
        </li>
        <li class="user">
          <p>{{username}}</p>
          <span @click="gotologin" v-if="flag">登录</span>
        </li>
        <li class="icon">
          <van-icon name="setting-o" color="yellow" @click="gotoexit"/>
        </li>
      </ul>

      <van-row class="user-links">
        <van-col span="6">
          <van-icon name="sign"/>签到
        </van-col>
        <van-col span="6">
          <van-icon name="after-sale"/>优惠卷
        </van-col>
        <van-col span="6">
          <van-icon name="star-o"/>关注
        </van-col>
        <van-col span="6">
          <van-icon name="flower-o"/>足迹
        </van-col>
      </van-row>
      <div></div>

      <van-cell-group class="user-group">
        <van-cell title="全部订单" is-link/>
        <van-row class="user-links">
          <van-col span="6">
            <van-icon name="pending-payment" @click="gotopayment"/>待付款
          </van-col>
          <van-col span="6">
            <van-icon name="records"/>待发货
          </van-col>
          <van-col span="6">
            <van-icon name="tosend"/>待收货
          </van-col>
          <van-col span="6">
            <van-icon name="logistics"/>评价
          </van-col>
        </van-row>
      </van-cell-group>

      <van-cell-group class="user-group">
        <van-cell title="我的购物记录" @click="gotohistory" is-link/>
        <van-cell title="我的优惠券" is-link/>
        <van-cell title="收货地址" is-link @click="gotoaddress"/>
        <van-cell title="留言反馈" is-link/>
        <van-cell title="帮助" is-link/>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: this.$store.state.username,
      flag: true,
      userInfo: {
        touxiang: require("../assets/images/Pikachu.jpg")
      }
    };
  },
  methods: {
    gotologin() {
      this.$router.push({ name: "login" });
    },
    gotoaddress() {
      this.$router.push({ name: "addresslist" });
    },
    gotoexit() {
      this.$router.push({ name: "exit" });
    },
    gotohistory() {
      this.$router.push({ name: "shophistory" });
    },
    gotopayment() {
      this.$router.push({ name: "payment" });
    },
    updateimg() {
      this.$el.querySelector(".hiddenInput").click();
      this.$refs.one.click();
    },
    // 将头像显示
    shangchuan(e) {
      let $target = e.target || e.srcElement;
      let file = $target.files[0];
      var reader = new FileReader();
      reader.onload = data => {
        let res = data.target || data.srcElement;
        this.userInfo.touxiang = res.result;
      };
      reader.readAsDataURL(file);

      let data = new FormData();
      data.append("avatar", file);
      this.$axios.post("/vue/upload-avatar", data, {
        headers: { "content-type": "multipart/form-data" }
      });
    }
  },
  mounted() {
    if (this.username) {
      this.flag = false;
    } else {
      this.flag = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 3rem;
  background-color: red;
  overflow: hidden;
  text-align: center;
  background-image: url("../assets/images/bg.jpg");
  li {
    float: left;
  }
  .icon {
    widows: 0.5rem;
    height: 0.5rem;
    font-size: 24px;
    float: right;
    margin-right: 0.1rem;
    margin-top: 0.1rem;
  }
  .user {
    width: 50%;
    height: 100%;
    line-height: 2rem;
    font-size: 24px;
    color: #fff;
  }
}
.photo {
  width: 2rem;
  height: 2rem;
  border: 4px solid yellow;
  border-radius: 50%;
  background-color: #fff;
  margin-top: 0.4rem;
  margin-left: 0.5rem;
  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }
  .hiddenInput {
    display: none;
  }
}
.user-poster {
  width: 100%;
  height: 53vw;
  display: block;
}
.user-group {
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: left;
}
.user-links {
  padding: 15px 0;
  font-size: 12px;
  text-align: center;
  background-color: #fff;
  .van-icon {
    display: block;
    font-size: 24px;
  }
}
</style>

