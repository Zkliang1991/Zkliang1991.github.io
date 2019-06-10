
import {CHANGE_SEARCH_RESULT} from './../mutationType/index'


import axios from './../utils/ajax'

const storeObj = {
    state:{
        search:'home',
        searchZhuang:false,
        searchLength:0,
        searchZhi:'', //记录搜索的值,方便添加更多时使用
        searchedFlag:false //记录是否搜索过
    },
    actions:{
        searchGo(content,objs){
            let {
                searchstr,
                pagenumshi,
                paixu,
                guize,
                routerAcitive,
                changFlag
            } = objs
            axios.get("/vue/search",{
                params:{
                    strqu:searchstr,
                    page:pagenumshi,
                    paixu,
                    guize
                }
            }).then(res=>{
                let obj = {
                    res,
                    searchstr,
                    routerAcitive,
                    changFlag
                }
                content.commit(CHANGE_SEARCH_RESULT,obj)
            })
        } 
    },
    mutations:{
       [CHANGE_SEARCH_RESULT](state,result){
           let {
            res,
            searchstr,
            routerAcitive,
            changFlag
           } = result
           if(res.data.type==0){
                state.search=""
                state.searchZhuang=false
                state.searchLength=0
                state.searchZhi=""
                state.searchedFlag=true
           }else{
               //此处深度监听 直接修改对象
                state.search=res
                state.searchZhuang=true
                state.searchLength=res.data.result.length
                state.searchZhi=searchstr
                state.searchedFlag=false

                if(routerAcitive!='class'){
                    if(searchstr!=""){
                        if(!changFlag){
                            if(localStorage.arrHistory){
                                let arr = JSON.parse(localStorage.arrHistory)
                                if(arr.indexOf(searchstr)==-1){
                                    arr.push(searchstr)
                                    let arrJson = JSON.stringify(arr)
                                    localStorage.arrHistory=arrJson
                                }
                            }else{
                                let arrtwo = []
                                arrtwo.push(searchstr)
                                let arrtwoJson = JSON.stringify(arrtwo)
                                localStorage.arrHistory=arrtwoJson
                            }
                        }
                    }
                }
                
           }  
       },
       qingkong(state){
           //此mutation用来清空已搜索的状态
            state.searchZhuang=false
       }
    }
}

export default storeObj