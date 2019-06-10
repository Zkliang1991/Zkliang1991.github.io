<template>
  <div class="home">
    <Head title="宜搜小说"></Head>
    <van-notice-bar
  text="公告：为响应国家净网行动，部分小说或章节不予展示，感谢读者理解。"
  left-icon="volume-o"
/>
    <van-swipe :autoplay="3000" class="move">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" class="img">
      </van-swipe-item>
    </van-swipe>
    <div class="jingxuan">
      <p>精选</p>
    </div>
    <ul class="yf">
		<li v-for="(good, i) in goods" :key="i" class="move">
      <Item :good="good"></Item>
		</li>
	</ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Item from "@/components/item.vue"
export default {
  name: "home",
  data() {
    return {
      images: [
        require("@/assets/images/images1.jpg"),
        require("@/assets/images/images2.jpg"),
        require("@/assets/images/images3.jpg"),
        require("@/assets/images/images4.jpg")
      ],
      goods:[]
    };
  },
  methods: {
    search() {
      this.$router.push({ name: "search" });
    }
  },
  components: {
    HelloWorld,
    Item
  },
  created() {
    this.$axios
      .get("/vue/list", {
        params: {
          limit: 10
        }
      })
      .then(res => {
        console.log(res);
        this.goods = res.data.result
      });
  }
};
</script>

<style lang="scss" scoped>
  .img{
    width: 100%;
    height: 4rem;
  }
  .jingxuan{
    font-size: .4rem;
    color: #000;
  }
  .jingxuan p{
    padding-left: .2rem;
  }
  .van-swipe{
    border-bottom: 0.05rem solid #ececec;
  }
  .yf{
	display: flex;
	flex-wrap:wrap;
	justify-content:space-between;
	margin-bottom: .98rem;
}
.yf li{
	width: 49.5%;
}
.yf img{
	width: 100%;
}
.yf p{
	line-height: .33rem;
	height: .66rem;
	margin: .12rem;
}
.yf div{
	display: flex;
	justify-content:space-between;
	padding:.27rem .1rem .35rem .1rem; 
}
.yf div span:first-child{
	color: #e02e24;
}
.yf div span:last-child{
	color: #9c9c9c;
}
.sl-2{
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
.ziti{
  font-family: Arial,"Microsoft YaHei",sans-serif;
}
</style>

