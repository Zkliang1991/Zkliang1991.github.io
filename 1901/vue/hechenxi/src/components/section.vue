<template>
  <div>
    <div class="kong"></div>
    <h2>
      {{this.$route.query.type||tuijian}}
      <van-icon name="fire" size=".4rem"/>
    </h2>
    <van-button type="default" @click="onclick">默认按钮</van-button>
  <van-card
  v-for="(good,index) in goodInfo.all_goods"
  :key="index"
  num="1"
  :price="good.price"
  :desc="good.deal"  
  :title="good.name"
  :thumb="good.images"
/>

  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      tuijian: "推荐",
      type:this.$route.query.type,
    };
  },
  computed: {
    ...mapState(["goodInfo"]),
  
  },
  methods: {
    ...mapActions(["getAllGoods"]),
    onclick(){
      console.log(this.goodInfo.all_goods)
      console.log(this.$route.query.type)
    }
  },
  watch:{

   
  },
  mounted() {
    console.log(this.type)
    this.getAllGoods({
      url: "/vue/getGoodList",params:{keyword:this.$route.query.type}
    });
  },

  updated(){
    this.type=this.$route.query.type;
    return this.type;
    
    //  this.getAllGoods({
    //   url: "/vue/getGoodList",params:{keyword:this.$route.query.type}
    // });
    //  console.log(this.$route.query.type)
  }
};
</script>
<style scoped>
.kong {
  width: 100%;
  height: 0.3rem;
  background-color: #eee;
}
h2 {
  text-align: center;
  line-height: 0.5rem;
  font-size: 25px;
}
</style>
