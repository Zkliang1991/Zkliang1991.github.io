<template>
<div>
    <van-address-list
  v-model="chosenAddressId"
  :list="gtdizhi"
  @add="onAdd"
  @edit="onEdit"
/>
</div>

</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
     data() {
    return {
      chosenAddressId: '1',
      list: [
        
      ],

    }
  },
  computed:{
    ...mapState(["gtdizhi"])
  },

  methods: {
    onAdd() {
      this.$router.push({name:'dizhi'})
    },

    onEdit(item, index) {
      console.log(item)
      
      
      this.$router.push({name:'dizhialter',params:{item}});
    },
    ...mapActions(["getdizhi"])
  },
  created() {
    this.getdizhi({ url: "/vue/getdizhi" });
  },
  mounted(){
    // this.list=this.gtdizhi
  }
  
}
</script>

