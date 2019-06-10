<template>
	<van-goods-action>
  <van-goods-action-icon
    icon="chat-o"
    text="客服"
    @click="onClickIcon"
  />
  <van-goods-action-icon
    icon="cart-o"
    text="购物车"
    @click="onClickIcon"
  />
  <van-goods-action-button
    type="warning"
    text="加入购物车"
    @click="onClickButton"
  />
  <van-goods-action-button
    type="danger"
    text="立即购买"
    
	@click="gocart"
  />
</van-goods-action>
</template>

<script>
	export default {
	props:['value','shuig'],
  methods: {
		gocart(){
			if(localStorage.username){
			this.$axios.post("vue/addCart",{			    
				count:this.value,
				username:localStorage.username,
			    good:JSON.stringify(this.shuig)
			}).then(res=>{
			    console.log(res.data);
					this.$router.push({name:'cart'})
			})
			}else{
				this.$router.push({name:"login"})
			};
		},
    onClickIcon(){
      alert('点击图标');
    },
    onClickButton() {
			if(localStorage.username){
      console.log(this.shuig);
			this.$axios.post("vue/addCart",{			    
			    count:this.value,
					username:localStorage.username,
			    good:JSON.stringify(this.shuig)
			}).then(res=>{
			    console.log(res.data);
			});
			this.$toast('加入成功');}else{
				this.$router.push({name:"login"})
			}
    },
  }
}
</script>

<style>
</style>
