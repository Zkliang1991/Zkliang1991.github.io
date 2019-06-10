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
		addressInfo:{name:this.$store.state.adress[this.$store.state.adressid].name,tel:this.$store.state.adress[this.$store.state.adressid].tel,addressDetail:this.$store.state.adress[this.$store.state.adressid].address},
		areaList,	 
		searchResult: []
    }
  },

  methods: {
    onSave(content) {
	console.log(content);
	this.$store.commit('xgAdress',content);
	console.log(this.$store.state.adress);
    this.$toast('save');
    },
    onDelete(content) {
      this.$toast('delete');
			for (var i in content){
				content[i]="";
			}
    },
    onChangeDetail(val) {
      if (val) {
		 console.log(val)
        this.searchResult[0].name=val;
          
        
      } else {
        this.searchResult[0].name ="";
      }
    },
	onChangearea(val) {
		console.log(this)
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
