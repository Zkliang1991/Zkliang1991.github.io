<template>
    <div class="mine">
        <div class="mtop">
            <div class="mtopt">
                <div>
                    <div class="touxiang"><img :src="userInfo.avatar" @click.stop="uploadHeadImg" class="ohuo"></div>
                    <div class="username"><p>{{username}}</p><p>欢迎登录</p></div>
                </div>
                <div class="huiyuan">普通会员</div>
            </div>
            <ul class="mtopb">
               <li>
                   <p>5</p>
                   <p>优惠券</p>
               </li>
               <li>
                   <p>5</p>
                   <p>积分</p>
               </li>
               <li>
                   <p>5</p>
                   <p>预存款</p>
               </li>
            </ul>
        </div>
            <div class="mcontent">
                <div class="mtitle">
                    <p>全部订单</p>
                    <p>></p>
                </div>
                <ul>
                    <li @click=daifukuan>
                        <div><img :src="require('../assets/m1.png')" alt=""></div>
                        <p>待付款</p>
                    </li>
                    <li @click=daifahuo>
                        <div><img :src="require('../assets/m2.png')" alt=""></div>
                        <p>代发货</p>
                    </li>
                    <li @click=daishouhuo>
                        <div><img :src="require('../assets/m3.png')" alt=""></div>
                        <p>代收货</p>
                    </li>
                    <li @click=daipingjia>
                        <div><img :src="require('../assets/m4.png')" alt=""></div>
                        <p>代评价</p>
                    </li>
                    <li @click.stop=myxiaofei>
                        <div><img :src="require('../assets/m5.png')" alt=""></div>
                        <p>我的消费</p>
                    </li>
                </ul>
            </div>

        <div class="mcontent" @click="gomycar">
           <div class="mtitle">
               <p>我的服务</p>
               <p></p>
           </div>
           <ul>
               <li v-for="(sever,index) in severs" :key="index">
                   <div><img :src="sever.img" alt=""></div>
                   <p>{{sever.text}}</p>
               </li>
                <li @click.stop="kefu">
                   <div><img :src="require('../assets/m10.png')" alt=""></div>
                   <p>客服</p>
               </li>
           </ul>
        </div>

        <div class="mcontent">
           <div class="mtitle">
               <p>我的账号</p>
               <p></p>
           </div>
           <ul>
               <li v-for="(zhanghao,index) in zhanghaos" :key="index">
                   <div><img :src="zhanghao.img" alt=""></div>
                   <p>{{zhanghao.text}}</p>
        
               </li>
               <li @click="tuichu">
                    <div><img :src="require('../assets/m16.png')" alt=""></div>
                    <p>退出登录</p>
               </li>
           </ul>
        </div>
        <input type="file" accept="image/*" @change="handleFile" class="hiddenInput"/>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import { Toast,MessageBox} from 'mint-ui';
