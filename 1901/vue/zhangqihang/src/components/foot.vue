<template>
    <footer>
        <div v-for="(foot,i) in foots" :key="i">
            <router-link :to="{name:foot.name}" >
				<mt-badge v-if="i==2" size="samll" type="error" class="hot">6</mt-badge>
                <i class="iconfont"  v-html="foot.icon"> </i>
                <span>{{foot.txt}}</span>
            </router-link>
        </div>
    </footer>
</template>

<script>
export default {
    data(){
        return{
            foots:[
                {txt:"首页",path:"/home",name:"home",icon:"&#xe61d;"},
                {txt:"分类",path:"/classify",name:"classify",icon:"&#xe682;"},
                {txt:"购物车",path:"/car",name:"car",icon:"&#xe61b;"},
                {txt:"个人中心",path:"/mine",name:"mine",icon:"&#xe614;"},
            ]
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
    border-top:1px solid gray;
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
				width: .35rem;
				border: 1px solid #f60;
				background-color: #fff;
				color: #f60;
				border-radius: 50%;
			}
			
		}
		.nav-active,.router-link-exact-active{
			color:#2bd3c2;
		}

	}
}
</style>