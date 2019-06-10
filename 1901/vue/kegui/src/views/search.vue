<template>
  <div>
    <Head title="搜索" :show="true"></Head>
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
      />
    </form>
    <van-card v-for="(good,i) in goods"
          :key="i"
          num="299"
          :price="good.price"
          :desc="good.where"
          :title="good.name"
          :thumb="good.img"/>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions}  from 'vuex';
export default {
  data() {
    return {
        value:"",
        goods:[]
    };
  },
  watch: {
    value(newVal) {
      this.$axios
        .get("/vue/getgoodslist", {
          params: {
            keyword: newVal
          }
        })
        .then(res => {
          this.goods = res.data.result;
          
        });
    }
  },
  created() {
    
  }
};
</script>

