<template>
    <div>
       <div class='content'>
            <div class='goods'>
                <van-swipe class="goods-swipe" :autoplay="3000">
        <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
          <img :src="thumb" >
        </van-swipe-item>
        <!-- <van-swipe-item >
          <img :src="$route.query.img" >
        </van-swipe-item> -->
      </van-swipe>
            <van-cell-group>
        <van-cell>
          <div class="goods-title">{{ goods.title }}</div>
          <div class="goods-price">{{ formatPrice(goods.price) }}</div>
        </van-cell>
        <van-cell class="goods-express">
          <van-col span="10">运费：{{ goods.express }}</van-col>
          <van-col span="14">{{ goods.remain }}</van-col>
        </van-cell>
      </van-cell-group>

      <van-cell-group class="goods-cell-group">
        <van-cell title="查看商品详情" is-link  />
      </van-cell-group>
      <van-goods-action>
        <van-goods-action-mini-btn icon="chat-o">
          客服
        </van-goods-action-mini-btn>
        <van-goods-action-mini-btn icon="cart-o" @click="onClickCart">
          购物车
        </van-goods-action-mini-btn>
        <van-goods-action-big-btn @click="addcar">

          加入购物车
        </van-goods-action-big-btn>
        <van-goods-action-big-btn primary @click="tobuy">
          立即购买
        </van-goods-action-big-btn>
      </van-goods-action>
          </div>
          </div>

          <div v-if='flag'>
             <shadowBox :goodsDetail="goods" from='add' @close='flag=false'></shadowBox>
          </div>
         <div v-if='flagBuy'>
             <shadowBox :goodsDetail="goods" from='buy' @close='flagBuy=false'></shadowBox>
          </div>
   
    </div>
</template>
<script>
import shadowBox from "../components/shadowBox"
export default {
  data() {
    return {
      goodId: this.$route.params.goodId,
      flag: false,
      flagBuy:false,
      number: 1,
       goods: {
        title: '美国伽力果（约680g/3个）',
        price: 2680,
        express: '免运费',
        remain: 19,
        thumb: [
         this.$route.query.img,
             //$route.query.img
           'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
           'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
        ]
      },
    }
  },
  

  components:{
    shadowBox

  },
  mounted() {
    this.$axios.get("/vue/getGoodDetails", {
        params: {
          id: this.goodId
        }
      })
      .then(res => {
        var goodDetail=res.data.result;
        console.log(goodDetail)
        this.goods.img=this.$route.query.img,
        this.goods.title=goodDetail.detail_title;
         this.goods.id=goodDetail.id;
        this.goods.price=goodDetail.detail_price;
        this.goods.remain=goodDetail.detail_stock;
        this.goods.size=goodDetail.size.size_type;
        if(goodDetail.color.color_type.length==1){
           this.goods.color=goodDetail.color.color_type[0].split(',');
        }else{
          this.goods.color=goodDetail.color.color_type
        }
        this.goods.thumb=goodDetail.color.color_type_link
      });
  },
  methods: {
    changeFlag(){
      this.flag=false

    },
    
    onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = true;
      Toast(item.name);
    },
    formatPrice() {
      return '¥' + (this.goods.price / 1).toFixed(2);
    },
    onClickCart() {
      this.$router.push({name:'cart'});
    },
    addcar() {
      this.flag = true;
      //Toast('暂无后续逻辑~');
    },
    tobuy(){
      this.flagBuy=true

    }
  }

};
</script>
<style lang='scss' scoped>
  .goods {
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

