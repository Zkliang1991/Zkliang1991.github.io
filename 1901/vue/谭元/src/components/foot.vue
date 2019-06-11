<template>
    <footer id="foot">
         <div v-for="(foot,i) in foots" :key="i">
             <router-link :to="{name:foot.name}">
                 <i class="iconfont"  v-html="foot.icon"></i>
                 <span>{{foot.txt}}</span>
             </router-link>
        </div> 
    </footer>
</template>


<script>
export default {
    name:"foot",
    data(){
        return {
            foots:[
                {txt:"首页",path:"/index/home",name:"home",icon:"&#xe633;"},
                {txt:"基础",path:"/index/basics",name:"basics",icon:"&#xe64c;"}
            ]
        }
    }
}
</script>


<style lang="scss" scoped>
    footer{
	position:fixed;
	width:100%;
	height:.9rem;
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
			color:#111;
			position: relative;
			i{
			width:100%;
			height:0.45rem;
			line-height:0.45rem;
			font-size:0.32rem !important;
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
			}
		}
		.nav-active,.router-link-exact-active{
			color:#e60012;
		    border-color:#e60012;
		}

	}
}
</style>
