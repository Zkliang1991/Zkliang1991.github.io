
<template>
    
    <div class="card">
            <div v-if="usercar?usercar.length>0?true:false:false" ref="tiaozhuan">
                <div v-for="(value,index) in usercar" :key="index">
                    <van-swipe-cell :right-width="60" :left-width="0.01" >
                <van-card
                    :price="value.goodprice"
                    desc="点击下方可更改类别"  
                    :title="value.goodtitle"
                    :thumb="value.goodimg"
                    :origin-price="value.goodpriceold"
                    :goodid="value.goodid">
                    <div slot="tags" class="lei">
                        <van-tag  color="#3d993d" round plain class="mr dotted3" 
                        v-if="value.leibieone!=''" @click="leibiexinFn(value._id,value.goodid)">{{value.leibieone}} </van-tag>
                        <van-tag  color="#3d993d" round plain class="mr dotted3" 
                        v-if="value.leibietwo!=''" @click="leibiexinFn(value._id,value.goodid)">{{value.leibietwo}}</van-tag>
                    </div>
                    <div slot="footer">
                        <van-checkbox class="danxuan"  v-model="checked[index]" @click="xuanze(index,value._id)">选中</van-checkbox>
                        <van-stepper  class="numxinbutton" v-model="value.goodnum" max="99" @change="numxinFn(value.goodnum,value._id)"/>
                    </div>
                </van-card>
                    <van-button
                    square
                    slot="right"
                    type="danger"
                    text="删除"
                    class="hbai"
                    @click="shanchu(index,value._id)"/>
                    </van-swipe-cell> 
                </div>
                <van-checkbox v-model="flagone" @click="qunxuan" class="qunxuanbutton">全选</van-checkbox>
            </div>
            
            <div v-else>
                <img :src="imageURL" alt="" class="kongimg">
                <h1 class="kongtext">看到喜欢的就带回家吧</h1>
                <van-button type="danger" plain  class="konganniu" @click="$router.push({name:'class'})">今日推荐</van-button>
            </div> 
            <!-- 弹出层 -->
            <div class="huadong" v-if="GoodIdStore.goodInfo.goodimg&&GoodIdStore.goodArtical.goodid">
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

                    

                    <van-button type="danger" size="large" class="anniu" @click="leibieFn">确定</van-button>
                    
                    </van-action-sheet>
                </div>    
    </div>
    <!-- 弹出层结束 -->


    </div>

</template>

<script>
import Vue from 'vue'
import { Card } from 'vant';
import {mapState, mapActions} from 'vuex'
Vue.use(Card); 
import { Checkbox, CheckboxGroup } from 'vant';
Vue.use(Checkbox).use(CheckboxGroup);   
import { SwipeCell } from 'vant';

Vue.use(SwipeCell); 


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


import { Toast } from 'vant';
Vue.use(Toast);

import { Dialog } from 'vant';

Vue.use(Dialog);



