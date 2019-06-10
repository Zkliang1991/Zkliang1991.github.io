<template>
  <div>
    <Head title="购物车" :backShow="false" id="toubu"></Head>
    <div class="che">
      <van-card
        v-for="(good,index) in goods"
        :key="index"
        :num="good.goodnum"
        :tag="good.goodname"
        :price="good.goodprice"
        :desc="good.good"
        :title="good.goodtitle"
        :thumb="good.goodimg"
        origin-price="10.00"
      >
        <div slot="footer" class="dibu">
          <input type="checkbox" v-model="good.check" class="checkOne" id="checkone">
          <van-button
            size="mini"
            class="shanchu"
            @click="shanchu(good.goodid,good.username,goods,index)"
          >删除</van-button>
        </div>
      </van-card>
    </div>
    <van-submit-bar class="tijiao" :price="total" button-text="提交订单" @submit="onSubmit">
      <input type="checkbox" id="checkall" v-model="checkall" style="margin-left:15px;">
      <label for="checkall">全选</label>
    </van-submit-bar>
  </div>
</template>


<script>
export default {
  data() {
    return {
      money:"",
      goods:[]
    };
  },
  methods: {
    shanchu(goodid, username, goods, index) {
      var mymessage = confirm("你真的要删除吗");
      if (mymessage == true) {
        this.$axios
          .get("/vue/shanChu", {
            params: {
              goodid,
              username
            }
          })
          .then(res => {
            console.log(res.data.type);
            if (res.data.type == 1) {
              this.goods.splice(index, 1);
            }
          });
      } else {
        
      }
    },
    onSubmit() {
      this.$router.push({name:"dizhi"})
    }
  },
  computed: {
    checkall: {
      get() {
        //获取checkone是否被选中的值  反选
        var flag = true;
        this.goods.forEach(good => {
          if (!good.check) {
            flag = false;
          }
        });
        return flag;
      },
      set(val) {
        //根据checkall来监听checkone
        // console.log(val);
        this.goods = this.goods.map(good => {
          good.check = val;
          return good;
        });
      }
    },
    total: {
      get() {
        var total = 0;
        this.goods.forEach(good => {
          if (good.check) {
            // console.log(good)
            total += good.goodprice * good.goodnum;
          }
        });
        return total * 100;
        this.money=total*100;
        console.log(this.money)
      },
      set(val) {
        console.log(val)
      }
    }
  },
  mounted() {
    var username = localStorage.username;
    this.$axios
      .get("/vue/getMyCars", {
        params: {
          username
        }
      })
      .then(res => {
        // console.log(res.data.result);
        this.goods = res.data.result;
        // console.log(this.goods)
      });
  }
};
</script>

<style lang="scss" scoped>
#toubu {
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;
  left: 0;
}
.che {
  margin-top: 60px;
  margin-bottom: 2.4rem;
  .dibu {
    width: 100%;
    overflow: hidden;
    .checkOne {
      margin-top: 10px;
      float: left;
    }
    .shanchu {
      float: right;
    }
  }
}
.tijiao {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 70px;
}
</style>
