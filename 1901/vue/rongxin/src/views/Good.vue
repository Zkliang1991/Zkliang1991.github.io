<template>
    <div v-if="show" id="box">
        <div class="fixedbox">
        <Head :title="$route.query.name" :show="true" class="fixed"></Head>
        </div>
        <div class="title">
            <img :src="good.img" alt="" class="move1">
            <h2> {{good.name}}</h2>
            <div id="countbox">
                <van-button type="danger" id="desc" @click="desc"> - </van-button>
                <mt-field  type="number" v-model="number" id="count"></mt-field>
                <van-button type="danger" id="add" @click="add"> + </van-button>
            </div>
            <h4><span id="price">{{good.price }}</span><span id="oldprice">{{good.oldprice }}</span><span id="txt">{{good.type.text}}</span><span id="discount">{{good.discount}}折</span></h4>
        </div>
        <div id="footbox">
             <van-button type="danger"  id="car" @click="gotoCart">加入购物车  </van-button>
            <van-button type="info" @click="buyGood" id="bug">立即购买 </van-button>
        </div>
    </div>
</template>


<script>
export default {

    data(){
        return {
            goodId:this.$route.params.goodId,
            good:{},
            show:false,
            number:1
        }
    },
    computed:{
        number1(){
        return this.$store.state.num}
    },
    methods:{
        buyGood(){
            if(localStorage.username==""){
                this.$router.push({name:'login'});
            }else{
                this.$axios.post("/vue/addCart",{
                goodsusername:localStorage.username,
                count:this.number,
                good:this.good,
                goodId:this.goodId
                }).then(res=>{
                    console.log(res.data);
                })
                this.$router.push({name:'cart'})
            } 
        },
        gotoCart(){
            //数量
            //goodId
            //判断是否登录
            if(localStorage.username==""){
                this.$router.push({name:'login'})
            }else{
                this.$axios.post("/vue/addCart",{
                goodsusername:localStorage.username,
                count:this.number,
                good:this.good,
                goodId:this.goodId
                }).then(res=>{
                    console.log(res.data);
                })
            }
        },
        desc(){
            if(this.number<=1){
                this.number=1;
            }else{
                this.number--;
            }
            //vuex修改减
            // this.$store.dispatch('goodsNumDesc',1)
        },
        add(){
            this.number++;
            //vuex修改加
            // this.$store.dispatch('goodsNumAdd',1)
        }
    },
    mounted(){
        this.$axios.get("/vue/getGoodOne",{
            params:{
                goodId:this.goodId
            }
        }).then(res=>{
            this.good = res.data.result;
            this.show = true;
        })
        
    }

}
</script>

<style scoped>
    .fixedbox{
        margin-bottom:0.8rem;
    }
    .fixed{
        position:fixed;
        left: 0;
        top: 0;
        width:100%;
        z-index:2;
    }
    #box{
        position:relative;
        width:100%;
        height:100%;
    }
    .top{
        position:absolute;
        left: 0;
        top: 0;
        z-index: 99;
    }
    .move1{
        width: 100%;
        height:9rem;
    }
    .title h2{
        padding:0.2rem;
        line-height: 0.5rem;
        color:#000;
    }
    .title h4{
        padding-left:0.2rem;
        margin-bottom:1.2rem;
    }
    .title #txt,.title #discount{
        display:inline-block;
        padding:0.05rem 0.15rem;
        border:1px solid #999;
        font-size: 0.28rem;
        background-color: #f5f5f5;
        margin-right:0.3rem;
    }
    .title #price{
        padding:0.2rem;
        color:red;
        font-size:0.38rem;
        font-weight:bold;
    }
    .title #oldprice{
        color:#999;
        margin-right:0.2rem;
        text-decoration:line-through;
    }
    #countbox{
        width:100%;
        height:1rem;
        margin-bottom:0.2rem;
    }
    #add,#desc{
       float:left; 
    }
    #desc{
        margin-left: 0.2rem;
    }
    #count{
        padding-left:0.7rem;
        width: 2rem;
        height:1rem;
        float:left;
    }
    #footbox{
        width:100%;
        position:fixed;
        left: 0;
        bottom:0;
    }
    #bug{
        width:60%;
    }
    #car{
        width:40%;
    }
</style>