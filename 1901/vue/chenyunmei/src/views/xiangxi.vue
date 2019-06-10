<template>
  <div>
    <Head :title="$route.query.name"></Head>
    <Xiangxi :good="good"></Xiangxi>
  </div>
</template>
<script>
import Xiangxi from "@/components/xiangxi";
export default {
  data() {
    return {
      goodId: this.$route.params.goodId,
      good: []
    };
  },
  created() {
    this.$axios
      .get("/bu/getGoodOne", {
        params: {
          goodId: this.goodId
        }
      })
      .then(res => {
        console.log(res);
        this.good = res.data.result;
      });
  },
  components: {
    Xiangxi
  }
};
</script>

