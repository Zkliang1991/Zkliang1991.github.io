<template>
    <div>
        <Head title="登陆" :show="!!1"></Head>
        <div class="login-form">
            <div class="head-info" id="donghua1">
                <div id="photo"><img :src="userInfo.avatar" @click.stop="uploadHeadImg"/></div>
            </div>
            <form>
                <input type="text" class="text" placeholder="请输入用户名" id="donghua2" v-model="username">
                <input type="password" placeholder="请输入密码" id="donghua3" v-model="password">
                <input type="submit" value="Login" @click="denglu({url:'/vue/login',username:username,password:password,cb})" id="donghua4">
            </form>
            <div class="password" id="donghua5">
                <p @click="gozhuce">免费注册   |   忘记密码</p>
            </div>
        </div>
        <input type="file" accept="image/*" @change="handleFile" class="hiddenInput"/>
    </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
import {Toast} from 'mint-ui';
export default {
    data(){
        return {
            touxiang:require("../assets/images/photo.jpg"),
            userInfo: {
              avatar: require("../assets/images/photo.jpg"),
            } 
        }
    },
    methods:{
        ...mapActions(['denglu']),
        gozhuce(){
            this.$router.push({name:'zhuce'})
        },
        cb(res){
          if(res.data.code==100){
            this.$router.push({name:'home'})
          }else{
            Toast({
              message: "请检查用户名和密码",
              duration: 1000,
            });
          }
        },
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
    },
    computed:{
      ...mapState(['username','password']),
      username:{
       get(){
         return this.$store.state.username;
       },
       set(val){
         this.$store.commit("Username",val)
       }
     },
      password:{
       get(){
         return this.$store.state.password;
       },
       set(val){
         this.$store.commit("Password",val)
       }
     }
    }
}
</script>

<style scoped>
.hiddenInput{
  display: none;
}
#donghua1 {
  animation: bounceInDown 2s;
}
#donghua2 {
  animation: bounceInLeft 2s;
}
#donghua3 {
  animation: bounceInRight 2s;
}
#donghua4 {
  animation: rotateIn 2s;
}
#donghua5 {
  animation: bounceInUp 2s;
}
body{
	font-family: 'Lato', sans-serif;
}
.wrap{
	margin: 0 auto;
	width: 80%;
}
/* body a,form li,input[type="submit"],input[type="text"],.sixth-login input[type="submit"],.third-login input[type="submit"]{
	transition: 0.1s all;
	-webkit-transition: 0.1s all;
	-moz-transition: 0.1s all;
	-o-transition: 0.1s all;
} */
.login-form {
  min-height: 750px;
   width: 33.3333%;
  margin-bottom: 0;
    margin: 4% auto 0;
}
h1 {
  text-align: center;
    margin-top: 2em;
  font-size: 3em;
  color: #fff;
}
.head-info{
    width: 100px;
    height:3rem;
}
#photo {
    border-radius: 1rem;
    border: 1px solid #ccc;
    height:2rem;
    width: 2rem;
    margin: 0 auto;
    overflow: hidden;
    clear: both;
    margin-top: 1.8rem;
    margin-bottom: 0.3rem;
    margin-left: 2.4rem;
}
#photo>img:hover {
    transform: rotateZ(360deg);
}

