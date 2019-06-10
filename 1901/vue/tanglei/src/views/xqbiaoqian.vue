<template>
    <div>
         <Myheader title=" 选择您的兴趣标签"></Myheader>
         <p class="baocun" @click="baocun">保存</p>
        <ul class="ckecks">
          <li v-for="(check,i) in checks" :key="i" :class="check.checked ? 'check':''">
              <i class="iconfont" :class="check.icon"></i>
              <van-checkbox v-model="check.checked" checked-color="#999">{{check.msg}}</van-checkbox>
          </li>            
        </ul>
        
            
        
    </div>
</template>
<script>
import { Checkbox, CheckboxGroup } from 'vant';
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState([
            'userinfo'
        ])
    },
  data() {
      return {
          oldUrl:"",
        url:"",
        // checked: true,
        label:[],
        checks:[
            {title:"music",msg:"音乐",icon:"icon-music",checked:false},
            {title:"expo",msg:"展览",icon:"icon-kanzhanlan",checked:false},
            {title:"cate",msg:"美食",icon:"icon-meishi",checked:false},
            {title:"party",msg:"聚会",icon:"icon-renqun",checked:false},
            {title:"sports ",msg:"运动",icon:"icon-yundong",checked:false},
            {title:"diy",msg:"手工",icon:"icon-jiandao",checked:false},
            {title:"tea",msg:"茶道",icon:"icon-cha",checked:false},
            {title:"up",msg:"提升",icon:"icon-gerentishengjihua",checked:false},
            {title:"psychology",msg:"心理",icon:"icon-xin",checked:false},
            {title:"newq",msg:"新奇趣",icon:"icon-yanjing",checked:false},
            {title:"wenyi",msg:"文艺腔",icon:"icon-maobi",checked:false},
            {title:"travel",msg:"旅行",icon:"icon-weibiaoti2fuzhi11",checked:false},
        ]
      };
  },
   beforeRouteEnter(tp,from,next){
       next(vm=>{
          vm.oldUrl=from.path
      })
  },
  methods:{
    baocun(){
      // alert("lllll")
      this.checks.forEach(item=>{
        if(item.checked){
          this.label[this.label.length]=item.title
        }
      })
       this.$axios.get("/vue/updateuser",{params:{label:this.label}}).then(res=>{
        // console.log(res.data);
        if(res.data.type==1){
            var urlstr=this.url;
            // console.log(this.url);
           if(urlstr.indexOf("my")==-1){
                //从注册界面进入的，下一步
                this.$router.push({name:"home"})
            }else{
                //个人中心界面进入，成功：返回
                this.$router.push({name:"my"})
            }
        }
      })

      // this.label.length=0
    }
  },
  watch:{  
     deep:true, 
      checks:{
      handler:function(newval,oldval){
        // console.log("new"+newval)
        this.checks=newval
      }
    },
    
    url(newval){
        this.url=newval;
    }
  },
  mounted(){
     this.$nextTick(()=>{
            // console.log(this.oldUrl),
            this.url=this.oldUrl
        })
      if(this.userinfo.dlstate){//已经登录，连接数据库，判断是否有填写信息
          this.$axios.get("/vue/userinfo").then(res=>{
              // console.log(res)
              if(res.data.type==1){
                  // this.radiosex=res.data.sex;
                  // console.log(res.data.labels)
                  //需深度监听
                  let labels=res.data.labels;
                  // console.log(labels.length)
                  for(var j=0;j<labels.length;j++){
                    for(var i=0;i<this.checks.length;i++){
                      if(this.checks[i].title==labels[j]){
                          this.checks[i].checked=true;
                      }
                    }
                  }
                //  console.log(this.checks)

              }else{
                  this.label=[];
              }
          })

      }else{             
        this.$router.push({name:"login"})
      }
  }

}
</script>
<style lang="scss" scoped>
.ckecks{
   margin-top: .8rem;
}
ul{
  width: 100%;
  height:100%;
  li{    
    width:30%;
    margin: .2rem 1.5%;
    float:left;
    color:#999;
    .iconfont{
      font-size:1rem;
    }
  }
  .check{
    color:#333;
    

  }
}
.baocun{
    position: fixed;
    top:0.2rem;
    right:.2rem;
    color:#666;
    z-index: 10;
}
</style>

