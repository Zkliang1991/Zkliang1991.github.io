<template>
  <div>
    {{all_goods.length}}
   
     <van-tabs>
      <van-tab v-for="(item,i) in good_types" :key="i" :title="item">
         <List :goods="all_goods.filter((it)=>it.genre==item)" :all_goods="all_goods" @changegoods="getGood" style="margin-top:-50px"></List>
         
      </van-tab>
    </van-tabs>
    <Head title="电影分类"></Head>
    <!-- <mt-navbar v-model="selected" >
      <mt-tab-item :id="item.text" v-for="(item,i) in good_types" :key="i" >{{item.text}}</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
            <mt-tab-container-item :id="t.text" v-for="(t,i) in good_types" :key="i">
               <List :goods="all_goods.filter((it)=>it.type.text==t.text)"></List>
            </mt-tab-container-item>
    </mt-tab-container>-->
    <!-- <h1 v-if="all_goods.length>0">
{{all_goods[0].type.text}}
</h1> -->
  </div>
</template>

<script>
export default {
  methods:{
        getGood(){
            console.log("翻转 all_goods");
            this.all_goods  = this.all_goods.reverse();
        }
    },
  data() {
    return {
      good_types: [],
      all_goods: [],
      selected: "science",
      show: false
    };
  },
  
  created() {
    this.$axios.get("/vue/getGoodTypes").then(res => {
      this.good_types = res.data.result;
      // console.log(this.good_types);
    });
    this.$axios.get("/vue/getGoodList").then(res => {
      this.all_goods = res.data.result;
      this.show = true;
      // console.log(this.all_goods)
      

    });
  }
};
</script>

<style scoped>
.van-tabs {
  margin-top: 20px;
  margin-bottom: -50px;
  /* position: fixed;
  left: 0;
  top: 40px;
  right: 0;
  bottom: 0; */
}

.film{
  margin-top: 0 !important;
}
</style>

