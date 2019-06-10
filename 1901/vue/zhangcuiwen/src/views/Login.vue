
<template>
    <div class="wrapper " id="login1">
		<Head title="登录" :show="true"></Head>
	<div class="container">
		<h1>Welcome</h1>
		<form class="form">
			<input type="text" placeholder="你的名字" v-model="login.username">
			<input type="password" placeholder="你的密码" v-model="login.password">
			<button type="unsubmit" id="login-button" @click="loginyes">你的登录</button>
			<button type="unsubmit" id="login-button" @click="resyes" class="resyes">你没有账号</button>
		</form>
	</div>
	
	<ul class="bg-bubbles">
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
	</ul>
	</div>
</template>

<script>
export default {
	data(){
		return{
			login:{
				username:"",
				password:""
			}
		}
	},
	methods:{
		loginyes(){
			this.$axios.post('/vue/login',this.login).then(res=>{
				var data=res.data
				if(data.code==200){
					// alert("登好了")
					  window.sessionStorage.userInfo = JSON.stringify({token:res.data.token});
					 //window.sessionStorage.userInfo = JSON.stringify({username:data.name});
					    sessionStorage.removeItem("username");
          				sessionStorage.setItem('username', data.name);
					 this.$router.push({name:"mine",params:{username:data.name}})
				}
			})
		},
		resyes(){
	this.$router.push({name:"register"})
}
	},

	// watch:{

	// }
}
</script>


<style>
    #login1{
      
        border:1px soild white;
        border-radius:20px;
    }
	.resyes{
		margin:1rem 0;
	}
body,td,th { font-family: "Source Sans Pro", sans-serif; }
body { background-color: #2B2B2B; }
</style>
