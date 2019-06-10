<template>
  <div>
    <shopDetail></shopDetail>
  </div>
</template>


<script>
import shopDetail from "../components/shopDetail";
export default {
    components:{
        shopDetail
    }
//   data() {
//     return {
//       goodId: this.$route.params.goodId,
//       good: {}
//     };
//   },
//   mounted() {
//     this.$axios
//       .get("/vue/getGoodOne", {
//         params: {
//           goodId: this.goodId
//         }
//       })
//       .then(res => {
//         this.good = res.data.result;
//         console.log(this.good);
//       });
//   }
};
</script>
