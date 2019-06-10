<template>
  <div>
    <mt-tabbar v-model="tab" :fixed="true">
      <mt-tab-item v-for="(foot,i) in foots" :key="i" :id="foot.name">
        <i class="iconfont" v-html="foot.icon" slot="icon"></i>
        {{foot.txt}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  watch: {
    tab(newVal) {
      this.$router.push({ name: newVal });
    }
  },
  data() {
    return {
      tab: "home",
      foots: [
        { txt: "首页", path: "/app/home", name: "home", icon: "&#xe6c9;" },
        { txt: "教程库", path: "/app/fcous", name: "fcous", icon: "&#xe60d;" },
        { txt: "会员", path: "/app/zuan", name: "zuan", icon: "&#xe636;" },
        { txt: "课程", path: "/app/msg", name: "msg", icon: "&#xe630;" },
        { txt: "我的", path: "/app/mine", name: "mine", icon: "&#xe614;" }
      ],
      true: true,
    };
  },
  // props:{
  //   title:String,
  //   show:Boolean
  // },
  mounted() {
    console.log(this.$route);
    this.tab = this.$route.name;
  }
};
</script>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>

