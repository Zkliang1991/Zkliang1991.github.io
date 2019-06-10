<template>
  <div>
    <Head headTitle="商品分类" :flag="true" :searchShow="true"></Head>
    <van-tabs v-model="selected" animated>
      <van-tab v-for="(type,i) in goodtype" :key="i" :title="type.text">
        <List :goods="all_goods.filter((it)=>it.type.value==type.value)"></List>
      </van-tab>
    </van-tabs>
    <Foot></Foot>
  </div>
</template>

<script>
import List from "../components/List";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      all_goods: [],
      selected: "shirt",
      goodtype: []
    };
  },
  methods: {
    ...mapActions(["getGoodType"])
  },
  watch: {},
  mounted() {
    // this.getGoodType({
    //   url: "/vue/getgoodstype",
    //   cb() {
    //     console.log("获取type成功");
    //   }
    // });
    this.$axios.get("/vue/getgoodstype").then(res => {
      console.log(res);
      this.goodtype = res.data.result;
    });

    this.$axios.get("/vue/getGoodList").then(res => {
      this.all_goods = res.data.result;

    });
  },
  components: {
    List
  }
};
</script>

<style lang="scss" scoped>
.van-tabs{
  z-index: 0;
}
</style>



