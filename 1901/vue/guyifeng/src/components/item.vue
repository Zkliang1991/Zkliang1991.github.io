<template>
  <ul class="shangpin">
    <li v-for="(good,i) in goods" :key="i" class="item move" @click="goGoods(good._id)">
      <img :src="good.img" alt class="item-img">
      <h2>
        <p>品牌:</p>
        <span>{{good.type}}</span>
      </h2>
      <h3 style="color:red;">
        <p>价格:</p>
        <span>¥{{(good.price*1).toFixed(2)}}</span>
      </h3>
      <h3>
        <p>评论:</p>
        <span>{{good.punlun}}条</span>
      </h3>
    </li>
  </ul>
</template>


<script>
export default {
    data(){
        return{
            goods:[]
        }
    },
  props: {
    keyword:String
  },
  mounted() {
    this.$axios
      .get("/vue/getKouHong", {
        params: {
          keyword: "圣罗兰"
        }
      })
      .then(res => {
        console.log(res.data.result);
        this.goods = res.data.result;
      });
  },methods: {
    goGoods(_id) {
      this.$store.state.goodId = _id;
      this.$router.push({ name: "good" });
    },
    dianji(item) {
      this.$axios
        .get("/vue/getKouHong", {
          params: {
            keyword: item
          }
        })
        .then(res => {
          console.log(res.data.result);
          this.goods = res.data.result;
        });
    }
  }
};
</script>

