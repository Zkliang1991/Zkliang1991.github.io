
import {GET_USER_CAR} from '@/mutationType/index'
import axios from '@/utils/ajax.js'


const userStoreObj = {
    state:{
        usercar:'',
        usercarSelectNumAll:0,
        usercarSelectMoneyAll:0,
        carnumArr:'' ,//商品总数量 默认为空,不然底部用户在未登录时底部也会显示
        selectedIdArr:'', //共享选中的id
        bottomshan:false ,//是否执行了编辑中的删除
        dingdanMoneyall:'', //当前订单总价格
        dingdanAddress:false, //订单中是否存在地址
        dingdanAddressObj:'', //订单中地址对象
        dingdanCardId:'' , //订单的id
        orderMentRes:''
    },
    actions:{
        getUserCar({commit}){
            axios.post("/vue/yz/usergood").then(res=>{
                commit(GET_USER_CAR,{res})
            })
        },
        getMentOrder({commit},{mentflag}){
            axios.post('/vue/yz/dingdanment',{
                mentflag
            }).then(res=>{
                commit('getMentOrder',{res})
            })
        }
    },
    mutations:{
        [GET_USER_CAR](state,{res}){
            state.usercar=res.data
            if(res.data.type==1){
                let numzhong=0
                let arr = res.data.result
                    arr.forEach((value,index)=>{
                        numzhong+=value.goodnum
                    })
                    state.carnumArr=numzhong
            }else if(res.data.type==2){
                state.carnumArr=""
            }
        },
        getMentOrder(state,{res}){
            if(res.data.type==1){
                state.orderMentRes=res.data.result
            }
            
        },
        carSelectNumMoneySet(state,{num,money}){
            //此mutation为了将已选择的商品数量和价钱给父组件的底部使用
            state.usercarSelectNumAll=num
            state.usercarSelectMoneyAll=money
        },
        carSelectNumMoneyKong(state){
            //此mutation为了解决切换组件后商品和价钱没有重置的bug
            state.usercarSelectNumAll=0
            state.usercarSelectMoneyAll=0
        },
        carNumArrKong(state){
            //将底部footer购物车数量微标清空
            state.carnumArr=''
        },
        selectedIdArr(state, {arr}){
            state.selectedIdArr=arr
        },
        selectedIdArrKong(state){
            state.selectedIdArr=''
        },
        bottomshanFn(state){
            state.bottomshan=true
        },
        bottomshanFntwo(state){
            state.bottomshan=false
        },
        dingdanMoneyall(state,{moneyall}){
            state.dingdanMoneyall=moneyall
        },
        dingdanAddress(state,{flag}){
            state.dingdanAddress=flag
        },
        dingdanAddressObj(state,{obj}){
            state.dingdanAddressObj=obj
        },
        dingdanCardId(state,{id}){
            state.dingdanCardId=id
        }
    },
    getters:{

    }
}

export default userStoreObj