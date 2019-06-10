<template>
  <div>
    <Head :title="$route.query.title" :show="true"></Head>
    <div class="goods">
      <img :src="good.img" alt width="100%" height="400px" class="movie-img">
      <div class="movie">
        <h2 style="font-size:20px">
          {{good.title}}
          <p class="grade">{{good.grade}}</p>
        </h2>
      </div>
      <div class="movies">
        <div>
          <p style="font-size:14px">{{good.genres}}</p>
          <p class="price">￥：{{good.price}}</p>
        </div>

        <p style="font-size:14px">{{good.name}}</p>
        <p style="font-size:14px">{{good.language}}|{{good.mins}}</p>
        <p style="font-size:14px;marginTop:5px">{{good.detail}}</p>
        <div>
          <p class="fen">评分:</p>
          <van-rate class="pin" v-model="selected"/>
          <van-stepper class="add" v-model="value"/>
        </div>
      </div>
      <van-cell-group class="goods-cell-group">
        <van-cell value icon="shop-o" is-link @click="sorry">
          <template slot="title">
            <span class="van-cell-text">最火爆的影院</span>
            <van-tag class="goods-tag" type="danger">官方</van-tag>
          </template>
        </van-cell>
        <van-cell title="附近的影院" icon="location-o" is-link @click="sorry"/>
      </van-cell-group>
      <van-goods-action>
        <van-goods-action-mini-btn icon="chat-o" @click="sorry">客服</van-goods-action-mini-btn>
        <van-goods-action-mini-btn icon="cart-o" @click="gotoBuy">购物车</van-goods-action-mini-btn>
        <van-goods-action-big-btn @click="gotoCar">加入购物车</van-goods-action-big-btn>
        <van-goods-action-big-btn primary @click="gotoCar">立即购买</van-goods-action-big-btn>
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn
} from "vant";
export default {
  components: {
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionBigBtn.name]: GoodsActionBigBtn,
    [GoodsActionMiniBtn.name]: GoodsActionMiniBtn
  },
  data() {
    return {
      movieId: this.$route.params.movieId,
      good: {},
      value: 1,
      selected: 4
    };
  },
  mounted() {
    this.$axios
      .get("/vue/getMovieOne", {
        params: {
          movieId: this.movieId
        }
      })
      .then(res => {
        this.good = res.data.result;
      });
  },

  methods: {
   
    sorry() {
      Toast("暂无后续逻辑~");
    },

    gotoCar(){
      console.log(this.movieId)
      console.log(window.sessionStorage.username)
      console.log(this.good);
      if (window.sessionStorage.username) {
        this.$axios.post("/vue/addCart", {
            movieId: this.movieId,
            username: window.sessionStorage.username,
            num: this.value,
            title: this.good.title,
            img: this.good.img,
            price: this.good.price,
            name:this.good.name,
          
          })
          .then(res => {
            console.log(res); 
          });
      } else {
        Toast("请先登录后再购买商品");
        this.$router.push({ name: "login" });
      }
    },
    gotoBuy(){
      this.$router.push({ name: "cart" });
    }
  }
};
</script>
 
 <style lang="less">
.movie {
  margin-left: 0.2rem;
}
.movie-img {
  margin-top: -5rem;
}
.movies {
  margin-left: 0.2rem;
}
.grade {
  color: yellowgreen;
  float: right;
  margin-right: 0.2rem;
}
.price {
  font-size: 20px;
  color: red;
  float: right;
  margin-right: 0.2rem;
}
.goods {
  padding-bottom: 50px;
  &-cell-group {
    margin: 15px 0;
    .van-cell__value {
      color: #999;
    }
  }
  &-tag {
    margin-left: 5px;
  }
}
.foot {
  width: 100%;
  height: 1rem;
  position: fixed !important;
  bottom: 0 !important;
  left: 0 !important;
}

.buy {
  width: 50%;
  float: left;
}
.pin {
  margin-left: 0.8rem;
}
.fen {
  float: left;
}
</style>
 