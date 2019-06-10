<template>
    <div class="home">
        <Head></Head>
        <ul>
            <li>
                <img src="../images/1.gif" width="50" height="50">
                <p class="p1">苹果</p>
            </li>
            <li>
                <img src="../images/2.gif" width="50" height="50">
                <p class="p1">安卓</p>
            </li>
            <li>
                <img src="../images/3.gif" width="50" height="50">
                <p class="p1">智能手表</p>
            </li>
            <li>
                <img src="../images/4.gif" width="50" height="50">
                <p class="p1">平板</p>
            </li>
            <li>
                <img src="../images/5.gif" width="50" height="50">
                <p class="p1">笔记本</p>
            </li>
            <li>
                <img src="../images/6.gif" width="50" height="50">
                <p class="p1">配件</p>
            </li>
            <li>
                <img src="../images/7.gif" width="50" height="50">
                <p class="p1">手机回收</p>
            </li>
            <li>
                <img src="../images/8.gif" width="50" height="50">
                <p class="p1">9块9拼团</p>
            </li>
            <li>
                <img src="../images/9.gif" width="50" height="50">
                <p class="p1">1元秒杀</p>
            </li>
            <li>
                <img src="../images/10.gif" width="50" height="50">
                <p class="p1">图书</p>
            </li>
        </ul>

        <van-swipe :autoplay="2000" indicator-color="white" class="lunbo1">
            <van-swipe-item>
                <img src="../images/11.gif" class="img1">
            </van-swipe-item>
            <van-swipe-item>
                <img src="../images/12.gif" class="img1">
            </van-swipe-item>
            <van-swipe-item>
                <img src="../images/13.gif" class="img1">
            </van-swipe-item>
            <van-swipe-item>
                <img src="../images/14.gif" class="img1">
            </van-swipe-item>
        </van-swipe>
        <div class="top3">
            <img src="../images/22.gif" width="100%">
            <van-notice-bar
                text="让所长都欲罢不能的小红盒,到底什么来头?  荣耀20 DXO全球第二!五大自研新科技"
                left-icon="volume-o"
                background="#fff"
                color="red"
                />
            <img src="../images/23.gif" width="100%">
        </div>
    </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  // components: {
  //   HelloWorld,
  // },
  mounted(){
      this.$store.state.nTitle.title = "首页"; 
      this.$store.state.nActive.active=0;
  }
}
</script>

<style lang="scss" scoped>
    .btn1{
        width: 50px;
        height: 50px;
    }
    ul{
        display: flex;
        flex-wrap:wrap;
        justify-content:space-around;
        margin-top:16%;
	}
	ul li{
	   width: 20%;
       text-align: center;
	}
    .p1{
      margin:3% 0;
      font-size: 10px;
    }
    h5{
        margin: 0 0 0 3%;
    }
    .lunbo1{
      margin:10px auto;
      width: 100%;
      z-index: 20;
    }
    .img1{
        width: 100%;
    }
    .top3{
        margin-bottom: 50px;
        z-index: 100;
    }
</style>

