<template>
  <div>
    <Head title="首页" :flag="false"></Head>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <NoticeBar></NoticeBar>
      <van-tabs>
        <van-tab v-for="(item,i) in goodInfo.types" :title="item.text" :key="i">
          <Banner></Banner>
          
          <van-row>
            <van-col span="6">
              <div class="smallbox">
                <img
                  class="jpg"
                  src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png.webp"
                  alt
                >
                <p style="color: #000000">商城超市</p>
              </div>
            </van-col>
            <van-col span="6">
              <div class="smallbox">
                <img
                  class="jpg"
                  src="//m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png.webp"
                  alt
                >
                <p style="color: #000000">拼团购</p>
              </div>
            </van-col>
            <van-col span="6">
              <div class="smallbox">
                <img
                  class="jpg"
                  src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png.webp"
                  alt
                >
                <p style="color: #000000">领券</p>
              </div>
            </van-col>
            <van-col span="6">
              <div class="smallbox">
                <img
                  class="jpg"
                  src="//m.360buyimg.com/mobilecms/s120x120_jfs/t17116/175/2673385904/6610/50f5ef50/5b03b7aeNf3a7fa37.png.webp"
                  alt
                >
                <p style="color: #000000">借钱</p>
              </div>
            </van-col>
            <van-col span="6">
              <div class="smallbox">
                <img
                  class="jpg"
                  src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/22262/9/1470/4527/5c120cd0E5d3c6c66/4792ec307a853e9f.png.webp"
                  alt
                >
                <p style="color: #000000">PLUS会员</p>
              </div>
            </van-col>
            <van-col span="6">
              <div class="smallbox">
                <img
                  class="jpg"
                  src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png.webp"
                  alt
                >
                <p style="color: #000000">商城服饰</p>
              </div>
            </van-col>
            <van-col span="6">
              <div class="smallbox">
                <img
                  class="jpg"
                  src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/27962/13/1445/4620/5c120b24Edd8c34fe/43ea8051bc50d939.png.webp"
                  alt
                >
                <p style="color: #000000">新鲜水果</p>
              </div>
            </van-col>
            <van-col span="6">
              <div class="smallbox">
                <img
                  class="jpg"
                  src="//m.360buyimg.com/mobilecms/s120x120_jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png.webp"
                  alt
                >
                <p style="color: #000000">敬请期待</p>
              </div>
            </van-col>
          </van-row>
          <Nav></Nav>
          
          内容 {{ item.text }}
          <van-row gutter="5" class="move boxs">
            <van-col
              span="12"
              v-for="(good,i) in goodInfo.all_goods.filter((it)=>it.type.value==item.value)"
              :key="i"
            >
              <router-link
                :to="{name:'details',params:{goodId:good._id},query:{name:good.name,price:good.price,remain:good.discount,img:good.img}}"
              >
                <img v-lazy="good.img" alt>

                <div class="info">
                  <div class="name">{{good.name}}</div>
                  <div class="brief">{{good.type.text}}</div>
                  <div class="price">
                    {{good.price*1}}
                    <span>起</span>
                    <span class="price old">
                      <s>{{good.price+400}}</s>
                    </span>
                  </div>
                </div>
              </router-link>
            </van-col>
          </van-row>
        </van-tab>
      </van-tabs>
    </van-pull-refresh>
    <Foot></Foot>
  </div>
</template>

<script>
// @ is an alias to /src

import Foot from "@/components/foot.vue";
import Nav from "@/components/nav.vue";
import { mapState, mapActions, mapGetters } from "vuex";
import {Toast} from "vant"

export default {
  name: "home",
  data() {
    return {
      isLoading: false
    };
  },
  computed: {
    ...mapState(["goodInfo"])
  },
  components: {
    Foot,
    Nav
  },
  methods: {
    onRefresh() {
      this.$axios.get("/vue/movies").then(res => {
        Toast("刷新成功");
        this.isLoading = false;
      });
    },
    ...mapActions(["getGoodTypes", "getAllGoods"])
  },
  created() {
    // this.$axios.get("/vue/getGoodTypes").then(res => {
    //   console.log(res);
    //   this.good_types = res.data.result;
    // });
    if(!window.sessionStorage.userInfo){
      this.$router.push({name:'login'})
    }
    this.getGoodTypes({ url: "/vue/getGoodTypes" });
    this.getAllGoods({ url: "/vue/getAllGoods" });
    console.log(window.sessionStorage.userInfo)
    
  }
};
</script>
<style scoped>

.smallbox {
  text-align: center;
  margin-top: 20px;
}
p {
  margin-top: 3px;
  font-size: 14px;
}
.jpg {
  display: inline;
  width: 40px;
  height: 40px;
}
img {
  width: 100%;
  height: 204px;
}
.a {
  float: left;
}
.info {
  padding: 0.2rem 0.27rem;
  text-align: left;
}
.name {
  font-size: 0.28rem;
  color: rgba(0, 0, 0, 0.87);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.brief {
  margin-top: 0.06rem;
  font-size: 0.22rem;
  line-height: 0.3rem;
  color: rgba(0, 0, 0, 0.54);
}
.price {
  font-size: 0.28rem;
  color: #ea625b;
  height: 1.5em;
  line-height: 1.5em;
  position: relative;
  display: inline-block;
  padding-left: 0.5em;
}
.price:before {
  content: "\A5";
  position: absolute;
  left: 0;
  top: 0;
  font-size: 0.76em;
  text-decoration: none;
}
.old {
  display: inline-block;
  margin: 0 0.1rem;
  font-size: 0.22rem;
  color: rgba(0, 0, 0, 0.54);
}
</style>
