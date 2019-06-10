<template>
    <div>
        <Head title="结算" :show="!!1"></Head>
        <van-address-list id="location"
        v-model="chosenAddressId"
        :list="list"
        @add="onAdd"
        @edit="onEdit"
        />
        <div id="newLocation" v-for='(item,i) in itemInfo' :key='i'>
            <div>{{item.location.name}} ,{{item.location.tel}}</div>
            <div>{{item.location.province}}{{item.location.city}}{{item.location.county }}</div>
        </div>
        <div id="orderBox">
            <div id="order" v-for='(item , i) in goods' :key='i'>
                <van-card
                :num="item.count"
                :tag="item.good.type.text"
                :price="item.good.price"
                :desc="'折扣:'+item.good.discount"  
                :title="item.good.name"
                :thumb="item.good.img"
                :origin-price="item.good.oldprice"
                >
                </van-card>
            </div>
            <div id="sum">
                <div><p>共有 <span class="totalSum">{{totalSum}}</span> 件商品</p><p>共计<span class="totalPrice">{{totalPrice}}</span> 元</p> <van-button type="info" id="account" siz='large' @click="account">结算</van-button> </div>
            </div>
        </div>
    </div>
</template>

<script>
import { AddressList,Toast} from 'vant';
export default {
  data() {
    return {
      goods:[],
      itemInfo:[],
      // totalSum,
      // totalPrice,
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '17771427257',
          address: '湖北省武汉市江夏区黄家湖大道333号武汉学院'
        },
        {
          id: '2',
          name: '李四',
          tel: '18771391493',
          address: '湖北省武汉市江夏区金融港青年公寓'
        }
      ],
    }
  },
  computed:{
        totalSum:{
            get(){
                var totalSum = 0
                this.goods.forEach((item)=>{
                    totalSum+=item.count;
                })
                 return totalSum;
            }
        },
        totalPrice:{
            get(){
                var totalPrice = 0;
                this.goods.forEach((item)=>{
                    totalPrice +=item.good.price*item.count;
                })
                return totalPrice;
            }
        }
  },
  methods: {
    onAdd() {
      Toast('新增地址');
      this.$router.push({name:'location'})
    },

    onEdit(item, index) {
      Toast('编辑地址:' + index);
    },
    account(){
        alert('此功能有待完善');
    },
  },
  mounted(){
      this.username = localStorage.getItem('username');
      this.$axios.post('/vue/getOrder',{
            username:localStorage.username,
      }).then(res=>{
          console.log('这是返回的结果:'+res);
          this.goods = res.data.result;
          console.log(this.goods);
      })
      this.$axios.post('/vue/getLocation',{
          username:localStorage.username,
      }).then(res=>{
          this.itemInfo = res.data.result;
          console.log(this.itemInfo);
      })
  }
}
</script>
<style scoped>
    #orderBox{
        margin-bottom: 1.2rem;
    }
    #location{
        height: 3.5rem;
    }
    #sum {
        height: 0.9rem;
        width: 100%;
        margin: 0.5rem 0;
    }
    #sum div p{
        width: 35%;
        height: 1rem;
        line-height: 0.9rem;
        float: left;
    }
    #sum .van-button{
        float: right;
        margin-right: 0.5rem;
    }
    .totalSum ,.totalPrice{
        font-weight: bold;
        color:#f40;
        font-size: 20px;
    }
</style>

