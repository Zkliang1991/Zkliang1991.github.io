<template>
  <div class="titlehead">
    <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft"></van-nav-bar>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    backshow: Boolean,
    moreshow: Boolean,
    back: String
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.titlehead {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  .van-nav-bar__title,
  .van-nav-bar__text,
  .van-icon-arrow-left,
  .van-icon-search {
    color: dimgray;
  }
}
</style>