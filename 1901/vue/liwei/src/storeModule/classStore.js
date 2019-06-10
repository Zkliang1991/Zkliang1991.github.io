
import {CHANGE_CLASS_TITLE} from '@/mutationType/index'


const classStoreObj = {
    state:{
        classHeaderTitle:'女装',
        flgaIndexNum:0,
    },
    actions:{

    },
    mutations:{
        [CHANGE_CLASS_TITLE](state,obj){
            let {
                title,
                num
            } = obj
            state.classHeaderTitle=title
            state.flgaIndexNum=num
        }
    },
    getters:{

    }
}

export default classStoreObj