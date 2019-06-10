<template>
  <div id="app">
    <router-view class="swipe" v-if='isRouterActive'></router-view>
    <!-- 定义路由出口 -->
  </div>
</template>
<script>
export default {
  name:'app',
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


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
