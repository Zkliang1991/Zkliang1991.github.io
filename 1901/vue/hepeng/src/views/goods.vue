<template>
    <div>
        <Head :title="$route.query.name" :show="true" id='goodHead'></Head>
        <div>
            <img :src="good.img" alt="" width="100%" height="300px">
            <p id="goodsinfo"><span class="prices">价格:{{good.price }}元 &nbsp;&nbsp;&nbsp;&nbsp;原价:<del>{{good.oldprice}}</del>元 </span> <span class="discount">折扣:{{good.discount}}</span> </p>
            <h2 id="goodsname" style="color:deeppink;"> <p class="name">{{good.name}}       <span class="type">类型:{{good.type.text}}</span></p>  </h2>
        </div>
        <ul class="goodtext">
            <li>快递:0.00</li>
            <li>月销:6666</li>
            <li>江苏南京</li>
        </ul>
        <ul class="serve">
            <li>服务</li>
            <li>正品保障</li>
            <li>·破损包退·</li>
            <li>·极速退款</li>
        </ul>
        <div class="dateTime">
            <!-- <h2 class="datetext">:</h2> -->
            <h2 class="daojishi">距离活动结束还有:{{ `${day}天 ${hr}时 ${min}分 ${sec}秒` }}</h2>
        </div>
        <div class="goodscount">
            <div id="rate">
                <van-rate
                v-model="value"
                allow-half
                void-icon="star"
                void-color="#eee"
                change
                />
            </div>
            <div id="cartNum">
                <van-button type="primary" class="reduce" @click="changeNum(-1)">-</van-button>
                <input type='number' v-model="number" id="number" />
                <van-button type="info" class="add" @click="changeNum(1)">+</van-button>
            </div>
        </div>

        <div id='pinglun'  v-if='flag'>
            <p>{{username}}</p>
        </div>
        <van-cell-group id='inputMsg'>
            <van-field
                v-model="message"
                label="评论"
                type="textarea"
                placeholder="请输入评论"
                rows="1"
                autosize
            />
            <van-button type="info" id='tijiao' size='large' @click='tjMsg'>提交</van-button>
        </van-cell-group>

        <van-goods-action id='bottom'>
            <van-goods-action-mini-btn
                icon="chat-o"
                text="客服"
                @click="kefu"
            />
            <van-goods-action-mini-btn
                icon="cart-o"
                text="购物车"
                @click="tocart"
            />
            <van-button type="danger" size='large' @click="addCart">加入购物车</van-button>
            <van-button type="warning" size='large' @click="rightNowBuy">立即购买</van-button>
        </van-goods-action>
    </div>
</template>
<script>
    // import {mapState} from "vuex";
    // import { Toast} from 'mint-ui';
    // import { Rate } from 'vant';
