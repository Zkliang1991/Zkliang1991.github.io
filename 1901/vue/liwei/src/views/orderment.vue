<template>
    <div class="orderment">
        <van-nav-bar
        title="订单管理"
        left-text="返回"
        right-text="首页"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        />
        <div class="ment">
            <van-tabs v-model="active">
            <van-tab title="未完成订单">
                <OrderMentCard></OrderMentCard>
            </van-tab>
            <van-tab title="已完成订单">
                <!-- 这里循环已完成的订单 -->
            <OrderMentCard></OrderMentCard>

            </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { NavBar } from 'vant';
Vue.use(NavBar);
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);
import OrderMentCard from '@/components/order/ordermentcard'
import {mapState} from 'vuex'


export default {
    data(){
        return{
            active:1
        }
    },
    computed:{
        ...mapState([
            'UserStore'
        ])
    },
    watch:{
        active(newstr){
            if(newstr==0){
                this.$store.dispatch('getMentOrder',{mentflag:false})
            }else if(newstr==1){
                this.$store.dispatch('getMentOrder',{mentflag:true})
            }
        }
    },
    methods:{
        onClickLeft(){
            this.$router.back()
        },
        onClickRight(){
            this.$router.push({name:'home'})
        }
    },
    components:{
        OrderMentCard
    },
    created(){
        this.$store.dispatch('getMentOrder',{mentflag:true})
    },
    mounted(){
        console.log(this.UserStore.orderMentRes)
    }
}
</script>


<style lang="scss" scoped>

</style>


