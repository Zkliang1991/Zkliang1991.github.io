<template>
<div class="goodsinfopage">
    <i class="iconfont icon-zuo" @click="goback"></i>
    <div class="imgbox">
        <img :src="goodsinfo[0].front_cover_image_list[0]" alt="">
    </div>
    <div class="info">
        <h3>{{goodsinfo[0].title}}</h3>
        <p class="price">￥{{goodsinfo[0].price}}</p>
        <p class="time"><i class="iconfont icon-rili"></i> {{goodsinfo[0].time.start}}至{{goodsinfo[0].time.end}}</p>
        <p class="address"><i class="iconfont icon-dizhi"></i>  {{goodsinfo[0].address}}</p>
        <div class="tell">
            <span class="ydmsg">请提前预定</span>
           
            <span class="tells">{{goodsinfo[0].biz_phone}}</span>
             <i class="iconfont icon-dianhua"></i>
        </div>
        <p class="shouc"><i class="iconfont icon-xin"></i>  {{shocount}}收藏</p>
        <div class="qus">
            <p class="iconfont icon-wenhao-"> 提问</p>
            <p v-if="!wentflag">还没有人提问哦，快去提问吧</p>
            <div v-if="wentflag">
                哈哈哈哈哈
            </div>
        </div>
        <div>
            
        </div>
    </div>


    <footer>
        <div class="shoucang">
            <i id="mendian" class="iconfont icon-shangdian"></i>
            <i id="shouc" class="iconfont icon-zan1" :class="zan? 'zan':''" @click="changezan"></i>
        </div>
        <div class="btn" @click="yuding">
            马上预定
        </div>
    </footer>
</div>
</template>
<script>
import {mapState} from "vuex";
import {Toast} from "vant";
export default {
     computed:{
        ...mapState([
            'userinfo'
        ])
    },
    data(){
        return {
            goodsinfo:[],
            wenti:[],
            wentflag:false,
            shocount:0,
            zan:false,
            goodsid:""
        }
    },
    methods:{
        yuding(){
            if(this.userinfo.dlstate){
                this.$router.push({name:"dingdan",query:{goodsid:this.goodsinfo[0]._id,title:this.goodsinfo[0].title,price:this.goodsinfo[0].price},hash:{img:this.goodsinfo[0].front_cover_image_list[0]}})
            }else{
                Toast('请先登录');
                this.$router.push({name:"login"})
            }
           
        },
    goback(){
        // alert("66666")
        // this.$router.go(-1);
        this.$router.push({name:"home"})
    },
    changezan(){
         if(this.userinfo.dlstate){//已登录  
            var opra=true;//操作  默认点赞
            if(this.zan){
            //取消
              opra=false;
                 this.$axios.get("/vue/removezan",{params:{opra:opra,goodsid:this.goodsid,zanCount:this.shocount}}).then(res=>{
                //  console.log(res);                
                    if(res.data.type==1){                        
                        // console.log(111)
                        this.shocount=this.shocount-1;
                        this.zan=false;                    
                    }
                 })  
            }else{//收藏
                 this.$axios.get("/vue/updatezan",{params:{opra:opra,goodsid:this.goodsid,zanCount:this.shocount,goodsname:this.goodsinfo[0].title,goodsimg:this.goodsinfo[0].front_cover_image_list[1]},}).then(res=>{
                //  console.log(res);                
                if(res.data.type==1){
                    // console.log(111)
                    this.zan=true;
                    this.shocount=this.shocount*1+1;
                }
            })  
            }
           
         }else{//未登录
            Toast({
                // mask: true,
                message: '您还未登录，请登录'
            });              
            localStorage.backurl=location.href;
            this.$router.push({name:"login"});
        }
      
    }
    },
    mounted(){
        // console.log(location.href)
        var url=location.href;
        var id=url.split("?")[1];
        id=id.split("=")[1];
        this.goodsid=id;
        this.$axios.get("/vue/goodsinfo",{params:{id}}).then(res=>{
            // console.log(res)
            if(res.data.type==1){                
                this.goodsinfo=res.data.result;
                this.shocount=res.data.result[0].collected_num;
                // console.log(this.goodsinfo[0])
            }else{
                this.$router.push({name:"home"})
            }
        })
        this.$axios.get("/vue/wenti",{params:{goodsid:this.goodsid}}).then(res=>{
            // console.log(res)
            
            if(res.data.result.length>0){
                this.wenti=res.data.result;
                this.wentflag=true;
            }
        })
         this.$axios.get("/vue/zan",{params:{goodsid:this.goodsid}}).then(res=>{
            // console.log("赞信息")
            // console.log(res)            
            if(res.data.result.length>0){
                this.zan=true;
            }
        })
    },
    wacth:{
        zan(newval){
            this.zan=newval;
        },
        shocount(newval){
            // console.log(newval)
            this.shocount=newval;
        }
    }
}
</script>
<style lang="scss" scoped>
.goodsinfopage{
    position: relative;
    .icon-zuo{
        font-size:.6rem;
        position: absolute;
        top:.4rem;
        left: .4rem;
        color:#fff;
        background: rgba(0,0,0,.5);
        border-radius: 50%;
    }
    width:100%;
    overflow: hidden;
    .imgbox{
        width:100%;
        img{
            width:100%;
        }
    }
    .info{    
        background:#fff;        
        padding:.4rem;
        text-align: left;
        h3{
            // text-align: left;
            line-height: .6rem;
            font-size:18px;
        }
        .price{
            margin:.2rem 0;
            line-height: .6rem;
            font-size:18px;
           
            color: rgb(204, 60, 55);
        }
        .time,.address{
            line-height: .5rem;
            color:#999;
            margin-bottom: .2rem;
        }
        .tell{
            height:1rem;
            line-height: 1rem;
            .iconfont,.tells{
                float:right;
                margin:0 .2rem;
            }
        }
        .shouc{
            height:.8rem;
            line-height: .8rem;
            font-size:20px;
        }
        .qus{
            p{
                height:.8rem;
                line-height: .8rem;
                border-bottom: 1px solid #999;
            }
            div{

            }
        }
    }
    footer{
        height:1rem;
        width:100%;
        position:fixed;
        bottom: 0;
        left:0;
        background:#fff;
        div{
            line-height: 1rem;
            float:left;
            width:50%;
            text-align: center;
            height:100%;
            i{
                display: inline-block;
                width: 50%;
                height: 100%;
                font-size:30px;
            }
            .zan{
                color:rgb(216, 98, 98);
            }
        }
        .btn{
            background:rgb(216, 98, 98);
            color:#fff;
        }
    }

}
</style>

