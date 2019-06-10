<template>
  <div>
    <Head title="商品分类"></Head>
    <van-tabs class="listnav">
      <van-tab v-for="(goods,index) in goodInfo.types" :title="goods.text" :key="index">
        <ul class="list cl">
          <li
            v-for="(good,index) in goodInfo.all_goods.filter((item)=>item.type.text==goods.text)"
            :key="index"
          >
            <!-- <img :src="good.img" alt>
            <p class="p1">{{good.name}}</p>
            <p class="p2">¥{{good.price}}</p> -->
            <router-link :to="{name:'good',params:{goodId:good._id},query:{name:good.name}}">
              <img :src="good.img" alt>
              <p class="p1">{{good.name}}</p>
              <p class="p2">¥{{good.price}}</p>
              <!-- <h3>{{good.name}} --- RMB = {{good.price}}</h3> -->
            </router-link>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["goodInfo"])
  },
  methods: {
    ...mapActions(["getGoodTypes", "getAllGoods"])
  },
  created() {
    this.getGoodTypes({ url: "vue/getGoodTypes" });

    this.getAllGoods({
      url: "vue/getGoodList",
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
        height: 2.3rem;
        margin: 0.2rem auto 0;
      }
      .p1 {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        font-size: 0.24rem;
        text-align: left;
      }
      .p2 {
        color: red;
      }
    }
  }
}
</style>
