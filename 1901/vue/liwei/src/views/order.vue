<template>
    <div class="order">

        <van-nav-bar
        title="订单确认"
        left-text="返回"
        right-text="首页"
        left-arrow
        @click-left="onClickLeft"
        @click-right="$router.push({name:'home'})"
        />
        <AddressTop></AddressTop>
        <OrderCard></OrderCard>
        <FuKuan></FuKuan>

    </div>
</template>

<script>
import Vue from 'vue'
import { NavBar } from 'vant';
Vue.use(NavBar);

import AddressTop from '@/components/order/addresstop'
import OrderCard from '@/components/order/ordercard'
import FuKuan from '@/components/order/fukuan'

export default {
    methods:{
        onClickLeft(){
            this.$router.back()
        }
    },
    components:{
        AddressTop,
        OrderCard,
        FuKuan
    },
    mounted(){
        sessionStorage.order='order'
    }
}
</script>


<style lang="scss" scoped>

</style>

