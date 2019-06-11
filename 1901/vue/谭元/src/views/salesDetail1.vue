<template>
    <div>
        <Head title="销售"></Head>
        <div class="diva">
             <divider>我的挂单</divider>
            <group>
                <x-input :min="2" :max="8" title="订货人:" v-model="orderGoods.khname"  required></x-input>
                <x-input :min="2" :max="8" title="订货商品:" v-model="orderGoods.goodsname"  required></x-input>
                <x-input :min="2" :max="8" title="商品单价:" v-model="orderGoods.goodsprice" type="number"  required></x-input>
                <x-input :min="2" :max="8" title="商品数量:" v-model="orderGoods.goodsnum" type="number"   required></x-input>
                <x-input :min="2" :max="8" title="销售姓名:" v-model="orderGoods.xsname" required></x-input>
                 <x-button :min="2" :max="8" class="xbutton" plain type="warn" :disabled="!orderGoods.khname || !orderGoods.goodsname ||!orderGoods.goodsprice ||!orderGoods.goodsnum || !orderGoods.xsname" @click.native="gotMarket" >挂单</x-button>
            </group>
        </div>
    </div>
</template>


<script>
    import {
        XInput,
        Group,
        XButton,
        Cell,
        Divider
    } from 'vux'
    export default {
        data() {
            return {
                orderGoods:{}
            }
        },
        components: {
            XInput,
            Group,
            XButton,
            Cell,
            Divider
        },
        methods: {
            gotMarket(){  //点击连接数据库,将挂单的所有信息存入数据库当中
                this.$axios.post("/vue/ntryOrders",this.orderGoods).then(res=>{
                    this.$router.push({name:"salesDetail"});
                })

            }
        }
    }
</script>


<style lang="scss" scoped>
    .diva{
        width: 95%;
        margin:0 auto;
    }
</style>