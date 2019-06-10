<template>
  <div>
    <Head title="商品分类"></Head>
    <div class="tab">
      <van-tabs @click="getTypeGood($event)">
        <van-tab v-for="(item,index) in tabs" :title="item.title" :key="index">
          <div v-for="(good,index) in goodInfo.all_goods" :key="index">
            <router-link :to="{name:'good',params:{goodId:good._id},query:{name:good.name}}">
              <van-card
                num="1"
                :price="good.price"
                :desc="good.deal"
                :title="good.name"
                :thumb="good.images"
              />
            </router-link>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <Foot></Foot>
  </div>
  
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
    data() {
    return {
      keyword: "bed",
      tabs: [
        { title: "居家", type: "bed" },
        { title: "服装", type: "clothing" },
        { title: "电器", type: "appliance" },
        { title: "饮食", type: "food" },
        { title: "洗护", type: "wash" }
      ]

      // bed: "居家",
      // part: "配件",
      // clothing: "服装",
      // appliance: "电器",
      // wash: "洗护",
      // diet: "饮食"
    };
  },
  computed: {
    ...mapState(["goodInfo"])
  },
  methods: {
    ...mapActions(["getAllGoods"]),

    getTypeGood(e) {
      if (e == 0) {
        this.keyword = "bed";
      } else if (e == 1) {
        this.keyword = "clothing";
      }else if (e == 2) {
        this.keyword = "appliance";
      }else if (e == 3) {
        this.keyword = "food";
      }else if (e == 4) {
        this.keyword = "wash";
      }
      this.getAllGoods({
        url: "/vue/getGoodList",
        params: { keyword: this.keyword }
      });
    },
    gotoGood() {
      this.$router.push({
        name: "good",
        params: { goodId: this.goodInfo.all_goods._id },
        query: { name: this.goodInfo.all_goods.name }
      });
    }
  },
  mounted() {
    console.log(this.type);
    this.getAllGoods({
      url: "/vue/getGoodList",
      params: { keyword: this.$route.query.type }
    });
  }
};

</script>
