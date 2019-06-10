<template>
  <div>
    <Header title="收货地址" :show="true"></Header>
    <Topkong></Topkong>
    <!-- 省市联动 -->
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-set-default
      :search-result="searchResult"
      @save="onSave"
      @change-detail="onChangeDetail"
    />
    <!-- 省市联动 -->
    <Buttonkong></Buttonkong>
  </div>
</template>

<script>
import Topkong from "../components/top-kong.vue";
import Buttonkong from "../components/button-kong.vue";
import address from "../utils/area.js";

export default {
  components: {
    Topkong,
    Buttonkong
  },
  data() {
    return {
      areaList: address,
      searchResult: []
    };
  },

  methods: {
    onSave(myaddress) {
      // console.log(myaddress);
      this.$axios
        .post("vue/addressList", {
          myaddress,
          username: localStorage.username
        })
        .then(res => {
          console.log(res);
          if (res.data.type == 1) {
            this.$router.push({name:"pay"});
          }
        });
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "洪山区",
            address: "江南新天地"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  }
};
</script>

