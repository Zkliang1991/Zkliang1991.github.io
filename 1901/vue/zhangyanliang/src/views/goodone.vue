<template>
<div>
    <Head :title="good.goodname" :show="true"></Head>
    <div class="goods">    
      <div >
        <img :src="good.img" contain class="img">
      </div>
     <van-cell-group>
      <van-cell>
        <div class="goods-title">{{ good.goodname }}</div>
        <div class="goods-price">单价：<span>{{ good.price | money("¥",2) }}</span></div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="14">
            <van-stepper v-model="mun"  input-width="50px"/>
        </van-col>
      </van-cell>
    </van-cell-group>
   <van-cell title="单元格" is-link />
     <van-goods-action>
      <van-goods-action-mini-btn icon="chat-o">
        私敲
      </van-goods-action-mini-btn>
      <van-goods-action-mini-btn icon="cart-o">
        购物车
      </van-goods-action-mini-btn>
      <van-goods-action-big-btn  @click="gocar">
        加入购物车
      </van-goods-action-big-btn>
      <van-goods-action-big-btn primary  @click="goumai">
        立即购买
      </van-goods-action-big-btn>
    </van-goods-action>
    </div>
    </div>
</template>
<script>
//  import { Collapse, CollapseItem } from 'vant';
import { Dialog } from 'vant';
export default {
    data() {
    return {
      goodid:this.$route.query.goodid,
      mun:1,
      good:{}
    };
  },
  mounted(){
    this.$axios.get("/vue/goodOne",{
      params:{
        goodid:this.goodid
      }
    }).then(res=>{
      this.good = res.data.result;
      console.log(this.good)
    })
  },
  methods:{
    goumai(){

    },
    gocar(){
     Dialog.confirm({
      message: '是否去你的购物车'
      }).then(() => {
         this.$router.push({name:'car'})
      }).catch(() => {

      });
    }
  }

}
</script>
<style scoped>
    .goods{
        padding-bottom:50px;
    }
    .goods img{
      width: 100%;
      height: 4rem;
    }
    .goods-title{
        font-size: 16px;
    }
    .goods-price{
        line-height: 40px;
      
    }
    .goods-price span{
          font-size: 20px;
        color: #f44;
    }
    .goods-express{
        color: #999;
        font-size: 12px;
        padding: 5px 15px;

    }
   .chat-o{
     color: #f44;
   }
</style>


