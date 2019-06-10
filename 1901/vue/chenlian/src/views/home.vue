<template>
  <div class="home">
    <div class="header-top">
    <Head title="首页" :show="true" :searchShow="true" :v-if="true"></Head>
    </div>
    <div>
      
      <!-- <h3>我是首页</h3> -->
      <!-- v-model="value" -->
      
      <van-search @click="tosearch"      
        placeholder="在千万海外商品中搜索"
        clearable
        input-align="left"
        left-icon="search"
        class="swiper newsearch"
      >
        <div slot="action">搜索</div>
        
      </van-search>
    </div>
    <div class="banner">
      <van-swipe :autoplay="3000" ouchable indicator-color="white">
        <van-swipe-item v-for="(banner,i) in banners" :key="i">
          <img :src="banner.url" alt class="bannerimg">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="iconmenu">
      <ul class="ticon" v-for="(menu,i) in hmenu" :key="i">
        <img :src="menu.himg" :alt="menu.htitle" class="hmenuimg">
      </ul>
    </div>
    <div>
      <!-- <van-list v-model="loading" :finished="finished" finished-text="没有更多了">
        <van-cell v-for="item in list" :key="item" :title="item"/>
      </van-list> -->
    </div>


    <Foot :show="true"></Foot>
    
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      banners: [
        {
          title: "澳佳宝",
          url:
            "https://haitao.nosdn1.127.net/1bekvnlu694_960_480.jpg?imageView&thumbnail=540x270&quality=90"
        },
        {
          title: "蝶翠诗",
          url:
            "https://haitao.nosdn1.127.net/ibwx8fdh99.jpg?imageView&thumbnail=540x270&quality=90"
        },
        {
          title: "丰鲜汇",
          url:
            "https://haitao.nosdn2.127.net/1d4pchrqj72_960_480.jpg?imageView&thumbnail=540x270&quality=90"
        },
        {
          title: "阿迪达斯",
          url:
            "https://haitao.nos.netease.com/1bto406pa5_960_480.jpg?imageView&thumbnail=540x270&quality=90"
        },
        {
          title: "戴森",
          url:
            "https://haitao.nosdn2.127.net/idk096pc12.jpg?imageView&thumbnail=540x270&quality=90"
        },
        {
          title: "蒂芙尼",
          url:
            "https://haitao.nosdn1.127.net/iy15lsa38_960_480.jpg?imageView&thumbnail=540x270&quality=90"
        },
        {
          title: "科勒",
          url:
            "https://haitao.nosdn2.127.net/1ck7itpk654_960_480.jpg?imageView&thumbnail=540x270&quality=90"
        }
      ],
      hmenu: [
        {
          himg:
            "https://haitao.nos.netease.com/872c08ef-81a2-46f9-9d0e-c421ea4ce5b1T1904151709_192_220.png?imageView&thumbnail=192x220&quality=95",
          htitle: "超值拼团"
        },
        {
          himg:
            "https://haitao.nos.netease.com/46b07f38-3a1f-4deb-b3a0-334fedac0f91T1904081244_192_220.png?imageView&thumbnail=192x220&quality=95",
          htitle: "居家生活"
        },
        {
          himg:
            "https://haitao.nos.netease.com/2da422e3-d27f-4e46-988e-9bfecc217c43T1905311344_192_220.png?imageView&thumbnail=192x220&quality=95",
          htitle: "服饰馆"
        },
        {
          himg:
            "https://haitao.nosdn2.127.net/c570a45a-9201-473e-981e-b04e06accd4bT1901311201_192_220.png?imageView&thumbnail=192x220&quality=95",
          htitle: "生活体验站"
        },
        {
          himg:
            "https://haitao.nosdn2.127.net/ba7064d2-37e7-4505-b3fd-93602df85b25T1902210142_192_220.png?imageView&thumbnail=192x220&quality=95",
          htitle: "数码家电"
        },
        {
          himg:
            "https://haitao.nosdn1.127.net/6fda8597-05b3-440b-9010-894f60da162dT1905051611_192_220.png?imageView&thumbnail=192x220&quality=95",
          htitle: "a"
        },
        {
          himg:
            "https://haitao.nosdn2.127.net/ac26a5e3-9639-4141-9677-9019f557810fT1905051620_192_220.png?imageView&thumbnail=192x220&quality=95",
          htitle: "a"
        },
        {
          himg:
            "https://haitao.nos.netease.com/b6288867-fb62-4334-82df-8fab672f6e06T1903081458_192_220.png?imageView&thumbnail=192x220&quality=95",
          htitle: "a"
        },
        {
          himg:
            "https://haitao.nosdn2.127.net/97153c90-1aff-4d65-a145-59dfd703fa24T1905081526_192_220.png?imageView&thumbnail=192x220&quality=95",
          htitle: "a"
        },
        {
          himg:
            "https://haitao.nos.netease.com/52e5016f-685f-4a79-bb07-bc67cdebef05T1901311205_192_220.png?imageView&thumbnail=192x220&quality=95",
          htitle: "a"
        }
      ]
    };
  },
  methods:{
    tosearch(){
      this.$router.push({name:'search'})
    }
  }
};
</script>

<style lang="scss" scoped>
.van-nav-bar__title {
  margin: 0 auto;
  max-width: 60%;
  color: #636363;
  font-size: 0.9rem;
  font-weight: 500;
  font-family: "宋体";
  font-weight: 500;
}
.van-nav-bar .van-icon {
  color: #6d6f72;
  font-size: 1.2rem;
  vertical-align: middle;
}
.van-icon-search:before {
  content: "\F0A9";
  color: #6d6f72;
  font-size: 1.2rem;
  vertical-align: middle;
}
.van-icon-arrow-left:before {
  color: #6d6f72;
  font-size: 1.2rem;
  vertical-align: middle;
}
.banner {
  width: 100%;
  height: 10rem;
  background: greenyellow;
}
.newsearch {
  width: 100%;
  background: red;
}
.bannerimg {
  width: 100%;
  height: 10rem;
}
.van-search {
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0.5rem 0.5rem;
}
.van-search__content {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  border-radius: 2px;
  padding-left: 10px;
  border-radius: 1rem;
  height: 2rem;
  width: 95%;
}

.iconmenu {
  width: 100%;
  height: 20rem;
}
ul.ticon {
  width: 20%;
  float: left;
}
img.hmenuimg {
  width: 100%;
  height: auto;
}
.iconmenu[data-v-7eb2bc79] {
  width: 100%;
  height: auto;
  padding: 1rem 0rem 1rem;
}
</style>

