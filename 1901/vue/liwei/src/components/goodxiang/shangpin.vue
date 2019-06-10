<template>
    <div class="huadong">
        <div class="bottompadding">
        <van-action-sheet v-model="show" class="tanchu">

            <div class="shangpinimg">
                <img :src="GoodIdStore.goodInfo.goodimg" alt="">
            </div>
            <p class="pone first">{{jiage}}元</p>
            <p class="pone second dotted3">{{leibieone}} {{leibietwo}}</p>
            <p class="ptwo">分类</p>
            <p class="pthree">
                <span v-for="(value,index) in GoodIdStore.goodArtical.articalcolorarr"
                :key="index" @click="leioneFn(value)">
                    {{value}}
                </span>  
            </p>
            <div v-if="GoodIdStore.goodArtical.ariticaltypearr">
            <p class="ptwo third" v-if="GoodIdStore.goodArtical.ariticaltypearr.length>0">具体类别</p>
            <p class="pthree" v-if="GoodIdStore.goodArtical.ariticaltypearr.length>0">
                <span v-for="(value,index) in GoodIdStore.goodArtical.ariticaltypearr"
                :key="index" @click="leitwoFn(value)">
                    {{value}}
                </span>
            </p>
            </div>

            <div class="shuliang">
                <p class="ptwo">数量</p>
                 <van-stepper v-model="goodnum" min="1" max="99" class="shuliangniu"/>
            </div>

            <van-button type="danger" size="large" class="anniu" @click="show=false">确定</van-button>
            
        </van-action-sheet>
        <div class="tanchubutton" v-if="GoodIdStore.goodArtical.articalcolorarr" @click="show=true">
            <div v-if="flagone||flagtwo">
            <p class="dotted3">请选择 分类</p>
            </div>
            <div class="tanchubutton" v-else-if="flagfour||flagfive">
            <p class="dotted3">已选择 {{leibieone}} {{leibietwo}}</p>
            </div>
            <div class="tanchubutton" v-else-if="flagthree">
            <p class="dotted3">该商品没有分类</p>
            </div>
        </div>
    <!-- 显示对应商家 -->
    <div class="shangjia">
            <p>
                <span v-if="GoodIdStore.goodInfo.goodbrandimg">
                    <img :src="GoodIdStore.goodInfo.goodbrandimg" alt="">
                </span>
                <span v-else>
                    <img :src="GoodIdStore.goodInfo.goodimg" alt="">
                </span>
            </p>
            <p>
                <span class="dotted3">{{GoodIdStore.goodInfo.goodbrand}}</span>
                <span class="dotted3">{{GoodIdStore.goodInfo.goodbrandyigou}}</span>
            </p>
            <p><van-button type="primary" size="mini" class="jindian" @click="jindianFn(GoodIdStore.goodInfo.goodbrand)">进入店铺</van-button></p>
    </div>
    <p class="navb"></p>

    <!-- 购物车 -->
        <div class="gouwuche">
            <van-goods-action>
                <van-goods-action-icon
                    icon="chat-o"
                    text="客服"
                />
                <van-goods-action-icon
                    icon="cart-o"
                    text="购物车"
                    :info="UserStore.carnumArr"
                    :to="{name:'car'}"
                />
                <van-goods-action-icon
                    icon="shop-o"
                    text="店铺"
                    @click="jindianFn(GoodIdStore.goodInfo.goodbrand)"
                />
                <van-goods-action-button
                    type="warning"
                    text="加入购物车"
                    @click="jiagou(0)"
                />
                <van-goods-action-button
                    type="danger"
                    text="立即购买"
                    @click="jiagou(1)"
                />
            </van-goods-action>
        </div>
            
        </div>
    </div>
</template>

<script>
import {mapState}  from 'vuex'
import Vue from 'vue'
import { ActionSheet } from 'vant';
Vue.use(ActionSheet);

import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';

Vue
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton);

import { Stepper } from 'vant';

Vue.use(Stepper);

import { Toast } from 'vant';

Vue.use(Toast);

import { Dialog } from 'vant';

Vue.use(Dialog);

