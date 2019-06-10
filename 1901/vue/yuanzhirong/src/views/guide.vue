


<template>
  <div>
        <span class="jump" @click="gotohome">{{count}} 跳过</span>
        <img src="../assets/images/guide.png" alt="" class="img">
  </div>
</template>


<script>
export default {
  name: "guide",
  data() {
    return {
      count: 5
    };
  },
  methods: {
    gotoindex(id) {
      if (id == this.imgs.length - 1) {
        this.$router.push({ name: "home" });
      }
    },
    gotohome() {
      this.$router.push({ name: "home" });
    }
  },
  mounted() {
    //   if(localStorage.count){
    //       localStorage.count++;
    //       if(localStorage.count>3){
    //           this.$router.push({name:'home'});
    //       }
    //   }else{
    //       localStorage.count = 1;
    //   }
    setInterval(() => {
      this.count--;
      if (this.count == 0) {
        this.gotohome();
      }
    }, 1000);
  }
};
</script>

<style scoped>
.img {
  width: 100%;
  height: 100%;
}
.jump {
  position: fixed;
  right: .5rem;
  top: .5rem;
  width: 1.5rem;
  height: .5rem;
  line-height: .5rem;
  background-color: #cdcdcd;
  border-radius: 2rem;
  z-index: 100;
}
</style>
