<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white" :loop="false">
      <van-swipe-item v-for="(img,i) in guide.imgs" :key="i" @click="goToHome(i)">
          <img :src="img" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>

import {mapState,mapActions,mapMutations} from "vuex";
export default {
    computed:{
        ...mapState(['guide'])
    },
    methods:{
        ...mapMutations(['goToHome'])
    },
    mounted(){
        if(localStorage.count){
            localStorage.count++;
            if(localStorage.count>3){
                this.$router.push({name:'home'})
            }
        }else{
            localStorage.count=1
        }
    }
}
</script>

<style lang="scss" scoped>
  .van-swipe,
  van-swipe-item,
  img{
    width: 100%;
    height: 100%;
  }

</style>