export default {
    data(){
        return {
            show:false,
            leibieone:'',
            leibietwo:'',
            goodnum:1
        }
    },
    computed:{
        ...mapState([
            'GoodIdStore',
            'UserStore'
        ]),
        goodid(){
            return window.localStorage.goodid
        },
        jiage(){
            return this.GoodIdStore.goodInfo.goodprice
        },
        flagone(){
            //判断第一种情况  当第一个分类存在而用户没选
            if(this.GoodIdStore.goodArtical.articalcolorarr.length>0&&this.leibieone==''){
                return true
            }else{
                return false
            }
        },
        flagtwo(){
            //判断第二种情况  当第二个分类存在而用户没选
            if(this.GoodIdStore.goodArtical.ariticaltypearr.length>0 && this.leibietwo=='' ){
                return true
            }else{
                return false
            }
        },
        flagthree(){
            //判断第三种情况  当第一个分类不存在 第二个分类不存在时
            if(this.GoodIdStore.goodArtical.articalcolorarr.length<=0&&this.GoodIdStore.goodArtical.ariticaltypearr.length<=0){
                return true
            }else{
                return false
            }
        },
        flagfour(){
            //判断第四种情况  当第一个分类存在 第二个分类存在 用户已选
            var flag = false
            var flagtwo = false
            if(this.GoodIdStore.goodArtical.articalcolorarr.length>0 && this.leibieone!='' ){
                flag = true
            }
            if(this.GoodIdStore.goodArtical.ariticaltypearr.length>0 && this.leibietwo!='' ){
                flagtwo = true
            }
            if(flag&&flagtwo){
                return true
            }else{
                return false
            }
        },
        flagfive(){
            //判断第五种情况  当有一个分类存在 用户已选
             var flag = false
             var flagtwo = false
            if(this.GoodIdStore.goodArtical.articalcolorarr.length>0&&this.GoodIdStore.goodArtical.ariticaltypearr.length<=0 && this.leibieone!='' ){
                flag = true
            }
            if(this.GoodIdStore.goodArtical.ariticaltypearr.length<=0 &&this.GoodIdStore.goodArtical.ariticaltypearr.length>0 && this.leibietwo!='' ){
                flagtwo = true
            }
            if(flag||flagtwo){
                return true
            }else{
                return false
            }
        },
        zongflag(){
            if(this.GoodIdStore.goodArtical.articalcolorarr){
                //控制是否能加购 (引导用户完成分类选择)
            if(this.flagfour||this.flagfive||this.flagthree){
                return true
            }
            }
            
        }
    },
    methods:{
        leioneFn(value){
            this.leibieone=value
        },
        leitwoFn(value){
            this.leibietwo=value
        },
        jiagou(jorl){
            let that = this
            //加入购物车操作

            //判断只有当选择好了分类才能加购
            if(this.zongflag){
               
                 let obj ={
                    goodid:this.GoodIdStore.goodInfo.id,
                    goodimg:this.GoodIdStore.goodInfo.goodimg,
                    goodactive:this.GoodIdStore.goodInfo.active,
                    goodtitle:this.GoodIdStore.goodInfo.goodtitle,
                    goodprice:this.GoodIdStore.goodInfo.goodprice,
                    goodpriceold:this.GoodIdStore.goodInfo.goodpriceold,
                    goodbrand:this.GoodIdStore.goodInfo.goodbrand,
                    leibieone:this.leibieone,
                    leibietwo:this.leibietwo,
                    goodnum:this.goodnum
                    }
                this.$axios.post("/vue/yz/jiagou",obj).then(res=>{
                    if(res.data.type==1){
                        if(jorl==0){
                            Dialog.confirm({
                            title: res.data.msg,
                            message: '是否立即前往购物车'
                            }).then(() => {
                                that.$router.push({name:'car'})
                            }).catch(() => {
                                
                            });
                        }else{
                             that.$router.push({name:'car'})
                        }
                        
                    }
                }).catch(err=>{
                    Toast.fail('异常错误,请刷新后重试');
                })
            }else{
                Toast('请选择商品分类');
            }
        },
        jindianFn(value){
            //进入店铺操作
            
        }

    }
}
</script>

<style lang="scss" scoped>
$background: #ebe6e6;
    .tanchu{
        padding-bottom: 1rem;
        position: fixed;
        bottom: 0px;
        left: 0px;
        overflow:visible;
        .shangpinimg{
            width: 2rem;
            height: 2rem;
            position: absolute;
            left: .3rem;
            top:-1rem;
            img{
                width: 100%;
                height: 100%;
            }
            background: black
        }
        .pone{
            padding-left: 2.5rem;
            
        }
        .first{
            line-height: .6rem;
            font-size:.32rem;
            color:#ff464e;
        }
        .second{
            line-height: .32rem;
            font-size: .18rem;
            height: .32rem;
        }
        .ptwo{
            padding-left:.3rem ;
            height: .5rem;
            margin-top: .5rem;
            font-size: .36rem;
        }
        .pthree{
            padding: .3rem;
            padding-right: 0;
            overflow-y: scroll;
            overflow-x: hidden;
            max-height: 2rem;
            span{
                float: left;
                padding: .1rem .3rem;
                background: #ff464e;
                color: white;
                margin-right:.3rem ;
                margin-bottom: .3rem;
                max-width: 6rem;
                
            }
            margin-bottom: .5rem
        }
        .shuliang{
            margin-bottom: .5rem;
            
            .shuliangniu{
                margin-top: .3rem;
                margin-left: .3rem ;
            }
        }
        .third{
            margin-top: 0 ;
        }
        .anniu{
            position: absolute;
            left: 0;
            bottom: 0;
        }
    }
    .tanchubutton{
        height: 1rem;
        line-height: 1rem;
        background:$background;
        padding-bottom: .2rem;
        p{
            background: white;
            padding:0 .3rem;
        }
    }
    .shangjia{
        padding: .28rem .3rem;
        height: .92rem;
        overflow: hidden;
        p{
            float: left;
        }
        p:first-child{
            width: .9rem;
            height: .45rem;
            margin-top: .23rem;
            margin-right: .2rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        p:nth-child(2){
            width: 4rem;
            height: 100%;
            span{
                float: left;
                width: 100%;
                height: 50%;
                line-height: .46rem
            }
            span:first-child{
                font-size: 16px;
                color:chocolate
            }
            span:last-child{
                font-size: 13px;
            }
        }
        p:nth-child(3){
            float: right;
            .jindian{
                margin-top: .24rem;
                padding: 0 .1rem;
            }
        }
    }
    .navb{
        height: .2rem;
        background:$background
    }
    .gouwuche{
        position: fixed;
        z-index: 100;
    }
</style>


