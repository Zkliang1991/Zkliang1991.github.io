<template>
  <div>
    <List :goods="goods"></List>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      goods: []
    };
  },
  computed: {
    // ...mapState(["goods"])
  },
  methods: {
    ...mapMutations(["getAllGoods"])
  },
  created() {
    this.getAllGoods({ url: "/bu/getGoodList" });
    this.$axios.get("/bu/getGoodList").then(res => {
      this.goods = res.data.result;
    });
  }
};
</script>
