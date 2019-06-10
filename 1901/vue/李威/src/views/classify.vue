<template>
  <div>
    <Header title="商品分类" :show="true"></Header>
    <Topkong></Topkong>
    <div class="sort-container">
      <div class="leftSide">
        <ul>
          <li
            class="move"
            :class="isactive==i?'on':''"
            v-for="(gt,i) in goodsType"
            :key="i"
            @click="getList(gt,i)"
          >{{gt}}</li>
        </ul>
      </div>
      <div class="rightCon">
        <div class="sortList-content">
          <div class="hot-recommend">
            <div class="hot-title">
              <h1>热门{{type}}</h1>
            </div>
            <ul class="hot-goods">
              <li v-for="(gl,i) in goodsTypeList" :key="i">
                <a href>
                  <router-link :to="{name:'detail',params:{goodsId:gl._id}}">
                    <img :src="gl.img" alt>
                    <p>{{gl.brand}}</p>
                  </router-link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Buttonkong></Buttonkong>
  </div>
</template>

<script>
import Topkong from "../components/top-kong.vue";
import Buttonkong from "../components/button-kong.vue";
import { Indicator, Toast } from "mint-ui";
export default {
  components: {
    Topkong,
    Buttonkong
  },
  data() {
    return {
      goodsType: [],
      goodsTypeList: [],
      type: "",
      isactive: -1
    };
  },
  methods: {
    getList(type, index) {
      this.isactive = index;
      this.type = type;
      this.$axios
        .get("vue/getGoodsByType", { params: { type: type } })
        .then(res => {
          this.goodsTypeList = res.data.result;
        });
    }
  },
  created() {
    Indicator.open({
      text: "加载中...",
      spinnerType: "double-bounce"
    });
    this.$axios.get("vue/getGoodsType").then(res => {
      this.goodsType = res.data.result;
    });
    this.$axios
      .get("vue/getGoodsByType", { params: { type: "短袖T恤" } })
      .then(res => {
        this.$nextTick(() => {
          this.goodsTypeList = res.data.result;
          Indicator.close(); //请求成功后关闭弹框
          Toast({
            message: "商品列表加载成功",
            iconClass: "icon iconfont icon-web-icon-",
            duration: 1500
          });
        });
      });
  }
};
</script>

<style lang="scss" scoped>
.sort-container {
  color: #232323;
  width: 100%;
  display: -webkit-box;
  background: #fff;
  .leftSide {
    width: 23%;
    height: 100%;
    overflow: hidden;
    padding-bottom: 2rem;
    ul {
      background: #f2f2f2;
      li {
        border-bottom: 1px solid #e5e5e5;
        font-size: 0.28rem;
        padding: 0.3rem 0;
        text-align: center;
      }
      .on {
        background-color: #fff;
      }
    }
  }
  .rightCon {
    -webkit-box-flex: 1;
    height: 100%;
    overflow-y: scroll;
    .sortList-content {
      margin: 0.2rem;
      .hot-recommend {
        .hot-title {
          margin: 0.3rem 0 0.2rem;
          h1 {
            font-size: 0.28rem;
            text-align: center;
            line-height: 0.32rem;
          }
          h1:before {
            content: "";
            width: 1.5rem;
            height: 1px;
            background: #eee;
            display: block;
            margin-top: 0.14rem;
            position: absolute;
            float: left;
          }
          h1:after {
            content: "";
            width: 1.5rem;
            height: 1px;
            background: #eee;
            display: inline-block;
            margin-top: 0.14rem;
            position: absolute;
            right: 0;
          }
        }
        .hot-goods {
          li {
            float: left;
            width: 33%;
            text-align: center;
            a img {
              height: 1.7rem;
              width: 100%;
              padding: 4%;
            }
            a p {
              font-size: 0.26rem;
              height: 0.42rem;
              overflow: hidden;
            }
          }
        }
      }
    }
  }
}
</style>

