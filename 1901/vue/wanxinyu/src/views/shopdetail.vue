<template>
    <div>
        <Head :title=name :show="!!1" ></Head>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(n,index) in 3" :key="index"><img :src="img" alt=""></mt-swipe-item>
        </mt-swipe>
        <div class="div7">
            <div class="div2">
                <h2 class="h1">￥{{price}}</h2>
                <p class="p1">{{name}}</p>
                <p class="p2"><span class="span1">快递：0:00</span><span class="span2">月销量{{xiaoliang}}</span><span class="span3">浙江绍兴</span></p>
            </div>
            <div class="div3">
                <p class="tanchuang1"  @click="showCustomPopupClick">参数 <span>品牌 货号</span><i class="iconfont" v-html="'>'"></i></p>
                <CustomPopup ref="CustomPopupRef">
                    <div slot="PoperContent" class="PoperContentView">
                        <div class="ServiceNoteTitle W100">基本信息</div>
                        <div class="xunhuan"><span class="b1">品牌</span><span class="b1">{{text}}</span></div>
                        <div class="xunhuan"><span class="b1">ID号</span><span class="b1">{{zhu_id}}</span></div>
                        <div class="xunhuan"><span class="b1">价格</span><span class="b1">{{price*1 | money}}</span></div>
                        <div class="xunhuan"><span class="b1">折扣</span><span class="b1">{{xiaoliang}}</span></div>
                    </div>
                </CustomPopup>  
            </div>
            <div class="div4">
                <p class="tanchuang1"  @click="showCustomPopupClick2">服务 <span>极速退货 · 极速退款 · 赠运费险 · 正品保证</span><i class="iconfont" v-html="'>'"></i></p>
            </div>
            <div class="div5">
                 <span>品质优选·便捷物流·正品保证</span>
            </div>
            <div class="div6">
                <p class="tanchuang1"  @click="showCustomPopupClick3">选择 <span>请选择颜色/尺码</span><i class="iconfont" v-html="'>'"></i></p>
                <CustomPopup ref="CustomPopupRef3">
                    <div slot="PoperContent" class="PoperContentView3">
                        <div class="top">
                            <img :src="img" alt="">
                             <h2 class="h1">￥{{price}}</h2>
                             <p class="p1">库存9999件</p>
                             <p class="p1 p2">请选择颜色</p>
                        </div>
                        <div class="top3"></div>
                        <div class="top2">
                            
                            <div class="top-color">
                                <p>颜色：</p>
                                <div class="xunhuan" @click="c=0" :style="c==0?'color:#a97433':''">
                                    <div>红（{{name}}）</div>
                                </div>
                                <div class="xunhuan" @click="c=1" :style="c==1?'color:#a97433':''">
                                    <div>橙（{{name}}）</div>
                                </div>
                                <div class="xunhuan" @click="c=2" :style="c==2?'color:#a97433':''">
                                    <div>黄（{{name}}）</div>
                                </div>
                                <div class="xunhuan" @click="c=3" :style="c==3?'color:#a97433':''">
                                    <div>绿（{{name}}）</div>
                                </div>
                                <div class="xunhuan" @click="c=4" :style="c==4?'color:#a97433':''">
                                    <div>蓝（{{name}}）</div>
                                </div>
                                 <div class="xunhuan" @click="c=5" :style="c==5?'color:#a97433':''">
                                    <div>靛（{{name}}）</div>
                                </div>
                                <div class="xunhuan" @click="c=6" :style="c==6?'color:#a97433':''">
                                    <div>紫（{{name}}）</div>
                                </div>
                                <p>尺寸</p>
                                <div class="xunhuan2">
                                    <Chicun ref="chicun"></Chicun>
                                </div>
                                <div class="xunhuan3">
                                    <p>购买数量</p>
                                    <button class="jian" @click="count--">-</button>
                                    <input type="number" min="1" class="goodsInput" disabled v-model="count">
                                    <button class="jia" @click="count++">+</button>
                                </div>
                            </div>
                            <div class="xunhuan4">
                                <button class="jiagwc" @click="qujiaruha">加入购物车</button>
                            </div>
                        </div>     
                    </div>
                </CustomPopup>  
            </div>
            <div class="div3">
                <p class="tanchuang1">领取礼券 <span>      使用口令</span><i class="iconfont" v-html="'>'"></i></p> 
            </div>
        </div>
        <div class="foot"> 
            <button class="goumai" @click="lijigoumai">立即购买</button>
            <button class="gwc" @click="qujiaru">加入购物车</button>
            <a class="tubiao">
                <i class="iconfont" v-html="dianzan.icon" @click="mflag=!mflag" :style="mflag?'color:red':''"></i>
                <span>点赞</span>
            </a>
            <a class="tubiao2">
                <i class="iconfont" v-html="iconshoucang.icon" @click="nflag=!nflag" :style="nflag?'color:red':''"></i>
                <span>收藏</span>
            </a>
        </div>
    </div>
