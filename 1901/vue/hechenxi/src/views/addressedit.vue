<template>
  <div>
    <Head title="编辑地址" :show="true"></Head>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      @save="onSave($event)"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>
<script>
import { Toast } from "vant";
import address from "../assets/adress.js";
export default {
  data() {
    return {
      areaList: address,
      myaddress: {}
    };
  },

  methods: {
    onSave(e) {
      Toast("save");
      console.log(e);
      this.myaddress = e;
      console.log((this.myaddress.city));
      this.$axios.post('/vue/addAddress',this.myaddress).then(res=>{

      })
    },
    onDelete() {
      Toast("delete");
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
