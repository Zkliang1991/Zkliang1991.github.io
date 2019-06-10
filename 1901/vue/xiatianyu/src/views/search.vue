<template>
  <div>
    <title title="搜索"></title>
    <van-search v-model.lazy="keyword" placeholder="请输入搜索关键词" show-action shape="round" @cancel="onCancel">
      <!-- <div slot="action"  @cancel="onCancel">取消</div> -->
    </van-search>
    <List :goods="goods"></List>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      keyword:"",
      goods: []
    };
  },
  // computed: {
  //   keyword: {
  //     get() {
  //       return "";
  //     },
  //     set(val) {
  //       console.log(val);
  //       this.$store.commit("getKeyword", val); // 修改值 返回 到 vuex
  //     }
  //   }
  // },
  methods: {
    onCancel() {
      this.$router.go(-1);
    },
  
    // getGood(data) {
    //   this.goods = data;
    // }
  },
  watch: {
    keyword(newVal) {
      console.log(newVal);

      this.$axios
        .get("/vue/getGoodList", {
          params: {
            keyword: newVal
          }
        })
        .then(res => {
          this.goods = res.data.result
          console.log(this.goods);
        });
    }
  }
};
</script>
