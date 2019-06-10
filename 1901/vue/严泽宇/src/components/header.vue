<template>
  <div>
    <div class="big">
      <van-nav-bar :title="headTitle" left-arrow :fixed="true">
        <div slot="left">
          <i class="iconfont icon1" v-show="!flag">&#xe697;</i>
          <i class="van-icon van-icon-arrow-left" v-show="flag" @click="gotoback(-1)"></i>
          <!-- <span class="van-nav-bar__text" v-show="flag">返回</span> -->
        </div>
        <div slot="title" v-if="searchShow">
          <van-search placeholder="请输入搜索关键词" v-model="value" @click="goSearch"/>
        </div>
        <i slot="right" class="iconfont icon1" v-show="!flag">&#xe671;</i>
        <i slot="right" class="iconfont icon1" v-show="flag">&#xe698;</i>
      </van-nav-bar>
    </div>
    <div class="spaceBox"></div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      value: ""
    };
  },
  props: {
    headTitle: String,
    flag: Boolean,
    searchShow: Boolean
  },
  methods: {
    ...mapMutations(["gotoback", "goSearch"])
  }
};
</script>

<style lang="scss" scoped>
.big {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
i {
  font-size: 24px;
}
.icon1 {
  display: block;
  font-size: 24px;
}
.van-nav-bar {
  overflow: hidden;
}
.van-search__content {
  height: 32px;
  border-radius: 30px;
}
.van-search {
  padding: 0;
  margin-top: 8px;
}
.van-cell {
  padding-right: 0;
}
.van-nav-bar__title {
  max-width: 70%;
}
.spaceBox {
  height: 46px;
}
</style>

