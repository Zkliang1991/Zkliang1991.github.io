<template>
  <div>
    <div class="aui-flex">
      <div class="aui-mine-user">
       <div id="photo"><img :src="userInfo.touxiang" @click.stop="updateimg" class="ohuo"/></div>
        <input type="file" ref="one" accept="image/*" @change="shangchuan" class="hiddenInput"/>
      </div>
      <div class="aui-flex-box" @click="login">
        <h2>{{say}}</h2>
      </div>
      <div class="aui-arrow"></div>
    </div>
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment"/>待付款
      </van-col>
      <van-col span="6">
        <van-icon name="records"/>待接单
      </van-col>
      <van-col span="6">
        <van-icon name="tosend"/>待发货
      </van-col>
      <van-col span="6">
        <van-icon name="logistics"/>已发货
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="全部订单" is-link/>
    </van-cell-group>
    <van-cell-group>
      <van-cell icon="shopping-cart-o" @click="goshoppingcar" title="购物车" is-link/>
      <van-cell icon="gift-o" title="我的钱包" @click="qianbao" is-link/>
      <van-cell icon="gift-o" title="我的地址" @click="dizhi" is-link/>
      <van-cell icon="exchange" v-if="show" title="退出登入" @click="tuichu" is-link/>
    </van-cell-group>
    <Foot></Foot>
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup } from "vant";
import { mapState, mapActions, mapGetters } from "vuex";
import { Dialog } from 'vant';


// Dialog({ message: '提示' });
export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  data() {
    return {
      say: "请登陆！",
      show: false,
      userInfo: {
              touxiang: require("../assets/logo.png"),
              
            },
            url:"" 
    };
  },
  methods: {
    tuichu() {
      window.sessionStorage.clear();
      window.localStorage.clear();
      this.$router.push({ name: "login" });
    },
    goshoppingcar() {
      this.$router.push({ name: "shoppingcar" });
    },
    login() {
      this.$router.push({ name: "login" });
    },
    dizhi(){
        this.$router.push({ name: "dizhilist" });
    },
    qianbao() {
      Dialog.alert({
        message: "别看了，你没钱!"
      }).then(() => {
        // on close
      });
    },
    ...mapActions(["getshoppingcar"]),

    seen(){
            var userInfo = JSON.parse(localStorage.userInfo);
            this.url = userInfo.icon.replace(/public/,'http://localhost:1901');
        },
        updateimg() {
            console.log("上传图片");
            // this.$el.querySelector('.hiddenInput').click() // 执行 input change 
            this.$refs.one.click();
        },
        // 将头像显示
        shangchuan(e) {
            let $target = e.target || e.srcElement
            let file = $target.files[0];
            console.log(file);
            console.log(this.$refs.one.files[0]);
            
            let data = new FormData();    // 构建表单数据对象  
            data.append('avatar', file);  // 需要上传到 服务器 的数据
            this.$axios({
                url:"/vue/upload-avatar",
                method:"POST",
                contentType:false,
                processData:false,
                data
            }).then(res=>{
                console.log(res);
                this.userInfo.touxiang  = res.data.imgUrl.replace(/public/,'http://localhost:1901');
                localStorage.userImg = res.data.imgUrl
            })

           
        },
  },

  created() {
    console.log(window.localStorage.userImg);

    if (window.sessionStorage.username) {
      this.show = true;
      this.say = "欢迎" + window.sessionStorage.username + "登入!";
    } 
    if(window.localStorage.userImg){
      
      this.userInfo.touxiang=window.localStorage.userImg.replace(/public/,'http://localhost:1901');
    }
  }
};
</script>

<style lang="less">
#photo img{
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
}
.hiddenInput{
  display: none;
}
.user {
  &-poster {
    width: 100%;
    height: 53vw;
    display: block;
  }
  &-group {
    margin-bottom: 15px;
  }
  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
.aui-flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  padding: 15px;
  position: relative;
  background-image: url(../assets/head.png);
  background-repeat: no-repeat;
  background-size: 100%;
  height: 120px;
}
.aui-mine-user {
  width: 70px;
  height: 70px;
  margin-right: 0.5rem;
}
.aui-mine-user img {
  width: 100%;
  height: auto;
  display: block;
  border: none;
  border-radius: 100%;
}
.aui-flex-box {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  min-width: 0;
  font-size: 14px;
  color: #333;
}
.aui-flex-box h2 {
  color: #fff;
  font-weight: normal;
  // font-size: 1.2rem;
}
.aui-arrow {
  text-align: right;
  color: #394154;
  padding-right: 12px;
  position: relative;
  font-size: 0.85rem;
}
</style>