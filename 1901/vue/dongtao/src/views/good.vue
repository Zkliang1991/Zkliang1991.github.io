<template>
    <div v-if="show">
        <Head :title="$route.query.name" :show="true"></Head>
        <div>
            <img :src="require('@/assets/images/'+good.img)" alt="" width="100%" height="340px">
            <h2> {{good.name}}  </h2>
            <h4 style="color:red"> {{good.price}} </h4>
        </div>
        <div>
            <mt-button type="primary"> + </mt-button>
            <mt-field  type="number" v-model="number"></mt-field>
            <mt-button type="danger"> -  </mt-button>
        </div>
        <div>
            <mt-button type="primary" @click="gotoCart">立即购买 </mt-button>
            <mt-button type="danger" @click="buyGood">加入购物车  </mt-button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            goodId:this.$route.params.goodId,
            good:{},
            show:false,
            number:1,
        }
    },
    methods:{
        gotoCart(){
            this.$router.push({name:'cart'})
        },
        buyGood(){
            // 数量 
            // goodId
            // username  ==>  token 
            this.$axios.post("/vue/addCart",{
                goodId:this.goodId,
                count:this.number,
                good:JSON.stringify(this.good)
            }).then(res=>{
                console.log(res.data);
            })
        }
    },
    mounted(){
        this.$axios.get("/vue/goodsOne",{
            params:{
                goodId:this.goodId
            }
        }).then(res=>{
            console.log(res);
            this.good = res.data.result;
            this.show = true;
        })
    }
}
</script>
