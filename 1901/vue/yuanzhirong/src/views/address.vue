

<template>
  <div>
    <Head title="新增收货地址" :show="true" style="background-color:red"></Head>
    <div class="address">
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :addressInfo="addressInfo"
        :search-result="searchResult"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />
    </div>
  </div>
</template>

<script>
import Area from "@/assets/area.js";
import { Toast, AddressList, AddressEdit } from "vant";
export default {
  data() {
    return {
      areaList: Area,
      addressInfo: [],
      searchResult: [],
      length:0,
    };
  },

  methods: {
    onSave(data) {
      // Toast("save");
      console.log(data);
      data.username = this.$store.state.username;
      data.id = this.length+1;
      console.log("data.id" + data.id);
      if (data.province == data.city) {
        data.address = data.province + data.county + data.addressDetail;
      } else {
        data.address =
          data.province + data.city + data.county + data.addressDetail;
      }
      this.$axios.post("/vue/addlist", data).then(res => {
        this.$router.push({ name: "addresslist" });
      });
    },
    onDelete(data) {
      // Toast("delete");
      console.log(data);
      this.$axios.get("/vue/deleteAddress", { params: data }).then(res => {
        this.$router.push({ name: "addresslist" });
      });
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
  },
  mounted() {
    console.log(this.$route.params);
    this.addressInfo = this.$route.params;
    console.log(this.addressInfo);

    //根据长度 修改 id
    this.$axios.post("/vue/getAddList",{username:this.$store.state.username}).then(res=>{
      this.length = res.data.result.length;
    })
  }
};
</script>

<style lang="scss" scoped>
.address {
  width: 100%;
  margin-top: 45px;
}
</style>

