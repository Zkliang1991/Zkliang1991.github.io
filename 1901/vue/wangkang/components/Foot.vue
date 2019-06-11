<template>
  <div class="foot">
    <mt-tabbar v-model="active">
      <mt-tab-item v-for="(foot,i) in foots" :key="i" :id="foot.name" class="foot-item">
        <mt-badge v-if="i==2" size="small" type="error" class="point">{{carNum}}</mt-badge>
        <i class="iconfont" v-html="foot.icon"></i>
        <p>{{foot.txt}}</p>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>



<script>
import { mapState,mapActions } from 'vuex';
export default {
  name: "foot",
  data() {
    return {
      active: "home",
      foots: [
        { txt: "首页", path: "/home", name: "home", icon: "&#xe61a;" },
        {
          txt: "商品",
          path: "/classify",
          name: "classify",
          icon: "&#xe6a3;"
        },
        { txt: "购物车", path: "/newcar", name: "newcar", icon: "&#xe618;" },
        { txt: "我", path: "/minecenter", name: "minecenter", icon: "&#xe696;" }
      ]
    };
  },
  mounted() {
    this.active = this.$route.name;
  },
  watch: {
    active(newVal) {
      this.$router.push({ name: newVal });
    }
  },
  computed:{
    carNum(){
      return this.$store.state.carNum;
    }
  }
};
</script>

<style scoped>
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
  z-index:999;
}
.is-selected {
  color: brown !important;
}
</style>