</template>

<script>
import { http } from "../utils";
import { Toast,MessageBox} from 'mint-ui';
import {mapState,mapMutations,mapActions} from 'vuex'
import CustomPopup from "../components/tanchuceng.vue";
import Chicun from "../components/chicun.vue";
export default {
    data(){
        return{
            name:"",
            img:"",
            price:"",
            xiaoliang:"",
            text:"",
            zhu_id:"",
            value:"",
            c:99,
            dianzan:{txt:"点赞",icon:'&#xe6f1;'},
            iconshoucang:{txt:"收藏",icon:"&#xe60d;"},
            mflag:false,
            nflag:false,
            count:1,
        }
    },
    methods:{
        ...mapActions(['getgoodtail']),
        showCustomPopupClick(){
            this.$refs.CustomPopupRef.showCustom();
        },
        showCustomPopupClick2(){
            this.$refs.CustomPopupRef.showCustom();
        },
        showCustomPopupClick3() {
            this.$refs.CustomPopupRef3.showCustom();
        },
        qujiaru(){
          if(this.username){
            var d=this.$refs.chicun.d*1;
            var c=this.c*1;
            if(c+d>99){
                Toast({
                  message: "未选颜色和尺寸",
                  duration: 1000,
                });
            }else{
                http.get("/vue/shoucang",{params:{goodid:this.zhu_id,goodimg:this.img,goodname:this.name,goodprice:this.price,username:this.username,goodnum:this.count,goodtype:1}})
                .then(res=>{
                  this.$store.commit("changecaunum");
                  this.$router.push({name:'car'});
                })
            }
          }else{
            Toast({
              message: "您未登陆",
              duration: 1000,
            });
            this.$router.push({name:'login'});
          }
        },
        qujiaruha(){
          var d=this.$refs.chicun.d*1;
          var c=this.c*1;
          if(c+d>99){
            Toast({
              message: "未选颜色和尺寸",
              duration: 1000,
            });
          }else{
              http.get("/vue/shoucang",{params:{goodid:this.zhu_id,goodimg:this.img,goodname:this.name,goodprice:this.price,username:this.username,goodnum:this.count,goodtype:1,goodvalue:this.value}})
                .then(res=>{
                    this.$store.commit("changecaunum");
                    Toast({
                      message: "收藏成功",
                      duration: 1000,
                    });
                    this.$refs.CustomPopupRef3.maskClick();
              })
          }  
        },
        lijigoumai(){
          if(this.username){
            var d=this.$refs.chicun.d*1;
            var c=this.c*1;
            if(c+d>99){
                Toast({
                  message: "未选颜色和尺寸",
                  duration: 1000,
                });
            }else{
                this.$router.push({name:'car'});
            }
          }else{
            Toast({
              message: "您未登陆",
              duration: 1000,
            });
            this.$router.push({name:'login'});
          }
        }
    },
    mounted(){
        this.getgoodtail(this.$route.params.goodtail);
        // console.log(this.goodtail)
        // if(this.goodtail){

        // }else{
        //     console.log("111");
        //     this.$router.push({name:"home"})

        // }

        this.name=this.goodtail.name;
        this.img=this.goodtail.img;
        this.price=this.goodtail.price;
        this.xiaoliang=this.goodtail.discount;
        this.text=this.goodtail.text;
        this.zhu_id=this.goodtail.zhu_id;
        this.value=this.goodtail.type.value;
    },
    components:{
        CustomPopup,Chicun
    },
    computed:{
      ...mapState(['username','goodtail']),
    },
}
</script>

<style scoped lang="less">

.mint-swipe{
    margin-top:0.83rem;
    height: 45%;
    img{
        width: 100%;
        height: 6rem;
    }
}
.div7{
    background-color: #f5f4f0;
}

.div2 {
  background-color: #fff;
  padding: 0.1rem;
}
.h1 {
  color: red;
  font-weight: 600;
  font-size: 0.4rem;
  margin: 0.1rem 0;
}
.p1 {
  font-size: 0.28rem;
  height: 0.8rem;
}
.p2 {
  font-size: 0.24rem;
  color: #aaa;
}
.p2 .span1 {
  float: left;
}
.p2 .span3 {
  float: right;
}
.p2 .span2 {
  margin-left: 26%;
}
.div3,
.div4,
.div6 {
  width: 100%;
  height: 0.8rem;
  line-height: 0.6rem;
  font-size: 0.2rem;
  margin-top: 0.2rem;
  background-color: #fff;
}
.div6 {
}
.div6 .tanchuang1 {
  padding: 0.1rem;
  height: 0.8rem;
  margin-bottom: 0.2rem;
  line-height: 0.6rem;
}
.div5 {
  width: 100%;
  height: 0.3rem;
  font-size: 0.2rem;
  background-color: #fff;
}
.div3 span,
.div4 span {
  color: #aaa;
}
.div3 p,
.div4 p {
  padding: 0.1rem;
}
.div4 {
  height: 0.5rem;
  line-height: 0.2rem;
}
.iconfont {
  float: right;
}

