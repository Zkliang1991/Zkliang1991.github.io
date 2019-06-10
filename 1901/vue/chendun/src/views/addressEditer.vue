<template>
  <div>
    <Head title="修改收货地址" :show="true"></Head>
    <van-address-edit
      :area-list="areaList"
      :address-info="data"
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
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      data: this.$route.query.item,
      areaList: address,
      searchResult: []
    };
  },
  methods: {
    onSave(data) {
      var istrue = data.isDefault;
      var id = data._id;
      // console.log(istrue);
      if (istrue == true) {
        // console.log(istrue)
        this.$axios.post("/vue/upisDefault").then(res => {
          if (res.data.code == 200) {
            var str =
              data.province + data.city + data.county + data.addressDetail;
            data.address = str;
            this.$axios.post("/vue/updateAddress", { data }).then(res => {
              if (res.data.code == 200) {
                this.$router.push({ name: "addressList" });
              }
            });
          }
        });
      } else {
        var str = data.province + data.city + data.county + data.addressDetail;
        data.address = str;
        this.$axios.post("/vue/updateAddress", { data }).then(res => {
          if (res.data.code == 200) {
            this.$router.push({ name: "addressList" });
          }
        });
      }
      // console.log(data);
    },
    onDelete(data) {
      this.$axios
        .post("/vue/delete", {
          data
        })
        .then(res => {
          // console.log(res);
          if (res.data.code == 200) {
            this.$router.push({ name: "addressList" });
          }
        });
      // Toast("delete");
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
  },
  computed: {
    ...mapState(["list"])
  }
};
</script>