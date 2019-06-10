<template>
    <div class="fukuan">
        <van-submit-bar
        :price="UserStore.dingdanMoneyall*100"
        button-text="确认支付"
        @submit="onSubmit"
        />
    </div>
</template>

<script>
import Vue from 'vue'
import { SubmitBar } from 'vant';
Vue.use(SubmitBar);
import {mapState} from 'vuex'
import { Toast } from 'vant';
Vue.use(Toast);
import { Dialog } from 'vant';
Vue.use(Dialog)

export default {
    computed:{
        ...mapState([
            'UserStore'
        ])
    },
    methods:{
        onSubmit(){
            if(this.UserStore.dingdanAddress){
                Dialog.confirm({
                    title: '您确定要支付吗',
                    message: '等我申请支付接口'
                }).then(() => {
                    sessionStorage.order="false"
                    //调用接口 往订单中该记录添加一个地址
                    this.$axios.post('/vue/yz/dingdansucess',{
                        addressobj:this.UserStore.dingdanAddressObj,
                        id:this.UserStore.dingdanCardId,
                        flag:true
                    }).then(res=>{
                        let that = this
                        Toast.success('结算成功')
                        setTimeout(()=>{
                            //先跳至我的
                            that.$router.push({name:'mine'})
                        },1000)
                    })

                }).catch(() => {
                    alert('请在订单中心中查看')
                });
            }else{
                Toast.fail('请设置收货地址')
            }
        }
    },
    updated(){
        this.$axios.post('/vue/yz/dingdansucess',{
            addressobj:this.UserStore.dingdanAddressObj,
            id:this.UserStore.dingdanCardId,
            flag:false
        }).then(res=>{
            
        })
    }
}
</script>

<style lang="scss" scoped>

</style>

