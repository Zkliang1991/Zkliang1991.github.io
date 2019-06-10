

import axios  from "axios";
axios.defaults.baseURL = "http://localhost:1811";
// axios.defaults.baseURL = "http://106.14.199.97:1811";

// 拦截器  
import { Indicator,Toast } from 'mint-ui';
axios.interceptors.request.use(function (config) {
    // 进行 ajax 发送之前 操作  loading 弹框 
    Indicator.open({
        text: "加载中...",
        spinnerType: "triple-bounce"
    });
    return config;
}, function (error) {
  
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
  
    // 调用store hideLoading方法
    Indicator.close();
    return response;
    }, function (error) {
    // 对响应错误做点什么
    Toast({
        message: "网络不好",
        duration: 1000,
    });
    return Promise.reject(error);
});

export const http = axios;