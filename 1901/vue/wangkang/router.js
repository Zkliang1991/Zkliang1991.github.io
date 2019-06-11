import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import news from './views/news.vue'
import Mine from './views/mine.vue'
import Classify from './views/classify.vue'
import Car from './views/car.vue'
import SearchPage from "./views/search.vue"
import Goodsdetails from "./views/goodsdetails.vue"
import Minecenter from "./views/minecenter.vue"
import Register from "./views/register.vue"
import Newcar from "./views/newcar.vue"
import Connect from "./views/connect.vue"
import Address from "./views/address.vue"
import Paypage from "./views/paypage.vue"
import Lovely from "./views/lovely.vue"
import AddressPage from "./views/addresspage.vue"

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'news',
      component: news
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    { path: "/home", name: "home", component: Home }
    ,
    { path: "/mine", name: "mine", component: Mine }
    ,
    { path: "/car", name: "car", component: Car }
    ,
    { path: "/classify", name: "classify", component: Classify },
    ,
    { path: "/search", name: "search", component: SearchPage },
    { path: "/register", name: "register", component: Register },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    { path: "/goodsdetails", name: "goodsdetails", component: Goodsdetails },
    { path: "/minecenter", name: "minecenter", component: Minecenter },
    { path: "/newcar", name: "newcar", component: Newcar },
    { path: "/connect", name: "connect", component: Connect },
    { path: "/address", name: "address", component: Address },
    { path: "/paypage", name: "paypage", component: Paypage},
    { path: "/lovely", name: "lovely", component: Lovely},
    { path: "/addresspage", name: "addresspage", component: AddressPage}
  ]
})
