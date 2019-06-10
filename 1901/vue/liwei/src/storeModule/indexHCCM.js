
import {CHANGE_FOOTE_SELECT} from './../mutationType/index'

const storeObj = {
    state:{
        selected:'home'
    },
    actions:{

    },
    mutations:{
       [CHANGE_FOOTE_SELECT](state,actived){
       
            state.selected=actived
            
       } 
    }
}

export default storeObj