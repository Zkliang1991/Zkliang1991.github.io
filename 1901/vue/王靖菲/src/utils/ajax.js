import axios from "axios";

//axios.defaults.baseURL = "http://localhost:1687/";  // 基本路径用了反向代理可以不写这个


// 前端 数据请求  配置 header  添加 token  

import  router from "../router"
 
//axios拦截器
let token = "";
axios.defaults.withCredentials = false;
axios.defaults.headers.common['token'] = token;   // 请求头  token 空 
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头



import { Toast } from 'vant';

//作用前端请求之前开启弹框,结束之后关闭弹框,每个请求都会显示
// 添加一个请求拦截器request,每次请求之前拦截一次
axios.interceptors.request.use(function (config) {
    let userInfo = window.sessionStorage.userInfo;
    if(userInfo){
        userInfo = JSON.parse(userInfo);
        token = userInfo.token;
        console.log(token);
    }
    config.headers.common['token'] = token;
    Toast.loading({
        mask: true,
        message: '加载中..',
        mask:false
    })
    return config;
  }, function (error) {
    // Do something with request error
    Toast({message:"未知错误-req",duration:500})
    return Promise.reject(error);
});


// //添加一个响应拦截器 response 
axios.interceptors.response.use(function (response) {
    console.log(response);

    Toast({message:response.data.msg,duration:500});
    if(response.data.code =="401"){//登录超时
        // 重新登录 
        router.push({name:'loginindex'});
    }
    return response;
  }, function (error) {
    Toast({message:"未知错误-res",duration:500})
    return Promise.reject(error);
  })
export default axios;