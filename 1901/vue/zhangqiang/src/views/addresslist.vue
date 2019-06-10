<template>
  <div>
    <Head :show="true" title="选择地址"></Head>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      @add="onAdd"
      @edit="onEdit"
      class="addresslist"
    />
  </div>
</template>
<script>
import store from "@/store";
import { mapState, mapActions, mapMutations } from "vuex";
import { Dialog } from "vant";
export default {
  data() {
    return {
      chosenAddressId: [],
      list: []
    };
  },
  methods: {
    onAdd() {
      this.$router.push({ name: "editaddress" });
    },

    onEdit(item, index) {
      this.$router.push({ name: "updateAddress",query:{list:item}});
    }
  },
  mounted() {
    this.$axios.get("/vue/getaddress").then(res => {
      console.log(res.data.result);
      this.list = res.data.result;

      var arr = [];
      res.data.result.map((item, i) => {
        item.id = i;
        arr.push(item);
      });
      this.list = arr;
      var defaults = this.list.filter((item, index) => {
        return item.isDefault == true;
      });
      this.chosenAddressId = defaults[0].id;
    });
  }
};
</script>

<style lang="scss">
.addresslist {
  padding-top: 0.8rem;
}
</style>