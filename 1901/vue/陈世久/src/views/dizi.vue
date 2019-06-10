<template>
	<div>
		<div>
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
	</div>
</template>
<script>
	import areaList from "../utils/liando.js";
export default {
  data() {
    return {
      areaList,
      searchResult: []
    }
  },

  methods: {
    onSave() {
     alert("暂无此功能")
	  
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name:"",
          address: ''
        }];
      } else {
        this.searchResult = [];
      }
    }
  }
}
</script>