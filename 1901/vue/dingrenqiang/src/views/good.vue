<template>
  <div>
    <Head :title="$route.query.title" :show="true"></Head>

    <div class="xiang">
      <h2>
        {{good.title}}
        <span style="margin-left:20px;color:red;">{{good.grade}}</span>
        <van-tag plain type="danger">{{good.genre}}</van-tag>
      </h2>
    </div>
    <div class="img">
      <img :src="good.img" alt>
    </div>
    <div class="xin">
      <p>导演：{{good.direct}}</p>
      <p>主演：{{good.star}}</p>
      <p>制片国家/地区：{{good.region}}</p>
      <p>片长：{{good.duration}}</p>
      <h3>剧情介绍：{{good.movieAbstract}}...</h3>
    </div>
    <van-rate v-model="value" allow-half void-icon="star" void-color="#eee"/>
    
    
    <van-goods-action>
      <div>
      <van-stepper v-model="number" />
      
      
    </div>
      <van-goods-action-big-btn @click="gotoCart">加入购物车</van-goods-action-big-btn>
    </van-goods-action>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      goodId: this.$route.params.goodId,
      good: {},
      value: 3.5,
      number:1
    };
  },
  methods:{
    gotoCart(){
      
      this.$axios.post("/vue/addCart",{
        goodId:this.goodId,
        count:this.number,
        good:JSON.stringify(this.good)
      }).then(res=>{
        // console.log(res.data)
        this.$router.push({ name: "cart" });
      })
      
    }
  },

  mounted() {
    this.$axios
      .get("/vue/getGoodOne", {
        params: {
          goodId: this.goodId
        }
      })
      .then(res => {
        this.good = res.data.result;
        this.show = true;
      });
  }
};
</script>

<style scoped>
.xiang {
  margin-top: 1rem;
  /* text-align: center; */
}
.img {
  text-align: center;
}
img {
  display: inline-block;
}
.xin {
  border-top: 1px solid rgb(126, 125, 125);
}
.xin p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 18px;
  /* line-height: 18px; */
  margin-left: 15px;
  margin-top: 5px;
  color: rgb(37, 40, 41);
}
.xin h3 {
  font-size: 18px;
  /* line-height: 18px; */
  margin-left: 15px;
  margin-top: 5px;
  color: rgb(37, 40, 41);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  overflow: hidden;
}
h2 {
  font-weight: 800;
  border-bottom: 1px solid rgb(126, 125, 125);
  margin-bottom: 3px;
  font-size: 18px;
  line-height: 18px;
  height: 0.5rem;
}
.van-tag {
  float: right;
  font-size: 12px;
}
.van-rate {
  float: right;
  margin-top: 30px;
}

.van-stepper{
  float: right;
  background: rgb(0, 255, 213);
  margin-top:10px;
  margin-right: 5px; 
  height: 30px;
  
}
</style>



