

import axios from "axios";

// axios.defaults.baseURL = "http://localhost:1901/";

import router from "../router"

let token ="";
axios.defaults.withCredentials = false;
axios.defaults.headers.common['token'] = token;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset = Utf-8';   //配置请求头

import {Indicator , Toast} from 'mint-ui';

// axios 拦截器 
//  添加一个请求拦截器  request 
axios.interceptors.request.use(function (config) {
    let userInfo = window.sessionStorage.userInfo;
    if(userInfo){
        userInfo = JSON.parse(userInfo);
        token = userInfo.token;
    }
    config.headers.common['token'] = token;
    Indicator.open({
        text: '加载中...',
        spinnerType: 'triple-bounce'
    });
    return config;
  }, function (error) {
    // Do something with request error
    Toast({message:"未知错误-req",duration:500})
    return Promise.reject(error);
});


// 添加一个响应拦截器 response 
axios.interceptors.response.use(function (response) {
    console.log(response);

    Indicator.close();
    Toast({message:response.data.msg,duration:500});
    if(response.data.code =="401"){
        // 重新登录 
        router.push({name:'login'});
    }
    return response;
  }, function (error) {
    Toast({message:"未知错误-res",duration:500})
    return Promise.reject(error);
  })


export default axios;