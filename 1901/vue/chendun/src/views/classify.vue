<template>
  <div>
    <Head title="商品分类" :show="true"></Head>
    <van-tabs v-model="selected" animated>
      <van-tab v-for="(item,index) in goodType" :title="item.text" :key="index" :id="item.value">
        <!-- <ul :id="t.value" v-for="(t,i) in goodType" :key="i"> -->
            <List :goods="allGood.filter((it)=>it.type.value==item.value)" :allGood="allGood" @changegoods="getGood" ></List>
        <!-- </ul> -->
      </van-tab>
    </van-tabs>
    <!-- <mt-tab-container v-model="selected">
      <mt-tab-container-item :id="t.value" v-for="(t,i) in goodType" :key="i">
          </mt-tab-container-item> 
    </mt-tab-container> -->
    <!-- <mt-navbar v-model="selected">
      <mt-tab-item :id="item.value" v-for="(item,i) in goodType" :key="i">{{item.text}}</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
       <mt-tab-container-item :id="t.value" v-for="(t,i) in goodType" :key="i">
                <List 
                :goods="allGood.filter((it)=>it.type.value==t.value)" 
                :type="t"
                :allGood="allGood"
                             @changegoods="getGood"
                ></List>
            </mt-tab-container-item>
    </mt-tab-container>-->
     <BackTop :height="50" :bottom="50" :right="15">
        <div class="top">返回顶端</div>
    </BackTop>
  </div>
</template>

<script>
export default {

  methods: {
    getGood() {
      console.log("翻转 allGood");
      this.allGood = this.allGood.reverse();
    }
  },
  data() {
    return {
      goodType: [],
      allGood: [],
      selected: "shirt",
      show: true,
      loading: false,
      finished: false
    };
  },
  created() {
    this.$axios.get("/vue/getGoodType").then(res => {
      this.goodType = res.data.result;
    });
    this.$axios.get("/vue/getGoodList").then(res => {
      this.allGood = res.data.result;
      this.show = true;
    });
  }
};
</script>
<style scoped>
.top{
        padding: 10px;
        background: rgba(0, 153, 229, .7);
        color: #fff;
        text-align: center;
        border-radius: 2px;
    }
</style>

