<template>
  <div>
  <img v-for="(img,i) in imageList" v-lazy="img" :key="i" class="tu" @click="goShopping(i)" >
  </div>
</template>

<script>

export default {
  data() {
    return {
      imageList: [
        require("@/assets/images/chuangxiao.png"),
        require("@/assets/images/yunyuedu.jpg"),
        require("@/assets/images/7chaoshi-1545121233.png"),
        require("@/assets/images/9zhongxin-1545121233.png"),
        require("@/assets/images/fuzhuan.jpg"),
        require("@/assets/images/jintichuxiao.png"),
        require("@/assets/images/lingquan.png"),
        require("@/assets/images/pintuan-1559204915.png"),
        require("@/assets/images/tongshubang.png"),
        require("@/assets/images/xinshubang.png"),

      ]
    };
  },
  methods:{
      goShopping(){
           this.$router.push({ name: "classify" });
      }
  }
};
</script>
<style scoped>
    .tu{
        width: 20%;
        float: left;
    }
</style>


