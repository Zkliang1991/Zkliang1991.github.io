<template>
    <footer>
        <div v-for="(foot,i) in foots" :key="i">
            <router-link :to="{name:foot.name}" >
                <i class="iconfont"  v-html="foot.icon"> </i>
                <span>{{foot.txt}}</span>
            </router-link>
        </div>
    </footer>
</template>


<script>
import {mapState} from "vuex"
export default {
    data(){
        return {
            foots:[
                {txt:"首页",path:"/index/home",name:"home",icon:"&#xe7c7;"},
                {txt:"分类",path:"/index/classify",name:"classify",icon:"&#xe778;"},
                {txt:"购物车",path:"/index/car",name:"car",icon:"&#xe614;"},
                {txt:"我",path:"/index/mine",name:"mine",icon:"&#xe624;"},
            ] 
        }
	},
	computed:{
		...mapState([
			'carNum'
		])
	}
}
</script>



<style lang="less" scoped>
footer {
  position: fixed;
  width: 100%;
  height: 1rem;
  left: 0;
  bottom: 0;
  background: #fff;
  display: flex !important;
  z-index: 100;
  border-top: 1px solid #ddd;
  div {
    flex: 1;
    height: 1rem;
    margin-top: 0.08rem;
    a {
      display: block;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      padding: 0.06rem 0;
      text-align: center;
      font-family: "微软雅黑";
      color: #999;
      position: relative;
      i {
        width: 100%;
        height: 0.45rem;
        line-height: 0.45rem;
        font-size: 0.5rem !important;
      }
      span {
        width: 100%;
        height: 0.35rem;
        line-height: 0.35rem;
        font-size: 0.24rem;
      }
      .hot {
        position: absolute;
        top: -8%;
        left: 54%;
        display: inline;
        text-align: center;
        width: 0.22rem;
        height: 0.33rem;
        border-radius: 50%;
        color: white;
        background-color: #f00;
        font-size: 0.1rem;
        line-height: 0.35rem;
        text-align: center;
      }
    }
    .nav-active,
    .router-link-exact-active {
      color: #000;
      border-color: #000;
    }
  }
}
</style>
