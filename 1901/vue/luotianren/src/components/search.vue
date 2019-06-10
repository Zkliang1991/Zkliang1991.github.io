<template>
  <div>
    <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round">
    </van-search>
    <van-list>
      <van-cell v-for="(item,i) in list" :key="i">
         <router-link :to="{name:'details',params:{detailsId:item._id},query:{name:item.name}}">
        <img :src="item.img" alt>
        名字:{{item.name}}
        价格:{{item.price}}
        件数:{{item.discount}}
         </router-link>  
      </van-cell>
    </van-list>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    onSearch(data) {
    }
  },


  computed: {
    value: {
      get() {},
      set(val) {
        this.$axios
          .get("/vue/getGoodList", {
            params: {
              keyword: val
            }
          })
          .then(res => {
            this.list = res.data.result;
            console.log(this.list);
            this.flag = true;
          });
      }
    }
  }
};
</script>