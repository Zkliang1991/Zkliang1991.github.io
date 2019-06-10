<template>
  <div>
    <!-- <Head title="我的书架"></Head> -->
    <div v-if="show">
      <van-swipe :autoplay="3000" class="move">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" class="img3">
        </van-swipe-item>
      </van-swipe>
      <div class="denglu move3">
        <van-button round type="default" @click="login">登录</van-button>
        <van-button round type="default" @click="register">注册</van-button>
      </div>
    </div>

    <div v-if="show2" class="move">
      <Head title="我的书架"></Head>
      <ul class="ul">
        <li class="xiaoshuo" v-for="(good,i) in goodsInfo.goods" :key="i">
          <van-swipe-cell :right-width="90">
            <van-row type="flex" justify="center">
              <van-col span="6">
                <div class="img">
                  <img :src="good.good.images" alt>
                </div>
              </van-col>
              <van-col span="16">
                <div class="name">{{good.good.title}}</div>
                <div class="content sl-2">{{good.good.desc}}</div>
                <p class="zuozhe">
                  <i class="iconfont icon-icon7"></i>
                  <span>{{good.good.author}}</span>
                  <span>{{good.good.chapternums}}</span>
                </p>
              </van-col>
            </van-row>
            <van-button
              square
              slot="right"
              type="danger"
              @click="shanchu({goodId:good.goodId,index:i})"
              text="删除"
            />
          </van-swipe-cell>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { mapState, mapActions, mapMutations } from "vuex";
import { Dialog } from "vant";
export default {
  computed: {
    ...mapState(["goodsInfo"])
  },
  data() {
    return {
      images: [
        require("@/assets/images/timg6.jpeg"),
        require("@/assets/images/timg7.jpg"),
        require("@/assets/images/timg9.png")
      ],
      show: true,
      show2: false
      // list: [
      //   {
      //     title: "至尊特工",
      //     images:
      //       "http://image.book.easou.com/i/chargebook/easou_cp_1/3/8989516603521503/2.jpg",
      //     desc:
      //       "【爆款新书】千古隐门，一脉单传。秦阳16岁被师傅丢入龙组，19岁便成为了龙组的传说，为弥补师傅的遗憾，他踏入了中海大学的校门，开启了另一段传说……",
      //     author: "8难",
      //     chapternums: "1832章"
      //   }
      // ]
    };
  },
  methods: {
    // shanchu(goodId) {
    //   this.$axios
    //     .get("/vue/deleteById", {
    //       params: {
    //         goodId: goodId
    //       }
    //     })
    //     .then(res => {
    //       // commit("shanchu",res)
    //       console.log(res.data);
    //     });
    // },
    login() {
      this.$router.push({ name: "login" });
    },
    register() {
      this.$router.push({ name: "register" });
    },
    shanchu(index) {
      Dialog.confirm({
        title: "消息提示",
        message: "确定删除吗?"
      })
        .then(() => {
          this.$store.dispatch("shanchu",index)
        })
        .catch(() => {
          // on cancel
        });
    },
    ...mapActions(["myshoppingcar"])
  },
  mounted() {
    var userInfo = window.sessionStorage.userInfo;
    console.log(userInfo);
    if (userInfo) {
      this.myshoppingcar({
        url: "/vue/myshoppingcar",
        cb: () => {
          this.show = false;
          this.show2 = true;
        }
      });
    } else {
      Toast.fail({ message: "还没有登录请登录", duration: 1000 });
    }
  }
};
</script>

<style lang="scss" scoped>
.img3 {
  width: 100%;
  opacity: 0.8;
  height: 100%;
}
.denglu {
  position: absolute;
  left: 30%;
  top: 43%;
}
.van-button {
  padding: 0 20px;
  margin-left: 10px;
}
.xiaoshuo {
  padding: 0.4rem 0;
}
.img img {
  width: 90%;
  margin-left: 10%;
}
.name {
  font-size: 0.3rem;
  margin-left: 0.2rem;
  color: #3f3f3f;
}
.content {
  color: #666666;
  margin-left: 0.2rem;
  font-size: 12px;
  padding-top: 0.2rem;
}
.sl-2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.zuozhe {
  margin-left: 0.2rem;
  margin-top: 0.3rem;
  color: #666666;
  font-size: 12px;
  position: relative;
}
.icon-icon7 {
  color: crimson;
}
.zuozhe span:nth-child(2) {
  margin-left: 0.1rem;
}
.zuozhe span:nth-child(3) {
  position: absolute;
  border: 1px solid #a3cba2;
  border-radius: 0.1rem;
  padding: 1px;
  color: #a3cba2;
  bottom: 0;
  right: 0;
}
.van-button--danger {
  height: 120px;
}
.ul {
  margin-bottom: 50px;
}
</style>