export default {
    methods:{
        // 活动倒计时
        countdown: function() {
            const end = Date.parse(new Date('2019-06-12'))
            const now = Date.parse(new Date())
            const msec = end - now
            let day = parseInt(msec / 1000 / 60 / 60 / 24)
            let hr = parseInt(msec / 1000 / 60 / 60 % 24)
            let min = parseInt(msec / 1000 / 60 % 60)
            let sec = parseInt(msec / 1000 % 60)
            this.day = day
            this.hr = hr > 9 ? hr : '0' + hr
            this.min = min > 9 ? min : '0' + min
            this.sec = sec > 9 ? sec : '0' + sec
            const that = this
            setTimeout(function() {
                that.countdown()
            }, 1000)
        },
        kefu(){
            alert('从功能有待完善');
        },
        tjMsg(){
            var username = localStorage.getItem('username')+'发表评论:';
            var msg = this.message;
            if(msg!=''){
                this.flag = true;
                var flag = this.flag;
                console.log(flag)
                var username = this.username;
                console.log(username,msg);
            }else{
                alert('评论内容为空,请重新输入');
            }
            //  var msg = '';
        },
        tocart(){
            this.$router.push({name:'cart'})
        },
        // 改变输入框中商品的数量
        changeNum(type){
            if(type==-1){
                if(this.number>1){
                    this.number = this.number+type;
                }
            }else{
                this.number = this.number+type;
            }
        },
        addCart(){
            console.log(this.number);
            this.$axios.post('/vue/addGoodsToCart',{
                goodId:this.goodId,
                count:this.number,
                good:JSON.stringify(this.good)
            }).then(res=>{
                console.log(res.data);
                // Toast({

                //     message: res.msg,
                //     position: 'center',
                //     duration: 1000
                // }); 
            })
            this.$store.dispatch("carNumDesc",2);
        },
        rightNowBuy(){
            this.$axios.post('/vue/addGoodsToCart',{
                goodId:this.goodId,
                count:this.number,
                good:JSON.stringify(this.good)
            }).then(res=>{
                console.log(res.data);
                this.$router.push({name:'cart'})
            })
        }
    },
    computed(){
        // ...mapState([
        //     'msg'
        // ])
    },
    data(){
        return {
            goodId:this.$route.params.goodId,
            good:{},
            number:1,
            // 倒计时的时间数据
            day: 0,
            hr: 0,
            min: 0,
            sec: 0,  
            value: 2.5,
            message:'',
            username:'',
            msg:'',
            flag:Boolean,
        }
    },
    mounted(){
        this.flag = false;
        this.$axios.get("/vue/getGoodOne",{
            params:{
                goodId:this.goodId
            }
        }).then(res=>{
            this.good = res.data.result;
            this.show = true;
        }),
         this.countdown();
    },
}
</script>
<style scoped>
    #goodHead{
        animation: heartBeat 1s;
        position: fixed;
        left: 0;
        top:0;
        width: 100%;
    }
    #goodsname{
        text-align: left;
        padding: 0.1rem;
        margin-bottom: 0.1rem;
        height: 0.6rem;
    }
    .name{
        float: left;
    }
    .type{
        margin-right: 0.4rem;
        float: right;
    }
    #goodsinfo{
        text-align: left;
        margin: 0.15rem;
        width: 90%;
        height: 0.35rem;
    }
    .prices{
        color: red;
        font-weight: bold;
        font-size: 16px;
        float: left;
    }
    .discount{
        float: right;
    }

    .goodtext{
        width: 100%;
        height: 0.5rem;
        color:#ccc;
       font-size: 14px;
    }
    .goodtext li{
        list-style: none;
        float: left;
        text-align: center;
        width: 33%;
    }
    #footBtn{
        width: 100%;
        height: 1rem;
    }
    .serve{
        width: 100%;
        height: 0.4rem;
        font-size: 14px;
        /* background-color: #f40; */
    }
    .serve li{
        float: left;
        width: 25%;
    }
    /* .serve .serveText{
        width: 33%;
    } */
    .dateTime{
        margin-top: 0.1rem;
        height: 0.85rem;
        width: 100%;
    }
    .daojishi{
        height: 0.75rem;
        line-height: 0.75rem;
        font-size: 22px;
    }
    .goodscount{
        margin-top: 0.2rem;
        height: 1rem;
        margin-bottom: 0.2rem;
    }
    #pinglun{
        width:100%;
        height:0.5rem;
    }
    #pinglun p{
        width:100%;
        height:0.6rem;
    }
    #inputMsg{
        margin-bottom:1rem;
    }
    #rate{
        float: left;
        margin-left: 0.3rem;
        margin-top: 0.2rem;
    }
    #cartNum{
        float: right;
        margin-right: 0.2rem;
    }
    #number{
        width: 1.2rem;
        height: 0.78rem;
        border-radius: 10px;
        border: 2px solid #f40;
        margin: 0 0.2rem;
        text-align: center;
    }
    #bottom{
        margin-top:0.5rem;
    }
</style>

