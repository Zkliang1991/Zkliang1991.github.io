<template>
  <div>
    <Head title="添加收货地址" :show="true"></Head>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
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
import address from "../utils/area";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      data: this.$route.params.data,
      areaList: address,
      searchResult: []
    };
  },

  methods: {
    onSave(data) {
      console.log(data);
      var istrue = data.isDefault;
      // console.log(istrue);
      if (istrue == true) {
        // console.log(istrue)
        this.$axios.post("/vue/upisDefault").then(res => {
          if (res.data.code == 200) {
            var dizhi =
              data.province + data.city + data.county + data.addressDetail;
            data.address = dizhi;
            var username = window.localStorage.getItem("loginname");
            data.username = username;
            this.$axios.post("/vue/addRess", { data }).then(res => {
              if (res.data.code == 200) {
                this.$router.push({ name: "addressList" });
              }
            });
          }
        });
      } else {
        var dizhi =
          data.province + data.city + data.county + data.addressDetail;
        data.address = dizhi;
        var username = window.localStorage.getItem("loginname");
        data.username = username;
        this.$axios.post("/vue/addRess", { data }).then(res => {
          if (res.data.code == 200) {
            this.$router.push({ name: "addressList" });
          }
        });
      }
    },
    onDelete() {
      // Toast("delete");
      this.$router.go(-1);
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "万科城花暻苑",
            address: "武汉市洪山区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  },
  mounted() {
    // console.log(this.data);
  }
};
</script>