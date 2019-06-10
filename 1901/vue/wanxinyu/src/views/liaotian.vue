<template>
    <div>
        <header class="header moveIn">
			<img class="back" :src="require('../assets/images/left.png')" @click="tuihui"/>
			<h5 class="tit">客服人员</h5>
			<div class="right">资料</div>
		</header>
		<div class="liaotian">
			<div class="message">

				<div class="send">
					<div class="time">06/04 06:30</div>
					<div class="msg">
						<img :src="require('../assets/images/touxiang.png')" alt="" />
						<p><i class="msg_input"></i>尊敬的超级会员，您好，客服小e很高兴为您服务</p>
					</div>
				</div>
				<div class="show">
					<div class="time">{{shijian}}</div>
					<div class="msg" v-for="(hua,i) in liaotianList" :key=i>
						<img :src="require('../assets/images/photo.jpg')" alt="" />
						<p><i clas="msg_input"></i>{{hua}}</p>
					</div>       
				</div>
			</div>
			<div class="footer">
				<img :src="require('../assets/images/hua.png')" alt="" />
				<img :src="require('../assets/images/xiaolian.png')" alt="" />
				<input type="text"  />
				<p @click="fasong">发送</p>
			</div>
		</div>
    </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    data(){
        return{
			liaotianList:[],
			shijian:"",
        }
    },
    methods:{
        fasong(){
			var sendvalue=document.getElementsByTagName('input')[0].value;
			ws.send(sendvalue)
            document.getElementsByTagName('input')[0].value="";
		},
		tuihui(){
			history.go(-1);
		}

	},
	mounted(){
		// var ws = new WebSocket("ws://localhost:1811");
	
		// ws.onopen = function(){
		// 	ws.send("大家好啊!...")
		// }
		ws.send(`${this.username}已上线`)
		// 2. 监听和接收服务器socket 发送的数据 
	
		ws.onmessage = (msg)=>{
			 
			this.liaotianList.push(msg.data);
			console.log(msg.data)
		}

		// 3. 监听服务端socket error 
		ws.onerror =  function(error){
			// console.log(error + "err-message ")
		}

		// 4. 监听服务器 关闭 
		ws.onclose = function(){
			// console.log("server socket is closed....")
		}
	},
	updated(){
		document.documentElement.scrollTop=document.getElementsByClassName("message")[0].scrollHeight;
	},
	computed:{
		...mapState(['username']),
	}	
	
    
}
</script>

<style scoped>
.moveIn {
  animation: flip 1s;
}
h5{
	margin: 0;
}
img{
	max-width: 100%;
    vertical-align: middle
}
input{
	outline: none;	
}
body{
    max-width: 720px;
    margin: 0 auto;
    background: #f1f1f1;
    color:#333;
    font-size: 0.26rem;
}
.header{
    border-bottom: 1px solid #dfdfdf;
    padding:0 0.2rem;
    height: 1rem;
    line-height: 1rem;
    background: #fff;
    position: fixed;
    width: 100%;
    max-width: 720px;
    box-sizing: border-box;
    z-index: 100;
}
.back{
    position: absolute;  
	top: 0;
	left: 0.3rem;
    width: 0.2rem;
    height:0.4rem;
    margin-top: 0.34rem;
    background-size: 0.2rem 0.4rem;
}
.header .tit{
    font-size: 0.32rem;
    vertical-align: middle;
    text-align: center;
    height: 1rem;
    line-height: 1rem;
    font-weight: normal;
}
.header .right{
	position: absolute;
	right: 0.3rem;
	top: 0;
	float: none;
	font-size: 0.24rem;
	line-height: 1.2rem;
}
.message{
    background-color: #f1f1f1;
	padding: 1.2rem 0.3rem 1rem 0.3rem;	
}
.time{
    font-size:0.24rem;
    color:#999;
    margin-bottom: 0.3rem;
    text-align: center;
}

.footer{
	position: fixed;
	bottom: 0;
    height:1rem;
    background-color:#fff;
    line-height:1rem;
    width: 100%;
    max-width: 720px;
    border-top: 1px solid #ddd;
}
.footer img{
    margin-left:0.2rem;
    width: 0.5rem;
    float: left;
    margin-top: 0.23rem;
}
 .footer input{
    margin-left:0.2rem;
    width:3.5rem;
    height:0.64rem;
    border-radius: 0.1rem;
    border:0.01rem solid #222222;
    padding : 0 0.15rem;


}
.footer p{
   width:1.2rem;
    height:0.68rem;
    font-size:0.3rem;
    color:#fff;
    line-height:0.68rem;
    text-align:center;
    background-color:rgb(17, 79, 142);
    border-radius: 0.1rem;
    float:right;
    margin-top:0.2rem;
    margin-right:0.2rem;
}
.send:after,.show:after,.msg:after{
	content: "";
	clear: both;
	display: table;	
}

.msg>img{
	width: 0.8rem;
	border-radius: 50%;
	float: left;
}
.msg>p{
	float: left;
	margin:0  0.4rem;
	padding: 0.25rem;
	background: #fff;
	font-size: 0.3rem;
	position: relative;
	border-radius: 0.2rem;
	max-width:5rem ;
	box-sizing: border-box;
}

.msg_input{
	position: absolute;
	background-size: 0.31rem auto;
	width: 0.31rem;
	height: 0.51rem;
	left: -0.31rem;
	top: 0.25rem;
}
.show .msg img,.show .msg p,.show .msg{
	float: right;
}
.msg{
    padding-bottom: 0.2rem;
    width: 100%;
}
.liaotian{
	background-color: #f1f1f1;
	height: 100%;
}

.show .msg_input{
	left: auto;
	right: -0.11rem;
	transform:rotate(180deg);
	-ms-transform:rotate(180deg); 	/* IE 9 */
	-moz-transform:rotate(180deg); 	/* Firefox */
	-webkit-transform:rotate(180deg); /* Safari 和 Chrome */
	-o-transform:rotate(180deg); 	/* Opera */
}
.send,.show{
	padding-bottom: 0.3rem;
    background-color: #f1f1f1;
}
.alert_novip,.flower_num,.give_flower{
	display: none;
	padding: 0.3rem 0.5rem;
	font-size: 0.28rem;
}
.alert_novip p,.flower_num  p{
	margin-bottom: 0.45rem;
}
.layui-layer-wrap button{
	font-size: 0.28rem;
	padding: 0.2rem 0.3rem;
	margin-top: 0.1rem;
	background: #f8f8f8;
	border-radius: 10px;
}

.flower_num button{
	padding: 0.2rem 0.5rem;
	border-radius: 10px;
}
.layui-layer-wrap button:first-child{
	float: left;
}
.layui-layer-wrap button:last-child{
	float: right;
	background: #FF7171;
	color: #fff;
}
.alert_novip button{
	padding: 0.2rem 0.3rem;
    border-radius: 10px
}
.flower{
	width: 0.8rem;
	margin: 0 auto;
}
.give_flower{
	text-align: center;
}
.give_flower p{
	text-align: center;
	line-height: 1.5;
}
.give_flower input{
	width: 1rem;
	margin-right: 0.1rem;
	margin-top: 0.2rem;
}
.give_flower button{
	display: block;
	width: 3rem;
	font-size: 0.28rem;
	margin: 0 auto;
	margin-top: 0.6rem;
	float: none!important;
	line-height: 0.65rem;
	border-radius: 10px;
}

</style>
