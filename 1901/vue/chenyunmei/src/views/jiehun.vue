<template>
  <div>
    <Head title="结婚对戒"></Head>
    <List :goods="goodInfo.jiehun"></List>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["goodInfo"])
  },
  methods: {
    ...mapActions(["getAllGoods"])
  },
  mounted() {
    this.getAllGoods({
      url: "/bu/getGoodList",
      params: { goodtype: "jiehunduijie" }
    });
  }
};
</script>
