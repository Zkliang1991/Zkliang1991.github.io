<template>
  <div v-if="show">
    <Head title="分类" :show="true" ></Head>
    
      <van-tabs v-model="select" @click="getItem">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-tab :title="item" :id="item" v-for="(item,i) in goodInfo.types" :key="i">
          <div v-for="(good,i) in tabs" :key="i">
            <router-link :to="{name:'good',params:{goodId:good._id},query:{name:good.name}}">
              <van-card
                num="299"
                :price="good.price"
                :desc="good.where"
                :title="good.name"
                :thumb="good.img"
                class="vard"
              ></van-card>
            </router-link>
          </div>
          <div slot="footer">
            <van-button size="mini">加入购物车</van-button>
            <van-button size="mini">立即购买</van-button>
          </div>
        </van-tab>
        </van-pull-refresh>
      </van-tabs>
    
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "classify",
  data() {
    return {
      tabs: [],
      good_types: [],
      all_goods: [],
      select: "Tee",
      show: true,
      isLoading: false
    };
  },
  computed: {
    ...mapState(["goodInfo"]),
    ...mapGetters(["newTypes"]),
    newGoods: {
      get() {
        return this.goods;
      },
      set(val) {}
    }
  },
  methods: {
    ...mapActions(["getAllGoods", "getGoodTypes"]),
    getItem(index, title) {
      this.$axios
        .get("/vue/getgoods", {
          params: {
            type: title
          }
        })
        .then(res => {
          this.tabs = res.data.result;
        });
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.tabs = this.tabs.reverse();
        this.isLoading = false;
      }, 500);
    }
  },
  created() {
    this.$axios
      .get("/vue/getgoods", {
        params: {
          type: "Tee"
        }
      })
      .then(res => {
        this.tabs = res.data.result;
      });
    this.getGoodTypes({ url: "/vue/getGoodTypes" });
    this.getAllGoods({
      url: "/vue/getgoodslist"
    });
  },
  mounted() {
    this.getAllGoods(
      {
        url: "/vue/getgoodslist"
      },
      { params: "Tee" }
    );
  }
};
</script>

