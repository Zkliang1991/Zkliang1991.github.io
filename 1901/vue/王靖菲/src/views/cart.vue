<template>
    <div>
        <van-row>
            <van-col span="8" offset="9">购物车</van-col>
            <van-col span="3" >管理</van-col>
            <van-col span="4" >分享</van-col>
        </van-row>
        <div class="tip">
            <i>优惠券</i>
            <span>有未使用的优惠券,去看看</span>
        </div>
        <div class="nogoods" v-show="show" >
            <div class="img">
                <img src="https://img.wzj.com/upload/iconImg/cart-empty.png?x-oss-process=style/w400-webp" alt="">
            </div>
            <h1>没有挑到喜欢的家具么？</h1>
            <p>联系家居顾问帮你找找吧~</p>
            <span>联系家具顾问</span>
        </div>
        <p class="kong"></p>

        <div class="goods" v-for="(item,index) in goodslist" :key="index">
            <van-checkbox v-model="item.checked" checked-color="rgb(190, 76, 75)"
            @click="check_one(item)"
            ></van-checkbox>   
            <div class="content">
                <img :src="item.goodsimg" alt="">
                <div class="item">
                    <h1>{{item.goodsname}}</h1>
                    <p>{{item.goodssize}} 南{{item.goodstexture}} 柚木色+灰色</p>
                    <div class="price-content">
                        <span>¥{{item.goodsprice}}</span>
                        <van-stepper
                        v-model="item.goodsnum"
                        async-change
                        @change="onChange"
                        @plus="add(item)"
                        @minus="jian(item)"
                        />
                    </div>
                </div>
            </div>
        </div>





        
        <!-- <div class="goods">
            <van-checkbox v-model="checked" checked-color="rgb(190, 76, 75)"
            @click="check_one"
            ></van-checkbox>   
            <div class="content">
                <img :src="goodsinfo.goodsimg" alt="">
                <div class="item">
                    <h1>{{goodsinfo.goodsname}}</h1>
                    <p>{{goodsinfo.goodssize}} 南{{goodsinfo.goodstexture}} 柚木色+灰色</p>
                    <div class="price-content">
                        <span>¥{{goodsinfo.goodsprice}}</span>
                        <van-stepper
                        :value="value"
                        async-change
                        @change="onChange"
                        />
                    </div>
                </div>
            </div>
        </div> -->
        <p class="kong"></p>

        <van-submit-bar
        :price="cartprice"
        button-text="结算"
        @submit="onSubmit"
        label="总计" 
        >
        <van-checkbox v-model="check_all" checked-color="#be4c4b">全选</van-checkbox>
        <!-- <span slot="tip">
            你的收货地址不支持同城送, <span>修改地址</span>
        </span> -->
        </van-submit-bar>

        <div class="service">
            <van-icon name="service-o" />
        </div>
        <router-view></router-view>
        <Hotsale></Hotsale>
    </div>
</template>

<script>
import Hotsale from "@/components/hotSale.vue"
export default {
    data(){
        return {
            checked:true,
            goodslist:[],
            show:false
           
        }
    },
    computed:{
        cartprice(){
           return this.$store.state.cartprice
        },
        check_all(){
            return this.$store.state.check_all
        }
    },
    mounted(){
        var userInfo = JSON.parse(window.sessionStorage.userInfo);
        var usertoken =userInfo.token;
        
        this.$axios.get("/vue/tokengoods",{params:{usertoken}}).then(res=>{
            this.goodslist=res.data.result
            console.log("JJJ")
            console.log(res.data)
            if(res.data.type==0){
                this.show=true
            }
            console.log(this.goodslist.length)
            console.log(res.data)

        })
    },
    
    methods:{
        onChange(value) {
            //  var userInfo = JSON.parse(window.sessionStorage.userInfo);
            //  var usertoken =userInfo.token;
            console.log("ppppppp")
            console.log(this.goodslist)
        // if (this.changing) {
        //     this.$axios.get("/vue/addnum").then(res=>{
        //         console.log(res.data)
        //     })
        // }

        this.changing = true;
            setTimeout(() => {
                this.value = value;
                this.changing = false;
            }, 500);
        },
        add(item){
            console.log("加号即将传进的东西")
            console.log(item)
            this.$axios.get("/vue/add",{
                params:item
            }).then(res=>{
                console.log(res.data.result)
            })
        },
        jian(item){
            this.$axios.get("/vue/add",{
                params:item
            }).then(res=>{
                console.log(res.data.result)
            })
        },
        check_one(item){
            var cartprice2=0;
            if(!item.checked){
               cartprice2+=item.goodsprice*item.goodsnum
               this.$store.dispatch("checkchange",cartprice2)
            }else{
                cartprice2-+item.goodsprice*item.goodsnum
                this.$store.dispatch("checkchange",cartprice2)
            }

        },
    //     created(){
    //   this.goodslist.forEach((item)=>{
    //       if(item.checked){
    //           var cartprice2=0;
    //           cartprice2+=item.goodsprice*item.goodsnum
              
    //       }
    //   })  
    // },
        onSubmit(){
            var checkedgoods=[]
            for(var i=0;i<this.goodslist.length;i++){
                if(this.goodslist[i].checked){
                    // checkedgoods[]=this.goodslist[i]
                }
            }
            console.log(checkedgoods)
            this.$router.push({name:"orderconfirm"})
        }

    },
    components:{
        Hotsale
    }
}
</script>

