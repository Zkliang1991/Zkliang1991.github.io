<template>
    <div class="ordercard">
        <div  class="dingdange" ref="tiaozhuan">
            <P class="shijianchuo">于 {{shijian.year}}年{{shijian.month}}{{shijian.day}}日
                {{shijian.hours}}:{{shijian.minutes}}:{{shijian.seconds}}  创建</P>
            <van-card
                :num="value.goodnum"
                :price="value.goodprice"
                :desc="value.goodactive?'已参与活动:'+value.goodactive:''"  
                :title="value.goodtitle"
                :thumb="value.goodimg"
                :origin-price="value.goodpriceold"
                :goodid="value.goodid"
                v-for="(value,index) in list" :key="index">
                <div slot="tags" class="lei">
                    <van-tag  type="danger"  class="mr dotted3" v-if="value.leibieone!=''">{{value.leibieone}}</van-tag>
                    <van-tag  type="danger"  class="mr dotted3" v-if="value.leibietwo!=''">{{value.leibietwo}}</van-tag>
                </div>
            </van-card>
            <p class="zongjian">
                <span> 商品总金额 </span>
                <span>¥ {{moneyall}}</span>
            </p>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { Card } from 'vant';
Vue.use(Card);
import {mapActions} from 'vuex'

export default {
    data(){
        return {
            moneyall:'',
            shijian:'',
            list:'',
            imageURL:'https://goods6.juancdn.com/goods/190519/b/8/5ce0b3c5b6f8ea2bd70aa61c_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg'
        }
    },
    methods:{
        ...mapActions([
             'getGoodInfo',
             'getGoodArtical'
         ])
    },

    created(){
        this.$axios.post('vue/yz/justdingdan').then(res=>{
            if(res.data.type==1){
                let result = res.data.result
                //共享该订单的id至状态树
                this.$store.commit('dingdanCardId',{id:result._id})
                let {
                    dingdanshi, //订单所包含的商品,是个数组
                    moneyall, //订单总价格
                    shijian //订单的时间戳
                } = result
                this.list=dingdanshi
                this.shijian=shijian
                this.moneyall=moneyall
                this.$store.commit('dingdanMoneyall',{moneyall})
            }
        })
    },
    mounted(){
        let that = this
         //解决ul组件没有提供商品图片点击的api无法派发acition的另类方法 利用事件委托给图片加事件
         if(this.$refs.tiaozhuan){
             this.$refs.tiaozhuan.onclick=function(e){
             var evt = e||window.event
             let imgE = evt.target||evt.srcElement
             if(imgE.nodeName=="IMG"){
                //此id手动绑定至循环体上
                let goodid= imgE.parentNode.parentNode.parentNode.parentNode.getAttribute('goodid')  
                window.localStorage.goodid = goodid  //解决用户刷新数据丢失问题(将id存着 属性的时候用id重新请求即可)
                that.$store.commit('clearshuju')
                that.getGoodInfo({goodid})
                that.getGoodArtical({goodid})
                that.$router.push({name:'good'})
             }
            }
         }
    }
}
</script>

<style scoped lang="scss">
.dingdange{
    margin-top: .5rem;
}
    .card{
    padding-bottom: 2.5rem;
}

    .shijianchuo{
        height: .5rem;
        line-height: .5rem;
        padding: 0 .3rem;
        font-size: .18rem;
    }

    .zongjian{
        height: .5rem;
        line-height: .5rem;
        padding: 0 .3rem;
        font-size: .18rem;
        margin-top: .2rem;
        span:first-child{
            float: left;
        }
        span:last-child{
            float:right;
        }
    }

    .mr{
        margin-right: .2rem;
        max-width: 3rem;
        margin-bottom: .2rem;
    }
    .lei{
        margin-top: .1rem;
        margin-bottom: .1rem;
        max-width: 4.5rem;
    }
    .hbai{
        height: 100%
    }
    .qunxuanbutton{
        position: fixed;
        bottom: .2rem;
        left: .2rem;
        z-index: 101;
    }
    .kongimg{
        margin: .5rem auto
    }
    .kongtext{
        text-align: center;
    }
    .konganniu{
        width: 80%;
        margin-left: 10%;
        margin-top: .5rem;
    }
    .danxuan{
        position:absolute;
        top:.3rem;
        right:.1rem
    }

</style>
