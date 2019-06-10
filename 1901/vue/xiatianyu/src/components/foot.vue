<template>
  <footer>
    <van-tabbar v-model="active" active-color="purple">
      <van-tabbar-item v-for="(foot,i) in foots" :key="i" :to="foot.path" @click="change(i)">
        <span>{{foot.txt}}</span>
        <i class="iconfont" slot="icon" slot-scope="props" v-html="foot.icon"></i>
      </van-tabbar-item>
    </van-tabbar>
  </footer>
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
      active: 0,
    //   icon: {
    //     normal: "//img.yzcdn.cn/icon-normal.png",
    //     active: "//img.yzcdn.cn/icon-active.png"
    //   },
      foots: [
        { txt: "首页", path: "/app/Home", name: "Home", icon: "&#xe61a;" },
        {
          txt: "分类",
          path: "/app/classify",
          name: "classify",
          icon: "&#xe7f9;"
        },
        { txt: "购物车", path: "/app/car", name: "car", icon: "&#xe707;" },
        { txt: "我", path: "/app/mine", name: "mine", icon: "&#xe61e;" }
      ]
    };
  },
  methods: {
    change(i) {
      this.active = i;
    }
  }
};
</script>
