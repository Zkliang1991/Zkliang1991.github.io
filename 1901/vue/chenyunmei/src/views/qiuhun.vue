<template>
  <div>
    <Head title="求婚钻戒"></Head>

    <List :goods="goods"></List>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goods: [],
      value: ""
    };
  },
  methods: {},
  mounted() {
    this.$axios
      .get("/bu/getGoodList", {
        params: { goodtype: "qiuhunzuanjie" }
      })
      .then(res => {
        console.log(res.data.result);
        this.goods = res.data.result;
      });
  }
};
</script>
<style lang="scss">
.search {
  padding-top: 1rem !important;
}
</style>