#photo>img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    transition: transform 1s linear;
}
form {
	padding: 0% 5% 0%;
}
.social-icons p {
	color: #5ca3d9;
	font-size: 1em;
	font-weight: 400;
}
.social-icons {
	padding: 0px 28px 0 28px;
}
a.account {
	float: left;
}
a.trouble {
	float: right;
}
a.social-account h3 {
	text-align: center;
	padding: 0em 0 1.5em 0;
	color: #CECECE;
}
form{
	list-style: none;
	margin-bottom: 25px;
	width: 90%;
	background: none;
}
input[type="text"], input[type="password"] {
	font-family: 'Lato', sans-serif;
    width: 441px;
  padding: 16px 16px 16px 16px;
  color: black;
  font-size: 18px;
  outline: none;
  background: none;
  font-weight: 100;
  border-radius: 50em;
  border: 1px solid #666;
  margin-bottom: 1em;
text-align: center;
}
input[type="submit"]{
 font-family: 'Lato', sans-serif;
  font-size: 28px;
  font-weight: 100;
  color: #fff;
  cursor: pointer;
  outline: none;
  padding: 12px 12px 12px 12px;   
  width: 475px;
  background: #666;
  border-radius: 50em;
  border: none;
text-align: center;
}
input[type="submit"]:hover {
	background: #1abc9c;
	border-radius: 6px;
	border-radius: 50em;
}
.but-bottom {
	margin-bottom: 0.8em;
}
.password {
  text-align: center;
}
.password P{
  color: black;
  word-spacing: 2em;
  font-weight: 100;
}
input[type="file"] {
  opacity: 0;
  width: 95px;
  height: 85px;
  display: inline-block;
  border: 0px;
  outline: none;
  position: absolute;
  top: 0px;
  left: 41%;
  cursor: pointer;
}
/*--sign-in--*/
.login-form-1{

  min-height: 925px;
	  width: 33.3333%;
	margin: 9% auto 4% auto;
}
.add-photo {
  text-align: center;
  color: #fff;
  font-size: 1.5em;
  font-weight: 100;
  position: relative;
}
.add-photo h4 {
  margin-bottom: 1em;
  border: 2px solid#fff;
  width: 11%;
  margin: 0 auto 6%;
  border-radius: 100%;
  padding: 20px 22px;
  
}
/*--/sign-in--*/
/*--copyrights--*/
.copy-rights{
	text-align: center;
	  margin: 7em 0;
}
.copy-rights p{
	color:#FFF;
	font-size: 1em;
	line-height:1.8em;
}
.copy-rights p a{
	color:#fff;
	transition: all 0.3s ease-out;
	text-decoration:none;
}
.copy-rights p a:hover{
	color:#1abc9c;
	text-decoration:none;
	transition: 0.1s all;
}
/*--/copyrights--*/
/*--start-responsive-design--*/
@media (max-width:1440px){
	input[type="text"], input[type="password"] {
		  width: 388px;
	  }
	  input[type="submit"] {
	 	 width: 423px;
	  }
	  .add-photo h4 {
  padding: 20px 26px;
}
.login-form-1 {
  margin: 9% auto 0% auto;
}
.copy-rights {
  padding: 4em 0;
    margin-top: 0em;
}
}
@media (max-width:1366px){
	input[type="text"], input[type="password"] {
	  width: 365px;
	}
	input[type="submit"] {
	  width: 399px;
	}
.login-form {
  min-height: 648px;
}
.login-form-1 {
  min-height: 845px;
  }
}
@media (max-width:1280px){
	input[type="text"], input[type="password"] {
  width: 340px;
}
input[type="submit"] {
  width: 374px;
}
.add-photo h4 {
  padding: 29px 29px;
  width: 14%;
  margin: 0 auto 8%;
}
}
@media (max-width:1024px){
	.login-form {
  width: 41.3333%;
}
	.login-form-1 {
  width: 41.3333%;
}
.add-photo h4 {
  padding: 18px 20px;
  width: 14%;
  margin: 0 auto 6%;
}
}
@media (max-width:768px){
	.login-form {
		width: 56%;
	}
	.login-form-1 {
		width: 56%;
	}
	.copy-rights {
	  padding: 0;
	  margin: 1em 0;
	}
}
@media (max-width:667px){
	input[type="text"], input[type="password"] {
	  width: 292px;
	}
	input[type="submit"] {
	  width: 325px;
	}
}
@media (max-width:640px){
	.login-form {
	  width: 66%;
	}
	.login-form-1 {
	  width: 66%;
	}
}
@media (max-width:568px){
	h1 {
	  text-align: center;
	  margin-top: 1em;
	  font-size: 1.6em;
	  color: #fff;
	}
	input[type="text"], input[type="password"] {
	  width: 285px;
	}
	input[type="submit"] {
	  width: 317px;
	}
	.add-photo h4 {
	  padding: 18px 18px;
	  width: 17%;
	  margin: 0 auto 6%;
	}
}
@media (max-width:480px){
		.login-form {
  width: 90%;
     min-height: 560px;
}
.login-form-1 {
  width: 90%;
   min-height: 755px;
}

}
@media (max-width:375px){
	input[type="text"], input[type="password"] {
	  width: 248px;
	}
	input[type="submit"] {
	  width: 280px;
	}
	.add-photo h4 {
	  width: 18%;
	}
	.copy-rights {
	  padding: 1em 0;
	}
	.login-form-1 {
	  min-height: 783px;
	}
}
@media (max-width:384px){
	input[type="text"], input[type="password"] {
	  width: 265px;
	}
	input[type="submit"] {
	  width: 298px;
	}
}
</style>
