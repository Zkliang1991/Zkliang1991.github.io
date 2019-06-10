<template>
    <div>
        <Head title="评价" :show="!!1"></Head>
        <div class="contaniner fixed-cont">
			<!--1-->
			<section class="assess">
				<p>
					<textarea rows="7" placeholder="请您发表一下对商品的看法，对我们帮助很大哦～～">
                    </textarea>
                    <img :src="require('../assets/gocar.png')" class="jiatupian" @click="jiatupian">
				</p>
				<ul>
					<li>评价</li>
					<li class="assess-right">
						<div><input type="radio" name="radio" value="radio1"/><img :src="require('../assets/hua.png')"/></div>
						<div><input type="radio" name="radio" value="radio2"/><img :src="require('../assets/huah.png')"/></div>
						<div><input type="radio" name="radio" value="radio3"/><img :src="require('../assets/huae.png')"/></div>
					</li>
				</ul>
			</section>
			<!--2-->
			<section class="main">
                <div class="main-wrap">
                    <span class="revtit">物流评分:</span>
                    <div id="mydiv1" currentIndex="0" class="mydiv">
                        <ul class="star_ul">
                            <li v-for="i in 5" :key=i @click=dafen(i)><i class="iconfont"  v-html="pinglun.icon"> </i></li>
                        </ul>
                        <span>{{first}}分</span>
                    </div>
                </div>
                
                <div class="main-wrap">
                    <span class="revtit">商家态度:</span>
                    <div id="mydiv2" currentIndex="0" class="mydiv">
                        <ul class="star_ul">
                            <li v-for="i in 5" :key=i @click=dafen1(i)><i class="iconfont"  v-html="pinglun.icon"> </i></li>
                        </ul>
                        <span>{{two}}分</span>
                    </div>
                </div>
            
                <div class="main-wrap">
                    <span class="revtit">商品质量:</span>
                    <div id="mydiv3" currentIndex="0" class="mydiv">
                        <ul class="star_ul">
                            <li v-for="i in 5" :key=i @click=dafen2(i)><i class="iconfont"  v-html="pinglun.icon"> </i></li>
                        </ul>
                        <span>{{three}}分</span>
                    </div>
                </div>
	        </section>
	    </div>
        <footer class="assess-footer fixed-footer ">
			<ul>
				<li>
                    <span class="fen">综合评分：</span>
                    <span>{{(first*1+two*1+three*1)/3*1| money}}</span>
				</li>
				<input type="button" value="发表评论" @click="fabiao"/>
			</ul>
		</footer>
        <input type="file" accept="image/*" @change="handleFile" class="hiddenInput"/>
    </div>
</template>

