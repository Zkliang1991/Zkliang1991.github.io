


import axios from "axios";

axios.defaults.baseURL = "http://localhost:1901/" ;  // 基本路径 
import  router from "../router"
 



import { Indicator ,Toast } from 'mint-ui';

axios.interceptors.request.use(function (config) {
    
    Indicator.open({
        text: '加载中...',
        spinnerType: 'triple-bounce'
    });
    return config;
  }, function (error) {
    
    Toast({message:"未知错误-req",duration:500})
    return Promise.reject(error);
});



axios.interceptors.response.use(function (response) {
    console.log(response);

    Indicator.close();
    Toast({message:response.data.msg,duration:500});
    
    return response;
  }, function (error) {
    Toast({message:"未知错误-res",duration:500})
    return Promise.reject(error);
  })

export default axios;