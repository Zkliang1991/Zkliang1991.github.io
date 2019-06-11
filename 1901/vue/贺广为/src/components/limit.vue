<template>
  <div class="limit-time">
    <div class="time-left cl">
      <div class="left-top">
        <span>限时抢购</span>
        <van-icon class="arrow-right" name="arrow"/>
      </div>
      <div class="left-content cl">
        <i></i>
        <div class="left-content-right">
          <span class="span">干露缘峰卡本妮老王死了</span>
          <p class="p">热卖推荐</p>
          <div class="left-content-buttom cl">
            <span class="span1">销量:805</span>
            <p class="p1 cl">
              <span class="span2">￥</span>
              <span class="span3">49</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="time-right cl">
        <div class="left-top">
        <span>手机专享</span>
        <van-icon class="arrow-right" name="arrow"/>
      </div>
      <div class="left-content cl">
        <i></i>
        <div class="left-content-right">
          <span class="span">干露缘峰卡本妮老王死了</span>
          <p class="p">热卖推荐</p>
          <div class="left-content-buttom cl">
            <span class="span1">销量:805</span>
            <p class="p1 cl">
              <span class="span2">￥</span>
              <span class="span3">49</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.limit-time {
    background-color: #fff;
    margin-top: 0.1rem;
    margin-bottom: 0.1rem;
    width: 100%;
  .time-left {
    float: left;
    width: 47%;
    padding: 1% 1%;
    border-right: 1px solid #eee;
    position: relative;
    .left-top {
      margin: 0.1rem;
      span {
        color: deepskyblue;
      }
      .arrow-right {
        float: right;
        color: #aaa;
        line-height: 0.4rem;
      }
    }
    .left-content {
      i {
        float: left;
        width: 30%;
        height: 2rem;
        background: url(https://img18.yesmyimg.com/n/710/203/6203710/7260981_110x180.png)
          0 0 no-repeat;
        background-size: 100%;
      }
      .left-content-right {
        float: right;
        width: 70%;
        .span {
          float: left;
          width: 100%;
          color: #000;
          font-size: 0.2rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .p {
          color: #f00;
        }
        .left-content-buttom {
          margin-top: 0.6rem;
          .span1 {
            float: left;
            color: #aaa;
            font-size: 0.12rem;
            margin-top: 0.18rem;
          }
          .p1 {
            float: right;
            color: red;
          }
        }
      }
    }
  }
  .time-right {
    width: 47%;
    float: right;
    padding: 1% 1%;
    .left-top {
      margin: 0.1rem;
      span {
        color: purple;
      }
      .arrow-right {
        float: right;
        color: #aaa;
        line-height: 0.4rem;
      }
    }
    .left-content {
      i {
        float: left;
        width: 30%;
        height: 2rem;
        background: url(https://img18.yesmyimg.com/n/710/203/6203710/7260981_110x180.png)
          0 0 no-repeat;
        background-size: 100%;
      }
      .left-content-right {
        float: right;
        width: 70%;
        .span {
          float: left;
          width: 100%;
          color: #000;
          font-size: 0.2rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .p {
          color: #f00;
        }
        .left-content-buttom {
          margin-top: 0.6rem;
          .span1 {
            float: left;
            color: #aaa;
            font-size: 0.12rem;
            margin-top: 0.18rem;
          }
          .p1 {
            float: right;
            color: red;
          }
        }
      }
    }
  }
}
</style>