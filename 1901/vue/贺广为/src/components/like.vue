<template>
  <div class="like cl">
    <div class="writewain cl">
      <van-icon class="wain" name="like"/>
      <p>猜您喜欢</p>
    </div>
    <ul class="list cl">
      <li v-for="(item,index) in list" :key="index">
        <img :src="item.img" alt>
        <p class="p1">{{item.title}}</p>
        <p class="p2">{{item.price}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["list"])
  }
};
</script>
<style lang="scss" scoped>
.like {
  background-color: #fff;
  margin-bottom: 1rem;
  .writewain {
    border-bottom: 1px solid #eee;
    background: #fff;
    border: 1px solid #eee;
    margin-top: 0.1rem;
    .wain {
      float: left;
      color: red;
      line-height: 0.45rem;
      margin: 0 0.1rem;
    }
    p {
      float: left;
      font-size: 0.24rem;
      line-height: 0.45rem;
    }
    .el-right {
      float: right;
      line-height: 0.45rem;
      margin-right: 0.1rem;
      color: #aaa;
    }
  }
  .list {
    li {
      width: 28%;
      padding: 0.2rem;
      float: left;
      text-align: center;
      img {
        width: 70%;
        height: 2.5rem;
        display: inline-block;
      }
      .p1 {
        font-size: 0.24rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }
      .p2 {
        color: red;
      }
    }
  }
}
</style>