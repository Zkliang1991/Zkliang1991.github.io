<template>
    <footer>
        <div v-for="(foot,i) in foots" :key="i">
            <router-link :to="{name:foot.name}" >
				<mt-badge v-if="i==2" size="small" type="error" class="hot">{{cartNum}}</mt-badge>
                <i class="iconfont"  v-html="foot.icon"> </i>
                <span>{{foot.txt}}</span>
            </router-link>
        </div>
    </footer>
</template>

<script>
import {mapState} from "vuex";
export default {
	name:'foot',
	computed:{
		...mapState([
			'cartNum'
		]),
	},
    data(){
        return{
			foots:[
				{txt:"首页",path:"/index/home",name:"home",icon:"&#xe640;"},
                {txt:"分类",path:"/index/classify",name:"classify",icon:"&#xe604;"},
                {txt:"购物车",path:"/index/cart",name:"cart",icon:"&#xe600;"},
                {txt:"我的",path:"/index/mine",name:"mine",icon:"&#xe601;"},
			],
        }
	},
	mounted(){
		this.username = localStorage.getItem('username');
        console.log(this.username);
        if(this.username){
            this.flag = true ;
            this.$axios.post('/vue/getCartData',{
            username:localStorage.username,
            }).then(res=>{
                this.goods = res.data.result;
                var count = 0
                this.goods.forEach((item)=>{
                    count += item.count;
                })
                console.log('这是数量'+count);
            })
        }else{
            this.flag = false;
        }
	}
}
</script>

<style lang="scss" scoped>
footer{
	position:fixed;
	width:100%;
	height:90rem/100;
	left:0;
	bottom:0;
	background:#fff;
	display:flex !important;
    z-index:100;
    border-top:1px solid black;
	div{
		flex:1;
		height:0.9rem;
		a{
			display: block;
			width:100%;
			height:100%;
			display:flex;
			flex-direction:column;
			box-sizing:border-box;
			padding:0.06rem 0;
			text-align:center;
			font-family:"微软雅黑";
			color:#999;
			position: relative;
			i{
			width:100%;
			height:0.45rem;
			line-height:0.45rem;
			font-size:0.42rem !important;
			}
			span{
				width:100%;
				height:0.35rem;
				line-height:0.35rem;
				font-size:0.26rem;
			}
			.hot{
				position: absolute;
				top:0;
				left:60%;
				display: inline;
                width:0.25rem;
                text-align: center;
			}
		}
		.nav-active,.router-link-exact-active{
			color:#f40;
		    border-color:#0dc441;
		}

	}
}
</style>