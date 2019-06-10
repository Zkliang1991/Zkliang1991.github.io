<template>
    <div id="car">
         <p class="peoples">购物车</p> 
        <ul v-for="(shop,i) in shops" :key="i">
           <van-card
                :num="shop.count"
                :price="shop.good.price"
                :desc="shop.good.shopname"  
                :title="shop.good.title"
                :thumb="shop.good.img"
            >
              <div slot="footer">
                <van-button size="mini" class="del btn" @click="del(shop.good._id,i)">删除</van-button>
                 <!-- <van-button  size="mini" class="del btn"></van-button> -->
              </div>
            </van-card>
        </ul>
       
        <div id="address1">
            <van-submit-bar
                    :price="3050"
                    button-text="提交订单"
                    @submit="onSubmit"
                    class="shopcar"
                    >
                <van-checkbox v-model="checked">全选</van-checkbox>
                <!-- <span slot="tip">
                    你的收货地址不支持同城送, <span>修改地址</span>
                </span> -->
            </van-submit-bar>
        </div>
       <van-skeleton title avatar :row="3" />
    </div>
</template>
<script>
import Demo from "../components/demo.vue"
import { Button } from 'mint-ui';
export default {
    data(){
        return{
            flag:true,
            shops:"",
            
        }
    },
    components:{
        Demo:Demo,
    },
   
     created(){
        this.$axios.get('/vue/shopcar').then(res=>{
                this.shops = res.data.result
                console.log(this.shops)
        })
    },
    methods:{
        del(a,b){
             this.shops.splice(b, 1);
             this.$axios.get('/vue/del',{id:a}).then(res=>{
                this.shops = res.data.result
                console.log(this.shops)
        })
            this.$router.go(0)
        }
    }
}
</script>
<style>
.btn{
    height:10px;
    line-height: 10px;
}
.shopcar{   
    margin-bottom:50px;
    margin-top: .5rem;
}
.peoples{
    background-color:#26a2ff;
    color:white;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
}
#address1{
    height: 3rem;
    width: 100%;
}
</style>


