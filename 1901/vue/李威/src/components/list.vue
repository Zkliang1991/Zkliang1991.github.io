<template>
  <div>
    <ul v-if="flag">
      <li v-for="(good,i) in goods" :key="i" class="move">
        <a>
          <router-link :to="{name:'detail',params:{goodsId:good._id}}">
            <div class="tab_goods-img">
              <img class="img" :src="good.img" alt>
            </div>
          
          <h3>{{good.title}}</h3>
          <p class="price">
            <span>
              <span class="now">
                <span>{{good.price | currency("¥")}}</span>
              </span>
              <span class="old">
                <span>{{good.oldprice | currency("¥")}}</span>
              </span>
            </span>
            <img src="@/assets/images/likegoumai02.png" alt>
          </p>
          </router-link>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Indicator, Toast } from "mint-ui";
export default {
  data() {
    return {
      goods: [],
      flag:false
    };
  },
  filters: {
    currency(value, type) {
      if (!value) {
        return value;
      }
      value = type + value;
      return value;
    }
  },
  created() {
    Indicator.open({
      text: "加载中...",
      spinnerType: "double-bounce"
    });
    this.$axios
      .get("vue/sportlist", {
        params: {
          limit: 20
        }
      })
      .then(res => {
        this.$nextTick(() => {
          this.goods = res.data.result;
          Indicator.close(); //请求成功后关闭弹框
          Toast({
            message: "操作成功",
            iconClass: "icon iconfont icon-web-icon-",
            duration: 1500
          });
          this.flag = true;
        });
      });
  }
};
</script>

<style lang="scss" scoped>
div,
ul {
  overflow: hidden;
}
div ul {
  padding: 3% 2.2% 0;

  li {
    padding: 0 0.8% 3%;
    float: left;
    width: 50%;
    text-align: left;

    a {
      display: block;
      color: #333;
      text-decoration: none;
      position: relative;

      .tab_goods-img {
        position: relative;

        .img {
          display: block;
          width: 100%;
        }
      }

      h3 {
        color: #232326;
        font-size: 0.28rem;
        line-height: 0.36rem;
        height: 0.72rem;
        overflow: hidden;
        margin: 0.2rem 0 0.16rem;
        word-break: break-all;
      }

      .price {
        text-align: center;

        span {
          display: block;
          width: 62%;
          float: left;
          line-height: 1.2;
          white-space: nowrap;

          .now {
            color: #f33;
            display: inline-block;
            width: 60%;

            span {
              font-size: 0.32rem;
              font-weight: 800;
            }
          }
          .old {
            color: #ccc;
            font-size: 0.24rem;
            text-decoration: line-through;
            display: inline-block;
            margin-top: 0.1rem;
            width: 40%;

            span {
              color: #ccc;
              font-size: 0.24rem;
              text-decoration: line-through;
            }
          }
        }

        img {
          display: block;
          width: 38%;
          float: left;
        }
      }
    }
  }
}
</style>



