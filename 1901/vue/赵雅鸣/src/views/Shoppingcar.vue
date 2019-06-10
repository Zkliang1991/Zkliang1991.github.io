<template>
  <div>
    <Head title="购物车" :flag="false"></Head>
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <van-checkbox class="card-goods__item" v-for="(item,i) in shoppinginfo" :key="i" :name="item">
        <van-swipe-cell :right-width="60" :on-close="onClose" >
        <van-card
          :title="item.goodname"
          :desc="item.desc"
          :num="item.count"
          :price="formatPrice(item.goodprice)"
          :thumb="item.goodimg"
        >
        </van-card>
        <div class="foo">
    <van-button size="mini" @click.stop="add(item.goodId,i,$event,item.count)"  >+</van-button>
    
    <van-button size="mini" @click.stop="reduce(item.goodId,i,$event,item.count)">-</van-button>
  </div>
  <van-button
    style="height:100%"
    square
    slot="right"
    type="danger"
    text="删除"
  />
  </van-swipe-cell>
      </van-checkbox>
    </van-checkbox-group>
    <van-submit-bar class="vansubmitbar"
      :price="totalPrice"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
    />
   <Foot></Foot>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast ,Dialog} from "vant";

export default {
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup
  },
  data() {
    return {
      value: 1,
      checkedGoods: [],
      goods: [
        {
          id: "1",
          goodname: "进口香蕉",
          desc: "约250g，2根",
          goodprice: 200,
          count: 1,
          goodimg:
            "https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg"
        }
      ]
    };
  },
  computed: {

    submitBarText() {
      const count = this.checkedGoods.length;
      return "结算" + (count ? `(${count})` : "");
    },
    totalPrice() {
      return this.shoppinginfo.reduce(
        (total, item) =>
          total +
          (this.checkedGoods.indexOf(item) !== -1
            ? item.goodprice * item.count * 100
            : 0),
        0
      );
    },
    ...mapState(["shoppinginfo"])
  },
  methods: {
    formatPrice(price) {
      return ((price / 100) * 100).toFixed(2);
    },
    add(id,i,e,count){
      console.log(id)
      e.path[0].parentNode.children[1].removeAttribute('disabled')
      this.shoppinginfo[i].count++
      this.changecount({url:"/vue/addcartcount",params:{goodId:id},num:{count:count}})
    },
    reduce(id,i,e,count){
      console.log(this.shoppinginfo[i].count)
      if(this.shoppinginfo[i].count<=2){
        e.path[0].setAttribute('disabled', 'disabled')
      }
      this.shoppinginfo[i].count--
      this.changecount({url:"/vue/reducecartcount",params:{goodId:id},num:{count:count}})
    },
    onClose(clickPosition, instance){
      console.log(instance)
      var _id =instance.$parent.name._id
       console.log(instance.$parent.$el)
      switch(clickPosition){
        case 'outside':
          instance.close();
          break;
        case 'right':
          Dialog.confirm({
            message: '宁确定要`````删除我吗？ψ(*｀ー´)ψ'
          }).then(() => {
            Dialog.confirm({
            message: '再给宁一次机会,确定吗？ヽ(｀Д´)ﾉ︵ ┻━┻ '
          }).then(() => {
            Dialog.confirm({
            message: '宁配么！！宁配么！！宁配么！！宁配么！！宁配么！！宁配么！！？(｡•ˇ‸ˇ•｡)滚犊子'
          }).then(() => {
            this.delgoods({url:"/vue/delgoods",params:{_id}})
            instance.$parent.$el.remove()
            instance.close();
          });
            // this.delgoods({url:"/vue/delgoods",params:{_id}})
            // instance.$parent.$el.remove()
            // instance.close();
          });
            // this.delgoods({url:"/vue/delgoods",params:{_id}})
            // instance.$parent.$el.remove()
            
            // instance.close();
          });
          break;
      }
    },
    onSubmit() {
      var goods=this.checkedGoods
      var total=this.totalPrice
      console.log(this.totalPrice)
      console.log(goods)
      this.$store.commit("buygoods",{goods,total})
      this.$router.push({name:"jiesuan"})
      
    },
    ...mapActions(["getshoppingcar","changecount","delgoods"])
  },
  created() {
    this.getshoppingcar({ url: "/vue/getshoppingcar" });
  },
  mounted() {
    
    // this.goods = this.shoppinginfo;
    // console.log(123333);
    // console.log(this.goods);
  }
};
</script>

<style lang="less">
input { 
  width: 30px;
   border: none;
   outline: none;
   -webkit-appearance: none;
}
.card-goods {
  padding: 10px 0;
  margin-bottom: 50px;
  background-color: #fff;
  &__item {
    position: relative;
    background-color: #fafafa;
    .van-checkbox__label {
      width: 100%;
      height: auto; // temp
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }
    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }
    .van-card__price {
      color: #f44;
    }
  }
}
.foo{
  position: absolute;
  top: 70px;
  right: 12px;
}
.vansubmitbar{
  position: absolute !important;
  bottom: 50px !important;
  
}
</style>
