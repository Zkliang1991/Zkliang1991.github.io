<template>
  <div>
    <div v-if="checkLogin" class="userinfo">
      <div class="userimg">
        <div id="photo">
          <img :src="userInfo.touxiang" @click.stop="updateimg" class="ohuo">
        </div>
        <input type="file" accept="image/*" @change="shangchuan" class="hiddenInput">
      </div>
      <p class="username">{{ username }}</p>
      <i class="iconfont icon-xiaoxi"></i>
      <i class="iconfont icon-shezhi1" @click="options"></i>
    </div>
    <div v-else class="userinfo">
      <van-button plain type="danger" @click="gotoLogin">马上登陆</van-button>
    </div>
    <van-row class="user-links" type="flex" justify="space-around">
      <van-col span="4">
        <van-icon class="iconfont icon-send"/>待付款
      </van-col>
      <van-col span="4">
        <van-icon class="iconfont icon-goods"/>待发货
      </van-col>
      <van-col span="4">
        <van-icon class="iconfont icon-deliver"/>待签收
      </van-col>
      <van-col span="4">
        <van-icon class="iconfont icon-form_light"/>待评价
      </van-col>
      <van-col span="4">
        <van-icon class="iconfont icon-service_light"/>退换售后
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="全部订单" is-link/>
    </van-cell-group>

    <van-row class="user-links" type="flex" justify="space-around">
      <van-col span="5" style="lineHeight:.5rem">
        <van-icon class="iconfont icon-favor"/>我的收藏
      </van-col>
      <van-col span="5" style="lineHeight:.5rem">
        <van-icon class="iconfont icon-location" @click="toMydz"/>收货地址
      </van-col>
      <van-col span="5" style="lineHeight:.5rem">
        <van-icon class="iconfont icon-attention_light"/>浏览历史
      </van-col>
      <van-col span="5" style="lineHeight:.5rem">
        <van-icon class="iconfont icon-choiceness"/>我的会员
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup } from "vant";
export default {
  data() {
    return {
      checkLogin: false,
      username: "",
      userInfo: {
        touxiang: require("../assets/images/userimg.jpg")
      }
    };
  },
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  methods: {
    gotoLogin() {
      this.$router.push({ name: "login" });
    },
    options() {
      this.$router.push({ name: "options" });
    },
    toMydz() {
      this.$router.push({ name: "mydz" });
    },
    updateimg() {
      this.$el.querySelector(".hiddenInput").click();
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
        headers: {
          "content-type": "multipart/form-data"
        }
      });
    }
  },
  mounted() {
    if (window.sessionStorage.username) {
      this.checkLogin = true;
      this.username = window.sessionStorage.username;
    } else {
      this.checkLogin = false;
    }
  }
};
</script>

<style lang="less">
.user {
  &-poster {
    width: 100%;
    height: 53vw;
    display: block;
  }
  &-group {
    margin-bottom: 15px;
  }
  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
.userinfo {
  width: 100%;
  height: 3rem;
  color: #fff;
  background: url(../assets/images/bgc1.jpg) no-repeat;
  background-position: 100%;
  button {
    width: 2rem;
    height: 0.7rem;
    line-height: 0.7rem;
    border-radius: 0.2rem;
    margin-top: 1.2rem;
    margin-left: 2.8rem;
  }
  .userimg {
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    border: 2px solid #fff;
    margin-top: 0.6rem;
    margin-left: 0.6rem;
    float: left;
    img {
      width: 1.3rem;
      height: 1.3rem;
      border-radius: 50%;
    }
  }
  .username {
    float: left;
    line-height: 2.5rem;
    margin-left: 0.4rem;
  }
  i {
    float: right;
    font-size: 0.4rem;
    margin-right: 0.2rem;
    margin-top: 0.25rem;
  }
  .hiddenInput {
    display: none;
  }

}
</style>