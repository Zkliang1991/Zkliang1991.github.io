<template>
    <div class=''>
       <div class="wd">    
           <div class='clearfix '>
               <div class='fr circle' @click='close'>
                  <h1 >X</h1>
               </div>
               <p></p>
                 
           </div>
        <van-card
            :num="value"
            :price="goodsDetail.price"
            :desc="goodsDetail.title"  
            :title="goodsDetail.title"
            :thumb="goodsDetail.img"
        />
        <div class='contentType'>
           <p class='colorSum'> 颜色分类</p>
           <div class="colorType clearfix">
            
      
               <div  v-for="(colorItem,i) in goodsDetail.color" :key='i' >
                <input type="radio" :id="'aa'+i" name='hh' value='colorItem'>
                <label :for="'aa'+i" @click='addcolor(colorItem)'>{{ colorItem}}</label>           
               </div>
	         </div>
              
            <p class='colorSum'> 尺码</p>
            <div class="colorType clearfix">
            <div  v-for="(sizeItem,i) in goodsDetail.size" :key='i' >
            <input type="radio" :id="'jj'+i" name='size' value='sizeItm}'>
            <label :for="'jj'+i" @click='addsize(sizeItem)'>{{ sizeItem}}</label>
          
          </div>


              </div>
       

		
	    </div>
      <p class='colorSum clearfix'> <span>购买数量</span>   <van-stepper v-model="value" /></p>
      <button class='ok' @click='addMycar'> 确定</button>
       </div>
       <div id='tishi'>请选择商品规格</div>
	   <div class="q"></div>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
import { mapActions, mapState } from "vuex";
export default {
  props: ["goodsDetail", "from"],
  data() {
    return {
      colorItem: "",
      sizeItem: "",
      value: "1",
      searchInfo: [" 黑色", " 白色"],
      imageURL:
        "//img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg"
    };
  },
  // computed: {
  //     //...mapState(["nType"])
  //   ...mapstate(["list"])
  // },
  methods: {
    addcolor(item) {
      var tishi = document.getElementById("tishi");
      tishi.style.display = "none";
      this.colorItem = item;

      console.log(this.from);
    },
    addsize(item) {
      var tishi = document.getElementById("tishi");
      tishi.style.display = "none";
      this.sizeItem = item;
    },
    //  ...mapActions(["addCar"]),
    addMycar() {
      if (this.colorItem && this.sizeItem) {
        this.$axios
          .post("/vue/addCart", {
            body: {
              userid: window.sessionStorage.userid,
              count: this.value,
              color: this.colorItem,
              size: this.sizeItem,
              id: this.goodsDetail.id,
              title: this.goodsDetail.title,
              price: this.goodsDetail.price,
              remain: this.goodsDetail.remain,
              img: this.goodsDetail.img
            }
          })
          .then(res => {
            var getNewId = [];
            if (res.data.type == "0") {
              console.log(res)
              getNewId.push(res.data.args._id);
            } else if (res.data.type == "1") {
              getNewId.push(res.data.result.insertedIds[0]);
            }

            if (this.from == "add") {
              this.$emit("close", false);
            } else if (this.from == "buy") {
              this.$router.push({ name: "pay", query: { getNewId: getNewId } });
            }
          });
      } else {
        var tishi = document.getElementById("tishi");
        tishi.style.display = "block";
      }
    },
    close() {
      this.$emit("close", false);
    }
  },
  mounted() {}
};
</script>

<style lang='scss' scoped>
.wd {
  width: 100%;
  height: 9rem;
  background-color: #fff;
  position: fixed;
  /*left: 50%;
			top: 50%;
			margin-left: -150px;
			margin-top: -150px;*/
  left: 0;
  right: 0;
  margin: auto;
  bottom: 0;
  z-index: 10001;
  .circle {
    width: 0.4rem;
    height: 0.4rem;
    line-height: 0.4rem;
    text-align: center;
    border: 1px solid #ccc;
    float: right;
    font-size: 0.3rem;
    margin: 0.2rem;
    border-radius: 50%;
  }

  .ok {
    width: 100%;
    height: 1rem;
    background: #ff4444;
    line-height: 1rem;
    text-align: center;
    border: none;
    position: fixed;
    bottom: 0;
    left: 0;
    color: #fff;
  }
}
.q {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10000;
  background-color: rgb(73, 187, 129);
  background-color: rgba(0, 0, 0, 0.5);
}
.colorSum {
  text-align: left;
  font-size: 0.28rem;
  margin: 0.2rem 0.2rem 0 0.2rem;
  span {
    float: left;
  }
  div {
    float: right;
  }
}
.colorType > div {
  input {
    display: none;
  }
  padding: 0.1rem 0.2rem;
  height: 0.3rem;
  min-width: 0.6rem;
  font-size: 0.12rem;
  line-height: 0.28rem;
  margin: 0.3rem 0.1rem;
  float: left;
  background: #ccc;
  border-radius: 0.1rem;

  input:checked + label {
    color: red;

    /*	color: #fff;
      	background-color: red;
          border:1px solid red;*/
  }
}
#tishi {
  position: fixed;
  bottom: 1.1rem;
  right: 2.5rem;
  border: 1px solid red;
  border-radius: 0.2rem;
  color: red;
  padding: 0.1rem 0.1rem;
  display: none;
  z-index: 200000;
}
.contentType {
  width: 100%;
  height: 4rem;
  overflow-y: scroll;
}
</style>
