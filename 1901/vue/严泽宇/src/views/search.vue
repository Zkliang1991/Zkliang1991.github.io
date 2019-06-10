<template>
  <div>
    <van-nav-bar :fixed="true">
      <div slot="title">
        <van-search v-model.lazy="searchValue" placeholder="请输入搜索关键词" show-action  @cancel="onCancel"/>
      </div>
    </van-nav-bar>
    <div class="spaceBox"></div>
    <List :goods="goods"></List>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      searchValue: "",
      goods: []
    };
  },

  watch: {
    searchValue(newVal) {
      console.log(newVal);
      this.$axios
        .get("/vue/getGoodList", {
          params: {
            searchValue: newVal
          }
        })
        .then(res => {
          this.goods = res.data.result;
          console.log(this.goods);
        });
    }
  },
  methods: {
    ...mapMutations(["gotoback",'onCancel']),
  }
};
</script>

<style lang="scss" scoped>
i {
  font-size: 24px;
}

.van-search__content {
  height: 32px;
  border-radius: 30px;
}
.van-search {
  padding: 0;
  margin-top: 8px;
}
.van-cell {
  padding-right: 0;
}
.van-nav-bar__title {
  max-width: 90%;
}
.spaceBox {
  height: 46px;
}
</style>

