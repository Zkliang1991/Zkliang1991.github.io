<template>
  <div>
    <Head title="商品分类" :flag="false"></Head>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-tabs>
        <van-tab  v-for="(item,i) in goodInfo.types" :title="item.text" :key="i">
          <van-row gutter="5" class="move">
            <van-col span="12" v-for="(good,i) in goodInfo.all_goods.filter((it)=>it.type.value==item.value)" :key="i">
              <router-link :to="{name:'details',params:{goodId:good._id},query:{name:good.name,price:good.price,remain:good.discount,img:good.img}}">
                <img  v-lazy="good.img" alt>
              
              <div class="info">
                <div class="name">{{good.name}}</div>
                <div class="brief">{{good.type.text}}</div>
                <div class="price">
                  {{good.price}}
                  <span>起</span>
                  <span class="price old">
                    <s>{{good.price+400}}</s>
                  </span>
                </div>
              </div>
          </router-link>
            </van-col>
          </van-row>
        </van-tab>
      </van-tabs>
    </van-pull-refresh>
    <Foot></Foot>
  </div>
</template>

<script>
// @ is an alias to /src

import Foot from "@/components/foot.vue";
import Nav from "@/components/nav.vue";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "home",
  data() {
    return {
      isLoading: false
    };
  },
  computed: {
    ...mapState(["goodInfo"])
  },
  components: {
    Foot,
    Nav
  },
  methods: {
    onRefresh() {
      this.$axios.get("/vue/movies").then(res => {
        this.$toast("刷新成功");
        this.isLoading = false;
      });
    },
    ...mapActions(["getGoodTypes", "getAllGoods"])
  },
  created() {
    // this.$axios.get("/vue/getGoodTypes").then(res => {
    //   console.log(res);
    //   this.good_types = res.data.result;
    // });
    this.getGoodTypes({ url: "/vue/getGoodTypes" });
    this.getAllGoods({ url: "/vue/getAllGoods" });
  }
};
</script>
<style scoped>
img {
  width: 100%;
  height: 204px;
}
.a {
  float: left;
}
.info {
  padding: 0.2rem 0.27rem;
  text-align: left;
}
.name {
  font-size: 0.28rem;
  color: rgba(0, 0, 0, 0.87);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.brief {
  margin-top: 0.06rem;
  font-size: 0.22rem;
  line-height: 0.3rem;
  color: rgba(0, 0, 0, 0.54);
}
.price {
  font-size: 0.28rem;
  color: #ea625b;
  height: 1.5em;
  line-height: 1.5em;
  position: relative;
  display: inline-block;
  padding-left: .5em;
}
.price:before {
  content: "\A5";
  position: absolute;
  left: 0;
  top: 0;
  font-size: 0.76em;
  text-decoration: none;
}
.old {
  display: inline-block;
  margin: 0 0.1rem;
  font-size: 0.22rem;
  color: rgba(0, 0, 0, 0.54);
}
</style>
