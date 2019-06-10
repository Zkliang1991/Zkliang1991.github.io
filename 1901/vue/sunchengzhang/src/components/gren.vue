<template>
	<div style="position: fixed;top:4rem;width: 100%;background-color: transparent;">
		
		<div style="font-size: 2rem;overflow: hidden;text-align: center;"><van-icon name="friends-o" /></div>
		<van-button round  size="large" style="height: 1.1rem;animation: zoomInDown 1s;font-size: larger;background: none;color: #000088;">{{username}}</van-button>
		<van-button round  size="large" style="height: 1.1rem;animation: zoomInDown 1s;background: none;color: red;" @click="zhux">注销</van-button>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				username:localStorage.username,
				show:true
			}
		},
		methods: {
			zhux() {
				localStorage.removeItem('username');
				window.location.reload();
			}
		},
	}
</script>

<style>
</style>
