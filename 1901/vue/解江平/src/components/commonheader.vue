<template>
     <header>
      <ul>
        <li class="icon" @click="()=>{$router.go(-1)}">
          <a></a>
        </li>
        <li class="dizhi">{{dizhi}}</li>
      </ul>
    </header>
</template>
<script>
export default {
    props:['dizhi']
}
</script>

<style lang="scss" scoped>
header {
  position: relative;
  width: 100%;
  height: 44px;
  line-height: 44px;
  max-width: 640px;
  margin: 0 auto;
  background: #fff;
  border-bottom: 1px solid #ddd;
  margin-bottom: 3px;
  ul {
    overflow: hidden;
    list-style: none;
    li {
      display: block;
      width: 44px;
      height: 44px;
      line-height: 44px;
      font-size: 16px;
      color: #444;
    }
    .icon {
      position: absolute;
      left: 0;
      z-index: 2;
      a {
        display: block;
        background-image: url(../assets/images/d3.png);
        background-position: -149px -131.5px;
        background-size: 330.5px;
        width: 44px;
        height: 44px;
            text-decoration: none;
    outline: 0;
    color: #666;
    border: none;
      }
    }
    .dizhi {
      position: absolute;
      top: 0;
      text-align: center;
      width: 100%;
      z-index: 1;
      margin-left: 0;
    }
  }
}
</style>
