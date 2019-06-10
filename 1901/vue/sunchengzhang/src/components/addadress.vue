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
	@focus="focus"
/>
</template>

<script>
	import store from "@/store";
	import areaList from "../utils/liando.js";
	export default {
  data() {
    return {
		value:"",
		addressInfo:{name:localStorage.username,tel:""},
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
    onDelete(content) {
      this.$toast('delete');
			console.log(content);
			for (var i in content){
				content[i]="";
			}

			
    },
    onChangeDetail(val) {
      if (val) {
		 console.log(val)
        this.searchResult[0].name=val;
          
        
      } else {
        this.searchResult[0].name="";
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
	focus(key){
		console.log(key)
	},
  }
}
</script>

<style>
</style>
