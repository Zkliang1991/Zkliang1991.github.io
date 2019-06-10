<template>
  <div>
    <Head title="个人中心" :backShow="false" :searchShow="false"></Head>
    <div class="top">
      <div class="touxiang">
        <div class="tou"></div>
        <!-- <van-uploader v-model="fileList" multiple :max-count="1" class="tou"/> -->
        <h3>{{username}}</h3>
      </div>
    </div>
    <div class="dingdan">
      <div class="wode">
        <h3>我的订单</h3>
        <h4>查看全部 ></h4>
      </div>
      <ul class="all">
        <li v-for="(item,i) in tubiao" :key="i">
          <i class="iconfont" v-html="item.icon"></i>
          <span>{{item.txt}}</span>
        </li>
      </ul>
    </div>
    <div class="shoucang">
      <div class="sc">
        <h3>我的收藏</h3>
        <h4>查看全部 ></h4>
      </div>
    </div>
    <ul class="mine">
      <li v-for="(item,i) in my" :key="i">
        <h3>{{item.txt}}</h3>
        <i class="iconfont" v-html="item.icon"></i>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "@/store";
export default {
  data() {
    return {
      // username:store.state.userName,
      fileList: [],
      username: "",
      tubiao: [
        { txt: "待付款", path: "", name: "", icon: "&#xe604;" },
        { txt: "待发货", path: "", name: "", icon: "&#xe602;" },
        { txt: "待收货", path: "", name: "", icon: "&#xe62f;" },
        { txt: "待评价", path: "", name: "", icon: "&#xe60b;" }
      ],
      my: [
        { txt: "地址管理", path: "", name: "", icon: "&#xe601;" },
        { txt: "公益捐赠", path: "", name: "", icon: "&#xe65a;" },
        { txt: "联系客服", path: "", name: "", icon: "&#xe629;" },
        { txt: "用户反馈", path: "", name: "", icon: "&#xe694;" }
      ]
    };
  },
  mounted() {
    this.username = localStorage.username;
  }
};
</script>


<style lang="scss" scoped>
.top {
  width: 100vw;
  height: 3rem;
  background-color: red;
  background: url(../assets/images/khbgm.jpg);
  background-size: 100% 100%;
  .touxiang {
    padding-top: 1.3rem;
    margin-left: 0.2rem;
    overflow: hidden;
    .tou {
      float: left;
      width: 1.4rem;
      height: 1.4rem;
      border-radius: 50%;
      background-color: blue;
    }
    h3 {
      float: left;
      margin-left: 0.25rem;
      line-height: 1.4rem;
      font-size: 18px;
      font-weight: 900;
    }
  }
}
.dingdan {
  width: 100vw;
  height: 2.5rem;
  background-color: white;
  .wode {
    overflow: hidden;
    height: 0.8rem;
    line-height: 0.8rem;
    h3 {
      padding-left: 0.1rem;
      float: left;
      font-size: 18px;
      font-weight: 900;
    }
    h4 {
      padding-right: 0.1rem;
      float: right;
    }
  }
  .all {
    height: 1.7rem;
    overflow: hidden;
    text-align: center;
    li {
      float: left;
      width: 25%;
      i {
        display: inline-block;
        width: 100%;
        line-height: 0.9rem;
      }
      span {
        display: inline-block;
        width: 100%;
        height: 0.8rem;
      }
    }
  }
}
.shoucang {
  margin-top: 0.2rem;
  width: 100vw;
  height: 0.8rem;
  background-color: white;
  .sc {
    overflow: hidden;
    height: 0.8rem;
    line-height: 0.8rem;
    h3 {
      padding-left: 0.1rem;
      float: left;
      font-size: 18px;
      font-weight: 900;
    }
    h4 {
      padding-right: 0.1rem;
      float: right;
    }
  }
}
.mine {
  margin-top: 0.5rem;
  width: 100vw;
  li {
    line-height: 0.8rem;
    overflow: hidden;
    background-color: white;
    margin-top: 0.05rem;
    border-bottom: 1px black dashed;
    h3 {
      margin-left: 10px;
      float: left;
      font-weight: 900;
    }
    i {
      margin-right: 10px;
      float: right;
    }
  }
}
</style>

