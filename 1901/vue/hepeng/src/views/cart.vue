<template>
    <div>
        <Head title="购物车" :show="!!1" id="headFix"></Head>
        <div v-if='!flag' class="bg"></div>

        <!-- <div :v-if='!flag' id="delList">
            <van-button type="warning" size='small' class="delSelect" @click="delSelect()">删除选中</van-button>
        </div> -->
        <div id="goods">
            <div :v-if='flag' v-for='(item , k) in goods' :key='k' id='cartitem'>
                <div slot="top" class="top">
                    <van-checkbox class="checkbox" checked-color="#07c160" v-model='item.check'></van-checkbox>
                    <van-button size='small' class="delBtn" @click="delGoods(k)">删除</van-button>
                </div>
                <van-card
                :num="item.count"
                :tag="item.good.type.text"
                :price="item.good.price"
                :desc="'折扣:'+item.good.discount"  
                :title="item.good.name"
                :thumb="item.good.img"
                :origin-price="item.good.oldprice"
                >
                    <div slot="footer">
                        <van-button size="mini" class="numBtn" @click="changeNum(k,item.count,-1)" :style="item.count==1?'':''">-</van-button>
                        <van-button size="mini" class="numBtn" @click="changeNum(k,item.count,1)">+</van-button>
                    </div>
                </van-card>
            </div>
        </div> 
        
        <div id="accountBox">
            <van-submit-bar v-if='flag' id="account"
            :price="total*100"
            :button-text="submitBarText"
            @submit="onSubmit"
            >
                <van-checkbox v-model="select" id='seected'>全选</van-checkbox>
            </van-submit-bar>
        </div>
    </div>
</template>
<script>
import { Card ,Toast} from 'vant';
import store from '@/store';
import {mapState} from 'vuex';
export default {
    data(){
        return{
            count_1:store.state.count,
            count_2:this.$store.state.count+100,
            goods:[],
            flag:Boolean,
            checked: true,
            check:'',
            //存放被选择的数据
            allSelectedGoods: [],
        }
    },
    computed:{
        ...mapState([
            'count',
        ]),
        total:{
            get(){
                var total = 0;
                this.goods.forEach((item)=>{
                    if(item.check){
                        total +=item.good.price*item.count;
                    }
                })
                return total;
            }
        },
        submitBarText(){
            var totalNum =0;
            this.goods.forEach((item)=>{
                if(item.count==0){
                    item.count=1;
                }
                if(item.check){
                    totalNum = totalNum*1+item.count*1;
                }
                
                
            })
                return '提交'+(totalNum?`(${totalNum})`:'');
        },
        select:{
            get(){
                var flag =true;
                if(this.goods.length==0){
                    flag = false;
                };
                this.goods.forEach((item)=>{
                    if(!item.check){
                        flag = false;
                    }
                })
                return flag;
            },
            set(val){
                this.goods=this.goods.map((item)=>{
                    item.check = val;
                    return item;
                })
            }
        }
    },
    methods:{
        delSelect(){

        },
        delCheck(){
            //过滤全选反选
            this.goods = this.goods.filter(item=>!item.check);
        },
        delGoods(k){
            if(!confirm('确认删除吗')){
                window.event.returnValue = false;
            }else{
                // 商品被选中 
                if(this.allSelectedGoods.indexOf(this.goods[k].id)!==-1){
                    var index = this.allSelectedGoods.indexOf(this.goods[k].id);
                    this.allSelectedGoods.splice(index,1);
                }
                this.goods.splice(k,1);
                console.log(this.goods[k]);
                let username = this.goods[k].username; 
                let goodId = this.goods[k].goodId; 
                console.log(username,goodId);
                this.$axios.post('/vue/delGoods',{
                    username,
                    goodId,
                }).then(res=>{
                    
                })
            }
        },
        changeNum(k,count,type){
            // 判断type的值  为-1时 减  为1时加
            if(type==-1){
                if(this.goods[k].count>1){
                    this.goods[k].count = this.goods[k].count+type;
                    let username = this.goods[k].username; 
                    let goodId = this.goods[k].goodId; 
                    let count = this.goods[k].count; 
                    this.$axios.post('/vue/changeNum',{
                        username,
                        goodId,
                        count
                    }).then(res=>{

                    })
                }
            }else{
                this.goods[k].count = this.goods[k].count+type
                let username = this.goods[k].username; 
                let goodId = this.goods[k].goodId; 
                let count = this.goods[k].count; 
                this.$axios.post('/vue/changeNum',{
                    username,
                    goodId,
                    count
                }).then(res=>{
                    // console.log(res.data);
                })
            }
        },
        addCount(state){
            this.$store.dispatch('CountNum');
        },
        CountDesc(state){
            this.$store.dispatch('CountReduce',10);
        },
        cartNumAdd(){
            this.$store.dispatch('cartNumAdd',5);
        },
        onSubmit(){
            var list = [];
            this.goods.forEach((item)=>{
                if(item.check){
                    list.push(item);
                }
            })
            console.log(list);
            // username=localStorage.getItem('username');
            // console.log('这是用户名'+username);
            if(list.length>=1){
                this.$axios.post('/vue/order',{
                    list,
                    username:localStorage.username,
                }).then(res=>{
                    
                })
                    this.$router.push({name:'account'})
            }else{
                Toast({ 
                    message: "请选择需要购买的商品", 
                    duration: 1000,
                })
            }
        }    
    },
    mounted(){
        this.username = localStorage.getItem('username');
        if(this.username){
            this.flag = true ;
            this.$axios.post('/vue/getCartData',{
            username:localStorage.username,
            }).then(res=>{
                this.goods = res.data.result;
                var count = 0
                this.goods.forEach((item)=>{
                //    console.log(item.count);
                    count += item.count;
                })
                console.log('这是用户购物车商品总量'+count);
            })
        }else{
            this.flag = false;
        }
    },
    update(){

    }
}
</script>

<style scoped>
    #headFix{
        position: fixed;
        left: 0;
        top:0;
        width: 100%;
        z-index: 99;
    }
    #accountBox{
        width: 100%;
        height: 1.3rem;
    }
    #goods{
        margin-top: 1rem;
    }
    #account{
        position: fixed;
        bottom: 0.93rem;
        left: 0;
    }
    .bg{
        width: 100%;
        height: 11.5rem;
        background-image: url('../assets/images/cartBg.jpg');
        background-size: 100% 100%;
    }
    .top {
        height: 0.6rem;
    }
    .top .checkbox{
        /* display: inline-block; */
        margin-left: 0.5rem;
        margin-top: 0.1rem;
        float: left;
    }
    .top .delBtn{
        float: right;
        margin-right: 0.3rem;
    }
    #cartitem{
        margin-top: 0.2rem;
        margin-bottom: 0.6rem;
    }
    #delList{
        width: 100%;
        height: 0.6rem;
        margin: 0.4rem 0;
    }
    .delSelect{
        margin-right: 0.3rem;
        float: right;
    }
    .van-card__title{
        text-align: left;
        font-size: 15px;
    }
    .van-card__desc{
        font-size: 14px;
        text-align: right;
        color:#f40;
    }
    .van-card__bottom{
        font-size: 16px;
    }
    .van-card__price{
        float: left;
    }
    .van-card__origin-price{
        float: left;
    }
    .van-card__num{
        float: right;
    }
    .numBtn{
        background-color: #ddd;
        font-size: 16px;
    }
</style>
