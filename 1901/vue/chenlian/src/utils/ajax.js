import axios from "axios";
// axios.defaults.baseURL = "http://localhost:3013/";  // 基本路径
import  router from "../router"

let token = "";
axios.defaults.withCredentials = false;
axios.defaults.headers.common['token'] = token;   // 请求头  token 空 
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头


export default axios;





