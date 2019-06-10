<template>
  <div>
    <Head title="探索DR"></Head>
    <ul class="shang">
      <li v-for="(good,index) in goodInfo.drzuqiuhun" :key="index">
        <router-link :to="{name:'xiangxi',params:{goodId:good._id},query:{name:good.goodname}}">
          <img :src="good.goodimg" alt class="item-img">
          <h3 class="lih3">{{good.goodname}}</h3>
          <p class="lip">{{good.miaoshu}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      goods: []
    };
  },
  computed: {
    ...mapState(["goodInfo"])
  },
  methods: {
    ...mapActions(["getgoods"])
  },
  created() {
    this.getgoods({
      url: "/bu/getGoodList",
      params: { type: "drzuqiuhun" }
    });
  }
};
</script>

<style scoped>
.shang {
  padding-top: 1rem;
}
.jiage {
  color: #9b745c;
  font-size: 0.3rem;
}
.item-img {
  width: 100%;
  height: 5rem;
}
.lih3 {
  color: #333;
  font-size: 0.2rem;
  font-weight: normal;
  margin-top: 0.5rem;
  line-height: 0.8rem;
}
.lip {
  color: #666;
  font-size: 0.1rem;
  margin-bottom: 0.2rem;
  /* line-height: -0.2rem; */
}
</style>
