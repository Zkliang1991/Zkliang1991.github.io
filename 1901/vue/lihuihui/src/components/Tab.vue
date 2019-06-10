<template>
    <div id='tabBox'>
        <van-tabs @click='getData($event)'>
          <van-tab v-for="(item,i) in tabs" :title='item.title' :key='i' >
             <List>  </List>  
          </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import List from "./List";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      keyword:1,
      pageNumber:1,
      pageSize:5,
      tabs: [
        {
          title: "吊带",
          value: 1
        },
        {
          title: "连衣裙",
          value: 2
        },
        {
          title: "T桖",
          value: 3
        },
        {
          title: "运动套装",
          value: 4
        },
        {
          title: "旗袍",
          value: 5
        },
        {
          title: "运动衬衫",
          value: 6
        }
      ]
    };
  },
  // computed: {
  //   ...mapState(["nType"])
  // },
  methods: {
    getData(e){
      this.$store.commit('changeType',e+1)
      // this.getThisTypeGoods({url:"/vue/getGoodList",params:{'keyword':this.keyword}})
    },
    //...mapActions(["getThisTypeGoods"]),
    
  },
  components: {
    List
  },
  
  // mounted() {
  //      this.getThisTypeGoods({url:"/vue/getGoodList",params:{'keyword':this.keyword}})
  // }
   
    
  
 
  
};
</script>
<style scoped>
#tabBox {
  margin-top: 0.1rem;
}
.van-tabs__wrap{
      top: 1.2rem;
    left: 0;
    right: 0;
    z-index: 99;
    overflow: hidden;
    position: fixed !important
}
/* #tabBox .van-tabs .van-tabs__wrap {
    top: 1.2rem;
    left: 0;
    right: 0;
    z-index: 99;
    overflow: hidden;
    position: fixed !important
} */
  
</style>

