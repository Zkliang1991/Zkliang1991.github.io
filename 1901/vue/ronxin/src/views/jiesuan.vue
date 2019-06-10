<template>
    <div id="box">
        <Head title="结算" :show="true"></Head>
        <div id="addresstxt" @click="addplace">请添加配送地址<span>></span></div>
        <div id="myaddress" v-for="(t,i) in myaddress" :key="i">
            <input type="checkbox">
            <div>{{t.msg.name}} 收</div>
            <div>{{t.msg.city+t.msg.country+t.msg.county+t.msg.addressDetail}}</div>
            <div>{{t.msg.tel}}</div>
        </div>
        <div  v-for="(car,i) in goods" :key="i" id="cartlist">
            <van-card
            :num=car.count
            :price=car.good.price
            :desc=car.good.type.text 
            :title=car.good.name
            :thumb="car.good.img"
            />
        </div>
        <div id="bottom"><span id="total">合计:￥{{allprice}}</span><span id="order">提交订单</span></div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            goods:[],
            allprice:0,
            myaddress:[]
        }
    },
    mounted(){
        this.$axios.post("/vue/jiesuangoodscar",{
            goodsusername:localStorage.username
            }).then(res=>{
                this.goods = res.data.result;
                console.log(this.goods);
                this.show = true;
                this.goods.forEach(element => {
                    this.allprice+=element.count*element.good.price
                });
            })

        this.$axios.post("/vue/myaddress",{
        goodsusername:localStorage.username
        }).then(res=>{
            this.myaddress = res.data.result;
            console.log("我的所有地址"+this.myaddress)
        })
    },
    methods:{
        addplace(){
            this.$router.push({name:"addplace"})
        }
    }
}
</script>

<style scoped>
#addresstxt{
    height:0.8rem;
    line-height:0.8rem;
    background-color: #fff;
    margin:0.2rem 0;
    padding-left:0.2rem;
}
#addresstxt span{
    float:right;
    margin-right:0.2rem;
}
#myaddress{
    width:100%;
    margin:0.2rem 0;
    background: #fff;
}
#bottom{
    width:100%;
    height:0.8rem;
    line-height:0.8rem;
    position:fixed;
    left: 0;
    bottom:0;
    background-color: #fff;
}
#bottom #order{
    padding:0 0.8rem;
    float:right;
    background-color: rgb(204, 32, 32);
    color:#fff;
    text-align: center;
}
#bottom #total{
    padding-left:0.2rem;
}
</style>

