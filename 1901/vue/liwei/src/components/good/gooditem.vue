<template>
    <div class="gooditem" @click="toXiang(goodinfo.id)" v-if="goodinfo">
        <p :style="heightPx" class="pzone">
            <img :src="goodinfo.goodimg" class="oneimg">
            <span class="twoimg" v-if="goodinfo.goodbrandimg">
                <img :src="goodinfo.goodbrandimg"  >
            </span>
        </p>
        <p class="ptwo ppone">
            <span class="dotted3">{{goodinfo.active}}</span>
            <span class="dotted3" style="font-size: 14px;color:#ff464e;margin-left:.2rem">{{goodinfo.goodprice}}元</span>
        </p>
        <p class="ptwo pptwo">
            <span class="dotted3">{{goodinfo.goodtitle}}</span>
            <span class="dotted3" v-if="xuantwo==1">精选</span>
            <span class="dotted3" v-else-if="xuantwo==2">推荐</span>
            <span class="dotted3" v-else-if="xuantwo==3" style="font-size: 12px">搜索</span>
        </p>
        
    </div>
</template>

<script>
import {mapActions,mapState}  from 'vuex'
export default {
    props:{
        goodinfo:Object,
        xuantwo:{
            type:null,
            default:1
        }
    },
    computed:{
        heightPx(){
            let widthShi =document.documentElement.clientWidth
            let widthShiTwo = widthShi/2
            let widthShiThree = 'height'+':'+widthShiTwo+'px'
            return widthShiThree
        },
        ...mapState([
            'GoodIdStore'
        ])
    },
    methods:{
        ...mapActions([
            'getGoodInfo',
            'getGoodArtical'
        ]),
        toXiang(value){
            //我要操作了
            window.localStorage.goodid = value  //解决用户刷新数据丢失问题(将id存着 属性的时候用id重新请求即可)
            this.$store.commit('clearshuju')
            this.getGoodInfo({goodid:value})
            this.getGoodArtical({goodid:value})
            this.$router.push({name:'good'})
        }
    },
    mounted(){
        
    }
}
</script>

<style scoped lang="scss">
    .gooditem{
        width: 100%;
        height: 5rem;
        p{
            width: 100%;
        }
        .pzone{
            width:98%;
            position: relative;
            margin: 0 1%;
            
        }
        .ptwo{
            width: 90%;
            margin-top: .12rem;
            padding: 0 5%;
            height: .44rem ;
        }
        .ppone{
            span{
                float: left;
                height: 100%;
                max-width: 80%;
                font-size: 14px;
                line-height: .44rem;
                color:rgb(255, 70, 78);
            }
        }
        .pptwo{
            span{
                height: 100%;
                font-size: 12px;
                line-height: .44rem;
            }
            span:first-child{
                float: left;
                width: 70%;
            }
            span:last-child{
                float: right;
                width: 25%;
                color:rgb(161, 150, 150);
            }
            margin-bottom: .12rem;
        }
        .oneimg{
            width: 100%;
            height: 100%;
        }
        .twoimg{
            position: absolute;
            width: .80rem;
            height: .40rem;
            background-color: rgba(225,225,133,.5);
            right: .1rem;
            bottom:-.20rem;
            img{
                width:100% ;
                height: 100%;
            }
        }
    }
</style>


