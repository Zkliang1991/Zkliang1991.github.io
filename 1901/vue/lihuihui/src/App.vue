<template>
  <div id="app">
  
    <div id="nav" >
        <router-view class='box'></router-view>
    </div>

  </div>
</template>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 .box{
   position: relative;
 }
  .content{
   
    position: absolute;top:1.2rem;
    left:0;
    width:100%;
  }
  
}
.van-tabs__wrap{
      top: 1.04rem!important;
    left: 0;
    right: 0;
    z-index: 99;
    overflow: hidden;
    position: fixed !important;
}
</style>
