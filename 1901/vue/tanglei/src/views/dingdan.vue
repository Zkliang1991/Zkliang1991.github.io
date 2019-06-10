<template>
<div>
    <Myheader title="填写订单信息"></Myheader>  
    <div class="page">
        <h3>{{this.dindaninfo.title}}</h3>
        <ul>
            <li>
                <i class="iconfont icon-shangdian"></i> 订单
            </li>
            <li>
                预定份数
                <van-stepper v-model="value" />

            </li>
            <li>
                订单价格
                <input class="price" type="text" :value="(price*value).toFixed(2)">
            </li>
        </ul>
        <div class="popele">
            <p><i class="iconfont icon-wode"></i> 联系人信息</p>
            <input type="text" class="username" v-model="dindaninfo.username" placeholder="预定人姓名">
            <input type="text" class="tell" v-model="dindaninfo.tell" placeholder="电话" @blur="tellreg">
        </div>  
        <div class="liuyan">
             <p><i class="iconfont icon-icon-test"></i> 留言</p>
           <textarea placeholder="预约时间等其他备注" v-model="dindaninfo.msg"></textarea>
        </div>
        <div class="zhifu">
             <p> 支付方式</p>
         <van-radio-group v-model="radio" checked-color="#666">
            <van-radio name="bao">支付宝<br>
                <span>推荐有支付宝账号的用户使用</span>
                <i class="iconfont icon-zhifubao"></i>
            </van-radio>
            <van-radio name="wei">微信<br>
                <span>推荐安装微信5.0及以上版本的使用</span>
                  <i class="iconfont icon-weixin"></i>
            </van-radio>
               
        </van-radio-group>
        </div>
    <footer @click="yudin">
        前往付款
    </footer>
    </div>
</div>
    
</template>
<script>
import { RadioGroup, Radio,Stepper,Toast} from 'vant';
export default {
    data() {
    return {
      value: 1,
      //商品名称 id  价格
      price:0,
        radio: 'bao',
        dindaninfo:{}
    }
  },
  methods:{
      //手机号验证
    tellreg(){
        let myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        // console.log(myreg.test(this.dindaninfo.tell))
        if(!(myreg.test(this.dindaninfo.tell))){
           Toast('请输入正确的手机号') 
        }
    },
    yudin(){
        if(!!this.dindaninfo.username && !!this.dindaninfo.msg && !!this.dindaninfo.tell){
            // console.log(this.dindaninfo)
            this.dindaninfo.date=new Date();
            this.dindaninfo.count=this.value;
            this.$axios.get("/vue/dindan",{params:{dindaninfo:this.dindaninfo}}).then(res=>{
                if(res.data.type==1){
                    this.$router.push({name:"mydinddan"})
                }else{
                    Toast('提交失败')
                }
            })
        }else{
           
             if(this.dindaninfo.username==""){
                Toast('联系人不能为空')
            }else{
                Toast('请备注预定时间、其他需求')
            }
        }
        
         
    }
  },
  mounted(){
    //   console.log(this.$route)
      this.dindaninfo.goodid=this.$route.query.goodsid;
      this.dindaninfo.title=this.$route.query.title;
      this.dindaninfo.price=this.$route.query.price;
      this.dindaninfo.img=this.$route.hash.img;
    //   console.log(this.$route.hash)
      this.price=this.dindaninfo.price*this.value;
    // console.log(this.dindaninfo)
}
}
</script>

<style lang="scss" scoped>
.page{
    width:100%;
   h3{
    //    height:1rem;
       line-height: .8rem;
       text-align: left;
       padding: .4rem;
       background:#fff;
       margin-bottom: .2rem;
   }
    ul{
        background:#fff;
        padding:.4rem;
        li{
            line-height: 1rem;
            height: 1rem;
            text-align: left;
            .van-stepper,.price{
               float:right;
            }
            .price{
                border:0;
                width:1.5rem;
                text-align: right;
             }
        }
        
    }
    .popele,.liuyan{
        margin-top:.2rem;
         background:#fff;
        padding:.4rem;
        text-align: left;
        p{
            margin-bottom: .2rem;
        }
        input{
            border:0;
            border:1px solid #999;
            height:.4rem;
            padding:.2rem;
            font-size: 12px;
            width:20%;
        }
        .tell{
            width:60%;
            margin-left:.1rem;
        }
        textarea{
            width:100%;
            height:1.5rem;
            font-size: 12px;
            border:0;
            border-top:1px solid #999;
            padding:.2rem 0;
        }
    }
    .zhifu{
        margin-top:.2rem;
         background:#fff;
        padding:.4rem;
        margin-bottom: 1rem;
        text-align: left;
        p{
            margin-bottom: .2rem;
        }
        .van-radio{
             height: 1rem;
            span{
                font-size: 12px;
                color:#999;
            }
            position: relative;
            .iconfont{
                position: absolute;
                right:.4rem;
                top:.2rem;
                font-size:.8rem;
            }
            .icon-zhifubao{
                color:rgb(24, 143, 223);
            }
            .icon-weixin{
                color:rgb(37, 214, 31);
            }
        }
      
    }
    
}
footer{
    width:100%;
    height: 1rem;
    line-height: 1rem;
    font-size: .3rem;
    position:fixed;
    bottom: 0;
    left:0;
    color:#fff;
    background:rgb(248, 99, 30);
}
</style>

