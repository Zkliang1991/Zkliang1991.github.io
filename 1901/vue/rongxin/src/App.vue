<template>
  <div id="app">
    <!-- 5. 定义路由出口  -->
    <router-view class="box" v-if="isRouterActive"></router-view>
  </div>
</template>

<script>
import Demo from "./components/demo.vue" 
import Head from "./components/head.vue" 
export default {
  name: 'app',
  components: {
    Demo:Demo,
    Head:Head
  },
  provide(){
    return {
      reload:this.reload
    }
  },
  data(){
    return{
      isRouterActive:true
    }
  },
  methods:{
    reload(){
      this.isRouterActive = false;
      this.$nextTick(function(){
        this.isRouterActive = true
      })
    }
  }
}
</script>

<style scoped>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>


