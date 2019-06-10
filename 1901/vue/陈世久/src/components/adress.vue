<template>
	<div>
		<van-popup v-model="show" position="top" :overlay="true">
		<Addadress></Addadress>
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
	export default {
components: {
		Addadress,	
		},
  data() {
    return {
			show:false,
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
      Toast('编辑地址:' + index);
    },	
  },
	
}
</script>

<style>
</style>
