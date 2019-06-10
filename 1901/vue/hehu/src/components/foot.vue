<template>
  <mt-tabbar v-model="tab" fixed>
    <mt-tab-item v-for="(foot,i) in foots" :key="i" :id="foot.name">
      <i class="iconfont" v-html="foot.icon" slot="icon"></i>
      {{foot.txt}}
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  data() {
    return {
      tab: "home",
      foots: [
        { txt: "发现", path: "/index/home", name: "home", icon: "&#xe600;" },
        {
          txt: "最新专辑",
          path: "/index/vedio",
          name: "vedio",
          icon: "&#xe543;"
        },
        { txt: "音乐", path: "/index/music", name: "music", icon: "&#xe680;" },
        { txt: "我的歌单", path: "/index/firend", name: "firend", icon: "&#xe66a;" },
        { txt: "账号", path: "/index/person", name: "person", icon: "&#xe678;" }
      ]
    };
  },
  watch: {
    tab(newVal){
      this.$router.push({name:newVal})
      this.$emit('changTit',newVal)
    }
  },
  mounted() {
    this.tab = this.$route.name
    this.$emit('changTit',this.tab)
  },
};
</script>
