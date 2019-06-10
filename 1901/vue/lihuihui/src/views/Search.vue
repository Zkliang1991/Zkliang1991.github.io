<template>
<div>
      <div class='clearfix searchbox'>
            <div></div>
            <mt-button icon="back" class='seachBack'  @click="goback"></mt-button>
         
      <van-search class="searchInput"
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />

            <!-- <mt-search class="searchInput"
         
            cancel-text="取消"
            placeholder="搜索"
            @input='tochange'
            >
            </mt-search> -->
    </div>

    <List :goods="goods" class='content'></List>
</div>
  

</template>
<script>
import List from "../components/List";
import { DropdownMenu, DropdownItem } from "vant";
export default {
  data() {
    return {
      value: "",
      goods: []
    };
  },
  components: {
    List
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    onSearch() {
      this.$axios
        .get("/vue/searchGoods", {
          params: {
            keyword: this.value
          }
        })
        .then(res => {
          console.log(res)
          if (res.data.result.length > 0) {
            this.goods = res.data.result;
            if (localStorage.searchInfo) {
              console.log("我成功ing了");
              var arr2 = JSON.parse(localStorage.searchInfo);         
              for (var i = 0; i < arr2.length; i++) {
                if (arr2.indexOf(this.value)==-1) {
                  arr2.push(this.value);
                }
              }
              localStorage.searchInfo = JSON.stringify(arr2);
            } else {
              var arr = [];
              arr.push(this.value);
              console.log(arr);
              localStorage.searchInfo = JSON.stringify(arr);
            }
          }
        });
    },
    onCancel() {
      console.log(111);
    }
  },
  created() {
    console.log("存储的东西" + localStorage.searchInfo);
  },
  updated() {
    console.log("存储的东西" + localStorage.searchInfo);
  }
};
</script>

<style lang="scss" scope>
.searchbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  $height: 1.04rem;
  height: $height;
  background: #fff;
  border-bottom: 1px solid #ccc;
  .seachBack {
    float: left;
    height: $height;
    background: none;
    border: none;
  }
  .searchInput {
    float: right;
    width: 85%;
    height: $height;
    .mint-search-list {
      top: 1.04rem;
    }
    .mint-searchbar-inner {
      border-radius: 0.2rem;
    }
    .mint-searchbar {
      background: none;
      padding-left: 0;
      i {
        padding: 0.1rem;
        margin-top: 0.1rem;
      }
    }
  }
  .mint-button--default {
    -webkit-box-shadow: 0 0 0 #b8bbbf;
    box-shadow: 0 0 0#b8bbbf;
  }
}
</style>
