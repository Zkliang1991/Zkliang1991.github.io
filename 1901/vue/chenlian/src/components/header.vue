<template>
  <div>
    <van-nav-bar :title="title" left-text="返回"  left-arrow v-if="show" fixed @click-left="goback" >      
        <van-icon name="search" slot="right" v-if="searchShow" @click="goSearch"/>
      <router-view></router-view>  
  </van-nav-bar>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    show: Boolean
  },
  data() {
    return {
      searchShow: String
    }
  },
  mounted(){
    
  },
  methods:{
    goback() {
      this.$router.go(-1);
    },
    goSearch(){
      this.$router.push({name:'search'})
    }
  }
};
</script>

<style>
</style>
