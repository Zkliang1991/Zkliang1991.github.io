<template>
	<div>
		<van-popup v-model="show" position="top" :overlay="true">
		<Addadress></Addadress>
		</van-popup>
		<van-popup v-model="show1" position="top" :overlay="true">
		<Xgadress></Xgadress>
		</van-popup>
	<van-address-list
  v-model="chosenAddressId"
  :list="list"
  :disabled-list="disabledList"
  disabled-text="以下地址超出配送范围"
  @add="onAdd"
  @edit="onEdit"
/>
</div>
</template>

<script>
	import Addadress from "./addadress.vue"
	import Xgadress from "./xgadress.vue"
	export default {
components: {
		Addadress,
			Xgadress,
		},
  data() {
    return {
			show:false,
			show1:false,
      chosenAddressId: '1',
      list: this.$store.state.adress,
      disabledList: [
        
      ]
    }
  },

  methods: {
    onAdd() {
      this.show=true
    },

    onEdit(item, index) {
      this.show1=true;
			this.$store.commit('xgAid',index);
    },	
  },
	
}
</script>

<style>
</style>
