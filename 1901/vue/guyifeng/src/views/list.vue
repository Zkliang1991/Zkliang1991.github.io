<template>
  <div id="nice">
    <Head title="商品分类" :backShow="false" id="toubu"></Head>
    <div class="bao">
      <ul class="left">
        <li class="kouhong" v-for="(item,i) in kouhong" :key="i" @click="dianji(item)">{{item}}</li>
      </ul>
      <ul class="shangpin">
        <li v-for="(good,i) in goods" :key="i" class="item move" @click="goGoods(good._id)">
          <img :src="good.img" alt class="item-img">
          <h2>
            <p>品牌:</p>
            <span>{{good.type}}</span>
          </h2>
          <h3 style="color:red;">
            <p>价格:</p>
            <span>¥{{(good.price*1).toFixed(2)}}</span>
          </h3>
          <h3>
            <p>评论:</p>
            <span>{{good.punlun}}条</span>
          </h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: "圣罗兰",
      goods: [],
      kouhong: [
        "圣罗兰",
        "纪梵希",
        "迪奥",
        "阿玛尼",
        "卡姿兰",
        "魅可",
        "欧莱雅",
        "香奈儿"
      ]
    };
  },
  mounted() {
    this.$axios
      .get("/vue/getKouHong", {
        params: {
          keyword: "圣罗兰"
        }
      })
      .then(res => {
        console.log(res.data.result);
        this.goods = res.data.result;
      });
  },
  methods: {
    goGoods(_id) {
      this.$store.state.goodId = _id;
      this.$router.push({ name: "good" });
    },
    dianji(item) {
      this.$axios
        .get("/vue/getKouHong", {
          params: {
            keyword: item
          }
        })
        .then(res => {
          console.log(res.data.result);
          this.goods = res.data.result;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#toubu {
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;
  left: 0;
}
.bao {
  width: 100%;
  overflow: hidden;
  margin-bottom: 75px;
  .left {
    float: left;
    position: fixed;
    left: 0;
    top: 55px;
    width: 16%;
    float: left;
    .kouhong {
      line-height: 1.2rem;
      font-size: 16px;
      text-align: center;
      font-weight: 900;
      border-bottom: 1px solid black;
    }
  }
  .shangpin {
    margin-left: 16%;
    margin-top: 55px;
    float: left;
    overflow: hidden;
    width: 84%;
    .item {
      height: 350px;
      float: left;
      width: 100%;
      background-color: white;
      margin-bottom: 5px;
      img {
        width: 100%;
        height: 250px;
      }
      h2 {
        padding-left: 20px;
        line-height: 35px;
        overflow: hidden;
        p {
          float: left;
          color: black;
        }
        span {
          float: left;
          padding-left: 10px;
          font-size: 20px;
          font-weight: 900;
        }
      }
      h3 {
        padding-left: 20px;
        line-height: 30px;
        overflow: hidden;
        p {
          float: left;
          color: black;
        }
        span {
          float: left;
          padding-left: 10px;
          font-size: 20px;
          font-weight: 900;
        }
      }
    }
  }
}
</style>




