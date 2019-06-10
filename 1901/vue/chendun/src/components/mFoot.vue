<template>
  <div>
    <van-tabbar v-model="tab">
      <van-tabbar-item v-for="(foot,i) in foots" :key="i" :id="foot.name">
        <i class="iconfont" v-html="foot.icon" slot="icon"></i>
        {{foot.txt}}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  watch: {
    tab(newVal) {
      var result;
      if (newVal === 0) {
        result = "home";
      }
      if (newVal === 1) {
        result = "classify";
      }
      if (newVal === 2) {
        result = "cart";
      }
      if (newVal === 3) {
        result = "my";
      }
      this.$router.push({ name: result });
    }
  },
  computed: {
    tab: {
      get() {
        // if(this.$store.state.tab == "classify"){
        //   console.log(this.$store.state.tab);
        return this.$store.state.tab;
        //}
      },
      set(v) {
        this.$store.commit("getTab", v);
      }
    },
    ...mapState(["carNum"])
  },

  data() {
    return {
      foots: [
        { txt: "首页", path: "/app/home", name: "home", icon: "&#xe619;" },
        {
          txt: "分类",
          path: "/app/classify",
          name: "classify",
          icon: "&#xe778;"
        },
        { txt: "购物车", path: "/app/cart", name: "cart", icon: "&#xe614;" },
        { txt: "个人中心", path: "/app/my", name: "my", icon: "&#xe60c;" }
      ]
    };
  },
  mounted() {
    if (this.$route.name == "home") {
      this.tab = 0;
    }
    if (this.$route.name == "classify") {
      this.tab = 1;
    }
    if (this.$route.name == "cart") {
      this.tab = 2;
    }
    if (this.$route.name == "my") {
      this.tab = 3;
    }
  },
  updated() {
    if (this.$route.name == "home") {
      this.tab = 0;
    }
    if (this.$route.name == "classify") {
      this.tab = 1;
    }
    if (this.$route.name == "cart") {
      this.tab = 2;
    }
    if (this.$route.name == "my") {
      this.tab = 3;
    }
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

