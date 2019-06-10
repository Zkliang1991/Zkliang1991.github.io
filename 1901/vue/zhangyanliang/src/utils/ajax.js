import axios from "axios";
// 
// axios.defaults.baseURL = "http://localhost:1901/"; // 基本路径 


// 前端 数据请求  配置 header  添加 token  

import router from "../router";

// import { Toast } from "../styles/vant.css"

import { Toast } from 'vant';


let token = "";
axios.defaults.withCredentials = false;
axios.defaults.headers.common['token'] = token; // 请求头  token 空 
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'; //配置请求头

// import { Indicator, Toast } from 'mint-ui';
import { from } from "_rxjs@6.5.2@rxjs";
// axios 拦截器 
//  添加一个请求拦截器  request 
axios.interceptors.request.use(function(config) {
    let userInfo = window.sessionStorage.userInfo;
    if (userInfo) {
        userInfo = JSON.parse(userInfo);
        token = userInfo.token;
    }
    config.headers.common['token'] = token;

    return config;
}, function(error) {
    Toast.fail(res.data.msg);
    return Promise.reject(error);
});


// 添加一个响应拦截器 response 
axios.interceptors.response.use(function(response) {
    console.log(response);


    if (response.data.code == "401") {
        // 重新登录 
        router.push({ name: 'login' });
    }
    return response;
}, function(error) {
    Toast.fail(res.data.msg);
    return Promise.reject(error);
})

export default axios;