<template>
  <div class="evaluate">
    <div class="first_line">
      <div class="avatar">
        <img src="https://image7.wbiao.co/mall/7fecbb4a0c1a420b9b16afe521f41147.jpg" alt>
      </div>
      <div class="name">123456</div>
      <div class="huiyuan">普通会员</div>
    </div>
    <div class="evaluate_content">手表很好看，简约时尚，作为机械表来说，走时挺精准的，不错，也很百搭，戴起来整个人时尚了，喜欢的可以下手。</div>
    <div class="imgs">
      <li>
        <img
          src="https://image7.wbiao.co/comment/00110f87-cc7e-4ad8-bafb-7436d93ba471.jpg?x-oss-process=image/resize,m_fill,w_105,h_105,color_f1f1f1"
          alt
        >
      </li>
    </div>
    <div class="time">
      <span class="span1">2016-05-10 16:06:41</span>
      <span class="span2">真皮 银色</span>
      <span class="span3">共三张图</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.evaluate {
  width: 94%;
  padding-left: 3%;
  padding-right: 3%;
  display: inline-block;
  margin-top: 15px;
  background-color: #fff;
  .first_line {
    width: 100%;
    padding-top: 5px;
    overflow: hidden;
    > div {
      float: left;
    }
    .avatar {
      display: inline-block;
      vertical-align: middle;
      float: left;

      img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
      }
    }
    .name {
      font-size: 12px;
      color: #999;
      line-height: 24px;
      display: inline-block;
      margin-left: 5px;
      float: left;
    }
    .huiyuan {
      border-radius: 2px;
      padding: 0 4px;
      line-height: 16px;
      font-size: 10px;
      background-color: #cccccc;
      color: #fff;
      margin: 3px 0 0 5px;
    }
  }
  .evaluate_content {
    width: 100%;
    padding: 5px 0;
    font-size: 12px;
    color: #333;
    line-height: 18px;
    word-wrap: break-word;
  }
  .imgs {
    margin: 5px 0;
    li {
      list-style: none;
      > img {
        width: 105px;
        height: 105px;
        max-width: 105px;
        display: block;
        padding: 1px;
        border: 1px solid #ddd;
      }
    }
  }
  .time {
    overflow: hidden;
    padding: 5px 0;
    > span {
      font-size: 10px;
      color: #999;
      line-height: 12px;
      float: left;
    }
    .span3 {
      float: right;
    }
  }
}
</style>
