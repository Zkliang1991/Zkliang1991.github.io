<template>
  <div class="cla">
    <header>
      
      <span>选表中心</span>
    </header>
    <mt-navbar v-model="selected" class="move2">
      <mt-tab-item v-for="(type,i) in goodsType" :key="i" :id="type.value">{{type.text}}</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected" class="min">
      <mt-tab-container-item :id="t.value" v-for="(t,i) in goodsType" :key="i">
        <GoodCPT :good="goods.filter((it)=>it.type.value==t.value)" :type="t"></GoodCPT>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import GoodCPT from "../components/goods.vue";
import { Navbar, TabItem } from "mint-ui";
import {mapState,mapActions,mapGetters} from "vuex"
export default {
  data() {
    return {
      goodsType: [],
      selected: "1"
    }
  },
  methods: {
    ...mapActions(['getAllGoods'])
  },
  mounted() {
    this.$axios.get("/vue/getGoodTypes").then(res => {
      this.goodsType = res.data.result;
      // console.log(this.goodsType);
    });
    
    this.getAllGoods({
      url: "/vue/getGoodList",
      params: { limit: 12 }
    });
  },
  computed: {
    ...mapState(['goods'])
    // goods(){
    //   return this.$store.state.goods;
    // }
  },
  components:{
    GoodCPT
  }
};
</script>
<style lang="scss" scoped>
.cla {
  header {
    background: #262626;
    padding: 14px 0;
    text-align: center;
    font-size: 16px;
    color: #fff;
    position: relative;
    a {
      width: 19px;
      height: 19px;
      position: absolute;
      left: 15px;
      top: 15px;
      img {
        width: 100%;
        border: none;
        display: block;
      }
    }
  }
  .min{
    margin-bottom: 0.9rem;
  }
  .mint-navbar .mint-tab-item.is-selected {
    margin-bottom: 0;
  }
}
</style>
