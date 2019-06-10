import axios from "axios";

import router from "../router"


let token="";
axios.defaults.withCredentials = false;
axios.defaults.headers.common['token'] = token;   // 请求头  token 空 
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头

import {Indicator,Toast} from "vant"
// axios 拦截器 
//  添加一个请求拦截器  request 
axios.interceptors.request.use(function (config) {
    //获取存储的token，判断是否有存储的token   每次做请求的时候带过header 去后台对比判断token===》checklogin
    let userInfo = window.localStorage.userinfo;
    // console.log("token:")
    // console.log(window.localStorage.userinfo)
    if(userInfo){
        // userInfo = JSON.parse(userInfo);
        token = userInfo;
    }
    config.headers.common['token'] = token;
    
    // Toast.loading({
    //   mask: true,
    //   message: '加载中...'
    // });
    return config;
  }, function (error) {
    // Do something with request error
    Toast({message:"未知错误-req",duration:500})
    return Promise.reject(error);
});


// 添加一个响应拦截器 response 
axios.interceptors.response.use(function (response) {
    console.log(response);

    // Indicator.close();
    // if(!!response.data.msg){
    //   Toast({message:response.data.msg,duration:500});
    // }   
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