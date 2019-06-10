<template>
	<van-address-edit
  :area-list="areaList" 
	v-model="addressInfo"
  :address-info="addressInfo"
  show-postal
  show-delete
  show-set-default
  show-search-result
  :search-result="searchResult"
  @save="onSave"
  @delete="onDelete"
  @change-detail="onChangeDetail"
  @change-area="onChangearea"
/>
</template>

<script>
	import store from "@/store";
	import areaList from "../utils/liando.js";
	export default {
  data() {
    return {
		value:"",
		addressInfo:{name:localStorage.username,tel:"15676543215"},
		areaList,	 
		searchResult: []
    }
  },

  methods: {
    onSave(content) {
	console.log(content);
	this.$store.commit('changeAdress',content);
	console.log(this.$store.state.adress);
    this.$toast('save');
    },
    onDelete() {
      this.$toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
		 console.log(val)
        this.searchResult[0].name=val;
          
        
      } else {
        this.searchResult = [];
      }
    },
	onChangearea(val) {
	  if (val) {
		 console.log(val)
	    this.searchResult = [{
	      
	      address: val[0].name+val[1].name+val[2].name,
	    }];
	  } else {
	    this.searchResult = [];
	  }
	},
  }
}
</script>

<style>
</style>
