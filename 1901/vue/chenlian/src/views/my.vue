 <template>
  <div class="my">
    <div class="header-top">
      <Head title="个人中心" :show="true" :searchShow="true" v-if="true"></Head>
    </div>
    <div class="mytop">
      <img class="user-poster" :src="mysrc" >
        <div class="m-avatar"><img src="http://haitao.nos.netease.com/vtgcByWTZlKwtnRQvhvLT170102401020_150_150.png" alt="用户头像"></div>
        <div class="m-username"><span class="m-nick">{{username}}</span>
        <span v-if="outlogin" class="m-nick outlogin" @click="out">退出登陆</span></div>        
    </div>

    <!-- 我是登陆了 --> 
    <div v-if="userstate">           
      <div>
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
        <van-cell-group>
          <van-cell icon="points" title="全部订单" is-link/> 
          <van-cell icon="points" title="已购商品" is-link/>          
          <van-cell icon="gold-coin-o" title="我的优惠券" is-link/>
          <van-cell icon="points" title="我的收藏" is-link/>
          <van-cell icon="points" title="我的积分" is-link/>
          <van-cell icon="gift-o" title="我收到的礼物" is-link/>
        </van-cell-group>
      </div>      
    </div>
    <!-- 我是登陆了end -->
    <div v-else>
      <!-- <li>我是v-else  未登陆显示组件</li> -->
      <div class="cartiftop">
        <p class="carttip">您还未登陆，暂无您得个人信息</p>
        <van-button class="cartlogin login" plain hairline type="primary" size="large" to="/login" 
        style="color:#fff"
        >前往&nbsp;&nbsp;登陆&nbsp;/&nbsp;注册</van-button>
      </div>
    </div>

    <Foot :show="true"></Foot>
  </div>
</template>

<script type="module">
  import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.esm.browser.js'
</script>
<script>
// import Vue from 'vue';
import { Row, Col,Icon, Cell, CellGroup } from "vant";
import { mapState } from "vuex";
import store from "@/store";

// my页面展示效果：登陆了显示购买过的商品及用户信息，未登录显示请登陆
  // 使用keep-alive缓存

  // 已登陆显示组件
  // Vue.component("myuser", {
  //     template: "myuser",
  //     props: ['myuser']
  // })

  // 未登陆显示组件
  // Vue.component("mynot", {
  //     template: "mynot",
  //     props: ['mynot']
  // })

export default {
  name: "my",
  computed: {
    ...mapState([
      'loginInfo',
      'cartinfo',
    ])
  },
  data() {
    return {
      //去引号 str.replace("\"", "")  //全局匹配  str.replace(/\"/g, "")  用户名 window.sessionStorage.username
      username:window.sessionStorage.userInfo?window.sessionStorage.username.replace(/\"/g, ""):"未登陆",
      outlogin:window.sessionStorage.userInfo?true:false,
      mysrc:require("@/assets/images/my.jpg"),
      userstate: false,
      // userstate: window.sessionStorage.token?true:false,
      notice:
        "通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容",
    }
  },
  created() {    
    if (window.sessionStorage.userInfo ) {
      this.userstate = true;
    }else{
      this.userstate = false;
    }
  },
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  mounted(){
    console.log(window.sessionStorage.username);
    console.log( this.$store.state.loginInfo.username +"---1111---$store.username" );
    console.log(this.$store.state.cartinfo.cartgood);
    console.log("------------------- cartinfo.cartgood- -----------------");
  },
  methods:{
    out(){
      console.log("111--outlogin");
      window.sessionStorage.removeItem("userInfo");
      // window.sessionStorage.remove(userInfo);
      // window.sessionStorage.clear();
      window.location.reload();
    }
  }

}


</script>

<style lang="scss" scoped>

.m-profile{
	display:block;
	width:100%;
	height:141px;
	background-color:#f1f5fa;
	background-repeat:no-repeat;
	background-size:100% 100%;
}
.m-avatar{
	padding-top:23px;
	padding-bottom:5px;
	text-align:center;
}
.m-avatar img{
	width:65px;
	height:65px;
	border-radius:50%;
	overflow:hidden;
}
.m-username{
	display:-webkit-box;
	display:-webkit-flex;
	display:flex;
	-webkit-box-pack:center;
	-webkit-justify-content:center;
	        justify-content:center;
	-webkit-box-align:center;
	-webkit-align-items:center;
	        align-items:center;
	text-align:center;
	font-size:20px;
	dislay:tab-cell;
	vertical-align:middle;
}
.m-username .m-nick{
	vertical-align:middle;
}
.u-link-item{
	display:block;
	width:100%;
	height:48px;
	line-height:48px;
	font-size:15px;
	background-color:#fff;
}
.u-link-item .u-link-item-inner{
	margin-left:15px;
	overflow:hidden;
}
.u-link-item .u-link-item-left{
	float:left;
}
.u-link-item .u-link-item-right{
	float:right;
	padding-right:15px;
	vertical-align:middle;
}
.u-link-item .u-link-item-right span{
	display:inline-block;
	vertical-align:middle;
}
.one {
  background: green;
}
p.mypmenu {
  font-size: 0.8rem;
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
.user-poster{
    width: 100%;
    height: 53vw;
    display: block;
    position: relative;
}
.m-avatar{
    padding-top: 23px;
    padding-bottom: 5px;
    text-align: center;
    position: absolute;
    width: 100%;
    height: 9rem;
    background: #ffffffbf;
    top: 2.7rem;
}
.m-username{
    padding-top: 23px;
    padding-bottom: 5px;
    text-align: center;
    position: absolute;
    width: 100%;
    height: 9rem;
    top: 2.7rem;
    margin-top: 1.2rem;
    font-size: .9rem;
    color: #5d5d5d;
    overflow: hidden;
}

// -------------------login-----------------------

p.cartmore {
    color: #666;
    font-size: .9rem;
    margin-top: 2rem;
}
.cartiftop {
    width: 100%;
    height: auto;
    text-align: center;
    margin: 0 auto;
}
img.cariflogo {
    width: 60%;
    padding-top:5rem;
}
p.goodtitle {
    padding: 0;
    margin: 0;
    line-height: 1.5rem;
    color: #696969;
    white-space: nowrap;
    font-size: .7rem;
}
span.goodspan {
    padding: 0;
    margin: 0;
    line-height: 1rem;
    color: #909090;
    font-size: 0.6rem;
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
}
p.carttip {
    font-family: Aria;
    font-size: 13px;
    padding: 10px 0 5px;
    color: #333;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-family: Aria;
    font-size: 12px;
    color: #999;
}
.van-button--plain.van-button--primary {
    color: #fff;
    width: 90%;
    height: 2.6rem;
    font-size: 0.8rem;
    line-height: 2.6rem;
    background: #1c1c1c;
    border: none;
}

// ----------------  outlogin  -----------------
.outlogin{
  margin-left:0.5rem;
  display: inline-block;
}
</style>
