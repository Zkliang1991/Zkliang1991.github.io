


<template>
  <div>
    <div class="searchbox">
      <van-nav-bar left-text="返回" left-arrow class="bar" @click-left="goback" fixed>
        <van-search
          slot="right"
          placeholder="请输入搜索关键词"
          show-action
          shape="round"
          right-icon="scan"
          class="search"
          v-model="value"
        >
        <div slot="action" @click="onSearch">搜索</div>
        </van-search>
      </van-nav-bar>
      
    </div>
    <div>
        <List :goodlist="goods" @change="getGood"></List>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  data() {
    return {
      value: "",
      goods:[],
    };
  },
  computed:{
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },onSearch(data){
        // this.goods = data;
    },getGood(data){
      this.goods = data;
    }
  },
  mounted(){
    this.$axios.get("/vue/getGoodList").then(res=>{
      this.goods = res.data.result;
      console.log(res.data);
    })
  },
  watch: {
    value(newVal) {
      console.log(newVal);
       this.$axios.get("/vue/getGoodList",{
         params:{
           keyword : newVal,
         }
       }).then(res=>{
         this.goods = res.data.result;
         console.log(this.goods);
       })
    }
  }
};
</script>



<style >
.bar {
  position: relative;
}
.search {
  font-size: 14px;
  width: 80%;
  height: 0.4rem;
  position: fixed;
  left: 1.3rem;
  top: 0.25rem;
}

</style>
