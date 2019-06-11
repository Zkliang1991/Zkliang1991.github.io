<template>
    <div>
        <Head class="head" title="商品类目" :show="!!1" ></Head>
        <div v-if="show" class="classify">
            <mt-navbar v-model="selected">
                <mt-tab-item :id="type.value" v-for="(type,i) in types" :key="i">{{type.text}}</mt-tab-item>
            </mt-navbar>
            <mt-tab-container v-model="selected">
                <mt-tab-container-item :id="type.value" v-for="(type,i) in types" :key="i">
                        <GoodList
                        :type="type" 
                        :goodList="goodList"
                         
                        ></GoodList>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>

<script>
import { Indicator } from 'mint-ui';
import {http} from "../utils";
import GoodList from "../components/goodList.vue"
export default {
    data(){
        return {
            show:false,
            goodList:[],
            types:[],
            selected:"cake"
        }
    },
    components:{
        GoodList
    },
    mounted(){
        Indicator.open({
            text: '加载中...',
            spinnerType: 'triple-bounce'
        });

        http.get("/vue/getGoodList",{})
        .then(res=>{
            console.log(res);
            this.$nextTick(()=>{  // 下次 DOM 更新循环结束之后执行延迟回调
                this.goodList = res.data.result
            })
        })
        http.get("/vue/getGoodTypes",{})
        .then(res=>{
            console.log(res);
            setTimeout(()=>{
                this.types = res.data.result;
                this.show = true;
                Indicator.close();
            },500)
        })
    }
}
</script>
<style lang="scss" scpoed>
ul:after{
    content: "";
    display: block;
    clear: both;
    height:0;
    overflow:hidden;
    visibility: hidden; 
    padding-bottom: .5rem ;
     ;
    }
ul{zoom: 1;background-color: #fff ;}
.head{
      position: fixed;
      top: 0; 
      left: 0;
      width: 100%;
      z-index: 2;
    }
.classify{
    margin-top: 40px;
    }
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #2bd3c2;
    color: #2bd3c2;
    margin-bottom: -3px;
}
</style>

