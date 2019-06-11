<template>
  <div>
    <p class="now">当前地址</p>
    <div class="address" v-for="(address,index) in list" :key="index">
      <div class="contacts">
        <span>{{address.name}},</span>
        <span>{{address.tel}}</span>
      </div>
      <p class="detailed">{{address.address}}</p>
    </div>
    <van-submit-bar :price="payPrice*100" button-text="提交订单" @submit="onSubmit"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      active:3
    };
  },
  methods: {
    onSubmit() {
      // console.log("66666")
      this.$emit("onSubmit",this.active)   
    }
  },
  computed: {
    payPrice() {
      return window.localStorage.getItem("totalPrice");
    }
  },
  mounted() {
    this.$axios.get("/vue/dingdandizhi").then(res => {
      this.list = res.data.result;
    });
  }
};
</script>
<style lang="scss">
.now {
  margin: 0.2rem 0;
  font-size: 0.3rem;
  font-weight: 600;
  padding-left: 0.2rem;
}
.address {
  background-color: #fff;
  padding: 0.2rem 0.4rem;

  .contacts {
    line-height: 0.4rem;
    padding-left: 0.2rem;
  }
  .detailed {
    line-height: 0.6rem;
    color: #aaa;
    font-size: 0.24rem;
    padding-left: 0.2rem;
  }
}
</style>