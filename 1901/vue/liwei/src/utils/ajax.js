import Axios from "axios"

import Vue from 'vue'
import { Toast } from 'vant';
Vue.use(Toast);

import { Dialog } from 'vant';
Vue.use(Dialog)

import router from './../router'

let token = "";
Axios.defaults.withCredentials = false;
Axios.defaults.headers.common['token'] = token;   // 请求头  token 空 
Axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头

    //设置请求拦截器
    Axios.interceptors.request.use((config)=>{
        let userinfo = window.sessionStorage.userinfo;
        if(userinfo){
            userinfo = JSON.parse(userinfo);
            token = userinfo.token;
        }
        Toast.loading({
            duration: 1000,       // 持续展示 toast
            forbidClick: true, // 禁用背景点击
            loadingType: 'spinner',
            message: '加载中'
        });
        config.headers.common['token'] = token;
        return config
    },(err)=>{
        Toast.fail('未知错误');
        return Promise.reject(err);
    })

    //设置响应拦截器
    Axios.interceptors.response.use(function (response) {
        if(response.data.code =="401"){
            // 重新登录 
            Dialog.confirm({
                title: '登录验证',
                message: '您还没有登录哦,是否立即去登录'
              }).then(() => {
                router.push({name:'login'});
              }).catch(() => {
            });
            
        }
        
        return response;
      }, function (error) {
        Toast.fail('未知错误');
        return Promise.reject(error);
      })

      

export default  Axios