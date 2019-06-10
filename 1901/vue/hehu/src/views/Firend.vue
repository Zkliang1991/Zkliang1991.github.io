<template>
  <div>
    <el-card>
      <div slot="header" class="clearfix">
        <span>{{msg}}</span>
        <el-button
          style="float: right; padding: 3px 3px"
          type="success"
          icon="el-icon-user-solid"
          @click="goLogin"
          v-if="isLogin"
        >登录</el-button>
        <el-button
          style="float: right; padding: 3px 3px"
          type="danger"
          icon="el-icon-user-solid"
          @click="unLogin"
          v-else
        >注销</el-button>
      </div>
      <div>
        <el-carousel :interval="2000" height="4rem" autoplay direction="vertical">
          <el-carousel-item v-for="(item,i) in listBanner.list" :key="i">
            <el-image :src="item.cover" fit="fit"></el-image>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-card>
    <list :list="list"></list>
  </div>
</template>

<script>
import list from "@/components/list.vue";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      isLogin: true,
      msg: "",
      list: []
    };
  },
  methods: {
    ...mapActions(["getListBanner"]),
    goLogin() {
      this.$router.push({ name: "person" });
    },
    unLogin() {
      sessionStorage.removeItem("userInfo");
      window.location.reload();
    }
  },
  computed: {
    ...mapState(["listBanner"])
  },
  mounted() {
    if (sessionStorage.userInfo) {
      this.msg = localStorage.username;
      this.isLogin = false;
      var username = localStorage.username;
      this.$axios.get("/vue/getmusic", { params: { username } }).then(res => {
        this.list = res.data.result;
      });
    } else {
      this.msg = "您还未登录!";
      this.isLogin = true;
    }
    this.getListBanner({ url: "https://v1.itooi.cn/netease/mv/top" });
  },
  components: {
    list
  }
};
</script>
<style scoped>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
}
</style>
