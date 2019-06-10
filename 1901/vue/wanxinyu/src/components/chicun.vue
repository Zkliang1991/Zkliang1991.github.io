<template>
    <div class="chicun">
        <div>
            <span @click="d=0" :style="d==0?'background-color: #988484;color: #fff':''">XS</span>
            <span @click="d=1" :style="d==1?'background-color: #988484;color: #fff':''">S</span>
            <span @click="d=2" :style="d==2?'background-color: #988484;color: #fff':''">M</span>
            <span @click="d=3" :style="d==3?'background-color: #988484;color: #fff':''">L</span>
            <span @click="d=4" :style="d==4?'background-color: #988484;color: #fff':''">XL</span>
            <span @click="d=5" :style="d==5?'background-color: #988484;color: #fff':''">XXL</span>
            <span @click="d=6" :style="d==6?'background-color: #988484;color: #fff':''">XXXL</span>
            <span @click="d=7" :style="d==7?'background-color: #988484;color: #fff':''">4XL</span>
            <span @click="d=8" :style="d==8?'background-color: #988484;color: #fff':''">5XL</span>
            <span @click="d=9" :style="d==9?'background-color: #988484;color: #fff':''">6XL</span>
            <span @click="d=10" :style="d==10?'background-color: #988484;color: #fff':''">7XL</span>
            <span @click="d=11" :style="d==11?'background-color: #988484;color: #fff':''">8XL</span>
        </div>
    </div>
    
</template>


<script>
export default {
  props: ["mid", "goodchicun"],
  data() {
    return {
      chicunid: "a",
      d:99
    };
  },
  mounted() {},
  methods: {
    chicuncolor(b, i) {
      console.log(i);
      this.chicunid = i;
      localStorage.chicun = b;
    }
  }
};
</script>

<style scoped>
.chicun span {
  width: 1rem;
  margin: 0.1rem;
  text-align: center;
  border-radius: 0.1rem;
  border: 1px solid #ddd;
  float: left;
}
</style>

