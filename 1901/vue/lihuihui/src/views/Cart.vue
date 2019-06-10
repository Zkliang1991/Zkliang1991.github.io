<template>
  <div class="about">
     <Header title="购物车"></Header>
     <MyCart></MyCart>
    <!-- <h1>This is an about page</h1>
    <p>count--- {{ count_1 }} ---{{ count }}<button @click='count_add'> 点击+1</button> </p>
    <p>city---- {{ city_1 }}---{{city}}</p>
    <p>msg---- {{ msg_1 }}</p>
    <p><button @click='change_num'>修改footer</button></p> -->
  </div>
</template>
<script>
import MyCart from '../components/MyCart'
import {mapState,mapActions,mapMutations} from 'vuex';
export default {
  components:{
    MyCart
  },
  computed: {
    // count_1() {
    //   return this.$store.state.count;
    // },
    // city_1() {
    //   return this.$store.state.city;
    // },
    // msg_1() {
    //   return this.$store.state.msg;
    // }

    ...mapState({
      //count_3:state=>state.count  //store.state 当作参数注入
      count_1:'count',
      city_1:'city',
      msg_1 :'msg'
    }),
    ...mapState([   
      // 映射this.count为store.state.count
      'count',
      'city'
    ])
  },
  methods: {

    // count_add() {
    //   this.$store.dispatch("countAdd");
    // },
    change_num() {
      this.$store.dispatch("changeNum");
    },
    ...mapActions({
        count_add:'countAdd' ,     
    })
  }
};
</script>

