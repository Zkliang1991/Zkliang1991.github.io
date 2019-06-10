
import axios from "axios";
import  router from "../router"
 
let token = "";
axios.defaults.withCredentials = false;
axios.defaults.headers.common['token'] = token; 
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';



axios.interceptors.request.use(function (config) {
    let userInfo = window.sessionStorage.userInfo;
    
    if(userInfo){
        userInfo = JSON.parse(userInfo);
        token = userInfo.token;
    }
    config.headers.common['token'] = token;
    return config;
  }, function (error) {
    return Promise.reject(error);
});


axios.interceptors.response.use(function (response) {
    if(response.data.code =="401"){
        router.push({name:'login'});
    }
    return response;
  }, function (error) {
    
    return Promise.reject(error);
  })

export default axios;