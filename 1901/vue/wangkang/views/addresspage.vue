<template>
  <div class="addresspage">
    <detailsHead title="选择地址"></detailsHead>
    <div class="step">
      <van-steps :active="active" active-icon="success" active-color="#38f">
        <van-step>提交订单</van-step>
        <van-step>添加联系人</van-step>
        <van-step>添加地址</van-step>
        <van-step>支付</van-step>
      </van-steps>
    </div>
    <van-address-list v-model="chosenAddressId" :list="list" @add="onAdd" @edit="onEdit"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 2,
      list: [],
      chosenAddressId: ""
    };
  },
  methods: {
    onAdd() {
      this.$router.push({ name: "address" });
    },

    onEdit(item, index) {
      Toast("编辑地址:" + index);
    }
  },
  mounted() {
    this.$axios.get("/vue/showAddress").then(res => {
      var arr = [];
      res.data.result.map((item, i) => {
        item.id = i;
        item.address =
          item.province + item.city + item.county + item.addressDetail;
        arr.push(item);
      });
      this.list = arr;
      console.log("222");
    });
  }
};
</script>
<style lang="scss" scoped>
.step {
  padding-top: 1rem;
  padding-bottom: 0.2rem;
}
</style>