.div5 span {
  padding-left: 0.57rem;
  line-height: 0.1rem;
}

.PoperContentView {
  height: 8rem;
  background: #ffffff;
  overflow-x: hidden;
  overflow-y: scroll;
}
.PoperContentView2 {
  height: 10rem;
  background: #ffffff;
  overflow-x: hidden;
  overflow-y: scroll;
}
.PoperContentView3 {
  height: 10.2rem;
}
.top {
  width: 94%;
  height: 1rem;
  margin-left: 3%;
  position: relative;
}
.top2 {
  width: 100%;
  height: 100%;
  background-color: #fff;
  /* padding-top: 1rem; */
  overflow-x: hidden;
  overflow-y: scroll;
}
.top2 .top-color {
  width: 94%;
  margin-left: 3%;
  padding-bottom: 3rem;
  background-color: #fff;
  overflow-x: hidden;
  overflow-y: scroll;
}
.top3 {
  height: 1.3rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
.gcs-radio + label {
  width: 5rem;
  height: 0.5rem;
  line-height: 0.5rem;
  padding-left: 0.1rem;
  display: inline-block;
  text-align: left;
  vertical-align: bottom;
  border-radius: 1rem;
  /* border: 1px solid #f5f5f5; */
  background-color: #f5f5f5;
}
.gcs-radio {
  display: none;
}
.top img {
  width: 2rem;
  height: 2rem;
  border: 2px solid #ddd;
  border-radius: 0.2rem;
}
.top .h1 {
  position: absolute;
  font-size: 0.3rem;
  top: 1rem;
  left: 2.2rem;
}
.top .p1 {
  position: absolute;
  font-size: 0.2rem;
  top: 1.5rem;
  left: 2.3rem;
}
.top .p2 {
  top: 1.8rem;
}
.advantage-service-iframe {
  width: 100%;
  height: 100%;
  border: 0;
}
.ServiceNoteTitle {
  width: 90%;
  margin-left: 5%;
  height: 0.8rem;
  line-height: 0.8rem;
  text-indent: 0.2rem;
  font-weight: 600;
  border-bottom: 1px solid #eeeeee;
  text-align: left;
}

.closerButton {
  position: absolute;
  right: 10rem;
}
.closerButton2 {
  position: absolute;
  right: 10rem;
}
.xunhuan {
  width: 90%;
  height: 0.8rem;
  line-height: 0.8rem;
  text-indent: 0.2rem;
  margin-left: 5%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-bottom: 1px solid #eee;
}
.xunhuan2 {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.xunhuan3 {
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
  overflow: hidden;
}
.xunhuan4 {
  width: 100%;
  position: fixed;
  bottom: 0;
}
.xunhuan4 .jiagwc {
  width: 100%;
  height: 0.8rem;
  border: 0;
  color: #fff;
  background-color: #716d68;
}
.xunhuan3 .goodsInput {
  width: 1rem;
  height: 0.4rem;
  text-align: center;
}
.xunhuan3 .jia,
.xunhuan3 .jian {
  width: 0.5rem;
  height: 0.5rem;
  outline: none;
  border: 1px solid #ddd;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
}
.xunhuan .b1:nth-of-type(1) {
  width: 30%;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  /* text-indent: 0.2rem; */
  /* float: left; */
}
.xunhuan .b1:nth-of-type(2) {
  width: 70%;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #333;
}
.foot {
  width: 100%;
  height: 1rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
}
.goumai,
.gwc {
  float: right;
  border: 0;
  width: 2rem;
  height: 1rem;
  color: #fff;
}
.goumai {
  background-color: #ff0036;
}
.gwc {
  background-color: #ff9500;
}
.tubiao {
  width: 10%;
  float: left;
  display: flex;
  margin-left: 0.2rem;
  flex-direction: column;
  text-align: center;
  color: #aaa;
}
.tubiao i {
  font-size: 0.4rem;
  margin-top: 0.18rem;
}
.tubiao span {
  font-size: 0.2rem;
}
.tubiao2 {
  width: 10%;
  float: left;
  display: flex;
  margin-left: 0.4rem;
  flex-direction: column;
  text-align: center;
  color: #aaa;
}
.tubiao2 i {
  font-size: 0.4rem;
  margin-top: 0.18rem;
}
.tubiao2 span {
  font-size: 0.2rem;
}
</style>
