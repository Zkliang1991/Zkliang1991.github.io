<template>
  <div>
    <Head :show="true" :searchshow="true" title="分类"></Head>
    <van-tabs class="listnav">
      <van-tab v-for="(goods,index) in goodInfo.types" :title="goods" :key="index">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <ul class="list cl">
            <li
              v-for="(good,index) in goodInfo.allGoods.filter((item)=>item.type_text==goods)" v-if="goodInfo.allGoods" :key="index"
            >
              <router-link :to="{name:'details',params:{good}}">
                <img :src="good.img">
                <p class="p1">{{good.name}}</p>
                <p class="p2">￥{{good.pice}}</p>
              </router-link>
            </li>
          </ul>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
    <Footer></Footer>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      isLoading: false
    };
  },

  computed: {
    ...mapState(["goodInfo"])
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    ...mapActions(["getGoodTypes", "getAllGoods"])
  },
  created() {
    this.getGoodTypes({ url: "/vue/getGoodTypes" });

    this.getAllGoods({
      url: "/vue/getGoodList",
      cb: () => {
        this.show = true;
      }
    });
  }
};
</script>
<style lang="scss" scoped>
.listnav {
  margin-top: 0.8rem;
  .list {
    li {
      width: 48%;
      float: left;
      text-align: center;
      background-color: #fff;
      margin: 1%;
      img {
        width: 2rem;
        height: 2.5rem;
        margin: 0.2rem auto 0;
      }
      .p1 {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        font-size: 0.24rem;
        text-align: left;
        padding: 0 0.3rem;
      }
      .p2 {
        color: red;
      }
    }
  }
}
// .van-tabs__nav{
//   position: fixed;
//   top: 0.8rem;
//   left: 0;
// }
</style>