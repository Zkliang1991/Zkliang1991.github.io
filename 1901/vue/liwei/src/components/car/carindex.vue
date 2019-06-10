<template>
    
    <div class="carindex">
             <CardTwo></CardTwo>
            <van-submit-bar
            label=''
            button-text="删除"
            @submit="onSubmit"
            >
                <van-button type="warning" class="yirushoucang">移入收藏夹</van-button>
            </van-submit-bar>
            
    </div>

</template>

<script>
import Vue from 'vue'
import CardTwo from './cardtwo.vue'
import { SubmitBar } from 'vant';
Vue.use(SubmitBar);
import {mapState} from 'vuex'
import { Dialog } from 'vant';
Vue.use(Dialog);

import { Toast } from 'vant';

Vue.use(Toast);

export default {
     components:{
         CardTwo
     },
     methods:{
         onSubmit(){
             if(this.UserStore.selectedIdArr!=""){
                 Dialog.confirm({
                    title: '温馨提示',
                    message: '您真的要删除吗'
                 }).then(()=>{
                      this.$axios.post('/vue/yz/shanchugood',{
                          arr:this.UserStore.selectedIdArr
                      }).then((res)=>{
                          if(res.data.type==1){
                              
                            this.$store.dispatch('getUserCar') //更新一下数据的显示
                            this.$store.commit('selectedIdArrKong')//清空UserStore.selectedIdArr
                            Toast.success('删除成功')
                            this.$store.commit('bottomshanFn')
                           
                         }
                      })
                 })
             }else{
                 Toast.fail('请选择要删除商品')
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
    .yirushoucang{
        height: 100%;
        width: 2.2rem;
        border: 1px solid transparent
    }
</style>




