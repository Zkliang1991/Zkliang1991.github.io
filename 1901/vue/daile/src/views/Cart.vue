<template id="bgimng">
    <div id="bgimng">
        <Head title="购物车" class="fixed"></Head>
        <div id="ggbox"><button id="gogg" @click="gogg">去逛逛</button></div>
        <div  v-for="(car,i) in all_goods" :key="i" id="cartlist">
            <div>
              <p id="pin"> <input type="checkbox" v-model="car.check" id="select" >选择
                <span id="cartdel"  @click="cartdel(car.username,car.good._id,i)" >删除</span>
                </p>
            </div>
        <van-card
            :num="car.count"
            :tag="car.good.type.text" 
            :price="car.good.price"
            :desc="car.good.type.value"  
            :title="car.good.name"
            :thumb="car.good.img"
            id="cart">
        <div slot="footer">
            <van-button size="mini" @click="gotogg">再逛逛</van-button>
            <van-button size="mini">去结算</van-button>
            
        </div>
        </van-card> 
            <div id="jie" >  
                <p for="select"><van-checkbox id="select" v-model="select"  checked-color="#07c160" >全选</van-checkbox></p>
                <p>数量: <span>{{setNum}}</span>件</p>
                <p>合计: <span>{{total}}</span>元</p> 
                <p id="p4" @click="gotoset">结算</p> 
               
            </div>
        </div>
        <h2></h2>
    </div>
</template>

<script>
//先导入store
import store from "@/store";
export default {
    inject:['reload'],
    //data里面的数据不会改变,因为没有缓存
    data(){
        return {
            checked:true,
            all_goods:[],
            all:0,
           
        }
    },
    methods:{
        delCheck(){
                //过滤全选反选 
            this.all_goods = res.data.result;
            console.log(this.all_goods)
            this.show = true;
                this.all_goods = this.all_goods.filter(car=>!car.check);
            },
            cartdel(username,goodId,i){
                // alert(666)
                this.all_goods.splice(i,1);
                var username1=username;
                var goodId1=goodId1;
                this.$axios.post("/vue/delone",{
                    username,
                    goodId,
                }).then(res=>{
                    // this.goods=res.data.result;
                }); 
                if(this.all_goods.length==0){
                    document.getElementById("gogg").style.display="block";
                    document.getElementById("bgimng").style.background="";
                }
            },
            gotogg(){
                this.$router.push({name:"classify"})
            },
            gogg(){
                this.$router.push({name:"classify"})
            },
            gotoset(){
                var list=[];
                this.all_goods.forEach((item)=>{
                    if(item.check){
                        list.push(item)
                    }
                });
                if(list.length==0){
                    this.$toast("请选择购买的商品");
                }else{
                    this.$axios.post("/vue/jiesuangoods",{
                    list,
                    goodsusername:localStorage.username
                }).then(res=>{
                    this.$router.push({name:"seet"})
                }); 
                }
            }
        },
       
    //computed里面的是计算属性,有缓存,依赖count值
    created(){
        // this.$axios.get("/vue/cars",{
        //     params:{
        //         goodsusername:localStorage.username,   
        //     }
        // }).then(res=>{
        //     this.all_goods = res.data.result;
        //     console.log(this.all_goods)
        //     this.show = true;
            
        // })
         this.$axios.post("/vue/cars",{
                goodsusername:localStorage.username,   
        }).then(res=>{
            this.all_goods = res.data.result;
            this.show = true;
            //这里判断是否有商品
            // console.log(this.all_goods.length)
            if(this.all_goods.length!=0){
                document.getElementById("bgimng").style.background="#fff";
                document.getElementById("gogg").style.display="none";
            }
        })
        
         this.all_goods.forEach((car)=>{
                if(this.check){
                    this.all +=car.good.price*car.count;
   
                }
            })
    },
     watch:{
            all_goods:{
                deep:true,
                handler(newVal){
                    var all=0;
                    newVal.forEach((car)=>{
                        if(car.check){
                            all +=car.good.price*car.count;
                            
                        }
                    });
                    this.all =all;
                }
            }
        },

    computed:{
                   
            total:{
               get(){
                   var total = 0;
                   this.all_goods.forEach((car)=>{
                       if(car.check){
                           total +=car.good.price*car.count;  
                       }
                   })
                  return total;
               }
            },
            
             setNum(){
                var total =0;
                this.all_goods.forEach((car)=>{
                    if(car.check){
                        total = total*1+car.count*1;   
                    }   
                })
                return total;
                if(list.length==0){
                    this.$toast("请选择购买的商品");
                     }
        
                 },
            select:{
                get(){
                    var flag =true;
                    if(this.all_goods.length==0){
                        flag = false;
                    };
                    this.all_goods.forEach((car)=>{
                        if(!car.check){
                            flag = false;
                        }
                    })
                    return flag;
                },
                set(val){
                    this.all_goods=this.all_goods.map((car)=>{
                        car.check = val;
                        return car;
                    })
                }
            }
        },
}
</script>
<style scoped>
  #select #text{
       font-size: 0.2rem;
   }
    #ggbox{
        margin-top: 1rem;
    }
 #gogg{
    color:rgb(148, 139, 12);
    font-size: 0.16rem;
    padding:.1rem .47rem;
    border-radius: .1rem;
    background-color: #fff;
    position:absolute;
    top: 7.72rem;
    left: 37.5%;
    border:1px solid #eee; 
}
#bgimng{
        width: 100%;
        height: 13rem;
        background-image: url(../assets/imgs/gwc.png);
        background-size:100% 13rem;
   }
    #pin{
        margin-top: .1rem;
        font-size: 0.32rem;
    }
    #pin input{
        margin-top: 0.05rem;
        width: 0.35rem;
        height: 0.35rem;
        margin-left: 5%;
        float: left;
        border-radius: .5rem;
    }
     #jie{
        position: fixed;
       
        left: 0;
        bottom: 1rem;
        width: 100%;
        height: .8rem;
        text-align: center;
    }
    #jie p{
        width: 25%;
        line-height: .8rem;
        float: left;
        margin-top: -0.2rem; 
        background: rgb(151, 197, 186);
        font-size:0.24rem;
        
    }
    #bgimng h2{
        width: 100%;
        height: 2rem;
        background-color: #fff;
        
    }
    #jie #p4{
        color:red;
        background-color: #999;
    }
   
   #jie p span{
       color:red;
       font-size: .38rem;
       
   }
   .van-card{
       margin-top: -0.1rem;
   }
   
    /* #carbox{
        width: 100%;
        background-image: url(../assets/imgs/gwc_02.png);
        background-size: 100% 13rem;
    } */
    #cartlist{
        width: 96%;
        height: 3.4rem;
        margin: .05rem;
        overflow: hidden;
        background-color: #fff;
        border:3px solid #ddd;  
    }
    #carted{
        margin-top: .05rem;
        float: left;
        margin-left: .2rem;
    }
    #cartdel{
        float: right;
        font-size: .2rem;
        width: 1rem;
        height: 0.4rem;
        text-align: center;
        margin-right: .2rem;
        background-color: #eee;
        line-height: .4rem; 
    }
    #cart{
        margin-top: 0.05rem;
    }
   
    .fixed{
        position:fixed;
        left: 0;
        top: 0;
        width:100%;
        z-index:9999;
    }
</style>