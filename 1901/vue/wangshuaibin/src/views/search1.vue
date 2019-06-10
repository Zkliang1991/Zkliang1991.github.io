<template>
  <div>
    <Head title="搜索" :flag="true"></Head>
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <van-row>
      <van-col span="24" class="nav searmove" v-for="(good,i) in goodInfo.all_goods" :key="i">
        <router-link :to="{name:'details',params:{goodId:good._id},query:{name:good.name,price:good.price,remain:good.discount,img:good.img}}">
          <img :src="good.img" alt>
          </router-link>
          <router-link :to="{name:'details',params:{goodId:good._id},query:{name:good.name,price:good.price,remain:good.discount,img:good.img}}">
          <div class="item-con mt">
            <h3 class="mt">{{good.name}}</h3>
            <p data-v-3c2ff24f class="item-desc">
              <font color="#ff4a00">「新品预约中，6月6日上午10点首卖」</font>
              
              {{good.type.text}}
            </p>
            <div data-v-3c2ff24f class="item-price">
              <sub data-v-3c2ff24f>￥</sub>
              {{good.price}}
              <span data-v-3c2ff24f class="spe">起</span>
              <!---->
              <span data-v-3c2ff24f class="icon-box"></span>
            </div>
          </div>
        </router-link>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      value: "",
      list: [],
      loading: false,
      finished: false
    };
  },
  computed: {
    ...mapState(["goodInfo"])
  },
  methods: {
    ...mapActions(["getAllGoods"]),
    onSearch() {
      this.getAllGoods({
        url: "/vue/getAllGoods",
        params: { keyword: this.value }
      });
    },
    onCancel() {
      this.$router.go(-1);
    }
  },
  watch: {
    value(newVal) {
      console.log(newVal);
      this.value = newVal;
    }
  }
};
</script>

<style scoped>

.van-search {
  border-bottom: 1px solid #ddd;
}
img {
  width: 2.53rem;
  height: 2rem;
  padding: 0.28rem;
  position: relative;
}
.nav {
  display: flex;
  padding: 0.28rem 0;
  padding-right: 0.28rem;
  min-height: 2.53rem;
  position: relative;
  background: #fff;
  border-bottom: 1px solid #ddd;
}
.item-con {
  display: block;
  text-align: left;
  width: 4.1rem;
  margin-left: 0.23rem;
}
h3 {
  font-size: 0.28rem;
  color: rgba(0, 0, 0, 0.87);
  line-height: 0.38rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-weight: 400;
  margin-top: 0.25rem;
}
.item-desc {
  font-size: 0.2rem;
  line-height: 0.4rem;
  color: rgba(0, 0, 0, 0.54);
  margin-top: 0.05rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.item-price {
  color: #ff6700;
  font-size: 0.36rem;
  line-height: 1;
  margin-top: 0.22rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
</style>