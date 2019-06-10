<template>
  <div>
      <mt-header title="我的地址" style="backgroundColor:red;height:.8rem">
          <mt-button icon="back" slot="left" @click="goback">返回</mt-button>
      </mt-header>
    <van-address-list
      v-if="checkLogin"
      style="marginBottom:1rem"
      v-model="chosenAddressId"
      :list="list"
      @add="onAdd"
      @edit="onEdit"
    />
    <div v-else class="nologin">您还没有登录,等登录后查看购物车</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkLogin: false,
      chosenAddressId: "1",
      list: []
    };
  },
  created() {
    if (window.sessionStorage.username) {
      this.$axios
        .get("/vue/mydz", {
          params: {
            username: window.sessionStorage.username
          }
        })
        .then(res => {
          this.list = res.data.result;
          this.list.forEach((item, index) => {
            item.id = index;
          });
          console.log(this.list);
        });
      this.checkLogin = true;
    } else {
         this.checkLogin = false;
    }
  },
  methods: {
    onAdd() {
      // Toast("新增地址");
      this.$router.push({ name: "addedit" });
    },
    onEdit(item, index) {
      // Toast("编辑地址:");
      this.$router.push({ name: "addedit", params: { data: item } });
    },
    goback(){
        this.$router.go(-1);
    }
  }
};
</script>
