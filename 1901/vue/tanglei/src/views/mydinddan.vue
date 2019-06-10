<template>
    <div> 
         <Myheader title="我的订单"></Myheader>
        <ul class="mydindan">
             <!--  -->
            <li v-for="(din,i) in dinlist" :key="i" @click="ckeckinfo($event,din._id,i)">
                <div class="img">
                    <img :src="din.img" alt="">
                </div>    
                <span>{{din.title}}</span>
                <div class="msg">
                    <p>数量：<span>{{din.count}}</span> 单价：￥<span>{{din.price.toFixed(2)}}</span>  合计：￥ <span>{{din.count*din.price}}</span> </p>
                    <p>备注：{{din.msg}}</p>
                    <p>联系人：{{din.username}}</p>
                    <p>电 &nbsp;&nbsp;话：{{din.tell}}</p>
                    <p>预订时间：{{din.date.split("T")[0]}}</p>
                </div>
                <button type="warning" class="qubtn">取消预订</button>
            </li>
        </ul>
    </div> 
</template>
<script>
import {Toast,Button } from "vant";
import {mapState} from "vuex";
export default {
     computed:{
        ...mapState([
            'userinfo'
        ])
    },
     data(){
        return {
            dinlist:[]
        }
    },
    mounted(){
        if(this.userinfo.dlstate){
             this.$axios.get("/vue/mydindan").then(res=>{
            // console.log(res)
            if(res.data.type==1){
                // console.log(res.data)
                this.dinlist=res.data.result;
            //    console.log(typeof(res.data.result[0].date))
            }else{
                Toast(res.data.msg);
                this.$router.push({name:"login"});          
            }
         })
        }else{
            Toast("请登录");
            this.$router.push({name:"login"})     
        }      
      
    },
    methods:{
        ckeckinfo(e,id,index){
           
            console.log(e)
            if(e.target.className=="qubtn"){
                // alert("6666")
                this.$axios.get("/vue/removedindan",{params:{id:id}}).then(res=>{
                    if(res.data.type==1){
                        //取消成功
                        this.dinlist.splice(index,1);
                    }else{
                        //取消失败
                        Toast('取消失败')
                    }
                })
            }else{
                 this.$router.push(`/goodsinfo?id=${id}`)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .mydindan{
       margin-top: .8rem;
        li{
        margin-bottom:.3rem;
        background: #fff;
        padding:.4rem ;
        // height:.8rem;
        overflow: hidden;
        text-align: left;
        .img{
            float:left;           
            img{
            height: 1.4rem;
            width:1.4rem;
            }
            margin-right: .2rem;
        }
        .msg{
            p{
                font-size:14px;
                color: #999;
                line-height: .4rem;
               span{
                   color: rgb(231, 65, 65);
                   font-size:16px;
               } 
            }
            
        }
        .qubtn{
            height:.8rem;
            border:0;
            color:#fff;
            padding:0 .4rem;
            line-height: .8rem;
            float:right;
            margin-top:.2rem;
            background: rgb(233, 100, 60);
        }
         
        }
    }
</style>