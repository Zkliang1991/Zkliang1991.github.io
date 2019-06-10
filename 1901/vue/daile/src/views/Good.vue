<template>
    <div v-if="show">
        <Head :title="$route.query.name" :show="true" ></Head>
        <div id="listd" >
            <img :src="good.img" alt=""  class="move1">
            <h2> {{good.name}} </h2>
            <h4>服装类型: {{good.type.text}} </h4>
            <h4>金额: <span> {{good.price}}</span> </h4>
             <button id="butt" @click="butt">-</button>
          <input type="text" :value="num1" id="sp"> 
            <!-- <span id="sp">{{num1}}</span> -->
            <button @click="add">+</button> 
            <!-- <van-stepper v-model="num1" /> -->
        </div>
       <van-goods-action id="food">
            <van-goods-action-mini-btn
                icon="chat-o"
                text="客服"
                id="kf"/>
            <van-goods-action-mini-btn
                :info="abcd"
                icon="cart-o"
                text="购物车"
                id="kf"
            />
            <van-goods-action-mini-btn
                icon="shop-o"
                text="店铺"
                id="kf"
            />
            <van-goods-action-big-btn
                text="加入购物车"
                id="btnnc"
                @click="buyGood"
                />
            <van-goods-action-big-btn
                primary
                text="立即购买"
                id="btn"
                @click="gotoCart"
            />
            </van-goods-action>
      </div>
</template>


<script>
export default {
    data(){
        return {
            goodId:this.$route.params.goodId,
            good:{},
            show:false,
            abcd:0
        }
    },
    methods:{
        butt(){
            this.$store.dispatch('goodsnamebutt')
        },
        add(){
            this.$store.dispatch('goodsnameadd')
        },
        gotoCart(){
            this.$axios.post("/vue/addCart",{
                goodId:this.goodId,
                count:this.$store.state.num,
                goodsusername:localStorage.username,
                good:JSON.stringify(this.good)
            }).then(res=>{
                console.log(res.data);
            })
            this.$router.push({name:'cart'})
        },
        buyGood(){
            //数量
            //goodId
            console.log(this.$store.state.num);
            this.$axios.post("/vue/addCart",{
                goodId:this.goodId,
                // count:this.number,
                count:this.$store.state.num,
                goodsusername:localStorage.username,
                good:JSON.stringify(this.good)
            }).then(res=>{
                console.log(res.data);
            })
             this.$router.push({name:'cart'})
        }
        },
        computed:{

            num1(){
                
                if(this.$store.state.num==0){
                this.$store.state.num=1;
                        }
                return this.$store.state.num;
            }
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
        //获取购物车所有商品数量
        this.$axios.post("/vue/getcount",{
             goodsusername:localStorage.username,
        }).then(res=>{
            this.goodnum = res.data.result;
            var allcount=0;
            this.goodnum.forEach((item)=>{
                allcount+=item.count
            })
            // console.log(this.abcd);
            this.abcd=allcount;
        })
    }

}
</script>
<style scoped>
   
    #food{
        height: 1.2rem;
    }
    #kf{
        margin-top: 0.3rem;
        height: .6rem;
        font-size: .18rem;
    }
  
    #btnnc{
        margin-top: .3rem;
        width: 10%;
        height: .7rem;
        line-height: 0.7rem;
        border-radius: .5rem;
        border:1px solid rgb(39, 37, 35);
        background-color: #fff;
        color:coral;
        margin-right: .1rem;
        font-size: .18rem;
    }
    #btn{
        margin-top: .3rem;
        width: 10%;
        height: .7rem;
        line-height: 0.7rem;
        border-radius: .5rem;
        background-color: #999;
        font-size: .18rem;
        margin-right: .1rem;
        border:0;
    }
    #listd{
        width: 100%;
        height: 11rem;
        overflow: hidden;
        background-color: #fff;  
    }
     #listd #sp{
        width: 10%;
        height: 0.5rem;
        padding-left: 6%;    
    }
    #listd img{
        width: 80%;
        margin-left: 10%;
        height: 8rem;  
    }
    /* #listd span{
        width: 10%;
        height:1rem ;
        padding-left: 8%;
    } */
    #listd #butt{
        margin-left: 60%;
    }
    #listd h2{
        width: 80%;
        margin-left: 10%;
        line-height: 0.5rem;
        margin-top: .2rem;
        color:rgb(22, 21, 21);
        z-index: 100;
        font-size: .16rem;
    }
   #listd h4{
        width: 100%;
        margin-left: 10%;
        margin-top: .2rem;
        font-size: .20rem;
   }
   #listd h4 span {
        color:rgb(230, 89, 24);
        font-size: .20rem;
   }
    #footbox{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
    }
    .numlist{
        width: 100%; 
        height: 1rem;
        background-color: #fff;
          
    }
    .buttin{
         float: left;
        height: 1rem;
        /* margin-top: 2rem; */
        background-color: #fff;
    }
    .but{
        float: left;
        height: 1rem;
        /* margin-top: 2rem; */
        background-color: #fff;
        
    }
    .numbox{
        width: 74%;
        float: left;
        height: 1rem;
        padding-left: 2.5rem;
        /* margin-top: 2rem; */
        border: 2px solid #eee;
          
    }
    .shopp{
        width: 50%;
        float: right;
        height: 1rem;
        border: 1px solid #fac;
    }
    .shopping{
        width: 50%;
        float: right;
        height: 1rem;
        border: 1px solid #cff; 
    }
    
</style>