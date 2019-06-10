<template>
  <div v-if="show">
    <Head :title="$route.query.name" :show="true" back="返回"></Head>
    <van-row>
      <van-col span="7" class="move">
        <div class="img">
          <img :src="good.images">
        </div>
      </van-col>
      <van-col span="17" class="move">
        <div class="name">{{good.title}}</div>
        <div class="author">{{good.author}}</div>
        <div class="desc">
          <span class="kind">{{good.kind}}</span>
          <span class="zhangjie">{{good.chapternums}}</span>
        </div>
        <i class="iconfont icon-aixin"></i>
      </van-col>
    </van-row>
    <div class="content">
      <span>内容介绍:</span>
      <span>{{good.desc}}</span>
    </div>
    <div class="biaoqian">
      <span>{{good.kind}}</span>
    </div>
    <div class="comment">
      <h3>评论</h3>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-for="item in list" :key="item" :title="item"/>
      </van-list>
    </div>
    <van-goods-action>
      <van-goods-action-mini-btn icon="newspaper-o" @click="myBook">我的书架</van-goods-action-mini-btn>
      <van-goods-action-big-btn type="danger" @click="addMyBook">加入书架</van-goods-action-big-btn>
    </van-goods-action>
  </div>
</template>


<script>
import { Dialog } from "vant";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      goodId: this.$route.params.goodId,
      good: {},
      show: false,
      list: [
        "谢谢大大的支持~祝大大早日封神~我这愿望肯定会实现！",
        "深夜签到。为老友家佳作加油！",
        "《一剑长生》新书给大大签到啦，大作已收~"
      ],
      loading: false,
      finished: false
    };
  },
  mounted() {
    this.$axios
      .get("/vue/getGoodOne", {
        params: {
          goodId: this.goodId
        }
      })
      .then(res => {
        this.good = res.data.result;
        this.show = true;
      });
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        this.loading = false;
        if (this.list.length >= 3) {
          this.finished = true;
        }
      }, 500);
    },
    myBook() {
      var userInfo = window.sessionStorage.userInfo;
      if (userInfo) {
        this.$router.push({ name: "cart" });
      } else {
        Dialog.confirm({
          title: "消息提示",
          message: "您还没有登录，请登录"
        })
          .then(() => {
            this.$router.push({ name: "login" });
          })
          .catch(() => {
            // on cancel
          });
      }
    },
    addMyBook() {
      var userInfo = window.sessionStorage.userInfo;
      if (userInfo) {
        this.$axios
          .post("/vue/addMyBook", {
            goodId: this.goodId,
            good: JSON.stringify(this.good)
          })
          .then(res => {
            console.log(res.data);
          });
      } else {
        Dialog.confirm({
          title: "消息提示",
          message: "您还没有登录，请登录"
        })
          .then(() => {
            this.$router.push({ name: "login" });
          })
          .catch(() => {
            // on cancel
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.van-row {
  background-color: #fff;
}
.van-col--17 {
  position: relative;
}
.icon-aixin {
  position: absolute;
  right: 0.2rem;
  top: 0.9rem;
  font-size: 0.6rem;
}
.img img {
  width: 70%;
  margin-top: 0.825rem;
  margin-left: 20%;
}
.name {
  margin-top: 0.9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.3rem;
  margin-left: 0.1rem;
}
.author {
  margin-top: 0.4rem;
  color: #999;
  margin-left: 0.1rem;
}
.desc {
  margin-top: 0.4rem;
  color: #999;
  margin-left: 0.1rem;
}
.zhangjie {
  margin-left: 0.2rem;
}
.content {
  padding: 0.4rem;
  line-height: 0.4rem;
  background-color: #fff;
  color: #999;
  font-size: 14px;
}
.comment{
  margin-bottom: 50px;
}
.comment h3 {
  font-weight: bold;
  padding-left: 0.3rem;
  padding-top: 0.3rem;
  font-size: 0.4rem;
  border-top: 1px solid #999;
}
.content span:nth-child(1) {
  color: black;
}
.biaoqian {
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  margin-bottom: 0.2rem;
}
.biaoqian span {
  border: 1px solid #666;
  border-radius: 1rem;
  padding: 0.1rem;
}
</style>
