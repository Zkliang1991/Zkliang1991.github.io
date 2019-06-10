<template>
<div>
    <Head title="可得眼镜" back="" ></Head>
<van-swipe :autoplay="3000" indicator-color="white">
  <van-swipe-item><img class="lb" src="https://pic.keede.com/Images/index_scb/20190312/banner_f3f3f5.jpg" ></van-swipe-item>
  <van-swipe-item><img class="lb" src="https://pic.keede.com/event/2019/2019ayrzhc/banner_cdf2f7.jpg" ></van-swipe-item>
  <van-swipe-item><img class="lb" src="https://pic.keede.com/Images/index_scb/20190401/banner_2f363c.jpg" alt=""></van-swipe-item>
  <van-swipe-item><img class="lb" src="https://pic.keede.com/event/2019/2019kj618/banner_e9e9e8.jpg" alt=""></van-swipe-item>
  <van-swipe-item><img class="lb" src="https://pic.keede.com/Images/index_scb/20190218/banner_fffdf2.jpg" alt=""></van-swipe-item>
</van-swipe>
  

<div class="list">
		<ul>
			
			<li>
				<a href="">
					<i><img src="https://pic.keede.com/event/2017hwg/app/20171229/icon_jinwai.png" alt=""></i>
					<span>境外发货</span>
				</a>
			</li>
			<li>
				<a href="">
					<i><img src="https://pic.keede.com/event/2017hwg/app/20171229/icon_zp.png" alt=""></i>
					<span>100%正品</span>
				</a>
			</li>
			<li>
				<a href="">
					<i><img src="https://pic.keede.com/event/2017hwg/app/20171229/icon_shouhou_g.png" alt=""></i>
					<span>售后无忧</span>
				</a>
			</li>
			<li>
				<a href="">
					<i><img src="https://pic.keede.com/event/2018hwg/app/20180302/s4.png" alt=""></i>
					<span>全程包税</span>
				</a>
			</li>
			
		</ul>
	</div>

<div class="title1">
    <img src="https://pic.keede.com/event/2017hwg/app/20171229/title1.png" alt="">
</div>

<div class="item">
    <ul class="hor-view">
        <li><img src="https://pic.keede.com/event/2018hwg/app/20180306/pp/p2.png" alt=""></li>
        <li><img src="https://pic.keede.com/event/2018hwg/app/20180306/pp/p3.png" alt=""></li>
        <li><img src="https://pic.keede.com/event/2018hwg/app/20180306/pp/p4.png" alt=""></li>
        <li><img src="https://pic.keede.com/event/2018hwg/app/20180306/pp/p5.png" alt=""></li>
        <li style="display:none"></li>
        <li><img src="https://pic.keede.com/event/2018hwg/app/20180306/pp/p6.png" alt=""></li>
        <li><img src="https://pic.keede.com/event/2018hwg/app/20180306/pp/p7.png" alt=""></li>
        <li><img src="https://pic.keede.com/event/2018hwg/app/20180306/pp/p8.png" alt=""></li>
        <li><img src="https://pic.keede.com/event/2018hwg/app/20180306/pp/p9.png" alt=""></li>
    </ul>
</div> 
<div class="title2">
    <img src="https://pic.keede.com/Images/2018app/20180404/title2.png" alt="">
</div>

<ul class="hor-view1"  style="margin-bottom: 1rem;">
    <li   v-for="(good,i) in goods" :key="i">
        <router-link :to="{name:'details',params:{goodId:good._id},query:{name:good.title}}">
        <div class="hvImg">
            <img :src="good.thumBnail" alt="">
        </div>
        <div class="salePoint">
            <p>{{good.title}}</p>
            <span>{{good.par}}</span> 
        </div>
        <div class="buy">
            <img src="https://pic.keede.com/event/2017hwg/app/20171229/icon_gwc.png" alt="">
        </div>
        </router-link>
    </li>
</ul>


</div>



</template>
<script>

export default {
data(){
    return{
        goods:[]
        
    }
},
      created(){
        this.$axios.get("/vue/goods",{
            params:{
                limit:9
            }
        }).then(res=>{
                console.log(res);
                    this.goods = res.data.result;
                    
            })
            
            
    },
}
</script>
<style scoped>
a{text-decoration: none;color: inherit;}
van-swipe{
    width: 100%;
    height: 3.6rem;
    background-color: #f00;
}
.lb{
    width: 100%;
    height: 3.6rem;
}

.list{
	width: 100%;
	overflow-y: hidden;
}
.list ul{
	padding-top: .19rem;
	display: flex;
	justify-content:space-around;
	border-bottom: 1px solid #aaa;
	flex-wrap:wrap;

}
.list ul li{
	width: 25%;
	padding-bottom: .15rem;
}
.list ul li a{
	display: flex;
	align-items:center;
	flex-direction:column;

}
.list ul li a i{
	width: 25%;
    height: .42rem;
    margin-bottom: .15rem;
}
.list ul li a i img{
	width: 100%;
	height: 100%;
}
.list ul li a span{
    line-height: .52rem;
    font-size: 80%;
}
.title1{
    padding: .5rem 0;
    text-align: center;
}
.title1 img{
    max-width: 25%;
    display: inline-block;
}


.item{

    width: 100%;
    overflow: hidden;
    border-top: 1px  #aaa solid;
     border-bottom: 1px solid #aaa;
   
}
.item ul{
    width: 100%;
     

}
.hor-view li {
    float: left;
    width: 25%;  
    background: #fafafa;
    text-align: center;
    background-color: #fff;
}
.hor-view li  img{
    width: 100%;
    height: 100%;
}
.title2{
    padding: .5rem 0;
    text-align: center;
    border-bottom: 1px solid #aaa;
}
.title2 img{
    max-width: 25%;
    display: inline-block;
}
.hor-view1{
    width: 100%;
    overflow: hidden;
}
.hor-view1 li{
    width: 33%;
    float: left;
    border-right: 1px solid #e5e5e5;
    border-top: 1px solid #e5e5e5;
    position: relative;
}
.hor-view1 li .hvImg {
    padding: 5px 0;
}
.hor-view1 li img {
    max-width: 99%;
}
.hor-view1 li .salePoint {
    text-align: left;
    color: #666666;
    padding-bottom: 10px;
    padding-left: 10px;
    width: calc(100% - 20px);
    padding-top: 4px;
    
}
.hor-view1 li .salePoint p {
    height: 42px;
    line-height: 20px;
    font-size: 14px;
    overflow: hidden;
}
.hor-view1 li .salePoint span {
    font-size: 18px;
    color: #e20a2d;
    line-height: 26px;
    text-align: left;
}
.hor-view1 li .buy {
    position: absolute;
    bottom: 15px;
    right: 10px;
    max-width: 14%;
}
</style>



