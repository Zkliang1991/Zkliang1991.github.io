<template>
    <div>
        <Head title="休闲裤" :show="true"></Head>
        <div v-for="(good,i) in tabs" :key="i">
            <router-link :to="{name:'good',params:{goodId:good._id},query:{name:good.name}}">
              <van-card
                num="299"
                :price="good.price"
                :desc="good.where"
                :title="good.name"
                :thumb="good.img"
              ></van-card>
            </router-link>
          </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tabs: []
        }
    },
    mounted(){
        
      this.$axios
        .get("/vue/getgoodslist", {
          params: {
            keyword:'pants'
          }
        })
        .then(res => {
          this.tabs = res.data.result;
        });
    },
   
}
</script>