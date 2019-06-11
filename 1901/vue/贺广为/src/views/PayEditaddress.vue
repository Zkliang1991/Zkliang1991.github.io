<template>
  <div>
    <AddressHead title="结算" :show="true"></AddressHead>
    <van-address-edit
      class="addressEdit"
      :area-list="areaList"
      show-postal
      :show-delete="false"
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import city from "../utils/city";
import AddressHead from "../components/addressHead"
export default {
  data() {
    return {
      areaList: city,
      searchResult: []
    };
  },
components:{
  AddressHead
},
  methods: {
    onSave(data) {
      var istrue = data.isDefault;
      if (istrue == true) {
        this.$axios.post("/vue/istrue").then(res => {
          // if (res.data.code == 200) {
            data.address =
              data.province + data.city + data.county + data.addressDetail;
            console.log(data);
            this.$axios.post("/vue/addresslist", data).then(res => {
              console.log(res.data);
            });
          // }
        });
      } else {
        data.address =
          data.province + data.city + data.county + data.addressDetail;
        console.log(data);
        this.$axios.post("/vue/addresslist", data).then(res => {
          console.log(res.data);
        });
      }
      this.$router.push({name:'payfor',params:{active:1}})
    },
    onDelete() {
      //   Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  }
};
</script>
<style lang="scss">
.addressEdit {
  padding-top: 0.8rem;
}
</style>