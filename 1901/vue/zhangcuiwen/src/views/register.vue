
<template>
    <div class="wrapper " id="register1">	
		 <Head title="注册" :show="true" :searchShow="false"></Head>
	<div class="container">
		<h1>Welcome</h1>
		<form class="form">
			<input type="text" placeholder="你的名字" v-model="register.username" >
            <input type="text" placeholder="你的电话" v-model="register.tel">
			<input type="password" placeholder="还有你的密码" v-model="register.password">
			<button type="unsubmit" id="login-button" @click="registerWey">注册</button>
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
				register:{
					username:"",
					tel:"",
					password:""
				}
			}
		},
		methods:{
				registerWey(){
			    this.$axios.post("/vue/register",{data:this.register}).then(res=>{
				 var data = res.data
                 if(data.code==200){
					alert("注册成功,登录吧")
					this.$router.push({name:"login"})
                 }
            })
		}
		},
	
}
//    $('#login-button').click(function(event){
//         event.preventDefault();
//         $('form').fadeOut(500);
//         $('.wrapper').addClass('form-success');
//     })
        // var btn = document.getElementById('#login-button');
        // form
        // btn.click = function(){

        // }
</script>

<style>
    #register1{
       border:1px soild white;
        border-radius:20px;
        
    }
body,td,th { font-family: "Source Sans Pro", sans-serif; }
body { background-color: #2B2B2B; }
</style>
