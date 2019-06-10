<template>
	<div class="bgt">
	<Gren v-if="flag1"></Gren>
	<div v-if="!flag1">
	<Header title="登录&&注册" show="true"></Header>
	<van-button plain  type="primary" size="large" style="width: 50%;" @click="gologin">登录</van-button>
	<van-button plain  type="primary" size="large" style="width: 50%;" @click="goreg">注册</van-button>
	<login v-if="flag"></login>
	<reg v-if="!flag"></reg>
	</div>
	</div>
</template>

<script>
	import Login from "../components/login.vue"
	import Reg from "../components/reg.vue"
	import Gren from "../components/gren.vue"
	export default {
		components: {
			Login,
			Reg,
			Gren
		},
		data(){
			return{
				flag:true,
				flag1:Boolean
			} 
		},
		methods: {
			gologin(){
				this.flag=true
			},
			goreg(){
				this.flag=false
			}
		},
		created(){
			if(localStorage.username){
				this.flag1=true
			} else {
				this.flag1=false
			}
		}
	}
</script>

<style>
	.bgt {
		height: 100%;
		background: url(http://pic1.win4000.com/wallpaper/2018-01-22/5a65ad567929f.jpg) no-repeat fixed center;
	}
</style>
