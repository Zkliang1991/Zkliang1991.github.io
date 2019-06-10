<template>
    <footer>
        <div v-for="(foot,i) in foots" :key="i">
            <router-link :to="{name:foot.name}">
                <mt-badge v-if="i==1" size="small" type="error" class="hot">{{myCarCount}}</mt-badge>
                <i class="iconfont" v-html="foot.icon" > </i>
                <span> {{foot.txt }}</span>
            </router-link>
        </div>
    </footer>
</template>


<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "foot",
  data() {
    return {
      mycarNums: 0,
      foots: [
        { txt: "首页", path: "/home/index", name: "index", icon: "&#xe62b;" },
        // { txt: "分类", path: "/home/type", name: "type", icon: "&#xe649;" },
        { txt: "购物车", path: "/home/cart", name: "cart", icon: "&#xe629;" },
        { txt: "我的", path: "/home/mine", name: "mine", icon: "&#xe68f;" }
      ]
    };
  },
  computed: {
    ...mapState(["nCar",'myCarCount'])
    // codeNum() {
    //   return this.$store.state.codeNum;
    // }

  },

  mounted() {
    this.$axios
      .get("vue/getCarList", {
        params: { userid: sessionStorage.getItem("userid") }
      })
      .then(res => {
        var num = 0;
        var list = res.data.result;
        for (var i = 0; i < list.length; i++) {
          num += list[i].count * 1;
        }
         this.mycarNums=num;
         this.$store.commit('changeNum',num)
      });

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
  border-top: 1px solid #ccc;
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
        margin-top: 0.1rem;
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
      color: #0dc441;
      border-color: #0dc441;
    }
  }
}
</style>

