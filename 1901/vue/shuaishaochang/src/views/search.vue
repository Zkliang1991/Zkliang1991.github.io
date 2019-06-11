<template>
    <div class="found" >
        <div class="back">
            <img src="../assets/images/fanhui.png" alt="" class="fanhui" @click="goback">
            <span style="font-size:20px">搜索</span>
            <img src="../assets/images/share.png" alt="" class="share">
        </div>
        <nut-searchbar
            :animation="true"
            :hasTextButton="false"
            placeText="请输入内容"
            v-model="keyword"
        ></nut-searchbar>
        <ul v-for="(good,i) in list" :key='i' @click="gotoDetail(good._id)">
            <nut-swiper class="tp" :lazyLoad="false" >
                <img :src="good.img" alt="" class="nut-img-lazyload"/>
                <div class="jg">
                    <p class="p1">{{good.title}}</p>
                    <p class='p2'>6.18惊爆价:￥{{good.price}}</p>
                    <p style="color:#aaa">原价：￥<strike>{{good.priceOld}}</strike></p>
                    <span>优惠生活每一天,天猫同款臻品,尽在海淘</span>
                </div>
            </nut-swiper> 
        </ul>
    </div>
</template>
<script>
import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
export default {
    data(){
        return {
            value:"",
            list:[],
        }
    },
    methods:{
        // submitFun(value) {
        //    console.log(value);
        //     console.log('默认提交操作！');
        // },
        goback(){
            this.$router.go(-1);
        },
        gotoDetail(del){
            this.$store.commit("getKeygoodsID",del);
            this.$router.push({name:"detail"});
        }
    },
    computed:{  //计算属性  存keyword的值
        keyword:{
            get(){
                return this.$store.state.keyword;
            },
            set(val){
                this.$store.commit("getKeyword",val);  // 修改值 返回 到 vuex 
            }
        }
    },
     watch:{ //监听 keyword 发生改变
        keyword(newVal){
            console.log(newVal);

            this.$axios.get("/vue/search",{
                params:{
                    keyword:newVal
                }
            }).then(res=>{
                this.list = res.data.result; 
            })
        }
    }
}
</script>


<style scoped>
.back{
    overflow: hidden;
    height: 5%;
}
.fanhui{
    float:left;
    width: 8%;
    height: 5%;
    margin:10px 10px;
}
.share{
    float:right;
    width: 8%;
    height: 5%;
    margin:10px 10px;
}
ul{
        margin:10px 0;
        overflow: hidden;
    }
    .tp{
        background-color:mintcream;
        width: 100%;
        height: 100%;
    }
    img{
        width: 40%;
        height: 150px;
        margin-bottom:20px;
    }
    .jg{
        /* float:left; */
        margin-left:20px;
    }
    .p1{
        font-size: 18px;
        padding-top:40px;
        color:darkorange;
        font-weight: 900;
    }
    .p2{
        font-size: 20px;
        margin-top:20px;
        color:crimson;
        font-weight: 900;
    }
</style>
