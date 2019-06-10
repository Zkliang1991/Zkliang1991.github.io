<template>
    <div>
        <Head title="添加收货信息" :show="!!1"></Head>
        <van-address-edit 
        id='locationInfo'
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
    import { AddressEdit } from 'vant';
    import address from '../utils/area.js';
  // 引入省市区三级联动js文件
export default {
  data() {
    return {
      // 添加地址
      areaList:address,
      searchResult: []
    }
  },

  methods: {
    onSave(content) {
      console.log(content);
        var username = localStorage.username;
      this.$axios.post('/vue/location',{
        username,
        content,
      }).then(res=>{
        this.$router.push({name:'account'});
      })
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    }
  }
}
</script>

<style scoped>
    .van-address-edit{
        margin-top: 0.3rem;
    }

</style>

