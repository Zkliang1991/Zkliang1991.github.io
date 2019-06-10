<template>
  <div>
    <Header title="商品搜索" :show="true"></Header>
    <Topkong></Topkong>
    <mt-search v-model="value" cancel-text="取消" placeholder="搜索">
      <Searchlist :goods="goods"></Searchlist>
    </mt-search>
  </div>
</template>

<script>
import Topkong from "../components/top-kong.vue";
import Buttonkong from "../components/button-kong.vue";
import Searchlist from "../components/searchlist.vue";
export default {
  components: {
    Topkong,
    Buttonkong,
    Searchlist
  },
  data() {
    return {
      value: "",
      goods: []
    };
  },
  watch: {
    value(newVal) {
      console.log(newVal);
      this.$axios
        .get("/vue/sportlist", {
          params: {
            keyword: newVal
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