<script>
import { Toast} from 'mint-ui';
import { http } from "../utils";
import {mapState,mapMutations,mapActions} from 'vuex';
export default {
    data(){
        return{
            pinglun:{txt:"评论",icon:"&#xe60d;"},
            first:0,
            two:0,
            three:0,
        }
    },
    methods:{
        // 打开图片上传
        jiatupian: function () {
            this.$el.querySelector('.hiddenInput').click()
        },
        // 将头像显示
        handleFile: function (e) {
            let $target = e.target || e.srcElement
            let file = $target.files[0]
            var reader = new FileReader()
            reader.onload = (data) => {
                let res = data.target || data.srcElement
            }
            reader.readAsDataURL(file)
        },
        dafen(i,e){
            var e=e||window.event;
            console.log(i);
            if(i==1){
                e.target.parentNode.style.color="red";
                e.target.parentNode.nextSibling.style.color="";
                e.target.parentNode.nextSibling.nextSibling.style.color="";
                e.target.parentNode.nextSibling.nextSibling.nextSibling.style.color="";
                e.target.parentNode.nextSibling.nextSibling.nextSibling.nextSibling.style.color="";
                this.first=2;
            }else if(i==2){
                e.target.parentNode.style.color="red";
                e.target.parentNode.previousSibling.style.color="red";
                e.target.parentNode.nextSibling.style.color="";
                e.target.parentNode.nextSibling.nextSibling.style.color="";
                e.target.parentNode.nextSibling.nextSibling.nextSibling.style.color="";
                this.first=4;

            }else if(i==3){
                e.target.parentNode.style.color="red";
                e.target.parentNode.previousSibling.style.color="red";
                e.target.parentNode.previousSibling.previousSibling.style.color="red";
                e.target.parentNode.nextSibling.style.color="";
                e.target.parentNode.nextSibling.nextSibling.style.color="";
                this.first=6;
            }else if(i==4){
                e.target.parentNode.style.color="red";
                e.target.parentNode.previousSibling.style.color="red";
                e.target.parentNode.previousSibling.previousSibling.style.color="red";
                e.target.parentNode.previousSibling.previousSibling.previousSibling.style.color="red";
                e.target.parentNode.nextSibling.style.color="";
                this.first=8;
            }else{
                e.target.parentNode.style.color="red";
                e.target.parentNode.previousSibling.style.color="red";
                e.target.parentNode.previousSibling.previousSibling.style.color="red";
                e.target.parentNode.previousSibling.previousSibling.previousSibling.style.color="red";
                e.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.style.color="red";
                this.first=10;
            }

        },
        dafen1(i,e){
            var e=e||window.event;
            if(i==1){
                e.target.parentNode.style.color="red";
                e.target.parentNode.nextSibling.style.color="";
                e.target.parentNode.nextSibling.nextSibling.style.color="";
                e.target.parentNode.nextSibling.nextSibling.nextSibling.style.color="";
                e.target.parentNode.nextSibling.nextSibling.nextSibling.nextSibling.style.color="";
                this.two=2;
            }else if(i==2){
                e.target.parentNode.style.color="red";
                e.target.parentNode.previousSibling.style.color="red";
                e.target.parentNode.nextSibling.style.color="";
                e.target.parentNode.nextSibling.nextSibling.style.color="";
                e.target.parentNode.nextSibling.nextSibling.nextSibling.style.color="";
                this.two=4;

            }else if(i==3){
                e.target.parentNode.style.color="red";
                e.target.parentNode.previousSibling.style.color="red";
                e.target.parentNode.previousSibling.previousSibling.style.color="red";
                e.target.parentNode.nextSibling.style.color="";
                e.target.parentNode.nextSibling.nextSibling.style.color="";
                this.two=6;
            }else if(i==4){
                e.target.parentNode.style.color="red";
                e.target.parentNode.previousSibling.style.color="red";
                e.target.parentNode.previousSibling.previousSibling.style.color="red";
                e.target.parentNode.previousSibling.previousSibling.previousSibling.style.color="red";
                e.target.parentNode.nextSibling.style.color="";
                this.two=8;
            }else{
                e.target.parentNode.style.color="red";
                e.target.parentNode.previousSibling.style.color="red";
                e.target.parentNode.previousSibling.previousSibling.style.color="red";
                e.target.parentNode.previousSibling.previousSibling.previousSibling.style.color="red";
                e.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.style.color="red";
                this.two=10;
            }

        },
        dafen2(i,e){
            var e=e||window.event;
            console.log(i);
            if(i==1){
                e.target.parentNode.style.color="red";
                e.target.parentNode.nextSibling.style.color="";
                e.target.parentNode.nextSibling.nextSibling.style.color="";
                e.target.parentNode.nextSibling.nextSibling.nextSibling.style.color="";
                e.target.parentNode.nextSibling.nextSibling.nextSibling.nextSibling.style.color="";
                this.three=2;
            }else if(i==2){
                e.target.parentNode.style.color="red";
                e.target.parentNode.previousSibling.style.color="red";
                e.target.parentNode.nextSibling.style.color="";
                e.target.parentNode.nextSibling.nextSibling.style.color="";
                e.target.parentNode.nextSibling.nextSibling.nextSibling.style.color="";
                this.three=4;

            }else if(i==3){
                e.target.parentNode.style.color="red";
                e.target.parentNode.previousSibling.style.color="red";
                e.target.parentNode.previousSibling.previousSibling.style.color="red";
                e.target.parentNode.nextSibling.style.color="";
                e.target.parentNode.nextSibling.nextSibling.style.color="";
                this.three=6;
            }else if(i==4){
                e.target.parentNode.style.color="red";
                e.target.parentNode.previousSibling.style.color="red";
                e.target.parentNode.previousSibling.previousSibling.style.color="red";
                e.target.parentNode.previousSibling.previousSibling.previousSibling.style.color="red";
                e.target.parentNode.nextSibling.style.color="";
                this.three=8;
            }else{
                e.target.parentNode.style.color="red";
                e.target.parentNode.previousSibling.style.color="red";
                e.target.parentNode.previousSibling.previousSibling.style.color="red";
                e.target.parentNode.previousSibling.previousSibling.previousSibling.style.color="red";
                e.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.style.color="red";
                this.three=10;
            }

        },
        fabiao(){
            var num=(this.first*1+this.two*1+this.three*1)/3;
            var neirong=document.getElementsByTagName("textarea")[0].value;
            var time = new Date();
            var month = time.getMonth() + 1;
            var day = time.getDate();
            var pingluntime=month*1+"-"+day*1;
            if(num==0){
                Toast({
                    message: "请打分",
                    duration: 1000,
                });
            }else{
                http.get("/vue/addpinglun",{
                    params:{
                        username:this.username,
                        pingfen:num,
                        neirong:neirong,
                        pingluntime:pingluntime,
                        img:this.$route.params.good.goodimg,
                        dianzan:0
                    }
                }).then(res=>{
                    this.$router.push({name:'car',params:{pingjia:'pingjia'}})
                })
            }
        }
    },
    computed:{
        ...mapState(['username']),
    },
}
</script>

