<template>
  <div>
    <van-nav-bar :title="title">
      <van-icon name="arrow-left" slot="left" @click="goback" />
      <van-icon name="search" slot="right" v-if="show" @click="goSearch"/>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  props:{
    title:String,
    show:Boolean
  },
  methods:{
    goback(){
      this.$router.go(-1);
    },
    goSearch(){
            this.$router.push({name:'search'})
        }
  }
};
</script>
