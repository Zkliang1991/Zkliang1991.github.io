<template>
  <div>
    <mt-header :title="title" class="green">
      <mt-button icon="back" slot="left" @click="goback" v-if="show">返回</mt-button>
      <mt-button icon="search" slot="right" v-if="searchShow" @click="goSearch">搜索</mt-button>
    </mt-header>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    show: Boolean
  },
  data() {
    return {
      searchShow: true
    };
  },
  mounted() {
    console.log(this.$route);
    this.searchShow = this.$route.name == "search" ? false : true;
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    goSearch() {
      this.$router.push({ name: "search" });
    }
  }
};
</script>

<style scoped>
/* color: #0e7c5b; */
.green{
  width: 100%;
  background: #0e7c5b;
  position: fixed;
  top:0;
  left:0;
  z-index: 100000;
}
</style>

