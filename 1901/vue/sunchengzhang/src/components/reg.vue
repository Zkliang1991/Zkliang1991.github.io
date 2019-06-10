<template>
	<div style="position: fixed;top:4rem;width: 100%;background-color: transparent;">	
	
	<van-cell-group style="background-color: transparent;">
  <van-field
	style="margin-bottom: 0.6rem;border-radius:5%;animation: rollIn 1s;padding: 0.3rem;background:none;border: none;"
    v-model="regInfo.username"       
    label="用户名"
    left-icon="contact"
    placeholder="请输入用户名"
    @click-right-icon="$toast('question')"
  />

  <van-field
	style="margin-bottom: 0.6rem;border-radius:5%;animation: zoomInRight 1s;padding: 0.3rem;background:none;border: none;"
    v-model="regInfo.password"
    type="password"
	left-icon="closed-eye"
    label="密码"
    placeholder="请输入密码"
    
  />
  <van-field
  	style="margin-bottom: 0.6rem;border-radius:5%;animation: zoomInRight 1s;padding: 0.3rem;background:none;"
    v-model="regInfo.tel"
    type="tel"
  	left-icon="phone-o"
    label="手机号"
    placeholder="请输入手机号"
    
  />
  <van-button round type="danger" size="large" style="height: 1.1rem;animation: zoomInDown 1s;" @click="reg">注册</van-button>

</van-cell-group>
</div>
</template>

<script>
	export default {
		data(){
			return{
				regInfo:{},
			} 
		},
		methods: {
			reg(){
			    console.log(this.regInfo)
			    this.$axios.post("vue/register",this.regInfo)
			    .then(res=>{
					console.log(res);
			        this.$parent.flag=true
			        
			    })
			}
		},
	}
</script>

<style>
</style>