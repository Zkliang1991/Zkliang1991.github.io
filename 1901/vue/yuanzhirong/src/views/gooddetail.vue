<template>
  <div class="goods">
    <Head title="商品详情" :show="true" style="background-color:red"></Head>
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item>
        <img :src="goods.img">
      </van-swipe-item>
      <van-swipe-item>
        <img :src="goods.img">
      </van-swipe-item>
    </van-swipe>
    <van-cell-group>
      <van-cell>
        <div class="goods-title">
          <van-tag class="goods-tag" type="success">自贸</van-tag>
          <span style="color:red">【{{goods.grayB}}】</span>
          {{ goods.title }}
        </div>
        <div class="goods-price">
          <van-row gutter="20">
            <van-col span="8">{{ "¥" + (goods.price *1).toFixed(2) }}</van-col>
            
            <van-col span="8">
              <van-stepper v-model="value" integer :min="1" :max="40" :step="1"/>
            </van-col>
          </van-row>
        </div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">
          好评：
          <span style="color:red">{{ goods.fr }}</span>
        </van-col>
        <van-col span="14">
          产地：
          <span style="color:red">{{ goods.pro_country }}</span>
        </van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
        <template slot="title" >
          <van-tag class="goods-tag" type="danger">官方</van-tag>
          <span  class="van-cell-text " style="font-size:10px;color:red">{{goods.grayB}}</span>
        </template>
      </van-cell>
      <van-cell title="线下门店" icon="location-o" is-link @click="sorry"/>
    </van-cell-group>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服"/>
      <van-goods-action-icon :info="carNum" icon="cart-o" text="购物车" @click="gotocar"/>
      <van-goods-action-icon icon="shop-o" text="店铺"/>
      <van-goods-action-button type="warning" @click="addcar" text="加入购物车"/>
      <van-goods-action-button type="danger" text="立即购买"/>
    </van-goods-action>
  </div>
</template>

<script>
import {Toast } from "vant";
import {mapState,mapActions} from "vuex";
export default {
  components: {},
  computed:{
    ...mapState([
			'carNum'
		])
    },
  data() {
    return {
      value:1,
      goods:{},
      shop:{},
      id:"",
    };
  },
  methods: {
    sorry() {
      Toast("暂无后续逻辑~");
    },
    addcar(){
      if(sessionStorage.userInfo){

      
      console.log(this.value);
      console.log(this.goods);
      this.shop.count = this.value;
      this.shop.gID = this.goods._id;
      this.shop.title = this.goods.title;
      this.shop.price = this.goods.price;
      this.shop.pro_country = this.goods.pro_country;
      this.shop.pro_country1 = this.goods.pro_country1;
      this.shop.grayB = this.goods.grayB;
      this.shop.img = this.goods.img;
      this.shop.username = this.$store.state.username;
      this.shop.flag = 0;

      this.$axios.post("/vue/addcar",{shop:this.shop}).then(res=>{ });
      }else{
          Toast("还没有登陆,请先去登陆")
      }
    },
    gotocar(){
      this.$router.push({name:"car"});
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    this.$axios.get("/vue/getGoodDetail/",{params:{id:this.id}}).then(res => {
      console.log("------")
      console.log(this.$route.params.id);
      console.log(res.data.result);
      this.goods = res.data.result;
    });
  }
};
</script>

<style lang="less" scoped>
.goods {
  padding-top: 40px;
  padding-bottom: 50px;
  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }
  &-title {
    font-size: 16px;
  }
  &-price {
    font-size: 20px;
    color: #f44;
  }
  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }
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
</style>