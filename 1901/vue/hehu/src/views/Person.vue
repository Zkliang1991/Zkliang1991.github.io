<template>
  <div class="bg-img">
    <mt-header title="个人中心"></mt-header>
    <div v-if="isLogin">
      <h1 class="center-h3">您还没登录,请登录!</h1>
      <div class="img-sty">
        <el-image :src="logoUrl" fit="fit"></el-image>
      </div>
     <div style="text-align:center;margin-top:5.5rem">
        <el-button size="medium" round type="danger" @click="gologin" icon="el-icon-s-custom">登陆/注册</el-button>
     </div>
    </div>
    <div v-else>
      <div class="person-bgc">
        <el-row type="flex" align="middle">
          <el-col :span="6" :offset="2" class="img-circle">
            <div  @click="updataimg">
              <el-image :src="logoUrl" ></el-image>
            </div>
            <input type="file" accept="image/*" ref="oneinput" @change="updata" style="display:none">
          </el-col>
          <el-col :span="8" :offset="2">
            {{username}}
            <i class="iconfont" style="font-size:0.3rem;color:#e10005">&#xe65b;</i>
          </el-col>
        </el-row>
      </div>
      <div class="person-bgc">
        <el-row type="flex">
          <el-col :span="8">
            <el-row type="flex" justify="center">
              <div @click="gomusic">
                <i class="iconfont" style="font-size:0.8rem;display:block; text-align:center;margin:0.2rem 0">&#xe60b;</i>
                <p style="text-align:center;margin:0.2rem 0">本地音乐</p>
              </div>
            </el-row>
          </el-col>
          <el-col :span="8">
            <el-row type="flex" justify="center">
              <div @click="gomylist">
                <i class="iconfont" style="font-size:0.8rem;display:block;text-align:center;margin:0.2rem 0">&#xe66a;</i>
                <p style="text-align:center">我的收藏</p>
              </div>
            </el-row>
          </el-col>
          <el-col :span="8">
            <el-row type="flex" justify="center">
              <div>
                <i class="iconfont" style="font-size:0.8rem;display:block;text-align:center;margin:0.2rem 0">&#xe60e;</i>
                <p style="text-align:center">下载</p>
              </div>
            </el-row>
          </el-col>
          <el-col :span="8">
            <el-row type="flex" justify="center">
              <div>
                <i class="iconfont" style="font-size:0.8rem;display:block;text-align:center;margin:0.2rem 0">&#xe67e;</i>
                <p style="text-align:center">活动</p>
              </div>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <div class="person-bgc">
        <mt-button type="danger" size="large" @click="loginOut">注销</mt-button>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import Foot from "@/components/foot.vue";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      isLogin: true,
    };
  },
  components: {
    Foot
  },
  methods: {
    gologin() {
      this.$router.push({ name: "login" });
    },
    loginOut(){
      window.localStorage.removeItem("username")
      window.sessionStorage.removeItem("userInfo")
      this.isLogin = true
    },
    gomusic(){
      this.$router.push({name:'music'})
    },
    gomylist(){
      this.$router.push({name:'firend'})
    },
    updataimg(){

      this.$refs.oneinput.click()
    },
    updata(e){
      var $target = e.target || e.srcElement
      var file = $target.files[0];
      var data = new FormData();
      data.append('avatar',file);
      this.$axios({
        url:'vue/upload',
        method:'POST',
        contentType:false,
        processData:false,
        data:data
      }).then(res=>{
        this.$store.state.logoUrl = res.data.imgUrl.replace(/public/,'http://47.102.133.34:3000') 
      })
    }
  },
  mounted() {
    var userInfo = window.sessionStorage.userInfo;
    if (userInfo) {
      var username = window.localStorage.username;
      this.$store.state.username = username
      this.isLogin = false;
      this.$axios.get('vue/getLogo',{params:{username}}).then(res=>{
        if(res.data.result.avatar){
          this.$store.state.logoUrl = res.data.result.avatar.replace(/public/,'http://47.102.133.34:3000')
        }
      })
    } else {
      this.isLogin = true;
    }
    if(this.$store.state.playList.length == 0){
      if(localStorage.username){
      this.$axios.get('vue/getPlayList',{params:{username:localStorage.username}}).then(res=>{
          this.$store.state.playList = res.data.result.list
      })
    }
    }

    
    
  },
  computed: {
    ...mapState(["logoUrl"]),
    username() {
      return this.$store.state.username;
    }
  }
};
</script>
<style scoped>
.center-h3 {
  text-align: center;
}
.img-sty {
  margin: 0.1rem auto;
  border-radius: 50%;
  overflow: hidden;
  height: 3rem;
  width: 3rem;
  animation: shake 6s infinite
}
.img-circle {
  border-radius: 50%;
  overflow: hidden;
  animation: swing 5s infinite;
}
.person-bgc {
  width: 100%;
  margin: 0.2rem auto;
  background-color: #fff;
}
.bg-img {
  background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559401434887&di=d4a37c425c42adb1881c83cbf2af1442&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn10%2F133%2Fw640h1093%2F20180604%2F43dd-hcmurvh3048459.jpg);
  background-size: 100%;
}
</style>
