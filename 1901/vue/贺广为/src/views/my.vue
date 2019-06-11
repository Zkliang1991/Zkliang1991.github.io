<template>
  <div>
    <div class="account">
      <div class="account-top cl">
        <span class="my-account">我的账户</span>
        <div class="account-icon cl">
          <van-icon class="account-icon1" name="chat-o"/>
          <van-icon class="account-icon2" name="setting-o"/>
        </div>
      </div>
      <div class="userinfo">
        <div class="userhead">
          <i class="portrait"></i>
        </div>
        <div class="username">
          <i class="usertu"></i>
          <p class="p">{{loginname}}</p>
          <el-button type="primary" size="mini" @click="esclogin()">{{btn}}</el-button>
        </div>
      </div>
    </div>
    <Mycontent></Mycontent>
    <Footer></Footer>
  </div>
</template>


<script>
import { Indicator, Toast } from "mint-ui";
import Mycontent from "../components/mycontent.vue";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      imgs: [
        require("@/assets/images/img1.jpg"),
        require("@/assets/images/img2.jpg"),
        require("@/assets/images/img3.jpg"),
        require("@/assets/images/img4.jpg")
      ],
      banner: []
    };
  },
  components: {
    Mycontent
  },
  methods: {
    esclogin() {
      if (window.localStorage.getItem("loginname")) {
        window.localStorage.removeItem("loginname");
        this.$router.push({name:"login"})
      } else {
        this.$router.push({name:"login"})
      }
    }
  },
  computed: {
    loginname: {
      get() {
        if (window.localStorage.getItem("loginname")) {
          return window.localStorage.getItem("loginname");
        } else {
          return "未登录,点击登录";
        }
      },
    },
    btn:{
      get(){
        if (window.localStorage.getItem("loginname")) {
          return "退出登录"
        } else {
          return "点击登录";
        }
      }
    }
  }
};
</script>
<style scoped lang="scss">
.account {
  background-color: #f00;
  color: #fff;
  // height: 2rem;
  .account-top {
    padding-top: 0.4rem;
    padding-left: 0.2rem;
    .my-account {
      float: left;
    }
    .account-icon {
      float: right;
      .account-icon1 {
        // display: inline-block;
        margin: 0 0.2rem;
      }
      .account-icon2 {
        margin-right: 0.2rem;
      }
    }
  }
  .userinfo {
    padding-bottom: 0.1rem;
    .userhead {
      text-align: center;
      .portrait {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background-color: #000;
      }
    }
  }
  .username {
    text-align: center;
  }
}
.slide,
.swiper-img {
  width: 100%;
  height: 4rem;
}
</style>