<style lang="less" scoped>
html {
	font-size: 125%; /* 20梅16=125% min-font-size:12px bug*/
}
@media only screen and (min-width: 481px) {
html {
	font-size: 188%!important; /* 30.08梅16=188% */
}
}
@media only screen and (min-width: 561px) {
html {
	font-size: 218%!important; /* 38.88梅16=218% */
}
}
@media only screen and (min-width: 641px) {
    html {
        font-size: 250%!important; /* 40梅16=250% */
    }
}
body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 1em;
	font: inherit;
	vertical-align: baseline;
	font-family: "Microsoft YaHei"
}
body {
	font-family: "Microsoft YaHei";
	font-size: 0.7rem;
	color: #333;
	line-height: 0.7rem;
	width: 100%;
	background: #f2f2f2;
}
em {
	font-style: normal
}
li {
	list-style: none
}
a {
	text-decoration: none;
	outline: 0;
	color: #333;
}
img {
	border: none;
	vertical-align: top;
}
table {
	border-collapse: collapse;
}
input, textarea {
	font-family: "Microsoft YaHei";
	padding: 0;
}
textarea {
	resize: none;
	overflow: auto;
}
textarea:focus {
	outline: none;
}
input:focus {
	outline: none;
}
.clear {
	zoom: 1
}
.clear:after {
	content: "";
	display: block;
	clear: both;
}
.fl {
	float: left
}
.fr {
	float: right
}
/*************************************页面开始************************************/
.hiddenInput{
    display: none;
}
.fen{
    margin-left: 0.5rem;
}
header{
	background: #FFFFFF;
    width: 100%;
    height: 2.5rem;
    line-height: 2.5rem;
    text-align: center;
    font-size: 0.9rem;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 97;
}
header a{
	color: #333333;
}
header ._left {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
}
header ._left img {
    height: 1rem;
    margin: 0.75rem 0 0 0.6rem;
}

.contaniner {
    width: 100%;
    overflow: hidden;
}
.fixed-cont {
    margin-top: 15%;
    margin-bottom: 20%;
}

.assess {
    width: 100%;
    position: relative;

    .jiatupian{
        position: absolute;
        top:2rem;
        z-index: 2;
        left:0.2rem;
    }
}
.assess p {
    width: 92%;
    padding: 4%;
    overflow: hidden;
    background-color: #fff;
}
.assess p textarea {
    float: right;
    text-align: justify;
    width: 100%;
    border: none;
    font-size: 0.9em;
    color: #666;
}
.assess ul {
    width: 90%;
    padding: 2% 5%;
    background-color: #fff;
    overflow: hidden;
    margin-top: 3%;
}
.assess ul li {
    float: left;
    font-size: 0.9em;
    color: #666;
}
.assess ul .assess-right {
    float: right;
    width: 40%;
    overflow: hidden;
}
.assess-right div{
	width: 32%;
	float: left;
    text-align: center;
    display: flex;
}

.assess-footer {
    width: 100%;
    background-color: #fff;
    overflow: hidden;
}
.fixed-footer {
    position: fixed;
    bottom: 0;
    left: 0;
}
.assess-footer li {
    position: relative;
    float: left;
    width: 70%;
    padding: 3% 0;
}
.assess-footer li input[type="checkbox"] {
    opacity: 0;
    position: absolute;
    top: 40%;
    left: 0;
}
input[type="checkbox"], input[type="radio"] {
    box-sizing: border-box;
    padding: 0;
    margin: 3px;
}
.assess-footer li label {
    width: 80%;
    padding-left: 20%;
    font-size: 0.9em;
    color: #666;
    display: block;
    background-size: 6%;
    background-position: 10%;
    -moz-user-select: none;
}
.assess-footer li .assd{ 
	width: 80%; 
	padding-left: 20%; 
	font-size: 0.9em; 
	color: #666;  
	display: block; 
	background-size: 6%; 
	background-position: 10% 
}
.assess-footer input[type="button"] {
    float: right;
    width: 30%;
    padding: 3% 0;
    text-align: center;
    color: #fff;
    background-color: #2a796a;
    border: none;
    font-size: 0.9em;
}

.main {
    width: 100%;
    margin: 0.2rem auto;
    background: #FFFFFF;
}
.main-wrap{
	padding: 0.1rem 0 0.1rem 0.5rem;
}
 .mydiv {
    display: inline-block;
}
.main ul {
    list-style-type: none;
    overflow: hidden;
    float:left;
}
.star_ul li {
    margin-right: 0.3rem;
    float: left;
}
.star_ul img {
    width: 0.8rem;
    height: 0.8rem;
    vertical-align: text-bottom;
}
</style>
