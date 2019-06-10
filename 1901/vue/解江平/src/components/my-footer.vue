<template>
  <footer>
    <div v-for="(foot,i) in foots" :key="i">
      <router-link :to="{name:foot.name}">
        <mt-badge v-if="i==2" size="small" type="error" class="hot">{{car_goods_num}}</mt-badge>
        <!-- <van-tag class="tag" v-if="i==2" round type="danger">{{shopCarInfo.num}}</van-tag> -->
        <i class="iconfont" v-html="foot.icon"></i>
        <span>{{foot.txt}}</span>
      </router-link>
    </div>
  </footer>
</template>


<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      foots: [
        { txt: "首页", path: "/index/home", name: "home", icon: "&#xe677;" },
        {
          txt: "商城",
          path: "/index/shangcheng",
          name: "sc",
          icon: "&#xe634;"
        },
        {
          txt: "购物车",
          path: "/index/shopcar",
          name: "shopcar",
          icon: "&#xe602;"
        },
        { txt: "我的", path: "/index/mine", name: "mine", icon: "&#xe603;" }
      ]
    };
  },
  mounted() {
    this.getCarGoods({
      url: "/vue/getCarGoods"
    });
 
  },
  updated(){
    this.$store.dispatch("getCarGoods",{url:"/vue/getCarGoods"});
  },
  computed: {
    ...mapState(["shopCarInfo"]),
    car_goods_num(){
      return this.$store.state.car_goods_num;
    }
	
  },
  methods: {
    ...mapActions(["getCarGoods"])
  }
};
</script>



<style lang="scss" scoped>
footer {
  position: fixed;
  width: 100%;
  height: 0.9rem;
  left: 0;
  bottom: 0;
  background: #fff;
  display: flex !important;
  z-index: 100;
  border-top: 1px solid rgba(0,0,0,0.2);
  div {
    flex: 1;
    height: 0.9rem;
    a {
      display: block;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      padding: 0.06rem 0;
      text-align: center;
      font-family: "微软雅黑";
      color: #999;
      position: relative;
      i {
        width: 100%;
        height: 0.45rem;
        line-height: 0.45rem;
        font-size: 0.42rem !important;
      }
      span {
        width: 100%;
        height: 0.35rem;
        line-height: 0.35rem;
        font-size: 0.26rem;
      }
      .hot {
        position: absolute;
        top: 0;
        left: 60%;
        display: inline;
        width: 0.25rem;
      }
    }
    .nav-active,
    .router-link-exact-active {
      color: black;
      border-color: #111;
      font-weight: 700;
    }
  }
}
</style>
