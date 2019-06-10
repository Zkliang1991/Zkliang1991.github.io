<template>
  <div>
    <Head title="搜索" :show="true"></Head>
     <mt-search v-model="value" class="li">
      <List :goods="goods" @changegoods="changeGood"></List>
    </mt-search>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      goods: []
    };
  },
  methods: {
    changeGood(data) {
      this.goods = data;
    }
  },
  watch: {
    value(newVulae) {
      console.log(newVulae);
      this.$axios
        .get("/vue/getGoodList", { params: { keyword: newVulae } })
        .then(res => {
          this.goods = res.data.result;
        });
    }
  }
};
</script>

