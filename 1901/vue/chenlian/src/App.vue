<template>
  <div id="app">
    <Index></Index>
     <!-- 5. 定义路由出口  -->
     <!-- <router-view class="box"></router-view> -->
  </div>
</template>

<script>
import Index from "@/views/index.vue" 

export default {
  name: 'app',
  components: {
    Index
  }
}
</script>

<style>
.van-nav-bar__title {
  margin: 0 auto;
  max-width: 60%;
  color: #636363;
  font-size: 0.8rem;
  font-weight: 500;
}
.van-nav-bar .van-icon {
  color: #6d6f72;
  font-size: 1.2rem;
  vertical-align: middle;
}
.van-icon-search:before {
  content: "\F0A9";
  color: #6d6f72;
  font-size: 1.2rem;
  vertical-align: middle;
}
.van-icon-arrow-left:before {
  color: #6d6f72;
  font-size: 1.2rem;
  vertical-align: middle;
}
.banner {
  width: 100%;
  height: 10rem;
  background: greenyellow;
}
.newsearch {
  width: 100%;
  background: red;
}
.bannerimg {
  width: 100%;
  height: 10rem;
}
.van-search {
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0.5rem 0.5rem;
}
.van-search__content {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  border-radius: 2px;
  padding-left: 10px;
  border-radius: 1rem;
  height: 2rem;
  width: 95%;
}

.iconmenu {
  width: 100%;
  height: 20rem;
}
ul.ticon {
  width: 20%;
  float: left;
}
img.hmenuimg {
  width: 100%;
  height: auto;
}
.iconmenu[data-v-7eb2bc79] {
  width: 100%;
  height: auto;
  padding: 1rem 0rem 1rem;
}

.van-field__control {
    border: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    resize: none;
    display: block;
    color: #666666;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: transparent;
}
.van-nav-bar__arrow+.van-nav-bar__text {
    margin-left: -20px;
    padding-left: 25px;
    color: #666;
    margin-left: -1.5rem;
    margin-top: .2rem;
}
.van-tabbar-item__icon .van-icon {
    display: block;
    min-width: 1em;
    /* color: #333; */
}
.van-tabbar-item--active {
    color: #36414c;
}

.van-tabs-top {
  margin-top: 45px;
  z-index: 0;
}

.goods-title {
    font-size: 0.9rem;
    line-height: 1.4rem;
}





.header-top{
  margin-bottom: 45px;
}
</style>

