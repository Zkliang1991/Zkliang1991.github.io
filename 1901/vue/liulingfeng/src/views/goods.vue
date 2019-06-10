<template>
    <div>
       
        <Head title="列表" class="head"></Head>

       <van-tree-select
        :items="items"
        :main-active-index="mainActiveIndex"
        :active-id="activeId"
        @navclick="onNavClick"
        @itemclick="onItemClick"
        />
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            

             <ul  v-for="(t,i) in all_goods" :key="i"  >         
                    <li id="goodst-left"  @click="gotoGoodsinfo(t._id)">
                        <img :src="t.imgs" alt="" >
                        <p class="cl sl" >{{t.title}}</p>
                        <p >${{t.price}}</p>
                        <p>已有 {{t.dealcnt}} 人购买</p>
                    </li>
    
            </ul>
           
        </van-pull-refresh>      
        <Foot></Foot>
    </div>
</template> 

<script>
import { close } from 'fs';
import { constants } from 'crypto';
export default {
    data(){
        return{
            items:[
                {
                    text:"推荐",
                    children:[
                        {
                            text:"天王",
                            id:1,
                            disdisabled: true
                        },
                        {
                            text:"EZON宜准",
                            id:2,
                        },
                        {
                            text:"罗西尼",
                            id:3,
                        },
                         {
                            text:"卡西欧",
                            id:4,
                        },
                         {
                            text:"西铁城",
                            id:5,
                        },
                        {
                            text:"海鸥",
                            id:6,
                        },
                         {
                            text:"阿玛尼",
                            id:7,
                        },
                    ]
                },
                {
                     text:"地区",
                     children:[
                        {
                            text:"美国",
                            id:1,
                            disdisabled: true
                        },
                        {
                            text:"日本",
                            id:2,
                        },
                        {
                            text:"瑞士",
                            id:3,
                        },
                        {
                            text:"英国",
                            id:4,
                        },
                         {
                            text:"法国",
                            id:5,
                        },
                         {
                            text:"香港",
                            id:6,
                        },
                         {
                            text:"上海",
                            id:7,
                        },
                    ]
                },
                {
                     text:"品牌",
                     children:[
                         {
                            text:"天王",
                            id:1,
                            disdisabled: true
                         },
                          {
                            text:"EZON宜准",
                            id:2,
                        },
                        {
                            text:"罗西尼",
                            id:3,
                        },
                         {
                            text:"卡西欧",
                            id:4,
                        },
                         {
                            text:"西铁城",
                            id:5,
                        },
                        {
                            text:"海鸥",
                            id:6,
                        },
                         {
                            text:"阿玛尼",
                            id:7,
                        },
                     ]
                },
                {
                    text:"高级品牌",
                },
                 {
                    text:"轻奢品牌",
                },
                 {
                    text:"年轻潮牌",
                },
                 {
                    text:"表带",
                }
            ],
            // 左侧高亮元素的index
            mainActiveIndex: 0,
            // 被选中元素的id
            activeId: 1,


            good_types:[],
            all_goods:[],
            show:false,
            selected:"shirt",

            //带商品id


            //刷新
            isLoading: false
        }
    },
   methods:{
       onNavClick(index) {
        this.mainActiveIndex = index;
        },
        onItemClick(data) {
        this.activeId = data.id;
        console.log(data.text)
        var newVal = data.text;
        this.$axios.get("/vue/getGood",{
            params:{
               keyword:newVal 
            }
        }).then((res)=>{

             this.all_goods = res.data.result;
             console.log(this.all_goods)
          
        })
        
        },
        onRefresh() {
            setTimeout(() => {
                this.$toast('刷新成功');
                this.isLoading = false;
            }, 500);
        },
        gotoGoodsinfo(id){
        
            this.$router.push({name:"goodsinfo",params:{
                goodId:id
            }});
        }
  
   },
   created(){

        this.$axios.get("/vue/getGoodList").then(res=>{ 
            this.all_goods = res.data.result;
            this.show = true;
        })
   }
}
</script>

<style scoped>
    #goodst-left{
        float: left;
        width: 48%;
        margin-left: 5px;
    }
   
    li p{
        height: 15px;
        line-height: 15px;
    }
    .sl{white-space: nowrap;overflow: hidden;text-overflow:ellipsis;}
    .head{
      position: fixed;
      top: 0; 
      left: 0;
      width: 100%;
      z-index: 2;
    }
     .van-tree-select{
        margin-top: 50px;
    }
</style>




