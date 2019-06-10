<template>
	<div style="position: fixed;top:4rem;width: 100%;background-color: transparent;">	
	
	<van-cell-group style="background-color: transparent;">
  <van-field
	style="margin-bottom: 0.6rem;border-radius:5%;animation: rollIn 1s;padding: 0.3rem; background:none;"
    v-model="loginInfo.username"
    
    clearable
    label="用户名"
    left-icon="contact"
    placeholder="请输入用户名"
    @click-right-icon="$toast('question')"
  />

  <van-field
	style="margin-bottom: 0.6rem;border-radius:5%;animation: zoomInRight 1s;padding: 0.3rem; background:none;"
    v-model="loginInfo.password"
    type="password"
	left-icon="closed-eye"
    label="密码"
    placeholder="请输入密码"
    
  />
  <van-button round type="danger" size="large" style="height: 1.1rem;animation: zoomInDown 1s; " @click="login" >登录</van-button>

</van-cell-group>
</div>
</template>

<script>
	export default {
		data(){
			return{
				loginInfo:{},
				
			} 
		},
		methods: {
			login(){
				if(this.loginInfo.username){
			    console.log(this.loginInfo)
			    this.$axios.post("vue/login",this.loginInfo)
			    .then(res=>{
					
			        console.log(res.data);
			        if(!!res.data.type){
						localStorage.username=this.loginInfo.username;
			            window.sessionStorage.userInfo = JSON.stringify({token:res.data.token});
			            this.$router.push({name:'home'})
			        }
			    })} else {
					this.$toast('用户名不能为空')
				}
			}
			
		},
	}
</script>

<style>
</style>