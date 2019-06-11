<template>
  <div>
    <Mhead :show="true" title="选择地址"></Mhead>
    <div class="addresslistbox">
      <van-address-list v-model="chosenAddressId" :list="list" @add="onAdd" @edit="onEdit"/>
    </div>
  </div>
</template>
<script>
import Mhead from "../components/mhead.vue";
export default {
  data() {
    return {
      chosenAddressId: [],
      list: []
    };
  },
  components: {
    Mhead
  },
  methods: {
    onAdd() {
      this.$router.push({ name: "editaddress" });
    },

    onEdit(item, index) {
      this.$router.push({ name: "updateAddress", query: { list: item } });
    }
  },
  mounted() {
    this.$axios.get("/vue/getaddress").then(res => {
      this.list = res.data.result;

      var arr = [];
      res.data.result.map((item, i) => {
        item.id = i;
        arr.push(item);
      });
      this.list = arr;
      console.log("777777777777")
      console.log(arr)
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].isDefault == true) {
          var id = this.list[i].id;
          var arrert = id;
        }
      }
      console.log(arrert);
      this.chosenAddressId = arrert;
    });
  }
};
</script>

<style lang="scss">
.addresslistbox {
  padding-top: 0.8rem;
}
</style>