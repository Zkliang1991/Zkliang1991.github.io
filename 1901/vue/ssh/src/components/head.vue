<template>
   <van-nav-bar :title="title" :left-text="back" :left-arrow ="show" @click-left="onClickLeft"
  @click-right="onClickRight">
  <van-icon v-if="searchShow" name="search" slot="right"  />
</van-nav-bar>

</template>
<script>
    export default {
      data(){
          return {
              searchShow:true
          }
      },
      props:{
        title:String,
        back:String,
        show:String
        
      },
      mounted(){
        this.searchShow = (this.$route.name !== "search")
    },
        methods: {
          
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push({name:"ss"})
    }
  }
    }
</script>
<style scoped>
.van-icon {
  font-size: 20px;
}
</style>
