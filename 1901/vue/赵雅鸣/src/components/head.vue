<template>
  <div>
    <mt-header :title="title">
    <mt-button icon="back" slot="left" @click="goback" v-if="flag">返回</mt-button>
  <mt-button icon="search" slot="right" @click="goSearch" v-if="showSearch"></mt-button>
</mt-header>
  </div>
</template>


<script>
export default {
  data(){
        return{
            showSearch:true
        }
    },
  props: {
    title:String,
    flag:Boolean
  },
  methods: {
   goback() {
     this.$router.go(-1)
    },
    goSearch(){
      console.log("search")
      this.$router.push({name:'search'})
    }
  }
};
</script>

<style scoped>
.box{
  background-color: aquamarine;
  
}

</style>
