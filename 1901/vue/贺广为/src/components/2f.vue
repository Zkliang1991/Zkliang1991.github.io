<template>
  <div class="f2">
    <div class="writewain cl">
      <i class="el-icon-goblet-square-full wain"></i>
      <p>{{title}}</p>
      <i class="el-icon-right el-right"></i>
    </div>
    <div class="f2-content cl">
      <img
        src="https://img19.yesmyimg.com/n/68/233/6233068/5032887_110x180.jpg"
        class="f2-content-one"
      >
      <div class="f2-content-two">
        <p class="p1">热销起泡双支组合（恋爱季桃红+爱之湾谜蓝热销起泡双支组合)</p>
        <p class="p2">销量:7140</p>
        <p class="p3">￥458</p>
      </div>
      <img src="https://img09.yesmyimg.com/6223159/0894455_110x180.png" class="f2-content-three">
      <div class="f2-content-four">
        <p class="p1">热销起泡双支组合（恋爱季桃红+爱之湾谜蓝热销起泡双支组合)</p>
        <p class="p2">销量:7140</p>
        <p class="p3">￥458</p>
      </div>
      <img
        src="https://img18.yesmyimg.com/n/710/203/6203710/7260981_110x180.png"
        class="f2-content-five"
      >
    </div>
  </div>
</template>
<script>
export default {
    props:{
        title:String
    }
}
</script>
<style lang="scss" scoped>
.f2 {
  background-color: #fff;
  margin-top: 0.1rem;
  .writewain {
    border-bottom: 1px solid #eee;
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
  .f2-content {
    padding: 4% 1%;
    .f2-content-one {
      width: 14%;
      height: 2rem;
      float: left;
      margin-top: 3%;
    }
    .f2-content-two {
      float: left;
      width: 23%;
      margin: 0 3%;
      .p1 {
        font-size: 0.24rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        margin-bottom: 0.6rem;
      }
      .p2 {
        float: right;
        font-size: 0.24rem;
        color: #aaa;
      }
      .p3 {
        float: right;
        color: red;
      }
    }
    .f2-content-three {
      width: 14%;
      height: 2rem;
      float: left;
      margin-top: 3%;
    }
    .f2-content-four {
      float: left;
      width: 23%;
      margin: 0 3%;
      .p1 {
        font-size: 0.24rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        margin-bottom: 0.6rem;
      }
      .p2 {
        float: right;
        font-size: 0.24rem;
        color: #aaa;
      }
      .p3 {
        float: right;
        color: red;
      }
    }
    .f2-content-five {
      width: 14%;
      float: left;
      height: 2rem;
      margin-top: 3%;
    }
  }
}
</style>