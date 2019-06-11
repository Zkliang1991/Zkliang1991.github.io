<template>
  <div class="search-page move">
    <van-search
      v-model="keyword"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"
      class="search"
      autofocus
      @cancel="cancel"
    ></van-search>

    <van-pull-refresh v-model.lazy="isLoading" @refresh="onRefresh">
      <div class="goodslist">
        <van-cell v-for="(item,i) in goods" :key="i" class="goods-list-item anim">
          <router-link :to="{name:'details',params:{good:item}}">
            <img :src="item.img" alt class="goods-list-img">
            <p class="goods-list-title">{{item.name}}</p>
            <p class="goods-list-price">￥{{item.pice}}</p>
          </router-link>
        </van-cell>
      </div>
    </van-pull-refresh>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      goods: [],
      isLoading: false
    };
  },
  computed: {
    ...mapState(["goodsinfo"]),
    keyword: {
      get() {
        return this.$store.state.keyword;
      },
      set(val) {
        this.$store.commit("getKeyword", val);
      }
    }
  },
  methods: {
    ...mapActions(["goodsListSearch"]),
    cancel() {
      this.$router.push({ name: "home" });
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    }
  },
  watch: {
    keyword(newVal) {
      console.log(newVal);

      this.$axios
        .get("/vue/searchList", {
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
.move {
  animation: zoomIn 1s;
}
.anim{
  animation: bounceInLeft 1s;
}
.search {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
.goodslist {
  margin-top: 60px;
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
  line-height: 20px;
}
</style>