<template>
    <div>
        <mt-tabbar v-model="tab">
  <mt-tab-item v-for="(foot,i) in foots " :id="foot.name" :key="i">
     <router-link :to="{name:foot.name}">
     <i class="iconfont" v-html="foot.icon" > </i>
    {{foot.txt}}
     </router-link>
  </mt-tab-item>
</mt-tabbar>
    </div>
</template>
<script>
 import { Tabbar, TabItem } from 'mint-ui';
export default {
    data(){
        return{
            tab:"",
             foots:[
                {txt:"首页",path:"/app/home",name:"home",icon:"&#xe619;"},
                {txt:"列表",path:"/app/about",name:"about",icon:"&#xe614;"},
                {txt:"购物车",path:"/app/car",name:"car",icon:"&#xe778;"},
                {txt:"个人",path:"/app/mine",name:"mine",icon:"&#xe60c"}
            ]
        }
    }
}
</script>
<style scoped>
div{
    position: fixed;
    bottom:0;
    left:0;
}
div{
    height: 50px;
}
i{
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    display:block;
}
mt-tabbar{
    height: 100px;
}
</style>