<template>
    <div id="box">
        <Head title="结算" ></Head>
        <div  v-for="(car,i) in all_goods" :key="i" id="cartlist">
            <van-card
            :num=car.count
            :price=car.good.price
            :desc=car.good.type.text 
            :title=car.good.name
            :thumb="car.good.img"
            />
        </div>
        <div class="miang">
            <h3>数量: <span>{{setNum}}</span> </h3>
            <h3>合计: <span>{{total}}</span> </h3>
            <van-address-list @add="onAdd"/> 
        </div>
        <div class="shouhuoadd"></div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            all_goods:[],
             chosenAddressId: '1',
        }
    },
    methods: {
        onAdd() {
            this.$router.push({name:'addRess'})
        },
  },
    
    mounted(){
        this.$axios.post("/vue/jiesuangoodscar",{
            goodsusername:localStorage.username
            }).then(res=>{
                this.all_goods = res.data.result;
                this.show = true;
            })
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
</script >

<style scoped>
    .miang{
       position:fixed ;
       bottom: 0;
       left: 0;
        background-color: #ddd;
        width: 100%;
        height: .6rem;
    }
    .miang h3{
        background-color: #ddd;
        float: left;
        width: 35%;
        height: .6rem;
        text-align: center;
       
    }
     .miang h3 span{
        background-color: #ddd;
        width: 35%;
        height: .6rem;
        color: red;
        
        
    }
   

    .van-card{
        margin-top: 0.2rem;
        border:1px solid #ddd;
    }
 
    .van-button{
        border: 0;
        width: 30%;
        height: .6rem;
        font-size: .24rem;
        line-height: .6rem;
        background-color: #000;
        margin-left: 70%;
    }
    .van-cell{
        margin-top: .2rem;
    }
</style>