<style lang="scss" scoped>
.show{
    display: block;
}
.nogoods{
    height: 6.58rem; text-align: center;
    .img{
        width: 3.1rem; height: 2rem;
        margin:1rem auto 0.6rem;
        img{
            width: 3.1rem; height: 2rem;
        }
    }
    h1{
        font-size: 17px;
        color: #2c3038;
        font-weight: 600; text-align: center;
    }
    p{
            margin:0.2rem auto 0.4rem;
            font-size: 14px; text-align: center;
            color: #92969c;
    }
    span{
        display: inline-block;
        padding:0.12rem 0.3rem;
        margin-bottom: 1rem;
        font-size: 14px;
        color: #be4c4b;
        border: 1px solid #be4c4b;
        border-radius: 0.6rem; 
    }
}
.service{
    width: 0.82rem; position: fixed;
    right: 0.35rem; bottom: 3rem;
    height: 0.82rem; z-index:10000;
    line-height:  0.82rem;
    text-align: center;
    background: hsla(0,0%,100%,.9);
    box-shadow: 0 1px 5px 0 hsla(0,0%,49%,.3);
    font-size: 22px;
    color: #5a5a5a;
    border-radius: 50%;
}
.kong{
    height: 0.2rem;
    background-color: rgb(246, 246, 246);
}
.van-row{
    height: 0.9rem; line-height: 0.9rem;
    .van-col{
        text-align: center;
        font-family:Helvetica, SimHei;
        font-size:14px; line-height:44px;
    }
    .van-col:first-child{
        font-size: 18px;
        color: #222121;
        font-weight: 700; 
    }
    .van-col:last-child{
        text-align:left;
    }
}
.tip{
    margin-left: 0.3rem;
    padding:0.34rem 0;
    height: 0.32rem; line-height: 0.32rem;
    i{
        width: 1rem; display: inline-block;
        text-align: center;
        border-radius: 0.06rem;;
        vertical-align: 0.02px;
        color: #be4c4b;
        border: 1px solid #be4c4b;
        font-size: 11px; height: 0.28rem;
    }
    span{
        font-size: 13px;
        color: #222121;
        font-weight: 400;
        padding-left: 0.2rem;
    }
}
.goods{
    height: 2.4rem; overflow: hidden;
    .van-checkbox{
        float:left; box-sizing:border-box;
        padding:0.2rem 0 0.2rem 0.3rem;
        line-height: 2.5rem;
        width:15%;
    }
    .content{
        float:right; box-sizing: border-box;
        width: 85%; overflow: hidden;
        padding: 0.3rem 0.2rem 0.3rem 0;
        img{
            width: 30%; height: 1.8rem;
            margin-right: 3%; float:left; 
            border-radius: 0.15rem;
        }
        .item{
            float:right; width: 67%;
            h1{
                margin-bottom: 0.16rem;
                font-size: 14px; 
                font-weight: 400;
                width: 100%; 
                height:0.32rem;
            }
            p{
                    color: #7d7d7d;
                    font-size: 11px;
                    line-height: 0.32rem;
            }
        }
        .price-content{
            margin-top:0.2rem; width:100%;
            overflow: hidden;
          
            span{
                float:left; line-height: 0.64rem;
            }
            .van-stepper{
                height: 0.64rem;
                float:right;
            }
        }
    }
}
.van-submit-bar{
    bottom: 1rem;
    .van-checkbox{
        margin-left: 0.3rem;
    }
   
}
</style>
