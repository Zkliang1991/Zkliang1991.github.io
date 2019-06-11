<template>
  <div>
      <nut-navbar
      >
          <a slot="back-icon">
            <img src="../assets/img/fenlei.png" alt="">
          </a>
          <a slot="more-icon">
            <img src="../assets/img/kefu.png" alt="">
          </a>
      <input type="text" name="" id="search-input" placeholder="搜索"  @click="gotoSearch">
      </nut-navbar>
  </div>
</template>
<script>
export default {
  methods: {
    gotoSearch(){
      this.$router.push({name:"search"});
    }

  }
};
</script>

<style scoped>
div .nut-navbar {
  background-color:coral;
}
#search-input{
  height: 20px;
  background-color:#fff;
  border-radius: 10px 10px 10px 10px; 
  border:coral 2px solid;
  padding-left: 10px;
}
#btn{
  border:none;
  background-color:coral;

}
img{
height: 20px;
width: 20px;
margin-top:10px;
}
</style>


