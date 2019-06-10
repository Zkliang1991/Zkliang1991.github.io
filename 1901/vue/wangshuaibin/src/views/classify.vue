<template>
  <div>
    <Header title="分类" :searchShow="true"></Header>
    <van-tabs v-model="active" animated swipeable sticky @click="onClick">
      <van-tab v-for="(type,i) in goodtypes" :key="i" :title="type" class="move">
        <!-- <p v-for="(good,i) in goods.filter(function(good) {
        return good.type == type})" :key="i">{{ good.title }}</p> -->
         <div v-for="(good,i) in goods.filter(function(good) {
        return good.type == type}).slice(0,20)" :key="i" class="good">
            <router-link :to="{name:'detail',params:{goodId:good._id},query:{title:good.title}}">
              <img :src="good.img" alt class="item-img">
              <p class="van-ellipsis" style="color:#222;">{{good.title}}</p>
              <span class="price">¥{{good.price}}</span>
              <span class="sales">{{good.sales}}</span>
              <i class="iconfont icon-cart"></i>
            </router-link>
          </div>
        <!-- <p :v-if="show" v-for="(good,i) in newgoods" :key="i">{{ good.title }}</p> -->
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import {mapState,mapActions,mapGetters} from "vuex"
export default {
  data() {
    return {
      active: 0,
      goodtypes: [],
      show: false,
      manshoes: [],
      womenshoes: [],
      mancloth: [],
      womencloth: [],
      newgoods:{}
    };
  },
  computed:{
    ...mapState(['goods'])
  },
  methods: {
    ...mapActions([
      'getAllGoods'
    ]),
    onClick(index, title) {
      // this.$toast(title);
      // console.log(title);
      // this.newgoods = goods.filter(function(good) {
      //   return good.type == title;
      // });
      // console.log(this.newgoods);
     
    }
  },
  created() {
    // this.$axios.get("/vue/getAllGoods").then(res => {
    //   this.goods = res.data.result;
    // });
    this.getAllGoods({url:"/vue/getAllGoods"})
    this.$axios.get("/vue/getGoodTypes").then(res => {
      this.goodtypes = res.data.result;
    });
  },
  mounted() {
    // this.onClick(0,"男鞋");
  },
  updated() {
    // console.log(this.newgoods);
    // console.log(this.goods.filter(function(good){
    //   return good.type == "男鞋"
    // }));
    // if (this.newgoods.length != 0) {
    //   this.show = true;
    // }
  }
};
</script>
<style scoped>
.good {
  width: 46%;
  margin-left: 2%;
  height: 4.3rem;
  float: left;
  font-size: 0.24rem;
  margin-bottom: 0.4rem;
}
.good img {
  width: 100%;
  height: 3.5rem;
}
.good p {
  line-height: 0.5rem;
}
.good i {
  float: right;
  width: 0.37rem;
  height: 0.37rem;
  border-radius: 50%;
  border: 1px solid #ddd;
  text-align: center;
  line-height: 0.4rem;
  font-size: 0.24rem;
  color: #d70057;
  margin-right: 0.1rem;
}
.good .price {
  color: #d70057;
  line-height: 0.4rem;
  float: left;
}
.good .sales {
  color: #999;
  font-size: 0.2rem;
  line-height: 0.4rem;
  float: left;
  margin-left: 0.2rem;
}

</style>

