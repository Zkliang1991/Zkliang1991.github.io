
//此页面为获取后台数据的axios


import axios from "axios";  //先导入axios
//设置反向代理之后将此处的基路径注释掉
//axios.defaults.baseURL = "http://60.205.213.16:1901/"; //配置基路径   //默认的   //基础的url
// 前端 数据请求  配置 header  添加 token  
import router from "../router"; //引入的路由组件

let token = "";
axios.defaults.withCredentials = false;
axios.defaults.headers.common['token'] = token;   // 请求头  token 空 
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头 

import { Indicator ,Toast } from 'mint-ui';  //引入弹框组件将弹框组件一次性封装到ajax内
//  添加一个请求拦截器  request 
axios.interceptors.request.use(function (config) {
    let userInfo = window.sessionStorage.userInfo; //将事先存好的token取值取出来
    if(userInfo){    //如果有token的话
        userInfo = JSON.parse(userInfo); // 将token存储到指定位置
        token = userInfo.token;
    }
    config.headers.common['token'] = token;//将后端返回的token值到前端
    Indicator.open({    //弹出框的位置   
        text: '加载中...',
        spinnerType: 'fading-circle',
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
     Indicator.close(); //弹出框全部隐藏掉了
    Toast({message:response.data.msg,duration:500,iconClass:'icon iconfont icon-gouxuanzhong',}); //成功的弹出框的位置
    if(response.data.code =="401"){
        // 重新登录  判断只要是没有登录就跳转首页
        router.push({name:'guide'});
    }
    return response;
  }, function (error) {
    Toast({message:"未知错误-res",duration:500})
    return Promise.reject(error);
  })



export default axios;
 




