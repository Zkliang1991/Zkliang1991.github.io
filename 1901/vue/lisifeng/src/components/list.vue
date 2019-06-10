<template>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="加载完成">
      <ul class="yf">
		<li v-for="(good, i) in goods" :key="i" class="move1">
            <Item :good="good"></Item>
		</li>
	</ul>
    </van-pull-refresh>
</template>

<script>
import Item from "./item.vue"
export default {
  data() {
    return {
      isLoading: true
    }
  },
    props:{
        goods:{
            type:Array,
            required:true
        }
    },
  methods:{
    onRefresh() {
      setTimeout(() => {
        this.goods=this.goods.reverse();
        this.$toast('刷新成功');
        this.isLoading = false;
      }, 500);
    }
  },
    components:{
        Item
    },
}
</script>

<style lang="scss" scoped>
  .yf{
	display: flex;
	flex-wrap:wrap;
	justify-content:space-between;
	margin-bottom: .98rem;
}
.yf li{
	width: 49.5%;
}
</style>