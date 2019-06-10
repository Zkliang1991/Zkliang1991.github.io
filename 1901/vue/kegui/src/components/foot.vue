<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item v-for="(foot,i) in foots" :key="i" :id="foot.name" :icon="foot.icon"
      :to="{path:foot.path}"
      >{{foot.txt}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  watch: {
    tab(newVal) {
      this.$router.push({ name: newVal });
    }
  },
  computed: {
    tab: {
      get() {
        return this.$store.state.tab;
      },
      set(v) {
        this.$store.commit("getTab", v);
      }
    }
  },
  data() {
    return {
      active: 0,
      foots: [
        { txt: "首页", path: "/app/home", name: "home",text:'首页', icon: "home-o" },
        {
          txt: "分类",
          path: "/app/classify",
          name: "classify",
          icon: "search",
          text:'首页'
        },
        { txt: "购物车", path: "/app/cart", name: "cart",text:'首页', icon: "friends-o" },
        { txt: "我的", path: "/app/my", name: "my",text:'首页', icon: "setting-o" }
      ]
    };
  },
  mounted() {
    
    // this.tab = this.$route.name;
    this.$store.commit("getTab", this.$route.name);
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

