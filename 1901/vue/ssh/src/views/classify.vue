<template>
  <div>
    <Head title="商品分类" back="返回" show="true"></Head>
    <van-tabs v-model="active" animated>
      <van-tab v-for="(ls,i) in good_types" :key="i" :title="ls">

<!-- <router-link :to="{name:'details',params:{goodId:590},query:{name:590}}"> -->

        <ul class="hor-view1">
          <li v-for="(good,i) in all_goods.filter((item)=>item.type==ls) " :key="i">

<router-link :to="{name:'details',params:{goodId:good._id},query:{name:good.title}}">
            <div class="hvImg">
              <img :src="good.thumBnail" alt>
            </div>
            <div class="salePoint">
              <p>{{good.title}}</p>
              <span>{{good.par}}</span>
            </div>
            <div class="buy">
              <img src="https://pic.keede.com/event/2017hwg/app/20171229/icon_gwc.png" alt>
            </div>

            </router-link>
          </li>
        </ul>

<!-- </router-link> -->

      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      good_types: [],
      all_goods: [],
      active: ""
    };
  },
  created() {
    this.$axios.get("/vue/getGoodTypes").then(res => {
      this.good_types = res.data.result;
    }),
      this.$axios
        .get("/vue/getGoodList").then(res => {
          this.all_goods = res.data.result;
        });
  }
};
</script>
<style scoped>
.hor-view1 {
  width: 100%;
  overflow: hidden;
}
.hor-view1 li {
  width: 33%;
  float: left;
  border-right: 1px solid #e5e5e5;
  border-top: 1px solid #e5e5e5;
  position: relative;
}
.hor-view1 li .hvImg {
  padding: 5px 0;
}
.hor-view1 li img {
  max-width: 99%;
}
.hor-view1 li .salePoint {
  text-align: left;
  color: #666666;
  padding-bottom: 10px;
  padding-left: 10px;
  width: calc(100% - 20px);
  padding-top: 4px;
}
.hor-view1 li .salePoint p {
  height: 42px;
  line-height: 20px;
  font-size: 14px;
  overflow: hidden;
}
.hor-view1 li .salePoint span {
  font-size: 18px;
  color: #e20a2d;
  line-height: 26px;
  text-align: left;
}
.hor-view1 li .buy {
  position: absolute;
  bottom: 15px;
  right: 10px;
  max-width: 14%;
}
</style>

