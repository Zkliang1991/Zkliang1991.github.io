
import {GET_GOOD,GET_CAR} from './mutation_types'
import axios from "@/utils/axios";

export const goodModule = {
    state:{
        goodList:{   },  
    },
    actions:{
        getThisTypeGoods({commit},{url,params}){
            axios.get(url,{
                params
            })
            .then(res=>{  
                commit(GET_GOOD,res.data.result);
            })
        }  
    },
    mutations:{
        [GET_GOOD](state,goodList){
            state.goodList = goodList;
        }
    }
} 
export const myCarModule={
    state:{   
       checkedGoods:[],
       goods:{

       },
       count:0
    },
    actions:{
        getCarList({commit},{url,params}){
            axios.get(url,{
                params
            }).then(res=>{
                console.log(res.data)
                commit(GET_CAR,res.data.result)
                
            })
        },
         
    },
    mutations:{
        [GET_CAR](state,list){    
            state.goods=list       
           // state.addressList  = {...state.addressList,list };     
        },
        onSave(state){
            state.id+=1
          },
        changeChecked(state,arr){
            state.checkedGoods=arr
        }
    },
    getters:{
        count(state){
            var num=0;
            state.goods.filter((item,index)=>{
               num +=(item.count*1); 
             })
        }
    

       
        // newChosenAddressId(state){
        //     console.log(111111)
        //    console.log("gggggg"+'newChosenAddressId')
        //    if(state.addressList.list.length>0){
        //     return state.addressList.list.filter((item,index)=>{
        //         console.log('------+'+item.isDefault)             
        //           return item.isDefault == true                   
        //     })[0].id;
        //    } 
        // },
        //把getter 里面处理的数据 赋值给chosenAddressId
    }
   
}
