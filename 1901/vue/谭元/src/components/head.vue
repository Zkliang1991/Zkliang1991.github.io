<template>
    <div>
    <x-header :title="title" :v-if="show" :right-options="{showMore: true}" @on-click-more="showMenus = true" class="header"></x-header>
     <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" show-cancel    @on-click-menu="todo"></actionsheet>
    </div>
   </div>
</template> 
<script>
//此处是公共头部

import {  XHeader, Actionsheet, TransferDom, } from 'vux'
export default {
    props:{ //头部进行校验
        title:String,
        show:Boolean
    },
    data(){
    return{
        menus: {
           menu1: "进入首页",
           menu2: "退出登录"
      },
      showMenus: false
        }
    },
    directives: {  //指令
        TransferDom
    },
    components: {
       XHeader,
    Actionsheet,
    },
    methods:{
            todo(key){
                if(key=="menu1"){    //当key的值为menu1 的时候就进入首页
                  this.$router.push({name:'home'})
                }else if(key=="menu2"){  //当key的值为menu2 的时候就进入首页
                  this.$router.push({name:'guide'})
                }
            }
    }


}
</script>

<style  scoped>

    .header{
        width: 100%;
        background: black;
        color: aliceblue;
    }
 
</style>


