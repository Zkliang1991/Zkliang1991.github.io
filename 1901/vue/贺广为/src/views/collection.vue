<template>
  <div>
    <Head :show="true" title="我的收藏"></Head>
    <van-card
      class="goodcard"
      v-for="(item,index) in goods"
      :num="item.count"
      tag="对的选择"
      :price="item.body.good.pice"
      :desc="item.body.good.shop_text"
      :title="item.body.good.name"
      :thumb="item.body.good.img"
      :key="index"
    >
      <div slot="footer">
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">删除</van-button>
      </div>
    </van-card>
  </div>
</template>
<script>
export default {
  data(){
    return {
      goods:[],
    }
  },
  mounted(){
    this.$axios.get("/vue/getcollection").then(res=>{
      console.log("333333333333333")
      console.log(res.data.result)
      this.goods=res.data.result
    })
  }
}
</script>
<style lang="scss">
  .goodcard{
    padding-top: 0.8rem !important;
  }
</style>