<template>
  <div>
    <mt-tabbar v-model="tab">
      <mt-tab-item v-for="(foot,i) in foots" :key="i" :id="foot.name">
        <mt-badge v-if="i==2" size="small" type="error" class="hot">{{goodsInfo.goods.length}}</mt-badge>
        <i class="iconfont" :class="foot.icon" slot="icon"></i>
        {{foot.txt}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
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
    },
    ...mapState(["goodsInfo"])
  },
  data() {
    return {
      // tab: "home",
      foots: [
        { txt: "首页", path: "/app/home", name: "home", icon: "icon-shouye" },
        {
          txt: "分类",
          path: "/app/classify",
          name: "classify",
          icon: "icon-fenlei"
        },
        {
          txt: "我的书架",
          path: "/app/cart",
          name: "cart",
          icon: "icon-shujia"
        },
        { txt: "个人中心", path: "/app/my", name: "my", icon: "icon-icon7" }
      ]
    };
  },
  mounted() {
    // console.log(this.$route)
    // this.tab = this.$route.name;
    this.$store.commit("getTab", this.$route.name);
  }
};
</script>
<style lang="scss" scoped>
.iconfont {
  font-size: 0.5rem;
}
.hot {
  position: absolute;
  top: 0;
  left: 62%;
  display: inline;
  width: 0.25rem;
}
.mint-tabbar {
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>
