<template >
    <div>
        <div class="fixedbox">
        <Head title="购物车" class="fixed"></Head>
        </div>
        <!-- <mt-button type="danger" @click="carNumAdd"> 购物车数量+ </mt-button> -->
        <div id="notlogin" v-if="flag">
            <img src="../assets/imgs/cartbg.png" alt="" style="width:100%;height:7rem" id="img">
            <div id="gobox">
                <van-button round type="danger" id="go" @click="gotoclassify">出去逛逛</van-button>
            </div>
        </div>

        <div id="islogin" v-if="!flag">
            <div  v-for="(car,i) in goods" :key="i" id="cartlist">
                <div class="carone">
                <div class="checkone"><input type="checkbox" v-model="car.check" class="checkone"><span id="delone" @click="delone(car.username,car.good._id,i)">删除</span></div>
                <van-card
                :num=car.count
                :price=car.good.price
                :desc=car.good.type.text 
                :title=car.good.name
                :thumb="car.good.img"
                />
                <button class="desc" @click="goodsdesc(car.username,car.good._id,car.count,i)">-</button>
                <button class="add" @click="goodsadd(car.username,car.good._id,car.count,i)">+</button>
                </div>
            </div>
            <h4 id="room"></h4>

            <ul id="bottom">
                <li>全选<input type="checkbox" v-model="select" id="select"></li>
                <li @click="delCheck" id="hover"> 批量删除</li>
                <li>数量:{{setNum}}</li>
                <li id="total">总计:￥{{total}}</li>
                <li id="jiesuan" @click="jiesuan">结算</li>
            </ul>
            
        </div>

    </div>
</template>

<script>
//先导入store
import store from "@/store";
import { Toast } from 'vant';

export default {
    inject:['reload'],
    //data里面的数据不会改变,因为没有缓存
    data(){
        return {
            flag:true,
            activeKey: 0,
            count_1:store.state.count,
            goods:[],
            check:true,
        }
    },
    //computed里面的是计算属性,有缓存,依赖count值
    computed:{
        count_3(){
            return this.$store.state.count
        },
        total:{
            get(){
                var total = 0;
                this.goods.forEach((car)=>{
                    if(car.check){
                        total +=car.good.price*car.count;
                    }
                })
                return total;
            }
        },
        setNum(){
            var total =0;
            this.goods.forEach((car)=>{
                if(car.count==0){
                        car.count=1;
                }
                if(car.check){
                    total = total*1+car.count*1;
                }
                
                
            })
            return total;
        },
        select:{
            get(){
                var flag =true;
                if(this.goods.length==0){
                    flag = false;
                };
                this.goods.forEach((car)=>{
                    if(!car.check){
                        flag = false;
                    }
                })
                return flag;
            },
            set(val){
                this.goods=this.goods.map((car)=>{
                    car.check = val;
                    return car;
                })
            }
        }
    },
    methods:{
        delCheck(){
            //过滤全选反选
            this.goods = this.goods.filter(car=>!car.check);
        },
        carNumAdd(){
            this.$store.dispatch('carNumAdd',1)
        },
        onChange(key) {
            this.activeKey = key;
        },
        gotoclassify(){
            this.$router.push({name:'classify'});
            this.reload();
        },
        goodsdesc(username,goodId,num,i){
            console.log(this.goods.length);
            var num1=num;
            if(num1==1){
                num1=1;
                this.goods[i].count=num1;
            }else{
                num1--;
                // console.log(num1);
                // console.log(this.goods[i].count);
                this.goods[i].count=num1;
                this.$axios.post("/vue/descnum",{
                    username,
                    goodId,
                    num1
                }).then(res=>{
                    // this.goods=res.data.result;
                });
            }
        },
        goodsadd(username,goodId,num,i){
            console.log(this.goods.length);
            var num1=num;
            if(num1==1){
                num1=1;
                this.goods[i].count=num1;
            }else{
                num1++;
                // console.log(num1);
                // console.log(this.goods[i].count);
                this.goods[i].count=num1;
                this.$axios.post("/vue/addnum",{
                    username,
                    goodId,
                    num1
                }).then(res=>{
                    // this.goods=res.data.result;
                });
            }
        },
        delone(username,goodId,i){
            this.goods.splice(i,1);
            var username1=username;
            var goodId1=goodId1;
            this.$axios.post("/vue/delone",{
                username,
                goodId,
            }).then(res=>{
                // this.goods=res.data.result;
            });
        },
        jiesuan(){
            //先判断用户是否有选中商品
            var listid=[];
            this.goods.forEach((car)=>{
                if(car.check){
                    listid.push(car);
                }
            });
            //判断listid的长度
            if(listid.length==0){
                Toast("请选择你要购买的商品")
            }else{
                this.$axios.post("/vue/jiesuangoods",{
                    listid,
                    goodsusername:localStorage.username
                }).then(res=>{
                    // this.goods=res.data.result;
                });
                this.$router.push({name:"jiesuan"});
            }
        }
    },
    mounted(){
        if(localStorage.username==""){
            this.flag=true;
        }else{
            this.flag=false;
            this.$axios.post("/vue/cars",{
            goodsusername:localStorage.username
            }).then(res=>{
                this.goods = res.data.result;
                console.log(this.goods);
                var countnum=0;
                this.goods.forEach((car)=>{
                    countnum+=car.count
                })
                // alert(countnum)
                this.show = true;
            })
        };
        // 查询商品数量
        
    }
}
</script>

<style scoped>
.fixedbox{
    margin-bottom:1rem;
}
.fixed{
    position:fixed;
    left: 0;
    top: 0;
    width:100%;
    z-index:2;
}
#img{
    margin-top:1rem;
}
#gobox{
    margin-top:-1.5rem;
    text-align: center;
}
#go{
    display:inline-block;
}
#bottom{
    position:fixed;
    left: 0;
    bottom:1rem;
    width:100%;
    height:0.8rem;
    background-color: #ccc;
}
#bottom li{
    float:left;
    margin-left:0.2rem;
    line-height:0.8rem;
}
.carone{
    margin-top:0.2rem;
    padding-top:0.2rem;
    border:2px solid #ccc;
}
.desc{
    margin-left:80%;
}
.add{
    margin-left:4%;
}
#delone{
    margin-left:80%;
}
#total{
    color:red;
}
#jiesuan{
    background-color: #d6b274;
    width:1.2rem;
    color:#fff;
    text-align: center;
    position:absolute;
    right: 0;
    top: 0;
}
.checkone{
    padding-left:0.2rem;
}
#room{
    height:2rem;
}
</style>




