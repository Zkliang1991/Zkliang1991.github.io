<template>
  <div>
    <Head :show="true" title="新增地址"></Head>
    <van-address-edit
      class="addressEdit"
      :area-list="areaList"
      show-postal
      :show-delete="false"
      show-set-default
      show-search-result
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import city from "../utils/city";
export default {
  data() {
    return {
      areaList: city
      // searchResult: []
    };
  },
  methods: {
    onSave(data) {
      data.address =
        data.province + data.city + data.county + data.addressDetail;
      console.log(data);
      this.$axios.post("/vue/addresslist", data).then(res => {
        console.log(res.data);
      });
      this.$router.push({ name: "addresslist" });
    },
    onDelete() {
      //   Toast("delete");
    }
    // onChangeDetail(val) {
    //   if (val) {
    //     this.searchResult = [
    //       {
    //         name: "黄龙万科中心",
    //         address: "杭州市西湖区"
    //       }
    //     ];
    //   } else {
    //     this.searchResult = [];
    //   }
    // }
  }
};
</script>
<style lang="scss">
.addressEdit {
  padding-top: 0.8rem;
}
</style>