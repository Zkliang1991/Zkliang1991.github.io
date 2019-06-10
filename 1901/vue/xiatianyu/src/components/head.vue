<template>
  <div>
    <van-nav-bar
      :title="title"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      fixed
      :disabled="false"
    >
      <van-icon name="search" slot="right"/>
    </van-nav-bar>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    show: Boolean
  },
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push({ name: "search" });
    }
  },
   
};
</script>


<style scoped>
div,van-nav-bar {
  background-color: rgb(141, 80, 80);
}
</style>
