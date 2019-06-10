<template>
    
    <div class="card">
            <div v-if="usercar?usercar.length>0?true:false:false" ref="tiaozhuan">
                <div v-for="(value,index) in usercar" :key="index">
                    <van-swipe-cell :right-width="60" :left-width="0.01" >
                <van-card
                    :num="value.goodnum"
                    :price="value.goodprice"
                    :desc="value.goodactive?'已参与活动:'+value.goodactive:''"  
                    :title="value.goodtitle"
                    :thumb="value.goodimg"
                    :origin-price="value.goodpriceold"
                    :goodid="value.goodid">
                    <div slot="tags" class="lei">
                        <van-tag  type="danger"  class="mr dotted3" v-if="value.leibieone!=''">{{value.leibieone}}</van-tag>
                        <van-tag  type="danger"  class="mr dotted3" v-if="value.leibietwo!=''">{{value.leibietwo}}</van-tag>
                    </div>
                    <div slot="footer">
                        <van-checkbox class="danxuan" v-model="checked[index]" @click="xuanze(index,value._id)">选中</van-checkbox>
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
import { Dialog } from 'vant';


export default {
     data(){
         return{
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
             'UserStore'
         ]),
         usercar(){
             if(this.UserStore.usercar){
                 if(this.UserStore.usercar.type==1){
                    return this.UserStore.usercar.result
                 }else if(this.UserStore.usercar.type==2){
                    return false
                 }   
             }
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
                console.log(this.goodDingDan)
                //发送至状态树
            this.$store.commit('selectedIdArr',{
                arr:this.goodDingDan
            })
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
         ])
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




