//显示返回按钮
const showModule = {
    state: {
        show: true
    },
    actions: {
    },
    mutations: {
    }
}
//改变 head 的文本
const titleModule = {
    state: {
        title: ""
    },
    actions: {
    },
    mutations: {
    }
}
//改变 active 的文本
const activeModule = {
    state: {
        active: 0
    },
    actions: {
    },
    mutations: {
    }
}
//用户名和密码
const loginModule = {
    state: {
        username: "",
        userpwd: ""
    },
    actions: {
        getName({ commit }, { url, params }) {
            axios.post(url, {
                params
            })
            .then(res => {
                commit("getName", res.data.result);
            })
        }
    },
    mutations: {
        getKeyname(state, username) {
            state.username = username;
        },
        getKeypwd(state, userpwd) {
            state.userpwd = userpwd;
        }, 
        getName(state,data) {
           console.log("data",data)
        }
    }
}
//根据type查询
const typeModule = {
    state: {
        type: "手机"
    },
    actions: {

    },
    mutations: {
        getKeytype(state, type) {
            state.type = type;
        }
    }
}
//goods信息
const goodsModule = {
    state: {
        goods: []
    },
    actions: {
    },
    mutations: {
        getKeytype(state, goods) {
            state.goods = goods;
        }
    }
}
//所有商品信息
const keywordModule = {
    state: {
        keyword: ""
    },
    actions: {
    },
    mutations: {
        getKeykeyword(state, keyword) {
            state.keyword = keyword;
        }
    }
}
//根据id查询商品详情
const goodsIdModule = {
    state: {
        goodsID: ""
    },
    actions: {
    },
    mutations: {
        getKeygoodsID(state, goodsID) {
            state.goodsID = goodsID;
        }
    }
}
//商品个数
const numModule = {
    state: {
        num: 1
    },
    actions: {
    },
    mutations: {
        getKeyNums(state, num) {
            state.num = num;
        }
    }
}
//状态,判断登录之后的返回页
const huiModule={
    state:{
        hui:""
    }
}
//地址列表
const siteModule={
    state:{
        site1:Dizhi
    }
}
//用户地址管理
const userSiteModule={
    state: {
        site2:[],
        xGsite:{},
        length:0
    },
    actions: {
        setUserSite({ commit }, { url, params }) {
            axios.post(url, {
                params
            })
            .then(res => {
                commit("setUserSite", res.data.result);
            })
        },
        getUserSite({commit},{url,params}){
            axios.post(url,{
                params
            })
            .then(res=>{
                commit("getUserSite",res.data.result);
            })
        },
        uptUserSite({commit},{url,params}){
            axios.post(url,{
                params
            })
            .then(res=>{
                commit("uptUserSite",res.data.result);
            })
        },
        delUserSite({commit},{url,params}){
            axios.post(url,{
                params
            })
            .then(res=>{
                commit("delUserSite",res.data.result);
            })
        }
    },
    mutations: {
        setUserSite(state,data) {
            console.log("data",data)
        },
        getUserSite(state,data) {
            state.site2=data;
            state.length=data.length;
            console.log(state.length)
        },
        uptUserSite(state,data) {
            console.log("data",data)
        },
        delUserSite(state,data) {
            console.log("data",data)
        }
    }
}

import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/utils/ajax.js';
import Dizhi from "@/assets/dizhi.js"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        nShow: showModule,
        nTitle: titleModule,
        nActive: activeModule,
        nLogin: loginModule,
        ntype: typeModule,
        ngoods: goodsModule,
        nkeyword: keywordModule,
        nGoodsId: goodsIdModule,
        nNum: numModule,
        nHui:huiModule,
        nSite:siteModule,
        nUserSite:userSiteModule
    },
    state: {

    },
    actions: {

    },
    mutations: {

    }
})
