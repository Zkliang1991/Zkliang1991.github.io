<template>
  <div v-if="show">
    <Head title="小说分类"></Head>
    <van-tabs v-model="active" animated class="move">
      <van-tab v-for="(type, i) in good_types" :key="i" :title="type">
        <!-- <List :goods="goods.filter((item)=>item.kind==type)"></List> -->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="加载完成">
          <ul class="ul">
            <li class="xiaoshuo" v-for="(good,i) in goods.filter((item)=>item.kind==type)" :key="i">
              <router-link :to="{name:'good',params:{goodId:good.id},query:{name:good.title}}">
                <van-row type="flex" justify="center">
                  <van-col span="6">
                    <div class="img">
                      <img
                        :src="good.images"
                        alt
                      >
                    </div>
                  </van-col>
                  <van-col span="16">
                    <div class="name">{{good.title}}</div>
                    <div
                      class="content sl-2"
                    >{{good.desc}}</div>
                    <p class="zuozhe">
                      <i class="iconfont icon-icon7"></i>
                      <span>{{good.author}}</span>
                      <span>{{good.chapternums}}</span>
                    </p>
                  </van-col>
                </van-row>
              </router-link>
            </li>
          </ul>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      active: 0,
      good_types: [],
      goods: [],
      isLoading: true
    };
  },
  created() {
    this.$axios.get("/vue/getGoodTypes").then(res => {
      console.log(res);
      this.good_types = res.data.result;
    });
    this.$axios.get("/vue/list").then(res => {
      this.goods = res.data.result;
      this.show = true;
    });
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.goods = this.goods.reverse();
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    }
  }
};
</script>

<style lang="scss" scoped>
.xiaoshuo {
  padding: 0.4rem 0;
}
.img img {
  width: 90%;
  margin-left: 10%;
}
.name {
  font-size: 0.3rem;
  margin-left: 0.2rem;
  color: #3f3f3f;
}
.content {
  color: #666666;
  margin-left: 0.2rem;
  font-size: 12px;
  padding-top: 0.2rem;
}
.sl-2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.zuozhe {
  margin-left: 0.2rem;
  margin-top: 0.3rem;
  color: #666666;
  font-size: 12px;
  position: relative;
}
.icon-icon7 {
  color: crimson;
}
.zuozhe span:nth-child(2) {
  margin-left: 0.1rem;
}
.zuozhe span:nth-child(3) {
  position: absolute;
  border: 1px solid #a3cba2;
  border-radius: 0.1rem;
  padding: 1px;
  color: #a3cba2;
  bottom: 0;
  right: 0;
}
.ul{
  margin-bottom: 50px;
}
</style>


 


     

