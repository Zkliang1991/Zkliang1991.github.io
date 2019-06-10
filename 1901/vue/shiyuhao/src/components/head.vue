<template>
  <mt-header :title="title" class="head">
    <mt-button icon="back" slot="left" @click="goback" v-if="show">返回</mt-button>
    
    <mt-button icon="search" slot="right" v-if="searchShow" @click="goSearch"></mt-button>
  </mt-header>
</template>

<script>
export default {
  props: {
    title: String,
    show: Boolean
  },
  data() {
    return {
      searchShow: false,
     
    }
  },
  mounted() {
    this.searchShow = this.$route.name != "classify" ? false : true;
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    goSearch() {
      this.$router.push({ name: "search" });
    },
  }
};
</script>


<style scoped>
.head {
  z-index: 100000000;
  background-color: red;
  color: black;
}
</style>
