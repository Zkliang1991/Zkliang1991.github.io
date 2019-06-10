<template >
    <div class='listbox' >
      <!-- <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore"> -->
        <div>
           <ul >              
              <li  v-for="(good,i) in goodList" :key='i' class='clearfix'>                
                <Item :good="good"></Item>
              </li>                               
          </ul>
          <p @click='getmore' >{{msg}}</p>
        </div>
      <!-- </mt-loadmore> -->
        <p  class='boxBtn' v-if='flag'> 
            <span  v-for='(item,i) in searchInfo' class='smallBtn' :key='i' @click='toserch'> {{item}}</span>
        </p>
    </div>
</template>
<script>
import Item from "./Item";

import { Toast } from "mint-ui";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  props: ["goods"],
  data() {
    return {
      msg: "加载更多",
      searchInfo: [],
      flag: true,
      pageNumber: 1,
      pageSize: 8,
      goodList: []
    };
  },
  components: {
    Item
  },
  computed: {
    ...mapState(["type", "nType"])
  },
  methods: {
    //innerText
    ...mapActions(["getThisTypeGoods"]),
    toserch(e) {
      this.$axios
        .get("/vue/searchGoods", {
          params: {
            keyword: e.target.innerText
          }
        })
        .then(res => {
          this.goods = res.data.result;
          if (this.goods.length > 0) {
            this.flag = false;
          }
        });
    },
    getmore() {
      this.pageNumber = this.pageNumber + 1;
      //   this.getThisTypeGoods({
      //   url: "/vue/getGoodList",
      //   params: { keyword: this.type,pageNumber:this.pageNumber,pageSize:this.pageSize }
      // });
      if (this.msg == "全部加载完啦") {
        return;
      }
      this.$axios
        .get("/vue/getGoodList", {
          params: {
            keyword: this.type,
            pageNumber: this.pageNumber,
            pageSize: this.pageSize
          }
        })
        .then(res => {
          if (res.data.result < 8) {
            this.msg = "全部加载完啦";
          }
          this.goodList = this.goodList.concat(res.data.result);
        });
      //  this.goodList=this.goodList.concat(this.nType.goodList)
      console.log(this.goodList);
    },


    // loadBottom() {
    //   console.log("上拉加载更多");
    //   this.allLoaded = true; // 若数据已全部获取完毕
    //   setTimeout(() => {
    //     var length = this.goods.length; // 20     16
    //     var num = Math.floor(Math.random() * (length - 4));
    //     console.log(num);
    //     // 这里的 随机求 值 没有问题
    //     var arr = this.goods.slice(num, 4);
    //     var goods = this.goods.concat(arr); // 子组件 修改 props
    //     this.$emit("changegoods", goods);
    //     this.allLoaded = false;
    //     this.$refs.loadmore.onBottomLoaded();
    //     Toast({
    //       message: "上拉加载更多-成功",
    //       duration: 500
    //     });
    //   }, 1500);
    // }
  },
  mounted() {
  
    this.$axios
      .get("/vue/getGoodList", {
        params: {
          keyword: this.type,
          pageNumber: this.pageNumber,
          pageSize: this.pageSize
        }
      })
      .then(res => {
        this.goodList = res.data.result;
      });
    // this.getThisTypeGoods({
    //   url: "/vue/getGoodList",
    //   params: { keyword: this.type,pageNumber:this.pageNumber,pageSize:this.pageSize }
    // });

    if (localStorage.searchInfo) {
      this.searchInfo = JSON.parse(localStorage.searchInfo);
    }
  }
};
</script>
<style>
</style>
<style lang='scss' scoped>
.listbox {
  li {
    width: 100%;
    height: 100%;
    margin: 0.2rem 0;
    img {
      width: 100%;
    }
  }
  .boxBtn {
    padding: 0 0.3rem;
  }
  .smallBtn {
    padding: 0.1rem 0.2rem;
    height: 0.3rem;
    min-width: 0.6rem;
    font-size: 0.12rem;
    line-height: 0.28rem;
    margin: 0.3rem 0.1rem;
    float: left;
    background: #fff;
    border-radius: 0.1rem;
  }
}
</style>


