<template>
<div>
    <Head title="地址列表" :flag="true"></Head>
    <van-address-list
  v-model="chosenAddressId"
  :list="gtdizhi"
  :disabled-list="disabledList"
  disabled-text="以下地址超出配送范围"
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
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号'
        }
      ]
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

