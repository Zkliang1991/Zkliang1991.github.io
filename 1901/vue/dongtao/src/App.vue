<template>
  <div id="app">
      <!-- 5. 定义路由出口 -->
      <router-view class="box"></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Swipe from './components/swipe.vue'
export default {
  name:'app',
  components:{
    HelloWorld,
    Swipe:Swipe,
  }
  
}
</script>


<style>

/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

</style>
