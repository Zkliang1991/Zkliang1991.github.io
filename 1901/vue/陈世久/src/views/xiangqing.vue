<template>
	<div id="imgah" class="xqd">
		<Head :title="$route.query.title" :show="true"></Head>
		  <div class="goods">
        <img :src="good.img"width="100%">
    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{ good.title }}</div>
        <div class="goods-price" style="color: #5E740B; font-size: 30px;">{{ good.price*count }}元</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">运费：{{ good.express }}</van-col>
        <van-col span="14">剩余：{{ good.remain }}</van-col>
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

    <van-cell-group class="goods-cell-group" style="margin-bottom: 20px;">
    <van-button type="primary" @click="add" style="margin-left: 20px;margin-right: 10px;">+</van-button><input type="text" v-model="count" class="inp" style="width: 200px;height: 45px;border:1px solid #006600;"value="1"> <van-button type="danger" @click="rand" style="margin-left: 20px;">-</van-button>
    </van-cell-group>

    <van-goods-action>
			  <van-goods-action-mini-btn icon="chat-o" @click="sorry">
        客服
      </van-goods-action-mini-btn>
      </van-goods-action-mini-btn>
      <van-goods-action-big-btn @click="addCart">
        加入购物车
      </van-goods-action-big-btn>
      <van-goods-action-big-btn primary @click="buGood">
				
        立即购买
      </van-goods-action-big-btn>
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
				goodId:this.$route.params.goodId,
				good:{
					
				},
				goods:{
					 express: '免运费',
					remain: 19,
				},
				count:1,
				show:true
			}
		},
		mounted(){
			this.$axios.get("/vue/xiangqing",{
				params:{
					goodId:this.goodId
				}
			}).then(res=>{
				this.good=res.data.result
			})
		},
		  methods: {
    sorry() {
      Toast('暂无后续逻辑~');
    },
		addCart(){
			 this.$axios.post("/vue/addCart",{
			         goodId:this.goodId,
			         count:this.count,
			         good:JSON.stringify(this.good),
			     }).then(res=>{
			         console.log(res.data);
			    })
			this.$router.push({name:'cart'})
		},
		buGood(){
				// 			 this.$axios.post("/vue/addCart",{
				//          goodId:this.goodId,
				//          count:this.count,
				//          good:JSON.stringify(this.good),
				//      }).then(res=>{
				//          console.log(res.data);
				//     })
				// this.$router.push({name:'cart'})
        },
				add(){
					this.count++;
				},
				rand(){
					this.count--;
					if(this.count<1){
						this.count=1;
					}
				}
		},
}
	
</script>

<style scoped>
	#xq{
		font-size: 30px;
	}
	.goods {
  padding-bottom: 50px;
 
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
	.add{
		margin-left: 20px;
	}
	.inp{
		width: 200px;
		height: 45px;
		border: 1px solid #006600;
	}
	
	
  }
  &-tag {
    margin-left: 5px;
  }
  #imgah img{
	  width: 100%;
  }
}
</style>
