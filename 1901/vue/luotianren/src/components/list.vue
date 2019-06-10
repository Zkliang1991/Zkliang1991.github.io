<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" >
     
        <van-cell slots="default" v-for="(item,i) in list" :key="i">
           <router-link :to="{name:'details',params:{detailsId:item._id},query:{name:item.name}}">
          <img :src="item.img" alt>
          名字:{{item.name}}
          价格:{{item.price}}
          件数:{{item.discount}}
      </router-link>  
      推荐系数:<Rate v-model="value" />
        </van-cell>
    </van-list>
  </div>
</template>


<script>
export default {
  data() {
    return {
      loading: false,
      finished: false,
      value:5
    };
  },

  methods: {
    // onLoad() {
    //   // 异步更新数据
    //   setTimeout(() => {
    //     for (let i = 0; i < 10; i++) {
    //       this.list.push(this.list.length + 1);
    //     }
    //     // 加载状态结束
    //     console.log(length);
    //     this.loading = false;

    //     // 数据全部加载完成
    //     if (this.list.length >= 20) {
    //       this.finished = true;
    //     }
    //   }, 500);
    // }
  },
  props: ["list"],
  mounted() {
    // console.log(this.list);
  }
};
</script>
<style lang="scss">
.van-cell,
img {
  width: 100%;
  // height: 50%;
}
</style>
