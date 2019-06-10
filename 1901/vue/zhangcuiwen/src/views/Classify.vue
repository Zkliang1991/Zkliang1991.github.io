<template>
    <div v-if="show">
        <Head title="列表" show="true"></Head>
          <div class="classify1">
            <h1 class="hi1 sty">{{good.title}}</h1>
            <div class="classimg"><img :src="good.img" alt=""></div>
            <h2  class="sty1" > {{good.shopname}} -- 还有{{good.num}}件</h2>
            <h4 class="sty1" > 价格为：{{good.price }}元  </h4>
        </div>
        <div>
            <form>
             <mt-button type="primary" class="but1" @click="but1"> + </mt-button>
            <button>{{buynum}}</button>
            <mt-button type="primary" class="but1" @click="desc" min=0> -  </mt-button>
            </form>
        </div>
        <van-goods-action>
            <van-goods-action-mini-btn
                icon="cart-o"
                text="购物车"
                @click="onClickMiniBtn"
            />
            <van-goods-action-big-btn
                text="加入购物车"
                @click="onClickBigBtn"
            />
            <!-- <van-goods-action-big-btn
                primary
                text="立即购买"
                @click="onClickBigBtn1"
            /> -->
            
        </van-goods-action>
    </div>
</template>
<script>
import { Sku } from 'vant';

export default {

    data(){
        return {
            goodId:this.$route.params.id,
            good:{},
            show:false,
            buynum:1,
            userinfo:"",      
        }
    },
      created(){
          this.userinfo = sessionStorage.getItem('username');
        },
    methods:{
        onClickMiniBtn(){
            this.$router.push({name:'car'})
        },
        onClickBigBtn(){
            this.$axios.post("/vue/addCar",{
                goodId:this.goodId,
                count:this.buynum,
                good:JSON.stringify(this.good)
            }).then(res=>{
              
            })
        },
 
        but1(){
            this.buynum++
        },
        desc(){
            if(this.buynum==1){ 
                this.buynum==1
            }else{
                 this.buynum--
            }
        },
    },
    mounted(){
        this.$axios.get("/vue/getGoodOne",{
            params:{
                goodId:this.goodId
            }
        }).then(res=>{
            this.good = res.data.result;
            this.show = true;
        })
    }
}
</script>
<style>
    #int1{
        display:inline-block;
        width: 20%;
        margin:auto;
        height: .8rem;
    }
    .but1{
        display:inline-block;
        width: 10%;
        height: .8rem;
    }
    .classify1{
        padding:40px 0 0 0 ;
        font-size:18px;
    }
    .classimg{
        width: 80%;
        height: 6rem;
        margin: auto;
        border:1px solid silver;
         box-shadow: 5px 5px 5px #888888;
    }
    .sty{
        box-shadow: 5px 5px 5px #888888;
        border:1px solid silver ;
        margin-bottom: 5px;
    }
    .sty1{
        border:1px solid white;
        margin: 5px;
        background-color: #008489;
        color:whitesmoke;
    }
</style>
