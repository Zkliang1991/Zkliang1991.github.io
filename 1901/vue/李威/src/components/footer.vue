<template>
  <footer>
    <mt-tabbar v-model="selected">
      <mt-tab-item :id="foot.name" v-for="(foot,i) in foots" :key="i">
        <mt-badge v-if="i==2" size="small" type="error" class="hot">{{carNum}}</mt-badge>
        <i class="iconfont ft" v-html="foot.icon" slot="icon"></i>
        <span>{{foot.txt}}</span>
      </mt-tab-item>
    </mt-tabbar>
  </footer>
</template>

<script>
export default {
  computed:{
		carNum(){
			return this.$store.state.carNum
    },
    selected:{
      get(){
        return this.$store.state.selected;
      },
      set(val){
        this.$store.commit("getSelected",val)
      }
    }
	},
  data() {
    return {
      // selected: "home",
      foots: [
        { txt: "首页", name: "home", icon: "&#xe607;" },
        {
          txt: "分类",
          name: "classify",
          icon: "&#xe619;"
        },
        { txt: "购物车", name: "shoppingcar", icon: "&#xe707;" },
        { txt: "我的", name: "mine", icon: "&#xf00f3;" }
      ]
    };
  },
  mounted() {
    console.log(this.$route);
    // this.selected = this.$route.name;
    this.$store.commit("getSelected",this.$route.name);
  },
  watch: {
    selected(newVal) {
      console.log(newVal);
      this.$router.push({ name: newVal });
    }
  }
};
</script>

<style lang="scss" scoped>
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 100;
  width: 100%;
}
.mint-tab-item {
  color: black;
  .hot {
    position: absolute;
    width: 0.5rem;
    top: 4px;
    left: 63%;
    display: inline;
  }
}
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: #eaeaea;
  color: #0e7c5b;
}
.ft {
  font-size: 0.4rem;
}
span {
  font-size: 0.3rem;
}
</style>


