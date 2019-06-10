<template>
  <div class="page">
    <header>
      <ul>
        <li class="li0" @click="()=>{$router.go(-1)}"></li>
        <li class="li1">我的收藏</li>
        <li class="li2">
          <a v-show="show" @click="changeshow">编辑</a>
          <a v-show="!show" @click="changeshow">完成</a>
        </li>
      </ul>
    </header>
    <div class="list_item" v-for="(good,i) in colgoods" :key="i">
      <div class="cal" v-show="show2">
        <van-checkbox class="xuan" v-model="good.check" checked-color="#d90000"></van-checkbox>
      </div>
      <div class="info">
        <div class="img">
          <img :src="good.goodsInfo.imgs" alt>
        </div>
        <div class="des">
          <p class="words">{{good.goodsInfo.des}}</p>
          <p class="price">
            <span class="le">
              <i>￥</i>
              {{good.goodsInfo.newPrice}}
            </span>
            <span class="old">
              <i>￥</i>
              {{good.goodsInfo.oldPrice}}
            </span>
          </p>
        </div>
      </div>
    </div>
    <div class="footer" v-show="show2">
      <van-checkbox class="xuan" v-model="quan" checked-color="#d90000">全选</van-checkbox>
      <div class="cancel" v-show="cancelcol">取消收藏</div>
      <div class="cancel2" @click="quxiaos" v-show="!cancelcol">取消收藏</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      show2: false,
      colgoods: [],
      cancelcol: true
    };
  },
  methods: {
    changeshow() {
      this.show = !this.show;
      this.show2 = !this.show2;
    },
    quxiaos(){
      var delArr = [];
      this.colgoods = this.colgoods.filter((good)=>{
      if(good.check){
        delArr.push(good.goodId);
      }
      return !good.check
      })
      this.$axios.get("/vue/cancelManycol",{params:{delArr}})
      .then(res=>{
        console.log(res);
      })
    }
  },
  mounted() {
    this.$axios.get("/vue/findmycol").then(res => {
      var lists = res.data.result;
      this.colgoods = lists.map((item, index) => {
        item.goodsInfo = JSON.parse(item.goodsInfo);
        item.check = false;
        return item;
      });
    });
  },
  watch: {
    colgoods:{
        deep:true,
        handler(val){
          var flag = true;
          val.forEach((good)=>{
            if(good.check){
              flag = false;
            }
          })
          this.cancelcol = flag;
        }
    }
  },
  computed: {
    quan: {
      get() {
        var flag = true;
        this.colgoods.forEach(good => {
          if (!good.check) {
            flag = false;
          }
        });
        return flag;
      },
      set(val) {
        this.colgoods = this.colgoods.map(good => {
          good.check = val;
          return good;
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  background-color: #f1f1f1;
  height: 100%;
  header {
    width: 100%;
    height: 44px;

    background-color: #fff;
    ul {
      overflow: hidden;
      li {
        position: absolute;
        display: block;
        height: 44px;
        line-height: 44px;
        font-size: 16px;
        color: #444;
      }
      .li0 {
        background-image: url(../assets/images/d3.png);
        background-position: -149px -131.5px;
        background-size: 330.5px;
        width: 44px;
        height: 44px;
        z-index: 5;
      }
      .li1 {
        top: 0;
        text-align: center;
        width: 100%;
        z-index: 1;
        margin-left: 0;
      }
      .li2 {
        right: 12px;
        top: 0;
        font-size: 12px;
        width: auto;
        z-index: 2;
      }
    }
  }
  .list_item {
    position: relative;
    height: 132px;
    width: 100%;
    background-color: #fff;
    margin-top: 12px;
    overflow: hidden;
    .cal {
      position: relative;
      float: left;
      width: 50px;
      height: 100%;
      .xuan {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .info {
      height: 132px;
      margin-left: 38px;
      padding-top: 18px;
      .img {
        position: relative;
        width: 98px;
        height: 98px;
        float: left;
        img {
          width: auto;
          height: 100%;
          margin: 0 auto;
        }
      }
      .des {
        position: relative;
        height: 98px;
        margin-left: 107px;
        margin-right: 20px;
        text-align: left;
        .words {
          color: #333;
          font-size: 14px;
          line-height: 20px;
          margin-top: 2px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .price {
          position: absolute;
          width: 100%;
          bottom: 0;
          left: 0;
          line-height: 16px;
          .le {
            float: left;
            margin-right: 5px;
            i {
              font-style: normal;
              font-size: 12px;
            }
          }
          .old {
            text-decoration: line-through;
            color: #ccc;
            font-size: 10px;
            float: left;
            i {
              font-style: normal;
              font-size: 12px;
            }
          }
          .num {
            float: right;
            font-size: 14px;
            color: #999;
            margin-right: 12px;
          }
        }
      }
    }
  }
  .footer {
    height: 47px;
    width: 100%;
    max-width: 640px;
    border-top: 1px solid #ddd;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    overflow: hidden;
    .xuan {
      margin-top: 12px;
      float: left;
      margin-left: 20px;
    }
    .cancel {
      width: 99px;
      background-color: #ccc;
      height: 47px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      line-height: 47px;
      float: right;
    }
    .cancel2 {
      width: 99px;
      background-color: #d90000;
      height: 47px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      line-height: 47px;
      float: right;
    }
  }
}
</style>
