<template>
   <div>       
       <van-search placeholder="请输入搜索关键词(店名、标题)" class="search" v-model="searchinfo" />
       <button class="searchbtn" @click="gosearch">搜索</button>
       <div class="page">
           <dl>
               <dt>文艺生活</dt>
               <dd v-for="(weny,i) in classify[0]" :key="i" @click="chengckfl(0,'文艺生活',weny.title)">
                   <i class="iconfont" :class="weny.icon"></i>
                   {{weny.title}}
               </dd>
           </dl>
            <dl>
               <dt>DIY手作</dt>
               <dd v-for="(diy,i) in classify[1]" :key="i" @click="chengckfl(1,'DIY手作',diy.title)">
                   <i class="iconfont" :class="diy.icon"></i>
                   {{diy.title}}
               </dd>
           </dl>
            <dl>
               <dt>户外活动</dt>
               <dd v-for="(huod,i) in classify[2]" :key="i"  @click="chengckfl(2,'户外活动',huod.title)">
                   <i class="iconfont" :class="huod.icon"></i>
                   {{huod.title}}
               </dd>
           </dl>
            <dl>
               <dt>派对聚会</dt>
               <dd v-for="(party,i) in classify[3]" :key="i"  @click="chengckfl(3,'派对聚会',party.title)">
                   <i class="iconfont" :class="party.icon"></i>
                   {{party.title}}
               </dd>
           </dl>
            <dl>
               <dt>沙龙学堂</dt>
               <dd v-for="(stu,i) in classify[4]" :key="i"  @click="chengckfl(4,'沙龙学堂',stu.title)">
                   <i class="iconfont" :class="stu.icon"></i>
                   {{stu.title}}
               </dd>
           </dl>
           <div>
               <img src="@/assets/images/fl1.jpg" alt="">
                 <img src="@/assets/images/fl2.jpg" alt="">
           </div>
       </div>
   </div>
</template>
<script>
import { Search } from 'vant';
import {mapState} from "vuex";
     

export default {
     computed:{
        ...mapState([
            'fengl'
        ])
    },
    data(){
        return {
            classify:[
                [{title:"书画意趣",icon:"icon-maobi"},{title:"音乐世界",icon:"icon-music"},{title:"美酒咖啡",icon:"icon-jiweijiubeigaojiaobei"},{title:"摄影约拍",icon:"icon-iconxj"},{title:"茶会雅集",icon:"icon-cha"},{title:"市集展览",icon:"icon-kanzhanlan"}],
                [{title:"陶艺",icon:"icon-huadian-taoyi"},{title:"木艺",icon:"icon-dengzi"},{title:"花艺",icon:"icon-huahuaduoqingxin"},{title:"皮艺",icon:"icon-bao"},{title:"布艺",icon:"icon-fengrenji"},{title:"轻手作",icon:"icon-jiandao"},{title:"美食制作",icon:"icon-meishi"},{title:"金工制银",icon:"icon-jintiao"},{title:"传统民艺",icon:"icon-denglong"}],
                [{title:"一日游",icon:"icon-56"},{title:"轻旅行",icon:"icon-weibiaoti2fuzhi11"},{title:"长线游",icon:"icon-lvhang"},{title:"非凡体验",icon:"icon-Skiing"}],
                [{title:"派对聚会",icon:"icon-qingdianhejuhui-"},{title:"新奇玩乐",icon:"icon-qiapian"}],
                [{title:"讲座沙龙",icon:"icon-rongzixuetang"},{title:"美妆形象",icon:"icon-icon-test2"},{title:"运动健身",icon:"icon-yundong1"}]
            ],
            searchinfo:""
        }
    },
    methods:{
        chengckfl(num,title,search){
            // alert(num+"  "+title)
            this.$store.dispatch("changefenl",{list:this.classify[num],title,search});
            // alert(title)
            this.$router.push({name:"fengleiinfo",query:{title}})
            
        },
        gosearch(){
            // console.log(this.searchinfo)
            this.$router.push({name:"search",query:{
                searchinfo:this.searchinfo
            }})

        }
    }
}
</script>
<style lang="scss" scoped>
.searchbtn{
    border: 0;
    position: fixed;
    top:.24rem;
    right:.2rem;
    z-index:10;
    height:.8rem;
    background: #fff;
    }
.search{
    width:100%;
    position: fixed;
    top:0;
    left:0;
    z-index: 10;
}
.page{
    margin-top:1.2rem;
    dl{
        overflow: hidden;
        margin-bottom:.2rem;
        background: #fff;
        dt{
            text-align: left;
            padding: 0 .4rem;
        }
        dd{
            width:25%;
            float:left;
            margin:.4rem 0;
            .iconfont{
                display: block;
                font-size:.8rem;
            }
        }
    }
    dl:last-child{
        margin-bottom: 1rem;
    }
    div{
         margin-bottom: 1rem;
         overflow: hidden;
         padding: 0 .3rem;
        img{
            width:45%;
            float:left;            
        }
        img:last-child{
            float:right;
        }
       
    }
}
</style>
