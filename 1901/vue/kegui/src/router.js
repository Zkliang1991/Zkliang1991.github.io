import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import App from './views/index.vue'
import Guide from './views/guide.vue'
import Classify from './views/classify.vue'
import Cart from './views/cart.vue'
import My from './views/my.vue'
import Boyt from './views/boyt.vue'
import Pants from './views/pants.vue'
import Dress from './views/dress.vue'
import Phone from './views/phone.vue'
import Other from './views/other.vue'
import Search from './views/search.vue'
import Good from './views/good.vue'
import Login from './views/login.vue'
import Register from './views/register.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "",
      redirect: { name: "guide" }
    },
    {
      path: '/guide',
      name: "guide",
      component: Guide
    },
    {
      path: '/app',
      component: App,
      children: [
        {
          path: '',
          redirect: { name: "app" }
        },
        {
          path: "home",
          name: "home",
          component: Home
        },
        {
          path: "classify",
          name: "classify",
          component: Classify
        },
        {
          path: "cart",
          name: "cart",
          component: Cart
        },
        {
          path: "my",
          name: "my",
          component: My
        },
      ]
    },
    {
      path: "/boyt",
      name: "boyt",
      component: Boyt
    },
    {
      path: "/pants",
      name: "pants",
      component: Pants
    },
    {
      path: "/dress",
      name: "dress",
      component: Dress
    },
    {
      path: "/phone",
      name: "phone",
      component: Phone
    },
    {
      path: "/other",
      name: "other",
      component: Other
    },
    {
      path: "/search",
      name: "search",
      component: Search
    },
    {
      path: "/good/:goodId",
      name: "good",
      component: Good
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "*",
      redirect: { name: 'guide' }
    }
  ]
})
