
    
<template>
  <div class="goods">
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
        <img :src="thumb" >
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{ goods.title }}</div>
        <div class="goods-price">{{ formatPrice(goods.price) }}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">运费：{{ goods.express }}</van-col>
        <van-col span="14">剩余：{{ goods.remain }}</van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
        <template slot="title">
          <span class="van-cell-text">有赞的店</span>
          <van-tag class="goods-tag" type="danger">官方</van-tag>
        </template>
      </van-cell>
      <van-cell title="线下门店" icon="location-o" is-link @click="sorry" />
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell title="查看商品详情" is-link @click="sorry" />
    </van-cell-group>


     <div>
       11111
        <button>+</button>
        <input type="text" name="" id="">
        <button>-</button>
    </div>

    <van-goods-action>
      <van-goods-action-mini-btn icon="chat-o" @click="sorry">
        客服
      </van-goods-action-mini-btn>
      <van-goods-action-mini-btn icon="cart-o" @click="onClickCart">
        购物车
      </van-goods-action-mini-btn>
      <van-goods-action-big-btn @click="sorry">
        加入购物车
      </van-goods-action-big-btn>
      <van-goods-action-big-btn primary @click="sorry">
        立即购买
      </van-goods-action-big-btn>
    </van-goods-action>
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
} from 'vant';
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
       userinformation:JSON.parse(window.sessionStorage.goodsinformation),
        // goodsprice:userinformation.price,
        // goodstitle:userinformation.title,
        // goodsimg:userinformation.img,
        // goodsid:userinformation.id,

    //  userInfo:sessionStorage.userInfo ,
    //   goodsnum:this.$route.query.num,
    //   goodsprice:this.$route.query.price,
    //   goodstitle:this.$route.query.title,
    //   goodsimg:this.$route.query.img,
    //   goodsId:this.$route.query.id,
      goods: {       
        title: '美国伽力果（约680g/3个）',
        price: 2680,
        express: '免运费',
        remain: 19,
        thumb: [       
          JSON.parse(window.sessionStorage.goodsinformation).img,
            //  this.$route.params.img,
        //   'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
        //  'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
        ]
      }
    };
  },
  mounted(){
    this.$axios.get("/vue/goodsDetail",{
      params:{
        //  id:this.goodsId,
        id:this.userinformation.id
      }  
    }).then(res=>{
      var result=res.data.result;
       this.goods.title=result.name;
       this.goods.price=result.price;
      // console.log(userinformation);
    })
  },
  methods: {
    formatPrice() {
      return '¥' + (this.goods.price).toFixed(2);
    },
    onClickCart() {
      this.$router.push({name:"cart"});
    },
    sorry() {
      // this.$axios.post("/vue/addCart",{

      // })
      this.$router.push({name:"cart"});

      //this.$router.push({name:"cart",params:{id:this.goodsId,num:1,price:this.goods.price,title:this.goods.title,img:this.$route.params.img}});

      // var data = {
      //   goodsprice:this.userinformation.price,
      //   goodstitle:this.userinformation.title,
      //   goodsimg:this.userinformation.img,
      //   goodsid:this.userinformation.id,

        // goodsnum:this.goodsnum,
        // goodsprice:this.price,
        // goodstitle:this.title,
        // goodsimg:this.goodsimg,
        // goodsid:this.goodsId,
        // }
       var data={
            goodsprice:this.userinformation.price,
            goodstitle:this.userinformation.title,
            goodsimg:this.userinformation.img,
            goodsid:this.userinformation.id,
            goodsnum:1,
        }
         data = JSON.stringify(data);
        //  console.log(data)
        // alert(data.goodsprice)
      this.$axios.get("/vue/addcart",{       
      params:{
        data,
       

        // goodsprice:this.goodsprice,
        // goodstitle:this.goodstitle,
        // goodsimg:this.goodsimg,
        // goodsid:this.id,
      }    
    }).then(res=>{
      console.log(res);
      // title: '进口香蕉',
      //   desc: '约250g，2根',
      //   price: 200,
      //   num: 1,
      //   thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
      // var result=res.data.result;
      //  this.goods.title=result.goodsnum;
      //   this.goods.price=result.goodsprice;
      //   this.goods.num=result.goodsnum;
        // this.goods.thumb=result.goodsimg;  
    })
    }
  }
};
</script>

<style lang="scss">
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
© 2019 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
