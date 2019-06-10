<template>
  <div class="about">
    <Head title="列表"  searchShow="false"></Head>
    <Swipe></Swipe>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">

</van-pull-refresh>
    <mt-tab-item 
    class="list1" :id="item.value" v-for="(item,i) in goodInfo.gifts" :key="i" >
    <div @click="tocla(item._id)">
        <h1 class="hi1">{{item.title}}</h1>
        <p id="imgp" ><img :src="item.img"></p>
        <h3>{{item.shohname}}</h3>
        <span>商品售价{{item.price}}￥</span>
        <span>剩余数量{{item.num}}件</span>
    </div>
  
  </mt-tab-item>
    
  </div>
</template>
<script>
import store from '@/store';
import {mapState,mapActions,mapMutations} from "vuex";
import Swipe from '@/components/swipe.vue'
export default {
   computed:{
        ...mapState(['goodInfo'])
    },
  data(){
    return{
      count_1:store.state.count,
      count:store.state.count,
      gifts:[],
      //  count: 0,
      // isLoading: false
    }
  },
   components:{
    Swipe
  },
  mounted(){
     this.getGift({
            url:"/vue/gift",
            cb(){
                  // this.gifts  = res.data.result;
            }
        })
  },
  methods:{
       ...mapActions(['getGift']),
    tocla(id){
     this.$router.push({
       name:"classify",
         params: {   
                id:id,   
            }  
     })
    },
      //     onRefresh() {
      // setTimeout(() => {
      //    this.$axios.get("/vue/gift").then(res=>{
      //           this.gifts  = res.data.result;
      //   })
      //   this.gifts  = this.gifts.reverse();
      //   this.$toast('刷新成功');
      //   this.isLoading = false;
      //   this.count++;
      // }, 500);
    // }
  },
  created(){
    // this.$axios.get("/vue/gift").then(res=>{
    //             this.gifts  = res.data.result;
    //     })
  }
}
</script>
<style scoped>
.list1{
  width: 49%;
  border:1px solid rgb(180, 240, 40);
  float: left;
}
.hi1{
  font-size: 0.32rem;
  margin: 5px;
}
img{
  width: 100%;
  height: 100%;
    border:1px solid white;
  border-radius: 10px;
  box-shadow: 10px;
}
span{
  color:red;
  font-weight: 700;
  font-size: 0.25rem;
  display:inline-block;
  margin: 10px 10px;
}
#imgp{
  border:1px soild white;
  border-radius: 10px;
   width: 80%;
  margin:auto;
}
</style>

