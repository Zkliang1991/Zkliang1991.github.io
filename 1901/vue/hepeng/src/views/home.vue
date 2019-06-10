<template>
    <div class="content">
        <Head title="首页" id="title"></Head>
        <Swipe id="banner" :options="{loop:true,autoplay:true}">
            <div class="swiper-slide slide" v-for="(b,i) in banner" :key="i">
                <img :src="b.img" alt="" class="swiper-img" >
            </div>
        </Swipe>
        <ul id="list" >
            <li v-for="(ad,i) in ads" :key='i'>
                <img src="https://a.vpimg2.com/upload/merchandise/pdcvis/2018/11/04/21/54cf6e8a-12cc-4871-b0b8-a157fdc0362e_420_531.jpg" @click="gotolist" alt="">
                <span>{{ad.text}}</span>
            </li>
        </ul>
        <div id="goods-ad">
            <div class="item">
                <div id="box">
                    <img src="../assets/images/home1.jpg" alt="">
                    <h2>伊芙丽集团旗下诗凡黎SEIFINI女装专场</h2>
                    <p>1折起 &nbsp;&nbsp;全场折上7折</p>
                </div>
            </div>
            <div class="item">
                <div id="box">
                    <img src="../assets/images/home2.jpg" alt="">
                    <h2>梵希蔓Vimly女装专场</h2>
                    <p>1.2折起 &nbsp;&nbsp;全场折上7.5折</p>
                </div>
            </div>
            <div class="item">
                <div id="box">
                    <img src="../assets/images/home3.jpg" alt="">
                    <h2>紧急补货-大嘴猴paul frank潮牌特卖专场</h2>
                    <p>2.2折起</p>
                </div>
            </div>
             <div class="item">
                <div id="box">
                    <img src="../assets/images/home4.jpg" alt="">
                    <h2>安踏ANTA潮流运动鞋服专场</h2>
                    <p>2.9折起 &nbsp;&nbsp; 全场折上9折</p>
                </div>
            </div>
            <div class="item">
                <div id="box">
                    <img src="../assets/images/home5.jpg" alt="">
                    <h2>裂帛集团女装特卖旗舰店</h2>
                    <p>1.2折起</p>
                </div>
            </div>
            <div class="item">
                <div id="box">
                    <img src="../assets/images/home6.jpg" alt="">
                    <h2>Moiselle 名媛挚爱的优雅淑女风</h2>
                    <p>1.3折起</p>
                </div>
            </div>
        </div>
        <div id="goodscontent">
            <h2 class="title">部分商品</h2>
            <List :goods="goods"></List>
        </div>

    </div>
</template>
<script>
import {Indicator,Toast} from 'mint-ui';
export default {
  data(){
    return {
      imgs:[
                require("@/assets/images/img1.jpg"),
                require("@/assets/images/img2.jpg"),
                require("@/assets/images/img3.jpg"),
                require("@/assets/images/img4.jpg")
            ],
        ads:[
            {img:'https://a.vpimg3.com/upload/merchandise/pdcvis/2019/01/22/103/e031a364-9e5a-423f-8216-6c09e2b64dc2_5t.jpg',text:'西装'},
            {img:'https://a.vpimg2.com/upload/merchandise/pdcvis/2018/11/04/21/54cf6e8a-12cc-4871-b0b8-a157fdc0362e_420_531.jpg',text:'风衣'},
            {img:'https://a.vpimg2.com/upload/merchandise/pdcvis/2019/05/27/48/cc15d3a7-6ea5-48fb-be88-80bc6c66580e_420_531.jpg',text:'卫衣'},
            {img:'https://a.vpimg3.com/upload/merchandise/pdcvis/2019/02/27/108/3a033c92-4df9-4028-8881-3051c413fb8d_420_531.jpg',text:'衬衣'},
        ],
      banner:[],
      goods:[],
    }
  },
  created(){
        Indicator.open({
            text: '加载中...',
            spinnerType: 'triple-bounce'
        });
        this.$axios.get("/vue/goodslist")
    
            .then(res=>{
                this.goods= res.data.result;
                Toast({
                    message: '操作成功',
                    iconClass: 'icon iconfont icon-success',
                    duration:500,
                });
        });
        this.$axios.get("/vue/goodslist",{
            params:{
                limit:8
            }
        }).then(res=>{
                console.log(res);
                this.$nextTick(()=>{
                    this.banner = res.data.result;
                    // Indicator.close();
                    Toast({
                        message: '操作成功',
                        iconClass: 'icon iconfont icon-success',
                        duration:500,
                    });
                })
            })
    },
  components:{
    // Demo
  },
  mounted(){
    //   getGood(data){
    //         this.goods = data;
    //     }
  },
  computed:{
      
  },
  methods:{
      gotolist(){
          this.$router.push({name:'classify'})
      }
  }
}
</script>

<style lang="scss" scoped>
.content{
    #title{
        position: fixed;
        left: 0;
        top:0;
        width: 100%;
        animation: jello 2s;
    }
    #banner{
        width: 96%;
        height: 4rem;
        margin: 2%;
        margin-top: 1rem;
        .slide{
            width: 100%;
            height: 100%;
            .swiper-img{
                width:100%;
                height:4rem;
            }
        }  
        
    }
    #list{
        width: 100%;
        height: 2.2rem;
        margin: 0.35rem 0;
        li{
            float: left;
            width: 21%;
            padding: 2%;
            height:1.5rem;
            img{
                width: 100%;
                height: 1.5rem;
                border-radius: 50%
            }
            span{
                margin: 0.2rem 0;
                font-size: 16px;
            }
        }
    }
    #goods-ad{
        width: 100%;
        height: 9.6rem;
        margin-top: 0.2rem;
        .item{
            float: left;
            width: 50%;
            margin-bottom: 0.35rem;
            height:2.8rem;
            #box{
                padding: 3%;
                height: 2.8rem;
                img{
                    width: 100%;
                    height: 2rem;
                }
                h2{
                    display: -webkit-box;    
                    -webkit-box-orient: vertical;    
                    -webkit-line-clamp: 1;    
                    overflow: hidden;
                    font-size: 16px;
                }
                p{
                    margin-top: 0.15rem;
                    font-size: 13px;
                }
            }
        }
    }
    #goodscontent{
        margin-top: 0.3rem;
        .title{
            height: 0.5rem;
            line-height: 0.5rem;
            font-size: 24px;
        }
    }
}


</style>

