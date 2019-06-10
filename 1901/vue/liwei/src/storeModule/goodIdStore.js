
import {GET_GOOD_INFO,GET_GOOD_INFO_XIANG} from '@/mutationType/index'
import axios from '@/utils/ajax.js'

const classStoreObj = {
    state:{
        goodInfo:"",   //此处为商品的基本信息
        goodArtical:"", //此处为商品的详细信息
        goodid:"",
        gouwucheid:'', //更新购物车商品时共享该购物车商品的id
    },
    actions:{
        getGoodInfo({commit},{goodid}){
            axios.get("/vue/gooditem",{
                params:{
                    goodid
                }
            }).then(res=>{
                commit(GET_GOOD_INFO,{res,goodid})
            })
        },
        getGoodArtical({commit},{goodid}){
            axios.get("/vue/gooditemxiang",{
                params:{
                    goodid
                }
            }).then(res=>{
                commit(GET_GOOD_INFO_XIANG,{res})
            })
        }
    },
    mutations:{
        [GET_GOOD_INFO](state,{res,goodid}){
            state.goodInfo=res.data.result
            state.goodid =goodid
            window.localStorage.goodid = goodid
        },
        [GET_GOOD_INFO_XIANG](state,{res}){
            state.goodArtical=res.data.result
        },
        clearshuju(state){
            state.goodInfo="",
            state.goodArtical=""
        },
        gouwucheidg(state,{id}){
            state.gouwucheid=id
        }
    },
    getters:{

    }
}

export default classStoreObj