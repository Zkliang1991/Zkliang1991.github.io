<template>
  <div>
    <mt-tabbar v-model="tab" :fixed="true">
      <mt-tab-item v-for="(foot,i) in foots" :key="i" :id="foot.name" :href="foot.path">
        <i class="iconfont" v-html="foot.icon" slot="icon"></i>
        {{foot.txt}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tab: "home",
      foots: [
        { txt: "首页", path: "/#/index/home", name: "home", icon: "&#xe6b8;" },
        {
          txt: "分类",
          path: "/#/index/classify",
          name: "classify",
          icon: "&#xe6e2;"
        },
        { txt: "购物车", path: "/#/index/car", name: "car", icon: "&#xe6af;" },
        { txt: "我", path: "/#/index/my", name: "my", icon: "&#xe736;" }
      ]
    };
  },
  mounted() {
    this.tab = this.$route.name;
  }
};
</script>
<style scoped>
  div{
    color:brown;
  }
  a{
    color:black;
  }
  i{
    color:red;
    font-size: .4rem;
  }
  .is-selected{
    border-bottom:0 !important;
    color:red;
  }
  
</style>
