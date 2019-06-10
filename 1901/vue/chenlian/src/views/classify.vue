<template>
  <div class="classify">
    <div class="header-top">
    <Head title="精选分类" :show="true" :searchShow="true" :v-if="true"></Head>
    </div>
    

    <van-tabs class="van-tabs-top">
      <van-tab v-for="(item,i) in goodInfo.cases" :key="i" :title="item">
        <!-- {{item}} -->
          <div class="clear" style="clear:both"></div>
          <div class="goodlist" v-for="(good,i) in goodInfo.allgoods.filter((it)=> it.case == item)" :key="i">
            <div class="goodlistalllist">
            <keep-alive>  
              <!-- v-if="Router.meta.keepAlive" -->
              <router-link :to="{name:'good',params:{goodId:good._id},query:{title:good.title}}">
              <img :src="good.img" alt class="goodimg">
              <ul class="goodinfo">
                <p class="goodtitle">{{good.title}}</p>
                <span class="goodspan">{{good.price}}</span>
              </ul>
              </router-link>
            </keep-alive>
            </div>
          </div>
        
      </van-tab>
    </van-tabs>

    <Foot :show="true"></Foot>
  </div>
</template>



<script>
import Router from 'vue-router'
import { Image } from "vant"; //图片
import { mapState, mapActions } from "vuex";
import Alist from "../components/alllist.vue";
export default {
  name: "classify",
  computed: {
    ...mapState(["goodInfo"])
  },
  data() {
    return {
      
    }
  },
  components: {
    Alist
  },
  created() {
    this.getGoodTypes({ url: "/vue/getGoodTypes" });
    // {url,cb,params}
    this.getAllGoods({ url: "/vue/getAllGoods",cb:()=>{} });
  },
  mounted() {
    console.log("----------------- $store.state.allgoods --------------------");
    // console.log(this.$store.state.allgoods);
  },
  methods: {
    ...mapActions(["getGoodTypes", "getAllGoods"])
  }
};
</script>

<style scoped>
.searchlist {
  width: 100%;
}
.goodlist {
  width: 45.5%;
  height: 12.5rem;
  margin-left: 2.5%;
  margin-top: 0.5rem;
  float: left;
  text-align: center;
  border: 1px solid #f5f5f5;
  border-radius: 5%;
  overflow: hidden;
  background: #fafafa;
}
.goodimg {
  width: 100%;
  padding: 0;
  margin: 0;
  border-radius: 2%;
}
.goodinfo {
  text-align: left;
  width: 90%;
  padding: 0;
  margin: 0 auto;
  overflow: hidden;
  font-size: 0.9rem;
}
p.goodtitle {
  padding: 0;
  margin: 0;
  line-height: 1.5rem;
  color: #333;
}
span.goodspan {
  padding: 0;
  margin: 0;
  line-height: 1rem;
  color: #333;
  font-size: 0.8rem;
  white-space: nowrap;
  overflow: hidden;
}
.van-tabs-top {
  margin-top: 45px;
  z-index: 0;
}
.classify{
  margin-bottom: 5.2rem;
}
</style>

