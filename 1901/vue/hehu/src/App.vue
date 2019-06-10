<template>
  <div id="app">
    <router-view class="box"></router-view>
    <transition name="slide">
      <div class="musicPlay" v-show="ismusicPlay">
        <div class="close-switch">
          <el-button plain circle icon="el-icon-arrow-down" @click="closeshadow"></el-button>
        </div>
        <Aplayer
          :list="playList"
          :music="defaultMusic"
          :show-lrc="lrcword"
          controls
          :volume="value1/100"
          listMaxHeight="4rem"
          repeat="repeat-all"
        ></Aplayer>
        <div class="block">
          <span class="demonstration">音量</span>
          <el-slider v-model="value1"></el-slider>
          <mt-switch v-model="lrcword">{{lrcword?"显示歌词":"隐藏歌词"}}</mt-switch>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapState } from "vuex";
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapState(["ismusicPlay", "playList"]),
    ...mapGetters(["defaultMusic"])
  },
  data() {
    return {
      lrcword: true,
      value1: 50,
      music: {
        title: "",
        artist: "",
        src: "none",
        pic: ""
      }
    };
  },
  methods: {
    closeshadow() {
      this.$store.state.ismusicPlay = false;
      
    }
  },
  update() {
    if (!sessionStorage.userInfo) {
      localStorage.removeItem("username");
    }
  },
  mounted() {
    
    
  },
};
</script>
<style scoped>
.musicPlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: auto;
  bottom: 0;
  left: 0;
  background-color: #fff;
  z-index: 100;
  opacity: 0.95;
}
.slide-enter-active {
  animation: slideInUp 1s;
}
.slide-leave-active {
  animation: slideOutDown 1s;
}
.block {
  padding: 0.4rem;
  margin: auto;
  font-size: 0.2rem;
  box-shadow: 0.1rem 0.1rem 0.2rem #333333;
}
.demonstration {
  font-size: 0.3rem;
}
.close-switch {
  padding: 3%;
}
</style>

