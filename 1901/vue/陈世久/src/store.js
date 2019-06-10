import Vue from 'vue'
import Vuex from 'vuex'

// 安装 vuex 
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
			goodid:'',
			city:"",
			
			adress:[{
          id:1,
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        }]
  },
  
  actions: {
	changeadress({commit},adress){
	    commit(changeAdress,adress);
	},
  },
  mutations: {
  		changeAdress(state,adress){
  		    state.adress.push({name:adress.name,tel:adress.tel,address:adress.addressDetail,
id:state.adress.length+1}); 
  		},	
  },
})
export default store;
