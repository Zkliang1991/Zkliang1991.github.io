
<template>
<div>
  <nut-navbar
    @on-click-back="goback"
    @on-click-more="goSearch"
    :leftShow="backShow" 
    style="background-color:black;color:white;height:50px;line-height:50px;"
    class="head"
  >
    {{title}}
    <a slot="back-icon">返回</a>
    <a slot="more-icon">
      <nut-icon v-if="searchShow" type="search" style="margin-top:10px;color:white;" ></nut-icon>
    </a>
  </nut-navbar>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    backShow:{
      type:Boolean,
      default:true
    },
    searchShow:{
      type:Boolean,
      default:true,
    }
  },
  data() {
    return {
 
    };
  },
  mounted() {
     
  },
  methods: {
    goback() {
      console.log(this.$router);
      this.$router.go(-1);
    },
    goSearch() {
      this.$router.push({ name: "search" });
    }
  }
};
</script>


<style lang="scss" scoped>
// .head{
//   position: fixed;
//   z-index: 100;
//   width: 100%;
//   top: 0;
//   left: 0;
// }
</style>
