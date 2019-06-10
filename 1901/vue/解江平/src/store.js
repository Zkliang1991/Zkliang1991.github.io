import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from "@/utils/ajax"
export default new Vuex.Store({
  state: {
    imgs:[
      "http://101.132.73.191/images/b1.jpg",
      "http://101.132.73.191/images/b2.jpg",
      "http://101.132.73.191/images/b3.jpg",
      "http://101.132.73.191/images/b4.jpg",
  ],
  imgs2:[
      "http://101.132.73.191/images/lun2.jpg",
      "http://101.132.73.191/images/lun2.jpg",
      "http://101.132.73.191/images/lun2.jpg"
  ],
  good_detail: [],
  goods:[],
  shopCarInfo:[],
  car_goods_num:0,
  content:{},
  list:[],
  chosenAddressId:"1"
  },
 
  actions: {
    getAllGoods({commit},{url,params}){
      axios.get(url,{
        params
    }).then(res=>{
      // console.log(res);
        commit("getAllGoods",res.data.result);
    })
    },
    getCarGoods({commit},{url}){
      axios.get(url)
      .then(res=>{
        // console.log(res);
        commit("getCarGoods",res.data.result)
        let arr = res.data.result;
       if(arr){
        let num = 0;
        arr.map((item,i)=>{
          num+=item.count;
        })
        this.state.car_goods_num = num;
       }
      })
    }
  },
  mutations: {
    
    getAllGoods(state,all_goods){
      state.goods = all_goods ;
  },
  getCarGoods(state,shangpin){
    state.shopCarInfo = shangpin;
    // console.log(state.shopCarInfo)
},
  },
  getters:{
    // car_goods_num(state){
    //   let coun = 0;
    //    state.shopCarInfo.map((item,i)=>{
    //      coun+=item.count;
    //    })
    //    return coun;
    // }
  }
})
