// Vuex 代码配置  
// Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式

// 它采用集中式 (Object) 存储管理应用的所有组件的状态  相应的规则保证状态以一种可预测的方式发生变化

// 每一个 Vuex 应用的核心就是 store（仓库）

// store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)

// Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新

// 你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation


import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import { GOTOCITY } from '@/utils/mutation'
export default new Vuex.Store({
    state: { //Vuex使用单一状态树  所有组件的状态  存储state
        cartNum: 0,
        // msg:'',
    },
    actions: {
        carNumDesc({ commit }, num) {
            commit("carNumDesc", num);
        },
        // tjMsg({commit},message){
        //     commit('tjMsg',message);
        // },

        // this.$axios.get('')
        // CountNum(context) {
        //     console.log('进入action');
        //     context.commit('changeCount') //提交mutation
        //         // console.log(this.$store);
        // },
        // CountReduce(context, payload) { //payload为修改的参数
        //     context.commit('ReduceNum', payload);
        // },
        // cartNumAdd({ commit }, num) {
        //     commit('cartNumAdd', num);
        // },
        // cartNumDesc({ commit }, num) {
        //     commit('cartNumDesc', num);
        // },
    },
    mutations: {
        carNumDesc(state, num) {
            state.cartNum += num;
        },
        // tjMsg(state,message){
        //     state.msg += message
        // }
        // changeCount(state) {
        //     console.log('进入mutation');
        //     state.count++;
        // },
        // ReduceNum(state, payload) {
        //     state.count -= payload;
        // },
        // cartNumAdd(state, payload) {
        //     state.cartNum += payload;
        // },
        // cartNumDesc(state, payload) {
        //     state.cartNum -= payload;
        // },
        // changeCity(state, city) {
        //     state.city = city;
        // },

        // [GOTOCITY](state, city) {
        //     state.city = city;
        // }
    },

    getters: {

    }
})