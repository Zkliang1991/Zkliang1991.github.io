<template>
  <div class="address">
    <commenheader dizhi="地址管理"></commenheader>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      
      @add="onAdd"
      @edit="onEdit"
    />
    <div class="save" @click="goorder">回到结算页面</div>
  </div>
</template>

<script>
import commenheader from "../components/commonheader.vue";
export default {
  data() {
    return {
  
    };
  },

  methods: {
    onAdd() {
      this.$router.push({name:"address"});
    },

    onEdit(item, index) {
      
    },
    goorder(){
      this.$router.push({name:"order"});
    }
  },
  computed:{
      list(){
          return this.$store.state.list;
      },
       chosenAddressId:{
        get(){
        return this.$store.state.chosenAddressId;
        },
        set(val){
          this.$store.state.chosenAddressId = val;
        }
      }
  },
  components:{
      commenheader
  }
};
</script>

<style lang="scss" scoped>
.address{
  height: 100%;
  width: 50%;
  .save{
    width: 100%;
    height: 50px;
    line-height: 50px;
    position: fixed;
    bottom: 50px;
    left: 0;
    color: white;
    background-color: black;
  }
}
</style>
