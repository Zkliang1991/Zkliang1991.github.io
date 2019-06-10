<template>
  <div>
    <a v-for="(g,i) in good" :key="i" @click="godetail(g._id)" class="move3">
      <div class="img">
        <img :src="g.imgs" alt>
      </div>
      <div class="title">{{g.title1}}</div>
      <div class="title">{{g.title2}}</div>
      <div class="price">{{g.newPrice|currency("￥",2)}}</div>
    </a>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  filters: {
    currency(value, type, n) {
      //  ,
      // 保留 小数
      // type 币种 $ ¥
      if (!value) {
        return value;
      }
      n = n || 2;
      type = type || "¥";
      value = value.toFixed(n);
      value = value.toString().split(".");
      var a = value[1]; // 小数
      var b = value[0]; // 整数
      b = b.split("").reverse();
      b = b.map((item, index) => {
        if (index !== 0 && index % 3 == 0) {
          item = item + ",";
        }
        return item;
      });

      b = b.reverse().join("");

      return type + b + "." + a;
    }
  },
  methods:{
    godetail(_id){
      
      this.$router.push({name:"good_detail",params:{_id}})
    }
  },
  props: ["good"]
};
</script>

<style lang="scss" scoped>
a {
  display: block;
  margin-right: 2%;
  width: 48%;
  margin-bottom: 0.8rem;
  float: left;
  background-color: white;
  .img {
    position: relative;
    overflow: hidden;
    height: 3.8rem;
    margin-bottom: 0.25rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .title {
    font-size: 0.2rem;
    color: #666;
    line-height: 0.4rem;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .price {
    letter-spacing: 1px;
    font-weight: 800;
    margin-top: 0.1rem;
    font-size: 0.25rem;
    color: #000;
    text-align: center;
    line-height: 0.24rem;
    margin-bottom: 0.14rem;
  }
}
</style>