export default {
    computed:{
          ...mapState(['username'])
    },
    methods:{
        daifukuan(){
            this.$router.push({name:"car",params:{daifukuan:"daifukuan"}})
        },
        daifahuo(){
            this.$router.push({name:"car",params:{daifahuo:"daifahuo"}})
        },
        daishouhuo(){
            this.$router.push({name:"car",params:{daishouhuo:"daishouhuo"}})
        },
        daipingjia(){
            this.$router.push({name:"car",params:{daipingjia:"daipingjia"}})
        },
        // 打开图片上传
        uploadHeadImg: function () {
            this.$el.querySelector('.hiddenInput').click()
        },
        // 将头像显示
        handleFile: function (e) {
            let $target = e.target || e.srcElement
            let file = $target.files[0]
            var reader = new FileReader()
            reader.onload = (data) => {
                let res = data.target || data.srcElement
                this.userInfo.avatar = res.result
            }
            reader.readAsDataURL(file)
        },
        tuichu(){
            this.$router.push({name:'login'})
        },
        gomycar(){
            this.$router.push({name:'car'})
        },
        myxiaofei(){
            this.$router.push({name:'xiaofei'});
        },
        kefu(){
            this.$router.push({name:'liaotian'});
        }
    },
    data(){
        return {
            dingdans:[
                {
                    img:require("../assets/m5.png"),
                    text:"我的消费"
                },
            ],
            severs:[
                {
                    img:require("../assets/m6.png"),
                    text:"团购订单"
                },
                {
                    img:require("../assets/m7.png"),
                    text:"宅配订单"
                },
                {
                    img:require("../assets/m8.png"),
                    text:"礼品卡"
                },
                {
                    img:require("../assets/m9.png"),
                    text:"我喜欢的"
                },
                {
                    img:require("../assets/m11.png"),
                    text:"推荐有礼"
                },
            ],
            zhanghaos:[
                {
                    img:require("../assets/m12.png"),
                    text:"个人信息"
                },
                {
                    img:require("../assets/m13.png"),
                    text:"收货地址"
                },
                {
                    img:require("../assets/m14.png"),
                    text:"安全中心"
                },
                {
                    img:require("../assets/m15.png"),
                    text:"设置"
                },
            ],
            userInfo: {
                avatar: require("../assets/images/photo.jpg"),
            } 
        }
    },
}
</script>

<style scoped>
.hiddenInput{
    display:none;
}
.mine{
   height: 100%;
   background: #eee;
   margin-bottom: 1rem;
}
.mtop{
    width: 7.5rem;
    height: 3.1rem;
    background:  #806d6d;
    overflow: hidden;
}
.mtopt{
    width: 7.5rem;
    height: 1.6rem;
   margin-top: .2rem;
}
.mtopt .touxiang{
    width: 1.6rem;
    height: 1.6rem;
    margin-left: .32rem;
    float: left;
}
.mtopt div img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    margin-top:0.1rem;
}
.mtopt .username{
    width: 3rem;
    float: left;
    margin-top: .2rem;
}
.mtopt .logintext{
    margin-top: .4rem;
}
.mtopt .logintext a{
    color: #fff;
    text-decoration: none;
}
.mtopt p{
    font-size: .32rem;
    line-height: .6rem;
    color: #fff;
    margin-left: .2rem;
}
.mtopt .huiyuan{
    width: 1.6rem;
    height: .6rem;
    float: left;
    background: #EFB31F;
    border-radius: 40px;
    line-height: .6rem;
    text-align: center;
    color: #fff;
   font-size: .24rem;
   margin: .5rem 0 0 .5rem;
}
.mtopb{
    width: 7.5rem;
    margin-top: .3rem;
}
.mtopb li{
    width: 32%;
    float: left;
    height:1rem;
    border-right: 2px solid #fff;
}
.mtopb li:last-child{
    border: none;
}
.mtopb li p:first-child{
    font-size: .32rem;
    color: #EFB31F;
    text-align: center;
}
.mtopb li p:last-child{
    font-size: .32rem;
    color: #fff;
    text-align: center;
}
.mcontent{
    width: 7.5rem;
    margin: .2rem 0;
    background: #fff;
}
.mcontent .mtitle{
    height: .88rem;
    line-height: .88rem;

}
.mcontent .mtitle p:first-child{
    font-size: .32rem;
    color: #666666 ;
    margin-left: .32rem;
    width: 6rem;
    float: left;
}
.mcontent .mtitle p:last-child{
    font-size: .32rem;
    color: #666666 ;
    margin-right: .32rem;
    width: .5rem;
    float: right
}
.mcontent ul{
    overflow: hidden;
}
.mcontent ul li{
     height: 1.76rem;
     width: 20%;
     float: left;
     text-align: center;
     color: #666666;
     font-size: .24rem;
}
.mcontent ul li div{
    width: .66rem;
    height: .58rem;
    margin: .2rem auto;
}
.mcontent ul li div img{
    width: 100%;
    height: 100%;
}
</style>