export default {
     data(){
         return{
             leibieone:'',
             leibietwo:'',
             show:false, //底部类别弹出层控制
             flagone:false,
             moneyAll:0,
             numAll:0,
             goodDingDan:[],
             checked:[],
             imageURL:"https://jp.juancdn.com/jpwebapp_v1/images_v1/shopping/empty-cart.png"
         }
     },
     computed:{
         ...mapState([
             'UserStore',
             'GoodIdStore'
         ]),
         usercar(){
             if(this.UserStore.usercar){
                 if(this.UserStore.usercar.type==1){
                    return this.UserStore.usercar.result
                 }else if(this.UserStore.usercar.type==2){
                    return false
                 }   
             }
         },
         jiage(){
            return this.GoodIdStore.goodInfo.goodprice
        },
        bottomshancom(){
            return this.UserStore.bottomshan
        }
     },
     watch:{
         goodDingDan(){
             this.moneyAll=0
             this.numAll=0
             this.goodDingDan.forEach((value,index)=>{
                 this.usercar.forEach((valuetwo,indextwo)=>{
                     if(valuetwo._id==value){
                         this.moneyAll+=valuetwo.goodprice*valuetwo.goodnum
                         this.numAll+=valuetwo.goodnum
                     }
                 })
             })
             this.$store.commit('carSelectNumMoneySet',{
                 num:this.numAll,
                 money:this.moneyAll
             })

             //监听该数组是否将所有商品纳入,是:全选中 否 : 全选消失
             if(this.goodDingDan.length==this.usercar.length){

                 this.flagone=true

             }else{
                 this.flagone=false
             }

            //发送至状态树
            this.$store.commit('selectedIdArr',{
                arr:this.goodDingDan
            })
            console.log(this.goodDingDan)
         },
         show(newstr){
             if(!newstr){
                this.leibieone=""
                this.leibietwo=""  
             }
            //因为存在多个商品 所以得清空 避免Bug 
         },
         bottomshancom(){
             if(this.bottomshancom){
                 console.log(this.UserStore.bottomshan)
                 this.checked=[]
                 this.goodDingDan=[]
                 //由于组件之间的通信问题 所以这边也要对应修改
                 this.$store.commit('bottomshanFntwo')
             }
         }
     },
     methods:{
         xuanze(index,id){
             //由于click比v-model先执行 所以此处需要取反
             if(!this.checked[index]){
                //被选中的加入一个数组中 //此处id是取的购物车集合中的实际id(由mongo提供)
                this.goodDingDan.push(id)
             }else{
                //未被选中的从数组中移出
                this.goodDingDan.splice(this.goodDingDan.indexOf(id),1)

             }
         },
         shanchu(index,id){
                Dialog.confirm({
                title: '温馨提醒',
                message: '您确定要删除该商品吗?'
                    }).then(() => {
                    
                        this.$axios.post('/vue/yz/shanchugood',{
                 arr:[id]
             }).then(res=>{
                 console.log(res)
                  //前端删除对应的商品,请求后台成功后如下操作

                this.usercar.forEach((value,index)=>{
                    if(value._id==id){
                        this.usercar.splice(index,1)
                    }
                })

                 //此处判断其是否被选中
             //由于此函数肯定是不和复选框的checbox冲突,所以直接判断状态,不用取反
             if(this.checked[index]){
                 console.log(this.checked[index])
                  this.goodDingDan.forEach((value,index)=>{
                    if(value==id){
                        this.goodDingDan.splice(index,1)
                    }
                })
                //这里不需要像下面一样监听 因为上面watch已经监听了goodDingDan的改变   
             }else{
                 
                //此处也监听一波全选单选,此处操作不会影响goodDingDan故需要手动监听
                if(this.goodDingDan.length==this.usercar.length){
                    this.flagone=true
                }else{
                    this.flagone=false
                }
             }
             //删除选中状态
                this.checked.splice(index,1)

             })

                    
                    }).catch(() => {
                    // on cancel
                });

             

         },
         qunxuan(){
            if(!this.flagone){
                //更新所有的checked数组为true 表示全选
                var arrone = []
                this.usercar.forEach((value,index)=>{
                    
                    arrone[index]=true
                    
                })
                this.checked=arrone

                //将所有的商品加入goodDingDan中
                
                var arrtwo = []
                this.usercar.forEach((value,index)=>{
                    
                    arrtwo[index]=value._id
                    
                })
                this.goodDingDan=arrtwo 

            }else{
                this.checked=[]
                this.goodDingDan=[]
            }
            
         },
         ...mapActions([
             'getGoodInfo',
             'getGoodArtical'
         ]),
         numxinFn(newnum,id){
             this.$axios.post('/vue/yz/upnumgood',{
                 id,
                 newnum
             }).then(res=>{
                  this.$store.dispatch('getUserCar') //请求购物车,底部footer显示购物车数量,更新所有购物车信息
             })

         },
         leibiexinFn(id,goodid){
             console.log(id)
             //我要操作了
            window.localStorage.goodid = goodid  //解决用户刷新数据丢失问题(将id存着 属性的时候用id重新请求即可)
            this.$store.commit('clearshuju')
            this.getGoodInfo({goodid})
            this.getGoodArtical({goodid})
            this.$store.commit('gouwucheidg',{id})
            this.show=true

            
         },
         leioneFn(value){
            this.leibieone=value
         },
         leitwoFn(value){
            this.leibietwo=value
         },
         leibieFn(){
             //执行更新操作
            if(this.GoodIdStore.goodArtical.ariticaltypearr){
                if(this.GoodIdStore.goodArtical.ariticaltypearr.length>0&&this.leibietwo==""){
                    Toast.fail('请选择商品类别')
                    return
                }
            }
            if(this.GoodIdStore.goodArtical.articalcolorarr){
                if(this.GoodIdStore.goodArtical.articalcolorarr.length>0&&this.leibieone==""){
                    Toast.fail('请选择商品类别')
                    return
                }
            }
             this.$axios.post('/vue/yz/upleibiegood',{
                 id:this.GoodIdStore.gouwucheid,
                     leibieone:this.leibieone,
                     leibietwo:this.leibietwo

             }).then(res=>{
                if(res.data.type==1){
                     Toast.success('更新商品成功')
                     this.$store.dispatch('getUserCar') //请求购物车,底部footer显示购物车数量,更新所有购物车信息
                }else if(res.data.type==2){
                    Toast.fail('该商品已存在,请不要重复更新')
                }else{
                    Toast.fail('未知错误,请刷新后重试')
                }
                this.show=false
             })
         }
     },
     mounted(){
         this.$store.dispatch('getUserCar')
         //每次进来清除状态树的状态
         this.$store.commit('carSelectNumMoneyKong')
     },
     updated(){
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

<style lang="scss" scoped>
.card{
    padding-bottom: 2.5rem;
}

    .mr{
        margin-right: .2rem;
        max-width: 3rem;
        margin-bottom: .2rem;
    }
    .lei{
        margin-top: .1rem;
        margin-bottom: .1rem;
         max-width: 3rem;
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
        right:.2rem
    }
    .numxinbutton{
        position:absolute;
        bottom:.3rem;
        right:.2rem
    }

    //类别选择
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




