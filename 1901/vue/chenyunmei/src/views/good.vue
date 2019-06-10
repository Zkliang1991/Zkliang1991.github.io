<template>
  <div>
    <Head :title="title"></Head>
    <!-- <p>{{goodId}}</p> -->
    <Shangping :good="goodInfo.getGoodOne"></Shangping>
  </div>
</template>


<script>
import { mapState, mapActions } from "vuex";
// ./myvue/node_modules/y18n
export default {
  data() {
    return {
      title: this.$route.query.goodname,
      goodId: this.$route.params.goodId
    };
  },
  computed: {
    ...mapState(["goodInfo"])
  },
  methods: {
    ...mapActions(["getGoodOne"])
  },
  created() {
    console.log(this.$route);
    this.goodId = this.$route.params.goodId;
    this.title = this.$route.query.goodname;
    // console.log(this.$route.params.goodId);
    this.getGoodOne({
      url: "/bu/getGoodOne",
      params: { goodId: this.goodId }
    });
  }
};
</script>

