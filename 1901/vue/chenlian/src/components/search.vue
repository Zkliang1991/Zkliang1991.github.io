<template>
  <div>
    <Head title="搜索" :show="true" :searchShow="true" :v-if="true"></Head>
    <div class="header-top">
      <div>
        <van-search
          v-model="keyword"
          placeholder="在千万海外商品中搜索"
          @search="search"
          input-align="left"
          left-icon="search"
          class="swiper newsearch"
          show-action
          clearable
        >
          <div slot="action" @click="search">搜索</div>
        </van-search>
      </div>
      <!-- <list :goods="goods"></list> -->
      
      <div class="searchlist"> 
      <div class="goodlist" v-for="(good,i) in goods" :key="i">
        <!-- <div class="goodlist"> -->
          <img :src="good.img" alt="" class="goodimg">
          <ul class="goodinfo">
            <p class="goodtitle">{{good.title}}</p>
            <span class="goodspan">{{good.price}}</span>
          </ul>
      </div> 
    </div>

    </div>    
  </div>
</template>

<script>
import { Image } from "vant"; 
import {mapState} from "vuex";
export default {
  data() {
    return {
      goods:[],
      img:
        "https://haitao.nos.netease.com/iszg6xqg71_800_800.jpg?imageView&amp;thumbnail=262x262&amp;quality=90"
    };
  },
  computed:{
    keyword:{
        get(){
            return this.$store.state.keyword;
        },
        set(val){
            console.log(val);
            this.$store.commit("getKeyword",val);  // 修改值 返回 到 vuex 
        }
    }
    },
  watch:{
    value(newVal){
      console.log(newVal);
      this.$axios.get("/vue/getAllGoods",{
        params:{
          keyword:newVal
        }
      }).then(res=>{
        this.goods = res.data.result;
        console.log(this.goods);
      })
    }
  },
  methods: {
    search(data) {
      console.log(this.keyword);
      this.goods = data;
    }
  },
  components:{
    // list
  }
};
</script>

<style scoped>
.header-top {
    margin-top: 3rem;
}
.van-field__control {
  border: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  resize: none;
  display: block;
  color: #666666;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: transparent;
}

/* ----------------------------------- */
.searchlist {  
    /* margin-bottom: 3rem; */
  width: 100%;
}
.goodlist {
  width: 45.5%;
  height: 12.5rem;
  margin-left: 2.5%;
  float: left;
  text-align: center;
  border: 1px solid #f5f5f5;
  border-radius: 5%;
  overflow: hidden;
  background: #fafafa;
}
.goodimg {
  width: 100%;
  padding: 0;
  margin: 0;
  border-radius: 5%;
}
.goodinfo {
  text-align: left;
  width: 90%;
  padding: 0;
  margin: 0 auto;
  overflow: hidden;
  font-size: 0.9rem;
}
p.goodtitle {
  padding: 0;
  margin: 0;
  line-height: 1.5rem;
  color: #333;
}
span.goodspan {
  padding: 0;
  margin: 0;
  line-height: 1rem;
  color: #333;
  font-size: 0.8rem;
  white-space: nowrap;
  overflow: hidden;
}
</style>
