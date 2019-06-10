<template>
    <div>
      <Head title="添加地址" :show="true"></Head>
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
import address from '../utils/city.js';
import { Toast } from 'vant';
export default {
  data() {
    return {
      areaList:address,
      searchResult: [],
    }
  },
  methods: {
    onSave(data) {
      this.$axios.post("/vue/address",{
        goodsusername:localStorage.username,
        data
        }).then(res=>{
          // this.goods = res.data.result;
          this.$router.push({name:"jiesuan"})
        })
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      // if (val) {
      //   this.searchResult = [{
      //     name: '黄龙万科中心',
      //     address: '杭州市西湖区'
      //   }];
      // } else {
      //   this.searchResult = [];
      // }
    }
  },
  mounted() {
    document.getElementsByClassName("van-nav-bar__right")[0].style.display="none";
  }
}
</script>
