

<template>
  <div class="head">
    <mt-header :title="title" class="title">
      <mt-button icon="back" slot="left" class="goback" @click="gotoback"></mt-button>

      <mt-button class="iconfont icon-caidan" slot="right" @click="flag=!flag"></mt-button>
    </mt-header>
    <div class="sidebarItem daohang box" v-show="flag">
      <div>
        <p class="biaoti">
          <b class="biaoti1">dr</b>
          <span class="iconfont icon-cuo cuo" @click="flag=!flag"></span>
        </p>
      </div>
      <ul class="item2">
        <li>
          <router-link :to="{name:'qiuhun'}">求婚钻戒</router-link>
          <!-- <a href="/goods/1">求婚钻戒</a> -->
        </li>
        <li>
          <router-link :to="{name:'jiehun'}">结婚对戒</router-link>
          <!-- <a href="/cpring">结婚对戒</a> -->
        </li>
        <li>
          <router-link :to="{name:'zhenai'}">真爱礼物</router-link>

          <a href="/jnr">真爱礼物</a>
        </li>
      </ul>
      <!--登陆注册等-->
      <div class="siderthebtn">
        <!--登陆了的话改为'个人中心'-->
        <router-link :to="{name:'login'} " id="is_login">
          <i class="iconfont icon-geren"></i>注册/登录
        </router-link>
        <a href class="drsqkfli">
          <i class="iconfont icon-kefu"></i>在线客服
        </a>
      </div>
      <!--登陆注册等end-->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      flag: false
    };
  },
  computed: {},
  props: ["title"],
  methods: {
    gotoback() {
      this.$router.go(-1);
    }
  }
};
</script>


<style scoped>
.head {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
}
.item2,
.biaoti,
.siderthebtn {
  background-color: #fff !important;
}
.item2 {
  margin-top: 0;
}
.item2 li {
  text-align: center;
}
.item2 li a {
  color: #9b745c !important;
  border-bottom: 1px solid #333;
  padding: 0.2rem;
  width: 60%;
  display: inline-block;
}
.siderthebtn a {
  color: #9b745c !important;
}
.goback {
  color: #333 !important;
}

.mint-header {
  background-color: #fff !important;
}

.title,
.iconfont {
  color: #333 !important;
}

#home {
  margin-right: 0.2rem;
}
.biaoti {
  margin-top: 0.2rem;
}
.biaoti1 {
  color: #9b745c !important;
  font-size: 0.8rem;
  font-family: "楷体";
}
.sidebarItem {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.cuo {
  position: absolute;
  right: 0.6rem;
  top: 0.4rem;
  font-size: 0.5rem;
  color: #9b745c !important;
}
#is_login {
  display: block;
  padding: 0.5rem;
  margin-left: 0.2rem;
  font-size: 0.4rem;
}

.drsqkfli {
  display: block;
  margin-left: 0.2rem;
  font-size: 0.4rem;
}
</style>
