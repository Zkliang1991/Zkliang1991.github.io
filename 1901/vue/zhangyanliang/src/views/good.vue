<template>
    <div>
        <Head title="商品分类"></Head>
      <van-tabs v-model="active">
            <van-tab v-for="(type,i) in types" :key="i"
             :title="type.text" >
             {{type.value}}
            <List :goods="goods"></List>



            <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
              <ul class="content">
                <li v-for="(good,i) in goods" :key="i" class="goodli" @click="go(good.goodid)">
                  <div class="goodimg">
                    <img :src="good.img"  class="img zoomln">
                  </div>
                  <h2 class="goodname">{{ good.goodname }}</h2>
                  <p class="price">价格：<span> {{ good.price | money }} </span></p>
                </li>
              </ul> 
            </van-pull-refresh> -->
          </van-tab>
        </van-tabs>
      
    </div>
</template>

<script>

export default {
     data() {
    return {
      active: 1,
      types:[],
      goods:[],
      count: 0,
      isLoading: false,
      text:''

    };
  },
  mounted(){
    this.$axios.get("/vue/goodlist",{
      params:{
        limit:10
      }
    }).then(res=>{
    
       this.goods=res.data.result;
       console.log( this.goods);
      
    }),
    this.$axios.get("/vue/goodType").then(res=>{
    
      this.types = res.data.result;
        console.log(this.types);
        this.text = res.data.result.text;
    })
  },
   methods: {
     onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    },
   
   },
   watch:{
     text(newVal){
       console.log(newVal)
     }
   }
}
</script>


<style scoped>

</style>




  
