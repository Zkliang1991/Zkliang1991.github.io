<template>
<div>
    <Head title="搜索" :show="true"></Head>
    <form action="/">
  <van-search
    v-model="value"
    placeholder="请输入搜索关键词"
    show-action
  />
  <List :goods = goods></List>
</form>
</div>
    
</template>
<script>
export default {
    data(){
        return{
            value:'',
            goods:[]
        }
    },
    watch:{
      value(newVal){
        console.log(newVal);
        this.$axios.get("/vue/goodlist",{
          params:{
            keyword:newVal
          }
        }).then(res=>{
          console.log(res);
          this.goods = res.data.result;
        })
      }
    }
}
</script>

