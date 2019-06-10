// <template>
//   <div>
//     <Head title="购物车"></Head>

//     <van-checkbox-group class="card-goods" v-model="checkedGoods">
//       <van-checkbox class="card-goods__item" v-for="(item,i) in goods" :key="i" :name="item">
//         <van-swipe-cell :right-width="60">
//           <van-card
//             :title="item.good.title"
//             :desc="item.good.direct"
//             :num="item.count"
//             :price="formatPrice(item.good.money)"
//             :thumb="item.good.img"
//           />
//           <van-button
//             square
//             slot="right"
//             type="danger"
//             text="删除"
//             @click="deleteOne(item.goodId,item.userInfo,goods,i)"
//             class="del"
//           />
//         </van-swipe-cell>
//       </van-checkbox>
//     </van-checkbox-group>

//     <van-submit-bar
//       :price="totalPrice"
//       :disabled="!checkedGoods.length"
//       :button-text="submitBarText"
//       @submit="onSubmit"
//     >
//       <van-dialog v-model="play" title="请根据条形码到就近电影院取票">
//         <p class="printOrder" v-for="(v,k) in dda" :key="k">
//           <barcode :value="v.barcodes" :options="barcode_option" tag="svg"></barcode>
//         </p>
//       </van-dialog>
//     </van-submit-bar>
//   </div>
// </template>

// <script>
// import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast, Dialog } from "vant";

// export default {
//   mounted() {
//     var userInfo = window.sessionStorage.userInfo;
//     if (userInfo) {
//       this.$axios
//         .get("/vue/getCart", {
//           // params: {
//           //   username: this.username
//           // }
//         })
//         .then(res => {
//           this.goods = res.data.result;
//           this.show = true;
//         });
//     } else {
//       this.$router.push({ name: "login" });
//     }
//   },
//   components: {
//     [Card.name]: Card,
//     [Checkbox.name]: Checkbox,
//     [SubmitBar.name]: SubmitBar,
//     [CheckboxGroup.name]: CheckboxGroup
//   },
//   data() {
//     return {
//       checked: true,
//       isLoading: false,

//       checkedGoods: [],
//       goods: [],
//       play: false,

//       barcode_option: {
//         displayValue: true, //是否默认显示条形码数据 //textPosition? :'top', //条形码数据显示的位置

//         background: "#fff", //条形码背景颜色

//         valid: function(valid) {
//           console.log(valid);
//         },

//         width: "1px", //单个条形码的宽度

//         height: "55px",

//         fontSize: "22px" //字体大小
//       },

//       dda: [{ barcodes: Math.floor(Math.random() * 1000000000) }]
//     };
//   },

//   computed: {
//     submitBarText() {
//       const count = this.checkedGoods.length;
//       return "结算" + (count ? `(${count})` : "");
//     },
//     totalPrice() {
//       return this.goods.reduce(
//         (total, item) =>
//           total +
//           (this.checkedGoods.indexOf(item) !== -1
//             ? item.good.money * 100 * item.count
//             : 0),
//         0
//       );
//     }
//   },
//   methods: {
//     formatPrice(price) {
//       return ((price / 100) * 100).toFixed(2);
//     },
//     onSubmit: function() {
//       this.play = !this.play; //取反
//     },
//     deleteOne(goodId, userInfo, goods, index) {
      
//       Dialog.confirm({
//         message: "你真的要删除吗"
//       })
//         .then(() => {
//           // on confirm

//           this.$axios
//             .get("/vue/deleteOne", {
//               params: {
//                 goodId,
//                 userInfo
//               }
//             })
//             .then(res => {
//               console.log(res.data.type);
//               if (res.data.type == 1) {
//                 this.goods.splice(index, 1);
//                 this.checkedGoods.splice(index, 1);
//               }
//             });
//         })

//         .catch(() => {
//           // on cancel
//         });
//     }
//   }
// };
// </script>

// <style lang="less">
// .card-goods {
//   padding: 10px 0;
//   background-color: #fff;
//   &__item {
//     position: relative;
//     background-color: #fafafa;
//     .van-checkbox__label {
//       width: 100%;
//       height: auto; // temp
//       padding: 0 10px 0 15px;
//       box-sizing: border-box;
//     }
//     .van-checkbox__icon {
//       top: 50%;
//       left: 10px;
//       z-index: 1;
//       position: absolute;
//       margin-top: -10px;
//     }
//     .van-card__price {
//       color: #f44;
//     }
//   }
// }
// .van-submit-bar {
//   left: 0;
//   bottom: 49px !important;
//   width: 100%;
//   z-index: 100;
//   position: fixed;
// }
// .card-goods {
//   left: 0;
//   top: 40px !important;
//   width: 100%;
//   z-index: 100;
//   position: fixed;
// }

// // .van-button--normal {
// //   height: 105px !important;
// // }
// .del {
//   height: 100% !important;
// }

// .van-dialog {
//   text-align: center;
// }
// </style>
// 丁仁强 11:01:15
// router.get("/deleteOne",(req,res)=>{
//     var goodId = req.query.goodId;
//     var userInfo = req.query.userInfo;
//     conn((err,db)=>{
//         setError(err,res,db);
//         db.collection("cars").deleteOne({goodId,userInfo},(err,result)=>{
//             console.log(result);
//             setError(err,res,db);
//             res.json({
//                 code: 200,
//                 msg: "删除商品成功",
//                 type:1,
//                 result
//               });
//               db.close();
//         })
//     })
// })
