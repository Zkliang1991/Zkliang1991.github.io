import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
import Giute from './views/giute.vue'
import Zhenai from './views/zhenai.vue'
import Good from './views/good.vue'
import Register from './views/register.vue'
import Qiuhun from './views/qiuhun.vue'
import Jiance from './views/jiance.vue'
import Login from './views/login.vue'
import Jiehun from './views/jiehun.vue'
// import Tansuo from './views/tansuo.vue'
import Xiangxi from './views/xiangxi.vue'
import Shoppingcar from './views/shoppingcar.vue'
import Jiesuan from './views/jiesuan.vue'
import AA from './views/a.vue'
import Editaddress from './views/editaddress.vue'
import Addresslist from './views/addresslist.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "",
      redirect: {
        name: "zhenai"
      }
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      redirect: { name: "zhenai" },
      children: [
        {
          path: "zhenai",
          name: "zhenai",
          component: Zhenai,
        },

        {
          path: "qiuhun",
          name: "qiuhun",
          component: Qiuhun,
        },
      ]
    },
    {
      path: "/good",
      name: "good",
      component: Good,
    },
    {
      path: "/aa",
      name: "aa",
      component: AA,
    },
    {
      path: "/addresslist",
      name: "addresslist",
      component: Addresslist,
    },
    {
      path: "/editaddress",
      name: "editaddress",
      component: Editaddress,
    },
    {
      path: "/jiesuan",
      name: "jiesuan",
      component: Jiesuan,
    },
    {
      path: "/shoppingcar",
      name: "shoppingcar",
      component: Shoppingcar,
    },
    {
      path: "/jiance",
      name: "jiance",
      component: Jiance,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/xiangxi",
      name: "xiangxi",
      component: Xiangxi,
    },
    {
      path: "/jiehun",
      name: "jiehun",
      component: Jiehun,
    },
    {
      path: "/giute",
      name: "giute",
      component: Giute,
    }
  ]
})
