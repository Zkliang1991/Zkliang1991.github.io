<template>
  <div class="goodslist">
    <div v-for="(item,i) in goods" :key="i" class="goods-list-item rotate">
      <router-link :to="{name:'goodsdetails',params:{goodsid:item._id}}">
        <div>
          <img :src="item.goodsimg" alt class="goods-list-img">
          <p class="goods-list-title">{{item.goodstitle}}</p>
          <p class="goods-list-price">
            <span>¥{{item.goodsprice}}</span>
            <span class="item-bg">{{item.itembg}}</span>
          </p>
          <p class="item-shoptext">{{item.shoptext}}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "goodslist",
  data() {
    return {};
  },
  props: {
    goods: {
      type: Array,
      required: true
    },
    type: String,
    allgoods: Array
  },
  methods: {}
};
</script>

<style scpoed>
.goodslist {
  width: 100%;
  overflow: hidden;
}
.goods-list-item {
  float: left;
  width: 48%;
  height: 250px;
  margin: 2% 1%;
  margin-bottom: 10px;
}
.goods-list-img {
  width: 100%;
  height: 60%;
}
.goods-list-title {
  line-height: 0.4rem;
  font-size: 16px;
  height: 0.8rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.goods-list-price {
  line-height: 0.4rem;
  font-size: 20px;
  color: purple;
}
.item-bg {
  font-size: 14px;
  color: brown;
}
.item-shoptext {
  font-size: 14px;
  line-height: 0.4rem;
  color: darkblue;
  text-align: center;
}
</style>
