<template>
  <div>
    <Head title="分类"></Head>
<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    
    <van-tabs v-model="active">
      <van-tab :title="item.text" :id="item.value" v-for="(item,i) in good_types" :key="i">
        <List
        :list="all_goods.filter((it)=>it.type.value==item.value)"
        :type="item"
        >
        <Rate v-model="value" />
        </List>
      </van-tab>
    </van-tabs>
    </van-pull-refresh>
    <BackTop :height="100" :bottom="200">
        <div class="top">返回顶端</div>
    </BackTop>
    <Foot></Foot>
  </div>

</template>

<script>
import Foot from "@/components/foot.vue";
import List from "@/components/list.vue";
import Search from "@/components/search.vue";
// import Gotop from "@/components/gotop.vue";



export default {
  methods:{
        getGood(){
            this.all_goods  = this.all_goods.reverse();
        },
        onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
          for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束        
      }, 500);
    }
    },
  components: {
    Foot,
    List,
    Search,
    // Gotop
  },
  data() {
    return {
      active: 0,
      good_types: [],
      list: [],
      all_goods:[],
       isLoading: false,
        value: 0
      
    };
  },
  created() {
    this.$axios.get("/vue/getGoodTypes").then(res => {
      this.good_types = res.data.result;
    });

    this.$axios.get("/vue/getGoodList").then(res => {
      this.all_goods = res.data.result;
    });
  }
};
</script>
<style lang="scss" scoped>
.top{
        padding: 10px;
        background: rgba(0, 153, 229, .7);
        color: #fff;
        text-align: center;
        border-radius: 2px;
    }
</style>

