<template>
    <div>
        <mt-header :title="title" class="mt-header moveIn">
        <div slot="left" v-if="show">
            <mt-button icon="back" @click="goback">返回</mt-button>
        </div>
        <mt-button icon="search" slot="right" @click="goSearch" v-if="!flag"></mt-button>
        </mt-header>
    </div>
</template>


<script>
export default {
  props: ["title", "show"],
  computed: {
    flag() {
      return localStorage.routeName === "search";
    }
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
.mt-header {
  width: 100%;
  position: fixed;
  z-index: 9999;
  top: 0;
  background-color:#806d6d;
  color:white !important;
}
.moveIn {
  animation: flip 1s;
}
</style>
