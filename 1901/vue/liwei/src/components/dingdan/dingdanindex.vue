<template>
    
    <div class="dingdan">
            <CardList></CardList>   
            <van-submit-bar
            :price="UserStore.usercarSelectMoneyAll*100"
            :button-text="UserStore.usercarSelectNumAll>0?'结算':'请选择商品'"
            @submit="onSubmit"
            >
                
                <span slot="tip">
                    已选择商品数量：{{UserStore.usercarSelectNumAll}}
                </span>
            </van-submit-bar>
    </div>

</template>

<script>
import Vue from 'vue'
import CardList from './cardlist.vue'
import { SubmitBar } from 'vant';
Vue.use(SubmitBar);
import {mapState} from 'vuex'
import { Dialog } from 'vant';
Vue.use(Dialog);

import { Toast } from 'vant';

Vue.use(Toast);

export default {
     components:{
         CardList
     },
     methods:{
         onSubmit(){
             if(this.UserStore.selectedIdArr!=""){
                 
                      this.$axios.post('/vue/yz/dingdanzeng',{
                          arr:this.UserStore.selectedIdArr,
                          moneyall:this.UserStore.usercarSelectMoneyAll.toFixed(2)
                      }).then((res)=>{
                          if(res.data.type==1){
                              this.$router.push({name:'order'})
                         }else{
                            //增添订单失败
                         }
                      })
                 
             }else{
                 Toast.fail('请选择要结算的商品')
             }

         }
     },
     computed:{
         ...mapState([
             'UserStore'
         ])
     }
}
</script>

<style lang="scss" scoped>

</style>




