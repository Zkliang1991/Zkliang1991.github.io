

<template>
  <div>
    <Head title="收货地址" :show="true" style="background-color:red"></Head>
    <div class="address">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        @add="onAdd"
        @edit="onEdit"
        @select="OnSelect"
        switchable
        is-saving="true"
      />
    </div>
  </div>
</template>

<script>
import { Toast, AddressList } from "vant";
export default {
  data() {
    return {
      list: [],
      chosenAddressId: "1",
      disabledList: []
    };
  },
  methods: {
    onAdd() {
      Toast("新增地址");
      this.$router.push({ name: "address" });
    },
    onEdit(item, index) {
      // Toast("编辑地址:" + index);

      let addressInfo = item;
      // addressInfo.flag = 0;
      // console.log(addressInfo);
      this.$router.push({ name: "address", params: addressInfo });
    },
    OnSelect(item, index) {
      // console.log(index);
      // console.log(item);
      this.$store.state.selectAddress = item;
      console.log(this.$store.state.selectAddress);
      console.log(item.name);
    }
  },
  mounted() {
    console.log(this.$store.state.username);
    this.$axios
      .post("/vue/getAddList", { username: this.$store.state.username })
      .then(res => {
        console.log(res.data);
        this.list = res.data.result;
        // this.chosenAddressId = this.list[0]._id;
      });
  }
};
</script>

<style lang="scss" scoped>
.address {
  width: 100%;
  margin-top: 45px;
}
</style>