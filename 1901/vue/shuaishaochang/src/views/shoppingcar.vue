<template>
    <div>
        <Head title="购物车"></Head>
        <div>
            <ul v-for="(item,i) in result" :key='i'>
            <nut-swiper class="tp" :lazyLoad="false">
                <nut-checkboxgroup  
                    class="my-checkbox"
                    :size="'small'" 
                    :checkBoxData="data2"
                    v-model="group" >
                </nut-checkboxgroup>
                <img :src="item.good.img" alt="" class="nut-img-lazyload"/>
                <div class="jg">
                    <p class="p1">{{item.good.title}}</p>
                    <p class='p2'>6.18惊爆价:￥{{item.good.price}}</p>
                    
                </div>
                
            </nut-swiper> 
            <div style="width:100%;height:100%;overflow:hidden">
                <span style="float:left;margin:5% 5% 0 5%">商品数量:</span>
                <nut-button 
                style="float:right;margin:5% 5% 0 0"
                    type="primary" 
                    shape="circle" 
                    small
                    @click="countAdd"
                    >
                    ＋
                </nut-button>
                <span style="width:10%;height:25%;border:2px solid red;float:right;margin:6% 0 2% 0">
                    {{count}}
                </span>
                <nut-button 
                    style="float:right;margin:5% 5% 0 0"
                    type="lightred" 
                    shape="circle" 
                    small
                    @click="reduce"
                    >
                    －
                </nut-button>
            </div>
            <span style="float:left;margin:0 5%">商品价格:</span>
            <nut-price  
                :price="count*item.good.price" 
                :decimalDigits="2" 
                :needSymbol="true" 
                :thousands="true"
            />
        </ul>
        </div>
    </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from "vuex";
import { constants } from 'crypto';
export default {
    data(){
        return {
            result:[],
             data2:[
            {id:42,value:'',label:'·'},
        ],
            group:['A'],
        }
    },
    mounted(){
        this.$axios.get("/vue/getgoods",{
        }).then(res=>{
            // console.log(res.data);
            this.result = res.data.result;
        })
    },
        computed:{
            ...mapState([
                'goods'
            ])
        }, 
    methods:{
        ...mapActions({
            reduce:'countReduce',   // this.$store.dispatch("countDesc",10);  // 将 `this.count_add()` 映射为 `this.$store.dispatch('countAdd')`
        }),
        ...mapActions([
            "countAdd",
        ]),
        ...mapState([
            "nGoodsId"
        ]), 
    },
    created(){
        var goodsId = this.nGoodsId.goodsID;
        console.log(goodsId);
        this.countAdd({url:"/vue/countAdd",cb:()=>{

        }});
    }
}
</script>

<style scoped>
    ul{
        margin:2% 0 3% 0;
        overflow: hidden;
        background-color:mintcream;
    }
    .tp{
        width: 100%;
        height: 100px;
    }
    img{
        width: 40%;
        height: 100px;
    }
    .p1{
        color:darkorange;
        font-weight: 900;
    }
    .p2{
        color:crimson;
        font-weight: 900;
        margin:10px 0;
    }
    .my-checkbox{
        margin-top:8%;
    }
</style>