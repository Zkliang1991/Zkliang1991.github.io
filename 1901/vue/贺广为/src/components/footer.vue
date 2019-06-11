<template>
  <div class="foot">
    <mt-tabbar v-model="tab">
      <mt-tab-item class="foot-item" v-for="(foot,i) in foots" :key="i" :id="foot.name">
        <mt-badge v-if="i==2" size="small" type="error" class="hot point"> {{carNum}}</mt-badge>
        <i class="iconfont" v-html="foot.icon" slot="icon"></i>
        {{foot.txt}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import { mapState ,mapActions} from "vuex";
export default {
  watch: {
    tab(newVal) {
      this.$router.push({ name: newVal });
    }
  },
  computed: {
    carNum(){
      return this.$store.state.carnum
    }
  },
  
  data() {
    return {
      tab: "name",
      foots: [
        { txt: "首页", path: "/app/home", name: "home", icon: "&#xe65b;" },
        {
          txt: "分类",
          path: "/app/classify",
          name: "classify",
          icon: "&#xe7f8;"
        },
        { txt: "购物车", path: "/app/cart", name: "cart", icon: "&#xe63a;" },
        { txt: "我", path: "/app/my", name: "my", icon: "&#xe653;" }
      ]
    };
  },
  mounted() {
    this.tab = this.$route.name;
  }
};
</script>

<style lang="scss" scoped>
.foot-item {
  position: relative;
}
.point {
  position: absolute;
  right: 20px;
  top: 5px;
}
.iconfont {
  display: block;
  height: 30px;
  font-size: 24px;
  border-radius: 50%;
}
.foot {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
}

.is-selected{
  color: red !important;
}
</style>