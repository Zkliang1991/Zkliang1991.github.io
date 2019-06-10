<template>
    <div class="wecpage">
        <h2>每个周末都是惊喜</h2>
    </div>
</template>


<script>
import {mapState} from "vuex";
export default {
    name:"welcome",
     computed:{
        ...mapState([
            'userinfo'
        ])
    },
    created(){
        var token=localStorage.token;
        // console.log(token)
          this.$axios.get("/vue/islogin",{
              params:{token}
          }).then(res=>{
               if(res.data.type==1){
                this.$store.dispatch("changeusername",res.data.username);
               }
          })
        
    },
    mounted(){

        setTimeout(() => {
            // console.log(this.userinfo.dlstate)
            // console.log(this.userinfo.username)
            if(this.userinfo.dlstate){               
                 this.$router.push({name:"home"}) 
            }else{
                //  console.log("进入登录")
                 this.$router.push({name:"login"})
            }
            
        }, 2000);
    }
}
</script>
 <style lang="scss" scoped>
.wecpage{
    height:100vh;
    width:100vw;
    background:rgb(223, 228, 178);
    overflow: hidden;
}
h2{
    text-align: center;
    font-size: 26px;
    margin-top: 1.5rem;
}
</style>


