<template>
  <div>
    <Head title="搜索" :show="true" class="top searchanimation"></Head>
    <mt-search
      v-model.lazy="keyword"
      placeholder="请输入商品关键词"
      show-action
      shape="circle"
      class="searchkey searchanimation"
    >
      <List :goods="goods" @changegoods="getGood"></List>
    </mt-search>

    <!-- <van-search v-model.lazy="keyword" placeholder="请输入搜索关键词" show-action shape="round" >
        <div slot="action" @click="onSearch">搜索</div>
        <List :goods="goods" @changegoods="getGood"></List>
    </van-search>-->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      value: "",
      goods: []
    };
  },
  computed: {
    keyword: {
      get() {
        return this.$store.state.keyword;
      },
      set(val) {
        this.$store.commit("getKeyword", val); // 修改值 返回 到 vuex
      }
    }
  },
  methods: {
    getGood(data) {
      this.goods = data;
    }
  },
  watch: {
    keyword(newVal) {
      this.$axios
        .get("/vue/getGoodList", {
          params: {
            keyword: newVal
          }
        })
        .then(res => {
          this.goods = res.data.result;
        });
    }
  }
};
</script>

<style scoped>
.searchkey {
  color: #f00;
}
.top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
}
.mint-search >>> .mint-searchbar {
  margin-top: 40px !important;
}
</style>
