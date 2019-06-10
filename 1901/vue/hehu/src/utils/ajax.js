import axios from 'axios'

// axios.defaults.baseURL = "https://v1.itooi.cn";


import {Indicator,Toast} from 'mint-ui'

let token = "";
axios.defaults.withCredentials = false;
axios.defaults.headers.common['token'] = token;   // 请求头  token 空 
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头

axios.interceptors.request.use(function(config){
    let userInfo = window.sessionStorage.userInfo;
    if(userInfo){
        userInfo = JSON.parse(userInfo);
        token = userInfo.token;
    }
    config.headers.common['token'] = token;
    Indicator.open({
        text:'玩命加载中...',
        spinnerType:'triple-bouncd'
    });
    return config;
},function(err){
    Toast({message:'未知错误',duration:500,position: 'bottom'})
    return Promise.reject(err)
})


axios.interceptors.response.use((response)=>{
    Indicator.close();
    if(response.data.code == 401){
        localStorage.removeItem('username');
        sessionStorage.removeItem('userInfo')
    }
    Toast({position: 'bottom',message:response.data.msg,duration:500})
    return response
},(err)=>{
    Toast({position: 'bottom',message:'未知错误',duration:500})
    return Promise.reject(err)
})
// 前端 数据请求  配置 header  添加 token  

// import  router from "../router"
 


// import { Indicator ,Toast } from 'mint-ui';
// // axios 拦截器 
// //  添加一个请求拦截器  request 
// axios.interceptors.request.use(function (config) {
    // let userInfo = window.sessionStorage.userInfo;
    // if(userInfo){
    //     userInfo = JSON.parse(userInfo);
    //     token = userInfo.token;
    // }
    // config.headers.common['token'] = token;
//     Indicator.open({
//         text: '加载中...',
//         spinnerType: 'triple-bounce'
//     });
//     return config;
//   }, function (error) {
//     // Do something with request error
//     Toast({message:"未知错误-req",duration:500})
//     return Promise.reject(error);
// });


// // 添加一个响应拦截器 response 
// axios.interceptors.response.use(function (response) {

//     Indicator.close();
//     Toast({message:response.data.msg,duration:500});
//     if(response.data.code =="401"){
//         // 重新登录 
//         // router.push({name:'login'});
//     }
//     return response;
//   }, function (error) {
//     Toast({message:"未知错误-res",duration:500})
//     return Promise.reject(error);
//   })

export default axios;

