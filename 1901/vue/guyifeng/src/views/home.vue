<template>
  <div class="home">
    <Head title="首页" :backShow="false" id="toubu"></Head>
    <nut-swiper
      direction="horizontal"
      ref="dem4"
      :autoPlay="2000"
      id="dome4"
      :paginationVisible="true"
      :paginationClickable="true"
    >
      <div class="nut-swiper-slide gray" v-for="(img,index) in imgs" :key="index">
        <img :src="img" alt class="swiper-img">
      </div>
    </nut-swiper>
    <nut-tabbar
      @tab-switch="tabSwitch2"
      type="based"
      :tabbarList="tabList2"
      style="height:0.5rem;background-color:#F5F4F0;"
    ></nut-tabbar>
    <div class="menu">
      <div class="fuli">
        <ul class="gift">
          <li>
            <img src="../assets/images/image/gift.jpg" alt>
          </li>
          <li>
            <img src="../assets/images/image/fuli.jpg" alt>
          </li>
        </ul>
        <ul class="xinpin">
          <li>
            <img src="../assets/images/image/xinpin.gif" alt>
          </li>
          <li>
            <img src="../assets/images/image/xinren.gif" alt>
          </li>
          <li>
            <img src="../assets/images/image/chunyou.gif" alt>
          </li>
        </ul>
        <ul class="baokuan">
          <li>
            <img src="../assets/images/image/baokuan.gif" alt>
          </li>
          <li>
            <img src="../assets/images/image/bigou.gif" alt>
          </li>
          <li>
            <img src="../assets/images/image/jifen.gif" alt>
          </li>
        </ul>
      </div>
    </div>
    <div class="miaosha">
      <h2>丨唇诱秒杀</h2>
      <ul>
        <li v-for="(item,index) in imgs1" :key="index">
          <img :src="item" alt>
        </li>
      </ul>
    </div>
    <div class="xpsd">
      <h2>丨新品速递</h2>
      <div class="xpsd_img">
        <img src="../assets/images/xpsd.jpg" alt>
      </div>
    </div>
    <van-card
      v-for="(good,index) in goods"
      :key="index"
      :tag="good.type"
      :price="good.price"
      :title="good.title"
      :desc="good.type"
      :thumb="good.img"
      origin-price="10.00"
      @click="goGoods(good._id)"
    >
    </van-card>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  data() {
    return {
      goods: [],
      imgs1: [
        require("@/assets/images/ms1.jpg"),
        require("@/assets/images/ms2.jpg"),
        require("@/assets/images/ms3.jpg")
      ],
      imgs: [
        require("@/assets/images/kh1.jpg"),
        require("@/assets/images/kh2.jpg"),
        require("@/assets/images/kh3.jpg"),
        require("@/assets/images/kh4.jpg")
      ],
      tabList2: [
        {
          tabTitle: "全场包邮",
          icon: "",
          name: "baoyou",
          path: "/baoyou"
        },
        {
          tabTitle: "正品保证",
          icon: "",
          name: "zhengpin",
          path: "/zhengpin"
        },
        {
          tabTitle: "极速发货",
          // curr: false,
          icon: "",
          name: "fahuo",
          path: "/fahuo"
        },
        {
          tabTitle: "售后无忧",
          icon: "",
          name: "shouhou",
          path: "/shouhou"
        }
      ]
    };
  },
  mounted() {
    this.$axios
      .get("/vue/getKouHong", {
        params: {
          keyword: "小"
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
    tabSwitch2: function(value, index) {
      console.log(value);
      // this.$router.push({ name: value.name });
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
#toubu {
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;
  left: 0;
}
#dome4 {
  width: 100%;
  margin-top: 50px;
  .nut-swiper-slide img {
    width: 100vw;
    height: 4rem;
  }
}

.menu {
  width: 100vw;
  height: 4.8rem;
  margin-top: 0.1rem;
  .fuli {
    overflow: hidden;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    padding-left: 0.25rem;
    background-color: white;
    img {
      width: 2.2rem;
      height: 1.1rem;
    }
    .gift {
      float: left;
      width: 2.2rem;
      li {
        height: 1.1rem;
        margin-top: 0.3rem;
      }
      li:first-child {
        margin-top: 0;
        height: 2.5rem;
        img {
          width: 2.2rem;
          height: 2.5rem;
        }
      }
    }
    .xinpin {
      float: left;
      margin-left: 0.2rem;
      width: 2.2rem;
      li {
        height: 1.1rem;
        margin-top: 0.3rem;
      }
      li:first-child {
        margin-top: 0;
      }
    }
    .baokuan {
      float: left;
      margin-left: 0.2rem;
      width: 2.2rem;
      li {
        height: 1.1rem;
        margin-top: 0.3rem;
      }
      li:first-child {
        margin-top: 0;
      }
    }
  }
}
.miaosha {
  width: 100%;
  h2 {
    line-height: 46px;
    font-weight: 900;
    font-size: 30px;
  }
  ul {
    width: 100%;
    overflow: hidden;
    li {
      float: left;
      width: 29%;
      padding-left: 3.3%;
      height: 4rem;
      text-align: center;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.xpsd {
  margin-top: 10px;
  width: 100vw;
  h2 {
    color: #a67612;
    line-height: 46px;
    font-weight: 900;
    font-size: 30px;
  }
  .xpsd_img {
    width: 100%;
    height: 5rem;
    img {
      width: 100%;
      height: 5rem;
    }
  }
}
</style>

